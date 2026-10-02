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
        desc: "زبان اول علم داده، هوش مصنوعی و خودکارسازی مدرن — مدل ذهنی اشیاء، مدیریت حافظه و حل چالش‌های الگوریتمی گام‌به‌گام.",
        logo: "python",
      },
      {
        slug: "learn-r",
        title: "زبان R",
        en: "R",
        desc: "محیط تخصصی محاسبات آماری و مصورسازی پیشرفته — بردارسازی، تحلیل داده با tidyverse و شبیه‌سازی‌های آماری.",
        logo: "r",
      },
      {
        slug: "learn-cpp",
        title: "C++",
        en: "C++",
        desc: "برنامه‌نویسی سیستم و محاسبات فوق‌سریع — مدیریت صریح حافظه، اشاره‌گرها، الگوهای شیءگرا و رفتار سطح ماشین.",
        logo: "cpp",
      },
      {
        slug: "learn-rust",
        title: "راست",
        en: "Rust",
        desc: "سیستم‌های مدرن، امن و هم‌روند بدون نیاز به Garbage Collector — درک شهودی مالکیت (Ownership)، Borrowing و مدیریت همروندی.",
        logo: "rust",
      },
      {
        slug: "learn-go",
        title: "گو",
        en: "Go",
        desc: "زبان زیرساخت‌های ابری و سرویس‌های مقیاس‌پذیر توزیع‌شده — همروندی با Goroutine و کانال‌ها، معماری میکروسرویس و ابزارهای داده.",
        logo: "go",
        soon: true,
      },
      {
        slug: "learn-julia",
        title: "جولیا",
        en: "Julia",
        desc: "محاسبات علمی و عددی با سرعت C و سهولت پایتون — حل مسئله دو زبانه، چندریختی پویا (Multiple Dispatch) و جبر خطی پیشرفته.",
        logo: "julia",
        soon: true,
      },
      {
        slug: "learn-java",
        title: "جاوا",
        en: "Java",
        desc: "ستون فقرات پلتفرم‌های کلان‌داده و سیستم‌های سازمانی — درک عمیق JVM، مدیریت حافظه، همروندی و توسعه پایدار.",
        logo: "java",
        soon: true,
      },
      {
        slug: "learn-scala",
        title: "اسکالا",
        en: "Scala",
        desc: "زبان رسمی پردازش کلان‌داده در Apache Spark — ترکیب پارادایم‌های تابعی و شیءگرا برای پایپ‌لاین‌های فوق‌مقیاس‌پذیر.",
        logo: "scala",
        soon: true,
      },
      {
        slug: "learn-functional-programming",
        title: "برنامه‌نویسی تابعی",
        en: "Functional Programming",
        desc: "پارادایم تفکر تابعی در مهندسی نرم‌افزار مدرن — تغییرناپذیری (Immutability)، توابع خالص، ترکیب‌پذیری، Monadها و پردازش بدون اثر جانبی.",
        logo: "functional",
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
        desc: "اتوماسیون شل در سرورها و پایپ‌لاین‌های DevOps — کار با جریان‌های I/O، پایپ‌ها، پردازش متن با sed/awk و اسکریپت‌نویسی حرفه‌ای.",
        logo: "bash",
      },
      {
        slug: "learn-powershell",
        title: "پاورشل",
        en: "PowerShell",
        desc: "شل شیءمحور و خودکارسازی سیستم‌های مدرن — خط‌لوله اشیاء، اسکریپت‌نویسی پیشرفته و مدیریت زیرساخت‌های ویندوز و لینوکس.",
        logo: "powershell",
      },
      {
        slug: "learn-cmd",
        title: "CMD ویندوز",
        en: "Windows CMD",
        desc: "خط فرمان کلاسیک ویندوز و اسکریپت‌های دسته‌ای (Batch) — دستورات پایه فایل‌سیستم، متغیرهای محیطی و خودکارسازی سبک سیستم.",
        logo: "cmd",
      },
      {
        slug: "learn-linux",
        title: "لینوکس",
        en: "Linux / Ubuntu",
        desc: "سیستم‌عامل پایه سرورها، ابرها و پلتفرم‌های داده — معماری لینوکس، مدیریت فرآیندها، مجوزهای دسترسی، فایل‌سیستم و مانیتورینگ زنده.",
        logo: "linux",
      },
      {
        slug: "learn-git",
        title: "گیت",
        en: "Git",
        desc: "کنترل نسخه و همکاری تیمی در مقیاس حرفه‌ای — گراف DAG، انشعاب‌ها، بازآرایی تاریخچه (Rebase)، حل تعارض و بازیابی تغییرات.",
        logo: "git",
      },
      {
        slug: "learn-networking",
        title: "شبکه",
        en: "Networking",
        desc: "مبانی و ابزارهای شبکه برای مهندسان داده و دواپس — پروتکل‌های TCP/IP، مدل لایه‌ای، DNS، عیب‌یابی ارتباطات و امنیت شبکه.",
        logo: "networking",
      },
      {
        slug: "learn-cryptography",
        title: "رمزنگاری کاربردی",
        en: "Applied Cryptography",
        desc: "رمزنگاری کاربردی برای امنیت داده و زیرساخت — توابع درهم‌سازی (Hash)، رمزنگاری متقارن و کلید عمومی، امضای دیجیتال و گواهی‌ها.",
        logo: "cryptography",
        soon: true,
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
        desc: "طراحی مهندسی و معماری نرم‌افزار تمیز — اصول SOLID، الگوهای کلاسیک Gang of Four، معماری لایه‌ای و بازآرایی عملی کد.",
        logo: "softwaredesign",
        soon: true,
      },
      {
        slug: "learn-testing",
        title: "تست‌نویسی و کیفیت نرم‌افزار",
        en: "Testing & Quality Engineering",
        desc: "تضمین کیفیت نرم‌افزار و پایپ‌لاین‌های داده — توسعه آزمون‌محور (TDD)، تست‌های واحد و یکپارچه‌سازی، فیکسچرها و موک‌ها با pytest، و اعتبارسنجی کیفیت داده.",
        logo: "testing",
        soon: true,
      },
      {
        slug: "learn-technical-docs",
        title: "مستندسازی فنی و معماری",
        en: "Technical Docs & ADRs",
        desc: "مستندسازی استاندارد پروژه‌های نرم‌افزاری و داده — ثبت تصمیمات معماری (ADRs)، تدوین RFCها، مشخصات فنی APIها، قراردادهای داده و مدیریت دانش مهندسی.",
        logo: "technicaldocs",
        soon: true,
      },
      {
        slug: "learn-ddd",
        title: "طراحی دامنه‌محور (DDD)",
        en: "Domain-Driven Design in Data & AI",
        desc: "مدیریت پیچیدگی در سیستم‌های سازمانی و داده — زبان فراگیر (Ubiquitous Language)، مرزهای مشخص (Bounded Contexts) و پیاده‌سازی معماری مش داده (Data Mesh).",
        logo: "ddd",
        soon: true,
      },
      {
        slug: "learn-bpmn",
        title: "مدل‌سازی فرآیندها با BPMN",
        en: "Business Process Modeling (BPMN)",
        desc: "استاندارد جهانی مدل‌سازی فرآیندهای کسب‌وکار (BPMN 2.0) — طراحی فرآیندهای سازمانی، استخرها، گیت‌وی‌ها و اتصال مدل به موتورهای اتوماسیون صنعتی.",
        logo: "bpmn",
        soon: true,
      },
      {
        slug: "learn-scientific-writing",
        title: "نگارش علمی و پژوهشی",
        en: "Scientific Writing & Research",
        desc: "استانداردهای نگارش مقالات علمی و متون پژوهشی — ساختار IMRAD، طراحی متدولوژی آزمایش‌ها، تکرارپذیری تجربی و فرآیند داوری همتا (Peer Review).",
        logo: "scientificwriting",
        soon: true,
      },
      {
        slug: "learn-tech-interviews",
        title: "آمادگی مصاحبه‌های فنی",
        en: "Technical Interviewing for Data & Systems",
        desc: "تسلط بر فرآیند مصاحبه‌های مهندسی داده و سیستم — طراحی سیستم‌های کلان‌داده (System Design)، لایوکدینگ الگوریتم و SQL، و دفاع از تصمیمات معماری.",
        logo: "techinterviews",
        soon: true,
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
        desc: "کانتینرسازی و استقرار ایزوله نرم‌افزار — لایه‌بندی ایمیج‌ها، مدیریت حافظه و شبکه کانتینرها، Dockerfile و محیط‌های چندکانتینری.",
        logo: "docker",
      },
      {
        slug: "learn-aws",
        title: "AWS",
        en: "Amazon Web Services",
        desc: "خدمات ابری آمازون برای داده و زیرساخت — ذخیره‌سازی S3، پردازش EC2/Lambda، مدیریت دسترسی IAM و الگوهای معماری داده در کلود.",
        logo: "aws",
      },
      {
        slug: "learn-azure",
        title: "Azure",
        en: "Microsoft Azure",
        desc: "پلتفرم ابری مایکروسافت در محیط‌های سازمانی — خدمات داده Azure، دریاچه‌های داده ADLS، پایپ‌لاین‌ها و مدیریت منابع سازمانی.",
        logo: "azure",
      },
      {
        slug: "learn-databricks",
        title: "دیتابریکس",
        en: "Databricks",
        desc: "معماری مدرن Lakehouse بر پایه Apache Spark — یکپارچه‌سازی انبار داده و دریاچه داده، بهینه‌سازی کوئری‌ها و کار با Delta Lake.",
        logo: "databricks",
        soon: true,
      },
      {
        slug: "learn-snowflake",
        title: "اسنوفلیک",
        en: "Snowflake",
        desc: "انبار داده تمام‌ابری با جداسازی کامل پردازش از ذخیره‌سازی — کوئری‌نویسی مقیاس‌پذیر SQL، قابلیت Time Travel و معماری Zero-Copy Clone.",
        logo: "snowflake",
      },
      {
        slug: "learn-grafana",
        title: "گرافانا",
        en: "Grafana",
        desc: "مشاهده‌پذیری (Observability) و پایش سلامت سیستم‌ها — طراحی داشبوردهای زنده، اتصال به منابع مختلف متریک و تنظیم هشدارهای هوشمند.",
        logo: "grafana",
      },
      {
        slug: "learn-pkgm",
        title: "مدیریت بسته",
        en: "pip · conda · uv",
        desc: "مدیریت اصولی بسته‌ها و محیط‌های پایتون — مقایسه فنی pip، conda و uv، حل تعارض وابستگی‌ها و ایجاد بیلد‌های تکرارپذیر.",
        logo: "pkgm",
      },
      {
        slug: "learn-kibana",
        title: "کیبانا",
        en: "Kibana",
        desc: "بصری‌سازی لاگ‌ها و ردیابی رویدادها در استک Elastic — جستجوی پیشرفته در Discover، داشبوردهای تحلیلی و مانیتورینگ توزیع‌شده.",
        logo: "kibana",
        soon: true,
      },
      {
        slug: "learn-logstash",
        title: "لاگ‌استش",
        en: "Logstash",
        desc: "پایپ‌لاین بلادرنگ جمع‌آوری و تبدیل رویدادها — دریافت لاگ‌ها از منابع ناهمگون، فیلتر با الگوهای Grok و ارسال ساختاریافته به الستیک.",
        logo: "logstash",
        soon: true,
      },
      {
        slug: "learn-splunk",
        title: "اسپلانک",
        en: "Splunk",
        desc: "پلتفرم پیشرو لاگینگ سازمانی و مدیریت وقایع امنیتی (SIEM) — تحلیل حجم بالای داده‌های ماشینی، گزارش‌گیری و تسلط به زبان SPL.",
        logo: "splunk",
        soon: true,
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
        desc: "زبان جهانی پایگاه‌های داده رابطه‌ای — کوئری‌های پیچیده، توابع پنجره‌ای (Window Functions)، ایندکس‌گذاری و بهینه‌سازی در سندباکس زنده.",
        logo: "sql",
      },
      {
        slug: "learn-dax",
        title: "DAX",
        en: "DAX",
        desc: "موتور محاسباتی و مدل‌سازی تحلیلی در Power BI — درک عمیق زمینه‌های ارزیابی (Filter & Row Context)، متغیرها و معیارهای سفارشی.",
        logo: "dax",
      },
      {
        slug: "learn-m",
        title: "Power Query M",
        en: "M",
        desc: "زبان تبدیل و پاک‌سازی داده در Power Query — ساخت پایپ‌لاین‌های مستحکم ETL، فرمول‌های سفارشی و ادغام چند دیتاسورس.",
        logo: "m",
      },
      {
        slug: "learn-spark",
        title: "اسپارک",
        en: "Apache Spark",
        desc: "موتور پردازش موازی و توزیع‌شده داده‌های حجیم — کار با DataFrames، بهینه‌ساز Catalyst، معماری کلاستر و پردازش حافظه‌محور.",
        logo: "spark",
      },
      {
        slug: "learn-hadoop",
        title: "هدوپ",
        en: "Hadoop",
        desc: "زیربنای تاریخی محاسبات توزیع‌شده کلان‌داده — سیستم فایل توزیع‌شده HDFS، مدل محاسباتی MapReduce و مدیریت منابع با YARN.",
        logo: "hadoop",
      },
      {
        slug: "learn-mongodb",
        title: "مانگودی‌بی",
        en: "MongoDB",
        desc: "پایگاه داده سندی NoSQL با مقیاس‌پذیری بالا — مدل‌سازی اسناد BSON/JSON، ایندکس‌گذاری و خط‌لوله تجمیع (Aggregation Pipeline).",
        logo: "mongodb",
        soon: true,
      },
      {
        slug: "learn-elasticsearch",
        title: "الستیک‌سرچ",
        en: "Elasticsearch",
        desc: "موتور جستجو و تحلیل توزیع‌شده متنی — ایندکس‌گذاری معکوس، الگوریتم‌های رتبه‌بندی BM25، جستجوی فازی و تحلیل بی‌درنگ لاگ‌ها.",
        logo: "elasticsearch",
        soon: true,
      },
      {
        slug: "learn-data-storytelling",
        title: "مصورسازی و روایت‌گری داده",
        en: "Data Storytelling & Visualization",
        desc: "تبدیل تحلیل‌های خام به روایت‌های بصری اثرگذار — اصول روانشناسی گشتالت، کاهش بار شناختی، حذف پارازیت و جلب اعتماد تصمیم‌گیران.",
        logo: "datastorytelling",
        soon: true,
      },
      {
        slug: "learn-data-modeling",
        title: "مدل‌سازی داده و معماری انبار",
        en: "Data Modeling & Dimensional Design",
        desc: "طراحی ساختار دیتابیس‌های عملیاتی و تحلیلی — دیاگرام‌های ERD، فرم‌های نرمال‌سازی، متدولوژی کیمبال، اسکیمای ستاره‌ای و تفاوت بنیادین OLTP و OLAP.",
        logo: "datamodeling",
        soon: true,
      },
      {
        slug: "learn-data-governance",
        title: "حاکمیت و کیفیت داده",
        en: "Data Governance & Quality",
        desc: "مدیریت حاکمیت داده در مقیاس سازمانی — قراردادهای داده (Data Contracts)، ردیابی جریان داده (Lineage)، کاتالوگ، امنیت PII و استانداردهای کیفیت.",
        logo: "datagovernance",
        soon: true,
      },
      {
        slug: "learn-dashboard-kpi",
        title: "طراحی داشبورد و شاخص‌های KPI",
        en: "Dashboard Design & KPI Strategy",
        desc: "طراحی داشبوردهای مدیریتی و عملیاتی اثرگذار — ماتریس شاخص‌ها، سنجه‌های پیشرو و پسرو (Leading/Lagging)، سلسله‌مراتب بصری و پیشگیری از خستگی هشدار.",
        logo: "dashboardkpi",
        soon: true,
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
        desc: "کنترل نسخه داده‌ها، مدل‌ها و پایپ‌لاین‌های یادگیری ماشین — ردیابی تغییرات دیتاست‌های حجیم، کش محلی و ریموت، و بازتولید آزمایش‌ها.",
        logo: "dvc",
      },
      {
        slug: "learn-dbt",
        title: "dbt",
        en: "dbt",
        desc: "استاندارد تحول داده روی دیتابیس و انبار داده (ELT) — مدل‌سازی ماژولار با SQL، مدیریت گراف وابستگی‌ها (DAG)، تست داده و مستندسازی خودکار.",
        logo: "dbt",
      },
      {
        slug: "learn-airflow",
        title: "ایرفلو",
        en: "Apache Airflow",
        desc: "هماهنگ‌سازی و اورکستریشن پایپ‌لاین‌های داده — تعریف گردش‌کار با کد پایتون (DAGs)، زمان‌بندی دقیق، مانیتورینگ وظایف و مدیریت خطاها.",
        logo: "airflow",
      },
      {
        slug: "learn-kafka",
        title: "کافکا",
        en: "Apache Kafka",
        desc: "پلتفرم توزیع‌شده رویدادمحور و جریان داده بلادرنگ — معماری Topic و Partitionها، مدیریت Producer/Consumer و پایداری داده در مقیاس صنعتی.",
        logo: "kafka",
      },
      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "مدیریت چرخه عمر پروژه‌های یادگیری ماشین — ثبت متغیرها و معیارهای آزمایش‌ها، بسته‌بندی مدل‌ها و رجیستری برای استقرار در پروداکشن.",
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
        desc: "مبانی و الگوریتم‌های کاربردی یادگیری ماشین — مدل‌های رگرسیون، دسته‌بندی و خوشه‌بندی، اعتبارسنجی متقاطع و مهندسی ویژگی با scikit-learn.",
        logo: "ml",
      },
      {
        slug: "learn-mlmath",
        title: "ریاضی ML",
        en: "ML Math",
        desc: "پایه‌های ریاضی مدل‌های هوش مصنوعی — جبر خطی، حساب دیفرانسیل ماتریسی، بهینه‌سازی گرادیانی و درک شهودی فضای برداری.",
        logo: "mlmath",
        soon: true,
      },
      {
        slug: "learn-mlstats",
        title: "آمار ML",
        en: "ML Statistics",
        desc: "آمار کاربردی برای دانشمندان داده — آزمون فرض‌های آماری، استنباط بیزی، توزیع‌های احتمال، فواصل اطمینان و تحلیل واریانس.",
        logo: "mlstats",
        soon: true,
      },
      {
        slug: "learn-dl",
        title: "یادگیری عمیق",
        en: "Deep Learning",
        desc: "شبکه‌های عصبی عمیق و یادگیری بازنمایی — معماری پرسپترون چندلایه، تابع‌های فعال‌ساز، انتشار رو به عقب، و آموزش مدل با PyTorch.",
        logo: "dl",
      },
      {
        slug: "learn-rl",
        title: "یادگیری تقویتی",
        en: "Reinforcement Learning",
        desc: "یادگیری تقویتی و تصمیم‌گیری بهینه در محیط‌های پویا — فرآیندهای تصمیم‌گیری مارکوف (MDP)، الگوریتم‌های Q-Learning و روش‌های شیب خط‌مشی.",
        logo: "rl",
      },
      {
        slug: "learn-nlp",
        title: "پردازش زبان طبیعی",
        en: "NLP",
        desc: "پردازش زبان طبیعی از مبانی متنی تا مدل‌های زبانی — توکن‌سازی، بازنمایی برداری، مدل‌های توالی، استخراج ویژگی و تحلیل معنایی متن.",
        logo: "nlp",
      },
      {
        slug: "learn-cv",
        title: "بینایی ماشین",
        en: "Computer Vision",
        desc: "بینایی ماشین و پردازش تصویر — شبکه‌های پیچشی (CNN)، فیلترهای فضایی، آشکارسازی اشیاء، تقسیم‌بندی تصویر و استخراج ویژگی‌های بصری.",
        logo: "cv",
      },
      {
        slug: "learn-datastructure",
        title: "ساختمان داده",
        en: "Data Structures",
        desc: "ساختمان داده‌های بنیادین در مهندسی نرم‌افزار — آرایه‌ها، لیست‌های پیوندی، پشته، صف، جداول هش، درخت‌ها، هرم‌ها و گراف‌ها در سندباکس تعاملی.",
        logo: "datastructure",
      },
      {
        slug: "learn-algorithm",
        title: "الگوریتم",
        en: "Algorithms",
        desc: "طراحی و تحلیل الگوریتم‌های بهینه — پیچیدگی محاسباتی Big-O، جستجو، مرتب‌سازی، برنامه‌نویسی پویا و الگوریتم‌های گراف در عمل.",
        logo: "algorithm",
      },
      {
        slug: "learn-llm",
        title: "مدل‌های زبانی بزرگ",
        en: "Large Language Models",
        desc: "مدل‌های زبانی بزرگ و هوش مصنوعی مولد — سازوکار خودتوجهی (Self-Attention)، معماری ترنسفورمر، پرامپتینگ مهندسی، فاین‌تیون و پایپ‌لاین‌های RAG.",
        logo: "llm",
        soon: true,
      },
      {
        slug: "learn-ml-patterns",
        title: "الگوهای طراحی ML",
        en: "ML Design Patterns",
        desc: "الگوهای طراحی معماری در یادگیری ماشین عملیاتی — بازنمایی ویژگی‌ها، الگوهای Cascade و Checkpoint، Feature Store و استقرار تاب‌آور مدل‌ها.",
        logo: "mlpatterns",
        soon: true,
      },
      {
        slug: "learn-critical-thinking",
        title: "تفکر نقاد در تحلیل و AI",
        en: "Critical Thinking in Data & AI",
        desc: "کالبدشکافی تحلیلی داده‌ها و مدل‌ها — کشف همبستگی‌های کاذب، پارادوکس سیمپسون، سوگیری داده‌ها، خطرات p-hacking و ارزیابی استدلال علیتی.",
        logo: "criticalthinking",
        soon: true,
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
        desc: "فریمورک جامع پایتون برای وب‌سایت‌ها و سامانه‌های داده — معماری MTV، نگاشت شیء-رابطه‌ای (ORM)، احراز هویت و پنل مدیریت قدرتمند.",
        logo: "django",
      },
      {
        slug: "learn-flask",
        title: "فلسک",
        en: "Flask",
        desc: "میکروفریمورک ماژولار و سبک پایتون — چرخه حیات درخواست‌های HTTP، مدیریت مسیرها (Routing)، قالب‌سازی Jinja و ساخت سرویس‌های مستقل.",
        logo: "flask",
      },
      {
        slug: "learn-streamlit",
        title: "استریملیت",
        en: "Streamlit",
        desc: "توسعه سریع وب‌اپلیکیشن‌های داده و داشبوردهای ML با پایتون خالص — ویجت‌های تعاملی، کش داده‌ها، و بصری‌سازی بلادرنگ بدون نیاز به فرانت‌اند.",
        logo: "streamlit",
      },
      {
        slug: "learn-shiny",
        title: "شاینی",
        en: "Shiny",
        desc: "فریمورک اپلیکیشن‌های تعاملی واکنش‌گرا (Reactive) برای R و پایتون — پیوند مستقیم تحلیل‌های آماری پیشرفته با رابط کاربری وب.",
        logo: "shiny",
      },
      {
        slug: "learn-api",
        title: "API",
        en: "API",
        desc: "طراحی و پیاده‌سازی رابط‌های برنامه‌نویسی مدرن — اصول معماری RESTful، اعتبارسنجی با Pydantic، مستندسازی خودکار و فریمورک FastAPI.",
        logo: "api",
      },
      {
        slug: "learn-scraping",
        title: "وب‌اسکرپینگ",
        en: "Web Scraping",
        desc: "استخراج داده و جمع‌آوری هوشمند از وب — پروتکل HTTP، پارس کدهای HTML با BeautifulSoup، اتوماسیون با Selenium و الگوهای کراولر در مقیاس صنعتی.",
        logo: "scraping",
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
        desc: "برنامه‌نویسی سیستم‌های نهفته و میکروکنترلرها — کار با پین‌های ورودی/خروجی، خواندن سنسورها، کنترل محرک‌ها و پروتکل‌های ارتباطی I2C و SPI.",
        logo: "arduino",
        soon: true,
      },
      {
        slug: "learn-raspberrypi",
        title: "رزبری پای",
        en: "Raspberry Pi",
        desc: "پردازش لبه در صنعت ۴.۰ با کامپیوترهای تک‌بردی — لینوکس امبدد، برنامه‌نویسی پین‌های GPIO، مانیتورینگ خطوط تولید و اتصال تجهیزات به کلود.",
        logo: "raspberrypi",
        soon: true,
      },
      {
        slug: "learn-enterprise-blockchain",
        title: "بلاکچین سازمانی و DLT",
        en: "Enterprise Blockchain",
        desc: "دفاتر کل توزیع‌شده مجاز برای زنجیره تأمین صنعت ۴.۰ — رهگیری تغییرناپذیر قطعات، قراردادهای هوشمند M2M و پیاده‌سازی با Hyperledger Fabric.",
        logo: "blockchain",
        soon: true,
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

  const STORAGE_KEY = "learn-with-ali:unique-visitors";
  const badgeUrl = "https://api.visitorbadge.io/api/combined?path=learn-with-ali";

  /**
   * Parse the visitor count out of a visitorbadge SVG payload.
   *
   * @param {string} svg
   * @returns {number}
   */
  const parseCount = (svg) => {
    const title = svg.match(/VISITORS:\s*([\d.,]+[KMB]?)/i);
    const raw = (title ? title[1] : "").replace(/,/g, "");
    if (!raw) return Number.NaN;
    const suffix = raw.slice(-1).toUpperCase();
    const scale = { K: 1e3, M: 1e6, B: 1e9 }[suffix] || 1;
    const numeric = scale === 1 ? Number(raw) : Number.parseFloat(raw) * scale;
    return Number.isFinite(numeric) ? numeric : Number.NaN;
  };

  /**
   * Paint a count into the hero stat.
   *
   * @param {number} value
   * @returns {void}
   */
  const paint = (value) => {
    el.textContent = Math.max(0, Math.round(value)).toLocaleString("en-US");
    el.title = "تعداد بازدیدهای این صفحه";
  };

  /** @type {{ count: number, at: number } | null} */
  let cached = null;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) cached = JSON.parse(raw);
  } catch {
    cached = null;
  }

  if (cached && typeof cached.count === "number") {
    paint(cached.count);
    return;
  }

  try {
    const res = await fetch(badgeUrl, { cache: "no-store" });
    if (!res.ok) throw new Error(`status ${res.status}`);
    const count = parseCount(await res.text());
    if (!Number.isFinite(count)) throw new Error("bad count");
    paint(count);
    try {
      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify({ count, at: Date.now() })
      );
    } catch {
      // private mode / quota — still fine, next visit will count once more
    }
  } catch {
    el.textContent = "—";
  }
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
  setupVisitors();
  setupShare();
  setupReveal();
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});
