/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import ContactSection from '../ContactSection';
import FAQSection from '../FAQSection';
import PageHero from '../PageHero';
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
    <div className="pb-0 min-h-screen bg-white dark:bg-[#041B44]">
      <PageHero
        image={photoAssets.contactHero}
        imageAlt="HUERI Head Office Kisumu & Regional Project Operations"
        title="Contact"
        description="Based in Kisumu, Kenya, with multidisciplinary teams operating across all 47 counties and East Africa. Reach out for project advisory, compliance support, and partnership discussions."
      />

      <ContactSection onLeadSubmit={onLeadSubmit} />
      <FAQSection onNavigate={onNavigate} />
    </div>
  );
}
