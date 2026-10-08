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

export const PROJECTS: Project[] = [
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent",
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Geo-AI",
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform",
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Security-Layer",
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Ai-cloud-Administrator",
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
      visibilityBadge: "Public Repository",
      url: "https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Integration-Platform",
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

export const PRODUCTION_GATES: ProductionGate[] = [
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

export const VOCABULARY_TERMS: VocabularyTerm[] = [
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

export const ARTICLES: Article[] = [
  {
    id: "traditional-rag-to-trusted-retrieval",
    title: "Do RAG Tradicional à Recuperação Verificada: Por que a Busca Vetorial Pura Falha na Empresa",
    category: "whitepaper",
    readingTime: "8 min read",
    readTime: "8 min read",
    publishedDate: "2026",
    publicationDate: "2026",
    tags: ["RAG", "Hybrid Search", "Vector Databases", "Enterprise AI"],
    abstract: "Uma análise técnica sobre as limitações fundamentais da busca vetorial baseada exclusivamente em embeddings e como a recuperação híbrida com rerankers neurais e validação de proveniência resolve alucinações em sistemas corporativos.",
    keyTakeaways: [
      "Embeddings densos são excelentes em capturar similaridade semântica, mas frequentemente falham em termos técnicos exatos, acrônimos e códigos regulatórios.",
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
        codeSnippet: "# Reciprocal Rank Fusion (k=60)\\nscore = (1.0 / (60 + rank_dense)) + (1.0 / (60 + rank_bm25))"
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
    readingTime: "7 min read",
    readTime: "7 min read",
    publishedDate: "2026",
    publicationDate: "2026",
    tags: ["Deterministic Search", "Autonomous Agents", "Information Retrieval"],
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
    readingTime: "9 min read",
    readTime: "9 min read",
    publishedDate: "2026",
    publicationDate: "2026",
    tags: ["Observability", "OpenTelemetry", "Guardrails", "Production AI"],
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
    readingTime: "10 min read",
    readTime: "10 min read",
    publishedDate: "2026",
    publicationDate: "2026",
    tags: ["Production Readiness", "Engineering Standards", "Governance"],
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
    readingTime: "Laboratório",
    readTime: "Laboratório",
    publishedDate: "Laboratório Ativo",
    publicationDate: "Laboratório Ativo",
    tags: ["Research Lab", "Claim Verification", "Hallucination Detection"],
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
    readingTime: "Laboratório",
    readTime: "Laboratório",
    publishedDate: "Laboratório Ativo",
    publicationDate: "Laboratório Ativo",
    tags: ["Research Lab", "Computer Vision", "Assistive Technology"],
    abstract: "Projeto experimental explorando modelos de detecção de objetos de baixa latência e segmentação em tempo real para auxílio à navegação espacial e reconhecimento de obstáculos.",
    keyTakeaways: [
      "Otimização de modelos leves para execução em dispositivos móveis e embarcados com baixo consumo energético.",
      "Geração de alertas espaciais com base em proximidade e probabilidade de colisão.",
      "Pesquisa aplicada que originou as técnicas de inferência móvel utilizadas no ObjectScanner."
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

export const TRANSLATIONS: Record<string, Record<string, string>> = {
  pt: {
    "nav.home": "Visão Geral",
    "nav.aiSystems": "Sistemas & Produtos",
    "nav.engineering": "Arquitetura",
    "nav.research": "Pesquisa & Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "Auditoria: 11 Gates",
    "nav.dashboardCta": "Verificar Estado de Engenharia",
    
    "hero.badge": "ENGENHARIA DE SISTEMAS INTELIGENTES",
    "hero.titlePrefix": "Sistemas inteligentes construídos para",
    "hero.titleHighlight": "certeza determinística",
    "hero.titleSuffix": "e zero alucinação.",
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

    "arch.kicker": "PADRÕES TRANSVERSAIS",
    "arch.title": "Arquitetura de sistemas desenhada para produção real.",
    "arch.subtitle": "Nossa engenharia rejeita atalhos probabilísticos. Implementamos isolamento explícito, verificabilidade ponta a ponta e auditoria rastreável em cada componente.",

    "dashboardPreview.kicker": "CAMADA DE TRANSPARÊNCIA & PROVAS",
    "dashboardPreview.title": "Evidências verificáveis e governança de release.",
    "dashboardPreview.subtitle": "Não apenas afirmamos o que foi construído: disponibilizamos dados sobre o estado dos serviços, critérios de release dos 11 Gates e definições técnicas formais.",
    "dashboardPreview.cta": "Verificar Estado de Engenharia",

    "research.kicker": "PESQUISA, ARTIGOS & LABS",
    "research.title": "Fundamentação teórica e laboratórios de verificação.",
    "research.subtitle": "Publicações de engenharia detalhando por que abordagens ingênuas falham em escala corporativa e como implementamos controles determinísticos.",
    "research.readArticle": "Ler Whitepaper",
    "research.viewLab": "Ver Laboratório",

    "footer.positioning": "Engenharia de sistemas inteligentes com processamento determinístico, proveniência de citações imutável e governança corporativa de release.",
    "footer.rights": "Todos os direitos reservados.",
    "footer.contact": "Contato Técnico & Comercial",
    "footer.jurisdiction": "JURISDIÇÃO DE DADOS: QUALIFICADA POR SISTEMA (EUROPE-WEST-1 / EUROPE-WEST-3)"
  },
  en: {
    "nav.home": "Overview",
    "nav.aiSystems": "Systems & Products",
    "nav.engineering": "Architecture",
    "nav.research": "Research & Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "Audit: 11 Gates",
    "nav.dashboardCta": "Access Engineering State",

    "hero.badge": "INTELLIGENT SYSTEMS ENGINEERING",
    "hero.titlePrefix": "Intelligent systems engineered for",
    "hero.titleHighlight": "deterministic certainty",
    "hero.titleSuffix": "and zero hallucination.",
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

    "arch.kicker": "TRANSVERSAL STANDARDS",
    "arch.title": "Systems architecture designed for real-world production.",
    "arch.subtitle": "Our engineering rejects stochastic shortcuts in enterprise software. We enforce explicit isolation, immutable audit traces, and mathematical verification across every component.",

    "dashboardPreview.kicker": "TRANSPARENCY & EVIDENCE LAYER",
    "dashboardPreview.title": "Verifiable evidence and release governance.",
    "dashboardPreview.subtitle": "We do not merely assert claims: we provide transparent data on declared service health, formal 11 Gates release criteria, and technical terminology specifications.",
    "dashboardPreview.cta": "Access Engineering State",

    "research.kicker": "RESEARCH, ARTICLES & LABS",
    "research.title": "Theoretical foundations and verification laboratories.",
    "research.subtitle": "Engineering publications detailing why naive approaches fail at enterprise scale and how we implement deterministic guardrails.",
    "research.readArticle": "Read Whitepaper",
    "research.viewLab": "Explore Laboratory",

    "footer.positioning": "Engineering intelligent systems with deterministic processing, immutable citation provenance, and corporate release governance.",
    "footer.rights": "All rights reserved.",
    "footer.contact": "Technical & Business Inquiries",
    "footer.jurisdiction": "DATA JURISDICTION: QUALIFIED PER SYSTEM (EUROPE-WEST-1 / EUROPE-WEST-3)"
  },
  es: {
    "nav.home": "Visión General",
    "nav.aiSystems": "Sistemas y Productos",
    "nav.engineering": "Arquitectura",
    "nav.research": "Investigación y Labs",
    "nav.dashboard": "Engineering Dashboard",
    "nav.gatesBtn": "Auditoría: 11 Gates",
    "nav.dashboardCta": "Verificar Estado de Ingeniería",

    "hero.badge": "INGENIERÍA DE SISTEMAS INTELIGENTES",
    "hero.titlePrefix": "Sistemas inteligentes diseñados para",
    "hero.titleHighlight": "certeza determinista",
    "hero.titleSuffix": "y cero alucinación.",
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

    "arch.kicker": "ESTÁNDARES TRANSVERSALES",
    "arch.title": "Arquitectura de sistemas diseñada para producción real.",
    "arch.subtitle": "Nuestra ingeniería rechaza atajos probabilísticos. Implementamos aislamiento explícito, verificabilidad total y auditoría rastreable en cada componente.",

    "dashboardPreview.kicker": "CAPA DE TRANSPARENCIA Y PRUEBAS",
    "dashboardPreview.title": "Evidencias verificables y gobernanza de release.",
    "dashboardPreview.subtitle": "No solo afirmamos lo construido: proporcionamos datos transparentes sobre el estado de los servicios, criterios de release de los 11 Gates y terminología técnica formal.",
    "dashboardPreview.cta": "Verificar Estado de Ingeniería",

    "research.kicker": "INVESTIGACIÓN, ARTÍCULOS Y LABS",
    "research.title": "Fundamentación teórica y laboratorios de verificación.",
    "research.subtitle": "Publicaciones de ingeniería que explican por qué las soluciones ingenuas fallan en escala corporativa y cómo implementamos controles deterministas.",
    "research.readArticle": "Leer Whitepaper",
    "research.viewLab": "Explorar Laboratorio",

    "footer.positioning": "Ingeniería de sistemas inteligentes con procesamiento determinista, procedencia de citas inmutable y gobernanza corporativa de release.",
    "footer.rights": "Todos los derechos reservados.",
    "footer.contact": "Contacto Técnico y Comercial",
    "footer.jurisdiction": "JURISDICCIÓN DE DATOS: CUALIFICADA POR SISTEMA (EUROPE-WEST-1 / EUROPE-WEST-3)"
  }
};
