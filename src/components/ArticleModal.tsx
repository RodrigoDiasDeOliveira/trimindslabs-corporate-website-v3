import React from 'react';
import { Article } from '../data/trimindsData';
import { X, BookOpen, Clock, Calendar, ExternalLink, Code } from 'lucide-react';

interface ArticleModalProps {
  article: Article | null;
  onClose: () => void;
}

export const ArticleModal: React.FC<ArticleModalProps> = ({ article, onClose }) => {
  if (!article) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/50 backdrop-blur-xs overflow-y-auto"
      onClick={onClose}
    >
      <div
        className="bg-[#F4F4F1] border border-[#D1D1CD] rounded-2xl max-w-3xl w-full max-h-[90vh] flex flex-col shadow-2xl overflow-hidden text-[#1A1A1A]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header */}
        <div className="p-6 bg-white border-b border-[#E2E8F0] flex items-start justify-between gap-4">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-[#70706B] uppercase mb-1">
              <span>{article.category || 'Engineering Whitepaper'}</span>
              <span aria-hidden="true">·</span>
              <span>{article.readTime || article.readingTime || '8 min read'}</span>
              {article.publishedDate && (
                <>
                  <span aria-hidden="true">·</span>
                  <span>{article.publishedDate}</span>
                </>
              )}
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#1A1A1A] leading-tight">
              {article.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 text-[#70706B] hover:text-[#1A1A1A] hover:bg-[#F4F4F1] rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1 text-sm text-[#4A4A45] leading-relaxed">
          {/* Abstract */}
          <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl">
            <div className="text-xs font-mono text-[#70706B] uppercase mb-1 font-semibold">
              Resumo do Whitepaper
            </div>
            <p className="text-[#1A1A1A] leading-relaxed">
              {article.abstract}
            </p>
          </div>

          {/* Key Takeaways */}
          {article.keyTakeaways && article.keyTakeaways.length > 0 && (
            <div className="p-4 bg-[#FAF9F6] border border-[#E2E8F0] rounded-xl">
              <div className="text-xs font-mono text-[#70706B] uppercase mb-2 font-semibold">
                Principais Conclusões de Engenharia
              </div>
              <ul className="space-y-1.5 text-xs text-[#1A1A1A]">
                {article.keyTakeaways.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">›</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Body Sections */}
          {article.bodySections && article.bodySections.map((sec, idx) => (
            <div key={idx} className="p-5 bg-white border border-[#E2E8F0] rounded-xl space-y-3">
              <h3 className="font-serif text-lg font-bold text-[#1A1A1A]">
                {sec.heading}
              </h3>
              <p className="text-xs text-[#555550] leading-relaxed whitespace-pre-line">
                {sec.content}
              </p>
              {sec.codeSnippet && (
                <div className="p-3 bg-[#1A1A1A] text-[#F4F4F1] font-mono text-xs rounded-lg overflow-x-auto">
                  <code>{sec.codeSnippet}</code>
                </div>
              )}
            </div>
          ))}

          {/* Conclusions & DOI */}
          {article.conclusions && (
            <div className="p-4 bg-white border border-[#E2E8F0] rounded-xl">
              <div className="text-xs font-mono text-[#70706B] uppercase mb-1 font-semibold">
                Conclusão &amp; Recomendação de Produção
              </div>
              <p className="text-xs text-[#555550]">
                {article.conclusions}
              </p>
            </div>
          )}

          {article.doiOrReference && (
            <div className="text-xs font-mono text-[#70706B] p-3 bg-white rounded border border-[#E2E8F0]">
              <span className="font-semibold">Referência: </span>
              <span>{article.doiOrReference}</span>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 bg-white border-t border-[#E2E8F0] flex items-center justify-between text-xs font-mono text-[#70706B]">
          <span>Trimindslabs Research Specification</span>
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
