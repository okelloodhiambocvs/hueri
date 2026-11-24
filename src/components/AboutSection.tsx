/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import photoAssets from '../utils/photoAssets';
import { generateInstitutionalProfilePDF } from '../utils/companyProfileGenerator';
import { serviceSummaries } from '../utils/serviceRoutes';
import PageHero from './PageHero';
import { RevealBlock } from './MotionReveal';
import {
  Download,
  CheckCircle2,
  ArrowRight,
  Leaf,
  Award,
  Users,
  Lightbulb,
  Compass,
  Target
} from 'lucide-react';

interface AboutSectionProps {
  initialSection?: string;
  onNavigate?: (page: string, sectionId?: string) => void;
  onRequestProposal?: () => void;
}

export default function AboutSection({
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

  const coreValues = [
    {
      icon: Leaf,
      title: 'Commitment to Sustainable Development',
      description: 'HUERI is committed to promoting sustainable development in the East African region and globally. This core value underscores the organization\'s mission to provide professional environmental and research consultancy services that prioritize long-term environmental and social sustainability.'
    },
    {
      icon: Award,
      title: 'Excellence and Professionalism',
      description: 'HUERI places a strong emphasis on excellence and professionalism in all its services. The organization\'s pool of consultants and associates, with their strong academic credentials and extensive experience, strive to provide high-quality, reliable, and ethical consultancy services to clients.'
    },
    {
      icon: Users,
      title: 'Centric Approach',
      description: 'HUERI values active engagement with stakeholders and local communities. The organization recognizes the importance of understanding and involving stakeholders in the decision-making process to ensure that projects align with local needs and environmental considerations.'
    },
    {
      icon: Lightbulb,
      title: 'Innovation and Adaptability',
      description: 'HUERI emphasizes innovation and adaptability to address the evolving challenges in the field of environmental consultancy. The organization aims to continually improve its services, embrace new technologies, and adapt to changing regulations to remain at the forefront of the industry.'
    }
  ];

  const problemItems = [
    {
      title: 'Regulatory Delays',
      subtitle: 'Approval Bottlenecks',
      description: 'Complex licencing, uncoordinated public reviews, and delayed permits stall project launches and escalate financing costs.',
      image: photoAssets.eiaAssessment,
      alt: 'ESIA licencing and regulatory review in Kenya'
    },
    {
      title: 'Social & Resettlement',
      subtitle: 'Community Friction',
      description: 'Inadequately consulted communities and poorly executed Resettlement Action Plans (RAP) trigger land disputes, legal challenges, and work stoppages.',
      image: photoAssets.milestones.communityBaraza,
      alt: 'Community baraza stakeholder consultation'
    },
    {
      title: 'Ecological Impacts',
      subtitle: 'Catchment Stress',
      description: 'Wetland loss, unchecked industrial effluent, and climate vulnerabilities degrade natural resources and jeopardize facility resilience.',
      image: photoAssets.waterCatchment,
      alt: 'Lake Victoria wetland catchment and environmental conservation'
    },
    {
      title: 'Lender Compliance Gaps',
      subtitle: 'Financing Roadblocks',
      description: 'International financiers (World Bank, IFC, AfDB) require stringent ESF and ESG standards that standard local reports fail to satisfy.',
      image: photoAssets.milestones.infrastructureEsmp,
      alt: 'Infrastructure environmental and social management plan compliance'
    }
  ];

  const approachPoints = [
    'Led by certified environmental and social Lead Specialists',
    'Harmonized compliance with national laws and World Bank / IFC standards',
    'Grassroots community engagement, participatory barazas & FPIC',
    'Continuous site monitoring, resident ESHS supervision & safety audits'
  ];

  const solutionSteps = [
    {
      number: '01',
      title: 'Baseline Scoping & Field Surveys',
      description: 'We conduct exhaustive on-the-ground ecological surveys, drone corridor mapping, socio-economic censuses, and participatory community barazas to establish defensible baselines.',
      image: photoAssets.milestones.droneMapping
    },
    {
      number: '02',
      title: 'ESIA & Safeguards Architecture',
      description: 'We prepare robust Environmental & Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), and C-ESMP management plans that secure prompt regulatory and lender approvals.',
      image: photoAssets.lifecycleHero
    },
    {
      number: '03',
      title: 'Compliance Audits & Resident Oversight',
      description: 'We deliver annual environmental audits, workplace safety inspections, ESHSRIM procedures training, and resident ESHS site monitoring throughout construction and operations.',
      image: photoAssets.siteConstructionMonitoring
    }
  ];

  const whyChooseUsItems = [
    {
      number: '01',
      title: 'Accredited Field Specialists',
      description: 'Assignments are led by certified Lead Experts, socio-economists, safety auditors, and GIS specialists with hands-on African delivery experience.'
    },
    {
      number: '02',
      title: 'Local & Lender Alignment',
      description: 'We bridge Kenyan regulatory requirements seamlessly with World Bank ESF, IFC Performance Standards, and AfDB safeguard expectations.'
    },
    {
      number: '03',
      title: 'Community & County Reach',
      description: 'Headquartered in Kisumu with active fieldwork capacity across all 47 counties, grounded in transparent community barazas and stakeholder dialogue.'
    },
    {
      number: '04',
      title: 'Full Lifecycle Continuity',
      description: 'One integrated partner from early screening and ESIA approvals through construction supervision, annual audits, and climate resilience.'
    }
  ];

  const marqueeServices = [...serviceSummaries, ...serviceSummaries];

  return (
    <div className="font-sans">

      {/* 1. Unified Full-Width Hero matching Home Landing Page Photo Size */}
      <PageHero
        image={photoAssets.kisumuHeadquarters}
        imageAlt="HUERI Limited Environmental & Social Advisory Team"
        title="Karibu HUERI"
        description="At HUERI Limited, we are rooted in Kenyan environmental stewardship and driven by technical excellence—delivering Environmental Impact Assessments, Resettlement Action Plans, and international safeguards across Africa."
      >
        <button
          onClick={() => onRequestProposal()}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <span>Request Consultation</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={handleDownloadProfile}
          disabled={isDownloading}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <Download className="w-4 h-4 text-[#4ADE80]" />
          <span>{isDownloading ? 'Generating PDF...' : 'Download Profile'}</span>
        </button>
      </PageHero>

      {/* 2. Overview, Vision, Mission & Core Values — Balanced White Background */}
      <section id="about-overview" className="bg-white dark:bg-[#041B44] py-10 sm:py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            <RevealBlock direction="left" className="lg:col-span-6 space-y-3 text-left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Overview
              </h2>
              <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-light">
                Hope Urban Environmental and Research Investments Limited (HUERI Limited) is a Kenyan environmental, social, health, safety, and sustainability consultancy headquartered in Kisumu. Incorporated in 2014 with professional roots dating back to 2007, we work alongside developers, public agencies, contractors, and international financiers to guide responsible infrastructure and investment delivery across Kenya and East Africa.
              </p>
            </RevealBlock>

            <RevealBlock direction="right" className="lg:col-span-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-10 space-y-6">
              <div className="flex items-start gap-3.5">
                <Compass className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-heading font-black text-[#003B95] dark:text-white">
                    Our Vision
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    To be one of the leading Environmental and Research Consultancy Firms in the East African Region, expanding globally with a focus on promoting sustainable development.
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-3.5 border-t border-slate-200 dark:border-slate-800 pt-5">
                <Target className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-1" aria-hidden="true" />
                <div className="space-y-1">
                  <h3 className="text-lg sm:text-xl font-heading font-black text-[#003B95] dark:text-white">
                    Our Mission
                  </h3>
                  <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    To provide professional Environmental and Research Consultancy Services to our clients, promoting sustainable development.
                  </p>
                </div>
              </div>
            </RevealBlock>
          </div>

          <RevealBlock direction="up" className="border-t border-slate-200 dark:border-slate-800 pt-8 space-y-6">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Core Values
            </h3>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value) => {
                const Icon = value.icon;
                return (
                  <div
                    key={value.title}
                    className="space-y-2.5"
                  >
                    <div className="flex items-start gap-2.5">
                      <Icon className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-0.5" aria-hidden="true" />
                      <h4 className="font-heading font-bold text-sm sm:text-base text-[#003B95] dark:text-white leading-snug">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {value.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </RevealBlock>
        </div>
      </section>

      {/* 3. The Problem — Soft Neutral Surface */}
      <section id="about-problem" className="bg-slate-50 dark:bg-[#06183A] py-10 sm:py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock direction="left" className="text-left max-w-3xl space-y-3 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              The Problem
            </h2>
            <div className="space-y-2 text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              <p>
                The fast-paced infrastructure, urban development, and energy expansion across Kenya and East Africa creates complex environmental, social, and regulatory pressures.
              </p>
              <p>
                Project developers, public agencies, and investors frequently face costly delays, community disputes, or international financing freezes due to compliance bottlenecks and unaddressed safeguard risks.
              </p>
            </div>
          </RevealBlock>

          <RevealBlock direction="up" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {problemItems.map((item, idx) => (
              <div key={idx} className="group flex flex-col space-y-3.5">
                <div className="h-44 w-full overflow-hidden bg-slate-200 dark:bg-slate-900">
                  <img
                    src={item.image}
                    alt={item.alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <div className="space-y-1.5">
                  <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] block">
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
          </RevealBlock>
        </div>
      </section>

      {/* 4. Our Approach — Logo Green Background with Flush Squared Right-Edge Photo */}
      <section id="about-approach" className="bg-[#006B22] dark:bg-[#054A20] text-white scroll-mt-24 overflow-hidden">
        <div className="grid lg:grid-cols-12 items-stretch">
          <div className="lg:col-span-6 py-10 sm:py-14 px-4 sm:px-6 lg:pl-[max(2rem,calc((100vw-80rem)/2+2rem))] lg:pr-10 flex flex-col justify-center">
            <RevealBlock direction="left" className="space-y-5 max-w-xl">
              <div className="space-y-2.5 text-left">
                <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                  Our Approach
                </h2>
                <p className="text-sm sm:text-base text-emerald-50 leading-relaxed font-normal">
                  At HUERI Limited, we believe in sustainable and ethical practices that prioritize the health of our communities and the planet. We work closely with project proponents, regulatory authorities, and local stakeholders to ensure infrastructure is not only legally compliant, but delivered in a way that respects the environment.
                </p>
              </div>

              <div className="space-y-2.5 pt-1">
                {approachPoints.map((point, idx) => (
                  <div key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#A7F3D0] shrink-0 mt-1" />
                    <span className="text-sm sm:text-base text-white font-normal leading-relaxed">
                      {point}
                    </span>
                  </div>
                ))}
              </div>

              <div className="pt-1">
                <button
                  onClick={() => onNavigate('services')}
                  className="inline-flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-emerald-200 cursor-pointer"
                >
                  <span>Explore our service portfolio</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </RevealBlock>
          </div>

          <div className="lg:col-span-6 min-h-[320px] sm:min-h-[380px] lg:min-h-[460px]">
            <img
              src={photoAssets.fieldScientists}
              alt="HUERI Environmental Scientists Conducting Field Research"
              className="w-full h-full object-cover object-center rounded-none block"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </section>

      {/* 6. Our Solution — White Background */}
      <section id="about-solution" className="bg-white dark:bg-[#041B44] py-10 sm:py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <RevealBlock direction="left" className="text-left max-w-3xl space-y-2.5 mb-8">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Our Solution
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              A seamless, end-to-end environmental, social, and safety compliance pathway from project inception to operational licensing.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" className="grid md:grid-cols-3 gap-8">
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

                <div className="space-y-2">
                  <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] block">
                    Phase {step.number}
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
          </RevealBlock>
        </div>
      </section>

      {/* 7. Our Services — Logo Green Background Linear Strip */}
      <section id="about-services-strip" className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 space-y-6 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5 text-left">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
              Our Services
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 font-light max-w-2xl">
              Select any service below to open its full scope, step-by-step methodology, and key deliverables.
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigate('services')}
            className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-white hover:text-emerald-200 cursor-pointer shrink-0"
          >
            <span>All Services</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

        <div className="service-marquee-wrapper w-full overflow-hidden py-1">
          <div className="animate-service-marquee gap-6 px-4 sm:px-6 lg:px-8">
            {marqueeServices.map((service, index) => {
              const image = photoAssets.services[service.imageKey] || photoAssets.eiaAssessment;
              const isDuplicate = index >= serviceSummaries.length;
              return (
                <button
                  key={`${service.id}-${index}`}
                  type="button"
                  aria-hidden={isDuplicate}
                  tabIndex={isDuplicate ? -1 : 0}
                  onClick={() => onNavigate('service-detail', service.slug)}
                  className="group w-[270px] sm:w-[290px] shrink-0 text-left flex flex-col justify-between cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div>
                    <div className="h-44 w-full overflow-hidden bg-[#00551B]">
                      <img
                        src={image}
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-3.5 pb-2">
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-100 transition-colors leading-snug">
                        {service.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#A7F3D0] group-hover:text-white transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* 8. Why Choose Us — White Background */}
      <section id="about-why-choose-us" className="bg-white dark:bg-[#041B44] py-10 sm:py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealBlock direction="left" className="text-left max-w-3xl space-y-2">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Why Choose Us
            </h2>
            <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              Trusted by developers, county governments, contractors, and international financing partners for dependable environmental and social delivery.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {whyChooseUsItems.map((item) => (
              <div
                key={item.number}
                className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-2.5"
              >
                <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] block">
                  {item.number}
                </span>
                <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white leading-snug">
                  {item.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                  {item.description}
                </p>
              </div>
            ))}
          </RevealBlock>
        </div>
      </section>

      {/* 9. Leadership & Corporate Credentials — Logo Green Background */}
      <section id="about-leadership" className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 scroll-mt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
            <div className="space-y-2 text-left">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                Leadership &amp; Corporate Credentials
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 font-light max-w-2xl leading-relaxed">
                Hope Urban Environmental and Research Investments Limited (HUERI Limited) was incorporated in 2014, building on collaborative initiatives dating to 2007. Led by Founder &amp; Managing Director Belinda Nyakinya.
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <button
                onClick={handleDownloadProfile}
                disabled={isDownloading}
                className="px-4 py-2 bg-[#003B95] hover:bg-[#002D73] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer flex items-center gap-2"
              >
                <Download className="w-3.5 h-3.5" />
                <span>{isDownloading ? 'Generating...' : 'Download Full PDF Profile'}</span>
              </button>
              <button
                onClick={() => onRequestProposal()}
                className="px-4 py-2 bg-white/15 hover:bg-white/25 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
              >
                Let&apos;s Talk →
              </button>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="space-y-1.5">
              <span className="text-[#A7F3D0] font-bold text-xs font-mono uppercase tracking-wider block">
                Accredited Specialists
              </span>
              <p className="text-xs text-emerald-50 leading-relaxed font-light">
                Licensed environmental and social lead experts delivering rigorous statutory assessments.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-white font-bold text-xs font-mono uppercase tracking-wider block">
                Incorporated 2014
              </span>
              <p className="text-xs text-emerald-50 leading-relaxed font-light">
                Over 12 years of registered Kenyan corporate track record.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-[#A7F3D0] font-bold text-xs font-mono uppercase tracking-wider block">
                Lender Safeguards
              </span>
              <p className="text-xs text-emerald-50 leading-relaxed font-light">
                World Bank ESF (ESS1-10), IFC Performance Standards &amp; AfDB ISS alignment.
              </p>
            </div>

            <div className="space-y-1.5">
              <span className="text-white font-bold text-xs font-mono uppercase tracking-wider block">
                Multidisciplinary
              </span>
              <p className="text-xs text-emerald-50 leading-relaxed font-light">
                Limnologists, socio-economists, OHS auditors, valuation experts &amp; drone GIS engineers.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
