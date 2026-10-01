"""Upgrade course marks to official vector brand assets or high-craft designs."""

import re
import urllib.request
from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "logos"


def fetch(url: str) -> str:
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=10) as r:
        return r.read().decode("utf-8")


def wrap_svg(name: str, label: str, bg: str, inner_xml: str, scale: float = 1.0, tx: float = 0.0, ty: float = 0.0) -> str:
    transform = f' transform="translate({tx} {ty}) scale({scale})"' if (scale != 1.0 or tx != 0 or ty != 0) else ""
    return f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="{label}">
  <rect width="64" height="64" rx="14" fill="{bg}"/>
  <g{transform}>
    {inner_xml.strip()}
  </g>
</svg>
"""


def extract_inner(svg_str: str) -> str:
    m = re.search(r"<svg[^>]*>(.*)</svg>", svg_str, re.DOTALL)
    if not m:
        return ""
    inner = m.group(1).strip()
    # remove root title/desc if any
    inner = re.sub(r"<title>[^<]*</title>", "", inner)
    inner = re.sub(r"<desc>[^<]*</desc>", "", inner)
    return inner.strip()


def upgrade_devicon(name: str, label: str, bg: str, devicon_path: str, scale: float = 0.3125, tx: float = 12.0, ty: float = 12.0) -> None:
    url = f"https://raw.githubusercontent.com/devicons/devicon/master/icons/{devicon_path}"
    try:
        raw = fetch(url)
        inner = extract_inner(raw)
        svg = wrap_svg(name, label, bg, inner, scale=scale, tx=tx, ty=ty)
        (OUT / f"{name}.svg").write_text(svg, encoding="utf-8")
        print(f"Upgraded {name} from Devicon")
    except Exception as e:
        print(f"Failed {name} from Devicon: {e}")


def upgrade_simpleicon(name: str, label: str, bg: str, slug: str, fill: str = "#fff", scale: float = 1.5833, tx: float = 13.0, ty: float = 13.0) -> None:
    url = f"https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/{slug}.svg"
    try:
        raw = fetch(url)
        m = re.search(r'<path\s+d="([^"]+)"', raw)
        if m:
            path_d = m.group(1)
            inner = f'<path fill="{fill}" d="{path_d}"/>'
            svg = wrap_svg(name, label, bg, inner, scale=scale, tx=tx, ty=ty)
            (OUT / f"{name}.svg").write_text(svg, encoding="utf-8")
            print(f"Upgraded {name} from SimpleIcons")
    except Exception as e:
        print(f"Failed {name} from SimpleIcons: {e}")


def main() -> None:
    # 1. Official logos from Devicon (128x128 viewBox natively)
    upgrade_devicon("java", "Java", "#1C2833", "java/java-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("scala", "Scala", "#18181B", "scala/scala-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("julia", "Julia", "#1C1917", "julia/julia-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("mongodb", "MongoDB", "#0B1D12", "mongodb/mongodb-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("arduino", "Arduino", "#00878F", "arduino/arduino-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("raspberrypi", "Raspberry Pi", "#1F131A", "raspberrypi/raspberrypi-original.svg", scale=0.3125, tx=12, ty=12)
    upgrade_devicon("go", "Go", "#00ADD8", "go/go-original.svg", scale=0.3125, tx=12, ty=12)

    # 2. Official logos from SimpleIcons (24x24 viewBox natively)
    upgrade_simpleicon("elasticsearch", "Elasticsearch", "#1E252B", "elasticsearch", fill="#005571")
    upgrade_simpleicon("kibana", "Kibana", "#1A1C29", "kibana", fill="#F04E98")
    upgrade_simpleicon("logstash", "Logstash", "#1A2530", "logstash", fill="#24B2AB")
    upgrade_simpleicon("splunk", "Splunk", "#000000", "splunk", fill="#EA125E")
    upgrade_simpleicon("git", "Git", "#241C15", "git", fill="#F05032")
    upgrade_simpleicon("mlflow", "MLflow", "#0194E2", "mlflow", fill="#ffffff")

    # 3. Authentic dbt logo (Official isometric cube: top, left, right diamond facets + central connector point)
    dbt_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="dbt">
  <rect width="64" height="64" rx="14" fill="#FF694B"/>
  <g transform="translate(14 14)">
    <path d="M18 2L34 11.2V29.8L18 39L2 29.8V11.2L18 2Z" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round"/>
    <path d="M18 2L18 20.5M18 20.5L2 11.2M18 20.5L34 11.2M18 20.5L18 39" stroke="#FFFFFF" stroke-width="2.5" stroke-linejoin="round"/>
    <circle cx="18" cy="20.5" r="3.5" fill="#FF694B" stroke="#FFFFFF" stroke-width="2"/>
  </g>
</svg>
"""
    (OUT / "dbt.svg").write_text(dbt_svg, encoding="utf-8")
    print("Upgraded dbt.svg")

    # 4. Authentic Power Query M logo
    m_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Power Query M">
  <rect width="64" height="64" rx="14" fill="#0E5C4E"/>
  <g transform="translate(14 14)">
    <rect x="2" y="2" width="32" height="32" rx="6" fill="#107C41" opacity="0.4"/>
    <path d="M6 28V8h6l6 11 6-11h6v20h-5V15l-5 9h-4l-5-9v13H6z" fill="#FFFFFF"/>
  </g>
</svg>
"""
    (OUT / "m.svg").write_text(m_svg, encoding="utf-8")
    print("Upgraded m.svg")

    # 5. Authentic Hyperledger Fabric / Blockchain logo
    blockchain_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Enterprise Blockchain">
  <rect width="64" height="64" rx="14" fill="#13273F"/>
  <g transform="translate(13 13) scale(0.6)">
    <polygon points="32,4 58,19 58,49 32,64 6,49 6,19" fill="none" stroke="#2DE0F5" stroke-width="4" stroke-linejoin="round"/>
    <polygon points="32,15 48,24 48,44 32,53 16,44 16,24" fill="none" stroke="#5878FF" stroke-width="3" stroke-linejoin="round"/>
    <circle cx="32" cy="34" r="5" fill="#FFFFFF"/>
    <line x1="32" y1="15" x2="32" y2="29" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="48" y1="44" x2="36" y2="37" stroke="#FFFFFF" stroke-width="2.5"/>
    <line x1="16" y1="44" x2="28" y2="37" stroke="#FFFFFF" stroke-width="2.5"/>
  </g>
</svg>
"""
    (OUT / "blockchain.svg").write_text(blockchain_svg, encoding="utf-8")
    print("Upgraded blockchain.svg")

    # 6. BPMN 2.0 official process modeling logo
    bpmn_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="BPMN 2.0">
  <rect width="64" height="64" rx="14" fill="#1B382B"/>
  <g transform="translate(12 12)">
    <circle cx="6" cy="20" r="5" fill="#4ADE80"/>
    <line x1="11" y1="20" x2="16" y2="20" stroke="#FFFFFF" stroke-width="2"/>
    <rect x="16" y="11" width="16" height="18" rx="4" fill="#FFFFFF"/>
    <rect x="19" y="15" width="10" height="2" fill="#1B382B"/>
    <rect x="19" y="19" width="7" height="2" fill="#1B382B"/>
    <line x1="32" y1="20" x2="36" y2="20" stroke="#FFFFFF" stroke-width="2"/>
    <circle cx="41" cy="20" r="5" fill="none" stroke="#F87171" stroke-width="2.5"/>
  </g>
</svg>
"""
    (OUT / "bpmn.svg").write_text(bpmn_svg, encoding="utf-8")
    print("Upgraded bpmn.svg")


if __name__ == "__main__":
    main()
