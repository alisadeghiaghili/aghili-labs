// Run offline with: node --test tools/test_share.cjs
const assert = require("node:assert/strict");
const { readFileSync } = require("node:fs");
const { join } = require("node:path");
const { test } = require("node:test");
const vm = require("node:vm");

const source = readFileSync(join(__dirname, "..", "app.js"), "utf8");
const html = readFileSync(join(__dirname, "..", "index.html"), "utf8");
const url = "https://alisadeghiaghili.github.io/learn-python/";

function loadPage(options = {}) {
  let document;
  class Element {
    constructor(tag) {
      this.tagName = tag;
      this.children = [];
      this.attributes = {};
      this.listeners = {};
      this.style = {};
      this.className = "";
      this.classList = {
        contains: (name) => this.className.split(/\s+/).includes(name),
        add: (name) => { this.className += ` ${name}`; },
        remove: (name) => { this.className = this.className.split(/\s+/).filter((v) => v !== name).join(" "); },
      };
    }
    setAttribute(key, value) { this.attributes[key] = value; }
    getAttribute(key) { return this.attributes[key] ?? null; }
    addEventListener(event, handler) { this.listeners[event] = handler; }
    appendChild(child) { child.parent = this; this.children.push(child); }
    remove() {
      if (this.parent) this.parent.children = this.parent.children.filter((child) => child !== this);
      this.parent = null;
    }
    closest(selector) {
      if (this.classList.contains(selector.slice(1))) return this;
      return this.parent?.closest(selector) || null;
    }
    querySelector(selector) {
      for (const child of this.children) {
        if (selector.startsWith(".") ? child.classList.contains(selector.slice(1)) : child.tagName === selector) return child;
        const match = child.querySelector(selector);
        if (match) return match;
      }
      return null;
    }
    focus() { document.activeElement = this; }
    select() { this.selected = true; }
  }
  class Button extends Element {}
  const root = new Element("div");
  const card = new Element("article");
  card.className = "course-card";
  const button = new Button("button");
  button.className = "course-share";
  button.setAttribute("data-course-url", url);
  button.setAttribute("data-course-title", "Python");
  card.appendChild(button);
  root.appendChild(card);
  const body = new Element("body");
  body.appendChild(root);
  let legacyCalls = 0;
  document = {
    body, activeElement: button, readyState: "loading",
    addEventListener() {},
    getElementById: (id) => id === "course-root" ? root : null,
    createElement: (tag) => tag === "button" ? new Button(tag) : new Element(tag),
    execCommand(command) {
      legacyCalls += 1;
      assert.equal(command, "copy");
      const input = body.querySelector("input");
      assert.equal(input.value, url);
      assert.equal(input.selected, true);
      if (options.legacyThrows) throw new Error("Copy blocked");
      return options.legacyResult ?? false;
    },
  };
  const toasts = [];
  const timers = [];
  const context = vm.createContext({
    document, Element, HTMLButtonElement: Button,
    navigator: { clipboard: options.clipboard },
    window: { setTimeout: (callback) => timers.push(callback), clearTimeout() {} },
    recordToast: (message) => toasts.push(message),
  });
  const run = (code) => vm.runInContext(code, context);
  run(source);
  run("showToast = recordToast; setupShare();");
  return {
    card, button, body, document, toasts, timers, run,
    legacyCalls: () => legacyCalls,
    click: () => root.listeners.click({ target: button, preventDefault() {}, stopPropagation() {} }),
  };
}

test("Clipboard API success shows success without the legacy fallback", async () => {
  const written = [];
  const page = loadPage({ clipboard: { writeText: async (text) => written.push(text) } });
  await page.click();
  assert.deepEqual(written, [url]);
  assert.equal(page.legacyCalls(), 0);
  assert.equal(page.toasts[0], page.run("I18N.fa.copiedToast"));
  assert.equal(page.button.classList.contains("is-copied"), true);
  assert.equal(page.card.querySelector(".course-copy-fallback"), null);
  page.timers[0]();
  assert.equal(page.button.classList.contains("is-copied"), false);
});

test("legacy success is checked and restores focus after API rejection", async () => {
  const page = loadPage({
    clipboard: { writeText: async () => { throw new Error("Permission denied"); } },
    legacyResult: true,
  });
  await page.click();
  assert.equal(page.legacyCalls(), 1);
  assert.equal(page.toasts[0], page.run("I18N.fa.copiedToast"));
  assert.equal(page.body.querySelector("input"), null);
  assert.equal(page.document.activeElement, page.button);
});

for (const legacyThrows of [false, true]) {
  test(`failed copying offers a selected link, without success (throws=${legacyThrows})`, async () => {
    const page = loadPage({ legacyThrows });
    await page.click();
    assert.equal(page.legacyCalls(), 1);
    assert.deepEqual(page.toasts, [page.run("I18N.fa.copyFailed")]);
    assert.equal(page.button.classList.contains("is-copied"), false);
    const panel = page.card.querySelector(".course-copy-fallback");
    const input = panel.querySelector("input");
    assert.equal(input.value, url);
    assert.equal(input.readOnly, true);
    assert.equal(input.dir, "ltr");
    assert.equal(input.selected, true);
    assert.equal(page.document.activeElement, input);
    assert.equal(page.body.children.length, 1); // temporary input cleaned up
    panel.querySelector("button").listeners.click();
    assert.equal(page.card.querySelector(".course-copy-fallback"), null);
    assert.equal(page.document.activeElement, page.button);
  });
}

test("manual copy supports repeated attempts, Escape, and subsequent success", async () => {
  let allowCopy = false;
  const page = loadPage({ clipboard: { writeText: async () => { if (!allowCopy) throw new Error("Blocked"); } } });
  await page.click();
  await page.click();
  assert.equal(page.card.children.filter((child) => child.className === "course-copy-fallback").length, 1);
  page.card.querySelector(".course-copy-fallback").listeners.keydown({ key: "Escape", preventDefault() {} });
  assert.equal(page.document.activeElement, page.button);
  await page.click();
  allowCopy = true;
  await page.click();
  assert.equal(page.card.querySelector(".course-copy-fallback"), null);
  assert.equal(page.toasts.at(-1), page.run("I18N.fa.copiedToast"));
});

test("manual-copy instructions and buttons follow each UI language", async () => {
  for (const lang of ["fa", "en", "de"]) {
    const page = loadPage();
    page.run(`currentLang = ${JSON.stringify(lang)}`);
    await page.click();
    const panel = page.card.querySelector(".course-copy-fallback");
    assert.equal(panel.querySelector("label").textContent, page.run(`I18N.${lang}.copyFailed`));
    assert.equal(panel.querySelector("button").textContent, page.run(`I18N.${lang}.closeLabel`));
    assert.equal(panel.getAttribute("aria-label"), page.run(`I18N.${lang}.courseLinkLabel`));
  }
});

test("edited Persian text agrees between initial HTML and translations", () => {
  const page = loadPage();
  const canonical = (text) => text.replace(/\s*<br\s*\/?>\s*/g, "<br>").replace(/\s+/g, " ").trim();
  for (const key of ["heroLede", "quoteText", "aboutCard1Body", "aboutCard2Body", "supportShareBody", "supportShareBtn"]) {
    const match = html.match(new RegExp(`<([a-z0-9]+)[^>]*data-i18n(?:-html)?="${key}"[^>]*>([\\s\\S]*?)<\\/\\1>`));
    assert.ok(match, key);
    assert.equal(canonical(match[2]), canonical(page.run(`I18N.fa.${key}`)), key);
  }
});
