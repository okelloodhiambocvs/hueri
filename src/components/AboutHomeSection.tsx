/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Handshake, Building2 } from 'lucide-react';

interface AboutHomeSectionProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: () => void;
}

export default function AboutHomeSection({ onNavigate }: AboutHomeSectionProps) {
  return (
    <section id="home-grounded" className="bg-white dark:bg-[#041B44] py-6 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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

          <div className="flex items-center gap-3 shrink-0">
            <button
              type="button"
              onClick={() => onNavigate('partnerships')}
              aria-label="Consortia Models"
              title="Consortia Models"
              className="w-11 h-11 bg-[#003B95] hover:bg-[#002D73] text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
            >
              <Handshake className="w-5 h-5" />
            </button>
            <button
              type="button"
              onClick={() => onNavigate('about')}
              aria-label="Full Profile"
              title="Full Profile"
              className="w-11 h-11 bg-[#006B22] hover:bg-[#00581C] text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B95]"
            >
              <Building2 className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
