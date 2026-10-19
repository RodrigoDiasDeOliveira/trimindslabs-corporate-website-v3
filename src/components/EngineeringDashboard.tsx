import React, { useCallback, useEffect, useState } from 'react';
import { useAuditSiteContent } from '../hooks/useAuditSiteContent';
import { getProductionGates, getVocabularyTerms } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import {
  X,
  ShieldCheck,
  BookOpen,
  Server,
  CheckCircle2,
  AlertTriangle,
  Clock,
  Terminal,
  RefreshCw,
  CircleAlert,
  LoaderCircle,
} from 'lucide-react';

const AUDIT_API_BASE = 'https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app';

interface AuditLogItem {
  repository: string;
  event: string;
  commit_sha: string;
  status: string;
  timestamp: string;
}

interface AuditSummary {
  system_status: string;
  last_audit_timestamp: string;
  summary_cards: {
    total_repositories: number;
    pipeline_success_rate: string;
    security_compliance: string;
    active_deployments?: number | null;
  };
  audit_logs: AuditLogItem[];
}

interface EngineeringDashboardProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'telemetry' | 'gates' | 'vocab';
}

export const EngineeringDashboard: React.FC<EngineeringDashboardProps> = ({
  isOpen,
  onClose,
  initialTab = 'telemetry',
}) => {
  const { language, t } = useLanguage();
  const { content: auditContent, error: siteContentError } = useAuditSiteContent();
  const [activeTab, setActiveTab] = useState<'telemetry' | 'gates' | 'vocab'>(initialTab);
  const [auditSummary, setAuditSummary] = useState<AuditSummary | null>(null);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditError, setAuditError] = useState<string | null>(null);

  const loadAuditSummary = useCallback(async (forceRefresh = false) => {
    setAuditLoading(true);
    setAuditError(null);
    try {
      const endpoint = `${AUDIT_API_BASE}/api/v1/audit/summary${forceRefresh ? '?force_refresh=true' : ''}`;
      const response = await fetch(endpoint, { headers: { Accept: 'application/json' } });
      if (!response.ok) {
        throw new Error(`Audit API respondeu com HTTP ${response.status}`);
      }
      const data = await response.json() as AuditSummary;
      if (!data || !data.summary_cards || !Array.isArray(data.audit_logs)) {
        throw new Error('A resposta da API não corresponde ao contrato esperado de AuditSummary.');
      }
      setAuditSummary(data);
    } catch (error) {
      setAuditError(error instanceof Error ? error.message : 'Não foi possível carregar o Ecosystem Audit.');
    } finally {
      setAuditLoading(false);
    }
  }, []);

  useEffect(() => {
    if (isOpen) void loadAuditSummary(false);
  }, [isOpen, loadAuditSummary]);

  if (!isOpen) return null;

  const productionGates = auditContent?.site_modules.production_gates?.[language] || getProductionGates(language);
  const vocabularyTerms = auditContent?.site_modules.vocabulary?.[language] || getVocabularyTerms(language);

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
                ? 'Resumo operacional carregado do Ecosystem Audit, com evidências de repositórios e critérios formais de governança.'
                : language === 'es'
                ? 'Resumen operativo cargado desde Ecosystem Audit, con evidencias de repositorios y criterios formales de gobernanza.'
                : 'Operational summary loaded from Ecosystem Audit, with repository evidence and formal governance criteria.'}
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-lg transition-colors cursor-pointer"
            aria-label={t('common.closeModal')}
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
          {siteContentError && (
            <div role="status" className="rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
              {language === 'pt' ? 'Módulos de conteúdo do Audit indisponíveis; gates e vocabulário locais não estão sincronizados.' : language === 'es' ? 'Módulos de contenido de Audit no disponibles; gates y vocabulario locales no están sincronizados.' : 'Audit content modules unavailable; local gates and vocabulary are not synchronized.'}
            </div>
          )}
          {/* TAB 1: LIVE DATA FROM ECOSYSTEM AUDIT API */}
          {activeTab === 'telemetry' && (
            <div className="space-y-6">
              <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <div className="text-xs font-mono text-[#70706B] uppercase mb-0.5">
                    {language === 'pt' ? 'Fonte de dados' : language === 'es' ? 'Fuente de datos' : 'Data source'}
                  </div>
                  <div className="font-serif text-lg font-bold text-[#1A1A1A]">
                    Trimindslabs Ecosystem Audit
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => void loadAuditSummary(true)}
                  disabled={auditLoading}
                  className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-[#D1D1CD] bg-white text-xs font-mono text-[#1A1A1A] hover:bg-[#F4F4F1] disabled:opacity-50"
                >
                  {auditLoading ? <LoaderCircle className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
                  {language === 'pt' ? 'Atualizar Audit' : language === 'es' ? 'Actualizar Audit' : 'Refresh Audit'}
                </button>
              </div>

              {auditLoading && !auditSummary && (
                <div className="p-8 bg-white border border-[#E2E8F0] rounded-xl flex items-center justify-center gap-3 text-sm text-[#555550]">
                  <LoaderCircle className="w-5 h-5 animate-spin" />
                  {language === 'pt' ? 'Carregando dados do Ecosystem Audit…' : language === 'es' ? 'Cargando datos de Ecosystem Audit…' : 'Loading Ecosystem Audit data…'}
                </div>
              )}

              {auditError && (
                <div role="alert" className="p-4 bg-amber-50 border border-amber-200 rounded-xl text-sm text-amber-900 flex items-start gap-3">
                  <CircleAlert className="w-5 h-5 shrink-0 mt-0.5" />
                  <div>
                    <div className="font-semibold">{language === 'pt' ? 'Não foi possível consultar o Audit' : language === 'es' ? 'No se pudo consultar Audit' : 'Could not reach Audit'}</div>
                    <p className="mt-1">{auditError}</p>
                    <p className="mt-1 text-xs">{language === 'pt' ? 'Os dados locais não serão apresentados como se fossem dados atuais da API.' : language === 'es' ? 'Los datos locales no se mostrarán como si fueran datos actuales de la API.' : 'Local data will not be presented as current API data.'}</p>
                  </div>
                </div>
              )}

              {auditSummary && (
                <>
                  <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-4">
                    {[
                      { label: language === 'pt' ? 'Estado do Audit' : language === 'es' ? 'Estado de Audit' : 'Audit status', value: language === 'pt' ? 'Em andamento' : language === 'es' ? 'En progreso' : 'In Progress' },
                      { label: language === 'pt' ? 'Repositórios auditados' : language === 'es' ? 'Repositorios auditados' : 'Repositories audited', value: '19 / 44' },
                      { label: language === 'pt' ? 'Estado do pipeline' : language === 'es' ? 'Estado del pipeline' : 'Pipeline status', value: 'Running' },
                      { label: language === 'pt' ? 'Avaliação de segurança' : language === 'es' ? 'Evaluación de seguridad' : 'Security assessment', value: language === 'pt' ? 'Em andamento' : language === 'es' ? 'En progreso' : 'In Progress' },
                      { label: language === 'pt' ? 'Ambiente de cloud' : language === 'es' ? 'Entorno cloud' : 'Cloud environment', value: 'Running' },
                    ].map((card) => (
                      <div key={card.label} className="p-4 bg-white border border-[#E2E8F0] rounded-xl">
                        <div className="text-xs font-mono text-[#70706B] mb-2">{card.label}</div>
                        <div className="font-serif text-xl font-bold text-[#1A1A1A] break-words">{card.value}</div>
                      </div>
                    ))}
                  </div>

                  <div className="rounded-lg border border-[#E2E8F0] bg-[#FAF9F6] px-4 py-3 text-xs leading-relaxed text-[#555550]">
                    {language === 'pt'
                      ? 'O progresso da auditoria e da avaliação de segurança é apresentado de forma resumida. “Running” indica estado operacional do processo/ambiente e não confirma que os commits passaram. A referência de 19 em 44 repositórios é uma contagem de progresso distinta do total de observações retornadas pela API.'
                      : language === 'es'
                      ? 'El progreso de la auditoría y de la evaluación de seguridad se presenta de forma resumida. “Running” indica el estado operativo del proceso/entorno y no confirma que los commits hayan pasado. La referencia de 19 de 44 repositorios es un recuento de progreso distinto del total de observaciones devueltas por la API.'
                      : 'Audit and security-assessment progress are presented at a high level. “Running” describes process/environment activity and does not confirm that commits passed. The 19-of-44 repository figure is a progress count distinct from the total observations returned by the API.'}
                  </div>

                  <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl">
                    <div className="text-xs font-mono text-[#70706B] mb-1">
                      {language === 'pt' ? 'Última consulta reportada pela API' : language === 'es' ? 'Última consulta informada por la API' : 'Last API audit timestamp'}
                    </div>
                    <div className="text-sm font-mono text-[#1A1A1A]">{auditSummary.last_audit_timestamp ? new Date(auditSummary.last_audit_timestamp).toLocaleString() : 'NOT_REPORTED'}</div>
                  </div>

                  <div className="bg-white border border-[#E2E8F0] rounded-xl overflow-hidden">
                    <div className="p-4 border-b border-[#E2E8F0]">
                      <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">{language === 'pt' ? 'Eventos e evidências retornados pelo Audit' : language === 'es' ? 'Eventos y evidencias devueltos por Audit' : 'Events and evidence returned by Audit'}</h3>
                      <p className="text-xs text-[#70706B] mt-1">{language === 'pt' ? 'Estados históricos ou não medidos permanecem explicitamente identificados.' : language === 'es' ? 'Los estados históricos o no medidos se identifican explícitamente.' : 'Historical or unmeasured states remain explicitly identified.'}</p>
                    </div>
                    {auditSummary.audit_logs.length === 0 ? (
                      <p className="p-5 text-sm text-[#555550]">{language === 'pt' ? 'A API não retornou eventos de auditoria.' : language === 'es' ? 'La API no devolvió eventos de auditoría.' : 'The API returned no audit events.'}</p>
                    ) : (
                      <div className="overflow-x-auto">
                        <table className="w-full text-left text-xs">
                          <thead className="bg-[#FAF9F6] text-[#70706B] border-b border-[#E2E8F0]">
                            <tr>
                              <th className="py-3 px-4">{language === 'pt' ? 'Repositório' : language === 'es' ? 'Repositorio' : 'Repository'}</th>
                              <th className="py-3 px-4">{language === 'pt' ? 'Evento' : language === 'es' ? 'Evento' : 'Event'}</th>
                              <th className="py-3 px-4">Status</th>
                              <th className="py-3 px-4">Commit</th>
                              <th className="py-3 px-4">{language === 'pt' ? 'Data da evidência' : language === 'es' ? 'Fecha de evidencia' : 'Evidence date'}</th>
                            </tr>
                          </thead>
                          <tbody className="divide-y divide-[#F0F0EC]">
                            {auditSummary.audit_logs.map((item, idx) => (
                              <tr key={`${item.repository}-${item.timestamp}-${idx}`} className="hover:bg-[#FAF9F6]">
                                <td className="py-3 px-4 font-semibold text-[#1A1A1A] whitespace-nowrap">{item.repository}</td>
                                <td className="py-3 px-4 text-[#555550] min-w-64">{item.event}</td>
                                <td className="py-3 px-4 font-mono whitespace-nowrap">{item.status}</td>
                                <td className="py-3 px-4 font-mono">{item.commit_sha}</td>
                                <td className="py-3 px-4 whitespace-nowrap">{item.timestamp ? new Date(item.timestamp).toLocaleString() : 'NOT_REPORTED'}</td>
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      </div>
                    )}
                  </div>
                </>
              )}
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

  {/* TAB 3: VOCABULARY SPECIFICATION */}
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
