/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface InternationalStandardsProps {
  onRequestProposal?: () => void;
}

export default function InternationalStandardsSection({ onRequestProposal }: InternationalStandardsProps) {
  const [activeTab, setActiveTab] = useState<'lenders' | 'voluntary' | 'statutory'>('lenders');

  const lenderStandards = [
    {
      institution: "World Bank Group (WBG)",
      framework: "Environmental & Social Framework (ESF)",
      standards: [
        "ESS1: Assessment and Management of Environmental and Social Risks",
        "ESS2: Labor and Working Conditions & Worker Protection",
        "ESS3: Resource Efficiency and Pollution Prevention and Management",
        "ESS4: Community Health, Safety, and Security",
        "ESS5: Land Acquisition, Restrictions on Land Use and Involuntary Resettlement",
        "ESS6: Biodiversity Conservation and Sustainable Management of Living Natural Resources",
        "ESS7: Indigenous Peoples / Sub-Saharan African Historically Underserved Communities",
        "ESS8: Cultural Heritage Protection & Management",
        "ESS9: Financial Intermediaries (FI) E&S Risk Systems",
        "ESS10: Stakeholder Engagement and Information Disclosure"
      ],
      tag: "Multilateral Standard"
    },
    {
      institution: "International Finance Corporation (IFC)",
      framework: "Performance Standards on Environmental & Social Sustainability (2012)",
      standards: [
        "PS1: Assessment and Management of Environmental and Social Risks and Impacts",
        "PS2: Labor and Working Conditions",
        "PS3: Resource Efficiency and Pollution Prevention",
        "PS4: Community Health, Safety, and Security",
        "PS5: Land Acquisition and Involuntary Resettlement",
        "PS6: Biodiversity Conservation and Sustainable Management of Living Natural Resources",
        "PS7: Indigenous Peoples",
        "PS8: Cultural Heritage"
      ],
      tag: "Private Sector Benchmark"
    },
    {
      institution: "African Development Bank (AfDB)",
      framework: "Integrated Safeguards System (ISS)",
      standards: [
        "OS1: Environmental and Social Assessment",
        "OS2: Involuntary Resettlement: Land Acquisition, Population Displacement and Compensation",
        "OS3: Biodiversity and Ecosystem Services",
        "OS4: Pollution Prevention and Control, Greenhouse Gases, Hazardous Materials and Resource Efficiency",
        "OS5: Labor Conditions, Health and Safety"
      ],
      tag: "Pan-African Development"
    },
    {
      institution: "Equator Principles Association",
      framework: "Equator Principles IV (EP4)",
      standards: [
        "Principle 1-10: Review, Categorisation, Environmental and Social Assessment",
        "Climate Change Risk Assessment (Physical & Transition Risks)",
        "Human Rights Due Diligence & Free, Prior, and Informed Consent (FPIC)",
        "Independent Environmental and Social Monitoring & Reporting"
      ],
      tag: "Project Finance Standard"
    }
  ];

  const voluntaryFrameworks = [
    {
      name: "Global Reporting Initiative (GRI)",
      category: "Sustainability Reporting",
      description: "Universal standards and sector-specific disclosures for transparent corporate sustainability and impact reporting."
    },
    {
      name: "TCFD & ISSB (IFRS S1, S2)",
      category: "Climate & Financial Risk",
      description: "Governance, strategy, risk management, metrics and targets for physical and transition climate risks."
    },
    {
      name: "ISO 14001:2015",
      category: "Environmental Management",
      description: "International standard for Environmental Management Systems (EMS), life cycle perspective, and continual improvement."
    },
    {
      name: "ISO 45001:2018",
      category: "Occupational Health & Safety",
      description: "Global standard for occupational health and safety management systems, hazard elimination, and worker participation."
    },
    {
      name: "Voluntary Principles on Security & Human Rights (VPSHR)",
      category: "Human Rights & Security",
      description: "Risk assessment and human rights protocols governing public and private security deployments for infrastructure assets."
    }
  ];

  const statutoryFrameworks = [
    {
      name: "Environmental Management and Co-ordination Act (EMCA Cap 387)",
      authority: "NEMA Kenya",
      scope: "Principal statutory regime governing Environmental Impact Assessments (EIA), Environmental Audits (EA), and strategic assessments."
    },
    {
      name: "Occupational Safety and Health Act (OSHA 2007)",
      authority: "DOSHS Kenya",
      scope: "Workplace health, safety audits, risk assessments, fire audits, and hazardous workplace compliance."
    },
    {
      name: "Water Act 2016 & Water Resources Regulations",
      authority: "Water Resources Authority (WRA)",
      scope: "Water abstraction permits, effluent discharge licenses, and riparian reserve protection."
    },
    {
      name: "Land Act 2012 & National Land Commission",
      authority: "NLC / Ministry of Lands",
      scope: "Compulsory land acquisition, valuation guidelines, wayleaves, and resettlement legalities."
    }
  ];

  return (
    <section className="py-8 sm:py-10 bg-white dark:bg-[#07162C] text-stone-900 dark:text-slate-100 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-600 dark:text-brand-green-400 block">
            Global Compliance & Safeguard Architectures
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
            International Standards & Statutory Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Bridging international multilateral financing requirements with African statutory compliance to ensure project bankability and sustainable operation.
          </p>
        </div>

        {/* Tab Navigation - matching light mode toggle size */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          <button
            onClick={() => setActiveTab('lenders')}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'lenders'
                ? 'bg-brand-blue-900 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            Multilateral Lenders (DFIs)
          </button>

          <button
            onClick={() => setActiveTab('voluntary')}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'voluntary'
                ? 'bg-brand-blue-900 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            Voluntary, ESG & ISO
          </button>

          <button
            onClick={() => setActiveTab('statutory')}
            className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
              activeTab === 'statutory'
                ? 'bg-brand-blue-900 text-white shadow-sm'
                : 'bg-gray-100 dark:bg-slate-800 text-gray-700 dark:text-slate-300 hover:bg-gray-200 dark:hover:bg-slate-700'
            }`}
          >
            Statutory & Regional Laws
          </button>
        </div>

        {/* Tab 1: Lender Standards */}
        {activeTab === 'lenders' && (
          <div
            className="grid md:grid-cols-2 gap-4 sm:gap-5 animate-fadeIn transition-all duration-300"
          >
            {lenderStandards.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-[#0b1c3b] p-5 sm:p-6 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-brand-green-50 dark:bg-emerald-950/60 text-brand-green-700 dark:text-emerald-300 border border-brand-green-200 dark:border-emerald-800">
                      {item.tag}
                    </span>
                    <span className="text-[10px] font-mono text-brand-blue-900 dark:text-blue-300 font-bold">
                      BENCHMARK
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base sm:text-lg text-gray-900 dark:text-white mb-0.5">
                    {item.institution}
                  </h3>
                  <p className="text-[11px] font-mono font-semibold text-brand-blue-900 dark:text-blue-300 mb-3">
                    {item.framework}
                  </p>

                  <ul className="space-y-1.5 text-xs text-gray-600 dark:text-slate-300">
                    {item.standards.map((std, i) => (
                      <li key={i} className="flex items-start gap-1.5">
                        <span className="text-brand-green-600 dark:text-brand-green-400 font-bold shrink-0">•</span>
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 2: Voluntary Frameworks */}
        {activeTab === 'voluntary' && (
          <div
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5 animate-fadeIn transition-all duration-300"
          >
            {voluntaryFrameworks.map((item, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-[#0b1c3b] p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-brand-gold-600 dark:text-amber-400 block mb-1">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    {item.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Tab 3: Statutory Frameworks */}
        {activeTab === 'statutory' && (
          <div
            className="grid md:grid-cols-2 gap-4 sm:gap-5 animate-fadeIn transition-all duration-300"
          >
            {statutoryFrameworks.map((law, idx) => (
              <div 
                key={idx}
                className="bg-gray-50 dark:bg-[#0b1c3b] p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span className="text-[9px] font-mono font-bold uppercase px-2 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                      {law.authority}
                    </span>
                  </div>
                  <h4 className="font-heading font-bold text-base text-gray-900 dark:text-white mb-1.5">
                    {law.name}
                  </h4>
                  <p className="text-xs text-gray-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                    {law.scope}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

      </div>
    </section>
  );
}
