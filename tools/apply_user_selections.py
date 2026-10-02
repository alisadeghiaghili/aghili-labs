"""Apply user choices:
1. Revert 5 logos to Option 1 (api, arduino, functional, git, sql)
2. Redesign 12 logos as requested:
   - splunk (authentic brand colors pink/orange >_)
   - blockchain (combination of both logos: 3D isometric chained blocks)
   - scraping (crawling & data gathering concept)
   - rl (reinforcement learning agent-environment reward loop)
   - nlp (tokenization to embedding attention core)
   - mlpatterns (modular pipeline DAG pattern)
   - m (official Power Query M fluent design mark)
   - llm (transformer multi-head attention generative core)
   - dbt (authentic 3D faceted dbt logo)
   - datastructure (binary tree + memory buffer data structures)
   - bpmn (official BPMN 2.0 start -> task -> gateway -> end flow)
   - algorithm (decision flowchart & branching optimization)
"""

import subprocess
from pathlib import Path

LOGOS_DIR = Path("assets/logos")

# 1. Revert 5 logos to Option 1
revert_logos = ["api", "arduino", "functional", "git", "sql"]
for name in revert_logos:
    content = subprocess.check_output(["git", "show", f"751ca20:assets/logos/{name}.svg"], encoding="utf-8")
    (LOGOS_DIR / f"{name}.svg").write_text(content.strip() + "\n", encoding="utf-8")
    print(f"Reverted {name}.svg to Option 1")

# 2. Redesigned marks
REDESIGNS = {
    "splunk": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Splunk">
  <rect width="64" height="64" rx="14" fill="#0E0E12"/>
  <g transform="translate(13 16)">
    <path d="M5 4l14 12L5 28" fill="none" stroke="#EA125E" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="23" y1="28" x2="35" y2="28" stroke="#F18902" stroke-width="5" stroke-linecap="round"/>
  </g>
</svg>""",

    "blockchain": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Enterprise Blockchain">
  <rect width="64" height="64" rx="14" fill="#0A1322"/>
  <g transform="translate(9 13)">
    <!-- Left Block -->
    <polygon points="10,13 18,8.5 18,20 10,24.5" fill="#1E3A8A"/>
    <polygon points="10,13 18,8.5 10,4 2,8.5" fill="#38BDF8"/>
    <polygon points="2,8.5 10,13 10,24.5 2,20" fill="#2563EB"/>
    <!-- Connecting Cryptographic Chain Link 1 -->
    <line x1="18" y1="16.5" x2="26" y2="21" stroke="#22D3EE" stroke-width="2.5" stroke-dasharray="2 2"/>
    <circle cx="22" cy="18.7" r="2" fill="#FACC15"/>
    <!-- Center Block (Primary Node) -->
    <polygon points="26,17.5 35.5,12 35.5,25.5 26,31" fill="#1E40AF"/>
    <polygon points="26,17.5 35.5,12 26,6.5 16.5,12" fill="#60A5FA"/>
    <polygon points="16.5,12 26,17.5 26,31 16.5,25.5" fill="#3B82F6"/>
    <!-- Connecting Cryptographic Chain Link 2 -->
    <line x1="35.5" y1="21" x2="43.5" y2="16.5" stroke="#22D3EE" stroke-width="2.5" stroke-dasharray="2 2"/>
    <circle cx="39.5" cy="18.7" r="2" fill="#FACC15"/>
    <!-- Right Block -->
    <polygon points="43.5,13 51.5,8.5 51.5,20 43.5,24.5" fill="#1E3A8A"/>
    <polygon points="43.5,13 51.5,8.5 43.5,4 35.5,8.5" fill="#38BDF8"/>
    <polygon points="35.5,8.5 43.5,13 43.5,24.5 35.5,20" fill="#2563EB"/>
  </g>
</svg>""",

    "scraping": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping & Crawling">
  <rect width="64" height="64" rx="14" fill="#0C1524"/>
  <g transform="translate(13 13)">
    <!-- Browser Frame -->
    <rect x="2" y="2" width="34" height="26" rx="4" fill="#1E293B" stroke="#334155" stroke-width="1.8"/>
    <line x1="2" y1="8" x2="36" y2="8" stroke="#334155" stroke-width="1.5"/>
    <circle cx="6" cy="5" r="1.2" fill="#F87171"/>
    <circle cx="10" cy="5" r="1.2" fill="#FBBF24"/>
    <circle cx="14" cy="5" r="1.2" fill="#4ADE80"/>
    <!-- Web Crawling Spider Threads -->
    <path d="M11 14l8 5 8-5M19 19v9" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="11" cy="14" r="2.5" fill="#38BDF8"/>
    <circle cx="27" cy="14" r="2.5" fill="#38BDF8"/>
    <circle cx="19" cy="19" r="3" fill="#FBBF24"/>
    <!-- Data Harvester Beacon -->
    <circle cx="19" cy="28" r="4" fill="#A855F7"/>
    <circle cx="19" cy="28" r="1.5" fill="#FFFFFF"/>
    <!-- Inward Gathering Arrows -->
    <path d="M7 24l4-2M31 24l-4-2" stroke="#34D399" stroke-width="1.8" stroke-linecap="round"/>
  </g>
</svg>""",

    "rl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Reinforcement Learning">
  <rect width="64" height="64" rx="14" fill="#0A1D1A"/>
  <g transform="translate(13 13)">
    <!-- Policy Path -->
    <path d="M6 30V18a4 4 0 0 1 4-4h13" fill="none" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Agent Node -->
    <circle cx="6" cy="30" r="5" fill="#38BDF8"/>
    <circle cx="6" cy="30" r="2" fill="#FFFFFF"/>
    <!-- Action Step Arrow -->
    <polygon points="26,14 21,11 21,17" fill="#2DD4BF"/>
    <!-- Environment Feedback Loop -->
    <path d="M28 20a10 10 0 0 1-14 8" fill="none" stroke="#4ADE80" stroke-width="2" stroke-dasharray="2.5 2.5" stroke-linecap="round"/>
    <polygon points="12,28 15,25 16,30" fill="#4ADE80"/>
    <!-- Reward Star (+R) -->
    <g transform="translate(25 4)">
      <polygon points="7,0 9,5 14,5 10,8 12,13 7,10 2,13 4,8 0,5 5,5" fill="#FBBF24"/>
    </g>
  </g>
</svg>""",

    "nlp": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Natural Language Processing">
  <rect width="64" height="64" rx="14" fill="#141126"/>
  <g transform="translate(13 13)">
    <!-- Text Token Blocks -->
    <rect x="2" y="3" width="9" height="7" rx="2" fill="#818CF8"/>
    <rect x="14" y="3" width="10" height="7" rx="2" fill="#C084FC"/>
    <rect x="27" y="3" width="9" height="7" rx="2" fill="#F472B6"/>
    <!-- Neural Attention Rays -->
    <line x1="6.5" y1="10" x2="19" y2="20" stroke="#6366F1" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="19" y1="10" x2="19" y2="20" stroke="#A855F7" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="31.5" y1="10" x2="19" y2="20" stroke="#EC4899" stroke-width="1.8" stroke-linecap="round"/>
    <!-- Central Attention Core -->
    <circle cx="19" cy="20" r="4.5" fill="#FBBF24"/>
    <!-- Dense Semantic Embedding Vector Bars -->
    <rect x="3" y="28" width="5.5" height="5" rx="1" fill="#38BDF8"/>
    <rect x="10.5" y="28" width="5.5" height="5" rx="1" fill="#818CF8"/>
    <rect x="18" y="28" width="5.5" height="5" rx="1" fill="#A855F7"/>
    <rect x="25.5" y="28" width="5.5" height="5" rx="1" fill="#EC4899"/>
    <rect x="33" y="28" width="5.5" height="5" rx="1" fill="#34D399"/>
  </g>
</svg>""",

    "mlpatterns": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Design Patterns">
  <rect width="64" height="64" rx="14" fill="#0D1B2A"/>
  <g transform="translate(13 13)">
    <!-- Feature Store Block -->
    <rect x="2" y="5" width="12" height="12" rx="3" fill="#1E3A8A" stroke="#38BDF8" stroke-width="2"/>
    <line x1="5" y1="9" x2="11" y2="9" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="5" y1="13" x2="9" y2="13" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
    <!-- Pipeline Connection -->
    <path d="M14 11h6M26 11h6" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    <!-- Model Training / Inference Block -->
    <rect x="20" y="5" width="12" height="12" rx="3" fill="#065F46" stroke="#34D399" stroke-width="2"/>
    <circle cx="26" cy="11" r="3" fill="#34D399"/>
    <!-- Serving / Feedback Cascade Block -->
    <rect x="11" y="23" width="16" height="10" rx="3" fill="#581C87" stroke="#C084FC" stroke-width="2"/>
    <!-- Downward Cascade Arrows -->
    <path d="M8 17v8a2 2 0 0 0 2 2h1" fill="none" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <path d="M26 17v4a2 2 0 0 0 2 2h2" fill="none" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
  </g>
</svg>""",

    "m": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Power Query M">
  <rect width="64" height="64" rx="14" fill="#0A3A2F"/>
  <g transform="translate(13 13)">
    <!-- Table Container -->
    <rect x="2" y="2" width="34" height="34" rx="5" fill="#107C41" stroke="#22C55E" stroke-width="1.8"/>
    <!-- Header -->
    <rect x="2" y="2" width="34" height="9" rx="4" fill="#064E3B"/>
    <circle cx="7" cy="6.5" r="1.5" fill="#A7F3D0"/>
    <circle cx="13" cy="6.5" r="1.5" fill="#A7F3D0"/>
    <!-- Stylized M Lettermark -->
    <path d="M8 30V15h5.5l5.5 8 5.5-8H30v15h-4V20.5l-5 7h-2l-5-7V30H8z" fill="#FFFFFF"/>
  </g>
</svg>""",

    "llm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Large Language Models">
  <rect width="64" height="64" rx="14" fill="#130E26"/>
  <g transform="translate(14 14)">
    <!-- Attention Orbit -->
    <circle cx="18" cy="18" r="15" fill="none" stroke="#4C1D95" stroke-width="1.5" stroke-dasharray="3 3"/>
    <circle cx="18" cy="18" r="10" fill="none" stroke="#7C3AED" stroke-width="1.5"/>
    <!-- Attention Heads -->
    <circle cx="18" cy="3" r="2.5" fill="#38BDF8"/>
    <circle cx="33" cy="18" r="2.5" fill="#F472B6"/>
    <circle cx="18" cy="33" r="2.5" fill="#38BDF8"/>
    <circle cx="3" cy="18" r="2.5" fill="#F472B6"/>
    <!-- Generative AI Sparkle Core -->
    <path d="M18 7c0 5 4 9 9 9-5 0-9 4-9 9 0-5-4-9-9-9 5 0 9-4 9-9z" fill="#FBBF24"/>
    <circle cx="18" cy="18" r="2.5" fill="#FFFFFF"/>
  </g>
</svg>""",

    "dbt": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="dbt">
  <rect width="64" height="64" rx="14" fill="#241410"/>
  <g transform="translate(14 13)">
    <!-- Official dbt Isometric Faceted Cube -->
    <polygon points="18,3 33,11.5 18,20 3,11.5" fill="#FFA382"/>
    <polygon points="3,11.5 18,20 18,37 3,28.5" fill="#FF694B"/>
    <polygon points="18,20 33,11.5 33,28.5 18,37" fill="#D14524"/>
    <circle cx="18" cy="20" r="3.5" fill="#241410"/>
    <circle cx="18" cy="20" r="2" fill="#FFA382"/>
  </g>
</svg>""",

    "datastructure": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Data Structures">
  <rect width="64" height="64" rx="14" fill="#0C1A2E"/>
  <g transform="translate(13 12)">
    <!-- Root node -->
    <circle cx="19" cy="7" r="5" fill="#38BDF8"/>
    <!-- Branch lines -->
    <line x1="19" y1="7" x2="9" y2="18" stroke="#64748B" stroke-width="2"/>
    <line x1="19" y1="7" x2="29" y2="18" stroke="#64748B" stroke-width="2"/>
    <!-- Child nodes -->
    <circle cx="9" cy="18" r="4.5" fill="#818CF8"/>
    <circle cx="29" cy="18" r="4.5" fill="#818CF8"/>
    <!-- Sub-branch lines -->
    <line x1="9" y1="18" x2="4" y2="28" stroke="#64748B" stroke-width="1.8"/>
    <line x1="9" y1="18" x2="14" y2="28" stroke="#64748B" stroke-width="1.8"/>
    <line x1="29" y1="18" x2="34" y2="28" stroke="#64748B" stroke-width="1.8"/>
    <!-- Leaf nodes -->
    <circle cx="4" cy="28" r="3.5" fill="#34D399"/>
    <circle cx="14" cy="28" r="3.5" fill="#34D399"/>
    <circle cx="34" cy="28" r="3.5" fill="#34D399"/>
    <!-- Array memory buffer at base -->
    <g transform="translate(3 34)">
      <rect x="0" y="0" width="32" height="6" rx="2" fill="#1E293B" stroke="#475569" stroke-width="1"/>
      <line x1="8" y1="0" x2="8" y2="6" stroke="#475569" stroke-width="1"/>
      <line x1="16" y1="0" x2="16" y2="6" stroke="#475569" stroke-width="1"/>
      <line x1="24" y1="0" x2="24" y2="6" stroke="#475569" stroke-width="1"/>
    </g>
  </g>
</svg>""",

    "bpmn": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="BPMN 2.0">
  <rect width="64" height="64" rx="14" fill="#112217"/>
  <g transform="translate(8 16)">
    <!-- Start Event: Green thin circle -->
    <circle cx="6" cy="16" r="5" fill="#166534" stroke="#4ADE80" stroke-width="2"/>
    <line x1="11" y1="16" x2="16" y2="16" stroke="#E2E8F0" stroke-width="1.8"/>
    <!-- Task Activity: Rounded rect -->
    <rect x="16" y="7" width="14" height="18" rx="3" fill="#1E293B" stroke="#60A5FA" stroke-width="1.8"/>
    <line x1="19" y1="13" x2="27" y2="13" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="19" y1="18" x2="24" y2="18" stroke="#94A3B8" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="30" y1="16" x2="34" y2="16" stroke="#E2E8F0" stroke-width="1.8"/>
    <!-- Gateway: Diamond with + -->
    <polygon points="39,10 45,16 39,22 33,16" fill="#854D0E" stroke="#FACC15" stroke-width="1.8"/>
    <path d="M37 16h4M39 14v4" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="45" y1="16" x2="50" y2="16" stroke="#E2E8F0" stroke-width="1.8"/>
    <!-- End Event: Red thick circle -->
    <circle cx="55" cy="16" r="5" fill="#991B1B" stroke="#F87171" stroke-width="3"/>
  </g>
</svg>""",

    "algorithm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Algorithms">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <g transform="translate(13 11)">
    <!-- Start State -->
    <rect x="12" y="2" width="14" height="7" rx="3.5" fill="#38BDF8"/>
    <line x1="19" y1="9" x2="19" y2="14" stroke="#94A3B8" stroke-width="2"/>
    <!-- Decision Diamond -->
    <polygon points="19,14 27,21 19,28 11,21" fill="#1E293B" stroke="#FBBF24" stroke-width="2"/>
    <!-- Branch True/False -->
    <line x1="27" y1="21" x2="34" y2="21" stroke="#94A3B8" stroke-width="2"/>
    <line x1="34" y1="21" x2="34" y2="33" stroke="#94A3B8" stroke-width="2"/>
    <line x1="19" y1="28" x2="19" y2="33" stroke="#94A3B8" stroke-width="2"/>
    <!-- Output Nodes -->
    <circle cx="19" cy="36" r="4.5" fill="#818CF8"/>
    <circle cx="34" cy="36" r="4.5" fill="#4ADE80"/>
    <path d="M32 36l1.5 1.5 3-3" stroke="#FFFFFF" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>""",
}

for name, svg in REDESIGNS.items():
    (LOGOS_DIR / f"{name}.svg").write_text(svg.strip() + "\n", encoding="utf-8")
    print(f"Updated {name}.svg")

print("All selections and redesigns applied successfully.")
