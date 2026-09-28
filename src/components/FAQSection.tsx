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

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>('faq_firm_identity');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const faqs: FAQItem[] = [
    {
      id: "faq_firm_identity",
      category: "Licensing & Standards",
      question: "What is HUERI Limited's geographic scope, licensing credentials, and institutional positioning?",
      answer: "Hope Urban Environmental and Research Investments Limited (HUERI Limited) is an independent Africa-based environmental, social, health, safety, climate and sustainability advisory firm headquartered in Kisumu, Kenya. Incorporated in 2014 with professional collaborative roots dating to 2007, HUERI combines deep African local context with internationally recognized standards (World Bank ESF, IFC Performance Standards, AfDB ISS, Equator Principles) to serve assignments across Kenya, East Africa, and the wider continent through qualified partnerships."
    },
    {
      id: "faq_nema_licence",
      category: "Licensing & Standards",
      question: "Is HUERI Limited an officially registered and licensed Firm of Experts with NEMA in 2026?",
      answer: "Yes. HUERI Limited is an officially registered and practicing Firm of Experts with NEMA under EMCA Cap 387, directed by certified NEMA Lead Experts. As a matter of corporate privacy and professional compliance, statutory practicing licenses and official registration certificates are considered private documentation and are provided directly to clients, prospective partners, and procurement evaluation panels upon formal request."
    },
    {
      id: "faq_lender_standards",
      category: "International & DFIs",
      question: "Can HUERI prepare ESIA and RAP documents compliant with World Bank ESF and IFC Performance Standards?",
      answer: "Yes. Our senior team and associate lead specialists routinely prepare Environmental and Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), Livelihood Restoration Plans (LRP), and Environmental & Social Action Plans (ESAP) strictly structured around World Bank ESS1-ESS10, IFC Performance Standards 1-8, AfDB Operational Safeguards, and Equator Principles IV. We provide bilingual deliverables and independent gap analyses for international syndicates."
    },
    {
      id: "faq_partnership_models",
      category: "Partnerships",
      question: "How do international engineering and consulting firms collaborate with HUERI?",
      answer: "HUERI operates six flexible collaboration models: 1) Subconsultancy and in-country delivery partner; 2) Joint Venture (JV) and tender teaming; 3) Master Service Agreements (MSA) and framework contracting; 4) Local technical and community safeguards partner; 5) Peer review and second-opinion advisory; and 6) Capacity building partner. International partners provide global domain engineering while HUERI ensures flawless statutory compliance, field GIS surveys, and stakeholder barazas."
    },
    {
      id: "faq_eia_timeline",
      category: "Lifecycle & Costs",
      question: "What are typical turnaround times for environmental permits and donor due diligence?",
      answer: "Statutory Summary Project Reports (SPRs) for low-risk projects take 14 to 30 days. Medium-risk Comprehensive Project Reports (CPRs) take 45 to 60 days. High-risk complex ESIAs and multilateral due diligence dossiers require 3 to 5 months due to mandatory 30-day public disclosure windows and comprehensive seasonal baseline studies. HUERI’s experienced team ensures first-pass statutory clearance without avoidable delays."
    },
    {
      id: "faq_operational_audit",
      category: "Lifecycle & Costs",
      question: "What support does HUERI provide for existing operating assets and annual compliance?",
      answer: "Under EMCA Cap 387 and OSHA 2007, operating commercial, industrial, and infrastructure facilities must conduct statutory Annual Environmental Audits (EA) and workplace safety audits registered with NEMA and DOSHS. HUERI performs initial baseline audits, hazardous waste surveys, effluent trials, and ESG disclosures, drafting practical Corrective Action Plans (CAPs) to maintain continuous legal standing."
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
    <section id="faq" className="py-8 sm:py-10 bg-[#FAF8F5] dark:bg-[#071a38] text-stone-900 dark:text-slate-100 transition-colors duration-300 relative border-t border-[#E5DFD5] dark:border-slate-800 font-sans">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-700 dark:text-brand-green-400 block">
            KNOWLEDGE BASE & STATUTORY CLARIFICATIONS
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 dark:text-white tracking-tight">
            Frequently Asked Advisory & Partnership Questions
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Answers regarding our African advisory coverage, international lender standards, statutory permitting, and consortium partnerships.
          </p>
        </div>

        {/* Category Dropdown & Quick Filter Bar - matching light mode button */}
        <div className="bg-white dark:bg-slate-800/90 p-3 rounded-2xl border border-[#E5DFD5] dark:border-slate-700 shadow-md flex flex-col sm:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green-600 dark:bg-emerald-400" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800 dark:text-slate-200">
              Filter FAQ Topics:
            </span>
          </div>

          {/* Interactive Dropdown for Category Selection */}
          <div className="w-full sm:w-auto flex items-center gap-2">
            <select
              value={activeCategory}
              onChange={(e) => {
                setActiveCategory(e.target.value);
                setOpenId(null);
              }}
              className="w-full sm:w-64 px-3 py-1.5 rounded-xl bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 text-[10px] font-mono font-bold uppercase text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 cursor-pointer shadow-sm"
            >
              {categories.map((cat) => (
                <option key={cat} value={cat}>
                  {cat === 'All' ? '✦ All Knowledge Topics' : cat}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Accordions Dropdown List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div 
                key={faq.id}
                className={`bg-white dark:bg-[#0b1c3b] rounded-2xl border transition-all duration-300 ${
                  isOpen 
                    ? 'border-brand-green-600 shadow-md' 
                    : 'border-[#E5DFD5] dark:border-slate-800 hover:border-[#CFC6B8] dark:hover:border-slate-700 shadow-sm'
                }`}
              >
                {/* Accordion Header / Trigger Button */}
                <button
                  onClick={() => toggleOpen(faq.id)}
                  className="w-full flex items-center justify-between p-4 sm:p-5 text-left cursor-pointer transition-colors"
                >
                  <div className="flex items-start space-x-3">
                    <span className="font-heading font-bold text-stone-900 dark:text-white text-sm sm:text-base leading-snug">
                      {faq.question}
                    </span>
                  </div>
                  <span className={`ml-3 text-[10px] font-mono font-bold whitespace-nowrap px-2.5 py-0.5 rounded-full border transition-colors ${
                    isOpen 
                      ? 'bg-brand-green-50 dark:bg-emerald-950/60 border-brand-green-600 text-brand-green-700 dark:text-emerald-300' 
                      : 'bg-stone-100 dark:bg-slate-800 border-stone-200 dark:border-slate-700 text-stone-600 dark:text-slate-400'
                  }`}>
                    {isOpen ? '— COLLAPSE' : '+ EXPAND'}
                  </span>
                </button>

                {/* Accordion Body */}
                {isOpen && (
                  <div className="px-4 sm:px-5 pb-4 sm:pb-5 pt-1 border-t border-[#EDE7DD] dark:border-slate-800 text-stone-700 dark:text-slate-200 text-xs font-sans leading-relaxed font-light animate-fadeIn">
                    <div className="p-3.5 rounded-xl bg-[#FAF8F5] dark:bg-slate-900/60 border border-[#EBE5DB] dark:border-slate-800 space-y-1.5">
                      <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-brand-green-700 dark:text-brand-green-400 block">
                        OFFICIAL HUERI ADVISORY POSITION:
                      </span>
                      <p>{faq.answer}</p>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom Cross Reference */}
        <div className="text-center pt-2">
          <p className="text-[11px] text-stone-500 dark:text-slate-400 font-sans font-light">
            Have a project-specific inquiry not listed here? Connect with our Lead Experts via the proposal form above.
          </p>
        </div>

      </div>
    </section>
  );
}
