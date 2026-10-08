import React from 'react';
import { Project } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Code2, CheckCircle2, Clock, FileCode2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project, initialTab?: 'overview' | 'technical') => void;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { language } = useLanguage();

  // Status mapping to plain language
  const getStatusBadge = (status: Project['truthStatus']) => {
    switch (status) {
      case 'implemented':
        return {
          label: language === 'pt' ? 'Operacional / Implementado' : language === 'es' ? 'Operativo / Implementado' : 'Operational / Implemented',
          color: 'text-emerald-700 bg-emerald-50 border-emerald-200',
          icon: CheckCircle2,
        };
      case 'partial':
        return {
          label: language === 'pt' ? 'Em Validação Contínua' : language === 'es' ? 'En Validación Continua' : 'Active Validation',
          color: 'text-amber-700 bg-amber-50 border-amber-200',
          icon: Clock,
        };
      case 'planned':
        return {
          label: language === 'pt' ? 'Especificação / RFC' : language === 'es' ? 'Especificación / RFC' : 'RFC Specification',
          color: 'text-slate-700 bg-slate-50 border-slate-200',
          icon: FileCode2,
        };
    }
  };

  const status = getStatusBadge(project.truthStatus);
  const StatusIcon = status.icon;

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-200 group shadow-xs">
      {/* Top: Sector and Honest Status */}
      <div>
        <div className="flex items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-[#70706B] tracking-wide uppercase truncate max-w-[65%]">
            {project.sector}
          </span>
          <span className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded border ${status.color}`}>
            <StatusIcon className="w-3 h-3" />
            <span>{status.label}</span>
          </span>
        </div>

        {/* Title & Subtitle */}
        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-black transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-[#70706B] font-medium leading-relaxed">
          {project.subtitle}
        </p>

        {/* Layer 1 Plain-Language Explanation */}
        <div className="mt-4 p-3 bg-[#FAF9F6] rounded-lg border border-[#F0EFEA] text-sm text-[#4A4A45] leading-relaxed">
          <p className="line-clamp-3">
            {project.honestScope}
          </p>
        </div>

        {/* Practical Problem Solved */}
        <div className="mt-4">
          <div className="text-xs font-mono text-[#70706B] uppercase mb-1">
            {language === 'pt' ? 'Problema que resolve:' : language === 'es' ? 'Problema que resuelve:' : 'Problem addressed:'}
          </div>
          <p className="text-xs text-[#555550] line-clamp-2 leading-relaxed">
            {project.problem}
          </p>
        </div>
      </div>

      {/* Bottom: Tech stack preview & Progressive CTAs */}
      <div className="mt-6 pt-4 border-t border-[#F0F0EC]">
        {/* Concise Tech preview */}
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.technology.slice(0, 3).map((tech, idx) => (
            <span
              key={idx}
              className="text-xs font-mono text-[#555550] bg-[#F4F4F1] px-2 py-0.5 rounded"
            >
              {tech.split('/')[0].trim()}
            </span>
          ))}
          {project.technology.length > 3 && (
            <span className="text-xs font-mono text-[#70706B]">
              +{project.technology.length - 3}
            </span>
          )}
        </div>

        {/* Actions: Non-Technical & Technical Paths */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectProject(project, 'overview')}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-[#1A1A1A] hover:bg-[#333330] rounded-md transition-colors"
          >
            <span>{language === 'pt' ? 'Conhecer o Projeto' : language === 'es' ? 'Conocer el Proyecto' : 'Explore Case Study'}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectProject(project, 'technical')}
            className="inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-mono text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] border border-[#E2E8F0] rounded-md transition-colors"
            title="Acessar Evidência de Engenharia e Repositório"
          >
            <Code2 className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">Evidência</span>
          </button>
        </div>
      </div>
    </div>
  );
};
