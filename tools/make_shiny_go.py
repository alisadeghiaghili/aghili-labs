from pathlib import Path
import xml.etree.ElementTree as ET

# Build cleanly centered Go SVG
go_svg = """<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Go">
  <rect width="64" height="64" rx="14" fill="#00ADD8"/>
  <g transform="translate(8 8) scale(2)">
    <path fill="#FFFFFF" d="M1.811 10.231c-.047 0-.058-.023-.035-.059l.246-.315c.023-.035.081-.058.128-.058h4.172c.046 0 .058.035.035.07l-.199.303c-.023.036-.082.07-.117.07zM.047 11.306c-.047 0-.059-.023-.035-.058l.245-.316c.023-.035.082-.058.129-.058h5.328c.047 0 .07.035.058.07l-.093.28c-.012.047-.058.07-.105.07zm2.828 1.075c-.047 0-.059-.035-.035-.07l.163-.292c.023-.035.07-.07.117-.07h2.337c.047 0 .07.035.07.082l-.023.28c0 .047-.047.082-.082.082zm12.129-2.36c-.736.187-1.239.327-1.963.514-.176.046-.187.058-.34-.117-.174-.199-.303-.327-.548-.444-.737-.362-1.45-.257-2.115.175-.795.514-1.204 1.274-1.192 2.22.011.935.654 1.706 1.577 1.835.795.105 1.46-.175 1.987-.77.105-.13.198-.27.315-.434H10.47c-.245 0-.304-.152-.222-.35.152-.362.432-.97.596-1.274a.315.315 0 01.292-.187h4.253c-.023.316-.023.631-.07.947a4.983 4.983 0 01-.958 2.29c-.841 1.11-1.94 1.8-3.33 1.986-1.145.152-2.209-.07-3.143-.77-.865-.655-1.356-1.52-1.484-2.595-.152-1.274.222-2.419.993-3.424.83-1.086 1.928-1.776 3.272-2.02 1.098-.2 2.15-.07 3.096.571.62.41 1.063.97 1.356 1.648.07.105.023.164-.117.2m3.868 6.461c-1.064-.024-2.034-.328-2.852-1.029a3.665 3.665 0 01-1.262-2.255c-.21-1.32.152-2.489.947-3.529.853-1.122 1.881-1.706 3.272-1.95 1.192-.21 2.314-.095 3.33.595.923.63 1.496 1.484 1.648 2.605.198 1.578-.257 2.863-1.344 3.962-.771.783-1.718 1.273-2.805 1.495-.315.06-.63.07-.934.106zm2.78-4.72c-.011-.153-.011-.27-.034-.387-.21-1.157-1.274-1.81-2.384-1.554-1.087.245-1.788.935-2.045 2.033-.21.912.234 1.835 1.075 2.21.643.28 1.285.244 1.905-.07.923-.48 1.425-1.228 1.484-2.233z"/>
  </g>
</svg>"""

# Read raw shiny sticker
raw = Path("shiny_raw.svg").read_text(encoding="utf-8")
body = raw.split("<svg", 1)[1].split(">", 1)[1].rsplit("</svg>", 1)[0]

# Shiny 1: Dark Navy background + Official Hex Sticker centered
shiny_navy = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Shiny">
  <rect width="64" height="64" rx="14" fill="#0A1628"/>
  <svg x="7" y="4" width="50" height="56" viewBox="0 0 2521 2911">
    {body}
  </svg>
</svg>"""

# Shiny 2: Soft Light Blue background + Official Hex Sticker centered
shiny_light = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Shiny">
  <rect width="64" height="64" rx="14" fill="#EBF4FB"/>
  <svg x="7" y="4" width="50" height="56" viewBox="0 0 2521 2911">
    {body}
  </svg>
</svg>"""

# Shiny 3: Official Hexagon filling 64x64 directly (with transparent outside, hexagon is the icon)
shiny_hex = f"""<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2521 2911" role="img" aria-label="Shiny">
  {body}
</svg>"""

# Write preview HTML
preview = f"""<!DOCTYPE html>
<html lang="fa" dir="rtl">
<head>
  <meta charset="utf-8">
  <title>بررسی لوگوی گو و گزینه‌های شاینی</title>
  <style>
    body {{ background: #0c0e14; color: #f1f5f9; font-family: sans-serif; padding: 40px; }}
    .grid {{ display: flex; gap: 40px; align-items: flex-start; flex-wrap: wrap; }}
    .card {{ background: #161a26; border: 1px solid #23293a; border-radius: 16px; padding: 24px; display: flex; flex-direction: column; align-items: center; gap: 14px; width: 180px; text-align: center; }}
    .logo-box {{ width: 64px; height: 64px; border-radius: 14px; overflow: hidden; box-shadow: 0 8px 24px rgba(0,0,0,0.5); }}
    .logo-box svg {{ width: 64px; height: 64px; display: block; }}
    h4 {{ margin: 0; font-size: 14px; }}
    p {{ margin: 0; font-size: 11px; color: #94a3b8; line-height: 1.4; }}
  </style>
</head>
<body>
  <h2>تراز کردن لوگوی گو و گزینه‌های لوگوی رسمی شاینی</h2>
  <div class="grid">
    <div class="card">
      <div class="logo-box">{go_svg}</div>
      <h4>گو (وسط‌چین کامل)</h4>
      <p>تراز دقیق افقی و عمودی در مرکز مربع آبی فیروزه‌ای رسمی Go.</p>
    </div>

    <div class="card">
      <div class="logo-box">{shiny_navy}</div>
      <h4>شاینی (هگز در زمینه تیره)</h4>
      <p>استیکر شش‌ضلعی رسمی با پس‌زمینه سورمه‌ای منطبق بر تم سایت.</p>
    </div>

    <div class="card">
      <div class="logo-box">{shiny_light}</div>
      <h4>شاینی (هگز در زمینه روشن)</h4>
      <p>استیکر شش‌ضلعی رسمی با پس‌زمینه ملایم سازگار با لوگوی R.</p>
    </div>

    <div class="card">
      <div class="logo-box">{shiny_hex}</div>
      <h4>شاینی (هگز کامل)</h4>
      <p>هگزاگون رسمی RStudio/Posit به صورت تمام‌صفحه.</p>
    </div>
  </div>
</body>
</html>"""

Path("tools/preview_shiny_go.html").write_text(preview, encoding="utf-8")
print("preview_shiny_go.html generated successfully")
