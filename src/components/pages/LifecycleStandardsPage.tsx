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
  onRequestProposal
}: LifecycleStandardsPageProps) {
  const [activeSubTab, setActiveSubTab] = useState<'lifecycle' | 'standards'>('lifecycle');

  return (
    <div className="pt-20 pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <div className="relative bg-[#041B44] text-white py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={photoAssets.lifecycleHero}
            alt="Project Lifecycle and Safeguards Standards"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/95 via-[#041B44]/85 to-[#041B44]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] block">
              REGULATORY &amp; BANKABILITY ROADMAP
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              Project Lifecycle &amp; Lender Safeguards
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
              Step-by-step regulatory pathways from EMCA Cap 387 screening to EIA Licencing, alongside global performance benchmarks (World Bank ESF, IFC Performance Standards, AfDB ISS).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2">
              <button
                onClick={() => setActiveSubTab('lifecycle')}
                className={`px-3.5 py-2 rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSubTab === 'lifecycle'
                    ? 'bg-[#006B22] text-white'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                NEMA Permitting Roadmap
              </button>
              <button
                onClick={() => setActiveSubTab('standards')}
                className={`px-3.5 py-2 rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
                  activeSubTab === 'standards'
                    ? 'bg-[#006B22] text-white'
                    : 'bg-white/15 hover:bg-white/25 text-white'
                }`}
              >
                Lender Standards (WB / IFC / AfDB)
              </button>
            </div>
          </div>
        </div>
      </div>

      {activeSubTab === 'lifecycle' ? (
        <NemaRoadmap onRequestProposal={onRequestProposal} />
      ) : (
        <InternationalStandardsSection onRequestProposal={onRequestProposal} />
      )}
    </div>
  );
}
