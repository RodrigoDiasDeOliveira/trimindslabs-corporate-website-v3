import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getArchitecturePillars } from '../data/trimindsData';
import { Cpu, ShieldCheck, GitMerge, FileCode, CheckCircle2 } from 'lucide-react';

export const ArchitectureSection: React.FC = () => {
  const { language, t } = useLanguage();
  const pillars = getArchitecturePillars(language);

  const getPillarIcon = (num: string) => {
    switch (num) {
      case '01': return Cpu;
      case '02': return ShieldCheck;
      case '03': return GitMerge;
      default: return FileCode;
    }
  };

  return (
    <section id="architecture" className="py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {t('arch.kicker', 'PADRÕES TRANSVERSAIS')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {t('arch.title', 'Arquitetura de sistemas desenhada para produção real.')}
          </h2>
          <p className="mt-3 text-base text-[#555550]">
            {t('arch.subtitle', 'Nossa engenharia rejeita atalhos probabilísticos. Implementamos isolamento explícito, verificabilidade ponta a ponta e auditoria rastreável em cada componente.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {pillars.map((pillar) => {
            const Icon = getPillarIcon(pillar.num);
            return (
              <div
                key={pillar.num}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 hover:border-[#1A1A1A] transition-colors shadow-xs"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-xs text-[#70706B] font-semibold">
                    {pillar.num} // {t('arch.pillarLabel', 'ARQUITETURA')}
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
