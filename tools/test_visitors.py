"""Smoke-test unique visitor counter (first visit increments, later visits cache)."""

from pathlib import Path

from playwright.sync_api import sync_playwright

uri = Path(__file__).resolve().parent.parent.joinpath("index.html").as_uri()

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    page = ctx.new_page()
    page.goto(uri, wait_until="networkidle")
    page.wait_for_timeout(2500)
    stat_text = page.locator("#stat-visitors").inner_text()
    print("first visit:", repr(stat_text))

    # Check course card visitors
    course_badges = page.locator(".course-visitors")
    badge_count = course_badges.count()
    print("course visitor badges count:", badge_count)
    for i in range(badge_count):
        badge = course_badges.nth(i)
        slug = badge.get_attribute("data-course-visitors")
        count_text = badge.locator(".course-visitors-count").inner_text()
        print(f"  badge {slug}: {count_text}")

    page.reload(wait_until="networkidle")
    page.wait_for_timeout(1500)
    print("second visit:", repr(page.locator("#stat-visitors").inner_text()))
    print("site visitors storage:", page.evaluate("() => localStorage.getItem('aghili-labs:visitors:v2')"))
    print("course visitors storage:", page.evaluate("() => localStorage.getItem('aghili-labs:course-visitors:v5')"))
    browser.close()
