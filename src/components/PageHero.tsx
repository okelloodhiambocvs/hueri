/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface PageHeroProps {
  image: string;
  imageAlt: string;
  title: React.ReactNode;
  description?: string;
  children?: React.ReactNode;
}

export default function PageHero({
  image,
  imageAlt,
  title,
  description,
  children
}: PageHeroProps) {
  return (
    <section className="relative w-full h-[380px] sm:h-[440px] lg:h-[480px] flex items-center overflow-hidden bg-[#041B44] text-white font-sans">
      {/* Full-bleed clearly visible hero photograph */}
      <div className="absolute inset-0 z-0">
        <img
          src={image}
          alt={imageAlt}
          className="w-full h-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Light left-side scrim for text contrast while keeping the photograph clearly visible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/80 via-[#041B44]/35 to-transparent" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl space-y-4">
          <h1 className="font-heading font-black text-2xl sm:text-4xl lg:text-5xl tracking-tight text-white leading-[1.12] drop-shadow">
            {title}
          </h1>

          {description && (
            <p className="text-sm sm:text-base text-slate-100 font-sans font-light leading-relaxed drop-shadow">
              {description}
            </p>
          )}

          {children && (
            <div className="pt-1 flex flex-wrap items-center gap-3">
              {children}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
