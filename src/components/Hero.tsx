/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';
import { HOME_HERO_CONTENT } from '../utils/homeContent';
import PageHero from './PageHero';

interface HeroProps {
  onRequestProposal: () => void;
  onNavigate: (page: string, sectionId?: string) => void;
  onOpenPartnership?: (modelTitle?: string) => void;
  stats?: any;
}

export default function Hero({ onRequestProposal }: HeroProps) {
  return (
    <PageHero
      image={photoAssets.siteStructuralDeck}
      imageAlt="African Urban Construction & Environmental Safeguards Supervision"
      title={
        <>
          {HOME_HERO_CONTENT.line1}
          <br />
          <span className="text-[#4ADE80]">
            {HOME_HERO_CONTENT.line2}
          </span>
        </>
      }
      description={HOME_HERO_CONTENT.description}
    >
      <button
        onClick={onRequestProposal}
        className="px-5 py-2.5 text-xs font-heading font-bold tracking-wider text-white bg-[#006B22] hover:bg-[#00581C] rounded-lg shadow-md transition-colors text-center cursor-pointer whitespace-nowrap"
      >
        Grab a coffee
      </button>
    </PageHero>
  );
}
