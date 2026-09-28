"""Verify every course logo referenced by app.js exists on disk."""

from pathlib import Path
import re

root = Path(__file__).resolve().parent.parent
text = (root / "app.js").read_text(encoding="utf-8")
logos = set(re.findall(r'logo:\s*"([^"]+)"', text))
missing = [m for m in sorted(logos) if not (root / "assets" / "logos" / f"{m}.svg").exists()]
print("logos referenced:", len(logos))
print("missing:", missing if missing else "none")
print("on disk:", len(list((root / "assets" / "logos").glob("*.svg"))))
