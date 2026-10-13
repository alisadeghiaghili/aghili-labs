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

Two kinds of numbers come from the same [Abacus](https://abacus.jasoncameron.dev) backend (a free counting API with CORS). Everything lives in the namespace `alisadeghiaghili.github.io`. `get` reads the value, `hit` adds 1; both reply `{"value": n}`. A `get` on a key that does not exist answers 404, which the page treats as 0. The shared request helper is `requestAbacusCounter(action, key)` in `app.js`, with api, namespace and timeout in the `ABACUS` config.

### Site-wide counter (hero stat)

The hero "visitors" stat (`#stat-visitors`) is a site-wide total shared by every browser.

- **Key:** `aghili-labs-unique-visitors`.
- **Unique per browser:** a browser sends one `hit` in its lifetime and stores the flag `aghili-labs:visitor-counted:v1` in localStorage. Every later load only sends `get`. If a `hit` fails, the flag is released so the next load retries.
- **Displayed number:** `baseline + server value`. `baseline` lives in `VISITOR_COUNTER` in `app.js` and holds the visitors recorded before the move to Abacus (214). Changing it changes the public number directly, so leave it alone unless that is the intent.
- **Local cache:** `aghili-labs:visitors:v5` is only a first-paint placeholder and is always replaced by the server value. Bump the key suffix if the stored format ever changes.

### Course counters (badge on each course card)

Every course card with a live site (status `published` or `near_complete`) shows that course's visitor count.

- **Keys:** `<slug>-unique-visitors`, for example `learn-dvc-unique-visitors`.
- **Who increments:** the course sites. Each course site sends the `hit` for its own key once per browser. The landing page never sends `hit` for a course key; it only reads with `get`, so both places show the identical number.
- **Displayed number:** the server value exactly as returned. No baseline, floor or offset. A 404 shows 0. A failed request keeps the placeholder (or the dash) and never shows an invented number.
- **Requests:** one read per live course on every load, sent in parallel with a 5 s timeout each. With the site request this is 15 requests, under the Abacus limit of 30 per 10 s per IP. Keep it in mind if the number of live courses grows past about 28.
- **Local cache:** `aghili-labs:course-visitors:v7` is only a first-paint placeholder and is overwritten by the server values on every load. Older keys (`...:v1`, `...:v6`) are removed. Bump the suffix if the stored format ever changes.
- **Adding a new course:** create its Abacus key `<slug>-unique-visitors` with an initial value before the course is published (set status to `published` or `near_complete`), and make the course site increment that same key. A missing key reads as 0 until the first hit.

### Shared notes

- **Key expiry:** Abacus deletes keys that are not accessed for 6 months. Not a risk while the pages have traffic, since every landing page load reads every key.
- **Known limits:** private windows and cleared site data count the same person again, and there is no server-side deduplication, so the totals are a close estimate and not an exact head count.

### Tests

```powershell
python tools/test_visitors.py
```

Offline browser test (Playwright, Chromium) that serves a fake Abacus. Covers the single hit per browser, shared totals across browsers, stale cache replacement, retry after a failed hit and a missing key for the site counter; and for the course badges the server value on every live card, no `hit` for course keys, a 404 key showing 0, a failed read showing no number and stale cache replacement.

```powershell
python tools/test_counter.py
python tools/test_counter.py --hit
```

Live smoke check against the real Abacus site counter. The default is read-only (two `get` calls must return the same `{value: int}`). `--hit` also sends one real `hit` and checks it adds exactly 1, which increases the public number, so use it sparingly. Needs network access to `abacus.jasoncameron.dev`.

## Deploy

```powershell
git add .
git commit -m "feat: ..."
git push origin main
```

GitHub Pages serves from `main` / root.
