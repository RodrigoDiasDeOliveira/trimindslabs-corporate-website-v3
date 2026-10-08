/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider, useLanguage } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DomainOverview } from './components/DomainOverview';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EngineeringDashboardPreview } from './components/EngineeringDashboardPreview';
import { EngineeringDashboard } from './components/EngineeringDashboard';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { GatesModal } from './components/GatesModal';
import { Project, Article, getProjects, getArticles } from './data/trimindsData';

export function AppContent() {
  const { language } = useLanguage();
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'overview' | 'technical'>('overview');
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [isGatesModalOpen, setIsGatesModalOpen] = useState(false);
  const [isDashboardOpen, setIsDashboardOpen] = useState(false);
  const [activeDomainFilter, setActiveDomainFilter] = useState<string>('all');

  // Dynamically resolve the selected project and article based on current language
  const currentProjects = getProjects(language);
  const currentArticles = getArticles(language);
  const selectedProject = selectedProjectId ? currentProjects.find(p => p.id === selectedProjectId) || null : null;
  const selectedArticle = selectedArticleId ? currentArticles.find(a => a.id === selectedArticleId) || null : null;

  const handleSelectProject = (project: Project, initialTab: 'overview' | 'technical' = 'overview') => {
    setSelectedProjectId(project.id);
    setProjectModalTab(initialTab);
  };

  const handleSelectArticle = (article: Article) => {
    setSelectedArticleId(article.id);
  };

  const handleSelectDomainFilter = (domain: string) => {
    setActiveDomainFilter(domain);
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToProjects = () => {
    const elem = document.getElementById('projects');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenDashboard = () => {
    setIsDashboardOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F1] text-[#1A1A1A]">
      {/* Top Bar Navigation */}
      <Navbar
        onOpenDashboard={handleOpenDashboard}
        onOpenGates={() => setIsGatesModalOpen(true)}
      />

      {/* Main Corporate Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          onExploreProjects={handleScrollToProjects}
          onOpenDashboard={handleOpenDashboard}
          onOpenGates={() => setIsGatesModalOpen(true)}
        />

        {/* 2. Corporate Domains & Core Capabilities */}
        <DomainOverview onSelectDomainFilter={handleSelectDomainFilter} />

        {/* 3. Enterprise Systems & Solutions */}
        <ProjectsSection
          onSelectProject={handleSelectProject}
          activeDomainFilter={activeDomainFilter}
        />

        {/* 4. Transversal Systems Architecture */}
        <ArchitectureSection />

        {/* 5. Engineering Transparency & Verification Preview */}
        <EngineeringDashboardPreview
          onOpenDashboard={handleOpenDashboard}
          onOpenGates={() => setIsGatesModalOpen(true)}
        />

        {/* 6. Research Papers & Verification Labs */}
        <ArticlesSection onSelectArticle={handleSelectArticle} />
      </main>

      {/* Corporate Footer */}
      <Footer
        onOpenGates={() => setIsGatesModalOpen(true)}
        onOpenDashboard={handleOpenDashboard}
      />

      {/* Modals & Overlays for Progressive Disclosure */}
      <ProjectModal
        project={selectedProject}
        initialTab={projectModalTab}
        onClose={() => setSelectedProjectId(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticleId(null)}
      />

      <GatesModal
        isOpen={isGatesModalOpen}
        onClose={() => setIsGatesModalOpen(false)}
      />

      <EngineeringDashboard
        isOpen={isDashboardOpen}
        onClose={() => setIsDashboardOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <LanguageProvider>
      <AppContent />
    </LanguageProvider>
  );
}
