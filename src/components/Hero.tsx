import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ArrowRight, Terminal, CheckCircle2, Shield, Satellite, Cpu } from 'lucide-react';

interface HeroProps {
  onExploreProjects: () => void;
  onOpenDashboard: () => void;
  onOpenGates: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProjects,
  onOpenDashboard,
  onOpenGates,
}) => {
  const { t, language } = useLanguage();

  return (
    <section id="overview" className="relative pt-12 pb-16 md:pt-20 md:pb-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Editorial Subtitle / Kicker */}
        <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] tracking-wider uppercase mb-4">
          <span>{t('hero.badge', 'ENGENHARIA DE SISTEMAS INTELIGENTES')}</span>
          <span aria-hidden="true">·</span>
          <span>SOBERANIA EU &amp; VERIFICAÇÃO DETERMINÍSTICA</span>
        </div>

        {/* Primary Headline */}
        <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#1A1A1A] leading-[1.15] max-w-4xl [text-wrap:balance]">
          {language === 'pt' ? (
            <>
              Sistemas inteligentes construídos para{' '}
              <span className="italic font-normal underline decoration-1 underline-offset-8 decoration-[#A8A8A2]">
                certeza determinística
              </span>{' '}
              e zero alucinação.
            </>
          ) : language === 'es' ? (
            <>
              Sistemas inteligentes diseñados para{' '}
              <span className="italic font-normal underline decoration-1 underline-offset-8 decoration-[#A8A8A2]">
                certeza determinista
              </span>{' '}
              y cero alucinación.
            </>
          ) : (
            <>
              Intelligent systems engineered for{' '}
              <span className="italic font-normal underline decoration-1 underline-offset-8 decoration-[#A8A8A2]">
                deterministic certainty
              </span>{' '}
              and zero hallucination.
            </>
          )}
        </h1>

        {/* Human Explanation: Two Audiences */}
        <p className="mt-6 text-lg sm:text-xl text-[#4A4A45] max-w-3xl leading-relaxed">
          {language === 'pt'
            ? 'A Trimindslabs projeta plataformas críticas de software e IA onde falhas estocásticas não são permitidas. Unimos auditoria regulatória com proveniência legal exata, visão computacional geoespacial com satélites reais e rastreabilidade logística ponta a ponta.'
            : language === 'es'
            ? 'Trimindslabs diseña plataformas críticas de software e IA donde los fallos estocásticos no están permitidos. Unimos auditoría regulatoria con procedencia legal exacta, visión computacional geoespacial con satélites reales y trazabilidad logística de extremo a extremo.'
            : 'Trimindslabs builds mission-critical software and AI platforms where stochastic errors are unacceptable. We combine regulatory compliance with immutable citation provenance, geospatial computer vision using real satellites, and end-to-end industrial logistics traceability.'}
        </p>

        {/* Two Clear Entry Points */}
        <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
          <button
            onClick={onExploreProjects}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#1A1A1A] hover:bg-[#333330] rounded-lg transition-all shadow-sm"
          >
            <span>{language === 'pt' ? 'Conhecer Projetos & Soluções' : language === 'es' ? 'Explorar Proyectos y Soluciones' : 'Explore Projects & Solutions'}</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            onClick={onOpenDashboard}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-[#1A1A1A] bg-white border border-[#D1D1CD] hover:border-[#1A1A1A] rounded-lg transition-all shadow-xs"
          >
            <Terminal className="w-4 h-4 text-emerald-600" />
            <span>{language === 'pt' ? 'Engineering Dashboard & Evidências' : language === 'es' ? 'Engineering Dashboard y Evidencias' : 'Engineering Dashboard & Evidence'}</span>
          </button>
        </div>

        {/* Rigorous Truth Anchors (Claim-to-Proof Adjacency) */}
        <div className="mt-14 pt-8 border-t border-[#E2E8F0] grid grid-cols-2 md:grid-cols-4 gap-6">
          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#70706B] uppercase mb-1">
              <Shield className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('hero.metric1Title', 'Política de Evidência')}</span>
            </div>
            <div className="font-serif text-2xl font-bold text-[#1A1A1A]">0.00%</div>
            <p className="text-xs text-[#555550] mt-1 leading-snug">
              {t('hero.metric1Desc', 'Alucinação factual contida com hashing SHA-256')}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#70706B] uppercase mb-1">
              <Satellite className="w-3.5 h-3.5 text-blue-600" />
              <span>{t('hero.metric2Title', 'Satélite Sentinel-2')}</span>
            </div>
            <div className="font-serif text-2xl font-bold text-[#1A1A1A]">10m / px</div>
            <p className="text-xs text-[#555550] mt-1 leading-snug">
              {t('hero.metric2Desc', 'Entradas orbitais reais no Geo AI V4')}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#70706B] uppercase mb-1">
              <Cpu className="w-3.5 h-3.5 text-purple-600" />
              <span>{t('hero.metric3Title', 'Nuvem Europeia')}</span>
            </div>
            <div className="font-serif text-2xl font-bold text-[#1A1A1A]">GCP Cloud Run</div>
            <p className="text-xs text-[#555550] mt-1 leading-snug">
              {t('hero.metric3Desc', 'Região europe-west1 com soberania de dados')}
            </p>
          </div>

          <div>
            <div className="flex items-center gap-1.5 text-xs font-mono text-[#70706B] uppercase mb-1">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              <span>{t('hero.metric4Title', 'Auditoria de Release')}</span>
            </div>
            <button
              onClick={onOpenGates}
              className="group flex items-baseline gap-1 text-left"
            >
              <span className="font-serif text-2xl font-bold text-[#1A1A1A] group-hover:underline">11 Gates</span>
              <span className="text-xs text-emerald-600 font-mono font-medium">Verificados</span>
            </button>
            <p className="text-xs text-[#555550] mt-1 leading-snug">
              {t('hero.metric4Desc', 'Requisitos formais de separação entre estágio e prova')}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
