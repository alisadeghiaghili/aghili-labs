"""Smoke-test unique visitor counter (first visit increments, later visits cache)."""

from pathlib import Path

from playwright.sync_api import sync_playwright

uri = Path(__file__).resolve().parent.parent.joinpath("index.html").as_uri()

with sync_playwright() as p:
    browser = p.chromium.launch(headless=True)
    ctx = browser.new_context()
    page = ctx.new_page()
    page.goto(uri, wait_until="networkidle")
    page.wait_for_timeout(1800)
    print("first visit:", page.locator("#stat-visitors").inner_text())
    page.reload(wait_until="networkidle")
    page.wait_for_timeout(1200)
    print("second visit:", page.locator("#stat-visitors").inner_text())
    print("storage:", page.evaluate("() => localStorage.getItem('aghili-labs:unique-visitors')"))
    browser.close()
