/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';

interface HeroProps {
  onRequestProposal: () => void;
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenPartnership?: () => void;
  stats?: any;
}

export default function Hero({ onRequestProposal, onNavigate, onOpenPartnership, stats }: HeroProps) {
  return (
    <section className="relative flex items-center justify-center text-white pt-20 pb-12 sm:pt-24 sm:pb-14 overflow-hidden font-sans">
      
      {/* High-Clarity Photographic Hero Background */}
      <div className="absolute inset-0 z-0">
        <img 
          src={photoAssets.solarWindRenewable} 
          alt="African Clean Energy Infrastructure & Topography" 
          className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
          referrerPolicy="no-referrer"
        />
        {/* Balanced Brand Clean Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-[#07162C]/75 to-[#07162C]/45" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/85 via-[#07162C]/50 to-[#07162C]/85" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6 sm:space-y-8">
        
        {/* Main Authoritative Headline */}
        <h1 className="font-heading font-black text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-white leading-[1.15] drop-shadow-md max-w-4xl mx-auto">
          Environmental, Social & <br className="hidden sm:inline" />
          <span className="text-emerald-400">
            Sustainability Advisory
          </span> Across Africa
        </h1>

        {/* Concise Executive Statement */}
        <p className="text-sm sm:text-base lg:text-lg text-slate-100 max-w-3xl mx-auto font-sans font-light leading-relaxed drop-shadow-md">
          <strong className="font-semibold text-white">HUERI Limited</strong> is an independent African environmental, social, climate, and safety consultancy headquartered in Kisumu, Kenya. We help project developers, governments, and international financiers secure statutory NEMA licences, navigate land resettlement (RAP), and meet global lender standards (World Bank, IFC, AfDB) for sustainable investments.
        </p>

        {/* Dynamic Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={onRequestProposal}
            className="w-full sm:w-auto px-7 py-3 text-xs font-heading font-bold uppercase tracking-wider text-white bg-brand-green-600 hover:bg-brand-green-500 active:bg-brand-green-700 rounded-xl shadow-lg shadow-brand-green-600/30 hover:-translate-y-0.5 transition-all text-center cursor-pointer border border-emerald-400/40"
          >
            Request Advisory Proposal →
          </button>

          <button
            onClick={() => onNavigate('services')}
            className="w-full sm:w-auto px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-white bg-white/15 hover:bg-white/30 backdrop-blur-md rounded-xl border border-white/30 shadow-sm hover:-translate-y-0.5 transition-all text-center cursor-pointer"
          >
            Explore Advisory Pillars
          </button>

          <button
            onClick={() => onNavigate('sectors')}
            className="w-full sm:w-auto px-6 py-3 text-xs font-heading font-bold uppercase tracking-wider text-emerald-300 bg-brand-blue-900/80 hover:bg-brand-blue-900 hover:text-white backdrop-blur-md rounded-xl border border-emerald-400/40 shadow-sm hover:-translate-y-0.5 transition-all text-center cursor-pointer"
          >
            Sectors We Serve
          </button>
        </div>

      </div>

    </section>
  );
}
