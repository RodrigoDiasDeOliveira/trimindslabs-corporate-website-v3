import React, { useState } from 'react';
import { useLanguage, Language } from '../context/LanguageContext';
import { ShieldCheck, Menu, X, Terminal } from 'lucide-react';

interface NavbarProps {
  onOpenDashboard: () => void;
  onOpenGates: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDashboard, onOpenGates }) => {
  const { language, setLanguage, t } = useLanguage();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: t('nav.home', 'Visão Geral'), href: '#overview' },
    { label: t('nav.aiSystems', 'Sistemas & Projetos'), href: '#projects' },
    { label: t('nav.engineering', 'Arquitetura'), href: '#architecture' },
    { label: t('nav.research', 'Pesquisa & Artigos'), href: '#research' },
    { label: 'Engineering Dashboard', href: '#dashboard', isHighlight: true },
  ];

  const handleLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href === '#dashboard') {
      e.preventDefault();
      onOpenDashboard();
      setMobileMenuOpen(false);
      return;
    }
    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  return (
    <header className="sticky top-0 z-40 bg-[#F4F4F1]/90 backdrop-blur-md border-b border-[#E2E8F0]">
      {/* Top Bar: Exactly 3 Zones */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        {/* Zone 1: Brand mark (single text element wordmark) */}
        <a 
          href="#overview" 
          className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A] hover:opacity-90 transition-opacity"
        >
          Trimindslabs
        </a>

        {/* Zone 2: Clean 4-6 text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#4A4A45]">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className={`transition-colors hover:text-[#1A1A1A] ${
                link.isHighlight ? 'text-[#1A1A1A] font-semibold flex items-center gap-1.5' : ''
              }`}
            >
              {link.isHighlight && <Terminal className="w-3.5 h-3.5 text-emerald-600" />}
              {link.label}
            </a>
          ))}
        </nav>

        {/* Zone 3: Language toggle & Primary Action */}
        <div className="flex items-center gap-3">
          {/* Language selector */}
          <div className="flex items-center text-xs font-mono border border-[#D1D1CD] rounded bg-[#EAEAE6]/50 p-0.5">
            {(['pt', 'en', 'es'] as Language[]).map((lang) => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-2 py-0.5 rounded transition-colors uppercase ${
                  language === lang
                    ? 'bg-[#1A1A1A] text-[#F4F4F1] font-semibold'
                    : 'text-[#70706B] hover:text-[#1A1A1A]'
                }`}
                title={`Mudar para ${lang.toUpperCase()}`}
              >
                {lang}
              </button>
            ))}
          </div>

          {/* Quick Evidence Action */}
          <button
            onClick={onOpenGates}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium text-[#1A1A1A] bg-white border border-[#D1D1CD] hover:border-[#1A1A1A] rounded transition-colors whitespace-nowrap shadow-xs"
            title="Verificar os 11 Gates de Produção"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>11 Gates</span>
          </button>

          {/* Mobile hamburger */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden p-2 text-[#1A1A1A] hover:bg-[#EAEAE6] rounded"
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E2E8F0] bg-[#F4F4F1] px-4 pt-3 pb-6 space-y-3">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleLinkClick(e, link.href)}
              className="block py-2 text-base font-medium text-[#1A1A1A] hover:text-emerald-700"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2 border-t border-[#E2E8F0] flex gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenGates();
              }}
              className="flex-1 py-2 text-xs font-mono text-center border border-[#D1D1CD] rounded bg-white text-[#1A1A1A]"
            >
              Auditoria: 11 Gates
            </button>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDashboard();
              }}
              className="flex-1 py-2 text-xs font-mono text-center bg-[#1A1A1A] rounded text-[#F4F4F1]"
            >
              Dashboard
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
