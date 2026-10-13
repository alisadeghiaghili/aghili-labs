# Graph Report - aghili-labs  (2026-10-13)

## Corpus Check
- 22 files · ~69,266 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .ico 2, (none) 1, .css 1)

## Summary
- 185 nodes · 299 edges · 9 communities (8 shown, 1 thin omitted)
- Extraction: 99% EXTRACTED · 1% INFERRED · 0% AMBIGUOUS · INFERRED: 3 edges (avg confidence: 0.85)
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `26f55c6a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- app.js
- pathlib
- upgrade_logos.py
- test_counter.py
- Detailed Course Breakdown
- Aghili Labs
- Aghili Labs — maintenance notes
- CLAUDE.md
- test_visitors.py

## God Nodes (most connected - your core abstractions)
1. `FakeAbacus` - 15 edges
2. `_load()` - 15 edges
3. `init()` - 14 edges
4. `_new_browser()` - 14 edges
5. `Detailed Course Breakdown` - 10 edges
6. `createCourseCard()` - 7 edges
7. `_badge()` - 7 edges
8. `test_course_badges_show_each_server_value()` - 7 edges
9. `Aghili Labs` - 7 edges
10. `applyCourseFilters()` - 6 edges

## Surprising Connections (you probably didn't know these)
- `_config_value()` --calls--> `re`  [EXTRACTED]
  tools/test_counter.py →   _Bridges community 4 → community 3_

## Import Cycles
- None detected.

## Communities (9 total, 1 thin omitted)

### Community 1 - "app.js"
Cohesion: 0.09
Nodes (42): ABACUS, applyCourseFilters(), CATEGORIES, COURSE_DESC_DE, COURSE_DESC_EN, COURSE_VISITORS_LEGACY_KEYS, courseCounterKey(), courseFilters (+34 more)

### Community 2 - "pathlib"
Cohesion: 0.09
Nodes (3): get_simple_icon(), main(), write()

### Community 3 - "upgrade_logos.py"
Cohesion: 0.23
Nodes (6): extract_inner(), fetch(), main(), upgrade_devicon(), upgrade_simpleicon(), wrap_svg()

### Community 4 - "test_counter.py"
Cohesion: 0.13
Nodes (4): _config_value(), counter_url(), fetch_value(), main()

### Community 6 - "Detailed Course Breakdown"
Cohesion: 0.13
Nodes (14): 1. Programming Languages (`languages` · 9 Courses), 2. Shell, Systems & Tooling (`systems` · 7 Courses), 3. Architecture & Methodology (`architecture` · 11 Courses), 4. Cloud, Platforms & Ops (`platforms` · 13 Courses), 5. Data & Analytics (`data` · 12 Courses), 6. MLOps & Pipelines (`mlops` · 9 Courses), 7. Machine Learning & AI (`ml` · 16 Courses), 8. Web & Applications (`web` · 7 Courses) (+6 more)

### Community 7 - "Aghili Labs"
Cohesion: 0.25
Nodes (7): Aghili Labs, Courses, Deploy, License, Local preview, Purpose, Structure

### Community 8 - "Aghili Labs — maintenance notes"
Cohesion: 0.20
Nodes (9): Adding a course, Aghili Labs — maintenance notes, Course counters (badge on each course card), Deploy, Re-generating placeholder marks, Shared notes, Site-wide counter (hero stat), Tests (+1 more)

### Community 11 - "test_visitors.py"
Cohesion: 0.09
Nodes (15): _badge(), course_key(), FakeAbacus, _load(), _new_browser(), _shown(), test_course_badges_show_each_server_value(), test_course_keys_are_never_hit() (+7 more)

## Knowledge Gaps
- **38 isolated node(s):** `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN`, `COURSE_DESC_DE`, `I18N` (+33 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 91 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **1 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **What connects `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN` to the rest of the system?**
  _38 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.09302325581395349 - nodes in this community are weakly interconnected._
- **Should `pathlib` be split into smaller, more focused modules?**
  _Cohesion score 0.0873015873015873 - nodes in this community are weakly interconnected._
- **Should `test_counter.py` be split into smaller, more focused modules?**
  _Cohesion score 0.12857142857142856 - nodes in this community are weakly interconnected._
- **Should `Detailed Course Breakdown` be split into smaller, more focused modules?**
  _Cohesion score 0.13333333333333333 - nodes in this community are weakly interconnected._
- **Should `test_visitors.py` be split into smaller, more focused modules?**
  _Cohesion score 0.09407665505226481 - nodes in this community are weakly interconnected._