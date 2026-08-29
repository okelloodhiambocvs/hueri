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
import { 
  Download, 
  ShieldCheck, 
  Users, 
  Award, 
  FileCheck2, 
  Building, 
  Sparkles, 
  BookOpen, 
  Target, 
  Compass, 
  History, 
  Camera 
} from 'lucide-react';

interface AboutSectionProps {
  initialSection?: string;
  onNavigate?: (page: string, sectionId?: string) => void;
  onRequestProposal?: () => void;
}

export default function AboutSection({
  initialSection = 'all',
  onNavigate,
  onRequestProposal
}: AboutSectionProps) {
  const [selectedSection, setSelectedSection] = useState<string>(initialSection);

  useEffect(() => {
    if (initialSection) {
      setSelectedSection(initialSection);
    }
  }, [initialSection]);

  // Comprehensive Section options
  const sections = [
    { id: 'about-purpose', label: 'Who We Are (Purpose & Identity)', tag: 'Who We Are', icon: BookOpen, desc: 'Corporate charter, NEMA Licence F0026, identity & governance framework' },
    { id: 'about-leadership', label: 'Technical Team & Specialists', tag: 'Leadership', icon: Users, desc: 'Belinda Nyakinya, John Matthews Sande & Specialist Associate Roster' },
    { id: 'about-credentials', label: 'Credentials & Statutory Licences', tag: 'Credentials', icon: Award, desc: 'NEMA Firm Licence F0026, CR12, KRA Tax Compliance & County Permits' },
    { id: 'about-qa', label: 'Quality Assurance & QA/QC', tag: 'QA / QC', icon: FileCheck2, desc: 'Six-pillar review cycles, data traceability & statutory verification' },
    { id: 'about-governance', label: 'Governance, Coverage & Ethics', tag: 'Governance', icon: Building, desc: 'Governance hierarchy, pan-African coverage & anti-bribery policies' },
    { id: 'about-objectives', label: 'Strategic Objectives & Values', tag: 'What We Do', icon: Target, desc: 'Core institutional advisory objectives, practices & differentiators' },
    { id: 'about-values', label: 'Core Guiding Values', tag: 'Values', icon: Compass, desc: 'Ethics, transparency, inclusion & safety standards' },
    { id: 'about-milestones', label: 'Historic Milestones', tag: 'Milestones', icon: History, desc: 'Lakeside origins to national Kenyan practice' },
    { id: 'about-field', label: 'Field Operations Gallery', tag: 'Field Science', icon: Camera, desc: 'Limnological testing, community barazas & GIS drone surveys' }
  ];

  const handleSectionSelect = (sectionId: string) => {
    setSelectedSection(sectionId);
    window.scrollTo({ top: 180, behavior: 'smooth' });
  };

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
      
      {/* Sticky Compact Sub-Navigation Bar */}
      <div className="sticky top-20 z-30 bg-white/95 dark:bg-[#071a38]/95 backdrop-blur-md p-3 rounded-2xl border border-[#E5DFD5] dark:border-slate-800 shadow-md">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-brand-green-600 dark:bg-emerald-400 shrink-0" />
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-stone-800 dark:text-slate-200 whitespace-nowrap">
              INSTITUTIONAL DOSSIERS:
            </span>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto w-full lg:w-auto pb-1 lg:pb-0 scrollbar-thin">
            <button
              onClick={() => handleSectionSelect('all')}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                selectedSection === 'all'
                  ? 'bg-brand-green-700 text-white shadow-sm'
                  : 'bg-[#FAF8F5] dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 border border-[#E0D9CD] dark:border-slate-700'
              }`}
            >
              Overview
            </button>
            {sections.map(s => (
              <button
                key={s.id}
                onClick={() => handleSectionSelect(s.id)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
                  selectedSection === s.id
                    ? 'bg-brand-green-700 text-white shadow-sm'
                    : 'bg-[#FAF8F5] dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 border border-[#E0D9CD] dark:border-slate-700'
                }`}
              >
                {s.tag}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* VIEW MODE 1: CORPORATE MANDATE LANDING VIEW */}
      {selectedSection === 'all' && (
        <div className="space-y-8 sm:space-y-10 animate-in fade-in duration-200">
          
          {/* Executive Introductory Overview Block */}
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
                  <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and occupational safety consultancy firm incorporated in 2014, with collaboration roots dating back to 2007 in Kisumu and the Lake Victoria Basin. Operating under official National Environment Management Authority licence <strong>NEMA/ENVIS/ELi/F0026</strong>, HUERI delivers defensible environmental impact assessments, social safeguards, Resettlement Action Plans (RAP), and compliance monitoring for landmark capital investments across Kenya and East Africa.
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

            {/* 3 Core Capability Highlights */}
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
                Managing Director: Belinda Nyakinya • NEMA Lead Expert Reg #7718 • Kisumu Head Office
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

          {/* Dedicated Institutional Dossiers Section */}
          <div className="space-y-6">
            <div className="text-center max-w-2xl mx-auto space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-600 dark:text-emerald-400 block">
                INSTITUTIONAL DIRECTORY
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white">
                Institutional Profile Dossiers
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light">
                Select any dossier below to explore dedicated leadership profiles, corporate credentials, QA/QC protocols, or field operations.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
              {sections.map((sec) => {
                const IconComponent = sec.icon;
                return (
                  <div
                    key={sec.id}
                    onClick={() => handleSectionSelect(sec.id)}
                    className="p-6 rounded-2xl bg-white dark:bg-[#07162C] border border-stone-200 dark:border-slate-800 hover:border-brand-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-sm"
                  >
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-[10px] font-mono uppercase tracking-wider text-brand-green-700 dark:text-emerald-400 font-bold bg-brand-green-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-brand-green-600/20">
                          {sec.tag}
                        </span>
                        <div className="p-2 rounded-xl bg-[#FAF8F5] dark:bg-slate-800 text-brand-green-700 dark:text-emerald-400 group-hover:bg-brand-green-700 group-hover:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                      </div>

                      <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white group-hover:text-brand-green-600 dark:group-hover:text-emerald-400 transition-colors">
                        {sec.label}
                      </h3>

                      <p className="text-xs text-stone-600 dark:text-slate-300 leading-relaxed font-light">
                        {sec.desc}
                      </p>
                    </div>

                    <div className="pt-3 mt-3 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-brand-green-600 dark:text-emerald-400">
                      <span>Open Dossier</span>
                      <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      )}

      {/* VIEW MODE 2: SPECIFIC SECTION ONLY */}

      {/* 1. Purpose & Value Proposition */}
      {selectedSection === 'about-purpose' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-600 dark:text-emerald-400 block">
                WHO WE ARE • PURPOSE & IDENTITY
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight leading-tight">
                Our Purpose, Identity & Value Proposition
              </h2>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-sans leading-relaxed font-light">
                <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> is an established Kenyan environmental, social, climate, and safety consultancy firm incorporated in 2014 (NEMA Firm Licence: <strong>NEMA/ENVIS/ELi/F0026</strong>). HUERI has supported clients in obtaining statutory approvals, strengthening safeguards compliance, resolving project grievances, and aligning investments with applicable national and international lender requirements.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-4 pt-1">
              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Ground-to-Boardroom
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  Practical Local Realities
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  We bridge field-level community realities, biophysical surveys, and local regulatory dynamics directly with high-level institutional financier requirements.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Defensible Evidence
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  Auditable Findings
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  Every technical finding, baseline calculation, and stakeholder baraza record is backed by empirical verification and auditable documentation.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-2">
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 uppercase tracking-wider block">
                  Adaptive Advisory
                </span>
                <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  Project De-risking
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  We don’t just deliver reports; we anticipate statutory bottlenecks, design practical mitigation plans (C-ESMP), and ensure rapid project commencement.
                </p>
              </div>
            </div>

            {/* In-Page Navigation Buttons */}
            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('all')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Back to Overview
              </button>
              <button
                onClick={() => setSelectedSection('about-leadership')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Technical Team →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 2. Technical Leadership & Specialist Associate Roster */}
      {selectedSection === 'about-leadership' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutLeadership onRequestProposal={onRequestProposal} />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-purpose')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Who We Are
              </button>
              <button
                onClick={() => setSelectedSection('about-credentials')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Credentials & Registrations →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 3. Corporate Credentials & Statutory Registrations */}
      {selectedSection === 'about-credentials' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutCredentials />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-leadership')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Technical Team
              </button>
              <button
                onClick={() => setSelectedSection('about-qa')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Quality Assurance →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 4. Quality Assurance & Professional Standards */}
      {selectedSection === 'about-qa' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutQualityAssurance />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-credentials')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Credentials
              </button>
              <button
                onClick={() => setSelectedSection('about-governance')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Governance & Ethics →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 5. Governance, Geographic Coverage & Ethics */}
      {selectedSection === 'about-governance' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutGovernanceEthics />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-qa')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Quality Assurance
              </button>
              <button
                onClick={() => setSelectedSection('about-objectives')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Strategic Objectives →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 6. Strategic Objectives & Differentiators (What We Do) */}
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

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-governance')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Governance & Ethics
              </button>
              <button
                onClick={() => setSelectedSection('about-values')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Guiding Values →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 7. Core Values */}
      {selectedSection === 'about-values' && (
        <section className="animate-in fade-in duration-200 space-y-4">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutCoreValues />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-objectives')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Strategic Objectives
              </button>
              <button
                onClick={() => setSelectedSection('about-milestones')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Historic Milestones →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 8. Historic Milestones */}
      {selectedSection === 'about-milestones' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <AboutMilestones />

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-values')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Guiding Values
              </button>
              <button
                onClick={() => setSelectedSection('about-field')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Next: Field Operations Gallery →
              </button>
            </div>
          </div>
        </section>
      )}

      {/* 9. Field Operations Gallery */}
      {selectedSection === 'about-field' && (
        <section className="animate-in fade-in duration-200">
          <div className="bg-white dark:bg-[#07162C] rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 lg:p-10 shadow-lg space-y-6">
            <div className="max-w-3xl space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-600 dark:text-emerald-400 block">
                FIELD SCIENCE & OPERATIONS
              </span>
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
                    <div className="absolute top-3 left-3 bg-brand-blue-900/90 backdrop-blur-md text-white text-[9px] font-mono px-2.5 py-0.5 rounded-full border border-white/20">
                      {item.category}
                    </div>
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

            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex justify-between items-center">
              <button
                onClick={() => setSelectedSection('about-milestones')}
                className="text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400 hover:underline cursor-pointer"
              >
                ← Previous: Historic Milestones
              </button>
              <button
                onClick={() => setSelectedSection('all')}
                className="px-3.5 py-1.5 rounded-xl bg-brand-green-600 text-white font-mono font-bold text-[10px] uppercase tracking-wider hover:bg-brand-green-700 transition-colors cursor-pointer"
              >
                Return to Overview →
              </button>
            </div>
          </div>
        </section>
      )}

    </div>
  );
}
