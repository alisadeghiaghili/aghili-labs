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
        desc: "از اتوماسیون ساده تا هوش مصنوعی، همه‌چیز از پایتون شروع می‌شود. مدل حافظه، ساختارهای داده و حل چالش‌های الگوریتمی قدم‌به‌قدم.",
        logo: "python",
      },
      {
        slug: "learn-r",
        title: "زبان R",
        en: "R",
        desc: "وقتی تحلیل آماری اولویت اول باشد، R بهترین انتخاب است. کار با داده در tidyverse، رسم نمودار با ggplot2 و شبیه‌سازی آماری.",
        logo: "r",
      },
      {
        slug: "learn-cpp",
        title: "C++",
        en: "C++",
        desc: "کنترل مستقیم حافظه و سخت‌افزار برای نوشتن برنامه‌هایی با بیشترین سرعت ممکن. اشاره‌گرها، مدیریت منابع و الگوهای شیءگرا.",
        logo: "cpp",
      },
      {
        slug: "learn-rust",
        title: "راست",
        en: "Rust",
        desc: "ایمنی حافظه بدون Garbage Collector و بدون هزینه اضافی در زمان اجرا. سیستم مالکیت، قرض‌گیری و همروندی بدون رقابت داده.",
        logo: "rust",
      },
      {
        slug: "learn-go",
        title: "گو",
        en: "Go",
        desc: "ساده، سریع و ساخته‌شده برای سرویس‌های ابری. همروندی سبک با Goroutine و کانال‌ها، کامپایل سریع و باینری تک‌فایل آماده استقرار.",
        logo: "go",
        soon: true,
      },
      {
        slug: "learn-julia",
        title: "جولیا",
        en: "Julia",
        desc: "سرعت C با خوانایی پایتون، بدون نیاز به بازنویسی کد. چندریختی پویا (Multiple Dispatch)، محاسبات عددی و جبر خطی بومی.",
        logo: "julia",
        soon: true,
      },
      {
        slug: "learn-java",
        title: "جاوا",
        en: "Java",
        desc: "پایه زیرساخت‌های سازمانی از Hadoop تا Kafka. رفتار JVM، مدل حافظه، همروندی و اکوسیستم بزرگ کلان‌داده.",
        logo: "java",
        soon: true,
      },
      {
        slug: "learn-scala",
        title: "اسکالا",
        en: "Scala",
        desc: "زبان بومی Apache Spark برای پردازش کلان‌داده. ترکیب پارادایم تابعی و شیءگرا با سیستم نوع قوی و Pattern Matching.",
        logo: "scala",
        soon: true,
      },
      {
        slug: "learn-functional-programming",
        title: "برنامه‌نویسی تابعی",
        en: "Functional Programming",
        desc: "یک شیوه متفاوت حل مسئله که کدتان را قابل‌پیش‌بینی‌تر می‌کند. تغییرناپذیری، توابع خالص، ترکیب‌پذیری و Monadها.",
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
        desc: "زبان مشترک همه سرورهای لینوکسی و پایپ‌لاین‌های CI/CD. جریان‌های ورودی/خروجی، پایپ‌ها و پردازش متن با sed و awk.",
        logo: "bash",
      },
      {
        slug: "learn-powershell",
        title: "پاورشل",
        en: "PowerShell",
        desc: "برخلاف شل‌های معمولی، هر خروجی یک شیء ساختاریافته است. خط‌لوله اشیاء، مدیریت ریموت و خودکارسازی ویندوز و لینوکس.",
        logo: "powershell",
      },
      {
        slug: "learn-cmd",
        title: "CMD ویندوز",
        en: "Windows CMD",
        desc: "هنوز هم ساده‌ترین راه برای خودکارسازی سریع در ویندوز. دستورات فایل‌سیستم، متغیرهای محیطی و نوشتن اسکریپت‌های Batch.",
        logo: "cmd",
      },
      {
        slug: "learn-linux",
        title: "لینوکس",
        en: "Linux / Ubuntu",
        desc: "بیش از ۹۰٪ سرورهای دنیا لینوکس اجرا می‌کنند. معماری هسته، مدیریت فرآیندها، مجوزهای دسترسی و فایل‌سیستم.",
        logo: "linux",
      },
      {
        slug: "learn-git",
        title: "گیت",
        en: "Git",
        desc: "بدون تسلط بر Git، همکاری تیمی روی کد غیرممکن است. شاخه‌بندی، Rebase، حل تعارض و بازیابی تغییرات گم‌شده.",
        logo: "git",
      },
      {
        slug: "learn-networking",
        title: "شبکه",
        en: "Networking",
        desc: "وقتی سرویس‌تان جواب نمی‌دهد باید بدانید از کجا شروع کنید. TCP/IP، مدل لایه‌ای OSI، DNS، مسیریابی و عیب‌یابی عملی.",
        logo: "networking",
      },
      {
        slug: "learn-cryptography",
        title: "رمزنگاری کاربردی",
        en: "Applied Cryptography",
        desc: "پشت هر اتصال امن و هر امضای دیجیتال، رمزنگاری ایستاده. توابع هش، رمزنگاری متقارن و نامتقارن، امضا و زنجیره گواهی‌ها.",
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
        desc: "کدی که امروز می‌نویسید، فردا باید قابل تغییر باشد. اصول SOLID، الگوهای طراحی GoF، معماری لایه‌ای و بازآرایی عملی کد.",
        logo: "softwaredesign",
        soon: true,
      },
      {
        slug: "learn-testing",
        title: "تست‌نویسی و کیفیت نرم‌افزار",
        en: "Testing & Quality Engineering",
        desc: "تنها راه اطمینان از درستی کد، تست کردن آن است. توسعه آزمون‌محور (TDD)، تست واحد و یکپارچه‌سازی با pytest و اعتبارسنجی کیفیت داده.",
        logo: "testing",
        soon: true,
      },
      {
        slug: "learn-technical-docs",
        title: "مستندسازی فنی و معماری",
        en: "Technical Docs & ADRs",
        desc: "تصمیمات معماری که مستند نشوند، فراموش و تکرار می‌شوند. ثبت ADRها، تدوین RFC، مشخصات API و مدیریت دانش تیم مهندسی.",
        logo: "technicaldocs",
        soon: true,
      },
      {
        slug: "learn-ddd",
        title: "طراحی دامنه‌محور (DDD)",
        en: "Domain-Driven Design in Data & AI",
        desc: "وقتی پیچیدگی کسب‌وکار از پیچیدگی فنی بیشتر می‌شود. زبان مشترک تیم، مرزهای دامنه، Aggregateها و کاربرد در معماری Data Mesh.",
        logo: "ddd",
        soon: true,
      },
      {
        slug: "learn-bpmn",
        title: "مدل‌سازی فرآیندها با BPMN",
        en: "Business Process Modeling (BPMN)",
        desc: "قبل از خودکارسازی هر فرآیند، باید بتوانید آن را دقیق مدل کنید. استاندارد BPMN 2.0، گیت‌وی‌های تصمیم، استخرها و اتصال به موتورهای اجرا.",
        logo: "bpmn",
        soon: true,
      },
      {
        slug: "learn-scientific-writing",
        title: "نگارش علمی و پژوهشی",
        en: "Scientific Writing & Research",
        desc: "تحقیقی که بد نوشته شود، خوانده نمی‌شود. ساختار IMRAD، طراحی متدولوژی، تکرارپذیری آزمایش‌ها و آماده‌سازی برای داوری همتا.",
        logo: "scientificwriting",
        soon: true,
      },
      {
        slug: "learn-tech-interviews",
        title: "آمادگی مصاحبه‌های فنی",
        en: "Technical Interviewing for Data & Systems",
        desc: "دانستن جواب کافی نیست؛ باید بتوانید فکرتان را بلند بیان کنید. System Design، لایوکدینگ الگوریتم و SQL و دفاع از تصمیمات معماری.",
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
        desc: "«روی سیستم من کار می‌کنه» را برای همیشه تمام کنید. لایه‌بندی ایمیج‌ها، مدیریت شبکه و حجم کانتینرها، Dockerfile و Docker Compose.",
        logo: "docker",
      },
      {
        slug: "learn-aws",
        title: "AWS",
        en: "Amazon Web Services",
        desc: "بزرگ‌ترین اکوسیستم ابری جهان از دید یک مهندس داده. S3، EC2، Lambda، IAM و الگوهای معماری داده‌محور در ابر.",
        logo: "aws",
      },
      {
        slug: "learn-azure",
        title: "Azure",
        en: "Microsoft Azure",
        desc: "انتخاب اول سازمان‌هایی که اکوسیستم مایکروسافت دارند. Data Factory، دریاچه داده ADLS Gen2، Synapse Analytics و مدیریت منابع.",
        logo: "azure",
      },
      {
        slug: "learn-databricks",
        title: "دیتابریکس",
        en: "Databricks",
        desc: "ادغام انبار داده و دریاچه داده در یک معماری واحد. پلتفرم Lakehouse، پردازش با Spark، مدیریت Delta Lake و بهینه‌سازی کوئری‌ها.",
        logo: "databricks",
        soon: true,
      },
      {
        slug: "learn-snowflake",
        title: "اسنوفلیک",
        en: "Snowflake",
        desc: "پردازش و ذخیره‌سازی مستقل از هم، یعنی هزینه و سرعت را جداگانه کنترل کنید. SQL مقیاس‌پذیر، Time Travel، Clone بدون کپی و اشتراک داده.",
        logo: "snowflake",
      },
      {
        slug: "learn-grafana",
        title: "گرافانا",
        en: "Grafana",
        desc: "قبل از اینکه کاربر مشکل را گزارش کند، شما باید ببینیدش. داشبوردهای زنده، اتصال به منابع متریک متنوع و تنظیم هشدارها.",
        logo: "grafana",
      },
      {
        slug: "learn-pkgm",
        title: "مدیریت بسته",
        en: "pip · conda · uv",
        desc: "تعارض وابستگی‌ها رایج‌ترین علت خرابی محیط توسعه است. مقایسه pip، conda و uv، محیط‌های مجازی و بیلدهای تکرارپذیر.",
        logo: "pkgm",
      },
      {
        slug: "learn-kibana",
        title: "کیبانا",
        en: "Kibana",
        desc: "رابط بصری استک Elastic برای کاوش در میلیون‌ها رکورد لاگ. جستجو در Discover، ساخت داشبوردهای تحلیلی و مانیتورینگ توزیع‌شده.",
        logo: "kibana",
        soon: true,
      },
      {
        slug: "learn-logstash",
        title: "لاگ‌استش",
        en: "Logstash",
        desc: "لاگ‌ها از ده‌ها منبع مختلف می‌آیند و باید یک‌جا جمع و یکدست شوند. دریافت بلادرنگ، پارس با الگوهای Grok و ارسال به Elasticsearch.",
        logo: "logstash",
        soon: true,
      },
      {
        slug: "learn-splunk",
        title: "اسپلانک",
        en: "Splunk",
        desc: "تحلیل حجم انبوه لاگ‌های ماشینی و شناسایی تهدیدات امنیتی. مدیریت رویدادهای امنیتی (SIEM)، گزارش‌گیری و تسلط بر زبان SPL.",
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
        desc: "هر مهندس داده‌ای، هر روز SQL می‌نویسد. کوئری‌های تودرتو، توابع پنجره‌ای، CTEها، ایندکس‌گذاری و بهینه‌سازی اجرا در سندباکس زنده.",
        logo: "sql",
      },
      {
        slug: "learn-dax",
        title: "DAX",
        en: "DAX",
        desc: "اگر با Power BI کار می‌کنید، بدون DAX در سطح می‌مانید. Filter Context، Row Context، تابع CALCULATE و ساخت معیارهای سفارشی.",
        logo: "dax",
      },
      {
        slug: "learn-m",
        title: "Power Query M",
        en: "M",
        desc: "داده‌های خام را قبل از رسیدن به مدل داده پاک‌سازی و شکل بدهید. پایپ‌لاین ETL در Power Query، فرمول‌های سفارشی M و ادغام منابع مختلف.",
        logo: "m",
      },
      {
        slug: "learn-spark",
        title: "اسپارک",
        en: "Apache Spark",
        desc: "وقتی داده‌ها در یک ماشین جا نمی‌شوند. پردازش توزیع‌شده با DataFrames، بهینه‌ساز Catalyst و پردازش سریع حافظه‌محور.",
        logo: "spark",
      },
      {
        slug: "learn-hadoop",
        title: "هدوپ",
        en: "Hadoop",
        desc: "بنیان‌گذار انقلاب کلان‌داده که هنوز زیرساخت بسیاری از سیستم‌هاست. فایل‌سیستم توزیع‌شده HDFS، مدل MapReduce و مدیریت منابع YARN.",
        logo: "hadoop",
      },
      {
        slug: "learn-mongodb",
        title: "مانگودی‌بی",
        en: "MongoDB",
        desc: "وقتی ساختار داده‌ها از پیش مشخص نیست یا مرتب تغییر می‌کند. مدل‌سازی اسناد JSON/BSON، ایندکس‌گذاری و Aggregation Pipeline.",
        logo: "mongodb",
        soon: true,
      },
      {
        slug: "learn-elasticsearch",
        title: "الستیک‌سرچ",
        en: "Elasticsearch",
        desc: "جستجوی میلی‌ثانیه‌ای در میلیاردها سند. ایندکس معکوس، رتبه‌بندی BM25، جستجوی فازی و تحلیل‌گرهای متنی سفارشی.",
        logo: "elasticsearch",
        soon: true,
      },
      {
        slug: "learn-data-storytelling",
        title: "مصورسازی و روایت‌گری داده",
        en: "Data Storytelling & Visualization",
        desc: "نمودار زیبا کافی نیست؛ باید داستانی بگوید که تصمیم‌ساز را قانع کند. اصول گشتالت، کاهش شلوغی بصری و روایت‌گری داده‌محور.",
        logo: "datastorytelling",
        soon: true,
      },
      {
        slug: "learn-data-modeling",
        title: "مدل‌سازی و معماری انبار داده",
        en: "Data Modeling & Dimensional Design",
        desc: "طراحی اشتباه مدل داده، عملکرد کل سیستم را زمین می‌زند. ERD، نرمال‌سازی، متدولوژی کیمبال، اسکیمای ستاره‌ای و تفاوت OLTP با OLAP.",
        logo: "datamodeling",
        soon: true,
      },
      {
        slug: "learn-data-governance",
        title: "حاکمیت و کیفیت داده",
        en: "Data Governance & Quality",
        desc: "مدل ML شما به اندازه داده‌ای که می‌خورد خوب است. قراردادهای داده، ردیابی تبار داده، کاتالوگ متادیتا، حفاظت PII و قواعد کیفیت.",
        logo: "datagovernance",
        soon: true,
      },
      {
        slug: "learn-dashboard-kpi",
        title: "طراحی داشبورد و شاخص‌های KPI",
        en: "Dashboard Design & KPI Strategy",
        desc: "داشبوردی که همه‌چیز را نشان بدهد، هیچ‌چیز نمی‌گوید. انتخاب شاخص‌های کلیدی، سنجه‌های پیشرو و پسرو، چیدمان بصری و مهار خستگی هشدار.",
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
        desc: "Git فایل‌های حجیم را نمی‌فهمد؛ DVC این خلأ را پر می‌کند. نسخه‌بندی دیتاست‌ها و مدل‌ها، کش محلی و ریموت و بازتولید دقیق آزمایش‌ها.",
        logo: "dvc",
      },
      {
        slug: "learn-dbt",
        title: "dbt",
        en: "dbt",
        desc: "اصول مهندسی نرم‌افزار را به دنیای SQL بیاورید. مدل‌سازی ماژولار، گراف وابستگی، تست خودکار داده، مستندسازی و تحول داده درون انبار.",
        logo: "dbt",
      },
      {
        slug: "learn-airflow",
        title: "ایرفلو",
        en: "Apache Airflow",
        desc: "مطمئن شوید هر مرحله از پایپ‌لاین داده در زمان و ترتیب درست اجرا می‌شود. تعریف DAG با پایتون، زمان‌بندی، مانیتورینگ و مدیریت خطا.",
        logo: "airflow",
      },
      {
        slug: "learn-kafka",
        title: "کافکا",
        en: "Apache Kafka",
        desc: "وقتی داده‌ها باید لحظه‌ای جریان پیدا کنند، نه دسته‌ای. معماری Topic و Partition، تولیدکننده و مصرف‌کننده، تضمین تحویل و مقیاس‌پذیری افقی.",
        logo: "kafka",
      },
      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "بدون ردیابی آزمایش‌ها، تکرارپذیری فقط یک آرزوست. ثبت پارامترها و معیارها، بسته‌بندی مدل، رجیستری و استقرار در پروداکشن.",
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
        desc: "از فرضیه تا مدلی که واقعاً قابل ارزیابی باشد. رگرسیون، دسته‌بندی، خوشه‌بندی، اعتبارسنجی متقاطع و مهندسی ویژگی با scikit-learn.",
        logo: "ml",
      },
      {
        slug: "learn-mlmath",
        title: "ریاضی ML",
        en: "ML Math",
        desc: "بدون ریاضی، مدل ML یک جعبه سیاه باقی می‌ماند. جبر خطی، مشتق‌گیری ماتریسی، بهینه‌سازی گرادیانی و شهود هندسی فضاهای برداری.",
        logo: "mlmath",
        soon: true,
      },
      {
        slug: "learn-mlstats",
        title: "آمار ML",
        en: "ML Statistics",
        desc: "تفاوت بین «به نظر کار می‌کند» و «اثبات آماری دارد». آزمون فرض، استنباط بیزی، توزیع‌های احتمال، فاصله اطمینان و تحلیل واریانس.",
        logo: "mlstats",
        soon: true,
      },
      {
        slug: "learn-ts",
        title: "تحلیل و پیش‌بینی سری‌های زمانی",
        en: "Time Series & Forecasting",
        desc: "فروش فردا، ترافیک هفته آینده، تقاضای فصل بعد. تجزیه روند و فصلی‌بودن، آزمون مانایی، مدل‌های ARIMA و Prophet و پیش‌بینی با شبکه‌های عصبی.",
        logo: "timeseries",
      },
      {
        slug: "learn-dl",
        title: "یادگیری عمیق",
        en: "Deep Learning",
        desc: "از پرسپترون ساده تا شبکه‌هایی که خودشان ویژگی استخراج می‌کنند. توابع فعال‌ساز، پس‌انتشار خطا و آموزش عملی مدل با PyTorch.",
        logo: "dl",
      },
      {
        slug: "learn-rl",
        title: "یادگیری تقویتی",
        en: "Reinforcement Learning",
        desc: "عاملی که با آزمون و خطا یاد می‌گیرد بهترین تصمیم را بگیرد. فرآیندهای مارکوف، Q-Learning، Deep Q-Networks و روش‌های Policy Gradient.",
        logo: "rl",
      },
      {
        slug: "learn-nlp",
        title: "پردازش زبان طبیعی",
        en: "NLP",
        desc: "به ماشین بیاموزید متن انسانی را بخواند، بفهمد و تولید کند. توکن‌سازی، بازنمایی برداری، مدل‌های توالی و تحلیل معنایی.",
        logo: "nlp",
      },
      {
        slug: "learn-cv",
        title: "بینایی ماشین",
        en: "Computer Vision",
        desc: "به ماشین بیاموزید تصاویر را ببیند و تفسیر کند. شبکه‌های پیچشی (CNN)، آشکارسازی اشیاء، تقسیم‌بندی تصویر و استخراج ویژگی‌های بصری.",
        logo: "cv",
      },
      {
        slug: "learn-datastructure",
        title: "ساختمان داده",
        en: "Data Structures",
        desc: "انتخاب ساختار داده نادرست، الگوریتم درست را هم کند می‌کند. آرایه، لیست پیوندی، پشته، صف، هش‌مپ، درخت، هرم و گراف در سندباکس تعاملی.",
        logo: "datastructure",
      },
      {
        slug: "learn-algorithm",
        title: "الگوریتم",
        en: "Algorithms",
        desc: "تفاوت بین راه‌حلی که فقط کار می‌کند و راه‌حلی که مقیاس می‌شود. تحلیل Big-O، جستجو، مرتب‌سازی، برنامه‌نویسی پویا و الگوریتم‌های گراف.",
        logo: "algorithm",
      },
      {
        slug: "learn-llm",
        title: "مدل‌های زبانی بزرگ",
        en: "Large Language Models",
        desc: "درکی عمیق از فناوری‌ای که صنعت را متحول کرده. مکانیزم توجه، معماری ترنسفورمر، مهندسی پرامپت، فاین‌تیون و پایپ‌لاین RAG.",
        logo: "llm",
        soon: true,
      },
      {
        slug: "learn-ml-patterns",
        title: "الگوهای طراحی ML",
        en: "ML Design Patterns",
        desc: "راه‌حل‌های اثبات‌شده برای مسائل تکراری در مسیر آزمایشگاه تا پروداکشن. بازنمایی ویژگی، Cascade، Checkpoint، Feature Store و استقرار تاب‌آور.",
        logo: "mlpatterns",
        soon: true,
      },
      {
        slug: "learn-critical-thinking",
        title: "تفکر نقاد در تحلیل و AI",
        en: "Critical Thinking in Data & AI",
        desc: "همبستگی علیت نیست و هر عدد معنادار، لزوماً معنادار نیست. شناسایی همبستگی‌های کاذب، پارادوکس سیمپسون، سوگیری داده و خطرات p-hacking.",
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
        desc: "همه‌چیز از پنل مدیریت تا ORM و احراز هویت، از پیش آماده است. معماری MTV، سیستم مهاجرت و ساخت سریع سامانه‌های داده‌محور.",
        logo: "django",
      },
      {
        slug: "learn-flask",
        title: "فلسک",
        en: "Flask",
        desc: "فقط آنچه نیاز دارید، نه بیشتر. چرخه درخواست HTTP، مسیریابی، قالب‌سازی Jinja و ساخت APIها و سرویس‌های سبک.",
        logo: "flask",
      },
      {
        slug: "learn-streamlit",
        title: "استریملیت",
        en: "Streamlit",
        desc: "فرانت‌اند بلد نیستید؟ فقط پایتون بنویسید. ویجت‌های تعاملی، کش داده، نمودارهای زنده و ساخت داشبوردهای ML در دقایق.",
        logo: "streamlit",
      },
      {
        slug: "learn-shiny",
        title: "شاینی",
        en: "Shiny",
        desc: "تحلیل آماری R یا پایتون‌تان را مستقیماً تبدیل به اپلیکیشن وب کنید. برنامه‌نویسی واکنش‌گرا، ویجت‌های تعاملی و نمودارهای پویا.",
        logo: "shiny",
      },
      {
        slug: "learn-api",
        title: "API",
        en: "API",
        desc: "مدل ML شما بدون API قابل استفاده نیست. اصول REST، اعتبارسنجی با Pydantic، مستندسازی خودکار OpenAPI و پیاده‌سازی با FastAPI.",
        logo: "api",
      },
      {
        slug: "learn-scraping",
        title: "وب‌اسکرپینگ",
        en: "Web Scraping",
        desc: "داده‌ای که نیاز دارید همیشه API ندارد. پروتکل HTTP، پارس HTML با BeautifulSoup، اتوماسیون مرورگر با Selenium و الگوهای کراولر صنعتی.",
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
        desc: "دنیای فیزیکی را با کد کنترل کنید. خواندن سنسورها، فرمان دادن به موتورها، پروتکل‌های I2C و SPI و پروژه‌های عملی IoT.",
        logo: "arduino",
        soon: true,
      },
      {
        slug: "learn-raspberrypi",
        title: "رزبری پای",
        en: "Raspberry Pi",
        desc: "یک کامپیوتر کامل لینوکسی در کف دست شما. برنامه‌نویسی GPIO، پردازش داده در لبه شبکه، مانیتورینگ خطوط تولید و اتصال به ابر.",
        logo: "raspberrypi",
        soon: true,
      },
      {
        slug: "learn-enterprise-blockchain",
        title: "بلاکچین سازمانی و DLT",
        en: "Enterprise Blockchain",
        desc: "وقتی اعتماد بین طرف‌ها باید با فناوری تضمین شود، نه قرارداد کاغذی. رهگیری تغییرناپذیر زنجیره تأمین، قراردادهای هوشمند و Hyperledger Fabric.",
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
          <p class="course-title">${formatTitle(course.title)}</p>
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
