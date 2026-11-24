import React from 'react';

interface BrochureBannerProps {
  isGeneratingPDF: boolean;
  onGenerateBrochure: () => void;
}

export default function BrochureBanner({ isGeneratingPDF, onGenerateBrochure }: BrochureBannerProps) {
  return (
    <section className="bg-[#003B95] dark:bg-[#041B44] text-white py-12 sm:py-16 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between gap-8">
        <div className="space-y-2.5 text-center lg:text-left max-w-2xl">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#4ADE80] block">
            Official Corporate Dossier
          </span>
          <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
            Download Consolidated Capability Brochure
          </h3>
          <p className="text-sm text-blue-100 font-sans font-light leading-relaxed">
            Need a comprehensive PDF summary for board meetings, procurement tenders, or regulatory reviews? Download our official 2026 Corporate Capability Brochure detailing all NEMA &amp; DOSHS compliance frameworks.
          </p>
        </div>

        <div className="shrink-0 w-full lg:w-auto">
          <button
            onClick={onGenerateBrochure}
            disabled={isGeneratingPDF}
            className="w-full lg:w-auto px-8 py-4 bg-[#006B22] hover:bg-[#00581C] text-white font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer disabled:opacity-50"
          >
            {isGeneratingPDF ? 'COMPILING PDF DOSSIER...' : 'DOWNLOAD CAPABILITY BROCHURE (PDF)'}
          </button>
        </div>
      </div>
    </section>
  );
}
