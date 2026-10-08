import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Cpu, ShieldCheck, GitMerge, FileCode, CheckCircle2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { language } = useLanguage();

  const architecturalPillars = [
    {
      num: '01',
      title: language === 'pt' ? 'Busca Híbrida & Proveniência Exata' : language === 'es' ? 'Búsqueda Híbrida y Procedencia Exacta' : 'Hybrid Search & Provenance',
      icon: Cpu,
      summary: language === 'pt'
        ? 'Fusão de busca léxica (BM25) e vetorial densa (Qdrant), rerankeada com BGE-Reranker-Large e validada por hash SHA-256 de caracteres.'
        : language === 'es'
        ? 'Fusión de búsqueda léxica (BM25) y vectorial densa (Qdrant), rerankeada con BGE-Reranker-Large y validada por hash SHA-256.'
        : 'Lexical (BM25) and dense vector (Qdrant) fusion reranked with BGE-Reranker-Large and validated by character-level SHA-256 tokens.',
      details: [
        'Eliminação de alucinações jurídicas sob o EU AI Act',
        'Citação rastreável até o parágrafo da diretiva oficial',
        'Rejeição automática de respostas sem correspondência exata',
      ],
    },
    {
      num: '02',
      title: language === 'pt' ? 'Arquitetura Hexagonal & Zero Trust' : language === 'es' ? 'Arquitectura Hexagonal y Zero Trust' : 'Hexagonal Architecture & Zero Trust',
      icon: ShieldCheck,
      summary: language === 'pt'
        ? 'Isolamento estrito entre núcleo de domínio, adaptadores de banco e políticas de acesso (OPA), garantindo portabilidade entre nuvens.'
        : language === 'es'
        ? 'Aislamiento estricto entre núcleo de dominio, adaptadores de datos y políticas de acceso (OPA), garantizando portabilidad entre nubes.'
        : 'Strict decoupling between domain core, database adapters, and Open Policy Agent (OPA) access rules across independent enclaves.',
      details: [
        'Testes arquiteturais com ArchUnit em Java 21',
        'Controle de acesso granular baseado em atributos (ABAC)',
        'Isolamento criptográfico de credenciais via Keyring Vault',
      ],
    },
    {
      num: '03',
      title: language === 'pt' ? 'Workflows Agênticos Determinísticos' : language === 'es' ? 'Flujos Agénticos Deterministas' : 'Deterministic Controlled Agents',
      icon: GitMerge,
      summary: language === 'pt'
        ? 'Agentes com máquina de estados finita, validação estrita de esquemas Pydantic V2 e limites rígidos de execução, impedindo loops estocásticos.'
        : language === 'es'
        ? 'Agentes con máquina de estados finita, validación estricta de esquemas Pydantic V2 y límites rígidos de ejecución, evitando bucles estocásticos.'
        : 'Finite state machine workflows with strict Pydantic V2 JSON schema constraints and deterministic exit gates instead of unbound loops.',
      details: [
        'Orquestração multi-nuvem via Model Context Protocol (MCP)',
        'Contratos explícitos de payload sem mutabilidade silenciosa',
        'Trilhas de auditoria criptograficamente assinadas',
      ],
    },
    {
      num: '04',
      title: language === 'pt' ? 'Ingestão Geoespacial Multiespectral' : language === 'es' ? 'Ingesta Geoespacial Multiespectral' : 'Multi-Spectral Spatial Ingestion',
      icon: FileCode,
      summary: language === 'pt'
        ? 'Pipelines paralelas com GDAL e Rasterio para processar rasters de 12 bandas Sentinel-2 L2A com PostGIS e GPUs dedicadas em Cloud Run.'
        : language === 'es'
        ? 'Pipelines paralelas con GDAL y Rasterio para procesar rasters de 12 bandas Sentinel-2 L2A con PostGIS y GPUs en Cloud Run.'
        : 'Parallel worker pipelines processing 12-band Sentinel-2 L2A rasters at 10m/pixel resolution with PostGIS topologies on Cloud Run.',
      details: [
        'Refinamento de bordas sub-pixel para polígonos agrícolas',
        'Índices de vegetação determinísticos (NDVI, NDWI, SAVI)',
        'Processamento contínuo de 24.000+ km de corredores lineares',
      ],
    },
  ];

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {language === 'pt' ? 'PADRÕES TRANSVERSAIS' : language === 'es' ? 'ESTÁNDARES TRANSVERSALES' : 'TRANSVERSAL STANDARDS'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {language === 'pt'
              ? 'Arquitetura de sistemas desenhada para produção real.'
              : language === 'es'
              ? 'Arquitectura de sistemas diseñada para producción real.'
              : 'Systems Architecture Built for Real Production.'}
          </h2>
          <p className="mt-3 text-base text-[#555550]">
            {language === 'pt'
              ? 'Nossa engenharia rejeita atalhos probabilísticos. Implementamos isolamento explícito, verificabilidade ponta a ponta e auditoria rastreável em cada componente.'
              : language === 'es'
              ? 'Nuestra ingeniería rechaza atajos probabilísticos. Implementamos aislamiento explícito, verificabilidad total y auditoría rastreable en cada componente.'
              : 'We reject stochastic shortcuts in enterprise software. We enforce explicit isolation, immutable audit traces, and mathematical verification across every component.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {architecturalPillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.num}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:border-[#1A1A1A] transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#70706B] font-semibold">
                    {pillar.num} // ARQUITETURA
                  </span>
                  <div className="w-8 h-8 rounded-lg bg-[#FAF9F6] border border-[#EAEAE6] flex items-center justify-center text-[#1A1A1A]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">
                  {pillar.title}
                </h3>
                <p className="text-sm text-[#555550] leading-relaxed mb-4">
                  {pillar.summary}
                </p>

                <div className="pt-4 border-t border-[#F0F0EC] space-y-2">
                  {pillar.details.map((detail, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#4A4A45]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
