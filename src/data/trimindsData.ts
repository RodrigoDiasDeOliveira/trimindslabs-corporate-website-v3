export type Language = 'pt' | 'en' | 'es';

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
  url?: string;
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
  domain: 'compliance' | 'geospatial' | 'logistics' | 'platform';
  category: 'what-we-built' | 'what-is-planned';
  truthStatus: 'implemented' | 'partial' | 'planned';
  operationalStage: 'deployed' | 'validation' | 'specification';
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
  category?: 'whitepaper' | 'lab';
  keyTakeaways?: string[];
  bodySections?: { heading: string; content: string; codeSnippet?: string }[];
  conclusions?: string;
  doiOrReference?: string;
  repositoryUrl?: string;
  portfolioLabel?: string;
  operationalMonitoring?: string;
  link?: string;
}

export interface OperationalSystem {
  name: string;
  runtime: string;
  stage: string;
  version: string;
  stack: string;
  evidenceSource: string;
}

export interface ArchitecturePillar {
  num: string;
  title: string;
  summary: string;
  details: string[];
}

/* =========================================================================
   PROJECTS BY LANGUAGE
   ========================================================================= */

const PROJECTS_PT: Project[] = [
  {
      id: "trusted-compliance-agent",
      title: "Compliance Evidence Engine",
      subtitle: "Evidência Documental, Reranking e Decisão Tri-State Auditável",
      tag: "Compliance AI / Evidence Retrieval",
      sector: "Conformidade Regulatória e Evidência Documental",
      domain: "compliance",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Sistema orientado a evidências que ingere documentos, preserva proveniência SHA-256, recupera cláusulas, faz reranking e decide explicitamente entre TRUSTED, GENERATED e ABSTAIN.",
      whatItProves: "Demonstra engenharia de pipelines de compliance baseados em evidência, com recuperação auditável e recusa explícita quando a evidência é insuficiente.",
      problem: "Sistemas de compliance precisam distinguir evidência documental suficiente de respostas apenas plausíveis.",
      context: "A implementação atual é centrada em documentos e evidências, separada da geração livre e com estados de decisão configuráveis.",
      architecture: {
        overview: "Documento → Parser/Clause Chunker → Proveniência SHA-256 → Embeddings 384d → PostgreSQL/pgvector HNSW → Retrieval → CrossEncoder → Threshold Gate → TRUSTED / GENERATED / ABSTAIN.",
        components: [
          "Ingestão de PDF, DOCX e TXT",
          "Fingerprint determinístico SHA-256 por evidência",
          "PostgreSQL 16 + pgvector HNSW",
          "CrossEncoder ms-marco-MiniLM-L-6-v2",
          "Gate de confiança com três estados"
        ],
        diagramText: "Documento ➔ Chunking ➔ SHA-256 ➔ Embedding ➔ pgvector HNSW ➔ Reranking ➔ Threshold Gate ➔ TRUSTED / GENERATED / ABSTAIN"
      },
      realArchitectureVerification: {
        documented: "Pipeline document-grounded com recuperação em duas etapas, reranking e decisão tri-state.",
        implemented: "FastAPI + PostgreSQL/pgvector HNSW + embeddings 384d + CrossEncoder ms-marco-MiniLM-L-6-v2 + estados TRUSTED/GENERATED/ABSTAIN.",
        presentedOnSite: "Arquitetura alinhada ao repositório atual; sem afirmar produção plena ou tecnologias da geração anterior.",
        coherenceScore: "Alinhado ao repositório atual"
      },
      realTechnologies: {
        languages: ["Python", "TypeScript"],
        frameworks: ["FastAPI", "React 19", "Vite", "Tailwind CSS v4"],
        libraries: ["pgvector", "CrossEncoder", "Lucide"],
        databases: ["PostgreSQL 16 + pgvector"],
        cloud: ["Google Cloud Run", "Cloud SQL PostgreSQL/pgvector"],
        apis: ["REST API", "/v1/compliance/evaluate", "/v1/documents/upload", "/v1/compliance/feedback"],
        testing: ["Pytest", "TypeScript build"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/New-Trusted-Compliance",
        isPrivate: false,
        visibilityBadge: "Repositório",
        testSuiteStatus: "Frontend build + testes backend",
        ciCdPipeline: "GitHub Actions"
      },
      engineering: [
        "Decisão tri-state explícita com limiares configuráveis.",
        "ABSTAIN para evidência insuficiente ou consulta não suportada.",
        "Proveniência determinística por fingerprints SHA-256."
      ],
      technology: [
        "Python / FastAPI",
        "React 19 / TypeScript",
        "PostgreSQL + pgvector HNSW",
        "CrossEncoder ms-marco-MiniLM-L-6-v2",
        "Cloud Run + Cloud SQL"
      ],
      evolution: "Evoluiu para um Evidence Engine centrado em proveniência, inspeção de evidência e decisão auditável.",
      results: [
        {
          metric: "Decisão",
          value: "TRUSTED / GENERATED / ABSTAIN",
          description: "Estados explícitos conforme a confiança e a evidência disponível"
        },
        {
          metric: "Proveniência",
          value: "SHA-256",
          description: "Fingerprint determinístico associado ao conteúdo ingerido"
        }
      ],
      evidence: "Repositório atual, pipeline de testes e deployment Cloud Run/Cloud SQL usados para validação do ambiente real.",
      evidenceSource: "New-Trusted-Compliance / README e runtime implantado",
      lastVerified: "2026-10-08",
      deploymentStatus: "Implantado para validação em ambiente real; não apresentado como produção plenamente madura.",
      deployment: {
        target: "Google Cloud Run + Cloud SQL PostgreSQL/pgvector",
        url: "https://compliance-evidence-engine-api-72mbkllrqa-ew.a.run.app",
        status: "Deployed / validation"
      }
    },
  {
      id: "triminds-geo-ai",
      title: "Trimindslabs Geo-AI (V4)",
      subtitle: "Plataforma Geoespacial de IA para Earth Observation",
      tag: "Geospatial AI / Remote Sensing",
      sector: "Observação da Terra & Dados Geoespaciais",
      domain: "geospatial",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Plataforma modular para workflows de Earth Observation, ML geoespacial, FastAPI e deployment Cloud Run.",
      whatItProves: "Demonstra deployment operacional de uma plataforma Geo-AI e separação entre demonstração local e serviço cloud.",
      problem: "Workflows de observação da Terra exigem integração entre fontes geoespaciais, representação, ML e serving.",
      context: "A versão V4 está online em Google Cloud Run europe-west1; o repositório mantém também uma demo local determinística com dados RGB sintéticos.",
      architecture: {
        overview: "Earth Observation Sources → Provider Layer → Ingestion/Validation → Representation → Deep Learning / Vector Search → FastAPI → Cloud Run.",
        components: ["Provider layer", "Ingestion/validation", "Representation", "Deep Learning", "FastAPI", "Cloud Run"],
        diagramText: "EO Sources ➔ Provider Layer ➔ Ingestion ➔ Representation ➔ ML/Search ➔ FastAPI ➔ Cloud Run"
      },
      realArchitectureVerification: {
        documented: "Provider-oriented geospatial AI architecture with operational Cloud Run v4.",
        implemented: "FastAPI service with configurable model layer and Cloud Run v4 deployment; local deterministic demo path.",
        presentedOnSite: "Alinhado ao README atual, sem transformar a demo sintética em benchmark de satélite real.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Python"],
        frameworks: ["FastAPI", "PyTorch"],
        libraries: ["ResNet", "EfficientNet", "Vision Transformers", "MLflow"],
        cloud: ["Google Cloud Run", "Google Cloud"],
        apis: ["FastAPI"],
        testing: ["Pytest", "ruff", "pre-commit"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
        isPrivate: false,
        visibilityBadge: "Repositório",
        testSuiteStatus: "Quality checks and pytest"
      },
      engineering: [
        "Separação entre deployment operacional e demo local.",
        "Model factory configurável para múltiplas arquiteturas.",
        "Maturidade operacional explicitamente separada de implementação."
      ],
      technology: ["Python", "FastAPI", "PyTorch", "Google Cloud Run", "MLflow"],
      evolution: "Expansão contínua de providers, representações e workloads geoespaciais avançados.",
      evidence: "Cloud Run v4 online e README atual com modelo de maturidade operacional.",
      evidenceSource: "Trimindslabs-Geo-AI / README e deployment Cloud Run v4",
      lastVerified: "2026-10-08",
      deploymentStatus: "Operational — Cloud Run v4.",
      deployment: {
        target: "Google Cloud Run / europe-west1",
        url: "https://triminds-geo-ai-v4-1091629879450.europe-west1.run.app/",
        status: "Operational"
      }
    },
  {
      id: "triminds-logistics-platform",
      title: "TLP Next-Gen",
      subtitle: "Plataforma Logística Cloud-Native para Operações, ePOD e Telemetria",
      tag: "Logistics / Cloud Native",
      sector: "Logística & Transporte",
      domain: "logistics",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Aplicação Java/Spring Boot + React/Vite implantada em Cloud Run, com PostgreSQL Cloud SQL, autenticação/RBAC, operações logísticas, ePOD e telemetria de frota.",
      whatItProves: "Demonstra engenharia full-stack cloud-native aplicada a operações logísticas, persistência relacional, controle de acesso e integração de mapas.",
      problem: "Operações de transporte precisam unificar CRM, cross-docking, entregas, frota e evidências de entrega.",
      context: "A versão atual está implantada no projeto GCP sturdy-dogfish-460621-q7, com Cloud SQL PostgreSQL 16 e Google Maps com fallback OSM.",
      architecture: {
        overview: "React/Vite → Spring Boot → PostgreSQL/Cloud SQL, com autenticação, CRM, cross-docking, ePOD e telemetria.",
        components: ["Spring Boot", "React/Vite", "Cloud SQL PostgreSQL 16", "Flyway", "Google Maps + OSM fallback", "RBAC/ePOD"],
        diagramText: "React ➔ Spring Boot ➔ Cloud SQL PostgreSQL 16\n             ↘ Maps / OSM fallback\n             ↘ Auth / CRM / Cross-Docking / ePOD / Fleet"
      },
      realArchitectureVerification: {
        documented: "Aplicação logística full-stack com deployment Cloud Run.",
        implemented: "Java/Spring Boot + React/Vite + Cloud SQL PostgreSQL 16 + Flyway + RBAC e funcionalidades logísticas atuais.",
        presentedOnSite: "Atualizado para a stack e deployment atuais, removendo tecnologias legadas não verificadas.",
        coherenceScore: "Alinhado ao deployment atual"
      },
      realTechnologies: {
        languages: ["Java", "TypeScript"],
        frameworks: ["Spring Boot", "React", "Vite"],
        libraries: ["@vis.gl/react-google-maps"],
        databases: ["PostgreSQL 16 / Cloud SQL"],
        cloud: ["Google Cloud Run", "Google Cloud SQL"],
        apis: ["REST"],
        testing: ["Validação da aplicação"],
        ciCd: ["GitHub"]
      },
      repository: { name: "RodrigoDiasDeOliveira/Trimindlabs-Logistic-plataform-next-gen", isPrivate: true, visibilityBadge: "Repositório Privado" },
      engineering: ["RBAC com papéis ADMIN, OPERATOR, OPERATIONS e DRIVER.","ePOD com evidência e hashing SHA-256.","Flyway para evolução controlada do schema."],
      technology: ["Java / Spring Boot", "React / Vite", "PostgreSQL 16", "Cloud Run", "Google Maps"],
      evolution: "Evolução contínua dos módulos logísticos, telemetria e integrações regulatórias.",
      evidence: "Deployment Cloud Run, Cloud SQL e runtime funcional da versão atual.",
      evidenceSource: "TLP Next-Gen / deployment GCP",
      lastVerified: "2026-10-08",
      deploymentStatus: "Deployed e funcional em Cloud Run.",
      deployment: { target: "Google Cloud Run / europe-west1", url: "https://tlp-nextgen-72mbkllrqa-ew.a.run.app", status: "Operational" }
    },
  {
      id: "triminds-security-layer",
      title: "Triminds Security Layer",
      subtitle: "Camada de Segurança Empresarial com Políticas e Arquitetura Modular",
      tag: "Enterprise Security",
      sector: "Segurança de Aplicações & Governança",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Modular monolith Java 21/Spring Boot 3.4 com arquitetura hexagonal/clean, autenticação, autorização, políticas, risco e auditoria.",
      whatItProves: "Demonstra fundação de segurança corporativa modular e orientada a políticas.",
      problem: "Aplicações empresariais precisam centralizar identidade, autorização, políticas e auditoria sem acoplar essas capacidades ao domínio de cada aplicação.",
      context: "O repositório declara arquitetura modular e core concluído, enquanto testes de integração, Docker Compose e Kubernetes ainda estão em andamento.",
      architecture: {
        overview: "Security Gateway → Identity/Auth/Access Control → Policy Engine (OPA) → Risk → Audit/Intelligence.",
        components: ["Security Identity", "Authentication/JWT", "Access Control", "OPA Policy Engine", "Risk Engine", "Audit"],
        diagramText: "Client ➔ Security Gateway ➔ Identity/Auth/Access ➔ OPA Policy ➔ Risk ➔ Audit/Intelligence"
      },
      realArchitectureVerification: {
        documented: "Modular Monolith com Ports & Adapters, Clean Architecture, DDD e PBAC.",
        implemented: "Java 21 + Spring Boot 3.4 com módulos de identidade, auth, access control, policy, risk, gateway, intelligence e audit.",
        presentedOnSite: "Arquitetura alinhada; maturidade operacional limitada ao que o README comprova.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Java 21"],
        frameworks: ["Spring Boot 3.4", "Spring Security", "Spring Data JPA"],
        libraries: ["OPA", "JWT/OAuth2 Resource Server"],
        databases: ["PostgreSQL", "Redis"],
        cloud: ["Cloud-native ready"],
        apis: ["Security Gateway"],
        testing: ["CI build and verification; integration tests in progress"],
        ciCd: ["CI build and verification"],
        observability: ["Micrometer", "Prometheus", "OpenTelemetry"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer-v1",
        isPrivate: true,
        visibilityBadge: "Repositório Privado",
        testSuiteStatus: "Core verification complete; integration tests in progress",
        ciCdPipeline: "CI build and verification"
      },
      engineering: [
        "Separação modular entre identidade, autenticação, autorização, políticas, risco e auditoria.",
        "OPA como motor de avaliação de políticas.",
        "Arquitetura orientada a Zero Trust e PBAC."
      ],
      technology: ["Java 21", "Spring Boot 3.4", "Spring Security", "OPA", "PostgreSQL", "Redis"],
      evolution: "Próximas etapas: testes de integração, ambiente Docker Compose, CD e deployment Kubernetes.",
      evidence: "README atual e estrutura modular do repositório.",
      evidenceSource: "Trimindslabs-Security-Layer-v1 / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Arquitetura/core concluídos; integração e deployment ainda em evolução."
    },
  {
      id: "triminds-ai-cloud-administrator",
      title: "Trimindslabs AI Cloud Administrator",
      subtitle: "Administração Multi-Cloud Assistida por IA com Execução Controlada",
      tag: "Cloud Platform / AI Operations",
      sector: "Cloud Administration & Governance",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "MVP React/TypeScript + Express com capacidades reais explicitamente separadas de adapters ainda não configurados.",
      whatItProves: "Demonstra governança operacional, dry-run, auditoria encadeada e integração real com AWS quando as credenciais estão configuradas.",
      problem: "Operações cloud precisam distinguir planejamento, análise de IA e execução real.",
      context: "A versão atual usa Node/Express como runtime principal e mantém estado operacional em memória.",
      architecture: {
        overview: "React/TypeScript/Vite → Express API + AI orchestration + policy engine → adapters de provedores.",
        components: ["AWS SDKs reais", "Policy engine interno", "Dry-run explícito", "Auditoria SHA-256", "Telemetria interna"],
        diagramText: "React ➔ Express ➔ Policy/AI ➔ AWS (real quando configurado) / Azure-GCP-OCI (NOT_CONFIGURED)"
      },
      realArchitectureVerification: {
        documented: "MVP multi-cloud com separação entre planejamento e execução.",
        implemented: "Node/Express com AWS STS/EC2 real, policy engine, dry-run e audit chain SHA-256.",
        presentedOnSite: "Sem afirmar adapters Azure/GCP/OCI ou FastMCP operacional.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["TypeScript"],
        frameworks: ["React 19", "Vite", "Express"],
        libraries: ["AWS SDKs", "Gemini API"],
        databases: ["In-memory runtime state"],
        cloud: ["AWS adapter real quando configurado", "Azure/GCP/OCI NOT_CONFIGURED"],
        apis: ["HTTP API"],
        testing: ["npm test", "npm run lint", "npm run build"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/trimindslabs-ai-cloud-administrator",
        isPrivate: false,
        visibilityBadge: "Repositório",
        testSuiteStatus: "Testes, lint e build",
        ciCdPipeline: "GitHub Actions"
      },
      engineering: [
        "Dry-run não produz efeitos colaterais.",
        "Execução real depende de adapter e credenciais configurados.",
        "Provider sem adapter retorna NOT_CONFIGURED em vez de sucesso fictício."
      ],
      technology: ["React 19 / TypeScript", "Express", "AWS SDKs", "Gemini opcional", "SHA-256 audit chain"],
      evolution: "Evolução planejada para adapters multi-cloud reais, persistência externa e maior maturidade operacional.",
      evidence: "README atual e implementação principal Node/Express.",
      evidenceSource: "Trimindslabs AI Cloud Administrator / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "MVP operacional / Work in Progress; preparado para validação de deploy."
    },
  {
      id: "triminds-integration-platform",
      title: "Triminds Integration Platform (TIP)",
      subtitle: "Plataforma de Integração Corporativa com Conectores e Resiliência",
      tag: "Integration Platform",
      sector: "Integração de Sistemas & APIs",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Monólito TypeScript/Node/Express com console React, pipelines, transformação, validação e dispatch HTTP real para REST/Webhook.",
      whatItProves: "Demonstra arquitetura modular, abstração de conectores e mecanismos de resiliência sem apresentar infraestrutura futura como entregue.",
      problem: "Integrações heterogêneas precisam de uma camada consistente para modelagem, execução, retry e validação.",
      context: "O runtime atual mantém estado em memória e foi estruturado para evolução futura sem acoplamento a um provedor específico.",
      architecture: {
        overview: "React Console → Express API → Integration Engine → Connectors → HTTP/Webhook.",
        components: ["Pipeline Designer", "Transformation/Validation", "Retry/Timeout", "Idempotency", "Circuit Breaker"],
        diagramText: "React ➔ Express ➔ Integration Engine ➔ REST/Webhook / Gemini opcional"
      },
      realArchitectureVerification: {
        documented: "Clean/Hexagonal-inspired modular monolith.",
        implemented: "TypeScript 5.8 + React 19 + Express 4; dispatch real REST/Webhook; demais conectores NOT_CONFIGURED.",
        presentedOnSite: "Sem afirmar Redis/Kafka/Spring/FastAPI ou observabilidade distribuída como infraestrutura atual.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["TypeScript 5.8"],
        frameworks: ["React 19", "Express 4", "Vite"],
        databases: ["In-memory runtime state"],
        cloud: ["Cloud-agnostic"],
        apis: ["REST", "Webhook", "Optional Gemini"],
        testing: ["TypeScript build / lint"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
        isPrivate: false,
        visibilityBadge: "Repositório",
        adrReferences: ["ADR-001 Clean Architecture & Hexagonal Ports/Adapters", "ADR-002 Modular Monolith"]
      },
      engineering: [
        "Retry, timeout, idempotência e circuit breaker no dispatch HTTP real.",
        "SOAP, Database, SFTP e Custom permanecem NOT_CONFIGURED.",
        "Persistência externa e mensageria distribuída são evolução futura."
      ],
      technology: ["TypeScript 5.8", "React 19", "Express 4", "Vite"],
      evolution: "Evolução prevista para persistência externa, mensageria, observabilidade distribuída e conectores empresariais reais.",
      evidence: "README atual, estrutura do repositório e runtime Express.",
      evidenceSource: "Trimindslabs-Integration-Platform / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Validação do runtime atual; maturidade de produção ainda não reivindicada."
    }
];

const PROJECTS_EN: Project[] = [
  {
      id: "trusted-compliance-agent",
      title: "Trusted Compliance Agent",
      subtitle: "Deterministic Regulatory Auditing & Zero-Hallucination Legal Extraction",
      tag: "Regulatory AI / Enterprise Retrieval",
      sector: "European Financial & Legal Compliance",
      domain: "compliance",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Engineered for institutional legal compliance with character-offset provenance and deterministic fallback gates.",
      whatItProves: "Proves that Trimindslabs builds verifiable retrieval systems for mission-critical legal compliance where factual hallucination is strictly zero-tolerance.",
      problem: "Financial and legal compliance teams spend weeks reviewing complex multi-jurisdictional directives. Conventional generative AI models generate plausible yet legally invalid article citations, creating severe legal liabilities under EU AI Act frameworks.",
      context: "Operating under strict EU AI Act High-Risk Category criteria, the system requires source document provenance down to character-level bounding boxes and cryptographic token hashing.",
      architecture: {
        overview: "Three-tier verifiable pipeline: Lexical & dense chunk ingestion → Cross-encoder neural reranking → Controlled agentic synthesis with strict JSON schema and legal validation gates.",
        components: [
          "Document Ingestion Engine & Multi-modal PDF Structural Deconstruction",
          "Deterministic Citation Provenance Index with SHA-256 Block Fingerprints",
          "Dual-Pass Verification Agent with Cross-Reference Fallback",
          "Isolated Enclave Execution Layer in High-Security European Containers"
        ],
        diagramText: "Document Ingestion ➔ Structural Chunking ➔ Hybrid Search (Dense+BM25) ➔ Neural Reranker ➔ Constrained Verification Agent ➔ Signed Audit Certificate"
      },
      realArchitectureVerification: {
        documented: "Two-stage retrieval with cross-encoder neural reranking and JSON Schema output enforcement.",
        implemented: "FastAPI service with BM25 sparse index + Qdrant dense vectors, fused by Reciprocal Rank Fusion (k=60), scored by BGE-Reranker-Large, validated by Pydantic V2.",
        presentedOnSite: "Transparently described as Python/FastAPI + Qdrant + BGE-Reranker with no unevidenced technologies.",
        coherenceScore: "100% Coherent"
      },
      realTechnologies: {
        languages: ["Python 3.12"],
        frameworks: ["FastAPI", "Pydantic V2"],
        libraries: ["BGE-Reranker-Large", "HuggingFace Transformers", "PyPDF / PDFPlumber"],
        databases: ["Qdrant Vector Database", "SQLite (Audit Trail)"],
        cloud: ["Google Cloud Run (European Region)", "Google Cloud Storage"],
        iac: ["Docker multi-stage builds", "OpenTofu / Terraform Blueprints"],
        apis: ["REST OpenAPI v3", "Server-Sent Events (SSE)"],
        testing: ["Pytest (Unit & Integration Suites)", "Property-based citation fuzzing"],
        ciCd: ["GitHub Actions (Lint, Typecheck, Security Audit)"],
        observability: ["OpenTelemetry Python SDK", "Structured JSON Logging"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
        isPrivate: false,
        visibilityBadge: "Public Repository",
        testSuiteStatus: "Automated test suite with legal citation validation and full coverage",
        ciCdPipeline: "GitHub Actions CI: Passed",
        adrReferences: ["ADR-001: Hybrid Search over Dense-Only", "ADR-004: Character-Offset Verification Protocol"]
      },
      engineering: [
        "Engineered a zero-hallucination verification loop rejecting any LLM response lacking an exact match against retrieved primary source tokens.",
        "Implemented asynchronous streaming pipelines processing 500+ page regulatory PDFs with predictable low latency.",
        "Integrated strict OpenTelemetry tracing measuring semantic confidence score per extracted clause."
      ],
      technology: [
        "Python 3.12 / FastAPI",
        "Qdrant Vector DB",
        "BGE-Reranker-Large",
        "Pydantic V2",
        "Docker / Cloud Run (EU)",
        "OpenTelemetry"
      ],
      evolution: "Evolved from an assisted search interface into a self-auditing compliance agent generating cryptographically signed audit reports directly for regulatory committees.",
      challenges: [
        "Normalizing European Official Gazette publications with multi-column layouts across official languages.",
        "Preventing model leakage across differing EU directives and national transpositions.",
        "Maintaining predictable p95 latency across large legal corpora."
      ],
      decisions: [
        {
          decision: "Enforced exact character-offset verification before displaying citations.",
          rationale: "Ensures legal counsel can click any assertion and inspect the highlighted primary source immediately."
        },
        {
          decision: "Rejected generic conversational chat in favor of structured audit tables.",
          rationale: "Enterprise compliance officers require structured diffs and risk scores, not informal dialogues."
        }
      ],
      results: [
        {
          metric: "Citation Provenance",
          value: "Exact Offset Mapping",
          description: "Binds every generated assertion directly to character bounding spans in primary sources"
        },
        {
          metric: "Schema Contracts",
          value: "Pydantic V2",
          description: "Strict typed validation preventing ungrounded or malformed responses"
        },
        {
          metric: "Hybrid Retrieval",
          value: "BM25 + Qdrant",
          description: "Fuses exact technical terminology matching with dense semantic context"
        }
      ],
      evidence: "Repository contains complete test suites, Architecture Decision Records (ADRs), and reproducible Docker environments."
    },
  {
      id: "triminds-geo-ai",
      title: "Trimindslabs Geo-AI (V4)",
      subtitle: "Plataforma Geoespacial de IA para Earth Observation",
      tag: "Geospatial AI / Remote Sensing",
      sector: "Observação da Terra & Dados Geoespaciais",
      domain: "geospatial",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Plataforma modular para workflows de Earth Observation, ML geoespacial, FastAPI e deployment Cloud Run.",
      whatItProves: "Demonstra deployment operacional de uma plataforma Geo-AI e separação entre demonstração local e serviço cloud.",
      problem: "Workflows de observação da Terra exigem integração entre fontes geoespaciais, representação, ML e serving.",
      context: "A versão V4 está online em Google Cloud Run europe-west1; o repositório mantém também uma demo local determinística com dados RGB sintéticos.",
      architecture: {
        overview: "Earth Observation Sources → Provider Layer → Ingestion/Validation → Representation → Deep Learning / Vector Search → FastAPI → Cloud Run.",
        components: ["Provider layer", "Ingestion/validation", "Representation", "Deep Learning", "FastAPI", "Cloud Run"],
        diagramText: "EO Sources ➔ Provider Layer ➔ Ingestion ➔ Representation ➔ ML/Search ➔ FastAPI ➔ Cloud Run"
      },
      realArchitectureVerification: {
        documented: "Provider-oriented geospatial AI architecture with operational Cloud Run v4.",
        implemented: "FastAPI service with configurable model layer and Cloud Run v4 deployment; local deterministic demo path.",
        presentedOnSite: "Alinhado ao README atual, sem transformar a demo sintética em benchmark de satélite real.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Python"],
        frameworks: ["FastAPI", "PyTorch"],
        libraries: ["ResNet", "EfficientNet", "Vision Transformers", "MLflow"],
        cloud: ["Google Cloud Run", "Google Cloud"],
        apis: ["FastAPI"],
        testing: ["Pytest", "ruff", "pre-commit"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
        isPrivate: false,
        visibilityBadge: "Repositório",
        testSuiteStatus: "Quality checks and pytest"
      },
      engineering: [
        "Separação entre deployment operacional e demo local.",
        "Model factory configurável para múltiplas arquiteturas.",
        "Maturidade operacional explicitamente separada de implementação."
      ],
      technology: ["Python", "FastAPI", "PyTorch", "Google Cloud Run", "MLflow"],
      evolution: "Expansão contínua de providers, representações e workloads geoespaciais avançados.",
      evidence: "Cloud Run v4 online e README atual com modelo de maturidade operacional.",
      evidenceSource: "Trimindslabs-Geo-AI / README e deployment Cloud Run v4",
      lastVerified: "2026-10-08",
      deploymentStatus: "Operational — Cloud Run v4.",
      deployment: {
        target: "Google Cloud Run / europe-west1",
        url: "https://triminds-geo-ai-v4-1091629879450.europe-west1.run.app/",
        status: "Operational"
      }
    },
  {
      id: "triminds-logistics-platform",
      title: "TLP Next-Gen",
      subtitle: "Cloud-Native Logistics Platform for Operations, ePOD and Telemetry",
      tag: "Logistics / Cloud Native",
      sector: "Logistics & Transportation",
      domain: "logistics",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Java/Spring Boot + React/Vite application deployed on Cloud Run with PostgreSQL Cloud SQL, authentication/RBAC, logistics operations, ePOD and fleet telemetry.",
      whatItProves: "Demonstrates full-stack cloud-native engineering applied to logistics operations, relational persistence, access control and mapping.",
      problem: "Transport operations need a unified layer for CRM, cross-docking, deliveries, fleet and proof of delivery.",
      context: "The current version is deployed in GCP project sturdy-dogfish-460621-q7 with Cloud SQL PostgreSQL 16 and Google Maps with OSM fallback.",
      architecture: {
        overview: "React/Vite → Spring Boot → PostgreSQL/Cloud SQL, with authentication, CRM, cross-docking, ePOD and telemetry.",
        components: ["Spring Boot", "React/Vite", "Cloud SQL PostgreSQL 16", "Flyway", "Google Maps + OSM fallback", "RBAC/ePOD"],
        diagramText: "React ➔ Spring Boot ➔ Cloud SQL PostgreSQL 16\n             ↘ Maps / OSM fallback\n             ↘ Auth / CRM / Cross-Docking / ePOD / Fleet"
      },
      realArchitectureVerification: {
        documented: "Full-stack logistics application with Cloud Run deployment.",
        implemented: "Java/Spring Boot + React/Vite + Cloud SQL PostgreSQL 16 + Flyway + current RBAC and logistics capabilities.",
        presentedOnSite: "Updated to the current stack and deployment, removing unverified legacy technologies.",
        coherenceScore: "Aligned with current deployment"
      },
      realTechnologies: {
        languages: ["Java", "TypeScript"],
        frameworks: ["Spring Boot", "React", "Vite"],
        libraries: ["@vis.gl/react-google-maps"],
        databases: ["PostgreSQL 16 / Cloud SQL"],
        cloud: ["Google Cloud Run", "Google Cloud SQL"],
        apis: ["REST"],
        testing: ["Application validation"],
        ciCd: ["GitHub"]
      },
      repository: { name: "RodrigoDiasDeOliveira/Trimindlabs-Logistic-plataform-next-gen", isPrivate: true, visibilityBadge: "Private Repository" },
      engineering: ["RBAC roles: ADMIN, OPERATOR, OPERATIONS and DRIVER.","ePOD evidence with SHA-256 hashing.","Flyway for controlled schema evolution."],
      technology: ["Java / Spring Boot", "React / Vite", "PostgreSQL 16", "Cloud Run", "Google Maps"],
      evolution: "Continuous evolution of logistics modules, telemetry and regulatory integrations.",
      evidence: "Cloud Run deployment, Cloud SQL and functional current runtime.",
      evidenceSource: "TLP Next-Gen / GCP deployment",
      lastVerified: "2026-10-08",
      deploymentStatus: "Deployed and functional on Cloud Run.",
      deployment: { target: "Google Cloud Run / europe-west1", url: "https://tlp-nextgen-72mbkllrqa-ew.a.run.app", status: "Operational" }
    },
  {
      id: "triminds-security-layer",
      title: "Triminds Security Layer",
      subtitle: "Camada de Segurança Empresarial com Políticas e Arquitetura Modular",
      tag: "Enterprise Security",
      sector: "Segurança de Aplicações & Governança",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Modular monolith Java 21/Spring Boot 3.4 com arquitetura hexagonal/clean, autenticação, autorização, políticas, risco e auditoria.",
      whatItProves: "Demonstra fundação de segurança corporativa modular e orientada a políticas.",
      problem: "Aplicações empresariais precisam centralizar identidade, autorização, políticas e auditoria sem acoplar essas capacidades ao domínio de cada aplicação.",
      context: "O repositório declara arquitetura modular e core concluído, enquanto testes de integração, Docker Compose e Kubernetes ainda estão em andamento.",
      architecture: {
        overview: "Security Gateway → Identity/Auth/Access Control → Policy Engine (OPA) → Risk → Audit/Intelligence.",
        components: ["Security Identity", "Authentication/JWT", "Access Control", "OPA Policy Engine", "Risk Engine", "Audit"],
        diagramText: "Client ➔ Security Gateway ➔ Identity/Auth/Access ➔ OPA Policy ➔ Risk ➔ Audit/Intelligence"
      },
      realArchitectureVerification: {
        documented: "Modular Monolith com Ports & Adapters, Clean Architecture, DDD e PBAC.",
        implemented: "Java 21 + Spring Boot 3.4 com módulos de identidade, auth, access control, policy, risk, gateway, intelligence e audit.",
        presentedOnSite: "Arquitetura alinhada; maturidade operacional limitada ao que o README comprova.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Java 21"],
        frameworks: ["Spring Boot 3.4", "Spring Security", "Spring Data JPA"],
        libraries: ["OPA", "JWT/OAuth2 Resource Server"],
        databases: ["PostgreSQL", "Redis"],
        cloud: ["Cloud-native ready"],
        apis: ["Security Gateway"],
        testing: ["CI build and verification; integration tests in progress"],
        ciCd: ["CI build and verification"],
        observability: ["Micrometer", "Prometheus", "OpenTelemetry"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer-v1",
        isPrivate: true,
        visibilityBadge: "Repositório Privado",
        testSuiteStatus: "Core verification complete; integration tests in progress",
        ciCdPipeline: "CI build and verification"
      },
      engineering: [
        "Separação modular entre identidade, autenticação, autorização, políticas, risco e auditoria.",
        "OPA como motor de avaliação de políticas.",
        "Arquitetura orientada a Zero Trust e PBAC."
      ],
      technology: ["Java 21", "Spring Boot 3.4", "Spring Security", "OPA", "PostgreSQL", "Redis"],
      evolution: "Próximas etapas: testes de integração, ambiente Docker Compose, CD e deployment Kubernetes.",
      evidence: "README atual e estrutura modular do repositório.",
      evidenceSource: "Trimindslabs-Security-Layer-v1 / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Arquitetura/core concluídos; integração e deployment ainda em evolução."
    },
  {
      id: "triminds-ai-cloud-administrator",
      title: "Trimindslabs AI Cloud Administrator",
      subtitle: "AI-Assisted Multi-Cloud Administration with Controlled Execution",
      tag: "Cloud Platform / AI Operations",
      sector: "Cloud Administration & Governance",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "React/TypeScript + Express MVP with real capabilities explicitly separated from adapters that are not yet configured.",
      whatItProves: "Demonstrates operational governance, dry-run planning, chained audit and real AWS integration when credentials are configured.",
      problem: "Cloud operations need to distinguish planning, AI analysis and real execution.",
      context: "The current version uses Node/Express as the main runtime and keeps operational state in memory.",
      architecture: {
        overview: "React/TypeScript/Vite → Express API + AI orchestration + policy engine → provider adapters.",
        components: ["Real AWS SDKs", "Internal policy engine", "Explicit dry-run", "SHA-256 audit chain", "Internal telemetry"],
        diagramText: "React ➔ Express ➔ Policy/AI ➔ AWS (real when configured) / Azure-GCP-OCI (NOT_CONFIGURED)"
      },
      realArchitectureVerification: {
        documented: "Multi-cloud MVP separating planning from execution.",
        implemented: "Node/Express with real AWS STS/EC2 paths, policy engine, dry-run and SHA-256 audit chain.",
        presentedOnSite: "No claim of configured Azure/GCP/OCI adapters or an operational standalone FastMCP server.",
        coherenceScore: "Aligned with current README"
      },
      realTechnologies: {
        languages: ["TypeScript"],
        frameworks: ["React 19", "Vite", "Express"],
        libraries: ["AWS SDKs", "Gemini API"],
        databases: ["In-memory runtime state"],
        cloud: ["Real AWS adapter when configured", "Azure/GCP/OCI NOT_CONFIGURED"],
        apis: ["HTTP API"],
        testing: ["npm test", "npm run lint", "npm run build"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/trimindslabs-ai-cloud-administrator",
        isPrivate: false,
        visibilityBadge: "Repository",
        testSuiteStatus: "Tests, lint and build",
        ciCdPipeline: "GitHub Actions"
      },
      engineering: [
        "Dry-run produces no side effects.",
        "Real execution depends on a configured adapter and credentials.",
        "A provider without an adapter returns NOT_CONFIGURED rather than false success."
      ],
      technology: ["React 19 / TypeScript", "Express", "AWS SDKs", "Optional Gemini", "SHA-256 audit chain"],
      evolution: "Planned evolution toward real multi-cloud adapters, external persistence and greater operational maturity.",
      evidence: "Current README and main Node/Express implementation.",
      evidenceSource: "Trimindslabs AI Cloud Administrator / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Operational MVP / Work in Progress; prepared for deployment validation."
    },
  {
      id: "triminds-integration-platform",
      title: "Triminds Integration Platform (TIP)",
      subtitle: "Plataforma de Integração Corporativa com Conectores e Resiliência",
      tag: "Integration Platform",
      sector: "Integração de Sistemas & APIs",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Monólito TypeScript/Node/Express com console React, pipelines, transformação, validação e dispatch HTTP real para REST/Webhook.",
      whatItProves: "Demonstra arquitetura modular, abstração de conectores e mecanismos de resiliência sem apresentar infraestrutura futura como entregue.",
      problem: "Integrações heterogêneas precisam de uma camada consistente para modelagem, execução, retry e validação.",
      context: "O runtime atual mantém estado em memória e foi estruturado para evolução futura sem acoplamento a um provedor específico.",
      architecture: {
        overview: "React Console → Express API → Integration Engine → Connectors → HTTP/Webhook.",
        components: ["Pipeline Designer", "Transformation/Validation", "Retry/Timeout", "Idempotency", "Circuit Breaker"],
        diagramText: "React ➔ Express ➔ Integration Engine ➔ REST/Webhook / Gemini opcional"
      },
      realArchitectureVerification: {
        documented: "Clean/Hexagonal-inspired modular monolith.",
        implemented: "TypeScript 5.8 + React 19 + Express 4; dispatch real REST/Webhook; demais conectores NOT_CONFIGURED.",
        presentedOnSite: "Sem afirmar Redis/Kafka/Spring/FastAPI ou observabilidade distribuída como infraestrutura atual.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["TypeScript 5.8"],
        frameworks: ["React 19", "Express 4", "Vite"],
        databases: ["In-memory runtime state"],
        cloud: ["Cloud-agnostic"],
        apis: ["REST", "Webhook", "Optional Gemini"],
        testing: ["TypeScript build / lint"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
        isPrivate: false,
        visibilityBadge: "Repositório",
        adrReferences: ["ADR-001 Clean Architecture & Hexagonal Ports/Adapters", "ADR-002 Modular Monolith"]
      },
      engineering: [
        "Retry, timeout, idempotência e circuit breaker no dispatch HTTP real.",
        "SOAP, Database, SFTP e Custom permanecem NOT_CONFIGURED.",
        "Persistência externa e mensageria distribuída são evolução futura."
      ],
      technology: ["TypeScript 5.8", "React 19", "Express 4", "Vite"],
      evolution: "Evolução prevista para persistência externa, mensageria, observabilidade distribuída e conectores empresariais reais.",
      evidence: "README atual, estrutura do repositório e runtime Express.",
      evidenceSource: "Trimindslabs-Integration-Platform / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Validação do runtime atual; maturidade de produção ainda não reivindicada."
    }
];

const PROJECTS_ES: Project[] = [
  {
      id: "trusted-compliance-agent",
      title: "Trusted Compliance Agent",
      subtitle: "Auditoría Regulatoria Determinista y Extracción Legal con Procedencia",
      tag: "Regulatory AI / Enterprise Retrieval",
      sector: "Cumplimiento Regulatorio y Jurídico Europeo",
      domain: "compliance",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Diseñado para el cumplimiento legal corporativo con estricta verificación de procedencia por offset de caracteres y gates de fallback deterministas.",
      whatItProves: "Demuestra que Trimindslabs construye sistemas de recuperación comprobables para cumplimiento jurídico donde la tolerancia a citas incorrectas es cero.",
      problem: "Los equipos jurídicos y de compliance tardan semanas en analizar directivas multijurisdiccionales. Los modelos tradicionales de IA generativa generan citas aparentemente válidas pero inexistentes en los textos normativos oficiales, creando graves riesgos legales bajo el EU AI Act.",
      context: "Operando bajo los criterios del EU AI Act para sistemas de alto riesgo, el sistema exige procedencia documental auditable hasta cajas delimitadoras de caracteres y huellas criptográficas por párrafo.",
      architecture: {
        overview: "Pipeline de verificación en tres capas: Ingesta y segmentación léxica/densa → Reranking neural con modelo cross-encoder → Agente de síntesis con esquema JSON estricto y validación de procedencia.",
        components: [
          "Motor de Ingesta Documental y Deconstrucción Estructurada de PDFs",
          "Índice de Procedencia Determinista con Validación SHA-256 por Bloque",
          "Agente de Verificación en Doble Paso con Fallback de Cruce Textual",
          "Capa de Ejecución Aislada en Contenedores de Alta Seguridad"
        ],
        diagramText: "Ingesta Documental ➔ Segmentación Estructurada ➔ Búsqueda Híbrida (Dense+BM25) ➔ Reranker Neural ➔ Agente con Restricción de Esquema ➔ Certificado de Auditoría"
      },
      realArchitectureVerification: {
        documented: "Recuperación en dos etapas con reranker neural y aplicación estricta de contratos Pydantic V2.",
        implemented: "Servicio FastAPI con índice disperso BM25 + vectores densos Qdrant, fusión Reciprocal Rank Fusion y modelo BGE-Reranker-Large.",
        presentedOnSite: "Descrito con precisión técnica como Python/FastAPI + Qdrant + BGE-Reranker, sin tecnologías no evidenciadas.",
        coherenceScore: "100% Coherente"
      },
      realTechnologies: {
        languages: ["Python 3.12"],
        frameworks: ["FastAPI", "Pydantic V2"],
        libraries: ["BGE-Reranker-Large", "HuggingFace Transformers", "PyPDF / PDFPlumber"],
        databases: ["Qdrant Vector Database", "SQLite (Pista de auditoría)"],
        cloud: ["Google Cloud Run (Región Europea)", "Google Cloud Storage"],
        iac: ["Docker multi-stage builds", "OpenTofu / Terraform Blueprints"],
        apis: ["REST OpenAPI v3", "Server-Sent Events (SSE)"],
        testing: ["Pytest (Pruebas unitarias y de integración)", "Validación basada en propiedades"],
        ciCd: ["GitHub Actions (Lint, Typecheck, Auditoría de seguridad)"],
        observability: ["OpenTelemetry Python SDK", "Logs JSON estructurados"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
        isPrivate: false,
        visibilityBadge: "Repositorio Público",
        testSuiteStatus: "Suite automatizada con validación de citas y cobertura de reglas",
        ciCdPipeline: "GitHub Actions CI: Passed",
        adrReferences: ["ADR-001: Hybrid Search over Dense-Only", "ADR-004: Character-Offset Verification Protocol"]
      },
      engineering: [
        "Implementación de bucle de verificación que rechaza respuestas que no presenten coincidencia exacta contra tokens del documento original.",
        "Pipeline asíncrono con procesamiento de directivas extensas en streaming continuo.",
        "Trazabilidad distribuida con OpenTelemetry para auditar la confianza de cada cláusula extraída."
      ],
      technology: [
        "Python 3.12 / FastAPI",
        "Qdrant Vector DB",
        "BGE-Reranker-Large",
        "Pydantic V2",
        "Docker / Cloud Run (EU)",
        "OpenTelemetry"
      ],
      evolution: "Evolucionó de un asistente de búsqueda legal a un agente de cumplimiento autorregulado que genera informes estructurados con procedencia criptográfica trazable.",
      challenges: [
        "Normalización de diarios oficiales europeos en múltiples idiomas y maquetaciones complejas.",
        "Aislamiento estricto entre directivas comunitarias y transposiciones de estados miembros.",
        "Mantenimiento de latencia predecible en corpus regulatorios con cientos de páginas."
      ],
      decisions: [
        {
          decision: "Verificación estricta por offset de caracteres antes de presentar citas.",
          rationale: "Garantiza que el auditor legal pueda inspeccionar la fuente primaria original de inmediato con coincidencia exacta."
        },
        {
          decision: "Sustitución de chats conversacionales genéricos por tablas de cumplimiento estructuradas.",
          rationale: "Los departamentos jurídicos requieren tablas de riesgo y diffs auditables, no diálogos informales."
        }
      ],
      results: [
        {
          metric: "Procedencia Documental",
          value: "Mapeo Exacto",
          description: "Vincula cada afirmación directamente con un intervalo de caracteres en la fuente primaria"
        },
        {
          metric: "Contratos de Esquema",
          value: "Pydantic V2",
          description: "Validación estructurada de tipos eliminando respuestas fuera de formato"
        },
        {
          metric: "Recuperación Híbrida",
          value: "BM25 + Qdrant",
          description: "Fusión de búsqueda léxica por términos técnicos con búsqueda vectorial por contexto"
        }
      ],
      evidence: "Servicio implementado con pruebas automatizadas, especificaciones ADR y contenedores reproducibles."
    },
  {
      id: "triminds-geo-ai",
      title: "Trimindslabs Geo-AI (V4)",
      subtitle: "Plataforma Geoespacial de IA para Earth Observation",
      tag: "Geospatial AI / Remote Sensing",
      sector: "Observação da Terra & Dados Geoespaciais",
      domain: "geospatial",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Plataforma modular para workflows de Earth Observation, ML geoespacial, FastAPI e deployment Cloud Run.",
      whatItProves: "Demonstra deployment operacional de uma plataforma Geo-AI e separação entre demonstração local e serviço cloud.",
      problem: "Workflows de observação da Terra exigem integração entre fontes geoespaciais, representação, ML e serving.",
      context: "A versão V4 está online em Google Cloud Run europe-west1; o repositório mantém também uma demo local determinística com dados RGB sintéticos.",
      architecture: {
        overview: "Earth Observation Sources → Provider Layer → Ingestion/Validation → Representation → Deep Learning / Vector Search → FastAPI → Cloud Run.",
        components: ["Provider layer", "Ingestion/validation", "Representation", "Deep Learning", "FastAPI", "Cloud Run"],
        diagramText: "EO Sources ➔ Provider Layer ➔ Ingestion ➔ Representation ➔ ML/Search ➔ FastAPI ➔ Cloud Run"
      },
      realArchitectureVerification: {
        documented: "Provider-oriented geospatial AI architecture with operational Cloud Run v4.",
        implemented: "FastAPI service with configurable model layer and Cloud Run v4 deployment; local deterministic demo path.",
        presentedOnSite: "Alinhado ao README atual, sem transformar a demo sintética em benchmark de satélite real.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Python"],
        frameworks: ["FastAPI", "PyTorch"],
        libraries: ["ResNet", "EfficientNet", "Vision Transformers", "MLflow"],
        cloud: ["Google Cloud Run", "Google Cloud"],
        apis: ["FastAPI"],
        testing: ["Pytest", "ruff", "pre-commit"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
        isPrivate: false,
        visibilityBadge: "Repositório",
        testSuiteStatus: "Quality checks and pytest"
      },
      engineering: [
        "Separação entre deployment operacional e demo local.",
        "Model factory configurável para múltiplas arquiteturas.",
        "Maturidade operacional explicitamente separada de implementação."
      ],
      technology: ["Python", "FastAPI", "PyTorch", "Google Cloud Run", "MLflow"],
      evolution: "Expansão contínua de providers, representações e workloads geoespaciais avançados.",
      evidence: "Cloud Run v4 online e README atual com modelo de maturidade operacional.",
      evidenceSource: "Trimindslabs-Geo-AI / README e deployment Cloud Run v4",
      lastVerified: "2026-10-08",
      deploymentStatus: "Operational — Cloud Run v4.",
      deployment: {
        target: "Google Cloud Run / europe-west1",
        url: "https://triminds-geo-ai-v4-1091629879450.europe-west1.run.app/",
        status: "Operational"
      }
    },
  {
      id: "triminds-logistics-platform",
      title: "TLP Next-Gen",
      subtitle: "Plataforma Logística Cloud-Native para Operaciones, ePOD y Telemetría",
      tag: "Logistics / Cloud Native",
      sector: "Logística y Transporte",
      domain: "logistics",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "deployed",
      honestScope: "Aplicación Java/Spring Boot + React/Vite desplegada en Cloud Run, con PostgreSQL Cloud SQL, autenticación/RBAC, operaciones logísticas, ePOD y telemetría de flota.",
      whatItProves: "Demuestra ingeniería full-stack cloud-native aplicada a operaciones logísticas, persistencia relacional, control de acceso e integración de mapas.",
      problem: "Las operaciones de transporte necesitan unificar CRM, cross-docking, entregas, flota y evidencias de entrega.",
      context: "La versión actual está desplegada en el proyecto GCP sturdy-dogfish-460621-q7, con Cloud SQL PostgreSQL 16 y Google Maps con fallback OSM.",
      architecture: {
        overview: "React/Vite → Spring Boot → PostgreSQL/Cloud SQL, con autenticación, CRM, cross-docking, ePOD y telemetría.",
        components: ["Spring Boot", "React/Vite", "Cloud SQL PostgreSQL 16", "Flyway", "Google Maps + OSM fallback", "RBAC/ePOD"],
        diagramText: "React ➔ Spring Boot ➔ Cloud SQL PostgreSQL 16\n             ↘ Maps / OSM fallback\n             ↘ Auth / CRM / Cross-Docking / ePOD / Fleet"
      },
      realArchitectureVerification: {
        documented: "Aplicación logística full-stack con deployment Cloud Run.",
        implemented: "Java/Spring Boot + React/Vite + Cloud SQL PostgreSQL 16 + Flyway + RBAC y capacidades logísticas actuales.",
        presentedOnSite: "Actualizado a la stack y deployment actuales, eliminando tecnologías heredadas no verificadas.",
        coherenceScore: "Alineado con el deployment actual"
      },
      realTechnologies: {
        languages: ["Java", "TypeScript"],
        frameworks: ["Spring Boot", "React", "Vite"],
        libraries: ["@vis.gl/react-google-maps"],
        databases: ["PostgreSQL 16 / Cloud SQL"],
        cloud: ["Google Cloud Run", "Google Cloud SQL"],
        apis: ["REST"],
        testing: ["Validación de aplicación"],
        ciCd: ["GitHub"]
      },
      repository: { name: "RodrigoDiasDeOliveira/Trimindlabs-Logistic-plataform-next-gen", isPrivate: true, visibilityBadge: "Repositorio Privado" },
      engineering: ["RBAC con roles ADMIN, OPERATOR, OPERATIONS y DRIVER.","ePOD con evidencia y hash SHA-256.","Flyway para evolución controlada del schema."],
      technology: ["Java / Spring Boot", "React / Vite", "PostgreSQL 16", "Cloud Run", "Google Maps"],
      evolution: "Evolución continua de los módulos logísticos, telemetría e integraciones regulatorias.",
      evidence: "Deployment Cloud Run, Cloud SQL y runtime funcional actual.",
      evidenceSource: "TLP Next-Gen / deployment GCP",
      lastVerified: "2026-10-08",
      deploymentStatus: "Desplegado y funcional en Cloud Run.",
      deployment: { target: "Google Cloud Run / europe-west1", url: "https://tlp-nextgen-72mbkllrqa-ew.a.run.app", status: "Operational" }
    },
  {
      id: "triminds-security-layer",
      title: "Triminds Security Layer",
      subtitle: "Camada de Segurança Empresarial com Políticas e Arquitetura Modular",
      tag: "Enterprise Security",
      sector: "Segurança de Aplicações & Governança",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Modular monolith Java 21/Spring Boot 3.4 com arquitetura hexagonal/clean, autenticação, autorização, políticas, risco e auditoria.",
      whatItProves: "Demonstra fundação de segurança corporativa modular e orientada a políticas.",
      problem: "Aplicações empresariais precisam centralizar identidade, autorização, políticas e auditoria sem acoplar essas capacidades ao domínio de cada aplicação.",
      context: "O repositório declara arquitetura modular e core concluído, enquanto testes de integração, Docker Compose e Kubernetes ainda estão em andamento.",
      architecture: {
        overview: "Security Gateway → Identity/Auth/Access Control → Policy Engine (OPA) → Risk → Audit/Intelligence.",
        components: ["Security Identity", "Authentication/JWT", "Access Control", "OPA Policy Engine", "Risk Engine", "Audit"],
        diagramText: "Client ➔ Security Gateway ➔ Identity/Auth/Access ➔ OPA Policy ➔ Risk ➔ Audit/Intelligence"
      },
      realArchitectureVerification: {
        documented: "Modular Monolith com Ports & Adapters, Clean Architecture, DDD e PBAC.",
        implemented: "Java 21 + Spring Boot 3.4 com módulos de identidade, auth, access control, policy, risk, gateway, intelligence e audit.",
        presentedOnSite: "Arquitetura alinhada; maturidade operacional limitada ao que o README comprova.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["Java 21"],
        frameworks: ["Spring Boot 3.4", "Spring Security", "Spring Data JPA"],
        libraries: ["OPA", "JWT/OAuth2 Resource Server"],
        databases: ["PostgreSQL", "Redis"],
        cloud: ["Cloud-native ready"],
        apis: ["Security Gateway"],
        testing: ["CI build and verification; integration tests in progress"],
        ciCd: ["CI build and verification"],
        observability: ["Micrometer", "Prometheus", "OpenTelemetry"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer-v1",
        isPrivate: true,
        visibilityBadge: "Repositório Privado",
        testSuiteStatus: "Core verification complete; integration tests in progress",
        ciCdPipeline: "CI build and verification"
      },
      engineering: [
        "Separação modular entre identidade, autenticação, autorização, políticas, risco e auditoria.",
        "OPA como motor de avaliação de políticas.",
        "Arquitetura orientada a Zero Trust e PBAC."
      ],
      technology: ["Java 21", "Spring Boot 3.4", "Spring Security", "OPA", "PostgreSQL", "Redis"],
      evolution: "Próximas etapas: testes de integração, ambiente Docker Compose, CD e deployment Kubernetes.",
      evidence: "README atual e estrutura modular do repositório.",
      evidenceSource: "Trimindslabs-Security-Layer-v1 / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Arquitetura/core concluídos; integração e deployment ainda em evolução."
    },
  {
      id: "triminds-ai-cloud-administrator",
      title: "Trimindslabs AI Cloud Administrator",
      subtitle: "Administración Multi-Cloud Asistida por IA con Ejecución Controlada",
      tag: "Cloud Platform / AI Operations",
      sector: "Administración Cloud y Gobernanza",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "MVP React/TypeScript + Express con capacidades reales separadas explícitamente de los adapters todavía no configurados.",
      whatItProves: "Demuestra gobernanza operativa, dry-run, auditoría encadenada e integración real con AWS cuando las credenciales están configuradas.",
      problem: "Las operaciones cloud deben distinguir planificación, análisis de IA y ejecución real.",
      context: "La versión actual utiliza Node/Express como runtime principal y mantiene el estado operativo en memoria.",
      architecture: {
        overview: "React/TypeScript/Vite → Express API + orquestación IA + motor de políticas → adapters de proveedores.",
        components: ["AWS SDKs reales", "Motor interno de políticas", "Dry-run explícito", "Audit chain SHA-256", "Telemetría interna"],
        diagramText: "React ➔ Express ➔ Policy/AI ➔ AWS (real cuando está configurado) / Azure-GCP-OCI (NOT_CONFIGURED)"
      },
      realArchitectureVerification: {
        documented: "MVP multi-cloud con separación entre planificación y ejecución.",
        implemented: "Node/Express con rutas AWS STS/EC2 reales, motor de políticas, dry-run y audit chain SHA-256.",
        presentedOnSite: "Sin afirmar adapters Azure/GCP/OCI configurados ni un servidor FastMCP independiente operativo.",
        coherenceScore: "Alineado con el README actual"
      },
      realTechnologies: {
        languages: ["TypeScript"],
        frameworks: ["React 19", "Vite", "Express"],
        libraries: ["AWS SDKs", "Gemini API"],
        databases: ["Estado operativo en memoria"],
        cloud: ["AWS real cuando está configurado", "Azure/GCP/OCI NOT_CONFIGURED"],
        apis: ["HTTP API"],
        testing: ["npm test", "npm run lint", "npm run build"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/trimindslabs-ai-cloud-administrator",
        isPrivate: false,
        visibilityBadge: "Repositorio",
        testSuiteStatus: "Tests, lint y build",
        ciCdPipeline: "GitHub Actions"
      },
      engineering: [
        "El dry-run no produce efectos secundarios.",
        "La ejecución real depende de un adapter y credenciales configurados.",
        "Un proveedor sin adapter devuelve NOT_CONFIGURED en lugar de un éxito ficticio."
      ],
      technology: ["React 19 / TypeScript", "Express", "AWS SDKs", "Gemini opcional", "Audit chain SHA-256"],
      evolution: "Evolución prevista hacia adapters multi-cloud reales, persistencia externa y mayor madurez operativa.",
      evidence: "README actual e implementación principal Node/Express.",
      evidenceSource: "Trimindslabs AI Cloud Administrator / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "MVP operativo / Work in Progress; preparado para validación de despliegue."
    },
  {
      id: "triminds-integration-platform",
      title: "Triminds Integration Platform (TIP)",
      subtitle: "Plataforma de Integração Corporativa com Conectores e Resiliência",
      tag: "Integration Platform",
      sector: "Integração de Sistemas & APIs",
      domain: "platform",
      category: "what-we-built",
      truthStatus: "implemented",
      operationalStage: "validation",
      honestScope: "Monólito TypeScript/Node/Express com console React, pipelines, transformação, validação e dispatch HTTP real para REST/Webhook.",
      whatItProves: "Demonstra arquitetura modular, abstração de conectores e mecanismos de resiliência sem apresentar infraestrutura futura como entregue.",
      problem: "Integrações heterogêneas precisam de uma camada consistente para modelagem, execução, retry e validação.",
      context: "O runtime atual mantém estado em memória e foi estruturado para evolução futura sem acoplamento a um provedor específico.",
      architecture: {
        overview: "React Console → Express API → Integration Engine → Connectors → HTTP/Webhook.",
        components: ["Pipeline Designer", "Transformation/Validation", "Retry/Timeout", "Idempotency", "Circuit Breaker"],
        diagramText: "React ➔ Express ➔ Integration Engine ➔ REST/Webhook / Gemini opcional"
      },
      realArchitectureVerification: {
        documented: "Clean/Hexagonal-inspired modular monolith.",
        implemented: "TypeScript 5.8 + React 19 + Express 4; dispatch real REST/Webhook; demais conectores NOT_CONFIGURED.",
        presentedOnSite: "Sem afirmar Redis/Kafka/Spring/FastAPI ou observabilidade distribuída como infraestrutura atual.",
        coherenceScore: "Alinhado ao README atual"
      },
      realTechnologies: {
        languages: ["TypeScript 5.8"],
        frameworks: ["React 19", "Express 4", "Vite"],
        databases: ["In-memory runtime state"],
        cloud: ["Cloud-agnostic"],
        apis: ["REST", "Webhook", "Optional Gemini"],
        testing: ["TypeScript build / lint"],
        ciCd: ["GitHub Actions"]
      },
      repository: {
        name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
        isPrivate: false,
        visibilityBadge: "Repositório",
        adrReferences: ["ADR-001 Clean Architecture & Hexagonal Ports/Adapters", "ADR-002 Modular Monolith"]
      },
      engineering: [
        "Retry, timeout, idempotência e circuit breaker no dispatch HTTP real.",
        "SOAP, Database, SFTP e Custom permanecem NOT_CONFIGURED.",
        "Persistência externa e mensageria distribuída são evolução futura."
      ],
      technology: ["TypeScript 5.8", "React 19", "Express 4", "Vite"],
      evolution: "Evolução prevista para persistência externa, mensageria, observabilidade distribuída e conectores empresariais reais.",
      evidence: "README atual, estrutura do repositório e runtime Express.",
      evidenceSource: "Trimindslabs-Integration-Platform / README",
      lastVerified: "2026-10-08",
      deploymentStatus: "Validação do runtime atual; maturidade de produção ainda não reivindicada."
    }
];

const GATES_PT: ProductionGate[] = [
  {
    id: "gate-repository-truth",
    name: "Veracidade dos Repositórios & Código",
    phase: "Fase 1",
    status: "verified",
    evidence: "Separação formal entre estágio de implementação, validação contínua e comprovação de produção.",
    details: "Nenhum sistema pode ser apresentado como produto final sem evidências em código e arquitetura."
  },
  {
    id: "gate-content-integrity",
    name: "Integridade de Conteúdo & Métricas",
    phase: "Fase 2",
    status: "verified",
    evidence: "Eliminação de métricas sintéticas sem fonte identificável; apenas dados comprovados são exibidos.",
    details: "Métricas sem rastreabilidade foram removidas ou qualificadas como validação experimental."
  },
  {
    id: "gate-i18n",
    name: "Internacionalização em Primeiro Nível",
    phase: "Fase 3",
    status: "verified",
    evidence: "Suporte completo e consistente em Português (PT), Inglês (EN) e Espanhol (ES).",
    details: "Interface totalmente sincronizada sem fragmentos residuais em outros idiomas."
  },
  {
    id: "gate-ux-responsive",
    name: "Arquitetura Responsiva & Divulgação Progressiva",
    phase: "Fase 4",
    status: "verified",
    evidence: "Hierarquia clara de informação: Visão geral simples com aprofundamento técnico sob demanda.",
    details: "Navegação adaptada para telas móveis e desktops com foco na legibilidade corporativa."
  },
  {
    id: "gate-accessibility",
    name: "Acessibilidade & Contraste WCAG",
    phase: "Fase 5",
    status: "verified",
    evidence: "Paleta editorial com contraste mínimo de 4.5:1 para texto e suporte a navegação por teclado.",
    details: "Sem dependência exclusiva de cores para sinalização de estados semânticos."
  },
  {
    id: "gate-seo",
    name: "Indexação & Metadados Estruturados",
    phase: "Fase 6",
    status: "verified",
    evidence: "Tags Open Graph, Twitter Cards e dados estruturados JSON-LD configurados.",
    details: "Metadados sincronizados com o modelo de governança corporativa da Trimindslabs."
  },
  {
    id: "gate-security",
    name: "Segurança de Clientes & Proteção de Dados",
    phase: "Fase 7",
    status: "verified",
    evidence: "Isolamento de credenciais, ausência de rastreadores invasivos e dados restritos à jurisdição europeia.",
    details: "Em conformidade com as diretivas do GDPR e políticas de privacidade da UE."
  },
  {
    id: "gate-performance",
    name: "Higiene de Bundle & Desempenho",
    phase: "Fase 8",
    status: "verified",
    evidence: "Build limpo sem dependências órfãs, fontes pré-carregadas e código modular.",
    details: "Zero impacto em tempo de carregamento de páginas na web."
  },
  {
    id: "gate-observability",
    name: "Observabilidade & Transparência Real",
    phase: "Fase 9",
    status: "verified",
    evidence: "Dashboard de engenharia com estados de sistema declarados honestamente, sem telemetria simulada.",
    details: "Transparência total sobre quais sistemas estão em produção e quais estão em validação."
  },
  {
    id: "gate-testing",
    name: "Garantia de Qualidade & Testes de Software",
    phase: "Fase 10",
    status: "verified",
    evidence: "Projetos acompanhados de testes automatizados unitários, de integração e arquiteturais (ArchUnit).",
    details: "Rigor no processo de compilação e verificação de contratos de dados."
  },
  {
    id: "gate-deployment",
    name: "Prontidão Operacional & Governança de Release",
    phase: "Fase 11",
    status: "verified",
    evidence: "Separação de ambientes de desenvolvimento, validação e execução em nuvem europeia.",
    details: "Sistemas publicados em contêineres e imagens validadas de forma reproduzível."
  }
];

const GATES_EN: ProductionGate[] = [
  {
    id: "gate-repository-truth",
    name: "Repository & Source Code Truth",
    phase: "Phase 1",
    status: "verified",
    evidence: "Formal separation between implementation stage, continuous validation, and production evidence.",
    details: "No system can be presented as a finished product without verifiable source code and architecture."
  },
  {
    id: "gate-content-integrity",
    name: "Content Integrity & Metrics Provenance",
    phase: "Phase 2",
    status: "verified",
    evidence: "Elimination of synthetic ungrounded metrics; only proven, verifiable facts are presented.",
    details: "Metrics lacking provenance were removed or designated as experimental validation."
  },
  {
    id: "gate-i18n",
    name: "First-Class Internationalization",
    phase: "Phase 3",
    status: "verified",
    evidence: "Complete and consistent multilingual support in Portuguese (PT), English (EN), and Spanish (ES).",
    details: "Fully synchronized interface without residual language fragments across views."
  },
  {
    id: "gate-ux-responsive",
    name: "Responsive Architecture & Progressive Disclosure",
    phase: "Phase 4",
    status: "verified",
    evidence: "Clear informational hierarchy: Clean executive overview with on-demand technical depth.",
    details: "Navigation tailored for mobile and desktop viewports focusing on corporate legibility."
  },
  {
    id: "gate-accessibility",
    name: "Accessibility & WCAG Contrast Standards",
    phase: "Phase 5",
    status: "verified",
    evidence: "Editorial color palette with minimum 4.5:1 text contrast and full keyboard navigation support.",
    details: "No exclusive reliance on color hue for signaling semantic states."
  },
  {
    id: "gate-seo",
    name: "Discoverability & Structured JSON-LD Metadata",
    phase: "Phase 6",
    status: "verified",
    evidence: "Open Graph tags, Twitter Cards, and canonical JSON-LD schema graphs configured.",
    details: "Metadata synchronized with the Trimindslabs corporate governance model."
  },
  {
    id: "gate-security",
    name: "Client Security & European Data Privacy",
    phase: "Phase 7",
    status: "verified",
    evidence: "Credential vaulting, zero third-party telemetry trackers, and European data jurisdiction enforcement.",
    details: "Strict compliance with EU GDPR directives and privacy standards."
  },
  {
    id: "gate-performance",
    name: "Bundle Hygiene & Execution Efficiency",
    phase: "Phase 8",
    status: "verified",
    evidence: "Clean production build without orphan dependencies, preloaded typography, and modular code.",
    details: "Zero latency penalties on initial page viewport loading."
  },
  {
    id: "gate-observability",
    name: "Observability & Truthful Operational State",
    phase: "Phase 9",
    status: "verified",
    evidence: "Engineering dashboard presenting declared system states truthfully without simulated telemetry.",
    details: "Full transparency regarding which systems are deployed and which are under validation."
  },
  {
    id: "gate-testing",
    name: "Software Quality Assurance & Automated Testing",
    phase: "Phase 10",
    status: "verified",
    evidence: "Systems backed by unit, integration, and ArchUnit architectural boundary test suites.",
    details: "Strict compilation verification and data contract enforcement."
  },
  {
    id: "gate-deployment",
    name: "Operational Readiness & Release Governance",
    phase: "Phase 11",
    status: "verified",
    evidence: "Strict separation of development, staging validation, and European cloud runtime enclaves.",
    details: "Systems deployed via reproducible container images."
  }
];

const GATES_ES: ProductionGate[] = [
  {
    id: "gate-repository-truth",
    name: "Veracidad de Repositorios y Código",
    phase: "Fase 1",
    status: "verified",
    evidence: "Separación formal entre estado de implementación, validación continua y comprobación de producción.",
    details: "Ningún sistema se presenta como producto final sin evidencias de código y arquitectura comprobables."
  },
  {
    id: "gate-content-integrity",
    name: "Integridad de Contenido y Métricas",
    phase: "Fase 2",
    status: "verified",
    evidence: "Eliminación de métricas sintéticas sin procedencia demostrable; solo se presentan datos contrastados.",
    details: "Métricas sin trazabilidad fueron eliminadas o calificadas como validación experimental."
  },
  {
    id: "gate-i18n",
    name: "Internacionalización de Primer Nivel",
    phase: "Fase 3",
    status: "verified",
    evidence: "Soporte completo y uniforme en Portugués (PT), Inglés (EN) y Español (ES).",
    details: "Interfaz totalmente sincronizada sin fragmentos residuales de otros idiomas."
  },
  {
    id: "gate-ux-responsive",
    name: "Arquitectura Adaptable y Divulgación Progresiva",
    phase: "Fase 4",
    status: "verified",
    evidence: "Jerarquía nítida de información: Visión general ejecutiva con profundización técnica bajo demanda.",
    details: "Navegación optimizada para dispositivos móviles y escritorio con énfasis en legibilidad."
  },
  {
    id: "gate-accessibility",
    name: "Accesibilidad y Contraste WCAG",
    phase: "Fase 5",
    status: "verified",
    evidence: "Paleta editorial con contraste superior a 4.5:1 para texto y navegación completa por teclado.",
    details: "Sin dependencia exclusiva del color para comunicar estados semánticos del sistema."
  },
  {
    id: "gate-seo",
    name: "Indexación y Metadatos Estructurados",
    phase: "Fase 6",
    status: "verified",
    evidence: "Etiquetas Open Graph, Twitter Cards y esquemas estructurados JSON-LD configurados.",
    details: "Metadatos sincronizados con el modelo de gobernanza corporativa de Trimindslabs."
  },
  {
    id: "gate-security",
    name: "Seguridad y Protección de Datos Europea",
    phase: "Fase 7",
    status: "verified",
    evidence: "Custodia de credenciales, ausencia de rastreadores invasivos y datos restringidos a jurisdicción de la UE.",
    details: "En estricto cumplimiento del RGPD europeo y directivas de privacidad."
  },
  {
    id: "gate-performance",
    name: "Higiene de Bundle y Rendimiento",
    phase: "Fase 8",
    status: "verified",
    evidence: "Compilación depurada sin librerías huérfanas, tipografías precargadas y código modular.",
    details: "Cero penalización en tiempos de carga y respuesta de la interfaz."
  },
  {
    id: "gate-observability",
    name: "Observabilidad y Transparencia Operativa",
    phase: "Fase 9",
    status: "verified",
    evidence: "Dashboard de ingeniería con estados declarados honestamente, sin telemetría ficticia.",
    details: "Transparencia absoluta sobre qué sistemas están en producción y cuáles en validación."
  },
  {
    id: "gate-testing",
    name: "Garantía de Calidad y Pruebas Automatizadas",
    phase: "Fase 10",
    status: "verified",
    evidence: "Sistemas respaldados por suites de pruebas unitarias, de integración y arquitectónicas con ArchUnit.",
    details: "Rigor en el proceso de compilación y verificación de contratos de datos."
  },
  {
    id: "gate-deployment",
    name: "Preparación Operativa y Gobernanza de Release",
    phase: "Fase 11",
    status: "verified",
    evidence: "Separación estricta de entornos de desarrollo, validación y ejecución en nube europea.",
    details: "Sistemas desplegados mediante imágenes de contenedores reproducibles."
  }
];

export const getProductionGates = (lang: Language): ProductionGate[] => {
  switch (lang) {
    case 'en': return GATES_EN;
    case 'es': return GATES_ES;
    default: return GATES_PT;
  }
};

export const PRODUCTION_GATES = GATES_PT;

/* =========================================================================
   VOCABULARY TERMS BY LANGUAGE
   ========================================================================= */

const VOCAB_PT: VocabularyTerm[] = [
  {
    term: "Trusted Search",
    shortDefinition: "Arquitetura de busca que combina recuperação léxica e vetorial com validação determinística de citações até o caractere exato da fonte primária.",
    contrastingAntiPattern: "Busca vetorial pura (RAG ingênuo) que retorna trechos semanticamente similares mas factualmente imprecisos.",
    operationalBoundary: "Aplicável exclusivamente a sistemas onde cada citação é rastreada e validada contra fontes autoritativas."
  },
  {
    term: "Trust Before Generation",
    shortDefinition: "Princípio onde a recuperação, filtragem e verificação dos dados brutos ocorrem antes de qualquer geração ou síntese por IA.",
    contrastingAntiPattern: "Geração probabilística de texto com tentativa de verificação posterior baseada no próprio modelo.",
    operationalBoundary: "Se a verificação falhar ou faltar evidência documental, o sistema retorna um fallback determinístico explícito."
  },
  {
    term: "Trusted AI",
    shortDefinition: "Sistemas inteligentes com contratos estritos de esquema (Pydantic / JSON Schema), trilhas de auditoria imutáveis e tolerância zero a afirmações não fundamentadas.",
    contrastingAntiPattern: "Aplicações de IA com saídas em texto livre sem validação estrutural de tipos ou proveniência documental.",
    operationalBoundary: "Exigido em fluxos críticos de conformidade legal, financeira, infraestrutura e segurança."
  },
  {
    term: "Production-Oriented AI",
    shortDefinition: "Implementação de IA focada em confiabilidade operacional, latência previsível, contenção de custos de inferência e testes automatizados.",
    contrastingAntiPattern: "Demonstrações ou protótipos acadêmicos que não resistem a condições adversas de rede, concorrência ou dados malformados.",
    operationalBoundary: "Define sistemas implantados em contêineres de produção com observabilidade e políticas de escalabilidade ativas."
  },
  {
    term: "AI Observability",
    shortDefinition: "Coleta e análise sistemática de métricas operacionais, tracing distribuído de requisições de agentes e auditoria de contratos de execução.",
    contrastingAntiPattern: "Painéis com indicadores simulados ou opacos sem correspondência com o tráfego real do sistema.",
    operationalBoundary: "Instrumentação com OpenTelemetry e logs estruturados em todos os estágios do pipeline."
  },
  {
    term: "Deterministic Controlled Workflows",
    shortDefinition: "Fluxos de agentes com máquina de estados finita, transições explícitas e validação formal de entradas e saídas, impedindo loops infinitos estocásticos.",
    contrastingAntiPattern: "Agentes totalmente autônomos sem limites de transição de estado ou critérios formais de parada.",
    operationalBoundary: "Adotado em processos corporativos onde cada decisão automatizada deve ser reproduzível e auditável."
  }
];

const VOCAB_EN: VocabularyTerm[] = [
  {
    term: "Trusted Search",
    shortDefinition: "Search architecture combining lexical and vector retrieval with deterministic citation validation down to exact character offsets in primary sources.",
    contrastingAntiPattern: "Naive dense vector search (standard RAG) returning semantically plausible but factually inaccurate excerpts.",
    operationalBoundary: "Applicable exclusively to mission-critical systems where every citation is tracked and verified against authoritative documents."
  },
  {
    term: "Trust Before Generation",
    shortDefinition: "Architectural principle ensuring retrieval, filtering, and factual grounding occur before any neural generation or synthesis begins.",
    contrastingAntiPattern: "Probabilistic text generation followed by retrospective self-verification by the generative model itself.",
    operationalBoundary: "If verification fails or source evidence is absent, the system executes an explicit deterministic fallback."
  },
  {
    term: "Trusted AI",
    shortDefinition: "Intelligent systems with strict schema contracts (Pydantic / JSON Schema), immutable audit trails, and zero tolerance for ungrounded claims.",
    contrastingAntiPattern: "AI applications producing unconstrained free-form text without structural type validation or document provenance.",
    operationalBoundary: "Mandatory across regulatory, financial, critical infrastructure, and cybersecurity production pipelines."
  },
  {
    term: "Production-Oriented AI",
    shortDefinition: "AI engineering focused on operational reliability, predictable latency, compute cost containment, and automated test suites.",
    contrastingAntiPattern: "Academic demos or fragile prototypes that fail under network degradation, concurrency, or malformed input payloads.",
    operationalBoundary: "Characterizes systems deployed in production containers with active observability and scale-to-zero capabilities."
  },
  {
    term: "AI Observability",
    shortDefinition: "Systematic collection of operational telemetry, distributed tracing across agent boundaries, and real-time execution contract verification.",
    contrastingAntiPattern: "Decorative dashboards displaying fabricated counters or opaque metrics with no relationship to production traffic.",
    operationalBoundary: "Standardized OpenTelemetry instrumentation and structured logging across every stage of the pipeline."
  },
  {
    term: "Deterministic Controlled Workflows",
    shortDefinition: "Agent workflows governed by finite state machines, explicit transitions, and formal schema contracts, preventing stochastic infinite loops.",
    contrastingAntiPattern: "Unconstrained autonomous agent loops with unbounded decision paths and no formal convergence criteria.",
    operationalBoundary: "Applied in enterprise workflows where every automated action must be reproducible and cryptographically auditable."
  }
];

const VOCAB_ES: VocabularyTerm[] = [
  {
    term: "Trusted Search",
    shortDefinition: "Arquitectura de búsqueda que combina recuperación léxica y vectorial con validación determinista de citas hasta el carácter exacto de la fuente primaria.",
    contrastingAntiPattern: "Búsqueda vectorial ingenua (RAG tradicional) que devuelve fragmentos semánticamente similares pero factualmente imprecisos.",
    operationalBoundary: "Aplicable exclusivamente a sistemas donde cada afirmación está vinculada y verificada contra fuentes normativas autoritativas."
  },
  {
    term: "Trust Before Generation",
    shortDefinition: "Principio donde la recuperación, filtrado y validación de los datos brutos ocurre antes de cualquier síntesis o generación por IA.",
    contrastingAntiPattern: "Generación probabilística de texto con intento de verificación posterior basada en el propio modelo de lenguaje.",
    operationalBoundary: "Si la verificación falla o falta evidencia documental, el sistema ejecuta un fallback determinista explícito."
  },
  {
    term: "Trusted AI",
    shortDefinition: "Sistemas inteligentes con contratos estrictos de esquema (Pydantic / JSON Schema), registros inmutables de auditoría y cero tolerancia a alucinaciones.",
    contrastingAntiPattern: "Aplicaciones de IA con salidas en texto libre sin validación estructural de tipos ni procedencia documental.",
    operationalBoundary: "Exigido en flujos críticos de cumplimiento legal, finanzas, infraestructura y ciberseguridad."
  },
  {
    term: "Production-Oriented AI",
    shortDefinition: "Ingeniería de IA centrada en fiabilidad operativa, latencia predecible, contención de costes de inferencia y pruebas automatizadas.",
    contrastingAntiPattern: "Demostraciones o prototipos académicos que no soportan condiciones adversas de red, concurrencia o datos malformados.",
    operationalBoundary: "Define sistemas desplegados en contenedores de producción con observabilidad y políticas de escalabilidad activas."
  },
  {
    term: "AI Observability",
    shortDefinition: "Recolección y análisis sistemático de telemetría operativa, trazabilidad distribuida de agentes y auditoría de contratos de ejecución.",
    contrastingAntiPattern: "Paneles con indicadores decorativos o simulados sin correspondencia con el tráfico real de los servicios.",
    operationalBoundary: "Instrumentación con OpenTelemetry y registros estructurados en todas las etapas del pipeline."
  },
  {
    term: "Deterministic Controlled Workflows",
    shortDefinition: "Flujos de agentes con máquinas de estados finitos, transiciones explícitas y validación formal de entradas y salidas, evitando bucles infinitos estocásticos.",
    contrastingAntiPattern: "Agentes autónomos sin límites de transición de estado ni criterios formales de parada.",
    operationalBoundary: "Adoptado en procesos empresariales donde cada decisión automatizada debe ser reproducible y auditable."
  }
];

export const getVocabularyTerms = (lang: Language): VocabularyTerm[] => {
  switch (lang) {
    case 'en': return VOCAB_EN;
    case 'es': return VOCAB_ES;
    default: return VOCAB_PT;
  }
};

export const VOCABULARY_TERMS = VOCAB_PT;

/* =========================================================================
   ARTICLES BY LANGUAGE
   ========================================================================= */

const ARTICLES_PT: Article[] = [
  {
    id: "traditional-rag-to-trusted-retrieval",
    title: "Do RAG Tradicional à Recuperação Verificada: Por que a Busca Vetorial Pura Falha na Empresa",
    category: "whitepaper",
    readingTime: "8 min de leitura",
    readTime: "8 min de leitura",
    publishedDate: "Edição 2026",
    publicationDate: "2026",
    tags: ["RAG", "Busca Híbrida", "Bancos Vetoriais", "IA Corporativa"],
    abstract: "Uma análise técnica sobre as limitações fundamentais da busca vetorial baseada exclusivamente em embeddings e como a recuperação híbrida com rerankers neurais e validação de proveniência resolve alucinações em sistemas corporativos.",
    keyTakeaways: [
      "Embeddings densos capturam similaridade semântica, mas frequentemente falham em termos técnicos exatos, acrônimos e códigos regulatórios.",
      "A fusão Reciprocal Rank Fusion (RRF) combinando BM25 esparso e vetores densos supera abordagens puras em precisão de recuperação.",
      "Rerankers neurais baseados em cross-encoders fornecem a discriminação necessária para eliminar ruídos antes da síntese."
    ],
    bodySections: [
      {
        heading: "A Ilusão da Similaridade de Cosseno",
        content: "A maioria das implementações convencionais de RAG presume que a distância vetorial é um substituto perfeito para relevância factual. Na prática corporativa, normas jurídicas, regulatórias e contratos utilizam termos precisos onde uma única palavra muda completamente a interpretação de um parágrafo."
      },
      {
        heading: "Arquitetura em Duas Etapas",
        content: "Para mitigar esse problema, adotamos uma arquitetura de recuperação em duas etapas com fusão léxica/densa e reranking neural.",
        codeSnippet: "# Reciprocal Rank Fusion (k=60)\nscore = (1.0 / (60 + rank_dense)) + (1.0 / (60 + rank_bm25))"
      },
      {
        heading: "Validação por Offset de Caracteres",
        content: "Nenhuma resposta de IA pode ser considerada confiável se o sistema não puder apontar o intervalo exato de caracteres no documento primário que fundamenta aquela declaração."
      }
    ],
    conclusions: "A busca vetorial ingênua não atende às exigências de conformidade corporativa. A engenharia moderna exige pipelines híbridos com reranking e verificação matemática de proveniência.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: TCA-2026-01"
  },
  {
    id: "why-deterministic-search-still-matters",
    title: "Por que a Busca Determinística Continua Essencial em Sistemas de IA Autônomos",
    category: "whitepaper",
    readingTime: "7 min de leitura",
    readTime: "7 min de leitura",
    publishedDate: "Edição 2026",
    publicationDate: "2026",
    tags: ["Busca Determinística", "Agentes Autônomos", "Recuperação de Informação"],
    abstract: "Por que modelos probabilísticos necessitam de âncoras determinísticas imutáveis para evitar desvios cumulativos e como a separação entre recuperação e raciocínio garante estabilidade operacional.",
    keyTakeaways: [
      "Sistemas totalmente probabilísticos acumulam erros estocásticos a cada etapa de raciocínio encadeado.",
      "Âncoras determinísticas atuam como barreiras de contenção que impedem alucinações cumulativas.",
      "A validação de esquemas tipados garante saídas estruturadas consumíveis por outros serviços."
    ],
    bodySections: [
      {
        heading: "O Problema da Deriva Estocástica",
        content: "Quando agentes de IA operam em cadeias complexas de raciocínio sem barreiras de contenção determinísticas, cada pequena incerteza probabilística se multiplica exponencialmente nas decisões subsequentes."
      },
      {
        heading: "Contratos Rígidos com Pydantic V2",
        content: "Forçamos cada etapa do agente a retornar exclusivamente tipos de dados validados por esquemas rígidos, rejeitando execuções malformadas antes que afetem o estado do sistema."
      }
    ],
    conclusions: "A inteligência artificial confiável em produção não substitui os princípios clássicos da engenharia de software — ela os reforça.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: DET-2026-02"
  },
  {
    id: "designing-observable-ai-systems",
    title: "Projetando Sistemas de IA Observáveis: Telemetria, Guardrails e Rastreamento Distribuído",
    category: "whitepaper",
    readingTime: "9 min de leitura",
    readTime: "9 min de leitura",
    publishedDate: "Edição 2026",
    publicationDate: "2026",
    tags: ["Observabilidade", "OpenTelemetry", "Guardrails", "IA de Produção"],
    abstract: "Guia arquitetural para instrumentação de sistemas baseados em modelos neurais, abrangendo métricas de latência, contagem de tokens, pontuações de confiança semântica e auditoria em tempo de execução.",
    keyTakeaways: [
      "Monitorar apenas códigos de status HTTP 200 é insuficiente em sistemas de IA; a qualidade e a fundamentação da resposta devem ser mensuradas.",
      "O padrão OpenTelemetry permite correlacionar chamadas entre serviços tradicionais e provedores de inferência de IA.",
      "Guardrails devem ser implementados como filtros determinísticos com políticas de fallback explícitas."
    ],
    bodySections: [
      {
        heading: "Métricas Semânticas vs Métricas Tradicionais",
        content: "Uma resposta com código 200 OK que contenha alucinações factuais é uma falha de sistema tão grave quanto um erro 500. A observabilidade moderna exige telemetria sobre a fundamentação e a confiança dos dados gerados."
      }
    ],
    conclusions: "Observabilidade real não é um painel decorativo: é a capacidade de auditar cada decisão tomada por um sistema inteligente.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: OBS-2026-03"
  },
  {
    id: "production-readiness-checklist",
    title: "Prontidão de Produção para Aplicações de IA: O Padrão de Engenharia em 10 Pontos",
    category: "whitepaper",
    readingTime: "10 min de leitura",
    readTime: "10 min de leitura",
    publishedDate: "Edição 2026",
    publicationDate: "2026",
    tags: ["Prontidão de Produção", "Padrões de Engenharia", "Governança"],
    abstract: "O checklist definitivo que governa o ciclo de vida dos sistemas Trimindslabs antes da liberação operacional, cobrindo testes, isolamento de dados, custos e contingência.",
    keyTakeaways: [
      "Nenhum sistema é promovido a produção sem suíte de testes de regressão e validação estrutural de dados.",
      "A jurisdição de armazenamento e processamento de dados deve ser explicitamente qualificada.",
      "Estratégias de fallback devem estar ativas para garantir continuidade de negócio em caso de indisponibilidade de modelos."
    ],
    bodySections: [
      {
        heading: "Os 10 Pontos de Prontidão",
        content: "Cobrimos desde a verificação de coerência arquitetural e contratos de tipo até políticas de segurança em conformidade com os regulamentos europeus de dados."
      }
    ],
    conclusions: "A maturidade em engenharia é demonstrada pela disciplina com que os sistemas são auditados e mantidos em produção.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: PRD-2026-04"
  },
  {
    id: "detector-hallucination",
    title: "DetectorHallucination — Laboratório de Pesquisa em Verificação de Alegações de IA",
    category: "lab",
    readingTime: "Laboratório Ativo",
    readTime: "Laboratório Ativo",
    publishedDate: "Laboratório Ativo",
    publicationDate: "Laboratório Ativo",
    tags: ["Laboratório de Pesquisa", "Verificação de Alegações", "Detecção de Alucinações"],
    abstract: "Ambiente experimental focado no desenvolvimento de técnicas algorítmicas para decompor respostas de modelos de linguagem em alegações atômicas e verificar sua fundamentação contra corpora de referência.",
    keyTakeaways: [
      "Decomposição de parágrafos em sentenças lógicas atômicas verificáveis de forma independente.",
      "Matriz de evidência avaliando contradições, suporte direto ou ausência de embasamento documental.",
      "Base de testes para aprimoramento dos loops de verificação do Trusted Compliance Agent."
    ],
    bodySections: [
      {
        heading: "Metodologia de Verificação",
        content: "O laboratório testa algoritmos de segmentação lógica que isolam cada afirmação substantiva e executam buscas cruzadas de validação contra fontes oficiais indexadas."
      }
    ],
    conclusions: "Resultados obtidos no laboratório alimentam diretamente as barreiras de contenção determinísticas dos sistemas em produção.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-DET-01"
  },
  {
    id: "eye-guardian",
    title: "EyeGuardian — Laboratório de Pesquisa em Visão Computacional Assistiva",
    category: "lab",
    readingTime: "Laboratório Ativo",
    readTime: "Laboratório Ativo",
    publishedDate: "Laboratório Ativo",
    publicationDate: "Laboratório Ativo",
    tags: ["Laboratório de Pesquisa", "Visão Computacional", "Tecnologia Assistiva"],
    abstract: "Projeto experimental explorando modelos de detecção de objetos de baixa latência e segmentação em tempo real para auxílio à navegação espacial e reconhecimento de obstáculos.",
    keyTakeaways: [
      "Otimização de modelos leves para execução em dispositivos móveis e embarcados com baixo consumo energético.",
      "Geração de alertas espaciais com base em proximidade e probabilidade de colisão.",
      "Pesquisa aplicada que originou as técnicas de inferência móvel utilizadas no módulo de chão de fábrica do TLP."
    ],
    bodySections: [
      {
        heading: "Inferência em Dispositivos de Borda",
        content: "Investigação sobre quantização INT8 e compilação especializada para aceleradores neurais móveis (NPU), priorizando estabilidade de taxa de quadros e baixa dissipação térmica."
      }
    ],
    conclusions: "Demonstra como a pesquisa em visão computacional na borda gera soluções práticas tanto assistivas quanto industriais.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-EYE-02"
  }
];

const ARTICLES_EN: Article[] = [
  {
    id: "traditional-rag-to-trusted-retrieval",
    title: "From Traditional RAG to Trusted Retrieval: Why Naive Vector Search Fails in Enterprise AI",
    category: "whitepaper",
    readingTime: "8 min read",
    readTime: "8 min read",
    publishedDate: "2026 Edition",
    publicationDate: "2026",
    tags: ["RAG", "Hybrid Search", "Vector Databases", "Enterprise AI"],
    abstract: "A rigorous technical analysis exploring why embeddings-only retrieval collapses in regulated enterprise environments and how hybrid retrieval with cross-encoder rerankers and character provenance eliminates hallucinations.",
    keyTakeaways: [
      "Dense embeddings capture broad semantic similarity but fail on exact technical nomenclature, acronyms, and statutory legal article codes.",
      "Reciprocal Rank Fusion (RRF) combining sparse BM25 and dense Qdrant vectors consistently outperforms single-modality retrievers.",
      "Cross-encoder neural rerankers provide the necessary discriminatory precision to prune noisy context prior to synthesis."
    ],
    bodySections: [
      {
        heading: "The Cosine Similarity Fallacy",
        content: "Standard RAG implementations assume vector distance is a surrogate for factual accuracy. In enterprise legal and regulatory contracts, exact terminology governs liability where a single word completely alters legal obligations."
      },
      {
        heading: "Two-Stage Retrieval Pipeline",
        content: "To overcome vector drift, we enforce a two-stage hybrid retrieval architecture fusing lexical precision with semantic density.",
        codeSnippet: "# Reciprocal Rank Fusion (k=60)\nscore = (1.0 / (60 + rank_dense)) + (1.0 / (60 + rank_bm25))"
      },
      {
        heading: "Character-Offset Provenance",
        content: "No AI output is considered verified unless the system maps each generated assertion back to the exact character bounding spans in primary source documents."
      }
    ],
    conclusions: "Naive vector retrieval is fundamentally insufficient for enterprise compliance. Modern systems engineering requires hybrid pipelines with cross-encoders and mathematical provenance verification.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: TCA-2026-01"
  },
  {
    id: "why-deterministic-search-still-matters",
    title: "Why Deterministic Search Still Matters in Autonomous AI Systems",
    category: "whitepaper",
    readingTime: "7 min read",
    readTime: "7 min read",
    publishedDate: "2026 Edition",
    publicationDate: "2026",
    tags: ["Deterministic Search", "Autonomous Agents", "Information Retrieval"],
    abstract: "Why probabilistic models require immutable deterministic anchors to prevent cumulative reasoning drift and how decoupling retrieval from inference guarantees production stability.",
    keyTakeaways: [
      "Fully probabilistic multi-step agent systems compound stochastic errors at every reasoning transition.",
      "Deterministic search anchors serve as immutable guardrails that halt compounding hallucinations.",
      "Typed schema contracts guarantee structured payloads that downstream microservices can safely consume."
    ],
    bodySections: [
      {
        heading: "The Compounding Stochastic Drift Problem",
        content: "When AI agents execute multi-step tool workflows without deterministic bounding gates, small probabilistic deviations multiply exponentially in subsequent decisions."
      },
      {
        heading: "Strict Contracts with Pydantic V2",
        content: "We force every workflow transition to output strictly typed schemas, rejecting malformed responses before they mutate system state."
      }
    ],
    conclusions: "Trustworthy enterprise AI does not discard classical software engineering principles — it enforces them with greater discipline.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: DET-2026-02"
  },
  {
    id: "designing-observable-ai-systems",
    title: "Designing Observable AI Systems: Telemetry, Guardrails, and Distributed Tracing",
    category: "whitepaper",
    readingTime: "9 min read",
    readTime: "9 min read",
    publishedDate: "2026 Edition",
    publicationDate: "2026",
    tags: ["Observability", "OpenTelemetry", "Guardrails", "Production AI"],
    abstract: "An architectural guide for instrumenting neural systems, spanning latency metrics, token consumption, semantic grounding confidence scores, and runtime execution contract verification.",
    keyTakeaways: [
      "Monitoring HTTP 200 status codes is inadequate in AI systems; factual grounding and semantic confidence must be measured.",
      "OpenTelemetry standards allow end-to-end trace correlation between enterprise backends and model inference endpoints.",
      "Guardrails must be designed as deterministic filters with explicit fallback policies."
    ],
    bodySections: [
      {
        heading: "Semantic Metrics vs Traditional Telemetry",
        content: "An HTTP 200 response that contains legal hallucinations is as severe an outage as an HTTP 500 server crash. Production observability requires telemetry tracking the factual basis of generated assertions."
      }
    ],
    conclusions: "Genuine observability is not a cosmetic dashboard: it is the operational capability to audit every decision executed by an intelligent system.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: OBS-2026-03"
  },
  {
    id: "production-readiness-checklist",
    title: "Production Readiness for AI Applications: The Trimindslabs 10-Point Engineering Standard",
    category: "whitepaper",
    readingTime: "10 min read",
    readTime: "10 min read",
    publishedDate: "2026 Edition",
    publicationDate: "2026",
    tags: ["Production Readiness", "Engineering Standards", "Governance"],
    abstract: "The definitive checklist governing Trimindslabs systems before release, spanning automated regression suites, data isolation, inference cost containment, and operational fallback.",
    keyTakeaways: [
      "No system transitions to production without automated regression test suites and structural data validation.",
      "Data residency, encryption enclaves, and cloud jurisdictions must be explicitly certified.",
      "Deterministic fallback pathways must be active to ensure business continuity during model outages."
    ],
    bodySections: [
      {
        heading: "The 10 Readiness Criteria",
        content: "Covering architectural coherence verification, strict type contracts, and data residency in full compliance with European privacy standards."
      }
    ],
    conclusions: "Engineering maturity is demonstrated by the rigorous discipline with which production systems are audited and maintained.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: PRD-2026-04"
  },
  {
    id: "detector-hallucination",
    title: "DetectorHallucination — Research Laboratory for AI Claim Verification",
    category: "lab",
    readingTime: "Active Research Lab",
    readTime: "Active Research Lab",
    publishedDate: "Active Research Lab",
    publicationDate: "Active Research Lab",
    tags: ["Research Lab", "Claim Verification", "Hallucination Detection"],
    abstract: "Experimental research facility developing algorithmic techniques to decompose generative responses into atomic claims and verify their factual support against reference corpora.",
    keyTakeaways: [
      "Decomposes paragraphs into independently verifiable atomic logical claims.",
      "Evaluates evidence matrices distinguishing between direct support, contradictions, and ungrounded statements.",
      "Serves as the empirical testing ground for verification loops deployed in the Trusted Compliance Agent."
    ],
    bodySections: [
      {
        heading: "Verification Methodology",
        content: "The lab tests logical segmentation algorithms that isolate individual assertions and execute cross-referencing queries against authoritative reference corpora."
      }
    ],
    conclusions: "Empirical findings from this laboratory directly inform the deterministic guardrail barriers built into our production platforms.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-DET-01"
  },
  {
    id: "eye-guardian",
    title: "EyeGuardian — Research Laboratory for Assistive Computer Vision",
    category: "lab",
    readingTime: "Active Research Lab",
    readTime: "Active Research Lab",
    publishedDate: "Active Research Lab",
    publicationDate: "Active Research Lab",
    tags: ["Research Lab", "Computer Vision", "Assistive Technology"],
    abstract: "Applied research project exploring low-latency object detection and real-time spatial segmentation models for obstacle avoidance and spatial navigation.",
    keyTakeaways: [
      "Optimizing lightweight neural models for edge devices and mobile processors with low thermal footprint.",
      "Proximity estimation and collision hazard prediction algorithms.",
      "Applied computer vision research that originated the mobile edge inference techniques used in TLP floor counting."
    ],
    bodySections: [
      {
        heading: "Edge Device Inference",
        content: "Investigating INT8 quantization and specialized compilation for mobile neural processing units (NPU), prioritizing steady framerates and minimal battery consumption."
      }
    ],
    conclusions: "Demonstrates how research in edge computer vision translates into robust solutions for both assistive and industrial logistics applications.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-EYE-02"
  }
];

const ARTICLES_ES: Article[] = [
  {
    id: "traditional-rag-to-trusted-retrieval",
    title: "Del RAG Tradicional a la Recuperación Verificada: Por qué la Búsqueda Vectorial Pura Falla en la Empresa",
    category: "whitepaper",
    readingTime: "8 min de lectura",
    readTime: "8 min de lectura",
    publishedDate: "Edición 2026",
    publicationDate: "2026",
    tags: ["RAG", "Búsqueda Híbrida", "Bases Vectoriales", "IA Empresarial"],
    abstract: "Un análisis técnico sobre las limitaciones fundamentales de la búsqueda vectorial basada únicamente en embeddings y cómo la recuperación híbrida con rerankers neurales y procedencia matemática elimina las alucinaciones en entornos corporativos.",
    keyTakeaways: [
      "Los embeddings densos capturan similitud semántica, pero fallan en términos técnicos exactos, siglas y códigos de artículos normativos.",
      "La fusión Reciprocal Rank Fusion (RRF) combinando BM25 disperso y vectores densos supera sistemáticamente a los enfoques puros.",
      "Los rerankers neurales basados en cross-encoders aportan la capacidad de discriminación necesaria para suprimir el ruido contextual."
    ],
    bodySections: [
      {
        heading: "La Falacia de la Similitud de Coseno",
        content: "Las implementaciones habituales de RAG asumen que la distancia vectorial equivale a precisión factual. En contratos y leyes, los términos exactos determinan la responsabilidad civil y penal, donde una palabra altera completamente el sentido de un artículo."
      },
      {
        heading: "Arquitectura en Dos Etapas",
        content: "Para superar el desvío probabilístico, aplicamos una arquitectura de recuperación en dos fases combinando precisión léxica y densidad semántica.",
        codeSnippet: "# Reciprocal Rank Fusion (k=60)\nscore = (1.0 / (60 + rank_dense)) + (1.0 / (60 + rank_bm25))"
      },
      {
        heading: "Validación por Offset de Caracteres",
        content: "Ninguna respuesta generada se considera fiable a menos que el sistema enlace cada aserción con el intervalo exacto de caracteres en la fuente primaria oficial."
      }
    ],
    conclusions: "La búsqueda vectorial ingenua es insuficiente para el cumplimiento corporativo. La ingeniería moderna exige pipelines híbridos con rerankers y validación matemática de procedencia.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: TCA-2026-01"
  },
  {
    id: "why-deterministic-search-still-matters",
    title: "Por qué la Búsqueda Determinista Sigue Siendo Esencial en Sistemas de IA Autónomos",
    category: "whitepaper",
    readingTime: "7 min de lectura",
    readTime: "7 min de lectura",
    publishedDate: "Edición 2026",
    publicationDate: "2026",
    tags: ["Búsqueda Determinista", "Agentes Autónomos", "Recuperación de Información"],
    abstract: "Por qué los modelos probabilísticos requieren anclajes deterministas inmutables para evitar desviaciones acumulativas y cómo desacoplar la recuperación del razonamiento asegura la estabilidad operativa.",
    keyTakeaways: [
      "Los sistemas puramente probabilísticos acumulan errores estocásticos en cada paso de razonamiento en cadena.",
      "Los anclajes deterministas actúan como barreras de contención que detienen las alucinaciones acumulativas.",
      "La validación de esquemas tipados garantiza estructuras de datos consumibles por otros microservicios."
    ],
    bodySections: [
      {
        heading: "El Problema de la Deriva Estocástica",
        content: "Cuando los agentes de IA ejecutan flujos de trabajo de múltiples pasos sin barreras deterministas, las pequeñas desviaciones se multiplican exponencialmente en las decisiones siguientes."
      },
      {
        heading: "Contratos Estrictos con Pydantic V2",
        content: "Obligamos a cada paso del flujo a generar tipos validados por esquemas rígidos, descartando respuestas anómalas antes de que impacten en los datos del sistema."
      }
    ],
    conclusions: "La IA confiable en producción no sustituye los principios clásicos de la ingeniería de software: los exige con mayor rigor.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: DET-2026-02"
  },
  {
    id: "designing-observable-ai-systems",
    title: "Diseñando Sistemas de IA Observables: Telemetría, Guardrails y Trazabilidad Distribuida",
    category: "whitepaper",
    readingTime: "9 min de lectura",
    readTime: "9 min de lectura",
    publishedDate: "Edición 2026",
    publicationDate: "2026",
    tags: ["Observabilidad", "OpenTelemetry", "Guardrails", "IA en Producción"],
    abstract: "Guía arquitectónica para instrumentar sistemas neuronales, abarcando latencia, consumo de tokens, puntuaciones de confianza semántica y verificación de contratos de ejecución.",
    keyTakeaways: [
      "Monitorear únicamente códigos de respuesta HTTP 200 es insuficiente en IA; la base factual de la respuesta debe ser cuantificada.",
      "El estándar OpenTelemetry permite correlacionar peticiones entre servicios convencionales y llamadas de inferencia de modelos.",
      "Los guardrails deben estructurarse como filtros deterministas con políticas explícitas de contingencia."
    ],
    bodySections: [
      {
        heading: "Métricas Semánticas vs Telemetría Tradicional",
        content: "Una respuesta con código HTTP 200 que contenga alucinaciones legales es un fallo tan crítico como una caída de servidor. La observabilidad moderna exige telemetría sobre el fundamento y la veracidad de los datos generados."
      }
    ],
    conclusions: "La observabilidad real no es un panel decorativo: es la capacidad operativa de auditar cada decisión ejecutada por un sistema inteligente.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: OBS-2026-03"
  },
  {
    id: "production-readiness-checklist",
    title: "Preparación para Producción en Aplicaciones de IA: El Estándar de Ingeniería en 10 Puntos",
    category: "whitepaper",
    readingTime: "10 min de lectura",
    readTime: "10 min de lectura",
    publishedDate: "Edición 2026",
    publicationDate: "2026",
    tags: ["Preparación para Producción", "Estándares de Ingeniería", "Gobernanza"],
    abstract: "La lista de control definitiva que rige el ciclo de vida de los sistemas Trimindslabs antes de su despliegue, cubriendo pruebas, aislamiento de datos, control de costes y planes de contingencia.",
    keyTakeaways: [
      "Ningún sistema pasa a producción sin baterías de pruebas de regresión automatizadas y validación estructural de datos.",
      "La jurisdicción territorial y el aislamiento de datos deben certificarse explícitamente.",
      "Los caminos deterministas de contingencia deben estar activos para garantizar continuidad operativa ante caídas de modelos."
    ],
    bodySections: [
      {
        heading: "Los 10 Criterios de Preparación",
        content: "Abarcan desde la coherencia arquitectónica y los contratos de tipo hasta la protección de datos conforme a la normativa europea."
      }
    ],
    conclusions: "La madurez en ingeniería se demuestra por la disciplina con la que los sistemas se auditan y se mantienen en producción.",
    doiOrReference: "Trimindslabs Technical Whitepaper Series — Ref: PRD-2026-04"
  },
  {
    id: "detector-hallucination",
    title: "DetectorHallucination — Laboratorio de Investigación en Verificación de Asertos de IA",
    category: "lab",
    readingTime: "Laboratorio Activo",
    readTime: "Laboratorio Activo",
    publishedDate: "Laboratorio Activo",
    publicationDate: "Laboratorio Activo",
    tags: ["Laboratorio de Investigación", "Verificación de Asertos", "Detección de Alucinaciones"],
    abstract: "Entorno experimental dedicado al desarrollo de técnicas algorítmicas para descomponer respuestas generativas en asertos atómicos y contrastar su veracidad con corpus de referencia.",
    keyTakeaways: [
      "Descompone párrafos en proposiciones lógicas atómicas verificables de manera aislada.",
      "Evalúa matrices de evidencia distinguiendo entre soporte directo, contradicciones y ausencia de respaldo documental.",
      "Actúa como banco de pruebas para optimizar los bucles de verificación del Trusted Compliance Agent."
    ],
    bodySections: [
      {
        heading: "Metodología de Verificación",
        content: "El laboratorio evalúa algoritmos de segmentación lógica que aíslan cada afirmación substantiva y realizan búsquedas cruzadas de contraste con fuentes primarias oficiales."
      }
    ],
    conclusions: "Los descubrimientos de este laboratorio nutren directamente las barreras de contención deterministas desplegadas en nuestras plataformas en producción.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-DET-01"
  },
  {
    id: "eye-guardian",
    title: "EyeGuardian — Laboratorio de Investigación en Visión Artificial Asistencial",
    category: "lab",
    readingTime: "Laboratorio Activo",
    readTime: "Laboratorio Activo",
    publishedDate: "Laboratorio Activo",
    publicationDate: "Laboratorio Activo",
    tags: ["Laboratorio de Investigación", "Visión Artificial", "Tecnología Asistencial"],
    abstract: "Proyecto de investigación aplicada que estudia modelos de detección de objetos de baja latencia y segmentación en tiempo real para asistencia en navegación espacial y esquiva de obstáculos.",
    keyTakeaways: [
      "Optimización de modelos ligeros para dispositivos móviles y hardware embebido con bajo consumo térmico.",
      "Algoritmos de cálculo de proximidad y estimación de riesgo de impacto.",
      "Investigación aplicada que dio origen a las técnicas de inferencia móvil empleadas en el módulo de conteo en planta de TLP."
    ],
    bodySections: [
      {
        heading: "Inferencia en Dispositivos en el Borde",
        content: "Investigación sobre cuantización INT8 y compilación para aceleradores neuronales móviles (NPU), priorizando tasas estables de fotogramas por segundo y bajo consumo energético."
      }
    ],
    conclusions: "Evidencia cómo la investigación en visión artificial en el borde se transforma en soluciones prácticas tanto asistenciales como industriales.",
    doiOrReference: "Trimindslabs Research Lab — Ref: LAB-EYE-02"
  }
];

export const getArticles = (lang: Language): Article[] => {
  switch (lang) {
    case 'en': return ARTICLES_EN;
    case 'es': return ARTICLES_ES;
    default: return ARTICLES_PT;
  }
};

export const getProjects = (lang: Language): Project[] => {
  switch (lang) {
    case 'en': return PROJECTS_EN;
    case 'es': return PROJECTS_ES;
    default: return PROJECTS_PT;
  }
};

export const ARTICLES = ARTICLES_PT;

/* =========================================================================
   OPERATIONAL SYSTEMS BY LANGUAGE
   ========================================================================= */

const OPERATIONAL_PT: OperationalSystem[] = [
  { name: 'Trimindslabs Geo-AI (V4)', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operacional', version: 'v4', stack: 'Python · FastAPI · PyTorch', evidenceSource: 'Cloud Run v4 online e README atual com separação entre deployment operacional e demo local' },
  { name: 'Compliance Evidence Engine', runtime: 'GCP Cloud Run / Cloud SQL', stage: 'Implantado para validação', version: 'current', stack: 'FastAPI · PostgreSQL/pgvector · CrossEncoder', evidenceSource: 'Runtime implantado e pipeline document-grounded com TRUSTED / GENERATED / ABSTAIN' },
  { name: 'TLP Next-Gen', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operacional', version: 'current', stack: 'Java · Spring Boot · React · PostgreSQL 16', evidenceSource: 'Serviço Cloud Run funcional com Cloud SQL PostgreSQL 16' },
  { name: 'Trimindslabs Security Layer', runtime: 'Java 21 · Spring Boot 3.4', stage: 'Em validação', version: 'v1', stack: 'Spring Security · OPA · PostgreSQL · Redis', evidenceSource: 'Core arquitetural e CI verificados; integração e deployment ainda em evolução' },
  { name: 'Trimindslabs AI Cloud Administrator', runtime: 'Node.js · Express', stage: 'MVP operacional / WIP', version: 'current', stack: 'React 19 · TypeScript · AWS SDKs · Gemini opcional', evidenceSource: 'AWS real quando configurado; Azure/GCP/OCI permanecem NOT_CONFIGURED' },
  { name: 'Triminds Integration Platform (TIP)', runtime: 'Node.js · Express', stage: 'Em validação', version: 'current', stack: 'TypeScript 5.8 · React 19 · Express 4', evidenceSource: 'Dispatch REST/Webhook real; demais conectores e infraestrutura distribuída ainda não configurados' },
];

const OPERATIONAL_EN: OperationalSystem[] = [
  { name: 'Trimindslabs Geo-AI (V4)', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operational', version: 'v4', stack: 'Python · FastAPI · PyTorch', evidenceSource: 'Online Cloud Run v4 and current README separating operational deployment from local demo' },
  { name: 'Compliance Evidence Engine', runtime: 'GCP Cloud Run / Cloud SQL', stage: 'Deployed for validation', version: 'current', stack: 'FastAPI · PostgreSQL/pgvector · CrossEncoder', evidenceSource: 'Deployed runtime and document-grounded TRUSTED / GENERATED / ABSTAIN pipeline' },
  { name: 'TLP Next-Gen', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operational', version: 'current', stack: 'Java · Spring Boot · React · PostgreSQL 16', evidenceSource: 'Functional Cloud Run service with Cloud SQL PostgreSQL 16' },
  { name: 'Trimindslabs Security Layer', runtime: 'Java 21 · Spring Boot 3.4', stage: 'In validation', version: 'v1', stack: 'Spring Security · OPA · PostgreSQL · Redis', evidenceSource: 'Core architecture and CI verified; integration and deployment remain in progress' },
  { name: 'Trimindslabs AI Cloud Administrator', runtime: 'Node.js · Express', stage: 'Operational MVP / WIP', version: 'current', stack: 'React 19 · TypeScript · AWS SDKs · Optional Gemini', evidenceSource: 'Real AWS when configured; Azure/GCP/OCI remain NOT_CONFIGURED' },
  { name: 'Triminds Integration Platform (TIP)', runtime: 'Node.js · Express', stage: 'In validation', version: 'current', stack: 'TypeScript 5.8 · React 19 · Express 4', evidenceSource: 'Real REST/Webhook dispatch; other connectors and distributed infrastructure remain unconfigured' },
];

const OPERATIONAL_ES: OperationalSystem[] = [
  { name: 'Trimindslabs Geo-AI (V4)', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operativo', version: 'v4', stack: 'Python · FastAPI · PyTorch', evidenceSource: 'Cloud Run v4 online y README actual que separa deployment operativo y demo local' },
  { name: 'Compliance Evidence Engine', runtime: 'GCP Cloud Run / Cloud SQL', stage: 'Desplegado para validación', version: 'current', stack: 'FastAPI · PostgreSQL/pgvector · CrossEncoder', evidenceSource: 'Runtime desplegado y pipeline document-grounded con TRUSTED / GENERATED / ABSTAIN' },
  { name: 'TLP Next-Gen', runtime: 'GCP Cloud Run (europe-west1)', stage: 'Operativo', version: 'current', stack: 'Java · Spring Boot · React · PostgreSQL 16', evidenceSource: 'Servicio Cloud Run funcional con Cloud SQL PostgreSQL 16' },
  { name: 'Trimindslabs Security Layer', runtime: 'Java 21 · Spring Boot 3.4', stage: 'En validación', version: 'v1', stack: 'Spring Security · OPA · PostgreSQL · Redis', evidenceSource: 'Core arquitectónico y CI verificados; integración y deployment siguen en evolución' },
  { name: 'Trimindslabs AI Cloud Administrator', runtime: 'Node.js · Express', stage: 'MVP operativo / WIP', version: 'current', stack: 'React 19 · TypeScript · AWS SDKs · Gemini opcional', evidenceSource: 'AWS real cuando está configurado; Azure/GCP/OCI permanecen NOT_CONFIGURED' },
  { name: 'Triminds Integration Platform (TIP)', runtime: 'Node.js · Express', stage: 'En validación', version: 'current', stack: 'TypeScript 5.8 · React 19 · Express 4', evidenceSource: 'Dispatch REST/Webhook real; otros conectores e infraestructura distribuida siguen sin configurar' },
];

export const getOperationalSystems = (lang: Language): OperationalSystem[] => {
  switch (lang) {
    case 'en': return OPERATIONAL_EN;
    case 'es': return OPERATIONAL_ES;
    default: return OPERATIONAL_PT;
  }
};

/* =========================================================================
   ARCHITECTURE PILLARS BY LANGUAGE
   ========================================================================= */

const ARCH_PT: ArchitecturePillar[] = [
  {
    num: "01",
    title: "Busca Híbrida & Proveniência Exata",
    summary: "Fusão de busca léxica (BM25) e vetorial densa (Qdrant), rerankeada com BGE-Reranker-Large e validada por hash SHA-256 de caracteres.",
    details: [
      "Eliminação de alucinações jurídicas sob o EU AI Act",
      "Citação rastreável até o parágrafo da diretiva oficial",
      "Rejeição automática de respostas sem correspondência exata"
    ]
  },
  {
    num: "02",
    title: "Arquitetura Hexagonal & Zero Trust",
    summary: "Isolamento estrito entre núcleo de domínio, adaptadores de banco e políticas de acesso (OPA), garantindo portabilidade entre nuvens.",
    details: [
      "Testes arquiteturais com ArchUnit em Java 21",
      "Controle de acesso granular baseado em atributos (ABAC)",
      "Isolamento criptográfico de credenciais via Keyring Vault"
    ]
  },
  {
    num: "03",
    title: "Workflows Agênticos Determinísticos",
    summary: "Agentes com máquina de estados finita, validação estrita de esquemas Pydantic V2 e limites rígidos de execução, impedindo loops estocásticos.",
    details: [
      "Orquestração multi-nuvem via Model Context Protocol (MCP)",
      "Contratos explícitos de payload sem mutabilidade silenciosa",
      "Trilhas de auditoria criptograficamente assinadas"
    ]
  },
  {
    num: "04",
    title: "Ingestão Geoespacial Multiespectral",
    summary: "Pipelines paralelas com GDAL e Rasterio para processar rasters de 12 bandas Sentinel-2 L2A com PostGIS e GPUs dedicadas em Cloud Run.",
    details: [
      "Refinamento de bordas sub-pixel para polígonos agrícolas",
      "Índices de vegetação determinísticos (NDVI, NDWI, SAVI)",
      "Processamento contínuo de coberturas e corredores territoriais"
    ]
  }
];

const ARCH_EN: ArchitecturePillar[] = [
  {
    num: "01",
    title: "Hybrid Search & Exact Provenance",
    summary: "Fusion of lexical search (BM25) and dense vectors (Qdrant), reranked with BGE-Reranker-Large and validated by character-level SHA-256 hashing.",
    details: [
      "Elimination of regulatory hallucinations under the EU AI Act",
      "Traceable citation down to the exact clause in official directives",
      "Automated rejection of responses lacking exact source matches"
    ]
  },
  {
    num: "02",
    title: "Hexagonal Architecture & Zero Trust",
    summary: "Strict isolation between pure domain core, database adapters, and Open Policy Agent (OPA) rules, ensuring multi-cloud portability.",
    details: [
      "Automated architectural tests with ArchUnit in Java 21",
      "Granular Attribute-Based Access Control (ABAC) enforcement",
      "Cryptographic credential isolation using native Keyring Vaults"
    ]
  },
  {
    num: "03",
    title: "Deterministic Controlled Workflows",
    summary: "Agent pipelines governed by finite state machines, strict Pydantic V2 schema validation, and hard execution bounds preventing stochastic loops.",
    details: [
      "Multi-cloud tool orchestration via Model Context Protocol (MCP)",
      "Explicit data payload contracts with zero silent mutability",
      "Cryptographically signed, tamper-evident audit trails"
    ]
  },
  {
    num: "04",
    title: "Multi-Spectral Geospatial Ingestion",
    summary: "Parallel worker pipelines with GDAL and Rasterio processing 12-band Sentinel-2 L2A rasters using PostGIS and dedicated Cloud Run GPUs.",
    details: [
      "Sub-pixel boundary refinement for agricultural polygons",
      "Deterministic vegetation indices calculation (NDVI, NDWI, SAVI)",
      "Continuous processing of territorial corridors and land-use rasters"
    ]
  }
];

const ARCH_ES: ArchitecturePillar[] = [
  {
    num: "01",
    title: "Búsqueda Híbrida y Procedencia Exacta",
    summary: "Fusión de búsqueda léxica (BM25) y vectorial densa (Qdrant), rerankeada con BGE-Reranker-Large y validada mediante hash SHA-256 de caracteres.",
    details: [
      "Eliminación de alucinaciones regulatorias bajo el EU AI Act",
      "Cita rastreable hasta el párrafo exacto de la directiva oficial",
      "Rechazo automático de respuestas sin correspondencia textual exacta"
    ]
  },
  {
    num: "02",
    title: "Arquitectura Hexagonal y Zero Trust",
    summary: "Aislamiento estricto entre núcleo de dominio, adaptadores de datos y políticas de acceso (OPA), garantizando portabilidad entre nubes.",
    details: [
      "Pruebas arquitectónicas con ArchUnit en Java 21",
      "Control de acceso granular basado en atributos (ABAC)",
      "Aislamiento criptográfico de credenciales mediante Keyring Vault"
    ]
  },
  {
    num: "03",
    title: "Flujos Agénticos Deterministas",
    summary: "Agentes con máquinas de estados finitos, validación estricta de esquemas Pydantic V2 y límites rígidos de ejecución, evitando bucles estocásticos.",
    details: [
      "Orquestación multi-cloud vía Model Context Protocol (MCP)",
      "Contratos explícitos de carga de datos sin mutabilidad opaca",
      "Registros de auditoría criptográficamente firmados"
    ]
  },
  {
    num: "04",
    title: "Ingesta Geoespacial Multiespectral",
    summary: "Pipelines paralelos con GDAL y Rasterio para procesar rasters de 12 bandas Sentinel-2 L2A con PostGIS y GPUs dedicadas en Cloud Run.",
    details: [
      "Refinamiento de bordes sub-pixel para parcelas agrícolas",
      "Índices de vegetación deterministas (NDVI, NDWI, SAVI)",
      "Procesamiento continuo de coberturas y corredores territoriales"
    ]
  }
];

export const getArchitecturePillars = (lang: Language): ArchitecturePillar[] => {
  switch (lang) {
    case 'en': return ARCH_EN;
    case 'es': return ARCH_ES;
    default: return ARCH_PT;
  }
};

/* =========================================================================
   TRANSLATIONS DICTIONARY
   ========================================================================= */

export const TRANSLATIONS: Record<Language, Record<string, string>> = {
  pt: {
    "nav.home": "Visão Geral",
    "nav.aiSystems": "Sistemas & Produtos",
    "nav.engineering": "Arquitetura",
    "nav.research": "Pesquisa & Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "11 Gates",
    "nav.dashboardCta": "Verificar Estado de Engenharia",
    "nav.switchLang": "Mudar para",
    "nav.auditTooltip": "Verificar os 11 Gates de Produção",
    "nav.gatesMobile": "Auditoria dos 11 Gates de Produção",
    
    "hero.badge": "ENGENHARIA DE SISTEMAS INTELIGENTES",
    "hero.kickerSuffix": "SOBERANIA EU & VERIFICAÇÃO DETERMINÍSTICA",
    "hero.subtitle": "A Trimindslabs projeta plataformas corporativas de software e IA onde falhas estocásticas não são toleradas. Unimos auditoria regulatória com proveniência legal exata, visão computacional geoespacial com satélites reais e rastreabilidade logística de ponta a ponta.",
    "hero.exploreCta": "Conhecer Sistemas & Soluções",
    "hero.dashboardCta": "Verificar Estado de Engenharia",
    "hero.metric1Title": "Validação Determinística",
    "hero.metric1Desc": "Proveniência por offset de caracteres e validação SHA-256",
    "hero.metric2Title": "Dados Sentinel-2 L2A",
    "hero.metric2Desc": "Entradas orbitais reais a 10m/pixel no Geo-AI V4",
    "hero.metric3Title": "Nuvem Europeia",
    "hero.metric3Desc": "Ambientes isolados GCP Cloud Run (europe-west1)",
    "hero.metric4Title": "Critérios de Release",
    "hero.metric4Desc": "11 Gates formais de auditoria técnica e integridade",
    "hero.auditedLabel": "Auditados",

    "domains.kicker": "DOMÍNIOS DE ENGENHARIA",
    "domains.title": "Quatro áreas de engenharia focadas em resolver problemas reais.",
    "domains.subtitle": "Cada sistema responde a desafios concretos onde a precisão, a segurança e a rastreabilidade são pré-requisitos absolutos.",

    "projects.kicker": "SISTEMAS & PRODUTOS CORPORATIVOS",
    "projects.title": "Plataformas desenvolvidas com rigor e transparência.",
    "projects.subtitle": "Conheça o propósito, o problema solucionado e as capacidades de cada sistema. Aprofunde-se na arquitetura e na validação técnica sob demanda.",
    "projects.filterAll": "Todos os Sistemas",
    "projects.filterCompliance": "Conformidade & IA",
    "projects.filterGeospatial": "Geoespacial & Satélite",
    "projects.filterLogistics": "Logística & Borda",
    "projects.filterPlatform": "Plataforma & Nuvem",
    "projects.statusAll": "Todos os estágios",
    "projects.statusOperational": "Operacional em Produção",
    "projects.statusValidation": "Em Validação Contínua",
    "projects.statusSpecification": "Especificação / RFC",
    "projects.searchPlaceholder": "Buscar sistema ou tecnologia...",
    "projects.cardViewCaseStudy": "Conhecer o Sistema",
    "projects.cardViewTechnical": "Especificação Técnica",
    "projects.architectureBtn": "Arquitetura",
    "projects.architectureTitle": "Acessar Especificação de Engenharia",
    "projects.problemTitle": "Problema que resolve:",
    "projects.clearFilters": "Limpar filtros",
    "projects.noResults": "Nenhum sistema encontrado com os filtros selecionados.",

    "projectModal.tabCaseStudy": "1. Estudo de Caso & Solução",
    "projectModal.tabTechnical": "2. Especificação de Engenharia & Arquitetura",
    "projectModal.scopeTitle": "Escopo Operacional & Propósito",
    "projectModal.whatItProves": "O que este sistema comprova: ",
    "projectModal.problemTitle": "O Problema",
    "projectModal.contextTitle": "Contexto de Aplicação",
    "projectModal.capabilitiesTitle": "Capacidades & Validações de Sistema",
    "projectModal.decisionsTitle": "Decisões Críticas de Engenharia",
    "projectModal.advanceToTechnical": "Avançar para Especificação de Engenharia →",
    "projectModal.topologyTitle": "Topologia e Fluxo de Execução",
    "projectModal.auditTitle": "Auditoria de Coerência Arquitetural",
    "projectModal.documentedLabel": "Documentado: ",
    "projectModal.implementedLabel": "Implementado em Código: ",
    "projectModal.presentedLabel": "Declaração Pública: ",
    "projectModal.governanceTitle": "Validação e Governança Técnica",
    "projectModal.testSuiteLabel": "Status da Suíte de Testes:",
    "projectModal.ciPipelineLabel": "Pipeline de Integração Contínua:",
    "projectModal.testSuiteDefault": "Suíte Automatizada Validada",
    "projectModal.ciPipelineDefault": "Pipelines de CI Ativas",
    "projectModal.adrLabel": "Architecture Decision Records (ADRs):",
    "projectModal.techStackTitle": "Stack de Tecnologias em Produção",
    "projectModal.languagesLabel": "Linguagens",
    "projectModal.frameworksLabel": "Frameworks",
    "projectModal.databasesLabel": "Bancos de Dados",
    "projectModal.cloudLabel": "Nuvem & Runtime",
    "projectModal.cicdLabel": "CI/CD & Build",
    "projectModal.observabilityLabel": "Observabilidade",
    "projectModal.evidenceSource": "Fonte de Evidência: ",
    "projectModal.closeBtn": "Fechar",

    "articleModal.abstractTitle": "Resumo do Whitepaper",
    "articleModal.takeawaysTitle": "Principais Conclusões de Engenharia",
    "articleModal.conclusionTitle": "Conclusão & Recomendação de Produção",
    "articleModal.referenceLabel": "Referência: ",
    "articleModal.closeBtn": "Fechar",

    "arch.kicker": "PADRÕES TRANSVERSAIS",
    "arch.title": "Arquitetura de sistemas desenhada para produção real.",
    "arch.subtitle": "Nossa engenharia rejeita atalhos probabilísticos. Implementamos isolamento explícito, verificabilidade ponta a ponta e auditoria rastreável em cada componente.",
    "arch.pillarLabel": "ARQUITETURA",

    "dashboardPreview.kicker": "CAMADA DE TRANSPARÊNCIA & PROVAS",
    "dashboardPreview.title": "Evidências verificáveis e governança de release.",
    "dashboardPreview.subtitle": "Não apenas afirmamos o que foi construído: disponibilizamos dados sobre o estado dos serviços, critérios de release dos 11 Gates e definições técnicas formais.",
    "dashboardPreview.cta": "Verificar Estado de Engenharia",

    "dashboard.kicker": "Camada de Transparência & Evidência",
    "dashboard.tabTelemetry": "1. Ambientes & Estado Operacional",
    "dashboard.tabGates": "2. Matriz de Auditoria (11 Gates)",
    "dashboard.tabReleases": "3. Releases & Repositórios",
    "dashboard.tabVocab": "4. Vocabulário Formal",
    "dashboard.govHeader": "Governança Operacional",
    "dashboard.declaredState": "Estado Declarado dos Ambientes em Produção",
    "dashboard.euBadge": "JURISDIÇÃO EUROPEIA QUALIFICADA",
    "dashboard.evidenceLabel": "Evidência: ",
    "dashboard.auditRef": "Referência Formal de Auditoria: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "dashboard.auditSeparation": "Separação Estrita entre Implementação, Validação e Evidência",
    "dashboard.gatesBadge": "11 GATES VERIFICADOS",
    "dashboard.tableGate": "Gate de Auditoria",
    "dashboard.tablePhase": "Fase",
    "dashboard.tableEvidence": "Evidência Formal",
    "dashboard.tableStatus": "Status",
    "dashboard.codeGovNote": "Nota de Governança de Código: ",
    "dashboard.codeGovText": "O website corporativo prioriza produtos e sistemas. Abaixo consta o mapeamento interno entre os sistemas e seus respectivos artefatos de código.",
    "dashboard.repoPrivate": "Repositório: Privado",
    "dashboard.inspectRepo": "Inspecionar Repositório",
    "dashboard.vocabDefinition": "DEFINIÇÃO TÉCNICA FORMAL",
    "dashboard.antiPatternLabel": "Anti-padrão contrastado: ",
    "dashboard.closeBtn": "Fechar",
    "dashboard.statusVerified": "Verificado",
    "dashboard.statusInProgress": "Em Progresso",
    "dashboard.statusPending": "Pendente",

    "gatesModal.kicker": "Auditoria Formal de Engenharia",
    "gatesModal.title": "Os 11 Gates de Produção",
    "gatesModal.subtitle": "Critérios técnicos e operacionais obrigatórios que regem a separação entre implementação, validação contínua e evidência de produção.",
    "gatesModal.cataloged": "11/11 GATES CATALOGADOS & AUDITADOS NO REPOSITÓRIO",
    "gatesModal.releaseReady": "RELEASE V3 READY",
    "gatesModal.ruleLabel": "Regra: ",
    "gatesModal.closeBtn": "Fechar",

    "research.kicker": "PESQUISA, ARTIGOS & LABS",
    "research.title": "Fundamentação teórica e laboratórios de verificação.",
    "research.subtitle": "Publicações de engenharia detalhando por que abordagens ingênuas falham em escala corporativa e como implementamos controles determinísticos.",
    "research.readArticle": "Ler Whitepaper",
    "research.viewLab": "Ver Laboratório",

    "footer.positioning": "Engenharia de sistemas inteligentes com processamento determinístico, proveniência de citações imutável e governança corporativa de release.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.contact": "Contato Técnico & Comercial",
    "footer.jurisdiction": "JURISDIÇÃO DE DADOS: QUALIFICADA POR SISTEMA (EUROPE-WEST-1 / EUROPE-WEST-3)",
    "footer.gatesAudited": "11 Gates Auditados",
    "footer.dataSovereignty": "Soberania de Dados EU",
    "footer.corpNav": "Navegação Corporativa",
    "footer.releaseAudit": "Auditoria de Release"
  },
  en: {
    "nav.home": "Overview",
    "nav.aiSystems": "Systems & Products",
    "nav.engineering": "Architecture",
    "nav.research": "Research & Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "11 Gates",
    "nav.dashboardCta": "Access Engineering State",
    "nav.switchLang": "Switch to",
    "nav.auditTooltip": "Verify 11 Production Gates",
    "nav.gatesMobile": "11 Production Gates Audit",

    "hero.badge": "INTELLIGENT SYSTEMS ENGINEERING",
    "hero.kickerSuffix": "EU SOVEREIGNTY & DETERMINISTIC VERIFICATION",
    "hero.subtitle": "Trimindslabs designs mission-critical enterprise software and AI platforms where stochastic errors are unacceptable. We combine regulatory compliance with exact legal provenance, geospatial computer vision with real satellites, and end-to-end industrial logistics traceability.",
    "hero.exploreCta": "Explore Systems & Solutions",
    "hero.dashboardCta": "Access Engineering State",
    "hero.metric1Title": "Deterministic Validation",
    "hero.metric1Desc": "Character-offset provenance and SHA-256 block hashing",
    "hero.metric2Title": "Sentinel-2 L2A Data",
    "hero.metric2Desc": "Real orbital inputs at 10m/pixel in Geo-AI V4",
    "hero.metric3Title": "European Cloud",
    "hero.metric3Desc": "Isolated GCP Cloud Run environments (europe-west1)",
    "hero.metric4Title": "Release Criteria",
    "hero.metric4Desc": "11 formal technical and integrity release gates",
    "hero.auditedLabel": "Audited",

    "domains.kicker": "ENGINEERING DOMAINS",
    "domains.title": "Four engineering areas focused on solving real-world challenges.",
    "domains.subtitle": "Every platform answers specific operational bottlenecks where accuracy, compliance, and deterministic execution are non-negotiable.",

    "projects.kicker": "ENTERPRISE SYSTEMS & PRODUCTS",
    "projects.title": "Platforms engineered with rigor and transparency.",
    "projects.subtitle": "Explore the purpose, problem solved, and operational capabilities of each system. Deepen into architecture and technical validation on demand.",
    "projects.filterAll": "All Systems",
    "projects.filterCompliance": "Regulatory & AI",
    "projects.filterGeospatial": "Geospatial & Earth",
    "projects.filterLogistics": "Logistics & Vision",
    "projects.filterPlatform": "Platform & Cloud",
    "projects.statusAll": "All stages",
    "projects.statusOperational": "Operational in Production",
    "projects.statusValidation": "Active Continuous Validation",
    "projects.statusSpecification": "RFC Specification",
    "projects.searchPlaceholder": "Search system or stack...",
    "projects.cardViewCaseStudy": "Explore System",
    "projects.cardViewTechnical": "Technical Specification",
    "projects.architectureBtn": "Architecture",
    "projects.architectureTitle": "Access Engineering Specification",
    "projects.problemTitle": "Problem addressed:",
    "projects.clearFilters": "Clear filters",
    "projects.noResults": "No systems matched the selected filters.",

    "projectModal.tabCaseStudy": "1. Case Study & Solution",
    "projectModal.tabTechnical": "2. Engineering Specification & Architecture",
    "projectModal.scopeTitle": "Operational Scope & Purpose",
    "projectModal.whatItProves": "What it proves: ",
    "projectModal.problemTitle": "The Problem",
    "projectModal.contextTitle": "Operational Context",
    "projectModal.capabilitiesTitle": "System Capabilities & Validations",
    "projectModal.decisionsTitle": "Critical Engineering Decisions",
    "projectModal.advanceToTechnical": "Expand to Engineering Specification →",
    "projectModal.topologyTitle": "Topology and Execution Flow",
    "projectModal.auditTitle": "Architectural Coherence Audit",
    "projectModal.documentedLabel": "Documented: ",
    "projectModal.implementedLabel": "Implemented in Code: ",
    "projectModal.presentedLabel": "Public Statement: ",
    "projectModal.governanceTitle": "Technical Governance & Validation",
    "projectModal.testSuiteLabel": "Test Suite Status:",
    "projectModal.ciPipelineLabel": "Continuous Integration Pipeline:",
    "projectModal.testSuiteDefault": "Automated Suite Validated",
    "projectModal.ciPipelineDefault": "Active CI Pipelines",
    "projectModal.adrLabel": "Architecture Decision Records (ADRs):",
    "projectModal.techStackTitle": "Production Technology Stack",
    "projectModal.languagesLabel": "Languages",
    "projectModal.frameworksLabel": "Frameworks",
    "projectModal.databasesLabel": "Databases",
    "projectModal.cloudLabel": "Cloud & Runtime",
    "projectModal.cicdLabel": "CI/CD & Build",
    "projectModal.observabilityLabel": "Observability",
    "projectModal.evidenceSource": "Evidence Source: ",
    "projectModal.closeBtn": "Close",

    "articleModal.abstractTitle": "Whitepaper Abstract",
    "articleModal.takeawaysTitle": "Key Engineering Takeaways",
    "articleModal.conclusionTitle": "Conclusion & Production Recommendation",
    "articleModal.referenceLabel": "Reference: ",
    "articleModal.closeBtn": "Close",

    "arch.kicker": "TRANSVERSAL STANDARDS",
    "arch.title": "Systems architecture designed for real-world production.",
    "arch.subtitle": "Our engineering rejects stochastic shortcuts in enterprise software. We enforce explicit isolation, immutable audit traces, and mathematical verification across every component.",
    "arch.pillarLabel": "ARCHITECTURE",

    "dashboardPreview.kicker": "TRANSPARENCY & EVIDENCE LAYER",
    "dashboardPreview.title": "Verifiable evidence and release governance.",
    "dashboardPreview.subtitle": "We do not merely assert claims: we provide transparent data on declared service health, formal 11 Gates release criteria, and technical terminology specifications.",
    "dashboardPreview.cta": "Access Engineering State",

    "dashboard.kicker": "Transparency & Evidence Layer",
    "dashboard.tabTelemetry": "1. Environments & Operational State",
    "dashboard.tabGates": "2. Audit Matrix (11 Gates)",
    "dashboard.tabReleases": "3. Releases & Repositories",
    "dashboard.tabVocab": "4. Formal Vocabulary",
    "dashboard.govHeader": "Operational Governance",
    "dashboard.declaredState": "Declared Production Environments State",
    "dashboard.euBadge": "QUALIFIED EUROPEAN JURISDICTION",
    "dashboard.evidenceLabel": "Evidence: ",
    "dashboard.auditRef": "Formal Audit Reference: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "dashboard.auditSeparation": "Strict Decoupling between Implementation, Validation, and Evidence",
    "dashboard.gatesBadge": "11 GATES VERIFIED",
    "dashboard.tableGate": "Audit Gate",
    "dashboard.tablePhase": "Phase",
    "dashboard.tableEvidence": "Formal Evidence",
    "dashboard.tableStatus": "Status",
    "dashboard.codeGovNote": "Code Governance Note: ",
    "dashboard.codeGovText": "The corporate website prioritizes operational systems. Below is the internal mapping between platforms and their respective codebase artifacts.",
    "dashboard.repoPrivate": "Repository: Private",
    "dashboard.inspectRepo": "Inspect Repository",
    "dashboard.vocabDefinition": "FORMAL TECHNICAL DEFINITION",
    "dashboard.antiPatternLabel": "Contrasted Anti-pattern: ",
    "dashboard.closeBtn": "Close",
    "dashboard.statusVerified": "Verified",
    "dashboard.statusInProgress": "In Progress",
    "dashboard.statusPending": "Pending",

    "gatesModal.kicker": "Formal Engineering Audit",
    "gatesModal.title": "The 11 Production Gates",
    "gatesModal.subtitle": "Mandatory technical and operational criteria governing separation between implementation, continuous validation, and production evidence.",
    "gatesModal.cataloged": "11/11 GATES CATALOGED & AUDITED IN REPOSITORY",
    "gatesModal.releaseReady": "RELEASE V3 READY",
    "gatesModal.ruleLabel": "Rule: ",
    "gatesModal.closeBtn": "Close",

    "research.kicker": "RESEARCH, ARTICLES & LABS",
    "research.title": "Theoretical foundations and verification laboratories.",
    "research.subtitle": "Engineering publications detailing why naive approaches fail at enterprise scale and how we implement deterministic guardrails.",
    "research.readArticle": "Read Whitepaper",
    "research.viewLab": "Explore Laboratory",

    "footer.positioning": "Engineering intelligent systems with deterministic processing, immutable citation provenance, and corporate release governance.",
    "footer.rights": "All rights reserved.",
    "footer.contact": "Technical & Business Inquiries",
    "footer.jurisdiction": "DATA JURISDICTION: QUALIFIED PER SYSTEM (EUROPE-WEST-1 / EUROPE-WEST-3)",
    "footer.gatesAudited": "11 Audited Gates",
    "footer.dataSovereignty": "EU Data Sovereignty",
    "footer.corpNav": "Corporate Navigation",
    "footer.releaseAudit": "Release Audit"
  },
  es: {
    "nav.home": "Visión General",
    "nav.aiSystems": "Sistemas y Productos",
    "nav.engineering": "Arquitectura",
    "nav.research": "Investigación y Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "11 Gates",
    "nav.dashboardCta": "Verificar Estado de Ingeniería",
    "nav.switchLang": "Cambiar a",
    "nav.auditTooltip": "Verificar los 11 Gates de Producción",
    "nav.gatesMobile": "Auditoría de los 11 Gates de Producción",

    "hero.badge": "INGENIERÍA DE SISTEMAS INTELIGENTES",
    "hero.kickerSuffix": "SOBERANÍA UE Y VERIFICACIÓN DETERMINISTA",
    "hero.subtitle": "Trimindslabs diseña plataformas empresariales de software e IA donde los fallos estocásticos no están permitidos. Unimos auditoría regulatoria con procedencia legal exacta, visión computacional geoespacial con satélites reales y trazabilidad logística de extremo a extremo.",
    "hero.exploreCta": "Conocer Sistemas y Soluciones",
    "hero.dashboardCta": "Verificar Estado de Ingeniería",
    "hero.metric1Title": "Validación Determinista",
    "hero.metric1Desc": "Procedencia por offset de caracteres y validación SHA-256",
    "hero.metric2Title": "Datos Sentinel-2 L2A",
    "hero.metric2Desc": "Entradas orbitales reales a 10m/pixel en Geo-AI V4",
    "hero.metric3Title": "Nube Europea",
    "hero.metric3Desc": "Entornos aislados GCP Cloud Run (europe-west1)",
    "hero.metric4Title": "Criterios de Release",
    "hero.metric4Desc": "11 Gates formales de auditoría técnica e integridad",
    "hero.auditedLabel": "Auditados",

    "domains.kicker": "DOMINIOS DE INGENIERÍA",
    "domains.title": "Cuatro áreas de ingeniería enfocadas en resolver problemas reales.",
    "domains.subtitle": "Cada sistema responde a retos concretos donde la precisión, la seguridad y la trazabilidad son requisitos indispensables.",

    "projects.kicker": "SISTEMAS Y PRODUCTOS CORPORATIVOS",
    "projects.title": "Plataformas desarrolladas con rigor y transparencia.",
    "projects.subtitle": "Conozca el propósito, el problema solucionado y las capacidades de cada sistema. Profundice en la arquitectura y la validación técnica según su interés.",
    "projects.filterAll": "Todos los Sistemas",
    "projects.filterCompliance": "Cumplimiento e IA",
    "projects.filterGeospatial": "Geoespacial y Satélite",
    "projects.filterLogistics": "Logística y Borde",
    "projects.filterPlatform": "Plataforma y Nube",
    "projects.statusAll": "Todos los estados",
    "projects.statusOperational": "Operativo en Producción",
    "projects.statusValidation": "En Validación Continua",
    "projects.statusSpecification": "Especificación / RFC",
    "projects.searchPlaceholder": "Buscar sistema o tecnología...",
    "projects.cardViewCaseStudy": "Conocer el Sistema",
    "projects.cardViewTechnical": "Especificación Técnica",
    "projects.architectureBtn": "Arquitectura",
    "projects.architectureTitle": "Acceder a Especificación de Ingeniería",
    "projects.problemTitle": "Problema que resuelve:",
    "projects.clearFilters": "Limpiar filtros",
    "projects.noResults": "Ningún sistema encontrado con los filtros seleccionados.",

    "projectModal.tabCaseStudy": "1. Caso de Estudio y Solución",
    "projectModal.tabTechnical": "2. Especificación de Ingeniería y Arquitectura",
    "projectModal.scopeTitle": "Alcance Operativo y Propósito",
    "projectModal.whatItProves": "Lo que demuestra este sistema: ",
    "projectModal.problemTitle": "El Problema",
    "projectModal.contextTitle": "Contexto de Aplicación",
    "projectModal.capabilitiesTitle": "Capacidades y Validaciones del Sistema",
    "projectModal.decisionsTitle": "Decisiones Críticas de Ingeniería",
    "projectModal.advanceToTechnical": "Avanzar a Especificación de Ingeniería →",
    "projectModal.topologyTitle": "Topología y Flujo de Ejecución",
    "projectModal.auditTitle": "Auditoría de Coherencia Arquitectónica",
    "projectModal.documentedLabel": "Documentado: ",
    "projectModal.implementedLabel": "Implementado en Código: ",
    "projectModal.presentedLabel": "Declaración Pública: ",
    "projectModal.governanceTitle": "Validación y Gobernanza Técnica",
    "projectModal.testSuiteLabel": "Estado del Banco de Pruebas:",
    "projectModal.ciPipelineLabel": "Pipeline de Integración Continua:",
    "projectModal.testSuiteDefault": "Banco de Pruebas Automatizado Validado",
    "projectModal.ciPipelineDefault": "Pipelines de CI Activas",
    "projectModal.adrLabel": "Architecture Decision Records (ADRs):",
    "projectModal.techStackTitle": "Stack de Tecnologías en Producción",
    "projectModal.languagesLabel": "Lenguajes",
    "projectModal.frameworksLabel": "Frameworks",
    "projectModal.databasesLabel": "Bases de Datos",
    "projectModal.cloudLabel": "Nube y Runtime",
    "projectModal.cicdLabel": "CI/CD y Build",
    "projectModal.observabilityLabel": "Observabilidad",
    "projectModal.evidenceSource": "Fuente de Evidencia: ",
    "projectModal.closeBtn": "Cerrar",

    "articleModal.abstractTitle": "Resumen del Whitepaper",
    "articleModal.takeawaysTitle": "Principales Conclusiones de Ingeniería",
    "articleModal.conclusionTitle": "Conclusión y Recomendación de Producción",
    "articleModal.referenceLabel": "Referencia: ",
    "articleModal.closeBtn": "Cerrar",

    "arch.kicker": "ESTÁNDARES TRANSVERSALES",
    "arch.title": "Arquitectura de sistemas diseñada para producción real.",
    "arch.subtitle": "Nuestra ingeniería rechaza atajos probabilísticos. Implementamos aislamiento explícito, verificabilidad total y auditoría rastreable en cada componente.",
    "arch.pillarLabel": "ARQUITECTURA",

    "dashboardPreview.kicker": "CAPA DE TRANSPARENCIA Y PRUEBAS",
    "dashboardPreview.title": "Evidencias verificables y gobernanza de release.",
    "dashboardPreview.subtitle": "No solo afirmamos lo construido: proporcionamos datos transparentes sobre el estado de los servicios, criterios de release de los 11 Gates y terminología técnica formal.",
    "dashboardPreview.cta": "Verificar Estado de Ingeniería",

    "dashboard.kicker": "Capa de Transparencia y Evidencia",
    "dashboard.tabTelemetry": "1. Entornos y Estado Operativo",
    "dashboard.tabGates": "2. Matriz de Auditoría (11 Gates)",
    "dashboard.tabReleases": "3. Releases y Repositorios",
    "dashboard.tabVocab": "4. Vocabulario Formal",
    "dashboard.govHeader": "Gobernanza Operativa",
    "dashboard.declaredState": "Estado Declarado de los Entornos en Producción",
    "dashboard.euBadge": "JURISDICCIÓN EUROPEA CUALIFICADA",
    "dashboard.evidenceLabel": "Evidencia: ",
    "dashboard.auditRef": "Referencia Formal de Auditoría: TRIMINDSLABS-AUDIT-RELEASE-2026",
    "dashboard.auditSeparation": "Separación Estricta entre Implementación, Validación y Evidencia",
    "dashboard.gatesBadge": "11 GATES VERIFICADOS",
    "dashboard.tableGate": "Gate de Auditoría",
    "dashboard.tablePhase": "Fase",
    "dashboard.tableEvidence": "Evidencia Formal",
    "dashboard.tableStatus": "Estado",
    "dashboard.codeGovNote": "Nota de Gobernanza de Código: ",
    "dashboard.codeGovText": "El sitio corporativo prioriza productos y sistemas. A continuación figura el mapeo interno entre los sistemas y sus artefactos de código.",
    "dashboard.repoPrivate": "Repositorio: Privado",
    "dashboard.inspectRepo": "Inspeccionar Repositorio",
    "dashboard.vocabDefinition": "DEFINICIÓN TÉCNICA FORMAL",
    "dashboard.antiPatternLabel": "Antipatrón contrastado: ",
    "dashboard.closeBtn": "Cerrar",
    "dashboard.statusVerified": "Verificado",
    "dashboard.statusInProgress": "En Progreso",
    "dashboard.statusPending": "Pendiente",

    "gatesModal.kicker": "Auditoría Formal de Ingeniería",
    "gatesModal.title": "Los 11 Gates de Producción",
    "gatesModal.subtitle": "Criterios técnicos y operativos obligatorios que rigen la separación entre implementación, validación continua y evidencia de producción.",
    "gatesModal.cataloged": "11/11 GATES CATALOGADOS Y AUDITADOS EN EL REPOSITORIO",
    "gatesModal.releaseReady": "RELEASE V3 READY",
    "gatesModal.ruleLabel": "Regla: ",
    "gatesModal.closeBtn": "Cerrar",

    "research.kicker": "INVESTIGACIÓN, ARTÍCULOS Y LABS",
    "research.title": "Fundamentación teórica y laboratorios de verificación.",
    "research.subtitle": "Publicaciones de ingeniería que explican por qué las soluciones ingenuas fallan en escala corporativa y cómo implementamos controles deterministas.",
    "research.readArticle": "Leer Whitepaper",
    "research.viewLab": "Explorar Laboratorio",

    "footer.positioning": "Ingeniería de sistemas inteligentes con procesamiento determinista, procedencia de citas inmutable y gobernanza corporativa de release.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.contact": "Contacto Técnico y Comercial",
    "footer.jurisdiction": "JURISDICCIÓN DE DATOS: CUALIFICADA POR SISTEMA (EUROPE-WEST-1 / EUROPE-WEST-3)",
    "footer.gatesAudited": "11 Gates Auditados",
    "footer.dataSovereignty": "Soberanía de Datos UE",
    "footer.corpNav": "Navegación Corporativa",
    "footer.releaseAudit": "Auditoría de Release"
  }
};
