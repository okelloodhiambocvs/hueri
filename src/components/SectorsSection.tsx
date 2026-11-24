/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';
import PageHero from './PageHero';
import { RevealBlock } from './MotionReveal';
import {
  ArrowRight,
  CheckCircle2
} from 'lucide-react';

interface SectorsSectionProps {
  onRequestProposal: (sectorTitle?: string) => void;
}

export default function SectorsSection({
  onRequestProposal
}: SectorsSectionProps) {

  const sectors = [
    {
      id: 'energy-power',
      title: 'Energy & Clean Power',
      image: photoAssets.renewableEnergy,
      overview: 'We support renewable energy developers and utility agencies with comprehensive environmental and social advisory across solar PV farms, wind parks, geothermal fields, and high-voltage transmission lines.',
      keySafeguards: [
        'ESIA & Power Project Clearances',
        'Wayleave Transmission Corridor RAPs',
        'Avian & Bat Ecological Impact Studies',
        'World Bank & IFC Performance Safeguards'
      ]
    },
    {
      id: 'transport-logistics',
      title: 'Transport & Infrastructure Corridors',
      image: photoAssets.infrastructure,
      overview: 'Delivering end-to-end safeguards for major transport arteries, highway expansions, rural access roads, bridges, and port facilities across East Africa.',
      keySafeguards: [
        'Corridor Resettlement Action Plans (RAP)',
        'Borrow Pit & Quarry Restoration Plans',
        'Resident Contractor C-ESMP Oversight',
        'Traffic Safety & Community Barazas'
      ]
    },
    {
      id: 'water-sanitation',
      title: 'Water Resources & Sanitation',
      image: photoAssets.waterCatchment,
      overview: 'Guiding water authorities and irrigation boards through environmental clearance for multipurpose dams, urban bulk water supplies, wastewater treatment plants, and Lake Victoria basin catchment conservation.',
      keySafeguards: [
        'Hydrological & Flood Risk Modeling',
        'Water Abstraction Permitting Support',
        'Wetland & Aquatic Ecosystem Baselines',
        'Downstream Riparian Safeguards'
      ]
    },
    {
      id: 'urban-built-env',
      title: 'Urban & Built Environment',
      image: photoAssets.siteStructuralDeck,
      overview: 'Assisting commercial property developers, housing syndicates, and industrial parks in meeting environmental, stormwater, effluent, and workplace safety requirements.',
      keySafeguards: [
        'High-Rise & Mixed-Use ESIAs',
        'Stormwater & Effluent Management Plans',
        'Occupational Safety Audits',
        'Annual Environmental Compliance Audits'
      ]
    },
    {
      id: 'agriculture-nature',
      title: 'Agribusiness & Food Systems',
      image: photoAssets.milestones.lakeResearch,
      overview: 'Supporting commercial tea, coffee, horticultural estates, aquaculture facilities, and agro-processing factories with integrated environmental compliance and sustainable land stewardship.',
      keySafeguards: [
        'Agro-processing Effluent Treatment Audits',
        'Pesticide & Chemical Management Plans',
        'Soil Conservation & Irrigation Impact Audits',
        'Fair Labor & Workplace Safety Standards'
      ]
    },
    {
      id: 'mining-extractives',
      title: 'Mining & Extractive Industries',
      image: photoAssets.miningReclamation,
      overview: 'Providing specialized environmental and social risk advisory for stone quarries, commercial mineral extraction, tailings storage facilities, and post-mining land reclamation.',
      keySafeguards: [
        'Mining ESIAs & Regulatory Compliance',
        'Tailings & Hazardous Waste Safeguards',
        'Progressive Pit Reclamation & Revegetation',
        'Community Barazas & Livelihood Protection'
      ]
    }
  ];

  const firstGroup = sectors.slice(0, 3);
  const secondGroup = sectors.slice(3, 6);

  return (
    <div className="font-sans">

      {/* Unified Full-Width Hero matching Home Landing Page Photo Size */}
      <PageHero
        image={photoAssets.sectorsHero}
        imageAlt="Key African Infrastructure and Industrial Sectors"
        title="Sectors We Serve"
        description="Tailored environmental, social, and health and safety advisory across the infrastructure, energy, industrial, and natural resource sectors driving sustainable growth."
      />

      {/* 1. Infrastructure, Energy & Water Sectors — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealBlock direction="left" className="max-w-2xl text-left space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Energy, Transport &amp; Water Infrastructure
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light">
              Dedicated safeguard studies and compliance engineering for core public and private infrastructure investments.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" delayMs={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {firstGroup.map((sec) => (
              <div
                key={sec.id}
                className="flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-[#003B95] dark:text-white leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                      {sec.overview}
                    </p>
                  </div>

                  <div className="pt-1 space-y-1.5">
                    {sec.keySafeguards.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0" />
                        <span className="truncate leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4">
                  <button
                    onClick={() => onRequestProposal(sec.title)}
                    className="w-full py-2.5 px-4 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </RevealBlock>
        </div>
      </section>

      {/* 2. Built Environment, Agribusiness & Extractives — Logo Green Background */}
      <section className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <RevealBlock direction="left" className="max-w-2xl text-left space-y-1.5">
            <h2 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
              Urban Development, Agribusiness &amp; Extractives
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 font-light">
              Environmental permitting, occupational safety, and land stewardship for commercial and industrial operations.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" delayMs={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-10">
            {secondGroup.map((sec) => (
              <div
                key={sec.id}
                className="flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="h-52 w-full overflow-hidden bg-[#00551B]">
                    <img
                      src={sec.image}
                      alt={sec.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                  </div>

                  <div className="space-y-2">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-white leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-sm text-emerald-50 leading-relaxed font-light">
                      {sec.overview}
                    </p>
                  </div>

                  <div className="pt-1 space-y-1.5">
                    {sec.keySafeguards.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-white">
                        <CheckCircle2 className="w-4 h-4 text-[#A7F3D0] shrink-0" />
                        <span className="truncate leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="pt-4 mt-4">
                  <button
                    onClick={() => onRequestProposal(sec.title)}
                    className="w-full py-2.5 px-4 bg-white hover:bg-emerald-50 text-[#003B95] font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Let&apos;s Talk</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            ))}
          </RevealBlock>
        </div>
      </section>

      {/* 3. Cross-Sector Advisory Band — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
              Operating in Multiple African Sectors?
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              We deploy multidisciplinary teams capable of managing complex, cross-sector programs—from renewable energy integration to transport corridors and municipal water schemes.
            </p>
          </div>
          <button
            onClick={() => onRequestProposal('Cross-Sector Advisory')}
            className="px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            Consult With Our Experts →
          </button>
        </div>
      </section>

    </div>
  );
}
