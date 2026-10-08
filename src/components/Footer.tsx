import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { ExternalLink, ShieldCheck, Mail, GitBranch } from 'lucide-react';

interface FooterProps {
  onOpenGates: () => void;
  onOpenDashboard: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenGates, onOpenDashboard }) => {
  const { language } = useLanguage();

  return (
    <footer className="bg-white border-t border-[#E2E8F0] pt-16 pb-12 text-[#1A1A1A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Col 1: Brand & Philosophy */}
          <div className="md:col-span-2 space-y-4">
            <span className="font-serif text-2xl font-bold tracking-tight text-[#1A1A1A]">
              Trimindslabs
            </span>
            <p className="text-sm text-[#555550] max-w-md leading-relaxed">
              {language === 'pt'
                ? 'Engenharia de sistemas inteligentes com processamento determinístico, proveniência de citações imutável e separação estrita entre estágio de implementação e comprovação operacional.'
                : language === 'es'
                ? 'Ingeniería de sistemas inteligentes con procesamiento determinista, procedencia de citas inmutable y separación estricta entre implementación y comprobación.'
                : 'Engineering intelligent systems with deterministic processing, immutable citation provenance, and strict separation between implementation stage and operational evidence.'}
            </p>
            <div className="flex items-center gap-4 text-xs font-mono text-[#70706B] pt-2">
              <span className="flex items-center gap-1.5 text-emerald-700">
                <ShieldCheck className="w-3.5 h-3.5" />
                <span>11 Gates Auditados</span>
              </span>
              <span>·</span>
              <span>Soberania de Dados EU</span>
            </div>
          </div>

          {/* Col 2: Navigation & Proof */}
          <div>
            <div className="font-mono text-xs text-[#70706B] uppercase mb-3 font-semibold">
              Camadas de Informação
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#4A4A45]">
              <li>
                <a href="#overview" className="hover:text-black transition-colors">
                  1. Website (Explica)
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-black transition-colors">
                  2. Case Studies (Demonstra)
                </a>
              </li>
              <li>
                <button onClick={onOpenDashboard} className="hover:text-black text-left transition-colors">
                  3. Dashboard (Comprova)
                </button>
              </li>
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black inline-flex items-center gap-1 transition-colors"
                >
                  <span>4. GitHub (Inspeciona)</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Repositórios Oficiais & Contato */}
          <div>
            <div className="font-mono text-xs text-[#70706B] uppercase mb-3 font-semibold">
              Repositórios &amp; Contato
            </div>
            <ul className="space-y-2 text-xs font-mono text-[#4A4A45]">
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira/Trusted-Compliance-Agent"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black truncate block"
                >
                  Trusted-Compliance-Agent
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira/Trimindslabs-Geo-AI"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black truncate block"
                >
                  Trimindslabs-Geo-AI
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/RodrigoDiasDeOliveira/TLP-Trimindslabs-Logistics-Platform"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-black truncate block"
                >
                  TLP-Logistics-Platform
                </a>
              </li>
              <li className="pt-2">
                <a
                  href="mailto:contato@trimindslabs.com"
                  className="inline-flex items-center gap-1.5 text-xs text-[#1A1A1A] font-semibold hover:underline"
                >
                  <Mail className="w-3.5 h-3.5" />
                  <span>contato@trimindslabs.com</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Sub-bar */}
        <div className="pt-8 border-t border-[#F0F0EC] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-[#70706B]">
          <div>
            &copy; {new Date().getFullYear()} Trimindslabs. Todos os direitos reservados.
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenGates}
              className="hover:text-[#1A1A1A] transition-colors underline"
            >
              Verificar Gates de Produção
            </button>
            <span>·</span>
            <span>V3 Production Architecture</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
