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

export default function Hero({ onRequestProposal, onNavigate, onOpenPartnership, stats }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center text-white pt-20 pb-12 sm:pt-24 sm:pb-16 overflow-hidden font-sans">
      
      {/* High-Clarity Photographic Hero Background (Active High-Rise Structural Concrete & Safeguards Oversight) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={photoAssets.siteStructuralDeck} 
          alt="African Urban Construction & Environmental Safeguards Supervision" 
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105 scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Balanced Brand Clean Gradient Overlays for High Legibility */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-[#07162C]/80 to-[#07162C]/50" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/90 via-[#07162C]/60 to-[#07162C]/90" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Partnership & Collaboration Pre-Header Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-green-500/20 border border-emerald-400/40 backdrop-blur-md text-emerald-300 text-[11px] sm:text-xs font-mono font-bold uppercase tracking-wider shadow-sm">
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          <span>Strategic In-Country Partner & Consortium Co-Lead | Kenya & East Africa</span>
        </div>

        {/* Main Authoritative Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] drop-shadow-md max-w-4xl mx-auto">
          Your Trusted African Partner for <br className="hidden sm:inline" />
          <span className="text-emerald-400">
            Environmental, Social & Safeguards
          </span> Advisory
        </h1>

        {/* Concise Collaboration-Focused Executive Statement */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-3xl mx-auto font-sans font-light leading-relaxed drop-shadow-md">
          <strong className="font-semibold text-white">HUERI Limited</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm headquartered in Kisumu, Kenya (NEMA Reg. <strong className="text-emerald-300 font-semibold">F0026</strong>). We collaborate with international engineering primes, multilateral financiers (World Bank, IFC, AfDB), EPC contractors, and county governments as an on-the-ground technical co-delivery partner—securing statutory NEMA approvals, orchestrating land resettlement (RAP), and supervising active site safeguards compliance.
        </p>

        {/* Collaboration Readiness Badges */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-[11px] font-mono text-emerald-200">
          <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
            ✓ Consortium Teaming & JV Ready
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
            ✓ NEMA Registered Firm F0026
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
            ✓ WB ESF & IFC PS Aligned
          </span>
          <span className="px-2.5 py-1 rounded-lg bg-white/10 border border-white/15 backdrop-blur-sm">
            ✓ 47-County Field Mobilisation
          </span>
        </div>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => onOpenPartnership ? onOpenPartnership("Strategic Consortium Teaming & In-Country Co-Delivery") : onNavigate('partnerships')}
            className="w-full sm:w-auto px-7 py-3 text-xs font-heading font-bold uppercase tracking-wider text-white bg-brand-green-600 hover:bg-brand-green-500 active:bg-brand-green-700 rounded-xl shadow-lg shadow-brand-green-600/30 hover:-translate-y-0.5 transition-all text-center cursor-pointer border border-emerald-400/40"
          >
            Propose Partnership / Teaming →
          </button>

          <button
            onClick={onRequestProposal}
            className="w-full sm:w-auto px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:-translate-y-0.5 transition-all text-center cursor-pointer"
          >
            Request Advisory Proposal
          </button>

          <button
            onClick={() => onNavigate('partnerships')}
            className="w-full sm:w-auto px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-emerald-300 bg-brand-blue-900/80 hover:bg-brand-blue-900 hover:text-white backdrop-blur-md rounded-xl border border-emerald-400/40 shadow-sm hover:-translate-y-0.5 transition-all text-center cursor-pointer"
          >
            Partnership Models
          </button>
        </div>

      </div>

    </section>
  );
}
