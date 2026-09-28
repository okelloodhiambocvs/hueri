/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface AboutHomeSectionProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: () => void;
}

export default function AboutHomeSection({ onNavigate, onRequestProposal }: AboutHomeSectionProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="bg-[#FAF8F5] dark:bg-[#071a38] rounded-3xl border border-[#E5DFD5] dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-8">
        
        {/* Top Header: Purpose & Identity */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
          <div className="max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              Grounded in African Realities. <br className="hidden sm:inline" />
              Engineered for Global Consortia.
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans leading-relaxed font-light">
              <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014 (NEMA Registered Firm of Experts). As a preferred in-country delivery and consortium partner, HUERI empowers international engineering primes, development financiers, and public agencies to obtain statutory approvals, ensure rigorous safeguard compliance, resolve land resettlement challenges, and manage project risks across Africa.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigate('partnerships')}
              className="px-3.5 py-1.5 bg-brand-blue-900 hover:bg-brand-blue-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer border border-blue-700/50"
            >
              Consortia Models →
            </button>
            <button
              onClick={() => onNavigate('about')}
              className="px-3.5 py-1.5 bg-brand-green-700 hover:bg-brand-green-600 active:bg-brand-green-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              Full Profile →
            </button>
          </div>
        </div>

        {/* Core Value Proposition Pillars */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Pillar 1: Emerald Theme */}
          <div 
            onClick={() => onNavigate('about', 'about-leadership')}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-500/30 hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group space-y-3"
          >
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
              Local Realities & Lender Alignment
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              We bridge grassroots community consultations and county regulatory dynamics with international financier safeguard frameworks (World Bank ESF, IFC PS 1–8, AfDB ISS).
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 group-hover:underline">
              View Technical Leadership →
            </div>
          </div>

          {/* Pillar 2: Blue Theme */}
          <div 
            onClick={() => onNavigate('services', 'service-pillar-2')}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-blue-500/30 hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group space-y-3"
          >
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
              Safeguards Delivery & Compliance
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              Demonstrated experience in preparing statutory NEMA submissions, structured Resettlement Action Plans (RAP), stakeholder engagement, and project grievance redress mechanisms.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-blue-700 dark:text-blue-400 group-hover:underline">
              Explore Safeguards Portfolio →
            </div>
          </div>

          {/* Pillar 3: Amber / Terracotta Theme */}
          <div 
            onClick={() => onNavigate('services', 'service-pillar-3')}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-amber-500/30 hover:border-amber-600 hover:bg-amber-50/50 dark:hover:bg-amber-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group space-y-3"
          >
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
              Empirical Baseline & Spatial Assessment
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              Spatial GIS hazard analysis, water catchment assessments, and ecological screening delivered through HUERI's multidisciplinary team and specialist technical associates.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
              View Methodologies & QA/QC →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
