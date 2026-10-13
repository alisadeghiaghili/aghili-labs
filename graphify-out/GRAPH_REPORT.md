# Graph Report - aghili-labs  (2026-10-13)

## Corpus Check
- 22 files · ~68,557 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .ico 2, (none) 1, .css 1)

## Summary
- 164 nodes · 250 edges · 14 communities (11 shown, 3 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 2 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `5dab6978`
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
- renderCourses
- CLAUDE.md
- test_visitors.py
- setupStats
- generate_logos.py

## God Nodes (most connected - your core abstractions)
1. `init()` - 13 edges
2. `_load()` - 10 edges
3. `Detailed Course Breakdown` - 10 edges
4. `FakeAbacus` - 9 edges
5. `_new_browser()` - 9 edges
6. `renderCourses()` - 7 edges
7. `Aghili Labs` - 7 edges
8. `applyCourseFilters()` - 6 edges
9. `setupStats()` - 6 edges
10. `main()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `renderCourses()` --calls--> `applyCourseFilters()`  [EXTRACTED]
  app.js → app.js  _Bridges community 0 → community 9_
- `renderCourses()` --calls--> `setupCourseVisitors()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 5_
- `setLanguage()` --calls--> `setupStats()`  [EXTRACTED]
  app.js → app.js  _Bridges community 9 → community 12_
- `init()` --calls--> `setupStats()`  [EXTRACTED]
  app.js → app.js  _Bridges community 12 → community 0_
- `init()` --calls--> `setupCourseVisitors()`  [EXTRACTED]
  app.js → app.js  _Bridges community 5 → community 0_

## Import Cycles
- None detected.

## Communities (14 total, 3 thin omitted)

### Community 0 - "init"
Cohesion: 0.28
Nodes (9): applyCourseFilters(), forceReveal(), init(), setupDonateTabs(), setupFilters(), setupNav(), setupReveal(), setupSearch() (+1 more)

### Community 1 - "app.js"
Cohesion: 0.14
Nodes (13): CATEGORIES, COURSE_DESC_DE, COURSE_DESC_EN, courseFilters, courseVisitorsCache, FILTERS, I18N, KNOWN_COURSE_VISITORS (+5 more)

### Community 3 - "upgrade_logos.py"
Cohesion: 0.23
Nodes (6): extract_inner(), fetch(), main(), upgrade_devicon(), upgrade_simpleicon(), wrap_svg()

### Community 4 - "test_counter.py"
Cohesion: 0.13
Nodes (4): _config_value(), counter_url(), fetch_value(), main()

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
Cohesion: 0.29
Nodes (6): Adding a course, Aghili Labs — maintenance notes, Deploy, Re-generating placeholder marks, Tests, Visitor counter

### Community 9 - "renderCourses"
Cohesion: 0.43
Nodes (7): createCourseCard(), escapeHtml(), formatDesc(), formatTitle(), renderCourses(), setLanguage(), setupLanguage()

### Community 11 - "test_visitors.py"
Cohesion: 0.13
Nodes (8): FakeAbacus, _load(), _new_browser(), _shown(), test_failed_hit_is_retried_on_next_load(), test_missing_counter_key_reads_as_zero(), test_stale_local_cache_is_replaced_by_server_value(), test_unique_visits_are_counted_once_and_shared()

### Community 12 - "setupStats"
Cohesion: 0.47
Nodes (6): requestVisitorCounter(), setupStats(), setupVisitors(), toPersianDigits(), updateStatusFilterUI(), updateVisitorsDisplay()

## Knowledge Gaps
- **34 isolated node(s):** `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN`, `COURSE_DESC_DE`, `I18N` (+29 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 80 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **3 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN` to the rest of the system?**
  _34 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Should `pathlib` be split into smaller, more focused modules?**
  _Cohesion score 0.10144927536231885 - nodes in this community are weakly interconnected._
- **Should `test_counter.py` be split into smaller, more focused modules?**
  _Cohesion score 0.12857142857142856 - nodes in this community are weakly interconnected._
- **Should `Detailed Course Breakdown` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `test_visitors.py` be split into smaller, more focused modules?**
  _Cohesion score 0.12615384615384614 - nodes in this community are weakly interconnected._