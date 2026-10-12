import React, { useEffect, useMemo, useState } from 'react';
import { AuditRepositoryRecord, CanonicalProjectRecord, CanonicalProjectRegistry, Project, getProjects } from '../data/trimindsData';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter, RefreshCw, CircleAlert, LoaderCircle, ShieldCheck } from 'lucide-react';

const AUDIT_API_BASE = 'https://triminds-ecosystem-audit-72mbkllrqa-ew.a.run.app';
const CANONICAL_PROJECTS_URL = `${AUDIT_API_BASE}/api/v1/projects`;

interface AuditObservation {
  observation_id: string;
  observed_at: string;
  repositories: Array<{
    observation_id: string;
    observed_at: string;
    source: {
      full_name: string;
      html_url?: string | null;
      private?: boolean | null;
      default_branch?: string | null;
    };
    commit: { sha: string; html_url?: string | null };
    source_commit_sha: string;
  }>;
}

interface ProjectsSectionProps {
  onSelectProject: (project: Project, initialTab?: 'overview' | 'technical') => void;
  activeDomainFilter?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  activeDomainFilter,
}) => {
  const { language, t } = useLanguage();
  const [selectedCategory, setSelectedCategory] = useState<string>(activeDomainFilter || 'all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<'all' | 'implemented' | 'partial' | 'planned'>('all');
  const [auditObservation, setAuditObservation] = useState<AuditObservation | null>(null);
  const [canonicalRegistry, setCanonicalRegistry] = useState<CanonicalProjectRegistry | null>(null);
  const [registryError, setRegistryError] = useState<string | null>(null);
  const [auditLoading, setAuditLoading] = useState(false);
  const [auditError, setAuditError] = useState<string | null>(null);

  const loadAuditRecords = async () => {
    setAuditLoading(true);
    setAuditError(null);
    try {
      const response = await fetch(`${AUDIT_API_BASE}/api/v1/audit/ecosystem/observations`, {
        headers: { Accept: 'application/json' },
      });
      if (!response.ok) throw new Error(`Ecosystem Audit respondeu com HTTP ${response.status}`);
      const data = await response.json() as AuditObservation;
      if (!data || !Array.isArray(data.repositories)) {
        throw new Error('A resposta do Audit não contém a lista de observações esperada.');
      }
      setAuditObservation(data);
      const registryResponse = await fetch(CANONICAL_PROJECTS_URL, { headers: { Accept: 'application/json' } });
      if (!registryResponse.ok) throw new Error(`Registro canônico respondeu com HTTP ${registryResponse.status}`);
      const registryData = await registryResponse.json() as CanonicalProjectRegistry;
      if (!registryData || !Array.isArray(registryData.projects)) throw new Error('A resposta do registro canônico não contém projetos.');
      setCanonicalRegistry(registryData);
      setRegistryError(null);
    } catch (error) {
      setAuditError(error instanceof Error ? error.message : 'Não foi possível carregar os registros do Audit.');
      setRegistryError(error instanceof Error ? error.message : 'Não foi possível carregar o registro canônico.');
    } finally {
      setAuditLoading(false);
    }
  };

  useEffect(() => { void loadAuditRecords(); }, []);

  // Handle prop change if passed from parent
  React.useEffect(() => {
    if (activeDomainFilter) {
      setSelectedCategory(activeDomainFilter);
    }
  }, [activeDomainFilter]);

  const categories = [
    { id: 'all', label: t('projects.filterAll', 'Todos os Sistemas') },
    { id: 'compliance', label: t('projects.filterCompliance', 'Conformidade & IA') },
    { id: 'geospatial', label: t('projects.filterGeospatial', 'Geoespacial & Satélite') },
    { id: 'logistics', label: t('projects.filterLogistics', 'Logística & Borda') },
    { id: 'platform', label: t('projects.filterPlatform', 'Plataforma & Nuvem') },
  ];

  const editorialProjects = getProjects(language);
  const allProjects = useMemo(() => {
    if (!auditObservation) return editorialProjects;
    const records = new Map<string, AuditRepositoryRecord>();
    const canonicalRecords = new Map<string, CanonicalProjectRecord>((canonicalRegistry?.projects || []).map((item) => [item.id, item]));
    for (const item of auditObservation.repositories) {
      const fullName = item.source?.full_name;
      if (!fullName) continue;
      records.set(fullName.toLowerCase(), {
        fullName,
        url: item.source.html_url || undefined,
        private: item.source.private,
        defaultBranch: item.source.default_branch || undefined,
        commitSha: item.commit?.sha || item.source_commit_sha,
        commitUrl: item.commit?.html_url || undefined,
        observedAt: item.observed_at || auditObservation.observed_at,
        observationId: item.observation_id,
      });
    }

    return editorialProjects.map((project) => {
      const canonical = canonicalRecords.get(project.id);
      const repoName = (canonical?.repository_full_name || project.repository?.name)?.toLowerCase();
      const record = repoName ? records.get(repoName) : undefined;
      const baseProject: Project = canonical ? {
        ...project,
        domain: canonical.domain,
        category: canonical.category,
        truthStatus: canonical.truth_status,
        operationalStage: canonical.operational_stage,
        deployment: canonical.deployment?.url ? {
          ...(project.deployment || { target: 'Ecosystem Audit registry' }),
          url: canonical.deployment.url,
          status: canonical.deployment.status || 'NOT_VERIFIED',
        } : project.deployment,
      } : project;
      if (!record) return { ...baseProject, auditRecord: undefined };
      return {
        ...baseProject,
        auditRecord: record,
        repository: baseProject.repository ? {
          ...baseProject.repository,
          name: record.fullName,
          url: record.url || baseProject.repository.url,
          isPrivate: typeof record.private === 'boolean' ? record.private : baseProject.repository.isPrivate,
          visibilityBadge: typeof record.private === 'boolean'
            ? (record.private ? 'Repositório Privado' : 'Repositório Público')
            : baseProject.repository.visibilityBadge,
        } : baseProject.repository,
      };
    });
  }, [editorialProjects, auditObservation, canonicalRegistry]);

  const filteredProjects = allProjects.filter((p) => {
    // Category match
    if (selectedCategory !== 'all') {
      if (p.domain !== selectedCategory) {
        return false;
      }
    }

    // Status filter
    if (statusFilter !== 'all' && p.truthStatus !== statusFilter) {
      return false;
    }

    // Search query match
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      const matchTitle = p.title.toLowerCase().includes(q);
      const matchSub = p.subtitle.toLowerCase().includes(q);
      const matchScope = p.honestScope.toLowerCase().includes(q);
      const matchTech = p.technology.some(t => t.toLowerCase().includes(q));
      if (!matchTitle && !matchSub && !matchScope && !matchTech) return false;
    }

    return true;
  });

  return (
    <section id="projects" className="py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-10">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {t('projects.kicker', 'SISTEMAS & PRODUTOS CORPORATIVOS')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {t('projects.title', 'Plataformas desenvolvidas com rigor e transparência.')}
          </h2>
          <p className="mt-2 text-base text-[#555550]">
            {t('projects.subtitle', 'Conheça o propósito, o problema solucionado e as capacidades de cada sistema. Aprofunde-se na arquitetura e na validação técnica sob demanda.')}
          </p>
        </div>

        <div className="mb-6 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
        {canonicalRegistry && (
          <div className="mb-4 rounded-lg border border-[#D1D1CD] bg-[#FAF9F6] px-3 py-2 text-xs text-[#555550]">
            <strong className="text-[#1A1A1A]">Ecosystem Audit — canonical registry:</strong>{' '}
            {canonicalRegistry.projects.length} project records · {canonicalRegistry.editorial_content_status}.
            {' '}{canonicalRegistry.editorial_content_note}
          </div>
        )}
        {registryError && !canonicalRegistry && (
          <div role="status" className="mb-4 rounded-lg border border-amber-200 bg-amber-50 px-3 py-2 text-xs text-amber-900">
            Canonical project registry not synchronized: {registryError}
          </div>
        )}
          <div className="flex items-start gap-2 text-xs text-[#555550]">
            <ShieldCheck className="w-4 h-4 mt-0.5 text-emerald-700 shrink-0" />
            <div>
              <div className="font-semibold text-[#1A1A1A]">
                {language === 'pt' ? 'Metadados de repositório provenientes do Ecosystem Audit' : language === 'es' ? 'Metadatos del repositorio procedentes de Ecosystem Audit' : 'Repository metadata sourced from Ecosystem Audit'}
              </div>
              <div className="mt-1">
                {auditObservation
                  ? (language === 'pt' ? `Observação ${auditObservation.observation_id} · ${auditObservation.repositories.length} repositórios observados` : language === 'es' ? `Observación ${auditObservation.observation_id} · ${auditObservation.repositories.length} repositorios observados` : `Observation ${auditObservation.observation_id} · ${auditObservation.repositories.length} repositories observed`)
                  : (language === 'pt' ? 'O conteúdo editorial é mantido separadamente; links, visibilidade e commit são associados aos registros observados pelo Audit.' : language === 'es' ? 'El contenido editorial se mantiene separado; enlaces, visibilidad y commit se asocian a los registros observados por Audit.' : 'Editorial content stays separate; links, visibility and commit are matched to Audit observations.')}
              </div>
            </div>
          </div>
          <button type="button" onClick={() => void loadAuditRecords()} disabled={auditLoading} className="inline-flex items-center justify-center gap-2 px-3 py-2 rounded-md border border-[#D1D1CD] bg-white text-xs font-mono disabled:opacity-50">
            {auditLoading ? <LoaderCircle className="w-4 h-4 animate-spin" /> : <RefreshCw className="w-4 h-4" />}
            {language === 'pt' ? 'Atualizar registros' : language === 'es' ? 'Actualizar registros' : 'Refresh records'}
          </button>
        </div>
        {auditError && (
          <div role="alert" className="mb-6 p-3 rounded-lg border border-amber-200 bg-amber-50 text-amber-900 text-xs flex gap-2">
            <CircleAlert className="w-4 h-4 shrink-0" />
            <div>
              <strong>{language === 'pt' ? 'Audit indisponível:' : language === 'es' ? 'Audit no disponible:' : 'Audit unavailable:'}</strong> {auditError}
              <p className="mt-1">{language === 'pt' ? 'Os cartões editoriais continuam visíveis, mas os metadados do repositório não podem ser considerados sincronizados.' : language === 'es' ? 'Las tarjetas editoriales siguen visibles, pero los metadatos del repositorio no pueden considerarse sincronizados.' : 'Editorial cards remain visible, but repository metadata cannot be considered synchronized.'}</p>
            </div>
          </div>
        )}

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EAEAE6]">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors cursor-pointer ${
                  selectedCategory === cat.id
                    ? 'bg-[#1A1A1A] text-white shadow-xs'
                    : 'text-[#555550] hover:text-[#1A1A1A] bg-white border border-[#E2E8F0]'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Search and Status Dropdown */}
          <div className="flex items-center gap-3">
            <div className="relative flex-1 sm:w-64">
              <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-[#70706B]" />
              <input
                type="text"
                placeholder={t('projects.searchPlaceholder', 'Buscar sistema ou tecnologia...')}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 text-xs bg-white border border-[#D1D1CD] rounded-md focus:outline-hidden focus:border-[#1A1A1A] transition-colors"
              />
            </div>

            <div className="flex items-center gap-1.5 text-xs font-mono text-[#70706B] bg-white border border-[#D1D1CD] px-2 py-1.5 rounded-md">
              <Filter className="w-3.5 h-3.5" />
              <select
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value as any)}
                aria-label={t('projects.statusAll', 'Filtrar por estágio')}
                className="bg-transparent focus:outline-hidden text-[#1A1A1A] text-xs font-sans cursor-pointer"
              >
                <option value="all">{t('projects.statusAll', 'Todos os estágios')}</option>
                <option value="implemented">{t('projects.statusOperational', 'Operacional em Produção')}</option>
                <option value="partial">{t('projects.statusValidation', 'Em Validação Contínua')}</option>
                <option value="planned">{t('projects.statusSpecification', 'Especificação / RFC')}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E2E8F0]">
            <p className="text-sm text-[#70706B] font-mono">
              {t('projects.noResults', 'Nenhum sistema encontrado com os filtros selecionados.')}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="mt-3 text-xs text-[#1A1A1A] underline font-medium cursor-pointer"
            >
              {t('projects.clearFilters', 'Limpar filtros')}
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onSelectProject={onSelectProject}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
