/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';

interface InternationalStandardsProps {
  onRequestProposal?: () => void;
}

export default function InternationalStandardsSection({}: InternationalStandardsProps) {
  const [activeTab, setActiveTab] = useState<'lenders' | 'voluntary' | 'statutory'>('lenders');

  const lenderStandards = [
    {
      institution: 'World Bank Group (WBG)',
      framework: 'Environmental & Social Framework (ESF)',
      standards: [
        'ESS1: Assessment and Management of Environmental and Social Risks',
        'ESS2: Labor and Working Conditions & Worker Protection',
        'ESS3: Resource Efficiency and Pollution Prevention and Management',
        'ESS4: Community Health, Safety, and Security',
        'ESS5: Land Acquisition, Restrictions on Land Use and Involuntary Resettlement',
        'ESS6: Biodiversity Conservation and Sustainable Management of Living Natural Resources',
        'ESS7: Indigenous Peoples / Sub-Saharan African Historically Underserved Communities',
        'ESS8: Cultural Heritage Protection & Management',
        'ESS9: Financial Intermediaries (FI) E&S Risk Systems',
        'ESS10: Stakeholder Engagement and Information Disclosure'
      ],
      tag: 'Multilateral Standard'
    },
    {
      institution: 'International Finance Corporation (IFC)',
      framework: 'Performance Standards on Environmental & Social Sustainability (2012)',
      standards: [
        'PS1: Assessment and Management of Environmental and Social Risks and Impacts',
        'PS2: Labor and Working Conditions',
        'PS3: Resource Efficiency and Pollution Prevention',
        'PS4: Community Health, Safety, and Security',
        'PS5: Land Acquisition and Involuntary Resettlement',
        'PS6: Biodiversity Conservation and Sustainable Management of Living Natural Resources',
        'PS7: Indigenous Peoples',
        'PS8: Cultural Heritage'
      ],
      tag: 'Private Sector Benchmark'
    },
    {
      institution: 'African Development Bank (AfDB)',
      framework: 'Integrated Safeguards System (ISS)',
      standards: [
        'OS1: Environmental and Social Assessment',
        'OS2: Involuntary Resettlement: Land Acquisition, Population Displacement and Compensation',
        'OS3: Biodiversity and Ecosystem Services',
        'OS4: Pollution Prevention and Control, Greenhouse Gases, Hazardous Materials and Resource Efficiency',
        'OS5: Labor Conditions, Health and Safety'
      ],
      tag: 'Pan-African Development'
    },
    {
      institution: 'Equator Principles Association',
      framework: 'Equator Principles IV (EP4)',
      standards: [
        'Principle 1-10: Review, Categorisation, Environmental and Social Assessment',
        'Climate Change Risk Assessment (Physical & Transition Risks)',
        'Human Rights Due Diligence & Free, Prior, and Informed Consent (FPIC)',
        'Independent Environmental and Social Monitoring & Reporting'
      ],
      tag: 'Project Finance Standard'
    }
  ];

  const voluntaryFrameworks = [
    {
      name: 'Global Reporting Initiative (GRI)',
      category: 'Sustainability Reporting',
      description: 'Universal standards and sector-specific disclosures for transparent corporate sustainability and impact reporting.'
    },
    {
      name: 'TCFD & ISSB (IFRS S1, S2)',
      category: 'Climate & Financial Risk',
      description: 'Governance, strategy, risk management, metrics and targets for physical and transition climate risks.'
    },
    {
      name: 'ISO 14001:2015',
      category: 'Environmental Management',
      description: 'International standard for Environmental Management Systems (EMS), life cycle perspective, and continual improvement.'
    },
    {
      name: 'ISO 45001:2018',
      category: 'Occupational Health & Safety',
      description: 'Global standard for occupational health and safety management systems, hazard elimination, and worker participation.'
    },
    {
      name: 'Voluntary Principles on Security & Human Rights (VPSHR)',
      category: 'Human Rights & Security',
      description: 'Risk assessment and human rights protocols governing public and private security deployments for infrastructure assets.'
    }
  ];

  const statutoryFrameworks = [
    {
      name: 'Environmental Management and Co-ordination Act (EMCA Cap 387)',
      authority: 'NEMA Kenya',
      scope: 'Principal statutory regime governing Environmental Impact Assessments (EIA), Environmental Audits (EA), and strategic assessments.'
    },
    {
      name: 'Occupational Safety and Health Act (OSHA 2007)',
      authority: 'DOSHS Kenya',
      scope: 'Workplace health, safety audits, risk assessments, fire audits, and hazardous workplace compliance.'
    },
    {
      name: 'Water Act 2016 & Water Resources Regulations',
      authority: 'Water Resources Authority (WRA)',
      scope: 'Water abstraction permits, effluent discharge licenses, and riparian reserve protection.'
    },
    {
      name: 'Land Act 2012 & National Land Commission',
      authority: 'NLC / Ministry of Lands',
      scope: 'Compulsory land acquisition, valuation guidelines, wayleaves, and resettlement legalities.'
    }
  ];

  return (
    <section className="bg-white dark:bg-[#041B44] text-slate-900 dark:text-slate-100 transition-colors font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12 space-y-6">

        <div className="text-left max-w-3xl space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003B95] dark:text-white tracking-tight">
            International Standards &amp; Statutory Frameworks
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-2xl leading-relaxed font-light">
            Bridging international multilateral financing requirements with African statutory compliance to ensure project compliance and sustainability alignment.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            onClick={() => setActiveTab('lenders')}
            className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'lenders'
                ? 'bg-[#003B95] text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Multilateral Lenders (DFIs)
          </button>

          <button
            onClick={() => setActiveTab('voluntary')}
            className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'voluntary'
                ? 'bg-[#003B95] text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Voluntary, ESG &amp; ISO
          </button>

          <button
            onClick={() => setActiveTab('statutory')}
            className={`px-3.5 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer ${
              activeTab === 'statutory'
                ? 'bg-[#003B95] text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            Statutory &amp; Regional Laws
          </button>
        </div>
      </div>

      <div className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {activeTab === 'lenders' && (
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 animate-fadeIn">
              {lenderStandards.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-white/25 pt-5 space-y-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold uppercase text-[#A7F3D0]">
                      {item.tag}
                    </span>
                  </div>

                  <div>
                    <h3 className="font-heading font-extrabold text-base sm:text-lg text-white">
                      {item.institution}
                    </h3>
                    <p className="text-[11px] font-mono font-semibold text-[#A7F3D0] mt-0.5">
                      {item.framework}
                    </p>
                  </div>

                  <ul className="space-y-1.5 text-xs text-emerald-50 pt-1">
                    {item.standards.map((std, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-[#A7F3D0] font-bold shrink-0">·</span>
                        <span>{std}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'voluntary' && (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8 animate-fadeIn">
              {voluntaryFrameworks.map((item, idx) => (
                <div
                  key={idx}
                  className="border-t border-white/25 pt-5 space-y-2"
                >
                  <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#A7F3D0] block">
                    {item.category}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white">
                    {item.name}
                  </h4>
                  <p className="text-xs text-emerald-50 font-sans leading-relaxed font-light">
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          )}

          {activeTab === 'statutory' && (
            <div className="grid md:grid-cols-2 gap-x-10 gap-y-8 animate-fadeIn">
              {statutoryFrameworks.map((law, idx) => (
                <div
                  key={idx}
                  className="border-t border-white/25 pt-5 space-y-2"
                >
                  <span className="text-[10px] font-mono font-bold uppercase text-[#A7F3D0] block">
                    {law.authority}
                  </span>
                  <h4 className="font-heading font-bold text-base text-white">
                    {law.name}
                  </h4>
                  <p className="text-xs text-emerald-50 font-sans leading-relaxed font-light">
                    {law.scope}
                  </p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
