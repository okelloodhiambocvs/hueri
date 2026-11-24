/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { serviceSummaries, ServiceCardSummary } from './serviceRoutes';

export const HOME_SECTION_ORDER = [
  'hero',
  'grounded',
  'assignments',
  'practices',
  'disciplines',
  'consortia',
  'sectors'
] as const;

export const HOME_HERO_CONTENT = {
  line1: 'Trusted Environmental',
  line2: '& Safeguards Advisory',
  description:
    'Kenyan environmental, social, climate, and safety consultancy supporting developers, financiers, and public agencies across Africa.'
};

export interface ConsolidatedPillar {
  id: string;
  num: string;
  title: string;
  desc: string;
}

export const consolidatedPillars: ConsolidatedPillar[] = [
  {
    id: 'service-pillar-1',
    num: '01',
    title: 'Environmental Impact Assessment',
    desc: 'Environmental and social impact assessments, strategic assessments, and project approvals.'
  },
  {
    id: 'service-pillar-2',
    num: '02',
    title: 'Social Safeguards & Resettlement',
    desc: 'Resettlement Action Plans (RAP), socio-economic census, asset valuation, livelihood restoration & barazas.'
  },
  {
    id: 'service-pillar-3',
    num: '03',
    title: 'Climate Resilience & Ecology',
    desc: 'Climate vulnerability profiling, hydrological modeling, biodiversity baselines, and nature-based solutions.'
  },
  {
    id: 'service-pillar-4',
    num: '04',
    title: 'Safety & Compliance Audits',
    desc: 'Annual environmental compliance audits, workplace occupational health & safety (OHS), and waste monitoring.'
  },
  {
    id: 'service-pillar-5',
    num: '05',
    title: 'ESG & Lender Standards',
    desc: 'World Bank ESF, IFC Performance Standards, AfDB ISS, and lender Environmental & Social Due Diligence (ESDD).'
  }
];

export interface FeaturedAssignment {
  id: string;
  imageKey: string;
  title: string;
  client: string;
  role: string;
  location: string;
  year: string;
  status: string;
  evidenceSummary: string;
  outcome: string;
}

export const homeFeaturedAssignments: FeaturedAssignment[] = [
  {
    id: 'p-wema-housing',
    imageKey: 'p-wema-housing',
    title: 'Multi-Storey Residential Housing Development ESIA',
    client: 'Wema Magharibi Ltd',
    role: 'Lead EIA Consultant Firm',
    location: 'Kisumu Urban Centre, Kenya',
    year: '2024–2025',
    status: 'Licence obtained',
    evidenceSummary: 'Approved ESIA Study & Licence',
    outcome:
      'Formulated comprehensive ESIA study report, civil stormwater plans, and secured Environmental Clearance Licence.'
  },
  {
    id: 'p-makasembo',
    imageKey: 'p-makasembo',
    title: 'Makasembo Estate Multi-Storey Housing RAP & EIA',
    client: 'Local Authorities Pension Trust (LAPFUND)',
    role: 'Lead Environmental & Social Safeguards Consultant',
    location: 'Kisumu City, Kenya',
    year: '2020–Present',
    status: 'Ongoing',
    evidenceSummary: 'RAP Technical Dossier & Valuation Schedules',
    outcome:
      'Formulated Resettlement Action Plan (RAP), socio-economic census, asset valuation schedules, and structured community baraza engagement.'
  },
  {
    id: 'p-structural-monitoring',
    imageKey: 'p-structural-monitoring',
    title: 'High-Rise Structural Concrete & OHS Safety Oversight',
    client: 'Regional Urban Developers Consortium',
    role: 'Lead EHS & Construction Supervision Consultant',
    location: 'Western Kenya Region',
    year: '2024–Present',
    status: 'Active Supervision',
    evidenceSummary: 'Site Safety Audit Registers & C-ESMP Logs',
    outcome:
      'Provided real-time contractor environmental, social, health and safety (ESHSRIM) supervision, deck safety audits, and worker PPE compliance.'
  },
  {
    id: 'p-flloca',
    imageKey: 'p-flloca',
    title: 'FLLoCA Climate-Resilient Infrastructure Assessments',
    client: 'County Government of Siaya',
    role: 'Environmental Safeguards & Screening Consultant',
    location: 'Siaya County, Kenya',
    year: '2023–Present',
    status: 'Ongoing',
    evidenceSummary: 'Sub-Project Screening Registers & ESMPs',
    outcome:
      'Conducted environmental screenings, community consultation barazas, and site-specific ESMPs for local climate adaptation infrastructure.'
  },
  {
    id: 'p-kisumu-climate',
    imageKey: 'p-kisumu-climate',
    title: 'Kisumu County Climate Change Vulnerability Assessment',
    client: 'County Government of Kisumu',
    role: 'Lead Climate Vulnerability Specialists',
    location: 'Kisumu County, Kenya',
    year: '2023',
    status: 'Completed',
    evidenceSummary: 'County Climate Vulnerability Assessment Report',
    outcome:
      'Conducted spatial GIS vulnerability mapping and sub-county sensitivity profiling to inform county climate adaptation plans.'
  },
  {
    id: 'p-wells-energy',
    imageKey: 'p-wells-energy',
    title: 'ESIA & Statutory Environmental Audits for Petroleum Stations',
    client: 'Wells Energy Limited',
    role: 'Environmental & Safety Auditor',
    location: 'Multiple Sites Across Kenya',
    year: '2024–Present',
    status: 'Ongoing',
    evidenceSummary: 'Annual Environmental Compliance Audit Reports',
    outcome:
      'Performed statutory ESIAs, annual compliance audits, fire safety inspections, and oil-water separator assessments across retail facilities.'
  },
  {
    id: 'p-kisip-ii',
    imageKey: 'p-kisip-ii',
    title: 'Kenya Informal Settlements Improvement Project II (KISIP II)',
    client: 'County Government of Kisumu',
    role: 'Social Safeguards & Grievance Advisor',
    location: 'Informal Settlements, Western Kenya',
    year: '2022–Present',
    status: 'Ongoing',
    evidenceSummary: 'Settlement Consultation & Grievance Registers',
    outcome:
      'Delivered social safeguards technical assistance, community baraza consultations, and grievance redress mechanisms for urban infrastructure.'
  }
];

export const homeAdvisoryDisciplines: ServiceCardSummary[] = serviceSummaries;

export const previewSectors = [
  {
    name: 'Energy & Power',
    desc: 'Solar PV, Wind, Hydro, Geothermal & Transmission',
    imageKey: 'energy-power'
  },
  {
    name: 'Transport & Logistics',
    desc: 'Highways, Rail, Maritime Ports & Trade Corridors',
    imageKey: 'transport-logistics'
  },
  {
    name: 'Water & Sanitation',
    desc: 'Dams, Boreholes, Irrigation & Catchment Basins',
    imageKey: 'water-sanitation'
  },
  {
    name: 'Urban Built Environment',
    desc: 'Housing, Special Economic Zones & Municipal Works',
    imageKey: 'urban-built-env'
  },
  {
    name: 'Carbon & Nature Markets',
    desc: 'Article 6, REDD+, Blue Carbon & Green Bonds',
    imageKey: 'carbon-nature-finance'
  }
];
