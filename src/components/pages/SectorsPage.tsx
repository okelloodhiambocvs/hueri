/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SectorsSection from '../SectorsSection';
import photoAssets from '../../utils/photoAssets';

interface SectorsPageProps {
  initialSectorId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (sectorTitle?: string) => void;
}

export default function SectorsPage({
  initialSectorId,
  onNavigate,
  onRequestProposal
}: SectorsPageProps) {
  return (
    <div className="pt-20 pb-12 min-h-screen font-sans bg-[#FAF8F5] dark:bg-[#051329]">
      {/* High-Clarity Photographic Hero Banner - Tightened */}
      <div className="relative bg-[#07162C] text-white py-10 sm:py-14 mb-6 overflow-hidden">
        {/* Photographic Background with High Clarity */}
        <div className="absolute inset-0 z-0">
          <img 
            src={photoAssets.infrastructureRoads} 
            alt="African Infrastructure, Energy and Industrial Growth Sectors" 
            className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#07162C]/90 via-[#07162C]/65 to-[#07162C]/85" />
          <div className="absolute inset-0 bg-gradient-to-t from-[#07162C] via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              PRIORITY SECTORS
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              African Infrastructure & Economic Sectors
            </h1>
            <p className="text-xs sm:text-sm text-slate-200 font-light leading-relaxed">
              Tailored environmental and social safeguards for key capital investment sectors across Kenya and East Africa.
            </p>
          </div>
        </div>
      </div>

      {/* Main Sectors Component */}
      <SectorsSection 
        initialSectorId={initialSectorId}
        onRequestProposal={onRequestProposal}
      />
    </div>
  );
}
