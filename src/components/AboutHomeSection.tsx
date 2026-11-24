/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AboutHomeSectionProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: () => void;
}

export default function AboutHomeSection({ onNavigate }: AboutHomeSectionProps) {
  return (
    <section id="home-grounded" className="bg-white dark:bg-[#041B44] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        {/* Top Header: Purpose & Identity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6">
          <div className="max-w-3xl space-y-2.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight leading-tight">
              Grounded in African Realities. <br className="hidden sm:inline" />
              Engineered for Global Consortia.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-sans leading-relaxed font-light">
              <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014. As a preferred in-country delivery and consortium partner, HUERI empowers international engineering primes, development financiers, and public agencies to obtain statutory approvals, ensure rigorous safeguard compliance, resolve land resettlement challenges, and manage project risks across Africa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <button
              onClick={() => onNavigate('partnerships')}
              className="px-4 py-2 bg-[#003B95] hover:bg-[#002D73] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Consortia Models →
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-4 py-2 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              Full Profile →
            </button>
          </div>
        </div>

        {/* Core Value Proposition Pillars — Clean Open Columns */}
        <div className="grid md:grid-cols-3 gap-8 pt-2">
          <div
            onClick={() => onNavigate('about', 'about-leadership')}
            className="cursor-pointer group space-y-2.5"
          >
            <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors">
              Local Realities &amp; Lender Alignment
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              We bridge grassroots community consultations and county regulatory dynamics with international financier safeguard frameworks (World Bank ESF, IFC PS 1–8, AfDB ISS).
            </p>
            <div className="pt-1 text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
              View Technical Leadership →
            </div>
          </div>

          <div
            onClick={() => onNavigate('services', 'service-pillar-2')}
            className="cursor-pointer group space-y-2.5"
          >
            <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white group-hover:text-[#0084D8] dark:group-hover:text-[#38BDF8] transition-colors">
              Safeguards Delivery &amp; Compliance
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Demonstrated experience in preparing statutory submissions, structured Resettlement Action Plans (RAP), stakeholder engagement, and project grievance redress mechanisms.
            </p>
            <div className="pt-1 text-xs font-mono font-bold text-[#003B95] dark:text-[#38BDF8]">
              Explore Safeguards Portfolio →
            </div>
          </div>

          <div
            onClick={() => onNavigate('services', 'service-pillar-3')}
            className="cursor-pointer group space-y-2.5"
          >
            <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors">
              Empirical Baseline &amp; Spatial Assessment
            </h3>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Spatial GIS hazard analysis, water catchment assessments, and ecological screening delivered through HUERI&apos;s multidisciplinary team and specialist technical associates.
            </p>
            <div className="pt-1 text-xs font-mono font-bold text-[#0084D8] dark:text-[#38BDF8]">
              View Methodologies &amp; QA/QC →
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
