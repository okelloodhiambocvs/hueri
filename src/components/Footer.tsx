/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (page: string, sectionId?: string) => void;
  onOpenPolicy: (tab: string) => void;
  onRequestProposal?: () => void;
  onOpenPartnership?: (modelTitle?: string) => void;
}

export default function Footer({
  onNavigate = () => {},
  onOpenPartnership
}: FooterProps) {
  return (
    <footer className="font-sans" role="contentinfo">
      {/* Global Partner & Consortium Footer Band Shown on Every Page */}
      <section id="global-consortia-footer" className="bg-[#003B95] dark:bg-[#061E4A] text-white py-8 sm:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 items-center gap-6">
            <div className="lg:col-span-8 space-y-2.5">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-white tracking-tight">
                Partner with HUERI on African Infrastructure, Energy &amp; Safeguards Tenders
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-sans font-light leading-relaxed max-w-3xl">
                We regularly partner with international engineering firms, multilateral prime contractors, and regional developers as a trusted local delivery co-lead. We bring experienced lead experts, World Bank ESF / IFC PS proficiency, 47-county mobilization capacity, and established community networks.
              </p>
              <div className="grid sm:grid-cols-2 gap-1.5 pt-1 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Joint Venture &amp; Consortia Submissions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> In-Country Safeguards Delivery Partner
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Master Service Agreements (MSA)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Rapid Technical Proposal Backstopping
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 flex flex-wrap lg:justify-end items-center gap-2.5">
              <button
                type="button"
                onClick={() =>
                  onOpenPartnership
                    ? onOpenPartnership('International Prime Contractor & Consortium Teaming')
                    : onNavigate('partnerships')
                }
                className="px-3.5 py-2 rounded-md bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-[11px] tracking-wide transition-colors text-center cursor-pointer whitespace-nowrap"
              >
                Propose Joint Venture →
              </button>
              <button
                type="button"
                onClick={() => onNavigate('partnerships')}
                className="px-3.5 py-2 rounded-md bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-[11px] tracking-wide transition-colors text-center cursor-pointer whitespace-nowrap"
              >
                Explore Models
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Compact Bottom Copyright & Legal Bar */}
      <div className="bg-[#041B44] text-white border-t border-[#0A2E6E] py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs sm:text-sm text-slate-300">
          <button
            type="button"
            onClick={() => onNavigate('home')}
            className="text-left cursor-pointer group block focus-visible:ring-2 focus-visible:ring-[#4ADE80] focus-visible:outline-none rounded-lg"
            aria-label="HUERI Limited Home"
          >
            <Logo variant="full" theme="dark" iconSize="md" showTagline={true} />
          </button>

          <div className="text-center font-mono text-xs sm:text-sm text-slate-300">
            <p>© 2026 HUERI Limited. All rights reserved.</p>
          </div>

          <div className="flex items-center gap-4 text-xs sm:text-sm font-mono">
            <button
              type="button"
              onClick={() => onNavigate('privacy')}
              className="hover:text-[#4ADE80] transition-colors cursor-pointer text-slate-300 focus-visible:ring-1 focus-visible:ring-[#4ADE80] rounded"
            >
              Privacy Policy
            </button>
            <span>•</span>
            <button
              type="button"
              onClick={() => onNavigate('terms')}
              className="hover:text-[#4ADE80] transition-colors cursor-pointer text-slate-300 focus-visible:ring-1 focus-visible:ring-[#4ADE80] rounded"
            >
              Terms and Conditions
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
