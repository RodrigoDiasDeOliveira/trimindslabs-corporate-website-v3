import React from 'react';
import { PRODUCTION_GATES } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import { X, ShieldCheck, CheckCircle2, Clock, AlertTriangle } from 'lucide-react';

interface GatesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const GatesModal: React.FC<GatesModalProps> = ({ isOpen, onClose }) => {
  const { language } = useLanguage();

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F4F4F1] border border-[#D1D1CD] rounded-2xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 bg-white border-b border-[#E2E8F0] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] uppercase mb-1">
              <ShieldCheck className="w-4 h-4 text-emerald-600" />
              <span>Auditoria Formal de Engenharia</span>
              <span aria-hidden="true">·</span>
              <span>TRIMINDSLABS-AUDIT-RELEASE-2026</span>
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A]">
              Os 11 Gates de Produção
            </h2>
            <p className="text-xs text-[#555550] mt-1">
              Critérios técnicos e operacionais obrigatórios que regem a separação entre implementação, validação contínua e evidência de produção.
            </p>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-xl text-xs font-mono text-emerald-900 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>11/11 GATES CATALOGADOS &amp; AUDITADOS NO REPOSITÓRIO</span>
            </div>
            <span className="font-semibold">RELEASE V3 READY</span>
          </div>

          <div className="space-y-3">
            {PRODUCTION_GATES.map((gate, idx) => (
              <div
                key={gate.id}
                className="p-4 bg-white border border-[#E2E8F0] rounded-xl flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs"
              >
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-[#70706B]">0{idx + 1}.</span>
                    <span className="font-serif text-base font-bold text-[#1A1A1A]">{gate.name}</span>
                    <span className="font-mono text-[11px] text-[#70706B]">({gate.phase})</span>
                  </div>
                  <p className="text-[#555550] max-w-2xl leading-relaxed">
                    {gate.evidence}
                  </p>
                  {gate.details && (
                    <p className="text-[11px] text-[#70706B] font-mono">
                      Regra: {gate.details}
                    </p>
                  )}
                </div>

                <div className="self-start sm:self-center shrink-0">
                  <span
                    className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded font-mono text-xs border ${
                      gate.status === 'verified'
                        ? 'bg-emerald-50 text-emerald-700 border-emerald-200'
                        : gate.status === 'in-progress'
                        ? 'bg-amber-50 text-amber-700 border-amber-200'
                        : 'bg-slate-50 text-slate-700 border-slate-200'
                    }`}
                  >
                    {gate.status === 'verified' && <CheckCircle2 className="w-3.5 h-3.5" />}
                    {gate.status === 'in-progress' && <Clock className="w-3.5 h-3.5" />}
                    {gate.status === 'pending' && <AlertTriangle className="w-3.5 h-3.5" />}
                    <span className="capitalize">{gate.status}</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#70706B]">
          <span>Trimindslabs Governance Standard</span>
          <button
            onClick={onClose}
            className="px-4 py-2 text-xs font-medium text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-md transition-colors"
          >
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
};
