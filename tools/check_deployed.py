import urllib.request
import re

for course in ['learn-r', 'learn-cmd', 'learn-dvc']:
    url = f'https://alisadeghiaghili.github.io/{course}/'
    req = urllib.request.Request(url, headers={'User-Agent': 'Mozilla/5.0'})
    html = urllib.request.urlopen(req).read().decode('utf-8')
    scripts = re.findall(r'<script[^>]+src=[\'"]([^\'"]+)[\'"]', html)
    print(f'=== {course} ===')
    print('Scripts:', scripts)
    for s in scripts:
        if not s.startswith('http'):
            s_url = f'https://alisadeghiaghili.github.io/{course}/{s.lstrip("/")}'
        else:
            s_url = s
        try:
            js = urllib.request.urlopen(urllib.request.Request(s_url, headers={'User-Agent': 'Mozilla/5.0'})).read().decode('utf-8')
            for kw in ['countapi', 'HISTORICAL_OFFSET', 'BASELINE_FALLBACK', 'BASE_COUNT', 'alisadeghiaghili']:
                matches = [line for line in js.splitlines() if kw in line]
                if matches:
                    print(f'  Found {kw} in {s}: {len(matches)} occurrences')
                    for m in matches[:2]:
                        print('   ', m[:100])
        except Exception as e:
            print('  Error reading', s_url, e)
