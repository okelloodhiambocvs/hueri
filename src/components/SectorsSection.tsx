/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialSectors } from '../server/seedData';
import { Sector } from '../types';
import photoAssets from '../utils/photoAssets';

interface SectorsSectionProps {
  initialSectorId?: string;
  onRequestProposal: () => void;
}

export default function SectorsSection({ 
  initialSectorId,
  onRequestProposal 
}: SectorsSectionProps) {
  const [sectors] = useState<Sector[]>(initialSectors);
  const [activeSectorId, setActiveSectorId] = useState<string>(() => {
    if (initialSectorId) {
      const cleanId = initialSectorId.replace('sector-', '');
      const found = initialSectors.find(s => s.id === cleanId || s.id === initialSectorId);
      if (found) return found.id;
    }
    return initialSectors[0].id;
  });

  useEffect(() => {
    if (initialSectorId) {
      const cleanId = initialSectorId.replace('sector-', '');
      const found = sectors.find(s => s.id === cleanId || s.id === initialSectorId);
      if (found) {
        setActiveSectorId(found.id);
      }
    }
  }, [initialSectorId, sectors]);

  const activeSector = sectors.find(s => s.id === activeSectorId) || sectors[0];
  const sectorImage = photoAssets.sectors[activeSector.id] || photoAssets.renewableEnergy;

  const handleDropdownSelect = (sectorId: string) => {
    setActiveSectorId(sectorId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

  return (
    <section id="sectors" className="py-8 sm:py-10 bg-[#FAF8F5] dark:bg-[#071a38] text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-700 dark:text-emerald-400 block">
            AFRICAN PRIORITY SECTORS
          </span>
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-stone-900 dark:text-white tracking-tight">
            Key African Sectors We Serve
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Providing tailored Environmental, Social, and Health & Safety (ESHS) advisory across key sectors driving Africa's industrialization, urbanization, and sustainable transition.
          </p>
        </div>

        {/* SECTORS SECTION NAVIGATOR DROPDOWN & TABS (matching light mode toggle size) */}
        <div className="sticky top-20 z-30 bg-white/95 dark:bg-[#071a38]/95 backdrop-blur-md p-3 rounded-2xl border border-[#E5DFD5] dark:border-slate-800 shadow-md">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
            <div className="flex items-center gap-2">
              <span className="h-2.5 w-2.5 rounded-full bg-brand-green-600 dark:bg-emerald-400" />
              <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800 dark:text-slate-200">
                SELECT SECTOR PRACTICE:
              </span>
            </div>

            {/* Interactive Sector Dropdown */}
            <div className="w-full sm:w-auto flex items-center gap-2">
              <select
                value={activeSectorId}
                onChange={(e) => handleDropdownSelect(e.target.value)}
                className="w-full sm:w-64 px-3 py-1.5 rounded-xl bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 text-[10px] font-mono font-bold uppercase text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 cursor-pointer shadow-sm"
              >
                {sectors.map((s) => (
                  <option key={s.id} value={s.id}>
                    {s.title}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Quick Jump Pill Buttons matching light mode button */}
          <div className="flex items-center gap-1.5 pt-2.5 mt-2.5 border-t border-[#EDE7DD] dark:border-slate-800 overflow-x-auto text-xs font-mono">
            {sectors.map((s) => (
              <button
                key={s.id}
                onClick={() => handleDropdownSelect(s.id)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  activeSectorId === s.id
                    ? 'bg-brand-green-600 text-white shadow-sm'
                    : 'bg-[#FAF8F5] dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 border border-[#E0D9CD] dark:border-slate-700'
                }`}
              >
                {s.title.split(' & ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Interactive Sector Browser */}
        <div className="grid lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Sector Pill Selector List (Col 5) */}
          <div className="lg:col-span-5 space-y-2.5">
            {sectors.map((sec) => {
              const isActive = sec.id === activeSectorId;
              const thumbImg = photoAssets.sectors[sec.id] || photoAssets.renewableEnergy;

              return (
                <button
                  key={sec.id}
                  id={`sector-${sec.id}`}
                  onClick={() => setActiveSectorId(sec.id)}
                  className={`w-full text-left p-3 rounded-2xl transition-all duration-300 flex items-center justify-between cursor-pointer border ${
                    isActive
                      ? 'bg-brand-blue-900 text-white border-brand-blue-900 shadow-md translate-x-1.5'
                      : 'bg-white dark:bg-slate-800/90 text-stone-800 dark:text-slate-200 hover:bg-stone-50 dark:hover:bg-slate-800 border-[#E5DFD5] dark:border-slate-700 hover:border-brand-green-600 shadow-sm'
                  }`}
                >
                  <div className="flex items-center space-x-3">
                    {/* Photo Preview */}
                    <div className="relative w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-white/30 shadow-sm bg-slate-900">
                      <img 
                        src={thumbImg} 
                        alt={sec.title} 
                        className="w-full h-full object-cover filter brightness-100 contrast-105"
                        referrerPolicy="no-referrer"
                      />
                      <div className={`absolute inset-0 ${isActive ? 'bg-brand-blue-900/30' : 'bg-black/15'}`} />
                    </div>

                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm leading-tight">
                        {sec.title}
                      </h4>
                      <p className={`text-[10px] font-mono mt-0.5 truncate max-w-[180px] sm:max-w-[220px] ${
                        isActive ? 'text-blue-200' : 'text-stone-500 dark:text-slate-400'
                      }`}>
                        {sec.coverage.slice(0, 3).join(', ')}...
                      </p>
                    </div>
                  </div>

                  <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-emerald-400' : 'text-stone-400'}`}>
                    {isActive ? 'ACTIVE' : 'VIEW →'}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Right Detailed Sector Showcase Card (Col 7) */}
          <div className="lg:col-span-7">
            <div
              key={activeSector.id}
              className="bg-white dark:bg-[#0b1c3b] rounded-3xl border border-[#E5DFD5] dark:border-slate-800 shadow-xl overflow-hidden transition-all duration-300"
            >
              {/* Vivid Sector Photo Banner */}
              <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-slate-900">
                <img 
                  src={sectorImage} 
                  alt={activeSector.title} 
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105 filter brightness-100 contrast-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                
                {/* Overlay Header */}
                <div className="absolute bottom-3.5 left-5 right-5 flex items-end justify-between">
                  <div>
                    <span className="text-[9px] font-mono font-bold tracking-widest text-emerald-300 uppercase block">
                      AFRICAN SECTOR PRACTICE
                    </span>
                    <h3 className="font-heading font-black text-xl sm:text-2xl text-white">
                      {activeSector.title}
                    </h3>
                  </div>

                  <span className="hidden sm:inline-block text-[10px] font-mono font-bold text-white bg-white/20 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/30">
                    {activeSector.coverage.length} Sub-Sectors
                  </span>
                </div>
              </div>

              {/* Body Content */}
              <div className="p-5 sm:p-6 space-y-4">
                {/* Description */}
                <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans leading-relaxed font-light">
                  {activeSector.description}
                </p>

                {/* Coverage Badges */}
                <div className="space-y-1.5">
                  <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-400">
                    Illustrative Coverage Areas
                  </h4>
                  <div className="flex flex-wrap gap-1.5">
                    {activeSector.coverage.map((item, idx) => (
                      <span key={idx} className="px-2.5 py-1 rounded-lg bg-[#FAF8F5] dark:bg-slate-800 text-[11px] text-stone-800 dark:text-slate-200 font-medium border border-[#E5DFD5] dark:border-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Common Safeguard Challenges & Advisory Value */}
                <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-[#E5DFD5] dark:border-slate-700/80 space-y-1.5">
                  <h5 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-green-700 dark:text-emerald-400">
                    Safeguards Advisory & De-risking Focus
                  </h5>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                    We deliver early screening, statutory NEMA licensing, biodiversity offsets, community consent (FPIC), and contractor ESHS supervision specifically tailored to {activeSector.title.toLowerCase()} across Africa.
                  </p>
                </div>

                {/* Action CTA */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3 border-t border-[#EDE7DD] dark:border-slate-800">
                  <button
                    onClick={onRequestProposal}
                    className="w-full sm:w-auto px-3.5 py-1.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer hover:-translate-y-0.5"
                  >
                    Request Sector Proposal →
                  </button>
                  <span className="text-[11px] font-mono text-stone-500 dark:text-slate-400">
                    Statutory NEMA + International Standards
                  </span>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
