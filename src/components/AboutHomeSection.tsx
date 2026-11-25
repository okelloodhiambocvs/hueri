/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Handshake, Building2 } from 'lucide-react';
import photoAssets from '../utils/photoAssets';
import InteractiveBand from './InteractiveBand';
import { RevealBlock } from './MotionReveal';

interface AboutHomeSectionProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: () => void;
}

export default function AboutHomeSection({ onNavigate }: AboutHomeSectionProps) {
  return (
    <InteractiveBand id="home-grounded" tone="white" fromTone="hero" className="overflow-hidden">
      <div className="grid lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-6 min-h-[300px] sm:min-h-[360px] lg:min-h-[420px] overflow-hidden group">
          <img
            src={photoAssets.partnershipsHero}
            alt="African environmental safeguard specialists and civil engineers reviewing infrastructure site plans in East Africa"
            className="w-full h-full object-cover object-center rounded-none block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="lg:col-span-6 py-10 sm:py-14 px-4 sm:px-6 lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-12 flex flex-col justify-center">
          <RevealBlock direction="right" className="space-y-6 max-w-xl text-left">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight leading-tight">
                Grounded in African Realities. <br className="hidden sm:inline" />
                Engineered for Global Consortia.
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 font-sans leading-relaxed font-light">
                <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014. Operating from Kenya with a pan-African outlook and global consortium readiness, HUERI empowers engineering primes, development financiers, and public agencies to secure statutory approvals, meet international safeguards, manage resettlement, and mitigate project risks across Africa and beyond.
              </p>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
              <div className="space-y-0.5">
                <p className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                  Kisumu HQ · Est. 2014
                </p>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-snug">
                  Kenya, Africa-Wide &amp; Global Delivery
                </p>
              </div>

              <div className="flex items-center gap-2.5 shrink-0">
                <button
                  type="button"
                  onClick={() => onNavigate('partnerships')}
                  aria-label="Consortia Models"
                  title="Consortia Models"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#003B95] hover:bg-[#002D73] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
                >
                  <Handshake className="w-4 h-4" />
                  <span>Consortia Models</span>
                </button>
                <button
                  type="button"
                  onClick={() => onNavigate('about')}
                  aria-label="Full Profile"
                  title="Full Profile"
                  className="inline-flex items-center gap-2 px-3.5 py-2 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#003B95]"
                >
                  <Building2 className="w-4 h-4" />
                  <span>Full Profile</span>
                </button>
              </div>
            </div>
          </RevealBlock>
        </div>
      </div>
    </InteractiveBand>
  );
}
