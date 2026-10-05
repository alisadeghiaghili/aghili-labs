from PIL import Image
import numpy as np
from skimage import measure
import xml.etree.ElementTree as ET
from pathlib import Path

im = Image.open('assets/brand/mark.png')
# Resize to 256x256 for smooth contour tracing
small = im.resize((256, 256), Image.Resampling.LANCZOS)
arr = np.array(small)

r, g, b, a = arr[:,:,0], arr[:,:,1], arr[:,:,2], arr[:,:,3]
mask_cyan = (g > 130) & (b > 160) & (a > 60)
mask_purple = (r > 100) & (b > 150) & (g < 120) & (a > 60)
mask_navy = (a > 60) & ~mask_cyan & ~mask_purple

def contours_to_path(mask, scale_to=64):
    contours = measure.find_contours(mask.astype(float), 0.5)
    d_parts = []
    scale = (scale_to - 14) / 256.0 # leave 7px padding
    offset = 7.0
    for c in contours:
        if len(c) < 5:
            continue
        # c is array of [y, x]
        d = f"M {(c[0,1]*scale + offset):.2f} {(c[0,0]*scale + offset):.2f}"
        for pt in c[1:]:
            d += f" L {(pt[1]*scale + offset):.2f} {(pt[0]*scale + offset):.2f}"
        d += " Z"
        d_parts.append(d)
    return " ".join(d_parts)

path_navy = contours_to_path(mask_navy)
path_cyan = contours_to_path(mask_cyan)
path_purple = contours_to_path(mask_purple)

# In dark background (#0F172A), the dark navy strokes look gorgeous as #38BDF8 / #E2E8F0 or original crisp styling.
# The original mark has dark navy #0C1A30 strokes, cyan #00B4D8, and purple #8B5CF6.
# On a dark background #0F172A, let's use a light/brightened navy #60A5FA or #F1F5F9 for the navy strokes so it has crisp contrast, or on #FBF7F0 light background!
# Wait: on a dark background #0B132B, the primary stroke in white/silver #F8FAFC with cyan #00D2FF and purple #A855F7 is extremely visible at 16x16 and 32x32!
# Let's check how both look:
svg = f'''<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" role="img" aria-label="Aghili Labs">
  <rect width="64" height="64" rx="16" fill="#0B132B"/>
  <path d="{path_navy}" fill="#F8FAFC" fill-rule="evenodd"/>
  <path d="{path_cyan}" fill="#00D2FF" fill-rule="evenodd"/>
  <path d="{path_purple}" fill="#A855F7" fill-rule="evenodd"/>
</svg>'''

ET.fromstring(svg)
Path('assets/favicon.svg').write_text(svg, encoding='utf-8')
print("Pure vector favicon.svg written and validated! Length:", len(svg))
