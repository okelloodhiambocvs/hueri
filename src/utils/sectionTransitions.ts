export type SurfaceTone = 'hero' | 'white' | 'slate' | 'green' | 'blue';

export interface SurfaceStyleToken {
  tone: SurfaceTone;
  wrapperClass: string;
  fillLight: string;
  fillDark: string;
  accentHex: string;
  isDarkSurface: boolean;
}

export interface SeamTransitionMeta {
  fromTone: SurfaceTone;
  toTone: SurfaceTone;
  hasContrastShift: boolean;
  fromFillLight: string;
  fromFillDark: string;
  toFillLight: string;
  toFillDark: string;
  sweepGradientClass: string;
  badgeLabel: string;
}

export interface SectionAnchor {
  id: string;
  label: string;
  tone: SurfaceTone;
}

export const SECTION_SURFACE_TOKENS: Record<SurfaceTone, SurfaceStyleToken> = {
  hero: {
    tone: 'hero',
    wrapperClass: 'bg-[#041B44] text-white',
    fillLight: '#041B44',
    fillDark: '#041B44',
    accentHex: '#4ADE80',
    isDarkSurface: true
  },
  white: {
    tone: 'white',
    wrapperClass: 'bg-white dark:bg-[#041B44] text-slate-900 dark:text-slate-100',
    fillLight: '#ffffff',
    fillDark: '#041B44',
    accentHex: '#006B22',
    isDarkSurface: false
  },
  slate: {
    tone: 'slate',
    wrapperClass: 'bg-slate-50 dark:bg-[#06183A] text-slate-900 dark:text-slate-100',
    fillLight: '#f8fafc',
    fillDark: '#06183A',
    accentHex: '#003B95',
    isDarkSurface: false
  },
  green: {
    tone: 'green',
    wrapperClass: 'bg-[#006B22] dark:bg-[#054A20] text-white',
    fillLight: '#006B22',
    fillDark: '#054A20',
    accentHex: '#A7F3D0',
    isDarkSurface: true
  },
  blue: {
    tone: 'blue',
    wrapperClass: 'bg-[#003B95] dark:bg-[#061E4A] text-white',
    fillLight: '#003B95',
    fillDark: '#061E4A',
    accentHex: '#4ADE80',
    isDarkSurface: true
  }
};

export function getSeamTransitionMeta(
  fromTone: SurfaceTone | undefined,
  toTone: SurfaceTone
): SeamTransitionMeta {
  const resolvedFrom = fromTone || toTone;
  const fromToken = SECTION_SURFACE_TOKENS[resolvedFrom];
  const toToken = SECTION_SURFACE_TOKENS[toTone];
  const hasContrastShift = resolvedFrom !== toTone;

  let sweepGradientClass = 'from-[#006B22]/30 via-[#003B95]/40 to-[#006B22]/30';
  if (toTone === 'green') {
    sweepGradientClass = 'from-[#4ADE80]/40 via-white/80 to-[#A7F3D0]/40';
  } else if (toTone === 'blue') {
    sweepGradientClass = 'from-[#38BDF8]/40 via-[#4ADE80]/80 to-[#38BDF8]/40';
  } else if (resolvedFrom === 'green' || resolvedFrom === 'blue') {
    sweepGradientClass = 'from-[#006B22]/40 via-[#003B95]/65 to-[#006B22]/40';
  }

  return {
    fromTone: resolvedFrom,
    toTone,
    hasContrastShift,
    fromFillLight: fromToken.fillLight,
    fromFillDark: fromToken.fillDark,
    toFillLight: toToken.fillLight,
    toFillDark: toToken.fillDark,
    sweepGradientClass,
    badgeLabel: toToken.isDarkSurface ? 'green-zone' : 'light-zone'
  };
}

export function getAlternatingTone(index: number, startTone: SurfaceTone = 'white'): SurfaceTone {
  const secondaryTone: SurfaceTone = startTone === 'green' ? 'white' : 'green';
  return index % 2 === 0 ? startTone : secondaryTone;
}

export function getAlternatingImagePosition(
  index: number,
  startPosition: 'left' | 'right' = 'right'
): 'left' | 'right' {
  const alternate: 'left' | 'right' = startPosition === 'right' ? 'left' : 'right';
  return index % 2 === 0 ? startPosition : alternate;
}

export function getPageSectionAnchors(page: string): SectionAnchor[] {
  switch (page) {
    case 'home':
      return [
        { id: 'home-grounded', label: 'Overview', tone: 'white' },
        { id: 'home-assignments', label: 'Recent Work', tone: 'green' },
        { id: 'home-practices', label: 'Practices', tone: 'white' },
        { id: 'home-disciplines', label: 'Disciplines', tone: 'green' },
        { id: 'home-delivery-steps', label: 'Process', tone: 'white' },
        { id: 'global-consortia-footer', label: 'Partners', tone: 'blue' }
      ];
    case 'about':
      return [
        { id: 'about-overview', label: 'Overview', tone: 'white' },
        { id: 'about-core-values', label: 'Core Values', tone: 'green' },
        { id: 'about-problem', label: 'The Problem', tone: 'slate' },
        { id: 'about-approach', label: 'Our Approach', tone: 'green' },
        { id: 'about-solution', label: 'Our Solution', tone: 'white' },
        { id: 'about-services-strip', label: 'Services', tone: 'green' },
        { id: 'about-why-choose-us', label: 'Why HUERI', tone: 'white' },
        { id: 'about-leadership', label: 'Leadership', tone: 'green' }
      ];
    case 'services':
      return [
        { id: 'services-directory', label: 'Directory', tone: 'white' },
        { id: 'service-eia-esia', label: 'ESIA', tone: 'green' },
        { id: 'service-eshsrim-training', label: 'ESHSRIM', tone: 'white' },
        { id: 'service-rap-livelihoods', label: 'RAP', tone: 'green' },
        { id: 'service-env-compliance-audits', label: 'Audits', tone: 'white' },
        { id: 'service-ohs-safety', label: 'Safety', tone: 'green' },
        { id: 'service-climate-resilience', label: 'Climate', tone: 'white' },
        { id: 'service-hydro-water', label: 'Water', tone: 'green' },
        { id: 'service-esdd-esg', label: 'ESG', tone: 'white' },
        { id: 'service-gis-drone', label: 'Drone GIS', tone: 'green' },
        { id: 'scoping-matrix', label: 'Matrix', tone: 'white' }
      ];
    case 'service-detail':
      return [
        { id: 'service-scope-overview', label: 'Scope', tone: 'white' },
        { id: 'service-process', label: 'Process', tone: 'green' },
        { id: 'service-deliverables-split', label: 'Deliverables', tone: 'white' },
        { id: 'service-delivery-modes', label: 'Delivery', tone: 'green' },
        { id: 'service-inquiry', label: 'Enquire', tone: 'white' },
        { id: 'global-consortia-footer', label: 'Partners', tone: 'blue' }
      ];
    case 'sectors':
      return [
        { id: 'sectors-core', label: 'Core Infrastructure', tone: 'white' },
        { id: 'sectors-industrial', label: 'Urban & Mining', tone: 'green' },
        { id: 'sectors-cross', label: 'Cross-Sector', tone: 'white' }
      ];
    case 'partnerships':
      return [
        { id: 'partnerships-overview', label: 'Value Props', tone: 'white' },
        { id: 'partnerships-feature', label: 'Bankability', tone: 'green' },
        { id: 'partnerships-teaming', label: 'In-Country', tone: 'white' },
        { id: 'partnerships-models', label: 'Models', tone: 'green' }
      ];
    default:
      return [];
  }
}
