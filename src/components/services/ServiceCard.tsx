/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Service } from '../../types';
import photoAssets from '../../utils/photoAssets';

interface ServiceCardProps {
  key?: React.Key;
  service: Service;
  index: number;
  onOpenDetails: (service: Service) => void;
}

export default function ServiceCard({ service, index, onOpenDetails }: ServiceCardProps) {
  const serviceImage = photoAssets.services[service.id] || photoAssets.eiaAssessment;

  return (
    <div
      className="bg-white dark:bg-[#071a38] rounded-3xl overflow-hidden border border-[#E5DFD5] dark:border-slate-800 shadow-sm hover:shadow-2xl hover:border-brand-green-600 hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group font-sans"
    >
      <div>
        {/* High-Visibility Photographic Header with Minimal Dark Tint */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <img 
            src={serviceImage} 
            alt={service.title} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 contrast-105"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Practice Category Overlay */}
          <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase bg-brand-blue-900/90 px-3 py-1 rounded-full border border-white/20 max-w-[220px] truncate shadow-sm">
              {service.practiceCategory || 'Advisory Practice'}
            </span>

            <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider bg-black/50 px-2 py-0.5 rounded backdrop-blur-sm border border-white/10">
              0{index + 1}
            </span>
          </div>

          <div className="absolute bottom-3 left-3 right-3">
            <span className="text-[10px] font-mono text-slate-200 tracking-wider">
              Statutory NEMA & Lender Standards Aligned
            </span>
          </div>
        </div>

        {/* Card Content Body */}
        <div className="p-6 space-y-3">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light line-clamp-2">
            {service.shortDescription}
          </p>

          {/* Key Deliverables */}
          {service.deliverables && service.deliverables.length > 0 && (
            <div className="pt-3 border-t border-[#EDE7DD] dark:border-slate-800 space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-stone-700 dark:text-slate-300 block">
                Key Deliverables:
              </span>
              <ul className="space-y-1">
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="text-xs text-stone-600 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="text-brand-green-600 font-bold shrink-0">•</span>
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.internationalAlignment && service.internationalAlignment.length > 0 && (
            <div className="pt-2 flex flex-wrap gap-1.5">
              {service.internationalAlignment.slice(0, 2).map((item, idx) => (
                <span key={idx} className="text-[10px] px-2.5 py-0.5 rounded-md bg-[#FAF8F5] dark:bg-slate-800 text-stone-600 dark:text-slate-300 border border-[#E5DFD5] dark:border-slate-700 font-mono">
                  {item}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="p-6 pt-0">
        <div className="pt-3 border-t border-[#EDE7DD] dark:border-slate-800">
          <button
            onClick={() => onOpenDetails(service)}
            className="w-full py-3 px-4 bg-stone-100 dark:bg-slate-800 group-hover:bg-brand-green-600 group-hover:text-white text-stone-800 dark:text-slate-200 font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-300 text-center cursor-pointer shadow-sm"
          >
            View Scope & Methodology →
          </button>
        </div>
      </div>
    </div>
  );
}
