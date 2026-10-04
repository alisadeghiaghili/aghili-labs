"""Generate webfundamentals.svg logo with valid XML."""
import xml.etree.ElementTree as ET
from pathlib import Path

path = Path(r"c:\Users\alisa\Desktop\Projects\learn-with-ali\assets\logos\webfundamentals.svg")

svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Fundamentals and DOM Architecture">
  <rect width="64" height="64" rx="14" fill="#0B132B"/>
  <g transform="translate(12 12)">
    <!-- Browser Window Outline -->
    <rect x="2" y="3" width="36" height="34" rx="3.5" fill="#1C2541" stroke="#3A506B" stroke-width="1.8"/>
    <!-- Browser Top Bar -->
    <line x1="2" y1="10" x2="38" y2="10" stroke="#3A506B" stroke-width="1.5"/>
    <circle cx="6" cy="6.5" r="1.3" fill="#EF4444"/>
    <circle cx="10" cy="6.5" r="1.3" fill="#F59E0B"/>
    <circle cx="14" cy="6.5" r="1.3" fill="#10B981"/>
    <!-- URL Address Pill -->
    <rect x="18" y="5" width="16" height="3" rx="1.5" fill="#0B132B"/>
    <!-- DOM Tree Hierarchy / HTML Tags inside Window -->
    <!-- Root Node (Document) -->
    <circle cx="20" cy="16" r="2.8" fill="#38BDF8"/>
    <!-- Branch Lines -->
    <line x1="20" y1="16" x2="11" y2="25" stroke="#60A5FA" stroke-width="1.2"/>
    <line x1="20" y1="16" x2="29" y2="25" stroke="#60A5FA" stroke-width="1.2"/>
    <!-- Child Nodes -->
    <rect x="7" y="23" width="8" height="5" rx="1.5" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
    <rect x="25" y="23" width="8" height="5" rx="1.5" fill="#0284C7" stroke="#38BDF8" stroke-width="1"/>
    <!-- HTML Tag Accents on bottom -->
    <path d="M12 33L8 31L12 29M28 33L32 31L28 29" stroke="#E2E8F0" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="18" y1="33" x2="22" y2="29" stroke="#F59E0B" stroke-width="1.4" stroke-linecap="round"/>
  </g>
</svg>"""

ET.fromstring(svg)
path.write_text(svg, encoding="utf-8")
print("webfundamentals.svg created and validated.")
