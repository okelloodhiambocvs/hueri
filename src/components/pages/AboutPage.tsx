/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import AboutSection from '../AboutSection';

interface AboutPageProps {
  initialSection?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: () => void;
}

export default function AboutPage({
  initialSection = 'all',
  onNavigate,
  onRequestProposal
}: AboutPageProps) {
  return (
    <div className="pb-0 min-h-screen font-sans bg-white dark:bg-[#041B44]">
      {/* Main About Component Following the Nyumbani Greens Flow */}
      <AboutSection 
        initialSection={initialSection}
        onNavigate={onNavigate}
        onRequestProposal={onRequestProposal}
      />
    </div>
  );
}
