import base64
from pathlib import Path
import xml.etree.ElementTree as ET

mark_bytes = Path('assets/brand/favicon-192.png').read_bytes()
b64 = base64.b64encode(mark_bytes).decode('ascii')

svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Aghili Labs">
  <rect width="64" height="64" rx="16" fill="#0F172A"/>
  <image href="data:image/png;base64,{b64}" x="7" y="7" width="50" height="50" preserveAspectRatio="xMidYMid meet"/>
</svg>'''

ET.fromstring(svg)
Path('assets/favicon.svg').write_text(svg, encoding='utf-8')
print("favicon.svg successfully updated and validated.")
