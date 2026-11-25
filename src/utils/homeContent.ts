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
  'deliverySteps',
  'consortia'
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
  slug: string;
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
    slug: 'multi-storey-residential-housing-esia',
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
    slug: 'makasembo-estate-housing-rap-eia',
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
    slug: 'high-rise-structural-ohs-oversight',
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
    slug: 'flloca-climate-resilient-infrastructure',
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
    slug: 'kisumu-county-climate-vulnerability-assessment',
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
    slug: 'wells-energy-petroleum-esia-audits',
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
    slug: 'kisip-ii-informal-settlements-safeguards',
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

export type DeliveryStepIcon =
  | 'discussion'
  | 'scoping'
  | 'fieldwork'
  | 'drafting'
  | 'delivery';

export interface ProjectDeliveryStep {
  step: string;
  title: string;
  description: string;
  icon: DeliveryStepIcon;
}

export interface DeliveryFlowNode extends ProjectDeliveryStep {
  index: number;
  isFinal: boolean;
  illustrationAlt: string;
}

const DELIVERY_ILLUSTRATION_ALTS: Record<DeliveryStepIcon, string> = {
  discussion: '3D cartoon environmental consultant welcoming an initial client project discussion',
  scoping: '3D cartoon specialist reviewing site blueprints and survey compass for scoping',
  fieldwork: '3D cartoon field engineer in safety helmet and green vest holding a GIS baseline tablet',
  drafting: '3D cartoon environmental analyst reviewing ecological assessment charts on a clipboard',
  delivery: '3D cartoon senior environmental advisor presenting the approved clearance report dossier'
};

export function buildDeliveryFlowNodes(
  steps: ProjectDeliveryStep[] = projectDeliverySteps
): DeliveryFlowNode[] {
  return steps.map((item, index) => ({
    ...item,
    index,
    isFinal: index === steps.length - 1,
    illustrationAlt: DELIVERY_ILLUSTRATION_ALTS[item.icon]
  }));
}

export const projectDeliverySteps: ProjectDeliveryStep[] = [
  {
    step: '01',
    title: 'Initial Client Discussion',
    description:
      'We begin with a focused discussion on your project scope, location, timelines, and regulatory or financier requirements.',
    icon: 'discussion'
  },
  {
    step: '02',
    title: 'Scoping & Mobilization',
    description:
      'Our lead specialists define study boundaries, review technical designs, and map applicable statutory and lender frameworks.',
    icon: 'scoping'
  },
  {
    step: '03',
    title: 'Field Baselines & Consultations',
    description:
      'Multidisciplinary teams conduct site sampling, GIS mapping, socio-economic surveys, and stakeholder baraza engagements.',
    icon: 'fieldwork'
  },
  {
    step: '04',
    title: 'Technical Assessment & Drafting',
    description:
      'We evaluate impacts, design practical mitigation hierarchies, and compile actionable management and audit plans.',
    icon: 'drafting'
  },
  {
    step: '05',
    title: 'QA/QC & Final Report Delivery',
    description:
      'Following senior peer review, we deliver the final report, support statutory submissions, and guide clearance approval.',
    icon: 'delivery'
  }
];
