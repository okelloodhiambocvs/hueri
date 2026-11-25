/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft } from 'lucide-react';
import PageHero from '../PageHero';
import InteractiveBand from '../InteractiveBand';
import photoAssets from '../../utils/photoAssets';
import PrivacyPolicyTab from '../policies/PrivacyPolicyTab';
import TermsPolicyTab from '../policies/TermsPolicyTab';

interface LegalPoliciesPageProps {
  initialPolicy?: 'privacy' | 'terms';
  onNavigate: (page: string, sectionId?: string) => void;
}

export default function LegalPoliciesPage({
  initialPolicy = 'privacy',
  onNavigate
}: LegalPoliciesPageProps) {
  const isPrivacy = initialPolicy !== 'terms';

  return (
    <div className="min-h-screen bg-white dark:bg-[#041B44] font-sans">
      <PageHero
        image={photoAssets.kisumuHeadquarters}
        imageAlt={isPrivacy ? 'HUERI Limited Privacy Policy' : 'HUERI Limited Terms and Conditions'}
        title={
          isPrivacy ? (
            <>
              Privacy
              <br />
              <span className="text-[#4ADE80]">Policy</span>
            </>
          ) : (
            <>
              Terms &amp;
              <br />
              <span className="text-[#4ADE80]">Conditions</span>
            </>
          )
        }
        description={
          isPrivacy
            ? 'How Hope Urban Environmental and Research Investments Limited (HUERI Limited) collects, safeguards, and governs personal and institutional data.'
            : 'Terms governing access to the HUERI Limited website and professional environmental and social consultancy engagements.'
        }
      >
        <button
          type="button"
          onClick={() => onNavigate(isPrivacy ? 'terms' : 'privacy')}
          className="px-4 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          {isPrivacy ? 'Read Terms & Conditions' : 'Read Privacy Policy'}
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

      <InteractiveBand id="legal-policy-body" tone="white" fromTone="hero" className="py-10 sm:py-12">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 text-slate-800 dark:text-slate-200">
          {isPrivacy ? <PrivacyPolicyTab /> : <TermsPolicyTab />}
        </div>
      </InteractiveBand>
    </div>
  );
}
