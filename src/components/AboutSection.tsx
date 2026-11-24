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
  ArrowRight
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

  const problemItems = [
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

  const approachPoints = [
    'Registered NEMA Firm of Experts led by certified Lead Specialists',
    'Harmonized compliance: Kenyan EMCA Cap 387 & World Bank / IFC standards',
    'Grassroots community engagement, participatory barazas & FPIC',
    'Continuous site monitoring, resident ESHS supervision & safety audits'
  ];

  const solutionSteps = [
    {
      number: '01',
      title: 'Baseline Scoping & Field Surveys',
      description: 'We conduct exhaustive on-the-ground ecological surveys, drone corridor mapping, socio-economic censuses, and participatory community barazas to establish defensible baselines.',
      image: photoAssets.milestones.droneMapping,
      accent: 'border-[#006B22] dark:border-[#4ADE80]'
    },
    {
      number: '02',
      title: 'ESIA & Safeguards Architecture',
      description: 'We prepare robust Environmental & Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), and C-ESMP management plans that secure prompt NEMA and lender approvals.',
      image: photoAssets.lifecycleHero,
      accent: 'border-[#003B95] dark:border-[#38BDF8]'
    },
    {
      number: '03',
      title: 'Compliance Audits & Resident Oversight',
      description: 'We deliver statutory annual NEMA audits, DOSHS workplace safety inspections, ESHSRIM procedures training, and resident ESHS site monitoring throughout construction and operations.',
      image: photoAssets.siteConstructionMonitoring,
      accent: 'border-[#0084D8] dark:border-[#38BDF8]'
    }
  ];

  return (
    <div className="space-y-20 sm:space-y-24 font-sans">

      {/* 1. Overview — Open Two-Column Editorial Split */}
      <section id="about-overview" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-6 space-y-6">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#003B95] dark:text-white leading-[1.12] tracking-tight">
              Karibu HUERI
            </h1>

            <p className="text-base sm:text-lg text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
              At HUERI Limited, we are rooted in Kenyan environmental stewardship and driven by technical excellence. We make statutory NEMA licensing, Environmental and Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), and international safeguards compliance easily accessible, rigorous, and sustainably delivered for projects across Africa.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-4">
              <button
                onClick={() => onRequestProposal()}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <span>Request Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={handleDownloadProfile}
                disabled={isDownloading}
                className="inline-flex items-center gap-2 px-5 py-3 border border-slate-300 dark:border-slate-700 hover:border-[#003B95] dark:hover:border-[#38BDF8] text-[#003B95] dark:text-slate-100 font-heading font-bold text-sm rounded-lg transition-colors cursor-pointer"
              >
                <Download className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80]" />
                <span>{isDownloading ? 'Generating PDF...' : 'Download Profile'}</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={photoAssets.kisumuHeadquarters}
                alt="HUERI Limited Environmental & Social Advisory Team"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>Milimani Headquarters, Kisumu &amp; Nairobi</span>
              <span className="text-[#006B22] dark:text-[#4ADE80] font-bold">NEMA Reg. Firm of Experts</span>
            </div>
          </div>

        </div>
      </section>

      {/* 2. The Problem — Open 4-Column Editorial Grid (No Card Blocks, Clean Photos) */}
      <section id="about-problem" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black uppercase text-[#003B95] dark:text-white tracking-wider">
            THE PROBLEM
          </h2>
          <div className="space-y-3 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            <p>
              The fast-paced infrastructure, urban development, and energy expansion across Kenya and East Africa creates complex environmental, social, and regulatory pressures.
            </p>
            <p>
              Project developers, public agencies, and investors frequently face costly delays, community disputes, or international financing freezes due to statutory compliance bottlenecks and unaddressed safeguard risks.
            </p>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-200 dark:border-slate-800 pt-8">
          {problemItems.map((item, idx) => (
            <div key={idx} className="group flex flex-col space-y-4 border-b border-slate-200 dark:border-slate-800 pb-6">
              <div className="h-44 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="space-y-2">
                <span className="text-[11px] font-mono font-bold tracking-wider uppercase text-[#006B22] dark:text-[#4ADE80] block">
                  {item.title}
                </span>
                <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white leading-snug">
                  {item.subtitle}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Our Approach — Open Split Section (Clean Photo, No Overlays) */}
      <section id="about-approach" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          <div className="lg:col-span-6 space-y-6">
            <div className="space-y-3">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Our Approach
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-normal">
                At HUERI Limited, we believe in sustainable and ethical practices that prioritize the health of our communities and the planet. We work closely with project proponents, regulatory authorities, and local stakeholders to ensure infrastructure is not only legally compliant, but delivered in a way that respects the environment.
              </p>
            </div>

            <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
              {approachPoints.map((point, idx) => (
                <div key={idx} className="flex items-start gap-3 pt-2">
                  <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-1" />
                  <span className="text-sm sm:text-base text-slate-800 dark:text-slate-200 font-normal leading-relaxed">
                    {point}
                  </span>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={() => onNavigate('services')}
                className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] hover:underline cursor-pointer"
              >
                <span>Explore our service portfolio</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="overflow-hidden bg-slate-100 dark:bg-slate-900 aspect-[4/3] sm:aspect-[16/11]">
              <img
                src={photoAssets.fieldScientists}
                alt="HUERI Environmental Scientists Conducting Field Research"
                className="w-full h-full object-cover object-center"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-3 flex items-center justify-between text-xs font-mono text-slate-500 dark:text-slate-400">
              <span>Field Biophysical &amp; Water Quality Sampling</span>
              <span className="font-bold text-[#006B22] dark:text-[#4ADE80]">Lake Victoria Basin</span>
            </div>
          </div>

        </div>
      </section>

      {/* 4. Our Solution — Open 3-Column Editorial Progression */}
      <section id="about-solution" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 scroll-mt-24">
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Our Solution
          </h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            A seamless, end-to-end environmental, social, and safety compliance pathway from project inception to operational licensing.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {solutionSteps.map((step) => (
            <div key={step.number} className="group flex flex-col space-y-4">
              <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                <img
                  src={step.image}
                  alt={step.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className={`border-t-2 ${step.accent} pt-4 space-y-2.5`}>
                <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] block">
                  PHASE {step.number}
                </span>
                <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white leading-snug">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Leadership, Credentials & Corporate Profile — Full-Width Band (No Card Box) */}
      <section id="about-leadership" className="bg-[#041B44] dark:bg-[#061E4A] text-white py-14 sm:py-18 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 border-b border-white/15 pb-8">
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#4ADE80] block">
                EXECUTIVE GOVERNANCE &amp; STATUTORY STANDING
              </span>
              <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                Leadership &amp; Corporate Credentials
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-light max-w-2xl leading-relaxed">
                Hope Urban Environmental and Research Investments Limited (HUERI Limited) was officially incorporated in 2014 (CPR/2014/168986), building on collaborative initiatives dating to 2007. Led by Founder &amp; Managing Director Belinda Nyakinya, registered NEMA Lead Expert.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDownloadProfile}
                disabled={isDownloading}
                className="px-5 py-3 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloading ? 'Generating...' : 'Download Full PDF Profile'}</span>
              </button>
              <button
                onClick={() => onRequestProposal()}
                className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors border border-white/20 cursor-pointer"
              >
                Request Proposal →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="border-t-2 border-[#4ADE80] pt-4 space-y-1.5">
              <span className="text-[#4ADE80] font-bold text-xs font-mono uppercase tracking-wider block">
                NEMA Accredited
              </span>
              <p className="text-xs text-blue-100 leading-relaxed font-light">
                Registered Firm of Experts under EMCA Cap 387 with licensed Lead Specialists.
              </p>
            </div>

            <div className="border-t-2 border-[#38BDF8] pt-4 space-y-1.5">
              <span className="text-[#38BDF8] font-bold text-xs font-mono uppercase tracking-wider block">
                Incorporated 2014
              </span>
              <p className="text-xs text-blue-100 leading-relaxed font-light">
                Over 12 years of registered Kenyan corporate track record (CPR/2014/168986).
              </p>
            </div>

            <div className="border-t-2 border-[#4ADE80] pt-4 space-y-1.5">
              <span className="text-[#4ADE80] font-bold text-xs font-mono uppercase tracking-wider block">
                Lender Safeguards
              </span>
              <p className="text-xs text-blue-100 leading-relaxed font-light">
                World Bank ESF (ESS1-10), IFC Performance Standards &amp; AfDB ISS alignment.
              </p>
            </div>

            <div className="border-t-2 border-[#38BDF8] pt-4 space-y-1.5">
              <span className="text-[#38BDF8] font-bold text-xs font-mono uppercase tracking-wider block">
                Multidisciplinary
              </span>
              <p className="text-xs text-blue-100 leading-relaxed font-light">
                Limnologists, socio-economists, OHS auditors, valuation experts &amp; drone GIS engineers.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
