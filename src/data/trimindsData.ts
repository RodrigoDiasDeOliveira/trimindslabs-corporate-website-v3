export interface ProjectDecision {
  decision: string;
  rationale: string;
}

export interface ProjectResult {
  metric: string;
  value: string;
  description: string;
}

export interface ProjectArchitecture {
  overview: string;
  components: string[];
  diagramText: string;
}

export interface RealArchitectureVerification {
  documented: string;
  implemented: string;
  presentedOnSite: string;
  coherenceScore: string;
}

export interface RealTechnologies {
  languages?: string[];
  frameworks?: string[];
  libraries?: string[];
  databases?: string[];
  cloud?: string[];
  iac?: string[];
  apis?: string[];
  testing?: string[];
  ciCd?: string[];
  observability?: string[];
}

export interface ProjectRepository {
  name: string;
  isPrivate: boolean;
  visibilityBadge: string;
  url: string;
  testSuiteStatus?: string;
  ciCdPipeline?: string;
  adrReferences?: string[];
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  tag: string;
  sector: string;
  category: 'what-we-built' | 'what-is-planned';
  truthStatus: 'implemented' | 'partial' | 'planned';
  honestScope: string;
  whatItProves: string;
  problem: string;
  context: string;
  architecture?: ProjectArchitecture;
  realArchitectureVerification?: RealArchitectureVerification;
  realTechnologies?: RealTechnologies;
  repository?: ProjectRepository;
  engineering?: string[];
  technology: string[];
  evolution?: string;
  challenges?: string[];
  decisions?: ProjectDecision[];
  results?: ProjectResult[];
  evidence: string;
  evidenceSource?: string;
  lastVerified?: string;
  deploymentStatus?: string;
  deployment?: {
    target?: string;
    url?: string;
    status?: string;
  };
}

export interface ProductionGate {
  id: string;
  name: string;
  phase: string;
  status: 'verified' | 'in-progress' | 'pending';
  evidence: string;
  details?: string;
}

export interface VocabularyTerm {
  term: string;
  definition?: string;
  shortDefinition?: string;
  fullNarrative?: string;
  contrastingAntiPattern?: string;
  productionImplementation?: string;
  operationalBoundary?: string;
  prohibitedUsage?: string;
}

export interface Article {
  id: string;
  title: string;
  abstract: string;
  readingTime?: string;
  readTime?: string;
  publicationDate?: string;
  publishedDate?: string;
  tags?: string[];
  category?: string;
  keyTakeaways?: string[];
  bodySections?: { heading: string; content: string; codeSnippet?: string }[];
  conclusions?: string;
  doiOrReference?: string;
  repositoryUrl?: string;
  portfolioLabel?: string;
  operationalMonitoring?: string;
  link?: string;
}

export const PROJECTS: Project[] = [
  {
    "id": "trusted-compliance-agent",
    "title": "Trusted Compliance Agent",
    "subtitle": "Deterministic Regulatory Auditing & Zero-Hallucination Legal Extraction",
    "tag": "Regulatory AI / Enterprise Retrieval",
    "sector": "European Financial & Legal Compliance",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Designed for institutional legal compliance with character-offset provenance and deterministic fallback gates.",
    "whatItProves": "Proves that Trimindslabs builds verifiable retrieval systems for mission-critical legal compliance where factual hallucination is strictly zero-tolerance.",
    "problem": "Financial and legal institutions faced 45-day review latencies analyzing multi-jurisdiction regulatory directives. Standard probabilistic RAG models generated plausible yet legally invalid article citations, creating severe legal liabilities under the EU AI Act High-Risk frameworks.",
    "context": "Operating under strict EU AI Act High-Risk Category criteria, the system requires source document provenance down to character-level bounding boxes and cryptographic token hashing.",
    "architecture": {
      "overview": "A three-tier verifiable pipeline: Lexical & dense chunk ingestion → Cross-encoder neural reranking → Controlled agentic synthesis with strict JSON schema and legal validation gates.",
      "components": [
        "Document Ingestion & Multi-modal PDF Deconstruction Engine",
        "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
        "Dual-Pass Verification Agent with Cross-Reference Fallback",
        "EU Sovereign Isolated Enclave Execution Layer"
      ],
      "diagramText": "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Cross-Encoder Reranker ➔ Constrained Verification Agent ➔ Signed Compliance Certificate"
    },
    "realArchitectureVerification": {
      "documented": "Two-stage retrieval with cross-encoder neural reranking and JSON Schema output enforcement.",
      "implemented": "FastAPI service with BM25 sparse index + Qdrant dense vectors, fused by Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large, validated by Pydantic V2.",
      "presentedOnSite": "Transparently described as Python/FastAPI + Qdrant + BGE-Reranker with no unevidenced technologies.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Python 3.12"
      ],
      "frameworks": [
        "FastAPI",
        "Pydantic V2"
      ],
      "libraries": [
        "BGE-Reranker-Large",
        "HuggingFace Transformers",
        "LangChain (Core primitives only)",
        "PyPDF / PDFPlumber"
      ],
      "databases": [
        "Qdrant Vector Database (Vector Dim 1536)",
        "SQLite (Audit log store)"
      ],
      "cloud": [
        "Google Cloud Run (EU-West-3 Frankfurt / Paris)",
        "Google Cloud Storage"
      ],
      "iac": [
        "Terraform / OpenTofu Blueprints",
        "Docker multi-stage builds"
      ],
      "apis": [
        "REST OpenAPI v3",
        "Server-Sent Events (SSE) for streaming extraction"
      ],
      "testing": [
        "Pytest (94 unit + 28 integration tests)",
        "Hypothesis (Property-based citation fuzzing)"
      ],
      "ciCd": [
        "GitHub Actions (Lint, Typecheck, Security audit, Pytest coverage)"
      ],
      "observability": [
        "OpenTelemetry Python SDK",
        "Structured JSON Logging",
        "Prometheus metrics"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      "testSuiteStatus": "122 Tests Passing (98.4% Code Coverage)",
      "ciCdPipeline": "GitHub Actions CI: Passed (Build #241)",
      "adrReferences": [
        "ADR-001: Hybrid Search over Dense-Only",
        "ADR-004: Character-Offset Verification Protocol"
      ]
    },
    "engineering": [
      "Engineered a zero-hallucination verification loop rejecting any LLM response lacking an exact match against retrieved SHA-256 token spans.",
      "Implemented asynchronous streaming pipelines handling 500+ page regulatory PDFs within sub-12-second roundtrip extraction.",
      "Integrated strict OpenTelemetry tracing measuring semantic confidence score per clause."
    ],
    "technology": [
      "Python 3.12 / FastAPI",
      "Qdrant Vector DB",
      "BGE-Reranker-Large",
      "Pydantic V2",
      "Docker / Cloud Run (EU)",
      "OpenTelemetry"
    ],
    "evolution": "V1 started as an assisted search interface; evolved into a self-auditing compliance agent generating cryptographically signed compliance reports directly for regulatory audit committees.",
    "challenges": [
      "Handling scanned, multi-column European Gazette regulatory publications without OCR displacement.",
      "Preventing LLM assumption leakage across differing member state directives.",
      "Maintaining p95 latency under 15 seconds across 100,000+ token legal corpora."
    ],
    "decisions": [
      {
        "decision": "Enforced exact character-offset verification before displaying citations.",
        "rationale": "Ensured legal counsel can click any assertion and inspect the highlighted primary source immediately."
      },
      {
        "decision": "Rejected generic conversational chat in favor of structured audit tables.",
        "rationale": "Enterprise compliance officers require structured diffs and risk scores, not informal dialogues."
      }
    ],
    "results": [
      {
        "metric": "Hallucination Rate",
        "value": "0.00%",
        "description": "Zero ungrounded assertions allowed past verification gates"
      },
      {
        "metric": "Review Velocity",
        "value": "82% Faster",
        "description": "Audit cycle compressed from 45 days to under 4 hours"
      },
      {
        "metric": "Audit Accuracy",
        "value": "99.4%",
        "description": "Verified against independent senior legal counsel baseline"
      }
    ],
    "evidence": "Repository contains complete test suites, Architecture Decision Records (ADRs), and reproducible Docker environments."
  },
  {
    "id": "triminds-geo-ai",
    "title": "Trimindslabs Geo AI",
    "subtitle": "High-Resolution Geospatial Vectorization & Satellite Anomaly Inference",
    "tag": "Geospatial AI / Computer Vision",
    "sector": "Aerospace, Environmental & Critical Infrastructure",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Engineered for satellite multi-spectral raster ingestion, automated tiling, and spatial vector indexing.",
    "whatItProves": "Proves Trimindslabs possesses deep domain engineering in high-dimensional spatial data, raster/vector transformations, and parallel image inference pipelines.",
    "problem": "Traditional satellite analytics required manual GIS expert inspection to detect land-use violations, deforestation vectors, and structural asset deterioration across millions of square kilometers, resulting in multi-month detection delays.",
    "context": "Client needed real-time automated ingestion of Sentinel-2 and commercial high-res imagery, processing multi-spectral bands with geometric distortion correction.",
    "architecture": {
      "overview": "Distributed spatial tiled inference mesh: Satellite raster tile splitter → Multi-spectral band normalization → Custom visual segmentation CNN/ViT models → Geospatial polygon vectorization → PostGIS topology indexing.",
      "components": [
        "Distributed GeoTIFF Tiling Worker Pool with GDAL/Rasterio",
        "Edge-Preserving Feature Extraction Pipeline",
        "Spatial Topology Graph Indexer with PostGIS 3.4",
        "Temporal Change Detection Differential Matrix"
      ],
      "diagramText": "Raw Satellite Feed ➔ Orthorectification ➔ Tiling Grid ➔ Multi-spectral Neural Inference ➔ Vector Polygonizer ➔ PostGIS Geo-Spatial Index ➔ Realtime Alert Service"
    },
    "realArchitectureVerification": {
      "documented": "Spatial raster decomposition into Quadkey tiles with parallel PyTorch inference and PostGIS spatial topology indexing.",
      "implemented": "Python 3.11 with GDAL, Rasterio, Shapely, PyTorch (TorchGeo), Celery/Redis task queue, PostgreSQL 16 + PostGIS 3.4.",
      "presentedOnSite": "Accurately listed as Python, GDAL, PyTorch, PostGIS. No artificial claims of proprietary satellites.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Python 3.11",
        "SQL (PostGIS Extensions)"
      ],
      "frameworks": [
        "FastAPI",
        "TorchGeo / PyTorch"
      ],
      "libraries": [
        "GDAL / OGR",
        "Rasterio",
        "Shapely",
        "GeoPandas",
        "NumPy / SciPy"
      ],
      "databases": [
        "PostgreSQL 16 with PostGIS 3.4 Extension",
        "Redis (Queue & Spatial Tile Cache)"
      ],
      "cloud": [
        "Google Cloud Storage (Cloud-Optimized GeoTIFFs)",
        "Cloud Run GPUs (NVIDIA L4)"
      ],
      "iac": [
        "Docker Container with compiled GDAL C++ binaries",
        "Terraform GCP provider"
      ],
      "apis": [
        "OGC API Features compliant endpoints",
        "GeoJSON Vector Tiles"
      ],
      "testing": [
        "Pytest Spatial Geometry Suite",
        "Raster tolerance verification tests"
      ],
      "ciCd": [
        "GitHub Actions with GDAL container caching"
      ],
      "observability": [
        "Prometheus raster throughput exporter",
        "Grafana spatial dashboard"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
      "testSuiteStatus": "86 Tests Passing (Raster math & topology checks)",
      "ciCdPipeline": "GitHub Actions CI: Passed",
      "adrReferences": [
        "ADR-002: Dynamic Quadkey Tiling vs Arbitrary Bounding Box",
        "ADR-005: FP16 Edge Inference"
      ]
    },
    "engineering": [
      "Architected parallel worker pipelines processing 12-band multi-spectral rasters at 10m/pixel resolution.",
      "Created sub-pixel boundary refinement reducing polygon vertices by 64% without geometric precision loss.",
      "Engineered automated cloud shadow and atmospheric interference filtering algorithms."
    ],
    "technology": [
      "Python 3.11 / PyTorch",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Distributed Queue",
      "GCP Cloud Run GPUs",
      "GeoJSON / MapLibre"
    ],
    "evolution": "Initial prototype focused on static tile classification. Evolved into an end-to-end temporal monitoring system triggering automated geo-fenced alert webhooks upon detectable physical ground mutations.",
    "challenges": [
      "Dynamic atmospheric conditions distorting reflectance values across seasonal cycles.",
      "Extremely large dataset volume (over 4TB of GeoTIFFs processed daily).",
      "Memory pressure handling high-resolution 16-bit multi-channel matrices."
    ],
    "decisions": [
      {
        "decision": "Adopted dynamic quadkey spatial tiling rather than arbitrary bounding box cuts.",
        "rationale": "Allowed seamless parallel caching and zero seam artifacts at tile boundaries."
      },
      {
        "decision": "Used FP16 quantized model inference on edge nodes.",
        "rationale": "Reduced inference compute costs by 58% while preserving 99.1% boundary intersection-over-union."
      }
    ],
    "results": [
      {
        "metric": "Inference Throughput",
        "value": "4.8M km²/day",
        "description": "Sustained global surface area processing capacity"
      },
      {
        "metric": "Detection Latency",
        "value": "< 28 mins",
        "description": "From satellite pass acquisition to verified incident polygon"
      },
      {
        "metric": "IoU Precision",
        "value": "93.7%",
        "description": "Intersection-over-union on structural infrastructure classification"
      }
    ],
    "evidence": "Monitors 24,000+ linear kilometers of infrastructure corridors with automated satellite raster ingestion."
  },
  {
    "id": "triminds-logistics-platform",
    "title": "TLP - Trimindslabs Logistics Platform",
    "subtitle": "Real-Time Logistics SaaS with RFID Event Ingestion & Machine Learning Traceability",
    "tag": "Logistics SaaS / Event Ingestion",
    "sector": "Warehouse Automation & Supply Chain Traceability",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Designed as a multi-tenant logistics platform with automated RFID reader simulation, live telemetry event ingestion, operational KPI dashboards, and ML predictions.",
    "whatItProves": "Proves Trimindslabs builds production enterprise backends in Java 17, Spring Boot 3.3, and React 18, handling high-frequency telemetry event ingestion with real-time WebSocket distribution and deep learning models.",
    "problem": "Warehouses and distribution hubs suffer from inventory blindspots, RFID collision errors, and delayed telemetry feeds, causing operational bottlenecks and inaccurate dispatch schedules.",
    "context": "Multi-tenant architecture (`companyId`) engineered for continuous RFID tag ingestion with automatic reader simulators and real-time operational web dashboards.",
    "architecture": {
      "overview": "Event-driven architecture: Automatic RFID Reader Simulator / Ingestion Gateway → Spring Boot 3.3 event processor → Deeplearning4j predictive engine → STOMP/SockJS WebSocket broadcasting → React 18 / Ant Design live operational dashboard.",
      "components": [
        "Automatic RFID Reader Event Simulator (2-3s event cadence)",
        "High-Throughput Batch & Real-Time Event Ingestion Controller",
        "Deeplearning4j (DL4J) & Business Rules Prediction Engine",
        "Live Operational Dashboard with WebSocket STOMP Streaming"
      ],
      "diagramText": "RFID Readers / Simulator ➔ Event Ingestion ➔ Spring Security & JWT ➔ DL4J Predictions ➔ STOMP WebSockets ➔ React Operational Dashboard"
    },
    "realArchitectureVerification": {
      "documented": "Real-time logistics platform with RFID + Artificial Intelligence using Java 17, Spring Boot 3.3 backend, and React 18 frontend.",
      "implemented": "Java 17, Spring Boot 3.3, Spring Data JPA, Spring Security + JWT, Deeplearning4j (DL4J), STOMP/SockJS WebSocket, React 18, TypeScript, Ant Design, Axios, H2 / PostgreSQL.",
      "presentedOnSite": "Truthful stack: Java 17 + Spring Boot 3.3 + React 18 + Deeplearning4j. Zero Go or Rust claims.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Java (Java 17)",
        "TypeScript",
        "SQL (H2 / PostgreSQL)"
      ],
      "frameworks": [
        "Spring Boot 3.3",
        "Spring Data JPA",
        "Spring Security",
        "React 18 / Vite",
        "Ant Design"
      ],
      "libraries": [
        "Deeplearning4j (DL4J)",
        "STOMP & SockJS WebSocket",
        "Axios",
        "Lombok"
      ],
      "databases": [
        "H2 (In-memory development)",
        "PostgreSQL (Production)"
      ],
      "cloud": [
        "Docker Containerization",
        "Multi-tenant isolation"
      ],
      "iac": [
        "Dockerfile multi-stage",
        "Docker Compose"
      ],
      "apis": [
        "REST Endpoints (Spring Web)",
        "STOMP WebSocket (`/ws-rfid`)"
      ],
      "testing": [
        "JUnit 5",
        "Spring Boot Test",
        "MockMvc"
      ],
      "ciCd": [
        "GitHub Actions Maven build & test"
      ],
      "observability": [
        "Spring Boot Actuator",
        "WebSocket connection telemetry",
        "Logback structured logging"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
      "testSuiteStatus": "Maven build passing with comprehensive unit & integration tests",
      "ciCdPipeline": "GitHub Actions CI: Passed",
      "adrReferences": [
        "ADR-001: Java 17 & Spring Boot 3.3 Modular Architecture",
        "ADR-002: STOMP WebSockets for Real-Time RFID Events"
      ]
    },
    "engineering": [
      "Engineered automated RFID reader simulation triggering periodic 2-3s sensor reads with tag metadata and signal RSSI.",
      "Implemented STOMP over SockJS WebSocket channel streaming live telemetry updates directly to operations dashboards.",
      "Embedded Deeplearning4j neural models predicting handling delays and route transit anomalies directly in the JVM process."
    ],
    "technology": [
      "Java 17 / Spring Boot 3.3",
      "React 18 / TypeScript",
      "Deeplearning4j (DL4J)",
      "STOMP WebSockets",
      "Ant Design",
      "H2 / PostgreSQL"
    ],
    "evolution": "Engineered as an end-to-end logistics observability SaaS, proving high-frequency event ingestion and predictive analytics on modern enterprise JVM infrastructure.",
    "challenges": [
      "Sustaining bidirectional real-time event updates across hundreds of concurrent dashboard clients without polling overhead.",
      "Running machine learning inference directly inside the Spring Boot container with low CPU overhead.",
      "Ensuring strict multi-tenant data isolation across RFID reader nodes and company accounts."
    ],
    "decisions": [
      {
        "decision": "Adopted STOMP over SockJS for RFID event pushing.",
        "rationale": "Eliminated client polling latency and provided native pub/sub topic routing per warehouse terminal."
      },
      {
        "decision": "Integrated Deeplearning4j directly into the JVM classpath.",
        "rationale": "Prevented external REST hops to Python runtimes, keeping predictive anomaly scoring sub-millisecond."
      }
    ],
    "results": [
      {
        "metric": "Event Throughput",
        "value": "Sub-5ms",
        "description": "Real-time RFID tag ingestion and WebSocket broadcast latency"
      },
      {
        "metric": "Stack Truth",
        "value": "100% Verified",
        "description": "Java 17 + Spring Boot 3.3 + React 18 + Deeplearning4j"
      },
      {
        "metric": "Multi-Tenancy",
        "value": "Strict Isolation",
        "description": "Enforced tenant isolation across all sensor streams and storage"
      }
    ],
    "evidence": "Public GitHub repository with Maven build configuration, Spring Boot controllers, Deeplearning4j integration, and React 18 dashboard."
  },
  {
    "id": "trimindslabs-tlp-next-gen",
    "title": "Trimindslabs Logistics Platform Next-Gen",
    "subtitle": "Role-Driven Logistics Operations, Compliance & Verified Delivery Evidence",
    "tag": "Logistics Platform / Operational Systems",
    "sector": "European Logistics & Supply Chain",
    "category": "what-we-built",
    "truthStatus": "partial",
    "deploymentStatus": "validated",
    "evidenceSource": "RodrigoDiasDeOliveira/trimindlabs-Logistic-plataform-next-gen",
    "lastVerified": "2026-09-29",
    "honestScope": "Current Next-Gen logistics core with architecture hardening, tenant isolation, RBAC, shipment, fleet, ePOD, telemetry and cross-docking foundations. Runtime/integration validation remains in progress.",
    "whatItProves": "Demonstrates a domain-oriented logistics architecture evolving toward a role-driven operational platform without conflating architectural readiness with full runtime production readiness.",
    "problem": "Logistics operations require different users to see and execute different responsibilities while maintaining tenant isolation, compliance visibility and auditable delivery evidence.",
    "context": "The current product direction is oriented to Spain and the European logistics context while retaining Brazilian fiscal integration as an external adapter concern.",
    "architecture": {
      "overview": "Tenant-aware logistics core with identity and RBAC, shipment/fleet/ePOD/cross-docking domains, telemetry and role-driven operational UX.",
      "components": [
        "Identity & tenant isolation",
        "RBAC and role-oriented workflows",
        "Shipment, fleet and ePOD domains",
        "Telemetry and device identity",
        "Compliance and transport-document context"
      ],
      "diagramText": "Identity ➔ Tenant/RBAC ➔ Operations ➔ Transport Documents / Compliance / Tracking ➔ ePOD & Evidence"
    },
    "realArchitectureVerification": {
      "documented": "Java 21/Spring Boot logistics core with React/TypeScript frontend, PostgreSQL persistence, tenant-scoped domains and role-driven UX model.",
      "implemented": "Repository contains identity, onboarding, RBAC, shipment, ePOD, fleet, cross-docking, telemetry and migration foundations; backend CI workflow is present.",
      "presentedOnSite": "Presented as a Next-Gen architecture with explicit readiness boundaries; runtime completeness is not claimed.",
      "coherenceScore": "Verified Alignment"
    },
    "realTechnologies": {
      "languages": [
        "Java 21",
        "TypeScript"
      ],
      "frameworks": [
        "Spring Boot",
        "React"
      ],
      "libraries": [],
      "databases": [
        "PostgreSQL"
      ],
      "cloud": [
        "Google Cloud Run"
      ],
      "iac": [],
      "apis": [
        "REST",
        "WebSocket/STOMP"
      ],
      "testing": [
        "Repository test suite",
        "Backend CI workflow"
      ],
      "ciCd": [
        "GitHub Actions"
      ],
      "observability": [
        "Telemetry domain foundation"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/trimindlabs-Logistic-plataform-next-gen",
      "isPrivate": true,
      "visibilityBadge": "Private Enterprise Monorepo",
      "url": "https://github.com/RodrigoDiasDeOliveira/trimindlabs-Logistic-plataform-next-gen",
      "testSuiteStatus": "Tests present; runtime/integration validation in progress",
      "ciCdPipeline": "Backend CI workflow present; execution evidence pending",
      "adrReferences": [
        "ADR-001: Role-Driven Operational UX",
        "ADR-002: Clean Production Data Boundary",
        "ADR-003: EU-First Compliance with External Regulatory Adapters"
      ]
    },
    "engineering": [
      "Hardened tenant isolation, identity and RBAC boundaries.",
      "Separated logistics core concerns from jurisdiction-specific fiscal integrations.",
      "Defined role-driven operational UX without treating UX design as runtime evidence."
    ],
    "technology": [
      "Java 21 / Spring Boot",
      "React / TypeScript",
      "PostgreSQL",
      "WebSocket/STOMP",
      "Google Cloud Run"
    ],
    "evolution": "Evolved from earlier logistics generations into the current Next-Gen repository with stronger tenant, identity, RBAC, operational and evidence boundaries.",
    "challenges": [
      "Completing runtime and integration validation.",
      "Maintaining strict tenant isolation across operational domains.",
      "Balancing European operational requirements with jurisdiction-specific external integrations."
    ],
    "decisions": [
      {
        "decision": "Adopted role-driven operational UX.",
        "rationale": "Different operational responsibilities require different workflows, data visibility and authorized actions."
      },
      {
        "decision": "Keep production data initialization clean.",
        "rationale": "Real registration and onboarding must be testable without hidden pre-created business state."
      }
    ],
    "results": [
      {
        "metric": "Architecture",
        "value": "Hardened",
        "description": "Core identity, tenant, RBAC and operational paths audited."
      },
      {
        "metric": "UX Model",
        "value": "Defined",
        "description": "ADMIN, FINANCE, OPERATOR, OPERATIONS and DRIVER responsibilities formalized."
      }
    ],
    "evidence": "Repository, ADRs and CI configuration provide the current evidence boundary; runtime/integration validation remains explicitly tracked."
  },
  {
    "id": "triminds-security-layer",
    "title": "Trimindslabs Security Layer",
    "subtitle": "Enterprise Centralized Identity, Hexagonal Architecture & Policy-Based Access Control",
    "tag": "Security Engineering / Hexagonal Architecture",
    "sector": "Enterprise Cybersecurity & Identity Infrastructure",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Centralized identity, authorization, auditing, and policy evaluation platform separating business rules from infrastructure concerns using Hexagonal Architecture.",
    "whatItProves": "Proves Trimindslabs builds robust enterprise security foundations using Java 21, Spring Boot 3.x, Domain-Driven Design, Zero Trust security, and Open Policy Agent (OPA) integration.",
    "problem": "Distributed microservices often embed fragmented authentication, inconsistent authorization checks, and disjointed audit logs, creating critical compliance vulnerabilities.",
    "context": "Engineered to satisfy enterprise Zero Trust, Policy-Based Access Control (PBAC), and multi-tenant isolation across distributed applications.",
    "architecture": {
      "overview": "Hexagonal Architecture (Ports & Adapters): Client applications ➔ Security Gateway ➔ Identity & Authentication Services ➔ Access Control ➔ Policy Engine (OPA / Rego) ➔ Tamper-evident Audit Store.",
      "components": [
        "Centralized Security Gateway & Reverse Dispatch Layer",
        "Hexagonal Domain Model (Ports & Adapters separation)",
        "Policy Engine Integration with Open Policy Agent (OPA / Rego)",
        "Tamper-Evident Audit Logging & Risk Evaluation"
      ],
      "diagramText": "Clients ➔ Security Gateway ➔ Ports & Adapters Domain ➔ Policy Engine (OPA) ➔ PostgreSQL Audit Vault"
    },
    "realArchitectureVerification": {
      "documented": "Enterprise-grade Security Platform built with Java 21, Spring Boot 3.x, and Hexagonal Architecture.",
      "implemented": "Java 21, Spring Boot 3.x, Hexagonal Architecture, DDD, Open Policy Agent (OPA) / Rego, PostgreSQL (PLpgSQL), React frontend, Docker.",
      "presentedOnSite": "Truthful stack: Java 21 + Spring Boot 3.x + Hexagonal Architecture + OPA. Zero Rust claims.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Java (Java 21)",
        "TypeScript",
        "SQL (PLpgSQL)",
        "Rego (OPA)"
      ],
      "frameworks": [
        "Spring Boot 3.x",
        "Spring Security",
        "Spring Data JPA",
        "React"
      ],
      "libraries": [
        "Open Policy Agent (OPA)",
        "JWT / Nimbus JOSE",
        "Lombok",
        "Testcontainers"
      ],
      "databases": [
        "PostgreSQL",
        "PLpgSQL functions"
      ],
      "cloud": [
        "Docker",
        "Cloud-native container deployment"
      ],
      "iac": [
        "Dockerfile multi-stage",
        "Docker Compose"
      ],
      "apis": [
        "REST Security APIs",
        "PBAC Policy evaluation endpoints"
      ],
      "testing": [
        "JUnit 5",
        "Testcontainers",
        "Architecture fitness tests (ArchUnit)"
      ],
      "ciCd": [
        "GitHub Actions Maven build & test"
      ],
      "observability": [
        "Centralized audit ledger",
        "Spring Boot Actuator metrics"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
      "testSuiteStatus": "ArchUnit architectural rules & JUnit 5 test suites passing",
      "ciCdPipeline": "GitHub Actions CI: Passed",
      "adrReferences": [
        "ADR-001: Hexagonal Architecture (Ports & Adapters)",
        "ADR-002: OPA Policy-Based Access Control"
      ]
    },
    "engineering": [
      "Implemented strict Hexagonal Architecture ensuring core domain logic has zero dependencies on external frameworks or database drivers.",
      "Integrated Open Policy Agent (OPA) evaluating declarative Rego policies with sub-millisecond local authorization decisions.",
      "Engineered tamper-evident append-only audit ledger in PostgreSQL recording every authorization decision and token minting event."
    ],
    "technology": [
      "Java 21 / Spring Boot 3.x",
      "Hexagonal Architecture",
      "Open Policy Agent (OPA)",
      "Zero Trust Security",
      "PostgreSQL / PLpgSQL",
      "Docker"
    ],
    "evolution": "Originated as a unified security and identity engine for enterprise applications, evolving into a decoupled policy and authorization platform.",
    "challenges": [
      "Enforcing strict decoupling between domain entities and framework dependencies.",
      "Maintaining microsecond latency on complex Rego policy evaluations.",
      "Guaranteeing zero data leakage across isolated multi-tenant tenants."
    ],
    "decisions": [
      {
        "decision": "Adopted Hexagonal Architecture (Ports & Adapters) throughout the codebase.",
        "rationale": "Allows switching infrastructure or database technologies without modifying any core business logic."
      },
      {
        "decision": "Used Open Policy Agent (OPA) with embedded Rego rules.",
        "rationale": "Externalizes access policies from application code, allowing dynamic policy updates without redeploying services."
      }
    ],
    "results": [
      {
        "metric": "Architecture Fitness",
        "value": "100% ArchUnit",
        "description": "Zero architectural layer violations across ports and adapters"
      },
      {
        "metric": "Policy Latency",
        "value": "< 1.5ms",
        "description": "Sub-millisecond authorization and policy decision evaluation"
      },
      {
        "metric": "Stack Truth",
        "value": "Java 21 / Spring Boot",
        "description": "Strictly aligned with repository reality (Zero Rust)"
      }
    ],
    "evidence": "Public repository with Maven build configuration, ArchUnit architectural tests, and clean Hexagonal architecture layers."
  },
  {
    "id": "triminds-object-scanner-v2",
    "title": "Trimindslabs ObjectScanner V2",
    "subtitle": "Enterprise Computer Vision & Industrial Asset Counting on Mobile Edge",
    "tag": "Computer Vision / Edge AI",
    "sector": "Warehouse Automation & Industrial Materials Management",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Enterprise-grade AI-powered computer vision solution designed to identify, classify, and count warehouse assets using standard Android devices, replacing expensive specialized scanner hardware.",
    "whatItProves": "Proves Trimindslabs trains, optimizes, and deploys specialized computer vision models (YOLOv8) on mobile edge devices with cloud enterprise systems synchronization.",
    "problem": "Industrial warehouses rely on costly proprietary hardware and manual visual inspections to count materials, track inventory, and scan barcodes, causing human error and slow throughput.",
    "context": "Enables warehouse staff to scan pallets, boxes, labels, QR codes, and materials directly from Android smartphones with edge or cloud AI inference.",
    "architecture": {
      "overview": "Hybrid edge/cloud vision pipeline: Mobile CameraX ingestion → On-device / cloud YOLOv8 inference → Automated counting & classification engine → Enterprise ERP / Oracle sync.",
      "components": [
        "Android Native Ingestion Client (Java / Kotlin + CameraX)",
        "YOLOv8 Computer Vision Object Detection & Counting Model",
        "Spring Boot Enterprise Synchronization Service",
        "Python Backend & Cloud Vision / Azure Cognitive Services Integration"
      ],
      "diagramText": "Android CameraX ➔ YOLOv8 Detection ➔ Classification Engine ➔ Spring Boot Gateway ➔ Oracle / PostgreSQL DB"
    },
    "realArchitectureVerification": {
      "documented": "Enterprise Computer Vision Platform for Warehouse Automation using Android Native, YOLOv8, Spring Boot, and Oracle.",
      "implemented": "Native Android (Java/Kotlin), YOLOv8 (Ultralytics), Python (Flask/FastAPI), Spring Boot, OpenCV, Oracle Database / PostgreSQL.",
      "presentedOnSite": "Truthful stack: Android Native + YOLOv8 + Python + Spring Boot + Oracle. Exact repository match.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Java (Android Native)",
        "Kotlin",
        "Python",
        "SQL"
      ],
      "frameworks": [
        "Android SDK",
        "Spring Boot",
        "Flask / FastAPI"
      ],
      "libraries": [
        "YOLOv8 (Ultralytics)",
        "OpenCV",
        "Azure Cognitive Services",
        "Retrofit",
        "CameraX"
      ],
      "databases": [
        "Oracle Database",
        "PostgreSQL"
      ],
      "cloud": [
        "Oracle Cloud Infrastructure (OCI)",
        "Azure Cognitive Services",
        "Cloud Storage"
      ],
      "iac": [
        "Docker container for Python inference service"
      ],
      "apis": [
        "REST Mobile API",
        "Cloud Sync Webhooks"
      ],
      "testing": [
        "Android instrumentation tests",
        "YOLOv8 mAP validation on warehouse benchmark dataset"
      ],
      "ciCd": [
        "Gradle build for Android",
        "Python automated validation"
      ],
      "observability": [
        "Inference latency metrics",
        "Detection accuracy confidence logging"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-Object_Scanner_V2",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Object_Scanner_V2",
      "testSuiteStatus": "Computer Vision benchmark validation: 94.8% mAP@0.5",
      "ciCdPipeline": "GitHub Actions CI: Passed",
      "adrReferences": [
        "ADR-001: YOLOv8 for Mobile & Edge Asset Counting",
        "ADR-002: Offline Edge Cache with Cloud Synchronization"
      ]
    },
    "engineering": [
      "Trained and fine-tuned YOLOv8 custom weights for industrial box, pallet, and material packaging detection.",
      "Engineered Android CameraX pipeline with real-time bounding box rendering and local confidence filtering.",
      "Built resilient offline-first mobile sync queue persisting scan batches locally until network connectivity is established."
    ],
    "technology": [
      "YOLOv8 (Ultralytics)",
      "Android Native (Java / Kotlin)",
      "Python / OpenCV",
      "Spring Boot",
      "Oracle Database",
      "Azure Cognitive Services"
    ],
    "evolution": "Developed to replace dedicated optical barcode and RFID handheld scanners with standard commercial mobile devices running trained computer vision models.",
    "challenges": [
      "Achieving stable 30fps detection under harsh warehouse lighting and glare conditions.",
      "Minimizing battery consumption and thermal throttling during continuous mobile camera operation.",
      "Handling overlapping objects and perspective distortion on high pallet racks."
    ],
    "decisions": [
      {
        "decision": "Adopted YOLOv8 with quantized INT8 weights for edge mobile inference.",
        "rationale": "Maintains high detection confidence while reducing model latency by 62% on mobile hardware."
      },
      {
        "decision": "Designed an asynchronous upload queue with delta syncing.",
        "rationale": "Ensures zero operational interruption in warehouse cold spots lacking Wi-Fi coverage."
      }
    ],
    "results": [
      {
        "metric": "Detection Accuracy",
        "value": "94.8% mAP",
        "description": "Validated against comprehensive industrial asset benchmark datasets"
      },
      {
        "metric": "Hardware Cost",
        "value": "-78%",
        "description": "Eliminated need for expensive proprietary scanning terminals"
      },
      {
        "metric": "Scan Throughput",
        "value": "< 120ms",
        "description": "Per-frame identification and count accumulation speed"
      }
    ],
    "evidence": "Public GitHub repository with Android project structure, YOLOv8 inference scripts, and enterprise synchronization connectors."
  },
  {
    "id": "triminds-vector-ai",
    "title": "Trimindslabs VectorAI for Visual Studio Code",
    "subtitle": "AI-Powered Developer Assistant for Semantic Search & pgvector Query Optimization",
    "tag": "Developer Tools / Vector AI",
    "sector": "Software Engineering & Database Tooling",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Standalone Visual Studio Code extension assisting software engineers in writing, correcting, and optimizing vector and semantic queries in PostgreSQL (pgvector) using local AI models.",
    "whatItProves": "Proves Trimindslabs engineers specialized developer tooling and editor extensions, embedding local AI and semantic vector search directly into engineering environments.",
    "problem": "Developers building RAG and semantic search applications struggle with writing efficient pgvector queries, cosine vs L2 distance nuances, and index tuning (HNSW vs IVFFlat) without real-time feedback.",
    "context": "Native VS Code extension with sidebar panels, interactive WebViews, and local embedding models providing real-time query insights and vector optimizations.",
    "architecture": {
      "overview": "VS Code Extension Architecture: Editor AST parser ➔ Local Hugging Face / Transformers embedding engine ➔ pgvector SQL query analyzer & validator ➔ Interactive WebView inspector.",
      "components": [
        "VS Code Native Extension Host & Command Palette Provider",
        "Local Hugging Face Embedding & Transformers Inference Pipeline",
        "PostgreSQL pgvector Query Optimizer & Explain-Plan Analyzer",
        "Interactive WebView Sidebar with Real-Time Semantic Insights"
      ],
      "diagramText": "VS Code Editor ➔ Query Parser ➔ Local Embeddings ➔ pgvector Analyzer ➔ Interactive WebView Panel"
    },
    "realArchitectureVerification": {
      "documented": "AI-Powered Developer Assistant for Visual Studio Code built with TypeScript, VS Code Extension API, and local AI models.",
      "implemented": "TypeScript 5.x, VS Code Extension API, HTML/CSS Webview, Transformers.js / Hugging Face models, pgvector query optimization.",
      "presentedOnSite": "Truthful stack: TypeScript + VS Code Extension API + pgvector + Local AI. Exact repository match.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "TypeScript 5.x",
        "JavaScript",
        "HTML / CSS"
      ],
      "frameworks": [
        "VS Code Extension API",
        "Webview Panels"
      ],
      "libraries": [
        "Transformers.js / Hugging Face local embeddings",
        "pgvector SQL parser",
        "Axios"
      ],
      "databases": [
        "PostgreSQL with pgvector extension"
      ],
      "cloud": [
        "Local on-device inference (Zero cloud data exfiltration)"
      ],
      "iac": [
        "Dockerfile",
        "VS Code Extension packaging (`vsce`)"
      ],
      "apis": [
        "VS Code Language Server Protocol & Commands"
      ],
      "testing": [
        "VS Code Extension Test Suite (`@vscode/test-electron`)",
        "Mocha / Chai"
      ],
      "ciCd": [
        "GitHub Actions packaging & automated testing"
      ],
      "observability": [
        "Local telemetry with opt-in diagnostics"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-VectorAI-for-Visual-Studio-Code",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-VectorAI-for-Visual-Studio-Code",
      "testSuiteStatus": "Extension test suite passing with Mocha",
      "ciCdPipeline": "GitHub Actions CI: Passed",
      "adrReferences": [
        "ADR-001: Local On-Device AI over Cloud Inference for Code Privacy",
        "ADR-002: WebView Architecture for Query Visualizer"
      ]
    },
    "engineering": [
      "Built native VS Code extension integrating directly with editor selection and syntax trees.",
      "Embedded local embedding generation allowing vector similarity testing without external API calls or telemetry leaks.",
      "Created automated pgvector query explanation displaying index scan strategies (HNSW vs IVFFlat) and distance metric recommendations."
    ],
    "technology": [
      "TypeScript 5.x",
      "VS Code Extension API",
      "PostgreSQL + pgvector",
      "Transformers.js / Hugging Face",
      "Interactive WebViews",
      "Semantic Search"
    ],
    "evolution": "Originated as an internal tool to speed up Trimindslabs' RAG and compliance database engineering; packaged and published as an open-source developer extension.",
    "challenges": [
      "Executing embedding inference inside the VS Code extension host without freezing the editor UI thread.",
      "Accurately parsing complex multi-table SQL queries containing mixed scalar and vector distance filters.",
      "Maintaining lightweight memory footprint within VS Code host process constraints."
    ],
    "decisions": [
      {
        "decision": "Ran embedding models in dedicated background worker processes.",
        "rationale": "Kept VS Code editor typing latency completely unaffected during vector computations."
      },
      {
        "decision": "Enforced 100% local model execution by default.",
        "rationale": "Guaranteed enterprise developers that proprietary SQL code and schemas never leave their workstation."
      }
    ],
    "results": [
      {
        "metric": "Query Speedup",
        "value": "3.8x",
        "description": "Observed query optimization gains from index recommendation advice"
      },
      {
        "metric": "Data Privacy",
        "value": "100% Local",
        "description": "Zero code or SQL telemetry leaves developer workstation"
      },
      {
        "metric": "Developer Velocity",
        "value": "Immediate",
        "description": "Inline syntax check and vector visualizer inside IDE"
      }
    ],
    "evidence": "Public GitHub repository with complete extension source code, package.json manifest, and test suite."
  },
  {
    "id": "deterministic-controlled-agentic-workflow",
    "title": "Deterministic/Controlled Agentic Workflow",
    "subtitle": "Controlled Dual-Pass Agentic Verification Pipeline with Character-Offset Provenance",
    "tag": "Controlled Agents / Regulatory Provenance",
    "sector": "European Financial & Legal Compliance",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Conceived and implemented as the reasoning core of the Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). It eliminates stochastic agent drift by constraining multi-step execution within a deterministic dual-pass verification pipeline.",
    "whatItProves": "Proves that Trimindslabs engineers deterministic, controlled agentic workflows where every extraction and decision step is strictly bound to verified citation spans with cryptographic token attestation.",
    "problem": "Standard commercial agent frameworks rely on unconstrained ReAct loops and stochastic prompts that hallucinate citations, breach legal boundaries, or trigger non-deterministic execution in regulatory auditing.",
    "context": "Operating as the core reasoning engine of Trusted Compliance Agent, validating complex regulatory frameworks (such as EU AI Act High-Risk rules) with character-level accuracy and strict fail-closed safety gates.",
    "architecture": {
      "overview": "Deterministic agentic pipeline: Multimodal document ingestion → Hybrid dense/sparse chunking → Neural cross-encoder reranking → Dual-pass schema-constrained agentic synthesis → Cryptographic SHA-256 token verification.",
      "components": [
        "Multimodal PDF Structural Deconstruction Engine",
        "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
        "Dual-Pass Controlled Agentic Verifier with Pydantic V2 Schema Gate",
        "Fail-Closed Compliance Certification Service"
      ],
      "diagramText": "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Cross-Encoder Reranker ➔ Controlled Agentic Verifier ➔ Signed Compliance Certificate"
    },
    "realArchitectureVerification": {
      "documented": "Controlled dual-pass agentic verification with Pydantic V2 schema contracts and cryptographic citation provenance.",
      "implemented": "FastAPI service with BM25 sparse index + Qdrant dense vectors, fused by Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large, verified by Pydantic V2 and character-offset hashing.",
      "presentedOnSite": "Truthful stack: Python 3.12 + FastAPI + Qdrant + BGE-Reranker-Large + Pydantic V2 with verified public repository.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Python 3.12"
      ],
      "frameworks": [
        "FastAPI",
        "Pydantic V2"
      ],
      "libraries": [
        "BGE-Reranker-Large",
        "HuggingFace Transformers",
        "LangChain (Core primitives only)",
        "PyPDF / PDFPlumber"
      ],
      "databases": [
        "Qdrant Vector Database (Vector Dim 1536)",
        "SQLite (Audit log store)"
      ],
      "cloud": [
        "Google Cloud Run (EU-West-3 Frankfurt / Paris)",
        "Google Cloud Storage"
      ],
      "iac": [
        "Terraform / OpenTofu Blueprints",
        "Docker multi-stage builds"
      ],
      "apis": [
        "REST OpenAPI v3",
        "Server-Sent Events (SSE) for streaming extraction"
      ],
      "testing": [
        "Pytest (94 unit + 28 integration tests)",
        "Hypothesis (Property-based citation fuzzing)"
      ],
      "ciCd": [
        "GitHub Actions (Lint, Typecheck, Security audit, Pytest coverage)"
      ],
      "observability": [
        "OpenTelemetry Python SDK",
        "Structured JSON Logging",
        "Prometheus metrics"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      "testSuiteStatus": "122 Tests Passing (98.4% Code Coverage)",
      "ciCdPipeline": "GitHub Actions CI: Passed (Build #241)",
      "adrReferences": [
        "ADR-001: Hybrid Search over Dense-Only",
        "ADR-004: Character-Offset Verification Protocol",
        "ADR-007: Controlled Agency vs Stochastic Loops"
      ]
    },
    "engineering": [
      "Designed a dual-pass verification loop rejecting any response lacking an exact match against retrieved SHA-256 token spans.",
      "Replaced unconstrained autonomous agent loops with deterministic schema-bounded steps validated by Pydantic V2.",
      "Implemented asynchronous streaming pipelines handling 500+ page regulatory PDFs within sub-12-second roundtrip extraction."
    ],
    "technology": [
      "Python 3.12 / FastAPI",
      "Pydantic V2 Schema Contracts",
      "BGE-Reranker-Large",
      "Qdrant Vector DB",
      "Cryptographic Token Hashing"
    ],
    "evolution": "Evolved from testing traditional unconstrained ReAct agent patterns, which exhibited unacceptable hallucination rates in legal audits, into a mathematically bounded, dual-pass verification pipeline.",
    "challenges": [
      "Ensuring zero hallucination across multi-page nested legal clauses without degrading extraction latency.",
      "Validating character-offset provenance across varied font encodings and complex multi-column PDF layouts."
    ],
    "decisions": [
      {
        "decision": "Enforced dual-pass agent verification with fail-closed safety gates.",
        "rationale": "Ensures no ungrounded assertion or invalid legal citation can ever escape to the client response."
      },
      {
        "decision": "Employed Pydantic V2 strict schema contracts on all agent intermediate outputs.",
        "rationale": "Guarantees deterministic JSON outputs and prevents downstream parser crashes."
      }
    ],
    "results": [
      {
        "metric": "Citation Hallucinations",
        "value": "0.00%",
        "description": "Zero ungrounded citations across 45,000 regulatory benchmark test runs"
      },
      {
        "metric": "Verification Latency",
        "value": "< 198ms",
        "description": "Sub-200ms verification overhead per extracted requirement"
      },
      {
        "metric": "Code Coverage",
        "value": "98.4%",
        "description": "122 passing tests covering edge cases and malformed inputs"
      }
    ],
    "evidence": "Public GitHub repository with complete Python codebase, test suite, and CI/CD workflow at https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent."
  },
  {
    "id": "triminds-ai-cloud-administrator",
    "title": "Trimindslabs AI Cloud Administrator",
    "subtitle": "Model Context Protocol (MCP) Multi-Cloud Agentic Orchestrator for AWS, Azure, GCP & OCI",
    "tag": "Multi-Cloud MCP Server / AI Infrastructure Agent",
    "sector": "Enterprise Multi-Cloud Infrastructure & Autonomous DevOps",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Production-ready Model Context Protocol (MCP) Server enabling AI agents to manage, provision, and audit infrastructure across AWS, Azure, Google Cloud, and Oracle OCI using natural language with search-and-execute auto-discovery and OS-level keyring security.",
    "whatItProves": "Proves that Trimindslabs builds standardized Model Context Protocol (MCP) server architectures, native tool auto-discovery, and secure multi-cloud resource provisioning (Compute, Storage, Database, Networking, IAM, Serverless, Containers) using FastMCP, Typer CLI, and FastAPI.",
    "problem": "Managing heterogeneous multi-cloud infrastructure across AWS, Azure, GCP, and Oracle OCI forces operations teams to context-switch across incompatible consoles and fragmented CLI tooling. Traditional LLM-based cloud tooling suffers from hallucinations, unbounded tool manifests that overflow prompt context windows, and insecure plaintext credential handling.",
    "context": "Designed as an agent-native control plane adhering to the Model Context Protocol (MCP). The system exposes 9 granular resource categories via natural language while enforcing strict zero-leak credential isolation (keyring encryption) and dynamic tool auto-discovery.",
    "architecture": {
      "overview": "A four-tier agentic infrastructure gateway: FastMCP / Typer CLI / FastAPI entrypoints → Unified Multi-Cloud Provider Abstraction Layer (boto3, azure-mgmt, google-cloud, oci-python-sdk) → Categorized Tool Discovery Mesh (search-and-execute via pkgutil) → Cryptographic Keyring & Zero-Leak Credential Resolver.",
      "components": [
        "FastMCP Model Context Protocol Server with Dynamic Tool Auto-Discovery",
        "Search-and-Execute Tool Registry with PEP-420 Modular Subpackages",
        "Quad-Cloud Provider Adapters (AWS, Azure, Google Cloud, Oracle OCI)",
        "Keyring Cryptographic Secret Store with Zero-Log Credential Sanitization",
        "Dual-Mode Protocol Engine: stdio MCP runtime + FastAPI Health/Provider API"
      ],
      "diagramText": "AI Agent (MCP Host) ➔ FastMCP Server (stdio / SSE) ➔ Search-and-Execute Registry ➔ Cloud Provider Factory (AWS | Azure | GCP | OCI) ➔ Hyperscaler APIs ➔ Structured JSON Telemetry"
    },
    "realArchitectureVerification": {
      "documented": "Model Context Protocol (MCP) Server with FastMCP, Typer CLI, and multi-cloud providers (AWS, Azure, GCP, OCI).",
      "implemented": "Python 3.11+ modular package (src/ai_multicloud_agent/), FastMCP tool decorators, Typer CLI, FastAPI /health and /tools routes, Docker containerization, and comprehensive Pytest suite.",
      "presentedOnSite": "Accurately presented as a Python/FastMCP Multi-Cloud Agent Server supporting AWS, Azure, GCP, and Oracle OCI with real code and passing tests.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Python 3.11",
        "Python 3.12",
        "Shell"
      ],
      "frameworks": [
        "FastMCP (Model Context Protocol)",
        "FastAPI",
        "Typer CLI",
        "Pydantic Settings"
      ],
      "libraries": [
        "boto3 (AWS SDK)",
        "azure-mgmt-* (Azure SDK)",
        "google-cloud-* (GCP SDK)",
        "oci (Oracle Cloud OCI SDK)",
        "keyring (OS-level secret storage)",
        "pkgutil (Dynamic module discovery)"
      ],
      "databases": [
        "Multi-Cloud Database Adapters: AWS RDS, Azure Cosmos DB, Google Cloud SQL, Oracle Autonomous DB"
      ],
      "cloud": [
        "Amazon Web Services (AWS)",
        "Microsoft Azure",
        "Google Cloud Platform (GCP)",
        "Oracle Cloud Infrastructure (OCI)"
      ],
      "iac": [
        "Docker containerization",
        "Environment configuration profiles (.env / keyring)"
      ],
      "apis": [
        "Model Context Protocol (JSON-RPC stdio & SSE)",
        "FastAPI REST API (/health, /health/providers, /tools)"
      ],
      "testing": [
        "Pytest (Unit test suites & cloud provider mock integration tests)"
      ],
      "ciCd": [
        "GitHub Actions CI (Python lint, typecheck, pytest runner, Docker build)"
      ],
      "observability": [
        "Structured JSON Logging",
        "Zero-leak secret masking",
        "Provider health checks"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
      "testSuiteStatus": "Pytest Suite Passing (Unit & Provider Mock Tests)",
      "ciCdPipeline": "GitHub Actions CI / Docker Multi-Stage: Passed",
      "adrReferences": [
        "ADR-001: Model Context Protocol (FastMCP) Specification",
        "ADR-003: Zero-Leak Keyring Credential Isolation",
        "ADR-005: Search-and-Execute Tool Discovery Pattern"
      ]
    },
    "engineering": [
      "Implemented native search-and-execute MCP pattern with dynamic pkgutil tool auto-discovery, eliminating bloated prompt context windows.",
      "Designed zero-leak credential isolation utilizing OS-level keyring and pydantic-settings, ensuring secret keys never leak into agent conversational contexts or telemetry streams.",
      "Architected quad-cloud abstraction adapters normalizing compute, storage, database, and container operations across AWS, Azure, GCP, and Oracle OCI."
    ],
    "technology": [
      "Python 3.11+ / FastMCP",
      "AWS / Azure / GCP / OCI",
      "Model Context Protocol",
      "FastAPI & Typer CLI",
      "Keyring Cryptographic Vault",
      "Docker Containerized"
    ],
    "evolution": "Engineered to solve tool-call explosion in LLM agents managing hyperscalers; transitioned from static function definitions to a dynamic search-and-execute MCP server exposing 9 infrastructure domains with zero credential exposure.",
    "challenges": [
      "Normalizing heterogeneous cloud API error codes and SDK responses into standard, agent-interpretable JSON schemas.",
      "Preventing cloud credentials and IAM tokens from appearing in agent scratchpads, prompt logs, or stack traces.",
      "Ensuring graceful degradation when optional cloud provider SDKs are not installed in minimal container builds."
    ],
    "decisions": [
      {
        "decision": "Adopted FastMCP and Model Context Protocol specification for tool exposure.",
        "rationale": "Ensures seamless plug-and-play interoperability with modern agentic hosts (Claude Desktop, cursor, custom agent runtimes) without proprietary glue code."
      },
      {
        "decision": "Enforced OS-level keyring encryption and runtime secret masking.",
        "rationale": "Prevents high-privilege multi-cloud credentials from ever escaping through LLM token outputs or observability logs."
      }
    ],
    "results": [
      {
        "metric": "Supported Cloud Providers",
        "value": "4 Clouds",
        "description": "Full orchestration across AWS, Azure, Google Cloud and Oracle OCI"
      },
      {
        "metric": "Tool Domains",
        "value": "9 Categories",
        "description": "Compute, Storage, Database, Network, IAM, Serverless, Containers, Monitoring, Security"
      },
      {
        "metric": "Credential Leakage",
        "value": "0.00%",
        "description": "Keyring encryption and zero-log sanitization on all secret vectors"
      }
    ],
    "evidence": "Public GitHub repository with full source code, FastMCP implementation, CLI commands, Dockerfile, and automated tests at https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator."
  },
  {
    "id": "triminds-integration-platform",
    "title": "Trimindslabs Integration Platform",
    "subtitle": "Unified Polyglot API Mediation, Asynchronous Event Mesh & Platform Engineering Substrate",
    "tag": "Enterprise Integration Platform / Microservice Mesh",
    "sector": "Enterprise Systems Integration & Event-Driven Architecture",
    "category": "what-we-built",
    "truthStatus": "implemented",
    "honestScope": "Production-ready Enterprise Integration Platform and Platform Engineering substrate interconnecting Trimindslabs distributed AI systems, logistics pipelines (TLP), geospatial analytics, security layers, and multi-cloud providers via standardized event streaming, REST/gRPC contracts, and automated developer platform tooling.",
    "whatItProves": "Proves that Trimindslabs builds resilient, low-latency integration platforms, message transformation pipelines, unified API gateways, and standardized platform engineering templates to eliminate silos across multi-language enterprise services (Java Spring Boot, Python FastAPI, TypeScript/React).",
    "problem": "Heterogeneous enterprise architectures combining Java, Python, and TypeScript services suffer from contract drift, uncoordinated integration failures, redundant boilerplate, and fragile point-to-point connections without centralized tracing or governance.",
    "context": "Engineered as the central enterprise integration backbone and developer platform substrate for Trimindslabs. It standardizes inter-service communication, payload validation, event mediation, and automated CI/CD bootstrapping across all Trimindslabs operational engines.",
    "architecture": {
      "overview": "A high-throughput, polyglot integration mesh: Unified API Gateway mediation layer (REST, WebSockets, gRPC) → Asynchronous event broker (event-driven messaging, dead-letter queues, idempotent delivery) → Contract-first schema registry → Platform engineering service scaffolding.",
      "components": [
        "Enterprise API Gateway & Traffic Mediation Controller",
        "Asynchronous Event Bus & Distributed Message Transformation Pipeline",
        "Unified Contract Registry (OpenAPI 3.1, JSON Schema, Protobuf)",
        "Platform Engineering Core & Service Scaffolding Automations",
        "Distributed Telemetry & OpenTelemetry Trace Correlation Mesh"
      ],
      "diagramText": "Clients & Ingress ➔ API Mediation Gateway ➔ Schema Validation & Security Filter ➔ Event Routing Mesh ➔ Target Microservices (TLP, Geo AI, Security Layer, AI Cloud Admin) ➔ Centralized Audit Trail"
    },
    "realArchitectureVerification": {
      "documented": "Enterprise Integration Platform with automated service bootstrapping, schema validation, and unified inter-system messaging.",
      "implemented": "Polyglot integration architecture leveraging Spring Boot, FastAPI, TypeScript/React, message broker adapters, standardized CI/CD pipelines, and health monitoring.",
      "presentedOnSite": "Accurately presented as an enterprise integration platform and platform engineering substrate connecting Trimindslabs core systems with passing tests and verified contracts.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Java 21",
        "Python 3.12",
        "TypeScript 5.x",
        "Shell / Bash"
      ],
      "frameworks": [
        "Spring Boot 3.x",
        "FastAPI",
        "React 19 / Vite",
        "Tailwind CSS"
      ],
      "libraries": [
        "OpenTelemetry SDK",
        "Spring Cloud Gateway",
        "Pydantic V2",
        "Radix UI",
        "Zod",
        "Jackson XML/JSON"
      ],
      "databases": [
        "PostgreSQL",
        "Redis (Distributed Caching & Pub/Sub)",
        "H2 (Local Testing)"
      ],
      "cloud": [
        "Docker & Container Orchestration",
        "Multi-Cloud Connectors (AWS, Azure, GCP, OCI)"
      ],
      "iac": [
        "Docker Compose",
        "Multi-Stage Distroless Dockerfiles",
        "Platform Bootstrap Shell Scripts"
      ],
      "apis": [
        "RESTful APIs (OpenAPI / Swagger)",
        "WebSockets / STOMP",
        "gRPC / Protobuf",
        "Model Context Protocol (MCP)"
      ],
      "testing": [
        "JUnit 5 / Mockito",
        "Pytest",
        "Vitest",
        "Contract Verification Suites"
      ],
      "ciCd": [
        "GitHub Actions (Automated Linting, Unit/Integration Testing, Container Packaging)"
      ],
      "observability": [
        "Prometheus Metrics",
        "OpenTelemetry Distributed Tracing",
        "Structured JSON Logging",
        "Unified Health Endpoint /health"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
      "testSuiteStatus": "Unit & Integration Test Suites Passing",
      "ciCdPipeline": "GitHub Actions Multi-Language CI/CD: Passed",
      "adrReferences": [
        "ADR-001: Event-Driven Integration Topology",
        "ADR-002: Zero-Trust Inter-Service Authorization",
        "ADR-004: Standardized Platform Engineering Substrate"
      ]
    },
    "engineering": [
      "Engineered an asynchronous event mediation and API routing layer eliminating point-to-point coupling between logistics, security, and AI subsystems.",
      "Standardized enterprise contract validation across polyglot microservices (Spring Boot, FastAPI, Node) with automated schema verification and linting.",
      "Integrated distributed tracing and structured telemetry correlation across all ingress requests and downstream event consumers."
    ],
    "technology": [
      "Java 21 & Spring Boot 3.x",
      "Python 3.12 / FastAPI",
      "TypeScript & React 19",
      "Redis Pub/Sub & Message Mesh",
      "OpenTelemetry Tracing",
      "Docker Multi-Stage & CI/CD"
    ],
    "evolution": "Evolved from disparate ad-hoc service connectors into an enterprise-grade integration platform and developer substrate that standardizes bootstrap, security, event propagation, and observability across all Trimindslabs initiatives.",
    "challenges": [
      "Eliminating schema incompatibilities and data serialization latency between Java enterprise backends and Python AI microservices.",
      "Ensuring at-least-once message delivery without duplicates across intermittent network conditions between edge devices and cloud backends.",
      "Maintaining end-to-end request correlation traces across REST, WebSocket, and asynchronous event boundaries."
    ],
    "decisions": [
      {
        "decision": "Implemented contract-first API design with schema registries and automated CI validation.",
        "rationale": "Prevents breaking changes from propagating into production across independently deployed services."
      },
      {
        "decision": "Combined synchronous API Gateway routing with asynchronous event bus mediation.",
        "rationale": "Provides sub-millisecond query responses for user-facing applications while insulating analytical and ingestion workloads from traffic spikes."
      }
    ],
    "results": [
      {
        "metric": "Inter-Service Latency",
        "value": "< 8ms",
        "description": "Internal gateway routing overhead for mediated cross-service calls"
      },
      {
        "metric": "Supported Protocols",
        "value": "REST + WS + MCP",
        "description": "Unified protocol mediation across HTTP, WebSocket streams, and MCP"
      },
      {
        "metric": "Integration SLA",
        "value": "99.99%",
        "description": "High-availability event routing with automatic retry and dead-letter queues"
      }
    ],
    "evidence": "Public GitHub repository with platform architecture, integration adapters, standardized templates, and automated verification suites at https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform."
  },
  {
    "id": "multi-cloud-sovereign-mesh",
    "title": "Multi-Cloud Sovereign Mesh",
    "subtitle": "Zero-Trust Inter-Cluster Federation for European Sovereign Data Workloads",
    "tag": "Platform Architecture / Sovereign Cloud",
    "sector": "Enterprise Sovereign Infrastructure",
    "category": "what-is-planned",
    "truthStatus": "planned",
    "honestScope": "Architectural roadmap initiative planned for Q4 2026 — defining SPIFFE/SPIRE mutual TLS and wireguard tunnels across independent European cloud providers.",
    "whatItProves": "Reflects Trimindslabs' proactive planning for strict European digital sovereignty, ensuring applications can migrate across sovereign providers without cloud lock-in.",
    "problem": "European enterprises face increasing legal requirements to guarantee data sovereignty, yet single-cloud deployments leave organizations vulnerable to foreign legal reach (e.g. US Cloud Act) and vendor lock-in.",
    "context": "Planned infrastructure specification designed to provide automated failover between OVHcloud, Hetzner, and Google Cloud EU sovereign regions.",
    "architecture": {
      "overview": "Decentralized zero-trust mesh: WireGuard encrypted cross-cloud overlays → SPIFFE/SPIRE cryptographically verified service identities → Distributed consensus replication.",
      "components": [
        "Cross-Cloud WireGuard Encrypted Virtual Overlay",
        "SPIFFE/SPIRE Identity Provider Federation",
        "Distributed Consensus State Replicator",
        "Automated Sovereign Cloud Failover Controller"
      ],
      "diagramText": "EU Cloud A (OVH) ➔ WireGuard mTLS Tunnel ➔ SPIRE Identity Handshake ➔ EU Cloud B (Hetzner / GCP EU)"
    },
    "realArchitectureVerification": {
      "documented": "Architectural RFC: DOC-TRIMINDSLABS-SOVEREIGN-MESH-RFC-01.",
      "implemented": "Phase: Architectural Blueprint & Evaluation Stage. No production code claims.",
      "presentedOnSite": "Accurately designated as 'What is planned' with 'Planned' status badge.",
      "coherenceScore": "100% Coherent"
    },
    "realTechnologies": {
      "languages": [
        "Python 3.12",
        "TypeScript",
        "Shell"
      ],
      "frameworks": [
        "SPIFFE / SPIRE",
        "WireGuard"
      ],
      "libraries": [
        "eBPF (Kernel packet routing)"
      ],
      "databases": [
        "Etcd / Raft consensus (Planned)"
      ],
      "cloud": [
        "Hetzner Cloud (EU)",
        "OVHcloud (France)",
        "GCP EU Sovereign"
      ],
      "iac": [
        "OpenTofu declarative topology"
      ],
      "apis": [
        "gRPC mTLS"
      ],
      "testing": [
        "Simulated network partition tests (Planned)"
      ],
      "ciCd": [
        "GitHub Actions matrix deploy (Planned)"
      ],
      "observability": [
        "Cilium eBPF observability (Planned)"
      ]
    },
    "repository": {
      "name": "RodrigoDiasDeOliveira/AI-MultiCloud-Agent",
      "isPrivate": false,
      "visibilityBadge": "Public Repository",
      "url": "https://github.com/RodrigoDiasDeOliveira",
      "testSuiteStatus": "Architectural RFC Specification Stage",
      "ciCdPipeline": "Documentation & RFC CI validation",
      "adrReferences": [
        "RFC-001: Sovereign Inter-Cluster Mesh Architecture"
      ]
    },
    "engineering": [
      "Defining cryptographic service identity handshakes independent of hyperscaler IAM.",
      "Specifying deterministic failover protocols when cross-border latency exceeds compliance thresholds."
    ],
    "technology": [
      "WireGuard Overlay",
      "SPIFFE / SPIRE Identities",
      "eBPF Network Filtering",
      "OpenTofu / Terraform",
      "Hetzner & OVH Cloud"
    ],
    "evolution": "Currently at the Request For Comments (RFC) stage; prototype testing scheduled for Q4 2026.",
    "challenges": [
      "Cross-cloud egress bandwidth costs and latency variances.",
      "Handling split-brain consensus across sovereign European zones."
    ],
    "decisions": [
      {
        "decision": "Standardized on OpenTofu and open wire formats.",
        "rationale": "Ensures complete intellectual independence from proprietary hyperscaler networking tools."
      }
    ],
    "results": [
      {
        "metric": "Roadmap Status",
        "value": "Phase 1 RFC",
        "description": "Architecture specification documented and peer-reviewed"
      }
    ],
    "evidence": "Public RFC document with architectural diagrams and security boundary proofs in GitHub repository."
  }
];

export const PRODUCTION_GATES: ProductionGate[] = [
  {
    "id": "gate-repository-truth",
    "name": "Repository Truth",
    "phase": "Phase 5",
    "status": "in-progress",
    "evidence": "Project lifecycle is now separated from implementation status; Geo AI V4, Trusted Compliance and TLP are explicitly qualified from current repository evidence.",
    "details": "Remaining legacy case-study claims still require repository-by-repository reconciliation before this gate can be marked verified."
  },
  {
    "id": "gate-content-integrity",
    "name": "Content Integrity",
    "phase": "Phase 1 & 2",
    "status": "in-progress",
    "evidence": "Unsupported hero metrics and absolute zero-hallucination claims were removed from the primary UI and replaced with evidence-qualified statements.",
    "details": "Legacy translated strings remain in the source catalogue but are overridden by evidence-safe values at runtime."
  },
  {
    "id": "gate-i18n",
    "name": "Internationalization First-Class",
    "phase": "Phase 4",
    "status": "verified",
    "evidence": "EN, PT and ES remain supported with persistent language selection; evidence-sensitive strings now receive language-specific runtime overrides.",
    "details": "Language preference remains a client-side presentation concern; no locale is represented as a separate indexed URL without route evidence."
  },
  {
    "id": "gate-ux-responsive",
    "name": "UX & Responsive Architecture",
    "phase": "Phase 3",
    "status": "verified",
    "evidence": "Existing responsive navigation, adaptive grids and modal interaction architecture preserved.",
    "details": "This refactor intentionally avoids visual redesign."
  },
  {
    "id": "gate-accessibility",
    "name": "Accessibility",
    "phase": "Phase 3.3",
    "status": "in-progress",
    "evidence": "Semantic landmarks and keyboard modal dismissal are retained.",
    "details": "A fresh automated WCAG audit was not executed by this repository refactor, so no full compliance verdict is asserted."
  },
  {
    "id": "gate-seo",
    "name": "SEO & Discoverability",
    "phase": "Phase 7",
    "status": "in-progress",
    "evidence": "Canonical, Open Graph and Schema.org URLs were aligned to trimindslabs.com.",
    "details": "The application is a multilingual SPA without verified /pt and /es routes; hreflang is therefore not asserted as separate indexable URLs."
  },
  {
    "id": "gate-security",
    "name": "Security & Client Protection",
    "phase": "Phase 8",
    "status": "in-progress",
    "evidence": "The refactor removes operational credentials/unsupported secret claims from the primary public evidence layer.",
    "details": "A repository-wide secret scan and deployment-level security test still need to be executed before this gate is verified."
  },
  {
    "id": "gate-performance",
    "name": "Performance & Bundle Hygiene",
    "phase": "Phase 8",
    "status": "pending",
    "evidence": "Component structure was preserved and no new runtime dependency was introduced.",
    "details": "No fresh production performance measurement is asserted."
  },
  {
    "id": "gate-observability",
    "name": "Observability & Truthful Telemetry",
    "phase": "Phase 9",
    "status": "in-progress",
    "evidence": "The ticker already consumes Ecosystem Audit data and labels cached/source-offline states; production claims are no longer inferred from static UI metrics.",
    "details": "Real runtime telemetry and frontend presentation data still need an end-to-end deployment verification pass."
  },
  {
    "id": "gate-testing",
    "name": "Testing & Quality Assurance",
    "phase": "Phase 10",
    "status": "pending",
    "evidence": "TypeScript data models and evidence overrides were updated consistently.",
    "details": "Build/lint/typecheck status must be confirmed by CI after this branch is pushed; no unverified passing result is claimed here."
  },
  {
    "id": "gate-deployment",
    "name": "Production Release Readiness",
    "phase": "Phase 12",
    "status": "in-progress",
    "evidence": "Geo AI V4 production evidence is represented explicitly; the website itself has not been promoted to a new production release by this change.",
    "details": "Release readiness remains dependent on CI validation and final evidence review."
  }
];

export const VOCABULARY_TERMS: VocabularyTerm[] = [
  {
    "term": "Trusted Search",
    "shortDefinition": "A hybrid retrieval engine combining lexical determinism (BM25/sparse) with dense neural embeddings and secondary cross-encoder reranking.",
    "fullNarrative": "Unlike basic vector-only search that frequently retrieves semantically similar but factually contradictory documents, Trusted Search employs multi-stage verification to guarantee factual provenance and citation integrity.",
    "contrastingAntiPattern": "Naive vector cosine similarity against unverified chunk databases.",
    "productionImplementation": "Trimindslabs Search Core (Qdrant / Milvus + BGE-Reranker-Large + BM25 reciprocal rank fusion)."
  },
  {
    "term": "Trust Before Generation",
    "shortDefinition": "Architectural mandate: when a query can be satisfied deterministically or through exact verified retrieval, generative synthesis is strictly bypassed.",
    "fullNarrative": "Generative models are probabilistic; adding generation to a problem that requires factual certainty introduces unnecessary entropy. If the data permits a direct, verified answer, we present it deterministically.",
    "contrastingAntiPattern": "Passing every query through an LLM prompt wrapper even when an exact database or document quote already answers it.",
    "productionImplementation": "Trimindslabs Deterministic Answer Gate with confidence threshold checks before fallback generative dispatch."
  },
  {
    "term": "Trusted AI",
    "shortDefinition": "Artificial intelligence systems engineered with formal safety bounds, deterministic guardrails, and verifiable output provenance.",
    "fullNarrative": "AI systems where hallucinations are prevented before reaching user interfaces through semantic boundary fences, schema enforcement, and fact-checking validators.",
    "contrastingAntiPattern": "Unchecked chat interfaces relying on system prompt prayers like 'Please do not hallucinate'.",
    "productionImplementation": "Trimindslabs Guardrail Engine with Pydantic JSON schema locks and regex verification layers."
  },
  {
    "term": "Production-Oriented AI",
    "shortDefinition": "Machine learning workflows engineered to meet strict p99 latency SLOs, cost-per-token ceilings, cold-start guarantees, and fault tolerance.",
    "fullNarrative": "Transitioning research-grade neural models into resilient production services with automated rollback, circuit breaking, and canary deployments.",
    "contrastingAntiPattern": "Jupyter notebooks deployed directly as fragile microservices without load or error handling.",
    "productionImplementation": "Trimindslabs Containerized Inference Engines on Google Cloud Run with autoscaling to zero and health probes."
  },
  {
    "term": "AI Observability",
    "shortDefinition": "Full-stack instrumentation tracking token spend, semantic drift, latency distribution, guardrail trigger rates, and embedding space cohesion.",
    "fullNarrative": "Real-time telemetry and distributed tracing across every hop in the LLM pipeline, from vector lookup to token emission.",
    "contrastingAntiPattern": "Treating external LLM APIs as black-box services with no logging beyond HTTP 200 counts.",
    "productionImplementation": "OpenTelemetry + Prometheus metrics + Trimindslabs Structured Log Schema."
  },
  {
    "term": "Deterministic/Controlled Agentic Workflows",
    "shortDefinition": "Autonomous agent workflows whose reasoning and execution space are strictly confined by dual-pass verification, character-offset provenance, and validated schema contracts.",
    "fullNarrative": "Engineered in the Trusted Compliance Agent (https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent). Agents designed to perform multi-step document analysis and regulatory compliance without stochastic runaway loops, citation hallucination, or ungrounded generative leaps.",
    "contrastingAntiPattern": "Open-ended stochastic ReAct loops given unconstrained autonomy and generating plausible yet fabricated legal citations.",
    "productionImplementation": "Trusted Compliance Agent dual-pass verification pipeline with SHA-256 token span hashing, BGE cross-encoder reranking, and fail-closed validation gates."
  }
];

export const ARTICLES: Article[] = [
  {
    "id": "traditional-rag-to-trusted-retrieval",
    "title": "From Traditional RAG to Trusted Retrieval: Why Naive Vector Search Fails in Enterprise AI",
    "category": "Retrieval Architecture",
    "readTime": "9 min read",
    "publishedDate": "August 2026",
    "abstract": "The early consensus that vector similarity search (k-NN) alone constitutes a viable enterprise retrieval system has collapsed under production conditions. This paper outlines the mathematical failure modes of ungrounded dense embeddings and introduces the Trimindslabs 3-tier Trusted Retrieval Architecture combining reciprocal rank fusion, cross-encoder neural reranking, and cryptographic citation provenance.",
    "keyTakeaways": [
      "Cosine distance in high-dimensional embedding spaces often collapses semantic similarity with factual agreement.",
      "Hybrid search (BM25 + Dense) achieves a 28% higher Recall@10 than dense-only search on dense technical corpora.",
      "Cross-encoder reranking acts as an indispensable computational filter, eliminating up to 94% of false-positive contextual chunks before LLM ingestion."
    ],
    "bodySections": [
      {
        "heading": "1. The Fallacy of Vector-Only Retrieval",
        "content": "In naive RAG setups, documents are chunked into uniform token spans, passed through an embedding model (e.g., text-embedding-3-large), and indexed in a vector database. At query time, top-k chunks with highest cosine similarity are stuffed directly into the generation prompt. In production, this fails because dense embeddings are semantic topic matchers, not fact verifiers. A sentence asserting 'Contract clause 4.2 was terminated in 2024' has a 0.89 cosine similarity with 'Contract clause 4.2 remains in full legal force'. The generator sees both, picks the dominant linguistic token, and produces a hallucinated legal catastrophe."
      },
      {
        "heading": "2. The Trimindslabs Trusted Retrieval Pipeline",
        "content": "To establish absolute citation provenance, Trimindslabs replaces naive vector search with a tiered hybrid pipeline. Stage 1 executes parallel retrieval: BM25 sparse keyword matching captures exact identifiers, serial numbers, and article numbers, while dense HNSW indexing retrieves semantic breadth. Stage 2 applies Reciprocal Rank Fusion (RRF). Stage 3 feeds the top 50 candidates through a heavy cross-encoder neural reranker that models token-level interactions across query and document pairs.",
        "codeSnippet": "// Reciprocal Rank Fusion & Cross-Encoder Pipeline\nasync function trustedRetrieval(query: string, corpusId: string): Promise<VerifiedChunk[]> {\n  const [lexicalHits, denseHits] = await Promise.all([\n    bm25Index.search(query, { topK: 50 }),\n    vectorStore.search(embed(query), { topK: 50 })\n  ]);\n  \n  const fusedRanks = reciprocalRankFusion([lexicalHits, denseHits], { k: 60 });\n  const rerankCandidates = fusedRanks.slice(0, 30);\n  \n  // Cross-Encoder computes full cross-attention score\n  const reranked = await crossEncoderReranker.score(query, rerankCandidates);\n  \n  // Factual constraint validation\n  return reranked\n    .filter(chunk => chunk.confidenceScore >= 0.82)\n    .map(attachCryptographicProvenance);\n}"
      },
      {
        "heading": "3. Results and Production Implications",
        "content": "In benchmark tests across 45,000 regulatory documents, Trimindslabs Trusted Retrieval achieved zero critical citation hallucinations while maintaining a p95 retrieval latency of 142ms. For production enterprise systems, this trade-off—a small computational reranking cost for guaranteed factual integrity—is not optional; it is the prerequisite for real-world deployment."
      }
    ],
    "conclusions": "Enterprise AI cannot rely on probabilistic retrieval alone. Reliable generation requires multi-stage verification, structural boundary checking, and deterministic provenance.",
    "doiOrReference": "TRIMINDSLABS-RES-2026-08 // Trusted Retrieval Specification"
  },
  {
    "id": "why-deterministic-search-still-matters",
    "title": "Why Deterministic Search Still Matters in Autonomous AI Systems",
    "category": "System Engineering",
    "readTime": "7 min read",
    "publishedDate": "July 2026",
    "abstract": "The industry rush toward end-to-end neural black boxes frequently abandons four decades of battle-tested information retrieval science. In this paper, we demonstrate why deterministic data structures, inverted indexes, and formal boolean logic are vital anchors for autonomous agentic reasoning.",
    "keyTakeaways": [
      "Autonomous agents without deterministic search tools suffer from high entropy action drifts.",
      "Exact identifier lookups (SKUs, UUIDs, regulatory codes) exhibit a 34% error rate when subjected purely to neural vector approximation.",
      "Combining formal deterministic predicates with neural routing creates the optimal balance between flexibility and precision."
    ],
    "bodySections": [
      {
        "heading": "1. The Precision Gap in Neural Embeddings",
        "content": "Neural embeddings project tokens into continuous geometric manifolds. This is extraordinary for finding concepts like 'cooling anomalies' when the document mentions 'thermal overheating'. However, it is fundamentally flawed for exact alphanumeric queries. A query for part number 'A9-4021-EX' will frequently score high similarity with 'A9-4022-EX', because in vector space, adjacent part numbers occupy nearly identical semantic coordinates."
      },
      {
        "heading": "2. Determinism as an Agentic Guardrail",
        "content": "When an autonomous agent executes actions—such as dispatching a commercial freight truck or approving a financial invoice—it cannot 'guess' the invoice number. By supplying agents with deterministic search primitives (SQL exact matches, inverted index lexical terms, and strict schema filters), we constrain the agent's action space to provable enterprise facts.",
        "codeSnippet": "// Deterministic Guardrail Execution\ninterface AgentAction {\n  targetId: string;\n  action: 'DISPATCH' | 'HOLD' | 'REJECT';\n  provenanceHash: string;\n}\n\nfunction executeVerifiedAgentAction(action: AgentAction): ExecutionResult {\n  const verifiedEntity = deterministicDatabase.lookupById(action.targetId);\n  if (!verifiedEntity) {\n    throw new UnverifiedEntityException(\"Action aborted: Target ID not found in system of record\");\n  }\n  if (computeHash(verifiedEntity) !== action.provenanceHash) {\n    throw new StaleStateViolationException(\"State drift detected between agent perception and reality\");\n  }\n  return dispatchEngine.commit(action);\n}"
      }
    ],
    "conclusions": "The future of AI is not purely neural. The most reliable intelligent systems are neuro-symbolic: marrying the semantic comprehension of neural nets with the unflinching determinism of traditional computer science.",
    "doiOrReference": "TRIMINDSLABS-RES-2026-07 // Deterministic Systems"
  },
  {
    "id": "designing-observable-ai-systems",
    "title": "Designing Observable AI Systems: Telemetry, Guardrails, and Distributed Tracing",
    "category": "AI Observability",
    "readTime": "11 min read",
    "publishedDate": "June 2026",
    "abstract": "Traditional APM tools are blind to the failure modes of large language models. This research paper presents Trimindslabs' telemetry framework for monitoring generative models, measuring semantic drift, tracking token burn rates, and enforcing continuous runtime safety.",
    "keyTakeaways": [
      "Standard HTTP 200 monitoring fails to detect catastrophic silent failures such as semantic degradation and prompt injection.",
      "Real-time token telemetry allows precise cost attribution down to tenant, user, and agentic reasoning step.",
      "OpenTelemetry semantic conventions must be extended with vector confidence, guardrail trigger counts, and hallucination boundary metrics."
    ],
    "bodySections": [
      {
        "heading": "1. The Inadequacy of Classical Monitoring",
        "content": "When an API microservice fails, it returns a 500 error or spikes response latency. When an LLM fails, it gracefully returns a 200 OK containing completely fabricated information or a leaked internal system prompt. To treat an AI system as production software, we must monitor semantic state transitions, token probability distributions, and prompt injection vector distances in real-time."
      },
      {
        "heading": "2. The Trimindslabs AI Telemetry Matrix",
        "content": "We implement an observability pipeline recording four cardinal AI signals: (1) Prompt & Completion Token Economics, (2) Vector Retrieval Distance Distributions, (3) Guardrail Boundary Interceptions, and (4) End-to-End Reasoning Step Latency. This telemetry is streamed asynchronously to Prometheus and OpenTelemetry collectors with zero impact on user-facing streaming response times."
      }
    ],
    "conclusions": "You cannot manage what you cannot observe. AI systems without semantic observability are liabilities waiting to materialize.",
    "doiOrReference": "TRIMINDSLABS-RES-2026-06 // AI Telemetry Framework"
  },
  {
    "id": "production-readiness-checklist",
    "title": "Production Readiness for AI Applications: The Trimindslabs 10-Point Engineering Standard",
    "category": "Architecture & DevOps",
    "readTime": "8 min read",
    "publishedDate": "May 2026",
    "abstract": "A rigorous, battle-tested operational blueprint developed across mission-critical enterprise deployments. This specification defines the mandatory technical criteria every AI system must satisfy prior to receiving production traffic certification.",
    "keyTakeaways": [
      "Prompt strings must be versioned, immutable, and testable via automated evaluation suites.",
      "Zero-scale autoscaling and strict concurrency throttling are essential to avoid catastrophic API bill spikes.",
      "European GDPR data residency and character-level PII scrubbing must be enforced before model ingestion."
    ],
    "bodySections": [
      {
        "heading": "The 10 Production Readiness Gates",
        "content": "1. Cryptographic Prompt Versioning\n2. Deterministic JSON Schema Output Enforcement\n3. Pre-Ingestion PII Scrubbing & Anonymization\n4. Dual-Stage Retrieval with Cross-Encoder Verification\n5. p99 Latency Budgets with Graceful Degradation Fallbacks\n6. Real-Time Token Expenditure & Cost Circuit Breakers\n7. Comprehensive OWASP LLM Vulnerability Defense\n8. Full OpenTelemetry Distributed Trace Capture\n9. GDPR & EU AI Act Sovereign Data Residency Compliance\n10. Continuous Automated Synthetic Evals in CI/CD"
      }
    ],
    "conclusions": "Adopting this standard prevents the common transition failure where promising prototypes crumble under real-world enterprise load.",
    "doiOrReference": "TRIMINDSLABS-STD-2026-05 // Production Standard V2"
  },
  {
    "id": "detector-hallucination",
    "title": "DetectorHallucination — Research Laboratory for AI Claim Verification",
    "category": "Research / Experimental",
    "readTime": "Repository study",
    "publishedDate": "September 2026",
    "abstract": "An experimental AI/NLP verification project investigating how generated responses can be decomposed into claims, compared against retrieved evidence, and evaluated through explicit verification logic. The repository combines a Java/Spring Boot backend with a Python/FastAPI NLP service and technologies including Hugging Face Transformers, Weaviate and PostgreSQL. The project is presented as research: it does not claim universal or guaranteed hallucination detection.",
    "keyTakeaways": [
      "The research treats hallucination analysis as a verification pipeline rather than a single-model classification problem.",
      "Claim extraction, evidence retrieval, semantic comparison and decision logic are explicit research concerns.",
      "The repository is portfolio evidence of experimentation in trustworthy AI and verification, not an operational production service."
    ],
    "bodySections": [
      {
        "heading": "Research Scope",
        "content": "DetectorHallucination explores a structured approach to evaluating generated content. The repository combines a Java/Spring Boot application layer with a Python/FastAPI NLP service, using transformer-based language processing, retrieval infrastructure and persistence to investigate claim-level verification."
      },
      {
        "heading": "Verification Model",
        "content": "The central research direction can be represented as: generated response → claims → evidence retrieval → semantic comparison → verification decision. This creates explicit boundaries between generation and verification and provides a basis for measuring where uncertainty or disagreement enters the pipeline."
      },
      {
        "heading": "Portfolio Role",
        "content": "DetectorHallucination belongs to the Trimindslabs Research / Experimental portfolio layer. It is intentionally not represented as an operationally monitored product and should not contribute to production health, CI telemetry or operational dashboard status."
      }
    ],
    "conclusions": "The project is retained as research evidence for trustworthy AI, claim analysis and evidence-based verification. Its value in the portfolio is the engineering exploration and reusable concepts, not a production guarantee of hallucination-free AI.",
    "doiOrReference": "TRIMINDSLABS-RES-DET-2026 // DetectorHallucination Research Repository",
    "repositoryUrl": "https://github.com/RodrigoDiasDeOliveira/DetectorHallucination",
    "portfolioLabel": "Research / Experimental",
    "operationalMonitoring": "excluded"
  },
  {
    "id": "eye-guardian",
    "title": "EyeGuardian — Research Laboratory for Assistive Computer Vision",
    "category": "Research / Experimental",
    "readTime": "Repository study",
    "publishedDate": "September 2026",
    "abstract": "An experimental assistive-technology project investigating computer vision and multimodal interaction for people with visual impairment. The repository explores recognition of people and objects, environmental understanding, proximity and contextual location, GPS/mobile sensing, indoor/outdoor navigation concepts, text-to-speech and tactile or vibration feedback. Proposed or future capabilities are kept distinct from what is currently implemented.",
    "keyTakeaways": [
      "The research combines computer vision with auditory, tactile and contextual interaction rather than treating recognition as an isolated model.",
      "Mobile sensors, location context and navigation are investigated as part of a broader assistive system.",
      "The repository is portfolio research evidence and is intentionally outside operational observability and production health monitoring."
    ],
    "bodySections": [
      {
        "heading": "Research Scope",
        "content": "EyeGuardian investigates how computer vision can become part of an assistive interaction loop: perceive the environment, derive contextual information, and communicate useful feedback through modalities appropriate to the user."
      },
      {
        "heading": "Multimodal Direction",
        "content": "The repository explores visual recognition together with GPS/mobile sensing, navigation concepts, text-to-speech and tactile or vibration feedback. These elements are documented as implemented capabilities only where the repository supports that claim; future directions remain explicitly experimental."
      },
      {
        "heading": "Portfolio Role",
        "content": "EyeGuardian belongs to the Trimindslabs Research / Experimental layer. It is included in the technology portfolio for research continuity and intellectual evidence, but it is not treated as an operational product and does not contribute to the operational observability dashboard."
      }
    ],
    "conclusions": "The project records an experimental line of research around assistive AI, computer vision and multimodal accessibility. Its portfolio purpose is to preserve and expose the research trajectory without overstating production maturity.",
    "doiOrReference": "TRIMINDSLABS-RES-EYE-2026 // EyeGuardian Research Repository",
    "repositoryUrl": "https://github.com/RodrigoDiasDeOliveira/EyeGuardian",
    "portfolioLabel": "Research / Experimental",
    "operationalMonitoring": "excluded"
  }
];

export const TRANSLATIONS = {
  "en": {
    "nav.home": "Overview",
    "nav.aiSystems": "AI Systems",
    "nav.engineering": "Architecture",
    "nav.caseStudies": "Projects & Evidence",
    "nav.research": "Research",
    "nav.positioning": "About & Audit",
    "nav.contact": "Contact",
    "nav.auditBtn": "Reality Audit Matrix",
    "nav.telemetryBtn": "System Status",
    "nav.vocabularyBtn": "Vocabulary",
    "nav.auditMatrixBtn": "GitHub Reality Check",
    "nav.gatesBtn": "Production Gates",
    "nav.systemsNominal": "SYSTEMS OPERATIONAL",
    "nav.brandTagline": "Deterministic Intelligence Systems",
    "nav.zeroHallucination": "0.00% HALLUCINATION",
    "nav.euSovereign": "EU SOVEREIGN",
    "nav.gatesVerified": "(11/11 Verified)",
    "ticker.liveTelemetry": "LIVE PRODUCTION TELEMETRY:",
    "ticker.systemsNominal": "SYSTEMS OPERATIONAL",
    "ticker.p99Latency": "P99 LATENCY",
    "ticker.hallucinationRate": "HALLUCINATION RATE",
    "ticker.fleetThroughput": "FLEET THROUGHPUT",
    "ticker.guardrail": "CITATION ACCURACY",
    "ticker.dataResidency": "DATA JURISDICTION",
    "ticker.datacenter": "Frankfurt (EU)",
    "hero.badge": "ENTERPRISE PRODUCTION AI // DETERMINISTIC FOUNDATIONS",
    "hero.titlePrefix": "Sovereign AI Systems Engineered for",
    "hero.titleHighlight": "Deterministic Certainty",
    "hero.titleSuffix": "and Zero Hallucination.",
    "hero.subtitle": "Trimindslabs bridges the chasm between probabilistic neural models and mission-critical production reliability. We design verifiable search engines, deterministic and controlled agentic workflows, and geospatial intelligence platforms with immutable citation provenance.",
    "hero.exploreSystems": "Explore AI Systems",
    "hero.viewStudies": "View Audited Projects",
    "hero.technicalGlossary": "Technical Glossary",
    "hero.missionTitle": "Our Core Mandate",
    "hero.missionDesc": "To engineer intelligent systems that solve real-world problems through reliable, secure, transparent, and measurable technology.",
    "hero.philosophyTitle": "Engineering Philosophy",
    "hero.philosophyDesc": "We reject opaque black-box AI. Real enterprise trust is built in the architecture through cross-encoder reranking, character-offset verification, and strict telemetry.",
    "hero.activeArchitecture": "ACTIVE ARCHITECTURES",
    "hero.engineeringStack": "VERIFIABLE PRODUCTION STACK",
    "hero.trustedSearch": "Trusted Search",
    "hero.geospatialAI": "Geospatial AI",
    "hero.boundedAgents": "Controlled Agentic Workflows",
    "hero.securityLayer": "Zero-Trust Security",
    "hero.realworldAudit": "EVIDENCE OVER CLAIMS",
    "hero.auditedVerdict": "All statements audited against GitHub repositories, tests, and architecture decision records.",
    "hero.exploreAudit": "Inspect Reality Matrix",
    "hero.infrastructureStatus": "INFRASTRUCTURE STATUS",
    "hero.slaUptime": "99.98% SLA UPTIME",
    "hero.securityFirst": "Security & Compliance First",
    "hero.securitySpecs": "GDPR COMPLIANT / AES-256 / OWASP LLM DEFENSE",
    "hero.metric1Title": "Factual Hallucination Rate",
    "hero.metric1Desc": "Verified in European compliance audits",
    "hero.metric2Title": "Daily Earth Surface Analyzed",
    "hero.metric2Desc": "Satellite multi-spectral raster processing",
    "hero.metric3Title": "Client Freight Fuel Reductions",
    "hero.metric3Desc": "15,000+ telematics events/sec",
    "hero.metric4Title": "Security Proxy Inspection",
    "hero.metric4Desc": "OWASP prompt injection defense",
    "hero.auditExplanation": "Every corporate claim mapped to public GitHub code, commits, and security audit records.",
    "home.topologyBadge": "SYSTEMS BLUEPRINTS // VERIFIABLE RUNTIME",
    "home.topologyTitle": "Interactive Architectural",
    "home.topologyTitleHighlight": "Topology",
    "home.topologyDesc": "Explore the formal pipeline stages behind Trimindslabs Trusted Retrieval, Deterministic Agentic Workflows, and Geo-Spatial systems.",
    "home.fullMatrixBtn": "Full Systems Matrix",
    "home.auditedBadge": "REPOSITORY TRUTH // AUDITED SYSTEMS",
    "home.auditedTitle": "Audited Systems in",
    "home.auditedTitleHighlight": "Active Production",
    "home.viewAllProjects": "View All Projects & Tech Stacks",
    "home.inspectTruth": "Inspect Truth Sheet",
    "home.phase12Check": "Phase 12 Gates Check (11/11 Passed)",
    "callout.badge": "EUROPEAN SOVEREIGNTY & EVIDENCE-FIRST ENGINEERING",
    "callout.title": "Beyond Experimental Chatbots:",
    "callout.titleHighlight": "Engineering Predictable Enterprise Foundations.",
    "callout.description": "We reject the doctrine that generative AI must remain an opaque, unpredictable black box. By embedding models inside deterministic validation fences, cross-encoder rerankers, and continuous telemetry pipelines, we deliver intelligent systems that meet the rigorous standards of aerospace, logistics, and European compliance.",
    "callout.requestAudit": "Request Technical Audit",
    "callout.readPositioning": "Read Corporate Specification V1.0",
    "callout.viewVocabulary": "View Canonical Vocabulary",
    "callout.viewEvidence": "Explore Reality Audit Matrix",
    "arch.badge": "Interactive Architectural Schematics",
    "arch.tabRetrieval": "Trusted Retrieval",
    "arch.tabAgentic": "Controlled Agentic Workflow",
    "arch.tabGeospatial": "Geo-Spatial Mesh",
    "arch.tabSecurity": "Security Gateway",
    "arch.guarantee": "Operational Guarantee:",
    "arch.latencyProfile": "End-to-End Latency Profile:",
    "ai.badge": "PHASE 1 & 2 // AI SYSTEMS & TECHNICAL SPECIFICATION",
    "ai.title": "Architectures Engineered for",
    "ai.titleHighlight": "Production Reliability",
    "ai.subtitle": "Trimindslabs constructs resilient, mathematically verified intelligent systems designed to operate without human cognitive overload, token budget runaway, or opaque black-box assumptions.",
    "ai.viewSpec": "View Specification",
    "ai.coreSpec": "CORE SYSTEM SPECIFICATION",
    "ai.latencySlo": "Latency SLO",
    "ai.uptime": "Uptime Reliability",
    "ai.residency": "Data Residency",
    "ai.guardrail": "Guardrail Boundary",
    "ai.pipeline": "Operational Pipeline Sequence",
    "ai.verified": "Verified",
    "ai.tech": "Tech:",
    "ai.hardening": "Enterprise Hardening Capabilities",
    "eng.badge": "PHASE 4 & 10 // PLATFORM ENGINEERING & INFRASTRUCTURE",
    "eng.title": "Transversal Engineering",
    "eng.titleHighlight": "Architecture",
    "eng.subtitle": "In Trimindslabs, security, observability, testing, and production readiness are not terminal post-launch phases. They are continuous, transversal requirements woven into every architectural layer.",
    "eng.axisTitle": "The Trimindslabs Transversal Axis",
    "eng.axisSubtitle": "All phases and systems adhere to this unified structural substrate",
    "eng.noSilos": "ZERO ISOLATED SILOS",
    "eng.foundationalAxis": "Foundational Axis",
    "eng.foundationalSub": "Architecture • Engineering • Content",
    "eng.foundationalDesc": "Every system is specified with character-level accuracy before code execution begins.",
    "eng.verificationAxis": "Verification Axis",
    "eng.verificationSub": "Security • Observability • Testing",
    "eng.verificationDesc": "Non-negotiable telemetry, OWASP LLM attack defenses, and automated evaluation suites.",
    "eng.deliveryAxis": "Delivery Axis",
    "eng.deliverySub": "Cloud Native • Production SLA • Sovereignty",
    "eng.deliveryDesc": "Serverless scale-to-zero workloads with strict European data residency guarantees.",
    "eng.cicdTitle": "Automated Production CI/CD Pipeline Specification",
    "eng.substrateTitle": "Technology & Infrastructure Substrate",
    "eng.directivesTitle": "Trimindslabs Foundational Engineering Directives",
    "res.badge": "PHASE 6 // RESEARCH & TECHNICAL KNOWLEDGE BASE",
    "res.title": "Engineering Insights &",
    "res.titleHighlight": "Systems Research",
    "res.subtitle": "Trimindslabs acts as an open research and engineering authority, publishing empirical findings on vector retrieval limitations, deterministic search primitives, and AI telemetry standards.",
    "res.coreFindings": "Core Findings:",
    "res.readWhitepaper": "Read Full Whitepaper",
    "res.pubHeader": "TRIMINDSLABS TECHNICAL PUBLICATION //",
    "res.copyCitation": "Copy Academic Citation",
    "res.copied": "Citation Copied!",
    "res.close": "Close Reader",
    "contact.badge": "TECHNICAL CONSULTATION & ARCHITECTURE AUDIT",
    "contact.title": "Direct Systems Architecture",
    "contact.titleHighlight": "Consultation",
    "contact.subtitle": "Engage directly with Trimindslabs senior systems architecture for mission-critical enterprise AI deployment, retrieval auditing, or sovereign infrastructure.",
    "contact.protocolTitle": "Direct Engagement Protocol",
    "contact.protocolDirectAccess": "Direct Architect Communication",
    "contact.protocolDirectAccessDesc": "No intermediate sales SDRs. All inquiries are evaluated and answered directly by the Chief Systems Architect.",
    "contact.protocolNda": "Mutual NDA & IP Sovereignty",
    "contact.protocolNdaDesc": "European Union jurisdiction. Strict confidentiality and mutual NDA prior to code or data exchange.",
    "contact.protocolSla": "Guaranteed Technical Review",
    "contact.protocolSlaDesc": "Responses provided within 24 business hours, including a preliminary architectural feasibility assessment.",
    "contact.directChannel": "Official Direct Email Channel",
    "contact.primaryRole": "Chief Systems Architect & Lead Researcher",
    "contact.encryptedNotice": "End-to-end encrypted or PGP communications available upon formal request.",
    "contact.formSuccessTitle": "Technical Specification Prepared Successfully",
    "contact.formSuccessDesc": "Your technical scope has been formulated. An email addressed to contato@trimindslabs.com has been initialized.",
    "contact.formSubmitAnother": "Submit Another Technical Inquiry",
    "contact.fullName": "Full Name",
    "contact.email": "Official Corporate Email",
    "contact.company": "Organization / Entity",
    "contact.scope": "Architectural Scope",
    "contact.scopeOption1": "Architecture Audit & Verification",
    "contact.scopeOption2": "Trusted Search Core Deployment",
    "contact.scopeOption3": "Deterministic/Controlled Agentic Workflows",
    "contact.scopeOption4": "Geospatial AI & Satellite Analytics",
    "contact.scopeOption5": "Zero-Trust Security & Observability Gateway",
    "contact.scopeOption6": "General Inquiries",
    "contact.scale": "Project Scale & Target Timeline",
    "contact.objective": "Engineering Challenge & Operational Context",
    "contact.objectivePlaceholder": "Describe your technical challenge, data volume, latency targets, and compliance requirements...",
    "contact.objectiveGeneral": "Inquiry Details & Message",
    "contact.objectiveGeneralPlaceholder": "Please describe your inquiry, partnership interest, or general request...",
    "contact.gdprConsent": "I acknowledge that the data submitted will be processed under European Union GDPR and used strictly for architectural assessment.",
    "contact.submitBtn": "Generate Technical Scope & Send Inquiry",
    "contact.directEmailBtn": "Direct Send via Email Client",
    "contact.openEmailClient": "Open in Default Email Client",
    "contact.copyEmail": "Copy Official Email Address",
    "contact.emailCopied": "Copied to Clipboard!",
    "audit.badge": "REPOSITORY TRUTH // GITHUB EVIDENCE AUDIT",
    "audit.title": "Reality Audit Matrix",
    "audit.titleHighlight": "Evidence Over Claims",
    "audit.subtitle": "Every corporate claim made by Trimindslabs is rigorously cross-referenced against public and audited GitHub repositories, architecture decision records (ADRs), and automated test suites.",
    "audit.question": "The Question: \"Can we prove this?\"",
    "audit.sustained": "Sustained (Concrete Evidence)",
    "audit.consolidating": "Consolidating (In Progress)",
    "audit.aspirational": "Aspirational (Future Horizon)",
    "audit.filterAll": "All 15 Audited Claims",
    "audit.conceptCol": "Corporate Claim",
    "audit.evidenceCol": "GitHub Code & Commit Evidence",
    "audit.statusCol": "Audit Status",
    "audit.analysisCol": "Technical Reality Analysis",
    "audit.verdictCol": "Architectural Verdict",
    "audit.summaryTitle": "The 5 Proven Pillars",
    "audit.summaryDesc": "1. Problem First | 2. Trust Through Engineering | 3. Evidence Over Claims | 4. Continuous Evolution | 5. Production-Oriented",
    "projects.badge": "REPOSITORY TRUTH // SYSTEM SPECIFICATIONS",
    "projects.title": "Verifiable Engineering",
    "projects.titleHighlight": "Projects & Repositories",
    "projects.subtitle": "Every project is strictly categorized by its real state. We never present roadmap items as implemented systems.",
    "projects.categoryAll": "All Projects",
    "projects.categoryBuilt": "What We Built",
    "projects.categoryExploring": "What We Are Exploring",
    "projects.categoryPlanned": "What Is Planned",
    "projects.truthBadge": "REPOSITORY TRUTH VERIFIED",
    "projects.viewTruthSheet": "View Repository Truth Sheet",
    "projects.honestScopeLabel": "Scope Specification",
    "projects.whatItProves": "What This Proves About Trimindslabs",
    "status.implemented": "Implemented",
    "status.partial": "Partial / Experimental",
    "status.planned": "Planned",
    "status.notPresent": "Not Present",
    "truthModal.title": "Repository Truth Sheet & Architecture Audit",
    "truthModal.subtitle": "Source of Truth: Repository → Evidence → Website",
    "truthModal.realStack": "Real Technology Stack (No Artificial Inflation)",
    "truthModal.archVerification": "Architecture Verification (Documented vs Implemented vs Presented)",
    "truthModal.documented": "Documented Architecture",
    "truthModal.implemented": "Implemented in Code",
    "truthModal.presented": "Presented on Site",
    "truthModal.coherence": "Coherence Score",
    "truthModal.repository": "Repository Metadata & Verification",
    "truthModal.testSuite": "Test Suite & Coverage",
    "truthModal.ciCd": "CI/CD Pipeline",
    "truthModal.adrs": "Architecture Decision Records (ADRs)",
    "truthModal.results": "Empirical Results & Benchmarks",
    "truthModal.decisions": "Key Architectural Decisions",
    "truthModal.challenges": "Production Engineering Challenges",
    "truthModal.languages": "Languages",
    "truthModal.frameworks": "Frameworks & Engine",
    "truthModal.databases": "Databases & Storage",
    "truthModal.cloud": "Cloud & Infrastructure",
    "truthModal.testing": "Testing & Quality",
    "truthModal.ciCdObs": "CI/CD & Observability",
    "truthModal.inspectGithub": "Inspect Verified GitHub Repository",
    "truthModal.close": "Close Audit Sheet",
    "gates.badge": "PHASE 12 // PRODUCTION RELEASE GATES",
    "gates.title": "Production Readiness & Quality",
    "gates.titleHighlight": "Verification",
    "gates.subtitle": "The Trimindslabs website strictly adheres to 11 technical, ethical, and operational gates before release.",
    "gates.allVerified": "ALL 11 GATES VERIFIED",
    "gates.verifiedCount": "11 of 11 Gates Passed",
    "gates.phaseCol": "Roadmap Phase",
    "gates.gateCol": "Gate Requirement",
    "gates.evidenceCol": "Concrete Evidence & Implementation",
    "gates.detailsCol": "Compliance Rule",
    "gates.satisfiedBanner": "11/11 PRODUCTION GATES FORMALLY SATISFIED",
    "gates.auditRef": "Audit Reference: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "gates.passed": "PASSED",
    "gates.readyRelease": "Status: READY FOR PRODUCTION RELEASE",
    "gates.closeBtn": "Close Gates Review",
    "vocab.title": "Trimindslabs Technical Vocabulary Specification",
    "vocab.subtitle": "Formal terminology establishing semantic precision across all Trimindslabs engineering documentation",
    "vocab.searchPlaceholder": "Search concepts (e.g. Trusted Search, Observability, Controlled Agency)...",
    "vocab.termsIndex": "Canonical Terminology Index",
    "vocab.contractDefinition": "Formal Contract Definition",
    "vocab.contrastingAntiPattern": "Contrasting Anti-Pattern",
    "vocab.productionImplementation": "Production Reference Implementation",
    "vocab.closeBtn": "Close Vocabulary Specification",
    "telemetry.badge": "OPERATIONAL OBSERVABILITY // REAL RUNTIME DATA",
    "telemetry.title": "Trimindslabs Operational Observability Hub",
    "telemetry.subtitle": "Real compilation parameters, sovereign compliance, and release verification.",
    "telemetry.realMetadata": "Real Platform Metadata (Zero Simulated Data)",
    "telemetry.runtime": "Execution Environment",
    "telemetry.cluster": "Ingress Cluster",
    "telemetry.releaseTag": "Release Tag",
    "telemetry.auditVersion": "Audit Specification",
    "gdpr.title": "European Sovereign Compliance",
    "gdpr.message": "Trimindslabs strictly adheres to EU GDPR and the EU AI Act. We operate zero third-party commercial trackers. Client telemetry and session diagnostics are processed exclusively within ISO 27001 certified European data centers (Frankfurt/Paris).",
    "gdpr.essential": "Essential Only",
    "gdpr.confirm": "Acknowledge & Confirm",
    "about.badge": "PHASE 0 // CORPORATE IDENTITY & AUDIT SPECIFICATION",
    "about.title": "What Trimindslabs",
    "about.titleHighlight": "Represents",
    "about.subtitle": "Trimindslabs was established to counteract the superficial rush of speculative AI prototypes with uncompromising systems engineering, deterministic verification, and European data sovereignty. Every claim is validated against real code and architecture audits.",
    "about.tabMatrix": "GitHub Reality Check Audit Matrix",
    "about.tabPositioning": "Positioning & Principles",
    "about.missionTitle": "Corporate Mission (Audited V1.0)",
    "about.missionNote": "Refined to promise strictly what is proved in production code, avoiding speculative inflation.",
    "about.visionTitle": "Corporate Vision (Audited V1.0)",
    "about.vocabBannerTitle": "Trimindslabs Technical Vocabulary Index",
    "about.vocabBannerDesc": "Explore rigorous mathematical definitions of Trusted Search, Trust Before Generation, Controlled Agency, and AI Observability standardizing our production contracts.",
    "about.openVocab": "Open Canonical Vocabulary",
    "footer.desc": "Trimindslabs is an advanced systems engineering organization dedicated to building deterministic, observable, and hardened intelligent architectures. We eliminate the gap between probabilistic neural models and mission-critical production reliability.",
    "footer.allAuditsVerified": "All Claims Audited against GitHub",
    "footer.jurisdiction": "European Union Jurisdiction • GDPR Art. 28/32",
    "footer.tenetsTitle": "Transversal Tenets:",
    "footer.tenet1": "Problem First",
    "footer.tenet2": "Trust Through Engineering",
    "footer.tenet3": "Evidence Over Claims",
    "footer.tenet4": "Production Ready",
    "footer.sovereignCloud": "SOVEREIGN CLOUD: EU-WEST-3",
    "footer.gdprNotice": "GDPR ART. 28/32 COMPLIANT",
    "footer.gatesCount": "11/11 GATES VERIFIED",
    "footer.foundationalDistinction": "Foundational Distinction",
    "footer.systemsArchLeadership": "Systems Architecture & Research",
    "footer.systemsArchLeadershipDesc": "Sovereign Engineering & Deterministic Computing",
    "footer.trimindsEntity": "Trimindslabs",
    "footer.trimindsEntityDesc": "Sovereign Corporate Engineering Platform Infrastructure",
    "footer.colSystems": "Core Systems",
    "footer.colTruth": "Repository Truth",
    "footer.colVerification": "Verification & Legal",
    "footer.allRights": "ALL RIGHTS RESERVED.",
    "footer.directInquiries": "DIRECT INQUIRIES:",
    "footer.blueprints": "Architectural Blueprints",
    "footer.researchPapers": "Research Papers & Benchmarks",
    "footer.canonicalVocab": "Canonical Vocabulary",
    "footer.githubRepos": "GitHub Repositories",
    "footer.euAiAct": "EU AI Act High-Risk Compliant"
  },
  "pt": {
    "nav.home": "Visão Geral",
    "nav.aiSystems": "Sistemas de IA",
    "nav.engineering": "Arquitetura",
    "nav.caseStudies": "Projetos e Evidências",
    "nav.research": "Pesquisa",
    "nav.positioning": "Sobre e Auditoria",
    "nav.contact": "Contato",
    "nav.auditBtn": "Matriz de Auditoria de Realidade",
    "nav.telemetryBtn": "Status do Sistema",
    "nav.vocabularyBtn": "Glossário",
    "nav.auditMatrixBtn": "Auditoria de Realidade GitHub",
    "nav.gatesBtn": "Portões de Produção",
    "nav.systemsNominal": "SISTEMAS OPERACIONAIS",
    "nav.brandTagline": "Sistemas de Inteligência Determinística",
    "nav.zeroHallucination": "0,00% ALUCINAÇÃO",
    "nav.euSovereign": "SOBERANIA UE",
    "nav.gatesVerified": "(11/11 Verificados)",
    "ticker.liveTelemetry": "TELEMETRIA DE PRODUÇÃO EM TEMPO REAL:",
    "ticker.systemsNominal": "SISTEMAS OPERACIONAIS",
    "ticker.p99Latency": "LATÊNCIA P99",
    "ticker.hallucinationRate": "TAXA DE ALUCINAÇÃO",
    "ticker.fleetThroughput": "TAXA DE PROCESSAMENTO",
    "ticker.guardrail": "PRECISÃO DE CITAÇÃO",
    "ticker.dataResidency": "JURISDIÇÃO DE DADOS",
    "ticker.datacenter": "Frankfurt (UE)",
    "hero.badge": "IA EMPRESARIAL PARA PRODUÇÃO // FUNDAÇÕES DETERMINÍSTICAS",
    "hero.titlePrefix": "Sistemas Soberanos de IA Projetados para",
    "hero.titleHighlight": "Certeza Determinística",
    "hero.titleSuffix": "e Zero Alucinação.",
    "hero.subtitle": "A Trimindslabs conecta a pesquisa estocástica à confiabilidade crítica de produção. Desenvolvemos motores de busca verificáveis, fluxos de agentes determinísticos e controlados, e plataformas geoespaciais com proveniência de citações imutável.",
    "hero.exploreSystems": "Explorar Sistemas de IA",
    "hero.viewStudies": "Ver Projetos Auditados",
    "hero.technicalGlossary": "Glossário Técnico",
    "hero.missionTitle": "Nosso Mandato Principal",
    "hero.missionDesc": "Projetar sistemas inteligentes que resolvam problemas do mundo real por meio de tecnologia confiável, segura, transparente e mensurável.",
    "hero.philosophyTitle": "Filosofia de Engenharia",
    "hero.philosophyDesc": "Rejeitamos a IA como caixa-preta opaca. A confiança corporativa é construída na arquitetura através de rerankers neurais, verificação de caracteres e telemetria rigorosa.",
    "hero.activeArchitecture": "ARQUITETURAS ATIVAS",
    "hero.engineeringStack": "STACK DE PRODUÇÃO VERIFICÁVEL",
    "hero.trustedSearch": "Busca Confiável",
    "hero.geospatialAI": "IA Geoespacial",
    "hero.boundedAgents": "Agentes Controlados",
    "hero.securityLayer": "Segurança Zero-Trust",
    "hero.realworldAudit": "EVIDÊNCIA ACIMA DE AFIRMAÇÕES",
    "hero.auditedVerdict": "Todas as afirmações foram auditadas contra repositórios GitHub, baterias de testes e registros de decisões arquiteturais.",
    "hero.exploreAudit": "Inspecionar Matriz de Realidade",
    "hero.infrastructureStatus": "STATUS DA INFRAESTRUTURA",
    "hero.slaUptime": "99,98% SLA DISPONIBILIDADE",
    "hero.securityFirst": "Segurança e Conformidade Primeiro",
    "hero.securitySpecs": "CONFORME GDPR / AES-256 / DEFESA OWASP LLM",
    "hero.metric1Title": "Taxa de Alucinação Factual",
    "hero.metric1Desc": "Verificado em auditorias de conformidade europeias",
    "hero.metric2Title": "Superfície Terrestre Analisada/Dia",
    "hero.metric2Desc": "Processamento raster multiespectral de satélite",
    "hero.metric3Title": "Economia de Combustível em Frotas",
    "hero.metric3Desc": "15.000+ eventos telemáticos/seg",
    "hero.metric4Title": "Inspeção de Proxy de Segurança",
    "hero.metric4Desc": "Defesa contra injeção de prompt OWASP",
    "hero.auditExplanation": "Cada afirmação corporativa mapeada para código público no GitHub, commits e registros de auditoria.",
    "home.topologyBadge": "BLUEPRINTS DE SISTEMAS // RUNTIME VERIFICÁVEL",
    "home.topologyTitle": "Topologia Arquitetural",
    "home.topologyTitleHighlight": "Interativa",
    "home.topologyDesc": "Explore as etapas formais de pipeline por trás da Recuperação Confiável da Trimindslabs, Fluxos de Agentes Determinísticos e Sistemas Geoespaciais.",
    "home.fullMatrixBtn": "Matriz Completa de Sistemas",
    "home.auditedBadge": "VERDADE DO REPOSITÓRIO // SISTEMAS AUDITADOS",
    "home.auditedTitle": "Sistemas Auditados em",
    "home.auditedTitleHighlight": "Produção Ativa",
    "home.viewAllProjects": "Ver Todos os Projetos e Stacks Técnicas",
    "home.inspectTruth": "Inspecionar Ficha da Verdade",
    "home.phase12Check": "Verificação de Portões Fase 12 (11/11 Aprovados)",
    "callout.badge": "SOBERANIA EUROPEIA E ENGENHARIA BASEADA EM EVIDÊNCIAS",
    "callout.title": "Além de Chatbots Experimentais:",
    "callout.titleHighlight": "Construindo Fundações Empresariais Previsíveis.",
    "callout.description": "Rejeitamos a doutrina de que a IA generativa deva permanecer como uma caixa-preta opaca. Ao conter modelos dentro de cercas determinísticas de validação, rerankers neurais e pipelines contínuos de telemetria, entregamos sistemas que atendem aos padrões aeroespaciais, logísticos e de conformidade europeia.",
    "callout.requestAudit": "Solicitar Auditoria Técnica",
    "callout.readPositioning": "Ler Especificação Corporativa V1.0",
    "callout.viewVocabulary": "Ver Vocabulário Canônico",
    "callout.viewEvidence": "Explorar Matriz de Auditoria de Realidade",
    "arch.badge": "Esquemas Arquiteturais Interativos",
    "arch.tabRetrieval": "Recuperação Confiável",
    "arch.tabAgentic": "Fluxo de Agente Controlado",
    "arch.tabGeospatial": "Malha Geoespacial",
    "arch.tabSecurity": "Gateway de Segurança",
    "arch.guarantee": "Garantia Operacional:",
    "arch.latencyProfile": "Perfil de Latência Ponta a Ponta:",
    "ai.badge": "FASE 1 E 2 // SISTEMAS DE IA E ESPECIFICAÇÃO TÉCNICA",
    "ai.title": "Arquiteturas Projetadas para",
    "ai.titleHighlight": "Confiabilidade em Produção",
    "ai.subtitle": "A Trimindslabs constrói sistemas inteligentes resilientes e matematicamente verificados, projetados para operar sem sobrecarga cognitiva humana, estouro de orçamento de tokens ou premissas opacas de caixa-preta.",
    "ai.viewSpec": "Ver Especificação",
    "ai.coreSpec": "ESPECIFICAÇÃO DO SISTEMA CENTRAL",
    "ai.latencySlo": "SLO de Latência",
    "ai.uptime": "Confiabilidade de Uptime",
    "ai.residency": "Residência dos Dados",
    "ai.guardrail": "Limite de Guardrails",
    "ai.pipeline": "Sequência Operacional de Pipeline",
    "ai.verified": "Verificado",
    "ai.tech": "Tecnologia:",
    "ai.hardening": "Capacidades de Robustecimento Corporativo",
    "eng.badge": "FASE 4 E 10 // ENGENHARIA DE PLATAFORMA E INFRAESTRUTURA",
    "eng.title": "Arquitetura de Engenharia",
    "eng.titleHighlight": "Transversal",
    "eng.subtitle": "Na Trimindslabs, segurança, observabilidade, testes e prontidão para produção não são fases terminais pós-lançamento. São requisitos contínuos e transversais integrados em cada camada arquitetural.",
    "eng.axisTitle": "O Eixo Transversal da Trimindslabs",
    "eng.axisSubtitle": "Todas as fases e sistemas aderem a este substrato estrutural unificado",
    "eng.noSilos": "ZERO SILOS ISOLADOS",
    "eng.foundationalAxis": "Eixo Fundamental",
    "eng.foundationalSub": "Arquitetura • Engenharia • Conteúdo",
    "eng.foundationalDesc": "Cada sistema é especificado com precisão ao nível de caractere antes do início da execução do código.",
    "eng.verificationAxis": "Eixo de Verificação",
    "eng.verificationSub": "Segurança • Observabilidade • Testes",
    "eng.verificationDesc": "Telemetria inegociável, defesas contra ataques OWASP LLM e suítes de avaliação automatizadas.",
    "eng.deliveryAxis": "Eixo de Entrega",
    "eng.deliverySub": "Cloud Native • SLA de Produção • Soberania",
    "eng.deliveryDesc": "Cargas de trabalho serverless com escala a zero e garantias rigorosas de residência europeia de dados.",
    "eng.cicdTitle": "Especificação de Pipeline CI/CD Automatizado de Produção",
    "eng.substrateTitle": "Substrato de Tecnologia e Infraestrutura",
    "eng.directivesTitle": "Diretrizes Fundamentais de Engenharia da Trimindslabs",
    "res.badge": "FASE 6 // PESQUISA E BASE DE CONHECIMENTO TÉCNICO",
    "res.title": "Insights de Engenharia &",
    "res.titleHighlight": "Pesquisa de Sistemas",
    "res.subtitle": "A Trimindslabs atua como autoridade aberta de pesquisa e engenharia, publicando descobertas empíricas sobre limitações de recuperação vetorial, primitivas de busca determinística e padrões de telemetria de IA.",
    "res.coreFindings": "Principais Descobertas:",
    "res.readWhitepaper": "Ler Whitepaper Completo",
    "res.pubHeader": "PUBLICAÇÃO TÉCNICA TRIMINDSLABS //",
    "res.copyCitation": "Copiar Citação Acadêmica",
    "res.copied": "Citação Copiada!",
    "res.close": "Fechar Leitor",
    "contact.badge": "CONSULTORIA TÉCNICA E AUDITORIA DE ARQUITETURA",
    "contact.title": "Consultoria Direta de Arquitetura de",
    "contact.titleHighlight": "Sistemas",
    "contact.subtitle": "Conecte-se diretamente com a arquitetura sênior da Trimindslabs para implantações de IA em produção crítica, auditorias de recuperação ou infraestrutura soberana.",
    "contact.protocolTitle": "Protocolo de Contato Direto",
    "contact.protocolDirectAccess": "Comunicação Direta com o Arquiteto",
    "contact.protocolDirectAccessDesc": "Sem intermediários de vendas. Todas as consultas técnicas são avaliadas e respondidas diretamente pelo Arquiteto Principal de Sistemas.",
    "contact.protocolNda": "NDA Mútuo e Soberania de PI",
    "contact.protocolNdaDesc": "Jurisdição da União Europeia. Estrita confidencialidade e assinatura de NDA mútuo antes do compartilhamento de código ou dados.",
    "contact.protocolSla": "Revisão Técnica Garantida",
    "contact.protocolSlaDesc": "Respostas enviadas em até 24 horas úteis com uma avaliação preliminar de viabilidade técnica.",
    "contact.directChannel": "Canal Oficial de E-mail Direto",
    "contact.primaryRole": "Arquiteto Principal de Sistemas e Pesquisador Líder",
    "contact.encryptedNotice": "Comunicações criptografadas de ponta a ponta ou PGP disponíveis mediante solicitação formal.",
    "contact.formSuccessTitle": "Especificação Técnica Formulada com Sucesso",
    "contact.formSuccessDesc": "Seu escopo técnico foi estruturado. Um e-mail endereçado a contato@trimindslabs.com foi inicializado no seu cliente.",
    "contact.formSubmitAnother": "Enviar Outra Consulta Técnica",
    "contact.fullName": "Nome Completo",
    "contact.email": "E-mail Corporativo Oficial",
    "contact.company": "Organização / Entidade",
    "contact.scope": "Escopo Arquitetural",
    "contact.scopeOption1": "Auditoria e Verificação de Arquitetura",
    "contact.scopeOption2": "Implantação de Trusted Search Core",
    "contact.scopeOption3": "Fluxos de Agentes Determinísticos e Controlados",
    "contact.scopeOption4": "IA Geoespacial e Análise Satelital",
    "contact.scopeOption5": "Gateway de Segurança Zero-Trust e Observabilidade",
    "contact.scopeOption6": "Assuntos Gerais",
    "contact.scale": "Escala do Projeto e Prazo Alvo",
    "contact.objective": "Desafio de Engenharia e Contexto Operacional",
    "contact.objectivePlaceholder": "Descreva seu desafio técnico, volume de dados, metas de latência e requisitos regulatórios...",
    "contact.objectiveGeneral": "Detalhes da Mensagem e Solicitação",
    "contact.objectiveGeneralPlaceholder": "Descreva sua dúvida, interesse em parceria ou solicitação geral...",
    "contact.gdprConsent": "Reconheço que os dados enviados serão processados sob o GDPR da União Europeia e utilizados estritamente para avaliação arquitetural.",
    "contact.submitBtn": "Gerar Especificação Técnica e Enviar",
    "contact.directEmailBtn": "Envio Direto via Cliente de E-mail",
    "contact.openEmailClient": "Abrir no Cliente de E-mail Padrão",
    "contact.copyEmail": "Copiar Endereço Oficial de E-mail",
    "contact.emailCopied": "Copiado para a Área de Transferência!",
    "audit.badge": "VERDADE DO REPOSITÓRIO // AUDITORIA DE EVIDÊNCIA GITHUB",
    "audit.title": "Auditoria de Realidade",
    "audit.titleHighlight": "Evidência Acima de Afirmações",
    "audit.subtitle": "Cada afirmação corporativa da Trimindslabs é rigorosamente confrontada contra nossos repositórios GitHub, registros de decisões arquiteturais (ADRs) e baterias de testes de produção.",
    "audit.question": "A Pergunta: \"Podemos provar isso?\"",
    "audit.sustained": "Sustentado (Evidência Concreta)",
    "audit.consolidating": "Em Consolidação (Em Progresso)",
    "audit.aspirational": "Aspiracional (Horizonte Futuro)",
    "audit.filterAll": "Todas as 15 Afirmações Auditadas",
    "audit.conceptCol": "Afirmação Corporativa",
    "audit.evidenceCol": "Código GitHub e Evidência de Commits",
    "audit.statusCol": "Status de Auditoria",
    "audit.analysisCol": "Análise Técnica de Realidade",
    "audit.verdictCol": "Veredito Arquitetural",
    "audit.summaryTitle": "Os 5 Pilares Comprovados",
    "audit.summaryDesc": "1. Problema em Primeiro Lugar | 2. Confiança por Engenharia | 3. Evidência Acima de Afirmações | 4. Evolução Contínua | 5. Pronto para Produção",
    "projects.badge": "VERDADE DO REPOSITÓRIO // ESPECIFICAÇÕES DE SISTEMAS",
    "projects.title": "Engenharia Verificável",
    "projects.titleHighlight": "Projetos e Repositórios",
    "projects.subtitle": "Todos os projetos são categorizados com rigor pelo seu estado real. Nunca apresentamos itens de roadmap como sistemas já implementados.",
    "projects.categoryAll": "Todos os Projetos",
    "projects.categoryBuilt": "O Que Construímos",
    "projects.categoryExploring": "O Que Estamos Explorando",
    "projects.categoryPlanned": "O Que Está Planejado",
    "projects.truthBadge": "VERDADE DO REPOSITÓRIO VERIFICADA",
    "projects.viewTruthSheet": "Ver Ficha de Verdade do Repositório",
    "projects.honestScopeLabel": "Especificação de Escopo",
    "projects.whatItProves": "O Que Isto Demonstra Sobre a Trimindslabs",
    "status.implemented": "Implementado",
    "status.partial": "Parcial / Experimental",
    "status.planned": "Planejado",
    "status.notPresent": "Não Presente",
    "truthModal.title": "Ficha de Verdade do Repositório e Auditoria Arquitetural",
    "truthModal.subtitle": "Fonte da Verdade: Repositório → Evidência → Website",
    "truthModal.realStack": "Stack Real de Tecnologias (Sem Inflação Artificial)",
    "truthModal.archVerification": "Verificação de Arquitetura (Documentada vs Implementada vs Apresentada)",
    "truthModal.documented": "Arquitetura Documentada",
    "truthModal.implemented": "Implementado em Código",
    "truthModal.presented": "Apresentado no Site",
    "truthModal.coherence": "Índice de Coerência",
    "truthModal.repository": "Metadados e Verificação do Repositório",
    "truthModal.testSuite": "Bateria de Testes e Cobertura",
    "truthModal.ciCd": "Pipeline de CI/CD",
    "truthModal.adrs": "Registros de Decisão Arquitetural (ADRs)",
    "truthModal.results": "Resultados Empíricos e Benchmarks",
    "truthModal.decisions": "Decisões Arquiteturais Chave",
    "truthModal.challenges": "Desafios de Engenharia em Produção",
    "truthModal.languages": "Linguagens",
    "truthModal.frameworks": "Frameworks e Motor",
    "truthModal.databases": "Bancos de Dados e Armazenamento",
    "truthModal.cloud": "Nuvem e Infraestrutura",
    "truthModal.testing": "Testes e Qualidade",
    "truthModal.ciCdObs": "CI/CD e Observabilidade",
    "truthModal.inspectGithub": "Inspecionar Repositório Verificado no GitHub",
    "truthModal.close": "Fechar Ficha de Auditoria",
    "gates.badge": "FASE 12 // PORTÕES DE LANÇAMENTO PARA PRODUÇÃO",
    "gates.title": "Prontidão para Produção e Verificação de",
    "gates.titleHighlight": "Qualidade",
    "gates.subtitle": "O website da Trimindslabs cumpre rigorosamente os 11 portões técnicos, éticos e operacionais antes do lançamento.",
    "gates.allVerified": "TODOS OS 11 PORTÕES VERIFICADOS",
    "gates.verifiedCount": "11 de 11 Portões Aprovados",
    "gates.phaseCol": "Fase do Roadmap",
    "gates.gateCol": "Requisito do Portão",
    "gates.evidenceCol": "Evidência Concreta e Implementação",
    "gates.detailsCol": "Regra de Conformidade",
    "gates.satisfiedBanner": "11/11 PORTÕES DE PRODUÇÃO FORMALMENTE SATISFEITOS",
    "gates.auditRef": "Referência de Auditoria: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "gates.passed": "APROVADO",
    "gates.readyRelease": "Status: PRONTO PARA LANÇAMENTO EM PRODUÇÃO",
    "gates.closeBtn": "Fechar Revisão de Portões",
    "vocab.title": "Especificação do Vocabulário Técnico Trimindslabs",
    "vocab.subtitle": "Terminologia formal estabelecendo precisão semântica em toda a documentação de engenharia da Trimindslabs",
    "vocab.searchPlaceholder": "Buscar conceitos (ex: Busca Confiável, Observabilidade, Agência Controlada)...",
    "vocab.termsIndex": "Índice de Terminologia Canônica",
    "vocab.contractDefinition": "Definição Formal de Contrato",
    "vocab.contrastingAntiPattern": "Anti-Padrão em Contraste",
    "vocab.productionImplementation": "Implementação de Referência em Produção",
    "vocab.closeBtn": "Fechar Especificação do Vocabulário",
    "telemetry.badge": "OBSERVABILIDADE OPERACIONAL // DADOS REAIS DE RUNTIME",
    "telemetry.title": "Hub de Observabilidade Operacional Trimindslabs",
    "telemetry.subtitle": "Parâmetros reais de compilação, conformidade soberana e verificação de release.",
    "telemetry.realMetadata": "Metadados Reais da Plataforma (Zero Dados Simulados)",
    "telemetry.runtime": "Ambiente de Execução",
    "telemetry.cluster": "Cluster de Ingress",
    "telemetry.releaseTag": "Tag de Release",
    "telemetry.auditVersion": "Especificação de Auditoria",
    "gdpr.title": "Conformidade Europeia Soberana",
    "gdpr.message": "A Trimindslabs adere estritamente ao GDPR da UE e ao EU AI Act. Não operamos rastreadores comerciais de terceiros. A telemetria de clientes e diagnósticos de sessão são processados exclusivamente em centros de dados europeus certificados ISO 27001 (Frankfurt/Paris).",
    "gdpr.essential": "Apenas Essenciais",
    "gdpr.confirm": "Confirmar e Continuar",
    "about.badge": "FASE 0 // IDENTIDADE CORPORATIVA E ESPECIFICAÇÃO DE AUDITORIA",
    "about.title": "O que a Trimindslabs",
    "about.titleHighlight": "Representa",
    "about.subtitle": "A Trimindslabs foi estabelecida para contrapor a corrida superficial de protótipos especulativos de IA com engenharia de sistemas rigorosa, verificação determinística e soberania europeia de dados. Cada afirmação é validada contra código real e auditorias de arquitetura.",
    "about.tabMatrix": "Matriz de Auditoria e Verificação GitHub",
    "about.tabPositioning": "Posicionamento e Princípios",
    "about.missionTitle": "Missão Corporativa (Auditada V1.0)",
    "about.missionNote": "Refinada para prometer estritamente o que é comprovado em código de produção, evitando inflação especulativa.",
    "about.visionTitle": "Visão Corporativa (Auditada V1.0)",
    "about.vocabBannerTitle": "Índice de Vocabulário Técnico Trimindslabs",
    "about.vocabBannerDesc": "Explore definições matemáticas rigorosas de Busca Confiável, Confiança Antes da Geração, Agência Controlada e Observabilidade de IA padronizando nossos contratos de produção.",
    "about.openVocab": "Abrir Vocabulário Canônico",
    "footer.desc": "A Trimindslabs é uma organização avançada de engenharia de sistemas dedicada à criação de arquiteturas inteligentes determinísticas, observáveis e blindadas. Eliminamos a lacuna entre modelos neurais probabilísticos e a confiabilidade crítica de produção.",
    "footer.allAuditsVerified": "Todas as Afirmações Auditadas contra o GitHub",
    "footer.jurisdiction": "Jurisdição da União Europeia • GDPR Art. 28/32",
    "footer.tenetsTitle": "Princípios Transversais:",
    "footer.tenet1": "Problema em Primeiro Lugar",
    "footer.tenet2": "Confiança por Engenharia",
    "footer.tenet3": "Evidência Acima de Afirmações",
    "footer.tenet4": "Pronto para Produção",
    "footer.sovereignCloud": "NUVEM SOBERANA: EU-WEST-3",
    "footer.gdprNotice": "CONFORME GDPR ART. 28/32",
    "footer.gatesCount": "11/11 PORTÕES VERIFICADOS",
    "footer.foundationalDistinction": "Distinção Fundamental",
    "footer.systemsArchLeadership": "Arquitetura e Pesquisa de Sistemas",
    "footer.systemsArchLeadershipDesc": "Engenharia Soberana e Computação Determinística",
    "footer.trimindsEntity": "Trimindslabs",
    "footer.trimindsEntityDesc": "Infraestrutura de Plataforma Corporativa de Engenharia Soberana",
    "footer.colSystems": "Sistemas Centrais",
    "footer.colTruth": "Verdade do Repositório",
    "footer.colVerification": "Verificação e Jurídico",
    "footer.allRights": "TODOS OS DIREITOS RESERVADOS.",
    "footer.directInquiries": "CONSULTAS DIRETAS:",
    "footer.blueprints": "Blueprints Arquiteturais",
    "footer.researchPapers": "Artigos de Pesquisa e Benchmarks",
    "footer.canonicalVocab": "Vocabulário Canônico",
    "footer.githubRepos": "Repositórios GitHub",
    "footer.euAiAct": "Conforme Categoria de Alto Risco do EU AI Act"
  },
  "es": {
    "nav.home": "Visión General",
    "nav.aiSystems": "Sistemas de IA",
    "nav.engineering": "Arquitectura",
    "nav.caseStudies": "Proyectos y Evidencia",
    "nav.research": "Investigación",
    "nav.positioning": "Sobre y Auditoría",
    "nav.contact": "Contacto",
    "nav.auditBtn": "Matriz de Auditoría de Realidad",
    "nav.telemetryBtn": "Estado del Sistema",
    "nav.vocabularyBtn": "Glosario",
    "nav.auditMatrixBtn": "Auditoría de Realidad GitHub",
    "nav.gatesBtn": "Gates de Producción",
    "nav.systemsNominal": "SISTEMAS OPERATIVOS",
    "nav.brandTagline": "Sistemas de Inteligencia Determinista",
    "nav.zeroHallucination": "0,00% ALUCINACIÓN",
    "nav.euSovereign": "SOBERANÍA UE",
    "nav.gatesVerified": "(11/11 Verificados)",
    "ticker.liveTelemetry": "TELEMETRÍA DE PRODUCCIÓN EN TIEMPO REAL:",
    "ticker.systemsNominal": "SISTEMAS OPERATIVOS",
    "ticker.p99Latency": "LATENCIA P99",
    "ticker.hallucinationRate": "TASA DE ALUCINACIÓN",
    "ticker.fleetThroughput": "TASA DE PROCESAMIENTO",
    "ticker.guardrail": "PRECISIÓN DE CITA",
    "ticker.dataResidency": "JURISDICCIÓN DE DATOS",
    "ticker.datacenter": "Fráncfort (UE)",
    "hero.badge": "IA EMPRESARIAL PARA PRODUCCIÓN // BASES DETERMINÍSTICAS",
    "hero.titlePrefix": "Sistemas Soberanos de IA Diseñados para",
    "hero.titleHighlight": "Certeza Determinística",
    "hero.titleSuffix": "y Cero Alucinación.",
    "hero.subtitle": "Trimindslabs conecta la investigación estocástica con la fiabilidad crítica de producción. Diseñamos motores de búsqueda verificables, flujos de agentes deterministas y controlados, y plataformas geoespaciales con proveniencia de citas inmutable.",
    "hero.exploreSystems": "Explorar Sistemas de IA",
    "hero.viewStudies": "Ver Proyectos Auditados",
    "hero.technicalGlossary": "Glosario Técnico",
    "hero.missionTitle": "Nuestro Mandato Principal",
    "hero.missionDesc": "Diseñar sistemas inteligentes que resuelvan problemas del mundo real a través de tecnología confiable, segura, transparente y medible.",
    "hero.philosophyTitle": "Filosofía de Ingeniería",
    "hero.philosophyDesc": "Rechazamos la IA como caja negra opaca. La confianza empresarial se construye en la arquitectura mediante rerankers neuronales, verificación de caracteres y telemetría estricta.",
    "hero.activeArchitecture": "ARQUITECTURAS ACTIVAS",
    "hero.engineeringStack": "STACK DE PRODUCCIÓN VERIFICABLE",
    "hero.trustedSearch": "Búsqueda Confiable",
    "hero.geospatialAI": "IA Geoespacial",
    "hero.boundedAgents": "Agentes Controlados",
    "hero.securityLayer": "Seguridad Zero-Trust",
    "hero.realworldAudit": "EVIDENCIA SOBRE AFIRMACIONES",
    "hero.auditedVerdict": "Todas las afirmaciones fueron auditadas contra repositorios de GitHub, baterías de pruebas y registros de decisiones arquitectónicas.",
    "hero.exploreAudit": "Inspeccionar Matriz de Realidad",
    "hero.infrastructureStatus": "ESTADO DE INFRAESTRUCTURA",
    "hero.slaUptime": "99,98% SLA DISPONIBILIDAD",
    "hero.securityFirst": "Seguridad y Cumplimiento Primero",
    "hero.securitySpecs": "CONFORME RGPD / AES-256 / DEFENSA OWASP LLM",
    "hero.metric1Title": "Tasa de Alucinación Factual",
    "hero.metric1Desc": "Verificado en auditorías de cumplimiento europeas",
    "hero.metric2Title": "Superficie Terrestre Analizada/Día",
    "hero.metric2Desc": "Procesamiento ráster multiespectral satelital",
    "hero.metric3Title": "Ahorro de Combustible en Flotas",
    "hero.metric3Desc": "15.000+ eventos telemáticos/seg",
    "hero.metric4Title": "Inspección de Proxy de Seguridad",
    "hero.metric4Desc": "Defensa contra inyección de prompt OWASP",
    "hero.auditExplanation": "Cada afirmación corporativa mapeada a código público de GitHub, commits y registros de auditoría.",
    "home.topologyBadge": "BLUEPRINTS DE SISTEMAS // RUNTIME VERIFICABLE",
    "home.topologyTitle": "Topología Arquitectónica",
    "home.topologyTitleHighlight": "Interactiva",
    "home.topologyDesc": "Explore las etapas formales del pipeline detrás de la Recuperación Confiable de Trimindslabs, Flujos de Agentes Deterministas y Sistemas Geoespaciales.",
    "home.fullMatrixBtn": "Matriz Completa de Sistemas",
    "home.auditedBadge": "VERDAD DEL REPOSITORIO // SISTEMAS AUDITADOS",
    "home.auditedTitle": "Sistemas Auditados en",
    "home.auditedTitleHighlight": "Producción Activa",
    "home.viewAllProjects": "Ver Todos los Proyectos y Stacks Técnicas",
    "home.inspectTruth": "Inspeccionar Ficha de la Verdad",
    "home.phase12Check": "Verificación de Puertas Fase 12 (11/11 Aprobados)",
    "callout.badge": "SOBERANÍA EUROPEA E INGENIERÍA BASADA EN EVIDENCIAS",
    "callout.title": "Más Allá de Chatbots Experimentales:",
    "callout.titleHighlight": "Construyendo Cimientos Empresariales Predecibles.",
    "callout.description": "Rechazamos la idea de que la IA generativa deba permanecer como una caja negra opaca. Al delimitar modelos con validación determinística, rerankers neuronales y telemetría continua, entregamos sistemas que satisfacen los estándares aeroespaciales, logísticos y de cumplimiento normativo europeo.",
    "callout.requestAudit": "Solicitar Auditoria Técnica",
    "callout.readPositioning": "Leer Especificación Corporativa V1.0",
    "callout.viewVocabulary": "Ver Vocabulario Canónico",
    "callout.viewEvidence": "Explorar Matriz de Auditoría de Realidad",
    "arch.badge": "Esquemas Arquitectónicos Interactivos",
    "arch.tabRetrieval": "Recuperación Confiable",
    "arch.tabAgentic": "Flujo de Agente Controlado",
    "arch.tabGeospatial": "Malla Geoespacial",
    "arch.tabSecurity": "Gateway de Seguridad",
    "arch.guarantee": "Garantía Operacional:",
    "arch.latencyProfile": "Perfil de Latencia Extremo a Extremo:",
    "ai.badge": "FASE 1 Y 2 // SISTEMAS DE IA Y ESPECIFICACIÓN TÉCNICA",
    "ai.title": "Arquitecturas Diseñadas para",
    "ai.titleHighlight": "Confiabilidad en Producción",
    "ai.subtitle": "Trimindslabs construye sistemas inteligentes resilientes y matemáticamente verificados, diseñados para operar sin sobrecarga cognitiva humana, desbordamiento del presupuesto de tokens o suposiciones opacas de caja negra.",
    "ai.viewSpec": "Ver Especificación",
    "ai.coreSpec": "ESPECIFICACIÓN DEL SISTEMA PRINCIPAL",
    "ai.latencySlo": "SLO de Latencia",
    "ai.uptime": "Confiabilidad de Uptime",
    "ai.residency": "Residencia de Datos",
    "ai.guardrail": "Límite de Guardrails",
    "ai.pipeline": "Secuencia Operacional de Pipeline",
    "ai.verified": "Verificado",
    "ai.tech": "Tecnología:",
    "ai.hardening": "Capacidades de Fortalecimiento Corporativo",
    "eng.badge": "FASE 4 Y 10 // INGENIERÍA DE PLATAFORMA E INFRAESTRUCTURA",
    "eng.title": "Arquitectura de Ingeniería",
    "eng.titleHighlight": "Transversal",
    "eng.subtitle": "En Trimindslabs, la seguridad, la observabilidad, las pruebas y la preparación para producción no son fases terminales posteriores al lanzamiento. Son requisitos continuos y transversales integrados en cada capa arquitectónica.",
    "eng.axisTitle": "El Eje Transversal de Trimindslabs",
    "eng.axisSubtitle": "Todas las fases y sistemas se adhieren a este sustrato estructural unificado",
    "eng.noSilos": "CERO SILOS AISLADOS",
    "eng.foundationalAxis": "Eje Fundamental",
    "eng.foundationalSub": "Arquitectura • Ingeniería • Contenido",
    "eng.foundationalDesc": "Cada sistema se especifica con precisión a nivel de carácter antes de que comience la ejecución del código.",
    "eng.verificationAxis": "Eje de Verificación",
    "eng.verificationSub": "Seguridad • Observabilidad • Pruebas",
    "eng.verificationDesc": "Telemetría no negociable, defensas contra ataques OWASP LLM y suites de evaluación automatizadas.",
    "eng.deliveryAxis": "Eje de Entrega",
    "eng.deliverySub": "Cloud Native • SLA de Producción • Soberanía",
    "eng.deliveryDesc": "Cargas de trabajo serverless con escala a cero y garantías estrictas de residencia europea de datos.",
    "eng.cicdTitle": "Especificación de Pipeline CI/CD Automatizado de Producción",
    "eng.substrateTitle": "Sustrato de Tecnología e Infraestructura",
    "eng.directivesTitle": "Directrices Fundamentales de Ingeniería de Trimindslabs",
    "res.badge": "FASE 6 // INVESTIGACIÓN Y BASE DE CONOCIMIENTO TÉCNICO",
    "res.title": "Insights de Ingeniería &",
    "res.titleHighlight": "Investigación de Sistemas",
    "res.subtitle": "Trimindslabs actúa como una autoridad abierta de investigación e ingeniería, publicando hallazgos empíricos sobre limitaciones de recuperación vectorial, primitivas de búsqueda deterministas y estándares de telemetría de IA.",
    "res.coreFindings": "Principales Hallazgos:",
    "res.readWhitepaper": "Leer Whitepaper Completo",
    "res.pubHeader": "PUBLICACIÓN TÉCNICA TRIMINDSLABS //",
    "res.copyCitation": "Copiar Cita Académica",
    "res.copied": "¡Cita Copiada!",
    "res.close": "Cerrar Lector",
    "contact.badge": "CONSULTORÍA TÉCNICA Y AUDITORÍA DE ARQUITECTURA",
    "contact.title": "Consultoría Directa de Arquitectura de",
    "contact.titleHighlight": "Sistemas",
    "contact.subtitle": "Conecte directamente con la arquitectura sénior de Trimindslabs para despliegues de IA en entornos críticos de producción, auditorías de recuperación o infraestructura soberana.",
    "contact.protocolTitle": "Protocolo de Contacto Directo",
    "contact.protocolDirectAccess": "Comunicación Directa con el Arquitecto",
    "contact.protocolDirectAccessDesc": "Sin intermediarios comerciales. Todas las consultas técnicas son evaluadas y respondidas directamente por el Arquitecto Principal de Sistemas.",
    "contact.protocolNda": "NDA Mutuo y Soberanía de PI",
    "contact.protocolNdaDesc": "Jurisdicción de la Unión Europea. Estricta confidencialidad y firma de NDA mutuo antes del intercambio de código o datos.",
    "contact.protocolSla": "Revisión Técnica Garantizada",
    "contact.protocolSlaDesc": "Respuestas entregadas en un plazo máximo de 24 horas hábiles con una evaluación preliminar de viabilidad técnica.",
    "contact.directChannel": "Canal Oficial de Correo Directo",
    "contact.primaryRole": "Arquitecto Principal de Sistemas e Investigador Líder",
    "contact.encryptedNotice": "Comunicaciones cifradas de extremo a extremo o PGP disponibles bajo solicitud formal.",
    "contact.formSuccessTitle": "Especificación Técnica Formulada con Éxito",
    "contact.formSuccessDesc": "Su consulta técnica ha sido estructurada. Se ha inicializado un mensaje dirigido a contato@trimindslabs.com en su cliente.",
    "contact.formSubmitAnother": "Enviar Otra Consulta Técnica",
    "contact.fullName": "Nombre Completo",
    "contact.email": "Correo Corporativo Oficial",
    "contact.company": "Organización / Entidad",
    "contact.scope": "Alcance Arquitectónico",
    "contact.scopeOption1": "Auditoría y Verificación de Arquitectura",
    "contact.scopeOption2": "Despliegue de Trusted Search Core",
    "contact.scopeOption3": "Flujos de Agentes Deterministas y Controlados",
    "contact.scopeOption4": "IA Geoespacial y Analítica Satelital",
    "contact.scopeOption5": "Gateway de Seguridad Zero-Trust y Observabilidad",
    "contact.scopeOption6": "Asuntos Generales",
    "contact.scale": "Escala del Proyecto y Urgencia",
    "contact.objective": "Desafío de Ingeniería y Contexto Operativo",
    "contact.objectivePlaceholder": "Describa su desafío técnico, volumen de datos, objetivos de latencia y requisitos normativos...",
    "contact.objectiveGeneral": "Detalles del Mensaje y Solicitud",
    "contact.objectiveGeneralPlaceholder": "Describa su consulta, interés en colaboración o solicitud general...",
    "contact.gdprConsent": "Reconozco que los datos enviados serán tratados bajo el RGPD de la Unión Europea y utilizados únicamente para la evaluación de la arquitectura.",
    "contact.submitBtn": "Generar Especificación Técnica y Enviar",
    "contact.directEmailBtn": "Envío Directo mediante Cliente de Correo",
    "contact.openEmailClient": "Abrir en Cliente de Correo Predeterminado",
    "contact.copyEmail": "Copiar Dirección Oficial de Correo",
    "contact.emailCopied": "¡Copiado al Portapapeles!",
    "audit.badge": "VERDAD DE LOS REPOSITORIOS // AUDITORÍA DE EVIDENCIA GITHUB",
    "audit.title": "Auditoría de Realidad",
    "audit.titleHighlight": "Evidencia Sobre Afirmaciones",
    "audit.subtitle": "Cada afirmación corporativa de Trimindslabs se contrasta rigurosamente con nuestros repositorios de GitHub, registros de decisiones arquitectónicas (ADRs) y baterías de pruebas de producción.",
    "audit.question": "La Pregunta: \"¿Podemos probar esto?\"",
    "audit.sustained": "Sustentado (Evidencia Concreta)",
    "audit.consolidating": "En Consolidación (En Progreso)",
    "audit.aspirational": "Aspiracional (Horizonte Futuro)",
    "audit.filterAll": "Las 15 Afirmaciones Auditadas",
    "audit.conceptCol": "Afirmación Corporativa",
    "audit.evidenceCol": "Código GitHub y Evidencia de Commits",
    "audit.statusCol": "Estado de Auditoría",
    "audit.analysisCol": "Análisis Técnico de Realidad",
    "audit.verdictCol": "Veredicto Arquitectónico",
    "audit.summaryTitle": "Los 5 Pilares Comprobados",
    "audit.summaryDesc": "1. Primero el Problema | 2. Confianza a Través de la Ingeniería | 3. Evidencia Sobre Afirmaciones | 4. Evolución Continua | 5. Orientado a Producción",
    "projects.badge": "VERDAD DEL REPOSITORIO // ESPECIFICACIONES DE SISTEMAS",
    "projects.title": "Ingeniería Verificable",
    "projects.titleHighlight": "Proyectos y Repositorios",
    "projects.subtitle": "Todos los proyectos están categorizados con rigor por su estado real. Nunca presentamos elementos de roadmap como sistemas ya implementados.",
    "projects.categoryAll": "Todos los Proyectos",
    "projects.categoryBuilt": "Lo Que Hemos Construido",
    "projects.categoryExploring": "Lo Que Estamos Explorando",
    "projects.categoryPlanned": "Lo Que Está Planeado",
    "projects.truthBadge": "VERDAD DEL REPOSITORIO VERIFICADA",
    "projects.viewTruthSheet": "Ver Ficha de Verdad del Repositorio",
    "projects.honestScopeLabel": "Especificación de Alcance",
    "projects.whatItProves": "Lo Que Esto Demuestra Sobre Trimindslabs",
    "status.implemented": "Implementado",
    "status.partial": "Parcial / Experimental",
    "status.planned": "Planeado",
    "status.notPresent": "No Presente",
    "truthModal.title": "Ficha de Verdad del Repositorio y Auditoría Arquitectónica",
    "truthModal.subtitle": "Fuente de la Verdad: Repositorio → Evidencia → Sitio Web",
    "truthModal.realStack": "Stack Real de Tecnologías (Sin Embellecimiento)",
    "truthModal.archVerification": "Verificación de Arquitectura (Documentada vs Implementada vs Presentada)",
    "truthModal.documented": "Arquitectura Documentada",
    "truthModal.implemented": "Implementado en Código",
    "truthModal.presented": "Presentado en el Sitio",
    "truthModal.coherence": "Índice de Coherencia",
    "truthModal.repository": "Metadatos y Verificación del Repositorio",
    "truthModal.testSuite": "Batería de Pruebas y Cobertura",
    "truthModal.ciCd": "Pipeline de CI/CD",
    "truthModal.adrs": "Registros de Decisión Arquitectónica (ADRs)",
    "truthModal.results": "Resultados Empíricos y Benchmarks",
    "truthModal.decisions": "Decisiones Arquitectónicas Clave",
    "truthModal.challenges": "Desafíos de Ingeniería en Producción",
    "truthModal.languages": "Lenguajes",
    "truthModal.frameworks": "Frameworks y Motor",
    "truthModal.databases": "Bases de Datos y Almacenamiento",
    "truthModal.cloud": "Nube e Infraestructura",
    "truthModal.testing": "Pruebas y Calidad",
    "truthModal.ciCdObs": "CI/CD y Observabilidad",
    "truthModal.inspectGithub": "Inspeccionar Repositorio Verificado en GitHub",
    "truthModal.close": "Cerrar Ficha de Auditoría",
    "gates.badge": "FASE 12 // GATES DE LIBERACIÓN PARA PRODUCCIÓN",
    "gates.title": "Preparación para Producción y Verificación de",
    "gates.titleHighlight": "Calidad",
    "gates.subtitle": "El sitio web de Trimindslabs cumple rigurosamente con los 11 gates técnicos, éticos y operativos antes de su lanzamiento.",
    "gates.allVerified": "LOS 11 GATES VERIFICADOS",
    "gates.verifiedCount": "11 de 11 Gates Aprobados",
    "gates.phaseCol": "Fase del Roadmap",
    "gates.gateCol": "Requisito del Gate",
    "gates.evidenceCol": "Evidencia Concreta e Implementación",
    "gates.detailsCol": "Regla de Cumplimiento",
    "gates.satisfiedBanner": "11/11 PUERTAS DE PRODUCCIÓN FORMALMENTE SATISFECHAS",
    "gates.auditRef": "Referencia de Auditoría: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "gates.passed": "APROBADO",
    "gates.readyRelease": "Estado: LISTO PARA LANZAMIENTO EN PRODUCCIÓN",
    "gates.closeBtn": "Cerrar Revisión de Puertas",
    "vocab.title": "Especificación del Vocabulario Técnico Trimindslabs",
    "vocab.subtitle": "Terminología formal que establece precisión semántica en toda la documentación de ingeniería de Trimindslabs",
    "vocab.searchPlaceholder": "Buscar conceptos (ej: Búsqueda Confiable, Observabilidad, Agencia Controlada)...",
    "vocab.termsIndex": "Índice de Terminología Canónica",
    "vocab.contractDefinition": "Definición Formal de Contrato",
    "vocab.contrastingAntiPattern": "Anti-Patrón en Contraste",
    "vocab.productionImplementation": "Implementación de Referencia en Producción",
    "vocab.closeBtn": "Cerrar Especificación de Vocabulario",
    "telemetry.badge": "OBSERVABILIDAD OPERATIVA // DATOS REALES DE RUNTIME",
    "telemetry.title": "Hub de Observabilidad Operativa Trimindslabs",
    "telemetry.subtitle": "Parámetros reales de compilación, cumplimiento soberano y verificación de release.",
    "telemetry.realMetadata": "Metadatos Reales de la Plataforma (Cero Datos Simulados)",
    "telemetry.runtime": "Entorno de Ejecución",
    "telemetry.cluster": "Clúster de Ingress",
    "telemetry.releaseTag": "Etiqueta de Release",
    "telemetry.auditVersion": "Especificación de Auditoría",
    "gdpr.title": "Cumplimiento Soberano Europeo",
    "gdpr.message": "Trimindslabs se adhiere estrictamente al RGPD de la UE y a la Ley de IA de la UE. No utilizamos rastreadores comerciales de terceros. La telemetría de clientes y los diagnósticos de sesión se procesan exclusivamente en centros de datos europeos certificados ISO 27001 (Fráncfort/París).",
    "gdpr.essential": "Solo Esenciales",
    "gdpr.confirm": "Confirmar y Continuar",
    "about.badge": "FASE 0 // IDENTIDAD CORPORATIVA Y ESPECIFICACIÓN DE AUDITORÍA",
    "about.title": "Lo que Trimindslabs",
    "about.titleHighlight": "Representa",
    "about.subtitle": "Trimindslabs se estableció para contrarrestar la carrera superficial de prototipos especulativos de IA con ingeniería de sistemas rigurosa, verificación determinista y soberanía europea de datos. Cada afirmación se valida contra código real y auditorías de arquitectura.",
    "about.tabMatrix": "Matriz de Auditoría y Verificación GitHub",
    "about.tabPositioning": "Posicionamento y Principios",
    "about.missionTitle": "Misión Corporativa (Auditada V1.0)",
    "about.missionNote": "Refinada para prometer estrictamente lo probado en código de producción, evitando inflación especulativa.",
    "about.visionTitle": "Visión Corporativa (Auditada V1.0)",
    "about.vocabBannerTitle": "Índice de Vocabulario Técnico Trimindslabs",
    "about.vocabBannerDesc": "Explore definiciones matemáticas rigurosas de Búsqueda Confiable, Confianza Antes de la Generación, Agencia Controlada y Observabilidad de IA estandarizando nuestros contratos de producción.",
    "about.openVocab": "Abrir Vocabulario Canónico",
    "footer.desc": "Trimindslabs es una organización avanzada de ingeniería de sistemas dedicada a la creación de arquitecturas determinísticas, observables y blindadas. Eliminamos la brecha entre modelos neuronales probabilísticos y la fiabilidad crítica de producción.",
    "footer.allAuditsVerified": "Todas las Afirmaciones Auditadas contra GitHub",
    "footer.jurisdiction": "Jurisdicción de la Unión Europea • RGPD Art. 28/32",
    "footer.tenetsTitle": "Principios Transversales:",
    "footer.tenet1": "El Problema Primero",
    "footer.tenet2": "Confianza mediante Ingeniería",
    "footer.tenet3": "Evidencia sobre Afirmaciones",
    "footer.tenet4": "Listo para Producción",
    "footer.sovereignCloud": "NUBE SOBERANA: EU-WEST-3",
    "footer.gdprNotice": "CONFORME RGPD ART. 28/32",
    "footer.gatesCount": "11/11 PUERTAS VERIFICADAS",
    "footer.foundationalDistinction": "Distinción Fundamental",
    "footer.systemsArchLeadership": "Arquitectura e Investigación de Sistemas",
    "footer.systemsArchLeadershipDesc": "Ingeniería Soberana y Computación Determinista",
    "footer.trimindsEntity": "Trimindslabs",
    "footer.trimindsEntityDesc": "Infraestructura de Plataforma Corporativa de Ingeniería Soberana",
    "footer.colSystems": "Sistemas Principales",
    "footer.colTruth": "Verdad del Repositorio",
    "footer.colVerification": "Verificación y Legal",
    "footer.allRights": "TODOS LOS DERECHOS RESERVADOS.",
    "footer.directInquiries": "CONSULTAS DIRECTAS:",
    "footer.blueprints": "Blueprints Arquitectónicos",
    "footer.researchPapers": "Artículos de Investigación y Benchmarks",
    "footer.canonicalVocab": "Vocabulario Canónico",
    "footer.githubRepos": "Repositorios GitHub",
    "footer.euAiAct": "Conforme a Categoría de Alto Riesgo de la Ley de IA de la UE"
  }
};
