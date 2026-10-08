/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { LanguageProvider } from './context/LanguageContext';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { DomainOverview } from './components/DomainOverview';
import { ProjectsSection } from './components/ProjectsSection';
import { ArchitectureSection } from './components/ArchitectureSection';
import { EngineeringDashboard } from './components/EngineeringDashboard';
import { ArticlesSection } from './components/ArticlesSection';
import { Footer } from './components/Footer';
import { ProjectModal } from './components/ProjectModal';
import { ArticleModal } from './components/ArticleModal';
import { GatesModal } from './components/GatesModal';
import { Project, Article } from './data/trimindsData';

export function AppContent() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [projectModalTab, setProjectModalTab] = useState<'overview' | 'technical'>('overview');
  const [selectedArticle, setSelectedArticle] = useState<Article | null>(null);
  const [isGatesModalOpen, setIsGatesModalOpen] = useState(false);
  const [activeDomainFilter, setActiveDomainFilter] = useState<string>('all');

  const handleSelectProject = (project: Project, initialTab: 'overview' | 'technical' = 'overview') => {
    setSelectedProject(project);
    setProjectModalTab(initialTab);
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

  const handleScrollToDashboard = () => {
    const elem = document.getElementById('dashboard');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F4F4F1] text-[#1A1A1A]">
      {/* Sticky Top Bar Contract */}
      <Navbar
        onOpenDashboard={handleScrollToDashboard}
        onOpenGates={() => setIsGatesModalOpen(true)}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreProjects={handleScrollToProjects}
          onOpenDashboard={handleScrollToDashboard}
          onOpenGates={() => setIsGatesModalOpen(true)}
        />

        {/* Non-Technical Understanding: 4 Functional Pillars */}
        <DomainOverview onSelectDomainFilter={handleSelectDomainFilter} />

        {/* Progressive Disclosure: Projects & Case Studies (Layer 1) */}
        <ProjectsSection
          onSelectProject={handleSelectProject}
          activeDomainFilter={activeDomainFilter}
        />

        {/* Transversal Systems Architecture */}
        <ArchitectureSection />

        {/* The Fundamental Proof Layer: Engineering Dashboard */}
        <EngineeringDashboard />

        {/* Research Papers & Verification Labs */}
        <ArticlesSection onSelectArticle={setSelectedArticle} />
      </main>

      {/* Editorial Footer */}
      <Footer
        onOpenGates={() => setIsGatesModalOpen(true)}
        onOpenDashboard={handleScrollToDashboard}
      />

      {/* Modals for Progressive Disclosure (Layers 2, 3 and Audit) */}
      <ProjectModal
        project={selectedProject}
        initialTab={projectModalTab}
        onClose={() => setSelectedProject(null)}
      />

      <ArticleModal
        article={selectedArticle}
        onClose={() => setSelectedArticle(null)}
      />

      <GatesModal
        isOpen={isGatesModalOpen}
        onClose={() => setIsGatesModalOpen(false)}
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
