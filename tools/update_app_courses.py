"""Add 16 new courses to app.js, with fine-tuned LLM desc, handling LF endings."""
from pathlib import Path

APP = Path(r"c:\Users\alisa\Desktop\Projects\learn-with-ali\app.js")
text = APP.read_text(encoding="utf-8").replace("\r\n", "\n")

# 1. Update learn-llm desc
old_llm = """      {
        slug: "learn-llm",
        title: "مدل‌های زبانی بزرگ",
        en: "Large Language Models",
        desc: "درکی عمیق از فناوری‌ای که صنعت را متحول کرده. مکانیزم توجه، معماری ترنسفورمر، مهندسی پرامپت، فاین‌تیون و پایپ‌لاین RAG.",
        logo: "llm",
        soon: true,
      },""".replace("\r\n", "\n")

new_llm = """      {
        slug: "learn-llm",
        title: "مدل‌های زبانی بزرگ",
        en: "Large Language Models",
        desc: "درکی عمیق از فناوری‌ای که صنعت را متحول کرده. مکانیزم توجه، معماری ترنسفورمر، مهندسی پرامپت، روش‌های تطبیق وزن‌ها (LoRA) و ترازسازی مدل.",
        logo: "llm",
        soon: true,
      },""".replace("\r\n", "\n")

assert old_llm in text, "old_llm not found"
text = text.replace(old_llm, new_llm, 1)

# 2. Add to architecture (after learn-tech-interviews)
old_arch = """      {
        slug: "learn-tech-interviews",
        title: "آمادگی مصاحبه‌های فنی",
        en: "Technical Interviewing for Data & Systems",
        desc: "دانستن جواب کافی نیست؛ باید بتوانید فکرتان را بلند بیان کنید. System Design، لایوکدینگ الگوریتم و SQL و دفاع از تصمیمات معماری.",
        logo: "techinterviews",
        soon: true,
      },
    ],
  },
  platforms: {""".replace("\r\n", "\n")

new_arch = """      {
        slug: "learn-tech-interviews",
        title: "آمادگی مصاحبه‌های فنی",
        en: "Technical Interviewing for Data & Systems",
        desc: "دانستن جواب کافی نیست؛ باید بتوانید فکرتان را بلند بیان کنید. System Design، لایوکدینگ الگوریتم و SQL و دفاع از تصمیمات معماری.",
        logo: "techinterviews",
        soon: true,
      },
      {
        slug: "learn-ai-pm",
        title: "مدیریت پروژه و اقتصاد هوش مصنوعی",
        en: "AI Project Management & ROI",
        desc: "هدایت پروژه‌های داده و پیش‌بینی بازگشت سرمایه بدون غرق شدن در ابهامات. متدولوژی چابک برای مدل‌های احتمالاتی، چرخه عمر CRISP-DM، محاسبه TCO و توجیه اقتصادی استنتاج.",
        logo: "aipm",
        soon: true,
      },
      {
        slug: "learn-licensing",
        title: "لایسنسینگ و حقوق نرم‌افزار، داده و مدل",
        en: "Software, Data & AI Licensing",
        desc: "استفاده از یک کتابخانه یا وزن مدل با لایسنس اشتباه می‌تواند کل محصول را با ریسک حقوقی مواجه کند. لایسنس‌های متن‌باز، شرایط استفاده تجاری از وزن مدل‌ها، کپی‌رایت دیتاست‌ها و الزامات قانونی تجاری‌سازی.",
        logo: "licensing",
        soon: true,
      },
      {
        slug: "learn-distributed-systems",
        title: "معماری سیستم‌های توزیع‌شده",
        en: "Distributed Systems Architecture",
        desc: "اصول مهندسی سیستم‌هایی که روی صدها ماشین اجرا می‌شوند و نباید از کار بیفتند. قضیه CAP، الگوریتم‌های اجماع Raft و Paxos، شاردینگ، همگام‌سازی داده و الگوهای رویدادمحور.",
        logo: "distributedsystems",
        soon: true,
      },
    ],
  },
  platforms: {""".replace("\r\n", "\n")

assert old_arch in text, "old_arch not found"
text = text.replace(old_arch, new_arch, 1)

# 3. Add to platforms (after learn-splunk)
old_platforms = """      {
        slug: "learn-splunk",
        title: "اسپلانک",
        en: "Splunk",
        desc: "تحلیل حجم انبوه لاگ‌های ماشینی و شناسایی تهدیدات امنیتی. مدیریت رویدادهای امنیتی (SIEM)، گزارش‌گیری و تسلط بر زبان SPL.",
        logo: "splunk",
        soon: true,
      },
    ],
  },
  data: {""".replace("\r\n", "\n")

new_platforms = """      {
        slug: "learn-splunk",
        title: "اسپلانک",
        en: "Splunk",
        desc: "تحلیل حجم انبوه لاگ‌های ماشینی و شناسایی تهدیدات امنیتی. مدیریت رویدادهای امنیتی (SIEM)، گزارش‌گیری و تسلط بر زبان SPL.",
        logo: "splunk",
        soon: true,
      },
      {
        slug: "learn-kubernetes",
        title: "کوبرنتیز",
        en: "Kubernetes",
        desc: "استاندارد جهانی مدیریت و اجرای خودکار کانتینرها در مقیاس ابری. معماری کلاستر، پادها، سرویس‌ها، مدیریت وضعیت با StatefulSet و استقرار خودکار برنامه‌ها.",
        logo: "kubernetes",
        soon: true,
      },
      {
        slug: "learn-gcp",
        title: "GCP",
        en: "Google Cloud Platform",
        desc: "پلتفرم ابری پیشرو در کلان‌داده و هوش مصنوعی مدرن. ذخیره‌سازی ابری GCS، کوئری‌های مقیاس‌پذیر در BigQuery، سرویس‌های بدون سرور Cloud Run و اکوسیستم Vertex AI.",
        logo: "gcp",
        soon: true,
      },
      {
        slug: "learn-terraform",
        title: "ترافورم",
        en: "Terraform & IaC",
        desc: "مدیریت و ایجاد زیرساخت‌های ابری به صورت کد تکرارپذیر. ساختار HCL، چرخه حیات منابع، مدیریت State، ماژول‌نویسی و استقرار امن بر روی ابرها.",
        logo: "terraform",
        soon: true,
      },
    ],
  },
  data: {""".replace("\r\n", "\n")

assert old_platforms in text, "old_platforms not found"
text = text.replace(old_platforms, new_platforms, 1)

# 4. Add to data (after learn-dashboard-kpi)
old_data = """      {
        slug: "learn-dashboard-kpi",
        title: "طراحی داشبورد و شاخص‌های KPI",
        en: "Dashboard Design & KPI Strategy",
        desc: "داشبوردی که همه‌چیز را نشان بدهد، هیچ‌چیز نمی‌گوید. انتخاب شاخص‌های کلیدی، سنجه‌های پیشرو و پسرو، چیدمان بصری و مهار خستگی هشدار.",
        logo: "dashboardkpi",
        soon: true,
      },
    ],
  },
  mlops: {""".replace("\r\n", "\n")

new_data = """      {
        slug: "learn-dashboard-kpi",
        title: "طراحی داشبورد و شاخص‌های KPI",
        en: "Dashboard Design & KPI Strategy",
        desc: "داشبوردی که همه‌چیز را نشان بدهد، هیچ‌چیز نمی‌گوید. انتخاب شاخص‌های کلیدی، سنجه‌های پیشرو و پسرو، چیدمان بصری و مهار خستگی هشدار.",
        logo: "dashboardkpi",
        soon: true,
      },
      {
        slug: "learn-duckdb",
        title: "داک‌دی‌بی و پردازش مدرن داده",
        en: "DuckDB & Modern In-Process Analytics",
        desc: "اجرای کوئری‌های تحلیلی پرسرعت روی سیستم محلی بدون نیاز به راه‌اندازی سرورهای سنگین. موتور ستونی برداری، پردازش موازی، کار با فایل‌های Parquet و جایگزینی پرسرعت برای Pandas.",
        logo: "duckdb",
        soon: true,
      },
    ],
  },
  mlops: {""".replace("\r\n", "\n")

assert old_data in text, "old_data not found"
text = text.replace(old_data, new_data, 1)

# 5. Add to mlops (after learn-mlflow)
old_mlops = """      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "بدون ردیابی آزمایش‌ها، تکرارپذیری فقط یک آرزوست. ثبت پارامترها و معیارها، بسته‌بندی مدل، رجیستری و استقرار در پروداکشن.",
        logo: "mlflow",
      },
    ],
  },
  ml: {""".replace("\r\n", "\n")

new_mlops = """      {
        slug: "learn-mlflow",
        title: "ام‌ال‌فلو",
        en: "MLflow",
        desc: "بدون ردیابی آزمایش‌ها، تکرارپذیری فقط یک آرزوست. ثبت پارامترها و معیارها، بسته‌بندی مدل، رجیستری و استقرار در پروداکشن.",
        logo: "mlflow",
      },
      {
        slug: "learn-dataops",
        title: "دیتاآپس",
        en: "DataOps",
        desc: "اعمال اصول چابک و مهندسی نرم‌افزار بر خطوط لوله داده. یکپارچه‌سازی و تحویل مداوم (CI/CD)، تست خودکار کیفیت داده، رصد سلامت پایپ‌لاین و کاهش زمان تحویل ارزش تجاری.",
        logo: "dataops",
        soon: true,
      },
      {
        slug: "learn-mlops",
        title: "ام‌ال‌آپس",
        en: "MLOps",
        desc: "پل ارتباطی میان مدل‌های تجربی علم داده و سیستم‌های پایدار عملیاتی. آموزش مداوم (CT)، خودکارسازی استقرار، پایش رانش داده و مفهوم (Drift) و مدیریت چرخه عمر مدل در پروداکشن.",
        logo: "mlops",
        soon: true,
      },
      {
        slug: "learn-llmops",
        title: "ال‌ال‌ام‌آپس و استنتاج مدل",
        en: "LLMOps & Model Serving",
        desc: "مدیریت، استقرار و بهینه‌سازی مدل‌های زبانی در مقیاس بالا. موتورهای استنتاج فوق‌سریع مانند vLLM و Triton، کشینگ معنایی، فریمورک‌های گاردریل، و پایش هزینه و تاخیر توکن‌ها.",
        logo: "llmops",
        soon: true,
      },
      {
        slug: "learn-mlsecops",
        title: "ام‌ال‌سک‌آپس و امنیت هوش مصنوعی",
        en: "MLSecOps & AI Security",
        desc: "حفاظت از پایپ‌لاین‌ها، داده‌ها و مدل‌های هوش مصنوعی در برابر حملات سایبری جدید. مقابله با تزریق پرامپت (Prompt Injection)، مسموم‌سازی دیتا، سرقت وزن مدل‌ها و ایمن‌سازی زنجیره تامین یادگیری ماشین.",
        logo: "mlsecops",
        soon: true,
      },
    ],
  },
  ml: {""".replace("\r\n", "\n")

assert old_mlops in text, "old_mlops not found"
text = text.replace(old_mlops, new_mlops, 1)

# 6. Add to ml (after learn-critical-thinking)
old_ml = """      {
        slug: "learn-critical-thinking",
        title: "تفکر نقاد در تحلیل و AI",
        en: "Critical Thinking in Data & AI",
        desc: "همبستگی علیت نیست و هر عدد معنادار، لزوماً معنادار نیست. شناسایی همبستگی‌های کاذب، پارادوکس سیمپسون، سوگیری داده و خطرات p-hacking.",
        logo: "criticalthinking",
        soon: true,
      },
    ],
  },
  web: {""".replace("\r\n", "\n")

new_ml = """      {
        slug: "learn-critical-thinking",
        title: "تفکر نقاد در تحلیل و AI",
        en: "Critical Thinking in Data & AI",
        desc: "همبستگی علیت نیست و هر عدد معنادار، لزوماً معنادار نیست. شناسایی همبستگی‌های کاذب، پارادوکس سیمپسون، سوگیری داده و خطرات p-hacking.",
        logo: "criticalthinking",
        soon: true,
      },
      {
        slug: "learn-rag",
        title: "سیستم‌های RAG و دیتابیس‌های برداری",
        en: "RAG & Vector Databases",
        desc: "پیوند مدل‌های زبانی به پایگاه‌های دانش اختصاصی بدون نیاز به آموزش پرهزینه مجدد. امبدینگ‌ها، الگوریتم‌های جستجوی برداری HNSW، پایگاه‌های داده برداری، رتبه‌بندی مجدد و ساخت پایپ‌لاین‌های پیشرفته بازیابی.",
        logo: "rag",
        soon: true,
      },
      {
        slug: "learn-agents",
        title: "عامل‌های هوشمند و سیستم‌های چندعاملی",
        en: "AI Agents & Multi-Agent Systems",
        desc: "گذار از چت‌بات‌های متنی ساده به سیستم‌های مستقلی که می‌توانند ابزارها را اجرا کنند و برنامه‌ریزی نمایند. الگوی ReAct، پروتکل باز MCP، حافظه و برنامه‌ریزی، و هماهنگ‌سازی چندین عامل همکار.",
        logo: "agents",
        soon: true,
      },
      {
        slug: "learn-optimization",
        title: "تحقیق در عملیات و بهینه‌سازی ریاضی",
        en: "Operations Research & Optimization",
        desc: "حل دقیق مسائل پیچیده تصمیم‌گیری، زمان‌بندی و زنجیره تامین که با یادگیری ماشین سنتی حل نمی‌شوند. برنامه‌ریزی خطی، عدد صحیح و الگوریتم‌های بهینه‌سازی با پایتون و OR-Tools.",
        logo: "optimization",
        soon: true,
      },
    ],
  },
  web: {""".replace("\r\n", "\n")

assert old_ml in text, "old_ml not found"
text = text.replace(old_ml, new_ml, 1)

# 7. Add to iot (after learn-enterprise-blockchain)
old_iot = """      {
        slug: "learn-enterprise-blockchain",
        title: "بلاکچین سازمانی و DLT",
        en: "Enterprise Blockchain",
        desc: "وقتی اعتماد بین طرف‌ها باید با فناوری تضمین شود، نه قرارداد کاغذی. رهگیری تغییرناپذیر زنجیره تأمین، قراردادهای هوشمند و Hyperledger Fabric.",
        logo: "blockchain",
        soon: true,
      },
    ],
  },
};""".replace("\r\n", "\n")

new_iot = """      {
        slug: "learn-enterprise-blockchain",
        title: "بلاکچین سازمانی و DLT",
        en: "Enterprise Blockchain",
        desc: "وقتی اعتماد بین طرف‌ها باید با فناوری تضمین شود، نه قرارداد کاغذی. رهگیری تغییرناپذیر زنجیره تأمین، قراردادهای هوشمند و Hyperledger Fabric.",
        logo: "blockchain",
        soon: true,
      },
      {
        slug: "learn-iiot",
        title: "اینترنت اشیاء صنعتی و پروتکل‌های لبه",
        en: "Industrial IoT & Edge Protocols",
        desc: "پل ارتباطی میان تجهیزات صنعتی در کارخانه‌ها و پلتفرم‌های تحلیل داده ابری. پروتکل‌های ارتباطی استانداردی چون MQTT و OPC-UA، پردازش تله‌متری بلادرنگ و امنیت داده در لبه شبکه.",
        logo: "iiot",
        soon: true,
      },
      {
        slug: "learn-tinyml",
        title: "هوش مصنوعی در لبه (TinyML)",
        en: "TinyML & Embedded AI",
        desc: "اجرای مدل‌های یادگیری عمیق روی میکروکنترلرهای کوچک با مصرف انرژی در حد میلی‌وات. فشرده‌سازی و کوانتیزاسیون وزن‌ها، کار با TensorFlow Lite for Microcontrollers و بینایی ماشین سبک در سخت‌افزارهای امبدد.",
        logo: "tinyml",
        soon: true,
      },
    ],
  },
};""".replace("\r\n", "\n")

assert old_iot in text, "old_iot not found"
text = text.replace(old_iot, new_iot, 1)

APP.write_text(text, encoding="utf-8")
print("app.js updated successfully with 16 new courses!")
