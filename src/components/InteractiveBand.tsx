import React, { useEffect, useRef, useState } from 'react';
import {
  SurfaceTone,
  SECTION_SURFACE_TOKENS,
  getSeamTransitionMeta
} from '../utils/sectionTransitions';

interface SectionSeamProps {
  fromTone?: SurfaceTone;
  toTone: SurfaceTone;
  isActive: boolean;
}

const fromSurfaceClasses: Record<SurfaceTone, string> = {
  hero: 'bg-[#041B44]',
  white: 'bg-white dark:bg-[#041B44]',
  slate: 'bg-slate-50 dark:bg-[#06183A]',
  green: 'bg-[#006B22] dark:bg-[#054A20]',
  blue: 'bg-[#003B95] dark:bg-[#061E4A]'
};

const incomingFillClasses: Record<SurfaceTone, string> = {
  hero: 'text-[#041B44]',
  white: 'text-white dark:text-[#041B44]',
  slate: 'text-slate-50 dark:text-[#06183A]',
  green: 'text-[#006B22] dark:text-[#054A20]',
  blue: 'text-[#003B95] dark:text-[#061E4A]'
};

export function SectionSeamTransition({ fromTone, toTone, isActive }: SectionSeamProps) {
  const seam = getSeamTransitionMeta(fromTone, toTone);
  if (!seam.hasContrastShift) {
    return null;
  }

  return (
    <div
      className={`relative w-full h-7 sm:h-10 overflow-hidden pointer-events-none select-none ${fromSurfaceClasses[seam.fromTone]}`}
      aria-hidden="true"
    >
      <svg
        viewBox="0 0 1440 56"
        preserveAspectRatio="none"
        className={`block absolute inset-x-0 -bottom-px w-full h-[calc(100%+1px)] origin-bottom fill-current transition-transform duration-700 ease-out ${
          isActive ? 'scale-y-100' : 'scale-y-95'
        } ${incomingFillClasses[toTone]}`}
      >
        <path d="M0,36 C360,6 920,52 1440,12 L1440,56 L0,56 Z" />
      </svg>
    </div>
  );
}

interface InteractiveBandProps {
  id?: string;
  tone: SurfaceTone;
  fromTone?: SurfaceTone;
  className?: string;
  ariaLabelledBy?: string;
  children: React.ReactNode;
}

export default function InteractiveBand({
  id,
  tone,
  fromTone,
  className = '',
  ariaLabelledBy,
  children
}: InteractiveBandProps) {
  const ref = useRef<HTMLElement>(null);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const prefersReduced =
      typeof window !== 'undefined' &&
      window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced || typeof IntersectionObserver === 'undefined') {
      setIsActive(true);
      return;
    }

    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.85) {
      setIsActive(true);
      if (id) {
        window.dispatchEvent(new CustomEvent('hueri:section-enter', { detail: { id, tone } }));
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setIsActive(true);
            if (id && entry.intersectionRatio >= 0.12) {
              window.dispatchEvent(
                new CustomEvent('hueri:section-enter', { detail: { id, tone } })
              );
            }
          }
        }
      },
      { threshold: [0.06, 0.15, 0.35], rootMargin: '-40px 0px -12% 0px' }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [id, tone]);

  const token = SECTION_SURFACE_TOKENS[tone];

  return (
    <section
      ref={ref}
      id={id}
      aria-labelledby={ariaLabelledBy}
      data-surface-tone={tone}
      data-band-active={isActive ? 'true' : 'false'}
      className={`relative scroll-mt-24 transition-colors duration-500 ${token.wrapperClass}`}
    >
      <SectionSeamTransition fromTone={fromTone} toTone={tone} isActive={isActive} />
      <div
        className={`band-content-shell ${className} ${
          isActive ? 'translate-y-0 opacity-100' : 'translate-y-3 opacity-90'
        }`}
      >
        {children}
      </div>
    </section>
  );
}
