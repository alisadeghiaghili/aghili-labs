/**
 * Learn with Ali — course catalog renderer.
 * Course metadata, category filters, and scroll reveal.
 */

const BASE = "https://alisadeghiaghili.github.io";

/**
 * @typedef {Object} Course
 * @property {string} slug
 * @property {string} title
 * @property {string} en
 * @property {string} desc
 * @property {string} logo
 * @property {boolean} [soon]
 */

/** @type {Record<string, { title: string, blurb: string, courses: Course[] }>} */
const CATEGORIES = {
  languages: {
    title: "زبان‌های برنامه‌نویسی",
    blurb: "پایه‌های محکم برای هر مسیر فنی",
    courses: [
      {
        slug: "learn-python",
        title: "پایتون",
        en: "Python",
        desc: "زبانی که دنیای داده و هوش مصنوعی با آن می‌چرخد و درخشان‌ترین انتخاب برای شروع است — حافظه، sandbox تعاملی و چالش‌های پلکانی، از متغیر تا مدل ذهنی اشیاء.",
        logo: "python",
      },
      {
        slug: "learn-r",
        title: "زبان R",
        en: "R",
        desc: "زبان متولدشده برای آمار و تحلیل داده؛ زبان اصلی علم‌آماری — محیط R زنده، سطح‌بندی آموزشی و امتیازدهی گلف.",
        logo: "r",
      },
      {
        slug: "learn-cpp",
        title: "C++",
        en: "C++",
        desc: "آزمایشگاه حافظه: pointer، ownership و رفتار واقعی ماشین.",
        logo: "cpp",
      },
      {
        slug: "learn-rust",
        title: "راست",
        en: "Rust",
        desc: "مالکیت، move و borrow را بصری ببینید — با sandbox و سطح‌های چالشی.",
        logo: "rust",
      },
      {
        slug: "learn-ts",
        title: "تایپ‌اسکریپت",
        en: "TypeScript",
        desc: "تایپ‌سیستم مدرن جاوااسکریپت، عمیق و کاربردی.",
        logo: "ts",
        soon: true,
      },
    ],
  },
  systems: {
    title: "شل، سیستم و ابزار",
    blurb: "کنترل واقعی بر ماشین و جریان کار",
    courses: [
      {
        slug: "learn-bash",
        title: "بش",
        en: "Bash",
        desc: "زبان خط فرمان لینوکس و پشت‌پناه خودکارسازی و DevOps — cwd، فایل‌ها و pipeها را زنده ببینید.",
        logo: "bash",
      },
      {
        slug: "learn-powershell",
        title: "پاورشل",
        en: "PowerShell",
        desc: "شل ویندوز با pipeline اشیاء که مدیریت سرورها با آن خودکار می‌شود — مدل فکری PowerShell، مرحله‌ای.",
        logo: "powershell",
      },
      {
        slug: "learn-cmd",
        title: "CMD ویندوز",
        en: "Windows CMD",
        desc: "خط فرمان کلاسیک ویندوز که ابزارهای مدیریت سیستم بر پایه آن‌اند — با visualizer فایل‌سیستم و sandbox.",
        logo: "cmd",
      },
      {
        slug: "learn-linux",
        title: "لینوکس",
        en: "Linux / Ubuntu",
        desc: "سیستم‌عاملی که بخش عمده اینترنت و سرورها روی آن می‌چرخد — مربی شل اوبونتو با فایل‌سیستم زنده و sandbox.",
        logo: "linux",
      },
      {
        slug: "learn-git",
        title: "گیت",
        en: "Git",
        desc: "ابزار کنترل نسخه که همکاری روی تقریباً هر پروژه‌ای با آن می‌چرخد — stage، commit، branch و بازیابی در sandbox.",
        logo: "git",
      },
      {
        slug: "learn-networking",
        title: "شبکه",
        en: "Networking",
        desc: "زبان مشترک هر سرویسی که پشت هر اپ می‌چرخد؛ برای data و DevOps — لینوکس و ویندوز، سطح‌به‌سطح.",
        logo: "networking",
      },
    ],
  },
  platforms: {
    title: "ابر، پلتفرم و عملیات",
    blurb: "زیرساختی که مدل‌ها و داده روی آن می‌نشیند",
    courses: [
      {
        slug: "learn-docker",
        title: "داکر",
        en: "Docker",
        desc: "استاندارد بیلد و استقرار که «روی ماشینم کار می‌کرد» را برای همیشه کم می‌کند — container، image و orchestration پایه با سطح‌های تعاملی.",
        logo: "docker",
      },
      {
        slug: "learn-aws",
        title: "AWS",
        en: "Amazon Web Services",
        desc: "پیشرو بازار خدمات ابر و جایی که بیشتر زیرساخت‌های داده جهان ساکن‌اند — مفاهیم سرویس‌های آمازون برای مهندسی داده.",
        logo: "aws",
        soon: true,
      },
      {
        slug: "learn-azure",
        title: "Azure",
        en: "Microsoft Azure",
        desc: "رقیب بزرگ AWS در دنیای سازمان‌ها و دنیای مایکروسافت — از پایه تا الگوهای داده.",
        logo: "azure",
        soon: true,
      },
      {
        slug: "learn-databricks",
        title: "دیتابریکس",
        en: "Databricks",
        desc: "پلتفرم data engine که روی Spark می‌چرخد و جریان کار تیم‌های داده مدرن را شکل می‌دهد — Lakehouse و الگوهای عملی.",
        logo: "databricks",
        soon: true,
      },
      {
        slug: "learn-snowflake",
        title: "اسنوفلیک",
        en: "Snowflake",
        desc: "دیتابیس ابری که دنیای تحلیل‌های مدرن روی آن می‌چرخد — Time Travel، cloneهای zero-copy، warehouse و سطح‌های SQL.",
        logo: "snowflake",
      },
      {
        slug: "learn-grafana",
        title: "گرافانا",
        en: "Grafana",
        desc: "چشم سازمان‌ها بر سرویس‌هایشان؛ داشبوردی که تیم‌ها به آن نگاه می‌کنند — observability و هشدار، به‌صورت بازی.",
        logo: "grafana",
      },
      {
        slug: "learn-pkgm",
        title: "مدیریت بسته",
        en: "pip · conda · uv",
        desc: "پایه هر پروژه پایتون؛ همان‌جا که پروژه‌ها از «کار می‌کرد» به خرابی می‌خورند — pip، conda و uv، بدون سردرگمی.",
        logo: "pkgm",
      },
    ],
  },
  data: {
    title: "داده و تحلیل",
    blurb: "از SQL تا دریاچه‌های داده",
    courses: [
      {
        slug: "learn-sql",
        title: "SQL",
        en: "SQL",
        desc: "زبانی که تقریباً هر دیتابیس جهان با آن حرف می‌زند و پایه هر مسیر داده — sandbox SQLite در مرورگر، چالش‌های هدف‌محور و pipeline کوئری.",
        logo: "sql",
      },
      {
        slug: "learn-dax",
        title: "DAX",
        en: "DAX",
        desc: "زبان محاسبات پشت Power BI؛ همان‌جا که داشبوردهای سازمانی ساخته می‌شوند — visualization و sandbox، با چالش‌ها.",
        logo: "dax",
      },
      {
        slug: "learn-m",
        title: "Power Query M",
        en: "M",
        desc: "زبان transform پشت هر داشبورد Power BI؛ همین‌جاست که داده خام به گزارش می‌رسد — visualization، sandbox و سطح‌های پلکانی.",
        logo: "m",
      },
      {
        slug: "learn-spark",
        title: "اسپارک",
        en: "Apache Spark",
        desc: "موتور پردازشی داده‌های حجیم که زیرساخت بیشتر lakehouseهای مدرن است — در sandbox تعاملی.",
        logo: "spark",
      },
      {
        slug: "learn-hadoop",
        title: "هدوپ",
        en: "Hadoop",
        desc: "بنیاد پردازش توزیع‌شده‌ای که همه‌چیز از آن پا گرفت — HDFS، YARN و MapReduce، معماری یکجا و قابل لمس.",
        logo: "hadoop",
      },
    ],
  },
  mlops: {
    title: "MLOps و پایپ‌لاین",
    blurb: "چرخهٔ عمر مدل، داده و جریان رویداد",
    courses: [
      {
        slug: "learn-dvc",
        title: "DVC",
        en: "Data Version Control",
        desc: "گیت داده؛ ابزاریکه تغییرات datasetها را قابل ردیابی و تکرار می‌کند — cache، remote، pipeline و experimentها.",
        logo: "dvc",
      },
      {
        slug: "learn-dbt",
        title: "dbt",
        en: "dbt",
        desc: "استاندارد صنعت برای تبدیل داده روی warehouse؛ همان SQL + تست که تیم‌های داده با آن حرف می‌زنند — DAG، materialization، تست و CI نازک.",
        logo: "dbt",
      },
      {
        slug: "learn-airflow",
        title: "ایرفلو",
        en: "Apache Airflow",
        desc: "ساعت زنگ هر pipeline داده در صنعت؛ بیشتر اورکستیشن‌های داده روی آن ساخته می‌شوند — DAG، schedule، retry و operator در sandbox.",
        logo: "airflow",
      },
      {
        slug: "learn-kafka",
        title: "کافکا",
        en: "Apache Kafka",
        desc: "شریان داده‌های لحظه‌ای که سیستم‌های بزرگ روی آن می‌چرخند — topic، partition، consumer و replication با cluster زنده.",
        logo: "kafka",
      },
      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "دفتر ثبت هر آزمایش و مدل ML که تیم‌ها با آن تکرارپذیری را حفظ می‌کنند — tracking و ثبت مدل، به‌صورت بازی آموزشی.",
        logo: "mlflow",
      },
    ],
  },
  ml: {
    title: "یادگیری ماشین و هوش مصنوعی",
    blurb: "از آمار و ریاضی تا یادگیری عمیق",
    courses: [
      {
        slug: "learn-ml",
        title: "یادگیری ماشین",
        en: "Machine Learning",
        desc: "موتور تصمیم‌گیری مدرن؛ از تشخیص تقلب تا توصیه محصول — sandbox و سطح‌های مفهومی حول scikit-learn.",
        logo: "ml",
      },
      {
        slug: "learn-mlmath",
        title: "ریاضی ML",
        en: "ML Math",
        desc: "زبانی که مدل‌های یادگیری ماشین بر آن نوشته می‌شوند؛ بدون آن فقط کد می‌زنید، نمی‌فهمید — پایه‌های ریاضی، عمیق و کاربردی.",
        logo: "mlmath",
        soon: true,
      },
      {
        slug: "learn-mlstats",
        title: "آمار ML",
        en: "ML Statistics",
        desc: "پایه قضاوت درباره داده‌ها و مدل‌ها؛ بدون آمار نمی‌توانید تفاوت شانس و الگو را ببینید — استنباط و احتمال، دقیق و کاربردی.",
        logo: "mlstats",
        soon: true,
      },
      {
        slug: "learn-dl",
        title: "یادگیری عمیق",
        en: "Deep Learning",
        desc: "موتور پشت مدل‌های مدرن از تصویر تا متن — PyTorch، TensorFlow و Keras با visualization و سطح‌های تمرینی.",
        logo: "dl",
      },
      {
        slug: "learn-rl",
        title: "یادگیری تقویتی",
        en: "Reinforcement Learning",
        desc: "روشی که هوش مصنوعی را از «یادگیری از داده» به «یادگیری از تجربه» می‌رساند — MDP، value و policy را بصری ببینید و مرحله‌ها را حل کنید.",
        logo: "rl",
      },
      {
        slug: "learn-nlp",
        title: "پردازش زبان طبیعی",
        en: "NLP",
        desc: "زمینه‌ای که ماشین را به فهم و تولید زبان می‌رساند؛ همان‌جا که مدل‌های زبانی بزرگ ساخته می‌شوند — از توکن‌سازی تا مدل‌های مدرن.",
        logo: "nlp",
        soon: true,
      },
      {
        slug: "learn-cv",
        title: "بینایی ماشین",
        en: "Computer Vision",
        desc: "چشم ماشین بر دنیای تصویر و ویدیو؛ از تشخیص محصول تا رانندگی خودکار — کاربردی و تعاملی.",
        logo: "cv",
        soon: true,
      },
      {
        slug: "learn-algorithm",
        title: "الگوریتم",
        en: "Algorithms",
        desc: "مبانی فکر مهندسی نرم‌افزار و پشت هر مصاحبه فنی جدی — نه فقط بخوانید، اجرا، بصری‌سازی و مقایسه کنید.",
        logo: "algorithm",
      },
    ],
  },
  web: {
    title: "وب و اپلیکیشن",
    blurb: "ساخت، انتشار و تعامل با داده در وب",
    courses: [
      {
        slug: "learn-django",
        title: "جنگو",
        en: "Django",
        desc: "فریمورک پایتون با فلسفه «کم‌دردسر» که سایت‌های بزرگ با آن ساخته می‌شوند — معماری را تایپ کنید، گراف را بازسیمایی ببینید.",
        logo: "django",
      },
      {
        slug: "learn-flask",
        title: "فلسک",
        en: "Flask",
        desc: "فریمورک سبک پایتون؛ جایی که درخواست HTTP در عمل چه می‌شود را بدون لایه اضافه می‌بینید — pipeline درخواست، sandbox و سطح‌ها.",
        logo: "flask",
      },
      {
        slug: "learn-streamlit",
        title: "استریملیت",
        en: "Streamlit",
        desc: "ابزاری که اپلیکیشن تحلیل و ML را در چند خط پایتون به وب اپ تبدیل می‌کند — sandbox، سطح و گراف تعاملی.",
        logo: "streamlit",
      },
      {
        slug: "learn-shiny",
        title: "شاینی",
        en: "Shiny",
        desc: "ابزار تعاملی‌سازی تحلیل که نتایج R و Python را بدون جاوااسکریپت به اپ وب تبدیل می‌کند — آموزش و sandbox.",
        logo: "shiny",
      },
      {
        slug: "learn-api",
        title: "API",
        en: "API",
        desc: "زبان مشترک سیستم‌های مدرن؛ هر اپ و سرویس از طریق آن با بقیه جهان حرف می‌زند — بازی آموزشی برای FastAPI، plumber و OpenAPI.",
        logo: "api",
      },
      {
        slug: "learn-scraping",
        title: "وب‌اسکرپینگ",
        en: "Web Scraping",
        desc: "دسترسی به داده‌ای که هیچ API‌ای ندارد؛ مهارت کلیدی data و تحقیق بازار — HTTP، BeautifulSoup، Selenium، Scrapy و الگوهای production.",
        logo: "scraping",
      },
    ],
  },
};

const FILTERS = [
  { id: "all", label: "همه" },
  { id: "languages", label: "زبان‌ها" },
  { id: "systems", label: "شل و سیستم" },
  { id: "platforms", label: "ابر و پلتفرم" },
  { id: "data", label: "داده" },
  { id: "mlops", label: "MLOps" },
  { id: "ml", label: "ML / AI" },
  { id: "web", label: "وب" },
];

/**
 * Escape HTML text content.
 *
 * @param {string} value
 * @returns {string}
 */
function escapeHtml(value) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

/**
 * Wrap Latin technical tokens so RTL layout isolates them.
 *
 * @param {string} text
 * @returns {string}
 */
function formatDesc(text) {
  return escapeHtml(text).replace(
    /[A-Za-z][A-Za-z0-9./+-]*/g,
    (token) => `<span class="tech" dir="ltr">${token}</span>`
  );
}

/**
 * Build a course card element.
 *
 * @param {Course} course
 * @returns {HTMLElement}
 */
function createCourseCard(course) {
  const courseUrl = `${BASE}/${course.slug}/`;
  const card = document.createElement("article");
  card.className = `course-card reveal${course.soon ? " is-soon" : ""}`;

  card.innerHTML = `
    <div class="course-top">
      <a class="course-logo" href="${course.soon ? "#courses" : courseUrl}"${course.soon ? "" : ' target="_blank" rel="noopener noreferrer"'} aria-label="${escapeHtml(course.title)}">
        <img src="assets/logos/${course.logo}.svg" alt="" width="48" height="48" loading="lazy" />
      </a>
      <div class="course-heading">
        <a class="course-title-link" href="${course.soon ? "#courses" : courseUrl}"${course.soon ? "" : ' target="_blank" rel="noopener noreferrer"'}>
          <p class="course-title">${escapeHtml(course.title)}</p>
          <p class="course-en" dir="ltr">${escapeHtml(course.en)}</p>
        </a>
        <button class="course-share" type="button" data-course-url="${courseUrl}" data-course-title="${escapeHtml(course.title)}" aria-label="اشتراک‌گذاری ${escapeHtml(course.title)}">
          <svg class="course-share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="18" cy="5" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="6" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="18" cy="19" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <path d="M8.3 10.8l7.4-4.2M8.3 13.2l7.4 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    <p class="course-desc">${formatDesc(course.desc)}</p>
    <div class="course-foot">
      <a class="course-tag" href="${course.soon ? "#courses" : courseUrl}"${course.soon ? "" : ' target="_blank" rel="noopener noreferrer"'}>${course.soon ? "به‌زودی" : "شروع یادگیری"}</a>
      <a class="course-go" href="${course.soon ? "#courses" : courseUrl}"${course.soon ? "" : ' target="_blank" rel="noopener noreferrer"'} aria-hidden="true">${course.soon ? "…" : "↗"}</a>
    </div>
  `;

  return card;
}

/** @type {{ filter: string, query: string }} */
const courseFilters = { filter: "all", query: "" };

/**
 * Build a lowercase searchable haystack from a course.
 *
 * @param {Course} course
 * @returns {string}
 */
function courseSearchText(course) {
  return [course.title, course.en, course.desc, course.slug].join(" ").toLowerCase();
}

/**
 * Reveal a node so it is visible without waiting for scroll.
 *
 * @param {HTMLElement} node
 * @returns {void}
 */
function forceReveal(node) {
  if (node.classList.contains("reveal")) node.classList.add("is-in");
  node.querySelectorAll(".reveal").forEach((n) => n.classList.add("is-in"));
}

/**
 * Show or hide category sections and cards based on the active
 * filter chip and the search query.
 *
 * @returns {void}
 */
function applyCourseFilters() {
  const root = document.getElementById("course-root");
  const empty = document.getElementById("course-empty");
  if (!root || !empty) return;

  const query = courseFilters.query;
  let visibleTotal = 0;

  root.querySelectorAll(".category").forEach((section) => {
    let visibleInSection = 0;

    section.querySelectorAll(".course-card").forEach((card) => {
      const title = card.querySelector(".course-title")?.textContent || "";
      const en = card.querySelector(".course-en")?.textContent || "";
      const desc = card.querySelector(".course-desc")?.textContent || "";
      const haystack = `${title} ${en} ${desc}`.toLowerCase();
      const matches = !query || haystack.includes(query);
      const show = matches;
      card.hidden = !show;
      if (show) visibleInSection += 1;
    });

    const categoryMatches =
      courseFilters.filter === "all" || section.dataset.category === courseFilters.filter;
    const showSection = categoryMatches && visibleInSection > 0;
    section.hidden = !showSection;
    if (showSection) visibleTotal += visibleInSection;

    const count = section.querySelector(".category-head > p:last-child");
    if (count) {
      count.textContent =
        visibleInSection === 1 ? "۱ دوره" : `${String(visibleInSection).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])} دوره`;
    }

    if (showSection) forceReveal(section);
  });

  empty.hidden = visibleTotal > 0;
}

/**
 * Render categories, filter chips, and the course search box.
 *
 * @returns {void}
 */
function renderCourses() {
  const root = document.getElementById("course-root");
  const filterBar = document.querySelector(".filter-bar");
  if (!root || !filterBar) return;

  filterBar.replaceChildren();
  FILTERS.forEach((f, index) => {
    const btn = document.createElement("button");
    btn.className = `filter-chip${index === 0 ? " is-active" : ""}`;
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", index === 0 ? "true" : "false");
    btn.dataset.filter = f.id;
    btn.textContent = f.label;
    filterBar.appendChild(btn);
  });

  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const section = document.createElement("section");
    section.className = "category";
    section.dataset.category = key;
    section.id = `cat-${key}`;

    const head = document.createElement("div");
    head.className = "category-head reveal";
    head.innerHTML = `
      <div>
        <h3>${escapeHtml(cat.title)}</h3>
        <p>${escapeHtml(cat.blurb)}</p>
      </div>
      <p>${cat.courses.length} دوره</p>
    `;

    const grid = document.createElement("div");
    grid.className = "course-grid";
    cat.courses.forEach((course) => grid.appendChild(createCourseCard(course)));

    section.appendChild(head);
    section.appendChild(grid);
    root.appendChild(section);
  });

  filterBar.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const filter = target.dataset.filter;
    if (!filter) return;

    courseFilters.filter = filter;

    filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === target;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-selected", active ? "true" : "false");
    });

    applyCourseFilters();
  });

  const searchInput = document.getElementById("course-search");
  if (searchInput) {
    searchInput.addEventListener("input", () => {
      courseFilters.query = searchInput.value.trim().toLowerCase();
      applyCourseFilters();
    });
  }
}

/**
 * IntersectionObserver-based reveal with safety fallback.
 *
 * @returns {void}
 */
function setupReveal() {
  const nodes = Array.from(document.querySelectorAll(".reveal"));

  const show = (node) => node.classList.add("is-in");

  if (!("IntersectionObserver" in window)) {
    nodes.forEach(show);
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        show(entry.target);
        observer.unobserve(entry.target);
      });
    },
    { rootMargin: "0px 0px -6% 0px", threshold: 0.08 }
  );

  nodes.forEach((node) => observer.observe(node));

  window.setTimeout(() => {
    nodes.forEach((node) => {
      const rect = node.getBoundingClientRect();
      if (rect.top < window.innerHeight * 1.2) show(node);
    });
  }, 600);

  window.addEventListener(
    "beforeprint",
    () => {
      nodes.forEach(show);
    },
    { once: true }
  );
}

/**
 * Mobile nav toggle.
 *
 * @returns {void}
 */
function setupNav() {
  const burger = document.getElementById("nav-burger");
  const links = document.getElementById("nav-links");
  if (!burger || !links) return;

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      links.classList.remove("is-open");
      burger.classList.remove("is-open");
      burger.setAttribute("aria-expanded", "false");
    });
  });
}

/**
 * Count courses in hero stats.
 *
 * @returns {void}
 */
function setupStats() {
  const el = document.getElementById("stat-courses");
  if (!el) return;
  const all = Object.values(CATEGORIES).flatMap((c) => c.courses);
  el.textContent = String(all.length);
}

/**
 * Show a brief toast message.
 *
 * @param {string} message
 * @returns {void}
 */
function showToast(message) {
  let toast = document.getElementById("toast");
  if (!toast) {
    toast = document.createElement("div");
    toast.id = "toast";
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.setAttribute("aria-live", "polite");
    document.body.appendChild(toast);
  }
  toast.textContent = message;
  toast.classList.remove("is-show");
  // force restart of the enter transition
  void toast.offsetWidth;
  toast.classList.add("is-show");
  window.clearTimeout(showToast.timer);
  showToast.timer = window.setTimeout(() => {
    toast.classList.remove("is-show");
  }, 1800);
}

/** @type {number | undefined} */
showToast.timer = undefined;

/**
 * Copy a single course page URL from the course grid.
 *
 * @returns {void}
 */
function setupShare() {
  const root = document.getElementById("course-root");
  if (!root) return;

  root.addEventListener("click", async (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const btn = target.closest(".course-share");
    if (!(btn instanceof HTMLButtonElement)) return;

    event.preventDefault();
    event.stopPropagation();

    const url = btn.getAttribute("data-course-url") || "";
    const title = btn.getAttribute("data-course-title") || "course";
    if (!url) return;

    try {
      await navigator.clipboard.writeText(url);
    } catch {
      const input = document.createElement("input");
      input.value = url;
      document.body.appendChild(input);
      input.select();
      document.execCommand("copy");
      input.remove();
    }

    btn.classList.add("is-copied");
    btn.setAttribute("aria-label", `کپی شد: ${title}`);
    showToast("لینک کپی شد");
    window.setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.setAttribute("aria-label", `اشتراک‌گذاری ${title}`);
    }, 1600);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  setupNav();
  setupStats();
  setupShare();
  setupReveal();
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
