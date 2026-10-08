import React, { useState } from 'react';
import { Project, PROJECTS } from '../data/trimindsData';
import { ProjectCard } from './ProjectCard';
import { useLanguage } from '../context/LanguageContext';
import { Search, Filter, ShieldCheck } from 'lucide-react';

interface ProjectsSectionProps {
  onSelectProject: (project: Project, initialTab?: 'overview' | 'technical') => void;
  activeDomainFilter?: string;
}

export const ProjectsSection: React.FC<ProjectsSectionProps> = ({
  onSelectProject,
  activeDomainFilter,
}) => {
  const { language } = useLanguage();
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
    { id: 'all', label: language === 'pt' ? 'Todos os Projetos' : language === 'es' ? 'Todos los Proyectos' : 'All Projects' },
    { id: 'compliance', label: language === 'pt' ? 'Conformidade & IA' : language === 'es' ? 'Cumplimiento e IA' : 'Regulatory & AI' },
    { id: 'geospatial', label: language === 'pt' ? 'Geoespacial & Satélite' : language === 'es' ? 'Geoespacial y Satélite' : 'Geospatial & Earth' },
    { id: 'logistics', label: language === 'pt' ? 'Logística & Borda' : language === 'es' ? 'Logística y Borde' : 'Logistics & Vision' },
    { id: 'platform', label: language === 'pt' ? 'Plataforma & Nuvem' : language === 'es' ? 'Plataforma y Nube' : 'Platform & Mesh' },
  ];

  const filteredProjects = PROJECTS.filter((p) => {
    // Category match
    if (selectedCategory === 'compliance') {
      if (!p.id.includes('compliance') && !p.id.includes('workflow')) return false;
    } else if (selectedCategory === 'geospatial') {
      if (!p.id.includes('geo')) return false;
    } else if (selectedCategory === 'logistics') {
      if (!p.id.includes('logistics') && !p.id.includes('scanner')) return false;
    } else if (selectedCategory === 'platform') {
      if (!p.id.includes('security') && !p.id.includes('cloud') && !p.id.includes('vector') && !p.id.includes('integration') && !p.id.includes('mesh')) {
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
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
          <div>
            <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
              {language === 'pt' ? 'SISTEMAS & CASE STUDIES' : language === 'es' ? 'SISTEMAS Y CASE STUDIES' : 'SYSTEMS & CASE STUDIES'}
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
              {language === 'pt'
                ? 'Projetos desenvolvidos com rigor e transparência.'
                : language === 'es'
                ? 'Proyectos desarrollados con rigor y transparencia.'
                : 'Systems Engineered with Verifiable Depth.'}
            </h2>
            <p className="mt-2 text-base text-[#555550] max-w-2xl">
              {language === 'pt'
                ? 'Conheça o propósito, o problema solucionado e as capacidades de cada sistema. Aprofunde-se na arquitetura e no código conforme seu interesse.'
                : language === 'es'
                ? 'Conozca el propósito, el problema solucionado y las capacidades de cada sistema. Profundice en la arquitectura y el código según su interés.'
                : 'Understand the business purpose, problem solved, and operational capabilities of each platform. Expand into architecture and source code on demand.'}
            </p>
          </div>

          {/* Philosophy reminder card */}
          <div className="hidden lg:flex items-center gap-2 p-3 bg-white border border-[#E2E8F0] rounded-lg text-xs font-mono text-[#555550]">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <div>
              <span className="font-semibold text-[#1A1A1A]">Regra da V3: </span>
              <span>Site explica → Estudo demonstra → Dashboard comprova → GitHub inspeciona</span>
            </div>
          </div>
        </div>

        {/* Filter Bar & Search */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8 pb-6 border-b border-[#EAEAE6]">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1 overflow-x-auto pb-2 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded-md whitespace-nowrap transition-colors ${
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
                placeholder={language === 'pt' ? 'Buscar sistema ou tecnologia...' : language === 'es' ? 'Buscar sistema o tecnología...' : 'Filter by keyword or stack...'}
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
                aria-label={language === 'pt' ? 'Filtrar por estágio do sistema' : language === 'es' ? 'Filtrar por estado del sistema' : 'Filter by system lifecycle stage'}
                className="bg-transparent focus:outline-hidden text-[#1A1A1A] text-xs font-sans"
              >
                <option value="all">{language === 'pt' ? 'Todos os estágios' : language === 'es' ? 'Todos los estados' : 'All Stages'}</option>
                <option value="implemented">{language === 'pt' ? 'Operacional' : language === 'es' ? 'Operativo' : 'Operational'}</option>
                <option value="partial">{language === 'pt' ? 'Validação' : language === 'es' ? 'Validación' : 'Validation'}</option>
                <option value="planned">{language === 'pt' ? 'Especificação' : language === 'es' ? 'Especificación' : 'Specification'}</option>
              </select>
            </div>
          </div>
        </div>

        {/* Project Cards Grid */}
        {filteredProjects.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl border border-[#E2E8F0]">
            <p className="text-sm text-[#70706B] font-mono">
              {language === 'pt' ? 'Nenhum projeto encontrado com os filtros selecionados.' : language === 'es' ? 'Ningún proyecto encontrado con los filtros seleccionados.' : 'No projects matched the selected filters.'}
            </p>
            <button
              onClick={() => {
                setSelectedCategory('all');
                setSearchQuery('');
                setStatusFilter('all');
              }}
              className="mt-3 text-xs text-[#1A1A1A] underline font-medium"
            >
              {language === 'pt' ? 'Limpar filtros' : language === 'es' ? 'Limpiar filtros' : 'Clear filters'}
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
