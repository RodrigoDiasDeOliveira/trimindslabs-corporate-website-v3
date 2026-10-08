import React from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Scale, Globe, Truck, Layers, ArrowUpRight } from 'lucide-react';

interface DomainOverviewProps {
  onSelectDomainFilter: (filter: string) => void;
}

export const DomainOverview: React.FC<DomainOverviewProps> = ({ onSelectDomainFilter }) => {
  const { language, t } = useLanguage();

  const domains = [
    {
      id: 'compliance',
      icon: Scale,
      title: language === 'pt' ? 'Conformidade & IA Regulatória' : language === 'es' ? 'Cumplimiento e IA Regulatoria' : 'Regulatory AI & Compliance',
      headline: language === 'pt' ? 'Auditoria jurídica sem alucinações' : language === 'es' ? 'Auditoría jurídica sin alucinaciones' : 'Legal Auditing with Provenance',
      description: language === 'pt' 
        ? 'Processamento de normas complexas com garantia criptográfica de citação exata de parágrafos legais, protegendo empresas sob o EU AI Act.'
        : language === 'es'
        ? 'Procesamiento de normas complejas con garantía criptográfica de citación exacta de artículos legales, protegiendo empresas bajo el EU AI Act.'
        : 'Processing multi-jurisdiction regulatory texts with mathematical citation guarantees down to exact character offsets, compliant with EU AI Act.',
      projectsSummary: 'Trusted Compliance Agent',
      filterKey: 'compliance',
    },
    {
      id: 'geospatial',
      icon: Globe,
      title: language === 'pt' ? 'Inteligência Geoespacial' : language === 'es' ? 'Inteligencia Geoespacial' : 'Geospatial Intelligence',
      headline: language === 'pt' ? 'Visão orbital com satélites reais' : language === 'es' ? 'Visión orbital con satélites reales' : 'Earth Observation via Real Satellites',
      description: language === 'pt'
        ? 'Análise multiespectral contínua a 10m/pixel para monitorar florestas, plantios e infraestruturas lineares a partir de dados Sentinel-2 L2A.'
        : language === 'es'
        ? 'Análisis multiespectral continuo a 10m/pixel para monitorear bosques, cultivos e infraestructuras críticas a partir de datos Sentinel-2 L2A.'
        : 'Automated 12-band multi-spectral raster processing at 10m/pixel to monitor critical infrastructure corridors and environmental ground mutations.',
      projectsSummary: 'Trimindslabs Geo-AI (V4)',
      filterKey: 'geospatial',
    },
    {
      id: 'logistics',
      icon: Truck,
      title: language === 'pt' ? 'Automação Logística & Borda' : language === 'es' ? 'Automatización Logística y Borde' : 'Logistics Automation & Edge Vision',
      headline: language === 'pt' ? 'Rastreamento e contagem em tempo real' : language === 'es' ? 'Trazabilidad y conteo en tiempo real' : 'Real-Time Telemetry & Mobile Vision',
      description: language === 'pt'
        ? 'Plataforma para eventos RFID em armazéns e conferência visual de materiais industriais via visão computacional em dispositivos móveis.'
        : language === 'es'
        ? 'Plataforma para eventos RFID en almacenes y comprobación visual de piezas industriales mediante visión artificial en dispositivos móviles.'
        : 'Enterprise logistics platform processing high-frequency RFID streams and mobile Android edge scanning for industrial asset counts.',
      projectsSummary: 'Trimindslabs Logistics Platform (TLP)',
      filterKey: 'logistics',
    },
    {
      id: 'platform',
      icon: Layers,
      title: language === 'pt' ? 'Plataforma & Nuvem Soberana' : language === 'es' ? 'Plataforma y Nube Soberana' : 'Platform Engineering & Sovereign Mesh',
      headline: language === 'pt' ? 'Segurança Zero Trust e orquestração' : language === 'es' ? 'Seguridad Zero Trust y orquestación' : 'Zero Trust Security & Multi-Cloud Ops',
      description: language === 'pt'
        ? 'Arquitetura hexagonal para controle de acesso, orquestrador multi-nuvem via protocolo MCP e barramento de eventos sob regulação europeia.'
        : language === 'es'
        ? 'Arquitectura hexagonal para control de acceso, orquestador multinube vía protocolo MCP y malla de eventos bajo regulación europea.'
        : 'Hexagonal identity layers, Model Context Protocol (MCP) multi-cloud administrators, and secure event mesh under European data jurisdiction.',
      projectsSummary: 'Security Platform · AI Cloud Admin · Integration Mesh',
      filterKey: 'platform',
    },
  ];

  return (
    <section className="py-16 md:py-20 border-b border-[#E2E8F0] bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mb-12">
          <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider mb-2">
            {t('domains.kicker', 'DOMÍNIOS DE ENGENHARIA')}
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#1A1A1A] [text-wrap:balance]">
            {t('domains.title', 'Quatro áreas de engenharia focadas em resolver problemas reais.')}
          </h2>
          <p className="mt-3 text-base text-[#555550]">
            {t('domains.subtitle', 'Cada sistema responde a desafios concretos onde a precisão, a segurança e a rastreabilidade são pré-requisitos absolutos.')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {domains.map((domain) => {
            const Icon = domain.icon;
            return (
              <div
                key={domain.id}
                className="bg-white border border-[#E2E8F0] rounded-xl p-6 flex flex-col justify-between hover:border-[#1A1A1A] transition-all duration-200 group shadow-xs"
              >
                <div>
                  <div className="w-10 h-10 rounded-lg bg-[#F4F4F1] flex items-center justify-center text-[#1A1A1A] mb-4 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <div className="text-xs font-mono text-[#70706B] uppercase tracking-wider">
                    {domain.title}
                  </div>
                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] mt-1 mb-2">
                    {domain.headline}
                  </h3>
                  <p className="text-sm text-[#555550] leading-relaxed">
                    {domain.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#F0F0EC]">
                  <div className="text-xs text-[#70706B] font-mono mb-3 truncate">
                    {domain.projectsSummary}
                  </div>
                  <button
                    onClick={() => onSelectDomainFilter(domain.filterKey)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#1A1A1A] hover:text-emerald-700 transition-colors cursor-pointer"
                  >
                    <span>{language === 'pt' ? 'Ver sistemas desta área' : language === 'es' ? 'Ver sistemas de esta área' : 'Inspect related systems'}</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
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
