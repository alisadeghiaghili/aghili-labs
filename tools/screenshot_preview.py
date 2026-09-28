"""Capture desktop and mobile screenshots of the landing page for visual QA."""

from pathlib import Path

from playwright.sync_api import sync_playwright

ROOT = Path(__file__).resolve().parent.parent
OUT = ROOT / "docs" / "preview"
OUT.mkdir(parents=True, exist_ok=True)
PAGE = (ROOT / "index.html").as_uri()


def main() -> None:
    with sync_playwright() as p:
        browser = p.chromium.launch(headless=True)
        for name, size in {
            "desktop": {"width": 1440, "height": 1100},
            "mobile": {"width": 390, "height": 900},
        }.items():
            page = browser.new_page(viewport=size)
            page.goto(PAGE, wait_until="networkidle")
            page.wait_for_timeout(500)
            # Force reveal so full-page captures are not stuck at opacity 0
            page.evaluate(
                """() => {
                  document.querySelectorAll('.reveal').forEach((el) => el.classList.add('is-in'));
                }"""
            )
            page.wait_for_timeout(400)
            page.screenshot(path=str(OUT / f"{name}-hero.png"), full_page=False)
            page.evaluate("window.scrollTo(0, document.body.scrollHeight * 0.35)")
            page.wait_for_timeout(500)
            page.screenshot(path=str(OUT / f"{name}-mid.png"), full_page=False)
            page.evaluate("window.scrollTo(0, document.body.scrollHeight)")
            page.wait_for_timeout(400)
            page.screenshot(path=str(OUT / f"{name}-full.png"), full_page=True)
            page.close()
        browser.close()
    print("screenshots written to", OUT)


if __name__ == "__main__":
    main()
