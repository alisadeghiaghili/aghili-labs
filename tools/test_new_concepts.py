"""Test and compare new concepts for Networking and Web Scraping."""

from pathlib import Path

ARTIFACT_DIR = Path(r"C:\Users\alisa\.gemini\antigravity\brain\dbd66694-edfd-45d9-8893-e4c39d2c2f9c")

# --- NETWORKING CONCEPTS ---

# Net A: Classic Universal LAN Architecture (Central Switch with activity LEDs + Bus + Server, PC, Cloud)
NET_A = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Networking - LAN Topology">
  <rect width="64" height="64" rx="14" fill="#0A1326"/>
  <g transform="translate(10 11)">
    <!-- Central Switch / Router Box -->
    <rect x="12" y="2" width="20" height="10" rx="3" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
    <!-- Router Port LEDs -->
    <circle cx="16" cy="7" r="1.5" fill="#4ADE80"/>
    <circle cx="20" cy="7" r="1.5" fill="#4ADE80"/>
    <circle cx="24" cy="7" r="1.5" fill="#FBBF24"/>
    <circle cx="28" cy="7" r="1.5" fill="#38BDF8"/>
    
    <!-- Central Drop Line -->
    <line x1="22" y1="12" x2="22" y2="22" stroke="#38BDF8" stroke-width="2"/>
    
    <!-- Horizontal Ethernet LAN Bus Line -->
    <line x1="5" y1="22" x2="39" y2="22" stroke="#38BDF8" stroke-width="2" stroke-linecap="round"/>
    
    <!-- Drop Line 1 (Left: Server Rack) -->
    <line x1="5" y1="22" x2="5" y2="27" stroke="#38BDF8" stroke-width="2"/>
    <g transform="translate(0 27)">
      <rect x="0" y="0" width="10" height="14" rx="2" fill="#1E293B" stroke="#818CF8" stroke-width="1.8"/>
      <line x1="2" y1="4" x2="8" y2="4" stroke="#818CF8" stroke-width="1.2"/>
      <line x1="2" y1="7" x2="8" y2="7" stroke="#818CF8" stroke-width="1.2"/>
      <line x1="2" y1="10" x2="8" y2="10" stroke="#818CF8" stroke-width="1.2"/>
      <circle cx="7" cy="4" r="0.8" fill="#4ADE80"/>
      <circle cx="7" cy="7" r="0.8" fill="#4ADE80"/>
    </g>
    
    <!-- Drop Line 2 (Center: Workstation PC) -->
    <line x1="22" y1="22" x2="22" y2="27" stroke="#38BDF8" stroke-width="2"/>
    <g transform="translate(16 27)">
      <rect x="1" y="0" width="10" height="9" rx="1.5" fill="#1E293B" stroke="#60A5FA" stroke-width="1.8"/>
      <line x1="4" y1="9" x2="8" y2="9" stroke="#60A5FA" stroke-width="1.8"/>
      <line x1="6" y1="9" x2="6" y2="12" stroke="#60A5FA" stroke-width="1.5"/>
      <line x1="3" y1="12" x2="9" y2="12" stroke="#60A5FA" stroke-width="1.5"/>
      <circle cx="6" cy="4.5" r="1.5" fill="#38BDF8"/>
    </g>
    
    <!-- Drop Line 3 (Right: Cloud Gateway / WAN) -->
    <line x1="39" y1="22" x2="39" y2="27" stroke="#38BDF8" stroke-width="2"/>
    <g transform="translate(32 27)">
      <path d="M4 11h8a3.5 3.5 0 0 0 1-6.8 4 4 0 0 0-7.8-1A3 3 0 0 0 4 11z" fill="#1E293B" stroke="#34D399" stroke-width="1.8" stroke-linejoin="round"/>
      <circle cx="8" cy="7.5" r="1.5" fill="#34D399"/>
    </g>
  </g>
</svg>"""

# Net B: Iconic RJ-45 Ethernet Connector Plug with Gold Pins & Cable
NET_B = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Networking - Ethernet RJ45">
  <rect width="64" height="64" rx="14" fill="#0C1424"/>
  <g transform="translate(13 10)">
    <!-- Signal Wave Radiations at tip -->
    <path d="M12 4a12 12 0 0 1 14 0" fill="none" stroke="#38BDF8" stroke-width="2.5" stroke-linecap="round"/>
    <path d="M8 0a18 18 0 0 1 22 0" fill="none" stroke="#60A5FA" stroke-width="2" stroke-linecap="round" opacity="0.6"/>
    
    <!-- RJ45 Plug Head Body -->
    <rect x="7" y="8" width="24" height="26" rx="4" fill="#1E293B" stroke="#38BDF8" stroke-width="2"/>
    
    <!-- Gold Contact Pins (8-pin Ethernet) -->
    <line x1="11" y1="9" x2="11" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="14" y1="9" x2="14" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="17" y1="9" x2="17" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="20" y1="9" x2="20" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="23" y1="9" x2="23" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    <line x1="26" y1="9" x2="26" y2="15" stroke="#FBBF24" stroke-width="1.8" stroke-linecap="round"/>
    
    <!-- RJ45 Retention Clip / Latch -->
    <path d="M15 19h8v12h-8z" fill="#0F172A" stroke="#38BDF8" stroke-width="1.8"/>
    <path d="M17 19v-4h4v4" fill="none" stroke="#38BDF8" stroke-width="1.8"/>
    
    <!-- Strain Relief Boot & Cable -->
    <path d="M11 34h16l-3 10H14z" fill="#334155"/>
    <rect x="15" y="44" width="8" height="6" fill="#1E293B" stroke="#475569" stroke-width="1.5"/>
  </g>
</svg>"""

# --- WEB SCRAPING CONCEPTS ---

# Scraping A: Browser HTML (</>) Extracted into Structured Table ([ ▤ ])
SCRAPING_A = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping - HTML to Table">
  <rect width="64" height="64" rx="14" fill="#0B1325"/>
  <g transform="translate(10 10)">
    <!-- Source: Web Browser Window (Top Left) -->
    <rect x="1" y="2" width="24" height="20" rx="3" fill="#1E293B" stroke="#38BDF8" stroke-width="1.8"/>
    <!-- Window Bar -->
    <line x1="1" y1="7" x2="25" y2="7" stroke="#334155" stroke-width="1.2"/>
    <circle cx="4.5" cy="4.5" r="1" fill="#EF4444"/>
    <circle cx="8" cy="4.5" r="1" fill="#F59E0B"/>
    <circle cx="11.5" cy="4.5" r="1" fill="#10B981"/>
    <!-- Raw HTML Code brackets </> -->
    <path d="M8 12l-3 3 3 3M18 12l3 3-3 3M14 11l-2 8" fill="none" stroke="#38BDF8" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    
    <!-- Extraction Scraper Flow: Dynamic arrow from Web to Table -->
    <path d="M26 12h5a3 3 0 0 1 3 3v8" fill="none" stroke="#FBBF24" stroke-width="2.5" stroke-linecap="round"/>
    <polygon points="34,26 31,21 37,21" fill="#FBBF24"/>
    
    <!-- Destination: Structured Data Table (Bottom Right) -->
    <g transform="translate(17 21)">
      <!-- Table Container -->
      <rect x="2" y="2" width="24" height="19" rx="3" fill="#064E3B" stroke="#34D399" stroke-width="1.8"/>
      <!-- Header Row -->
      <rect x="2" y="2" width="24" height="6" rx="2" fill="#047857"/>
      <line x1="10" y1="2" x2="10" y2="21" stroke="#34D399" stroke-width="1.2"/>
      <line x1="18" y1="2" x2="18" y2="21" stroke="#34D399" stroke-width="1.2"/>
      <!-- Rows -->
      <line x1="2" y1="12" x2="26" y2="12" stroke="#34D399" stroke-width="1.2"/>
      <line x1="2" y1="16" x2="26" y2="16" stroke="#34D399" stroke-width="1.2"/>
      <!-- Data Dots in cells -->
      <circle cx="6" cy="14" r="1" fill="#A7F3D0"/>
      <circle cx="14" cy="14" r="1" fill="#A7F3D0"/>
      <circle cx="22" cy="14" r="1" fill="#A7F3D0"/>
    </g>
  </g>
</svg>"""

# Scraping B: The Iconic Web Crawler Spider on Code Web
SCRAPING_B = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Web Scraping - Crawler Spider">
  <rect width="64" height="64" rx="14" fill="#131024"/>
  <g transform="translate(13 13)">
    <!-- Web Grid Background (HTML document frame) -->
    <rect x="2" y="2" width="34" height="34" rx="5" fill="#1E1B38" stroke="#4C1D95" stroke-width="1.5"/>
    <line x1="2" y1="19" x2="36" y2="19" stroke="#4C1D95" stroke-width="1" stroke-dasharray="2 2"/>
    <line x1="19" y1="2" x2="19" y2="36" stroke="#4C1D95" stroke-width="1" stroke-dasharray="2 2"/>
    
    <!-- Code Brackets in Background -->
    <path d="M7 16l-3 3 3 3M31 16l3 3-3 3" fill="none" stroke="#7C3AED" stroke-width="1.8" stroke-linecap="round"/>
    
    <!-- Mechanical Crawler Spider Legs (4 pairs) -->
    <!-- Top Legs -->
    <path d="M15 15l-6-6M23 15l6-6" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Middle-Top Legs -->
    <path d="M14 18l-8-1M24 18l8-1" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Middle-Bottom Legs -->
    <path d="M14 21l-8 3M24 21l8 3" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round"/>
    <!-- Bottom Legs -->
    <path d="M15 24l-6 6M23 24l6 6" stroke="#A78BFA" stroke-width="2.2" stroke-linecap="round"/>
    
    <!-- Spider Body & Extraction Core -->
    <ellipse cx="19" cy="23" rx="5" ry="6" fill="#8B5CF6"/>
    <circle cx="19" cy="15" r="4" fill="#A855F7"/>
    <!-- Glowing Data Eye / Harvester Sensor -->
    <circle cx="17.5" cy="14" r="1.2" fill="#FBBF24"/>
    <circle cx="20.5" cy="14" r="1.2" fill="#FBBF24"/>
    <!-- Extracted Data Chip on Abdomen -->
    <rect x="17" y="21" width="4" height="4" rx="1" fill="#38BDF8"/>
  </g>
</svg>"""

# Build preview HTML
preview_html = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>بررسی گزینه‌های جدید شبکه و وب‌اسکرپینگ</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;600;700;800&display=swap');
    body {{ font-family: 'Vazirmatn', -apple-system, sans-serif; }}
    .logo-box svg {{ width: 72px; height: 72px; border-radius: 16px; box-shadow: 0 8px 24px rgba(0,0,0,0.4); }}
  </style>
</head>
<body class="bg-[#0b0d13] text-[#e4e4e7] p-6 antialiased">
  <div class="max-w-4xl mx-auto space-y-8">
    <div class="border-b border-[#232733] pb-4">
      <h1 class="text-2xl font-black text-white">طراحی‌های مفهومی و دقیق برای شبکه و وب‌اسکرپینگ</h1>
      <p class="text-sm text-[#94a3b8] mt-1">گزینه‌های زیر بر اساس استانداردهای بین‌المللی مفاهیم شبکه و استخراج داده طراحی شده‌اند.</p>
    </div>

    <!-- Networking Section -->
    <div class="bg-[#141722] border border-[#232733] rounded-2xl p-6">
      <h2 class="text-lg font-bold text-white mb-1">۱. درس شبکه (Networking)</h2>
      <p class="text-xs text-[#94a3b8] mb-4">به جای نقاط انتزاعی قبلی، دو مفهوم استاندارد و کاملاً شناخته‌شده مهندسی شبکه:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Net A -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex items-center gap-4">
          <div class="logo-box flex-shrink-0">{NET_A}</div>
          <div>
            <span class="text-xs font-bold text-[#38bdf8] block mb-1">طرح A (توپولوژی شبکه محلی LAN)</span>
            <p class="text-xs text-[#94a3b8] leading-relaxed">
              روتر/سوئیچ مرکزی با LEDهای پورت، خط گذرگاه شبکه (LAN Bus) و اتصال واقعی به <strong>سرور دیتاسنتر</strong>، <strong>ترمینال کاربر</strong> و <strong>کلود</strong>. نماد کلاسیک و استاندارد درس شبکه.
            </p>
          </div>
        </div>

        <!-- Net B -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex items-center gap-4">
          <div class="logo-box flex-shrink-0">{NET_B}</div>
          <div>
            <span class="text-xs font-bold text-[#60a5fa] block mb-1">طرح B (سوکت فیزیکی کابل شبکه RJ-45)</span>
            <p class="text-xs text-[#94a3b8] leading-relaxed">
              پلاگ کابل اترنت با ۸ پین طلایی مسی، ضامن اتصال (Clip)، بوت کابل شبکه و امواج سیگنال داده. ملموس‌ترین نماد سخت‌افزاری شبکه در جهان.
            </p>
          </div>
        </div>
      </div>
    </div>

    <!-- Web Scraping Section -->
    <div class="bg-[#141722] border border-[#232733] rounded-2xl p-6">
      <h2 class="text-lg font-bold text-white mb-1">۲. درس وب‌اسکرپینگ (Web Scraping & Crawling)</h2>
      <p class="text-xs text-[#94a3b8] mb-4">انتقال مستقیم معنای واقعی «استخراج داده از صفحات وب»:</p>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <!-- Scraping A -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex items-center gap-4">
          <div class="logo-box flex-shrink-0">{SCRAPING_A}</div>
          <div>
            <span class="text-xs font-bold text-[#34d399] block mb-1">طرح A (استخراج HTML به جدول منظم)</span>
            <p class="text-xs text-[#94a3b8] leading-relaxed">
              پنجره مرورگر وب با تگ‌های <code class="text-amber-300">&lt;/&gt;</code> که از طریق فلش استخراج داده مستقیم به یک <strong>جدول منظم داده (Data Table)</strong> تبدیل می‌شود. دقیق‌ترین تعریف فرآیند اسکرپینگ.
            </p>
          </div>
        </div>

        <!-- Scraping B -->
        <div class="bg-[#0c0e14] border border-[#272a38] rounded-xl p-4 flex items-center gap-4">
          <div class="logo-box flex-shrink-0">{SCRAPING_B}</div>
          <div>
            <span class="text-xs font-bold text-[#a78bfa] block mb-1">طرح B (خزنده و اسپایدر هوشمند وب - Crawler)</span>
            <p class="text-xs text-[#94a3b8] leading-relaxed">
              اسپایدر مکانیکی (نماد بین‌المللی Crawling در پایتون مثل Scrapy) با سنسور و پکت داده روی تار شبکه‌ای کدهای وب.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
</html>
"""

(ARTIFACT_DIR / "concept_preview.html").write_text(preview_html, encoding="utf-8")
print("concept_preview.html written successfully.")
