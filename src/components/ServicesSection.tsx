/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { initialServices } from '../server/seedData';
import { Service } from '../types';
import ServiceCard from './services/ServiceCard';
import ServiceDetailModal from './services/ServiceDetailModal';
import BrochureBanner from './services/BrochureBanner';
import { generateBrochurePDF } from '../utils/brochureGenerator';

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
  const [services, setServices] = useState<Service[]>(initialServices);
  const [selectedPillarId, setSelectedPillarId] = useState<string>(initialPillarId);
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);

  // Scoping Matrix Interactive State
  const [scopeSector, setScopeSector] = useState('energy');
  const [scopePhase, setScopePhase] = useState('planning');
  const [scopeLender, setScopeLender] = useState('nema-ifc');

  useEffect(() => {
    if (initialPillarId) {
      setSelectedPillarId(initialPillarId);
    }
  }, [initialPillarId]);

  useEffect(() => {
    fetch('/api/services')
      .then((res) => {
        if (!res.ok) {
          throw new Error(`HTTP error! status: ${res.status}`);
        }
        return res.json();
      })
      .then((data) => {
        if (Array.isArray(data) && data.length > 0) {
          setServices(data);
        }
      })
      .catch((err) => {
        console.warn('Using initial services fallback due to network or server state:', err);
      });
  }, []);

  // Practice Pillars
  const serviceSections = [
    { id: 'service-pillar-1', label: 'Statutory Licencing & ESIA', tag: 'Statutory Clearances', desc: 'EMCA Cap 387 EIA/ESIA, Strategic Environmental Assessments (SEA), and official approvals.' },
    { id: 'service-pillar-2', label: 'Social Safeguards & Resettlement', tag: 'Social Performance', desc: 'Resettlement Action Plans (RAP), comprehensive socio-economic census, asset valuation, livelihood restoration & barazas.' },
    { id: 'service-pillar-3', label: 'Climate Resilience & Ecology', tag: 'Climate & Ecology', desc: 'Climate vulnerability profiling, hydrological modeling, biodiversity baselines, and nature-based solutions.' },
    { id: 'service-pillar-4', label: 'Safety & Compliance Audits', tag: 'Audits & Safety', desc: 'Annual statutory NEMA audits, workplace occupational health & safety (OHS), and hazardous waste monitoring.' },
    { id: 'service-pillar-5', label: 'ESG & Lender Standards', tag: 'Lender Standards', desc: 'World Bank ESF, IFC Performance Standards, AfDB ISS, and lender Environmental & Social Due Diligence (ESDD).' },
    { id: 'service-pillar-6', label: 'ESHSRIM Procedures Training', tag: 'Capacity & Certification', desc: 'Professional and organizational capacity building on ESHSRIM procedures, hazard control, and compliance toolkits.' }
  ];

  const pillarCategoryMap: Record<string, string> = {
    'service-pillar-1': 'Statutory',
    'service-pillar-2': 'Social',
    'service-pillar-3': 'Climate',
    'service-pillar-4': 'Safety',
    'service-pillar-5': 'ESG',
    'service-pillar-6': 'Training'
  };

  const filteredServices = selectedPillarId === 'all'
    ? services
    : services.filter(s => s.practiceCategory?.toLowerCase().includes(pillarCategoryMap[selectedPillarId]?.toLowerCase() || ''));

  const handleOpenDetails = (service: Service) => {
    setSelectedService(service);
  };

  const handleCloseDetails = () => {
    setSelectedService(null);
  };

  const handleGenerateBrochure = () => {
    setIsGeneratingPDF(true);
    setTimeout(() => {
      generateBrochurePDF(services);
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
    <section id="services" className="py-8 sm:py-10 text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 className="font-heading font-black text-2xl sm:text-3xl lg:text-4xl text-stone-900 dark:text-white tracking-tight">
            Advisory Practice Pillars
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            HUERI provides integrated environmental, social, climate, and safety solutions across the complete project lifecycle—bridging statutory Kenyan requirements (NEMA) with international lender standards (World Bank, IFC, AfDB).
          </p>
        </div>

        {/* VIEW MODE 1: ALL PILLARS / PLANNING MATRIX */}
        {selectedPillarId === 'all' && (
          <div className="space-y-8 sm:space-y-10 animate-in fade-in duration-200">
            {/* STATUTORY & SAFEGUARDS SCOPING ESTIMATOR */}
            <div className="rounded-3xl bg-gradient-to-br from-[#0B1D38] via-[#071A38] to-[#0A2558] text-white p-6 sm:p-8 lg:p-10 border border-slate-700/80 shadow-xl space-y-6">
              <div className="space-y-1.5">
                <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
                  INTERACTIVE PLANNING TOOL
                </span>
                <h3 className="text-xl sm:text-2xl font-heading font-black">
                  African Project Safeguards & Scoping Matrix
                </h3>
                <p className="text-xs sm:text-sm text-slate-200 font-light max-w-2xl">
                  Configure your project parameters below to instantly determine statutory NEMA licencing requirements, lender deliverables, and estimated compliance timeframes.
                </p>
              </div>

              {/* Scoping Configurator Selectors */}
              <div className="grid md:grid-cols-3 gap-4">
                
                {/* Sector */}
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-300 block">
                    Select Sector:
                  </label>
                  <select
                    value={scopeSector}
                    onChange={(e) => setScopeSector(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-900 border border-white/30 text-[11px] font-mono text-white focus:outline-none focus:ring-2 focus:ring-emerald-400 cursor-pointer"
                  >
                    <option value="energy">Energy & Clean Power (Solar/Wind/Grid)</option>
                    <option value="transport">Transport & Corridors (Highways/Ports)</option>
                    <option value="water">Water Resources & Sanitation (Dams/Irrigation)</option>
                    <option value="housing">Urban Housing & Commercial Real Estate</option>
                    <option value="agri">Agribusiness & Industrial Processing</option>
                  </select>
                </div>

                {/* Lifecycle Phase */}
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-blue-300 block">
                    Project Phase:
                  </label>
                  <select
                    value={scopePhase}
                    onChange={(e) => setScopePhase(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-900 border border-white/30 text-[11px] font-mono text-white focus:outline-none focus:ring-2 focus:ring-blue-400 cursor-pointer"
                  >
                    <option value="planning">Feasibility & Pre-Construction</option>
                    <option value="licensing">Statutory NEMA Permitting</option>
                    <option value="construction">Active Construction & Resident Supervision</option>
                    <option value="ops">Commercial Operations & Annual Auditing</option>
                  </select>
                </div>

                {/* Lender Standard */}
                <div className="p-3.5 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 space-y-1.5">
                  <label className="text-[10px] font-mono font-bold uppercase tracking-wider text-amber-300 block">
                    Financing & Lender Framework:
                  </label>
                  <select
                    value={scopeLender}
                    onChange={(e) => setScopeLender(e.target.value)}
                    className="w-full px-3 py-1.5 rounded-xl bg-slate-900 border border-white/30 text-[11px] font-mono text-white focus:outline-none focus:ring-2 focus:ring-amber-400 cursor-pointer"
                  >
                    <option value="nema-only">Kenyan Statutory Only (NEMA EMCA Cap 387)</option>
                    <option value="nema-ifc">NEMA + International Finance Corp (IFC PS1-8)</option>
                    <option value="wb">World Bank Environmental & Social Framework (ESF)</option>
                    <option value="afdb">African Development Bank (AfDB ISS)</option>
                  </select>
                </div>

              </div>

              {/* Dynamic Matrix Output */}
              <div className="p-4 sm:p-5 rounded-2xl bg-white/10 backdrop-blur-md border border-emerald-400/40 space-y-3">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-2.5 border-b border-white/20">
                  <div>
                    <span className="text-[10px] font-mono text-emerald-300 font-bold uppercase tracking-wider block">
                      APPLICABLE GOVERNANCE BENCHMARK
                    </span>
                    <h4 className="font-heading font-bold text-sm sm:text-base text-white">
                      {scopingResult.standards}
                    </h4>
                  </div>
                  <div className="text-right">
                    <span className="text-[10px] font-mono text-slate-300 font-bold uppercase tracking-wider block">
                      ESTIMATED STATUTORY TIMELINE
                    </span>
                    <span className="font-mono font-bold text-emerald-400 text-xs sm:text-sm">
                      {scopingResult.timeline}
                    </span>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <span className="text-[10px] font-mono text-slate-300 uppercase tracking-wider block font-bold">
                    Mandatory Safeguards & Statutory Deliverables:
                  </span>
                  <div className="grid sm:grid-cols-2 gap-2">
                    {scopingResult.deliverables.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-white bg-black/30 p-2 rounded-xl border border-white/10">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Practice Portfolios Grid */}
            <div className="space-y-4">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-stone-900 dark:text-white">
                All Advisory Disciplines
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services.map((service, index) => (
                  <ServiceCard
                    key={service.id}
                    service={service}
                    index={index}
                    onOpenDetails={handleOpenDetails}
                  />
                ))}
              </div>
            </div>
          </div>
        )}

        {/* VIEW MODE 2: SPECIFIC SELECTED PILLAR */}
        {selectedPillarId !== 'all' && (
          <div className="space-y-6 sm:space-y-8 animate-in fade-in duration-200">
            <div className="border-b border-[#E5DFD5] dark:border-slate-800 pb-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
                FOCUSED PRACTICE SCOPE
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-stone-900 dark:text-white">
                {serviceSections.find(s => s.id === selectedPillarId)?.label || 'Practice Scope'}
              </h3>
            </div>

            {/* Service Practice Cards */}
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredServices.map((service, index) => (
                <ServiceCard
                  key={service.id}
                  service={service}
                  index={index}
                  onOpenDetails={handleOpenDetails}
                />
              ))}
            </div>
          </div>
        )}

        {/* Corporate Brochure Download Banner */}
        <BrochureBanner
          onGenerateBrochure={handleGenerateBrochure}
          isGeneratingPDF={isGeneratingPDF}
        />

      </div>

      {/* Service Detail Modal */}
      {selectedService && (
        <ServiceDetailModal
          service={selectedService}
          onClose={handleCloseDetails}
          onLeadSubmit={onLeadSubmit}
        />
      )}
    </section>
  );
}
