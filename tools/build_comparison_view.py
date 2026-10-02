"""Build interactive comparison view between git 751ca20 (Old - 1) and HEAD (New - 2)."""

import json
import re
import subprocess
from pathlib import Path

ARTIFACT_DIR = Path(r"C:\Users\alisa\.gemini\antigravity\brain\dbd66694-edfd-45d9-8893-e4c39d2c2f9c")
ARTIFACT_DIR.mkdir(parents=True, exist_ok=True)

diff_files = subprocess.check_output(
    ["git", "diff", "--name-only", "751ca20", "HEAD", "--", "assets/logos/"],
    encoding="utf-8"
).splitlines()

logo_names = [Path(f).stem for f in diff_files if f.strip()]

app_js = Path("app.js").read_text(encoding="utf-8")

# Parse courses in app.js
course_blocks = re.findall(r"\{\s*slug:\s*\"([^\"]+)\",\s*title:\s*\"([^\"]+)\",\s*en:\s*\"([^\"]+)\",.*?logo:\s*\"([^\"]+)\"", app_js, re.DOTALL)
logo_to_course = {m[3]: {"slug": m[0], "title": m[1], "en": m[2]} for m in course_blocks}

comparisons = []
for logo in logo_names:
    course = logo_to_course.get(logo, {"slug": logo, "title": logo, "en": logo})
    try:
        old_svg = subprocess.check_output(
            ["git", "show", f"751ca20:assets/logos/{logo}.svg"],
            encoding="utf-8"
        )
    except Exception:
        old_svg = ""

    new_file = Path(f"assets/logos/{logo}.svg")
    new_svg = new_file.read_text(encoding="utf-8") if new_file.exists() else ""

    comparisons.append({
        "logo": logo,
        "slug": course["slug"],
        "title": course["title"],
        "en": course["en"],
        "old_svg": old_svg.strip(),
        "new_svg": new_svg.strip()
    })

print(f"Loaded {len(comparisons)} changed courses.")

# Save comparisons data as json
json_path = ARTIFACT_DIR / "comparisons.json"
json_path.write_text(json.dumps(comparisons, ensure_ascii=False, indent=2), encoding="utf-8")

# Build self-contained HTML with selection controls
courses_json_str = json.dumps([{"logo": c["logo"], "title": c["title"], "en": c["en"]} for c in comparisons], ensure_ascii=False)

html_content = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>مقایسه لوگوهای دوره‌ها (۱: قدیمی | ۲: جدید)</title>
  <script src="https://www.gstatic.com/antigravity/web/dev/tailwindcss.min.js"></script>
  <style>
    @import url('https://fonts.googleapis.com/css2?family=Vazirmatn:wght@400;500;600;700;800&family=Plus+Jakarta+Sans:wght@500;700&display=swap');
    body {{
      font-family: 'Vazirmatn', -apple-system, sans-serif;
    }}
    .tech {{
      font-family: 'Plus Jakarta Sans', monospace;
    }}
    .logo-box svg {{
      width: 58px;
      height: 58px;
      border-radius: 12px;
      box-shadow: 0 4px 14px rgba(0, 0, 0, 0.35);
      transition: transform 0.15s ease;
    }}
    .logo-box svg:hover {{
      transform: scale(1.06);
    }}
    .option-card.selected-1 {{
      border-color: #38bdf8;
      background-color: rgba(56, 189, 248, 0.12);
      box-shadow: 0 0 0 2px rgba(56, 189, 248, 0.4);
    }}
    .option-card.selected-2 {{
      border-color: #4ade80;
      background-color: rgba(74, 222, 128, 0.12);
      box-shadow: 0 0 0 2px rgba(74, 222, 128, 0.4);
    }}
  </style>
</head>
<body class="bg-[#0c0e12] text-[#e4e4e7] p-4 sm:p-6 pb-48 antialiased">
  <div class="max-w-6xl mx-auto">
    
    <!-- Header -->
    <header class="mb-6 bg-[#14171f] border border-[#232733] rounded-2xl p-6 shadow-xl">
      <div class="flex items-center justify-between flex-wrap gap-4">
        <div>
          <span class="inline-block px-2.5 py-1 text-[11px] font-bold tracking-wider uppercase bg-[#38bdf8]/10 text-[#38bdf8] rounded-full mb-2">
            انتخاب بصری و تعاملی لوگوها
          </span>
          <h1 class="text-2xl sm:text-3xl font-black text-white">مقایسه ۳۴ لوگوی بازطراحی‌شده</h1>
          <p class="text-sm text-[#94a3b8] mt-1.5 leading-relaxed">
            برای هر درس روی کارت ۱ یا ۲ کلیک کنید. متن نهایی در کادر پایین صفحه خودکار ساخته می‌شود.
          </p>
        </div>
        <div class="flex items-center gap-2">
          <button onclick="selectAll(1)" class="px-3 py-2 text-xs font-bold rounded-lg bg-[#1e293b] text-[#38bdf8] border border-[#38bdf8]/30 hover:bg-[#38bdf8]/20 transition">
            انتخاب همه ۱ (قدیمی)
          </button>
          <button onclick="selectAll(2)" class="px-3 py-2 text-xs font-bold rounded-lg bg-[#14532d]/40 text-[#4ade80] border border-[#4ade80]/30 hover:bg-[#4ade80]/20 transition">
            انتخاب همه ۲ (جدید)
          </button>
        </div>
      </div>
    </header>

    <!-- Grid -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
"""

for idx, c in enumerate(comparisons, 1):
    html_content += f"""
      <div class="bg-[#14171f] border border-[#232733] rounded-xl p-4 flex flex-col justify-between" id="card-{c['logo']}">
        <div>
          <div class="flex items-center justify-between mb-3 border-b border-[#232733] pb-2">
            <div class="flex items-center gap-2">
              <span class="text-xs font-mono font-bold text-[#64748b]">#{idx}</span>
              <strong class="text-sm text-white">{c['title']}</strong>
            </div>
            <span class="text-xs text-[#94a3b8] tech" dir="ltr">{c['en']}</span>
          </div>

          <div class="grid grid-cols-2 gap-3 mb-3">
            <!-- Option 1 -->
            <div onclick="selectOption('{c['logo']}', 1)" id="opt-1-{c['logo']}"
                 class="option-card cursor-pointer bg-[#0f1117] border border-[#27272a] rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all duration-150">
              <span class="text-[11px] font-bold text-[#38bdf8] mb-1.5 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#38bdf8]"></span> ۱. قبلی
              </span>
              <div class="logo-box flex items-center justify-center my-1.5">
                {c['old_svg']}
              </div>
              <span class="text-[10px] text-[#71717a] mt-1">نسخه اولیه</span>
            </div>

            <!-- Option 2 -->
            <div onclick="selectOption('{c['logo']}', 2)" id="opt-2-{c['logo']}"
                 class="option-card selected-2 cursor-pointer bg-[#0f1117] border border-[#27272a] rounded-lg p-3 flex flex-col items-center justify-center text-center transition-all duration-150">
              <span class="text-[11px] font-bold text-[#4ade80] mb-1.5 flex items-center gap-1">
                <span class="w-2 h-2 rounded-full bg-[#4ade80]"></span> ۲. جدید
              </span>
              <div class="logo-box flex items-center justify-center my-1.5">
                {c['new_svg']}
              </div>
              <span class="text-[10px] text-[#71717a] mt-1">رسمی / بازطراحی</span>
            </div>
          </div>
        </div>

        <div class="flex items-center justify-between pt-2 border-t border-[#232733]/80 text-[11px]">
          <span class="text-[#64748b] tech" dir="ltr">{c['logo']}.svg</span>
          <span id="badge-{c['logo']}" class="font-bold text-[#4ade80]">انتخاب شده: ۲</span>
        </div>
      </div>
"""

html_content += f"""
    </div>

    <!-- Output Box & Sticky Bottom Bar -->
    <div class="fixed bottom-0 right-0 left-0 bg-[#0f1117]/95 backdrop-blur-md border-t border-[#232733] p-4 z-50 shadow-2xl">
      <div class="max-w-6xl mx-auto flex flex-col gap-3">
        <div class="flex items-center justify-between flex-wrap gap-2">
          <div class="flex items-center gap-3">
            <span class="text-xs text-[#94a3b8]">خلاصه انتخاب‌ها:</span>
            <span id="summary-badge" class="px-2.5 py-1 text-xs font-bold rounded-md bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30">
              همه ۳۴ درس روی ۲ (جدید)
            </span>
          </div>
          <div class="flex items-center gap-2">
            <button onclick="copyOutput()" id="copy-btn" class="px-4 py-2 text-xs font-bold rounded-lg bg-[#38bdf8] text-[#0f172a] hover:bg-[#7dd3fc] transition shadow-lg flex items-center gap-1.5">
              <span>📋</span>
              <span id="copy-text">کپی کردن برای چت</span>
            </button>
          </div>
        </div>
        <div>
          <textarea id="output-box" rows="2" readonly
                    class="w-full bg-[#18181b] border border-[#27272a] rounded-lg p-2 text-xs text-[#e4e4e7] font-mono select-all focus:outline-none focus:border-[#38bdf8]"
                    dir="ltr" placeholder="متن انتخاب‌ها اینجا آماده می‌شود..."></textarea>
        </div>
      </div>
    </div>

  </div>

  <script>
    const courses = {courses_json_str};
    const selections = {{}};
    courses.forEach(c => selections[c.logo] = 2);

    function selectOption(logo, opt) {{
      selections[logo] = opt;
      const el1 = document.getElementById('opt-1-' + logo);
      const el2 = document.getElementById('opt-2-' + logo);
      const badge = document.getElementById('badge-' + logo);

      if (opt === 1) {{
        el1.classList.add('selected-1');
        el2.classList.remove('selected-2');
        badge.textContent = 'انتخاب شده: ۱';
        badge.className = 'font-bold text-[#38bdf8]';
      }} else {{
        el2.classList.add('selected-2');
        el1.classList.remove('selected-1');
        badge.textContent = 'انتخاب شده: ۲';
        badge.className = 'font-bold text-[#4ade80]';
      }}
      updateSummary();
    }}

    function selectAll(opt) {{
      courses.forEach(c => selectOption(c.logo, opt));
    }}

    function updateSummary() {{
      const count1 = Object.values(selections).filter(v => v === 1).length;
      const count2 = Object.values(selections).filter(v => v === 2).length;
      const badge = document.getElementById('summary-badge');
      if (count1 === 0) {{
        badge.textContent = 'همه ۳۴ درس روی ۲ (جدید)';
        badge.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-[#4ade80]/10 text-[#4ade80] border border-[#4ade80]/30';
      }} else if (count2 === 0) {{
        badge.textContent = 'همه ۳۴ درس روی ۱ (قدیمی)';
        badge.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-[#38bdf8]/10 text-[#38bdf8] border border-[#38bdf8]/30';
      }} else {{
        badge.textContent = count1 + ' مورد ۱ (قدیمی) | ' + count2 + ' مورد ۲ (جدید)';
        badge.className = 'px-2.5 py-1 text-xs font-bold rounded-md bg-[#facc15]/10 text-[#facc15] border border-[#facc15]/30';
      }}
      updateOutputBox();
    }}

    function getFormattedText() {{
      const opt1List = [];
      const opt2List = [];
      courses.forEach((c, idx) => {{
        const num = idx + 1;
        if (selections[c.logo] === 1) {{
          opt1List.push(num + '.' + c.title);
        }} else {{
          opt2List.push(num + '.' + c.title);
        }}
      }});

      if (opt1List.length === 0) {{
        return 'همه گزینه‌ها ۲ (جدید) باشند.';
      }}
      if (opt2List.length === 0) {{
        return 'همه گزینه‌ها ۱ (قدیمی) باشند.';
      }}
      if (opt1List.length <= opt2List.length) {{
        return 'همه ۲ باشند به جز موارد شماره ۱ (قدیمی): ' + opt1List.join(' ، ');
      }} else {{
        return 'همه ۱ باشند به جز موارد شماره ۲ (جدید): ' + opt2List.join(' ، ');
      }}
    }}

    function updateOutputBox() {{
      document.getElementById('output-box').value = getFormattedText();
    }}

    function copyOutput() {{
      const box = document.getElementById('output-box');
      box.select();
      box.setSelectionRange(0, 99999);
      try {{
        navigator.clipboard.writeText(box.value);
      }} catch(e) {{
        document.execCommand('copy');
      }}
      const copyText = document.getElementById('copy-text');
      copyText.textContent = 'کپی شد! در چت Paste کنید';
      setTimeout(() => {{ copyText.textContent = 'کپی کردن برای چت'; }}, 2500);
    }}

    // Init output text
    updateOutputBox();
  </script>
</body>
</html>
"""

html_path = ARTIFACT_DIR / "logo_comparison.html"
html_path.write_text(html_content, encoding="utf-8")
print(f"HTML artifact generated at: {html_path}")
