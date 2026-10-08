import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ShieldCheck, Mail, Terminal } from 'lucide-react';

interface FooterProps {
  onOpenGates: () => void;
  onOpenDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGates, onOpenDashboard }) => {
  const { language, t } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-16 pb-12 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Col 1: Brand & Positioning */}
          <div className="space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A]">
              Trimindslabs
            </span>
            <p className="text-sm text-[#555550] leading-relaxed">
              {t('footer.positioning')}
            </p>
            <div className="flex items-center gap-3 text-xs font-mono text-[#70706B] pt-1">
              <span className="flex items-center gap-1.5 text-emerald-700 font-semibold">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>{t('footer.gatesAudited', '11 Gates Auditados')}</span>
              </span>
              <span>·</span>
              <span>{t('footer.dataSovereignty', 'Soberania de Dados EU')}</span>
            </div>
          </div>

          {/* Col 2: Navigation & Engineering State */}
          <div>
            <div className="font-mono text-xs text-[#70706B] uppercase mb-3 font-semibold">
              {t('footer.corpNav', 'Navegação Corporativa')}
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#4A4A45]">
              <li>
                <a href="#overview" className="hover:text-black transition-colors">
                  {t('nav.home', 'Visão Geral')}
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black transition-colors">
                  {t('nav.aiSystems', 'Sistemas & Produtos')}
                </a>
              </li>
              <li>
                <a href="#architecture" className="hover:text-black transition-colors">
                  {t('nav.engineering', 'Arquitetura de Sistemas')}
                </a>
              </li>
              <li>
                <a href="#research" className="hover:text-black transition-colors">
                  {t('nav.research', 'Pesquisa, Artigos & Labs')}
                </a>
              </li>
              <li className="pt-1">
                <button
                  onClick={onOpenDashboard}
                  className="hover:text-black text-left transition-colors font-semibold text-emerald-800 inline-flex items-center gap-1.5 cursor-pointer"
                >
                  <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                  <span>{t('nav.dashboardCta', 'Verificar Estado de Engenharia')}</span>
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Contact & Data Sovereignty */}
          <div>
            <div className="font-mono text-xs text-[#70706B] uppercase mb-3 font-semibold">
              {t('footer.contact', 'Contato Técnico & Comercial')}
            </div>
            <div className="space-y-3 text-xs font-mono text-[#4A4A45]">
              <a
                href="mailto:contato@trimindslabs.com"
                className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] font-semibold hover:underline"
              >
                <Mail className="w-3.5 h-3.5" />
                <span>contato@trimindslabs.com</span>
              </a>
              <p className="text-[#70706B] leading-relaxed">
                {t('footer.jurisdiction')}
              </p>
              <div className="pt-1">
                <button
                  onClick={onOpenGates}
                  className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] border border-[#D1D1CD] rounded px-2.5 py-1 hover:border-[#1A1A1A] transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-3 h-3 text-emerald-600" />
                  <span>{t('nav.gatesBtn', 'Auditoria: 11 Gates')}</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[#F0F0EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#70706B]">
          <div>
            &copy; {new Date().getFullYear()} Trimindslabs. {t('footer.rights', 'Todos os direitos reservados.')}
          </div>
          <div className="flex items-center gap-3">
            <span>Trimindslabs Governance Standard</span>
            <span>·</span>
            <button
              onClick={onOpenGates}
              className="hover:text-[#1A1A1A] transition-colors underline cursor-pointer"
            >
              {t('footer.releaseAudit', 'Auditoria de Release')}
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
