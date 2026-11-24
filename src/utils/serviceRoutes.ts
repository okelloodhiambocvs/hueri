/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initialServices } from '../server/seedData';
import { Service } from '../types';

export interface ServiceCardSummary {
  id: string;
  slug: string;
  pillarId: string;
  title: string;
  imageKey: string;
  snippet: string;
  deliverablesSummary: string;
}

export const serviceSummaries: ServiceCardSummary[] = [
  {
    id: 'eia-esia',
    slug: 'environmental-impact-assessment',
    pillarId: 'service-pillar-1',
    title: 'Environmental Impact Assessment',
    imageKey: 'eia-esia',
    snippet: 'Project screening, scoping, baseline studies, and impact management plans for regulatory and lender approvals.',
    deliverablesSummary: 'Deliverables include EIA and ESIA study reports, strategic assessments, and construction management plans.'
  },
  {
    id: 'rap-livelihoods',
    slug: 'resettlement-action-plans',
    pillarId: 'service-pillar-2',
    title: 'Resettlement Action Plans & Livelihoods',
    imageKey: 'rap-livelihoods',
    snippet: 'Structured land acquisition frameworks, socio-economic surveys, asset valuation, and community consultation.',
    deliverablesSummary: 'Deliverables include approved RAP dossiers, entitlement matrices, and livelihood restoration plans.'
  },
  {
    id: 'env-compliance-audits',
    slug: 'environmental-compliance-audits',
    pillarId: 'service-pillar-3',
    title: 'Environmental Compliance & Annual Audits',
    imageKey: 'env-compliance-audits',
    snippet: 'Annual environmental compliance audits for operating facilities, waste reviews, and corrective action planning.',
    deliverablesSummary: 'Deliverables include annual audit reports, compliance gap analyses, and corrective action schedules.'
  },
  {
    id: 'ohs-safety',
    slug: 'occupational-health-safety',
    pillarId: 'service-pillar-3',
    title: 'Occupational Health & Safety',
    imageKey: 'ohs-safety',
    snippet: 'Workplace safety audits, hazard identification, fire safety reviews, and on-site construction safety supervision.',
    deliverablesSummary: 'Deliverables include workplace safety audit reports, risk assessments, and emergency preparedness plans.'
  },
  {
    id: 'climate-resilience',
    slug: 'climate-change-ecology',
    pillarId: 'service-pillar-4',
    title: 'Climate Change & Ecology',
    imageKey: 'climate-biodiversity',
    snippet: 'Climate vulnerability assessments, greenhouse gas accounting, biodiversity baselines, and nature-based resilience.',
    deliverablesSummary: 'Deliverables include climate vulnerability profiles, GHG inventories, and biodiversity action plans.'
  },
  {
    id: 'hydro-water',
    slug: 'water-resources-catchment',
    pillarId: 'service-pillar-4',
    title: 'Water Resources & Catchment Management',
    imageKey: 'hydro-water',
    snippet: 'Hydrogeological surveys, water quality sampling, abstraction permitting support, and riparian conservation.',
    deliverablesSummary: 'Deliverables include hydrogeological reports, water quality baselines, and wetland conservation plans.'
  },
  {
    id: 'esdd-esg',
    slug: 'esg-lender-due-diligence',
    pillarId: 'service-pillar-5',
    title: 'ESG & Lender Due Diligence',
    imageKey: 'esg-sustainability',
    snippet: 'Independent environmental and social due diligence, gap analyses, and bankable action plans for financiers.',
    deliverablesSummary: 'Deliverables include ESDD review reports, corporate ESG frameworks, and environmental action plans.'
  },
  {
    id: 'gis-drone',
    slug: 'drone-mapping-corridor-gis',
    pillarId: 'service-pillar-4',
    title: 'Drone Mapping & Corridor GIS',
    imageKey: 'research-surveys',
    snippet: 'Aerial photogrammetry, elevation modeling, wayleave corridor mapping, and construction progress tracking.',
    deliverablesSummary: 'Deliverables include aerial orthomosaics, elevation models, and georeferenced corridor maps.'
  },
  {
    id: 'eshsrim-training',
    slug: 'eshsrim-procedures-training',
    pillarId: 'service-pillar-5',
    title: 'ESHSRIM Procedures Training',
    imageKey: 'eshsrim-training',
    snippet: 'Practical training on environmental, social, health, and safety risk procedures for teams and practitioners.',
    deliverablesSummary: 'Deliverables include tailored procedures manuals, inspection toolkits, and participant certificates.'
  }
];

const extraServiceDetails: Record<string, Service> = {
  'env-compliance-audits': {
    id: 'env-compliance-audits',
    title: 'Environmental Compliance & Annual Audits',
    slug: 'environmental-compliance-audits',
    icon: 'ClipboardCheck',
    practiceCategory: 'Compliance & Auditing',
    shortDescription:
      'Annual environmental compliance audits for operating industrial, commercial, and infrastructure facilities.',
    overview:
      'HUERI conducts independent annual environmental audits for operating facilities to evaluate ongoing operational impacts, waste streams, effluent discharge, emissions, and compliance with project licence conditions. We work alongside plant managers and technical teams to design practical corrective action plans that maintain uninterrupted legal standing.',
    deliveryModelNote:
      'Delivered through site inspections, laboratory sampling, document verification, and regulatory submission support.',
    methodology: [
      'Pre-Audit Document Review: Examining existing environmental licences, monitoring logs, and prior audit recommendations.',
      'On-Site Facility Inspection: Assessing emissions, effluent treatment, chemical storage, noise, and waste segregation.',
      'Laboratory Testing & Benchmarking: Sampling water, wastewater, air, and soil parameters against applicable thresholds.',
      'Non-Conformance & Gap Analysis: Identifying operational compliance gaps and prioritizing risk-ranked interventions.',
      'Corrective Action Plan (CAP) Design: Establishing clear timelines, responsibilities, and monitoring indicators.'
    ],
    deliverables: [
      'Annual Environmental Audit Reports',
      'Environmental Compliance Monitoring & Gap Analyses',
      'Effluent Discharge Compliance Submissions',
      'Corrective Action Plans with Implementation Milestones'
    ],
    benefits: [
      'Maintains continuous regulatory compliance for operating facilities.',
      'Identifies operational inefficiencies in water, energy, and waste handling.',
      'Provides verifiable compliance records for investors and regulators.'
    ],
    internationalAlignment: [
      'Annual Environmental Audit Frameworks',
      'ISO 14001 Environmental Management Principles',
      'World Bank Group EHS Guidelines'
    ],
    caseExamples: [
      {
        client: 'Wells Energy Limited',
        description: 'Annual environmental and safety compliance audits across commercial fuel stations.',
        outcome: 'Maintained full regulatory standing and verified interceptor and waste handling compliance.'
      }
    ]
  },
  'hydro-water': {
    id: 'hydro-water',
    title: 'Water Resources & Catchment Management',
    slug: 'water-resources-catchment',
    icon: 'Droplets',
    practiceCategory: 'Hydrology & Freshwater Sciences',
    shortDescription:
      'Hydrogeological surveys, water quality sampling, abstraction permitting support, and riparian conservation.',
    overview:
      'HUERI supports water utilities, agricultural schemes, and industrial developers with hydrogeological investigations, surface and groundwater quality monitoring, aquatic ecosystem assessments, and watershed conservation planning across Kenya and the Lake Victoria basin.',
    deliveryModelNote:
      'Delivered through field geophysical surveys, accredited laboratory water analysis, and hydrological modeling.',
    methodology: [
      'Catchment & Desk Hydrological Review: Mapping drainage networks, recharge zones, and seasonal flow profiles.',
      'Geophysical & Hydrogeological Surveys: Conducting vertical electrical sounding and aquifer yield assessments.',
      'Water Quality & Aquatic Sampling: Measuring physicochemical and biological water indicators across sampling stations.',
      'Riparian & Wetland Delineation: Mapping buffer zones and sensitive aquatic habitats.',
      'Permitting & Conservation Planning: Preparing abstraction permit dossiers and catchment protection plans.'
    ],
    deliverables: [
      'Hydrogeological Survey Reports & Aquifer Models',
      'Surface & Groundwater Quality Analytical Baselines',
      'Water Abstraction & Use Permit Technical Submissions',
      'Wetland Delineation & Riparian Conservation Plans'
    ],
    benefits: [
      'Establishes reliable yield and water quality baselines before capital investment.',
      'Protects freshwater ecosystems and downstream water users.',
      'Supports timely water resource permitting.'
    ],
    internationalAlignment: [
      'Water Resource Management Regulations',
      'Lake Victoria Basin Water Quality Protocols',
      'IFC Performance Standard 3 & 6'
    ],
    caseExamples: [
      {
        client: 'Lake Victoria Basin Water Utilities & Catchment Programmes',
        description: 'Baseline water quality sampling, riparian corridor delineation, and hydrogeological surveys.',
        outcome: 'Delivered verified water quality datasets and catchment management inputs supporting abstraction permitting.'
      }
    ]
  },
  'gis-drone': {
    id: 'gis-drone',
    title: 'Drone Mapping & Corridor GIS',
    slug: 'drone-mapping-corridor-gis',
    icon: 'Compass',
    practiceCategory: 'Geospatial Analytics',
    shortDescription:
      'High-resolution aerial photogrammetry, digital elevation models, wayleave mapping, and site monitoring.',
    overview:
      'HUERI deploys drone photogrammetry and geographic information systems (GIS) to produce accurate spatial baselines for linear corridors, urban developments, watersheds, and construction sites. Our geospatial deliverables help engineering and safeguards teams visualize terrain, settlements, and environmental constraints early.',
    deliveryModelNote:
      'Delivered via licensed aerial survey operations, RTK/PPK georeferencing, and GIS spatial database engineering.',
    methodology: [
      'Flight Planning & Ground Control: Establishing survey grids and ground control points for high positional accuracy.',
      'Aerial Imagery Acquisition: Capturing high-resolution nadir and oblique imagery across project corridors and sites.',
      'Photogrammetric Processing: Generating georeferenced orthomosaics, Digital Surface Models, and contours.',
      'Cadastral & Environmental Overlays: Integrating land parcel boundaries, ecological zones, and infrastructure alignments.',
      'Time-Series Progress Monitoring: Repeating flights during construction to track earthworks and rehabilitation.'
    ],
    deliverables: [
      'Centimeter-Accurate Aerial Orthomosaics & Elevation Models',
      'Wayleave & Right-of-Way Cadastral Overlays',
      'Corridor Alignment Suitability & Constraint Maps',
      'Time-Series Construction & Revegetation Monitoring Packs'
    ],
    benefits: [
      'Reduces field survey turnaround times across large or difficult terrain.',
      'Improves accuracy of resettlement inventories and engineering routing.',
      'Creates visual, auditable baseline records before construction starts.'
    ],
    internationalAlignment: [
      'National Civil Aviation Drone Operations Guidelines',
      'Spatial Data Infrastructure Best Practices'
    ],
    caseExamples: [
      {
        client: 'Regional Linear Corridor & Urban Infrastructure Developers',
        description: 'High-resolution aerial photogrammetry and GIS wayleave constraint mapping.',
        outcome: 'Accelerated corridor alignment screening and reduced field survey turnaround across sensitive terrain.'
      }
    ]
  }
};

const serviceIdAliases: Record<string, string> = {
  'climate-resilience': 'climate-biodiversity',
  'esdd-esg': 'esg-sustainability',
  'service-pillar-1': 'eia-esia',
  'service-pillar-2': 'rap-livelihoods',
  'service-pillar-3': 'env-compliance-audits',
  'service-pillar-4': 'climate-biodiversity',
  'service-pillar-5': 'esg-sustainability'
};

export function getServiceSummaryByIdOrSlug(idOrSlug: string): ServiceCardSummary {
  const normalized = (idOrSlug || '').trim().toLowerCase();
  const found = serviceSummaries.find(
    (s) => s.id === normalized || s.slug === normalized
  );
  if (found) return found;

  const aliased = serviceIdAliases[normalized];
  if (aliased) {
    const byAlias = serviceSummaries.find((s) => s.id === aliased);
    if (byAlias) return byAlias;
  }

  return serviceSummaries[0];
}

export function getServiceDetailByIdOrSlug(idOrSlug: string): Service {
  const normalized = (idOrSlug || '').trim().toLowerCase();
  const summary = serviceSummaries.find(
    (s) => s.id === normalized || s.slug === normalized
  );
  const rawId = summary ? summary.id : normalized;
  const targetId = serviceIdAliases[rawId] || rawId;

  if (extraServiceDetails[targetId]) {
    return extraServiceDetails[targetId];
  }

  const fromSeed = initialServices.find(
    (s) => s.id === targetId || s.slug === normalized
  );
  if (fromSeed) {
    return {
      ...fromSeed,
      title: summary ? summary.title : fromSeed.title
    };
  }

  const fallback = initialServices[0];
  return {
    ...fallback,
    title: serviceSummaries[0].title
  };
}

export function getServiceDetailPath(idOrSlug: string): string {
  const summary = getServiceSummaryByIdOrSlug(idOrSlug);
  return `/services/details/${summary.slug}`;
}

export function resolveServiceSlugFromPath(pathname: string): string | null {
  const cleaned = (pathname || '').replace(/\/$/, '');
  const prefix = '/services/details/';
  if (cleaned.startsWith(prefix)) {
    const slug = cleaned.slice(prefix.length).trim();
    return slug || null;
  }
  return null;
}
