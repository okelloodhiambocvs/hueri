/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import NemaRoadmap from '../NemaRoadmap';
import InternationalStandardsSection from '../InternationalStandardsSection';
import PageHero from '../PageHero';
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
    <div className="pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <PageHero
        image={photoAssets.lifecycleHero}
        imageAlt="Project Lifecycle and Safeguards Standards"
        title="Project Lifecycle & Lender Safeguards"
        description="Step-by-step regulatory pathways from screening to permitting, alongside global performance benchmarks (World Bank ESF, IFC Performance Standards, AfDB ISS)."
      >
        <button
          onClick={() => setActiveSubTab('lifecycle')}
          className={`px-3.5 py-2 rounded-lg font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer ${
            activeSubTab === 'lifecycle'
              ? 'bg-[#006B22] text-white'
              : 'bg-white/15 hover:bg-white/25 text-white'
          }`}
        >
          Permitting Roadmap
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
      </PageHero>

      {activeSubTab === 'lifecycle' ? (
        <NemaRoadmap onRequestProposal={onRequestProposal} />
      ) : (
        <InternationalStandardsSection onRequestProposal={onRequestProposal} />
      )}
    </div>
  );
}
