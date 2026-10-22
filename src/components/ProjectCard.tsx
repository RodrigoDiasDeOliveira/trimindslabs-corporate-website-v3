import React from 'react';
import { Project } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Cpu, CheckCircle2, Clock, FileCode2, Activity, Globe, PauseCircle, WifiOff } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  onSelectProject: (project: Project, initialTab?: 'overview' | 'technical') => void;
}

type OperationalStatus = 'PRODUCTION' | 'RUNNING' | 'ACTIVE' | 'ONLINE' | 'PAUSED' | 'OFFLINE';

// Only assign a lifecycle status where the product's required public surfaces have been
// explicitly established. Remaining projects must be classified from evidence, not guessed.
const getOperationalStatus = (projectId: string): OperationalStatus | undefined => {
  if (projectId === 'triminds-geo-ai') return 'PRODUCTION';
  return undefined;
};

const getOperationalStatusPresentation = (status: OperationalStatus, language: string) => {
  switch (status) {
    case 'PRODUCTION':
      return { label: 'PRODUCTION', description: language === 'pt' ? 'Produção + site promocional + sandbox online' : language === 'es' ? 'Producción + web promocional + sandbox online' : 'Production + promotional site + online sandbox', color: 'text-emerald-800 bg-emerald-50 border-emerald-200', icon: Activity };
    case 'RUNNING':
      return { label: 'RUNNING', description: language === 'pt' ? 'Sistema acessível e verificado' : language === 'es' ? 'Sistema accesible y verificado' : 'System reachable and verified', color: 'text-emerald-800 bg-emerald-50 border-emerald-200', icon: Activity };
    case 'ACTIVE':
      return { label: 'ACTIVE', description: language === 'pt' ? 'Projeto ativo; URL pública não obrigatória' : language === 'es' ? 'Proyecto activo; URL pública no obligatoria' : 'Active project; public URL not required', color: 'text-blue-800 bg-blue-50 border-blue-200', icon: CheckCircle2 };
    case 'ONLINE':
      return { label: 'ONLINE', description: language === 'pt' ? 'Site ou recurso público acessível' : language === 'es' ? 'Sitio o recurso público accesible' : 'Public website or resource reachable', color: 'text-sky-800 bg-sky-50 border-sky-200', icon: Globe };
    case 'PAUSED':
      return { label: 'PAUSED', description: language === 'pt' ? 'Trabalho pausado por decisão' : language === 'es' ? 'Trabajo pausado por decisión' : 'Work paused by decision', color: 'text-amber-800 bg-amber-50 border-amber-200', icon: PauseCircle };
    case 'OFFLINE':
      return { label: 'OFFLINE', description: language === 'pt' ? 'Sistema web esperado indisponível' : language === 'es' ? 'Sistema web esperado no disponible' : 'Expected web system unavailable', color: 'text-rose-800 bg-rose-50 border-rose-200', icon: WifiOff };
  }
};

export const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelectProject }) => {
  const { language, t } = useLanguage();

  // Implementation maturity is not the same thing as operational status.
  const getImplementationBadge = (status: Project['truthStatus']) => {
    switch (status) {
      case 'implemented':
        return {
          label: language === 'pt' ? 'Implementação: concluída' : language === 'es' ? 'Implementación: completada' : 'Implementation: implemented',
          color: 'text-slate-700 bg-slate-50 border-slate-200',
          icon: CheckCircle2,
        };
      case 'partial':
        return {
          label: language === 'pt' ? 'Implementação: parcial' : language === 'es' ? 'Implementación: parcial' : 'Implementation: partial',
          color: 'text-amber-700 bg-amber-50 border-amber-200',
          icon: Clock,
        };
      case 'planned':
        return {
          label: language === 'pt' ? 'Implementação: planejada' : language === 'es' ? 'Implementación: planificada' : 'Implementation: planned',
          color: 'text-slate-700 bg-slate-50 border-slate-200',
          icon: FileCode2,
        };
    }
  };

  const implementation = getImplementationBadge(project.truthStatus);
  const ImplementationIcon = implementation.icon;
  const operationalStatus = getOperationalStatus(project.id);
  const operational = operationalStatus ? getOperationalStatusPresentation(operationalStatus, language) : undefined;
  const OperationalIcon = operational?.icon;

  return (
    <div className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-200 group shadow-xs">
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono text-[#70706B] tracking-wide uppercase truncate max-w-[60%]">
            {project.sector}
          </span>
          <div className="flex flex-wrap items-center justify-end gap-1.5">
            {operational && OperationalIcon && (
              <span title={operational.description} className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded border ${operational.color}`}>
                <OperationalIcon className="w-3 h-3" />
                <span>{operational.label}</span>
              </span>
            )}
            <span title={language === 'pt' ? 'Maturidade da implementação; não representa, por si só, disponibilidade operacional.' : language === 'es' ? 'Madurez de implementación; no representa por sí sola la disponibilidad operativa.' : 'Implementation maturity; does not by itself represent operational availability.'} className={`inline-flex items-center gap-1 px-2 py-0.5 text-xs font-mono rounded border ${implementation.color}`}>
              <ImplementationIcon className="w-3 h-3" />
              <span>{implementation.label}</span>
            </span>
          </div>
        </div>

        <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:text-black transition-colors leading-tight">
          {project.title}
        </h3>
        <p className="mt-1 text-xs text-[#70706B] font-medium leading-relaxed">
          {project.subtitle}
        </p>

        <div className="mt-4 p-3.5 bg-[#FAF9F6] rounded-lg border border-[#F0EFEA] text-sm text-[#4A4A45] leading-relaxed">
          <p className="line-clamp-3">
            {project.honestScope}
          </p>
        </div>

        {project.auditRecord ? (
          <div className="mt-3 rounded-lg border border-emerald-200 bg-emerald-50/60 p-3">
            <div className="flex items-center gap-1.5 text-[11px] font-mono font-semibold text-emerald-800">
              <CheckCircle2 className="w-3.5 h-3.5" />
              {language === 'pt' ? 'METADADOS CONFIRMADOS PELO AUDIT' : language === 'es' ? 'METADATOS CONFIRMADOS POR AUDIT' : 'AUDIT-OBSERVED REPOSITORY'}
            </div>
            <div className="mt-1 text-xs text-[#4A4A45] break-all">
              {project.auditRecord.url ? (
                <a href={project.auditRecord.url} target="_blank" rel="noreferrer" className="underline hover:text-[#1A1A1A]">
                  {project.auditRecord.fullName}
                </a>
              ) : project.auditRecord.fullName}
            </div>
            <div className="mt-1 text-[11px] text-[#555550]">
              {typeof project.auditRecord.private === 'boolean'
                ? (project.auditRecord.private
                    ? (language === 'pt' ? 'Repositório privado' : language === 'es' ? 'Repositorio privado' : 'Private repository')
                    : (language === 'pt' ? 'Repositório público' : language === 'es' ? 'Repositorio público' : 'Public repository'))
                : (language === 'pt' ? 'Visibilidade não informada pelo Audit' : language === 'es' ? 'Visibilidad no informada por Audit' : 'Visibility not reported by Audit')}
              {' · '}
              {language === 'pt' ? 'HEAD observado:' : language === 'es' ? 'HEAD observado:' : 'Observed HEAD:'} {project.auditRecord.commitSha.slice(0, 7)}
            </div>
          </div>
        ) : project.repository ? (
          <div className="mt-3 rounded-lg border border-amber-200 bg-amber-50/60 p-3 text-[11px] text-amber-900">
            {language === 'pt' ? 'Registro do repositório ainda não associado a uma observação do Audit.' : language === 'es' ? 'El repositorio aún no está asociado a una observación de Audit.' : 'Repository not yet matched to an Audit observation.'}
          </div>
        ) : null}

        <div className="mt-4">
          <div className="text-xs font-mono text-[#70706B] uppercase mb-1 font-semibold">
            {t('projects.problemTitle', 'Problema que resolve:')}
          </div>
          <p className="text-xs text-[#555550] line-clamp-2 leading-relaxed">
            {project.problem}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-[#F0F0EC]">
        <div className="flex flex-wrap items-center gap-1.5 mb-4">
          {project.technology.slice(0, 3).map((tech, idx) => (
            <span key={idx} className="text-xs font-mono text-[#555550] bg-[#F4F4F1] px-2 py-0.5 rounded">
              {tech.split('/')[0].trim()}
            </span>
          ))}
          {project.technology.length > 3 && (
            <span className="text-xs font-mono text-[#70706B]">
              +{project.technology.length - 3}
            </span>
          )}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => onSelectProject(project, 'overview')}
            className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 text-xs font-medium text-white bg-[#1A1A1A] hover:bg-[#333330] rounded-md transition-colors cursor-pointer"
          >
            <span>{t('projects.cardViewCaseStudy', 'Conhecer o Sistema')}</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>

          <button
            onClick={() => onSelectProject(project, 'technical')}
            className="inline-flex items-center justify-center gap-1 px-2.5 py-2 text-xs font-mono text-[#555550] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] border border-[#E2E8F0] rounded-md transition-colors cursor-pointer"
            title={t('projects.architectureTitle', 'Acessar Especificação de Engenharia')}
          >
            <Cpu className="w-3.5 h-3.5 text-emerald-600" />
            <span className="hidden sm:inline">{t('projects.architectureBtn', 'Arquitetura')}</span>
          </button>
        </div>
      </div>
    </div>
  );
};
