import React from 'react';

interface BrochureBannerProps {
  isGeneratingPDF: boolean;
  onGenerateBrochure: () => void;
}

export default function BrochureBanner({ isGeneratingPDF, onGenerateBrochure }: BrochureBannerProps) {
  return (
    <section className="bg-white dark:bg-[#041B44] text-slate-900 dark:text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-left max-w-2xl">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003B95] dark:text-white tracking-tight">
            Download Capability Brochure
          </h3>
          <p className="text-sm text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
            Download our capability brochure summarizing our environmental, social, health, safety, and sustainability services.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <button
            onClick={onGenerateBrochure}
            disabled={isGeneratingPDF}
            className="w-full lg:w-auto px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPDF ? 'Generating PDF...' : 'Download Capability Brochure (PDF)'}
          </button>
        </div>
      </div>
    </section>
  );
}
