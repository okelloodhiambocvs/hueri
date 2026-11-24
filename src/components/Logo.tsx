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

const OFFICIAL_LOGO_LIGHT =
  '/assets/aistudio/HUERI_LTD_LOGO-GREEN_BACKGROUND__2_-removebg-preview_fa11eac4.png';
const OFFICIAL_LOGO_DARK = '/assets/aistudio/hueri_logo_footer.png';

export default function Logo({
  className = '',
  iconSize = 'md',
  theme = 'light',
}: LogoProps) {
  const heightClass =
    typeof iconSize === 'number'
      ? ''
      : iconSize === 'sm'
      ? 'h-9 w-[110px]'
      : iconSize === 'lg'
      ? 'h-14 w-[170px]'
      : iconSize === 'xl'
      ? 'h-16 w-[195px]'
      : 'h-11 sm:h-12 w-[134px] sm:w-[146px]';

  const customStyle =
    typeof iconSize === 'number'
      ? { height: `${iconSize}px`, width: `${Math.round(iconSize * 3.04)}px` }
      : undefined;

  const isDark = theme === 'dark';

  return (
    <div
      className={`inline-flex items-center overflow-hidden select-none shrink-0 ${heightClass} ${className}`}
      style={customStyle}
    >
      <img
        src={isDark ? OFFICIAL_LOGO_DARK : OFFICIAL_LOGO_LIGHT}
        alt="HUERI Limited — Environment, Social, Health, Safety, Sustainability"
        className={`w-full h-full ${isDark ? 'object-contain object-left' : 'object-cover object-center'}`}
        referrerPolicy="no-referrer"
      />
    </div>
  );
}
