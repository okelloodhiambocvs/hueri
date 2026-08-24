/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ServicesSection from '../ServicesSection';
import photoAssets from '../../utils/photoAssets';

interface ServicesPageProps {
  initialPillarId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit?: (lead: any) => void;
}

export default function ServicesPage({
  initialPillarId = 'all',
  onNavigate,
  onRequestProposal,
  onLeadSubmit = () => {}
}: ServicesPageProps) {
  return (
    <div className="pt-20 pb-12 min-h-screen font-sans bg-[#FAF8F5] dark:bg-[#051329]">
      {/* High-Clarity Photographic Hero Banner - Tightened */}
      <div className="relative bg-[#07162C] text-white py-10 sm:py-14 mb-6 overflow-hidden">
        {/* Photographic Background with High Clarity */}
        <div className="absolute inset-0 z-0">
          <img 
            src={photoAssets.solarWindRenewable} 
            alt="HUERI Environmental, Social & Sustainability Advisory Services" 
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/90 via-[#07162C]/65 to-[#07162C]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              ADVISORY PRACTICES
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              Advisory Practices & Safeguards Portfolio
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Consolidated advisory solutions covering statutory NEMA licencing, Resettlement Action Plans (RAP), OHS compliance audits, climate vulnerability assessments, and international lender safeguards (World Bank, IFC, AfDB).
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-2.5">
              <button
                onClick={() => onRequestProposal()}
                className="px-3.5 py-1.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Request Terms of Reference Proposal →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Interactive Services Component */}
      <ServicesSection 
        initialPillarId={initialPillarId}
        onNavigate={onNavigate}
        onRequestProposal={onRequestProposal}
        onLeadSubmit={onLeadSubmit}
      />
    </div>
  );
}
