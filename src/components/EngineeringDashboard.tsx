import React, { useState } from 'react';
import { getProductionGates, getVocabularyTerms, getProjects, getOperationalSystems } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ShieldCheck,
  BookOpen,
  Server,
  CheckCircle2,
  AlertTriangle,
  Clock,
  ExternalLink,
  GitBranch,
  Terminal,
} from 'lucide-react';

interface EngineeringDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'telemetry' | 'gates' | 'vocab' | 'releases';
}

export const EngineeringDashboard: React.FC<EngineeringDashboardProps> = ({
  isOpen,
  onClose,
  initialTab = 'telemetry',
}) => {
  const { language, t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'telemetry' | 'gates' | 'vocab' | 'releases'>(initialTab);

  if (!isOpen) return null;

  const operationalSystems = getOperationalSystems(language);
  const productionGates = getProductionGates(language);
  const vocabularyTerms = getVocabularyTerms(language);
  const projects = getProjects(language);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-150"
      onClick={onClose}
    >
      <div
        className="bg-[#F4F4F1] border border-[#D1D1CD] rounded-2xl max-w-5xl w-full max-h-[92vh] flex flex-col shadow-2xl overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-white border-b border-[#E2E8F0] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] uppercase mb-1">
              <Terminal className="w-4 h-4 text-emerald-600" />
              <span>{t('dashboard.kicker', 'Camada de Transparência & Evidência')}</span>
              <span aria-hidden="true">·</span>
              <span className="text-emerald-700 font-semibold">TRIMINDSLABS OPERATIONAL STATE</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Engineering Dashboard
            </h2>
            <p className="text-xs text-[#555550] mt-1 max-w-3xl leading-relaxed">
              {language === 'pt'
                ? 'Evidências verificáveis sobre a arquitetura dos sistemas, ambientes de nuvem declarados, auditoria dos 11 Gates e governança técnica.'
                : language === 'es'
                ? 'Evidencias comprobables sobre la arquitectura de los sistemas, entornos de nube declarados, auditoría de los 11 Gates y gobernanza técnica.'
                : 'Verifiable operational evidence on systems architecture, declared cloud environments, 11 Gates audit criteria, and technical governance.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-lg transition-colors cursor-pointer"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 py-2 bg-white border-b border-[#E2E8F0] flex items-center gap-2 overflow-x-auto">
          <button
            onClick={() => setActiveTab('telemetry')}
            className={`px-3.5 py-2 text-xs font-mono font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'telemetry'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            <Server className="w-3.5 h-3.5 text-purple-400" />
            <span>{t('dashboard.tabTelemetry', '1. Ambientes & Estado Operacional')}</span>
          </button>

          <button
            onClick={() => setActiveTab('gates')}
            className={`px-3.5 py-2 text-xs font-mono font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'gates'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span>{t('dashboard.tabGates', '2. Matriz de Auditoria (11 Gates)')}</span>
          </button>

          <button
            onClick={() => setActiveTab('releases')}
            className={`px-3.5 py-2 text-xs font-mono font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'releases'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            <GitBranch className="w-3.5 h-3.5 text-blue-500" />
            <span>{t('dashboard.tabReleases', '3. Releases & Repositórios')}</span>
          </button>

          <button
            onClick={() => setActiveTab('vocab')}
            className={`px-3.5 py-2 text-xs font-mono font-medium rounded-md transition-colors whitespace-nowrap cursor-pointer flex items-center gap-1.5 ${
              activeTab === 'vocab'
                ? 'bg-[#1A1A1A] text-white shadow-xs'
                : 'text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1]'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5 text-amber-500" />
            <span>{t('dashboard.tabVocab', '4. Vocabulário Formal')}</span>
          </button>
        </div>

        {/* Scrollable Dashboard Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm">
          {/* TAB 1: OPERATIONAL SYSTEMS & RUNTIME ENVIRONMENTS */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-0.5">
                    {t('dashboard.govHeader', 'Governança Operacional')}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#1A1A1A]">
                    {t('dashboard.declaredState', 'Estado Declarado dos Ambientes em Produção')}
                  </div>
                </div>
                <div className="text-xs font-mono text-emerald-800 bg-emerald-50 border border-emerald-200 px-3 py-1.5 rounded flex items-center gap-1.5 self-start sm:self-auto font-semibold">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('dashboard.euBadge', 'JURISDIÇÃO EUROPEIA QUALIFICADA')}</span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {operationalSystems.map((sys, idx) => (
                  <div
                    key={idx}
                    className="p-5 bg-white border border-[#E2E8F0] rounded-xl flex flex-col justify-between shadow-xs"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2">
                        <span className="font-serif text-base font-bold text-[#1A1A1A]">
                          {sys.name}
                        </span>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {sys.stage}
                        </span>
                      </div>
                      <div className="text-xs font-mono text-[#70706B] mb-2 flex items-center gap-1">
                        <Server className="w-3.5 h-3.5 text-purple-600" />
                        <span>{sys.runtime}</span>
                      </div>
                      <div className="text-xs font-mono text-[#555550] mb-3">
                        <span className="text-[#70706B]">Stack: </span>
                        <span>{sys.stack}</span>
                      </div>
                    </div>

                    <div className="pt-3 border-t border-[#F0F0EC] text-xs text-[#555550]">
                      <strong className="text-[#1A1A1A] font-mono">{t('dashboard.evidenceLabel', 'Evidência: ')}</strong>
                      <span>{sys.evidenceSource}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 2: AUDIT MATRIX (11 PRODUCTION GATES) */}
          {activeTab === 'gates' && (
            <div className="space-y-6">
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-0.5">
                    {t('dashboard.auditRef', 'Referência Formal de Auditoria: TRIMINDSLABS-AUDIT-RELEASE-2026')}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#1A1A1A]">
                    {t('dashboard.auditSeparation', 'Separação Estrita entre Implementação, Validação e Evidência')}
                  </div>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-emerald-50 border border-emerald-200 text-xs font-mono text-emerald-800 font-semibold self-start sm:self-auto">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                  <span>{t('dashboard.gatesBadge', '11 GATES VERIFICADOS')}</span>
                </div>
              </div>

              <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs font-mono">
                    <thead className="bg-[#FAF9F6] text-[#70706B] border-b border-[#E2E8F0]">
                      <tr>
                        <th className="py-3 px-6">{t('dashboard.tableGate', 'Gate de Auditoria')}</th>
                        <th className="py-3 px-6">{t('dashboard.tablePhase', 'Fase')}</th>
                        <th className="py-3 px-6">{t('dashboard.tableEvidence', 'Evidência Formal')}</th>
                        <th className="py-3 px-6">{t('dashboard.tableStatus', 'Status')}</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-[#F0F0EC]">
                      {productionGates.map((gate) => (
                        <tr key={gate.id} className="hover:bg-[#FAF9F6] transition-colors">
                          <td className="py-3.5 px-6 font-semibold text-[#1A1A1A] whitespace-nowrap">
                            {gate.name}
                          </td>
                          <td className="py-3.5 px-6 text-[#70706B] whitespace-nowrap">
                            {gate.phase}
                          </td>
                          <td className="py-3.5 px-6 text-[#555550] max-w-md">
                            {gate.evidence}
                          </td>
                          <td className="py-3.5 px-6 whitespace-nowrap">
                            <span
                              className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded border ${
                                gate.status === 'verified'
                                ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                                : gate.status === 'in-progress'
                                ? 'bg-amber-50 text-amber-700 border-amber-200'
                                : 'bg-slate-50 text-slate-700 border-slate-200'
                              }`}
                            >
                              {gate.status === 'verified' && <CheckCircle2 className="w-3 h-3" />}
                              {gate.status === 'in-progress' && <Clock className="w-3 h-3" />}
                              {gate.status === 'pending' && <AlertTriangle className="w-3 h-3" />}
                              <span>
                                {gate.status === 'verified'
                                  ? t('dashboard.statusVerified', 'Verificado')
                                  : gate.status === 'in-progress'
                                  ? t('dashboard.statusInProgress', 'Em Progresso')
                                  : t('dashboard.statusPending', 'Pendente')}
                              </span>
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: RELEASES & REPOSITORIES (SECONDARY ACCESS ONLY) */}
          {activeTab === 'releases' && (
            <div className="space-y-4">
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl text-xs text-[#555550]">
                <strong className="text-[#1A1A1A] font-mono">{t('dashboard.codeGovNote', 'Nota de Governança de Código: ')}</strong>
                <span>
                  {t('dashboard.codeGovText', 'O website corporativo prioriza produtos e sistemas. Abaixo consta o mapeamento interno entre os sistemas e seus respectivos artefatos de código.')}
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {projects.filter((p) => p.repository).map((project) => (
                  <div
                    key={project.id}
                    className="p-5 bg-white border border-[#E2E8F0] rounded-xl shadow-xs flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-start justify-between gap-3 mb-2">
                        <div>
                          <div className="text-xs font-mono text-[#70706B] uppercase">{project.sector}</div>
                          <h4 className="font-serif text-lg font-bold text-[#1A1A1A] mt-0.5">{project.title}</h4>
                        </div>
                        <span className="text-xs font-mono px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">
                          {project.truthStatus === 'implemented'
                            ? t('projects.statusOperational', 'Operacional em Produção')
                            : project.truthStatus === 'partial'
                            ? t('projects.statusValidation', 'Em Validação Contínua')
                            : t('projects.statusSpecification', 'Especificação / RFC')}
                        </span>
                      </div>

                      <p className="text-xs text-[#555550] line-clamp-2 mb-3">
                        {project.honestScope}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-[#F0F0EC] flex items-center justify-between text-xs font-mono">
                      <span className="text-[#70706B] truncate max-w-[240px]">
                        {project.repository?.name}
                      </span>
                      {project.repository?.isPrivate ? (
                        <span className="text-[#70706B] italic">{t('dashboard.repoPrivate', 'Repositório: Privado')}</span>
                      ) : (
                        <a
                          href={project.repository?.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 font-medium text-[#1A1A1A] hover:underline cursor-pointer"
                        >
                          <span>{t('dashboard.inspectRepo', 'Inspecionar Repositório')}</span>
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* TAB 4: VOCABULARY SPECIFICATION */}
          {activeTab === 'vocab' && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {vocabularyTerms.map((item, idx) => (
                <div key={idx} className="p-5 bg-white border border-[#E2E8F0] rounded-xl shadow-xs">
                  <div className="text-xs font-mono text-emerald-700 font-semibold mb-1">
                    0{idx + 1}. {t('dashboard.vocabDefinition', 'DEFINIÇÃO TÉCNICA FORMAL')}
                  </div>
                  <h4 className="font-serif text-xl font-bold text-[#1A1A1A] mb-2">{item.term}</h4>
                  <p className="text-xs text-[#4A4A45] leading-relaxed mb-3">
                    {item.shortDefinition || item.definition}
                  </p>
                  {item.contrastingAntiPattern && (
                    <div className="p-2.5 bg-[#FAF9F6] border border-[#F0EFEA] rounded text-xs text-[#70706B]">
                      <span className="font-semibold text-rose-700">{t('dashboard.antiPatternLabel', 'Anti-padrão contrastado: ')}</span>
                      <span>{item.contrastingAntiPattern}</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#70706B]">
          <span>Trimindslabs Release Governance</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-md transition-colors cursor-pointer"
          >
            {t('dashboard.closeBtn', 'Fechar')}
          </button>
        </div>
      </div>
    </div>
  );
};
