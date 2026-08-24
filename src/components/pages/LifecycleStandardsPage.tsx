/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import NemaRoadmap from '../NemaRoadmap';
import InternationalStandardsSection from '../InternationalStandardsSection';
import photoAssets from '../../utils/photoAssets';

interface LifecycleStandardsPageProps {
  onNavigate: (page: string) => void;
  onRequestProposal: (scope?: string) => void;
}

export default function LifecycleStandardsPage({
  onNavigate,
  onRequestProposal
}: LifecycleStandardsPageProps) {
  const [activeSubTab, setActiveSubTab] = useState<'lifecycle' | 'standards'>('lifecycle');

  return (
    <div className="pt-20 pb-12 min-h-screen">
      {/* High-Clarity Photographic Hero Banner - Tightened */}
      <div className="relative bg-[#07162C] text-white py-10 sm:py-14 mb-6 overflow-hidden">
        {/* Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={photoAssets.lifecycleHero} 
            alt="Project Lifecycle and Safeguards Standards" 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/95 via-[#07162C]/85 to-[#07162C]/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              REGULATORY & BANKABILITY ROADMAP
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              Project Lifecycle & Lender Safeguards
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Step-by-step regulatory pathways from EMCA Cap 387 screening to EIA Licencing, alongside global performance benchmarks (World Bank ESF, IFC Performance Standards, AfDB ISS).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveSubTab('lifecycle')}
                className={`px-3 py-1.5 rounded-xl font-mono font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeSubTab === 'lifecycle'
                    ? 'bg-brand-green-600 text-white shadow-sm'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
                }`}
              >
                NEMA Permitting Roadmap
              </button>
              <button
                onClick={() => setActiveSubTab('standards')}
                className={`px-3 py-1.5 rounded-xl font-mono font-bold text-[10px] uppercase tracking-wider transition-all cursor-pointer ${
                  activeSubTab === 'standards'
                    ? 'bg-brand-green-600 text-white shadow-sm'
                    : 'bg-white/20 hover:bg-white/30 text-white backdrop-blur-md'
                }`}
              >
                Lender Standards (WB / IFC / AfDB)
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Conditional Sub-View */}
      {activeSubTab === 'lifecycle' ? (
        <NemaRoadmap onRequestProposal={onRequestProposal} />
      ) : (
        <InternationalStandardsSection onRequestProposal={onRequestProposal} />
      )}
    </div>
  );
}
