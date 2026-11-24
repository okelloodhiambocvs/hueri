/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: 'Licensing & Standards' | 'International & DFIs' | 'Partnerships' | 'Lifecycle & Costs';
}

interface FAQSectionProps {
  onNavigate?: (page: string) => void;
}

export default function FAQSection({}: FAQSectionProps) {
  const [openId, setOpenId] = useState<string | null>('faq_firm_identity');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      id: 'faq_firm_identity',
      category: 'Licensing & Standards',
      question: "What is HUERI Limited's geographic scope, licensing credentials, and institutional positioning?",
      answer: "Hope Urban Environmental and Research Investments Limited (HUERI Limited) is an independent Africa-based environmental, social, health, safety, climate and sustainability advisory firm headquartered in Kisumu, Kenya. Incorporated in 2014 with professional collaborative roots dating to 2007, HUERI combines deep African local context with internationally recognized standards (World Bank ESF, IFC Performance Standards, AfDB ISS, Equator Principles) to serve assignments across Kenya, East Africa, and the wider continent through qualified partnerships."
    },
    {
      id: 'faq_nema_licence',
      category: 'Licensing & Standards',
      question: 'Is HUERI Limited licensed to conduct NEMA environmental assessments and audits?',
      answer: 'Yes. HUERI Limited is licensed by NEMA and directed by certified Lead Experts. Statutory practicing licenses and official registration certificates are treated as private corporate documentation and provided directly to clients, prospective partners, and procurement evaluation panels upon formal request.'
    },
    {
      id: 'faq_lender_standards',
      category: 'International & DFIs',
      question: 'Can HUERI prepare ESIA and RAP documents compliant with World Bank ESF and IFC Performance Standards?',
      answer: 'Yes. Our senior team and associate lead specialists routinely prepare Environmental and Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), Livelihood Restoration Plans (LRP), and Environmental & Social Action Plans (ESAP) strictly structured around World Bank ESS1-ESS10, IFC Performance Standards 1-8, AfDB Operational Safeguards, and Equator Principles IV. We provide bilingual deliverables and independent gap analyses for international syndicates.'
    },
    {
      id: 'faq_partnership_models',
      category: 'Partnerships',
      question: 'How do international engineering and consulting firms collaborate with HUERI?',
      answer: 'HUERI operates six flexible collaboration models: 1) Subconsultancy and in-country delivery partner; 2) Joint Venture (JV) and tender teaming; 3) Master Service Agreements (MSA) and framework contracting; 4) Local technical and community safeguards partner; 5) Peer review and second-opinion advisory; and 6) Capacity building partner. International partners provide global domain engineering while HUERI ensures flawless statutory compliance, field GIS surveys, and stakeholder barazas.'
    },
    {
      id: 'faq_eia_timeline',
      category: 'Lifecycle & Costs',
      question: 'What are typical turnaround times for environmental permits and donor due diligence?',
      answer: 'Statutory Summary Project Reports (SPRs) for low-risk projects take 14 to 30 days. Medium-risk Comprehensive Project Reports (CPRs) take 45 to 60 days. High-risk complex ESIAs and multilateral due diligence dossiers require 3 to 5 months due to mandatory 30-day public disclosure windows and comprehensive seasonal baseline studies. HUERI’s experienced team ensures first-pass statutory clearance without avoidable delays.'
    },
    {
      id: 'faq_operational_audit',
      category: 'Lifecycle & Costs',
      question: 'What support does HUERI provide for existing operating assets and annual compliance?',
      answer: 'Operating commercial, industrial, and infrastructure facilities must conduct annual environmental audits and workplace safety audits registered with NEMA and DOSHS. HUERI performs baseline audits, hazardous waste surveys, effluent monitoring, and ESG disclosures, drafting practical Corrective Action Plans (CAPs) to maintain compliance.'
    }
  ];

  const categories = ['All', 'Licensing & Standards', 'International & DFIs', 'Partnerships', 'Lifecycle & Costs'];

  const filteredFaqs = activeCategory === 'All'
    ? faqs
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleOpen = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section id="faq" className="py-10 sm:py-12 bg-[#006B22] dark:bg-[#054A20] text-white transition-colors duration-300 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">

        <div className="text-left max-w-3xl space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
            Frequently Asked Questions
          </h2>
          <p className="text-xs sm:text-sm text-emerald-50 font-sans leading-relaxed font-light">
            Answers regarding our advisory coverage, international lender standards, permitting, and partnerships.
          </p>
        </div>

        {/* Clean Filter Strip */}
        <div className="py-2 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-emerald-100">
            Filter FAQ Topics
          </span>

          <div className="w-full sm:w-auto">
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setOpenId(null);
              }}
              className="w-full sm:w-64 px-3 py-2 rounded-lg bg-white dark:bg-[#041B44] border border-white/30 text-xs font-mono font-bold text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-white cursor-pointer"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? 'All Knowledge Topics' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="divide-y divide-white/20 border-t border-b border-white/20">
          {filteredFaqs.map((faq) => {
            const isOpen = openId === faq.id;
            return (
              <div key={faq.id} className="py-1">
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full flex items-center justify-between py-4 text-left cursor-pointer transition-colors group"
                >
                  <span className="font-heading font-bold text-white group-hover:text-emerald-100 text-sm sm:text-base leading-snug pr-4">
                    {faq.question}
                  </span>
                  <span className={`text-[11px] font-mono font-bold whitespace-nowrap uppercase tracking-wider ${
                    isOpen
                      ? 'text-[#A7F3D0]'
                      : 'text-emerald-100/80'
                  }`}>
                    {isOpen ? '− Collapse' : '+ Expand'}
                  </span>
                </button>

                {isOpen && (
                  <div className="pb-5 text-emerald-50 text-xs sm:text-sm font-sans leading-relaxed font-light space-y-1.5 animate-fadeIn">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
                      Official HUERI Advisory Position
                    </span>
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        <div className="text-left pt-2">
          <p className="text-[11px] text-emerald-50 font-sans font-light">
            Have a project-specific inquiry not listed here? Connect with our Lead Experts via the inquiry form above.
          </p>
        </div>

      </div>
    </section>
  );
}
