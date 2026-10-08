import React, { useState } from 'react';
import { Project } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ShieldCheck,
  Cpu,
  Layers,
  CheckCircle2,
  AlertCircle,
  FileText,
  BarChart3,
  Server,
  Terminal,
} from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  initialTab?: 'overview' | 'technical';
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({
  project,
  initialTab = 'overview',
  onClose,
}) => {
  const { language } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'technical'>(initialTab);

  React.useEffect(() => {
    setActiveTab(initialTab);
  }, [initialTab, project]);

  if (!project) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-[#F4F4F1] border border-[#D1D1CD] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Topbar */}
        <div className="p-6 bg-white border-b border-[#E2E8F0] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] uppercase mb-1">
              <span>{project.sector}</span>
              <span aria-hidden="true">·</span>
              <span
                className={`font-semibold ${
                  project.truthStatus === 'implemented'
                    ? 'text-emerald-700'
                    : project.truthStatus === 'partial'
                    ? 'text-amber-700'
                    : 'text-slate-700'
                }`}
              >
                {project.truthStatus === 'implemented'
                  ? (language === 'pt' ? 'Operacional em Produção' : language === 'es' ? 'Operativo en Producción' : 'Operational in Production')
                  : project.truthStatus === 'partial'
                  ? (language === 'pt' ? 'Em Validação Contínua' : language === 'es' ? 'En Validación Continua' : 'Active Validation')
                  : (language === 'pt' ? 'Especificação / RFC' : language === 'es' ? 'Especificación / RFC' : 'RFC Specification')}
              </span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              {project.title}
            </h2>
            <p className="text-sm text-[#555550] mt-1">{project.subtitle}</p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Layer Tabs: Case Study vs Technical Spec */}
        <div className="px-6 py-2 bg-white border-b border-[#E2E8F0] flex items-center gap-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors cursor-pointer ${
              activeTab === 'overview'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            {language === 'pt' ? '1. Estudo de Caso & Solução' : language === 'es' ? '1. Caso de Estudio y Solución' : '1. Case Study & Solution'}
          </button>

          <button
            onClick={() => setActiveTab('technical')}
            className={`px-4 py-2 text-xs font-medium rounded-md transition-colors flex items-center gap-1.5 cursor-pointer ${
              activeTab === 'technical'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span>{language === 'pt' ? '2. Especificação de Engenharia & Arquitetura' : language === 'es' ? '2. Especificación de Ingeniería y Arquitectura' : '2. Engineering Specification & Architecture'}</span>
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {activeTab === 'overview' ? (
            /* LAYER 1: DEMONSTRATION & CASE STUDY */
            <div className="space-y-6">
              {/* Honest Scope Banner */}
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl">
                <div className="text-xs font-mono text-[#70706B] uppercase mb-1 flex items-center gap-1.5 font-semibold">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'pt' ? 'Escopo Operacional & Propósito' : language === 'es' ? 'Alcance Operativo y Propósito' : 'Operational Scope & Purpose'}</span>
                </div>
                <p className="text-sm text-[#1A1A1A] leading-relaxed">
                  {project.honestScope}
                </p>
                {project.whatItProves && (
                  <p className="text-xs text-[#555550] mt-2.5 pt-2.5 border-t border-[#F0EFEA] leading-relaxed">
                    <strong className="text-[#1A1A1A]">{language === 'pt' ? 'O que este sistema comprova: ' : language === 'es' ? 'Lo que demuestra este sistema: ' : 'What it proves: '}</strong>
                    {project.whatItProves}
                  </p>
                )}
              </div>

              {/* Problem & Context Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-2 flex items-center gap-1.5 font-semibold">
                    <AlertCircle className="w-3.5 h-3.5 text-amber-600" />
                    <span>{language === 'pt' ? 'O Problema' : language === 'es' ? 'El Problema' : 'The Problem'}</span>
                  </div>
                  <p className="text-sm text-[#4A4A45] leading-relaxed">
                    {project.problem}
                  </p>
                </div>

                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-2 flex items-center gap-1.5 font-semibold">
                    <Layers className="w-3.5 h-3.5 text-blue-600" />
                    <span>{language === 'pt' ? 'Contexto de Aplicação' : language === 'es' ? 'Contexto de Aplicación' : 'Operational Context'}</span>
                  </div>
                  <p className="text-sm text-[#4A4A45] leading-relaxed">
                    {project.context}
                  </p>
                </div>
              </div>

              {/* Quantifiable / Verified Results */}
              {project.results && project.results.length > 0 && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-4 flex items-center gap-1.5 font-semibold">
                    <BarChart3 className="w-3.5 h-3.5 text-emerald-600" />
                    <span>{language === 'pt' ? 'Capacidades & Validações de Sistema' : language === 'es' ? 'Capacidades y Validaciones del Sistema' : 'System Capabilities & Validations'}</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {project.results.map((res, i) => (
                      <div key={i} className="p-3.5 bg-[#FAF9F6] border border-[#F0EFEA] rounded-lg">
                        <div className="text-xs text-[#70706B] font-mono">{res.metric}</div>
                        <div className="font-serif text-xl font-bold text-[#1A1A1A] my-1">
                          {res.value}
                        </div>
                        <div className="text-xs text-[#555550] leading-snug">{res.description}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Architectural & Engineering Decisions */}
              {project.decisions && project.decisions.length > 0 && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-3 font-semibold">
                    {language === 'pt' ? 'Decisões Críticas de Engenharia' : language === 'es' ? 'Decisiones Críticas de Ingeniería' : 'Critical Engineering Decisions'}
                  </div>
                  <div className="space-y-3">
                    {project.decisions.map((dec, i) => (
                      <div key={i} className="text-xs border-l-2 border-[#1A1A1A] pl-3 py-1">
                        <div className="font-semibold text-[#1A1A1A]">{dec.decision}</div>
                        <div className="text-[#555550] mt-0.5">{dec.rationale}</div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Next Step CTA: Direct link to technical layer */}
              <div className="flex justify-end pt-2">
                <button
                  onClick={() => setActiveTab('technical')}
                  className="inline-flex items-center gap-2 px-4 py-2.5 text-xs font-mono font-medium text-[#1A1A1A] bg-white border border-[#D1D1CD] hover:border-[#1A1A1A] rounded-lg transition-colors shadow-xs cursor-pointer"
                >
                  <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{language === 'pt' ? 'Avançar para Especificação de Engenharia →' : language === 'es' ? 'Avanzar a Especificación de Ingeniería →' : 'Expand to Engineering Specification →'}</span>
                </button>
              </div>
            </div>
          ) : (
            /* LAYER 2: ENGINEERING SPECIFICATION & TOPOLOGY */
            <div className="space-y-6">
              {/* Architecture Topology & Flow */}
              {project.architecture && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-2 font-semibold">
                    Topologia e Fluxo de Execução
                  </div>
                  <p className="text-xs text-[#555550] mb-3 leading-relaxed">
                    {project.architecture.overview}
                  </p>
                  <div className="p-3.5 bg-[#1A1A1A] text-[#F4F4F1] font-mono text-xs rounded-lg overflow-x-auto">
                    <code>{project.architecture.diagramText}</code>
                  </div>
                  {project.architecture.components && (
                    <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs">
                      {project.architecture.components.map((comp, idx) => (
                        <div key={idx} className="flex items-start gap-1.5 text-[#555550]">
                          <span className="text-emerald-600 font-bold">›</span>
                          <span>{comp}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              )}

              {/* Architectural Coherence Audit */}
              {project.realArchitectureVerification && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="flex items-center justify-between mb-3">
                    <div className="text-xs font-mono text-[#70706B] uppercase font-semibold">
                      Auditoria de Coerência Arquitetural
                    </div>
                    <span className="text-xs font-mono font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                      {project.realArchitectureVerification.coherenceScore}
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs">
                    <div className="p-3 bg-[#FAF9F6] rounded border border-[#F0EFEA]">
                      <span className="font-semibold text-[#1A1A1A]">Documentado: </span>
                      <span className="text-[#555550]">{project.realArchitectureVerification.documented}</span>
                    </div>
                    <div className="p-3 bg-[#FAF9F6] rounded border border-[#F0EFEA]">
                      <span className="font-semibold text-[#1A1A1A]">Implementado em Código: </span>
                      <span className="text-[#555550]">{project.realArchitectureVerification.implemented}</span>
                    </div>
                    <div className="p-3 bg-[#FAF9F6] rounded border border-[#F0EFEA]">
                      <span className="font-semibold text-[#1A1A1A]">Declaração Pública: </span>
                      <span className="text-[#555550]">{project.realArchitectureVerification.presentedOnSite}</span>
                    </div>
                  </div>
                </div>
              )}

              {/* Automated Test Suite & ADR References */}
              {project.repository && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-3 font-semibold">
                    Validação e Governança Técnica
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs font-mono">
                    <div className="p-3 bg-[#FAF9F6] rounded-lg border border-[#F0EFEA]">
                      <div className="text-[#70706B] mb-1">Status da Suíte de Testes:</div>
                      <div className="text-emerald-700 font-semibold flex items-center gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5" />
                        <span>{project.repository.testSuiteStatus || 'Suíte Automatizada Validada'}</span>
                      </div>
                    </div>

                    <div className="p-3 bg-[#FAF9F6] rounded-lg border border-[#F0EFEA]">
                      <div className="text-[#70706B] mb-1">Pipeline de Integração Contínua:</div>
                      <div className="text-[#1A1A1A] font-semibold flex items-center gap-1.5">
                        <Server className="w-3.5 h-3.5 text-blue-600" />
                        <span>{project.repository.ciCdPipeline || 'Pipelines de CI Ativas'}</span>
                      </div>
                    </div>
                  </div>

                  {project.repository.adrReferences && project.repository.adrReferences.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-[#F0EFEA]">
                      <div className="text-xs font-mono text-[#70706B] mb-2 font-semibold">
                        Architecture Decision Records (ADRs):
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {project.repository.adrReferences.map((adr, i) => (
                          <span
                            key={i}
                            className="px-2 py-1 text-xs font-mono bg-[#F4F4F1] border border-[#E2E8F0] rounded text-[#1A1A1A]"
                          >
                            {adr}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Real Technologies Substrate */}
              {project.realTechnologies && (
                <div className="p-5 bg-white border border-[#E2E8F0] rounded-xl">
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-4 flex items-center gap-1.5 font-semibold">
                    <Cpu className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Stack de Tecnologias em Produção</span>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
                    {project.realTechnologies.languages && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">Linguagens</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.languages.join(', ')}</div>
                      </div>
                    )}
                    {project.realTechnologies.frameworks && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">Frameworks</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.frameworks.join(', ')}</div>
                      </div>
                    )}
                    {project.realTechnologies.databases && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">Bancos de Dados</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.databases.join(', ')}</div>
                      </div>
                    )}
                    {project.realTechnologies.cloud && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">Nuvem &amp; Runtime</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.cloud.join(', ')}</div>
                      </div>
                    )}
                    {project.realTechnologies.ciCd && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">CI/CD &amp; Build</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.ciCd.join(', ')}</div>
                      </div>
                    )}
                    {project.realTechnologies.observability && (
                      <div>
                        <div className="font-mono text-[#70706B] uppercase text-[11px] mb-1">Observabilidade</div>
                        <div className="font-semibold text-[#1A1A1A]">{project.realTechnologies.observability.join(', ')}</div>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Concrete Evidence Statement */}
              <div className="p-4 bg-[#FAF9F6] border border-[#E2E8F0] rounded-xl text-xs text-[#555550]">
                <strong className="text-[#1A1A1A] font-mono">Fonte de Evidência: </strong>
                <span>{project.evidence}</span>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#70706B]">
          <div className="flex items-center gap-2">
            <span>ID: {project.id}</span>
            <span>·</span>
            <span>Trimindslabs Systems Architecture</span>
          </div>

          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-md transition-colors cursor-pointer"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
