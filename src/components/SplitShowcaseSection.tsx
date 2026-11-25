import React from 'react';
import { CheckCircle2 } from 'lucide-react';
import InteractiveBand from './InteractiveBand';
import { RevealBlock } from './MotionReveal';
import { SurfaceTone } from '../utils/sectionTransitions';

interface SplitShowcaseSectionProps {
  id?: string;
  tone: Extract<SurfaceTone, 'white' | 'green'>;
  fromTone?: SurfaceTone;
  imagePosition: 'left' | 'right';
  image: string;
  imageAlt: string;
  eyebrow?: string;
  title: string;
  description: string;
  secondaryText?: string;
  highlights?: string[];
  actions?: React.ReactNode;
  children?: React.ReactNode;
}

export default function SplitShowcaseSection({
  id,
  tone,
  fromTone,
  imagePosition,
  image,
  imageAlt,
  eyebrow,
  title,
  description,
  secondaryText,
  highlights,
  actions,
  children
}: SplitShowcaseSectionProps) {
  const isGreen = tone === 'green';

  const photoPane = (
    <div
      className={`lg:col-span-6 min-h-[300px] sm:min-h-[380px] lg:min-h-[460px] overflow-hidden group ${
        isGreen ? 'bg-[#00551B]' : 'bg-slate-100 dark:bg-slate-900'
      }`}
    >
      <img
        src={image}
        alt={imageAlt}
        className="w-full h-full object-cover object-center rounded-none block transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        referrerPolicy="no-referrer"
      />
    </div>
  );

  const textPanePadding =
    imagePosition === 'right'
      ? 'lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-10'
      : 'lg:pr-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pl-10';

  const contentPane = (
    <div className={`lg:col-span-6 py-10 sm:py-14 px-4 sm:px-6 ${textPanePadding} flex flex-col justify-center`}>
      <RevealBlock
        direction={imagePosition === 'right' ? 'left' : 'right'}
        className="space-y-5 max-w-xl"
      >
        <div className="space-y-2.5 text-left">
          {eyebrow && (
            <span
              className={`text-xs font-mono font-bold uppercase tracking-wider block ${
                isGreen ? 'text-[#A7F3D0]' : 'text-[#006B22] dark:text-[#4ADE80]'
              }`}
            >
              {eyebrow}
            </span>
          )}
          <h2
            className={`text-2xl sm:text-3xl lg:text-4xl font-heading font-black tracking-tight text-balance ${
              isGreen ? 'text-white' : 'text-[#003B95] dark:text-white'
            }`}
          >
            {title}
          </h2>
          <p
            className={`text-sm sm:text-base leading-relaxed font-normal ${
              isGreen ? 'text-emerald-50' : 'text-slate-700 dark:text-slate-200 font-light'
            }`}
          >
            {description}
          </p>
          {secondaryText && (
            <p
              className={`text-xs sm:text-sm leading-relaxed ${
                isGreen ? 'text-emerald-100/95' : 'text-slate-600 dark:text-slate-300 font-light'
              }`}
            >
              {secondaryText}
            </p>
          )}
        </div>

        {highlights && highlights.length > 0 && (
          <div className="space-y-2 pt-1">
            {highlights.map((item, idx) => (
              <div key={idx} className="flex items-start gap-2.5">
                <CheckCircle2
                  className={`w-4 h-4 shrink-0 mt-1 ${
                    isGreen ? 'text-[#A7F3D0]' : 'text-[#006B22] dark:text-[#4ADE80]'
                  }`}
                  aria-hidden="true"
                />
                <span
                  className={`text-xs sm:text-sm leading-relaxed ${
                    isGreen ? 'text-white' : 'text-slate-700 dark:text-slate-200'
                  }`}
                >
                  {item}
                </span>
              </div>
            ))}
          </div>
        )}

        {children}

        {actions && <div className="pt-1 flex flex-wrap items-center gap-3">{actions}</div>}
      </RevealBlock>
    </div>
  );

  return (
    <InteractiveBand id={id} tone={tone} fromTone={fromTone} className="scroll-mt-24 overflow-hidden">
      <div className="grid lg:grid-cols-12 items-stretch">
        {imagePosition === 'left' ? (
          <>
            {photoPane}
            {contentPane}
          </>
        ) : (
          <>
            {contentPane}
            {photoPane}
          </>
        )}
      </div>
    </InteractiveBand>
  );
}
