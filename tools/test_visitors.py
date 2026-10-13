"""Deterministic browser test for the site-wide and per-course visitor counters.

The Abacus counting API is replaced by an in-memory fake shared across
browser contexts, so the test runs offline and proves the behavior that
matters:

* a new browser sends exactly one ``hit`` and shows ``baseline + value``;
* reloading the same browser only sends ``get`` and does not increment;
* a second, independent browser is counted once and both browsers then show
  the same server-backed total;
* a stale, inflated local cache is overwritten by the server value;
* a failed ``hit`` is retried on the next load instead of being lost;
* every course with a live site shows its own server value, read with a
  ``get`` only (the landing page never sends ``hit`` for a course key), a
  missing key shows 0, a failed read shows no number, and a stale inflated
  cache is replaced by the server value.

Run with:

    python tools/test_visitors.py

or under pytest:

    pytest tools/test_visitors.py
"""

from __future__ import annotations

import json
import re
from dataclasses import dataclass, field
from pathlib import Path

from playwright.sync_api import Browser, BrowserContext, Page, Request, Route, sync_playwright

INDEX_URI = Path(__file__).resolve().parent.parent.joinpath("index.html").as_uri()
APP_JS = Path(__file__).resolve().parent.parent.joinpath("app.js").read_text(encoding="utf-8")
BASELINE = int(re.search(r"baseline:\s*(\d+)", APP_JS).group(1))
NAMESPACE = "alisadeghiaghili.github.io"
SITE_KEY = "aghili-labs-unique-visitors"
ABACUS_HOST = "abacus.jasoncameron.dev"
COURSE_CACHE_KEY = "aghili-labs:course-visitors:v7"
LIVE_STATUSES = {"published", "near_complete"}
# Every course entry in app.js, as (slug, status).
COURSES = re.findall(r'slug:\s*"([^"]+)",.*?status:\s*"(\w+)"', APP_JS, re.DOTALL)
LIVE_SLUGS = [slug for slug, status in COURSES if status in LIVE_STATUSES]
OTHER_SLUGS = [slug for slug, status in COURSES if status not in LIVE_STATUSES]
N_COURSES = len(LIVE_SLUGS)


def course_key(slug: str) -> str:
    """Return the Abacus key a course site increments.

    Args:
        slug: Course slug, e.g. ``"learn-dvc"``.

    Returns:
        The counter key ``<slug>-unique-visitors``.
    """
    return f"{slug}-unique-visitors"


@dataclass
class FakeAbacus:
    """In-memory stand-in for the Abacus ``get`` / ``hit`` endpoints.

    Attributes:
        value: Current value of the site-wide key, or ``None`` if it does not
            exist.
        courses: Value per course slug; a slug that is absent has no key (404).
        calls: Actions received for the site-wide key, in order.
        course_calls: ``(action, key)`` pairs received for any other key.
        fail_hits: Number of upcoming site ``hit`` requests to answer with 500.
        fail_course_gets: Course slugs whose ``get`` is answered with 500.
    """

    value: int | None = None
    courses: dict[str, int] = field(default_factory=dict)
    calls: list[str] = field(default_factory=list)
    course_calls: list[tuple[str, str]] = field(default_factory=list)
    fail_hits: int = 0
    fail_course_gets: set[str] = field(default_factory=set)

    def handle(self, route: Route) -> None:
        """Answer one intercepted request like the real API would.

        Args:
            route: The intercepted Playwright route.

        Raises:
            AssertionError: If the request targets an unexpected namespace or key.
        """
        url = route.request.url
        action, namespace, key = url.split(ABACUS_HOST + "/", 1)[1].split("?")[0].split("/")
        assert namespace == NAMESPACE, url
        headers = {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}

        if key == SITE_KEY:
            self.calls.append(action)
            self._answer(route, headers, action, self.value, site=True)
            return

        assert key in {course_key(slug) for slug in LIVE_SLUGS}, url
        self.course_calls.append((action, key))
        slug = key[: -len("-unique-visitors")]
        if action == "get" and slug in self.fail_course_gets:
            route.fulfill(status=500, headers=headers, body='{"error":"boom"}')
            return
        # A course hit is never expected; answer it like the real API would so
        # a regression is caught by the call log rather than a crash.
        current = self.courses.get(slug)
        new = self._answer(route, headers, action, current, site=False)
        if action == "hit":
            self.courses[slug] = new

    def _answer(
        self, route: Route, headers: dict[str, str], action: str, current: int | None, site: bool
    ) -> int:
        """Fulfil ``route`` for ``action`` on a key holding ``current``.

        Args:
            route: The intercepted Playwright route.
            headers: Response headers.
            action: ``"get"`` or ``"hit"``.
            current: Current value of the key, or ``None`` if it does not exist.
            site: Whether this is the site-wide key (it honours ``fail_hits``
                and stores its value in ``self.value``).

        Returns:
            The value of the key after the request.
        """
        if action == "hit":
            if site and self.fail_hits:
                self.fail_hits -= 1
                route.fulfill(status=500, headers=headers, body='{"error":"boom"}')
                return current or 0
            new = (current or 0) + 1
            if site:
                self.value = new
            route.fulfill(status=200, headers=headers, body=json.dumps({"value": new}))
            return new
        if action == "get":
            if current is None:
                route.fulfill(status=404, headers=headers, body='{"error":"Key not found"}')
            else:
                route.fulfill(status=200, headers=headers, body=json.dumps({"value": current}))
            return current or 0
        route.fulfill(status=400, headers=headers, body="{}")
        return current or 0


def _new_browser(browser: Browser, server: FakeAbacus) -> BrowserContext:
    """Create an isolated context (a separate "browser") wired to ``server``.

    Args:
        browser: The launched Playwright browser.
        server: Shared fake counter backend.

    Returns:
        A context whose only external traffic is the fake counter.
    """
    ctx = browser.new_context(locale="en-US")
    ctx.route(f"https://{ABACUS_HOST}/**", server.handle)
    # Keep the run offline and deterministic: drop every other remote request.
    ctx.route(re.compile(r"^https?://(?!" + re.escape(ABACUS_HOST) + r")"), lambda r: r.abort())
    return ctx


def _load(page: Page, server: FakeAbacus, calls_before: int, expected_calls: int = 1) -> str:
    """Load the page and wait until the counter requests have fully completed.

    Waiting is event based (no fixed sleeps): the function returns only after
    the server saw ``expected_calls`` new site-counter requests plus one read
    per live course, and the browser received a response for every one of
    them, so any follow-up request (such as the
    ``get`` that replaces a failed ``hit``) has already been rendered.

    Args:
        page: Page to navigate (or reload).
        server: Shared fake counter backend.
        calls_before: ``len(server.calls)`` before navigating.
        expected_calls: Number of site-counter requests this load should make
            (the per-course reads are always expected on top of these).

    Returns:
        The digits shown in ``#stat-visitors`` (locale separators removed).

    Raises:
        AssertionError: If the expected requests do not complete in time.
    """
    finished: list[str] = []

    def on_done(request: Request) -> None:
        if ABACUS_HOST in request.url:
            finished.append(request.url)

    page.on("requestfinished", on_done)
    page.on("requestfailed", on_done)
    try:
        if page.url.startswith("file:"):
            page.reload(wait_until="load")
        else:
            page.goto(INDEX_URI, wait_until="load")
        for _ in range(100):
            if (
                len(server.calls) - calls_before >= expected_calls
                and len(finished) >= expected_calls + N_COURSES
            ):
                break
            page.wait_for_timeout(100)
        else:
            raise AssertionError(
                f"expected {expected_calls} counter calls, got {server.calls[calls_before:]}"
            )
        # Responses are already in; give the page a moment to run its handlers.
        page.wait_for_timeout(300)
    finally:
        page.remove_listener("requestfinished", on_done)
        page.remove_listener("requestfailed", on_done)
    return _shown(page)


def _shown(page: Page) -> str:
    """Return the visitor stat as plain ASCII digits.

    Args:
        page: Loaded page.

    Returns:
        Digits from ``#stat-visitors`` with grouping separators stripped and
        Persian digits normalised.
    """
    text = page.locator("#stat-visitors").inner_text()
    text = text.translate(str.maketrans("۰۱۲۳۴۵۶۷۸۹", "0123456789"))
    return re.sub(r"[^\d—]", "", text)


def test_unique_visits_are_counted_once_and_shared() -> None:
    """A browser is counted once; every browser shows the same server total."""
    server = FakeAbacus(value=10)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)

        a = _new_browser(browser, server)
        page_a = a.new_page()
        assert _load(page_a, server, 0) == str(BASELINE + 11)
        assert server.calls == ["hit"]

        assert _load(page_a, server, 1) == str(BASELINE + 11)
        assert server.calls == ["hit", "get"], "reload must not increment"

        b = _new_browser(browser, server)
        page_b = b.new_page()
        assert _load(page_b, server, 2) == str(BASELINE + 12)
        assert server.calls[-1] == "hit"

        assert _load(page_a, server, 3) == str(BASELINE + 12), "browsers must agree"
        assert server.calls[-1] == "get"
        assert server.value == 12
        browser.close()


def test_stale_local_cache_is_replaced_by_server_value() -> None:
    """An inflated cached number from an old build never outlives the server."""
    server = FakeAbacus(value=5)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = _new_browser(browser, server)
        ctx.add_init_script(
            "localStorage.setItem('aghili-labs:visitor-counted:v1', 'x');"
            "localStorage.setItem('aghili-labs:visitors:v5', JSON.stringify({count: 99999}));"
            "localStorage.setItem('aghili-labs:visitors:v4', JSON.stringify({count: 88888}));"
        )
        page = ctx.new_page()
        assert _load(page, server, 0) == str(BASELINE + 5)
        assert server.calls == ["get"]
        assert page.evaluate("localStorage.getItem('aghili-labs:visitors:v4')") is None
        browser.close()


def test_failed_hit_is_retried_on_next_load() -> None:
    """A hit that fails is not lost: the next load counts the browser."""
    server = FakeAbacus(value=3, fail_hits=1)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = _new_browser(browser, server).new_page()

        assert _load(page, server, 0, expected_calls=2) == str(BASELINE + 3)
        assert server.calls == ["hit", "get"]
        assert page.evaluate("localStorage.getItem('aghili-labs:visitor-counted:v1')") is None

        assert _load(page, server, 2) == str(BASELINE + 4)
        assert server.calls[-1] == "hit"
        assert server.value == 4
        browser.close()


def test_missing_counter_key_reads_as_zero() -> None:
    """Before the first ever hit, a read-only visitor sees the baseline."""
    server = FakeAbacus(value=None)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = _new_browser(browser, server)
        ctx.add_init_script("localStorage.setItem('aghili-labs:visitor-counted:v1', 'x');")
        page = ctx.new_page()
        assert _load(page, server, 0) == str(BASELINE)
        assert server.calls == ["get"]
        browser.close()


def _badge(page: Page, slug: str) -> str:
    """Return the course badge count as plain ASCII digits.

    Args:
        page: Loaded page.
        slug: Course slug.

    Returns:
        Digits shown in the badge (grouping separators stripped, Persian digits
        normalised), or an empty string while it still shows the placeholder.
    """
    text = page.locator(f'[data-course-visitors="{slug}"] .course-visitors-count').inner_text()
    text = text.translate(str.maketrans("۰۱۲۳۴۵۶۷۸۹", "0123456789"))
    return re.sub(r"[^\d]", "", text)


def test_course_badges_show_each_server_value() -> None:
    """Every live course shows its own server value; other cards have no badge."""
    assert N_COURSES == 14, N_COURSES
    courses = {slug: 1000 + 7 * i for i, slug in enumerate(LIVE_SLUGS)}
    server = FakeAbacus(value=10, courses=dict(courses))
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = _new_browser(browser, server).new_page()
        _load(page, server, 0)
        assert page.locator("[data-course-visitors]").count() == N_COURSES
        for slug, value in courses.items():
            assert _badge(page, slug) == str(value), slug
        for slug in OTHER_SLUGS:
            assert page.locator(f'[data-course-visitors="{slug}"]').count() == 0, slug
        browser.close()
    assert sorted(key for _, key in server.course_calls) == sorted(
        course_key(slug) for slug in LIVE_SLUGS
    )


def test_course_keys_are_never_hit() -> None:
    """A first visit counts the site once but only ever reads course keys."""
    server = FakeAbacus(value=10, courses={slug: 50 for slug in LIVE_SLUGS})
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = _new_browser(browser, server).new_page()
        _load(page, server, 0)
        assert server.calls == ["hit"], "the site counter is hit exactly once"
        _load(page, server, 1)
        assert server.calls == ["hit", "get"]
        assert server.course_calls, "course counters must have been read"
        assert {action for action, _ in server.course_calls} == {"get"}
        assert server.courses == {slug: 50 for slug in LIVE_SLUGS}, "no course value changed"
        browser.close()


def test_missing_course_key_shows_zero() -> None:
    """A 404 on a course key reads as 0 while the other badges are unaffected."""
    missing = LIVE_SLUGS[0]
    courses = {slug: 77 for slug in LIVE_SLUGS if slug != missing}
    server = FakeAbacus(value=10, courses=courses)
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = _new_browser(browser, server).new_page()
        _load(page, server, 0)
        assert _badge(page, missing) == "0"
        assert all(_badge(page, slug) == "77" for slug in courses)
        browser.close()


def test_stale_course_cache_is_replaced_by_server_value() -> None:
    """Inflated cached course numbers never outlive the (lower) server value."""
    target, other = LIVE_SLUGS[0], LIVE_SLUGS[1]
    server = FakeAbacus(value=10, courses={slug: 12 for slug in LIVE_SLUGS})
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        ctx = _new_browser(browser, server)
        ctx.add_init_script(
            "localStorage.setItem('aghili-labs:visitor-counted:v1', 'x');"
            f"localStorage.setItem('{COURSE_CACHE_KEY}', JSON.stringify("
            f"{{'{target}': {{count: 99999, at: Date.now()}}, '{other}': {{count: 88888, at: 0}}}}));"
            "localStorage.setItem('aghili-labs:course-visitors:v6', JSON.stringify({}));"
            "localStorage.setItem('aghili-labs:course-visitors:v1', JSON.stringify({}));"
        )
        page = ctx.new_page()
        _load(page, server, 0)
        assert _badge(page, target) == "12"
        assert _badge(page, other) == "12"
        stored = page.evaluate(f"JSON.parse(localStorage.getItem('{COURSE_CACHE_KEY}'))")
        assert stored[target]["count"] == 12 and stored[other]["count"] == 12
        for legacy in ("v1", "v6"):
            assert page.evaluate(f"localStorage.getItem('aghili-labs:course-visitors:{legacy}')") is None
        browser.close()


def test_failed_course_read_shows_no_made_up_number() -> None:
    """A course whose read fails keeps the placeholder instead of inventing a number."""
    failing = LIVE_SLUGS[0]
    server = FakeAbacus(
        value=10,
        courses={slug: 33 for slug in LIVE_SLUGS},
        fail_course_gets={failing},
    )
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        page = _new_browser(browser, server).new_page()
        _load(page, server, 0)
        assert _badge(page, failing) == ""
        assert all(_badge(page, slug) == "33" for slug in LIVE_SLUGS if slug != failing)
        browser.close()


if __name__ == "__main__":
    for name, fn in list(globals().items()):
        if name.startswith("test_") and callable(fn):
            fn()
            print(f"PASS {name}")
