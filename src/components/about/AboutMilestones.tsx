/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
// @ts-ignore
import lakeResearchImg from '../../assets/images/milestone_lake_research_1786291274897.jpg';
// @ts-ignore
import communityBarazaImg from '../../assets/images/milestone_community_baraza_1786291258542.jpg';
// @ts-ignore
import droneMappingImg from '../../assets/images/milestone_drone_mapping_1786291244152.jpg';
// @ts-ignore
import nemaAccreditationImg from '../../assets/images/milestone_nema_accreditation_1786291821996.jpg';
// @ts-ignore
import esmpInfrastructureImg from '../../assets/images/milestone_infrastructure_esmp_1786291836420.jpg';
// @ts-ignore
import climateVulnerabilityImg from '../../assets/images/milestone_climate_vulnerability_1786291850669.jpg';
// @ts-ignore
import waterTreatmentImg from '../../assets/images/milestone_water_treatment_1786291862994.jpg';

export const milestones = [
  {
    year: "2007",
    tag: "Origins",
    title: "Scientific Origins & Winam Gulf Research Alliance",
    description: "Founded as an informal assembly of passionate lakeside hydrologists, community advocates, and environmental scholars. Published inaugural community watershed resource maps in Kisumu.",
    image: lakeResearchImg,
    theme: "emerald"
  },
  {
    year: "2011",
    tag: "Social Safeguards",
    title: "Pioneering Social Safeguards & Feasibility Studies",
    description: "Expanded scientific boundaries to include Resettlement Action Plans (RAP) and socio-economic profiling, bridging empirical soil mechanics with human rights.",
    image: communityBarazaImg,
    theme: "blue"
  },
  {
    year: "2014",
    tag: "Incorporation",
    title: "Formal Incorporation & NEMA Firm Accreditation",
    description: "Hope Urban Environmental and Research Investment Limited was officially incorporated in Kenya with headquarters in Milimani Estate, Kisumu.",
    image: nemaAccreditationImg,
    theme: "teal"
  },
  {
    year: "2018",
    tag: "Infrastructure",
    title: "Strategic Partnerships & Regional Infrastructure Mandates",
    description: "Formed key operational partnerships under AWEMAC and regional utilities for state-level building and municipal civil works programs.",
    image: esmpInfrastructureImg,
    theme: "amber"
  },
  {
    year: "2020",
    tag: "Lakeside Policy",
    title: "Lakeside Policy Architecture & Climate Risk Assessments",
    description: "Executed landmark ESIAs and Resettlement Action Plans, including LAPFUND Makasembo Housing and Kisumu County Climate Change Vulnerability Assessment.",
    image: climateVulnerabilityImg,
    theme: "purple"
  },
  {
    year: "2023",
    tag: "Advisory Mandate",
    title: "Sub-National Advisory Board & Green Infrastructure Guidelines",
    description: "Appointed technical advisory body for multiple western Kenya municipal boards, formulating stormwater management drafts and greywater bio-filters.",
    image: waterTreatmentImg,
    theme: "rose"
  },
  {
    year: "Present",
    tag: "Spatial AI",
    title: "Spatial Intelligence, Drone Surveys & High-Dimension GIS",
    description: "Integrating advanced GIS spatial modeling, thermal aerial drones, and interactive public ESG dashboards for regional compliance.",
    image: droneMappingImg,
    theme: "emerald"
  }
];

export default function AboutMilestones() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-700 dark:text-emerald-400 block">
          INSTITUTIONAL EVOLUTION
        </span>
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 dark:text-white">
          Our Historic Milestones (2007–Present)
        </h3>
        <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light">
          From lakeside hydrological baseline research to a licensed national advisory institution executing across all 47 Kenyan counties.
        </p>
      </div>

      <div className="relative">
        {/* Timeline Center Line */}
        <div className="absolute top-0 bottom-0 left-4 md:left-1/2 w-0.5 bg-[#E5DFD5] dark:bg-slate-800 -translate-x-1/2" />

        <div className="space-y-12 sm:space-y-16">
          {milestones.map((m, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <div key={m.year} className={`flex flex-col md:flex-row items-center ${isEven ? '' : 'md:flex-row-reverse'}`}>
                
                {/* Milestone Text Box */}
                <div className="w-full md:w-1/2 px-4 md:px-8">
                  <div
                    className="bg-white dark:bg-[#071a38] p-6 sm:p-8 rounded-3xl border border-[#E5DFD5] dark:border-slate-800 shadow-md relative group hover:border-brand-green-600 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 space-y-3 cursor-pointer"
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-heading font-black text-brand-green-700 dark:text-emerald-400">
                        {m.year}
                      </span>
                      <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-stone-600 dark:text-slate-300 bg-stone-100 dark:bg-slate-800 px-2.5 py-1 rounded-full border border-stone-200 dark:border-slate-700">
                        {m.tag}
                      </span>
                    </div>

                    <h5 className="font-heading font-bold text-base sm:text-lg text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-300 transition-colors leading-snug">
                      {m.title}
                    </h5>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                      {m.description}
                    </p>
                  </div>
                </div>

                {/* Milestone Center Badge */}
                <div className="hidden md:flex absolute left-1/2 transform -translate-x-1/2 items-center justify-center z-10">
                  <div className="h-6 w-6 rounded-full bg-brand-green-600 dark:bg-emerald-400 border-4 border-[#FAF8F5] dark:border-[#071a38] shadow-md" />
                </div>

                {/* Milestone Photographic Showcase */}
                <div className="w-full md:w-1/2 px-4 md:px-8 mt-4 md:mt-0">
                  <div className="overflow-hidden rounded-3xl border border-[#E5DFD5] dark:border-slate-700 shadow-md group bg-slate-900 h-52 sm:h-60 relative">
                    <img 
                      src={m.image} 
                      alt={m.title} 
                      className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 filter brightness-100 contrast-105"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity" />
                    <div className="absolute bottom-3 left-4 text-white text-[11px] font-mono text-emerald-300 font-bold">
                      {m.year} • Historical Record
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
