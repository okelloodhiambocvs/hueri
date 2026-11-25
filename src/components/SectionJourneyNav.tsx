import React, { useEffect, useState } from 'react';
import {
  SurfaceTone,
  getPageSectionAnchors,
  SectionAnchor
} from '../utils/sectionTransitions';

interface SectionJourneyNavProps {
  currentPage: string;
}

const progressBarColors: Record<SurfaceTone, string> = {
  hero: 'bg-[#4ADE80]',
  white: 'bg-[#006B22]',
  slate: 'bg-[#003B95]',
  green: 'bg-[#4ADE80]',
  blue: 'bg-[#38BDF8]'
};

const railToneClasses: Record<SurfaceTone, string> = {
  hero: 'bg-white border-[#003B95]',
  white: 'bg-[#006B22] border-white',
  slate: 'bg-[#003B95] border-white',
  green: 'bg-[#4ADE80] border-[#004E18]',
  blue: 'bg-[#38BDF8] border-[#041B44]'
};

export default function SectionJourneyNav({ currentPage }: SectionJourneyNavProps) {
  const anchors: SectionAnchor[] = getPageSectionAnchors(currentPage);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [activeId, setActiveId] = useState<string>(anchors[0]?.id || '');
  const [activeTone, setActiveTone] = useState<SurfaceTone>('white');

  useEffect(() => {
    setActiveId(anchors[0]?.id || '');
    setActiveTone('white');
  }, [currentPage]);

  useEffect(() => {
    const updateScrollState = () => {
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const ratio = docHeight > 0 ? Math.min(1, Math.max(0, window.scrollY / docHeight)) : 0;
      setScrollProgress(ratio);

      const viewportFocusY = window.innerHeight * 0.42;
      const bands = Array.from(document.querySelectorAll<HTMLElement>('[data-surface-tone]'));
      for (const band of bands) {
        const rect = band.getBoundingClientRect();
        if (rect.top <= viewportFocusY && rect.bottom >= viewportFocusY) {
          const tone = (band.dataset.surfaceTone as SurfaceTone) || 'white';
          setActiveTone(tone);
          if (band.id) {
            setActiveId(band.id);
          }
          break;
        }
      }
    };

    const handleSectionEnter = (event: Event) => {
      const customEvent = event as CustomEvent<{ id?: string; tone?: SurfaceTone }>;
      if (customEvent.detail?.tone) {
        setActiveTone(customEvent.detail.tone);
      }
      if (customEvent.detail?.id) {
        setActiveId(customEvent.detail.id);
      }
    };

    updateScrollState();
    window.addEventListener('scroll', updateScrollState, { passive: true });
    window.addEventListener('hueri:section-enter', handleSectionEnter);
    return () => {
      window.removeEventListener('scroll', updateScrollState);
      window.removeEventListener('hueri:section-enter', handleSectionEnter);
    };
  }, [currentPage]);

  const jumpToSection = (sectionId: string, tone: SurfaceTone) => {
    const el = document.getElementById(sectionId);
    if (!el) return;
    setActiveId(sectionId);
    setActiveTone(tone);
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const activeAnchor = anchors.find((item) => item.id === activeId);

  return (
    <>
      <div
        className="fixed top-[68px] sm:top-[72px] left-0 right-0 z-40 h-[3px] bg-slate-200/35 dark:bg-slate-800/40 pointer-events-none"
        aria-hidden="true"
      >
        <div
          className={`h-full w-full origin-left transition-colors duration-500 ${progressBarColors[activeTone]}`}
          style={{ transform: `scaleX(${scrollProgress})` }}
        />
      </div>

      {anchors.length > 1 && (
        <nav
          aria-label="Page section navigation"
          data-testid="section-journey-nav"
          data-active-zone={activeTone}
          className="hidden xl:flex fixed right-2.5 top-1/2 -translate-y-1/2 z-30 flex-col items-end gap-1"
        >
          <div className="flex flex-col items-center gap-0.5 rounded-xl bg-white/75 dark:bg-[#041B44]/80 backdrop-blur-md p-1 shadow-md border border-slate-200/70 dark:border-slate-700/60">
            {anchors.map((anchor) => {
              const isCurrent = activeId === anchor.id;
              return (
                <button
                  key={anchor.id}
                  type="button"
                  onClick={() => jumpToSection(anchor.id, anchor.tone)}
                  aria-label={`Jump to ${anchor.label}`}
                  aria-current={isCurrent ? 'location' : undefined}
                  title={anchor.label}
                  className="group relative flex items-center justify-center w-6 h-6 rounded-md cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
                >
                  <span className="pointer-events-none absolute right-8 whitespace-nowrap rounded bg-[#041B44] text-white px-2 py-0.5 text-[11px] font-medium opacity-0 translate-x-1 group-hover:opacity-100 group-hover:translate-x-0 group-focus-visible:opacity-100 group-focus-visible:translate-x-0 transition-all duration-150 shadow">
                    {anchor.label}
                  </span>
                  <span
                    className={`block rounded-full transition-all duration-300 ${
                      isCurrent
                        ? `w-2.5 h-2.5 border-2 ${railToneClasses[anchor.tone]} scale-110`
                        : 'w-1.5 h-1.5 bg-slate-400/80 dark:bg-slate-500/80 group-hover:bg-[#006B22] dark:group-hover:bg-[#4ADE80]'
                    }`}
                  />
                </button>
              );
            })}
          </div>
          {activeAnchor && (
            <span className="sr-only" aria-live="polite">
              Current section: {activeAnchor.label}
            </span>
          )}
        </nav>
      )}
    </>
  );
}
