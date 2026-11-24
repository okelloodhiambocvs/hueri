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

export default function ServiceCard({ service, onOpenDetails }: ServiceCardProps) {
  const serviceImage = photoAssets.services[service.id] || photoAssets.eiaAssessment;

  return (
    <div className="flex flex-col justify-between group font-sans border-b border-slate-200 dark:border-slate-800 pb-6">
      <div className="space-y-4">
        <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={serviceImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-2.5">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors line-clamp-2 leading-snug">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light line-clamp-2">
            {service.shortDescription}
          </p>

          {service.deliverables && service.deliverables.length > 0 && (
            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-1.5">
              <span className="text-[11px] font-mono font-bold uppercase text-slate-600 dark:text-slate-300 block">
                Key Deliverables
              </span>
              <ul className="space-y-1">
                {service.deliverables.slice(0, 2).map((item, idx) => (
                  <li key={idx} className="text-xs text-slate-600 dark:text-slate-400 flex items-start gap-1.5">
                    <span className="text-[#006B22] dark:text-[#4ADE80] font-bold shrink-0">·</span>
                    <span className="line-clamp-1">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {service.internationalAlignment && service.internationalAlignment.length > 0 && (
            <div className="pt-1 text-[11px] font-mono text-slate-500 dark:text-slate-400">
              {service.internationalAlignment.slice(0, 2).join(' · ')}
            </div>
          )}
        </div>
      </div>

      <div className="pt-4 mt-4 border-t border-slate-100 dark:border-slate-800">
        <button
          onClick={() => onOpenDetails(service)}
          className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] hover:underline cursor-pointer"
        >
          View Scope &amp; Methodology →
        </button>
      </div>
    </div>
  );
}
