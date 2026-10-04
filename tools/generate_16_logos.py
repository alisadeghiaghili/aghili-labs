"""Generate all 16 new SVG logos with valid XML and high aesthetic standard."""
import xml.etree.ElementTree as ET
from pathlib import Path
import urllib.request

LOGOS_DIR = Path(r"c:\Users\alisa\Desktop\Projects\learn-with-ali\assets\logos")

def get_simple_icon(slug):
    url = f"https://raw.githubusercontent.com/simple-icons/simple-icons/develop/icons/{slug}.svg"
    req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
    with urllib.request.urlopen(req, timeout=10) as resp:
        content = resp.read().decode("utf-8")
    root = ET.fromstring(content)
    # Extract path 'd'
    paths = []
    for elem in root.iter():
        if elem.tag.endswith("path"):
            paths.append(elem.attrib.get("d", ""))
    return paths

print("Fetching official icons...")
k8s_paths = get_simple_icon("kubernetes")
gcp_paths = get_simple_icon("googlecloud")
tf_paths = get_simple_icon("terraform")
duck_paths = get_simple_icon("duckdb")
print("Fetched successfully.")

LOGOS = {}

# 1. Kubernetes
LOGOS["kubernetes"] = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Kubernetes">
  <rect width="64" height="64" rx="14" fill="#1A2B4C"/>
  <g transform="translate(14 14) scale(1.5)" fill="#326CE5">
    <path d="{k8s_paths[0]}"/>
  </g>
</svg>"""

# 2. GCP
LOGOS["gcp"] = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Google Cloud Platform">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <g transform="translate(14 14) scale(1.5)" fill="#4285F4">
    <path d="{gcp_paths[0]}"/>
  </g>
</svg>"""

# 3. Terraform
LOGOS["terraform"] = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Terraform">
  <rect width="64" height="64" rx="14" fill="#140E24"/>
  <g transform="translate(14 14) scale(1.5)" fill="#844FBA">
    <path d="{tf_paths[0]}"/>
  </g>
</svg>"""

# 4. DuckDB
LOGOS["duckdb"] = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="DuckDB">
  <rect width="64" height="64" rx="14" fill="#1C1917"/>
  <g transform="translate(14 14) scale(1.5)" fill="#FFF000">
    <path d="{duck_paths[0]}"/>
  </g>
</svg>"""

# 5. AI Project Management & ROI (aipm)
LOGOS["aipm"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="AI Project Management and ROI">
  <rect width="64" height="64" rx="14" fill="#0B132B"/>
  <g transform="translate(12 12)">
    <!-- Kanban/Gantt Board Backing -->
    <rect x="2" y="4" width="36" height="26" rx="4" fill="#1C2541" stroke="#3A506B" stroke-width="1.5"/>
    <line x1="14" y1="4" x2="14" y2="30" stroke="#3A506B" stroke-width="1.2" stroke-dasharray="2 2"/>
    <line x1="26" y1="4" x2="26" y2="30" stroke="#3A506B" stroke-width="1.2" stroke-dasharray="2 2"/>
    <!-- Sprint Cards -->
    <rect x="5" y="8" width="6" height="8" rx="1.5" fill="#48CAE4"/>
    <rect x="5" y="19" width="6" height="6" rx="1.5" fill="#64DFDF"/>
    <rect x="17" y="12" width="6" height="10" rx="1.5" fill="#48CAE4"/>
    <!-- ROI Trend Arrow Overlay -->
    <path d="M12 28L22 18L28 22L36 10" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <polyline points="32,10 36,10 36,14" fill="none" stroke="#10B981" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- AI Brain Node Badge -->
    <circle cx="34" cy="28" r="4.5" fill="#8B5CF6"/>
    <circle cx="34" cy="28" r="2" fill="#FFFFFF"/>
  </g>
</svg>"""

# 6. Licensing & Compliance (licensing)
LOGOS["licensing"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Software and Model Licensing">
  <rect width="64" height="64" rx="14" fill="#1E1B4B"/>
  <g transform="translate(12 12)">
    <!-- Legal Certificate / Shield -->
    <path d="M20 2L35 7V19C35 28 28 35 20 38C12 35 5 28 5 19V7L20 2Z" fill="#312E81" stroke="#818CF8" stroke-width="1.8"/>
    <!-- Open Source C keyhole / Copyright emblem -->
    <circle cx="20" cy="18" r="8" fill="none" stroke="#C7D2FE" stroke-width="2"/>
    <!-- Code bracket inside -->
    <path d="M18 15L15 18L18 21M22 15L25 18L22 21" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    <!-- Approved Ribbon -->
    <path d="M16 27L20 31L24 27" fill="none" stroke="#34D399" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>"""

# 7. Distributed Systems Architecture (distributedsystems)
LOGOS["distributedsystems"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Distributed Systems">
  <rect width="64" height="64" rx="14" fill="#0A192F"/>
  <g transform="translate(12 12)">
    <!-- Consensus Connections -->
    <line x1="20" y1="5" x2="6" y2="30" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 2"/>
    <line x1="20" y1="5" x2="34" y2="30" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 2"/>
    <line x1="6" y1="30" x2="34" y2="30" stroke="#38BDF8" stroke-width="1.5" stroke-dasharray="3 2"/>
    <line x1="20" y1="5" x2="20" y2="20" stroke="#64748B" stroke-width="1.2"/>
    <line x1="6" y1="30" x2="20" y2="20" stroke="#64748B" stroke-width="1.2"/>
    <line x1="34" y1="30" x2="20" y2="20" stroke="#64748B" stroke-width="1.2"/>
    <!-- Leader Node -->
    <circle cx="20" cy="5" r="5" fill="#0284C7" stroke="#38BDF8" stroke-width="1.8"/>
    <circle cx="20" cy="5" r="2" fill="#E0F2FE"/>
    <!-- Follower Nodes -->
    <circle cx="6" cy="30" r="4.5" fill="#1E293B" stroke="#94A3B8" stroke-width="1.8"/>
    <circle cx="34" cy="30" r="4.5" fill="#1E293B" stroke="#94A3B8" stroke-width="1.8"/>
    <!-- Center Sync Hub -->
    <circle cx="20" cy="20" r="3" fill="#10B981" stroke="#6EE7B7" stroke-width="1.2"/>
  </g>
</svg>"""

# 8. DataOps (dataops)
LOGOS["dataops"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="DataOps">
  <rect width="64" height="64" rx="14" fill="#042F2E"/>
  <g transform="translate(12 12)">
    <!-- Data Pipeline Infinity Curve -->
    <path d="M12 20C12 14 6 14 6 20C6 26 12 26 20 20C28 14 34 14 34 20C34 26 28 26 20 20" fill="none" stroke="#14B8A6" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Left Data Cylinders -->
    <ellipse cx="9" cy="18" rx="4" ry="2" fill="#0F766E" stroke="#5EEAD4" stroke-width="1"/>
    <path d="M5 18V22C5 23 7 24 9 24C11 24 13 23 13 22V18" fill="none" stroke="#5EEAD4" stroke-width="1"/>
    <!-- Right Quality Check Shield -->
    <circle cx="31" cy="20" r="4.5" fill="#0F766E" stroke="#34D399" stroke-width="1.2"/>
    <path d="M29 20L30.5 21.5L33 19" fill="none" stroke="#34D399" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>"""

# 9. MLOps (mlops)
LOGOS["mlops"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="MLOps">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <g transform="translate(12 12)">
    <!-- Pipeline Loop / Orbit -->
    <circle cx="20" cy="20" r="14" fill="none" stroke="#334155" stroke-width="2"/>
    <path d="M20 6C27.7 6 34 12.3 34 20" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M20 34C12.3 34 6 27.7 6 20" fill="none" stroke="#A855F7" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Neural Network Node (Center) -->
    <circle cx="20" cy="20" r="5" fill="#1E293B" stroke="#60A5FA" stroke-width="1.5"/>
    <circle cx="20" cy="20" r="2.2" fill="#38BDF8"/>
    <!-- Continuous Delivery Arrow Heads -->
    <polygon points="34,18 36,22 32,22" fill="#38BDF8"/>
    <polygon points="6,22 4,18 8,18" fill="#A855F7"/>
  </g>
</svg>"""

# 10. LLMOps & Model Serving (llmops)
LOGOS["llmops"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="LLMOps and Model Serving">
  <rect width="64" height="64" rx="14" fill="#18181B"/>
  <g transform="translate(12 12)">
    <!-- Inference Server Rack -->
    <rect x="4" y="6" width="32" height="10" rx="2.5" fill="#27272A" stroke="#52525B" stroke-width="1.2"/>
    <circle cx="9" cy="11" r="1.5" fill="#10B981"/>
    <line x1="14" y1="11" x2="28" y2="11" stroke="#3F3F46" stroke-width="1.5"/>
    <rect x="4" y="20" width="32" height="10" rx="2.5" fill="#27272A" stroke="#52525B" stroke-width="1.2"/>
    <circle cx="9" cy="25" r="1.5" fill="#06B6D4"/>
    <line x1="14" y1="25" x2="28" y2="25" stroke="#3F3F46" stroke-width="1.5"/>
    <!-- Token Speed Flame / Gauge -->
    <path d="M28 35C30 32 31 29 29 27C27 28 26 29 26 30C25 28 23 26 21 28C19 30 19 34 23 37C27 40 33 38 33 34C33 32 31 30 28 35Z" fill="#F59E0B"/>
    <!-- Prompt In / Tokens Out Vector -->
    <path d="M30 11H34" stroke="#10B981" stroke-width="1.5" stroke-linecap="round"/>
    <path d="M30 25H34" stroke="#06B6D4" stroke-width="1.5" stroke-linecap="round"/>
  </g>
</svg>"""

# 11. MLSecOps & AI Security (mlsecops)
LOGOS["mlsecops"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="MLSecOps">
  <rect width="64" height="64" rx="14" fill="#260F26"/>
  <g transform="translate(12 12)">
    <!-- Security Shield -->
    <path d="M20 2L35 7V18C35 27 27 34 20 37C13 34 5 27 5 18V7L20 2Z" fill="#3D133D" stroke="#EC4899" stroke-width="1.8"/>
    <!-- Protected Neural Lattice inside -->
    <circle cx="20" cy="14" r="2.5" fill="#F472B6"/>
    <circle cx="14" cy="22" r="2.2" fill="#C084FC"/>
    <circle cx="26" cy="22" r="2.2" fill="#C084FC"/>
    <circle cx="20" cy="27" r="2" fill="#E879F9"/>
    <line x1="20" y1="14" x2="14" y2="22" stroke="#F472B6" stroke-width="1.2"/>
    <line x1="20" y1="14" x2="26" y2="22" stroke="#F472B6" stroke-width="1.2"/>
    <line x1="14" y1="22" x2="20" y2="27" stroke="#F472B6" stroke-width="1.2"/>
    <line x1="26" y1="22" x2="20" y2="27" stroke="#F472B6" stroke-width="1.2"/>
  </g>
</svg>"""

# 12. RAG & Vector Databases (rag)
LOGOS["rag"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="RAG and Vector Databases">
  <rect width="64" height="64" rx="14" fill="#0A1628"/>
  <g transform="translate(12 12)">
    <!-- Document Stack (Knowledge) -->
    <rect x="4" y="6" width="12" height="16" rx="2" fill="#1E293B" stroke="#64748B" stroke-width="1.2"/>
    <line x1="7" y1="10" x2="13" y2="10" stroke="#94A3B8" stroke-width="1"/>
    <line x1="7" y1="13" x2="13" y2="13" stroke="#94A3B8" stroke-width="1"/>
    <line x1="7" y1="16" x2="11" y2="16" stroke="#94A3B8" stroke-width="1"/>
    <!-- Vector Embedding Space (Grid + Coordinate) -->
    <path d="M19 14L25 14M22 11L22 17" stroke="#38BDF8" stroke-width="1.2" stroke-linecap="round"/>
    <path d="M16 14L22 14" stroke="#60A5FA" stroke-width="1.5" stroke-dasharray="2 1"/>
    <!-- 3D Vector Cube / Index -->
    <rect x="23" y="10" width="14" height="14" rx="2.5" fill="#1E3A8A" stroke="#38BDF8" stroke-width="1.5"/>
    <circle cx="27" cy="14" r="1.5" fill="#93C5FD"/>
    <circle cx="33" cy="18" r="1.5" fill="#60A5FA"/>
    <circle cx="28" cy="20" r="1.5" fill="#38BDF8"/>
    <line x1="27" y1="14" x2="33" y2="18" stroke="#93C5FD" stroke-width="0.8"/>
    <line x1="27" y1="14" x2="28" y2="20" stroke="#93C5FD" stroke-width="0.8"/>
    <!-- Generation Return Beam -->
    <path d="M30 25C30 32 16 34 10 27" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round" stroke-dasharray="2 2"/>
    <polyline points="12,24 8,26 10,30" fill="none" stroke="#10B981" stroke-width="1.8" stroke-linecap="round"/>
  </g>
</svg>"""

# 13. AI Agents & Multi-Agent Systems (agents)
LOGOS["agents"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="AI Agents and Multi-Agent Systems">
  <rect width="64" height="64" rx="14" fill="#0B132B"/>
  <g transform="translate(12 12)">
    <!-- Central Autonomous Agent Core -->
    <circle cx="20" cy="20" r="7" fill="#1C2541" stroke="#60A5FA" stroke-width="2"/>
    <circle cx="20" cy="20" r="3.2" fill="#38BDF8"/>
    <!-- Multi-Agent Orbiting Satellites / Tool Nodes -->
    <circle cx="20" cy="5" r="3" fill="#8B5CF6"/>
    <circle cx="34" cy="15" r="3" fill="#10B981"/>
    <circle cx="31" cy="30" r="3" fill="#F59E0B"/>
    <circle cx="9" cy="30" r="3" fill="#EC4899"/>
    <circle cx="6" cy="15" r="3" fill="#06B6D4"/>
    <!-- Communication Synapses -->
    <line x1="20" y1="13" x2="20" y2="8" stroke="#8B5CF6" stroke-width="1.4" stroke-dasharray="2 1"/>
    <line x1="25" y1="16" x2="31" y2="15" stroke="#10B981" stroke-width="1.4" stroke-dasharray="2 1"/>
    <line x1="25" y1="24" x2="29" y2="28" stroke="#F59E0B" stroke-width="1.4" stroke-dasharray="2 1"/>
    <line x1="15" y1="24" x2="11" y2="28" stroke="#EC4899" stroke-width="1.4" stroke-dasharray="2 1"/>
    <line x1="15" y1="16" x2="9" y2="15" stroke="#06B6D4" stroke-width="1.4" stroke-dasharray="2 1"/>
  </g>
</svg>"""

# 14. Operations Research & Optimization (optimization)
LOGOS["optimization"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Operations Research and Optimization">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <g transform="translate(12 12)">
    <!-- Coordinate Axis -->
    <line x1="4" y1="36" x2="36" y2="36" stroke="#475569" stroke-width="1.5"/>
    <line x1="4" y1="36" x2="4" y2="4" stroke="#475569" stroke-width="1.5"/>
    <!-- Feasible Region Polyhedron -->
    <polygon points="4,30 12,14 28,10 34,22 24,36 4,36" fill="#1E293B" stroke="#38BDF8" stroke-width="1.8"/>
    <!-- Contour Level Curves -->
    <line x1="4" y1="20" x2="24" y2="4" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2 2"/>
    <line x1="10" y1="26" x2="32" y2="6" stroke="#0284C7" stroke-width="1.2" stroke-dasharray="2 2"/>
    <!-- Global Optimal Vertex (Maximum Point) -->
    <circle cx="28" cy="10" r="4" fill="#10B981" stroke="#FFFFFF" stroke-width="1.5"/>
    <!-- Vector pointing to optimal -->
    <path d="M16 26L26 13" fill="none" stroke="#F59E0B" stroke-width="2" stroke-linecap="round"/>
    <polygon points="26,11 27,16 23,14" fill="#F59E0B"/>
  </g>
</svg>"""

# 15. Industrial IoT & Edge Protocols (iiot)
LOGOS["iiot"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Industrial IoT">
  <rect width="64" height="64" rx="14" fill="#1C1917"/>
  <g transform="translate(12 12)">
    <!-- Industrial Machine Gear -->
    <circle cx="16" cy="24" r="10" fill="#292524" stroke="#78716C" stroke-width="1.8"/>
    <circle cx="16" cy="24" r="4" fill="#1C1917"/>
    <!-- Telemetry Waves / Signal (OPC-UA / MQTT) -->
    <path d="M16 10C22 10 27 15 27 21" fill="none" stroke="#F97316" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 6C25 6 31 12 31 21" fill="none" stroke="#FB923C" stroke-width="2" stroke-linecap="round"/>
    <path d="M16 2C28 2 35 9 35 21" fill="none" stroke="#FDBA74" stroke-width="1.5" stroke-dasharray="2 2"/>
    <!-- Edge Gateway Antenna Node -->
    <circle cx="16" cy="2" r="2.2" fill="#F97316"/>
  </g>
</svg>"""

# 16. TinyML & Edge AI (tinyml)
LOGOS["tinyml"] = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TinyML">
  <rect width="64" height="64" rx="14" fill="#022C22"/>
  <g transform="translate(12 12)">
    <!-- Microcontroller Chip Body (QFP IC) -->
    <rect x="8" y="8" width="24" height="24" rx="3" fill="#064E3B" stroke="#34D399" stroke-width="1.8"/>
    <!-- IC Pins Top & Bottom -->
    <line x1="12" y1="4" x2="12" y2="8" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="17" y1="4" x2="17" y2="8" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="23" y1="4" x2="23" y2="8" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="28" y1="4" x2="28" y2="8" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="12" y1="32" x2="12" y2="36" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="17" y1="32" x2="17" y2="36" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="23" y1="32" x2="23" y2="36" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="28" y1="32" x2="28" y2="36" stroke="#6EE7B7" stroke-width="1.5"/>
    <!-- IC Pins Left & Right -->
    <line x1="4" y1="12" x2="8" y2="12" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="4" y1="17" x2="8" y2="17" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="4" y1="23" x2="8" y2="23" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="4" y1="28" x2="8" y2="28" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="32" y1="12" x2="36" y2="12" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="32" y1="17" x2="36" y2="17" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="32" y1="23" x2="36" y2="23" stroke="#6EE7B7" stroke-width="1.5"/>
    <line x1="32" y1="28" x2="36" y2="28" stroke="#6EE7B7" stroke-width="1.5"/>
    <!-- Neural Network inside Chip Die -->
    <circle cx="14" cy="15" r="1.8" fill="#A7F3D0"/>
    <circle cx="14" cy="25" r="1.8" fill="#A7F3D0"/>
    <circle cx="26" cy="15" r="1.8" fill="#A7F3D0"/>
    <circle cx="26" cy="25" r="1.8" fill="#A7F3D0"/>
    <circle cx="20" cy="20" r="2.2" fill="#34D399"/>
    <line x1="14" y1="15" x2="20" y2="20" stroke="#6EE7B7" stroke-width="1"/>
    <line x1="14" y1="25" x2="20" y2="20" stroke="#6EE7B7" stroke-width="1"/>
    <line x1="20" y1="20" x2="26" y2="15" stroke="#6EE7B7" stroke-width="1"/>
    <line x1="20" y1="20" x2="26" y2="25" stroke="#6EE7B7" stroke-width="1"/>
  </g>
</svg>"""

# Validate XML and write files
written = 0
for name, svg_content in LOGOS.items():
    try:
        ET.fromstring(svg_content)
        path = LOGOS_DIR / f"{name}.svg"
        path.write_text(svg_content, encoding="utf-8")
        written += 1
    except Exception as e:
        print(f"Error in {name}: {e}")

print(f"Successfully validated and written {written}/{len(LOGOS)} logos.")
