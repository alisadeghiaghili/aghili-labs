"""Wrap Latin technical tokens in Persian course descriptions for RTL isolation."""

from pathlib import Path
import re

path = Path(__file__).resolve().parent.parent / "app.js"
text = path.read_text(encoding="utf-8")


def wrap_desc(match: re.Match[str]) -> str:
    body = match.group(1)
    wrapped = re.sub(
        r"[A-Za-z][A-Za-z0-9\./\+\-]*",
        lambda m: f'<span class="tech" dir="ltr">{m.group(0)}</span>',
        body,
    )
    return f'desc: "{wrapped}"'


new = re.sub(r'desc: "([^"]*)"', wrap_desc, text)
path.write_text(new, encoding="utf-8")
print("tech spans:", new.count('class="tech"'))
