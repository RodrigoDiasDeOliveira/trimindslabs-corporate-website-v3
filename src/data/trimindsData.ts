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
    title: "Trusted Compliance Agent",
    subtitle: "Auditoria Regulatória Determinística & Extração Jurídica com Proveniência",
    tag: "Regulatory AI / Enterprise Retrieval",
    sector: "Conformidade Regulatória & Jurídica Europeia",
    domain: "compliance",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Desenvolvido para conformidade legal corporativa com verificação rigorosa de proveniência por offset de caracteres e gates de fallback determinísticos.",
    whatItProves: "Demonstra que a Trimindslabs projeta sistemas de recuperação verificáveis para conformidade jurídica onde a tolerância a citações incorretas é nula.",
    problem: "Departamentos jurídicos e de compliance enfrentam semanas na análise de diretivas multijurisdicionais. Modelos de IA generativa convencionais produzem citações legais aparentemente plausíveis, mas sem correspondência exata nos textos normativos oficiais, gerando risco sob o EU AI Act.",
    context: "Operando sob os critérios do EU AI Act para sistemas de alto risco, o sistema exige proveniência documental auditável até caixas delimitadoras de caracteres e fingerprints criptográficos por parágrafo.",
    architecture: {
      overview: "Pipeline de verificação em três camadas: Ingestão e segmentação lexical/densa → Reranking neural com modelo cross-encoder → Agente de síntese com esquema JSON rígido e validação de proveniência.",
      components: [
        "Mecanismo de Ingestão de Documentos e Deconstrução Estruturada de PDFs",
        "Índice de Proveniência Determinística com Validação SHA-256 por Bloco",
        "Agente de Verificação em Duplo Passo com Fallback de Cruzamento Textual",
        "Camada de Execução Isolada em Contêineres de Alta Segurança"
      ],
      diagramText: "Ingestão Documental ➔ Segmentação Estruturada ➔ Busca Híbrida (Dense+BM25) ➔ Reranker Neural ➔ Agente com Restrição de Esquema ➔ Certificado de Auditoria"
    },
    realArchitectureVerification: {
      documented: "Recuperação em duas etapas com reranker neural e aplicação estrita de contratos Pydantic V2.",
      implemented: "Serviço FastAPI com índice esparso BM25 + vetores densos Qdrant, fusão Reciprocal Rank Fusion e modelo BGE-Reranker-Large.",
      presentedOnSite: "Descrito com precisão como Python/FastAPI + Qdrant + BGE-Reranker, sem tecnologias não evidenciadas.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Python 3.12"],
      frameworks: ["FastAPI", "Pydantic V2"],
      libraries: ["BGE-Reranker-Large", "HuggingFace Transformers", "PyPDF / PDFPlumber"],
      databases: ["Qdrant Vector Database", "SQLite (Trilha de auditoria)"],
      cloud: ["Google Cloud Run (Região Europeia)", "Google Cloud Storage"],
      iac: ["Docker multi-stage builds", "OpenTofu / Terraform Blueprints"],
      apis: ["REST OpenAPI v3", "Server-Sent Events (SSE)"],
      testing: ["Pytest (Testes unitários e de integração)", "Validação baseada em propriedades"],
      ciCd: ["GitHub Actions (Lint, Typecheck, Auditoria de segurança)"],
      observability: ["OpenTelemetry Python SDK", "Logs JSON estruturados"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Suíte automatizada com validação de citações e cobertura de regras",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Hybrid Search over Dense-Only", "ADR-004: Character-Offset Verification Protocol"]
    },
    engineering: [
      "Implementação de loop de verificação que rejeita respostas que não apresentem correspondência exata contra tokens do documento primário.",
      "Pipeline assíncrona com processamento de diretivas extensas em streaming contínuo.",
      "Rastreamento distribuído via OpenTelemetry para auditoria de confiança de cada cláusula extraída."
    ],
    technology: [
      "Python 3.12 / FastAPI",
      "Qdrant Vector DB",
      "BGE-Reranker-Large",
      "Pydantic V2",
      "Docker / Cloud Run (EU)",
      "OpenTelemetry"
    ],
    evolution: "Evoluiu de um assistente de busca jurídica para um agente de conformidade autoregulado que gera relatórios estruturados com proveniência criptográfica rastreável.",
    challenges: [
      "Normalização de diários oficiais europeus em múltiplos idiomas e diagramações de colunas complexas.",
      "Isolamento entre diretivas comunitárias e transposições normativas de estados-membros.",
      "Garantia de latência previsível em corpora regulatórios com centenas de páginas."
    ],
    decisions: [
      {
        decision: "Verificação estrita por offset de caracteres antes da apresentação de citações.",
        rationale: "Garante que o auditor legal possa inspecionar o documento original imediatamente com correspondência exata."
      },
      {
        decision: "Substituição de interfaces conversacionais genéricas por tabelas de conformidade estruturadas.",
        rationale: "Departamentos jurídicos necessitam de relatórios de risco e diffs rastreáveis, não de diálogos informais."
      }
    ],
    results: [
      {
        metric: "Proveniência Documental",
        value: "Mapeamento Exato",
        description: "Associa cada afirmação diretamente a um intervalo de caracteres no documento primário"
      },
      {
        metric: "Contratos de Esquema",
        value: "Pydantic V2",
        description: "Validação estruturada de tipos eliminando respostas fora de formato"
      },
      {
        metric: "Recuperação Híbrida",
        value: "BM25 + Qdrant",
        description: "Fusão de busca léxica por termos técnicos com busca vetorial por contexto"
      }
    ],
    evidence: "Serviço implementado com testes automatizados, especificações ADR e ambientes conteinerizados reproduzíveis."
  },
  {
    id: "triminds-geo-ai",
    title: "Trimindslabs Geo-AI (V4)",
    subtitle: "Vetorização Geoespacial de Alta Resolução & Sensoriamento Remoto",
    tag: "Geospatial AI / Remote Sensing",
    sector: "Observação da Terra, Infraestrutura & Meio Ambiente",
    domain: "geospatial",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Plataforma para ingestão contínua de imagens orbitais multiespectrais Sentinel-2 L2A, decomposição em tiles espaciais e indexação topológica.",
    whatItProves: "Demonstra competência técnica em processamento de dados geoespaciais de alta dimensão, transformações raster/vetor e modelos de segmentação em nuvem.",
    problem: "A inspeção manual de imagens de satélite em grandes extensões territoriais é demorada e custosa para operadoras de infraestrutura e órgãos ambientais, gerando atrasos na identificação de alterações de solo e degradação de ativos.",
    context: "Processamento de imagens reais Sentinel-2 da Agência Espacial Europeia (ESA), calibrando bandas multiespectrais com correção de distorções geométricas e atmosféricas.",
    architecture: {
      overview: "Malha de inferência distribuída por tiles: Ingestão de GeoTIFFs orbitais → Normalização de bandas multiespectrais (12 canais) → Modelos de segmentação visual (PyTorch/TorchGeo) → Vetorização de polígonos → Indexação topológica no PostGIS.",
      components: [
        "Pool de Workers de Tiling GeoTIFF com GDAL e Rasterio",
        "Pipeline de Normalização Espectral e Correção Atmosférica",
        "Indexador Topológico Espacial em PostgreSQL 16 com PostGIS 3.4",
        "Mecanismo Diferencial de Detecção de Mudanças Temporais"
      ],
      diagramText: "Feed Sentinel-2 ➔ Ortoretificação ➔ Grade Quadkey ➔ Inferência Multiespectral ➔ Vetorização GeoJSON ➔ Índice PostGIS ➔ Webhook de Eventos"
    },
    realArchitectureVerification: {
      documented: "Decomposição raster em quadkeys com inferência paralela em PyTorch e indexação topológica PostGIS.",
      implemented: "Python 3.11 com GDAL, Rasterio, Shapely, PyTorch (TorchGeo), fila Celery/Redis, PostgreSQL 16 + PostGIS 3.4.",
      presentedOnSite: "Descrito com precisão técnica usando GDAL, PostGIS e PyTorch sobre imagens públicas Sentinel-2.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Python 3.11", "SQL (Extensões PostGIS)"],
      frameworks: ["FastAPI", "TorchGeo / PyTorch"],
      libraries: ["GDAL / OGR", "Rasterio", "Shapely", "GeoPandas", "NumPy / SciPy"],
      databases: ["PostgreSQL 16 com PostGIS 3.4", "Redis (Cache de tiles e filas)"],
      cloud: ["Google Cloud Run (GPUs NVIDIA)", "Google Cloud Storage"],
      iac: ["Docker com binários C++ do GDAL compilados", "Terraform GCP"],
      apis: ["Endpoints conformes com padrões OGC", "GeoJSON Vector Tiles"],
      testing: ["Pytest com suíte de geometria espacial", "Testes de tolerância raster"],
      ciCd: ["GitHub Actions com cache de contêineres GDAL"],
      observability: ["Métricas Prometheus", "Dashboards espaciais"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Suíte automatizada com checagens matemáticas de raster e topologia",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-002: Dynamic Quadkey Tiling vs Arbitrary Bounding Box", "ADR-005: FP16 Edge Inference"]
    },
    engineering: [
      "Arquitetura de processamento paralelo para rasters multiespectrais de 12 bandas com resolução de 10m/pixel.",
      "Algoritmos de refinamento de bordas sub-pixel para simplificação de polígonos mantendo fidelidade geométrica.",
      "Filtros automatizados para descarte de nuvens e interferências atmosféricas na análise de vegetação."
    ],
    technology: [
      "Python 3.11 / PyTorch",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Distributed Queue",
      "GCP Cloud Run GPUs",
      "GeoJSON / MapLibre"
    ],
    evolution: "Evoluiu de protótipos de classificação estática de tiles para uma plataforma contínua de monitoramento de mudanças temporais baseada em dados Sentinel-2 reais.",
    challenges: [
      "Variações sazonais de reflectância atmosférica que impactam índices espectrais.",
      "Manejo de matrizes multicanal de 16-bits com alta demanda de memória.",
      "Garantia de continuidade topológica nas bordas de partição de tiles adjacentes."
    ],
    decisions: [
      {
        decision: "Adoção de grade quadkey dinâmica em vez de cortes por caixas delimitadoras arbitrárias.",
        rationale: "Possibilita cacheamento hierárquico consistente e elimina distorções visuais nas junções de tiles."
      },
      {
        decision: "Inferência com pesos quantizados FP16 em nós de nuvem.",
        rationale: "Otimiza o uso de memória GPU em contêineres Cloud Run mantendo a fidelidade das predições de cobertura."
      }
    ],
    results: [
      {
        metric: "Resolução Nativa",
        value: "10m / pixel",
        description: "Processamento de bandas Sentinel-2 L2A preservando resolução física nativa"
      },
      {
        metric: "Particionamento",
        value: "Quadkey Piramidal",
        description: "Divisão hierárquica que viabiliza processamento paralelo sem artefatos de borda"
      },
      {
        metric: "Ambiente Operacional",
        value: "GCP Cloud Run",
        description: "Execução em contêineres com PostGIS na região europe-west1"
      }
    ],
    evidence: "Código e contêineres com suporte a GDAL/PostGIS; validação com dados reais da constelação Sentinel-2."
  },
  {
    id: "triminds-logistics-platform",
    title: "Trimindslabs Logistics Platform (TLP)",
    subtitle: "Rastreabilidade em Tempo Real com Ingestão RFID & Visão na Borda",
    tag: "Logistics SaaS / Event Ingestion",
    sector: "Automação de Armazéns & Operações Industriais",
    domain: "logistics",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Plataforma para operações logísticas multilocatárias, processamento de telemetria RFID em alta frequência e contagem de ativos via visão computacional móvel.",
    whatItProves: "Demonstra capacidade de engenharia para construir backends corporativos escaláveis em Java 17 / Spring Boot 3.3 com interfaces web modernas e inteligência distribuída.",
    problem: "Centros de distribuição enfrentam pontos cegos de inventário, perdas de rastreabilidade de cargas e discrepâncias entre registros fiscais e contagem física nos depósitos.",
    context: "Desenvolvido com modelo multitenancy (companyId) para unificar eventos de leitores RFID fixos, esteiras e aplicativos móveis de contagem de materiais.",
    architecture: {
      overview: "Arquitetura orientada a eventos: Gateway de Ingestão de Leitores RFID → Processador de eventos em Spring Boot 3.3 → Motor de regras e inferência de fluxo → Difusão via STOMP/SockJS WebSockets → Dashboard operacional em React.",
      components: [
        "Gateway de Ingestão de Eventos com suporte a bateladas de telemetria",
        "Controlador de Regras de Negócio e Rastreamento em Spring Boot 3.3",
        "Broadcaster WebSocket STOMP com autenticação segura JWT",
        "Módulo de Borda com YOLOv8 para contagem visual rápida de embalagens"
      ],
      diagramText: "Sensores RFID / App Mobile ➔ Ingestão Spring ➔ Validação de Sessão ➔ Processamento de Eventos ➔ STOMP WebSockets ➔ Dashboard em Tempo Real"
    },
    realArchitectureVerification: {
      documented: "Plataforma logística com backend Java 17 / Spring Boot 3.3 e interface web React.",
      implemented: "Java 17, Spring Boot 3.3, Spring Data JPA, Spring Security, STOMP WebSockets, React 18, TypeScript, PostgreSQL.",
      presentedOnSite: "Stack condizente com a implementação: Java, Spring Boot, React e WebSockets.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Java 17", "TypeScript", "SQL (PostgreSQL)"],
      frameworks: ["Spring Boot 3.3", "React 18 / Vite", "Spring Security"],
      libraries: ["STOMP & SockJS WebSocket", "Deeplearning4j", "Axios", "Lombok"],
      databases: ["PostgreSQL (Produção)", "H2 (Ambientes de teste integrados)"],
      cloud: ["Docker Containerization", "Isolamento Multilocatário"],
      iac: ["Docker Compose", "Multi-stage Dockerfile"],
      apis: ["REST Endpoints", "WebSocket STOMP (/ws-rfid)"],
      testing: ["JUnit 5", "Spring Boot Test"],
      ciCd: ["GitHub Actions CI (Build Maven & Lint)"],
      observability: ["Spring Actuator", "Micrometer Metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Suíte de testes JUnit cobrindo controladores de evento e segurança",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Multi-tenant Data Separation", "ADR-003: WebSocket STOMP vs Server-Sent Events"]
    },
    engineering: [
      "Implementação de canal de difusão de eventos de alta frequência com protocolo STOMP sobre WebSockets.",
      "Integração com visão computacional móvel (ObjectScanner) para sincronização de contagens físicas no estoque.",
      "Modelagem multitenant garantindo segregação lógica estrita entre operadoras logísticas distintas."
    ],
    technology: [
      "Java 17 / Spring Boot 3.3",
      "React 18 / TypeScript",
      "STOMP WebSockets",
      "PostgreSQL / JPA",
      "Docker / Cloud Run",
      "Visão na Borda (YOLOv8)"
    ],
    evolution: "Evoluiu de um protótipo de monitoramento de armazém para um ecossistema completo combinando telemetria RFID contínua e conferência visual de ativos industriais.",
    challenges: [
      "Prevenção de colisões e leituras duplicadas em passagens rápidas por portais RFID.",
      "Manutenção de conexões WebSocket estáveis em ambientes fabris com alta interferência eletromagnética.",
      "Sincronização bidirecional entre leituras locais no chão de fábrica e o servidor central."
    ],
    decisions: [
      {
        decision: "Adoção de WebSockets com STOMP para atualização de telas operacionais.",
        rationale: "Garante atualização instantânea do status de conferência sem sobrecarga de polling HTTP."
      },
      {
        decision: "Estruturação de persistência com segregação de locatário via chaves compostas e tenant resolver.",
        rationale: "Permite operação multilocatária segura sem necessidade de clusters isolados por cliente inicial."
      }
    ],
    results: [
      {
        metric: "Comunicação de Eventos",
        value: "STOMP WebSocket",
        description: "Transmissão contínua de status de conferência para operadores de terminal"
      },
      {
        metric: "Arquitetura Corporativa",
        value: "Spring Boot 3.3",
        description: "Controle robusto de transações, segurança JWT e persistência com JPA"
      },
      {
        metric: "Visão na Borda",
        value: "Integração Mobile",
        description: "Suporte à conferência física via câmera de terminal com processamento local"
      }
    ],
    evidence: "Repositório público com código-fonte Java e React, configuração Maven e controladores documentados."
  },
  {
    id: "triminds-security-layer",
    title: "Trimindslabs Security Platform",
    subtitle: "Identidade Corporativa, Arquitetura Hexagonal & Políticas Zero Trust",
    tag: "Security Engineering / Hexagonal Architecture",
    sector: "Cibersegurança Corporativa & Infraestrutura de Acesso",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Camada de segurança centralizada implementada com princípios de arquitetura hexagonal (Ports and Adapters) e controle de acesso baseado em atributos (ABAC).",
    whatItProves: "Demonstra rigor em engenharia de segurança, desacoplamento arquitetural e proteção de fronteiras de domínio em sistemas empresariais.",
    problem: "Sistemas monolíticos com regras de autorização espalhadas em controladores e consultas SQL criam brechas graves de privilégios e impedem auditorias de conformidade.",
    context: "Projetado como módulo central para autenticação, controle de permissões e validação criptográfica de tokens em todos os serviços do ecossistema.",
    architecture: {
      overview: "Arquitetura Hexagonal: Núcleo de domínio imutável → Portas de entrada e saída → Adaptadores para Open Policy Agent (OPA), cofres criptográficos e persistência PostgreSQL.",
      components: [
        "Núcleo de Domínio de Identidade e Políticas de Acesso",
        "Adaptador OPA para Avaliação Declarativa de Regras (Rego)",
        "Motor de Validação Criptográfica de Tokens e Sessões",
        "Suíte de Testes Arquiteturais com ArchUnit"
      ],
      diagramText: "Requisição ➔ Filtro de Segurança ➔ Porta de Entrada ➔ Núcleo de Domínio ➔ Avaliador OPA ➔ Porta de Saída ➔ Banco de Políticas"
    },
    realArchitectureVerification: {
      documented: "Arquitetura hexagonal para segurança corporativa com Spring Boot e validação de regras de acesso.",
      implemented: "Java 21, Spring Boot 3.x, ArchUnit para verificação de barreiras arquiteturais, integração OPA, Docker.",
      presentedOnSite: "Arquitetura e tecnologias fiéis ao código real.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Java 21", "Rego (Linguagem OPA)"],
      frameworks: ["Spring Boot 3.x", "Open Policy Agent"],
      libraries: ["ArchUnit", "Nimbus JOSE+JWT", "Lombok"],
      databases: ["PostgreSQL", "In-memory Policy Cache"],
      cloud: ["Docker Isolated Enclaves"],
      iac: ["Dockerfile multi-stage"],
      apis: ["REST Security Policy API"],
      testing: ["ArchUnit Architecture Tests", "JUnit 5 Security Verification"],
      ciCd: ["GitHub Actions (Maven Build, ArchUnit enforcement)"],
      observability: ["Structured Security Audit Logging"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Testes arquiteturais com ArchUnit garantindo isolamento estrito de camadas",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Hexagonal Ports and Adapters", "ADR-002: Declarative Policies with OPA"]
    },
    engineering: [
      "Garantia automatizada via ArchUnit de que o núcleo de domínio não possui referências a frameworks externos ou bancos.",
      "Isolamento da lógica de autorização em políticas declarativas avaliadas sem acoplamento rígido.",
      "Trilhas de auditoria imutáveis para qualquer mutação de privilégio administrativo."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Arquitetura Hexagonal",
      "Open Policy Agent (OPA)",
      "Zero Trust Architecture",
      "PostgreSQL",
      "ArchUnit"
    ],
    evolution: "Evoluiu de um filtro básico de autenticação JWT para uma plataforma completa de segurança baseada em portas, adaptadores e políticas declarativas OPA.",
    challenges: [
      "Preservação rigorosa da pureza do modelo de domínio frente a conveniências de frameworks.",
      "Garantia de que consultas de autorização complexas ocorram em sub-milissegundos.",
      "Compatibilidade entre diferentes provedores de identidade legados."
    ],
    decisions: [
      {
        decision: "Aplicação estrita do padrão Portas e Adaptadores com validação via ArchUnit no build.",
        rationale: "Impede degradação arquitetural ao longo do tempo causada por importações indevidas."
      },
      {
        decision: "Desacoplamento do motor de políticas do código da aplicação.",
        rationale: "Possibilita atualizar regras de segurança sem necessidade de recompilar e reimplantar os serviços."
      }
    ],
    results: [
      {
        metric: "Isolamento Estrutural",
        value: "Hexagonal Puro",
        description: "Zero dependências externas no núcleo de domínio validadas no pipeline CI"
      },
      {
        metric: "Auditoria Automatizada",
        value: "ArchUnit Rules",
        description: "Testes automáticos que falham o build se camadas forem violadas"
      },
      {
        metric: "Políticas Declarativas",
        value: "Regras OPA",
        description: "Governança unificada de acesso baseada em atributos"
      }
    ],
    evidence: "Repositório público com código Java, testes ArchUnit e especificações arquiteturais documentadas."
  },
  {
    id: "triminds-ai-cloud-administrator",
    title: "Trimindslabs AI Cloud Administrator",
    subtitle: "Orquestrador Multi-Cloud Baseado no Model Context Protocol (MCP)",
    tag: "Multi-Cloud MCP / Infrastructure Agent",
    sector: "Infraestrutura Multi-Nuvem & Engenharia de Plataforma",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Servidor Model Context Protocol (MCP) que expõe ferramentas controladas e seguras para automação de tarefas em nuvens AWS, GCP e Azure.",
    whatItProves: "Demonstra adoção pioneira de padrões modernos de interoperabilidade de agentes (MCP) com foco em segurança de credenciais e execução restrita.",
    problem: "Engenheiros de plataforma perdem tempo com tarefas repetitivas em múltiplos painéis de nuvem, enquanto scripts descontrolados representam riscos severos de segurança operacional.",
    context: "Criado para integrar assistentes de desenvolvimento com a infraestrutura real de forma segura, com confirmação obrigatória para ações destrutivas.",
    architecture: {
      overview: "Arquitetura baseada em MCP: Cliente MCP (Claude / IDE) ➔ Protocolo JSON-RPC ➔ Servidor FastMCP ➔ Cofre de Credenciais Keyring ➔ Adaptadores de Nuvem (boto3, google-cloud, azure-mgmt).",
      components: [
        "Servidor MCP construído com a biblioteca FastMCP",
        "Módulo de Cofre de Credenciais Criptográfico (Keyring)",
        "Adaptadores Modulares para AWS, Google Cloud e Azure",
        "Camada de Verificação e Política para Ações Sensíveis"
      ],
      diagramText: "Cliente MCP ➔ Protocolo JSON-RPC ➔ Servidor FastMCP ➔ Filtro de Segurança ➔ SDKs Multi-Cloud ➔ Nuvem Alvo"
    },
    realArchitectureVerification: {
      documented: "Servidor MCP para administração multi-cloud em Python com FastMCP.",
      implemented: "Python 3.11+, FastMCP, Typer CLI, bibliotecas oficiais de nuvem, Docker.",
      presentedOnSite: "Totalmente alinhado à implementação real.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Python 3.11+"],
      frameworks: ["FastMCP", "Typer CLI", "FastAPI"],
      libraries: ["boto3 (AWS)", "google-cloud-sdk", "azure-mgmt", "keyring"],
      databases: ["Armazenamento local criptografado"],
      cloud: ["AWS", "Google Cloud Platform", "Microsoft Azure"],
      iac: ["Dockerfile"],
      apis: ["Model Context Protocol (MCP) JSON-RPC"],
      testing: ["Pytest"],
      ciCd: ["GitHub Actions"],
      observability: ["Structured Audit Logs"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Testes automatizados cobrindo ferramentas MCP e gerenciamento de chaves",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Model Context Protocol over Proprietary APIs"]
    },
    engineering: [
      "Implementação completa de especificações do Model Context Protocol com suporte a ferramentas, recursos e prompts.",
      "Isolamento de credenciais de nuvem em cofres do sistema operacional sem armazenamento em texto plano.",
      "Barreiras de contenção que impedem execução de comandos com impacto destrutivo sem aprovação explícita."
    ],
    technology: [
      "Python 3.11+ / FastMCP",
      "Model Context Protocol",
      "AWS / Azure / GCP",
      "Typer CLI / FastAPI",
      "Cofre Criptográfico Keyring",
      "Docker"
    ],
    evolution: "Desenvolvido diretamente sobre a especificação aberta do Model Context Protocol para proporcionar uma ponte segura entre agentes de IA e recursos de nuvem.",
    challenges: [
      "Padronização de modelos conceituais divergentes entre AWS, GCP e Azure.",
      "Garantia de segurança máxima de credenciais com isolamento estrito por sessão.",
      "Resposta determinística em timeouts e falhas transitórias de APIs de provedores."
    ],
    decisions: [
      {
        decision: "Adoção estrita do padrão aberto Model Context Protocol (MCP).",
        rationale: "Evita dependência de ferramentas proprietárias e garante interoperabilidade com qualquer cliente compatível."
      },
      {
        decision: "Uso do Keyring do sistema para credenciais.",
        rationale: "Impede vazamento acidental de tokens e chaves de acesso em variáveis de ambiente ou arquivos de configuração."
      }
    ],
    results: [
      {
        metric: "Padrão Aberto",
        value: "Protocolo MCP",
        description: "Compatibilidade nativa com ecossistemas de agentes modernos"
      },
      {
        metric: "Gerenciamento Seguro",
        value: "Cofre Keyring",
        description: "Credenciais de nuvem isoladas no cofre do sistema operacional"
      },
      {
        metric: "Interoperabilidade",
        value: "Multi-Cloud",
        description: "Ferramentas unificadas para AWS, Google Cloud e Microsoft Azure"
      }
    ],
    evidence: "Repositório público com código Python, implementação FastMCP e Dockerfile funcional."
  },
  {
    id: "triminds-integration-platform",
    title: "Trimindslabs Integration Platform & Sovereign Mesh",
    subtitle: "Mediação de APIs Poliglotas, Barramento de Eventos & Malha Segura",
    tag: "Platform Engineering / Event Mesh",
    sector: "Engenharia de Plataforma & Arquitetura Orientada a Eventos",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "validation",
    honestScope: "Substrato de engenharia de plataforma para mediação de APIs, roteamento assíncrono de mensagens e interconexão de serviços em nuvens europeias.",
    whatItProves: "Demonstra competência em engenharia de sistemas transversais, arquiteturas distribuídas e governança de comunicação entre microsserviços.",
    problem: "Ecossistemas com múltiplos serviços poliglotas sofrem com acoplamento ponto a ponto frágil, falta de rastreabilidade distribuída e inconsistência de esquemas de dados.",
    context: "Atua como espinha dorsal de comunicação para os módulos do ecossistema Trimindslabs, padronizando contratos e observabilidade.",
    architecture: {
      overview: "Barramento de eventos e mediação: Gateway de API ➔ Malha de Mensageria Redis/Kafka ➔ Adaptadores de Protocolo (Spring Boot / FastAPI) ➔ Rastreamento com OpenTelemetry.",
      components: [
        "Gateway Unificado de Mediação de Protocolos e Rotas",
        "Barramento de Eventos Assíncronos com Redis Pub/Sub",
        "Adaptadores Poliglotas padronizados em Java e Python",
        "Coletor Centralizado de Tracing com OpenTelemetry"
      ],
      diagramText: "Serviços Clientes ➔ Gateway Unificado ➔ Barramento de Eventos ➔ Adaptadores de Destino ➔ Coletor OpenTelemetry"
    },
    realArchitectureVerification: {
      documented: "Plataforma de integração e barramento de eventos com Spring Boot, Python e Redis.",
      implemented: "Java 21, Python 3.12, Redis, OpenTelemetry, Docker multi-stage.",
      presentedOnSite: "Alinhado aos artefatos de código presentes no repositório.",
      coherenceScore: "100% Coerente"
    },
    realTechnologies: {
      languages: ["Java 21", "Python 3.12", "TypeScript"],
      frameworks: ["Spring Boot 3.x", "FastAPI"],
      libraries: ["Redis Pub/Sub", "OpenTelemetry Tracing"],
      databases: ["Redis", "PostgreSQL"],
      cloud: ["Hetzner Cloud", "OVHcloud", "GCP Cloud Run"],
      iac: ["Docker Multi-Stage", "Docker Compose"],
      apis: ["REST OpenAPI", "Async Event Messaging"],
      testing: ["Testes de integração automatizados"],
      ciCd: ["GitHub Actions CI"],
      observability: ["OpenTelemetry Collector"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
      isPrivate: false,
      visibilityBadge: "Repositório Público",
      testSuiteStatus: "Testes automatizados cobrindo adaptadores e roteamento de eventos",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Asynchronous Event Mesh over Synchronous REST"]
    },
    engineering: [
      "Padronização de contratos de eventos com validação estrita de esquemas em múltiplos ambientes.",
      "Implementação de rastreamento distribuído unificado propagando identificadores de contexto entre serviços.",
      "Isolamento de tráfego de dados sensíveis em provedores de infraestrutura com jurisdição europeia."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Python 3.12 / FastAPI",
      "Redis Event Mesh",
      "OpenTelemetry",
      "Docker Multi-Stage",
      "Malha Soberana"
    ],
    evolution: "Evoluiu de scripts de integração pontual para uma malha estruturada de eventos e mediação de serviços corporativos.",
    challenges: [
      "Garantia de interoperabilidade de tipos entre ecossistemas Java e Python.",
      "Manutenção de rastreabilidade de ponta a ponta através de múltiplos saltos de rede.",
      "Proteção de dados em trânsito com criptografia de ponta a ponta."
    ],
    decisions: [
      {
        decision: "Uso de OpenTelemetry como padrão universal de observabilidade.",
        rationale: "Evita dependência de ferramentas proprietárias de monitoramento e padroniza a coleta de métricas."
      },
      {
        decision: "Comunicação primária assíncrona orientada a eventos.",
        rationale: "Desacopla a disponibilidade dos serviços individuais e aumenta a resiliência global do sistema."
      }
    ],
    results: [
      {
        metric: "Topologia de Eventos",
        value: "Mesh Desacoplado",
        description: "Comunicação assíncrona entre módulos sem bloqueio síncrono"
      },
      {
        metric: "Observabilidade",
        value: "OpenTelemetry",
        description: "Tracing distribuído com propagação de contexto padronizada"
      },
      {
        metric: "Jurisdição Europeia",
        value: "Infraestrutura EU",
        description: "Conformidade com padrões rigorosos de soberania e proteção de dados"
      }
    ],
    evidence: "Repositório público com arquitetura de adaptadores, templates e suítes de validação automatizadas."
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
    subtitle: "High-Resolution Geospatial Vectorization & Remote Sensing",
    tag: "Geospatial AI / Remote Sensing",
    sector: "Earth Observation, Critical Infrastructure & Environment",
    domain: "geospatial",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Platform for automated ingestion of Sentinel-2 L2A multi-spectral satellite imagery, hierarchical spatial quadkey tiling, and topological vector indexing.",
    whatItProves: "Proves Trimindslabs possesses deep engineering competence in high-dimensional spatial data, raster/vector transformations, and cloud-native GPU inference pipelines.",
    problem: "Manual satellite imagery inspection across large geographic territories is slow and cost-prohibitive for infrastructure operators and environmental agencies, causing delays in detecting ground mutations and asset deterioration.",
    context: "Processes real European Space Agency (ESA) Sentinel-2 L2A observations, calibrating multi-spectral bands with geometric distortion and cloud filtering.",
    architecture: {
      overview: "Distributed spatial tiled inference mesh: Satellite raster tile splitter → Multi-spectral band normalization (12 channels) → PyTorch/TorchGeo visual segmentation models → Geospatial polygon vectorization → PostGIS topology indexing.",
      components: [
        "Distributed GeoTIFF Tiling Worker Pool with GDAL and Rasterio",
        "Spectral Normalization & Atmospheric Correction Pipeline",
        "Spatial Topology Graph Indexer with PostgreSQL 16 & PostGIS 3.4",
        "Temporal Change Detection Differential Matrix"
      ],
      diagramText: "Sentinel-2 Feed ➔ Orthorectification ➔ Quadkey Grid ➔ Multi-spectral Neural Inference ➔ GeoJSON Vectorizer ➔ PostGIS Geo-Spatial Index ➔ Alert Webhook"
    },
    realArchitectureVerification: {
      documented: "Spatial raster decomposition into Quadkey tiles with parallel PyTorch inference and PostGIS spatial topology indexing.",
      implemented: "Python 3.11 with GDAL, Rasterio, Shapely, PyTorch (TorchGeo), Celery/Redis task queue, PostgreSQL 16 + PostGIS 3.4.",
      presentedOnSite: "Accurately described as Python, GDAL, PyTorch, PostGIS operating on public Sentinel-2 orbits.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.11", "SQL (PostGIS Extensions)"],
      frameworks: ["FastAPI", "TorchGeo / PyTorch"],
      libraries: ["GDAL / OGR", "Rasterio", "Shapely", "GeoPandas", "NumPy / SciPy"],
      databases: ["PostgreSQL 16 with PostGIS 3.4", "Redis (Tile Cache & Queues)"],
      cloud: ["Google Cloud Run (NVIDIA L4 GPUs)", "Google Cloud Storage"],
      iac: ["Docker Container with compiled GDAL C++ binaries", "Terraform GCP"],
      apis: ["OGC API Features compliant endpoints", "GeoJSON Vector Tiles"],
      testing: ["Pytest Spatial Geometry Suite", "Raster tolerance verification tests"],
      ciCd: ["GitHub Actions with GDAL container caching"],
      observability: ["Prometheus metrics", "Spatial Grafana dashboards"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      testSuiteStatus: "Automated test suite with raster mathematics and topology verifications",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-002: Dynamic Quadkey Tiling vs Arbitrary Bounding Box", "ADR-005: FP16 Edge Inference"]
    },
    engineering: [
      "Architected parallel worker pipelines processing 12-band multi-spectral rasters at native 10m/pixel resolution.",
      "Created sub-pixel boundary refinement reducing polygon vertices while maintaining geometric fidelity.",
      "Engineered automated cloud shadow and atmospheric interference filtering algorithms."
    ],
    technology: [
      "Python 3.11 / PyTorch",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Distributed Queue",
      "GCP Cloud Run GPUs",
      "GeoJSON / MapLibre"
    ],
    evolution: "Evolved from static tile classification prototypes into an end-to-end continuous temporal monitoring system based on real Sentinel-2 satellite data.",
    challenges: [
      "Seasonal atmospheric reflectance fluctuations distorting vegetation index values.",
      "Memory footprint pressure handling 16-bit multi-channel matrix arrays.",
      "Preserving spatial topological continuity across adjacent tile boundaries."
    ],
    decisions: [
      {
        decision: "Adopted dynamic quadkey spatial tiling rather than arbitrary bounding box cuts.",
        rationale: "Allows seamless parallel caching and eliminates boundary seam artifacts at tile edges."
      },
      {
        decision: "Used FP16 quantized model inference on cloud nodes.",
        rationale: "Optimizes GPU memory utilization in Cloud Run containers while preserving segmentation fidelity."
      }
    ],
    results: [
      {
        metric: "Native Resolution",
        value: "10m / pixel",
        description: "Processes Sentinel-2 L2A bands preserving physical optical resolution"
      },
      {
        metric: "Partitioning",
        value: "Pyramidal Quadkey",
        description: "Hierarchical spatial grid enabling parallel execution without boundary seam artifacts"
      },
      {
        metric: "Execution Environment",
        value: "GCP Cloud Run",
        description: "Containerized deployment with PostGIS in europe-west1 cloud region"
      }
    ],
    evidence: "Source code with GDAL/PostGIS container support; validated with public Sentinel-2 constellation data."
  },
  {
    id: "triminds-logistics-platform",
    title: "Trimindslabs Logistics Platform (TLP)",
    subtitle: "Real-Time Logistics Operations with RFID Telemetry & Edge Vision",
    tag: "Logistics SaaS / Event Ingestion",
    sector: "Warehouse Automation & Industrial Operations",
    domain: "logistics",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Multi-tenant enterprise logistics platform for high-frequency RFID telemetry ingestion, warehouse event streaming, and mobile edge asset counting.",
    whatItProves: "Proves Trimindslabs builds production enterprise backends in Java 17, Spring Boot 3.3, and React 18, handling telemetry events with real-time WebSockets and edge AI.",
    problem: "Distribution centers face inventory blindspots, RFID collision errors, and data discrepancies between enterprise ERP systems and physical warehouse floors.",
    context: "Designed with multi-tenancy (companyId) to unify fixed RFID portal readers, automated conveyor streams, and mobile Android edge scanning devices.",
    architecture: {
      overview: "Event-driven architecture: RFID Readers / Gateways ➔ Spring Boot 3.3 Event Processor ➔ Predictive Rules Engine ➔ STOMP/SockJS WebSockets Broadcasting ➔ React Operational Dashboard.",
      components: [
        "High-Throughput Batch & Real-Time Event Ingestion Gateway",
        "Business Rules and Tracking Controller in Spring Boot 3.3",
        "WebSocket STOMP Broadcaster with secure JWT authentication",
        "Mobile Edge Vision Module with YOLOv8 for rapid asset verification"
      ],
      diagramText: "RFID Readers / Mobile App ➔ Spring Gateway ➔ Session Verification ➔ Event Processing ➔ STOMP WebSockets ➔ Real-Time Operational Dashboard"
    },
    realArchitectureVerification: {
      documented: "Real-time logistics platform using Java 17 / Spring Boot 3.3 backend and React web frontend.",
      implemented: "Java 17, Spring Boot 3.3, Spring Data JPA, Spring Security + JWT, STOMP WebSockets, React 18, TypeScript, PostgreSQL.",
      presentedOnSite: "Truthful stack matching codebase: Java, Spring Boot, React, and WebSockets.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java 17", "TypeScript", "SQL (PostgreSQL)"],
      frameworks: ["Spring Boot 3.3", "React 18 / Vite", "Spring Security"],
      libraries: ["STOMP & SockJS WebSocket", "Deeplearning4j", "Axios", "Lombok"],
      databases: ["PostgreSQL (Production)", "H2 (Integrated test suites)"],
      cloud: ["Docker Containerization", "Multi-tenant isolation"],
      iac: ["Docker Compose", "Multi-stage Dockerfile"],
      apis: ["REST Endpoints", "WebSocket STOMP (/ws-rfid)"],
      testing: ["JUnit 5", "Spring Boot Test"],
      ciCd: ["GitHub Actions CI (Maven Build & Lint)"],
      observability: ["Spring Actuator", "Micrometer Metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      testSuiteStatus: "JUnit test suite covering event controllers and security authentication",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Multi-tenant Data Separation", "ADR-003: WebSocket STOMP vs Server-Sent Events"]
    },
    engineering: [
      "Engineered high-frequency event broadcast channels using STOMP protocol over WebSockets.",
      "Integrated mobile computer vision (ObjectScanner) for physical floor verification with centralized sync.",
      "Enforced multi-tenant isolation guaranteeing logical data separation between enterprise clients."
    ],
    technology: [
      "Java 17 / Spring Boot 3.3",
      "React 18 / TypeScript",
      "STOMP WebSockets",
      "PostgreSQL / JPA",
      "Docker / Cloud Run",
      "Edge Vision (YOLOv8)"
    ],
    evolution: "Evolved from a warehouse telemetry prototype into a unified logistics operations suite combining continuous RFID feeds with mobile edge computer vision.",
    challenges: [
      "Handling tag collisions and de-duplicating multi-read passes across high-speed portal readers.",
      "Maintaining resilient WebSocket reconnects in factory environments with electromagnetic interference.",
      "Bi-directional synchronization between offline floor terminal counts and central ERP databases."
    ],
    decisions: [
      {
        decision: "Adopted WebSockets with STOMP for live terminal screen updates.",
        rationale: "Provides instantaneous operational status updates without the overhead of HTTP polling."
      },
      {
        decision: "Implemented tenant isolation via composite keys and programmatic tenant resolvers.",
        rationale: "Enables secure multi-tenant SaaS operation without requiring isolated database clusters initially."
      }
    ],
    results: [
      {
        metric: "Event Delivery",
        value: "STOMP WebSocket",
        description: "Continuous dispatch of verification telemetry to warehouse floor terminals"
      },
      {
        metric: "Enterprise Backend",
        value: "Spring Boot 3.3",
        description: "Robust transaction governance, JWT security, and relational JPA persistence"
      },
      {
        metric: "Mobile Edge AI",
        value: "Floor Vision",
        description: "Real-time physical asset counting directly via handheld mobile camera devices"
      }
    ],
    evidence: "Public repository with Maven configuration, Java/React source code, and documented API controllers."
  },
  {
    id: "triminds-security-layer",
    title: "Trimindslabs Security Platform",
    subtitle: "Enterprise Centralized Identity, Hexagonal Architecture & Zero Trust Policies",
    tag: "Security Engineering / Hexagonal Architecture",
    sector: "Enterprise Cybersecurity & Access Governance",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Centralized enterprise security platform implemented with Hexagonal Architecture (Ports and Adapters) and Attribute-Based Access Control (ABAC).",
    whatItProves: "Demonstrates engineering discipline in cybersecurity, architectural decoupling, and strict domain boundary protection.",
    problem: "Monolithic applications with authorization rules scattered across web controllers and database queries create critical privilege escalation vulnerabilities and fail compliance audits.",
    context: "Engineered as the foundational security module for authentication, fine-grained access control, and cryptographic token verification across the ecosystem.",
    architecture: {
      overview: "Hexagonal Architecture: Immutable domain core → Input & output ports → Adapters for Open Policy Agent (OPA), cryptographic vaults, and PostgreSQL persistence.",
      components: [
        "Pure Identity Domain Core & Attribute Policy Engine",
        "OPA Adapter for Declarative Policy Evaluation (Rego)",
        "Cryptographic Token & Session Verification Engine",
        "Architectural Rule Verification Suite with ArchUnit"
      ],
      diagramText: "Request ➔ Security Filter ➔ Inbound Port ➔ Domain Core ➔ OPA Evaluator ➔ Outbound Port ➔ Policy Store"
    },
    realArchitectureVerification: {
      documented: "Hexagonal architecture for enterprise security with Spring Boot and declarative policy evaluation.",
      implemented: "Java 21, Spring Boot 3.x, ArchUnit for architectural boundary enforcement, OPA integration, Docker.",
      presentedOnSite: "Truthful architecture and technologies directly matching codebase.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java 21", "Rego (OPA Policy Language)"],
      frameworks: ["Spring Boot 3.x", "Open Policy Agent"],
      libraries: ["ArchUnit", "Nimbus JOSE+JWT", "Lombok"],
      databases: ["PostgreSQL", "In-memory Policy Cache"],
      cloud: ["Docker Isolated Enclaves"],
      iac: ["Dockerfile multi-stage"],
      apis: ["REST Security Policy API"],
      testing: ["ArchUnit Architecture Tests", "JUnit 5 Security Verification"],
      ciCd: ["GitHub Actions (Maven Build, ArchUnit Enforcement)"],
      observability: ["Structured Security Audit Logging"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      testSuiteStatus: "ArchUnit architectural test suite guaranteeing strict layer decoupling",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Hexagonal Ports and Adapters", "ADR-002: Declarative Policies with OPA"]
    },
    engineering: [
      "Enforced automated ArchUnit rules ensuring the domain core contains zero external framework or database dependencies.",
      "Decoupled authorization logic into declarative policies evaluated without application recompilation.",
      "Implemented immutable security audit trails for any administrative permission mutation."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Hexagonal Architecture",
      "Open Policy Agent (OPA)",
      "Zero Trust Architecture",
      "PostgreSQL",
      "ArchUnit"
    ],
    evolution: "Evolved from basic JWT authentication filters into an enterprise security platform based on ports, adapters, and declarative OPA policies.",
    challenges: [
      "Strictly protecting domain model purity against framework convenience shortcuts.",
      "Ensuring complex attribute-based authorization queries execute with sub-millisecond latency.",
      "Handling backward compatibility across differing legacy identity providers."
    ],
    decisions: [
      {
        decision: "Enforced strict Ports and Adapters pattern verified by ArchUnit on every build.",
        rationale: "Prevents architectural decay over time caused by inadvertent cross-layer imports."
      },
      {
        decision: "Decoupled the policy engine from application business logic.",
        rationale: "Allows security officers to update access policies without redeploying application microservices."
      }
    ],
    results: [
      {
        metric: "Structural Decoupling",
        value: "Pure Hexagonal",
        description: "Zero external dependencies in domain core verified in automated CI pipeline"
      },
      {
        metric: "Automated Governance",
        value: "ArchUnit Rules",
        description: "Automated unit tests that fail the build if architectural boundaries are breached"
      },
      {
        metric: "Declarative Rules",
        value: "OPA Policies",
        description: "Unified attribute-based access control engine with audit trail"
      }
    ],
    evidence: "Public repository with Java codebase, ArchUnit tests, and documented architectural specifications."
  },
  {
    id: "triminds-ai-cloud-administrator",
    title: "Trimindslabs AI Cloud Administrator",
    subtitle: "Model Context Protocol (MCP) Multi-Cloud Agentic Orchestrator",
    tag: "Multi-Cloud MCP / Infrastructure Agent",
    sector: "Multi-Cloud Infrastructure & Platform Engineering",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Model Context Protocol (MCP) server providing secure, strictly governed tooling for autonomous infrastructure operations across AWS, GCP, and Azure.",
    whatItProves: "Demonstrates early adoption of modern agent interoperability standards (MCP) prioritizing credential vaulting and bounded execution.",
    problem: "Platform engineers lose valuable hours performing repetitive cloud tasks across divergent consoles, while uncontrolled scripts introduce catastrophic production outage risks.",
    context: "Engineered to safely bridge AI developer assistants with live cloud infrastructure using mandatory confirmation gates for sensitive actions.",
    architecture: {
      overview: "MCP-based architecture: MCP Client (Claude / IDE) ➔ JSON-RPC Protocol ➔ FastMCP Server ➔ Keyring Cryptographic Vault ➔ Cloud SDK Adapters (boto3, google-cloud, azure-mgmt).",
      components: [
        "MCP Server implemented using the FastMCP library",
        "Cryptographic Credential Vault Integration (Keyring)",
        "Modular Cloud Adapters for AWS, Google Cloud, and Azure",
        "Policy Filter Guardrails for High-Impact Infrastructure Actions"
      ],
      diagramText: "MCP Client ➔ JSON-RPC Protocol ➔ FastMCP Server ➔ Security Policy Filter ➔ Cloud SDKs ➔ Target Cloud"
    },
    realArchitectureVerification: {
      documented: "Model Context Protocol multi-cloud server implemented in Python with FastMCP.",
      implemented: "Python 3.11+, FastMCP, Typer CLI, official cloud SDKs, Docker.",
      presentedOnSite: "Fully aligned with implementation in public repository.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Python 3.11+"],
      frameworks: ["FastMCP", "Typer CLI", "FastAPI"],
      libraries: ["boto3 (AWS)", "google-cloud-sdk", "azure-mgmt", "keyring"],
      databases: ["Encrypted Local Vault Storage"],
      cloud: ["AWS", "Google Cloud Platform", "Microsoft Azure"],
      iac: ["Dockerfile"],
      apis: ["Model Context Protocol (MCP) JSON-RPC"],
      testing: ["Pytest"],
      ciCd: ["GitHub Actions"],
      observability: ["Structured Audit Logs"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      testSuiteStatus: "Automated tests covering MCP tools and credential vaulting routines",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Model Context Protocol over Proprietary APIs"]
    },
    engineering: [
      "Engineered complete Model Context Protocol specifications supporting tools, resources, and structured prompts.",
      "Isolated cloud API credentials in OS-native secure keyrings preventing plaintext credential leakage.",
      "Integrated confirmation guardrails rejecting high-impact destructive commands without explicit human approval."
    ],
    technology: [
      "Python 3.11+ / FastMCP",
      "Model Context Protocol",
      "AWS / Azure / GCP",
      "Typer CLI / FastAPI",
      "Keyring Cryptographic Vault",
      "Docker"
    ],
    evolution: "Built natively on the open Model Context Protocol specification to provide a secure bridge between AI agents and cloud infrastructure resources.",
    challenges: [
      "Harmonizing conflicting resource models across AWS, GCP, and Azure.",
      "Ensuring robust credential secrecy with strict per-session isolation.",
      "Providing deterministic error responses during transient cloud provider API failures."
    ],
    decisions: [
      {
        decision: "Adopted open Model Context Protocol (MCP) standard exclusively.",
        rationale: "Eliminates vendor lock-in and ensures native interoperability with any standard MCP client."
      },
      {
        decision: "Delegated credentials to OS-native keyring stores.",
        rationale: "Prevents accidental credential leakage in environment variables or configuration files."
      }
    ],
    results: [
      {
        metric: "Open Standard",
        value: "MCP Protocol",
        description: "Native compatibility with modern AI agent tools and developer environments"
      },
      {
        metric: "Secret Management",
        value: "Keyring Vault",
        description: "Cloud API credentials isolated in operating system secure enclaves"
      },
      {
        metric: "Unified Control",
        value: "Multi-Cloud Ops",
        description: "Unified tooling across AWS, Google Cloud, and Microsoft Azure"
      }
    ],
    evidence: "Public repository with Python source code, FastMCP implementation, and containerized Dockerfile."
  },
  {
    id: "triminds-integration-platform",
    title: "Trimindslabs Integration Platform & Sovereign Mesh",
    subtitle: "Unified Polyglot API Mediation, Event Mesh & Secure Interconnect",
    tag: "Platform Engineering / Event Mesh",
    sector: "Platform Engineering & Event-Driven Architecture",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "validation",
    honestScope: "Platform engineering substrate for polyglot API mediation, asynchronous message routing, and inter-service connectivity across sovereign European cloud infrastructure.",
    whatItProves: "Demonstrates engineering competence in transversal systems, distributed architectures, and microservice communication governance.",
    problem: "Multi-service ecosystems suffer from brittle point-to-point coupling, lack of end-to-end distributed tracing, and inconsistent schema validation across service boundaries.",
    context: "Acts as the operational backbone for Trimindslabs ecosystem components, standardizing contracts, tracing, and secure data routing.",
    architecture: {
      overview: "Event mesh & mediation: API Gateway ➔ Redis/Kafka Message Mesh ➔ Protocol Adapters (Spring Boot / FastAPI) ➔ OpenTelemetry Distributed Tracing.",
      components: [
        "Unified Protocol Mediation & Dynamic Routing Gateway",
        "Asynchronous Event Mesh with Redis Pub/Sub",
        "Standardized Polyglot Service Adapters in Java and Python",
        "Centralized Tracing Collector with OpenTelemetry"
      ],
      diagramText: "Client Services ➔ Unified Gateway ➔ Asynchronous Event Mesh ➔ Target Adapters ➔ OpenTelemetry Collector"
    },
    realArchitectureVerification: {
      documented: "Integration platform and event mesh using Spring Boot, Python, and Redis.",
      implemented: "Java 21, Python 3.12, Redis, OpenTelemetry, Docker multi-stage.",
      presentedOnSite: "Directly aligned with source code artifacts in public repository.",
      coherenceScore: "100% Coherent"
    },
    realTechnologies: {
      languages: ["Java 21", "Python 3.12", "TypeScript"],
      frameworks: ["Spring Boot 3.x", "FastAPI"],
      libraries: ["Redis Pub/Sub", "OpenTelemetry Tracing"],
      databases: ["Redis", "PostgreSQL"],
      cloud: ["Hetzner Cloud", "OVHcloud", "GCP Cloud Run"],
      iac: ["Docker Multi-Stage", "Docker Compose"],
      apis: ["REST OpenAPI", "Async Event Messaging"],
      testing: ["Automated integration test suites"],
      ciCd: ["GitHub Actions CI"],
      observability: ["OpenTelemetry Collector"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
      isPrivate: false,
      visibilityBadge: "Public Repository",
      testSuiteStatus: "Automated test suites covering adapters and event routing logic",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Asynchronous Event Mesh over Synchronous REST"]
    },
    engineering: [
      "Standardized event contracts with strict schema validation across heterogeneous runtime environments.",
      "Engineered unified distributed tracing propagating context identifiers across multi-service boundaries.",
      "Isolated sensitive data workloads in infrastructure providers bound to European privacy jurisdictions."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Python 3.12 / FastAPI",
      "Redis Event Mesh",
      "OpenTelemetry",
      "Docker Multi-Stage",
      "Sovereign Cloud Mesh"
    ],
    evolution: "Evolved from point-to-point integration scripts into a structured event mesh and service mediation layer for enterprise platforms.",
    challenges: [
      "Ensuring seamless type interoperability between Java and Python runtimes.",
      "Maintaining end-to-end tracing observability across multiple network hops.",
      "Guaranteeing data encryption in transit with mutual TLS security."
    ],
    decisions: [
      {
        decision: "Adopted OpenTelemetry as the universal observability standard.",
        rationale: "Prevents vendor monitoring lock-in and standardizes metrics collection across services."
      },
      {
        decision: "Favored asynchronous event-driven communication for core workflows.",
        rationale: "Decouples individual service availability and enhances global system resilience."
      }
    ],
    results: [
      {
        metric: "Event Topology",
        value: "Decoupled Mesh",
        description: "Asynchronous communication across microservices without synchronous blocking"
      },
      {
        metric: "Observability",
        value: "OpenTelemetry",
        description: "Distributed tracing with standardized context propagation across services"
      },
      {
        metric: "Data Sovereignty",
        value: "European Cloud",
        description: "Strict compliance with European privacy standards and data residency laws"
      }
    ],
    evidence: "Public repository with platform adapters, architectural templates, and automated validation suites."
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
    subtitle: "Vectorización Geoespacial de Alta Resolución y Teledetección",
    tag: "Geospatial AI / Remote Sensing",
    sector: "Observación de la Tierra, Infraestructura y Medio Ambiente",
    domain: "geospatial",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Plataforma para la ingesta continua de imágenes orbitales multiespectrales Sentinel-2 L2A, descomposición en teselas espaciales e indexación topológica.",
    whatItProves: "Demuestra competencia técnica en procesamiento de datos geoespaciales de alta dimensión, transformaciones raster/vector y modelos de segmentación en la nube.",
    problem: "La inspección manual de imágenes de satélite en extensiones territoriales amplias es lenta y costosa para operadoras de infraestructura y organismos ambientales, demorando la detección de alteraciones del suelo.",
    context: "Procesamiento de imágenes reales Sentinel-2 de la Agencia Espacial Europea (ESA), calibrando bandas multiespectrales con corrección de distorsiones geométricas y atmosféricas.",
    architecture: {
      overview: "Malla de inferencia distribuida por teselas: Ingesta de GeoTIFFs orbitales → Normalización de bandas multiespectrales (12 canales) → Modelos de segmentación visual (PyTorch/TorchGeo) → Vectorización de polígonos → Indexación topológica en PostGIS.",
      components: [
        "Pool de Workers de Tiling GeoTIFF con GDAL y Rasterio",
        "Pipeline de Normalización Espectral y Corrección Atmosférica",
        "Indexador Topológico Espacial en PostgreSQL 16 con PostGIS 3.4",
        "Mecanismo Diferencial de Detección de Cambios Temporales"
      ],
      diagramText: "Feed Sentinel-2 ➔ Ortorrectificación ➔ Malla Quadkey ➔ Inferencia Multiespectral ➔ Vectorización GeoJSON ➔ Índice PostGIS ➔ Webhook de Eventos"
    },
    realArchitectureVerification: {
      documented: "Descomposición raster en teselas quadkey con inferencia paralela en PyTorch e indexación topológica PostGIS.",
      implemented: "Python 3.11 con GDAL, Rasterio, Shapely, PyTorch (TorchGeo), cola Celery/Redis, PostgreSQL 16 + PostGIS 3.4.",
      presentedOnSite: "Descrito con precisión técnica utilizando GDAL, PostGIS y PyTorch sobre imágenes públicas Sentinel-2.",
      coherenceScore: "100% Coherente"
    },
    realTechnologies: {
      languages: ["Python 3.11", "SQL (Extensiones PostGIS)"],
      frameworks: ["FastAPI", "TorchGeo / PyTorch"],
      libraries: ["GDAL / OGR", "Rasterio", "Shapely", "GeoPandas", "NumPy / SciPy"],
      databases: ["PostgreSQL 16 con PostGIS 3.4", "Redis (Caché de teselas y colas)"],
      cloud: ["Google Cloud Run (GPUs NVIDIA)", "Google Cloud Storage"],
      iac: ["Docker con binarios C++ de GDAL compilados", "Terraform GCP"],
      apis: ["Endpoints conformes con estándares OGC", "GeoJSON Vector Tiles"],
      testing: ["Pytest con suite de geometría espacial", "Pruebas de tolerancia raster"],
      ciCd: ["GitHub Actions con caché de contenedores GDAL"],
      observability: ["Métricas Prometheus", "Dashboards espaciales"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
      isPrivate: false,
      visibilityBadge: "Repositorio Público",
      testSuiteStatus: "Suite automatizada con verificaciones matemáticas de raster y topología",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-002: Dynamic Quadkey Tiling vs Arbitrary Bounding Box", "ADR-005: FP16 Edge Inference"]
    },
    engineering: [
      "Arquitectura de procesamiento paralelo para rasters multiespectrales de 12 bandas con resolución nativa de 10m/pixel.",
      "Algoritmos de refinamiento de bordes sub-pixel para simplificación de polígonos manteniendo fidelidad geométrica.",
      "Filtros automatizados para descarte de nubes e interferencias atmosféricas en el análisis de vegetación."
    ],
    technology: [
      "Python 3.11 / PyTorch",
      "PostgreSQL / PostGIS",
      "GDAL / Rasterio / Shapely",
      "Redis Distributed Queue",
      "GCP Cloud Run GPUs",
      "GeoJSON / MapLibre"
    ],
    evolution: "Evolucionó de prototipos de clasificación estática a una plataforma continua de monitoreo temporal basada en datos reales de Sentinel-2.",
    challenges: [
      "Variaciones estacionales de reflectancia atmosférica que impactan los índices espectrales.",
      "Manejo de matrices multicanal de 16 bits con alta demanda de memoria.",
      "Garantía de continuidad topológica en los límites de corte de teselas adyacentes."
    ],
    decisions: [
      {
        decision: "Adopción de malla quadkey dinámica en lugar de recortes arbitrarios por cajas delimitadoras.",
        rationale: "Permite almacenamiento en caché jerárquico uniforme y elimina artefactos en las uniones de teselas."
      },
      {
        decision: "Inferencia con pesos cuantizados FP16 en nodos de nube.",
        rationale: "Optimiza el uso de memoria GPU en contenedores Cloud Run conservando la precisión de segmentación."
      }
    ],
    results: [
      {
        metric: "Resolución Nativa",
        value: "10m / pixel",
        description: "Procesa bandas Sentinel-2 L2A preservando la resolución física óptica nativa"
      },
      {
        metric: "Partición Espacial",
        value: "Quadkey Piramidal",
        description: "División jerárquica que permite procesamiento paralelo sin artefactos de borde"
      },
      {
        metric: "Entorno Operativo",
        value: "GCP Cloud Run",
        description: "Ejecución en contenedores con PostGIS en la región europe-west1"
      }
    ],
    evidence: "Código y contenedores con soporte a GDAL/PostGIS; validación con datos reales de la constelación Sentinel-2."
  },
  {
    id: "triminds-logistics-platform",
    title: "Trimindslabs Logistics Platform (TLP)",
    subtitle: "Operaciones Logísticas en Tiempo Real con RFID y Visión en el Borde",
    tag: "Logistics SaaS / Event Ingestion",
    sector: "Automatización de Almacenes y Operaciones Industriales",
    domain: "logistics",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Plataforma para operaciones logísticas multinquilino, procesamiento de telemetría RFID en alta frecuencia y recuento de activos mediante visión artificial móvil.",
    whatItProves: "Demuestra capacidad de ingeniería para construir backends empresariales escalables en Java 17 / Spring Boot 3.3 con interfaces web modernas e inteligencia distribuida.",
    problem: "Los centros de distribución sufren puntos ciegos de inventario, pérdidas de trazabilidad de bultos y discrepancias entre registros de gestión y recuento físico en almacén.",
    context: "Diseñado con arquitectura multitenancy (companyId) para unificar eventos de lectores RFID fijos, cintas de clasificación y aplicaciones móviles de conteo.",
    architecture: {
      overview: "Arquitectura orientada a eventos: Pasarela de Ingesta RFID ➔ Procesador de Eventos Spring Boot 3.3 ➔ Motor de Reglas Predictivo ➔ Difusión WebSocket STOMP/SockJS ➔ Dashboard Operativo React.",
      components: [
        "Pasarela de Ingesta de Eventos con soporte para lotes de telemetría continua",
        "Controlador de Reglas de Negocio y Trazabilidad en Spring Boot 3.3",
        "Broadcaster WebSocket STOMP con autenticación segura JWT",
        "Módulo de Borde con YOLOv8 para verificación visual rápida de embalajes"
      ],
      diagramText: "Lectores RFID / App Móvil ➔ Pasarela Spring ➔ Validación de Sesión ➔ Procesamiento de Eventos ➔ STOMP WebSockets ➔ Dashboard en Tiempo Real"
    },
    realArchitectureVerification: {
      documented: "Plataforma logística con backend Java 17 / Spring Boot 3.3 y frontend web React.",
      implemented: "Java 17, Spring Boot 3.3, Spring Data JPA, Spring Security, STOMP WebSockets, React 18, TypeScript, PostgreSQL.",
      presentedOnSite: "Stack correspondiente con la implementación real: Java, Spring Boot, React y WebSockets.",
      coherenceScore: "100% Coherente"
    },
    realTechnologies: {
      languages: ["Java 17", "TypeScript", "SQL (PostgreSQL)"],
      frameworks: ["Spring Boot 3.3", "React 18 / Vite", "Spring Security"],
      libraries: ["STOMP & SockJS WebSocket", "Deeplearning4j", "Axios", "Lombok"],
      databases: ["PostgreSQL (Producción)", "H2 (Entornos de prueba integrados)"],
      cloud: ["Contenedores Docker", "Aislamiento Multinquilino"],
      iac: ["Docker Compose", "Multi-stage Dockerfile"],
      apis: ["REST Endpoints", "WebSocket STOMP (/ws-rfid)"],
      testing: ["JUnit 5", "Spring Boot Test"],
      ciCd: ["GitHub Actions CI (Build Maven & Lint)"],
      observability: ["Spring Actuator", "Micrometer Metrics"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
      isPrivate: false,
      visibilityBadge: "Repositorio Público",
      testSuiteStatus: "Suite de pruebas JUnit cubriendo controladores de eventos y seguridad",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Multi-tenant Data Separation", "ADR-003: WebSocket STOMP vs Server-Sent Events"]
    },
    engineering: [
      "Implementación de canal de difusión de eventos de alta frecuencia con protocolo STOMP sobre WebSockets.",
      "Integración con visión artificial móvil (ObjectScanner) para sincronización de conteos físicos en planta.",
      "Modelado multinquilino garantizando segregación lógica estricta entre operadoras logísticas independientes."
    ],
    technology: [
      "Java 17 / Spring Boot 3.3",
      "React 18 / TypeScript",
      "STOMP WebSockets",
      "PostgreSQL / JPA",
      "Docker / Cloud Run",
      "Visión en el Borde (YOLOv8)"
    ],
    evolution: "Evolucionó de un prototipo de monitoreo de almacenes a un ecosistema logístico completo combinando telemetría RFID continua y verificación visual de activos.",
    challenges: [
      "Prevención de colisiones y lecturas duplicadas en pasos rápidos por arcos RFID.",
      "Mantenimiento de conexiones WebSocket estables en entornos fabriles con interferencias electromagnéticas.",
      "Sincronización bidireccional entre lecturas locales en planta y la base de datos central."
    ],
    decisions: [
      {
        decision: "Adopción de WebSockets con STOMP para actualización de terminales en planta.",
        rationale: "Garantiza actualización instantánea del estado de verificación sin sobrecarga de polling HTTP."
      },
      {
        decision: "Aislamiento de inquilinos mediante claves compuestas y tenant resolver programático.",
        rationale: "Permite operación SaaS segura entre múltiples empresas sin exigir clústeres aislados por cliente inicial."
      }
    ],
    results: [
      {
        metric: "Entrega de Eventos",
        value: "STOMP WebSocket",
        description: "Transmisión continua de telemetría a terminales de operarios en planta"
      },
      {
        metric: "Backend Corporativo",
        value: "Spring Boot 3.3",
        description: "Gestión transaccional rigurosa, seguridad JWT y persistencia relacional con JPA"
      },
      {
        metric: "Visión en el Borde",
        value: "Integración Móvil",
        description: "Recuento físico inmediato mediante cámara de terminal con procesamiento local"
      }
    ],
    evidence: "Repositorio público con código fuente Java y React, configuración Maven y controladores documentados."
  },
  {
    id: "triminds-security-layer",
    title: "Trimindslabs Security Platform",
    subtitle: "Identidad Corporativa, Arquitectura Hexagonal y Políticas Zero Trust",
    tag: "Security Engineering / Hexagonal Architecture",
    sector: "Ciberseguridad Corporativa e Infraestructura de Acceso",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Capa central de seguridad implementada con arquitectura hexagonal (Ports and Adapters) y control de acceso basado en atributos (ABAC).",
    whatItProves: "Demuestra rigor en ingeniería de seguridad, desacoplamiento arquitectónico y protección estricta de fronteras de dominio.",
    problem: "Sistemas monolíticos con reglas de autorización dispersas en controladores y consultas de base de datos crean graves brechas de seguridad e impiden auditorías.",
    context: "Diseñado como módulo transversal para autenticación, control de permisos y validación criptográfica de tokens en todos los servicios.",
    architecture: {
      overview: "Arquitectura Hexagonal: Núcleo de dominio inmutable → Puertos de entrada y salida → Adaptadores para Open Policy Agent (OPA), bóvedas criptográficas y PostgreSQL.",
      components: [
        "Núcleo de Dominio de Identidad y Motor de Políticas de Atributos",
        "Adaptador OPA para Evaluación Declarativa de Reglas (Rego)",
        "Motor de Validación Criptográfica de Tokens y Sesiones",
        "Suite de Pruebas de Arquitectura con ArchUnit"
      ],
      diagramText: "Petición ➔ Filtro de Seguridad ➔ Puerto de Entrada ➔ Núcleo de Dominio ➔ Evaluador OPA ➔ Puerto de Salida ➔ Almacén de Políticas"
    },
    realArchitectureVerification: {
      documented: "Arquitectura hexagonal para seguridad empresarial con Spring Boot y evaluación declarativa de políticas.",
      implemented: "Java 21, Spring Boot 3.x, ArchUnit para verificación de barreras arquitectónicas, integración OPA, Docker.",
      presentedOnSite: "Arquitectura y tecnologías correspondientes al código real.",
      coherenceScore: "100% Coherente"
    },
    realTechnologies: {
      languages: ["Java 21", "Rego (Lenguaje OPA)"],
      frameworks: ["Spring Boot 3.x", "Open Policy Agent"],
      libraries: ["ArchUnit", "Nimbus JOSE+JWT", "Lombok"],
      databases: ["PostgreSQL", "Caché de políticas en memoria"],
      cloud: ["Enclaves aislados Docker"],
      iac: ["Dockerfile multi-stage"],
      apis: ["REST Security Policy API"],
      testing: ["ArchUnit Architecture Tests", "JUnit 5 Security Verification"],
      ciCd: ["GitHub Actions (Maven Build, ArchUnit Enforcement)"],
      observability: ["Structured Security Audit Logging"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
      isPrivate: false,
      visibilityBadge: "Repositorio Público",
      testSuiteStatus: "Suite de pruebas ArchUnit que garantiza aislamiento estricto de capas",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Hexagonal Ports and Adapters", "ADR-002: Declarative Policies with OPA"]
    },
    engineering: [
      "Verificación automatizada con ArchUnit de que el núcleo de dominio no tiene dependencias de librerías externas o frameworks.",
      "Desacoplamiento de la lógica de autorización en políticas declarativas evaluadas sin recompilar el servicio.",
      "Registro inmutable de auditoría para cualquier mutación de privilegios administrativos."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Arquitectura Hexagonal",
      "Open Policy Agent (OPA)",
      "Zero Trust Architecture",
      "PostgreSQL",
      "ArchUnit"
    ],
    evolution: "Evolucionó de un filtro elemental de tokens JWT a una plataforma integral de seguridad basada en puertos, adaptadores y políticas declarativas OPA.",
    challenges: [
      "Preservación estricta de la pureza del modelo de dominio frente a comodidades del framework.",
      "Garantía de evaluación de consultas de autorización complejas en sub-milisegundos.",
      "Compatibilidad con diversos proveedores de identidad corporativos heterogéneos."
    ],
    decisions: [
      {
        decision: "Aplicación estricta del patrón Puertos y Adaptadores con validación ArchUnit en compilación.",
        rationale: "Impide la degradación arquitectónica a lo largo del tiempo causada por dependencias indebidas."
      },
      {
        decision: "Desacoplamiento del motor de políticas del código de la aplicación.",
        rationale: "Permite actualizar reglas de seguridad sin necesidad de recompilar y desplegar los microservicios."
      }
    ],
    results: [
      {
        metric: "Aislamiento Estructural",
        value: "Hexagonal Puro",
        description: "Cero dependencias externas en el núcleo de dominio validadas en el pipeline CI"
      },
      {
        metric: "Gobierno Automatizado",
        value: "ArchUnit Rules",
        description: "Pruebas automáticas que fallan la compilación si se vulneran los límites de capas"
      },
      {
        metric: "Políticas Declarativas",
        value: "Reglas OPA",
        description: "Gobernanza unificada de accesos basada en atributos y perfiles"
      }
    ],
    evidence: "Repositorio público con código fuente Java, pruebas ArchUnit y especificaciones documentadas."
  },
  {
    id: "triminds-ai-cloud-administrator",
    title: "Trimindslabs AI Cloud Administrator",
    subtitle: "Orquestador Multi-Cloud Basado en el Model Context Protocol (MCP)",
    tag: "Multi-Cloud MCP / Infrastructure Agent",
    sector: "Infraestructura Multi-Cloud e Ingeniería de Plataforma",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "deployed",
    honestScope: "Servidor Model Context Protocol (MCP) que expone herramientas controladas y seguras para operaciones en nubes AWS, GCP y Azure.",
    whatItProves: "Demuestra adopción temprana de estándares modernos de interoperabilidad de agentes (MCP) priorizando custodia de credenciales y ejecución restringida.",
    problem: "Los ingenieros de infraestructura pierden horas en tareas operativas dispersas en múltiples consolas de nube, mientras scripts descontrolados generan riesgos de caída de servicios.",
    context: "Creado para conectar asistentes de desarrollo con la infraestructura real de forma segura, exigiendo confirmación humana para comandos destructivos.",
    architecture: {
      overview: "Arquitectura basada en MCP: Cliente MCP (Claude / IDE) ➔ Protocolo JSON-RPC ➔ Servidor FastMCP ➔ Bóveda Criptográfica Keyring ➔ Adaptadores de Nube (boto3, google-cloud, azure-mgmt).",
      components: [
        "Servidor MCP desarrollado con la librería FastMCP",
        "Módulo de Bóveda Criptográfica del Sistema (Keyring)",
        "Adaptadores Modulares para AWS, Google Cloud y Azure",
        "Capa de Filtro y Políticas de Seguridad para Acciones Críticas"
      ],
      diagramText: "Cliente MCP ➔ Protocolo JSON-RPC ➔ Servidor FastMCP ➔ Filtro de Seguridad ➔ SDKs Multi-Cloud ➔ Nube Destino"
    },
    realArchitectureVerification: {
      documented: "Servidor MCP para administración multi-cloud en Python con FastMCP.",
      implemented: "Python 3.11+, FastMCP, Typer CLI, librerías oficiales de nube, Docker.",
      presentedOnSite: "Completamente alineado a los artefactos reales de código.",
      coherenceScore: "100% Coherente"
    },
    realTechnologies: {
      languages: ["Python 3.11+"],
      frameworks: ["FastMCP", "Typer CLI", "FastAPI"],
      libraries: ["boto3 (AWS)", "google-cloud-sdk", "azure-mgmt", "keyring"],
      databases: ["Almacenamiento local cifrado"],
      cloud: ["AWS", "Google Cloud Platform", "Microsoft Azure"],
      iac: ["Dockerfile"],
      apis: ["Model Context Protocol (MCP) JSON-RPC"],
      testing: ["Pytest"],
      ciCd: ["GitHub Actions"],
      observability: ["Structured Audit Logs"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
      isPrivate: false,
      visibilityBadge: "Repositorio Público",
      testSuiteStatus: "Pruebas automatizadas cubriendo herramientas MCP y custodia de claves",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Model Context Protocol over Proprietary APIs"]
    },
    engineering: [
      "Implementación completa de especificaciones del Model Context Protocol soportando herramientas, recursos y prompts.",
      "Aislamiento de credenciales de nube en bóvedas nativas del sistema operativo sin texto plano.",
      "Barreras de contención que rechazan comandos destructivos sin aprobación humana explícita."
    ],
    technology: [
      "Python 3.11+ / FastMCP",
      "Model Context Protocol",
      "AWS / Azure / GCP",
      "Typer CLI / FastAPI",
      "Bóveda Criptográfica Keyring",
      "Docker"
    ],
    evolution: "Desarrollado directamente sobre el estándar abierto Model Context Protocol para proporcionar un puente seguro entre agentes de IA y recursos de nube.",
    challenges: [
      "Homogeneización de modelos de recursos discrepantes entre AWS, GCP y Azure.",
      "Garantía de máxima seguridad de credenciales con aislamiento por sesión.",
      "Respuestas deterministas ante caídas transitorias de APIs de proveedores."
    ],
    decisions: [
      {
        decision: "Adopción exclusiva del estándar abierto Model Context Protocol (MCP).",
        rationale: "Elimina dependencias propietarias y asegura compatibilidad con cualquier cliente MCP estándar."
      },
      {
        decision: "Uso del Keyring nativo del sistema operativo para secretos.",
        rationale: "Previene fugas accidentales de tokens y credenciales en variables de entorno o archivos de configuración."
      }
    ],
    results: [
      {
        metric: "Estándar Abierto",
        value: "Protocolo MCP",
        description: "Interoperabilidad nativa con herramientas de desarrollo y agentes modernos"
      },
      {
        metric: "Custodia de Secretos",
        value: "Bóveda Keyring",
        description: "Credenciales de nube aisladas en los enclaves seguros del sistema operativo"
      },
      {
        metric: "Control Unificado",
        value: "Multi-Cloud Ops",
        description: "Herramientas comunes para AWS, Google Cloud y Microsoft Azure"
      }
    ],
    evidence: "Repositorio público con código Python, implementación FastMCP y Dockerfile funcional."
  },
  {
    id: "triminds-integration-platform",
    title: "Trimindslabs Integration Platform & Sovereign Mesh",
    subtitle: "Mediación de APIs Políglotas, Malla de Eventos e Interconexión Segura",
    tag: "Platform Engineering / Event Mesh",
    sector: "Ingeniería de Plataforma y Arquitectura Orientada a Eventos",
    domain: "platform",
    category: "what-we-built",
    truthStatus: "implemented",
    operationalStage: "validation",
    honestScope: "Sustrato de ingeniería de plataforma para mediación de APIs, enrutamiento asíncrono de mensajes e interconexión de servicios bajo regulación europea.",
    whatItProves: "Demuestra competencia en ingeniería de sistemas transversales, arquitecturas distribuidas y gobernanza de comunicación entre microservicios.",
    problem: "Los ecosistemas con múltiples servicios políglotas sufren acoplamiento punto a punto frágil, falta de trazabilidad distribuida e inconsistencia de esquemas de datos.",
    context: "Funciona como columna vertebral de comunicación para los módulos del ecosistema Trimindslabs, estandarizando contratos y observabilidad.",
    architecture: {
      overview: "Malla de eventos y mediación: Pasarela de API ➔ Malla de Mensajería Redis/Kafka ➔ Adaptadores de Protocolo (Spring Boot / FastAPI) ➔ Trazabilidad OpenTelemetry.",
      components: [
        "Pasarela Unificada de Mediación de Protocolos y Rutas",
        "Malla de Eventos Asíncronos con Redis Pub/Sub",
        "Adaptadores Políglotas Estandarizados en Java y Python",
        "Colector Centralizado de Trazabilidad con OpenTelemetry"
      ],
      diagramText: "Servicios Clientes ➔ Pasarela Unificada ➔ Malla de Eventos ➔ Adaptadores de Destino ➔ Colector OpenTelemetry"
    },
    realArchitectureVerification: {
      documented: "Plataforma de integración y malla de eventos con Spring Boot, Python y Redis.",
      implemented: "Java 21, Python 3.12, Redis, OpenTelemetry, Docker multi-stage.",
      presentedOnSite: "Alineado con los artefactos de código presentes en el repositorio.",
      coherenceScore: "100% Coherente"
    },
    realTechnologies: {
      languages: ["Java 21", "Python 3.12", "TypeScript"],
      frameworks: ["Spring Boot 3.x", "FastAPI"],
      libraries: ["Redis Pub/Sub", "OpenTelemetry Tracing"],
      databases: ["Redis", "PostgreSQL"],
      cloud: ["Hetzner Cloud", "OVHcloud", "GCP Cloud Run"],
      iac: ["Docker Multi-Stage", "Docker Compose"],
      apis: ["REST OpenAPI", "Async Event Messaging"],
      testing: ["Suites de pruebas de integración automatizadas"],
      ciCd: ["GitHub Actions CI"],
      observability: ["OpenTelemetry Collector"]
    },
    repository: {
      name: "RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
      isPrivate: false,
      visibilityBadge: "Repositorio Público",
      testSuiteStatus: "Pruebas automatizadas cubriendo adaptadores y enrutamiento de eventos",
      ciCdPipeline: "GitHub Actions CI: Passed",
      adrReferences: ["ADR-001: Asynchronous Event Mesh over Synchronous REST"]
    },
    engineering: [
      "Estandarización de contratos de eventos con validación rigurosa de esquemas en entornos heterogéneos.",
      "Implementación de trazabilidad distribuida unificada propagando identificadores de contexto entre servicios.",
      "Aislamiento de tráfico de datos sensibles en proveedores de infraestructura bajo jurisdicción europea."
    ],
    technology: [
      "Java 21 / Spring Boot 3.x",
      "Python 3.12 / FastAPI",
      "Redis Event Mesh",
      "OpenTelemetry",
      "Docker Multi-Stage",
      "Malla Soberana"
    ],
    evolution: "Evolucionó de scripts de integración aislados a una malla estructurada de eventos y mediación de servicios corporativos.",
    challenges: [
      "Garantía de interoperabilidad de tipos entre ecosistemas Java y Python.",
      "Mantenimiento de trazabilidad de extremo a extremo a través de múltiples saltos de red.",
      "Protección de datos en tránsito con cifrado de extremo a extremo."
    ],
    decisions: [
      {
        decision: "Uso de OpenTelemetry como estándar universal de observabilidad.",
        rationale: "Evita la dependencia de herramientas propietarias de monitoreo y estandariza la recolección de métricas."
      },
      {
        decision: "Comunicación primaria asíncrona orientada a eventos.",
        rationale: "Desacopla la disponibilidad de los servicios individuales y aumenta la resiliencia global del sistema."
      }
    ],
    results: [
      {
        metric: "Topología de Eventos",
        value: "Malla Desacoplada",
        description: "Comunicación asíncrona entre módulos sin bloqueo síncrono"
      },
      {
        metric: "Observabilidad",
        value: "OpenTelemetry",
        description: "Trazabilidad distribuida con propagación de contexto estandarizada"
      },
      {
        metric: "Jurisdicción Europea",
        value: "Nube Soberana",
        description: "Cumplimiento con estándares rigurosos de soberanía y protección de datos"
      }
    ],
    evidence: "Repositorio público con arquitectura de adaptadores, plantillas y suites de validación automatizadas."
  }
];

export const getProjects = (lang: Language): Project[] => {
  switch (lang) {
    case 'en': return PROJECTS_EN;
    case 'es': return PROJECTS_ES;
    default: return PROJECTS_PT;
  }
};

export const PROJECTS = PROJECTS_PT;

/* =========================================================================
   PRODUCTION GATES BY LANGUAGE
   ========================================================================= */

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

export const ARTICLES = ARTICLES_PT;

/* =========================================================================
   OPERATIONAL SYSTEMS BY LANGUAGE
   ========================================================================= */

const OPERATIONAL_PT: OperationalSystem[] = [
  {
    name: 'Trimindslabs Geo-AI (V4)',
    runtime: 'GCP Cloud Run (europe-west1) · GPUs NVIDIA L4',
    stage: 'Operacional em Produção',
    version: 'v4.1.2',
    stack: 'Python 3.11 · GDAL · PostGIS 3.4 · PyTorch',
    evidenceSource: 'Imagens multiespectrais Sentinel-2 L2A com tiling quadkey e contêineres validados',
  },
  {
    name: 'Trusted Compliance Agent',
    runtime: 'GCP Cloud Run (europe-west3) · Qdrant Enclave',
    stage: 'Operacional em Produção',
    version: 'v2.0.4',
    stack: 'FastAPI · Pydantic V2 · BGE-Reranker-Large',
    evidenceSource: 'Verificação por offset de caracteres e validação determinística de proveniência',
  },
  {
    name: 'Trimindslabs Logistics Platform (TLP)',
    runtime: 'Contêiner Docker Corporativo · Multi-Tenant',
    stage: 'Operacional em Produção',
    version: 'v3.3.0',
    stack: 'Java 17 · Spring Boot 3.3 · STOMP WebSockets · PostgreSQL',
    evidenceSource: 'Ingestão de bateladas de telemetria RFID e integração com visão computacional móvel',
  },
  {
    name: 'Trimindslabs Security Platform',
    runtime: 'Enclave Docker Isolado · Zero Trust',
    stage: 'Operacional em Produção',
    version: 'v1.4.1',
    stack: 'Java 21 · Spring Boot · Open Policy Agent (OPA) · ArchUnit',
    evidenceSource: 'Arquitetura hexagonal validada por regras ArchUnit sem vazamento de domínio',
  },
  {
    name: 'Trimindslabs AI Cloud Administrator',
    runtime: 'Servidor FastMCP Standard · CLI & JSON-RPC',
    stage: 'Operacional em Produção',
    version: 'v1.0.0',
    stack: 'Python 3.11+ · FastMCP · Keyring Cryptographic Vault',
    evidenceSource: 'Implementação conforme especificações do Model Context Protocol (MCP)',
  },
  {
    name: 'Integration Platform & Sovereign Mesh',
    runtime: 'Hetzner Cloud / OVHcloud (Jurisdição EU)',
    stage: 'Em Validação Contínua',
    version: 'v0.9.0-rc',
    stack: 'Java 21 · Python 3.12 · Redis Event Mesh · OpenTelemetry',
    evidenceSource: 'Barramento de eventos assíncronos e contratos de dados sob validação contínua',
  },
];

const OPERATIONAL_EN: OperationalSystem[] = [
  {
    name: 'Trimindslabs Geo-AI (V4)',
    runtime: 'GCP Cloud Run (europe-west1) · NVIDIA L4 GPUs',
    stage: 'Operational in Production',
    version: 'v4.1.2',
    stack: 'Python 3.11 · GDAL · PostGIS 3.4 · PyTorch',
    evidenceSource: 'Sentinel-2 L2A multi-spectral rasters with quadkey hierarchical tiling and validated containers',
  },
  {
    name: 'Trusted Compliance Agent',
    runtime: 'GCP Cloud Run (europe-west3) · Qdrant Enclave',
    stage: 'Operational in Production',
    version: 'v2.0.4',
    stack: 'FastAPI · Pydantic V2 · BGE-Reranker-Large',
    evidenceSource: 'Character-offset bounding provenance mapping and deterministic token verification',
  },
  {
    name: 'Trimindslabs Logistics Platform (TLP)',
    runtime: 'Enterprise Docker Container · Multi-Tenant',
    stage: 'Operational in Production',
    version: 'v3.3.0',
    stack: 'Java 17 · Spring Boot 3.3 · STOMP WebSockets · PostgreSQL',
    evidenceSource: 'High-frequency RFID telemetry ingestion batches with mobile edge computer vision sync',
  },
  {
    name: 'Trimindslabs Security Platform',
    runtime: 'Isolated Docker Enclave · Zero Trust',
    stage: 'Operational in Production',
    version: 'v1.4.1',
    stack: 'Java 21 · Spring Boot · Open Policy Agent (OPA) · ArchUnit',
    evidenceSource: 'Hexagonal architecture validated via automated ArchUnit rules preventing domain leakage',
  },
  {
    name: 'Trimindslabs AI Cloud Administrator',
    runtime: 'FastMCP Standard Server · CLI & JSON-RPC',
    stage: 'Operational in Production',
    version: 'v1.0.0',
    stack: 'Python 3.11+ · FastMCP · Keyring Cryptographic Vault',
    evidenceSource: 'Engineered strictly in compliance with open Model Context Protocol (MCP) specifications',
  },
  {
    name: 'Integration Platform & Sovereign Mesh',
    runtime: 'Hetzner Cloud / OVHcloud (EU Jurisdiction)',
    stage: 'Active Continuous Validation',
    version: 'v0.9.0-rc',
    stack: 'Java 21 · Python 3.12 · Redis Event Mesh · OpenTelemetry',
    evidenceSource: 'Asynchronous event bus and cross-service schema contracts under ongoing validation',
  },
];

const OPERATIONAL_ES: OperationalSystem[] = [
  {
    name: 'Trimindslabs Geo-AI (V4)',
    runtime: 'GCP Cloud Run (europe-west1) · GPUs NVIDIA L4',
    stage: 'Operativo en Producción',
    version: 'v4.1.2',
    stack: 'Python 3.11 · GDAL · PostGIS 3.4 · PyTorch',
    evidenceSource: 'Imágenes multiespectrales Sentinel-2 L2A con teselado quadkey y contenedores validados',
  },
  {
    name: 'Trusted Compliance Agent',
    runtime: 'GCP Cloud Run (europe-west3) · Enclave Qdrant',
    stage: 'Operativo en Producción',
    version: 'v2.0.4',
    stack: 'FastAPI · Pydantic V2 · BGE-Reranker-Large',
    evidenceSource: 'Verificación por offset de caracteres y validación determinista de procedencia',
  },
  {
    name: 'Trimindslabs Logistics Platform (TLP)',
    runtime: 'Contenedor Docker Corporativo · Multinquilino',
    stage: 'Operativo en Producción',
    version: 'v3.3.0',
    stack: 'Java 17 · Spring Boot 3.3 · STOMP WebSockets · PostgreSQL',
    evidenceSource: 'Ingesta de lotes de telemetría RFID e integración con visión artificial móvil en planta',
  },
  {
    name: 'Trimindslabs Security Platform',
    runtime: 'Enclave Docker Aislado · Zero Trust',
    stage: 'Operativo en Producción',
    version: 'v1.4.1',
    stack: 'Java 21 · Spring Boot · Open Policy Agent (OPA) · ArchUnit',
    evidenceSource: 'Arquitectura hexagonal verificada por reglas ArchUnit sin filtración de dominio',
  },
  {
    name: 'Trimindslabs AI Cloud Administrator',
    runtime: 'Servidor FastMCP Estándar · CLI & JSON-RPC',
    stage: 'Operativo en Producción',
    version: 'v1.0.0',
    stack: 'Python 3.11+ · FastMCP · Bóveda Criptográfica Keyring',
    evidenceSource: 'Implementación conforme a las especificaciones del Model Context Protocol (MCP)',
  },
  {
    name: 'Integration Platform & Sovereign Mesh',
    runtime: 'Hetzner Cloud / OVHcloud (Jurisdicción UE)',
    stage: 'En Validación Continua',
    version: 'v0.9.0-rc',
    stack: 'Java 21 · Python 3.12 · Redis Event Mesh · OpenTelemetry',
    evidenceSource: 'Malla de eventos asíncronos y contratos de datos bajo validación continua',
  },
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
