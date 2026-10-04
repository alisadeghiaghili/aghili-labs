# Learn with Ali

Landing page for the free interactive learning suite by **Ali Sadeghi Aghili**.

## Purpose

A single entry point that introduces the instructor, explains the mission (education as a human right — first for the people of Iran, then for everyone), invites support (donate / share / contribute), and links to every interactive course.

## Structure

```
index.html          # page shell and narrative sections
styles.css          # design system (Editorial Luxury)
app.js              # course catalog data, filters, reveal motion
assets/favicon.svg  # site mark
assets/logos/*.svg  # per-course brand marks
tools/              # maintenance scripts
```

## Courses

The 88 courses are grouped into nine foundational disciplines:

1. Programming languages
2. Shell, systems & low-level tooling
3. Architecture, methodology & engineering craftsmanship
4. Cloud, platforms & ops
5. Data engineering, analytics & modeling
6. MLOps & pipeline orchestration
7. Machine learning, foundations & AI
8. Web applications & interfaces
9. IoT, hardware & industrial edge

Each card links to `https://alisadeghiaghili.github.io/<slug>/`.

## Local preview

Open `index.html` in a browser, or serve the folder:

```powershell
python -m http.server 8080
```

## Deploy

Published via GitHub Pages from the `main` branch root.

## License

Content and code © Ali Sadeghi Aghili. Free education for everyone.
