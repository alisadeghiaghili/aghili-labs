# Aghili Labs — maintenance notes

## Adding a course

1. Add an SVG mark at `assets/logos/<slug>.svg` (64×64 rounded square, brand colors).
2. Register the course in `app.js` under the right `CATEGORIES` key:
   - `slug` — GitHub Pages path segment (`learn-<name>`)
   - `title` / `en` — Persian display name and English label
   - `desc` — one sentence, Persian
   - `logo` — filename stem under `assets/logos/`
   - `status` — `"published"` | `"near_complete"` | `"in_development"` | `"planned"`

## Re-generating placeholder marks

```powershell
python tools/generate_logos.py
```

Only used for courses without a custom favicon/logo shipped in the course repo. Prefer the real course mark when available.

## Visitor counter

The hero "visitors" stat (`#stat-visitors`) is a site-wide total shared by every browser.

- **Backend:** [Abacus](https://abacus.jasoncameron.dev), a free counting API with CORS. Namespace `alisadeghiaghili.github.io`, key `aghili-labs-unique-visitors`. `get` reads the value, `hit` adds 1; both reply `{"value": n}`. A `get` on a key that does not exist yet answers 404, which the page treats as 0.
- **Unique per browser:** a browser sends one `hit` in its lifetime and stores the flag `aghili-labs:visitor-counted:v1` in localStorage. Every later load only sends `get`. If a `hit` fails, the flag is released so the next load retries.
- **Displayed number:** `baseline + server value`. `baseline` lives in `VISITOR_COUNTER` in `app.js` and holds the visitors recorded before the move to Abacus (214). Changing it changes the public number directly, so leave it alone unless that is the intent.
- **Local cache:** `aghili-labs:visitors:v5` is only a first-paint placeholder and is always replaced by the server value. Bump the key suffix if the stored format ever changes.
- **Key expiry:** Abacus deletes keys that are not accessed for 6 months. Not a risk while the site has traffic, since every page load reads the key.
- **Known limits:** private windows and cleared site data count the same person again, and there is no server-side deduplication, so the total is a close estimate and not an exact head count.

### Tests

```powershell
python tools/test_visitors.py
```

Offline browser test (Playwright, Chromium) that serves a fake Abacus. Covers the single hit per browser, shared totals across browsers, stale cache replacement, retry after a failed hit and a missing key.

```powershell
python tools/test_counter.py
python tools/test_counter.py --hit
```

Live smoke check against the real Abacus counter. The default is read-only (two `get` calls must return the same `{value: int}`). `--hit` also sends one real `hit` and checks it adds exactly 1, which increases the public number, so use it sparingly. Needs network access to `abacus.jasoncameron.dev`.

## Deploy

```powershell
git add .
git commit -m "feat: ..."
git push origin main
```

GitHub Pages serves from `main` / root.
