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
    <div className="pt-24 pb-16 min-h-screen font-sans bg-[#FAF8F5] dark:bg-[#051329]">
      {/* Main About Component Following the Nyumbani Greens Flow */}
      <AboutSection 
        initialSection={initialSection}
        onNavigate={onNavigate}
        onRequestProposal={onRequestProposal}
      />
    </div>
  );
}
