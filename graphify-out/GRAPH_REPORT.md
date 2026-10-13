# Graph Report - learn-with-ali  (2026-10-13)

## Corpus Check
- 22 files · ~67,144 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .ico 2, (none) 1, .css 1)

## Summary
- 129 nodes · 190 edges · 13 communities (10 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 1 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `0a1650fc`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- init
- app.js
- pathlib
- upgrade_logos.py
- test_counter.py
- setupCourseVisitors
- Detailed Course Breakdown
- Aghili Labs
- Aghili Labs — maintenance notes
- createCourseCard
- CLAUDE.md
- setupStats
- generate_logos.py

## God Nodes (most connected - your core abstractions)
1. `init()` - 13 edges
2. `Detailed Course Breakdown` - 10 edges
3. `renderCourses()` - 7 edges
4. `Aghili Labs` - 7 edges
5. `applyCourseFilters()` - 6 edges
6. `setupStats()` - 6 edges
7. `escapeHtml()` - 5 edges
8. `createCourseCard()` - 5 edges
9. `setupCourseVisitors()` - 5 edges
10. `upgrade_devicon()` - 5 edges

## Surprising Connections (you probably didn't know these)
- `renderCourses()` --calls--> `applyCourseFilters()`  [EXTRACTED]
  app.js → app.js  _Bridges community 0 → community 9_
- `renderCourses()` --calls--> `setupCourseVisitors()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 5_
- `setLanguage()` --calls--> `renderCourses()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 12_
- `init()` --calls--> `setupLanguage()`  [EXTRACTED]
  app.js → app.js  _Bridges community 12 → community 0_
- `init()` --calls--> `setupCourseVisitors()`  [EXTRACTED]
  app.js → app.js  _Bridges community 5 → community 0_

## Import Cycles
- None detected.

## Communities (13 total, 3 thin omitted)

### Community 0 - "init"
Cohesion: 0.28
Nodes (9): applyCourseFilters(), forceReveal(), init(), setupDonateTabs(), setupFilters(), setupNav(), setupReveal(), setupSearch() (+1 more)

### Community 1 - "app.js"
Cohesion: 0.15
Nodes (12): CATEGORIES, COURSE_DESC_DE, COURSE_DESC_EN, courseFilters, courseVisitorsCache, FILTERS, I18N, KNOWN_COURSE_VISITORS (+4 more)

### Community 3 - "upgrade_logos.py"
Cohesion: 0.23
Nodes (6): extract_inner(), fetch(), main(), upgrade_devicon(), upgrade_simpleicon(), wrap_svg()

### Community 4 - "test_counter.py"
Cohesion: 0.19
Nodes (3): fetch(), main(), parse_count()

### Community 5 - "setupCourseVisitors"
Cohesion: 0.40
Nodes (5): fetchCourseVisitorCount(), fetchRepoVisitorConfig(), parseCourseVisitorSvg(), setupCourseVisitors(), updateCourseVisitorsUI()

### Community 6 - "Detailed Course Breakdown"
Cohesion: 0.13
Nodes (14): 1. Programming Languages (`languages` · 9 Courses), 2. Shell, Systems & Tooling (`systems` · 7 Courses), 3. Architecture & Methodology (`architecture` · 11 Courses), 4. Cloud, Platforms & Ops (`platforms` · 13 Courses), 5. Data & Analytics (`data` · 12 Courses), 6. MLOps & Pipelines (`mlops` · 9 Courses), 7. Machine Learning & AI (`ml` · 16 Courses), 8. Web & Applications (`web` · 7 Courses) (+6 more)

### Community 7 - "Aghili Labs"
Cohesion: 0.25
Nodes (7): Aghili Labs, Courses, Deploy, License, Local preview, Purpose, Structure

### Community 8 - "Aghili Labs — maintenance notes"
Cohesion: 0.40
Nodes (4): Adding a course, Aghili Labs — maintenance notes, Deploy, Re-generating placeholder marks

### Community 9 - "createCourseCard"
Cohesion: 0.70
Nodes (5): createCourseCard(), escapeHtml(), formatDesc(), formatTitle(), renderCourses()

### Community 12 - "setupStats"
Cohesion: 0.38
Nodes (7): setLanguage(), setupLanguage(), setupStats(), setupVisitors(), toPersianDigits(), updateStatusFilterUI(), updateVisitorsDisplay()

## Knowledge Gaps
- **32 isolated node(s):** `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN`, `COURSE_DESC_DE`, `I18N` (+27 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 59 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN` to the rest of the system?**
  _32 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `pathlib` be split into smaller, more focused modules?**
  _Cohesion score 0.09538461538461539 - nodes in this community are weakly interconnected._
- **Should `Detailed Course Breakdown` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._