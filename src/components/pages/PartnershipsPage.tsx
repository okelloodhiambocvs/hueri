/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PartnershipsSection from '../PartnershipsSection';
import photoAssets from '../../utils/photoAssets';

interface PartnershipsPageProps {
  onNavigate: (page: string) => void;
  onOpenPartnershipInquiry: (modelTitle?: string) => void;
}

export default function PartnershipsPage({
  onNavigate,
  onOpenPartnershipInquiry
}: PartnershipsPageProps) {
  return (
    <div className="pt-20 pb-12 min-h-screen">
      {/* High-Clarity Photographic Hero Banner - Tightened */}
      <div className="relative bg-[#07162C] text-white py-10 sm:py-14 mb-6 overflow-hidden">
        {/* Photographic Background */}
        <div className="absolute inset-0 z-0">
          <img 
            src={photoAssets.partnershipsHero} 
            alt="HUERI Global & Regional African Partnerships" 
            className="w-full h-full object-cover object-center filter brightness-90 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/95 via-[#07162C]/85 to-[#07162C]/75 backdrop-blur-[1px]" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              COLLABORATION MODELS
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              International Partnerships & Consortia
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Serving as a trusted in-country delivery partner, subconsultant, and consortium member for international development agencies, engineering consultancies, and infrastructure financiers across Africa.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenPartnershipInquiry()}
                className="px-3.5 py-1.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                Initiate Consortium Teaming Discussion →
              </button>
            </div>
          </div>
        </div>
      </div>

      <PartnershipsSection onOpenPartnershipInquiry={onOpenPartnershipInquiry} />
    </div>
  );
}
