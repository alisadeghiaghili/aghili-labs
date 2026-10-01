"""Refine conceptual and non-commercial course marks into high-craft vector designs."""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "logos"

CUSTOM_LOGOS: dict[str, str] = {
    # 1. Algorithms: Directed graph / dynamic programming path with nodes
    "algorithm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Algorithms">
  <rect width="64" height="64" rx="14" fill="#0F172A"/>
  <g transform="translate(13 13)">
    <line x1="6" y1="32" x2="19" y2="12" stroke="#38BDF8" stroke-width="2.5"/>
    <line x1="19" y1="12" x2="32" y2="24" stroke="#38BDF8" stroke-width="2.5"/>
    <line x1="6" y1="32" x2="20" y2="32" stroke="#64748B" stroke-width="2" stroke-dasharray="2 2"/>
    <line x1="20" y1="32" x2="32" y2="24" stroke="#64748B" stroke-width="2" stroke-dasharray="2 2"/>
    <circle cx="6" cy="32" r="5" fill="#38BDF8"/>
    <circle cx="19" cy="12" r="5" fill="#818CF8"/>
    <circle cx="20" cy="32" r="4" fill="#1E293B" stroke="#64748B" stroke-width="2"/>
    <circle cx="32" cy="24" r="6" fill="#F43F5E"/>
  </g>
</svg>""",

    # 2. Data Structures: Balanced tree hierarchy & linked node
    "datastructure": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Data Structures">
  <rect width="64" height="64" rx="14" fill="#0C1E33"/>
  <g transform="translate(12 12)">
    <line x1="20" y1="8" x2="10" y2="22" stroke="#38BDF8" stroke-width="2"/>
    <line x1="20" y1="8" x2="30" y2="22" stroke="#38BDF8" stroke-width="2"/>
    <line x1="10" y1="22" x2="6" y2="34" stroke="#94A3B8" stroke-width="1.8"/>
    <line x1="10" y1="22" x2="15" y2="34" stroke="#94A3B8" stroke-width="1.8"/>
    <circle cx="20" cy="8" r="5" fill="#38BDF8"/>
    <circle cx="10" cy="22" r="4.5" fill="#818CF8"/>
    <circle cx="30" cy="22" r="4.5" fill="#818CF8"/>
    <circle cx="6" cy="34" r="3.5" fill="#2DD4BF"/>
    <circle cx="15" cy="34" r="3.5" fill="#2DD4BF"/>
  </g>
</svg>""",

    # 3. ML Math: Matrix transform & eigenvalues
    "mlmath": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Math">
  <rect width="64" height="64" rx="14" fill="#201335"/>
  <g transform="translate(14 14)">
    <path d="M4 6h4M4 6v24M4 30h4M32 6h-4M32 6v24M32 30h-4" fill="none" stroke="#C4B5FD" stroke-width="2.5" stroke-linecap="round"/>
    <circle cx="12" cy="13" r="3" fill="#A78BFA"/>
    <circle cx="24" cy="13" r="3" fill="#6366F1"/>
    <circle cx="12" cy="23" r="3" fill="#6366F1"/>
    <circle cx="24" cy="23" r="3" fill="#EC4899"/>
  </g>
</svg>""",

    # 4. ML Statistics: Normal distribution Gaussian curve
    "mlstats": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Statistics">
  <rect width="64" height="64" rx="14" fill="#1C2430"/>
  <g transform="translate(12 14)">
    <line x1="4" y1="30" x2="36" y2="30" stroke="#64748B" stroke-width="2" stroke-linecap="round"/>
    <path d="M4 30c6 0 10-2 12-10 2-8 3-14 4-14s2 6 4 14c2 8 6 10 12 10" fill="none" stroke="#38BDF8" stroke-width="3" stroke-linecap="round"/>
    <line x1="20" y1="6" x2="20" y2="30" stroke="#FBBF24" stroke-width="1.8" stroke-dasharray="2 2"/>
    <circle cx="20" cy="6" r="3" fill="#FBBF24"/>
  </g>
</svg>""",

    # 5. Computer Vision: Camera aperture & AI bounding box
    "cv": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Computer Vision">
  <rect width="64" height="64" rx="14" fill="#062826"/>
  <g transform="translate(14 14)">
    <path d="M3 10V3h7M26 3h7v7M33 26v7h-7M10 33H3v-7" fill="none" stroke="#2DD4BF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="18" cy="18" r="9" fill="none" stroke="#FBBF24" stroke-width="2"/>
    <circle cx="18" cy="18" r="4" fill="#2DD4BF"/>
  </g>
</svg>""",

    # 6. NLP: Token sequence to attention vector
    "nlp": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="NLP">
  <rect width="64" height="64" rx="14" fill="#1E192B"/>
  <g transform="translate(13 14)">
    <rect x="2" y="5" width="10" height="7" rx="2" fill="#818CF8"/>
    <rect x="14" y="5" width="10" height="7" rx="2" fill="#A78BFA"/>
    <rect x="26" y="5" width="10" height="7" rx="2" fill="#C084FC"/>
    <path d="M7 16v4c0 3 4 5 12 5s12-2 12-5v-4" fill="none" stroke="#F472B6" stroke-width="2" stroke-linecap="round"/>
    <circle cx="19" cy="30" r="4.5" fill="#38BDF8"/>
    <line x1="19" y1="25" x2="19" y2="26" stroke="#38BDF8" stroke-width="2"/>
  </g>
</svg>""",

    # 7. Deep Learning: Multilayer neural network
    "dl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Deep Learning">
  <rect width="64" height="64" rx="14" fill="#181528"/>
  <g transform="translate(13 13)">
    <line x1="5" y1="9" x2="19" y2="5" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="9" x2="19" y2="19" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="9" x2="19" y2="33" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="29" x2="19" y2="5" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="29" x2="19" y2="19" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="29" x2="19" y2="33" stroke="#475569" stroke-width="1.5"/>
    <line x1="19" y1="5" x2="33" y2="19" stroke="#818CF8" stroke-width="1.8"/>
    <line x1="19" y1="19" x2="33" y2="19" stroke="#818CF8" stroke-width="1.8"/>
    <line x1="19" y1="33" x2="33" y2="19" stroke="#818CF8" stroke-width="1.8"/>
    <circle cx="5" cy="9" r="4" fill="#38BDF8"/>
    <circle cx="5" cy="29" r="4" fill="#38BDF8"/>
    <circle cx="19" cy="5" r="4" fill="#A855F7"/>
    <circle cx="19" cy="19" r="4" fill="#A855F7"/>
    <circle cx="19" cy="33" r="4" fill="#A855F7"/>
    <circle cx="33" cy="19" r="5" fill="#F43F5E"/>
  </g>
</svg>""",

    # 8. Reinforcement Learning: Agent reward feedback loop
    "rl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Reinforcement Learning">
  <rect width="64" height="64" rx="14" fill="#13231B"/>
  <g transform="translate(13 13)">
    <circle cx="19" cy="19" r="14" fill="none" stroke="#334155" stroke-width="2"/>
    <path d="M19 5a14 14 0 0 1 14 14" fill="none" stroke="#4ADE80" stroke-width="3" stroke-linecap="round"/>
    <polygon points="34,16 35,21 30,20" fill="#4ADE80"/>
    <path d="M19 33a14 14 0 0 1-14-14" fill="none" stroke="#FBBF24" stroke-width="3" stroke-linecap="round"/>
    <polygon points="4,22 3,17 8,18" fill="#FBBF24"/>
    <circle cx="19" cy="19" r="4" fill="#FFFFFF"/>
  </g>
</svg>""",

    # 9. SQL: Relational database cylinder stack with query arrow
    "sql": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="SQL">
  <rect width="64" height="64" rx="14" fill="#0B2E3B"/>
  <g transform="translate(15 13)">
    <ellipse cx="17" cy="7" rx="14" ry="5" fill="none" stroke="#38BDF8" stroke-width="2.5"/>
    <path d="M3 7v10c0 2.8 6.3 5 14 5s14-2.2 14-5V7" fill="none" stroke="#38BDF8" stroke-width="2.5"/>
    <path d="M3 17v10c0 2.8 6.3 5 14 5s14-2.2 14-5V17" fill="none" stroke="#38BDF8" stroke-width="2.5"/>
    <path d="M17 14l5 5-5 5" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>""",

    # 10. CMD: Windows Command Prompt terminal
    "cmd": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Windows CMD">
  <rect width="64" height="64" rx="14" fill="#0C141F"/>
  <g transform="translate(12 14)">
    <rect x="2" y="2" width="36" height="32" rx="4" fill="none" stroke="#475569" stroke-width="2"/>
    <path d="M8 12l5 5-5 5" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="17" y1="22" x2="26" y2="22" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round"/>
  </g>
</svg>""",

    # 11. API: Modern RESTful endpoint connectors
    "api": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="API">
  <rect width="64" height="64" rx="14" fill="#0C2538"/>
  <g transform="translate(13 15)">
    <circle cx="6" cy="17" r="4.5" fill="#38BDF8"/>
    <circle cx="32" cy="7" r="4.5" fill="#34D399"/>
    <circle cx="32" cy="27" r="4.5" fill="#FBBF24"/>
    <path d="M10.5 17h8M18.5 17V7h9M18.5 17v10h9" fill="none" stroke="#64748B" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
  </g>
</svg>""",

    # 12. Web Scraping: Web DOM node extractor spider
    "scraping": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping">
  <rect width="64" height="64" rx="14" fill="#1C1829"/>
  <g transform="translate(14 14)">
    <circle cx="18" cy="18" r="7" fill="#8B5CF6"/>
    <path d="M18 11V3M18 25v8M11 18H3M25 18h8M13 13L7 7M23 23l6 6M13 23l-6 6M23 13l6-6" stroke="#C084FC" stroke-width="2" stroke-linecap="round"/>
    <circle cx="18" cy="18" r="2.5" fill="#FBBF24"/>
  </g>
</svg>""",

    # 13. Functional Programming: Pure lambda λ mapping
    "functional": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Functional Programming">
  <rect width="64" height="64" rx="14" fill="#240E44"/>
  <g transform="translate(16 12)">
    <path d="M8 8l16 26M18 24l-11 10" fill="none" stroke="#C4B5FD" stroke-width="3.5" stroke-linecap="round" stroke-linejoin="round"/>
    <circle cx="8" cy="8" r="3" fill="#F472B6"/>
    <circle cx="24" cy="34" r="3" fill="#38BDF8"/>
  </g>
</svg>""",

    # 14. Software Design & Clean Code: Modular concentric architecture
    "softwaredesign": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Software Design">
  <rect width="64" height="64" rx="14" fill="#063826"/>
  <g transform="translate(13 13)">
    <circle cx="19" cy="19" r="16" fill="none" stroke="#059669" stroke-width="2"/>
    <circle cx="19" cy="19" r="10" fill="none" stroke="#10B981" stroke-width="2.5"/>
    <rect x="14" y="14" width="10" height="10" rx="2" fill="#34D399"/>
  </g>
</svg>""",

    # 15. Applied Cryptography: Security keyhole & cipher lock
    "cryptography": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Applied Cryptography">
  <rect width="64" height="64" rx="14" fill="#18153B"/>
  <g transform="translate(15 13)">
    <rect x="3" y="16" width="28" height="20" rx="4" fill="#4F46E5"/>
    <path d="M8 16V9a9 9 0 0 1 18 0v7" fill="none" stroke="#818CF8" stroke-width="3" stroke-linecap="round"/>
    <circle cx="17" cy="24" r="2.5" fill="#FFFFFF"/>
    <path d="M17 26.5v4" stroke="#FFFFFF" stroke-width="2" stroke-linecap="round"/>
  </g>
</svg>""",

    # 16. LLMs: Multi-head attention & generative sparkle
    "llm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Large Language Models">
  <rect width="64" height="64" rx="14" fill="#18181B"/>
  <g transform="translate(14 14)">
    <path d="M18 3l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" fill="#F43F5E"/>
    <circle cx="6" cy="6" r="2.5" fill="#FDA4AF"/>
    <circle cx="30" cy="28" r="3.5" fill="#38BDF8"/>
  </g>
</svg>""",

    # 17. ML Design Patterns: Reusable ML pipeline nodes
    "mlpatterns": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Design Patterns">
  <rect width="64" height="64" rx="14" fill="#142132"/>
  <g transform="translate(14 14)">
    <circle cx="7" cy="9" r="4.5" fill="#38BDF8"/>
    <circle cx="29" cy="9" r="4.5" fill="#34D399"/>
    <circle cx="18" cy="27" r="5" fill="#FBBF24"/>
    <path d="M11 11l5 12M25 11l-5 12" stroke="#64748B" stroke-width="2.5" stroke-linecap="round"/>
    <line x1="12" y1="9" x2="24" y2="9" stroke="#64748B" stroke-width="2" stroke-dasharray="2 2"/>
  </g>
</svg>""",
}


def main() -> None:
    for name, svg in CUSTOM_LOGOS.items():
        (OUT / f"{name}.svg").write_text(svg.strip() + "\n", encoding="utf-8")
        print(f"Refined {name}.svg")


if __name__ == "__main__":
    main()
