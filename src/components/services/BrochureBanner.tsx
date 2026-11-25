import React from 'react';
import InteractiveBand from '../InteractiveBand';

interface BrochureBannerProps {
  isGeneratingPDF: boolean;
  onGenerateBrochure: () => void;
}

export default function BrochureBanner({ isGeneratingPDF, onGenerateBrochure }: BrochureBannerProps) {
  return (
    <InteractiveBand id="services-brochure" tone="green" fromTone="white" className="py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-left max-w-2xl">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Download Capability Brochure
          </h2>
          <p className="text-sm text-emerald-50 font-sans font-light leading-relaxed">
            Download our capability brochure summarizing our environmental, social, health, safety, and sustainability services.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <button
            type="button"
            onClick={onGenerateBrochure}
            disabled={isGeneratingPDF}
            className="w-full lg:w-auto px-5 py-2.5 bg-white hover:bg-emerald-50 text-[#003B95] font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPDF ? 'Generating PDF...' : 'Download Capability Brochure (PDF)'}
          </button>
        </div>
      </div>
    </InteractiveBand>
  );
}
