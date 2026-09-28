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
  ShieldAlert, 
  Users, 
  ShieldCheck, 
  Compass, 
  Award, 
  ArrowRight, 
  CheckCircle2, 
  Download,
  HeartPulse,
  Droplet,
  Layers,
  GraduationCap,
  Sparkles,
  Scale,
  FileCheck
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
  const [activeCategory, setActiveCategory] = useState<string>('all');

  // Scoping Matrix Interactive State
  const [scopeSector, setScopeSector] = useState('energy');
  const [scopePhase, setScopePhase] = useState('planning');
  const [scopeLender, setScopeLender] = useState('nema-ifc');

  // Comprehensive Services Portfolio
  const comprehensiveServices = [
    {
      id: 'eia-esia',
      pillarId: 'service-pillar-1',
      title: 'Environmental & Social Assessment (EIA / ESIA / SEA / ESMF)',
      category: 'Statutory Clearances & Licencing',
      tag: 'EMCA Cap 387 & NEMA',
      image: photoAssets.eiaAssessment,
      icon: ShieldAlert,
      iconColor: 'text-emerald-600 dark:text-emerald-400',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
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
      tag: 'Land Rights & Resettlement',
      image: photoAssets.milestones.communityBaraza,
      icon: Users,
      iconColor: 'text-blue-600 dark:text-blue-400',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
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
      tag: 'NEMA Annual Auditing',
      image: photoAssets.lifecycleHero,
      icon: ShieldCheck,
      iconColor: 'text-amber-600 dark:text-amber-400',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
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
      tag: 'DOSHS OSHA 2007',
      image: photoAssets.siteConstructionMonitoring,
      icon: HeartPulse,
      iconColor: 'text-red-600 dark:text-red-400',
      badgeBg: 'bg-red-100 text-red-800 dark:bg-red-950 dark:text-red-300',
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
      tag: 'Climate Vulnerability & Carbon',
      image: photoAssets.renewableEnergy,
      icon: Compass,
      iconColor: 'text-teal-600 dark:text-teal-400',
      badgeBg: 'bg-teal-100 text-teal-800 dark:bg-teal-950 dark:text-teal-300',
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
      tag: 'Lake Victoria Basin & WRA',
      image: photoAssets.waterCatchment,
      icon: Droplet,
      iconColor: 'text-cyan-600 dark:text-cyan-400',
      badgeBg: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
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
      tag: 'World Bank ESF & IFC PS',
      image: photoAssets.partnershipsHero,
      icon: Award,
      iconColor: 'text-purple-600 dark:text-purple-400',
      badgeBg: 'bg-purple-100 text-purple-800 dark:bg-purple-950 dark:text-purple-300',
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
      tag: 'High-Resolution Drone GIS',
      image: photoAssets.milestones.droneMapping,
      icon: Layers,
      iconColor: 'text-indigo-600 dark:text-indigo-400',
      badgeBg: 'bg-indigo-100 text-indigo-800 dark:bg-indigo-950 dark:text-indigo-300',
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
      tag: 'ESHSRIM Certification',
      image: photoAssets.eshsrimTraining,
      icon: GraduationCap,
      iconColor: 'text-emerald-700 dark:text-emerald-400',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
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

  // Scroll to targeted pillar if navigated from external link
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

  // Scoping Matrix Calculation
  const calculateRequirements = () => {
    let deliverables: string[] = ['Comprehensive Project Report (CPR / NEMA)'];
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
    <div className="space-y-16 sm:space-y-24 pb-16 font-sans">
      
      {/* ========================================================
          1. COMPREHENSIVE SERVICES HERO HEADER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-green-100 text-brand-green-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-brand-green-600 dark:text-emerald-400" />
                HUERI LIMITED PRACTICE DISCIPLINES
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 dark:text-white leading-[1.15] tracking-tight">
                Our Comprehensive Advisory Services
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-700 dark:text-slate-200 leading-relaxed font-light">
              HUERI Limited provides full-spectrum environmental, social, occupational health, safety, and climate advisory services across Kenya and East Africa. As an accredited Firm of Experts, we support project developers, lenders, EPC contractors, and public agencies with rigorous statutory NEMA licencing, World Bank / IFC safeguards, workplace safety audits, and ecological stewardship.
            </p>

            {/* Quick Action CTA Bar */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestProposal()}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-brand-green-700 hover:bg-brand-green-600 active:bg-brand-green-800 text-white font-heading font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-green-700/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Advisory Proposal</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleGenerateBrochure}
                disabled={isGeneratingPDF}
                className="inline-flex items-center gap-2 px-5 py-3.5 bg-white dark:bg-slate-800 border border-stone-300 dark:border-slate-700 hover:border-emerald-600 text-stone-800 dark:text-slate-100 font-heading font-bold text-sm uppercase tracking-wider rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isGeneratingPDF ? 'Generating PDF...' : 'Download Services Brochure'}</span>
              </button>
            </div>
          </div>

          {/* Right Photographic Showcase */}
          <div className="lg:col-span-5">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img 
                src={photoAssets.servicesHero} 
                alt="HUERI Environmental Advisory Disciplines in Kenya" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700/50 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-stone-800 dark:text-white">Accredited Firm of Experts</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">EMCA Cap 387 Registered</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. COMPREHENSIVE SERVICES PORTFOLIO GRID
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
        
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
            STATUTORY LICENCING • SOCIAL SAFEGUARDS • AUDITS • ESG
          </span>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white">
            Comprehensive Practice Disciplines
          </h2>
          <p className="text-base text-stone-600 dark:text-slate-300 font-light leading-relaxed">
            Consolidated environmental, social, climate, and compliance advisory services engineered for international lender alignment and regulatory excellence across Africa.
          </p>
        </div>

        {/* Services Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {comprehensiveServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                id={service.pillarId}
                className="bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group scroll-mt-28"
              >
                {/* Photo Header */}
                <div className="relative h-52 sm:h-56 w-full overflow-hidden bg-slate-900">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  {/* Top Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-xs font-mono font-bold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {service.tag}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3.5 right-3.5 w-11 h-11 rounded-xl bg-white/95 dark:bg-slate-900/95 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                    <Icon className={`w-5 h-5 ${service.iconColor}`} />
                  </div>
                </div>

                {/* Body Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-brand-green-700 dark:text-emerald-400 block">
                      {service.category}
                    </span>
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-white leading-snug">
                      {service.title}
                    </h3>
                    <p className="text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
                      {service.description}
                    </p>
                  </div>

                  {/* Technical Deliverables Checklist */}
                  <div className="pt-4 border-t border-stone-100 dark:border-slate-700/60 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400 block">
                      Scope of Deliverables:
                    </span>
                    <div className="space-y-2">
                      {service.deliverables.map((item, dIdx) => (
                        <div key={dIdx} className="flex items-start gap-2.5 text-sm text-stone-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Regulatory Benchmark */}
                  <div className="pt-3 border-t border-stone-100 dark:border-slate-700/60">
                    <div className="flex items-center gap-1.5 text-xs font-mono text-stone-500 dark:text-slate-400">
                      <Scale className="w-3.5 h-3.5 text-stone-400 shrink-0" />
                      <span className="truncate">{service.standards}</span>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-4 border-t border-stone-100 dark:border-slate-700/60 flex items-center gap-2">
                    <button
                      onClick={() => onRequestProposal(service.title)}
                      className="flex-1 py-2.5 px-3.5 bg-brand-green-700 hover:bg-brand-green-600 active:bg-brand-green-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm text-center cursor-pointer"
                    >
                      Request Proposal
                    </button>
                    <button
                      onClick={() => handleOpenDetails(service.id)}
                      className="py-2.5 px-3.5 bg-stone-100 dark:bg-slate-700 hover:bg-stone-200 dark:hover:bg-slate-600 text-stone-700 dark:text-slate-200 font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-colors cursor-pointer"
                      title="View Detailed Scope & Case Studies"
                    >
                      Details →
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================
          3. INTERACTIVE PLANNING TOOL: SAFEGUARDS MATRIX
         ======================================================== */}
      <section id="scoping-matrix" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-28">
        <div className="rounded-3xl bg-[#07162C] text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl space-y-6">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
              INTERACTIVE PLANNING TOOL
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black">
              African Project Safeguards & Scoping Matrix
            </h3>
            <p className="text-base text-slate-300 font-light max-w-2xl leading-relaxed">
              Configure your project parameters below to determine statutory NEMA licencing requirements, lender deliverables, and estimated compliance timeframes.
            </p>
          </div>

          {/* Selectors */}
          <div className="grid md:grid-cols-3 gap-4">
            
            {/* Sector */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-300 block">
                Select Sector:
              </label>
              <select
                value={scopeSector}
                onChange={(e) => setScopeSector(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/30 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
              >
                <option value="energy">Energy & Clean Power (Solar/Wind/Grid)</option>
                <option value="transport">Transport & Corridors (Highways/Ports)</option>
                <option value="water">Water Resources & Sanitation (Dams/Irrigation)</option>
                <option value="housing">Urban Housing & Commercial Real Estate</option>
                <option value="agri">Agribusiness & Industrial Processing</option>
              </select>
            </div>

            {/* Lifecycle Phase */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block">
                Project Phase:
              </label>
              <select
                value={scopePhase}
                onChange={(e) => setScopePhase(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/30 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
              >
                <option value="planning">Feasibility & Pre-Construction</option>
                <option value="licensing">Statutory NEMA Permitting</option>
                <option value="construction">Active Construction & Resident Supervision</option>
                <option value="ops">Commercial Operations & Annual Auditing</option>
              </select>
            </div>

            {/* Lender Standard */}
            <div className="p-4 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-2">
              <label className="text-xs font-mono font-bold uppercase tracking-wider text-amber-300 block">
                Financing & Lender Framework:
              </label>
              <select
                value={scopeLender}
                onChange={(e) => setScopeLender(e.target.value)}
                className="w-full px-3 py-2 rounded-xl bg-slate-900 border border-white/30 text-xs font-mono text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
              >
                <option value="nema-only">Kenyan Statutory Only (NEMA EMCA Cap 387)</option>
                <option value="nema-ifc">NEMA + International Finance Corp (IFC PS1-8)</option>
                <option value="wb">World Bank Environmental & Social Framework (ESF)</option>
                <option value="afdb">African Development Bank (AfDB ISS)</option>
              </select>
            </div>

          </div>

          {/* Matrix Output */}
          <div className="p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/40 space-y-3.5">
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-3 border-b border-white/20">
              <div>
                <span className="text-xs font-mono text-emerald-300 font-bold uppercase tracking-wider block">
                  APPLICABLE GOVERNANCE BENCHMARK
                </span>
                <h4 className="font-heading font-bold text-base sm:text-lg text-white">
                  {scopingResult.standards}
                </h4>
              </div>
              <div className="text-right">
                <span className="text-xs font-mono text-slate-300 font-bold uppercase tracking-wider block">
                  ESTIMATED STATUTORY TIMELINE
                </span>
                <span className="font-mono font-bold text-emerald-400 text-sm sm:text-base">
                  {scopingResult.timeline}
                </span>
              </div>
            </div>

            <div className="space-y-2">
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider block font-bold">
                Mandatory Safeguards & Statutory Deliverables:
              </span>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {scopingResult.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-sm text-white bg-black/30 p-2.5 rounded-xl border border-white/10">
                    <span className="h-2 w-2 rounded-full bg-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================
          4. CORPORATE BROCHURE DOWNLOAD BANNER
         ======================================================== */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrochureBanner
          onGenerateBrochure={handleGenerateBrochure}
          isGeneratingPDF={isGeneratingPDF}
        />
      </section>

      {/* Service Detail Modal */}
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
