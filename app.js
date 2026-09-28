/**
 * Learn with Ali â€” course catalog renderer.
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
    title: "Ø²Ø¨Ø§Ù†â€ŒÙ‡Ø§ÛŒ Ø¨Ø±Ù†Ø§Ù…Ù‡â€ŒÙ†ÙˆÛŒØ³ÛŒ",
    blurb: "Ù¾Ø§ÛŒÙ‡â€ŒÙ‡Ø§ÛŒ Ù…Ø­Ú©Ù… Ø¨Ø±Ø§ÛŒ Ù‡Ø± Ù…Ø³ÛŒØ± ÙÙ†ÛŒ",
    courses: [
      {
        slug: "learn-python",
        title: "Ù¾Ø§ÛŒØªÙˆÙ†",
        en: "Python",
        desc: "Ø­Ø§ÙØ¸Ù‡ØŒ <span class='tech' dir='ltr'>sandbox</span> ØªØ¹Ø§Ù…Ù„ÛŒ Ùˆ Ú†Ø§Ù„Ø´â€ŒÙ‡Ø§ÛŒ Ù¾Ù„Ú©Ø§Ù†ÛŒ â€” Ø§Ø² Ù…ØªØºÛŒØ± ØªØ§ Ù…Ø¯Ù„ Ø°Ù‡Ù†ÛŒ Ø§Ø´ÛŒØ§Ø¡.",
        logo: "python",
      },
      {
        slug: "learn-r",
        title: "Ø²Ø¨Ø§Ù† R",
        en: "R",
        desc: "Ù…Ø­ÛŒØ· <span class='tech' dir='ltr'>R</span> Ø²Ù†Ø¯Ù‡ØŒ Ø³Ø·Ø­â€ŒØ¨Ù†Ø¯ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ Ùˆ Ø§Ù…ØªÛŒØ§Ø²Ø¯Ù‡ÛŒ Ú¯Ù„Ù â€” Ø¨Ø±Ø§ÛŒ ØªØ­Ù„ÛŒÙ„ Ùˆ Ø¢Ù…Ø§Ø±.",
        logo: "r",
      },
      {
        slug: "learn-cpp",
        title: "C++",
        en: "C++",
        desc: "Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ø­Ø§ÙØ¸Ù‡: <span class='tech' dir='ltr'>pointer</span>ØŒ <span class='tech' dir='ltr'>ownership</span> Ùˆ Ø±ÙØªØ§Ø± ÙˆØ§Ù‚Ø¹ÛŒ Ù…Ø§Ø´ÛŒÙ†.",
        logo: "cpp",
      },
      {
        slug: "learn-rust",
        title: "Ø±Ø§Ø³Øª",
        en: "Rust",
        desc: "Ù…Ø§Ù„Ú©ÛŒØªØŒ <span class='tech' dir='ltr'>move</span> Ùˆ <span class='tech' dir='ltr'>borrow</span> Ø±Ø§ Ø¨ØµØ±ÛŒ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ â€” Ø¨Ø§ <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ Ú†Ø§Ù„Ø´ÛŒ.",
        logo: "rust",
      },
      {
        slug: "learn-ts",
        title: "ØªØ§ÛŒÙ¾â€ŒØ§Ø³Ú©Ø±ÛŒÙ¾Øª",
        en: "TypeScript",
        desc: "ØªØ§ÛŒÙ¾â€ŒØ³ÛŒØ³ØªÙ… Ù…Ø¯Ø±Ù† Ø¬Ø§ÙˆØ§Ø§Ø³Ú©Ø±ÛŒÙ¾ØªØŒ Ø¹Ù…ÛŒÙ‚ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ.",
        logo: "ts",
        soon: true,
      },
    ],
  },
  systems: {
    title: "Ø´Ù„ØŒ Ø³ÛŒØ³ØªÙ… Ùˆ Ø§Ø¨Ø²Ø§Ø±",
    blurb: "Ú©Ù†ØªØ±Ù„ ÙˆØ§Ù‚Ø¹ÛŒ Ø¨Ø± Ù…Ø§Ø´ÛŒÙ† Ùˆ Ø¬Ø±ÛŒØ§Ù† Ú©Ø§Ø±",
    courses: [
      {
        slug: "learn-bash",
        title: "Ø¨Ø´",
        en: "Bash",
        desc: "Ø¨Ø§ ØªØ§ÛŒÙ¾ Ø¯Ø³ØªÙˆØ± ÙˆØ§Ù‚Ø¹ÛŒØŒ <span class='tech' dir='ltr'>cwd</span>ØŒ ÙØ§ÛŒÙ„â€ŒÙ‡Ø§ Ùˆ <span class='tech' dir='ltr'>pipe</span>Ù‡Ø§ Ø±Ø§ Ø²Ù†Ø¯Ù‡ Ø¨Ø¨ÛŒÙ†ÛŒØ¯.",
        logo: "bash",
      },
      {
        slug: "learn-powershell",
        title: "Ù¾Ø§ÙˆØ±Ø´Ù„",
        en: "PowerShell",
        desc: " <span class='tech' dir='ltr'>pipeline</span> Ø§Ø´ÛŒØ§Ø¡ØŒ <span class='tech' dir='ltr'>state</span> Ø¬Ù„Ø³Ù‡ Ùˆ Ù…Ø¯Ù„ ÙÚ©Ø±ÛŒ <span class='tech' dir='ltr'>PowerShell</span> â€” Ø¨Ù‡ Ø³Ø¨Ú© <span class='tech' dir='ltr'>LGB.</span>",
        logo: "powershell",
      },
      {
        slug: "learn-cmd",
        title: "CMD ÙˆÛŒÙ†Ø¯ÙˆØ²",
        en: "Windows CMD",
        desc: "Ø®Ø· ÙØ±Ù…Ø§Ù† ÙˆÛŒÙ†Ø¯ÙˆØ² Ø¨Ø§ <span class='tech' dir='ltr'>visualizer</span> ÙØ§ÛŒÙ„â€ŒØ³ÛŒØ³ØªÙ…ØŒ <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ ØªÙ…Ø±ÛŒÙ†ÛŒ.",
        logo: "cmd",
      },
      {
        slug: "learn-linux",
        title: "Ù„ÛŒÙ†ÙˆÚ©Ø³",
        en: "Linux / Ubuntu",
        desc: "Ù…Ø±Ø¨ÛŒ Ø´Ù„ Ø§ÙˆØ¨ÙˆÙ†ØªÙˆ Ø¨Ø§ ÙØ§ÛŒÙ„â€ŒØ³ÛŒØ³ØªÙ… Ø²Ù†Ø¯Ù‡ØŒ Ø­Ø§Ù„Øª <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ú†Ø§Ù„Ø´â€ŒÙ‡Ø§ÛŒ Ù…Ø±Ø­Ù„Ù‡â€ŒØ§ÛŒ.",
        logo: "linux",
      },
      {
        slug: "learn-git",
        title: "Ú¯ÛŒØª",
        en: "Git",
        desc: "<span class='tech' dir='ltr'>stage</span>ØŒ <span class='tech' dir='ltr'>commit</span>ØŒ <span class='tech' dir='ltr'>branch</span>ØŒ <span class='tech' dir='ltr'>remote</span> Ùˆ Ø¨Ø§Ø²ÛŒØ§Ø¨ÛŒ â€” Ø¯Ø± ÛŒÚ© <span class='tech' dir='ltr'>sandbox</span> ØªØ¹Ø§Ù…Ù„ÛŒ.",
        logo: "git",
      },
      {
        slug: "learn-networking",
        title: "Ø´Ø¨Ú©Ù‡",
        en: "Networking",
        desc: "Ø¢Ø²Ù…Ø§ÛŒØ´Ú¯Ø§Ù‡ Ø´Ø¨Ú©Ù‡ Ø¨Ø±Ø§ÛŒ <span class='tech' dir='ltr'>data</span> Ùˆ <span class='tech' dir='ltr'>DevOps</span> â€” Ù„ÛŒÙ†ÙˆÚ©Ø³ Ùˆ ÙˆÛŒÙ†Ø¯ÙˆØ²ØŒ Ø³Ø·Ø­â€ŒØ¨Ù‡â€ŒØ³Ø·Ø­.",
        logo: "networking",
      },
    ],
  },
  platforms: {
    title: "Ø§Ø¨Ø±ØŒ Ù¾Ù„ØªÙØ±Ù… Ùˆ Ø¹Ù…Ù„ÛŒØ§Øª",
    blurb: "Ø²ÛŒØ±Ø³Ø§Ø®ØªÛŒ Ú©Ù‡ Ù…Ø¯Ù„â€ŒÙ‡Ø§ Ùˆ Ø¯Ø§Ø¯Ù‡ Ø±ÙˆÛŒ Ø¢Ù† Ù…ÛŒâ€ŒÙ†Ø´ÛŒÙ†Ø¯",
    courses: [
      {
        slug: "learn-docker",
        title: "Ø¯Ø§Ú©Ø±",
        en: "Docker",
        desc: "<span class='tech' dir='ltr'>container</span>ØŒ <span class='tech' dir='ltr'>image</span> Ùˆ <span class='tech' dir='ltr'>orchestration</span> Ù¾Ø§ÛŒÙ‡ â€” Ø¨Ø§ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ ØªØ¹Ø§Ù…Ù„ÛŒ.",
        logo: "docker",
      },
      {
        slug: "learn-aws",
        title: "AWS",
        en: "Amazon Web Services",
        desc: "Ù…ÙØ§Ù‡ÛŒÙ… Ø³Ø±ÙˆÛŒØ³â€ŒÙ‡Ø§ÛŒ Ø§Ø¨Ø±ÛŒ Ø¢Ù…Ø§Ø²ÙˆÙ† Ø¨Ø±Ø§ÛŒ Ù…Ù‡Ù†Ø¯Ø³ÛŒ Ø¯Ø§Ø¯Ù‡.",
        logo: "aws",
        soon: true,
      },
      {
        slug: "learn-azure",
        title: "Azure",
        en: "Microsoft Azure",
        desc: "Ù¾Ù„ØªÙØ±Ù… Ø§Ø¨Ø±ÛŒ Ù…Ø§ÛŒÚ©Ø±ÙˆØ³Ø§ÙØªØŒ Ø§Ø² Ù¾Ø§ÛŒÙ‡ ØªØ§ Ø§Ù„Ú¯ÙˆÙ‡Ø§ÛŒ Ø¯Ø§Ø¯Ù‡.",
        logo: "azure",
        soon: true,
      },
      {
        slug: "learn-databricks",
        title: "Ø¯ÛŒØªØ§Ø¨Ø±ÛŒÚ©Ø³",
        en: "Databricks",
        desc: "<span class='tech' dir='ltr'>Lakehouse</span>ØŒ <span class='tech' dir='ltr'>Spark</span> Ù…Ø¯ÛŒØ±ÛŒØªâ€ŒØ´Ø¯Ù‡ Ùˆ Ø¬Ø±ÛŒØ§Ù† Ú©Ø§Ø± ØªÛŒÙ…â€ŒÙ‡Ø§ÛŒ Ø¯Ø§Ø¯Ù‡.",
        logo: "databricks",
        soon: true,
      },
      {
        slug: "learn-snowflake",
        title: "Ø§Ø³Ù†ÙˆÙØ±ÛŒÚ©",
        en: "Snowflake",
        desc: "<span class='tech' dir='ltr'>Time</span> <span class='tech' dir='ltr'>Travel</span>ØŒ <span class='tech' dir='ltr'>clone</span>Ù‡Ø§ÛŒ <span class='tech' dir='ltr'>zero-copy</span>ØŒ <span class='tech' dir='ltr'>warehouse</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ <span class='tech' dir='ltr'>SQL.</span>",
        logo: "snowflake",
      },
      {
        slug: "learn-grafana",
        title: "Ú¯Ø±Ø§ÙØ§Ù†Ø§",
        en: "Grafana",
        desc: "<span class='tech' dir='ltr'>observability</span>ØŒ Ø¯Ø§Ø´Ø¨ÙˆØ±Ø¯ Ùˆ Ù‡Ø´Ø¯Ø§Ø± â€” Ø¨Ù‡â€ŒØµÙˆØ±Øª Ø¨Ø§Ø²ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ.",
        logo: "grafana",
      },
      {
        slug: "learn-pkgm",
        title: "Ù…Ø¯ÛŒØ±ÛŒØª Ø¨Ø³ØªÙ‡",
        en: "pip Â· conda Â· uv",
        desc: "Ù…Ø­ÛŒØ·â€ŒÙ‡Ø§ Ùˆ Ø¨Ø³ØªÙ‡â€ŒÙ‡Ø§: <span class='tech' dir='ltr'>pip</span>ØŒ <span class='tech' dir='ltr'>conda</span> Ùˆ <span class='tech' dir='ltr'>uv</span> â€” Ø¨Ø¯ÙˆÙ† Ø³Ø±Ø¯Ø±Ú¯Ù…ÛŒ.",
        logo: "pkgm",
      },
    ],
  },
  data: {
    title: "Ø¯Ø§Ø¯Ù‡ Ùˆ ØªØ­Ù„ÛŒÙ„",
    blurb: "Ø§Ø² SQL ØªØ§ Ø¯Ø±ÛŒØ§Ú†Ù‡â€ŒÙ‡Ø§ÛŒ Ø¯Ø§Ø¯Ù‡",
    courses: [
      {
        slug: "learn-sql",
        title: "SQL",
        en: "SQL",
        desc: "Ø³Ù†Ø¯Ø¨Ø§Ú©Ø³ <span class='tech' dir='ltr'>SQLite</span> Ø¯Ø± Ù…Ø±ÙˆØ±Ú¯Ø±ØŒ Ú†Ø§Ù„Ø´â€ŒÙ‡Ø§ÛŒ Ù‡Ø¯Ùâ€ŒÙ…Ø­ÙˆØ± Ùˆ <span class='tech' dir='ltr'>pipeline</span> Ú©ÙˆØ¦Ø±ÛŒ.",
        logo: "sql",
      },
      {
        slug: "learn-dax",
        title: "DAX",
        en: "DAX",
        desc: "<span class='tech' dir='ltr'>visualization</span> Ùˆ <span class='tech' dir='ltr'>sandbox</span> Ø²Ø¨Ø§Ù† <span class='tech' dir='ltr'>DAX</span> Ø¨Ø±Ø§ÛŒ <span class='tech' dir='ltr'>Power</span> <span class='tech' dir='ltr'>BI</span> â€” Ø¨Ø§ Ú†Ø§Ù„Ø´â€ŒÙ‡Ø§.",
        logo: "dax",
      },
      {
        slug: "learn-m",
        title: "Power Query M",
        en: "M",
        desc: "Ù…Ø±Ø¨ÛŒ <span class='tech' dir='ltr'>M</span> Ø¨Ù‡ Ø³Ø¨Ú© <span class='tech' dir='ltr'>learnGitBranching</span> â€” <span class='tech' dir='ltr'>visualization</span>ØŒ <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§.",
        logo: "m",
      },
      {
        slug: "learn-spark",
        title: "Ø§Ø³Ù¾Ø§Ø±Ú©",
        en: "Apache Spark",
        desc: "Ù¾Ø±Ø¯Ø§Ø²Ø´ ØªÙˆØ²ÛŒØ¹â€ŒØ´Ø¯Ù‡ØŒ Ø¨Ù‡â€ŒØµÙˆØ±Øª <span class='tech' dir='ltr'>sandbox</span> ØªØ¹Ø§Ù…Ù„ÛŒ.",
        logo: "spark",
      },
      {
        slug: "learn-hadoop",
        title: "Ù‡Ø¯ÙˆÙ¾",
        en: "Hadoop",
        desc: "<span class='tech' dir='ltr'>HDFS</span>ØŒ <span class='tech' dir='ltr'>YARN</span> Ùˆ <span class='tech' dir='ltr'>MapReduce</span> â€” Ù…Ø¹Ù…Ø§Ø±ÛŒ ÛŒÚ©Ø¬Ø§ØŒ Ù‚Ø§Ø¨Ù„ Ù„Ù…Ø³.",
        logo: "hadoop",
      },
    ],
  },
  mlops: {
    title: "MLOps Ùˆ Ù¾Ø§ÛŒÙ¾â€ŒÙ„Ø§ÛŒÙ†",
    blurb: "Ú†Ø±Ø®Ù‡Ù” Ø¹Ù…Ø± Ù…Ø¯Ù„ØŒ Ø¯Ø§Ø¯Ù‡ Ùˆ Ø¬Ø±ÛŒØ§Ù† Ø±ÙˆÛŒØ¯Ø§Ø¯",
    courses: [
      {
        slug: "learn-dvc",
        title: "DVC",
        en: "Data Version Control",
        desc: "Ù†Ø³Ø®Ù‡â€ŒØ¨Ù†Ø¯ÛŒ Ø¯Ø§Ø¯Ù‡ØŒ <span class='tech' dir='ltr'>cache</span>ØŒ <span class='tech' dir='ltr'>remote</span>ØŒ <span class='tech' dir='ltr'>pipeline</span> Ùˆ <span class='tech' dir='ltr'>experiment</span>Ù‡Ø§.",
        logo: "dvc",
      },
      {
        slug: "learn-dbt",
        title: "dbt",
        en: "dbt",
        desc: "<span class='tech' dir='ltr'>DAG</span> Ù…Ø¯Ù„â€ŒÙ‡Ø§ØŒ <span class='tech' dir='ltr'>selection</span> <span class='tech' dir='ltr'>grammar</span>ØŒ <span class='tech' dir='ltr'>materialization</span>ØŒ ØªØ³Øª Ùˆ <span class='tech' dir='ltr'>CI</span> Ù†Ø§Ø²Ú©.",
        logo: "dbt",
      },
      {
        slug: "learn-airflow",
        title: "Ø§ÛŒØ±ÙÙ„Ùˆ",
        en: "Apache Airflow",
        desc: "<span class='tech' dir='ltr'>DAG</span>ØŒ <span class='tech' dir='ltr'>task</span>ØŒ ÙˆØ§Ø¨Ø³ØªÚ¯ÛŒØŒ <span class='tech' dir='ltr'>schedule</span>ØŒ <span class='tech' dir='ltr'>retry</span> Ùˆ <span class='tech' dir='ltr'>operator</span> â€” Ø¯Ø± <span class='tech' dir='ltr'>sandbox.</span>",
        logo: "airflow",
      },
      {
        slug: "learn-kafka",
        title: "Ú©Ø§ÙÚ©Ø§",
        en: "Apache Kafka",
        desc: "<span class='tech' dir='ltr'>topic</span>ØŒ <span class='tech' dir='ltr'>partition</span>ØŒ <span class='tech' dir='ltr'>consumer</span>ØŒ <span class='tech' dir='ltr'>offset</span> Ùˆ <span class='tech' dir='ltr'>replication</span> Ø¨Ø§ <span class='tech' dir='ltr'>cluster</span> Ø²Ù†Ø¯Ù‡.",
        logo: "kafka",
      },
      {
        slug: "learn-mlflow",
        title: "Ø§Ù…â€ŒØ§Ù„â€ŒÙÙ„Ùˆ",
        en: "MLflow",
        desc: "Ù…Ø¯ÛŒØ±ÛŒØª Ø¢Ø²Ù…Ø§ÛŒØ´ØŒ <span class='tech' dir='ltr'>tracking</span> Ùˆ Ø«Ø¨Øª Ù…Ø¯Ù„ â€” Ø¨Ù‡â€ŒØµÙˆØ±Øª Ø¨Ø§Ø²ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ.",
        logo: "mlflow",
      },
    ],
  },
  ml: {
    title: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ† Ùˆ Ù‡ÙˆØ´ Ù…ØµÙ†ÙˆØ¹ÛŒ",
    blurb: "Ø§Ø² Ø¢Ù…Ø§Ø± Ùˆ Ø±ÛŒØ§Ø¶ÛŒ ØªØ§ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø¹Ù…ÛŒÙ‚",
    courses: [
      {
        slug: "learn-ml",
        title: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ù…Ø§Ø´ÛŒÙ†",
        en: "Machine Learning",
        desc: "Ù…ÙÙ‡ÙˆÙ… <span class='tech' dir='ltr'>ML</span> Ø­ÙˆÙ„ Ù…Ø¯Ù„ Ø°Ù‡Ù†ÛŒ <span class='tech' dir='ltr'>scikit-learn</span> â€” <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ Ù…ÙÙ‡ÙˆÙ…ÛŒ.",
        logo: "ml",
      },
      {
        slug: "learn-mlmath",
        title: "Ø±ÛŒØ§Ø¶ÛŒ ML",
        en: "ML Math",
        desc: "Ù¾Ø§ÛŒÙ‡â€ŒÙ‡Ø§ÛŒ Ø±ÛŒØ§Ø¶ÛŒâ€ŒØ§ÛŒ Ú©Ù‡ Ù…Ø¯Ù„â€ŒÙ‡Ø§ Ø±ÙˆÛŒ Ø¢Ù† Ø³ÙˆØ§Ø± Ù…ÛŒâ€ŒØ´ÙˆÙ†Ø¯.",
        logo: "mlmath",
        soon: true,
      },
      {
        slug: "learn-mlstats",
        title: "Ø¢Ù…Ø§Ø± ML",
        en: "ML Statistics",
        desc: "Ø¢Ù…Ø§Ø± Ø§Ø³ØªÙ†Ø¨Ø§Ø·ÛŒ Ùˆ Ø§Ø­ØªÙ…Ø§Ù„ØŒ Ø¯Ù‚ÛŒÙ‚ Ùˆ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ø¨Ø±Ø§ÛŒ Ù…Ø¯Ù„â€ŒØ³Ø§Ø²ÛŒ.",
        logo: "mlstats",
        soon: true,
      },
      {
        slug: "learn-dl",
        title: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ Ø¹Ù…ÛŒÙ‚",
        en: "Deep Learning",
        desc: "<span class='tech' dir='ltr'>PyTorch</span>ØŒ <span class='tech' dir='ltr'>TensorFlow</span> Ùˆ <span class='tech' dir='ltr'>Keras</span> â€” <span class='tech' dir='ltr'>visualization</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ ØªÙ…Ø±ÛŒÙ†ÛŒ.",
        logo: "dl",
      },
      {
        slug: "learn-rl",
        title: "ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ ØªÙ‚ÙˆÛŒØªÛŒ",
        en: "Reinforcement Learning",
        desc: "<span class='tech' dir='ltr'>MDP</span>ØŒ <span class='tech' dir='ltr'>value</span> Ùˆ <span class='tech' dir='ltr'>policy</span> Ø±Ø§ Ø¨ØµØ±ÛŒ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ Ùˆ Ù…Ø±Ø­Ù„Ù‡â€ŒÙ‡Ø§ Ø±Ø§ Ø­Ù„ Ú©Ù†ÛŒØ¯.",
        logo: "rl",
      },
      {
        slug: "learn-nlp",
        title: "Ù¾Ø±Ø¯Ø§Ø²Ø´ Ø²Ø¨Ø§Ù† Ø·Ø¨ÛŒØ¹ÛŒ",
        en: "NLP",
        desc: "Ø§Ø² ØªÙˆÚ©Ù†â€ŒØ³Ø§Ø²ÛŒ ØªØ§ Ù…Ø¯Ù„â€ŒÙ‡Ø§ÛŒ Ù…Ø¯Ø±Ù† Ø²Ø¨Ø§Ù†.",
        logo: "nlp",
        soon: true,
      },
      {
        slug: "learn-cv",
        title: "Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ù…Ø§Ø´ÛŒÙ†",
        en: "Computer Vision",
        desc: "Ù¾Ø±Ø¯Ø§Ø²Ø´ ØªØµÙˆÛŒØ± Ùˆ Ø¨ÛŒÙ†Ø§ÛŒÛŒ Ú©Ø§Ù…Ù¾ÛŒÙˆØªØ±ØŒ Ú©Ø§Ø±Ø¨Ø±Ø¯ÛŒ Ùˆ ØªØ¹Ø§Ù…Ù„ÛŒ.",
        logo: "cv",
        soon: true,
      },
      {
        slug: "learn-algorithm",
        title: "Ø§Ù„Ú¯ÙˆØ±ÛŒØªÙ…",
        en: "Algorithms",
        desc: "Ø§Ù„Ú¯ÙˆØ±ÛŒØªÙ…â€ŒÙ‡Ø§ Ø±Ø§ Ù†Ù‡ ÙÙ‚Ø· Ø¨Ø®ÙˆØ§Ù†ÛŒØ¯ â€” Ø§Ø¬Ø±Ø§ØŒ Ø¨ØµØ±ÛŒâ€ŒØ³Ø§Ø²ÛŒ Ùˆ Ù…Ù‚Ø§ÛŒØ³Ù‡ Ú©Ù†ÛŒØ¯.",
        logo: "algorithm",
      },
    ],
  },
  web: {
    title: "ÙˆØ¨ Ùˆ Ø§Ù¾Ù„ÛŒÚ©ÛŒØ´Ù†",
    blurb: "Ø³Ø§Ø®ØªØŒ Ø§Ù†ØªØ´Ø§Ø± Ùˆ ØªØ¹Ø§Ù…Ù„ Ø¨Ø§ Ø¯Ø§Ø¯Ù‡ Ø¯Ø± ÙˆØ¨",
    courses: [
      {
        slug: "learn-django",
        title: "Ø¬Ù†Ú¯Ùˆ",
        en: "Django",
        desc: "Ù…Ø¹Ù…Ø§Ø±ÛŒ <span class='tech' dir='ltr'>Django</span> Ø±Ø§ ØªØ§ÛŒÙ¾ Ú©Ù†ÛŒØ¯ØŒ Ú¯Ø±Ø§Ù Ø±Ø§ Ø¨Ø§Ø²Ø³ÛŒÙ…Ø§ÛŒÛŒ Ø¨Ø¨ÛŒÙ†ÛŒØ¯ØŒ Ø³Ø·Ø­ Ø±Ø§ Ø±Ø¯ Ú©Ù†ÛŒØ¯.",
        logo: "django",
      },
      {
        slug: "learn-flask",
        title: "ÙÙ„Ø³Ú©",
        en: "Flask",
        desc: "<span class='tech' dir='ltr'>pipeline</span> Ø¯Ø±Ø®ÙˆØ§Ø³ØªØŒ <span class='tech' dir='ltr'>sandbox</span> Ùˆ Ø³Ø·Ø­â€ŒÙ‡Ø§ÛŒ <span class='tech' dir='ltr'>Flask</span> â€” Ø³Ø¨Ú© <span class='tech' dir='ltr'>LGB.</span>",
        logo: "flask",
      },
      {
        slug: "learn-streamlit",
        title: "Ø§Ø³ØªØ±ÛŒÙ…Ù„ÛŒØª",
        en: "Streamlit",
        desc: "Ú©Ù„ÙˆÙ† <span class='tech' dir='ltr'>Streamlit/Pyodide</span> Ø§Ø² <span class='tech' dir='ltr'>learnGitBranching</span> â€” <span class='tech' dir='ltr'>sandbox</span>ØŒ Ø³Ø·Ø­ Ùˆ Ú¯Ø±Ø§Ù.",
        logo: "streamlit",
      },
      {
        slug: "learn-shiny",
        title: "Ø´Ø§ÛŒÙ†ÛŒ",
        en: "Shiny",
        desc: "Ø¢Ù…ÙˆØ²Ø´ Ùˆ <span class='tech' dir='ltr'>sandbox</span> Ø´Ø§ÛŒÙ†ÛŒ Ø¨Ø±Ø§ÛŒ <span class='tech' dir='ltr'>R</span> Ùˆ <span class='tech' dir='ltr'>Python.</span>",
        logo: "shiny",
      },
      {
        slug: "learn-api",
        title: "API",
        en: "API",
        desc: "Ø¨Ø§Ø²ÛŒ Ø¢Ù…ÙˆØ²Ø´ÛŒ <span class='tech' dir='ltr'>API</span> Ø¨Ø±Ø§ÛŒ <span class='tech' dir='ltr'>FastAPI</span>ØŒ <span class='tech' dir='ltr'>plumber</span> Ùˆ <span class='tech' dir='ltr'>OpenAPI.</span>",
        logo: "api",
      },
      {
        slug: "learn-scraping",
        title: "ÙˆØ¨â€ŒØ§Ø³Ú©Ø±Ù¾ÛŒÙ†Ú¯",
        en: "Web Scraping",
        desc: "<span class='tech' dir='ltr'>HTTP</span>ØŒ <span class='tech' dir='ltr'>BeautifulSoup</span>ØŒ <span class='tech' dir='ltr'>Selenium</span>ØŒ <span class='tech' dir='ltr'>Scrapy</span> Ùˆ Ø§Ù„Ú¯ÙˆÙ‡Ø§ÛŒ <span class='tech' dir='ltr'>production.</span>",
        logo: "scraping",
      },
    ],
  },
};

const FILTERS = [
  { id: "all", label: "Ù‡Ù…Ù‡" },
  { id: "languages", label: "Ø²Ø¨Ø§Ù†â€ŒÙ‡Ø§" },
  { id: "systems", label: "Ø´Ù„ Ùˆ Ø³ÛŒØ³ØªÙ…" },
  { id: "platforms", label: "Ø§Ø¨Ø± Ùˆ Ù¾Ù„ØªÙØ±Ù…" },
  { id: "data", label: "Ø¯Ø§Ø¯Ù‡" },
  { id: "mlops", label: "MLOps" },
  { id: "ml", label: "ML / AI" },
  { id: "web", label: "ÙˆØ¨" },
];

/**
 * Build a course card element.
 *
 * @param {Course} course
 * @returns {HTMLElement}
 */
function createCourseCard(course) {
  const card = document.createElement("a");
  card.className = `course-card reveal${course.soon ? " is-soon" : ""}`;
  card.href = course.soon ? "#support" : `${BASE}/${course.slug}/`;
  card.target = course.soon ? undefined : "_blank";
  card.rel = course.soon ? undefined : "noopener noreferrer";
  card.dataset.categorySoon = course.soon ? "1" : "0";

  card.innerHTML = `
    <div class="course-top">
      <div class="course-logo">
        <img src="assets/logos/${course.logo}.svg" alt="" width="48" height="48" loading="lazy" />
      </div>
      <div>
        <p class="course-title">${course.title}</p>
        <p class="course-en" dir="ltr">${course.en}</p>
      </div>
    </div>
    <p class="course-desc">${course.desc}</p>
    <div class="course-foot">
      <span class="course-tag">${course.soon ? "Ø¨Ù‡â€ŒØ²ÙˆØ¯ÛŒ" : "Ø´Ø±ÙˆØ¹ ÛŒØ§Ø¯Ú¯ÛŒØ±ÛŒ"}</span>
      <span class="course-go" aria-hidden="true">${course.soon ? "â€¦" : "â†—"}</span>
    </div>
  `;

  return card;
}

/**
 * Render categories and attach filter chips.
 *
 * @returns {void}
 */
function renderCourses() {
  const root = document.getElementById("course-root");
  const filterBar = document.querySelector(".filter-bar");
  if (!root || !filterBar) return;

  // chips
  filterBar.replaceChildren();
  FILTERS.forEach((f, index) => {
    const btn = document.createElement("button");
    btn.className = `filter-chip${index === 0 ? " is-active" : ""}`;
    btn.type = "button";
    btn.role = "tab";
    btn.ariaSelected = index === 0 ? "true" : "false";
    btn.dataset.filter = f.id;
    btn.textContent = f.label;
    filterBar.appendChild(btn);
  });

  // categories
  Object.entries(CATEGORIES).forEach(([key, cat]) => {
    const section = document.createElement("section");
    section.className = "category";
    section.dataset.category = key;
    section.id = `cat-${key}`;

    const head = document.createElement("div");
    head.className = "category-head reveal";
    head.innerHTML = `
      <div>
        <h3>${cat.title}</h3>
        <p>${cat.blurb}</p>
      </div>
      <p>${cat.courses.length} Ø¯ÙˆØ±Ù‡</p>
    `;

    const grid = document.createElement("div");
    grid.className = "course-grid";
    cat.courses.forEach((course) => grid.appendChild(createCourseCard(course)));

    section.appendChild(head);
    section.appendChild(grid);
    root.appendChild(section);
  });

  // filter behavior
  filterBar.addEventListener("click", (event) => {
    const target = event.target;
    if (!(target instanceof HTMLElement)) return;
    const filter = target.dataset.filter;
    if (!filter) return;

    filterBar.querySelectorAll(".filter-chip").forEach((chip) => {
      const active = chip === target;
      chip.classList.toggle("is-active", active);
      chip.setAttribute("aria-selected", active ? "true" : "false");
    });

    root.querySelectorAll(".category").forEach((section) => {
      const show = filter === "all" || section.dataset.category === filter;
      section.hidden = !show;
    });
  });
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

  // Safety: never leave content stuck at opacity 0 (printers, full-page captures, odd viewports)
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
 * Count live/total courses in hero stats.
 *
 * @returns {void}
 */
function setupStats() {
  const el = document.getElementById("stat-courses");
  if (!el) return;
  const all = Object.values(CATEGORIES).flatMap((c) => c.courses);
  el.textContent = String(all.length);
}

document.addEventListener("DOMContentLoaded", () => {
  renderCourses();
  setupNav();
  setupStats();
  setupReveal();
  const year = document.getElementById("year");
  if (year) year.textContent = String(new Date().getFullYear());
});

