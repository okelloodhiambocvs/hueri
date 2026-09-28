/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import photoAssets from '../utils/photoAssets';
import { generateInstitutionalProfilePDF } from '../utils/companyProfileGenerator';
import { 
  Download, 
  CheckCircle2, 
  MapPin, 
  FileCheck, 
  ShieldCheck, 
  HardHat, 
  Award, 
  Building2, 
  Users, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface AboutSectionProps {
  initialSection?: string;
  onNavigate?: (page: string, sectionId?: string) => void;
  onRequestProposal?: () => void;
}

export default function AboutSection({
  initialSection = 'all',
  onNavigate = () => {},
  onRequestProposal = () => {}
}: AboutSectionProps) {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownloadProfile = () => {
    setIsDownloading(true);
    setTimeout(() => {
      generateInstitutionalProfilePDF();
      setIsDownloading(false);
    }, 600);
  };

  // 1. Problem Cards (Exact Nyumbani Greens 4-card grid structure)
  const problemCards = [
    {
      title: 'REGULATORY DELAYS',
      subtitle: 'Statutory Red Tape',
      description: 'Complex NEMA licencing, uncoordinated public reviews, and delayed permits stall project launches and escalate financing costs.',
      image: photoAssets.eiaAssessment,
      alt: 'NEMA ESIA statutory licencing and regulatory review in Kenya'
    },
    {
      title: 'SOCIAL & RESETTLEMENT',
      subtitle: 'Community Friction',
      description: 'Inadequately consulted communities and poorly executed Resettlement Action Plans (RAP) trigger land disputes, legal challenges, and work stoppages.',
      image: photoAssets.milestones.communityBaraza,
      alt: 'Community baraza stakeholder consultation'
    },
    {
      title: 'ECOLOGICAL IMPACTS',
      subtitle: 'Catchment Stress',
      description: 'Wetland loss, unchecked industrial effluent, and climate vulnerabilities degrade natural resources and jeopardize facility resilience.',
      image: photoAssets.waterCatchment,
      alt: 'Lake Victoria wetland catchment and environmental conservation'
    },
    {
      title: 'LENDER COMPLIANCE GAPS',
      subtitle: 'Financing Roadblocks',
      description: 'International financiers (World Bank, IFC, AfDB) require stringent ESF and ESG standards that standard local reports fail to satisfy.',
      image: photoAssets.milestones.infrastructureEsmp,
      alt: 'Infrastructure environmental and social management plan compliance'
    }
  ];

  // 2. Approach Bullet Checklist
  const approachPoints = [
    'Registered NEMA Firm of Experts led by certified Lead Specialists',
    'Harmonized compliance: Kenyan EMCA Cap 387 & World Bank / IFC standards',
    'Grassroots community engagement, participatory barazas & FPIC',
    'Continuous site monitoring, resident ESHS supervision & safety audits'
  ];

  // 3. Solution Numbered Steps (Exact Nyumbani Greens 3-step solution cards)
  const solutionSteps = [
    {
      number: '1',
      title: 'Baseline Scoping & Field Surveys',
      description: 'We conduct exhaustive on-the-ground ecological surveys, drone corridor mapping, socio-economic censuses, and participatory community barazas to establish defensible baselines.',
      image: photoAssets.milestones.droneMapping,
      icon: MapPin,
      badgeColor: 'bg-emerald-600 text-white'
    },
    {
      number: '2',
      title: 'ESIA & Safeguards Architecture',
      description: 'We prepare robust Environmental & Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), and C-ESMP management plans that secure prompt NEMA and lender approvals.',
      image: photoAssets.lifecycleHero,
      icon: FileCheck,
      badgeColor: 'bg-blue-600 text-white'
    },
    {
      number: '3',
      title: 'Compliance Audits & Resident Oversight',
      description: 'We deliver statutory annual NEMA audits, DOSHS workplace safety inspections, ESHSRIM procedures training, and resident ESHS site monitoring throughout construction and operations.',
      image: photoAssets.siteConstructionMonitoring,
      icon: HardHat,
      badgeColor: 'bg-amber-600 text-white'
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-24 pb-16 font-sans">
      
      {/* ========================================================
          1. SHORTER OVERVIEW (NYUMBANI GREENS STYLE HERO)
         ======================================================== */}
      <section id="about-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-4">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text Column */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-green-100 text-brand-green-800 dark:bg-emerald-950/80 dark:text-emerald-300">
                <Sparkles className="w-3.5 h-3.5 text-brand-green-600 dark:text-emerald-400" />
                ABOUT HUERI LIMITED
              </span>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#134e2b] dark:text-emerald-400 leading-[1.15] tracking-tight">
                Karibu HUERI
              </h1>
            </div>

            <p className="text-base sm:text-lg text-stone-700 dark:text-slate-200 leading-relaxed font-normal">
              At HUERI Limited, we are rooted in Kenyan environmental stewardship and driven by technical excellence. We make statutory NEMA licensing, Environmental and Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), and international safeguards compliance easily accessible, rigorous, and sustainably delivered for projects across Africa.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <button
                onClick={() => onRequestProposal()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#134e2b] hover:bg-[#0f3d22] text-white font-heading font-bold text-sm rounded-xl transition-all shadow-md shadow-[#134e2b]/20 hover:-translate-y-0.5 cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadProfile}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 px-5 py-3 bg-white dark:bg-slate-800 border border-stone-300 dark:border-slate-700 hover:border-emerald-600 text-stone-800 dark:text-slate-100 font-heading font-bold text-sm rounded-xl transition-all shadow-sm cursor-pointer"
              >
                <Download className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>{isDownloading ? 'Generating PDF...' : 'Download Profile'}</span>
              </button>
            </div>
          </div>

          {/* Right Image with Rounded Corners */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img 
                src={photoAssets.kisumuHeadquarters} 
                alt="HUERI Limited Environmental & Social Advisory Team" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700/50 flex items-center justify-between text-xs font-mono">
                <span className="font-bold text-stone-800 dark:text-white">Milimani Headquarters, Kisumu & Nairobi</span>
                <span className="text-emerald-600 dark:text-emerald-400 font-bold">NEMA Reg. Firm of Experts</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          2. THE PROBLEM (CENTERED HEADLINE + INTRO + 4 CARDS)
         ======================================================== */}
      <section id="about-problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Centered Heading & Intro Text */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-stone-900 dark:text-white tracking-wider">
            THE PROBLEM
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
            <p>
              The fast-paced infrastructure, urban development, and energy expansion across Kenya and East Africa creates complex environmental, social, and regulatory pressures.
            </p>
            <p>
              Project developers, public agencies, and investors frequently face costly delays, community disputes, or international financing freezes due to statutory compliance bottlenecks and unaddressed safeguard risks.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid - Nyumbani Greens Format */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {problemCards.map((card, idx) => (
            <div 
              key={idx}
              className="bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden border border-stone-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-all group flex flex-col justify-between"
            >
              {/* Card Image with Bottom Category Overlay */}
              <div className="relative h-44 w-full overflow-hidden bg-slate-900">
                <img 
                  src={card.image} 
                  alt={card.alt} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-3 left-3 right-3">
                  <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20 inline-block">
                    {card.title}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 space-y-2.5 flex-grow">
                <h3 className="font-heading font-bold text-xs uppercase tracking-wider text-brand-green-700 dark:text-emerald-400">
                  {card.subtitle}
                </h3>
                <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
                  {card.description}
                </p>
              </div>
            </div>
          ))}
        </div>

      </section>

      {/* ========================================================
          3. OUR APPROACH (2-COLUMN LAYOUT WITH BULLETS & PHOTO)
         ======================================================== */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Text & Checklist */}
          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
                Our Approach
              </h2>
              <p className="text-sm sm:text-base text-stone-700 dark:text-slate-200 leading-relaxed font-normal">
                At HUERI Limited, we believe in sustainable and ethical practices that prioritize the health of our communities and the planet. We work closely with project proponents, regulatory authorities, and local stakeholders to ensure infrastructure is not only legally compliant, but delivered in a way that respects the environment.
              </p>
            </div>

            {/* Checklist with Green Checkmarks */}
            <div className="space-y-3.5 pt-2">
              {approachPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-emerald-100 dark:bg-emerald-950 flex items-center justify-center shrink-0 mt-1 border border-emerald-500/40">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  </div>
                  <span className="text-sm sm:text-base text-stone-800 dark:text-slate-200 font-normal leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 hover:text-emerald-800 dark:hover:text-emerald-300"
              >
                <span>Explore our service portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right Image with Rounded Corners */}
          <div className="lg:col-span-6">
            <div className="relative rounded-3xl overflow-hidden shadow-xl border border-stone-200 dark:border-slate-800 bg-stone-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img 
                src={photoAssets.fieldScientists} 
                alt="HUERI Environmental Scientists Conducting Field Research" 
                className="w-full h-full object-cover object-center filter brightness-100 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 p-3 rounded-2xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md border border-white/40 dark:border-slate-700/50 text-xs font-mono text-stone-800 dark:text-white flex items-center justify-between">
                <span>Field Biophysical & Water Quality Sampling</span>
                <span className="font-bold text-emerald-600 dark:text-emerald-400">Lake Victoria Basin</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================
          4. OUR SOLUTION (CENTERED HEADLINE + 3 NUMBERED CARDS)
         ======================================================== */}
      <section id="about-solution" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        
        {/* Centered Heading */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10 sm:mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Our Solution
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
            A seamless, end-to-end environmental, social, and safety compliance pathway from project inception to operational licensing.
          </p>
        </div>

        {/* 3 Numbered Cards Grid - Nyumbani Greens 1, 2, 3 Format */}
        <div className="grid md:grid-cols-3 gap-6 sm:gap-8">
          {solutionSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div 
                key={step.number}
                className="bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-700 shadow-sm hover:shadow-lg transition-all group flex flex-col justify-between"
              >
                {/* Image with Step Number Circle in Top Right */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Circular Step Badge */}
                  <div className="absolute top-3 right-3 w-8 h-8 rounded-full bg-white text-stone-900 font-heading font-black text-sm flex items-center justify-center shadow-lg border border-stone-200">
                    {step.number}
                  </div>
                </div>

                {/* Card Content with Icon */}
                <div className="p-6 space-y-3 flex-grow">
                  <div className="w-9 h-9 rounded-xl bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center border border-emerald-200 dark:border-emerald-800">
                    <Icon className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                  </div>

                  <h3 className="font-heading font-bold text-base sm:text-lg text-stone-900 dark:text-white leading-snug">
                    {step.title}
                  </h3>

                  <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </section>

      {/* ========================================================
          5. LEADERSHIP, CREDENTIALS & CORPORATE PROFILE
         ======================================================== */}
      <section id="about-leadership" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="rounded-3xl bg-[#07162C] text-white p-6 sm:p-10 border border-slate-800 shadow-xl space-y-8">
          
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-slate-700/80 pb-6">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-emerald-400 block">
                EXECUTIVE GOVERNANCE & STATUTORY STANDING
              </span>
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-heading font-black">
                Leadership & Corporate Credentials
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 font-light max-w-2xl leading-relaxed">
                Hope Urban Environmental and Research Investments Limited (HUERI Limited) was officially incorporated in 2014 (CPR/2014/168986), building on collaborative initiatives dating to 2007. Led by Founder & Managing Director Belinda Nyakinya, registered NEMA Lead Expert.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDownloadProfile}
                disabled={isDownloading}
                className="px-4 py-2.5 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloading ? 'Generating...' : 'Download Full PDF Profile'}</span>
              </button>
              <button
                onClick={() => onRequestProposal()}
                className="px-4 py-2.5 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all border border-white/20 cursor-pointer"
              >
                Request Proposal →
              </button>
            </div>
          </div>

          {/* Key Credentials Badges */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-emerald-400 font-bold text-xs font-mono">
                <ShieldCheck className="w-4 h-4" />
                <span>NEMA ACCREDITED</span>
              </div>
              <p className="text-xs text-slate-300">
                Registered Firm of Experts under EMCA Cap 387 with licensed Lead Specialists.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-blue-400 font-bold text-xs font-mono">
                <Building2 className="w-4 h-4" />
                <span>INCORPORATED 2014</span>
              </div>
              <p className="text-xs text-slate-300">
                Over 12 years of registered Kenyan corporate track record (CPR/2014/168986).
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-amber-400 font-bold text-xs font-mono">
                <Award className="w-4 h-4" />
                <span>LENDER SAFEGUARDS</span>
              </div>
              <p className="text-xs text-slate-300">
                World Bank ESF (ESS1-10), IFC Performance Standards & AfDB ISS alignment.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-white/5 border border-white/10 space-y-1">
              <div className="flex items-center gap-2 text-purple-400 font-bold text-xs font-mono">
                <Users className="w-4 h-4" />
                <span>MULTIDISCIPLINARY</span>
              </div>
              <p className="text-xs text-slate-300">
                Limnologists, socio-economists, OHS auditors, valuation experts & drone GIS engineers.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
