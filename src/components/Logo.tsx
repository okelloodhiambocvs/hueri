/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'compact' | 'icon';
  iconSize?: 'sm' | 'md' | 'lg' | 'xl' | number;
  theme?: 'light' | 'dark';
  showTagline?: boolean;
}

export default function Logo({ 
  className = '', 
  variant = 'full', 
  iconSize = 'md',
  theme = 'light',
  showTagline = true
}: LogoProps) {
  
  const getIconSizePx = () => {
    if (typeof iconSize === 'number') return iconSize;
    switch (iconSize) {
      case 'sm': return 34;
      case 'lg': return 58;
      case 'xl': return 76;
      case 'md':
      default: return 48;
    }
  };

  const pxSize = getIconSizePx();

  // Official HUERI African Ecosystem Circular Emblem
  const AfricanEcosystemIcon = () => (
    <svg
      width={pxSize}
      height={pxSize}
      viewBox="0 0 200 200"
      className="inline-block flex-shrink-0"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Globe Radial Gradient */}
        <radialGradient id="globeBlueGrad" cx="38%" cy="38%" r="62%">
          <stop offset="0%" stopColor="#38BDF8" />
          <stop offset="55%" stopColor="#0284C7" />
          <stop offset="100%" stopColor="#0369A1" />
        </radialGradient>

        {/* Leaf Gradient */}
        <linearGradient id="leafGrad" x1="20" y1="180" x2="60" y2="100" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#15803D" />
          <stop offset="50%" stopColor="#16A34A" />
          <stop offset="100%" stopColor="#4ADE80" />
        </linearGradient>

        {/* Gold Orbit Arc */}
        <linearGradient id="goldArcGrad" x1="40" y1="20" x2="180" y2="80" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#F59E0B" />
          <stop offset="100%" stopColor="#D97706" />
        </linearGradient>

        {/* Waves Gradient */}
        <linearGradient id="waterWavesGrad" x1="40" y1="140" x2="160" y2="170" gradientUnits="userSpaceOnUse">
          <stop offset="0%" stopColor="#0284C7" />
          <stop offset="50%" stopColor="#0EA5E9" />
          <stop offset="100%" stopColor="#0A2558" />
        </linearGradient>

        {/* Drop shadow */}
        <filter id="hueriEmblemShadow" x="-10%" y="-10%" width="120%" height="120%">
          <feDropShadow dx="1" dy="2" stdDeviation="2" floodOpacity="0.18" />
        </filter>
      </defs>

      <g filter="url(#hueriEmblemShadow)">
        {/* Top Outer Golden Orbital Arc */}
        <path
          d="M 38 78 A 78 78 0 0 1 172 82"
          stroke="url(#goldArcGrad)"
          strokeWidth="3.5"
          strokeLinecap="round"
          fill="none"
        />
        {/* Golden Orbit Nodes */}
        <circle cx="48" cy="62" r="3.2" fill="#D97706" />
        <circle cx="168" cy="68" r="3.2" fill="#D97706" />

        {/* 3 Green Community People Figures */}
        {/* Left figure */}
        <circle cx="70" cy="56" r="3.2" fill="#16A34A" />
        <path d="M 64 68 Q 70 61 76 68 L 73 75 L 67 75 Z" fill="#16A34A" />

        {/* Center leader figure */}
        <circle cx="92" cy="51" r="3.8" fill="#16A34A" />
        <path d="M 83 66 Q 92 57 101 66 L 97 74 L 87 74 Z" fill="#16A34A" />

        {/* Right figure */}
        <circle cx="114" cy="56" r="3.2" fill="#16A34A" />
        <path d="M 108 68 Q 114 61 120 68 L 117 75 L 111 75 Z" fill="#16A34A" />

        {/* Central Globe */}
        <circle cx="86" cy="104" r="46" fill="url(#globeBlueGrad)" />

        {/* Globe Grid Latitudes & Longitudes */}
        <ellipse cx="86" cy="104" rx="46" ry="20" stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
        <ellipse cx="86" cy="104" rx="22" ry="46" stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.45" fill="none" />
        <line x1="40" y1="104" x2="132" y2="104" stroke="#BAE6FD" strokeWidth="0.8" strokeOpacity="0.45" />

        {/* Africa Continent Silhouette on the Globe */}
        <path
          d="M 76 74 
             C 84 73, 98 75, 102 81 
             C 106 86, 108 92, 104 96 
             C 107 98, 114 103, 113 108 
             C 111 114, 103 118, 98 123 
             C 96 128, 92 136, 88 138 
             C 84 135, 83 126, 80 120 
             C 77 116, 70 110, 68 104 
             C 65 98, 62 92, 66 85 
             C 69 80, 71 76, 76 74 Z"
          fill="#FFFFFF"
        />
        {/* Madagascar island */}
        <ellipse cx="111" cy="120" rx="2" ry="4" transform="rotate(25 111 120)" fill="#FFFFFF" />

        {/* Green Skyline Buildings & Wind Turbine */}
        <g fill="#16A34A">
          <rect x="122" y="96" width="7" height="28" rx="1" />
          <rect x="124" y="99" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="124" y="103" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="124" y="107" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="124" y="111" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />

          <rect x="131" y="88" width="8" height="36" rx="1" />
          <rect x="133" y="92" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="136" y="92" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="133" y="97" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="136" y="97" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="133" y="102" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="136" y="102" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />

          <rect x="141" y="94" width="7" height="30" rx="1" />
          <rect x="143" y="98" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="143" y="103" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />
          <rect x="143" y="108" width="1.5" height="1.5" fill="#FFFFFF" opacity="0.8" />

          {/* Wind Turbine */}
          <line x1="135" y1="88" x2="135" y2="66" stroke="#16A34A" strokeWidth="2.2" strokeLinecap="round" />
          <circle cx="135" cy="66" r="2.2" fill="#15803D" />
          <path d="M 135 66 L 135 48 M 135 66 L 120 74 M 135 66 L 149 75" stroke="#16A34A" strokeWidth="2" strokeLinecap="round" />
        </g>

        {/* Green Leaf */}
        <path
          d="M 32 110 
             C 24 126, 26 150, 48 162 
             C 66 172, 85 160, 78 144 
             C 70 128, 52 118, 32 110 Z"
          fill="url(#leafGrad)"
        />
        <path
          d="M 34 114 C 44 128, 58 142, 74 150"
          stroke="#FFFFFF"
          strokeWidth="1.6"
          strokeLinecap="round"
          opacity="0.4"
        />

        {/* Blue Water Waves */}
        <path
          d="M 52 148 
             C 70 140, 94 158, 120 148 
             C 138 140, 150 146, 158 142 
             C 152 156, 136 166, 114 166 
             C 86 166, 68 156, 52 148 Z"
          fill="url(#waterWavesGrad)"
        />
        <path
          d="M 64 160 
             C 82 152, 106 168, 132 158 
             C 122 172, 102 178, 84 176 
             C 74 174, 68 168, 64 160 Z"
          fill="#0284C7"
          opacity="0.75"
        />
      </g>
    </svg>
  );

  if (variant === 'icon') {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <AfricanEcosystemIcon />
      </div>
    );
  }

  // Exact brand colors matching the official logo artifact
  const hueriTextColor = theme === 'light' ? 'text-[#0A2558]' : 'text-white';
  const barLineColor = theme === 'light' ? 'bg-[#16A34A]' : 'bg-[#22C55E]';
  const limitedTextColor = theme === 'light' ? 'text-[#16A34A]' : 'text-[#22C55E]';
  const taglineColor = theme === 'light' ? 'text-[#0A2558]' : 'text-slate-200';

  return (
    <div className={`inline-flex items-center space-x-3.5 select-none ${className}`}>
      {/* Official Circular Emblem */}
      <AfricanEcosystemIcon />

      {/* Official Typography Lockup */}
      <div className="flex flex-col justify-center text-left">
        
        {/* HUERI Headline */}
        <div className="flex items-center">
          <span className={`font-heading font-black text-2xl sm:text-3xl lg:text-[32px] tracking-tight ${hueriTextColor} leading-none`}>
            HUERI
          </span>
        </div>

        {/* — LIMITED — Bar */}
        <div className="flex items-center space-x-1.5 mt-1">
          <div className={`h-[1.5px] w-3.5 sm:w-5 ${barLineColor} rounded-full`} />
          <span className={`text-[10px] sm:text-[11px] font-heading font-black tracking-[0.22em] uppercase leading-none ${limitedTextColor}`}>
            LIMITED
          </span>
          <div className={`h-[1.5px] w-3.5 sm:w-5 ${barLineColor} rounded-full`} />
        </div>

        {/* Tagline: AFRICAN EXPERTISE • GLOBAL PARTNERSHIPS */}
        {showTagline && variant === 'full' && (
          <div className="mt-1">
            <p className={`text-[8px] sm:text-[8.5px] font-mono font-bold tracking-[0.06em] uppercase ${taglineColor} leading-none`}>
              AFRICAN EXPERTISE <span className="text-[#16A34A] dark:text-[#22C55E] font-black">•</span> GLOBAL PARTNERSHIPS
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
