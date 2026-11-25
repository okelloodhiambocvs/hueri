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
import droneMappingImg from '../../assets/images/african_drone_gis_survey_1795601151935.jpg';
// @ts-ignore
import nemaAccreditationImg from '../../assets/images/milestone_nema_accreditation_1786291821996.jpg';
// @ts-ignore
import esmpInfrastructureImg from '../../assets/images/african_infrastructure_esmp_field_1795601153669.jpg';
// @ts-ignore
import climateVulnerabilityImg from '../../assets/images/milestone_climate_vulnerability_1786291850669.jpg';
// @ts-ignore
import waterTreatmentImg from '../../assets/images/milestone_water_treatment_1786291862994.jpg';
// @ts-ignore
import structuralDeckImg from '../../assets/images/kenyan_urban_construction_hero_1795601148520.jpg';

export const milestones = [
  {
    year: '2007',
    tag: 'Origins',
    title: 'Scientific Origins & Winam Gulf Research Alliance',
    description: 'Founded as an informal assembly of passionate lakeside hydrologists, community advocates, and environmental scholars. Published inaugural community watershed resource maps in Kisumu.',
    image: lakeResearchImg,
    alt: 'Kenyan environmental scientists conducting Lake Victoria watershed baseline sampling'
  },
  {
    year: '2011',
    tag: 'Social Safeguards',
    title: 'Pioneering Social Safeguards & Feasibility Studies',
    description: 'Expanded scientific boundaries to include Resettlement Action Plans (RAP) and socio-economic profiling, bridging empirical soil mechanics with human rights.',
    image: communityBarazaImg,
    alt: 'Kenyan community consultation baraza on resettlement action planning'
  },
  {
    year: '2014',
    tag: 'Incorporation',
    title: 'Formal Incorporation & NEMA Firm Accreditation',
    description: 'Hope Urban Environmental and Research Investments Limited was officially incorporated in Kenya with headquarters in Milimani Estate, Kisumu.',
    image: nemaAccreditationImg,
    alt: 'HUERI environmental consultants reviewing statutory GIS assessments in Kenya'
  },
  {
    year: '2018',
    tag: 'Infrastructure',
    title: 'Strategic Partnerships & Regional Infrastructure Mandates',
    description: 'Formed key operational partnerships under AWEMAC and regional utilities for state-level building and municipal civil works programs.',
    image: esmpInfrastructureImg,
    alt: 'East African engineers inspecting drainage culverts and slope stabilization ESMP works'
  },
  {
    year: '2020',
    tag: 'Lakeside Policy',
    title: 'Lakeside Policy Architecture & Climate Risk Assessments',
    description: 'Executed landmark ESIAs and Resettlement Action Plans, including LAPFUND Makasembo Housing and Kisumu County Climate Change Vulnerability Assessment.',
    image: climateVulnerabilityImg,
    alt: 'Kenyan climate researcher assessing Lake Victoria wetland resilience'
  },
  {
    year: '2023',
    tag: 'Advisory Mandate',
    title: 'Sub-National Advisory Board & Green Infrastructure Guidelines',
    description: 'Appointed technical advisory body for multiple western Kenya municipal boards, formulating stormwater management drafts and greywater bio-filters.',
    image: waterTreatmentImg,
    alt: 'Kenyan environmental engineer inspecting constructed greywater treatment wetland'
  },
  {
    year: '2024–2025',
    tag: 'ESHSRIM Supervision',
    title: 'High-Rise Construction Safeguards & OHS Safety Oversight',
    description: 'Deployed resident environmental and occupational safety supervision teams, overseeing contractor C-ESMP compliance, concrete slab safety, and PPE enforcement across high-density urban residential blocks.',
    image: structuralDeckImg,
    alt: 'Kenyan engineers supervising structural deck safety and C-ESMP compliance in Kisumu'
  },
  {
    year: 'Present',
    tag: 'Spatial Intelligence',
    title: 'Spatial Intelligence, Drone Surveys & High-Dimension GIS',
    description: 'Integrating advanced GIS spatial modeling, aerial survey drones, and interactive public ESG compliance systems for Kenyan and pan-African assignments.',
    image: droneMappingImg,
    alt: 'Kenyan GIS surveyor operating mapping drone over terraced East African landscape'
  }
];

export default function AboutMilestones() {
  return (
    <div className="space-y-12">
      <div className="text-center max-w-2xl mx-auto space-y-2">
        <span className="text-xs font-mono font-bold tracking-widest uppercase text-[#006B22] dark:text-[#4ADE80] block">
          INSTITUTIONAL EVOLUTION
        </span>
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#003B95] dark:text-white">
          Our Historic Milestones (2007–Present)
        </h3>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light">
          From lakeside hydrological baseline research to an established Kenyan advisory firm supporting assignments across Africa and global partnerships.
        </p>
      </div>

      <div className="space-y-4">
        {milestones.map((m, idx) => {
          const isEven = idx % 2 === 0;
          return (
            <div key={m.year} className={`py-8 grid md:grid-cols-12 gap-8 items-center`}>
              <div className={`md:col-span-6 space-y-3 ${isEven ? '' : 'md:order-2'}`}>
                <div className="flex items-center gap-3">
                  <span className="text-2xl font-heading font-black text-[#006B22] dark:text-[#4ADE80]">
                    {m.year}
                  </span>
                  <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                    · {m.tag}
                  </span>
                </div>

                <h4 className="font-heading font-bold text-base sm:text-lg text-[#003B95] dark:text-white leading-snug">
                  {m.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                  {m.description}
                </p>
              </div>

              <div className={`md:col-span-6 ${isEven ? '' : 'md:order-1'}`}>
                <div className="overflow-hidden bg-slate-100 dark:bg-slate-900 h-52 sm:h-60">
                  <img
                    src={m.image}
                    alt={m.alt}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
