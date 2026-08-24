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
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
              INSTITUTIONAL PURPOSE & AFRICAN MANDATE
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white tracking-tight leading-tight">
              Grounded in African Realities. <br className="hidden sm:inline" />
              Aligned with Global Standards.
            </h2>
            <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans leading-relaxed font-light">
              <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is a premier Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014 (NEMA Firm Licence: <strong>NEMA/ENVIS/ELi/F0026</strong>). We de-risk major infrastructure, energy, urban, and industrial investments across Africa by ensuring full statutory compliance and international bankability.
            </p>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={() => onNavigate('about')}
              className="px-3.5 py-1.5 bg-brand-green-700 hover:bg-brand-green-600 active:bg-brand-green-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm hover:-translate-y-0.5 cursor-pointer"
            >
              Explore Full Profile →
            </button>
          </div>
        </div>

        {/* 3 Core Value Proposition Pillars */}
        <div className="grid md:grid-cols-3 gap-4 sm:gap-5">
          
          {/* Pillar 1: Emerald Theme */}
          <div 
            onClick={() => onNavigate('about', 'about-director')}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-emerald-500/30 hover:border-emerald-600 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="h-7 w-7 rounded-lg bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 font-mono text-xs font-bold flex items-center justify-center">
                01
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-emerald-700 dark:text-emerald-400 font-bold">
                COMMUNITY & GOVERNANCE
              </span>
            </div>
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-emerald-800 dark:group-hover:text-emerald-300 transition-colors">
              Ground-to-Boardroom Fluency
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              We seamlessly connect grassroots community barazas and county administrations with international lender standards (World Bank ESF, IFC Performance Standards, AfDB ISS).
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 group-hover:underline">
              Learn Leadership Approach →
            </div>
          </div>

          {/* Pillar 2: Blue Theme */}
          <div 
            onClick={() => onNavigate('services', 'service-pillar-2')}
            className="p-6 rounded-2xl bg-white dark:bg-slate-800/90 border border-blue-500/30 hover:border-blue-600 hover:bg-blue-50/50 dark:hover:bg-blue-950/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg cursor-pointer group space-y-3"
          >
            <div className="flex items-center justify-between">
              <span className="h-7 w-7 rounded-lg bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 font-mono text-xs font-bold flex items-center justify-center">
                02
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-blue-700 dark:text-blue-400 font-bold">
                RISK DE-RISKING
              </span>
            </div>
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-blue-800 dark:group-hover:text-blue-300 transition-colors">
              De-risking & Zero Stoppages
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              100% track record of securing statutory NEMA approvals and conducting Resettlement Action Plans (RAP) with zero court injunctions and complete grievance resolution.
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
            <div className="flex items-center justify-between">
              <span className="h-7 w-7 rounded-lg bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-300 font-mono text-xs font-bold flex items-center justify-center">
                03
              </span>
              <span className="text-[10px] font-mono uppercase tracking-wider text-amber-700 dark:text-amber-400 font-bold">
                CLIMATE & ECOLOGY
              </span>
            </div>
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-amber-800 dark:group-hover:text-amber-300 transition-colors">
              Defensible Field Sciences
            </h3>
            <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
              Drone LiDAR, GIS mapping, water catchment limnology, and biodiversity baselines backed by calibrated scientific equipment and registered lead experts.
            </p>
            <div className="pt-2 text-xs font-mono font-bold text-amber-700 dark:text-amber-400 group-hover:underline">
              View Field Methodologies →
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
