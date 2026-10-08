import React from 'react';
import { Article, ARTICLES } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, Clock, ArrowRight, FlaskConical } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const { language } = useLanguage();

  return (
    <section id="research" className="py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {language === 'pt' ? 'PESQUISA, ARTIGOS & LABS' : language === 'es' ? 'INVESTIGACIÓN, ARTÍCULOS Y LABS' : 'RESEARCH, PAPERS & LABS'}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {language === 'pt'
              ? 'Fundamentação teórica e laboratórios de verificação.'
              : language === 'es'
              ? 'Fundamentación teórica y laboratorios de verificación.'
              : 'Theoretical Foundations & Verification Laboratories.'}
          </h2>
          <p className="mt-3 text-base text-[#555550]">
            {language === 'pt'
              ? 'Publicações de engenharia detalhando por que soluções ingênuas de IA falham em escala industrial e como implementamos controles determinísticos.'
              : language === 'es'
              ? 'Publicaciones de ingeniería que explican por qué las soluciones ingenuas de IA fallan en escala industrial.'
              : 'Engineering whitepapers detailing why naive vector retrieval fails at enterprise scale and how we build deterministic guardrails.'}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ARTICLES.map((article) => {
            const isLab = article.id.includes('detector') || article.id.includes('eye-guardian');
            return (
              <div
                key={article.id}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between hover:border-[#1A1A1A] transition-all group shadow-xs"
              >
                <div>
                  <div className="flex items-center justify-between text-xs font-mono text-[#70706B] uppercase mb-3">
                    <span className="flex items-center gap-1 text-emerald-700 font-semibold">
                      {isLab ? <FlaskConical className="w-3.5 h-3.5" /> : <BookOpen className="w-3.5 h-3.5" />}
                      <span>{isLab ? 'Research Lab' : 'Whitepaper'}</span>
                    </span>
                    <span>{article.readTime || article.readingTime || '6 min'}</span>
                  </div>

                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] group-hover:text-black leading-snug mb-3">
                    {article.title}
                  </h3>

                  <p className="text-xs text-[#555550] leading-relaxed line-clamp-3">
                    {article.abstract}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0EC] flex items-center justify-between">
                  <span className="text-xs font-mono text-[#70706B]">
                    {article.publishedDate || '2026 Edition'}
                  </span>

                  <button
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A] hover:text-emerald-700 transition-colors"
                  >
                    <span>{isLab ? 'Ver Laboratório' : 'Ler Artigo'}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
