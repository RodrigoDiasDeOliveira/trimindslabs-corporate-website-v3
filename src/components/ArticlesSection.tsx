import React from 'react';
import { Article, getArticles } from '../data/trimindsData';
import { useLanguage } from '../context/LanguageContext';
import { BookOpen, ArrowRight, FlaskConical } from 'lucide-react';

interface ArticlesSectionProps {
  onSelectArticle: (article: Article) => void;
}

export const ArticlesSection: React.FC<ArticlesSectionProps> = ({ onSelectArticle }) => {
  const { language, t } = useLanguage();
  const articles = getArticles(language);

  return (
    <section id="research" className="py-16 md:py-24 border-b border-[#E2E8F0]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {t('research.kicker', 'PESQUISA, ARTIGOS & LABS')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {t('research.title', 'Fundamentação teórica e laboratórios de verificação.')}
          </h2>
          <p className="mt-3 text-base text-[#555550]">
            {t('research.subtitle', 'Publicações de engenharia detalhando por que abordagens ingênuas falham em escala corporativa e como implementamos controles determinísticos.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {articles.map((article) => {
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
                      <span>{isLab ? (language === 'pt' ? 'Laboratório de Pesquisa' : language === 'es' ? 'Laboratorio de Investigación' : 'Research Lab') : 'Whitepaper'}</span>
                    </span>
                    <span>{article.readTime || article.readingTime || (language === 'pt' ? '6 min de leitura' : language === 'es' ? '6 min de lectura' : '6 min read')}</span>
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
                    {article.publishedDate || (language === 'pt' ? 'Edição 2026' : language === 'es' ? 'Edición 2026' : '2026 Edition')}
                  </span>

                  <button
                    onClick={() => onSelectArticle(article)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A] hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>{isLab ? t('research.viewLab', 'Ver Laboratório') : t('research.readArticle', 'Ler Artigo')}</span>
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
