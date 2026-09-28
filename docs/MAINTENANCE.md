# Learn with Ali — maintenance notes

## Adding a course

1. Add an SVG mark at `assets/logos/<slug>.svg` (64×64 rounded square, brand colors).
2. Register the course in `app.js` under the right `CATEGORIES` key:
   - `slug` — GitHub Pages path segment (`learn-<name>`)
   - `title` / `en` — Persian display name and English label
   - `desc` — one sentence, Persian
   - `logo` — filename stem under `assets/logos/`
   - `soon: true` when the course is not live yet

## Re-generating placeholder marks

```powershell
python tools/generate_logos.py
```

Only used for courses without a custom favicon/logo shipped in the course repo. Prefer the real course mark when available.

## Deploy

```powershell
git add .
git commit -m "feat: ..."
git push origin main
```

GitHub Pages serves from `main` / root.
