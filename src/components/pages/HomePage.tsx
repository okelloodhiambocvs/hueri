/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowRight } from 'lucide-react';
import Hero from '../Hero';
import AboutHomeSection from '../AboutHomeSection';
import DeliveryProcessFlowchart from '../home/DeliveryProcessFlowchart';
import InteractiveBand from '../InteractiveBand';
import { RevealBlock } from '../MotionReveal';
import photoAssets from '../../utils/photoAssets';
import {
  consolidatedPillars,
  homeFeaturedAssignments,
  homeAdvisoryDisciplines
} from '../../utils/homeContent';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (scope?: string) => void;
  onOpenPartnership: (model?: string) => void;
  stats?: unknown;
}

export default function HomePage({
  onNavigate,
  onRequestProposal,
  onOpenPartnership,
  stats
}: HomePageProps) {
  const marqueeAssignments = [...homeFeaturedAssignments, ...homeFeaturedAssignments];
  const marqueeDisciplines = [...homeAdvisoryDisciplines, ...homeAdvisoryDisciplines];

  return (
    <div className="font-sans bg-white dark:bg-[#041B44] transition-colors duration-300">
      <Hero
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
        onOpenPartnership={() => onOpenPartnership()}
        stats={stats}
      />

      <AboutHomeSection
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
      />

      <InteractiveBand id="home-assignments" tone="green" fromTone="white" className="py-10 sm:py-12 overflow-hidden scroll-mt-24">
        <div className="space-y-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
            <RevealBlock direction="left" className="space-y-1 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                Our Recent Work
              </h2>
              <p className="text-xs sm:text-sm text-emerald-50 font-light max-w-2xl">
                Selected track record of EIA clearances, resettlement planning (RAP), climate vulnerability assessments, and compliance audits delivered in Kenya and benchmarked for Africa-wide and international standards.
              </p>
            </RevealBlock>

            <RevealBlock direction="right" delayMs={80}>
              <button
                type="button"
                onClick={() => onNavigate('about', 'about-milestones')}
                className="text-xs font-mono font-bold text-white hover:text-emerald-200 transition-colors uppercase tracking-wider cursor-pointer shrink-0"
              >
                View Historic Milestones →
              </button>
            </RevealBlock>
          </div>

          <div className="service-marquee-wrapper w-full overflow-hidden py-1">
            <div className="animate-service-marquee gap-6 px-4 sm:px-6 lg:px-8">
              {marqueeAssignments.map((proj, index) => {
                const isDuplicate = index >= homeFeaturedAssignments.length;
                const projImage = photoAssets.projects[proj.imageKey] || photoAssets.siteStructuralDeck;
                return (
                  <button
                    key={`${proj.id}-${index}`}
                    type="button"
                    aria-hidden={isDuplicate}
                    tabIndex={isDuplicate ? -1 : 0}
                    onClick={() => onNavigate('project-detail', proj.slug)}
                    className="w-[270px] sm:w-[290px] shrink-0 text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-[#00551B]">
                        <img
                          src={projImage}
                          alt={`${proj.title} — ${proj.location}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="pt-3.5 pb-2 space-y-1.5">
                        <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-100">
                          <span className="truncate">{proj.location}</span>
                          <span aria-hidden="true">·</span>
                          <span className="font-bold text-[#A7F3D0] shrink-0">{proj.year}</span>
                        </div>

                        <span className="text-[11px] font-mono text-[#A7F3D0] font-bold block truncate">
                          Client: {proj.client}
                        </span>

                        <h3 className="font-heading font-extrabold text-base text-white group-hover:text-emerald-100 leading-snug line-clamp-2 transition-colors">
                          {proj.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#A7F3D0] group-hover:text-white transition-colors">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </InteractiveBand>

      <InteractiveBand id="home-practices" tone="white" fromTone="green" className="py-10 sm:py-12 overflow-hidden scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock direction="left" className="max-w-3xl mb-6 space-y-2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Integrated Advisory Practices
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Consolidated environmental, social, climate, and compliance advisory services engineered for international lender alignment and regulatory excellence across Africa.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" delayMs={80} className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-2">
            {consolidatedPillars.map((p) => (
              <button
                key={p.id}
                type="button"
                onClick={() => onNavigate('services', p.id)}
                className="text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
              >
                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 block">
                    {p.num}
                  </span>
                  <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {p.desc}
                  </p>
                </div>
                <div className="pt-3 mt-3 flex items-center gap-2 text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                  <span>Explore Scope</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </button>
            ))}
          </RevealBlock>
        </div>
      </InteractiveBand>

      <InteractiveBand id="home-disciplines" tone="green" fromTone="white" className="py-10 sm:py-12 overflow-hidden scroll-mt-24">
        <div className="space-y-6">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <RevealBlock direction="left" className="space-y-1 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                Selected Advisory Disciplines
              </h2>
              <p className="text-xs sm:text-sm text-emerald-50 font-light max-w-2xl">
                Explore all environmental assessments, resettlement frameworks, compliance audits, climate services, and ESG advisory we offer.
              </p>
            </RevealBlock>

            <RevealBlock direction="right" delayMs={80}>
              <button
                type="button"
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-emerald-200 cursor-pointer shrink-0"
              >
                <span>All Services</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </RevealBlock>
          </div>

          <div className="service-marquee-wrapper w-full overflow-hidden py-1">
            <div className="animate-service-marquee gap-6 px-4 sm:px-6 lg:px-8">
              {marqueeDisciplines.map((discipline, index) => {
                const image = photoAssets.services[discipline.imageKey] || photoAssets.eiaAssessment;
                const isDuplicate = index >= homeAdvisoryDisciplines.length;
                return (
                  <button
                    key={`${discipline.id}-${index}`}
                    type="button"
                    aria-hidden={isDuplicate}
                    tabIndex={isDuplicate ? -1 : 0}
                    onClick={() => onNavigate('service-detail', discipline.slug)}
                    className="group w-[270px] sm:w-[290px] shrink-0 text-left flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                  >
                    <div>
                      <div className="h-44 w-full overflow-hidden bg-[#00551B]">
                        <img
                          src={image}
                          alt={`${discipline.title} advisory service across Kenya and Africa`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                          referrerPolicy="no-referrer"
                        />
                      </div>

                      <div className="pt-3.5 pb-2">
                        <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-100 transition-colors leading-snug">
                          {discipline.title}
                        </h3>
                      </div>
                    </div>

                    <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#A7F3D0] group-hover:text-white transition-colors">
                      <span>Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </InteractiveBand>

      <InteractiveBand id="home-delivery-steps" tone="white" fromTone="green" className="py-10 sm:py-12 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <RevealBlock direction="left" className="space-y-1.5 max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Our Project Delivery Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                How we partner with you from initial project discussions through fieldwork, quality review, and final report delivery.
              </p>
            </RevealBlock>
            <RevealBlock direction="right" delayMs={80}>
              <button
                type="button"
                onClick={() => onRequestProposal()}
                className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] uppercase tracking-wider cursor-pointer shrink-0"
              >
                Start a Discussion →
              </button>
            </RevealBlock>
          </div>

          <RevealBlock direction="up" delayMs={80}>
            <DeliveryProcessFlowchart />
          </RevealBlock>
        </div>
      </InteractiveBand>
    </div>
  );
}
