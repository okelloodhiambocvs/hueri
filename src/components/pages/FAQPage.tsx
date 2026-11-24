/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, Mail } from 'lucide-react';
import PageHero from '../PageHero';
import FAQSection from '../FAQSection';
import photoAssets from '../../utils/photoAssets';

interface FAQPageProps {
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function FAQPage({ onNavigate }: FAQPageProps) {
  return (
    <div className="min-h-screen bg-white dark:bg-[#041B44] font-sans">
      <PageHero
        image={photoAssets.kisumuHeadquarters}
        imageAlt="HUERI Limited Frequently Asked Questions"
        title={
          <>
            Frequently Asked
            <br />
            <span className="text-[#4ADE80]">Questions</span>
          </>
        }
        description="Answers regarding HUERI Limited's licensing credentials, World Bank ESF and IFC alignment, turnaround timelines, and consortium partnerships."
      >
        <button
          type="button"
          onClick={() => onNavigate('contact')}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <Mail className="w-4 h-4" />
          <span>Contact Advisory Team</span>
        </button>

        <button
          type="button"
          onClick={() => onNavigate('home')}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Home</span>
        </button>
      </PageHero>

      <FAQSection onNavigate={onNavigate} />
    </div>
  );
}
