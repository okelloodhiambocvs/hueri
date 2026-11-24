/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';
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
      subtitle: 'Renewable & Grid Power',
      image: photoAssets.renewableEnergy,
      overview: 'We support renewable energy developers and utility agencies with comprehensive environmental and social advisory across solar PV farms, wind parks, geothermal fields, and high-voltage transmission lines.',
      keySafeguards: [
        'NEMA ESIA & Statutory Power Licences',
        'Wayleave Transmission Corridor RAPs',
        'Avian & Bat Ecological Impact Studies',
        'World Bank & IFC Performance Safeguards'
      ]
    },
    {
      id: 'transport-logistics',
      title: 'Transport & Infrastructure Corridors',
      subtitle: 'Roads, Rail & Ports',
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
      subtitle: 'Dams, Water & Catchments',
      image: photoAssets.waterCatchment,
      overview: 'Guiding water authorities and irrigation boards through environmental clearance for multipurpose dams, urban bulk water supplies, wastewater treatment plants, and Lake Victoria basin catchment conservation.',
      keySafeguards: [
        'Hydrological & Flood Risk Modeling',
        'Water Resources Authority (WRA) Permitting',
        'Wetland & Aquatic Ecosystem Baselines',
        'Downstream Riparian Safeguards'
      ]
    },
    {
      id: 'urban-built-env',
      title: 'Urban & Built Environment',
      subtitle: 'Real Estate & Industrial Parks',
      image: photoAssets.siteStructuralDeck,
      overview: 'Assisting commercial property developers, housing syndicates, and industrial parks in meeting statutory environmental, stormwater, effluent, and workplace safety requirements.',
      keySafeguards: [
        'Statutory High-Rise & Mixed-Use ESIAs',
        'Stormwater & Effluent Management Plans',
        'DOSHS Occupational Safety Audits',
        'Annual NEMA Compliance Audits'
      ]
    },
    {
      id: 'agriculture-nature',
      title: 'Agribusiness & Food Systems',
      subtitle: 'Agro-processing & Irrigation',
      image: photoAssets.milestones.lakeResearch,
      overview: 'Supporting commercial tea, coffee, horticultural estates, aquaculture facilities, and agro-processing factories with integrated environmental compliance and sustainable land stewardship.',
      keySafeguards: [
        'Agro-processing Effluent Treatment Audits',
        'Pesticide & Chemical Management Plans',
        'Soil Conservation & Irrigation Impact Audits',
        'Fair Labor & OHS Standards (OSHA 2007)'
      ]
    },
    {
      id: 'mining-extractives',
      title: 'Mining & Extractive Industries',
      subtitle: 'Quarries & Minerals',
      image: photoAssets.miningReclamation,
      overview: 'Providing specialized environmental and social risk advisory for stone quarries, commercial mineral extraction, tailings storage facilities, and post-mining land reclamation.',
      keySafeguards: [
        'Statutory Mining ESIAs & Mining Act Compliance',
        'Tailings & Hazardous Waste Safeguards',
        'Progressive Pit Reclamation & Revegetation',
        'Community Barazas & Livelihood Protection'
      ]
    }
  ];

  return (
    <div className="space-y-16 sm:space-y-20 font-sans">

      {/* Page Header — No Pill Badge */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Key Sectors We Serve
          </h1>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
            We provide tailored Environmental, Social, and Health &amp; Safety (ESHS) advisory across the primary infrastructure, industrial, and natural resource sectors driving Africa&apos;s sustainable economic transformation.
          </p>
        </div>
      </div>

      {/* Open Editorial Sectors Grid — No Card Blocks, No Photo Overlays */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12 border-t border-slate-200 dark:border-slate-800 pt-10">
          {sectors.map((sec) => (
            <div
              key={sec.id}
              className="flex flex-col justify-between group border-b border-slate-200 dark:border-slate-800 pb-8"
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

                <div className="space-y-2.5">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
                    {sec.subtitle}
                  </span>
                  <h2 className="font-heading font-bold text-lg sm:text-xl text-[#003B95] dark:text-white leading-snug">
                    {sec.title}
                  </h2>
                  <p className="text-sm sm:text-base text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {sec.overview}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                  <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 block">
                    Sector Safeguards Focus
                  </span>
                  <div className="space-y-1.5">
                    {sec.keySafeguards.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0" />
                        <span className="truncate leading-snug">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-5 mt-5 border-t border-slate-100 dark:border-slate-800">
                <button
                  onClick={() => onRequestProposal(sec.title)}
                  className="w-full py-2.5 px-4 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>Request Sector Scoping</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Cross-Sector Advisory Band — Full Width, No Card Box */}
      <section className="bg-[#041B44] dark:bg-[#061E4A] text-white py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
              Operating in Multiple African Sectors?
            </h3>
            <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
              We deploy multidisciplinary teams capable of managing complex, cross-sector programs—from renewable energy integration to transport corridors and municipal water schemes.
            </p>
          </div>
          <button
            onClick={() => onRequestProposal('Cross-Sector Advisory')}
            className="px-6 py-3 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors shrink-0 cursor-pointer"
          >
            Consult With Our Experts →
          </button>
        </div>
      </section>

    </div>
  );
}
