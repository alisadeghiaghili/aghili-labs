# Graph Report - learn-with-ali  (2026-10-06)

## Corpus Check
- 5 files · ~48,857 words
- Verdict: corpus is large enough that graph structure adds value.
- Unclassified: 4 file(s) not represented in the graph (top: .ico 2, (none) 1, .css 1)

## Summary
- 66 nodes · 62 edges · 20 communities (6 shown, 14 thin omitted)
- Extraction: 100% EXTRACTED · 0% INFERRED · 0% AMBIGUOUS
- Token cost: 0 input · 0 output

## Graph Freshness
- Built from commit: `4b98e80a`
- Run `git rev-parse HEAD` and compare to check if the graph is stale.
- Run `graphify update .` after code changes (no API cost).

## Community Hubs (Navigation)
- createCourseCard
- app.js
- Detailed Course Breakdown
- Aghili Labs
- Aghili Labs — maintenance notes
- Aghili Labs — Curriculum Roadmap
- CLAUDE.md
- applyCourseFilters
- setupShare

## God Nodes (most connected - your core abstractions)
1. `Detailed Course Breakdown` - 10 edges
2. `Aghili Labs` - 7 edges
3. `escapeHtml()` - 5 edges
4. `createCourseCard()` - 5 edges
5. `renderCourses()` - 5 edges
6. `Aghili Labs — Curriculum Roadmap` - 5 edges
7. `Aghili Labs — maintenance notes` - 4 edges
8. `formatTitle()` - 3 edges
9. `formatDesc()` - 3 edges
10. `applyCourseFilters()` - 3 edges

## Surprising Connections (you probably didn't know these)
- `renderCourses()` --calls--> `applyCourseFilters()`  [EXTRACTED]
  app.js → app.js  _Bridges community 11 → community 0_

## Import Cycles
- None detected.

## Communities (20 total, 14 thin omitted)

### Community 0 - "createCourseCard"
Cohesion: 0.43
Nodes (7): createCourseCard(), escapeHtml(), formatDesc(), formatTitle(), renderCourses(), setLanguage(), setupLanguage()

### Community 1 - "app.js"
Cohesion: 0.14
Nodes (7): CATEGORIES, COURSE_DESC_DE, COURSE_DESC_EN, courseFilters, FILTERS, I18N, STATUS_META

### Community 6 - "Detailed Course Breakdown"
Cohesion: 0.20
Nodes (10): 1. Programming Languages (`languages` · 9 Courses), 2. Shell, Systems & Tooling (`systems` · 7 Courses), 3. Architecture & Methodology (`architecture` · 10 Courses), 4. Cloud, Platforms & Ops (`platforms` · 13 Courses), 5. Data & Analytics (`data` · 12 Courses), 6. MLOps & Pipelines (`mlops` · 9 Courses), 7. Machine Learning & AI (`ml` · 16 Courses), 8. Web & Applications (`web` · 7 Courses) (+2 more)

### Community 7 - "Aghili Labs"
Cohesion: 0.25
Nodes (7): Aghili Labs, Courses, Deploy, License, Local preview, Purpose, Structure

### Community 8 - "Aghili Labs — maintenance notes"
Cohesion: 0.40
Nodes (4): Adding a course, Aghili Labs — maintenance notes, Deploy, Re-generating placeholder marks

### Community 9 - "Aghili Labs — Curriculum Roadmap"
Cohesion: 0.40
Nodes (4): Aghili Labs — Curriculum Roadmap, Catalog Topology (9 Disciplines · 88 Courses), Curriculum Vision, Pedagogical & Technical Standards

## Knowledge Gaps
- **29 isolated node(s):** `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN`, `COURSE_DESC_DE`, `I18N` (+24 more)
  These have ≤1 connection - possible missing edges or undocumented components. (Counts symbols only; 50 node(s) total have ≤1 connection when file, concept and rationale nodes are included.)
- **14 thin communities (<3 nodes) omitted from report** — run `graphify query` to explore isolated nodes.

## Suggested Questions
_Questions this graph is uniquely positioned to answer:_

- **Why does `Detailed Course Breakdown` connect `Detailed Course Breakdown` to `Aghili Labs — Curriculum Roadmap`?**
  _High betweenness centrality (0.039) - this node is a cross-community bridge._
- **What connects `CATEGORIES`, `FILTERS`, `COURSE_DESC_EN` to the rest of the system?**
  _29 weakly-connected nodes found - possible documentation gaps or missing edges._
- **Should `app.js` be split into smaller, more focused modules?**
  _Cohesion score 0.14285714285714285 - nodes in this community are weakly interconnected._
- **Why does `Aghili Labs — Curriculum Roadmap` connect `Aghili Labs — Curriculum Roadmap` to `Detailed Course Breakdown`?**
  _High betweenness centrality (0.022) - this node is a cross-community bridge._