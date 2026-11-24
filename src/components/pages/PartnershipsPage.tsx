/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import PartnershipsSection from '../PartnershipsSection';
import PageHero from '../PageHero';
import photoAssets from '../../utils/photoAssets';

interface PartnershipsPageProps {
  onNavigate: (page: string) => void;
  onOpenPartnershipInquiry: (modelTitle?: string) => void;
}

export default function PartnershipsPage({
  onOpenPartnershipInquiry
}: PartnershipsPageProps) {
  return (
    <div className="pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <PageHero
        image={photoAssets.partnershipsHero}
        imageAlt="HUERI Global & Regional African Partnerships"
        title="International Partnerships & Consortia"
        description="Serving as a trusted in-country delivery partner, subconsultant, and consortium member for international development agencies, engineering consultancies, and infrastructure financiers across Africa."
      >
        <button
          onClick={() => onOpenPartnershipInquiry()}
          className="px-4 py-2 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          Let&apos;s Talk →
        </button>
      </PageHero>

      <PartnershipsSection onOpenPartnershipInquiry={onOpenPartnershipInquiry} />
    </div>
  );
}
