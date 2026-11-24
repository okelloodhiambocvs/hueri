import React from 'react';

interface BrochureBannerProps {
  isGeneratingPDF: boolean;
  onGenerateBrochure: () => void;
}

export default function BrochureBanner({ isGeneratingPDF, onGenerateBrochure }: BrochureBannerProps) {
  return (
    <section className="bg-[#003B95] dark:bg-[#041B44] text-white py-10 sm:py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2 text-center lg:text-left max-w-2xl">
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Download Capability Brochure
          </h3>
          <p className="text-sm text-blue-100 font-sans font-light leading-relaxed">
            Download our capability brochure summarizing our environmental, social, health, safety, and sustainability services.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <button
            onClick={onGenerateBrochure}
            disabled={isGeneratingPDF}
            className="w-full lg:w-auto px-7 py-3.5 bg-[#006B22] hover:bg-[#00581C] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPDF ? 'GENERATING PDF...' : 'DOWNLOAD CAPABILITY BROCHURE (PDF)'}
          </button>
        </div>
      </div>
    </section>
  );
}
