/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import Hero from '../Hero';
import AboutHomeSection from '../AboutHomeSection';
import photoAssets from '../../utils/photoAssets';

interface HomePageProps {
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (scope?: string) => void;
  onOpenPartnership: (model?: string) => void;
  stats?: any;
}

export default function HomePage({
  onNavigate,
  onRequestProposal,
  onOpenPartnership,
  stats
}: HomePageProps) {
  const [activePracticeFilter, setActivePracticeFilter] = useState<string>('all');

  const consolidatedPillars = [
    {
      id: 'service-pillar-1',
      num: '01',
      title: 'Environmental Impact Assessment',
      desc: 'Environmental and social impact assessments, strategic assessments, and project approvals.',
    },
    {
      id: 'service-pillar-2',
      num: '02',
      title: 'Social Safeguards & Resettlement',
      desc: 'Resettlement Action Plans (RAP), socio-economic census, asset valuation, livelihood restoration & barazas.',
    },
    {
      id: 'service-pillar-3',
      num: '03',
      title: 'Climate Resilience & Ecology',
      desc: 'Climate vulnerability profiling, hydrological modeling, biodiversity baselines, and nature-based solutions.',
    },
    {
      id: 'service-pillar-4',
      num: '04',
      title: 'Safety & Compliance Audits',
      desc: 'Annual environmental compliance audits, workplace occupational health & safety (OHS), and waste monitoring.',
    },
    {
      id: 'service-pillar-5',
      num: '05',
      title: 'ESG & Lender Standards',
      desc: 'World Bank ESF, IFC Performance Standards, AfDB ISS, and lender Environmental & Social Due Diligence (ESDD).',
    }
  ];

  const previewPractices = [
    {
      id: 'eia-esia',
      category: 'statutory',
      title: 'Environmental Impact Assessment',
      desc: 'Screening, scoping, impact studies, and environmental management plans aligned with regulatory and lender standards.',
      deliverables: ['EIA & ESIA Study Reports', 'Environmental Management Plans'],
      image: photoAssets.services['eia-esia']
    },
    {
      id: 'rap-livelihoods',
      category: 'safeguards',
      title: 'Resettlement Action Plans & Livelihoods',
      desc: 'Socio-economic census, asset valuation, livelihood restoration, and community baraza consultations.',
      deliverables: ['Approved RAP Dossiers', 'Valuation & Entitlement Schedules'],
      image: photoAssets.services['rap-livelihoods']
    },
    {
      id: 'climate-resilience',
      category: 'climate',
      title: 'Climate Change & Ecology',
      desc: 'Climate vulnerability profiling, GHG footprinting, hydrological surveys, and nature-based solutions.',
      deliverables: ['Climate Vulnerability Profiles', 'Biodiversity & Water Models'],
      image: photoAssets.services['climate-biodiversity']
    },
    {
      id: 'esdd-esg',
      category: 'esg',
      title: 'ESG & Lender Due Diligence',
      desc: 'ESG due diligence, materiality assessments, ESMS design, and sustainability disclosures.',
      deliverables: ['ESDD Audit Reports', 'Corporate ESG Frameworks'],
      image: photoAssets.services['esg-sustainability']
    }
  ];

  const filteredPractices = activePracticeFilter === 'all'
    ? previewPractices
    : previewPractices.filter(p => p.category === activePracticeFilter);

  const previewSectors = [
    { name: 'Energy & Power', desc: 'Solar PV, Wind, Hydro, Geothermal & Transmission', img: photoAssets.sectors['energy-power'] },
    { name: 'Transport & Logistics', desc: 'Highways, Rail, Maritime Ports & Trade Corridors', img: photoAssets.sectors['transport-logistics'] },
    { name: 'Water & Sanitation', desc: 'Dams, Boreholes, Irrigation & Catchment Basins', img: photoAssets.sectors['water-sanitation'] },
    { name: 'Urban Built Environment', desc: 'Housing, Special Economic Zones & Municipal Works', img: photoAssets.sectors['urban-built-env'] },
    { name: 'Carbon & Nature Markets', desc: 'Article 6, REDD+, Blue Carbon & Green Bonds', img: photoAssets.sectors['carbon-nature-finance'] }
  ];

  const featuredProjects = [
    {
      id: 'p-wema-housing',
      title: 'Multi-Storey Residential Housing Development ESIA',
      client: 'Wema Magharibi Ltd',
      role: 'Lead EIA Consultant Firm',
      location: 'Kisumu Urban Centre, Kenya',
      year: '2024–2025',
      status: 'Licence obtained',
      evidenceSummary: 'Approved ESIA Study & Licence',
      image: photoAssets.projects['p-wema-housing'],
      outcome: 'Formulated comprehensive ESIA study report, civil stormwater plans, and secured Environmental Clearance Licence.'
    },
    {
      id: 'p-makasembo',
      title: 'Makasembo Estate Multi-Storey Housing RAP & EIA',
      client: 'Local Authorities Pension Trust (LAPFUND)',
      role: 'Lead Environmental & Social Safeguards Consultant',
      location: 'Kisumu City, Kenya',
      year: '2020–Present',
      status: 'Ongoing',
      evidenceSummary: 'RAP Technical Dossier & Valuation Schedules',
      image: photoAssets.projects['p-makasembo'],
      outcome: 'Formulated Resettlement Action Plan (RAP), socio-economic census, asset valuation schedules, and structured community baraza engagement.'
    },
    {
      id: 'p-structural-monitoring',
      title: 'High-Rise Structural Concrete & OHS Safety Oversight',
      client: 'Regional Urban Developers Consortium',
      role: 'Lead EHS & Construction Supervision Consultant',
      location: 'Western Kenya Region',
      year: '2024–Present',
      status: 'Active Supervision',
      evidenceSummary: 'Site Safety Audit Registers & C-ESMP Logs',
      image: photoAssets.projects['p-structural-monitoring'],
      outcome: 'Provided real-time contractor environmental, social, health and safety (ESHSRIM) supervision, deck safety audits, and worker PPE compliance.'
    },
    {
      id: 'p-flloca',
      title: 'FLLoCA Climate-Resilient Infrastructure Assessments',
      client: 'County Government of Siaya',
      role: 'Environmental Safeguards & Screening Consultant',
      location: 'Siaya County, Kenya',
      year: '2023–Present',
      status: 'Ongoing',
      evidenceSummary: 'Sub-Project Screening Registers & ESMPs',
      image: photoAssets.projects['p-flloca'],
      outcome: 'Conducted environmental screenings, community consultation barazas, and site-specific ESMPs for local climate adaptation infrastructure.'
    }
  ];

  return (
    <div className="space-y-10 sm:space-y-12 font-sans bg-white dark:bg-[#041B44] transition-colors duration-300">

      {/* 1. High-Impact Photographic Hero Banner */}
      <Hero
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
        onOpenPartnership={() => onOpenPartnership()}
        stats={stats}
      />

      {/* 2. Integrated Advisory Practices — Clean Open Columns without Underlines */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6 space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Integrated Advisory Practices
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Consolidated environmental, social, climate, and compliance advisory services engineered for international lender alignment and regulatory excellence across Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 pt-2">
          {consolidatedPillars.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => onNavigate('services', p.id)}
              className="text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
            >
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold text-slate-400 dark:text-slate-400 block">
                  {p.num}
                </span>
                <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="pt-3 mt-3 flex items-center gap-2 text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                <span>Explore Scope</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </button>
          ))}
        </div>
      </section>

      {/* 3. About Us Band on Landing Page */}
      <AboutHomeSection
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
      />

      {/* 4. Selected Advisory Disciplines — Clean Editorial Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Selected Advisory Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-2xl">
              Explore our environmental assessments, resettlement frameworks, climate services, and ESG advisory.
            </p>
          </div>

          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'statutory', 'safeguards', 'climate', 'esg'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePracticeFilter(cat)}
                className={`px-3 py-1.5 rounded-lg text-[10px] font-mono font-bold uppercase tracking-wider transition-colors cursor-pointer whitespace-nowrap shrink-0 ${
                  activePracticeFilter === cat
                    ? 'bg-[#003B95] text-white'
                    : 'text-slate-600 dark:text-slate-300 hover:text-[#003B95] dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800'
                }`}
              >
                {cat === 'all' ? 'All Practices' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredPractices.map((practice) => (
            <div
              key={practice.id}
              onClick={() => onNavigate('service-detail', practice.id)}
              className="cursor-pointer flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={practice.image}
                    alt={practice.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <h4 className="font-heading font-bold text-base text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors leading-snug">
                    {practice.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {practice.desc}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 flex items-center justify-between text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                <span>Details</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Selected Environmental and Social Assignments */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-6 gap-4">
          <div className="space-y-1">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Selected Environmental and Social Assignments
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-2xl">
              Selected track record of EIA clearances, resettlement planning (RAP), climate vulnerability assessments, and compliance audits in Kenya.
            </p>
          </div>

          <button
            onClick={() => onNavigate('about', 'about-milestones')}
            className="text-xs font-mono font-bold text-[#003B95] dark:text-[#38BDF8] hover:text-[#006B22] dark:hover:text-[#4ADE80] transition-colors uppercase tracking-wider cursor-pointer shrink-0"
          >
            View Historic Milestones →
          </button>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredProjects.map((proj) => (
            <div
              key={proj.id}
              className="flex flex-col justify-between group"
            >
              <div className="space-y-3.5">
                <div className="h-48 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-[11px] font-mono text-slate-500 dark:text-slate-400">
                    <span>{proj.location}</span>
                    <span aria-hidden="true">·</span>
                    <span className="font-bold text-[#003B95] dark:text-[#38BDF8]">{proj.year}</span>
                  </div>

                  <div className="space-y-0.5 text-[11px] font-mono">
                    <span className="text-[#006B22] dark:text-[#4ADE80] font-bold block">
                      Client: {proj.client}
                    </span>
                    <span className="text-slate-500 dark:text-slate-400 block">
                      Role: {proj.role}
                    </span>
                  </div>

                  <h4 className="font-heading font-extrabold text-base text-[#003B95] dark:text-white leading-snug">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-3 flex items-center justify-between text-[11px] font-mono text-[#006B22] dark:text-[#4ADE80] font-bold">
                <span className="truncate pr-2">{proj.evidenceSummary}</span>
                <span className="shrink-0 text-slate-500 dark:text-slate-400 font-normal">{proj.status}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Dedicated Leadership Experience (KDSP II) */}
        <div className="mt-8 bg-slate-50 dark:bg-[#06183A] p-6 rounded-xl space-y-2.5">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h4 className="font-heading font-bold text-base sm:text-lg text-[#003B95] dark:text-white">
              National Environmental and Social Safeguards Support – KDSP II
            </h4>
            <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
              2025–Present
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
            <strong className="font-semibold text-slate-900 dark:text-white">Contractual Context:</strong> Delivered by HUERI&apos;s Founder and Managing Director, Belinda Nyakinya, in her individual professional capacity as an Environmental Safeguards Specialist within the National Programme Coordination Unit (and not as a HUERI Limited corporate contract).
          </p>

          <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-300 font-light leading-relaxed">
            Technical advisory support encompasses coordinating environmental and social safeguards screening tools, technical backstopping for county Project Implementation Units (PIUs), and sub-project ESMP reviews across 47 devolved county governments.
          </p>
        </div>
      </section>

      {/* 6. Strategic Consortia & International Teaming */}
      <section className="bg-[#003B95] dark:bg-[#061E4A] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 items-center gap-8">
            <div className="lg:col-span-8 space-y-3">
              <h3 className="font-heading font-black text-2xl sm:text-3xl text-white tracking-tight">
                Partner with HUERI on African Infrastructure, Energy &amp; Safeguards Tenders
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-sans font-light leading-relaxed max-w-3xl">
                We regularly partner with international engineering firms, multilateral prime contractors, and regional developers as a trusted local delivery co-lead. We bring experienced lead experts, World Bank ESF / IFC PS proficiency, 47-county mobilization capacity, and established community networks.
              </p>
              <div className="grid sm:grid-cols-2 gap-2 pt-1 text-xs text-blue-100">
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Joint Venture &amp; Consortia Submissions
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> In-Country Safeguards Delivery Partner
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Master Service Agreements (MSA)
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-[#4ADE80]">✓</span> Rapid Technical Proposal Backstopping
                </div>
              </div>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3 justify-center lg:pl-8">
              <button
                onClick={() => onOpenPartnership ? onOpenPartnership('International Prime Contractor & Consortium Teaming') : onNavigate('partnerships')}
                className="w-full py-3 px-5 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Propose Joint Venture / Teaming →
              </button>
              <button
                onClick={() => onNavigate('partnerships')}
                className="w-full py-2.5 px-4 rounded-lg bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Explore Partnership Models
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Sectors Strip */}
      <section className="py-4 sm:py-6 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Serving Key African Sectors
              </h2>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-xl">
                Dedicated multidisciplinary advisory tailored to specific sector risks, engineering constraints, and project requirements.
              </p>
            </div>
            <button
              onClick={() => onNavigate('sectors')}
              className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] uppercase tracking-wider cursor-pointer shrink-0"
            >
              Explore All Sectors →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {previewSectors.map((s, idx) => (
              <div
                key={idx}
                onClick={() => onNavigate('sectors')}
                className="cursor-pointer group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="h-32 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={s.img}
                      alt={s.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-1">
                    <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] transition-colors">
                      {s.name}
                    </h4>
                    <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <span className="text-[11px] font-mono font-bold text-[#006B22] dark:text-[#4ADE80] block pt-2">
                  View Sector →
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
