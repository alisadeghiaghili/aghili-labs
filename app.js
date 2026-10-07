/**
 * Aghili Labs — course catalog renderer.
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
 * @property {"published" | "near_complete" | "in_development" | "planned"} status
 * @property {string[]} contentLanguages
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
        desc: "از اتوماسیون ساده تا هوش مصنوعی، همه‌چیز از پایتون شروع می‌شود. مدل حافظه، ساختارهای داده و حل چالش‌های الگوریتمی قدم‌به‌قدم.",
        logo: "python",
        status: "near_complete",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-r",
        title: "زبان R",
        en: "R",
        desc: "وقتی تحلیل آماری اولویت اول باشد، R بهترین انتخاب است. کار با داده در tidyverse، رسم نمودار با ggplot2 و شبیه‌سازی آماری.",
        logo: "r",
        status: "published",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-cpp",
        title: "C++",
        en: "C++",
        desc: "کنترل مستقیم حافظه و سخت‌افزار برای نوشتن برنامه‌هایی با بیشترین سرعت ممکن. اشاره‌گرها، مدیریت منابع و الگوهای شیءگرا.",
        logo: "cpp",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-rust",
        title: "راست",
        en: "Rust",
        desc: "ایمنی حافظه بدون Garbage Collector و بدون هزینه اضافی در زمان اجرا. سیستم مالکیت، قرض‌گیری و همروندی بدون رقابت داده.",
        logo: "rust",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-go",
        title: "گو",
        en: "Go",
        desc: "ساده، سریع و ساخته‌شده برای سرویس‌های ابری. همروندی سبک با Goroutine و کانال‌ها، کامپایل سریع و باینری تک‌فایل آماده استقرار.",
        logo: "go",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-julia",
        title: "جولیا",
        en: "Julia",
        desc: "سرعت C با خوانایی پایتون، بدون نیاز به بازنویسی کد. چندریختی پویا (Multiple Dispatch)، محاسبات عددی و جبر خطی بومی.",
        logo: "julia",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-java",
        title: "جاوا",
        en: "Java",
        desc: "پایه زیرساخت‌های سازمانی از Hadoop تا Kafka. رفتار JVM، مدل حافظه، همروندی و اکوسیستم بزرگ کلان‌داده.",
        logo: "java",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-scala",
        title: "اسکالا",
        en: "Scala",
        desc: "زبان بومی Apache Spark برای پردازش کلان‌داده. ترکیب پارادایم تابعی و شیءگرا با سیستم نوع قوی و Pattern Matching.",
        logo: "scala",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-fp",
        title: "برنامه‌نویسی تابعی",
        en: "Functional Programming",
        desc: "یک شیوه متفاوت حل مسئله که کدتان را قابل‌پیش‌بینی‌تر می‌کند. تغییرناپذیری، توابع خالص، ترکیب‌پذیری و Monadها.",
        logo: "functional",
        status: "near_complete",
        contentLanguages: ["en"],
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
        desc: "زبان مشترک همه سرورهای لینوکسی و پایپ‌لاین‌های CI/CD. جریان‌های ورودی/خروجی، پایپ‌ها و پردازش متن با sed و awk.",
        logo: "bash",
        status: "in_development",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-powershell",
        title: "پاورشل",
        en: "PowerShell",
        desc: "برخلاف شل‌های معمولی، هر خروجی یک شیء ساختاریافته است. خط‌لوله اشیاء، مدیریت ریموت و خودکارسازی ویندوز و لینوکس.",
        logo: "powershell",
        status: "near_complete",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-cmd",
        title: "CMD ویندوز",
        en: "Windows CMD",
        desc: "هنوز هم ساده‌ترین راه برای خودکارسازی سریع در ویندوز. دستورات فایل‌سیستم، متغیرهای محیطی و نوشتن اسکریپت‌های Batch.",
        logo: "cmd",
        status: "published",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-linux",
        title: "لینوکس",
        en: "Linux / Ubuntu",
        desc: "بیش از ۹۰٪ سرورهای دنیا لینوکس اجرا می‌کنند. معماری هسته، مدیریت فرآیندها، مجوزهای دسترسی و فایل‌سیستم.",
        logo: "linux",
        status: "near_complete",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-git",
        title: "گیت",
        en: "Git",
        desc: "بدون تسلط بر Git، همکاری تیمی روی کد غیرممکن است. شاخه‌بندی، Rebase، حل تعارض و بازیابی تغییرات گم‌شده.",
        logo: "git",
        status: "near_complete",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-networking",
        title: "شبکه",
        en: "Networking",
        desc: "وقتی سرویس‌تان جواب نمی‌دهد باید بدانید از کجا شروع کنید. TCP/IP، مدل لایه‌ای OSI، DNS، مسیریابی و عیب‌یابی عملی.",
        logo: "networking",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-cryptography",
        title: "رمزنگاری کاربردی",
        en: "Applied Cryptography",
        desc: "پشت هر اتصال امن و هر امضای دیجیتال، رمزنگاری ایستاده. توابع هش، رمزنگاری متقارن و نامتقارن، امضا و زنجیره گواهی‌ها.",
        logo: "cryptography",
        status: "planned",
        contentLanguages: ["en"],
      },
    ],
  },
  architecture: {
    title: "معماری، متدولوژی و مهندسی",
    blurb: "اصول طراحی، کیفیت نرم‌افزار، متدولوژی و فرآیندهای مهندسی",
    courses: [
      {
        slug: "learn-software-design",
        title: "طراحی نرم‌افزار و کد تمیز",
        en: "Software Design & Clean Code",
        desc: "کدی که امروز می‌نویسید، فردا باید قابل تغییر باشد. اصول SOLID، الگوهای طراحی GoF، معماری لایه‌ای و بازآرایی عملی کد.",
        logo: "softwaredesign",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-testing",
        title: "تست‌نویسی و کیفیت نرم‌افزار",
        en: "Testing & Quality Engineering",
        desc: "تنها راه اطمینان از درستی کد، تست کردن آن است. توسعه آزمون‌محور (TDD)، تست واحد و یکپارچه‌سازی با pytest و اعتبارسنجی کیفیت داده.",
        logo: "testing",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-technical-docs",
        title: "مستندسازی فنی و معماری",
        en: "Technical Docs & ADRs",
        desc: "تصمیمات معماری که مستند نشوند، فراموش و تکرار می‌شوند. ثبت ADRها، تدوین RFC، مشخصات API و مدیریت دانش تیم مهندسی.",
        logo: "technicaldocs",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-ddd",
        title: "طراحی دامنه‌محور (DDD)",
        en: "Domain-Driven Design in Data & AI",
        desc: "وقتی پیچیدگی کسب‌وکار از پیچیدگی فنی بیشتر می‌شود. زبان مشترک تیم، مرزهای دامنه، Aggregateها و کاربرد در معماری Data Mesh.",
        logo: "ddd",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-bpmn",
        title: "مدل‌سازی فرآیندها با BPMN",
        en: "Business Process Modeling (BPMN)",
        desc: "قبل از خودکارسازی هر فرآیند، باید بتوانید آن را دقیق مدل کنید. استاندارد BPMN 2.0، گیت‌وی‌های تصمیم، استخرها و اتصال به موتورهای اجرا.",
        logo: "bpmn",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-scientific-writing",
        title: "نگارش علمی و پژوهشی",
        en: "Scientific Writing & Research",
        desc: "تحقیقی که بد نوشته شود، خوانده نمی‌شود. ساختار IMRAD، طراحی متدولوژی، تکرارپذیری آزمایش‌ها و آماده‌سازی برای داوری همتا.",
        logo: "scientificwriting",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-tech-interviews",
        title: "آمادگی مصاحبه‌های فنی",
        en: "Technical Interviewing for Data & Systems",
        desc: "دانستن جواب کافی نیست؛ باید بتوانید فکرتان را بلند بیان کنید. System Design، لایوکدینگ الگوریتم و SQL و دفاع از تصمیمات معماری.",
        logo: "techinterviews",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-ai-pm",
        title: "مدیریت پروژه و اقتصاد هوش مصنوعی",
        en: "AI Project Management & ROI",
        desc: "هدایت پروژه‌های داده و پیش‌بینی بازگشت سرمایه بدون غرق شدن در ابهامات. متدولوژی چابک برای مدل‌های احتمالاتی، چرخه عمر CRISP-DM، محاسبه TCO و توجیه اقتصادی استنتاج.",
        logo: "aipm",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-licensing",
        title: "لایسنسینگ و حقوق نرم‌افزار، داده و مدل",
        en: "Software, Data & AI Licensing",
        desc: "استفاده از یک کتابخانه یا وزن مدل با لایسنس اشتباه می‌تواند کل محصول را با ریسک حقوقی مواجه کند. لایسنس‌های متن‌باز، شرایط استفاده تجاری از وزن مدل‌ها، کپی‌رایت دیتاست‌ها و الزامات قانونی تجاری‌سازی.",
        logo: "licensing",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-distributed-systems",
        title: "معماری سیستم‌های توزیع‌شده",
        en: "Distributed Systems Architecture",
        desc: "اصول مهندسی سیستم‌هایی که روی صدها ماشین اجرا می‌شوند و نباید از کار بیفتند. قضیه CAP، الگوریتم‌های اجماع Raft و Paxos، شاردینگ، همگام‌سازی داده و الگوهای رویدادمحور.",
        logo: "distributedsystems",
        status: "planned",
        contentLanguages: ["en"],
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
        desc: "«روی سیستم من کار می‌کنه» را برای همیشه تمام کنید. لایه‌بندی ایمیج‌ها، مدیریت شبکه و حجم کانتینرها، Dockerfile و Docker Compose.",
        logo: "docker",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-aws",
        title: "AWS",
        en: "Amazon Web Services",
        desc: "بزرگ‌ترین اکوسیستم ابری جهان از دید یک مهندس داده. S3، EC2، Lambda، IAM و الگوهای معماری داده‌محور در ابر.",
        logo: "aws",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-azure",
        title: "Azure",
        en: "Microsoft Azure",
        desc: "انتخاب اول سازمان‌هایی که اکوسیستم مایکروسافت دارند. Data Factory، دریاچه داده ADLS Gen2، Synapse Analytics و مدیریت منابع.",
        logo: "azure",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-databricks",
        title: "دیتابریکس",
        en: "Databricks",
        desc: "ادغام انبار داده و دریاچه داده در یک معماری واحد. پلتفرم Lakehouse، پردازش با Spark، مدیریت Delta Lake و بهینه‌سازی کوئری‌ها.",
        logo: "databricks",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-snowflake",
        title: "اسنوفلیک",
        en: "Snowflake",
        desc: "پردازش و ذخیره‌سازی مستقل از هم، یعنی هزینه و سرعت را جداگانه کنترل کنید. SQL مقیاس‌پذیر، Time Travel، Clone بدون کپی و اشتراک داده.",
        logo: "snowflake",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-grafana",
        title: "گرافانا",
        en: "Grafana",
        desc: "قبل از اینکه کاربر مشکل را گزارش کند، شما باید ببینیدش. داشبوردهای زنده، اتصال به منابع متریک متنوع و تنظیم هشدارها.",
        logo: "grafana",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-pkgm",
        title: "مدیریت بسته",
        en: "pip · conda · uv",
        desc: "تعارض وابستگی‌ها رایج‌ترین علت خرابی محیط توسعه است. مقایسه pip، conda و uv، محیط‌های مجازی و بیلدهای تکرارپذیر.",
        logo: "pkgm",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-kibana",
        title: "کیبانا",
        en: "Kibana",
        desc: "رابط بصری استک Elastic برای کاوش در میلیون‌ها رکورد لاگ. جستجو در Discover، ساخت داشبوردهای تحلیلی و مانیتورینگ توزیع‌شده.",
        logo: "kibana",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-logstash",
        title: "لاگ‌استش",
        en: "Logstash",
        desc: "لاگ‌ها از ده‌ها منبع مختلف می‌آیند و باید یک‌جا جمع و یکدست شوند. دریافت بلادرنگ، پارس با الگوهای Grok و ارسال به Elasticsearch.",
        logo: "logstash",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-splunk",
        title: "اسپلانک",
        en: "Splunk",
        desc: "تحلیل حجم انبوه لاگ‌های ماشینی و شناسایی تهدیدات امنیتی. مدیریت رویدادهای امنیتی (SIEM)، گزارش‌گیری و تسلط بر زبان SPL.",
        logo: "splunk",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-kubernetes",
        title: "کوبرنتیز",
        en: "Kubernetes",
        desc: "استاندارد جهانی مدیریت و اجرای خودکار کانتینرها در مقیاس ابری. معماری کلاستر، پادها، سرویس‌ها، مدیریت وضعیت با StatefulSet و استقرار خودکار برنامه‌ها.",
        logo: "kubernetes",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-gcp",
        title: "GCP",
        en: "Google Cloud Platform",
        desc: "پلتفرم ابری پیشرو در کلان‌داده و هوش مصنوعی مدرن. ذخیره‌سازی ابری GCS، کوئری‌های مقیاس‌پذیر در BigQuery، سرویس‌های بدون سرور Cloud Run و اکوسیستم Vertex AI.",
        logo: "gcp",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-terraform",
        title: "ترافورم",
        en: "Terraform & IaC",
        desc: "مدیریت و ایجاد زیرساخت‌های ابری به صورت کد تکرارپذیر. ساختار HCL، چرخه حیات منابع، مدیریت State، ماژول‌نویسی و استقرار امن بر روی ابرها.",
        logo: "terraform",
        status: "planned",
        contentLanguages: ["en"],
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
        desc: "هر مهندس داده‌ای، هر روز SQL می‌نویسد. کوئری‌های تودرتو، توابع پنجره‌ای، CTEها، ایندکس‌گذاری و بهینه‌سازی اجرا در سندباکس زنده.",
        logo: "sql",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-dax",
        title: "DAX",
        en: "DAX",
        desc: "اگر با Power BI کار می‌کنید، بدون DAX در سطح می‌مانید. Filter Context، Row Context، تابع CALCULATE و ساخت معیارهای سفارشی.",
        logo: "dax",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-m",
        title: "Power Query M",
        en: "M",
        desc: "داده‌های خام را قبل از رسیدن به مدل داده پاک‌سازی و شکل بدهید. پایپ‌لاین ETL در Power Query، فرمول‌های سفارشی M و ادغام منابع مختلف.",
        logo: "m",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-spark",
        title: "اسپارک",
        en: "Apache Spark",
        desc: "وقتی داده‌ها در یک ماشین جا نمی‌شوند. پردازش توزیع‌شده با DataFrames، بهینه‌ساز Catalyst و پردازش سریع حافظه‌محور.",
        logo: "spark",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-hadoop",
        title: "هدوپ",
        en: "Hadoop",
        desc: "بنیان‌گذار انقلاب کلان‌داده که هنوز زیرساخت بسیاری از سیستم‌هاست. فایل‌سیستم توزیع‌شده HDFS، مدل MapReduce و مدیریت منابع YARN.",
        logo: "hadoop",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mongodb",
        title: "مانگودی‌بی",
        en: "MongoDB",
        desc: "وقتی ساختار داده‌ها از پیش مشخص نیست یا مرتب تغییر می‌کند. مدل‌سازی اسناد JSON/BSON، ایندکس‌گذاری و Aggregation Pipeline.",
        logo: "mongodb",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-elasticsearch",
        title: "الستیک‌سرچ",
        en: "Elasticsearch",
        desc: "جستجوی میلی‌ثانیه‌ای در میلیاردها سند. ایندکس معکوس، رتبه‌بندی BM25، جستجوی فازی و تحلیل‌گرهای متنی سفارشی.",
        logo: "elasticsearch",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-data-storytelling",
        title: "مصورسازی و روایت‌گری داده",
        en: "Data Storytelling & Visualization",
        desc: "نمودار زیبا کافی نیست؛ باید داستانی بگوید که تصمیم‌ساز را قانع کند. اصول گشتالت، کاهش شلوغی بصری و روایت‌گری داده‌محور.",
        logo: "datastorytelling",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-data-modeling",
        title: "مدل‌سازی و معماری انبار داده",
        en: "Data Modeling & Dimensional Design",
        desc: "طراحی اشتباه مدل داده، عملکرد کل سیستم را زمین می‌زند. ERD، نرمال‌سازی، متدولوژی کیمبال، اسکیمای ستاره‌ای و تفاوت OLTP با OLAP.",
        logo: "datamodeling",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-data-governance",
        title: "حاکمیت و کیفیت داده",
        en: "Data Governance & Quality",
        desc: "مدل ML شما به اندازه داده‌ای که می‌خورد خوب است. قراردادهای داده، ردیابی تبار داده، کاتالوگ متادیتا، حفاظت PII و قواعد کیفیت.",
        logo: "datagovernance",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-dashboard-kpi",
        title: "طراحی داشبورد و شاخص‌های KPI",
        en: "Dashboard Design & KPI Strategy",
        desc: "داشبوردی که همه‌چیز را نشان بدهد، هیچ‌چیز نمی‌گوید. انتخاب شاخص‌های کلیدی، سنجه‌های پیشرو و پسرو، چیدمان بصری و مهار خستگی هشدار.",
        logo: "dashboardkpi",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-duckdb",
        title: "داک‌دی‌بی و پردازش مدرن داده",
        en: "DuckDB & Modern In-Process Analytics",
        desc: "اجرای کوئری‌های تحلیلی پرسرعت روی سیستم محلی بدون نیاز به راه‌اندازی سرورهای سنگین. موتور ستونی برداری، پردازش موازی، کار با فایل‌های Parquet و جایگزینی پرسرعت برای Pandas.",
        logo: "duckdb",
        status: "planned",
        contentLanguages: ["en"],
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
        desc: "Git فایل‌های حجیم را نمی‌فهمد؛ DVC این خلأ را پر می‌کند. نسخه‌بندی دیتاست‌ها و مدل‌ها، کش محلی و ریموت و بازتولید دقیق آزمایش‌ها.",
        logo: "dvc",
        status: "published",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-dbt",
        title: "dbt",
        en: "dbt",
        desc: "اصول مهندسی نرم‌افزار را به دنیای SQL بیاورید. مدل‌سازی ماژولار، گراف وابستگی، تست خودکار داده، مستندسازی و تحول داده درون انبار.",
        logo: "dbt",
        status: "published",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-airflow",
        title: "ایرفلو",
        en: "Apache Airflow",
        desc: "مطمئن شوید هر مرحله از پایپ‌لاین داده در زمان و ترتیب درست اجرا می‌شود. تعریف DAG با پایتون، زمان‌بندی، مانیتورینگ و مدیریت خطا.",
        logo: "airflow",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-kafka",
        title: "کافکا",
        en: "Apache Kafka",
        desc: "وقتی داده‌ها باید لحظه‌ای جریان پیدا کنند، نه دسته‌ای. معماری Topic و Partition، تولیدکننده و مصرف‌کننده، تضمین تحویل و مقیاس‌پذیری افقی.",
        logo: "kafka",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "بدون ردیابی آزمایش‌ها، تکرارپذیری فقط یک آرزوست. ثبت پارامترها و معیارها، بسته‌بندی مدل، رجیستری و استقرار در پروداکشن.",
        logo: "mlflow",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-dataops",
        title: "دیتاآپس",
        en: "DataOps",
        desc: "اعمال اصول چابک و مهندسی نرم‌افزار بر خطوط لوله داده. یکپارچه‌سازی و تحویل مداوم (CI/CD)، تست خودکار کیفیت داده، رصد سلامت پایپ‌لاین و کاهش زمان تحویل ارزش تجاری.",
        logo: "dataops",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mlops",
        title: "ام‌ال‌آپس",
        en: "MLOps",
        desc: "پل ارتباطی میان مدل‌های تجربی علم داده و سیستم‌های پایدار عملیاتی. آموزش مداوم (CT)، خودکارسازی استقرار، پایش رانش داده و مفهوم (Drift) و مدیریت چرخه عمر مدل در پروداکشن.",
        logo: "mlops",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-llmops",
        title: "ال‌ال‌ام‌آپس و استنتاج مدل",
        en: "LLMOps & Model Serving",
        desc: "مدیریت، استقرار و بهینه‌سازی مدل‌های زبانی در مقیاس بالا. موتورهای استنتاج فوق‌سریع مانند vLLM و Triton، کشینگ معنایی، فریمورک‌های گاردریل، و پایش هزینه و تاخیر توکن‌ها.",
        logo: "llmops",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mlsecops",
        title: "ام‌ال‌سک‌آپس و امنیت هوش مصنوعی",
        en: "MLSecOps & AI Security",
        desc: "حفاظت از پایپ‌لاین‌ها، داده‌ها و مدل‌های هوش مصنوعی در برابر حملات سایبری جدید. مقابله با تزریق پرامپت (Prompt Injection)، مسموم‌سازی دیتا، سرقت وزن مدل‌ها و ایمن‌سازی زنجیره تامین یادگیری ماشین.",
        logo: "mlsecops",
        status: "planned",
        contentLanguages: ["en"],
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
        desc: "از فرضیه تا مدلی که واقعاً قابل ارزیابی باشد. رگرسیون، دسته‌بندی، خوشه‌بندی، اعتبارسنجی متقاطع و مهندسی ویژگی با scikit-learn.",
        logo: "ml",
        status: "near_complete",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mlmath",
        title: "ریاضی ML",
        en: "ML Math",
        desc: "بدون ریاضی، مدل ML یک جعبه سیاه باقی می‌ماند. جبر خطی، مشتق‌گیری ماتریسی، بهینه‌سازی گرادیانی و شهود هندسی فضاهای برداری.",
        logo: "mlmath",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-mlstats",
        title: "آمار ML",
        en: "ML Statistics",
        desc: "تفاوت بین «به نظر کار می‌کند» و «اثبات آماری دارد». آزمون فرض، استنباط بیزی، توزیع‌های احتمال، فاصله اطمینان و تحلیل واریانس.",
        logo: "mlstats",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-ts",
        title: "تحلیل و پیش‌بینی سری‌های زمانی",
        en: "Time Series & Forecasting",
        desc: "فروش فردا، ترافیک هفته آینده، تقاضای فصل بعد. تجزیه روند و فصلی‌بودن، آزمون مانایی، مدل‌های ARIMA و Prophet و پیش‌بینی با شبکه‌های عصبی.",
        logo: "timeseries",
        status: "near_complete",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-dl",
        title: "یادگیری عمیق",
        en: "Deep Learning",
        desc: "از پرسپترون ساده تا شبکه‌هایی که خودشان ویژگی استخراج می‌کنند. توابع فعال‌ساز، پس‌انتشار خطا و آموزش عملی مدل با PyTorch.",
        logo: "dl",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-rl",
        title: "یادگیری تقویتی",
        en: "Reinforcement Learning",
        desc: "عاملی که با آزمون و خطا یاد می‌گیرد بهترین تصمیم را بگیرد. فرآیندهای مارکوف، Q-Learning، Deep Q-Networks و روش‌های Policy Gradient.",
        logo: "rl",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-nlp",
        title: "پردازش زبان طبیعی",
        en: "NLP",
        desc: "به ماشین بیاموزید متن انسانی را بخواند، بفهمد و تولید کند. توکن‌سازی، بازنمایی برداری، مدل‌های توالی و تحلیل معنایی.",
        logo: "nlp",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-cv",
        title: "بینایی ماشین",
        en: "Computer Vision",
        desc: "به ماشین بیاموزید تصاویر را ببیند و تفسیر کند. شبکه‌های پیچشی (CNN)، آشکارسازی اشیاء، تقسیم‌بندی تصویر و استخراج ویژگی‌های بصری.",
        logo: "cv",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-datastructure",
        title: "ساختمان داده",
        en: "Data Structures",
        desc: "انتخاب ساختار داده نادرست، الگوریتم درست را هم کند می‌کند. آرایه، لیست پیوندی، پشته، صف، هش‌مپ، درخت، هرم و گراف در سندباکس تعاملی.",
        logo: "datastructure",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-algorithm",
        title: "الگوریتم",
        en: "Algorithms",
        desc: "تفاوت بین راه‌حلی که فقط کار می‌کند و راه‌حلی که مقیاس می‌شود. تحلیل Big-O، جستجو، مرتب‌سازی، برنامه‌نویسی پویا و الگوریتم‌های گراف.",
        logo: "algorithm",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-llm",
        title: "مدل‌های زبانی بزرگ",
        en: "Large Language Models",
        desc: "درکی عمیق از فناوری‌ای که صنعت را متحول کرده. مکانیزم توجه، معماری ترنسفورمر، مهندسی پرامپت، روش‌های تطبیق وزن‌ها (LoRA) و ترازسازی مدل.",
        logo: "llm",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-ml-patterns",
        title: "الگوهای طراحی ML",
        en: "ML Design Patterns",
        desc: "راه‌حل‌های اثبات‌شده برای مسائل تکراری در مسیر آزمایشگاه تا پروداکشن. بازنمایی ویژگی، Cascade، Checkpoint، Feature Store و استقرار تاب‌آور.",
        logo: "mlpatterns",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-critical-thinking",
        title: "تفکر نقاد در تحلیل و AI",
        en: "Critical Thinking in Data & AI",
        desc: "همبستگی علیت نیست و هر عدد معنادار، لزوماً معنادار نیست. شناسایی همبستگی‌های کاذب، پارادوکس سیمپسون، سوگیری داده و خطرات p-hacking.",
        logo: "criticalthinking",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-rag",
        title: "سیستم‌های RAG و دیتابیس‌های برداری",
        en: "RAG & Vector Databases",
        desc: "پیوند مدل‌های زبانی به پایگاه‌های دانش اختصاصی بدون نیاز به آموزش پرهزینه مجدد. امبدینگ‌ها، الگوریتم‌های جستجوی برداری HNSW، پایگاه‌های داده برداری، رتبه‌بندی مجدد و ساخت پایپ‌لاین‌های پیشرفته بازیابی.",
        logo: "rag",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-agents",
        title: "عامل‌های هوشمند و سیستم‌های چندعاملی",
        en: "AI Agents & Multi-Agent Systems",
        desc: "گذار از چت‌بات‌های متنی ساده به سیستم‌های مستقلی که می‌توانند ابزارها را اجرا کنند و برنامه‌ریزی نمایند. الگوی ReAct، پروتکل باز MCP، حافظه و برنامه‌ریزی، و هماهنگ‌سازی چندین عامل همکار.",
        logo: "agents",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-optimization",
        title: "تحقیق در عملیات و بهینه‌سازی ریاضی",
        en: "Operations Research & Optimization",
        desc: "حل دقیق مسائل پیچیده تصمیم‌گیری، زمان‌بندی و زنجیره تامین که با یادگیری ماشین سنتی حل نمی‌شوند. برنامه‌ریزی خطی، عدد صحیح و الگوریتم‌های بهینه‌سازی با پایتون و OR-Tools.",
        logo: "optimization",
        status: "planned",
        contentLanguages: ["en"],
      },
    ],
  },
  web: {
    title: "وب و اپلیکیشن",
    blurb: "ساخت، انتشار و تعامل با داده در وب",
    courses: [
      {
        slug: "learn-web-fundamentals",
        title: "مبانی وب و معماری مرورگر",
        en: "Web Fundamentals & DOM Architecture",
        desc: "درک عمیق از نحوه کارکرد وب‌سرورها، پروتکل HTTP و ساختار درختی DOM در مرورگر. تگ‌های HTML، سلکتورهای کاربردی CSS، رندرینگ کلاینت (CSR/SSR) و مبانی تعامل با صفحه از طریق جاوااسکریپت.",
        logo: "webfundamentals",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-django",
        title: "جنگو",
        en: "Django",
        desc: "همه‌چیز از پنل مدیریت تا ORM و احراز هویت، از پیش آماده است. معماری MTV، سیستم مهاجرت و ساخت سریع سامانه‌های داده‌محور.",
        logo: "django",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-flask",
        title: "فلسک",
        en: "Flask",
        desc: "فقط آنچه نیاز دارید، نه بیشتر. چرخه درخواست HTTP، مسیریابی، قالب‌سازی Jinja و ساخت APIها و سرویس‌های سبک.",
        logo: "flask",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-streamlit",
        title: "استریملیت",
        en: "Streamlit",
        desc: "فرانت‌اند بلد نیستید؟ فقط پایتون بنویسید. ویجت‌های تعاملی، کش داده، نمودارهای زنده و ساخت داشبوردهای ML در دقایق.",
        logo: "streamlit",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-shiny",
        title: "شاینی",
        en: "Shiny",
        desc: "تحلیل آماری R یا پایتون‌تان را مستقیماً تبدیل به اپلیکیشن وب کنید. برنامه‌نویسی واکنش‌گرا، ویجت‌های تعاملی و نمودارهای پویا.",
        logo: "shiny",
        status: "in_development",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-api",
        title: "API",
        en: "API",
        desc: "مدل ML شما بدون API قابل استفاده نیست. اصول REST، اعتبارسنجی با Pydantic، مستندسازی خودکار OpenAPI و پیاده‌سازی با FastAPI.",
        logo: "api",
        status: "in_development",
        contentLanguages: ["fa", "en", "de"],
      },
      {
        slug: "learn-scraping",
        title: "وب‌اسکرپینگ",
        en: "Web Scraping",
        desc: "داده‌ای که نیاز دارید همیشه API ندارد. پروتکل HTTP، پارس HTML با BeautifulSoup، اتوماسیون مرورگر با Selenium و الگوهای کراولر صنعتی.",
        logo: "scraping",
        status: "in_development",
        contentLanguages: ["en"],
      },
    ],
  },
  iot: {
    title: "اینترنت اشیاء، سخت‌افزار و لبه",
    blurb: "پیوند دنیای فیزیکی، سنسورها و پردازش داده در لبه",
    courses: [
      {
        slug: "learn-arduino",
        title: "آردوینو",
        en: "Arduino",
        desc: "دنیای فیزیکی را با کد کنترل کنید. خواندن سنسورها، فرمان دادن به موتورها، پروتکل‌های I2C و SPI و پروژه‌های عملی IoT.",
        logo: "arduino",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-raspberrypi",
        title: "رزبری پای",
        en: "Raspberry Pi",
        desc: "یک کامپیوتر کامل لینوکسی در کف دست شما. برنامه‌نویسی GPIO، پردازش داده در لبه شبکه، مانیتورینگ خطوط تولید و اتصال به ابر.",
        logo: "raspberrypi",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-enterprise-blockchain",
        title: "بلاکچین سازمانی و DLT",
        en: "Enterprise Blockchain",
        desc: "وقتی اعتماد بین طرف‌ها باید با فناوری تضمین شود، نه قرارداد کاغذی. رهگیری تغییرناپذیر زنجیره تأمین، قراردادهای هوشمند و Hyperledger Fabric.",
        logo: "blockchain",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-iiot",
        title: "اینترنت اشیاء صنعتی و پروتکل‌های لبه",
        en: "Industrial IoT & Edge Protocols",
        desc: "پل ارتباطی میان تجهیزات صنعتی در کارخانه‌ها و پلتفرم‌های تحلیل داده ابری. پروتکل‌های ارتباطی استانداردی چون MQTT و OPC-UA، پردازش تله‌متری بلادرنگ و امنیت داده در لبه شبکه.",
        logo: "iiot",
        status: "planned",
        contentLanguages: ["en"],
      },
      {
        slug: "learn-tinyml",
        title: "هوش مصنوعی در لبه (TinyML)",
        en: "TinyML & Embedded AI",
        desc: "اجرای مدل‌های یادگیری عمیق روی میکروکنترلرهای کوچک با مصرف انرژی در حد میلی‌وات. فشرده‌سازی و کوانتیزاسیون وزن‌ها، کار با TensorFlow Lite for Microcontrollers و بینایی ماشین سبک در سخت‌افزارهای امبدد.",
        logo: "tinyml",
        status: "planned",
        contentLanguages: ["en"],
      },
    ],
  },
};

const FILTERS = [
  { id: "all", label: "همه" },
  { id: "languages", label: "زبان‌ها" },
  { id: "systems", label: "شل و سیستم" },
  { id: "architecture", label: "معماری و مهندسی" },
  { id: "platforms", label: "ابر و پلتفرم" },
  { id: "data", label: "داده" },
  { id: "mlops", label: "MLOps" },
  { id: "ml", label: "ML / AI" },
  { id: "web", label: "وب" },
  { id: "iot", label: "اینترنت اشیاء و لبه" },
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
 * Format course title to ensure Latin and symbolic titles (e.g. C++, API) maintain LTR isolation.
 *
 * @param {string} title
 * @returns {string}
 */
function formatTitle(title) {
  if (!/[\u0600-\u06FF]/.test(title)) {
    return `<span dir="ltr">${escapeHtml(title)}</span>`;
  }
  return escapeHtml(title);
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
 * Metadata map for course development statuses.
 * @type {Record<"published" | "near_complete" | "in_development" | "planned", { label: string, className: string }>}
 */

/**
 * Localization dictionary supporting Persian (default), English, and German.
 */
const COURSE_DESC_EN = {
  "learn-python": "From simple automation to machine learning. Memory model, data structures, and algorithmic challenges step-by-step.",
  "learn-r": "Statistical computing, data manipulation in the tidyverse, publication-ready graphics with ggplot2, and simulation.",
  "learn-cpp": "Direct memory and hardware control for maximum performance. Pointers, resource management (RAII), and modern C++.",
  "learn-rust": "Memory safety without garbage collection. Ownership, borrowing lifetimes, and fearless concurrency.",
  "learn-go": "Built for cloud scale and concurrent systems. Lightweight goroutines, channels, fast compilation, and single-binary deployments.",
  "learn-julia": "C speed with Python expressiveness for numerical computing, multiple dispatch, and scientific machine learning.",
  "learn-java": "Enterprise infrastructure backbone from Hadoop to Kafka. JVM internals, memory model, concurrency, and big data architecture.",
  "learn-scala": "Apache Spark's native language for big data processing. Combining functional and object-oriented paradigms with strong typing.",
  "learn-fp": "Predictable, maintainable code through immutability, pure functions, composition, and monadic structures.",
  "learn-bash": "The universal language of Linux servers and CI/CD pipelines. I/O streams, pipes, and text processing with sed and awk.",
  "learn-powershell": "Structured object pipelines, remote system administration, and automation for Windows and cross-platform environments.",
  "learn-cmd": "Fast automation in Windows environments. File system commands, environment variables, and batch scripting.",
  "learn-linux": "The foundation powering over 90% of global servers. Kernel architecture, process management, permissions, and file systems.",
  "learn-git": "Essential version control for engineering teams. Branching models, rebasing, merge conflict resolution, and history recovery.",
  "learn-networking": "Practical networking for software engineers. TCP/IP, OSI layers, DNS, routing, and real-world network troubleshooting.",
  "learn-cryptography": "Security foundations behind digital signatures and TLS. Cryptographic hashes, symmetric and asymmetric ciphers, and PKI.",
  "learn-software-design": "Writing maintainable, evolvable code. SOLID principles, GoF design patterns, layered architecture, and refactoring.",
  "learn-testing": "Test-driven development (TDD), unit and integration testing with pytest, mocking, and data validation pipelines.",
  "learn-technical-docs": "Architecture decision records (ADRs), RFCs, API specifications, and sustainable engineering knowledge management.",
  "learn-ddd": "Tackling domain complexity with strategic design, ubiquitous language, bounded contexts, aggregates, and Data Mesh.",
  "learn-bpmn": "End-to-end business process modeling with BPMN 2.0 standards, decision gateways, pools, and execution engines.",
  "learn-scientific-writing": "Rigorous technical reporting, IMRAD structure, reproducible experiments, and peer-review publication readiness.",
  "learn-tech-interviews": "Mastering technical interviews. System design, live algorithmic coding, SQL challenges, and architecture defense.",
  "learn-ai-pm": "Managing AI and data initiatives. Agile for probabilistic systems, CRISP-DM lifecycle, TCO, and ROI estimation.",
  "learn-licensing": "Legal requirements in open source, foundation model weights, dataset copyrights, and commercial compliance.",
  "learn-distributed-systems": "Engineering resilient distributed architectures. CAP theorem, Raft and Paxos consensus, sharding, and event-driven patterns.",
  "learn-docker": "Containerization essentials. Multi-stage image builds, container networking, volume persistence, and Docker Compose.",
  "learn-aws": "Core AWS cloud services for data engineers. S3, EC2, Lambda, IAM, and cloud-native data architectures.",
  "learn-azure": "Microsoft enterprise cloud ecosystem. Azure Data Factory, ADLS Gen2, Synapse Analytics, and cloud resource management.",
  "learn-databricks": "Unified lakehouse platform. Distributed Spark computing, Delta Lake architecture, and query optimization.",
  "learn-snowflake": "Decoupled compute and storage in modern data warehousing. Scalable SQL, Time Travel, zero-copy cloning, and data sharing.",
  "learn-grafana": "Real-time observability and dashboarding. Connecting metrics sources, writing PromQL queries, and proactive alerting.",
  "learn-pkgm": "Modern Python dependency management. Comparing pip, conda, and uv with virtual environments and reproducible builds.",
  "learn-kibana": "Visual analytics for Elastic Stack. Exploring log data in Discover, dashboard creation, and distributed monitoring.",
  "learn-logstash": "Centralized log ingestion and transformation. Real-time pipelines, Grok parsing, and routing to Elasticsearch.",
  "learn-splunk": "Enterprise machine data analytics and SIEM. Security monitoring, incident investigation, and SPL query mastery.",
  "learn-kubernetes": "Production container orchestration. Cluster architecture, Pods, Deployments, Services, and StatefulSets at scale.",
  "learn-gcp": "Google Cloud for big data and AI. Cloud Storage, scalable analytics with BigQuery, serverless Cloud Run, and Vertex AI.",
  "learn-terraform": "Infrastructure as Code (IaC). Declarative HCL syntax, resource lifecycles, state management, and modular cloud provisioning.",
  "learn-sql": "The definitive data language. Window functions, CTEs, subqueries, indexing strategies, and query plan optimization.",
  "learn-dax": "Advanced analytics in Power BI. Evaluation contexts, row and filter context, CALCULATE internals, and time intelligence.",
  "learn-m": "Power Query data transformation language. Ingesting, cleaning, and shaping heterogeneous data sources for reporting models.",
  "learn-spark": "Large-scale distributed data processing. Spark DataFrames, Catalyst optimizer, partitioning, and in-memory execution.",
  "learn-hadoop": "Distributed storage and processing fundamentals. HDFS architecture, MapReduce paradigms, and YARN resource negotiation.",
  "learn-mongodb": "Document database modeling. Flexible JSON/BSON schemas, compound indexing, and aggregation pipelines.",
  "learn-elasticsearch": "Sub-second search across billions of documents. Inverted indexes, BM25 scoring, fuzzy matching, and text analyzers.",
  "learn-data-storytelling": "Transforming numbers into persuasive narratives. Gestalt design principles, reducing visual cognitive load, and executive reporting.",
  "learn-data-modeling": "Designing robust data schemas. ER diagrams, normalization, Kimball dimensional modeling, star schemas, and OLTP vs OLAP.",
  "learn-data-governance": "Ensuring data quality and compliance. Data contracts, lineage tracking, metadata catalogs, PII privacy, and auditing.",
  "learn-dashboard-kpi": "Designing actionable executive dashboards. Leading vs lagging indicators, information hierarchy, and cognitive ergonomics.",
  "learn-duckdb": "Blazing-fast in-process analytical SQL. Columnar vectorized execution, zero-copy Parquet reading, and serverless analytics.",
  "learn-dvc": "Version control for data and machine learning models. Git-like dataset tracking, remote storage caching, and reproducible pipelines.",
  "learn-dbt": "Software engineering best practices applied to SQL transformations. Modular models, DAG lineage, automated testing, and documentation.",
  "learn-airflow": "Authoring and orchestrating complex data workflows. Python DAG definitions, task dependencies, sensor triggers, and failure recovery.",
  "learn-kafka": "High-throughput distributed event streaming. Topics, partitions, producer/consumer patterns, and exactly-once processing semantics.",
  "learn-mlflow": "End-to-end machine learning lifecycle management. Experiment tracking, model packaging, registry governance, and serving.",
  "learn-dataops": "Agile principles for data engineering. Continuous integration and delivery (CI/CD), automated quality checks, and pipeline observability.",
  "learn-mlops": "Bridging machine learning prototypes to reliable production systems. Continuous training (CT), model monitoring, drift detection, and automated deployment.",
  "learn-llmops": "Deploying and managing large language models at scale. High-throughput inference engines (vLLM, Triton), prompt routing, semantic caching, and cost monitoring.",
  "learn-mlsecops": "Defending AI pipelines and models against novel cyber threats. Prompt injection defense, data poisoning detection, weight extraction mitigation, and model provenance.",
  "learn-ml": "Applied machine learning from hypothesis to evaluation. Regression, classification, clustering, cross-validation, and feature engineering with scikit-learn.",
  "learn-mlmath": "Mathematical foundations of machine learning. Linear algebra, matrix calculus, multivariate gradients, and vector space geometry.",
  "learn-mlstats": "Statistical rigor for data science. Hypothesis testing, Bayesian inference, probability distributions, confidence intervals, and ANOVA.",
  "learn-ts": "Time series forecasting and analysis. Trend and seasonality decomposition, stationarity tests, ARIMA, Prophet, and neural network forecasting.",
  "learn-dl": "Deep learning from perceptrons to modern neural architectures. Activation functions, backpropagation, and hands-on PyTorch modeling.",
  "learn-rl": "Reinforcement learning and autonomous decision agents. Markov decision processes, Q-learning, deep Q-networks (DQN), and policy gradients.",
  "learn-nlp": "Natural language processing foundations. Tokenization, word and sentence embeddings, sequence models, transformers, and semantic parsing.",
  "learn-cv": "Computer vision and image analysis. Convolutional neural networks (CNNs), object detection, semantic segmentation, and visual feature extraction.",
  "learn-datastructure": "Essential data structures for software engineers. Arrays, linked lists, stacks, queues, hash tables, trees, heaps, and graphs.",
  "learn-algorithm": "Designing and analyzing scalable algorithms. Big-O complexity, search algorithms, sorting, dynamic programming, and graph algorithms.",
  "learn-llm": "Deep dive into Large Language Models. Self-attention mechanisms, Transformer architectures, prompt engineering, LoRA fine-tuning, and alignment.",
  "learn-ml-patterns": "Battle-tested architectural patterns in machine learning. Feature stores, cascading models, checkpointing, and resilient serving topologies.",
  "learn-critical-thinking": "Analytical defense against faulty reasoning. Correlation vs causation, Simpson's paradox, selection bias, and avoiding p-hacking pitfalls.",
  "learn-rag": "Retrieval-Augmented Generation for enterprise knowledge. Vector databases, dense embeddings, HNSW indexing, reranking, and semantic retrieval.",
  "learn-agents": "Autonomous agent architectures. ReAct patterns, Model Context Protocol (MCP), tool execution, working memory, and multi-agent coordination.",
  "learn-optimization": "Mathematical programming and combinatorial optimization. Linear programming, integer programming, and constraint solving with Google OR-Tools.",
  "learn-web-fundamentals": "Core web architecture. HTTP protocols, client-server models, DOM tree manipulation, semantic HTML, responsive CSS, and modern JavaScript.",
  "learn-django": "Batteries-included Python web framework. MTV architecture, built-in ORM, automated migrations, authentication, and secure admin interfaces.",
  "learn-flask": "Lightweight Python microframework. HTTP request lifecycles, routing, Jinja templating, and building modular microservices.",
  "learn-streamlit": "Rapid data app development in pure Python. Interactive widgets, data caching, live visualization, and deploying machine learning prototypes.",
  "learn-shiny": "Reactive web applications for R and Python. Reactive graphs, dynamic inputs, statistical dashboards, and interactive visual analytics.",
  "learn-api": "Designing robust web APIs. RESTful principles, Pydantic data validation, automated OpenAPI documentation, and async FastAPI services.",
  "learn-scraping": "Web data extraction and harvesting. HTTP requests, HTML parsing with BeautifulSoup, browser automation with Selenium, and resilient scrapers.",
  "learn-arduino": "Embedded programming and physical computing. Microcontroller I/O, analog/digital sensors, actuator control, and I2C/SPI communication.",
  "learn-raspberrypi": "Single-board computing for Industry 4.0. Linux on ARM, GPIO programming, edge telemetry, industrial sensor gateways, and cloud sync.",
  "learn-enterprise-blockchain": "Permissioned distributed ledgers for Industry 4.0. Immutable supply chain tracking, smart contracts, and Hyperledger Fabric.",
  "learn-iiot": "Industrial Internet of Things architecture. Connecting operational technology (OT) to cloud platforms with MQTT, OPC-UA, and edge telemetry processing.",
  "learn-tinyml": "Machine learning on ultra-low-power microcontrollers. Quantization, model compression, TensorFlow Lite for Microcontrollers, and edge sensor inference."
};

const COURSE_DESC_DE = {
  "learn-python": "Von einfacher Automatisierung bis Machine Learning. Speichermodell, Datenstrukturen und algorithmische Aufgaben Schritt für Schritt.",
  "learn-r": "Statistische Datenanalyse, Datenbereinigung im tidyverse, publikationsreife Grafiken mit ggplot2 und Simulationen.",
  "learn-cpp": "Direkte Speicher- und Hardwarekontrolle für maximale Ausführungsgeschwindigkeit. Zeiger, Ressourcenmanagement (RAII) und modernes C++.",
  "learn-rust": "Speichersicherheit ohne Garbage Collector. Ownership-System, Borrowing-Lifetimes und daten-rennfreie Nebenläufigkeit.",
  "learn-go": "Entwickelt für Cloud-Dienste und skalierbare Systeme. Leichtgewichtige Goroutinen, Kanäle, schnelle Kompilierung und Single-Binary-Deployments.",
  "learn-julia": "C-Geschwindigkeit mit Python-Lesbarkeit für numerische Berechnungen, Multiple Dispatch und wissenschaftliches Rechnen.",
  "learn-java": "Das Rückgrat moderner Unternehmenssysteme von Hadoop bis Kafka. JVM-Interna, Speichermodell, Nebenläufigkeit und Big-Data-Architektur.",
  "learn-scala": "Die native Sprache von Apache Spark für verteilte Datenverarbeitung. Funktionale und objektorientierte Paradigmen mit starkem Typsystem.",
  "learn-fp": "Vorhersehbarer, wartbarer Code durch Unveränderlichkeit, reine Funktionen, Komposition und monadische Strukturen.",
  "learn-bash": "Die universelle Sprache von Linux-Servern und CI/CD-Pipelines. E/A-Datenströme, Pipes und Textverarbeitung mit sed und awk.",
  "learn-powershell": "Strukturierte Objekt-Pipelines, Remote-Systemadministration und plattformübergreifende Automatisierung für Windows und Linux.",
  "learn-cmd": "Schnelle Automatisierung in Windows-Umgebungen. Dateisystembefehle, Umgebungsvariablen und Batch-Skripte.",
  "learn-linux": "Das Fundament von über 90 % aller weltweiten Server. Kernel-Architektur, Prozessverwaltung, Zugriffsrechte und Dateisysteme.",
  "learn-git": "Unverzichtbare Versionskontrolle für Entwicklungsteams. Verzweigungsmodelle, Rebase, Konfliktlösung und Versionshistorie.",
  "learn-networking": "Praxisnahe Netzwerkgrundlagen für Software-Engineers. TCP/IP, OSI-Schichten, DNS, Routing und Fehlerdiagnose in realen Systemen.",
  "learn-cryptography": "Sicherheitsfundamente digitaler Signaturen und Verschlüsselung. Kryptografische Hashes, symmetrische und asymmetrische Verfahren und PKI.",
  "learn-software-design": "Wartbaren, zukunftssicheren Code schreiben. SOLID-Prinzipien, GoF-Entwurfsmuster, Schichtenarchitektur und Refactoring.",
  "learn-testing": "Testgetriebene Entwicklung (TDD), Unit- und Integrationstests mit pytest, Mocking und Validierung von Datenpipelines.",
  "learn-technical-docs": "Architektur-Entscheidungsprotokolle (ADRs), RFCs, API-Spezifikationen und nachhaltiges Wissensmanagement im Team.",
  "learn-ddd": "Beherrschung fachlicher Komplexität mit Domain-Driven Design, Ubiquitous Language, Bounded Contexts und Data-Mesh-Architekturen.",
  "learn-bpmn": "End-to-End-Geschäftsprozessmodellierung nach BPMN 2.0-Standards, Entscheidungsgateways, Pools und Anbindung an Ausführungs-Engines.",
  "learn-scientific-writing": "Präzise wissenschaftliche Dokumentation, IMRAD-Struktur, reproduzierbare Experimente und Vorbereitung auf Peer-Reviews.",
  "learn-tech-interviews": "Erfolgreich in technischen Interviews. System Design, Live-Coding von Algorithmen, komplexe SQL-Aufgaben und Architekturentscheidungen.",
  "learn-ai-pm": "Steuerung von KI- und Datenprojekten. Agile Methoden für probabilistische Systeme, CRISP-DM, TCO-Berechnung und ROI-Ermittlung.",
  "learn-licensing": "Rechtliche Grundlagen bei Open-Source-Lizenzen, Modellgewichten, Urheberrechten an Datensätzen und kommerzieller Nutzung.",
  "learn-distributed-systems": "Entwicklung hochverfügbarer verteilter Systeme. CAP-Theorem, Raft- und Paxos-Konsens, Sharding und ereignisgesteuerte Architekturen.",
  "learn-docker": "Praktische Containerisierung. Mehrstufige Builds, Container-Netzwerke, Datenvolumen und Multi-Container-Orchestrierung mit Docker Compose.",
  "learn-aws": "Zentrale AWS-Cloud-Dienste für Data Engineers. S3, EC2, Lambda, IAM und moderne cloud-native Datenarchitekturen.",
  "learn-azure": "Das Microsoft-Cloud-Ökosystem für Unternehmen. Azure Data Factory, ADLS Gen2, Synapse Analytics und Cloud-Ressourcenverwaltung.",
  "learn-databricks": "Integrierte Lakehouse-Plattform. Verteilte Berechnungen mit Spark, Delta-Lake-Architektur und Query-Optimierung.",
  "learn-snowflake": "Entkoppelte Rechen- und Speicherkapazitäten im modernen Data Warehousing. Skalierbares SQL, Time Travel und Zero-Copy Cloning.",
  "learn-grafana": "Echtzeit-Monitoring und Observability. Anbindung verschiedener Datenquellen, Schreiben von PromQL-Abfragen und Alarmsysteme.",
  "learn-pkgm": "Modernes Python-Paketmanagement. Vergleich von pip, conda und uv mit virtuellen Umgebungen und reproduzierbaren Builds.",
  "learn-kibana": "Visuelle Datenanalyse im Elastic Stack. Erkundung von Logdaten in Discover, interaktive Dashboards und Systemüberwachung.",
  "learn-logstash": "Zentrale Log-Erfassung und Transformation. Echtzeit-Pipelines, Grok-Muster für Parsing und Weiterleitung an Elasticsearch.",
  "learn-splunk": "Analyse großer Mengen an Maschinendaten und SIEM. Sicherheitsüberwachung, Ereignisanalyse und SPL-Abfragen.",
  "learn-kubernetes": "Container-Orchestrierung im Produktivbetrieb. Cluster-Architektur, Pods, Deployments, Services und StatefulSets.",
  "learn-gcp": "Google Cloud für Big Data und künstliche Intelligenz. Cloud Storage, Analysen mit BigQuery, Cloud Run und Vertex AI.",
  "learn-terraform": "Infrastructure as Code (IaC). Deklarative HCL-Syntax, Ressourcen-Lebenszyklen, Statusverwaltung und Cloud-Bereitstellung.",
  "learn-sql": "Die fundamentale Datensprache. Fensterfunktionen, CTEs, Unterabfragen, Indexierung und Ausführungsplan-Optimierung.",
  "learn-dax": "Fortgeschrittene Datenanalyse in Power BI. Filter- und Zeilenkontexte, CALCULATE-Funktion und Zeitintelligenz-Kennzahlen.",
  "learn-m": "Power-Query-Transformationssprache. Bereinigung, Strukturierung und Zusammenführung heterogener Datenquellen.",
  "learn-spark": "Verteilte Datenverarbeitung im großen Maßstab. Spark DataFrames, Catalyst-Optimierer, Partitionierung und In-Memory-Berechnungen.",
  "learn-hadoop": "Grundlagen verteilter Datenspeicherung und -verarbeitung. HDFS-Architektur, MapReduce-Paradigmen und YARN-Ressourcenverwaltung.",
  "learn-mongodb": "Dokumentenorientierte Datenbanken. Flexible JSON/BSON-Schemas, zusammengesetzte Indizes und Aggregation Pipelines.",
  "learn-elasticsearch": "Blitzschnelle Volltextsuche in Milliarden Dokumenten. Invertierte Indizes, BM25-Relevanz, unscharfe Suche und Textanalyse.",
  "learn-data-storytelling": "Daten in überzeugende Berichte verwandeln. Gestaltgesetze der visuellen Wahrnehmung und datengestützte Entscheidungsfindung.",
  "learn-data-modeling": "Solide Datenschemata entwerfen. ER-Diagramme, Normalisierung, Kimball-Dimensionierung, Sternschemata und OLTP vs OLAP.",
  "learn-data-governance": "Datenqualität und Compliance sicherstellen. Datenverträge, Lineage-Tracking, Metadatenkataloge und Datenschutz.",
  "learn-dashboard-kpi": "Effektive Management-Dashboards gestalten. Früh- und Spätindikatoren, Informationshierarchie und Benutzeroberflächen.",
  "learn-duckdb": "Ultraschnelles In-Process Analytical SQL. Spaltenbasierte vektorisierte Ausführung, Parquet-Direktabfragen und Ad-hoc-Analytik.",
  "learn-dvc": "Versionskontrolle für Daten und Machine-Learning-Modelle. Datensatz-Tracking, Remote-Storage-Caching und reproduzierbare Pipelines.",
  "learn-dbt": "Software-Engineering-Best-Practices für SQL. Modulare Transformationsmodelle, DAG-Abhängigkeiten, automatisierte Tests und Dokumentation.",
  "learn-airflow": "Orchestrierung komplexer Daten-Workflows. Python-DAG-Definitionen, Aufgabenabhängigkeiten, Sensoren und Fehlerbehandlung.",
  "learn-kafka": "Verteilte Event-Streaming-Plattform. Topics, Partitionen, Producer- und Consumer-Muster und Exactly-Once-Verarbeitung.",
  "learn-mlflow": "Ganzheitliches Management des ML-Lebenszyklus. Experiment-Tracking, Modell-Packaging, Registry und Deployment.",
  "learn-dataops": "Agile Methoden für Daten-Pipelines. Kontinuierliche Integration und Bereitstellung (CI/CD), Datenqualitätsprüfungen und Monitoring.",
  "learn-mlops": "Von experimentellen Modellen zu stabilen Produktionssystemen. Kontinuierliches Training (CT), Modellüberwachung und Drift-Erkennung.",
  "learn-llmops": "Skalierung und Betrieb großer Sprachmodelle. Hochleistungs-Inferenz-Engines (vLLM, Triton), Prompt-Routing und Kostenkontrolle.",
  "learn-mlsecops": "Sicherheit für KI-Pipelines. Schutz vor Prompt-Injections, Erkennung von Data Poisoning und Absicherung der ML-Lieferkette.",
  "learn-ml": "Angewandtes Machine Learning von der Hypothese zur Evaluation. Regression, Klassifikation, Clustering und Feature-Engineering mit scikit-learn.",
  "learn-mlmath": "Mathematische Grundlagen des maschinellen Lernens. Lineare Algebra, Matrix-Kalkül, Gradientenoptimierung und Vektorräume.",
  "learn-mlstats": "Statistische Fundamente für Data Science. Hypothesentests, Bayessche Inferenz, Wahrscheinlichkeitsverteilungen und Konfidenzintervalle.",
  "learn-ts": "Zeitreihenanalyse und Vorhersagemodelle. Zerlegung von Trend und Saisonalität, Stationaritätstests, ARIMA, Prophet und neuronale Netze.",
  "learn-dl": "Deep Learning von Perzeptronen bis zu modernen Netzen. Aktivierungsfunktionen, Backpropagation und praktisches Modelltraining mit PyTorch.",
  "learn-rl": "Reinforcement Learning und autonome Entscheidungsagenten. Markov-Entscheidungsprozesse, Q-Learning, DQN und Policy Gradients.",
  "learn-nlp": "Verarbeitung natürlicher Sprache. Tokenisierung, Worteinbettungen, Sequenzmodelle, Transformer-Architekturen und semantische Analyse.",
  "learn-cv": "Computer Vision und Bildverarbeitung. Convolutional Neural Networks (CNNs), Objekterkennung, Bildsegmentierung und Feature-Extraktion.",
  "learn-datastructure": "Fundamentale Datenstrukturen für Softwareentwickler. Arrays, verkettete Listen, Stacks, Queues, Hashmaps, Bäume und Graphen.",
  "learn-algorithm": "Entwurf und Analyse skalierbarer Algorithmen. Big-O-Komplexität, Suchverfahren, Sortieren, dynamische Programmierung und Graphalgorithmen.",
  "learn-llm": "Fundiertes Verständnis großer Sprachmodelle. Self-Attention, Transformer-Architektur, Prompt-Engineering, LoRA-Finetuning und Modell-Alignment.",
  "learn-ml-patterns": "Praxiserprobte Architekturmuster für Machine Learning. Feature Stores, Kaskadierung, Checkpointing und resiliente Inferenzsysteme.",
  "learn-critical-thinking": "Analytisches und kritisches Denken bei Daten. Korrelation vs Kausalität, Simpson-Paradoxon, Selektionsverzerrung und p-Hacking-Fallen.",
  "learn-rag": "Retrieval-Augmented Generation für Wissensdatenbanken. Vektordatenbanken, HNSW-Indizierung, Reranking und semantische Dokumentensuche.",
  "learn-agents": "Autonome KI-Agentenarchitekturen. ReAct-Muster, Model Context Protocol (MCP), Werkzeugausführung und Multi-Agenten-Orchestrierung.",
  "learn-optimization": "Mathematische Optimierung und Operations Research. Lineare und ganzzahlige Programmierung sowie Constraint-Solving mit Google OR-Tools.",
  "learn-web-fundamentals": "Web-Grundlagen und Architektur. HTTP-Protokolle, Client-Server-Modelle, DOM-Manipulation, semantisches HTML, CSS und JavaScript.",
  "learn-django": "Ganzheitliches Python-Webframework. MTV-Architektur, integriertes ORM, automatisierte Migrationen, Authentifizierung und Admin-Panel.",
  "learn-flask": "Leichtgewichtiges Python-Mikroframework. HTTP-Lebenszyklus, Routing, Jinja-Templates und Entwicklung modularer APIs.",
  "learn-streamlit": "Schnelle Erstellung von Daten-Webapps mit reinem Python. Interaktive Widgets, Daten-Caching, Live-Visualisierung und ML-Dashboards.",
  "learn-shiny": "Reaktive Webanwendungen für R und Python. Reaktive Graphen, dynamische Benutzeroberflächen und statistische Echtzeit-Dashboards.",
  "learn-api": "Design robuster Web-APIs. RESTful-Prinzipien, Pydantic-Validierung, automatisierte OpenAPI-Dokumentation und FastAPI.",
  "learn-scraping": "Strukturierte Datenextraktion aus dem Web. HTTP-Anfragen, HTML-Parsing mit BeautifulSoup, Browserautomatisierung mit Selenium und Crawler.",
  "learn-arduino": "Mikrocontroller-Programmierung und Physical Computing. E/A-Pins, analoge und digitale Sensoren, Motorsteuerung und I2C/SPI-Protokolle.",
  "learn-raspberrypi": "Single-Board-Computer für Industrie 4.0. Embedded Linux, GPIO-Programmierung, Edge-Telemetrie und Anbindung an Cloud-Dienste.",
  "learn-enterprise-blockchain": "Permissioned Distributed Ledgers für Industrie 4.0. Unveränderliche Lieferkettenverfolgung, Smart Contracts und Hyperledger Fabric.",
  "learn-iiot": "Industrial Internet of Things (IIoT). Verbindung von Betriebstechnik (OT) mit IT-Cloudplattformen via MQTT, OPC-UA und Edge-Verarbeitung.",
  "learn-tinyml": "Machine Learning auf ressourcenbeschränkten Mikrocontrollern. Quantisierung, Gewichtsreduktion, TensorFlow Lite for Microcontrollers und Sensor-KI."
};

const I18N = {
  fa: {
    dir: "rtl",
    brandTitle: "Aghili Labs — آموزش برای همه",
    brandDesc: "مجموعه‌ای از دوره‌های تعاملی رایگان علی صادقی عقیلی در برنامه‌نویسی، داده، یادگیری ماشین و زیرساخت. آموزش حق همه است.",
    navAbout: "داستان",
    navSupport: "حمایت",
    navCourses: "دوره‌ها",
    navCta: "حمایت کنید",
    heroEyebrow: "آموزش رایگان · تعاملی · عمیق",
    heroHeading: "آموزش حق همه است.<br />نه امتیاز چند نفر.",
    heroLede: "من <strong>علی صادقی عقیلی</strong> هستم. اینجا تجربههام در برنامهنویسی و داده رو در قالب دورههای رایگان به اشتراک میذارم.<br /><br />این مجموعه رو اول برای تیمم ساختم. بعد، برای ادای دین به مردم کشورم گسترشش دادم؛ آدمهایی که با وجود همهٔ سختیها، همچنان دارن تلاش میکنن.<br /><br />حالا میخوام این آموزشها فراتر از ایران هم در دسترس باشن، چون باور دارم همه باید فرصت یادگیری باکیفیت داشته باشن؛ فارغ از اینکه کجا زندگی میکنن.",
    heroBrowse: "مرور دوره‌ها",
    heroSupport: "چطور حمایت کنم",
    heroStatsCourses: "دورهٔ تعاملی",
    heroStatsCategories: "دستهٔ آموزشی",
    heroStatsVisitors: "بازدید",
    heroStatsFree: "رایگان و متن‌باز",
    quoteCardLabel: "چرا این مجموعه وجود دارد",
    quoteText: "«خوندن بهتنهایی کافی نیست. باید دست به کار بشی، اشتباه کنی و دوباره امتحان کنی. این دورهها برای همین ساخته شدن.»",
    aboutHeading: "از تجربهٔ صنعت تا آموزش آزاد",
    aboutCard1Title: "سابقه",
    aboutCard1Body: "دکترای مهندسی صنایع با گرایش اتوماسیون دارم. فعالیت حرفهایام در حوزهٔ داده رو از سال ۱۳۹۱ شروع کردم و امروز در زمینهٔ برنامهنویسی، مهندسی داده، علم داده و حوزههای مرتبط با انقلاب صنعتی چهارم کار میکنم؛ از ساخت ETL و پایپ‌لاین‌های داده تا مدل‌سازی آماری، یادگیری ماشین و سامانه‌های صنعتی.<br /><br />در این مدت، در زمینهٔ هوش مصنوعی و داده به سازمان‌های زیادی در ایران مشاوره داده‌ام و در آموزشگاه‌های تهران، از جمله مرکز آموزش‌های دانشگاه صنعتی شریف، برنامه‌نویسی، داشبوردینگ، مهندسی داده و یادگیری ماشین تدریس می‌کنم. این دوره‌ها رو هم بر پایهٔ همین تجربه‌های کاری و آموزشی ساخته‌ام.",
    aboutCard2Title: "مأموریت",
    aboutCard2Body: "اولویت من مردم کشورم هستن؛ آدم‌هایی که با وجود همهٔ سختی‌ها، هنوز برای یادگرفتن و ساختن آینده‌ای بهتر تلاش می‌کنن. دلم می‌خواد هزینه، یک مانع دیگه سر راهشون نباشه. کسی که شوق یادگیری داره، باید فرصتش رو هم داشته باشه؛ حتی اگر نتونه هزینهٔ یک دوره رو پرداخت کنه.<br /><br />اما یادگیری مرز نمی‌شناسه. آرزوم اینه که این آموزش‌ها به آدم‌های بیشتری، هر جای دنیا که هستن، برسن و بهشون کمک کنن چیزی یاد بگیرن، مسئله‌ای رو حل کنن یا قدمی برای بهترکردن زندگی‌شون بردارن.<br /><br />تلاشم اینه که با حمایت داوطلبانهٔ شما، این آموزش‌ها رایگان بمونن و روزبه‌روز بهتر و کامل‌تر بشن. اگر این مجموعه براتون مفید بوده و امکان حمایتش رو دارین، کمک شما فرصت ادامهٔ این مسیر رو فراهم می‌کنه؛ تا نفر بعدی هم بتونه بدون نگرانی از هزینه، یادگیری رو شروع کنه.",
    aboutCard3Title: "روش آموزش",
    aboutCard3Body: "هر دوره یک محیط تعاملی است: سندباکس زنده، چالش‌های پلکانی، بازخورد فوری و بصری‌سازی مفاهیم. یادگیری با دست و آزمودن — نه فقط با خواندن.",
    supportHeading: "اگر این مسیر برایتان مفید است، کنارش بایستید",
    supportLede: "دونیت مالی مستقیم‌ترین کمک است و چرخهٔ تولید محتوا را زنده نگه می‌دارد. اما اگر فعلاً نمی‌توانید، اشتراک‌گذاری یا مشارکت فنی همان‌قدر دلگرم‌کننده است — شاید حتی بیشتر.",
    supportDonateTitle: "دونیت",
    supportDonateBody: "کمک مالی کوچک هم اثر دارد. اگر این آموزش‌ها مسیر کاری یا یادگیری شما را تغییر داده، یک دونیت چرخهٔ ساخت دوره‌های بعدی را روشن نگه می‌دارد.",
    supportDonateBtn: "حمایت مالی",
    supportShareTitle: "اشتراک‌گذاری",
    supportShareBody: "دوره‌ها را به کسانی برسانید که به‌شان نیاز دارند. اگر می‌دانید کسی دنبال یادگیری Python، SQL، داده یا هر مسیر دیگری است، از فهرست زیر لینک همان دوره را کپی کنید و برایش بفرستید.",
    supportShareBtn: "برو به فهرست دوره‌ها",
    supportContribTitle: "مشارکت",
    supportContribBody: "باگ، بهبود مستندات، ترجمه، مثال نو، یا ایدهٔ سطح جدید — هر مشارکت فنی همان‌قدر ارزشمند است که حمایت مالی. مخزن‌ها روی گیت‌هاب باز هستند.",
    supportContribBtn: "گیت‌هاب من",
    langFa: "فا",
    authorName: "علی صادقی عقیلی",
    authorSub: "Ali Sadeghi Aghili",
    donateTabDomestic: "ریالی (کافی‌بده)",
    donateTabInternational: "ارزی (Buy Me a Coffee)",
    donateBtnDomestic: "پرداخت با کافی‌بده",
    donateBtnInternational: "☕ Buy Me a Coffee",
    footerCoffeeBede: "کافی‌بده",
    footerBmc: "Buy Me a Coffee",
    coursesHeading: "یک مسیر یادگیری، نُه دسته",
    coursesLede: "از پایهٔ برنامه‌نویسی تا مهندسی داده، یادگیری ماشین و ابر. هر دوره یک دکمه است — روی هر کدام کلیک کنید و مستقیم وارد محیط تعاملی شوید.",
    searchPlaceholder: "جستجوی دوره‌ها…",
    searchAria: "جستجو در دوره‌ها",
    emptyTitle: "نتیجه‌ای پیدا نشد",
    emptyHint: "عبارت دیگری را امتحان کنید یا دسته‌بندی را تغییر دهید.",
    ctaHeading: "آموزش نباید پشت دیوار بماند.",
    ctaLede: "اگر همین یک جمله را قبول دارید، کمک کنید این مسیر برای نفر بعدی هم باز بماند.",
    ctaDonate: "حمایت مالی",
    ctaStart: "شروع یادگیری",
    footerText: "مجموعه‌ای از دوره‌های تعاملی رایگان، ساخته‌شده توسط علی صادقی عقیلی — برای مردم ایران و هر کسی که می‌خواهد یاد بگیرد.",
    footerCopy: "© <span id=\"year\">2026</span> Ali Sadeghi Aghili · آموزش آزاد برای همه",
    visitorsTitle: "مجموع کل بازدیدهای سایت (همگام‌شده)",
    courseVisitorsTooltip: "تعداد بازدیدکنندگان این دوره",
    shareLabel: "اشتراک‌گذاری",
    copiedToast: "لینک کپی شد!",
    courseUnit: "دوره",
    courseContentLangNote: "محتوای دوره فعلاً به انگلیسی است",
    courseContentLangNoteMulti: "محتوای دوره به فارسی، انگلیسی و آلمانی در دسترس است",
    statusLabels: {
      published: "منتشرشده",
      near_complete: "تقریباً تمام",
      in_development: "در حال توسعه",
      planned: "برنامه‌ریزی‌شده",
    },
    filterLabels: {
      all: "همه",
      languages: "زبان‌ها",
      systems: "شل و سیستم",
      architecture: "معماری و مهندسی",
      platforms: "ابر و پلتفرم",
      data: "داده",
      mlops: "MLOps",
      ml: "ML / AI",
      web: "وب",
      iot: "اینترنت اشیاء و لبه",
    },
    categoryTitles: {
      languages: "زبان‌های برنامه‌نویسی",
      systems: "شل، سیستم و ابزار",
      architecture: "معماری، متدولوژی و مهندسی",
      platforms: "ابر، پلتفرم و عملیات",
      data: "داده و تحلیل",
      mlops: "MLOps و پایپ‌لاین",
      ml: "یادگیری ماشین و هوش مصنوعی",
      web: "وب و اپلیکیشن",
      iot: "اینترنت اشیاء، سخت‌افزار و لبه",
    },
    categoryBlurbs: {
      languages: "پایه‌های محکم برای هر مسیر فنی",
      systems: "کنترل ماشین از خط فرمان تا شبکه و لینوکس",
      architecture: "توسعه نرم‌افزار تمیز، طراحی سیستم و فرآیندهای مهندسی",
      platforms: "از کانتینرها تا ابر، زیرساخت و مانیتورینگ",
      data: "پایگاه‌های داده، انباره داده و پردازش در مقیاس بزرگ",
      mlops: "خودکارسازی پایپ‌لاین‌های یادگیری ماشین و استقرار مدل‌ها",
      ml: "الگوریتم‌ها، یادگیری عمیق، شبکه‌های عصبی و هوش مصنوعی مولد",
      web: "ساخت رابط‌های کاربری، داشبوردها و استخراج داده از وب",
      iot: "پیوند دنیای فیزیکی، سنسورها و پردازش داده در لبه",
    },
  },
  en: {
    dir: "ltr",
    brandTitle: "Aghili Labs — Free Education for Everyone",
    brandDesc: "Free interactive course suite by Ali Sadeghi Aghili covering programming, data engineering, machine learning, systems, and cloud. Education is a human right.",
    navAbout: "Story",
    navSupport: "Support",
    navCourses: "Courses",
    navCta: "Support Us",
    heroEyebrow: "Free · Interactive · In-depth Education",
    heroHeading: "Education is a human right.<br />Not a privilege for a few.",
    heroLede: "I’m <strong>Ali Sadeghi Aghili</strong>. Here, I share my experience in programming and data through free courses.<br /><br />I originally built this collection for my team. I then expanded it to give back to people in Iran who keep working toward a better future despite the challenges they face.<br /><br />Now I want these courses to reach learners beyond Iran, too. I believe everyone should have access to quality learning, wherever they live.",
    heroBrowse: "Browse Courses",
    heroSupport: "How to Support",
    heroStatsCourses: "Interactive Courses",
    heroStatsCategories: "Disciplines",
    heroStatsVisitors: "Visitors",
    heroStatsFree: "Free & Open Source",
    quoteCardLabel: "Why This Exists",
    quoteText: "“Reading alone isn’t enough. You need to put what you learn into practice, make mistakes, and try again. That’s what these courses are for.”",
    aboutHeading: "From Industry Practice to Open Education",
    aboutCard1Title: "Background",
    aboutCard1Body: "I hold a PhD in Industrial Engineering, specializing in automation. I began my professional career in the data field in 2012. Today, my work spans programming, data engineering, data science, and areas related to Industry 4.0—from building resilient ETL pipelines to statistical modeling, ML, and industrial telemetry systems.<br /><br />During this time, I have consulted for numerous organizations and taught programming, dashboarding, and machine learning at prestigious institutions in Tehran, including Sharif University of Technology. These courses distill that exact real-world engineering experience.",
    aboutCard2Title: "Mission",
    aboutCard2Body: "My priority has always been the people of my home country—those who, despite every hardship, keep striving to learn and build a brighter future. I want cost never to stand as another hurdle in their path. Whoever has the hunger to learn deserves the chance to do so.<br /><br />Yet learning knows no geographic borders. My wish is for these courses to reach curious minds worldwide, helping them master skills, solve problems, or improve their lives.<br /><br />With your voluntary sponsorship, these courses will remain 100% free and keep expanding—ensuring the next person can begin learning without financial worry.",
    aboutCard3Title: "Pedagogy",
    aboutCard3Body: "Every course is a standalone interactive environment: browser sandboxes, leveled challenges, instant validation, and intuitive mental models. True mastery comes from active doing, not passive viewing.",
    supportHeading: "If this platform helps you, stand with it",
    supportLede: "Financial sponsorship directly sustains new course authoring and infrastructure. But if you cannot donate, sharing these courses or contributing code is just as meaningful—perhaps even more.",
    supportDonateTitle: "Donate",
    supportDonateBody: "Every contribution counts. If these courses advanced your career or learning path, a small sponsorship keeps the next release cycle alive.",
    supportDonateBtn: "Support Financially",
    supportShareTitle: "Share",
    supportShareBody: "Introduce these courses to colleagues and students. If you know anyone learning Python, SQL, data, or cloud, copy the course link and share it.",
    supportShareBtn: "Go to Course Catalog",
    supportContribTitle: "Contribute",
    supportContribBody: "Bug fixes, documentation improvements, translations, new interactive challenges, or architecture reviews—every technical contribution is deeply appreciated.",
    supportContribBtn: "My GitHub",
    langFa: "FA",
    authorName: "Ali Sadeghi Aghili",
    authorSub: "Founder & Author",
    donateTabDomestic: "Iran / Rial (CoffeeBede)",
    donateTabInternational: "International (Buy Me a Coffee)",
    donateBtnDomestic: "Support with CoffeeBede",
    donateBtnInternational: "☕ Buy Me a Coffee",
    footerCoffeeBede: "CoffeeBede",
    footerBmc: "Buy Me a Coffee",
    coursesHeading: "One Learning Path, Nine Disciplines",
    coursesLede: "From programming fundamentals to data engineering, machine learning, and cloud. Each course is an interactive in-browser sandbox—click any card to launch immediately.",
    searchPlaceholder: "Search courses…",
    searchAria: "Search courses",
    emptyTitle: "No courses found",
    emptyHint: "Try another search term or change category filters.",
    ctaHeading: "Education should not stay behind paywalls.",
    ctaLede: "If you agree with this principle, help ensure this learning journey remains open for the next person.",
    ctaDonate: "Support Financially",
    ctaStart: "Start Learning",
    footerText: "A collection of free interactive courses built by Ali Sadeghi Aghili — for the people of Iran and anyone eager to learn.",
    footerCopy: "© <span id=\"year\">2026</span> Ali Sadeghi Aghili · Free education for everyone",
    visitorsTitle: "Total unique visits (synchronized)",
    courseVisitorsTooltip: "Learners & visitors for this course",
    shareLabel: "Share",
    copiedToast: "Link copied to clipboard!",
    courseUnit: "courses",
    courseContentLangNote: "Course content is currently in English",
    courseContentLangNoteMulti: "Course content is available in English, Persian, and German",
    statusLabels: {
      published: "Published",
      near_complete: "Nearly Complete",
      in_development: "In Development",
      planned: "Planned",
    },
    filterLabels: {
      all: "All",
      languages: "Languages",
      systems: "Systems & Shell",
      architecture: "Architecture",
      platforms: "Cloud & Platforms",
      data: "Data & Analytics",
      mlops: "MLOps",
      ml: "ML & AI",
      web: "Web & Apps",
      iot: "IoT & Edge",
    },
    categoryTitles: {
      languages: "Programming Languages",
      systems: "Shell, Systems & Tooling",
      architecture: "Architecture & Engineering",
      platforms: "Cloud, Platforms & Ops",
      data: "Data & Analytics",
      mlops: "MLOps & Pipelines",
      ml: "Machine Learning & AI",
      web: "Web & Applications",
      iot: "IoT, Hardware & Edge",
    },
    categoryBlurbs: {
      languages: "Solid foundations for every technical path",
      systems: "Machine control from command-line to networking and Linux",
      architecture: "Clean code, distributed system design, and software craftsmanship",
      platforms: "From containers to cloud infrastructure and telemetry",
      data: "Relational, document, modeling, governance, and big data",
      mlops: "Model lifecycle, data versioning, and continuous training",
      ml: "Foundational mathematics, deep learning, LLMs, RAG, and agents",
      web: "Web interfaces, reactive dashboards, DOM architecture, and APIs",
      iot: "Physical computing, sensors, industrial automation, and edge ML",
    },
  },
  de: {
    dir: "ltr",
    brandTitle: "Aghili Labs — Freie Bildung für alle",
    brandDesc: "Kostenlose interaktive Lernplattform von Ali Sadeghi Aghili für Programmierung, Data Engineering, Machine Learning, Systeme und Cloud.",
    navAbout: "Über uns",
    navSupport: "Unterstützen",
    navCourses: "Kurse",
    navCta: "Unterstützen",
    heroEyebrow: "Kostenlose · Interaktive · Fundierte Bildung",
    heroHeading: "Bildung gehört allen.<br />Kein Privileg für wenige.",
    heroLede: "Ich bin <strong>Ali Sadeghi Aghili</strong>. Hier gebe ich meine Erfahrung in der Programmierung und der Arbeit mit Daten in kostenlosen Kursen weiter.<br /><br />Diese Sammlung habe ich ursprünglich für mein Team entwickelt. Später habe ich sie erweitert, um den Menschen im Iran etwas zurückzugeben – Menschen, die trotz aller Schwierigkeiten weiter an einer besseren Zukunft arbeiten.<br /><br />Jetzt möchte ich mit diesen Kursen auch Menschen außerhalb des Iran erreichen. Denn ich glaube, dass alle Zugang zu guten Lernangeboten haben sollten – unabhängig davon, wo sie leben.",
    heroBrowse: "Kurse durchsuchen",
    heroSupport: "Wie unterstützen",
    heroStatsCourses: "Interaktive Kurse",
    heroStatsCategories: "Fachbereiche",
    heroStatsVisitors: "Besuche",
    heroStatsFree: "Kostenlos & Open Source",
    quoteCardLabel: "Warum es diese Plattform gibt",
    quoteText: "„Lesen allein reicht nicht. Du musst das Gelernte ausprobieren, Fehler machen und es noch einmal versuchen. Genau dafür sind diese Kurse da.“",
    aboutHeading: "Aus der Industriepraxis zur freien Bildung",
    aboutCard1Title: "Werdegang",
    aboutCard1Body: "Ich habe in Industrial Engineering mit Schwerpunkt Automatisierung promoviert. Seit 2012 bin ich beruflich im Datenbereich tätig. Heute arbeite ich in der Programmierung, im Data Engineering, in der Data Science und in Bereichen rund um Industry 4.0 – von ETL-Pipelines bis hin zu statistischer Modellierung, maschinellem Lernen und industrieller Telemetrie.<br /><br />In dieser Zeit habe ich zahlreiche Unternehmen beraten und an führenden Institutionen in Teheran, unter anderem an der Sharif University of Technology, unterrichtet. Diese Kurse destillieren diese fundierte Praxiserfahrung.",
    aboutCard2Title: "Mission",
    aboutCard2Body: "Meine Priorität gilt den Menschen in meiner Heimat – jenen, die trotz aller Widrigkeiten unermüdlich lernen und an einer besseren Zukunft bauen. Kosten dürfen kein Hindernis sein. Wer den Wissensdrang hat, verdient auch die Chance dazu.<br /><br />Doch Lernen kennt keine Landesgrenzen. Ich wünsche mir, dass diese Kurse Menschen überall auf der Welt erreichen und ihnen helfen, neue Fähigkeiten zu erlernen.<br /><br />Durch freiwillige Unterstützung bleiben diese Kurse dauerhaft kostenlos und wachsen kontinuierlich weiter.",
    aboutCard3Title: "Pädagogik",
    aboutCard3Body: "Jeder Kurs ist eine eigenständige interaktive Umgebung: Browser-Sandboxen, gestufte Aufgaben, sofortiges Feedback und intuitive mentale Modelle. Wahres Verständnis entsteht durch aktives Tun.",
    supportHeading: "Wenn Ihnen dieser Weg hilft, unterstützen Sie ihn",
    supportLede: "Finanzielle Unterstützung sichert die Entwicklung neuer Kurse. Wenn Sie aktuell nicht spenden können, ist das Teilen dieser Kurse oder technische Mitwirkung genauso wertvoll.",
    supportDonateTitle: "Spenden",
    supportDonateBody: "Jeder Beitrag zählt. Wenn diese Kurse Ihre berufliche Laufbahn vorangebracht haben, hilft eine Spende, den nächsten Entwicklungszyklus zu finanzieren.",
    supportDonateBtn: "Finanziell unterstützen",
    supportShareTitle: "Teilen",
    supportShareBody: "Erzählen Sie Kolleginnen, Kollegen und Studierenden von diesen Kursen. Wenn jemand Python, SQL, Daten oder Cloud lernen möchte, senden Sie den Link weiter.",
    supportShareBtn: "Zum Kurskatalog",
    supportContribTitle: "Mitwirken",
    supportContribBody: "Fehlerbehebungen, Verbesserungen der Dokumentation, Übersetzungen oder neue interaktive Aufgaben – jeder technische Beitrag ist willkommen.",
    supportContribBtn: "Mein GitHub",
    langFa: "FA",
    authorName: "Ali Sadeghi Aghili",
    authorSub: "Gründer & Autor",
    donateTabDomestic: "Iran / Rial (CoffeeBede)",
    donateTabInternational: "International (Buy Me a Coffee)",
    donateBtnDomestic: "Mit CoffeeBede unterstützen",
    donateBtnInternational: "☕ Buy Me a Coffee",
    footerCoffeeBede: "CoffeeBede",
    footerBmc: "Buy Me a Coffee",
    coursesHeading: "Ein Lernpfad, neun Fachbereiche",
    coursesLede: "Von Grundlagen der Programmierung bis hin zu Data Engineering, Machine Learning und Cloud. Jeder Kurs ist eine interaktive Sandbox – mit einem Klick direkt starten.",
    searchPlaceholder: "Kurse durchsuchen…",
    searchAria: "Kurse durchsuchen",
    emptyTitle: "Keine Kurse gefunden",
    emptyHint: "Versuchen Sie einen anderen Suchbegriff oder wählen Sie eine andere Kategorie.",
    ctaHeading: "Bildung darf nicht hinter Bezahlschranken stehen.",
    ctaLede: "Wenn Sie diesem Leitsatz zustimmen, helfen Sie mit, diesen Weg für die nächste Person offen zu halten.",
    ctaDonate: "Finanziell unterstützen",
    ctaStart: "Lernen starten",
    footerText: "Kostenlose interaktive Kurse von Ali Sadeghi Aghili – für die Menschen im Iran und alle Wissbegierigen weltweit.",
    footerCopy: "© <span id=\"year\">2026</span> Ali Sadeghi Aghili · Freie Bildung für alle",
    visitorsTitle: "Gesamtzahl der Besuche (synchronisiert)",
    courseVisitorsTooltip: "Besuchende dieses Kurses",
    shareLabel: "Teilen",
    copiedToast: "Link in Zwischenablage kopiert!",
    courseUnit: "Kurse",
    courseContentLangNote: "Der Kursinhalt ist derzeit auf Englisch",
    courseContentLangNoteMulti: "Der Kursinhalt ist auf Deutsch, Englisch und Persisch verfügbar",
    statusLabels: {
      published: "Veröffentlicht",
      near_complete: "Fast fertig",
      in_development: "In Entwicklung",
      planned: "Geplant",
    },
    filterLabels: {
      all: "Alle",
      languages: "Sprachen",
      systems: "Systeme & Shell",
      architecture: "Architektur",
      platforms: "Cloud & Plattformen",
      data: "Daten & Analytik",
      mlops: "MLOps",
      ml: "ML & KI",
      web: "Web & Apps",
      iot: "IoT & Edge",
    },
    categoryTitles: {
      languages: "Programmiersprachen",
      systems: "Shell, Systeme & Tools",
      architecture: "Architektur & Software-Handwerk",
      platforms: "Cloud, Plattformen & Ops",
      data: "Daten & Analytik",
      mlops: "MLOps & Pipelines",
      ml: "Machine Learning & KI",
      web: "Web & Anwendungen",
      iot: "IoT, Hardware & Edge",
    },
    categoryBlurbs: {
      languages: "Solide Grundlagen für jeden technischen Weg",
      systems: "Maschinensteuerung von der Kommandozeile bis zu Linux",
      architecture: "Sauberer Code, verteiltes Systemdesign und Engineering",
      platforms: "Von Containern bis Cloud-Infrastruktur und Monitoring",
      data: "Relationale Datenbanken, Data Warehousing und Big Data",
      mlops: "Modell-Lebenszyklus, Versionierung und kontinuierliches Training",
      ml: "Mathematische Grundlagen, Deep Learning, LLMs und Agenten",
      web: "Weboberflächen, reaktive Dashboards, DOM und APIs",
      iot: "Physical Computing, Sensorik, Automatisierung und Edge-KI",
    },
  },
};

/** @type {"fa" | "en" | "de"} */
let currentLang = "fa";

const STATUS_META = {
  published: {
    label: "منتشرشده",
    className: "status-published",
  },
  near_complete: {
    label: "تقریباً تمام",
    className: "status-near-complete",
  },
  in_development: {
    label: "در حال توسعه",
    className: "status-in-development",
  },
  planned: {
    label: "برنامه‌ریزی‌شده",
    className: "status-planned",
  },
};

/**
 * Known baseline and fallback visitor telemetry configurations for courses.
 * Guaranteed zero-latency initial rendering with offline fallback.
 * @type {Record<string, { countApi?: string, badgeUrl?: string, baseCount?: number }>}
 */
const KNOWN_COURSE_VISITORS = {
  "learn-r": {
    countApi: "https://countapi.mileshilliard.com/api/v1/get/alisadeghiaghili-learn-r",
    badgeUrl: "https://api.visitorbadge.io/api/visitors?path=alisadeghiaghili.learn-r",
    baseCount: 2,
  },
  "learn-cmd": {
    badgeUrl: "https://api.visitorbadge.io/api/combined?path=alisadeghiaghili-learn-cmd-unique",
    baseCount: 4,
    hasOffset: true,
  },
  "learn-dvc": {
    badgeUrl: "https://api.visitorbadge.io/api/combined?path=learn-dvc",
    baseCount: 1,
  },
};

const COURSE_VISITORS_STORAGE_KEY = "aghili-labs:course-visitors:v2";

/**
 * In-memory cache of course visitor counts for synchronous zero-latency rendering.
 * @type {Record<string, number>}
 */
const courseVisitorsCache = {};

try {
  localStorage.removeItem("aghili-labs:course-visitors:v1");
  const rawCourseVisitors = localStorage.getItem(COURSE_VISITORS_STORAGE_KEY);
  if (rawCourseVisitors) {
    const parsed = JSON.parse(rawCourseVisitors);
    if (parsed && typeof parsed === "object") {
      Object.entries(parsed).forEach(([slug, item]) => {
        if (item && typeof item.count === "number" && Number.isFinite(item.count) && item.count > 0) {
          courseVisitorsCache[slug] = item.count;
        }
      });
    }
  }
} catch {}

/**
 * Build a course card element.
 *
 * @param {Course} course
 * @returns {HTMLElement}
 */
function createCourseCard(course) {
  const dict = I18N[currentLang] || I18N.fa;
  const meta = STATUS_META[course.status] || STATUS_META.in_development;
  const isPlanned = course.status === "planned";
  const hasVisitorCounter = Boolean(KNOWN_COURSE_VISITORS[course.slug] || courseVisitorsCache[course.slug]);
  const isPublished = course.status === "published" && hasVisitorCounter;
  const courseUrl = `${BASE}/${course.slug}/`;
  const card = document.createElement("article");
  card.className = `course-card reveal ${meta.className}${isPlanned ? " is-planned" : ""}`;

  card.dataset.slug = course.slug;
  const shareTitle = currentLang === "fa" ? course.title : course.en;
  const titleHtml = currentLang === "fa"
    ? `<p class="course-title">${formatTitle(course.title)}</p><p class="course-en" dir="ltr">${escapeHtml(course.en)}</p>`
    : `<p class="course-title">${escapeHtml(course.en)}</p>`;
  const statusLabel = dict.statusLabels[course.status] || meta.label;
  const isMultiLang = Array.isArray(course.contentLanguages) && course.contentLanguages.length > 1;
  const langNote = isMultiLang
    ? (dict.courseContentLangNoteMulti || dict.courseContentLangNote)
    : dict.courseContentLangNote;
  const localizedDesc = currentLang === "de"
    ? (COURSE_DESC_DE[course.slug] || COURSE_DESC_EN[course.slug] || course.desc)
    : currentLang === "en"
    ? (COURSE_DESC_EN[course.slug] || course.desc)
    : course.desc;
  const displayDesc = currentLang === "fa" ? formatDesc(course.desc) : escapeHtml(localizedDesc);

  const cachedCount = courseVisitorsCache[course.slug] ?? KNOWN_COURSE_VISITORS[course.slug]?.baseCount;
  const visitorCountText = typeof cachedCount === "number"
    ? Math.round(cachedCount).toLocaleString("en-US")
    : "…";

  const visitorsBadgeHtml = isPublished
    ? `<span class="course-visitors" data-course-visitors="${course.slug}" title="${escapeHtml(dict.courseVisitorsTooltip || dict.visitorsTitle || 'بازدید')}" aria-label="${escapeHtml(dict.courseVisitorsTooltip || dict.visitorsTitle || 'بازدید')}: ${visitorCountText}">
        <svg class="course-visitors-icon" viewBox="0 0 16 16" width="13" height="13" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false">
          <path d="M1.5 8s2.5-4.5 6.5-4.5 6.5 4.5 6.5 4.5-2.5 4.5-6.5 4.5-6.5-4.5z"/>
          <circle cx="8" cy="8" r="2.2"/>
        </svg>
        <span class="course-visitors-count">${visitorCountText}</span>
      </span>`
    : "";

  card.innerHTML = `
    <div class="course-top">
      <a class="course-logo" href="${isPlanned ? "#courses" : courseUrl}"${isPlanned ? "" : ' target="_blank" rel="noopener noreferrer"'} aria-label="${escapeHtml(shareTitle)}">
        <img src="assets/logos/${course.logo}.svg" alt="" width="48" height="48" loading="lazy" />
      </a>
      <div class="course-heading">
        <a class="course-title-link" href="${isPlanned ? "#courses" : courseUrl}"${isPlanned ? "" : ' target="_blank" rel="noopener noreferrer"'}>
          ${titleHtml}
        </a>
        <button class="course-share" type="button" data-course-url="${courseUrl}" data-course-title="${escapeHtml(shareTitle)}" aria-label="${dict.shareLabel} ${escapeHtml(shareTitle)}">
          <svg class="course-share-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false">
            <circle cx="18" cy="5" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="6" cy="12" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <circle cx="18" cy="19" r="2.6" fill="none" stroke="currentColor" stroke-width="1.8"/>
            <path d="M8.3 10.8l7.4-4.2M8.3 13.2l7.4 4.2" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round"/>
          </svg>
        </button>
      </div>
    </div>
    <p class="course-desc">${displayDesc}</p>
    <p class="course-lang-note${isMultiLang ? " is-multilang" : ""}">${escapeHtml(langNote)}</p>
    <div class="course-foot">
      <div class="course-foot-meta">
        <a class="course-tag ${meta.className}" href="${isPlanned ? "#courses" : courseUrl}"${isPlanned ? "" : ' target="_blank" rel="noopener noreferrer"'}>${escapeHtml(statusLabel)}</a>
        ${visitorsBadgeHtml}
      </div>
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
  const enDesc = (typeof COURSE_DESC_EN !== "undefined" && COURSE_DESC_EN[course.slug]) || "";
  const deDesc = (typeof COURSE_DESC_DE !== "undefined" && COURSE_DESC_DE[course.slug]) || "";
  return [course.title, course.en, course.desc, enDesc, deDesc, course.slug].join(" ").toLowerCase();
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
      const slug = card.dataset.slug || "";
      const haystack = `${title} ${en} ${desc} ${slug}`.toLowerCase();
      const matches = !query || haystack.includes(query);
      const show = matches;
      card.hidden = !show;
      card.style.display = show ? "" : "none";
      if (show) visibleInSection += 1;
    });

    const categoryMatches =
      courseFilters.filter === "all" || section.dataset.category === courseFilters.filter;
    const showSection = categoryMatches && visibleInSection > 0;
    section.hidden = !showSection;
    section.style.display = showSection ? "" : "none";
    if (showSection) visibleTotal += visibleInSection;

    const count = section.querySelector(".category-head > p:last-child");
    if (count) {
      const dict = I18N[currentLang] || I18N.fa;
      if (currentLang === "fa") {
        count.textContent =
          visibleInSection === 1 ? "۱ دوره" : `${String(visibleInSection).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[Number(d)])} دوره`;
      } else {
        count.textContent = `${visibleInSection} ${dict.courseUnit}`;
      }
    }

    if (showSection) forceReveal(section);
  });

  empty.hidden = visibleTotal > 0;
  empty.style.display = visibleTotal > 0 ? "none" : "";
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

  const dict = I18N[currentLang] || I18N.fa;

  filterBar.replaceChildren();
  FILTERS.forEach((f, index) => {
    const btn = document.createElement("button");
    const isActive = courseFilters.filter === f.id;
    btn.className = `filter-chip${isActive ? " is-active" : ""}`;
    btn.type = "button";
    btn.setAttribute("role", "tab");
    btn.setAttribute("aria-selected", isActive ? "true" : "false");
    btn.dataset.filter = f.id;
    btn.textContent = dict.filterLabels[f.id] || f.label;
    btn.addEventListener("click", () => {
      courseFilters.filter = f.id;
      filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
        const active = chip === btn;
        chip.classList.toggle("is-active", active);
        chip.setAttribute("aria-selected", active ? "true" : "false");
      });
      applyCourseFilters();
    });
    filterBar.appendChild(btn);
  });

  root.replaceChildren();
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const section = document.createElement("section");
    section.className = "category";
    section.dataset.category = key;
    section.id = `cat-${key}`;

    const title = dict.categoryTitles[key] || cat.title;
    const blurb = dict.categoryBlurbs[key] || cat.blurb;

    const head = document.createElement("div");
    head.className = "category-head reveal";
    head.innerHTML = `
      <div>
        <h3>${escapeHtml(title)}</h3>
        <p>${escapeHtml(blurb)}</p>
      </div>
      <p>${cat.courses.length} ${dict.courseUnit}</p>
    `;

    const grid = document.createElement("div");
    grid.className = "course-grid";
    cat.courses.forEach((course) => grid.appendChild(createCourseCard(course)));

    section.appendChild(head);
    section.appendChild(grid);
    root.appendChild(section);
  });

  applyCourseFilters();
  setupCourseVisitors();
}

/**
 * Setup category filter chip clicks.
 *
 * @returns {void}
 */
function setupFilters() {
  const filterBar = document.querySelector(".filter-bar");
  if (!filterBar) return;

  filterBar.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof Element)) return;
    const btn = target.closest(".filter-chip");
    if (!btn) return;

    const filter = btn.dataset.filter;
    if (!filter) return;

    courseFilters.filter = filter;

    filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === btn;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-selected", active ? "true" : "false");
    });

    applyCourseFilters();
  });
}

/**
 * Setup real-time course search input.
 *
 * @returns {void}
 */
function setupSearch() {
  const searchInput = document.getElementById("course-search");
  if (!searchInput) return;

  const onSearch = () => {
    courseFilters.query = searchInput.value.trim().toLowerCase();
    applyCourseFilters();
  };

  searchInput.addEventListener("input", onSearch);
  searchInput.addEventListener("search", onSearch);
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

  const closeMenu = () => {
    links.classList.remove("is-open");
    burger.classList.remove("is-open");
    burger.setAttribute("aria-expanded", "false");
  };

  burger.addEventListener("click", () => {
    const open = links.classList.toggle("is-open");
    burger.classList.toggle("is-open", open);
    burger.setAttribute("aria-expanded", open ? "true" : "false");
  });

  links.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", closeMenu);
  });

  document.addEventListener("click", (event) => {
    if (!links.classList.contains("is-open")) return;
    const target = event.target;
    if (target instanceof Element && !burger.contains(target) && !links.contains(target)) {
      closeMenu();
    }
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && links.classList.contains("is-open")) {
      closeMenu();
    }
  });
}

/**
 * Count courses in hero stats.
 *
 * @returns {void}
 */

/**
 * Switch the application language (fa, en, or de).
 *
 * @param {"fa" | "en" | "de"} lang
 * @returns {void}
 */
function setLanguage(lang) {
  if (!I18N[lang]) return;
  currentLang = lang;
  const dict = I18N[lang];

  document.documentElement.lang = lang;
  document.documentElement.dir = dict.dir;
  document.title = dict.brandTitle;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", dict.brandDesc);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (key && dict[key] !== undefined) {
      el.textContent = dict[key];
    }
  });

  document.querySelectorAll("[data-i18n-html]").forEach((el) => {
    const key = el.getAttribute("data-i18n-html");
    if (key && dict[key] !== undefined) {
      el.innerHTML = dict[key];
    }
  });

  const searchInput = document.getElementById("course-search");
  if (searchInput) {
    searchInput.setAttribute("placeholder", dict.searchPlaceholder);
    searchInput.setAttribute("aria-label", dict.searchAria);
  }

  const statVisitors = document.getElementById("stat-visitors");
  if (statVisitors) {
    statVisitors.title = dict.visitorsTitle || "Visitors";
  }

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.classList.toggle("is-active", btn.dataset.lang === lang);
  });

  try {
    localStorage.setItem("aghili-labs:lang", lang);
    const url = new URL(window.location.href);
    if (lang === "fa") {
      url.searchParams.delete("lang");
    } else {
      url.searchParams.set("lang", lang);
    }
    window.history.replaceState({}, "", url.toString());
  } catch {}

  renderCourses();
  setupStats();

  // Donation channels:
  // Persian (fa): Show both CoffeeBede & Buy Me a Coffee with switcher
  // Non-Persian (en, de): Only show Buy Me a Coffee (hide CoffeeBede & switcher)
  const donateSwitcher = document.querySelector(".donate-switcher");
  const domesticPanel = document.getElementById("donate-panel-domestic");
  const internationalPanel = document.getElementById("donate-panel-international");
  const footerCoffeeBede = document.getElementById("footer-link-coffeebede");

  if (lang === "fa") {
    if (donateSwitcher) donateSwitcher.style.display = "";
    if (footerCoffeeBede) footerCoffeeBede.style.display = "";
    const activeBtn = document.querySelector(".donate-tab-btn.is-active") || document.querySelector('.donate-tab-btn[data-donate-target="domestic"]');
    const target = activeBtn?.dataset.donateTarget || "domestic";
    if (domesticPanel) {
      domesticPanel.classList.toggle("is-active", target === "domestic");
      domesticPanel.hidden = target !== "domestic";
    }
    if (internationalPanel) {
      internationalPanel.classList.toggle("is-active", target === "international");
      internationalPanel.hidden = target !== "international";
    }
  } else {
    if (donateSwitcher) donateSwitcher.style.display = "none";
    if (footerCoffeeBede) footerCoffeeBede.style.display = "none";
    if (domesticPanel) {
      domesticPanel.classList.remove("is-active");
      domesticPanel.hidden = true;
    }
    if (internationalPanel) {
      internationalPanel.classList.add("is-active");
      internationalPanel.hidden = false;
    }
  }
}

/**
 * Initialize language settings from URL param or localStorage.
 *
 * @returns {void}
 */
function setupLanguage() {
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      const targetLang = btn.dataset.lang;
      if (targetLang && targetLang !== currentLang) {
        setLanguage(targetLang);
      }
    });
  });

  let detected = "fa";
  try {
    const params = new URLSearchParams(window.location.search);
    const qLang = params.get("lang");
    if (qLang && (qLang === "en" || qLang === "de" || qLang === "fa")) {
      detected = qLang;
    } else {
      const stored = localStorage.getItem("aghili-labs:lang");
      if (stored && (stored === "en" || stored === "de" || stored === "fa")) {
        detected = stored;
      }
    }
  } catch {}

  setLanguage(detected);
}

function toPersianDigits(val) {
  const farsi = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
  return String(val).replace(/\d/g, (d) => farsi[Number(d)]);
}

let currentVisitorsCount = 214;

function updateVisitorsDisplay() {
  const el = document.getElementById("stat-visitors");
  if (!el) return;
  const count = Math.max(214, Math.round(currentVisitorsCount));
  el.textContent = currentLang === "fa" ? toPersianDigits(count) : count.toLocaleString("en-US");
  const dict = I18N[currentLang] || I18N.fa;
  el.title = dict.visitorsTitle || "Visitors";
}

function setupStats() {
  const coursesEl = document.getElementById("stat-courses");
  const catsEl = document.getElementById("stat-categories");
  const freeEl = document.getElementById("stat-free");

  const totalCourses = Object.values(CATEGORIES).flatMap((c) => c.courses).length || 88;
  const totalCats = Object.keys(CATEGORIES).length || 9;

  if (coursesEl) {
    coursesEl.textContent = currentLang === "fa" ? toPersianDigits(totalCourses) : String(totalCourses);
  }
  if (catsEl) {
    catsEl.textContent = currentLang === "fa" ? toPersianDigits(totalCats) : String(totalCats);
  }
  if (freeEl) {
    freeEl.textContent = currentLang === "fa" ? "۱۰۰٪" : "100%";
  }

  updateVisitorsDisplay();
}

/**
 * Load and increment the page visitor counter.
 * Uses visitorbadge.io (CORS-enabled SVG with count in the title).
 *
 * @returns {Promise<void>}
 */
/**
 * Count unique visitors (once per browser) via visitorbadge.io.
 * The badge endpoint increments on every request, so we only call it
 * on a browser's first visit; return visits reuse the cached number.
 *
 * @returns {Promise<void>}
 */
async function setupVisitors() {
  const el = document.getElementById("stat-visitors");
  if (!el) return;

  const STORAGE_KEY = "aghili-labs:visitors:v3";
  const HISTORICAL_OFFSET = 50; // Total visits recorded prior to renaming
  const MINIMUM_BASELINE = 214;  // Synchronized floor guaranteeing consistency across all clients

  // Aggressively purge any stale or corrupt caches from earlier iterations
  try {
    localStorage.removeItem("learn-with-ali:unique-visitors");
    localStorage.removeItem("aghili-labs:unique-visitors");
    localStorage.removeItem("aghili-labs:visitors:v2");
    const existing = localStorage.getItem(STORAGE_KEY);
    if (existing) {
      const parsed = JSON.parse(existing);
      if (!parsed || typeof parsed.count !== "number" || parsed.count < MINIMUM_BASELINE) {
        localStorage.removeItem(STORAGE_KEY);
      }
    }
  } catch {}

  const paint = (value) => {
    currentVisitorsCount = Math.max(MINIMUM_BASELINE, Math.round(value));
    updateVisitorsDisplay();
  };

  /** @type {{ count: number, at: number } | null} */
  let cached = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) cached = JSON.parse(raw);
  } catch {
    cached = null;
  }

  // If valid cache above baseline exists and is fresh (< 30m), paint immediately
  if (cached && typeof cached.count === "number" && cached.count >= MINIMUM_BASELINE) {
    paint(cached.count);
    if (Date.now() - (cached.at || 0) < 1800_000) {
      return;
    }
  }

  /**
   * Parse total visitor count from SVG badge markup.
   * Handles both combined ("VISITORS: daily / total") and simple ("VISITORS: total").
   */
  const parseCount = (svg) => {
    // 1. Look for combined format: always take the second number (total)
    const combinedMatch = svg.match(/(?:VISITORS:|>)\s*[\d.,]+[KMB]?\s*\/\s*([\d.,]+[KMB]?)/i);
    let raw = combinedMatch ? combinedMatch[1] : "";

    // 2. Look for simple label "VISITORS: <number>"
    if (!raw) {
      const simpleMatch = svg.match(/VISITORS:\s*([\d.,]+[KMB]?)/i);
      raw = simpleMatch ? simpleMatch[1] : "";
    }

    // 3. Fallback to extracting the trailing text node containing numeric data
    if (!raw) {
      const textMatches = Array.from(svg.matchAll(/>\s*([0-9.,]+[KMB]?)\s*<\/text>/gi));
      if (textMatches.length > 0) {
        raw = textMatches[textMatches.length - 1][1];
      }
    }

    raw = (raw || "").replace(/,/g, "").trim();
    if (!raw) return Number.NaN;

    const suffix = raw.slice(-1).toUpperCase();
    const scale = { K: 1e3, M: 1e6, B: 1e9 }[suffix] || 1;
    const numeric = scale === 1 ? Number(raw) : Number.parseFloat(raw) * scale;
    return Number.isFinite(numeric) ? numeric : Number.NaN;
  };

  const endpoints = [
    "https://api.visitorbadge.io/api/visitors?path=aghili-labs",
    "https://api.visitorbadge.io/api/combined?path=aghili-labs",
  ];

  for (const url of endpoints) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(url, {
        cache: "no-store",
        signal: controller.signal,
        headers: {
          "Accept-Language": "en-US,en;q=0.9",
          "Accept": "image/svg+xml, */*",
        },
      });
      clearTimeout(timer);

      if (res.ok) {
        const text = await res.text();
        const rawCount = parseCount(text);
        if (Number.isFinite(rawCount) && rawCount > 0) {
          // Total sum = historical visits from previous repo name + live visits on aghili-labs
          const totalCount = Math.max(MINIMUM_BASELINE, HISTORICAL_OFFSET + rawCount);
          paint(totalCount);
          try {
            localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: totalCount, at: Date.now() }));
          } catch {}
          return;
        }
      }
    } catch {
      // Ignore network errors/adblocker blocks and continue
    }
  }

  // Network failed or blocked by client: ensure counter never drops below baseline sum
  const fallbackCount = cached && cached.count >= MINIMUM_BASELINE ? cached.count + 1 : MINIMUM_BASELINE;
  paint(fallbackCount);
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ count: fallbackCount, at: Date.now() }));
  } catch {}
}

const REPO_VISITOR_PATHS = [
  "src/ui/visitor-counter.ts",
  "js/visitor-counter.js",
  "assets/js/visitor-counter.js",
  "js/visitor.js",
];

/**
 * Parse visitor count from badge SVG.
 * Handles both combined ("VISITORS: daily / total") and simple ("VISITORS: total").
 *
 * @param {string} svg
 * @returns {number | null}
 */
function parseCourseVisitorSvg(svg) {
  if (!svg || typeof svg !== "string") return null;

  // 1. Look for combined format: always take the second number (total)
  const combinedMatch = svg.match(/(?:VISITORS:|>)\s*[\d.,]+[KMB]?\s*\/\s*([\d.,]+[KMB]?)/i);
  let raw = combinedMatch ? combinedMatch[1] : "";

  // 2. Look for simple label "VISITORS: <number>"
  if (!raw) {
    const simpleMatch = svg.match(/VISITORS:\s*([\d.,]+[KMB]?)/i);
    raw = simpleMatch ? simpleMatch[1] : "";
  }

  // 3. Fallback to extracting the trailing text node containing numeric data
  if (!raw) {
    const textMatches = Array.from(svg.matchAll(/>\s*([0-9.,]+[KMB]?)\s*<\/text>/gi));
    if (textMatches.length > 0) {
      raw = textMatches[textMatches.length - 1][1];
    }
  }

  raw = (raw || "").replace(/,/g, "").trim();
  if (!raw) return null;

  const suffix = raw.slice(-1).toUpperCase();
  const scale = { K: 1e3, M: 1e6, B: 1e9 }[suffix] || 1;
  const numPart = scale > 1 ? raw.slice(0, -1) : raw;
  const numeric = Number.parseFloat(numPart) * scale;
  return Number.isFinite(numeric) && numeric >= 0 ? Math.round(numeric) : null;
}

/**
 * Dynamically extract visitor counter configuration from the course's GitHub repository.
 * Inspects official repo source files (e.g. src/ui/visitor-counter.ts, js/visitor-counter.js).
 *
 * @param {string} slug
 * @returns {Promise<{ countApi?: string, badgeUrl?: string, baseCount?: number } | null>}
 */
async function fetchRepoVisitorConfig(slug) {
  for (const filePath of REPO_VISITOR_PATHS) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(`https://raw.githubusercontent.com/alisadeghiaghili/${slug}/main/${filePath}`, {
        signal: controller.signal,
      });
      clearTimeout(timer);
      if (res.ok) {
        const text = await res.text();
        const badgeMatch = text.match(/BADGE_URL\s*=\s*['"]([^'"]+)['"]/);
        const countKeyMatch = text.match(/COUNT_KEY\s*=\s*['"]([^'"]+)['"]/);
        const countApiBaseMatch = text.match(/COUNT_API_BASE\s*=\s*['"]([^'"]+)['"]/);
        const baseCountMatch = text.match(/(?:BASE_COUNT|BASELINE_FALLBACK)\s*=\s*(\d+)/);

        let countApi = undefined;
        if (countKeyMatch) {
          const apiBase = countApiBaseMatch ? countApiBaseMatch[1] : "https://countapi.mileshilliard.com/api/v1";
          countApi = `${apiBase}/get/${countKeyMatch[1]}`;
        }

        return {
          badgeUrl: badgeMatch ? badgeMatch[1] : undefined,
          countApi,
          baseCount: baseCountMatch ? Number.parseInt(baseCountMatch[1], 10) : undefined,
        };
      }
    } catch {}
  }
  return null;
}

/**
 * Fetch and resolve the visitor count for a given course slug.
 * Reads config directly from the course repository with seamless fallback.
 *
 * @param {string} slug
 * @returns {Promise<number | null>}
 */
async function fetchCourseVisitorCount(slug) {
  // 1. Discover configuration dynamically from repo files
  let config = await fetchRepoVisitorConfig(slug);

  // 2. Fallback to known registry or default repo badge path
  if (!config) {
    config = KNOWN_COURSE_VISITORS[slug] || {
      badgeUrl: `https://api.visitorbadge.io/api/combined?path=${slug}`,
    };
  }

  // 3. Try primary CountAPI if available (JSON, high speed, CORS-enabled)
  if (config.countApi) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(config.countApi, { signal: controller.signal });
      clearTimeout(timer);
      if (res.ok) {
        const data = await res.json();
        if (typeof data.value === "number" && Number.isFinite(data.value) && data.value > 0) {
          return config.baseCount ? Math.max(config.baseCount, data.value) : data.value;
        }
      }
    } catch {}
  }

  // 4. Try SVG Badge API (visitorbadge.io)
  if (config.badgeUrl) {
    try {
      const controller = new AbortController();
      const timer = setTimeout(() => controller.abort(), 3500);
      const res = await fetch(config.badgeUrl, {
        signal: controller.signal,
        headers: {
          Accept: "image/svg+xml, */*",
          "Accept-Language": "en-US,en;q=0.9",
        },
      });
      clearTimeout(timer);
      if (res.ok) {
        const svg = await res.text();
        const parsed = parseCourseVisitorSvg(svg);
        if (parsed !== null && parsed > 0) {
          return config.baseCount ? Math.max(config.baseCount, parsed) : parsed;
        }
      }
    } catch {}
  }

  return config.baseCount ?? null;
}

/**
 * Fetch and update visitor counts for all completed/published courses.
 *
 * @returns {Promise<void>}
 */
async function setupCourseVisitors() {
  const elements = Array.from(document.querySelectorAll("[data-course-visitors]"));
  if (elements.length === 0) return;

  /** @type {Record<string, { count: number, at: number }>} */
  let storage = {};
  try {
    const raw = localStorage.getItem(COURSE_VISITORS_STORAGE_KEY);
    if (raw) storage = JSON.parse(raw) || {};
  } catch {}

  const now = Date.now();
  const CACHE_TTL = 30 * 60 * 1000; // 30 minutes

  const slugs = Array.from(new Set(elements.map((el) => el.getAttribute("data-course-visitors")).filter(Boolean)));

  await Promise.allSettled(
    slugs.map(async (slug) => {
      const cached = storage[slug];
      if (cached && typeof cached.count === "number" && Number.isFinite(cached.count) && cached.count > 0) {
        courseVisitorsCache[slug] = cached.count;
        updateCourseVisitorsUI(slug, cached.count);
        if (now - (cached.at || 0) < CACHE_TTL) {
          return;
        }
      }

      const count = await fetchCourseVisitorCount(slug);
      if (count !== null && Number.isFinite(count) && count > 0) {
        courseVisitorsCache[slug] = count;
        storage[slug] = { count, at: Date.now() };
        try {
          localStorage.setItem(COURSE_VISITORS_STORAGE_KEY, JSON.stringify(storage));
        } catch {}
        updateCourseVisitorsUI(slug, count);
      }
    })
  );
}

/**
 * Update the DOM elements displaying visitor count for a course slug.
 *
 * @param {string} slug
 * @param {number} count
 * @returns {void}
 */
function updateCourseVisitorsUI(slug, count) {
  const dict = I18N[currentLang] || I18N.fa;
  const formatted = Math.round(count).toLocaleString("en-US");
  const targets = document.querySelectorAll(`[data-course-visitors="${slug}"]`);
  targets.forEach((el) => {
    const countEl = el.querySelector(".course-visitors-count");
    if (countEl) {
      countEl.textContent = formatted;
    }
    el.setAttribute("title", dict.courseVisitorsTooltip || dict.visitorsTitle || "بازدید");
    el.setAttribute("aria-label", `${dict.courseVisitorsTooltip || "بازدید"}: ${formatted}`);
  });
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

/**
 * Setup donation method switcher (CoffeeBede vs Buy Me a Coffee).
 *
 * @returns {void}
 */
function setupDonateTabs() {
  const switcher = document.querySelector(".donate-switcher");
  if (!switcher) return;

  switcher.addEventListener("click", (e) => {
    const btn = e.target.closest(".donate-tab-btn");
    if (!btn) return;
    const target = btn.dataset.donateTarget;
    if (!target) return;

    switcher.querySelectorAll(".donate-tab-btn").forEach((b) => {
      const active = b === btn;
      b.classList.toggle("is-active", active);
      b.setAttribute("aria-selected", active ? "true" : "false");
    });

    document.querySelectorAll(".donate-panel").forEach((panel) => {
      const match = panel.id === `donate-panel-${target}`;
      panel.classList.toggle("is-active", match);
      panel.hidden = !match;
    });
  });
}

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

    const dict = I18N[currentLang] || I18N.fa;
    btn.classList.add("is-copied");
    btn.setAttribute("aria-label", `${dict.copiedToast} (${title})`);
    showToast(dict.copiedToast);
    window.setTimeout(() => {
      btn.classList.remove("is-copied");
      btn.setAttribute("aria-label", `${dict.shareLabel} ${title}`);
    }, 1600);
  });
}

function init() {
  setupLanguage();
  renderCourses();
  setupFilters();
  setupSearch();
  setupNav();
  setupStats();
  setupVisitors();
  setupCourseVisitors();
  setupShare();
  setupDonateTabs();
  setupReveal();
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
