/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import AboutMilestones from './about/AboutMilestones';
import AboutCoreValues from './about/AboutCoreValues';
import AboutLeadership from './about/AboutLeadership';
import AboutCredentials from './about/AboutCredentials';
import AboutQualityAssurance from './about/AboutQualityAssurance';
import AboutGovernanceEthics from './about/AboutGovernanceEthics';
import photoAssets from '../utils/photoAssets';
import { generateInstitutionalProfilePDF } from '../utils/companyProfileGenerator';
import { Download } from 'lucide-react';

interface AboutSectionProps {
  initialSection?: string;
  onNavigate?: (page: string, sectionId?: string) => void;
  onRequestProposal?: () => void;
}

export default function AboutSection({
  initialSection = 'all',
  onRequestProposal
}: AboutSectionProps) {
  const [selectedSection, setSelectedSection] = useState<string>(initialSection);

  useEffect(() => {
    if (initialSection) {
      setSelectedSection(initialSection);
    }
  }, [initialSection]);

  // Strategic Objectives
  const strategicObjectives = [
    { title: 'Deliver consistently high-quality, evidence-based and ethically grounded advisory services.' },
    { title: 'Expand multidisciplinary capacity across infrastructure, energy, extractives, industry, natural resources, agriculture, water and social development.' },
    { title: 'Deepen alignment with applicable Kenyan requirements and internationally recognised environmental, social, health, safety and sustainability frameworks.' },
    { title: 'Build long-term partnerships with governments, development institutions, investors, engineering firms, international consultancies and specialist organisations.' },
    { title: 'Collaborate and partner with registered local experts, consultants, and national firms across African countries to co-deliver regional and in-country projects.' },
    { title: 'Deliver professional Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures training for individuals and organizations.' },
    { title: 'Strengthen digital data collection, GIS, spatial analysis, quality assurance, knowledge management and project delivery.' },
    { title: 'Develop emerging-sector capability while clearly distinguishing demonstrated corporate experience from prospective capability.' },
    { title: 'Strengthen organisational systems that support repeatable, scalable and auditable delivery.' },
    { title: 'Develop HUERI as a trusted African implementation and specialist partner for international organisations.' },
    { title: 'Create long-term value for clients, communities, partners and the environment.' }
  ];

  // Differentiators Table Data
  const differentiators = [
    {
      differentiator: 'African context + international alignment',
      clientValue: 'Practical knowledge of Kenyan and African development environments with an approach capable of responding to internationally informed environmental and social requirements.'
    },
    {
      differentiator: 'Pan-African in-country co-delivery model',
      clientValue: 'Strategic readiness to collaborate with vetted local experts and national consulting firms across African countries, ensuring full local regulatory alignment and in-country co-implementation.'
    },
    {
      differentiator: 'Integrated ESHS & ESHSRIM Training',
      clientValue: 'Environmental, social, resettlement, health and safety, climate, and specialized ESHSRIM procedures training delivered for individual and organizational teams.'
    },
    {
      differentiator: 'Lifecycle perspective',
      clientValue: 'Support from early screening and feasibility through assessment, financing, procurement, construction, operations, rehabilitation and closure.'
    },
    {
      differentiator: 'Community-centred delivery',
      clientValue: 'Stakeholder mapping, socioeconomic evidence, engagement, grievance mechanisms and inclusion can be integrated into project risk management.'
    },
    {
      differentiator: 'Implementation focus',
      clientValue: 'Plans can be translated into actions, indicators, responsibilities, schedules, evidence requirements and corrective actions.'
    },
    {
      differentiator: 'Scalable multidisciplinary teams',
      clientValue: 'Delivered through HUERI\'s multidisciplinary team and specialist technical associates, as required by the assignment.'
    },
    {
      differentiator: 'Partnership readiness',
      clientValue: 'HUERI can participate as prime consultant, specialist subconsultant, consortium member, joint-venture partner or local/regional implementation partner.'
    }
  ];

  // Field Operations Gallery
  const fieldGalleries = [
    {
      title: 'Structural Deck Works & ESHS Construction Oversight',
      location: 'Urban Building Projects, Western Kenya',
      category: 'Resident ESHS Supervision',
      image: photoAssets.siteConstructionMonitoring,
      desc: 'On-site resident engineering inspection of structural concrete deck reinforcement, rebar tying, fall protection, and worker safety during active multi-storey construction.'
    },
    {
      title: 'ESHSRIM Procedures Training & Capacity Building',
      location: 'Advisory Training Suites & Corporate Clients',
      category: 'Professional Training',
      image: photoAssets.eshsrimTraining,
      desc: 'Interactive workshop training sessions on Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures for individual practitioners and project teams.'
    },
    {
      title: 'Concrete Deck Reinforcement & Safety Audits',
      location: 'Commercial Real Estate Developments, Kenya',
      category: 'Site Safety Oversight',
      image: photoAssets.siteConcreteReinforcement,
      desc: 'Resident structural deck safety inspections, rebar grid alignment checks, formwork integrity verification, and occupational safety compliance enforcement.'
    },
    {
      title: 'Water Quality & Limnological Monitoring',
      location: 'Lake Victoria Catchment, Kisumu',
      category: 'Limnology & Wetlands',
      image: photoAssets.fieldScientists,
      desc: 'In-situ sampling of physical-chemical water indicators, dissolved oxygen, turbidity, and benthic macroinvertebrates.'
    },
    {
      title: 'Participatory Community Barazas & FPIC',
      location: 'Western Kenya & Rift Valley',
      category: 'Social Safeguards',
      image: photoAssets.milestones.communityBaraza,
      desc: 'Grassroots stakeholder mapping, public consultations under local leadership, and grievance redress mechanism onboarding.'
    },
    {
      title: 'Thermal Drone Aerial Mapping & Spatial GIS',
      location: 'Linear Infrastructure Corridors',
      category: 'Spatial Intelligence',
      image: photoAssets.milestones.droneMapping,
      desc: 'High-resolution drone orthomosaics, digital elevation models, and land-use change detection for corridor wayleaves.'
    },
    {
      title: 'Renewable Energy & Solar PV Environmental Oversight',
      location: 'East Africa Grid Corridors',
      category: 'Clean Energy Safeguards',
      image: photoAssets.renewableEnergy,
      desc: 'ESIA screening, bird/bat collision monitoring, and community land-lease safeguards for solar and wind developments.'
    },
    {
      title: 'Sustainable Infrastructure & ESMP Verification',
      location: 'National Highway & Bridge Projects',
      category: 'Civil Engineering ESHS',
      image: photoAssets.infrastructure,
      desc: 'Resident environmental supervision, borrow pit restoration oversight, erosion control, and contractor compliance audits.'
    },
    {
      title: 'Industrial Effluent & Wastewater Bio-filtration',
      location: 'Agro-processing & Manufacturing Parks',
      category: 'Pollution Control',
      image: photoAssets.milestones.waterTreatment,
      desc: 'Effluent treatment plant compliance audits, heavy metal testing, and constructed wetland polishing systems.'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10 pb-16 font-sans">

      {/* Purpose, Identity & Executive Overview */}
      {(selectedSection === 'all' || selectedSection === 'about-purpose') && (
        <section className="animate-in fade-in duration-200 space-y-8">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
              <div className="space-y-2 max-w-3xl">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-600 dark:text-emerald-400 block">
                  INSTITUTIONAL PROFILE • HOPE URBAN ENVIRONMENTAL AND RESEARCH INVESTMENTS LIMITED
                </span>
                <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight leading-tight">
                  Technically Credible Environmental & Social Advisory
                </h2>
                <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans font-light leading-relaxed">
                  <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and occupational safety consultancy firm incorporated in 2014, with collaboration roots dating back to 2007 in Kisumu and the Lake Victoria Basin. Operating as an officially registered <strong>NEMA Firm of Experts</strong>, HUERI delivers defensible environmental impact assessments, social safeguards, Resettlement Action Plans (RAP), and compliance monitoring for landmark capital investments across Kenya and East Africa.
                </p>
              </div>

              <button
                onClick={() => generateInstitutionalProfilePDF()}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-2xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-mono font-bold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-sm shrink-0 cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download Company Profile
              </button>
            </div>

            {/* Core Capability Highlights */}
            <div className="grid md:grid-cols-3 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Statutory & Permitting
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  Regulatory Compliance
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  Securing NEMA licences, EIA approvals, and annual compliance audits under EMCA Cap 387, ensuring complete legal and regulatory defensibility.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Lender Standards
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  International Alignment
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  Direct alignment with the World Bank Environmental and Social Framework (ESF), IFC Performance Standards (PS 1–8), and African Development Bank ISS.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Field Science
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  Empirical Evidence
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  In-situ limnological monitoring, drone GIS spatial mapping, and structured community barazas ensuring authentic grassroots social licence.
                </p>
              </div>
            </div>

            {/* Quick Action Bar */}
            <div className="pt-3 border-t border-stone-100 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <span className="text-[11px] font-mono text-stone-500 dark:text-slate-400">
                Managing Director: Belinda Nyakinya • NEMA Registered Lead Expert • Kisumu Head Office
              </span>
              {onRequestProposal && (
                <button
                  onClick={onRequestProposal}
                  className="px-3.5 py-1.5 bg-brand-green-600 hover:bg-brand-green-700 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
                >
                  Request Terms of Reference Proposal →
                </button>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Technical Leadership & Specialist Associate Roster */}
      {selectedSection === 'about-leadership' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutLeadership onRequestProposal={onRequestProposal} />
          </div>
        </section>
      )}

      {/* Corporate Credentials & Statutory Registrations */}
      {selectedSection === 'about-credentials' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutCredentials />
          </div>
        </section>
      )}

      {/* Quality Assurance & Professional Standards */}
      {selectedSection === 'about-qa' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutQualityAssurance />
          </div>
        </section>
      )}

      {/* Governance, Geographic Coverage & Ethics */}
      {selectedSection === 'about-governance' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutGovernanceEthics />
          </div>
        </section>
      )}

      {/* Strategic Objectives & Differentiators (What We Do) */}
      {selectedSection === 'about-objectives' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-600 dark:text-emerald-400 block">
                WHAT WE DO • STRATEGIC OBJECTIVES
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
                Corporate Objectives & Distinct Value Drivers
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans font-light leading-relaxed">
                HUERI provides integrated Environmental, Social, Health and Safety (ESHS) advisory across all project stages—from pre-feasibility screening to post-closure monitoring.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-3">
              {strategicObjectives.map((obj, idx) => (
                <div 
                  key={idx} 
                  className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 flex items-start space-x-2.5"
                >
                  <span className="w-2 h-2 rounded-full bg-brand-green-600 mt-1.5 shrink-0" />
                  <p className="text-xs text-stone-800 dark:text-slate-200 font-sans font-light leading-relaxed">
                    {obj.title}
                  </p>
                </div>
              ))}
            </div>

            {/* Differentiators Table */}
            <div className="space-y-3 pt-2">
              <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
                Institutional Differentiators
              </h3>
              <div className="overflow-x-auto rounded-xl border border-stone-200 dark:border-slate-800">
                <table className="w-full text-left text-xs">
                  <thead className="bg-[#FAF8F5] dark:bg-slate-900 border-b border-stone-200 dark:border-slate-800 font-mono uppercase text-brand-green-700 dark:text-emerald-400 text-[10px]">
                    <tr>
                      <th className="py-2.5 px-3.5 font-bold">Key Differentiator</th>
                      <th className="py-2.5 px-3.5 font-bold">Client & Project Value</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-stone-200 dark:divide-slate-800">
                    {differentiators.map((diff, idx) => (
                      <tr key={idx} className="hover:bg-brand-green-50/50 dark:hover:bg-slate-800/50 transition-colors">
                        <td className="py-2.5 px-3.5 font-heading font-bold text-stone-900 dark:text-white whitespace-nowrap text-[11px]">
                          {diff.differentiator}
                        </td>
                        <td className="py-2.5 px-3.5 text-stone-600 dark:text-slate-300 font-light leading-relaxed text-[11px]">
                          {diff.clientValue}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Core Values */}
      {selectedSection === 'about-values' && (
        <section className="animate-in fade-in duration-200 space-y-4">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutCoreValues />
          </div>
        </section>
      )}

      {/* Historic Milestones */}
      {selectedSection === 'about-milestones' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutMilestones />
          </div>
        </section>
      )}

      {/* Field Operations Gallery */}
      {selectedSection === 'about-field' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <div className="max-w-3xl space-y-2">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
                In-Situ Field Scientific & Community Engagement Operations
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                Empirical baseline monitoring, public barazas, and spatial analysis conducted across Kenya and East Africa.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {fieldGalleries.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl overflow-hidden bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm group flex flex-col justify-between"
                >
                  <div className="relative h-44 w-full overflow-hidden bg-slate-950">
                    <img 
                      src={item.image} 
                      alt={item.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter brightness-100 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="p-4 space-y-1.5 flex-grow flex flex-col justify-between">
                    <div>
                      <h4 className="font-heading font-bold text-xs sm:text-sm text-stone-900 dark:text-white group-hover:text-brand-green-600 dark:group-hover:text-emerald-400 transition-colors">
                        {item.title}
                      </h4>
                      <span className="text-[10px] font-mono text-emerald-600 dark:text-emerald-400 block mt-0.5">
                        {item.location}
                      </span>
                      <p className="text-xs text-stone-600 dark:text-slate-300 font-light mt-1.5 leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
