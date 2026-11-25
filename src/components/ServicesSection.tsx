import React, { useState, useEffect } from 'react';
import { ArrowRight, Download } from 'lucide-react';
import photoAssets from '../utils/photoAssets';
import { generateBrochurePDF } from '../utils/brochureGenerator';
import { initialServices } from '../server/seedData';
import { serviceSummaries, getServiceDetailByIdOrSlug } from '../utils/serviceRoutes';
import {
  SCOPE_SECTORS,
  SCOPE_PHASES,
  SCOPE_LENDERS,
  ScopeSector,
  ScopePhase,
  ScopeLender,
  calculateProjectScopingRequirements
} from '../utils/serviceScoping';
import {
  getAlternatingTone,
  getAlternatingImagePosition
} from '../utils/sectionTransitions';
import { fetchPublicServices } from '../utils/apiClient';
import { Service } from '../types';
import BrochureBanner from './services/BrochureBanner';
import PageHero from './PageHero';
import InteractiveBand from './InteractiveBand';
import SplitShowcaseSection from './SplitShowcaseSection';
import { RevealBlock } from './MotionReveal';

interface ServicesSectionProps {
  initialPillarId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit?: (lead: unknown) => void;
}

const PILLAR_TARGET_SECTION_IDS: Record<string, string> = {
  'service-pillar-1': 'service-eia-esia',
  'service-pillar-2': 'service-rap-livelihoods',
  'service-pillar-3': 'service-env-compliance-audits',
  'service-pillar-4': 'service-climate-resilience',
  'service-pillar-5': 'service-esdd-esg',
  'service-pillar-6': 'service-eshsrim-training'
};

export default function ServicesSection({
  initialPillarId = 'all',
  onNavigate,
  onRequestProposal
}: ServicesSectionProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [backendServices, setBackendServices] = useState<Service[]>(initialServices);
  const [scopeSector, setScopeSector] = useState<ScopeSector>('energy');
  const [scopePhase, setScopePhase] = useState<ScopePhase>('planning');
  const [scopeLender, setScopeLender] = useState<ScopeLender>('nema-ifc');

  useEffect(() => {
    let mounted = true;
    fetchPublicServices().then((list) => {
      if (mounted && list.length > 0) {
        setBackendServices(list);
      }
    });
    return () => {
      mounted = false;
    };
  }, []);

  useEffect(() => {
    if (initialPillarId && initialPillarId !== 'all') {
      const targetId = PILLAR_TARGET_SECTION_IDS[initialPillarId] || initialPillarId;
      setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [initialPillarId]);

  const handleGenerateBrochure = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      generateBrochurePDF(backendServices.length > 0 ? backendServices : initialServices);
      setIsGeneratingPDF(false);
    }, 600);
  };

  const scrollToServiceSection = (sectionId: string) => {
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scopingResult = calculateProjectScopingRequirements({
    sector: scopeSector,
    phase: scopePhase,
    lender: scopeLender
  });

  return (
    <div className="font-sans">
      <PageHero
        image={photoAssets.servicesHero}
        imageAlt="HUERI Environmental Advisory Disciplines in Kenya"
        title="Our Services"
        description="Full-spectrum environmental, social, occupational health, safety, and climate advisory services rooted in Kenya and delivered across Africa and global partnerships for developers, lenders, and public agencies."
      >
        <button
          type="button"
          onClick={() => onRequestProposal()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <span>Let&apos;s Talk</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={handleGenerateBrochure}
          disabled={isGeneratingPDF}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#4ADE80]" />
          <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download Services Brochure'}</span>
        </button>
      </PageHero>

      <InteractiveBand id="services-directory" tone="white" fromTone="hero" className="py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealBlock direction="left" className="text-left max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight text-balance">
              Advisory Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Explore our nine specialized environmental, social, health, safety, and sustainability practices below. Select any discipline to jump straight to its showcase or inspect full methodology.
            </p>
          </RevealBlock>

          <div className="flex flex-wrap gap-2 pt-1" role="navigation" aria-label="Service discipline directory">
            {serviceSummaries.map((service, idx) => (
              <button
                key={service.id}
                type="button"
                onClick={() => scrollToServiceSection(`service-${service.id}`)}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-lg bg-slate-100 hover:bg-[#006B22] text-slate-800 hover:text-white dark:bg-[#06183A] dark:text-slate-200 dark:hover:bg-[#006B22] text-xs font-medium transition-colors duration-200 cursor-pointer whitespace-nowrap shrink-0"
              >
                <span className="font-mono font-bold tabular-nums opacity-70">
                  {String(idx + 1).padStart(2, '0')}.
                </span>
                <span>{service.title}</span>
              </button>
            ))}
          </div>
        </div>
      </InteractiveBand>

      {serviceSummaries.map((summary, idx) => {
        const tone = getAlternatingTone(idx, 'green') as 'white' | 'green';
        const fromTone = idx === 0 ? 'white' : (getAlternatingTone(idx - 1, 'green') as 'white' | 'green');
        const imagePosition = getAlternatingImagePosition(idx, 'right');
        const serviceImg = photoAssets.services[summary.imageKey] || photoAssets.eiaAssessment;
        const backendMatch = backendServices.find((item) => item.id === summary.id);
        const detail = getServiceDetailByIdOrSlug(summary.slug);
        const highlights = (backendMatch?.deliverables || detail.deliverables || []).slice(0, 3);
        const isGreen = tone === 'green';

        return (
          <React.Fragment key={summary.id}>
            <SplitShowcaseSection
              id={`service-${summary.id}`}
              tone={tone}
              fromTone={fromTone}
              imagePosition={imagePosition}
              image={serviceImg}
              imageAlt={`${summary.title} advisory service in Kenya and Africa by HUERI Limited`}
              eyebrow={`${String(idx + 1).padStart(2, '0')} · ${detail.practiceCategory}`}
              title={summary.title}
              description={backendMatch?.overview || detail.overview || summary.snippet}
              secondaryText={summary.deliverablesSummary}
              highlights={highlights}
              actions={
                <>
                  <button
                    type="button"
                    onClick={() => onRequestProposal(summary.title)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isGreen
                        ? 'bg-[#003B95] hover:bg-[#002D73] text-white'
                        : 'bg-[#006B22] hover:bg-[#00581C] text-white'
                    }`}
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onNavigate('service-detail', summary.slug)}
                    className={`inline-flex items-center gap-2 px-4 py-2.5 rounded-lg font-mono font-bold text-xs uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                      isGreen
                        ? 'bg-white/15 hover:bg-white/25 text-white'
                        : 'border border-slate-300 dark:border-slate-700 hover:border-[#003B95] dark:hover:border-[#38BDF8] text-[#003B95] dark:text-slate-200'
                    }`}
                  >
                    <span>Full Scope &amp; Process</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </>
              }
            />
          </React.Fragment>
        );
      })}

      <InteractiveBand id="scoping-matrix" tone="white" fromTone="green" className="py-10 sm:py-12 scroll-mt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealBlock direction="left" className="space-y-2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight text-balance">
              African Project Safeguards &amp; Scoping Matrix
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light max-w-2xl leading-relaxed">
              Configure your project parameters below to determine required deliverables and estimated timelines.
            </p>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="scope-sector-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
                Select Sector
              </label>
              <select
                id="scope-sector-select"
                value={scopeSector}
                onChange={(e) => setScopeSector(e.target.value as ScopeSector)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#06183A] dark:text-white border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#006B22] cursor-pointer"
              >
                {SCOPE_SECTORS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-phase-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
                Project Phase
              </label>
              <select
                id="scope-phase-select"
                value={scopePhase}
                onChange={(e) => setScopePhase(e.target.value as ScopePhase)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#06183A] dark:text-white border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#006B22] cursor-pointer"
              >
                {SCOPE_PHASES.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-lender-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
                Financing &amp; Lender Framework
              </label>
              <select
                id="scope-lender-select"
                value={scopeLender}
                onChange={(e) => setScopeLender(e.target.value as ScopeLender)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#06183A] dark:text-white border border-slate-300 dark:border-slate-700 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-[#006B22] cursor-pointer"
              >
                {SCOPE_LENDERS.map((item) => (
                  <option key={item.value} value={item.value}>
                    {item.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-[#006B22] dark:text-[#4ADE80] font-bold uppercase tracking-wider block">
                  Applicable Benchmark
                </span>
                <h3 className="font-heading font-bold text-base sm:text-lg text-[#003B95] dark:text-white">
                  {scopingResult.standards}
                </h3>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-mono text-[#006B22] dark:text-[#4ADE80] font-bold uppercase tracking-wider block">
                  Estimated Timeline
                </span>
                <span className="font-mono font-bold text-[#003B95] dark:text-white text-sm sm:text-base tabular-nums">
                  {scopingResult.timeline}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-mono text-slate-600 dark:text-slate-300 uppercase tracking-wider block font-bold">
                Recommended Deliverables:
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {scopingResult.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200 py-1">
                    <span className="text-[#006B22] dark:text-[#4ADE80] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </InteractiveBand>

      <BrochureBanner
        onGenerateBrochure={handleGenerateBrochure}
        isGeneratingPDF={isGeneratingPDF}
      />
    </div>
  );
}
