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
  onOpenPartnershipInquiry
}: PartnershipsPageProps) {
  return (
    <div className="pt-20 pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <div className="relative bg-[#041B44] text-white py-10 sm:py-14 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={photoAssets.partnershipsHero}
            alt="HUERI Global & Regional African Partnerships"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/95 via-[#041B44]/85 to-[#041B44]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] block">
              COLLABORATION MODELS
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              International Partnerships &amp; Consortia
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
              Serving as a trusted in-country delivery partner, subconsultant, and consortium member for international development agencies, engineering consultancies, and infrastructure financiers across Africa.
            </p>

            <div className="pt-2">
              <button
                onClick={() => onOpenPartnershipInquiry()}
                className="px-4 py-2 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
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
