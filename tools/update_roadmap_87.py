"""Update ROADMAP.md with 87 courses and updated topology."""
from pathlib import Path

ROADMAP = Path(r"c:\Users\alisa\Desktop\Projects\learn-with-ali\ROADMAP.md")

content = """# Learn with Ali — Curriculum Roadmap

This document outlines the architectural roadmap and curriculum expansion for the **Learn with Ali** free interactive learning platform.

## Curriculum Vision

The mission of **Learn with Ali** is to provide rigorous, free, interactive, browser-executable education centered around:
- **Data Engineering & Distributed Systems**
- **Applied Statistics, Data Science & Machine Learning**
- **Industrial Automation, Business Processes & Industry 4.0**
- **Systems, Cloud Platforms, Quality Engineering & Modern Software Craftsmanship**

Every course adheres to an interactive-first paradigm: an isolated in-browser sandbox, incremental challenges, immediate verification feedback, and mental model visualizations.

---

## Catalog Topology (9 Disciplines · 87 Courses)

The curriculum is partitioned into nine foundational disciplines:

| # | Discipline | Scope & Focus | Active | In Development (Soon) | Total |
|---|------------|---------------|:------:|:---------------------:|:-----:|
| 1 | **Programming Languages** | Core computational paradigms, memory models, and syntax | 4 | 5 | 9 |
| 2 | **Shell, Systems & Tooling** | Low-level machine control, OS, networking & security | 6 | 1 | 7 |
| 3 | **Architecture & Methodology** | Software design, testing, technical docs, DDD, BPMN, AI PM & research methods | 0 | 10 | 10 |
| 4 | **Cloud, Platforms & Ops** | Scalable infrastructure, platforms, observability, Kubernetes & data cloud | 6 | 7 | 13 |
| 5 | **Data & Analytics** | Relational, document, modeling, governance, DuckDB & big data | 5 | 7 | 12 |
| 6 | **MLOps & Pipelines** | Model lifecycle, data versioning, DataOps, LLMOps, MLSecOps & stream processing | 5 | 4 | 9 |
| 7 | **Machine Learning & AI** | Mathematical foundations, algorithms, deep learning, LLMs, RAG, agents & optimization | 8 | 8 | 16 |
| 8 | **Web & Applications** | Data presentation, web applications, APIs & extraction | 6 | 0 | 6 |
| 9 | **IoT, Hardware & Edge** | Physical computing, edge analytics, industrial automation, protocols & TinyML | 0 | 5 | 5 |
| **Sum** | | | **40** | **47** | **87** |

---

## Detailed Course Breakdown

### 1. Programming Languages (`languages` · 9 Courses)
- `learn-python` — Python: Memory model, objects, interactive sandbox, data ecosystem foundation. *(Active)*
- `learn-r` — R: Statistical computing, live REPL, vectors, data manipulation. *(Active)*
- `learn-cpp` — C++: Memory management, pointers, ownership, low-level execution. *(Active)*
- `learn-rust` — Rust: Visual borrow checker, ownership semantics, zero-cost abstractions. *(Active)*
- `learn-go` — Go: Concurrency with goroutines, channels, fast cloud systems, data tooling. *(Soon)*
- `learn-julia` — Julia: High-performance scientific computing, multiple dispatch, numerical optimization. *(Soon)*
- `learn-java` — Java: Enterprise data platforms, big data infrastructure, JVM internals. *(Soon)*
- `learn-scala` — Scala: Functional-object-oriented hybrid, Apache Spark big data pipelines. *(Soon)*
- `learn-functional-programming` — Functional Programming: Immutability, pure functions, monads, stateless pipelines. *(Soon)*

### 2. Shell, Systems & Tooling (`systems` · 7 Courses)
- `learn-bash` — Bash: Linux command-line, pipes, text streams, automation scripting. *(Active)*
- `learn-powershell` — PowerShell: Object pipeline, system automation, Windows administration. *(Active)*
- `learn-cmd` — Windows CMD: Classic command shell, filesystem navigation, batch tooling. *(Active)*
- `learn-linux` — Linux / Ubuntu: OS fundamentals, processes, filesystem visualizer, user permissions. *(Active)*
- `learn-git` — Git: DAG revision graph, staging, branching, merging, interactive recovery. *(Active)*
- `learn-networking` — Networking: TCP/IP, OSI layers, DNS, routing, diagnostics for data & DevOps. *(Active)*
- `learn-cryptography` — Applied Cryptography: Hashing, symmetric/asymmetric encryption, digital signatures, data integrity. *(Soon)*

### 3. Architecture & Methodology (`architecture` · 10 Courses)
- `learn-software-design` — Software Design & Clean Code: SOLID principles, design patterns, refactoring, Clean Architecture. *(Soon)*
- `learn-testing` — Testing & Quality Engineering: Test-Driven Development (TDD), unit/integration testing, pytest, fixtures, mocks, data validation. *(Soon)*
- `learn-technical-docs` — Technical Docs & ADRs: Architecture Decision Records, RFCs, API specs, data contracts, engineering knowledge. *(Soon)*
- `learn-ddd` — Domain-Driven Design in Data & AI: Ubiquitous language, bounded contexts, aggregates, Data Mesh domain ownership. *(Soon)*
- `learn-bpmn` — Business Process Modeling (BPMN 2.0): Organizational workflows, decision gateways, events, automation engine integration. *(Soon)*
- `learn-scientific-writing` — Scientific Writing & Research: Empirical methodology, IMRAD structure, reproducibility, peer review. *(Soon)*
- `learn-tech-interviews` — Technical Interviewing for Data & Systems: Data system design, live algorithm and SQL coding, architecture defense. *(Soon)*
- `learn-ai-pm` — AI Project Management & ROI: Agile frameworks for probabilistic systems, CRISP-DM lifecycle, TCO modeling, and inference economic justification. *(Soon)*
- `learn-licensing` — Software, Data & AI Licensing: Open-source licenses (MIT/Apache/GPL), commercial model weights permissions, dataset copyrights, and compliance. *(Soon)*
- `learn-distributed-systems` — Distributed Systems Architecture: CAP theorem, Raft/Paxos consensus, sharding, replication, data synchronization, and event-driven topologies. *(Soon)*

### 4. Cloud, Platforms & Ops (`platforms` · 13 Courses)
- `learn-docker` — Docker: Containers, image layering, Dockerfile authoring, multi-container stacks. *(Active)*
- `learn-aws` — AWS: Core cloud infrastructure, storage, identity, compute for data workflows. *(Active)*
- `learn-azure` — Azure: Enterprise cloud architecture, data lakes, resource groups. *(Active)*
- `learn-databricks` — Databricks: Unified analytics engine, Lakehouse architecture, managed Spark. *(Soon)*
- `learn-snowflake` — Snowflake: Cloud data warehouse, zero-copy cloning, time travel, compute separation. *(Active)*
- `learn-grafana` — Grafana: Observability dashboards, metrics visualization, alerting rules. *(Active)*
- `learn-pkgm` — Package Management: pip, conda, uv dependency resolution, reproducible virtual environments. *(Active)*
- `learn-kibana` — Kibana: Elastic Stack visualization, log discovery, telemetry monitoring. *(Soon)*
- `learn-logstash` — Logstash: Real-time event extraction, grok parsing pipelines, index ingestion. *(Soon)*
- `learn-splunk` — Splunk: Enterprise SIEM, machine log analytics, SPL query mastery. *(Soon)*
- `learn-kubernetes` — Kubernetes: Cluster architecture, Pod orchestration, declarative deployments, StatefulSets, and cloud-native container scheduling. *(Soon)*
- `learn-gcp` — Google Cloud Platform (GCP): BigQuery analytics, Cloud Storage, serverless Cloud Run, and Vertex AI enterprise ecosystems. *(Soon)*
- `learn-terraform` — Terraform & IaC: HashiCorp Configuration Language (HCL), resource lifecycles, remote state management, modular infrastructure provisioning. *(Soon)*

### 5. Data & Analytics (`data` · 12 Courses)
- `learn-sql` — SQL: In-browser SQLite engine, relational algebra, window functions, query optimization. *(Active)*
- `learn-dax` — DAX: Power BI calculation engine, evaluation context, filter transitions. *(Active)*
- `learn-m` — Power Query M: Data transformation language, ETL pipelines, step-by-step evaluation. *(Active)*
- `learn-spark` — Apache Spark: Distributed datasets, DataFrames, cluster execution model, catalyst optimizer. *(Active)*
- `learn-hadoop` — Hadoop: HDFS architecture, MapReduce paradigm, YARN resource management. *(Active)*
- `learn-mongodb` — MongoDB: Document data modeling, BSON schema design, aggregation pipelines. *(Soon)*
- `learn-elasticsearch` — Elasticsearch: Inverted indexing, distributed search, BM25 text relevance, aggregations. *(Soon)*
- `learn-data-storytelling` — Data Storytelling & Visualization: Gestalt principles, cognitive load reduction, decluttering, executive narrative. *(Soon)*
- `learn-data-modeling` — Data Modeling & Dimensional Design (مدل‌سازی و معماری انبار داده): ERDs, normalization (1NF-BCNF), Kimball dimensional modeling, star/snowflake schemas, OLTP vs. OLAP. *(Soon)*
- `learn-data-governance` — Data Governance & Quality: Data contracts, lineage tracking, metadata catalogs, PII security, quality rules. *(Soon)*
- `learn-dashboard-kpi` — Dashboard Design & KPI Strategy: Metric selection matrices, leading vs. lagging indicators, cognitive hierarchy, alert fatigue prevention. *(Soon)*
- `learn-duckdb` — DuckDB & Modern In-Process Analytics: Columnar vector execution, Parquet processing, parallel analytical queries, and modern replacements for Pandas. *(Soon)*

### 6. MLOps & Pipelines (`mlops` · 9 Courses)
- `learn-dvc` — DVC: Data and model versioning, remote storage, reproducible pipelines. *(Active)*
- `learn-dbt` — dbt: In-warehouse transformations, SQL data modeling, lineage DAGs, automated testing. *(Active)*
- `learn-airflow` — Apache Airflow: Workflow orchestration, DAG authoring, task dependencies, sensor operators. *(Active)*
- `learn-kafka` — Apache Kafka: Event streaming, topic partitioning, consumer groups, fault tolerance. *(Active)*
- `learn-mlflow` — MLflow: Experiment tracking, parameter logging, model registry, artifact packaging. *(Active)*
- `learn-dataops` — DataOps: Agile software engineering principles for data pipelines, continuous integration (CI/CD), automated data quality test suites. *(Soon)*
- `learn-mlops` — MLOps: Bridge from experimental research to resilient production systems, Continuous Training (CT), deployment automation, and concept drift detection. *(Soon)*
- `learn-llmops` — LLMOps & Model Serving: High-throughput inference engines (vLLM/Triton), semantic caching, guardrail frameworks, token cost/latency telemetry. *(Soon)*
- `learn-mlsecops` — MLSecOps & AI Security: Defense against prompt injections, dataset poisoning, model inversion attacks, and securing ML supply chains. *(Soon)*

### 7. Machine Learning & AI (`ml` · 16 Courses)
- `learn-ml` — Machine Learning: Supervised/unsupervised algorithms, evaluation metrics, scikit-learn sandboxes. *(Active)*
- `learn-mlmath` — ML Math: Linear algebra, vector calculus, matrix decompositions, loss optimization. *(Soon)*
- `learn-mlstats` — ML Statistics: Hypothesis testing, probability distributions, Bayesian inference, confidence intervals. *(Soon)*
- `learn-ts` — Time Series & Forecasting: Temporal dependence, trend/seasonality decomposition, stationarity, ARIMA models, ML & deep forecasting. *(Active)*
- `learn-dl` — Deep Learning: Neural architectures, backpropagation, PyTorch/TensorFlow models. *(Active)*
- `learn-rl` — Reinforcement Learning: Markov Decision Processes, policy/value iteration, Q-learning. *(Active)*
- `learn-nlp` — Natural Language Processing: Tokenization, embeddings, sequence models, sentiment classification. *(Active)*
- `learn-cv` — Computer Vision: Convolutional operations, feature extraction, object detection. *(Active)*
- `learn-datastructure` — Data Structures (ساختمان داده): Trees, heaps, hash tables, graphs, disjoint sets in visual sandboxes. *(Active)*
- `learn-algorithm` — Algorithms: Sorting, searching, dynamic programming, graph traversal, asymptotic complexity. *(Active)*
- `learn-llm` — Large Language Models: Transformer attention mechanisms, prompt engineering, parameter-efficient fine-tuning (LoRA), and model alignment (RLHF/DPO). *(Soon)*
- `learn-ml-patterns` — ML Design Patterns: Feature store design, cascades, checkpointing, robust production patterns. *(Soon)*
- `learn-critical-thinking` — Critical Thinking in Data & AI: Spurious correlations, Simpson's paradox, selection bias, p-hacking risks, causal inference. *(Soon)*
- `learn-rag` — RAG & Vector Databases: External knowledge grounding, document chunking, HNSW vector indexing, pgvector/Qdrant/Milvus, hybrid retrieval, and reranking. *(Soon)*
- `learn-agents` — AI Agents & Multi-Agent Systems: Autonomous tool execution, ReAct loops, Open Model Context Protocol (MCP), cognitive architectures, and agentic orchestration. *(Soon)*
- `learn-optimization` — Operations Research & Optimization: Linear and mixed-integer programming (MILP), combinatorial optimization, OR-Tools, and logistical constraint solving. *(Soon)*

### 8. Web & Applications (`web` · 6 Courses)
- `learn-django` — Django: Batteries-included web framework, ORM, MVC architecture, migrations. *(Active)*
- `learn-flask` — Flask: Minimalist microframework, WSGI request cycle, route handlers, extensibility. *(Active)*
- `learn-streamlit` — Streamlit: Rapid analytical web applications, reactive widgets, data caching. *(Active)*
- `learn-shiny` — Shiny: Reactive web apps for R and Python, dashboarding, reactive graph visualization. *(Active)*
- `learn-api` — Modern APIs: RESTful principles, FastAPI, OpenAPI specifications, endpoint validation. *(Active)*
- `learn-scraping` — Web Scraping: HTTP requests, DOM parsing with BeautifulSoup, Selenium, production scraping patterns. *(Active)*

### 9. IoT, Hardware & Edge (`iot` · 5 Courses)
- `learn-arduino` — Arduino: Microcontroller programming, embedded C/C++, digital/analog I/O, I2C/SPI protocols. *(Soon)*
- `learn-raspberrypi` — Raspberry Pi: Single-board computers, embedded Linux, GPIO interfacing, edge data collection. *(Soon)*
- `learn-enterprise-blockchain` — Enterprise Blockchain & DLT: Immutable audit trails, supply chain provenance, Hyperledger Fabric, M2M verification. *(Soon)*
- `learn-iiot` — Industrial IoT & Edge Protocols: Industry 4.0 shopfloor connectivity, MQTT telemetry, OPC-UA protocol, real-time edge gateways, and industrial telemetry. *(Soon)*
- `learn-tinyml` — TinyML & Embedded AI: Ultra-low-power deep learning on microcontrollers, weight quantization, TensorFlow Lite for Microcontrollers, and embedded vision. *(Soon)*

---

## Pedagogical & Technical Standards

Every upcoming course repository must meet the following criteria prior to flipping from `soon: true` to active:

1. **Client-Side Execution**: Runs zero-backend in modern browsers via WebAssembly, Pyodide, WebR, SQLite Wasm, or emulated virtual filesystems.
2. **Pedagogical Progression**: Multi-tiered challenges (Levels 1 to N), progressive disclosure of complexity, clear error diagnostics.
3. **Responsive Visual Architecture**: Full desktop and mobile support adhering to the Editorial Luxury design system with RTL-first layout and isolated LTR technical tokens.
4. **Zero Fluff**: Direct, concise technical instructions without unnecessary boilerplate.
"""

ROADMAP.write_text(content.strip() + "\n", encoding="utf-8")
print("ROADMAP.md updated successfully with 87 courses!")
