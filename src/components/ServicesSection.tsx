/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import photoAssets from '../utils/photoAssets';
import { generateBrochurePDF } from '../utils/brochureGenerator';
import { initialServices } from '../server/seedData';
import { Service } from '../types';
import ServiceDetailModal from './services/ServiceDetailModal';
import BrochureBanner from './services/BrochureBanner';
import {
  ArrowRight,
  CheckCircle2,
  Download,
  Scale
} from 'lucide-react';

interface ServicesSectionProps {
  initialPillarId?: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit?: (lead: any) => void;
}

export default function ServicesSection({
  initialPillarId = 'all',
  onNavigate,
  onRequestProposal,
  onLeadSubmit = () => {}
}: ServicesSectionProps) {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Scoping Matrix Interactive State
  const [scopeSector, setScopeSector] = useState('energy');
  const [scopePhase, setScopePhase] = useState('planning');
  const [scopeLender, setScopeLender] = useState('nema-ifc');

  const comprehensiveServices = [
    {
      id: 'eia-esia',
      pillarId: 'service-pillar-1',
      title: 'Environmental & Social Assessment (EIA / ESIA / SEA / ESMF)',
      category: 'Statutory Clearances & Licencing',
      image: photoAssets.eiaAssessment,
      description: 'Comprehensive screening, scoping, baseline investigations, impact significance matrices, and Contractor Environmental and Social Management Plans (C-ESMP) engineered to secure statutory NEMA licences and regional environmental clearances.',
      deliverables: [
        'NEMA Project Reports (CPR / SPR) & Comprehensive EIA Study Dossiers',
        'Strategic Environmental Assessments (SEA) for Masterplans',
        'Environmental & Social Management Frameworks (ESMF)',
        'Contractor C-ESMP Specifications & Compliance Schedules'
      ],
      standards: 'Kenyan EMCA Cap 387, EIA/EA Regulations 2003 & World Bank ESS1'
    },
    {
      id: 'rap-livelihoods',
      pillarId: 'service-pillar-2',
      title: 'Land Acquisition, Resettlement Action Plans (RAP) & Livelihoods',
      category: 'Social Safeguards & Land Rights',
      image: photoAssets.milestones.communityBaraza,
      description: 'Systematic land acquisition frameworks, cadastral corridor overlays, household socio-economic surveys, replacement cost asset valuations with licensed valuers, and sustainable livelihood restoration planning.',
      deliverables: [
        'Approved Resettlement Action Plans (RAP, ARAP & RPF)',
        'Cadastral Property Census & Entitlement Matrices',
        'Livelihood Restoration & Vulnerability Support Plans',
        'Participatory Public Barazas & Grievance Redress (GRM) Registers'
      ],
      standards: 'Kenyan Constitution Art. 40, World Bank ESS5 & IFC PS5'
    },
    {
      id: 'env-compliance-audits',
      pillarId: 'service-pillar-3',
      title: 'Statutory Environmental Compliance & Annual Audits',
      category: 'Statutory Audits & Monitoring',
      image: photoAssets.lifecycleHero,
      description: 'Annual statutory NEMA environmental compliance audits for operating industrial, commercial, and energy facilities, evaluating ongoing operational impacts, waste management, effluent discharge, and Corrective Action Plans (CAP).',
      deliverables: [
        'Annual Statutory NEMA Environmental Audit Reports',
        'Environmental Compliance Monitoring & Gap Analyses',
        'Effluent Discharge Licence (EDL) Technical Submissions',
        'Actionable Corrective Action Plans (CAP) with Milestones'
      ],
      standards: 'EMCA Cap 387 Section 68 & NEMA Environmental Audit Guidelines'
    },
    {
      id: 'ohs-safety',
      pillarId: 'service-pillar-3',
      title: 'Occupational & Community Health and Safety (OHS / DOSHS)',
      category: 'Health, Safety & Environment',
      image: photoAssets.siteConstructionMonitoring,
      description: 'Directorate of Occupational Safety and Health Services (DOSHS) statutory workplace audits, Hazard Identification and Risk Assessments (HIRA), fire safety audits, and resident on-site ESHS construction safety monitoring.',
      deliverables: [
        'DOSHS Statutory Workplace Safety Audits',
        'Fire Safety & Workplace Risk Assessments (HIRA)',
        'Construction Resident ESHS Supervision & Toolbox Protocols',
        'Site Emergency Preparedness & Incident Response Plans'
      ],
      standards: 'Occupational Safety and Health Act (OSHA 2007) & ILO Conventions'
    },
    {
      id: 'climate-resilience',
      pillarId: 'service-pillar-4',
      title: 'Climate Change Vulnerability, Carbon & Ecology',
      category: 'Climate & Ecological Resilience',
      image: photoAssets.renewableEnergy,
      description: 'In-depth climate risk and vulnerability assessments (CRVA), hydrological flood modeling, greenhouse gas (GHG) footprinting, biodiversity baselines, and nature-based solutions for infrastructure resilience.',
      deliverables: [
        'Climate Risk & Vulnerability Assessments (CRVA)',
        'Greenhouse Gas (GHG) Accounting & Decarbonization Plans',
        'Critical Habitat Screening & Biodiversity Action Plans (BAP)',
        'Ecosystem-Based Adaptation & Catchment Resilience Models'
      ],
      standards: 'Kenya Climate Change Act, World Bank ESS6 & TCFD Framework'
    },
    {
      id: 'hydro-water',
      pillarId: 'service-pillar-4',
      title: 'Water Resources, Aquatic Ecology & Catchment Management',
      category: 'Hydrology & Freshwater Baselines',
      image: photoAssets.waterCatchment,
      description: 'Hydrogeological surveys, water quality sampling, Lake Victoria basin aquatic ecosystem assessments, water abstraction permitting with the Water Resources Authority (WRA), and riparian buffer protection.',
      deliverables: [
        'Hydrogeological Survey Reports & Groundwater Modeling',
        'Surface & Ground Water Quality Analytical Baselines',
        'Water Resources Authority (WRA) Abstraction Permitting',
        'Wetland Delineation & Riparian Ecosystem Conservation Plans'
      ],
      standards: 'Kenyan Water Act 2016 & Lake Victoria Basin Commission Protocols'
    },
    {
      id: 'esdd-esg',
      pillarId: 'service-pillar-5',
      title: 'Lender Safeguards (World Bank, IFC, AfDB) & ESG Due Diligence',
      category: 'International Finance Standards',
      image: photoAssets.partnershipsHero,
      description: 'Independent Environmental and Social Due Diligence (ESDD) for syndicate lenders, gap analyses against the World Bank ESF and IFC Performance Standards, and formulation of bankable Environmental and Social Action Plans (ESAP).',
      deliverables: [
        'Independent Lender Environmental & Social Due Diligence (ESDD)',
        'World Bank ESF (ESS1-10) & IFC PS (PS1-8) Alignment Reviews',
        'Bankable Environmental & Social Action Plans (ESAP)',
        'Equator Principles IV Compliance Certifications'
      ],
      standards: 'World Bank ESF, IFC Performance Standards 1-8, AfDB ISS & Equator Principles'
    },
    {
      id: 'gis-drone',
      pillarId: 'service-pillar-4',
      title: 'Drone Mapping, Spatial Analytics & Corridor GIS',
      category: 'Geospatial Engineering',
      image: photoAssets.milestones.droneMapping,
      description: 'High-resolution aerial corridor photogrammetry, orthomosaic generation, Digital Elevation Models (DEM), wayleave GIS mapping for linear infrastructure, and aerial site monitoring throughout project execution.',
      deliverables: [
        'Centimeter-Accurate Aerial Orthomosaics & DEMs',
        'Wayleave & Right-of-Way (RoW) Cadastral Overlays',
        'Corridor Multi-Criteria Alignment Suitability Models',
        'Time-Series Drone Construction & Revegetation Monitoring'
      ],
      standards: 'KCAA Drone Regulations & International Photogrammetric Standards'
    },
    {
      id: 'eshsrim-training',
      pillarId: 'service-pillar-5',
      title: 'ESHSRIM Procedures Training & Institutional Capacity Building',
      category: 'Capacity Building & Training',
      image: photoAssets.eshsrimTraining,
      description: 'Hands-on training in Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures, providing contractors, resident engineers, and public officers with actionable compliance toolkits.',
      deliverables: [
        'Tailored Corporate ESHSRIM Procedures Manuals',
        'Contractor Site Supervisors & Safeguards Officers Training',
        'Incident Reporting, HIRA & Root-Cause Analysis Modules',
        'Accredited Compliance Certificates & Toolkits'
      ],
      standards: 'EMCA Cap 387, OSHA 2007 & International Good Industry Practice (GIIP)'
    }
  ];

  useEffect(() => {
    if (initialPillarId && initialPillarId !== 'all') {
      setTimeout(() => {
        const el = document.getElementById(initialPillarId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 150);
    }
  }, [initialPillarId]);

  const handleOpenDetails = (seedId: string) => {
    const found = initialServices.find(s => s.id === seedId) || initialServices[0];
    setSelectedService(found);
  };

  const handleGenerateBrochure = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      generateBrochurePDF(initialServices);
      setIsGeneratingPDF(false);
    }, 600);
  };

  const calculateRequirements = () => {
    const deliverables: string[] = ['Comprehensive Project Report (CPR / NEMA)'];
    let timeline = '4–8 Weeks';
    let standards = 'NEMA EMCA Cap 387';

    if (scopeLender === 'nema-ifc' || scopeLender === 'wb') {
      deliverables.push('International ESIA Dossier Aligned with IFC PS1-8');
      deliverables.push('Environmental & Social Management Plan (C-ESMP)');
      timeline = '8–16 Weeks';
      standards = 'NEMA + World Bank ESF / IFC Performance Standards';
    }

    if (scopeSector === 'energy' || scopeSector === 'transport') {
      deliverables.push('Stakeholder Engagement Plan (SEP) & Grievance Redress (GRM)');
      deliverables.push('Resettlement Action Plan (RAP / Livelihood Restoration)');
    }

    if (scopeSector === 'water' || scopeSector === 'agri') {
      deliverables.push('Hydrological Baseline & Water Resource Assessment');
      deliverables.push('Biodiversity & Critical Habitat Screening');
    }

    if (scopePhase === 'construction' || scopePhase === 'ops') {
      deliverables.push('Annual Environmental & Compliance Audit');
      deliverables.push('Workplace Occupational Health & Safety (DOSHS) Inspection');
      timeline = '2–4 Weeks';
    }

    return { deliverables, timeline, standards };
  };

  const scopingResult = calculateRequirements();

  return (
    <div className="space-y-20 sm:space-y-24 font-sans">

      {/* 1. Services Hero Header — Clean Split Layout (No Pill Badge, Clean Photo) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#003B95] dark:text-white leading-[1.12] tracking-tight">
              Our Comprehensive Advisory Services
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-light">
              HUERI Limited provides full-spectrum environmental, social, occupational health, safety, and climate advisory services across Kenya and East Africa. As an accredited Firm of Experts, we support project developers, lenders, EPC contractors, and public agencies with rigorous statutory NEMA licencing, World Bank / IFC safeguards, workplace safety audits, and ecological stewardship.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestProposal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <span>Request Advisory Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleGenerateBrochure}
                disabled={isGeneratingPDF}
                className="inline-flex items-center gap-2 px-5 py-3.5 border border-slate-300 dark:border-slate-700 hover:border-[#003B95] dark:hover:border-[#38BDF8] text-[#003B95] dark:text-slate-100 font-heading font-bold text-sm uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80]" />
                <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download Services Brochure'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={photoAssets.servicesHero}
                alt="HUERI Environmental Advisory Disciplines in Kenya"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>Accredited Firm of Experts</span>
              <span className="text-[#006B22] dark:text-[#4ADE80] font-bold">EMCA Cap 387 Registered</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Comprehensive Services Portfolio Grid — Open Editorial Grid (No Card Blocks, Clean Photos) */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006B22] dark:text-[#4ADE80] block">
            STATUTORY LICENCING • SOCIAL SAFEGUARDS • AUDITS • ESG
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white">
            Comprehensive Practice Disciplines
          </h2>
          <p className="text-base text-slate-600 dark:text-slate-300 font-light leading-relaxed">
            Consolidated environmental, social, climate, and compliance advisory services engineered for international lender alignment and regulatory excellence across Africa.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-slate-200 dark:border-slate-800 pt-10">
          {comprehensiveServices.map((service) => (
            <div
              key={service.id}
              id={service.pillarId}
              className="flex flex-col justify-between group scroll-mt-28 border-b border-slate-200 dark:border-slate-800 pb-8"
            >
              <div className="space-y-4">
                <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-3">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
                    {service.category}
                  </span>
                  <h3 className="font-heading font-bold text-lg sm:text-xl text-[#003B95] dark:text-white leading-snug">
                    {service.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Scope of Deliverables
                  </span>
                  <div className="space-y-1.5">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                        <span className="leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4 mt-5 border-t border-slate-100 dark:border-slate-800 space-y-3">
                <div className="flex items-center gap-1.5 text-xs font-mono text-slate-500 dark:text-slate-400">
                  <Scale className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  <span className="truncate">{service.standards}</span>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => onRequestProposal(service.title)}
                    className="flex-1 py-2.5 px-3.5 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Request Proposal
                  </button>
                  <button
                    onClick={() => handleOpenDetails(service.id)}
                    className="py-2.5 px-3.5 border border-slate-300 dark:border-slate-700 hover:border-[#003B95] dark:hover:border-[#38BDF8] text-[#003B95] dark:text-slate-200 font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
                    title="View Detailed Scope & Case Studies"
                  >
                    Details →
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Interactive Planning Tool: Safeguards Matrix — Full-Width Band (No Card Box) */}
      <section id="scoping-matrix" className="bg-[#041B44] dark:bg-[#061E4A] text-white py-14 sm:py-18 scroll-mt-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <div className="space-y-2 border-b border-white/15 pb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] block">
              INTERACTIVE PLANNING TOOL
            </span>
            <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
              African Project Safeguards &amp; Scoping Matrix
            </h3>
            <p className="text-sm sm:text-base text-blue-100 font-light max-w-2xl leading-relaxed">
              Configure your project parameters below to determine statutory NEMA licencing requirements, lender deliverables, and estimated compliance timeframes.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="space-y-2">
              <label htmlFor="scope-sector-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#4ADE80] block">
                Select Sector
              </label>
              <select
                id="scope-sector-select"
                value={scopeSector}
                onChange={(e) => setScopeSector(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#06183A] border border-white/25 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-[#4ADE80] cursor-pointer"
              >
                <option value="energy">Energy &amp; Clean Power (Solar/Wind/Grid)</option>
                <option value="transport">Transport &amp; Corridors (Highways/Ports)</option>
                <option value="water">Water Resources &amp; Sanitation (Dams/Irrigation)</option>
                <option value="housing">Urban Housing &amp; Commercial Real Estate</option>
                <option value="agri">Agribusiness &amp; Industrial Processing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-phase-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#38BDF8] block">
                Project Phase
              </label>
              <select
                id="scope-phase-select"
                value={scopePhase}
                onChange={(e) => setScopePhase(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#06183A] border border-white/25 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-[#38BDF8] cursor-pointer"
              >
                <option value="planning">Feasibility &amp; Pre-Construction</option>
                <option value="licensing">Statutory NEMA Permitting</option>
                <option value="construction">Active Construction &amp; Resident Supervision</option>
                <option value="ops">Commercial Operations &amp; Annual Auditing</option>
              </select>
            </div>

            <div className="space-y-2">
              <label htmlFor="scope-lender-select" className="text-xs font-mono font-bold uppercase tracking-wider text-[#4ADE80] block">
                Financing &amp; Lender Framework
              </label>
              <select
                id="scope-lender-select"
                value={scopeLender}
                onChange={(e) => setScopeLender(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg bg-[#06183A] border border-white/25 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-[#4ADE80] cursor-pointer"
              >
                <option value="nema-only">Kenyan Statutory Only (NEMA EMCA Cap 387)</option>
                <option value="nema-ifc">NEMA + International Finance Corp (IFC PS1-8)</option>
                <option value="wb">World Bank Environmental &amp; Social Framework (ESF)</option>
                <option value="afdb">African Development Bank (AfDB ISS)</option>
              </select>
            </div>
          </div>

          <div className="border-t border-white/15 pt-6 space-y-5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-white/15">
              <div>
                <span className="text-xs font-mono text-[#4ADE80] font-bold uppercase tracking-wider block">
                  APPLICABLE GOVERNANCE BENCHMARK
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {scopingResult.standards}
                </h4>
              </div>
              <div className="sm:text-right">
                <span className="text-xs font-mono text-blue-200 font-bold uppercase tracking-wider block">
                  ESTIMATED STATUTORY TIMELINE
                </span>
                <span className="font-mono font-bold text-[#4ADE80] text-sm sm:text-base">
                  {scopingResult.timeline}
                </span>
              </div>
            </div>

            <div className="space-y-3">
              <span className="text-xs font-mono text-blue-200 uppercase tracking-wider block font-bold">
                Mandatory Safeguards &amp; Statutory Deliverables:
              </span>
              <div className="grid sm:grid-cols-2 gap-3">
                {scopingResult.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2.5 text-sm text-white py-1.5 border-b border-white/10">
                    <span className="text-[#4ADE80] font-bold">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Corporate Brochure Download Banner */}
      <BrochureBanner
        onGenerateBrochure={handleGenerateBrochure}
        isGeneratingPDF={isGeneratingPDF}
      />

      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={() => setSelectedService(null)}
          onLeadSubmit={onLeadSubmit}
        />
      )}

    </div>
  );
}
