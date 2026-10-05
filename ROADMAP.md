# Aghili Labs — Curriculum Roadmap

This document outlines the architectural roadmap and curriculum expansion for the **Aghili Labs** free interactive learning platform.

## Curriculum Vision

The mission of **Aghili Labs** is to provide rigorous, free, interactive, browser-executable education centered around:
- **Data Engineering & Distributed Systems**
- **Applied Statistics, Data Science & Machine Learning**
- **Industrial Automation, Business Processes & Industry 4.0**
- **Systems, Cloud Platforms, Quality Engineering & Modern Software Craftsmanship**

Every course adheres to an interactive-first paradigm: an isolated in-browser sandbox, incremental challenges, immediate verification feedback, and mental model visualizations.

---

## Catalog Topology (9 Disciplines · 88 Courses)

The curriculum is partitioned into nine foundational disciplines:

| # | Discipline | Scope & Focus | Published | Nearly Complete | In Development | Planned | Total |
|---|------------|---------------|:---------:|:---------------:|:--------------:|:-------:|:-----:|
| 1 | **Programming Languages** | Core computational paradigms, memory models, and syntax | 1 | 2 | 2 | 4 | 9 |
| 2 | **Shell, Systems & Tooling** | Low-level machine control, OS, networking & security | 1 | 3 | 2 | 1 | 7 |
| 3 | **Architecture & Methodology** | Software design, testing, technical docs, DDD, BPMN, AI PM & research methods | 0 | 0 | 0 | 10 | 10 |
| 4 | **Cloud, Platforms & Ops** | Scalable infrastructure, platforms, observability, Kubernetes & data cloud | 0 | 0 | 6 | 7 | 13 |
| 5 | **Data & Analytics** | Relational, document, modeling, governance, DuckDB & big data | 0 | 0 | 5 | 7 | 12 |
| 6 | **MLOps & Pipelines** | Model lifecycle, data versioning, DataOps, LLMOps, MLSecOps & stream processing | 2 | 0 | 3 | 4 | 9 |
| 7 | **Machine Learning & AI** | Mathematical foundations, algorithms, deep learning, LLMs, RAG, agents & optimization | 0 | 2 | 6 | 8 | 16 |
| 8 | **Web & Applications** | Data presentation, web applications, DOM architecture, APIs & extraction | 0 | 0 | 6 | 1 | 7 |
| 9 | **IoT, Hardware & Edge** | Physical computing, edge analytics, industrial automation, protocols & TinyML | 0 | 0 | 0 | 5 | 5 |
| **Sum** | | | **4** | **7** | **30** | **47** | **88** |

---

## Detailed Course Breakdown

### 1. Programming Languages (`languages` · 9 Courses)
- `learn-python` — Python: Memory model, objects, interactive sandbox, data ecosystem foundation. *(Nearly Complete)*
- `learn-r` — R: Statistical computing, live REPL, vectors, data manipulation. *(Published)*
- `learn-cpp` — C++: Memory management, pointers, ownership, low-level execution. *(In Development)*
- `learn-rust` — Rust: Visual borrow checker, ownership semantics, zero-cost abstractions. *(In Development)*
- `learn-go` — Go: Concurrency with goroutines, channels, fast cloud systems, data tooling. *(Planned)*
- `learn-julia` — Julia: High-performance scientific computing, multiple dispatch, numerical optimization. *(Planned)*
- `learn-java` — Java: Enterprise data platforms, big data infrastructure, JVM internals. *(Planned)*
- `learn-scala` — Scala: Functional-object-oriented hybrid, Apache Spark big data pipelines. *(Planned)*
- `learn-functional-programming` — Functional Programming: Immutability, pure functions, monads, stateless pipelines. *(Nearly Complete)*

### 2. Shell, Systems & Tooling (`systems` · 7 Courses)
- `learn-bash` — Bash: Linux command-line, pipes, text streams, automation scripting. *(In Development)*
- `learn-powershell` — PowerShell: Object pipeline, system automation, Windows administration. *(Nearly Complete)*
- `learn-cmd` — Windows CMD: Classic command shell, filesystem navigation, batch tooling. *(Published)*
- `learn-linux` — Linux / Ubuntu: OS fundamentals, processes, filesystem visualizer, user permissions. *(Nearly Complete)*
- `learn-git` — Git: DAG revision graph, staging, branching, merging, interactive recovery. *(Nearly Complete)*
- `learn-networking` — Networking: TCP/IP, OSI layers, DNS, routing, diagnostics for data & DevOps. *(In Development)*
- `learn-cryptography` — Applied Cryptography: Hashing, symmetric/asymmetric encryption, digital signatures, data integrity. *(Planned)*

### 3. Architecture & Methodology (`architecture` · 10 Courses)
- `learn-software-design` — Software Design & Clean Code: SOLID principles, design patterns, refactoring, Clean Architecture. *(Planned)*
- `learn-testing` — Testing & Quality Engineering: Test-Driven Development (TDD), unit/integration testing, pytest, fixtures, mocks, data validation. *(Planned)*
- `learn-technical-docs` — Technical Docs & ADRs: Architecture Decision Records, RFCs, API specs, data contracts, engineering knowledge. *(Planned)*
- `learn-ddd` — Domain-Driven Design in Data & AI: Ubiquitous language, bounded contexts, aggregates, Data Mesh domain ownership. *(Planned)*
- `learn-bpmn` — Business Process Modeling (BPMN 2.0): Organizational workflows, decision gateways, events, automation engine integration. *(Planned)*
- `learn-scientific-writing` — Scientific Writing & Research: Empirical methodology, IMRAD structure, reproducibility, peer review. *(Planned)*
- `learn-tech-interviews` — Technical Interviewing for Data & Systems: Data system design, live algorithm and SQL coding, architecture defense. *(Planned)*
- `learn-ai-pm` — AI Project Management & ROI: Agile frameworks for probabilistic systems, CRISP-DM lifecycle, TCO modeling, and inference economic justification. *(Planned)*
- `learn-licensing` — Software, Data & AI Licensing: Open-source licenses (MIT/Apache/GPL), commercial model weights permissions, dataset copyrights, and compliance. *(Planned)*
- `learn-distributed-systems` — Distributed Systems Architecture: CAP theorem, Raft/Paxos consensus, sharding, replication, data synchronization, and event-driven topologies. *(Planned)*

### 4. Cloud, Platforms & Ops (`platforms` · 13 Courses)
- `learn-docker` — Docker: Containers, image layering, Dockerfile authoring, multi-container stacks. *(In Development)*
- `learn-aws` — AWS: Core cloud infrastructure, storage, identity, compute for data workflows. *(In Development)*
- `learn-azure` — Azure: Enterprise cloud architecture, data lakes, resource groups. *(In Development)*
- `learn-databricks` — Databricks: Unified analytics engine, Lakehouse architecture, managed Spark. *(Planned)*
- `learn-snowflake` — Snowflake: Cloud data warehouse, zero-copy cloning, time travel, compute separation. *(In Development)*
- `learn-grafana` — Grafana: Observability dashboards, metrics visualization, alerting rules. *(In Development)*
- `learn-pkgm` — Package Management: pip, conda, uv dependency resolution, reproducible virtual environments. *(In Development)*
- `learn-kibana` — Kibana: Elastic Stack visualization, log discovery, telemetry monitoring. *(Planned)*
- `learn-logstash` — Logstash: Real-time event extraction, grok parsing pipelines, index ingestion. *(Planned)*
- `learn-splunk` — Splunk: Enterprise SIEM, machine log analytics, SPL query mastery. *(Planned)*
- `learn-kubernetes` — Kubernetes: Cluster architecture, Pod orchestration, declarative deployments, StatefulSets, and cloud-native container scheduling. *(Planned)*
- `learn-gcp` — Google Cloud Platform (GCP): BigQuery analytics, Cloud Storage, serverless Cloud Run, and Vertex AI enterprise ecosystems. *(Planned)*
- `learn-terraform` — Terraform & IaC: HashiCorp Configuration Language (HCL), resource lifecycles, remote state management, modular infrastructure provisioning. *(Planned)*

### 5. Data & Analytics (`data` · 12 Courses)
- `learn-sql` — SQL: In-browser SQLite engine, relational algebra, window functions, query optimization. *(In Development)*
- `learn-dax` — DAX: Power BI calculation engine, evaluation context, filter transitions. *(In Development)*
- `learn-m` — Power Query M: Data transformation language, ETL pipelines, step-by-step evaluation. *(In Development)*
- `learn-spark` — Apache Spark: Distributed datasets, DataFrames, cluster execution model, catalyst optimizer. *(In Development)*
- `learn-hadoop` — Hadoop: HDFS architecture, MapReduce paradigm, YARN resource management. *(In Development)*
- `learn-mongodb` — MongoDB: Document data modeling, BSON schema design, aggregation pipelines. *(Planned)*
- `learn-elasticsearch` — Elasticsearch: Inverted indexing, distributed search, BM25 text relevance, aggregations. *(Planned)*
- `learn-data-storytelling` — Data Storytelling & Visualization: Gestalt principles, cognitive load reduction, decluttering, executive narrative. *(Planned)*
- `learn-data-modeling` — Data Modeling & Dimensional Design (مدل‌سازی و معماری انبار داده): ERDs, normalization (1NF-BCNF), Kimball dimensional modeling, star/snowflake schemas, OLTP vs. OLAP. *(Planned)*
- `learn-data-governance` — Data Governance & Quality: Data contracts, lineage tracking, metadata catalogs, PII security, quality rules. *(Planned)*
- `learn-dashboard-kpi` — Dashboard Design & KPI Strategy: Metric selection matrices, leading vs. lagging indicators, cognitive hierarchy, alert fatigue prevention. *(Planned)*
- `learn-duckdb` — DuckDB & Modern In-Process Analytics: Columnar vector execution, Parquet processing, parallel analytical queries, and modern replacements for Pandas. *(Planned)*

### 6. MLOps & Pipelines (`mlops` · 9 Courses)
- `learn-dvc` — DVC: Data and model versioning, remote storage, reproducible pipelines. *(Published)*
- `learn-dbt` — dbt: In-warehouse transformations, SQL data modeling, lineage DAGs, automated testing. *(Published)*
- `learn-airflow` — Apache Airflow: Workflow orchestration, DAG authoring, task dependencies, sensor operators. *(In Development)*
- `learn-kafka` — Apache Kafka: Event streaming, topic partitioning, consumer groups, fault tolerance. *(In Development)*
- `learn-mlflow` — MLflow: Experiment tracking, parameter logging, model registry, artifact packaging. *(In Development)*
- `learn-dataops` — DataOps: Agile software engineering principles for data pipelines, continuous integration (CI/CD), automated data quality test suites. *(Planned)*
- `learn-mlops` — MLOps: Bridge from experimental research to resilient production systems, Continuous Training (CT), deployment automation, and concept drift detection. *(Planned)*
- `learn-llmops` — LLMOps & Model Serving: High-throughput inference engines (vLLM/Triton), semantic caching, guardrail frameworks, token cost/latency telemetry. *(Planned)*
- `learn-mlsecops` — MLSecOps & AI Security: Defense against prompt injections, dataset poisoning, model inversion attacks, and securing ML supply chains. *(Planned)*

### 7. Machine Learning & AI (`ml` · 16 Courses)
- `learn-ml` — Machine Learning: Supervised/unsupervised algorithms, evaluation metrics, scikit-learn sandboxes. *(Nearly Complete)*
- `learn-mlmath` — ML Math: Linear algebra, vector calculus, matrix decompositions, loss optimization. *(Planned)*
- `learn-mlstats` — ML Statistics: Hypothesis testing, probability distributions, Bayesian inference, confidence intervals. *(Planned)*
- `learn-ts` — Time Series & Forecasting: Temporal dependence, trend/seasonality decomposition, stationarity, ARIMA models, ML & deep forecasting. *(Nearly Complete)*
- `learn-dl` — Deep Learning: Neural architectures, backpropagation, PyTorch/TensorFlow models. *(In Development)*
- `learn-rl` — Reinforcement Learning: Markov Decision Processes, policy/value iteration, Q-learning. *(In Development)*
- `learn-nlp` — Natural Language Processing: Tokenization, embeddings, sequence models, sentiment classification. *(In Development)*
- `learn-cv` — Computer Vision: Convolutional operations, feature extraction, object detection. *(In Development)*
- `learn-datastructure` — Data Structures (ساختمان داده): Trees, heaps, hash tables, graphs, disjoint sets in visual sandboxes. *(In Development)*
- `learn-algorithm` — Algorithms: Sorting, searching, dynamic programming, graph traversal, asymptotic complexity. *(In Development)*
- `learn-llm` — Large Language Models: Transformer attention mechanisms, prompt engineering, parameter-efficient fine-tuning (LoRA), and model alignment (RLHF/DPO). *(Planned)*
- `learn-ml-patterns` — ML Design Patterns: Feature store design, cascades, checkpointing, robust production patterns. *(Planned)*
- `learn-critical-thinking` — Critical Thinking in Data & AI: Spurious correlations, Simpson's paradox, selection bias, p-hacking risks, causal inference. *(Planned)*
- `learn-rag` — RAG & Vector Databases: External knowledge grounding, document chunking, HNSW vector indexing, pgvector/Qdrant/Milvus, hybrid retrieval, and reranking. *(Planned)*
- `learn-agents` — AI Agents & Multi-Agent Systems: Autonomous tool execution, ReAct loops, Open Model Context Protocol (MCP), cognitive architectures, and agentic orchestration. *(Planned)*
- `learn-optimization` — Operations Research & Optimization: Linear and mixed-integer programming (MILP), combinatorial optimization, OR-Tools, and logistical constraint solving. *(Planned)*

### 8. Web & Applications (`web` · 7 Courses)
- `learn-web-fundamentals` — Web Fundamentals & DOM Architecture: HTTP request/response lifecycle, DOM tree representation, CSS selectors, CSR vs. SSR, and browser developer tooling. *(Planned)*
- `learn-django` — Django: Batteries-included web framework, ORM, MVC architecture, migrations. *(In Development)*
- `learn-flask` — Flask: Minimalist microframework, WSGI request cycle, route handlers, extensibility. *(In Development)*
- `learn-streamlit` — Streamlit: Rapid analytical web applications, reactive widgets, data caching. *(In Development)*
- `learn-shiny` — Shiny: Reactive web apps for R and Python, dashboarding, reactive graph visualization. *(In Development)*
- `learn-api` — Modern APIs: RESTful principles, FastAPI, OpenAPI specifications, endpoint validation. *(In Development)*
- `learn-scraping` — Web Scraping: HTTP requests, DOM parsing with BeautifulSoup, Selenium, production scraping patterns. *(In Development)*

### 9. IoT, Hardware & Edge (`iot` · 5 Courses)
- `learn-arduino` — Arduino: Microcontroller programming, embedded C/C++, digital/analog I/O, I2C/SPI protocols. *(Planned)*
- `learn-raspberrypi` — Raspberry Pi: Single-board computers, embedded Linux, GPIO interfacing, edge data collection. *(Planned)*
- `learn-enterprise-blockchain` — Enterprise Blockchain & DLT: Immutable audit trails, supply chain provenance, Hyperledger Fabric, M2M verification. *(Planned)*
- `learn-iiot` — Industrial IoT & Edge Protocols: Industry 4.0 shopfloor connectivity, MQTT telemetry, OPC-UA protocol, real-time edge gateways, and industrial telemetry. *(Planned)*
- `learn-tinyml` — TinyML & Embedded AI: Ultra-low-power deep learning on microcontrollers, weight quantization, TensorFlow Lite for Microcontrollers, and embedded vision. *(Planned)*

---

## Pedagogical & Technical Standards

Every course repository must meet the following criteria prior to being marked as published:

1. **Client-Side Execution**: Runs zero-backend in modern browsers via WebAssembly, Pyodide, WebR, SQLite Wasm, or emulated virtual filesystems.
2. **Pedagogical Progression**: Multi-tiered challenges (Levels 1 to N), progressive disclosure of complexity, clear error diagnostics.
3. **Responsive Visual Architecture**: Full desktop and mobile support adhering to the Editorial Luxury design system with RTL-first layout and isolated LTR technical tokens.
4. **Zero Fluff**: Direct, concise technical instructions without unnecessary boilerplate.
