/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../utils/photoAssets';
import { 
  Zap, 
  Truck, 
  Droplet, 
  Building, 
  Wheat, 
  Pickaxe, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';

interface SectorsSectionProps {
  onRequestProposal: (sectorTitle?: string) => void;
}

export default function SectorsSection({ 
  onRequestProposal 
}: SectorsSectionProps) {

  // All Sectors Overview (Clean, non-AI-bloated overview of all key sectors HUERI serves)
  const sectors = [
    {
      id: 'energy-power',
      title: 'Energy & Clean Power',
      badge: 'Renewable & Grid Power',
      icon: Zap,
      iconColor: 'text-amber-500 dark:text-amber-400',
      badgeBg: 'bg-amber-100 text-amber-800 dark:bg-amber-950 dark:text-amber-300',
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
      badge: 'Roads, Rail & Ports',
      icon: Truck,
      iconColor: 'text-blue-500 dark:text-blue-400',
      badgeBg: 'bg-blue-100 text-blue-800 dark:bg-blue-950 dark:text-blue-300',
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
      badge: 'Dams, Water & Catchments',
      icon: Droplet,
      iconColor: 'text-cyan-500 dark:text-cyan-400',
      badgeBg: 'bg-cyan-100 text-cyan-800 dark:bg-cyan-950 dark:text-cyan-300',
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
      badge: 'Real Estate & Industrial Parks',
      icon: Building,
      iconColor: 'text-emerald-500 dark:text-emerald-400',
      badgeBg: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950 dark:text-emerald-300',
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
      badge: 'Agro-processing & Irrigation',
      icon: Wheat,
      iconColor: 'text-lime-500 dark:text-lime-400',
      badgeBg: 'bg-lime-100 text-lime-800 dark:bg-lime-950 dark:text-lime-300',
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
      badge: 'Quarries & Minerals',
      icon: Pickaxe,
      iconColor: 'text-stone-500 dark:text-stone-400',
      badgeBg: 'bg-stone-200 text-stone-800 dark:bg-slate-700 dark:text-slate-200',
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
    <div className="space-y-12 sm:space-y-16 pb-16 font-sans">
      
      {/* Page Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto space-y-3">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-brand-green-100 text-brand-green-800 dark:bg-emerald-950/80 dark:text-emerald-300">
            <Sparkles className="w-3.5 h-3.5 text-brand-green-600 dark:text-emerald-400" />
            SECTORS WE SERVE
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Key Sectors We Serve
          </h2>
          <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
            We provide tailored Environmental, Social, and Health & Safety (ESHS) advisory across the primary infrastructure, industrial, and natural resource sectors driving Africa's sustainable economic transformation.
          </p>
        </div>
      </div>

      {/* Unified One-Page Sectors Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {sectors.map((sec) => {
            const Icon = sec.icon;
            return (
              <div
                key={sec.id}
                className="bg-white dark:bg-slate-800/90 rounded-3xl overflow-hidden border border-stone-200 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                {/* Photo Header */}
                <div className="relative h-48 sm:h-52 w-full overflow-hidden bg-slate-900">
                  <img
                    src={sec.image}
                    alt={sec.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 filter brightness-95"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                  
                  {/* Badge */}
                  <div className="absolute top-3.5 left-3.5">
                    <span className="text-[10px] font-mono font-bold tracking-wider uppercase text-white bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-md border border-white/20">
                      {sec.badge}
                    </span>
                  </div>

                  {/* Icon badge */}
                  <div className="absolute bottom-3.5 right-3.5 w-10 h-10 rounded-xl bg-white/90 dark:bg-slate-900/90 backdrop-blur-md flex items-center justify-center shadow-lg border border-white/30">
                    <Icon className={`w-5 h-5 ${sec.iconColor}`} />
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 sm:p-7 space-y-4 flex-grow flex flex-col justify-between">
                  <div className="space-y-3">
                    <h3 className="font-heading font-bold text-lg sm:text-xl text-stone-900 dark:text-white leading-snug">
                      {sec.title}
                    </h3>
                    <p className="text-sm sm:text-base text-stone-600 dark:text-slate-300 leading-relaxed font-light">
                      {sec.overview}
                    </p>
                  </div>

                  {/* Key Safeguards Focus */}
                  <div className="pt-3.5 border-t border-stone-100 dark:border-slate-700/60 space-y-2.5">
                    <span className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400 block">
                      Sector Safeguards Focus:
                    </span>
                    <div className="space-y-2">
                      {sec.keySafeguards.map((item, idx) => (
                        <div key={idx} className="flex items-center gap-2.5 text-sm text-stone-700 dark:text-slate-200">
                          <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                          <span className="truncate leading-snug">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <div className="pt-4 border-t border-stone-100 dark:border-slate-700/60">
                    <button
                      onClick={() => onRequestProposal(sec.title)}
                      className="w-full py-2.5 px-4 bg-brand-green-700 hover:bg-brand-green-600 active:bg-brand-green-800 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-sm flex items-center justify-center gap-2 cursor-pointer"
                    >
                      <span>Request Sector Scoping</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>

                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Cross-Sector Advisory Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-[#07162C] text-white p-6 sm:p-8 lg:p-10 border border-slate-800 shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl text-center md:text-left">
            <h3 className="text-xl sm:text-2xl font-heading font-black text-white">
              Operating in Multiple African Sectors?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 font-light leading-relaxed">
              We deploy multidisciplinary teams capable of managing complex, cross-sector programs—from renewable energy integration to transport corridors and municipal water schemes.
            </p>
          </div>
          <button
            onClick={() => onRequestProposal('Cross-Sector Advisory')}
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shrink-0 cursor-pointer"
          >
            Consult With Our Experts →
          </button>
        </div>
      </div>

    </div>
  );
}
