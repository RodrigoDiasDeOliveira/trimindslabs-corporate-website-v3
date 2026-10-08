import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Terminal, ShieldCheck, Server, BookOpen, ArrowRight } from 'lucide-react';

interface EngineeringDashboardPreviewProps {
  onOpenDashboard: () => void;
  onOpenGates: () => void;
}

export const EngineeringDashboardPreview: React.FC<EngineeringDashboardPreviewProps> = ({
  onOpenDashboard,
  onOpenGates,
}) => {
  const { t, language } = useLanguage();

  return (
    <section className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
              <Terminal className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('dashboardPreview.kicker', 'CAMADA DE TRANSPARÊNCIA & PROVAS')}</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
              {t('dashboardPreview.title', 'Evidências verificáveis e governança de release.')}
            </h2>
            <p className="mt-3 text-base text-[#555550]">
              {t('dashboardPreview.subtitle', 'Não apenas afirmamos o que foi construído: disponibilizamos dados sobre o estado dos serviços, critérios de release dos 11 Gates e definições técnicas formais.')}
            </p>
          </div>

          <button
            onClick={onOpenDashboard}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-xs font-mono font-medium text-white bg-[#1A1A1A] hover:bg-[#333330] rounded-lg transition-all shadow-xs self-start md:self-auto cursor-pointer"
          >
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span>{t('dashboardPreview.cta', 'Verificar Estado de Engenharia')}</span>
            <ArrowRight className="w-3.5 h-3.5 ml-1" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Ambientes Operacionais */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#1A1A1A] transition-colors shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#EAEAE6] flex items-center justify-center text-[#1A1A1A] mb-4">
              <Server className="w-4 h-4 text-purple-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">
              {language === 'pt' ? 'Estado Declarado dos Sistemas' : language === 'es' ? 'Estado Declarado de los Sistemas' : 'Declared Systems State'}
            </h3>
            <p className="text-xs text-[#555550] leading-relaxed mb-4">
              {language === 'pt'
                ? 'Acompanhamento do status de execução dos sistemas implantados em GCP Cloud Run e contêineres na Europa.'
                : language === 'es'
                ? 'Seguimiento del estado de ejecución de los sistemas desplegados en GCP Cloud Run y contenedores en Europa.'
                : 'Declared execution status for systems deployed across European GCP Cloud Run and containerized enclaves.'}
            </p>
            <button
              onClick={onOpenDashboard}
              className="text-xs font-mono text-[#1A1A1A] hover:text-emerald-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'pt' ? 'Ver sistemas operacionais →' : language === 'es' ? 'Ver sistemas operativos →' : 'Inspect active systems →'}</span>
            </button>
          </div>

          {/* Card 2: 11 Gates de Produção */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#1A1A1A] transition-colors shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#EAEAE6] flex items-center justify-center text-[#1A1A1A] mb-4">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">
              {language === 'pt' ? 'Matriz dos 11 Gates de Produção' : language === 'es' ? 'Matriz de los 11 Gates de Producción' : '11 Production Gates Matrix'}
            </h3>
            <p className="text-xs text-[#555550] leading-relaxed mb-4">
              {language === 'pt'
                ? 'Auditoria formal com critérios técnicos de verdade sobre repositórios, integridade de conteúdo, segurança e dados.'
                : language === 'es'
                ? 'Auditoría formal con criterios técnicos de veracidad de código, integridad de contenido, seguridad y datos.'
                : 'Formal release audit ensuring repository truth, content integrity, accessibility, security, and data sovereignty.'}
            </p>
            <button
              onClick={onOpenGates}
              className="text-xs font-mono text-[#1A1A1A] hover:text-emerald-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'pt' ? 'Revisar matriz de gates →' : language === 'es' ? 'Revisar matriz de gates →' : 'Review gates matrix →'}</span>
            </button>
          </div>

          {/* Card 3: Vocabulário Técnico Formal */}
          <div className="p-6 bg-white border border-[#E2E8F0] rounded-xl hover:border-[#1A1A1A] transition-colors shadow-xs">
            <div className="w-9 h-9 rounded-lg bg-[#FAF9F6] border border-[#EAEAE6] flex items-center justify-center text-[#1A1A1A] mb-4">
              <BookOpen className="w-4 h-4 text-blue-600" />
            </div>
            <h3 className="font-serif text-lg font-bold text-[#1A1A1A] mb-1">
              {language === 'pt' ? 'Vocabulário Técnico Formal' : language === 'es' ? 'Vocabulario Técnico Formal' : 'Formal Technical Vocabulary'}
            </h3>
            <p className="text-xs text-[#555550] leading-relaxed mb-4">
              {language === 'pt'
                ? 'Definições operacionais para conceitos como Trusted Search e Trust Before Generation, contrastados com anti-padrões.'
                : language === 'es'
                ? 'Definiciones operativas para conceptos como Trusted Search y Trust Before Generation, contrastados con antipatrones.'
                : 'Precise operational boundaries for concepts like Trusted Search and Trust Before Generation, contrasted with industry anti-patterns.'}
            </p>
            <button
              onClick={onOpenDashboard}
              className="text-xs font-mono text-[#1A1A1A] hover:text-emerald-700 font-semibold inline-flex items-center gap-1 cursor-pointer"
            >
              <span>{language === 'pt' ? 'Consultar definições →' : language === 'es' ? 'Consultar definiciones →' : 'Inspect definitions →'}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
