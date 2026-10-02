"""Generate and preview concepts for:
1. Technical Interviews (techinterviews)
2. Web Scraping (scraping)
3. Time Series & Forecasting (timeseries)
"""

from pathlib import Path

ARTIFACT_DIR = Path(r"C:\Users\alisa\.gemini\antigravity\brain\dbd66694-edfd-45d9-8893-e4c39d2c2f9c")

# --- TECHNICAL INTERVIEW CONCEPTS ---

# Tech 1: Dialogue of Code & Solution (Two conversational speech bubbles: Code challenge { ; } and Verified Solution ✔)
TECH_1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Technical Interview - Dialogue">
  <rect width="64" height="64" rx="14" fill="#0C1322"/>
  <g transform="translate(11 12)">
    <!-- Interviewer Speech Bubble (Top Right) -->
    <path d="M12 2h24a5 5 0 0 1 5 5v14a5 5 0 0 1-5 5H22l-7 6v-6h-3a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5z" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
    <!-- Code prompt inside question bubble -->
    <path d="M15 11l4 3.5-4 3.5" fill="none" stroke="#38BDF8" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="22" y1="18" x2="30" y2="18" stroke="#94A3B8" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Candidate Solution Bubble / Badge (Bottom Left) -->
    <g transform="translate(18 16)">
      <circle cx="16" cy="16" r="13" fill="#064E3B" stroke="#34D399" stroke-width="2"/>
      <!-- Verified Checkmark & Code brackets -->
      <path d="M11 16l3.5 3.5 8-8" fill="none" stroke="#34D399" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
    </g>
  </g>
</svg>"""

# Tech 2: System Design Whiteboard + Live Coding Terminal
TECH_2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Technical Interview - Whiteboard & Code">
  <rect width="64" height="64" rx="14" fill="#0E1626"/>
  <g transform="translate(12 11)">
    <!-- System Design Whiteboard Frame -->
    <rect x="2" y="3" width="36" height="26" rx="4" fill="#182338" stroke="#60A5FA" stroke-width="2"/>
    <!-- Top Whiteboard Header Clips -->
    <rect x="14" y="1" width="12" height="3.5" rx="1" fill="#93C5FD"/>
    <!-- Architecture Diagram on Whiteboard -->
    <rect x="6" y="8" width="8" height="6" rx="1.5" fill="#1E3A8A" stroke="#93C5FD" stroke-width="1.2"/>
    <line x1="14" y1="11" x2="19" y2="11" stroke="#60A5FA" stroke-width="1.5"/>
    <rect x="19" y="8" width="8" height="6" rx="1.5" fill="#065F46" stroke="#34D399" stroke-width="1.2"/>
    <line x1="23" y1="14" x2="23" y2="18" stroke="#60A5FA" stroke-width="1.5"/>
    <rect x="19" y="18" width="14" height="6" rx="1.5" fill="#7C2D12" stroke="#F97316" stroke-width="1.2"/>
    <!-- Stand / Easel legs -->
    <line x1="8" y1="29" x2="4" y2="39" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
    <line x1="32" y1="29" x2="36" y2="39" stroke="#475569" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Passed / Verified Gold Star Stamp -->
    <g transform="translate(26 1)">
      <polygon points="6,0 8,4 12,4 9,7 10,11 6,8 2,11 3,7 0,4 4,4" fill="#FBBF24"/>
    </g>
  </g>
</svg>"""

# Tech 3: The Live Code Pair / Interview Terminal with Assessment Target
TECH_3 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Technical Interview - Pair Coding">
  <rect width="64" height="64" rx="14" fill="#101424"/>
  <g transform="translate(13 13)">
    <!-- Terminal Window -->
    <rect x="1" y="2" width="36" height="34" rx="5" fill="#181F33" stroke="#38BDF8" stroke-width="2"/>
    <line x1="1" y1="9" x2="37" y2="9" stroke="#334155" stroke-width="1.5"/>
    <circle cx="5" cy="5.5" r="1.2" fill="#EF4444"/>
    <circle cx="9" cy="5.5" r="1.2" fill="#F59E0B"/>
    <circle cx="13" cy="5.5" r="1.2" fill="#10B981"/>
    
    <!-- Code prompt on left -->
    <path d="M7 16l4 3.5-4 3.5" fill="none" stroke="#38BDF8" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"/>
    <line x1="14" y1="23" x2="22" y2="23" stroke="#FBBF24" stroke-width="2.2" stroke-linecap="round"/>
    
    <!-- Code syntax brackets in center -->
    <text x="19" y="32" font-family="monospace" font-size="11" font-weight="bold" fill="#A78BFA" text-anchor="middle">{ return }</text>
    
    <!-- Target Bullseye / Acceptance Icon (Top Right) -->
    <circle cx="30" cy="5.5" r="4.5" fill="#065F46" stroke="#34D399" stroke-width="1.5"/>
    <circle cx="30" cy="5.5" r="2" fill="#34D399"/>
  </g>
</svg>"""

# --- WEB SCRAPING CONCEPTS ---

# Scraping 1: The Inspect Element Cursor & HTML Target Extractor
SCRAPING_1 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping - Inspect & Extract">
  <rect width="64" height="64" rx="14" fill="#0A1424"/>
  <g transform="translate(12 12)">
    <!-- Web Page Frame -->
    <rect x="2" y="2" width="36" height="36" rx="5" fill="#141E33" stroke="#2563EB" stroke-width="2"/>
    <line x1="2" y1="9" x2="38" y2="9" stroke="#1E293B" stroke-width="1.5"/>
    <circle cx="6" cy="5.5" r="1.2" fill="#EF4444"/>
    <circle cx="10" cy="5.5" r="1.2" fill="#F59E0B"/>
    <circle cx="14" cy="5.5" r="1.2" fill="#10B981"/>
    
    <!-- HTML DOM elements inside page -->
    <rect x="6" y="14" width="14" height="5" rx="1.5" fill="#1E3A8A"/>
    <line x1="8" y1="16.5" x2="16" y2="16.5" stroke="#93C5FD" stroke-width="1.2"/>
    
    <!-- Target Node highlighted for Scraping (Bounding Box with dashed cyan border) -->
    <rect x="6" y="22" width="22" height="11" rx="2" fill="#0C4A6E" stroke="#38BDF8" stroke-width="1.8" stroke-dasharray="2.5 2"/>
    <line x1="9" y1="26" x2="22" y2="26" stroke="#7DD3FC" stroke-width="1.5"/>
    <line x1="9" y1="29.5" x2="18" y2="29.5" stroke="#7DD3FC" stroke-width="1.5"/>
    
    <!-- Inspect Element Arrow Cursor picking the data -->
    <g transform="translate(23 18)">
      <path d="M2 2l11 11-4 1 3 6-2.5 1-3-6-4 3.5V2z" fill="#FBBF24" stroke="#78350F" stroke-width="1.2" stroke-linejoin="round"/>
    </g>
  </g>
</svg>"""

# Scraping 2: The Data Magnet pulling structured rows from HTML Web Page
SCRAPING_2 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping - Data Magnet">
  <rect width="64" height="64" rx="14" fill="#0B1326"/>
  <g transform="translate(12 12)">
    <!-- Web Document with code tags -->
    <rect x="2" y="2" width="22" height="28" rx="3" fill="#1A243B" stroke="#38BDF8" stroke-width="1.8"/>
    <path d="M7 9l-3 3 3 3M17 9l3 3-3 3M13 8l-2 8" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round"/>
    <line x1="5" y1="20" x2="19" y2="20" stroke="#475569" stroke-width="1.5"/>
    <line x1="5" y1="24" x2="15" y2="24" stroke="#475569" stroke-width="1.5"/>
    
    <!-- Data Magnet attracting data -->
    <g transform="translate(19 12) rotate(15)">
      <!-- Magnet Body -->
      <path d="M4 2v10a6 6 0 0 0 12 0V2h-4v10a2 2 0 0 1-4 0V2H4z" fill="#EF4444"/>
      <!-- Magnet Tips -->
      <rect x="4" y="0" width="4" height="4" fill="#CBD5E1"/>
      <rect x="12" y="0" width="4" height="4" fill="#CBD5E1"/>
    </g>
    
    <!-- Magnetic Field & Attracted Data Pellets / Records -->
    <circle cx="20" cy="8" r="2" fill="#FBBF24"/>
    <circle cx="28" cy="6" r="2.5" fill="#34D399"/>
    <circle cx="34" cy="11" r="2" fill="#FBBF24"/>
    <!-- Pulling sparks -->
    <path d="M16 11l3-2M22 6l2 3" stroke="#FBBF24" stroke-width="1.2" stroke-linecap="round"/>
  </g>
</svg>"""

# Scraping 3: Bold HTML Tag </> Transforming directly into JSON / Table Matrix
SCRAPING_3 = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping - Tag to Data">
  <rect width="64" height="64" rx="14" fill="#0C1527"/>
  <g transform="translate(13 13)">
    <!-- Source Code Tag </> -->
    <rect x="2" y="2" width="16" height="15" rx="3" fill="#1E293B" stroke="#38BDF8" stroke-width="1.8"/>
    <path d="M6 7l-2 2.5 2 2.5M14 7l2 2.5-2 2.5M11 6l-2 7" fill="none" stroke="#38BDF8" stroke-width="1.4" stroke-linecap="round"/>
    
    <!-- Dynamic Curved Extraction Arrow -->
    <path d="M22 10h5a4 4 0 0 1 4 4v5" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="31,22 28,17 34,17" fill="#FBBF24"/>
    
    <!-- Extracted Structured Dataset / CSV Table -->
    <g transform="translate(12 17)">
      <rect x="2" y="2" width="22" height="17" rx="3" fill="#064E3B" stroke="#34D399" stroke-width="1.8"/>
      <rect x="2" y="2" width="22" height="5" rx="2" fill="#059669"/>
      <line x1="9" y1="2" x2="9" y2="19" stroke="#34D399" stroke-width="1.2"/>
      <line x1="16" y1="2" x2="16" y2="19" stroke="#34D399" stroke-width="1.2"/>
      <line x1="2" y1="11" x2="24" y2="11" stroke="#34D399" stroke-width="1.2"/>
      <line x1="2" y1="15" x2="24" y2="15" stroke="#34D399" stroke-width="1.2"/>
    </g>
  </g>
</svg>"""

# --- TIME SERIES FORECASTING CONCEPT ---
# Time Series: Trend + Seasonality wave with dashed future forecast cone (fan chart)
TIMESERIES_SVG = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Time Series &amp; Forecasting">
  <rect width="64" height="64" rx="14" fill="#0A1628"/>
  <g transform="translate(12 13)">
    <!-- Time (t) and Value Axes -->
    <line x1="4" y1="34" x2="37" y2="34" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    <line x1="4" y1="4" x2="4" y2="34" stroke="#475569" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Shaded Forecast Confidence Cone (Fan chart) -->
    <polygon points="22,17 36,9 36,25" fill="#38BDF8" opacity="0.18"/>
    
    <!-- Historical Time Series Wave (Solid cyan line) -->
    <path d="M4 27c3-1 5-9 8-8s4 11 7 9c2-1 3-7 5-10" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    <!-- Historical Data Points -->
    <circle cx="12" cy="19" r="2.5" fill="#38BDF8"/>
    <circle cx="19" cy="28" r="2.5" fill="#38BDF8"/>
    <circle cx="24" cy="17" r="3" fill="#FBBF24"/>
    
    <!-- Forecast Boundary Dotted Vertical Line -->
    <line x1="24" y1="4" x2="24" y2="34" stroke="#FBBF24" stroke-width="1.5" stroke-dasharray="2 2"/>
    
    <!-- Future Forecast Projection (Dashed amber line into the cone) -->
    <path d="M24 17c3-4 6-2 12-8" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-dasharray="2.5 2" stroke-linecap="round"/>
    <circle cx="36" cy="9" r="3" fill="#FBBF24"/>
  </g>
</svg>"""

preview_html = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>بررسی گزینه‌های مصاحبه فنی، وب‌اسکرپینگ و سری زمانی</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap');
    body {{ font-family: 'Vazirmatn', -apple-system, sans-serif; }}
    .logo-box svg {{ width: 68px; height: 68px; border-radius: 14px; box-shadow: 0 6px 20px rgba(0,0,0,0.4); }}
  </style>
</head>
<body class="bg-[#0b0d13] text-[#e4e4e7] p-6 antialiased">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="border-b border-[#232733] pb-4">
      <h1 class="text-2xl font-black text-white">بازطراحی مصاحبه فنی، وب‌اسکرپینگ + لوگوی سری زمانی</h1>
      <p class="text-sm text-[#94a3b8] mt-1">طرح‌های متمرکز و ملموس بر پایه بازخورد شما</p>
    </div>

    <!-- Section 1: Tech Interviews -->
    <div class="bg-[#141722] border border-[#232733] rounded-2xl p-6">
      <h2 class="text-lg font-bold text-white mb-1">۱. آمادگی برای مصاحبه فنی (Technical Interviewing)</h2>
      <p class="text-xs text-[#94a3b8] mb-4">۳ زاویه دید برای رساندن مفهوم مصاحبه تخصصی کدنویسی و دیزاین:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Tech 1 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{TECH_1}</div>
          <div>
            <span class="text-xs font-bold text-[#38bdf8] block mb-1">طرح ۱ (دیالوگ فنی Q&A)</span>
            <p class="text-[11px] text-[#94a3b8]">حباب سوال کدنویسی مصاحبه‌کننده همراه با مهر سبز تایید پاسخ فنی و حل مسئله.</p>
          </div>
        </div>

        <!-- Tech 2 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{TECH_2}</div>
          <div>
            <span class="text-xs font-bold text-[#60a5fa] block mb-1">طرح ۲ (وایت‌بورد معماری سیستم)</span>
            <p class="text-[11px] text-[#94a3b8]">وایت‌بورد پایه مصاحبه‌های مهندسی System Design با ستاره طلایی پذیرش.</p>
          </div>
        </div>

        <!-- Tech 3 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{TECH_3}</div>
          <div>
            <span class="text-xs font-bold text-[#a78bfa] block mb-1">طرح ۳ (لایوکدینگ و تست کد)</span>
            <p class="text-[11px] text-[#94a3b8]">ترمینال لایوکدینگ پلتفرم‌های مصاحبه فنی با هدف پذیرش تست و خروجی کد.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 2: Web Scraping -->
    <div class="bg-[#141722] border border-[#232733] rounded-2xl p-6">
      <h2 class="text-lg font-bold text-white mb-1">۲. وب‌اسکرپینگ و گردآوری داده (Web Scraping & Crawling)</h2>
      <p class="text-xs text-[#94a3b8] mb-4">۳ ایده کاملاً ملموس بدون استفاده از تارهای انتزاعی:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <!-- Scraping 1 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{SCRAPING_1}</div>
          <div>
            <span class="text-xs font-bold text-[#38bdf8] block mb-1">طرح ۱ (نشانگر Inspect Element)</span>
            <p class="text-[11px] text-[#94a3b8]">نشانگر ماوس و کرسر ابزار Inspect در حال انتخاب و شکار کادر داده در صفحه وب.</p>
          </div>
        </div>

        <!-- Scraping 2 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{SCRAPING_2}</div>
          <div>
            <span class="text-xs font-bold text-[#f87171] block mb-1">طرح ۲ (آهن‌ربای جذب داده)</span>
            <p class="text-[11px] text-[#94a3b8]">آهن‌ربای قوی دیتا که رکوردهای داده را مستقیماً از صفحه HTML بیرون می‌کشد.</p>
          </div>
        </div>

        <!-- Scraping 3 -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex flex-col items-center text-center gap-3">
          <div class="logo-box">{SCRAPING_3}</div>
          <div>
            <span class="text-xs font-bold text-[#34d399] block mb-1">طرح ۳ (تبدیل مستقیم کد به جدول)</span>
            <p class="text-[11px] text-[#94a3b8]">تگ کد وب با فلش استخراج که مستقیماً به یک جدول منظم و تمیز داده تبدیل می‌شود.</p>
          </div>
        </div>
      </div>
    </div>

    <!-- Section 3: Time Series -->
    <div class="bg-[#141722] border border-[#232733] rounded-2xl p-6">
      <h2 class="text-lg font-bold text-white mb-1">۳. دوره جدید: تحلیل و پیش‌بینی سری‌های زمانی</h2>
      <p class="text-xs text-[#94a3b8] mb-4">پیش‌بینی روند، فصلی‌بودن و قیف فاصله اطمینان (Fan Chart):</p>
      
      <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex items-center gap-4">
        <div class="logo-box flex-shrink-0">{TIMESERIES_SVG}</div>
        <div>
          <span class="text-xs font-bold text-[#38bdf8] block mb-1">تحلیل و پیش‌بینی سری‌های زمانی (Time Series &amp; Forecasting)</span>
          <p class="text-xs text-[#94a3b8] leading-relaxed">
            نمودار موج فصلی تاریخی با خط ممتد آبی، مرز زمان حال با خط‌چین طلایی، و خط پیش‌بینی آینده (Forecast) در داخل قیف دامنه اطمینان آماری (Confidence Cone).
          </p>
        </div>
      </div>
    </div>

  </div>
</body>
</html>
"""

(ARTIFACT_DIR / "new_options_preview.html").write_text(preview_html, encoding="utf-8")
print("new_options_preview.html written successfully.")

# Also write timeseries.svg directly to assets/logos/
(Path("assets/logos/timeseries.svg")).write_text(TIMESERIES_SVG.strip() + "\n", encoding="utf-8")
print("timeseries.svg written to assets/logos/")
