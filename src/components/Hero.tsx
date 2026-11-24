/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';

interface HeroProps {
  onRequestProposal: () => void;
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenPartnership?: (modelTitle?: string) => void;
  stats?: any;
}

export default function Hero({ onRequestProposal }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center text-white pt-36 pb-16 sm:pt-44 sm:pb-24 lg:pt-48 lg:pb-28 overflow-hidden font-sans">
      
      {/* High-Clarity Photographic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={photoAssets.siteStructuralDeck} 
          alt="African Urban Construction & Environmental Safeguards Supervision" 
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Balanced Brand Clean Gradient Overlays derived from official HUERI navy */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#041B44] via-[#041B44]/80 to-[#041B44]/55" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/90 via-[#041B44]/60 to-[#041B44]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8 mt-4 sm:mt-6">
        
        {/* Top Credential Line */}
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#041B44]/85 border border-[#4ADE80]/40 text-[#86EFAC] text-xs sm:text-sm font-mono tracking-wider uppercase backdrop-blur-md shadow-lg">
          <span>NEMA Registered Firm of Experts • Kisumu & Nairobi</span>
        </div>

        {/* Main Authoritative Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] drop-shadow-md max-w-4xl mx-auto">
          Your Trusted African Partner for <br className="hidden sm:inline" />
          <span className="text-[#4ADE80]">
            Environmental, Social & Safeguards
          </span> Advisory
        </h1>

        {/* Concise Collaboration-Focused Executive Statement */}
        <p className="text-base sm:text-lg text-slate-100 max-w-3xl mx-auto font-sans font-light leading-relaxed drop-shadow-md">
          <strong className="font-semibold text-white">HUERI Limited</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm headquartered in Kisumu, Kenya. We collaborate with engineering primes, multilateral financiers (World Bank, IFC, AfDB), EPC contractors, and county governments as an on-the-ground technical delivery partner—securing statutory NEMA approvals, orchestrating land resettlement (RAP), and supervising active site safeguards compliance.
        </p>

        {/* Single Small CTA Button */}
        <div className="flex items-center justify-center pt-2">
          <button
            onClick={onRequestProposal}
            className="px-5 py-2.5 text-xs font-heading font-bold tracking-wider text-white bg-[#006B22] hover:bg-[#00581C] rounded-lg shadow-md transition-colors text-center cursor-pointer whitespace-nowrap"
          >
            Grab a coffee
          </button>
        </div>

      </div>

    </section>
  );
}
