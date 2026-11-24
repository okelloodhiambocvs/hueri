/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import photoAssets from '../utils/photoAssets';
import { generateBrochurePDF } from '../utils/brochureGenerator';
import { initialServices } from '../server/seedData';
import { serviceSummaries } from '../utils/serviceRoutes';
import BrochureBanner from './services/BrochureBanner';
import PageHero from './PageHero';
import { RevealBlock } from './MotionReveal';
import {
  ArrowRight,
  Download
} from 'lucide-react';

interface ServicesSectionProps {
  initialPillarId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit?: (lead: any) => void;
}

export default function ServicesSection({
  initialPillarId = 'all',
  onNavigate,
  onRequestProposal
}: ServicesSectionProps) {
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Scoping Matrix Interactive State
  const [scopeSector, setScopeSector] = useState('energy');
  const [scopePhase, setScopePhase] = useState('planning');
  const [scopeLender, setScopeLender] = useState('nema-ifc');

  useEffect(() => {
    if (initialPillarId && initialPillarId !== 'all') {
      setTimeout(() => {
        const el = document.getElementById(initialPillarId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [initialPillarId]);

  const handleGenerateBrochure = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      generateBrochurePDF(initialServices);
      setIsGeneratingPDF(false);
    }, 600);
  };

  const calculateRequirements = () => {
    const deliverables: string[] = ['Comprehensive Project Report'];
    let timeline = '4–8 Weeks';
    let standards = 'National Environmental Assessment Guidelines';

    if (scopeLender === 'nema-ifc' || scopeLender === 'wb') {
      deliverables.push('International ESIA Dossier Aligned with IFC PS1-8');
      deliverables.push('Environmental & Social Management Plan (C-ESMP)');
      timeline = '8–16 Weeks';
      standards = 'National Guidelines + World Bank ESF / IFC Performance Standards';
    }

    if (scopeSector === 'energy' || scopeSector === 'transport') {
      deliverables.push('Stakeholder Engagement Plan (SEP) & Grievance Redress (GRM)');
      deliverables.push('Resettlement Action Plan (RAP / Livelihood Restoration)');
    }

    if (scopeSector === 'water' || scopeSector === 'agri') {
      deliverables.push('Hydrological Baseline & Water Resource Assessment');
      deliverables.push('Biodiversity & Critical Habitat Screening');
    }

    if (scopePhase === 'construction' || scopePhase === 'ops') {
      deliverables.push('Annual Environmental & Compliance Audit');
      deliverables.push('Workplace Occupational Health & Safety Inspection');
      timeline = '2–4 Weeks';
    }

    return { deliverables, timeline, standards };
  };

  const scopingResult = calculateRequirements();

  return (
    <div className="font-sans">

      {/* 1. Unified Full-Width Hero matching Home Landing Page Photo Size */}
      <PageHero
        image={photoAssets.servicesHero}
        imageAlt="HUERI Environmental Advisory Disciplines in Kenya"
        title="Our Services"
        description="Full-spectrum environmental, social, occupational health, safety, and climate advisory services across Kenya and East Africa for developers, lenders, contractors, and public agencies."
      >
        <button
          onClick={() => onRequestProposal()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <span>Let&apos;s Talk</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleGenerateBrochure}
          disabled={isGeneratingPDF}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#4ADE80]" />
          <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download Services Brochure'}</span>
        </button>
      </PageHero>

      {/* 2. Advisory Services Portfolio Grid — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealBlock direction="left" className="text-left max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Advisory Services
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Explore our core environmental, social, health, safety, and sustainability services. Select Details on any service to view full scope, methodology, and delivery formats.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" delayMs={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {serviceSummaries.map((service) => {
              const serviceImg = photoAssets.services[service.imageKey] || photoAssets.eiaAssessment;
              return (
                <div
                  key={service.id}
                  id={service.pillarId}
                  className="flex flex-col justify-between group scroll-mt-28"
                >
                  <div className="space-y-4">
                    <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={serviceImg}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-heading font-bold text-lg sm:text-xl text-[#003B95] dark:text-white leading-snug">
                        {service.title}
                      </h3>
                      <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                        {service.snippet}
                      </p>
                      <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                        {service.deliverablesSummary}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 mt-4 flex items-center gap-3">
                    <button
                      onClick={() => onRequestProposal(service.title)}
                      className="flex-1 py-2.5 px-3.5 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
                    >
                      Let&apos;s Talk
                    </button>
                    <button
                      onClick={() => onNavigate('service-detail', service.slug)}
                      className="py-2.5 px-4 border border-slate-300 dark:border-slate-700 hover:border-[#003B95] dark:hover:border-[#38BDF8] text-[#003B95] dark:text-slate-200 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    >
                      Details →
                    </button>
                  </div>
                </div>
              );
            })}
          </RevealBlock>
        </div>
      </section>

      {/* 3. Interactive Planning Tool: Safeguards Matrix — Logo Green Background */}
      <section id="scoping-matrix" className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 scroll-mt-28 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealBlock direction="left" className="space-y-2 text-left">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
              African Project Safeguards &amp; Scoping Matrix
            </h3>
            <p className="text-sm sm:text-base text-emerald-50 font-light max-w-2xl leading-relaxed">
              Configure your project parameters below to determine required deliverables and estimated timelines.
            </p>
          </RevealBlock>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="scope-sector-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
                Select Sector
              </label>
              <select
                id="scope-sector-select"
                value={scopeSector}
                onChange={(e) => setScopeSector(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#041B44] dark:text-white border border-white/30 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              >
                <option value="energy">Energy &amp; Clean Power (Solar/Wind/Grid)</option>
                <option value="transport">Transport &amp; Corridors (Highways/Ports)</option>
                <option value="water">Water Resources &amp; Sanitation (Dams/Irrigation)</option>
                <option value="housing">Urban Housing &amp; Commercial Real Estate</option>
                <option value="agri">Agribusiness &amp; Industrial Processing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-phase-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
                Project Phase
              </label>
              <select
                id="scope-phase-select"
                value={scopePhase}
                onChange={(e) => setScopePhase(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#041B44] dark:text-white border border-white/30 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              >
                <option value="planning">Feasibility &amp; Pre-Construction</option>
                <option value="licensing">Permitting &amp; Approvals</option>
                <option value="construction">Active Construction &amp; Resident Supervision</option>
                <option value="ops">Commercial Operations &amp; Annual Auditing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-lender-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
                Financing &amp; Lender Framework
              </label>
              <select
                id="scope-lender-select"
                value={scopeLender}
                onChange={(e) => setScopeLender(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-white text-slate-900 dark:bg-[#041B44] dark:text-white border border-white/30 text-xs font-mono focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
              >
                <option value="nema-only">National Regulatory Guidelines</option>
                <option value="nema-ifc">National + International Finance Corp (IFC PS1-8)</option>
                <option value="wb">World Bank Environmental &amp; Social Framework (ESF)</option>
                <option value="afdb">African Development Bank (AfDB ISS)</option>
              </select>
            </div>
          </div>

          <div className="pt-4 space-y-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
              <div>
                <span className="text-xs font-mono text-[#A7F3D0] font-bold uppercase tracking-wider block">
                  Applicable Benchmark
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {scopingResult.standards}
                </h4>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-mono text-[#A7F3D0] font-bold uppercase tracking-wider block">
                  Estimated Timeline
                </span>
                <span className="font-mono font-bold text-white text-sm sm:text-base">
                  {scopingResult.timeline}
                </span>
              </div>
            </div>

            <div className="space-y-2.5">
              <span className="text-xs font-mono text-emerald-100 uppercase tracking-wider block font-bold">
                Recommended Deliverables:
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {scopingResult.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-sm text-white py-1">
                    <span className="text-[#A7F3D0] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate Brochure Download Banner — White Background */}
      <BrochureBanner
        onGenerateBrochure={handleGenerateBrochure}
        isGeneratingPDF={isGeneratingPDF}
      />

    </div>
  );
}
