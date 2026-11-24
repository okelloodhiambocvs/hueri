/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import {
  ArrowRight,
  MessageSquare,
  Compass,
  Users,
  ClipboardCheck,
  FileCheck2
} from 'lucide-react';
import Hero from '../Hero';
import AboutHomeSection from '../AboutHomeSection';
import photoAssets from '../../utils/photoAssets';
import {
  consolidatedPillars,
  homeFeaturedAssignments,
  homeAdvisoryDisciplines,
  projectDeliverySteps,
  DeliveryStepIcon
} from '../../utils/homeContent';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (scope?: string) => void;
  onOpenPartnership: (model?: string) => void;
  stats?: any;
}

const renderDeliveryIcon = (icon: DeliveryStepIcon) => {
  switch (icon) {
    case 'discussion':
      return <MessageSquare className="w-5 h-5" />;
    case 'scoping':
      return <Compass className="w-5 h-5" />;
    case 'fieldwork':
      return <Users className="w-5 h-5" />;
    case 'drafting':
      return <ClipboardCheck className="w-5 h-5" />;
    case 'delivery':
      return <FileCheck2 className="w-5 h-5" />;
  }
};

export default function HomePage({
  onNavigate,
  onRequestProposal,
  onOpenPartnership,
  stats
}: HomePageProps) {
  const marqueeAssignments = [...homeFeaturedAssignments, ...homeFeaturedAssignments];
  const marqueeDisciplines = [...homeAdvisoryDisciplines, ...homeAdvisoryDisciplines];

  return (
    <div className="space-y-10 sm:space-y-12 font-sans bg-white dark:bg-[#041B44] transition-colors duration-300">

      {/* 1. High-Impact Photographic Hero Banner */}
      <Hero
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
        onOpenPartnership={() => onOpenPartnership()}
        stats={stats}
      />

      {/* 2. Grounded in African Realities (White Background First Section After Hero) */}
      <AboutHomeSection
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
      />

      {/* 3. Selected Environmental and Social Assignments — Linear Auto-Scrolling Strip */}
      <section id="home-assignments" className="space-y-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row md:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Selected Environmental and Social Assignments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-2xl">
              Selected track record of EIA clearances, resettlement planning (RAP), climate vulnerability assessments, and compliance audits in Kenya.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('about', 'about-milestones')}
            className="text-xs font-mono font-bold text-[#003B95] dark:text-[#38BDF8] hover:text-[#006B22] dark:hover:text-[#4ADE80] transition-colors uppercase tracking-wider cursor-pointer shrink-0"
          >
            View Historic Milestones →
          </button>
        </div>

        <div className="service-marquee-wrapper w-full overflow-hidden py-1">
          <div className="animate-service-marquee gap-6 px-4 sm:px-6 lg:px-8">
            {marqueeAssignments.map((proj, index) => {
              const isDuplicate = index >= homeFeaturedAssignments.length;
              const projImage = photoAssets.projects[proj.imageKey] || photoAssets.siteStructuralDeck;
              return (
                <article
                  key={`${proj.id}-${index}`}
                  aria-hidden={isDuplicate}
                  className="w-[270px] sm:w-[290px] shrink-0 flex flex-col justify-between group"
                >
                  <div className="space-y-3">
                    <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={projImage}
                        alt={proj.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                        <span className="truncate">{proj.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-bold text-[#003B95] dark:text-[#38BDF8] shrink-0">{proj.year}</span>
                      </div>

                      <span className="text-[11px] font-mono text-[#006B22] dark:text-[#4ADE80] font-bold block truncate">
                        Client: {proj.client}
                      </span>

                      <h3 className="font-heading font-extrabold text-base text-[#003B95] dark:text-white leading-snug line-clamp-2">
                        {proj.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed line-clamp-3">
                        {proj.outcome}
                      </p>
                    </div>
                  </div>

                  <div className="pt-2.5 mt-2 flex items-center justify-between text-[11px] font-mono text-[#006B22] dark:text-[#4ADE80] font-bold">
                    <span className="truncate pr-2">{proj.evidenceSummary}</span>
                    <span className="shrink-0 text-slate-500 dark:text-slate-400 font-normal">{proj.status}</span>
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. Integrated Advisory Practices — Left Aligned */}
      <section id="home-practices" className="bg-slate-50 dark:bg-[#06183A] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-6 space-y-2 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Integrated Advisory Practices
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Consolidated environmental, social, climate, and compliance advisory services engineered for international lender alignment and regulatory excellence across Africa.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-2">
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
          </div>
        </div>
      </section>

      {/* 5. Selected Advisory Disciplines — All Offered Services in Linear Motion */}
      <section id="home-disciplines" className="space-y-6 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Selected Advisory Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-2xl">
              Explore all environmental assessments, resettlement frameworks, compliance audits, climate services, and ESG advisory we offer.
            </p>
          </div>

          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] cursor-pointer shrink-0"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
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
                  className="group w-[270px] sm:w-[290px] shrink-0 text-left flex flex-col justify-between space-y-3 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
                >
                  <div className="space-y-3">
                    <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                      <img
                        src={image}
                        alt={discipline.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        referrerPolicy="no-referrer"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors leading-snug">
                        {discipline.title}
                      </h3>
                      <p className="text-xs text-slate-600 dark:text-slate-300 font-light line-clamp-2 leading-relaxed">
                        {discipline.snippet}
                      </p>
                    </div>
                  </div>

                  <div className="pt-1 flex items-center justify-between text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 6. Project Delivery Steps & Style (Replaces Serving Key African Sectors) */}
      <section id="home-delivery-steps" className="bg-slate-50 dark:bg-[#06183A] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5 max-w-2xl text-left">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Our Project Delivery Process
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                How we partner with you from initial project discussions through fieldwork, quality review, and final report delivery.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onRequestProposal()}
              className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] uppercase tracking-wider cursor-pointer shrink-0"
            >
              Start a Discussion →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {projectDeliverySteps.map((item, idx) => (
              <div
                key={item.step}
                className="relative bg-white dark:bg-[#041B44] p-5 rounded-xl space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-lg bg-[#003B95]/10 dark:bg-[#38BDF8]/15 text-[#003B95] dark:text-[#38BDF8] flex items-center justify-center">
                      {renderDeliveryIcon(item.icon)}
                    </div>
                    <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                      Step {item.step}
                    </span>
                  </div>

                  <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>

                {idx < projectDeliverySteps.length - 1 && (
                  <div
                    className="hidden lg:flex items-center justify-end text-[#006B22] dark:text-[#4ADE80] pt-1"
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Strategic Consortia & International Teaming (Moved After Delivery Steps) */}
      <section id="home-consortia" className="bg-[#003B95] dark:bg-[#061E4A] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Partner with HUERI on African Infrastructure, Energy &amp; Safeguards Tenders
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-sans font-light leading-relaxed max-w-3xl">
                We regularly partner with international engineering firms, multilateral prime contractors, and regional developers as a trusted local delivery co-lead. We bring experienced lead experts, World Bank ESF / IFC PS proficiency, 47-county mobilization capacity, and established community networks.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 pt-1 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Joint Venture &amp; Consortia Submissions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> In-Country Safeguards Delivery Partner
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Master Service Agreements (MSA)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Rapid Technical Proposal Backstopping
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center lg:pl-8">
              <button
                onClick={() => onOpenPartnership ? onOpenPartnership('International Prime Contractor & Consortium Teaming') : onNavigate('partnerships')}
                className="w-full py-3 px-5 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Propose Joint Venture / Teaming →
              </button>
              <button
                onClick={() => onNavigate('partnerships')}
                className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Explore Partnership Models
              </button>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
