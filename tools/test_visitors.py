"""Deterministic browser test for the site-wide unique visitor counter.

The Abacus counting API is replaced by an in-memory fake shared across
browser contexts, so the test runs offline and proves the behavior that
matters:

* a new browser sends exactly one ``hit`` and shows ``baseline + value``;
* reloading the same browser only sends ``get`` and does not increment;
* a second, independent browser is counted once and both browsers then show
  the same server-backed total;
* a stale, inflated local cache is overwritten by the server value;
* a failed ``hit`` is retried on the next load instead of being lost.

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
COUNTER_PATH = "/alisadeghiaghili.github.io/aghili-labs-unique-visitors"
ABACUS_HOST = "abacus.jasoncameron.dev"


@dataclass
class FakeAbacus:
    """In-memory stand-in for the Abacus ``get`` / ``hit`` endpoints.

    Attributes:
        value: Current counter value, or ``None`` if the key does not exist.
        calls: Endpoint actions received, in order (``"get"`` / ``"hit"``).
        fail_hits: Number of upcoming ``hit`` requests to answer with HTTP 500.
    """

    value: int | None = None
    calls: list[str] = field(default_factory=list)
    fail_hits: int = 0

    def handle(self, route: Route) -> None:
        """Answer one intercepted request like the real API would.

        Args:
            route: The intercepted Playwright route.

        Raises:
            AssertionError: If the request targets an unexpected counter path.
        """
        url = route.request.url
        action = url.split(ABACUS_HOST + "/", 1)[1].split("/", 1)[0]
        assert url.split("?")[0].endswith(COUNTER_PATH), url
        self.calls.append(action)
        headers = {"Access-Control-Allow-Origin": "*", "Content-Type": "application/json"}

        if action == "hit":
            if self.fail_hits:
                self.fail_hits -= 1
                route.fulfill(status=500, headers=headers, body='{"error":"boom"}')
                return
            self.value = (self.value or 0) + 1
            route.fulfill(status=200, headers=headers, body=json.dumps({"value": self.value}))
        elif action == "get":
            if self.value is None:
                route.fulfill(status=404, headers=headers, body='{"error":"Key not found"}')
            else:
                route.fulfill(status=200, headers=headers, body=json.dumps({"value": self.value}))
        else:
            route.fulfill(status=400, headers=headers, body="{}")


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
    the server saw ``expected_calls`` new requests and the browser received a
    response for every one of them, so any follow-up request (such as the
    ``get`` that replaces a failed ``hit``) has already been rendered.

    Args:
        page: Page to navigate (or reload).
        server: Shared fake counter backend.
        calls_before: ``len(server.calls)`` before navigating.
        expected_calls: Number of counter requests this load should make.

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
            if len(server.calls) - calls_before >= expected_calls and len(finished) >= expected_calls:
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


if __name__ == "__main__":
    for name, fn in list(globals().items()):
        if name.startswith("test_") and callable(fn):
            fn()
            print(f"PASS {name}")
