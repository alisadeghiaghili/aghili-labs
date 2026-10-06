# Graph Report - learn-with-ali  (2026-10-06)

## Corpus Check
- 20 files · ~63,851 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .ico 2, (none) 1, .css 1)

## Summary
- 108 nodes · 147 edges · 13 communities (8 shown, 5 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `cf922730`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- init
- app.js
- pathlib
- upgrade_logos.py
- build_comparison_view.py
- Detailed Course Breakdown
- Aghili Labs
- Aghili Labs — maintenance notes
- createCourseCard
- CLAUDE.md
- applyCourseFilters
- setLanguage

## God Nodes (most connected - your core abstractions)
1. `init()` - 11 edges
2. `Detailed Course Breakdown` - 10 edges
3. `Aghili Labs` - 7 edges
4. `renderCourses()` - 6 edges
5. `escapeHtml()` - 5 edges
6. `createCourseCard()` - 5 edges
7. `applyCourseFilters()` - 5 edges
8. `upgrade_devicon()` - 5 edges
9. `upgrade_simpleicon()` - 5 edges
10. `Aghili Labs — Curriculum Roadmap` - 5 edges

## Surprising Connections (you probably didn't know these)
- `renderCourses()` --calls--> `applyCourseFilters()`  [EXTRACTED]
  app.js → app.js  _Bridges community 11 → community 9_
- `init()` --calls--> `renderCourses()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 0_
- `setLanguage()` --calls--> `renderCourses()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 12_
- `init()` --calls--> `setupFilters()`  [EXTRACTED]
  app.js → app.js  _Bridges community 11 → community 0_
- `init()` --calls--> `setupLanguage()`  [EXTRACTED]
  app.js → app.js  _Bridges community 12 → community 0_

## Import Cycles
- None detected.

## Communities (13 total, 5 thin omitted)

### Community 0 - "init"
Cohesion: 0.33
Nodes (6): init(), setupDonateTabs(), setupNav(), setupReveal(), setupStats(), setupVisitors()

### Community 1 - "app.js"
Cohesion: 0.20
Nodes (9): CATEGORIES, COURSE_DESC_DE, COURSE_DESC_EN, courseFilters, FILTERS, I18N, setupShare(), showToast() (+1 more)

### Community 3 - "upgrade_logos.py"
Cohesion: 0.27
Nodes (6): extract_inner(), fetch(), main(), upgrade_devicon(), upgrade_simpleicon(), wrap_svg()

### Community 6 - "Detailed Course Breakdown"
Cohesion: 0.13
Nodes (14): 1. Programming Languages (`languages` · 9 Courses), 2. Shell, Systems & Tooling (`systems` · 7 Courses), 3. Architecture & Methodology (`architecture` · 10 Courses), 4. Cloud, Platforms & Ops (`platforms` · 13 Courses), 5. Data & Analytics (`data` · 12 Courses), 6. MLOps & Pipelines (`mlops` · 9 Courses), 7. Machine Learning & AI (`ml` · 16 Courses), 8. Web & Applications (`web` · 7 Courses) (+6 more)

### Community 7 - "Aghili Labs"
Cohesion: 0.25
Nodes (7): Aghili Labs, Courses, Deploy, License, Local preview, Purpose, Structure

### Community 8 - "Aghili Labs — maintenance notes"
Cohesion: 0.40
Nodes (4): Adding a course, Aghili Labs — maintenance notes, Deploy, Re-generating placeholder marks

### Community 9 - "createCourseCard"
Cohesion: 0.70
Nodes (5): createCourseCard(), escapeHtml(), formatDesc(), formatTitle(), renderCourses()

### Community 11 - "applyCourseFilters"
Cohesion: 0.50
Nodes (4): applyCourseFilters(), forceReveal(), setupFilters(), setupSearch()

## Knowledge Gaps
- **29 isolated node(s):** `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN`, `COURSE_DESC_DE`, `I18N` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 54 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **5 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `init()` connect `init` to `app.js`, `applyCourseFilters`, `setLanguage`, `createCourseCard`?**
  _High betweenness centrality (0.004) - this node is a cross-community bridge._
- **What connects `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `pathlib` be split into smaller, more focused modules?**
  _Cohesion score 0.11904761904761904 - nodes in this community are weakly interconnected._
- **Should `Detailed Course Breakdown` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._