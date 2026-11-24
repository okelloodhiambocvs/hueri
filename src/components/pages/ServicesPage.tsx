/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ServicesSection from '../ServicesSection';

interface ServicesPageProps {
  initialPillarId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit?: (lead: any) => void;
}

export default function ServicesPage({
  initialPillarId = 'all',
  onNavigate,
  onRequestProposal,
  onLeadSubmit = () => {}
}: ServicesPageProps) {
  return (
    <div className="pb-0 min-h-screen font-sans bg-white dark:bg-[#041B44]">
      {/* Consolidated Core Services Portfolio */}
      <ServicesSection 
        initialPillarId={initialPillarId}
        onNavigate={onNavigate}
        onRequestProposal={onRequestProposal}
        onLeadSubmit={onLeadSubmit}
      />
    </div>
  );
}
