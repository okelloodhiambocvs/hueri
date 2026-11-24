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
    <section id="home-grounded" className="bg-white dark:bg-[#041B44] py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 items-center gap-8">
          <div className="lg:col-span-8 space-y-3 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight leading-tight">
              Grounded in African Realities. <br className="hidden sm:inline" />
              Engineered for Global Consortia.
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-sans leading-relaxed font-light">
              <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014. As a preferred in-country delivery and consortium partner, HUERI empowers international engineering primes, development financiers, and public agencies to obtain statutory approvals, ensure rigorous safeguard compliance, resolve land resettlement challenges, and manage project risks across Africa.
            </p>
          </div>

          <div className="lg:col-span-4 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8 flex items-center justify-between gap-4">
            <div className="space-y-1">
              <p className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                Kisumu HQ · Est. 2014
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-snug">
                47 Counties &amp; East Africa Consortium Delivery
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                type="button"
                onClick={() => onNavigate('partnerships')}
                aria-label="Consortia Models"
                title="Consortia Models"
                className="w-9 h-9 bg-[#003B95] hover:bg-[#002D73] text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
              >
                <Handshake className="w-4 h-4" />
              </button>
              <button
                type="button"
                onClick={() => onNavigate('about')}
                aria-label="Full Profile"
                title="Full Profile"
                className="w-9 h-9 bg-[#006B22] hover:bg-[#00581C] text-white rounded-lg transition-colors cursor-pointer flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B95]"
              >
                <Building2 className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
