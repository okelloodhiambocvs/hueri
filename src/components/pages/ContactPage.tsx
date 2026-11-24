/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ContactSection from '../ContactSection';
import FAQSection from '../FAQSection';
import photoAssets from '../../utils/photoAssets';

interface ContactPageProps {
  onNavigate: (page: string) => void;
  onLeadSubmit?: (lead: any) => void;
}

export default function ContactPage({
  onNavigate,
  onLeadSubmit = () => {}
}: ContactPageProps) {
  return (
    <div className="pt-20 pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <div className="relative bg-[#041B44] text-white py-10 sm:py-14 mb-4 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={photoAssets.contactHero}
            alt="HUERI Head Office Kisumu & Regional Project Operations"
            className="w-full h-full object-cover object-center"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#041B44]/95 via-[#041B44]/85 to-[#041B44]/75" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl space-y-2.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] block">
              GET IN TOUCH
            </span>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white leading-tight">
              Connect With Our Lead Advisory Team
            </h1>
            <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
              Based in Kisumu, Kenya, with multidisciplinary teams operating across all 47 counties and East Africa. Reach out for statutory licensing, lender compliance, and partnership discussions.
            </p>
          </div>
        </div>
      </div>

      <ContactSection onLeadSubmit={onLeadSubmit} />
      <FAQSection onNavigate={onNavigate} />
    </div>
  );
}
