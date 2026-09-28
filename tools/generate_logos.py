"""Generate consistent brand SVG marks for each learn-* course."""

from pathlib import Path

OUT = Path(__file__).resolve().parent.parent / "assets" / "logos"


def write(name: str, svg: str) -> None:
    OUT.mkdir(parents=True, exist_ok=True)
    (OUT / f"{name}.svg").write_text(svg.strip() + "\n", encoding="utf-8")
    print(name)


MARKS: dict[str, str] = {
    "python": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Python">
  <rect width="64" height="64" rx="14" fill="#1E3A5F"/>
  <path d="M32 10c-8 0-14 2.2-14 7.2v4.4h14.2v1.8H13.8C8.6 23.4 6 27.2 6 33.2S8.8 43 14 43h5v-7.2c0-5 4.2-9 9.2-9H42c4.4 0 8-3.6 8-8v-6.8C50 12.2 42.2 10 32 10z" fill="#3776AB"/>
  <path d="M32 54c8 0 14-2.2 14-7.2v-4.4H31.8v-1.8h24.4c5.2 0 7.8-3.8 7.8-9.8S58 21 52.8 21h-5v7.2c0 5-4.2 9-9.2 9H22c-4.4 0-8 3.6-8 8v6.8C14 51.8 21.8 54 32 54z" fill="#FFD43B"/>
  <circle cx="22" cy="17" r="2.4" fill="#FFD43B"/>
  <circle cx="42" cy="47" r="2.4" fill="#3776AB"/>
</svg>""",
    "cpp": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="C++">
  <rect width="64" height="64" rx="14" fill="#0B3D91"/>
  <text x="32" y="40" text-anchor="middle" font-family="Consolas, monospace" font-size="22" font-weight="700" fill="#fff">C++</text>
</svg>""",
    "rust": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Rust">
  <rect width="64" height="64" rx="14" fill="#1B1B1B"/>
  <circle cx="32" cy="32" r="18" fill="none" stroke="#DEA584" stroke-width="3"/>
  <text x="32" y="38" text-anchor="middle" font-family="Georgia, serif" font-size="18" font-weight="700" fill="#DEA584">R</text>
</svg>""",
    "ts": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="TypeScript">
  <rect width="64" height="64" rx="14" fill="#3178C6"/>
  <text x="32" y="41" text-anchor="middle" font-family="Consolas, monospace" font-size="24" font-weight="700" fill="#fff">TS</text>
</svg>""",
    "powershell": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="PowerShell">
  <rect width="64" height="64" rx="14" fill="#012456"/>
  <path d="M16 20h22l-2 6H18v6h14l-2 6H18v10h-4V20z" fill="#5391FE"/>
  <path d="M34 34l12 6-12 6v-5l7-3-7-3v-5z" fill="#EEA71D"/>
</svg>""",
    "cmd": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Windows CMD">
  <rect width="64" height="64" rx="14" fill="#0C1A2A"/>
  <rect x="10" y="14" width="44" height="36" rx="4" fill="none" stroke="#7C8B9A" stroke-width="2"/>
  <path d="M18 26h8l-3 4 3 4h-8" fill="none" stroke="#4CC2FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  <path d="M32 36h12" stroke="#E8EEF4" stroke-width="2" stroke-linecap="round"/>
</svg>""",
    "git": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Git">
  <rect width="64" height="64" rx="14" fill="#241C15"/>
  <circle cx="22" cy="20" r="5" fill="#F05033"/>
  <circle cx="22" cy="44" r="5" fill="#F05033"/>
  <circle cx="42" cy="32" r="5" fill="#F05033"/>
  <path d="M22 25v14M27 22c8 2 10 6 15 10" stroke="#F05033" stroke-width="3" stroke-linecap="round" fill="none"/>
</svg>""",
    "sql": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="SQL">
  <rect width="64" height="64" rx="14" fill="#0F3D4C"/>
  <ellipse cx="32" cy="20" rx="16" ry="6" fill="none" stroke="#3DB8FF" stroke-width="2.5"/>
  <path d="M16 20v12c0 3.3 7.2 6 16 6s16-2.7 16-6V20" fill="none" stroke="#3DB8FF" stroke-width="2.5"/>
  <path d="M16 32v12c0 3.3 7.2 6 16 6s16-2.7 16-6V32" fill="none" stroke="#3DB8FF" stroke-width="2.5"/>
</svg>""",
    "airflow": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Airflow">
  <rect width="64" height="64" rx="14" fill="#017CEE"/>
  <path d="M14 36c6-10 12-14 18-14s12 4 18 14" fill="none" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <circle cx="22" cy="28" r="3" fill="#fff"/>
  <circle cx="32" cy="24" r="3" fill="#fff"/>
  <circle cx="42" cy="28" r="3" fill="#fff"/>
  <path d="M20 42h24M24 48h16" stroke="#9AD0FF" stroke-width="2.5" stroke-linecap="round"/>
</svg>""",
    "spark": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Spark">
  <rect width="64" height="64" rx="14" fill="#E25A1C"/>
  <path d="M32 12l4 12 10-8-3 13 12-2-10 10 10 10-12-2 3 13-10-8-4 12-4-12-10 8 3-13-12 2 10-10-10-10 12 2-3-13 10 8z" fill="#fff"/>
</svg>""",
    "mlflow": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="MLflow">
  <rect width="64" height="64" rx="14" fill="#0194E2"/>
  <circle cx="22" cy="32" r="6" fill="#fff"/>
  <circle cx="42" cy="22" r="4" fill="#0194E2" stroke="#fff" stroke-width="2.5"/>
  <circle cx="42" cy="42" r="4" fill="#0194E2" stroke="#fff" stroke-width="2.5"/>
  <path d="M28 30l10-6M28 34l10 6" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>
</svg>""",
    "m": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Power Query M">
  <rect width="64" height="64" rx="14" fill="#2C2A5A"/>
  <text x="32" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="30" font-weight="700" fill="#F2C811">M</text>
</svg>""",
    "streamlit": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Streamlit">
  <rect width="64" height="64" rx="14" fill="#FF4B4B"/>
  <circle cx="32" cy="32" r="14" fill="none" stroke="#fff" stroke-width="3"/>
  <circle cx="32" cy="32" r="5" fill="#fff"/>
</svg>""",
    "shiny": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Shiny">
  <rect width="64" height="64" rx="14" fill="#2A7EC0"/>
  <path d="M32 12l3.5 12.5L48 28l-12.5 3.5L32 44l-3.5-12.5L16 28l12.5-3.5L32 12z" fill="#fff"/>
  <circle cx="46" cy="46" r="5" fill="#F5A623"/>
</svg>""",
    "api": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="API">
  <rect width="64" height="64" rx="14" fill="#12324A"/>
  <rect x="12" y="22" width="16" height="20" rx="3" fill="none" stroke="#3DB8FF" stroke-width="2.5"/>
  <rect x="36" y="22" width="16" height="20" rx="3" fill="none" stroke="#2A9D8F" stroke-width="2.5"/>
  <path d="M28 32h8" stroke="#F0B429" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="2.5" fill="#F0B429"/>
</svg>""",
    "pkgm": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Package Management">
  <rect width="64" height="64" rx="14" fill="#2B2F36"/>
  <path d="M18 22l14-8 14 8v20l-14 8-14-8V22z" fill="none" stroke="#7DD3FC" stroke-width="2.5" stroke-linejoin="round"/>
  <path d="M18 22l14 8 14-8M32 30v20" stroke="#7DD3FC" stroke-width="2.5" stroke-linejoin="round"/>
</svg>""",
    "django": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Django">
  <rect width="64" height="64" rx="14" fill="#0C4B33"/>
  <text x="32" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="28" font-weight="700" fill="#fff">dj</text>
</svg>""",
    "flask": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Flask">
  <rect width="64" height="64" rx="14" fill="#1B1B1B"/>
  <path d="M28 12h8v12l10 22a4 4 0 0 1-3.5 6h-21A4 4 0 0 1 18 46l10-22V12z" fill="none" stroke="#fff" stroke-width="2.5"/>
  <path d="M24 38h16" stroke="#E6B36A" stroke-width="3" stroke-linecap="round"/>
</svg>""",
    "mlstats": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Statistics">
  <rect width="64" height="64" rx="14" fill="#2D3142"/>
  <rect x="16" y="34" width="6" height="14" rx="1.5" fill="#7DD3FC"/>
  <rect x="26" y="26" width="6" height="22" rx="1.5" fill="#2A9D8F"/>
  <rect x="36" y="18" width="6" height="30" rx="1.5" fill="#F0B429"/>
  <rect x="46" y="28" width="6" height="20" rx="1.5" fill="#E76F51"/>
</svg>""",
    "mlmath": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="ML Math">
  <rect width="64" height="64" rx="14" fill="#2A1F4A"/>
  <text x="32" y="40" text-anchor="middle" font-family="Georgia, serif" font-size="26" font-weight="700" fill="#C4B5FD">∑</text>
</svg>""",
    "rl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Reinforcement Learning">
  <rect width="64" height="64" rx="14" fill="#1A2F1A"/>
  <circle cx="20" cy="40" r="5" fill="#4ADE80"/>
  <circle cx="32" cy="24" r="5" fill="#FBBF24"/>
  <circle cx="46" cy="38" r="5" fill="#60A5FA"/>
  <path d="M25 38l5-12M37 27l7 8" stroke="#86EFAC" stroke-width="2.5" stroke-linecap="round"/>
</svg>""",
    "dl": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Deep Learning">
  <rect width="64" height="64" rx="14" fill="#1E1B2E"/>
  <circle cx="18" cy="22" r="4" fill="#A78BFA"/>
  <circle cx="18" cy="42" r="4" fill="#A78BFA"/>
  <circle cx="32" cy="18" r="4" fill="#E879F9"/>
  <circle cx="32" cy="32" r="4" fill="#E879F9"/>
  <circle cx="32" cy="46" r="4" fill="#E879F9"/>
  <circle cx="48" cy="28" r="4" fill="#FBBF24"/>
  <circle cx="48" cy="40" r="4" fill="#FBBF24"/>
  <path d="M22 22l6-3M22 42l6 3M36 18l8 8M36 32l8-2M36 32l8 6M36 46l8-5" stroke="#CBD5E1" stroke-width="1.5" opacity="0.7"/>
</svg>""",
    "nlp": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="NLP">
  <rect width="64" height="64" rx="14" fill="#2A2140"/>
  <rect x="12" y="16" width="28" height="18" rx="4" fill="none" stroke="#C4B5FD" stroke-width="2.5"/>
  <rect x="24" y="30" width="28" height="18" rx="4" fill="none" stroke="#F0B429" stroke-width="2.5"/>
  <circle cx="22" cy="25" r="2" fill="#C4B5FD"/>
  <circle cx="30" cy="25" r="2" fill="#C4B5FD"/>
  <circle cx="38" cy="25" r="2" fill="#C4B5FD"/>
</svg>""",
    "cv": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Computer Vision">
  <rect width="64" height="64" rx="14" fill="#1A2B2E"/>
  <ellipse cx="32" cy="32" rx="18" ry="12" fill="none" stroke="#2DD4BF" stroke-width="2.5"/>
  <circle cx="32" cy="32" r="6" fill="#2DD4BF"/>
  <circle cx="32" cy="32" r="2.5" fill="#0F172A"/>
  <path d="M14 22h6M44 22h6M14 42h6M44 42h6" stroke="#F0B429" stroke-width="2" stroke-linecap="round"/>
</svg>""",
    "aws": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="AWS">
  <rect width="64" height="64" rx="14" fill="#232F3E"/>
  <path d="M16 38c8 6 24 6 32 0" fill="none" stroke="#FF9900" stroke-width="3" stroke-linecap="round"/>
  <path d="M20 28h8l-2 6H18v-2c0-2 1-4 2-4zM32 22h6v12h-6zM42 26h6v8h-6z" fill="#fff"/>
</svg>""",
    "azure": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Azure">
  <rect width="64" height="64" rx="14" fill="#0078D4"/>
  <path d="M28 14h10l14 28H40L28 14zM22 24L12 42h12l6-12-8-6z" fill="#fff"/>
</svg>""",
    "databricks": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Databricks">
  <rect width="64" height="64" rx="14" fill="#FF3621"/>
  <path d="M18 28l14-8 14 8-14 8-14-8zM18 38l14 8 14-8M18 44l14 8 14-8" fill="none" stroke="#fff" stroke-width="2.5" stroke-linejoin="round"/>
</svg>""",
    "snowflake": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Snowflake">
  <rect width="64" height="64" rx="14" fill="#29B5E8"/>
  <path d="M32 12v40M16 22l32 20M16 42l32-20" stroke="#fff" stroke-width="3" stroke-linecap="round"/>
  <path d="M26 16l6 4 6-4M26 48l6-4 6 4M16 28l6 2-2 6M48 36l-6-2 2-6M16 36l6-2-2-6M48 28l-6 2 2 6" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
</svg>""",
    "grafana": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Grafana">
  <rect width="64" height="64" rx="14" fill="#1A1A1A"/>
  <circle cx="32" cy="32" r="16" fill="none" stroke="#F46800" stroke-width="3"/>
  <path d="M32 18v8M32 38v8M18 32h8M38 32h8" stroke="#F46800" stroke-width="2.5" stroke-linecap="round"/>
  <circle cx="32" cy="32" r="5" fill="#F46800"/>
</svg>""",
    "hadoop": """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Hadoop">
  <rect width="64" height="64" rx="14" fill="#1B3A4B"/>
  <rect x="14" y="16" width="14" height="14" rx="2" fill="#FFCA28"/>
  <rect x="36" y="16" width="14" height="14" rx="2" fill="#FFCA28"/>
  <rect x="25" y="36" width="14" height="14" rx="2" fill="#66BB6A"/>
  <path d="M28 23h8M21 30l8 8M43 30l-8 8" stroke="#9AD0FF" stroke-width="2" stroke-linecap="round"/>
</svg>""",
    # placeholders for not-yet-deployed courses — keep visual identity consistent
    "mlstats_note": "",
}


def main() -> None:
    for name, svg in MARKS.items():
        if not svg:
            continue
        write(name, svg)
    print("total:", len(list(OUT.glob("*.svg"))))


if __name__ == "__main__":
    main()
