/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import SectorsSection from '../SectorsSection';

interface SectorsPageProps {
  initialSectorId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (sectorTitle?: string) => void;
}

export default function SectorsPage({
  onRequestProposal
}: SectorsPageProps) {
  return (
    <div className="pt-24 pb-16 min-h-screen font-sans bg-[#FAF8F5] dark:bg-[#051329]">
      {/* One Unified Page Overview of all Sectors We Serve */}
      <SectorsSection 
        onRequestProposal={onRequestProposal}
      />
    </div>
  );
}
