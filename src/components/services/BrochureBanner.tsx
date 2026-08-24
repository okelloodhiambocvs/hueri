import React from 'react';

interface BrochureBannerProps {
  isGeneratingPDF: boolean;
  onGenerateBrochure: () => void;
}

export default function BrochureBanner({ isGeneratingPDF, onGenerateBrochure }: BrochureBannerProps) {
  return (
    <div className="mt-16 bg-gradient-to-r from-slate-900 via-slate-950 to-brand-green-950 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl flex flex-col lg:flex-row items-center justify-between gap-8 relative overflow-hidden">
      <div className="space-y-3 text-center lg:text-left z-10 max-w-2xl">
        <span className="text-[10px] font-mono font-bold tracking-widest uppercase text-brand-green-400 bg-brand-green-950/80 px-3 py-1 rounded-full border border-brand-green-800">
          OFFICIAL CORPORATE DOSSIER
        </span>
        <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white tracking-tight">
          Download Consolidated Capability Brochure
        </h3>
        <p className="text-sm text-slate-300 font-sans font-light leading-relaxed">
          Need a comprehensive PDF summary for board meetings, procurement tenders, or regulatory reviews? Download our official 2026 Corporate Capability Brochure detailing all NEMA & DOSHS compliance frameworks.
        </p>
      </div>

      <div className="shrink-0 z-10 w-full lg:w-auto">
        <button
          onClick={onGenerateBrochure}
          disabled={isGeneratingPDF}
          className="w-full lg:w-auto px-8 py-4 bg-brand-green-600 hover:bg-brand-green-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all duration-200 shadow-lg shadow-brand-green-600/20 text-center cursor-pointer disabled:opacity-50"
        >
          {isGeneratingPDF ? 'COMPILING PDF DOSSIER...' : 'DOWNLOAD CAPABILITY BROCHURE (PDF)'}
        </button>
      </div>
    </div>
  );
}
