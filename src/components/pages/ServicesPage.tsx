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
    <div className="pt-24 pb-16 min-h-screen font-sans bg-[#FAF8F5] dark:bg-[#051329]">
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
