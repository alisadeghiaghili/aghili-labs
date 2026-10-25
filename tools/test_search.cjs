// Run offline with: node --test tools/test_search.cjs
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");

const source = readFileSync(join(__dirname, "..", "app.js"), "utf8");

function loadCatalog() {
  const elements = {};
  const context = vm.createContext({
    document: {
      readyState: "loading",
      addEventListener() {},
      createElement: () => ({ dataset: {}, style: {} }),
      getElementById: (id) => elements[id] || null,
    },
  });
  // Leave DOMContentLoaded pending: no network, telemetry, or browser needed.
  vm.runInContext(source, context);
  const run = (code) => vm.runInContext(code, context);
  const normalize = run("normalizeSearchText");
  const categories = run("CATEGORIES");
  const filters = run("courseFilters");
  const sections = Object.entries(categories).map(([category, data]) => {
    const cards = data.courses.map(run("createCourseCard"));
    return {
      dataset: { category }, style: {}, cards,
      classList: { contains: () => false },
      querySelector: () => ({ textContent: "" }),
      querySelectorAll: (selector) => selector === ".course-card" ? cards : [],
    };
  });
  elements["course-root"] = { querySelectorAll: () => sections };
  elements["course-empty"] = { style: {} };
  const listeners = {};
  elements["course-search"] = {
    value: "",
    addEventListener: (event, handler) => { listeners[event] = handler; },
  };
  run("setupSearch()");
  return {
    normalize, run, filters, sections, elements,
    search(query) {
      elements["course-search"].value = query;
      listeners.input();
      return sections.filter((section) => !section.hidden)
        .flatMap((section) => section.cards.filter((card) => !card.hidden))
        .map((card) => card.dataset.slug);
    },
  };
}

test("normalizes Persian and Arabic letters, vowels, and tatweel", () => {
  const { normalize } = loadCatalog();
  assert.equal(normalize("پايتون"), normalize("پایتون"));
  assert.equal(normalize("شبكه"), normalize("شبکه"));
  assert.equal(normalize("يَـادگيرى"), normalize("یادگیری"));
});

test("matches spaces, half-spaces, and joined Persian words equally", () => {
  const { normalize } = loadCatalog();
  for (const query of ["برنامه نویسی", "برنامه‌نویسی", "برنامهنویسی", " برنامه\tنویسی "]) {
    assert.equal(normalize(query), normalize("برنامه‌نویسی"));
  }
});

test("keeps technical punctuation and German accents", () => {
  const { normalize } = loadCatalog();
  assert.equal(normalize(" PYTHON "), "python");
  assert.equal(normalize("Ｃ＋＋"), "c++");
  assert.notEqual(normalize("C++"), normalize("C"));
  assert.equal(normalize("FÜR"), "für");
});

test("actual search finds Arabic-letter and half-space query variants", () => {
  const catalog = loadCatalog();
  assert.ok(catalog.search("پايتون").includes("learn-python"));
  assert.ok(catalog.search("شبكه").includes("learn-networking"));
  assert.deepEqual(catalog.search("برنامه نویسی"), catalog.search("برنامه‌نویسی"));
  assert.deepEqual(catalog.search("برنامهنویسی"), catalog.search("برنامه‌نویسی"));
  assert.ok(catalog.search(" C++ ").includes("learn-cpp"));
});

test("search metadata and results remain identical in all UI languages", () => {
  const catalog = loadCatalog();
  const makeCard = catalog.run("createCourseCard");
  const python = catalog.run("CATEGORIES.languages.courses[0]");
  const expected = makeCard(python).dataset.searchText;
  for (const lang of ["fa", "en", "de"]) {
    catalog.run(`currentLang = ${JSON.stringify(lang)}`);
    const card = makeCard(python);
    assert.equal(card.dataset.searchText, expected);
    for (const key of ["course.desc", "COURSE_DESC_EN[course.slug]", "COURSE_DESC_DE[course.slug]"]) {
      catalog.run("var course = CATEGORIES.languages.courses[0]");
      const description = catalog.run(key);
      assert.ok(description);
      assert.ok(card.dataset.searchText.includes(catalog.normalize(description)));
      assert.ok(catalog.search(description).includes("learn-python"));
    }
  }
});

test("search respects category/status filters, empty results, and clearing", () => {
  const catalog = loadCatalog();
  catalog.filters.filter = "systems";
  assert.deepEqual(catalog.search("پايتون"), []);
  assert.equal(catalog.elements["course-empty"].hidden, false);
  catalog.filters.filter = "languages";
  catalog.filters.status = "published";
  assert.deepEqual(catalog.search("پايتون"), []);
  catalog.filters.status = "near_complete";
  assert.deepEqual(catalog.search("پايتون"), ["learn-python"]);
  catalog.filters.filter = "all";
  catalog.filters.status = "all";
  assert.deepEqual(catalog.search("no-such-course-xyz"), []);
  assert.equal(catalog.search(" \u200c ").length, 89);
  assert.equal(catalog.elements["course-empty"].hidden, true);
});
