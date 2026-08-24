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
      num: '01',
      id: 'service-pillar-1',
      title: 'Statutory Licencing & ESIA',
      desc: 'NEMA environmental and social impact assessments, Strategic Environmental Assessments (SEA), and official approvals.',
      tag: 'Statutory Clearances',
      color: 'emerald',
      bgHover: 'hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40',
      borderHover: 'hover:border-emerald-500',
      tagColor: 'text-emerald-700 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-950/60'
    },
    {
      num: '02',
      id: 'service-pillar-2',
      title: 'Social Safeguards & Resettlement',
      desc: 'Resettlement Action Plans (RAP), 100% socio-economic census, asset valuation, livelihood restoration & barazas.',
      tag: 'Social Performance',
      color: 'blue',
      bgHover: 'hover:bg-blue-50/80 dark:hover:bg-blue-950/40',
      borderHover: 'hover:border-blue-500',
      tagColor: 'text-blue-700 dark:text-blue-400 bg-blue-100 dark:bg-blue-950/60'
    },
    {
      num: '03',
      id: 'service-pillar-3',
      title: 'Climate Resilience & Ecology',
      desc: 'Climate vulnerability profiling, hydrological modeling, biodiversity baselines, and nature-based solutions.',
      tag: 'Climate & Ecology',
      color: 'teal',
      bgHover: 'hover:bg-teal-50/80 dark:hover:bg-teal-950/40',
      borderHover: 'hover:border-teal-500',
      tagColor: 'text-teal-700 dark:text-teal-400 bg-teal-100 dark:bg-teal-950/60'
    },
    {
      num: '04',
      id: 'service-pillar-4',
      title: 'Safety & Compliance Audits',
      desc: 'Annual statutory NEMA audits, workplace occupational health & safety (OHS), and hazardous waste monitoring.',
      tag: 'Audits & Safety',
      color: 'amber',
      bgHover: 'hover:bg-amber-50/80 dark:hover:bg-amber-950/40',
      borderHover: 'hover:border-amber-500',
      tagColor: 'text-amber-700 dark:text-amber-400 bg-amber-100 dark:bg-amber-950/60'
    },
    {
      num: '05',
      id: 'service-pillar-5',
      title: 'ESG & Lender Standards',
      desc: 'World Bank ESF, IFC Performance Standards, AfDB ISS, and lender Environmental & Social Due Diligence (ESDD).',
      tag: 'Lender Bankability',
      color: 'purple',
      bgHover: 'hover:bg-purple-50/80 dark:hover:bg-purple-950/40',
      borderHover: 'hover:border-purple-500',
      tagColor: 'text-purple-700 dark:text-purple-400 bg-purple-100 dark:bg-purple-950/60'
    }
  ];

  const previewPractices = [
    {
      id: 'service-pillar-1',
      category: 'statutory',
      title: 'Environmental & Social Assessment (EIA / ESIA / SEA / ESMF)',
      desc: 'Screening, scoping, impact matrices, and statutory NEMA clearance aligned with World Bank ESF and IFC PS1.',
      badge: 'Statutory & Safeguards',
      deliverables: ['NEMA EIA Licence', 'Comprehensive ESIA Report', 'Actionable C-ESMP'],
      image: photoAssets.services['eia-esia'],
      themeColor: 'emerald'
    },
    {
      id: 'service-pillar-2',
      category: 'safeguards',
      title: 'Resettlement Action Planning (RAP) & Livelihood Restoration',
      desc: 'Empathetic socio-economic census, asset valuation, livelihood restoration, and community baraza consultations.',
      badge: 'Social Safeguards',
      deliverables: ['Approved RAP Dossier', 'Valuation Schedules', 'GRM Committee Setup'],
      image: photoAssets.services['rap-livelihoods'],
      themeColor: 'blue'
    },
    {
      id: 'service-pillar-3',
      category: 'climate',
      title: 'Climate Resilience, Biodiversity & Natural Resources',
      desc: 'Empirical climate vulnerability profiling, GHG footprinting, hydrological surveys, and nature-based solutions.',
      badge: 'Climate & Ecology',
      deliverables: ['Climate Vulnerability Profile', 'Biodiversity Baseline', 'Water Risk Model'],
      image: photoAssets.services['climate-biodiversity'],
      themeColor: 'teal'
    },
    {
      id: 'service-pillar-5',
      category: 'esg',
      title: 'ESG & Corporate Sustainability Advisory',
      desc: 'ESG due diligence, double materiality assessments, ESMS design, and international sustainability disclosures.',
      badge: 'Sustainable Finance',
      deliverables: ['ESDD Audit Report', 'Corporate ESG Framework', 'IFC PS Gap Analysis'],
      image: photoAssets.services['esg-sustainability'],
      themeColor: 'purple'
    }
  ];

  const filteredPractices = activePracticeFilter === 'all'
    ? previewPractices
    : previewPractices.filter(p => p.category === activePracticeFilter);

  const previewSectors = [
    { name: 'Energy & Power', desc: 'Solar PV, Wind, Hydro, Geothermal & Transmission', img: photoAssets.sectors['energy-power'], badge: 'Renewables', theme: 'hover:border-emerald-500' },
    { name: 'Transport & Logistics', desc: 'Highways, Rail, Maritime Ports & Trade Corridors', img: photoAssets.sectors['transport-logistics'], badge: 'Corridors', theme: 'hover:border-blue-500' },
    { name: 'Water & Sanitation', desc: 'Dams, Boreholes, Irrigation & Catchment Basins', img: photoAssets.sectors['water-sanitation'], badge: 'Water Basins', theme: 'hover:border-teal-500' },
    { name: 'Urban Built Environment', desc: 'Housing, Special Economic Zones & Municipal Works', img: photoAssets.sectors['urban-built-env'], badge: 'Urban Centers', theme: 'hover:border-amber-500' },
    { name: 'Carbon & Nature Markets', desc: 'Article 6, REDD+, Blue Carbon & Green Bonds', img: photoAssets.sectors['carbon-nature-finance'], badge: 'Climate Finance', theme: 'hover:border-purple-500' }
  ];

  const featuredProjects = [
    {
      id: 'p-kdsp',
      title: 'Environmental & Social Safeguards Support (KDSP II)',
      client: 'State Department for Devolution',
      location: 'National (47 Counties), Kenya',
      year: '2025–Ongoing',
      badge: 'Public Sector Governance',
      image: photoAssets.projects['p-kdsp'],
      outcome: 'Standardized sub-project screening and safeguards compliance across 47 devolved county governments.'
    },
    {
      id: 'p-makasembo',
      title: 'Makasembo Estate Multi-Storey Housing RAP & EIA',
      client: 'Local Authorities Pension Trust (LAPFUND)',
      location: 'Kisumu City, Kenya',
      year: '2020–Ongoing',
      badge: 'Urban Resettlement',
      image: photoAssets.projects['p-makasembo'],
      outcome: 'Structured compassionate relocation with 100% grievance resolution and zero court injunctions.'
    },
    {
      id: 'p-flloca',
      title: 'FLLoCA Climate-Resilient Infrastructure Assessments',
      client: 'County Government of Siaya',
      location: 'Siaya County, Kenya',
      year: '2023–Ongoing',
      badge: 'Climate Resilience',
      image: photoAssets.projects['p-flloca'],
      outcome: 'Verified climate adaptation sub-projects, unlocking vital multilateral funding for local communities.'
    }
  ];

  return (
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans bg-[#FAF8F5] dark:bg-[#051329] transition-colors duration-300">
      
      {/* 1. High-Impact Photographic Hero Banner */}
      <Hero 
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
        onOpenPartnership={() => onOpenPartnership()}
        stats={stats}
      />

      {/* 2. What We Do at a Glance (5 Consolidated Pillars) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-8 sm:mb-10 space-y-2">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
            5 CORE ADVISORY PILLARS
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Integrated Advisory Practices
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 font-light leading-relaxed">
            Consolidated environmental, social, climate, and compliance advisory services engineered for bankability and regulatory excellence across Africa.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-5">
          {consolidatedPillars.map((p) => (
            <div 
              key={p.id}
              onClick={() => onNavigate('services', p.id)}
              className={`p-5 rounded-2xl bg-white dark:bg-slate-800/90 border border-[#E5DFD5] dark:border-slate-700/80 ${p.bgHover} ${p.borderHover} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-sm`}
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="h-7 w-7 rounded-lg bg-stone-100 dark:bg-slate-700 text-stone-900 dark:text-white font-mono text-xs font-bold flex items-center justify-center group-hover:scale-105 transition-transform">
                    {p.num}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider font-bold px-2 py-0.5 rounded-full ${p.tagColor}`}>
                    {p.tag}
                  </span>
                </div>
                <h3 className="font-heading font-bold text-sm sm:text-base text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors leading-snug">
                  {p.title}
                </h3>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                  {p.desc}
                </p>
              </div>
              <div className="pt-3 mt-3 border-t border-[#EDE7DD] dark:border-slate-700/80 flex items-center justify-between text-xs font-mono font-bold text-brand-green-700 dark:text-emerald-400">
                <span>Explore Scope</span>
                <span className="transform group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Dedicated About Us Section on Landing Page */}
      <AboutHomeSection 
        onNavigate={onNavigate}
        onRequestProposal={() => onRequestProposal()}
      />

      {/* 4. Interactive Practice Showcases */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
              Selected Advisory Disciplines
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-2xl">
              Photo dossiers of our statutory environmental assessments, resettlement frameworks, and sustainability portfolios.
            </p>
          </div>

          {/* Compact Filter Buttons matching Light Mode size */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-1 sm:pb-0">
            {['all', 'statutory', 'safeguards', 'climate', 'esg'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActivePracticeFilter(cat)}
                className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                  activePracticeFilter === cat
                    ? 'bg-brand-green-700 text-white shadow-sm'
                    : 'bg-white dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 border border-[#E0D9CD] dark:border-slate-700'
                }`}
              >
                {cat === 'all' ? 'All Practices' : cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {filteredPractices.map((practice) => (
            <div 
              key={practice.id}
              onClick={() => onNavigate('services', practice.id)}
              className="rounded-2xl overflow-hidden bg-white dark:bg-slate-800/90 border border-[#E5DFD5] dark:border-slate-700/80 hover:border-brand-green-600 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={practice.image} 
                    alt={practice.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-white bg-brand-blue-900/90 px-2.5 py-0.5 rounded-full border border-white/20">
                      {practice.badge}
                    </span>
                  </div>
                </div>

                <div className="p-4 space-y-2.5">
                  <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-2 leading-snug">
                    {practice.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed line-clamp-2">
                    {practice.desc}
                  </p>

                  <div className="pt-2 border-t border-[#EDE7DD] dark:border-slate-700 space-y-1">
                    <span className="text-[10px] font-mono font-bold uppercase text-stone-700 dark:text-slate-300 block">Core Outputs:</span>
                    <ul className="space-y-0.5 text-[11px] text-stone-600 dark:text-slate-400">
                      {practice.deliverables.slice(0, 2).map((d, i) => (
                        <li key={i} className="flex items-center gap-1.5">
                          <span className="h-1 w-1 rounded-full bg-brand-green-600" />
                          <span className="truncate">{d}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="p-4 pt-0">
                <div className="pt-2.5 border-t border-[#EDE7DD] dark:border-slate-700 flex items-center justify-between text-xs font-mono font-bold text-brand-green-700 dark:text-emerald-400">
                  <span>View Practice Dossier</span>
                  <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Featured African Assignments & Case Studies */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
          <div className="space-y-1.5">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
              PROVEN RESULTS
            </span>
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
              Featured Track Record Across Africa
            </h2>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-2xl">
              Real projects delivered with 100% statutory clearance, zero court injunctions, and full international bankability.
            </p>
          </div>
          
          <button
            onClick={() => onNavigate('about', 'about-milestones')}
            className="px-3.5 py-1.5 rounded-xl bg-white dark:bg-slate-800 border border-[#E0D9CD] dark:border-slate-700 text-[10px] font-mono font-bold text-brand-blue-900 dark:text-cyan-400 hover:border-brand-green-600 transition-all uppercase tracking-wider cursor-pointer hover:-translate-y-0.5 shrink-0"
          >
            View Historic Milestones →
          </button>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {featuredProjects.map((proj) => (
            <div 
              key={proj.id}
              className="rounded-2xl overflow-hidden bg-white dark:bg-[#0b1c3b] border border-[#E5DFD5] dark:border-slate-800 shadow-sm hover:shadow-xl hover:border-brand-green-600 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between group"
            >
              <div>
                <div className="relative h-48 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={proj.image} 
                    alt={proj.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 contrast-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
                  
                  <div className="absolute top-3 left-3">
                    <span className="text-[10px] font-mono font-bold tracking-wider text-white uppercase bg-emerald-700/95 px-2.5 py-0.5 rounded-full border border-white/20">
                      {proj.badge}
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[10px] font-mono text-emerald-300">
                    <span>{proj.location}</span>
                    <span className="text-white/90 font-bold">{proj.year}</span>
                  </div>
                </div>

                <div className="p-5 space-y-2">
                  <span className="text-[10px] font-mono text-brand-green-700 dark:text-emerald-400 font-bold block">
                    Client: {proj.client}
                  </span>
                  <h4 className="font-heading font-extrabold text-base text-stone-900 dark:text-white leading-snug group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors">
                    {proj.title}
                  </h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                    {proj.outcome}
                  </p>
                </div>
              </div>

              <div className="p-5 pt-0">
                <div className="pt-3 border-t border-[#EDE7DD] dark:border-slate-800 flex items-center justify-between text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400">
                  <span>Verified Statutory Delivery</span>
                  <span>100% Cleared</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Sectors Strip */}
      <section className="bg-white dark:bg-slate-900/80 py-10 sm:py-14 border-y border-[#E5DFD5] dark:border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <div className="space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-amber-700 dark:text-amber-400 block">
                PRIORITY INFRASTRUCTURE & ECONOMIC PILLARS
              </span>
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
                Serving Key African Sectors
              </h2>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-xl">
                Dedicated multidisciplinary advisory tailored to specific sector risks, engineering constraints, and statutory requirements.
              </p>
            </div>
            <button
              onClick={() => onNavigate('sectors')}
              className="px-3.5 py-1.5 bg-brand-green-700 hover:bg-brand-green-600 text-white text-[10px] font-mono font-bold uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer hover:-translate-y-0.5 shrink-0"
            >
              Explore All 10 Sectors →
            </button>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {previewSectors.map((s, idx) => (
              <div 
                key={idx} 
                onClick={() => onNavigate('sectors')}
                className={`rounded-2xl overflow-hidden bg-[#FAF8F5] dark:bg-slate-800 border border-[#E5DFD5] dark:border-slate-700 ${s.theme} hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer group flex flex-col justify-between shadow-sm`}
              >
                <div>
                  <div className="relative h-28 w-full overflow-hidden bg-slate-900">
                    <img 
                      src={s.img} 
                      alt={s.name} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter brightness-100 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                    
                    <span className="absolute top-2.5 left-2.5 text-[9px] font-mono font-bold text-white bg-black/60 backdrop-blur-sm px-1.5 py-0.5 rounded border border-white/20">
                      0{idx + 1}
                    </span>

                    <span className="absolute bottom-2 left-2.5 text-[9px] font-mono font-bold text-emerald-300">
                      {s.badge}
                    </span>
                  </div>

                  <div className="p-3.5 space-y-1">
                    <h4 className="font-heading font-bold text-xs text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors line-clamp-1">
                      {s.name}
                    </h4>
                    <p className="text-[11px] text-stone-600 dark:text-slate-300 font-light leading-relaxed line-clamp-2">
                      {s.desc}
                    </p>
                  </div>
                </div>

                <div className="p-3.5 pt-0">
                  <span className="text-[10px] font-mono font-bold text-brand-green-700 dark:text-emerald-400 group-hover:underline block pt-2 border-t border-[#EDE7DD] dark:border-slate-700">
                    View Sector →
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
