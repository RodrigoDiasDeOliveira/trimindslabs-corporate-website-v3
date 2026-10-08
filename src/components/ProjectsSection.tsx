import React, { useState } from 'react';
import { Project, getProjects } from '../data/trimindsData';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter } from 'lucide-react';

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

  const allProjects = getProjects(language);

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
