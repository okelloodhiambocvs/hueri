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
    <div className="flex flex-col justify-between group font-sans pb-4">
      <div className="space-y-4">
        <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={serviceImage}
            alt={service.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            referrerPolicy="no-referrer"
          />
        </div>

        <div className="space-y-2">
          <h3 className="font-heading font-extrabold text-base sm:text-lg text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors line-clamp-2 leading-snug">
            {service.title}
          </h3>

          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light line-clamp-2">
            {service.shortDescription}
          </p>
        </div>
      </div>

      <div className="pt-3 mt-3">
        <button
          onClick={() => onOpenDetails(service)}
          className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] cursor-pointer"
        >
          Details →
        </button>
      </div>
    </div>
  );
}
