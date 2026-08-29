/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { 
  Service, 
  Sector, 
  PartnershipModel, 
  CorporateCredential, 
  Article, 
  Resource, 
  TeamMember, 
  Project, 
  LeadershipExperience,
  QualityAssurancePillar,
  GovernanceTier
} from '../types';

export const initialServices: Service[] = [
  {
    id: "eia-esia",
    title: "Environmental & Social Assessment (EIA / ESIA / SEA / ESMF)",
    slug: "environmental-and-social-assessment",
    icon: "ShieldAlert",
    practiceCategory: "Statutory & International Safeguards",
    shortDescription: "Comprehensive screening, scoping, impact assessment, and ESMP formulation bridging Kenyan statutory requirements and international lender benchmarks.",
    overview: "HUERI supports project proponents, public authorities, and financing institutions to identify, assess, manage, and monitor environmental and social risks across the project lifecycle. We deliver statutory EIA/ESIA studies, Strategic Environmental Assessments (SEA), Environmental and Social Management Frameworks (ESMF), and Contractor C-ESMPs structured to meet regulatory and lender standards.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Inception & Scoping Protocol: Defining project baseline boundaries against statutory EMCA Cap 387 and lender guidelines (IFC PS1, World Bank ESS1, AfDB ISS).",
      "Multidisciplinary Baseline Investigations: Ambient air quality, acoustic baseline surveys, soil characterization, biodiversity inventories, and hydrological assessments.",
      "Quantitative & Qualitative Significance Matrices: Evaluating magnitude, sensitivity, duration, reversibility, and cumulative impacts.",
      "Mitigation Hierarchy Architecture: Prioritizing avoidance and minimization over mitigation to reduce residual environmental footprint.",
      "Comprehensive ESMP & C-ESMP Design: Actionable operational schedules, monitoring indicators, and contractor compliance specifications."
    ],
    deliverables: [
      "Consolidated ESIA / EIA Study Dossier (NEMA & Lender Aligned)",
      "Strategic Environmental Assessment (SEA) Policy Reports",
      "Environmental & Social Management Plan (ESMP & C-ESMP)",
      "Statutory NEMA Licence Approvals"
    ],
    benefits: [
      "Clear regulatory compliance under Kenyan law and regional statutory frameworks.",
      "Alignment with international financing standards (World Bank ESF, IFC PS, AfDB).",
      "Structured risk mitigation to support predictable project timelines."
    ],
    internationalAlignment: [
      "Kenyan EMCA Cap 387 & Environmental (Impact Assessment and Audit) Regulations",
      "World Bank Environmental and Social Framework (ESS1-ESS10)",
      "IFC Performance Standards (PS1-PS8)",
      "AfDB Integrated Safeguards System (ISS)"
    ],
    caseExamples: [
      {
        client: "Wema Magharibi Ltd",
        description: "Multi-storey residential housing infrastructure ESIA in Kisumu Urban Centre.",
        outcome: "Secured statutory NEMA clearance with tailored stormwater, drainage, and effluent management plans."
      },
      {
        client: "County Government of Siaya",
        description: "Comprehensive EIA for eco-tourism and infrastructure developments in Got Ramogi Forest.",
        outcome: "Attained NEMA approval with ecological buffer zones safeguarding indigenous biodiversity and cultural heritage."
      }
    ]
  },
  {
    id: "rap-livelihoods",
    title: "Land Acquisition, Resettlement Action Planning (RAP) & Livelihoods",
    slug: "land-resettlement-livelihoods",
    icon: "SquareUserRound",
    practiceCategory: "Social Safeguards & Land Rights",
    shortDescription: "Structured land acquisition frameworks, asset valuation, livelihood restoration planning, and community socio-economic census.",
    overview: "Where infrastructure, energy, or urban developments entail land acquisition, physical displacement, economic disruption, or access restrictions, HUERI delivers Resettlement Policy Frameworks (RPF), Resettlement Action Plans (RAP), Abbreviated RAPs (ARAP), and Livelihood Restoration Plans (LRP) aligned with statutory requirements and international benchmarks.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Cadastral Overlays & Boundary Delineation: Delineation of project wayleaves and affected parcels.",
      "Socioeconomic Census: Household demographic mapping, vulnerability profiling, and tenure assessment.",
      "Asset Inventory & Replacement Cost Valuation: Systematic inventory of structures, crops, land, and communal assets with registered valuers.",
      "Livelihood Restoration Matrices: Agricultural support, enterprise transition, and vulnerable household assistance.",
      "Implementation Monitoring: Frameworks for post-compensation living standard verification."
    ],
    deliverables: [
      "Approved Resettlement Action Plan (RAP / ARAP / RPF)",
      "Verified Compensation & Entitlement Matrices",
      "Socioeconomic Household Baseline Database",
      "Grievance Redress Framework & Monitoring Logs"
    ],
    benefits: [
      "Respects property rights and human dignity of Project Affected Persons (PAPs).",
      "Minimizes social disruption and community disputes through transparent engagement.",
      "Aligns with lender requirements under World Bank ESS5 and IFC PS5."
    ],
    internationalAlignment: [
      "Constitution of Kenya (Article 40 - Protection of Right to Property)",
      "World Bank ESS5 (Land Acquisition, Restrictions on Land Use & Involuntary Resettlement)",
      "IFC Performance Standard 5",
      "AfDB Involuntary Resettlement Policy"
    ],
    caseExamples: [
      {
        client: "Local Authorities Pension Trust (LAPFUND)",
        description: "Resettlement Action Plan (RAP) for Makasembo Estate multi-storey housing development.",
        outcome: "Structured relocation and socio-economic support framework for tenant families with community barazas and grievance mechanisms."
      },
      {
        client: "Kisumu Urban Project (KUP)",
        description: "Socio-economic assessment and wayleave review for urban infrastructure corridors.",
        outcome: "Supported municipal corridor clearance and structured contractor site handover."
      }
    ]
  },
  {
    id: "stakeholder-social",
    title: "Stakeholder Engagement, Social Performance & Human Rights",
    slug: "stakeholder-engagement-social-performance",
    icon: "Users",
    practiceCategory: "Social Safeguards & Governance",
    shortDescription: "Stakeholder mapping, public participation, grievance redress mechanisms (GRM), FPIC, gender inclusion, and social risk assessment.",
    overview: "Meaningful engagement is central to sustainable development. HUERI establishes structured, culturally appropriate relationships with host communities, vulnerable groups, county administrations, and regulators, creating functional Grievance Redress Mechanisms (GRM) and managing social risks.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Stakeholder Identification & Analysis: Identifying primary stakeholders, vulnerable groups, and institutional custodians.",
      "Informed Public Participation Protocols: Designing multilingual community barazas and accessible consultation forums.",
      "Tiered Grievance Redress Mechanism (GRM): Establishing localized dispute resolution committees with clear escalation pathways.",
      "Gender & Social Inclusion (GESI) Safeguards: Dedicated consultation channels for women, youth, and persons with disabilities.",
      "Human Rights & Social Risk Assessment: Workplace codes of conduct and SEA/SH prevention protocols."
    ],
    deliverables: [
      "Stakeholder Engagement Plan (SEP)",
      "Operational Grievance Redress Framework & Registers",
      "SEA/SH Prevention and Response Protocols",
      "Social Impact Assessment (SIA) & Gender Action Plans"
    ],
    benefits: [
      "Builds constructive relationships with community stakeholders and local administrations.",
      "Provides accessible channels to resolve grievances before escalation.",
      "Strengthens project social performance and institutional reputation."
    ],
    internationalAlignment: [
      "World Bank ESS10 (Stakeholder Engagement and Information Disclosure)",
      "IFC Performance Standard 1 & 7 (Indigenous Peoples / FPIC)",
      "UN Guiding Principles on Business and Human Rights",
      "ILO Core Labour Conventions"
    ],
    caseExamples: [
      {
        client: "County Government of Kisumu (KISIP II)",
        description: "Community-level stakeholder engagement, social safeguards, and grievance management for informal settlement upgrading.",
        outcome: "Facilitated participatory upgrading of access roads, water reticulation, and lighting with active settlement executive committees."
      }
    ]
  },
  {
    id: "ohs-safety",
    title: "Occupational & Community Health and Safety (OHS / DOSHS)",
    slug: "occupational-community-health-safety",
    icon: "HeartPulse",
    practiceCategory: "Health, Safety & Environment",
    shortDescription: "Statutory workplace safety audits, OSHA 2007 compliance, construction site safety oversight, emergency response, and community hazard controls.",
    overview: "HUERI supports clients in preventing workplace incidents, managing contractor safety, and protecting surrounding communities from project-related hazards. Our advisory includes statutory annual OSH audits, Fire Safety assessments, HAZOP reviews, and contractor ESHS oversight.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Hazard Identification & Risk Assessment (HIRA): Systematic evaluation of physical, chemical, biological, and ergonomic hazards.",
      "Statutory Audits: Independent compliance verification under the Occupational Safety and Health Act (OSHA 2007).",
      "Contractor ESHS Construction Supervision: Regular safety inspections, toolbox briefings, PPE verification, and incident reviews.",
      "Community Health & Safety Planning: Traffic management plans, pedestrian buffers, and dust/noise mitigation.",
      "Emergency Preparedness: Evacuation plans, spill response protocols, and emergency response procedures."
    ],
    deliverables: [
      "Statutory Annual OSH & Fire Safety Audit Reports",
      "Project Occupational Health & Safety Plan (OHSP)",
      "Contractor ESHS Compliance Monitoring Registers",
      "Emergency Response & Preparedness Plans"
    ],
    benefits: [
      "Reduces workplace incident risks and liabilities.",
      "Maintains compliance with statutory DOSHS regulations.",
      "Protects worker health and promotes safe operating environments."
    ],
    internationalAlignment: [
      "Occupational Safety and Health Act (OSHA 2007)",
      "World Bank Group General EHS Guidelines",
      "ISO 45001:2018 (Occupational Health & Safety)",
      "IFC Performance Standards 2 & 4"
    ],
    caseExamples: [
      {
        client: "Wells Energy Limited",
        description: "Annual environmental and safety audits across commercial petroleum retail service stations.",
        outcome: "Maintained statutory regulatory compliance with NEMA and EPRA guidelines."
      }
    ]
  },
  {
    id: "climate-biodiversity",
    title: "Climate Resilience, Biodiversity & Natural Resource Management",
    slug: "climate-biodiversity-natural-resources",
    icon: "TreePine",
    practiceCategory: "Climate & Ecological Sciences",
    shortDescription: "Climate vulnerability assessments, GHG footprinting, adaptation planning, ecological surveys, hydrology, hydrogeology, and nature-based solutions.",
    overview: "HUERI delivers scientific climate vulnerability assessments, carbon footprint estimation, biodiversity baseline inventories, wetland delineations, hydrological catchment analysis, and hydrogeological surveys.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Climate Risk & Vulnerability Assessment (CRVA): Localized climate projections, flood risk screening, and drought sensitivity analysis.",
      "Greenhouse Gas (GHG) Accounting: Emissions estimation under recognized IPCC methodologies.",
      "Biodiversity Baseline & Ecological Surveys: Floral/faunal surveys, sensitive habitat identification, and conservation buffers.",
      "Hydrogeological & Hydrological Surveys: Resistivity profiling, aquifer assessment, and borehole permitting support.",
      "Nature-Based Solutions (NbS) Planning: Catchment restoration, wetland bio-filtration, and soil conservation."
    ],
    deliverables: [
      "County & Sectoral Climate Change Vulnerability Assessments",
      "GHG Emissions & Carbon Management Reports",
      "Hydrogeological Survey Reports & Water Permitting Dossiers",
      "Biodiversity Management & Monitoring Plans (BMP)"
    ],
    benefits: [
      "Strengthens infrastructure resilience against climatic variations.",
      "Generates technical documentation for climate finance and sustainability frameworks.",
      "Supports conservation of critical ecosystems and water catchments."
    ],
    internationalAlignment: [
      "Kenya Climate Change Act & National Climate Change Action Plan",
      "Kunming-Montreal Global Biodiversity Framework",
      "IFC Performance Standard 6 (Biodiversity Conservation)",
      "Water Act 2016 & Water Resources Authority (WRA) Guidelines"
    ],
    caseExamples: [
      {
        client: "County Government of Kisumu",
        description: "Formulation of the Kisumu County Climate Change Vulnerability Assessment across sub-counties.",
        outcome: "Delivered empirical baseline vulnerability report informing county climate adaptation strategies."
      },
      {
        client: "County Government of Siaya (FLLoCA Programme)",
        description: "Environmental and climate screening for Financing Locally-Led Climate Action infrastructure investments.",
        outcome: "Verified environmental and social compliance for community water and flood resilience projects."
      }
    ]
  },
  {
    id: "esg-sustainability",
    title: "ESG & Corporate Sustainability Advisory",
    slug: "esg-sustainability-advisory",
    icon: "BarChart3",
    practiceCategory: "Corporate Governance & Sustainable Finance",
    shortDescription: "ESG due diligence, materiality assessments, sustainability strategy, supply chain ESHS compliance, and ESG reporting support.",
    overview: "HUERI assists enterprises, project developers, and investment institutions to incorporate Environmental, Social, and Governance (ESG) considerations into corporate operations, due diligence reviews, and operational management.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "ESG Due Diligence & Gap Analysis: Reviewing target assets against regulatory and international E&S benchmarks.",
      "Materiality Assessment: Identifying key environmental, social, and governance risk factors.",
      "Environmental and Social Management System (ESMS) Formulation: Structuring management procedures aligned with ISO principles.",
      "Supply Chain ESHS Reviews: Assessing supplier alignment with labor, safety, and environmental standards.",
      "Sustainability Reporting Support: Assisting with disclosures aligned with GRI and international guidelines."
    ],
    deliverables: [
      "ESG Due Diligence & Risk Review Reports",
      "Corporate Environmental & Social Management System (ESMS)",
      "Sustainability Disclosure Support & Metrics",
      "Corrective Environmental & Social Action Plans (ESAP)"
    ],
    benefits: [
      "Helps meet investor and lender sustainability due diligence requirements.",
      "Reduces operational and regulatory compliance risks.",
      "Improves transparency and corporate accountability."
    ],
    internationalAlignment: [
      "IFC Performance Standards & Equator Principles",
      "Global Reporting Initiative (GRI) Standards",
      "ISO 14001 & ISO 45001 Management Systems",
      "UN Sustainable Development Goals (SDGs)"
    ],
    caseExamples: [
      {
        client: "Regional Investment Syndicate",
        description: "Pre-investment environmental and social due diligence for logistics and warehousing assets in Western Kenya.",
        outcome: "Formulated clear Environmental & Social Action Plan (ESAP) addressing compliance gaps before transaction closure."
      }
    ]
  },
  {
    id: "research-surveys",
    title: "Research, Surveys, GIS & Development Advisory",
    slug: "research-surveys-development-advisory",
    icon: "Compass",
    practiceCategory: "Data Science & Spatial Analytics",
    shortDescription: "Empirical baseline studies, GIS drone mapping, feasibility studies, socio-economic surveys, value-chain assessments, and M&E frameworks.",
    overview: "Credible advisory requires robust field data. HUERI integrates digital mobile surveys, high-resolution GIS spatial analysis, and structured field methodologies to produce reliable evidence for planning, project design, and institutional initiatives.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Digital Field Data Collection: Mobile georeferenced survey tools with data validation protocols.",
      "GIS & Spatial Analytics: Land-use and land-cover mapping, drone imagery analysis, and spatial constraint layers.",
      "Feasibility & Baseline Studies: Environmental, socio-economic, and regulatory baseline documentation.",
      "Monitoring & Evaluation (M&E) Frameworks: Indicator tracking, baseline surveys, and evaluation studies.",
      "Policy & Sectoral Research: Socio-economic analysis and development studies."
    ],
    deliverables: [
      "GIS Spatial Maps & Geodatabases",
      "Baseline Survey Reports & Technical Studies",
      "Monitoring & Evaluation Frameworks",
      "Sectoral Policy & Diagnostic Briefs"
    ],
    benefits: [
      "Provides verifiable evidence for development planning and investments.",
      "Ensures transparent, georeferenced data management.",
      "Enables informed spatial and socio-economic targeting."
    ],
    internationalAlignment: [
      "OECD-DAC Evaluation Quality Standards",
      "Data Protection Principles",
      "Spatial Data Infrastructure Best Practices"
    ],
    caseExamples: [
      {
        client: "Kenya Climate-Smart Agriculture Project (KCSAP)",
        description: "Agricultural baseline environmental screenings and community resource evaluations in the Lake Region.",
        outcome: "Provided structured environmental screening reports supporting community agricultural value-chain interventions."
      }
    ]
  },
  {
    id: "waste-pollution",
    title: "Waste, Wastewater & Pollution Prevention",
    slug: "waste-wastewater-pollution",
    icon: "Recycle",
    practiceCategory: "Environmental Engineering & Pollution Control",
    shortDescription: "Effluent discharge compliance, solid waste management plans, hazardous materials handling protocols, and site contamination assessments.",
    overview: "HUERI assists commercial and industrial operators in managing effluent discharges, developing solid waste management plans, establishing hazardous materials protocols, and assessing site contamination risks.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "Wastewater Sampling & Review: Assessing effluent parameters against NEMA and discharge standards.",
      "Treatment System Review: Technical evaluation of biological, chemical, and nature-based treatment approaches.",
      "Solid Waste Planning: Waste characterization, segregation protocols, and disposal strategies.",
      "Hazardous Materials Management: Handling guidelines for chemicals, fuel residues, and hazardous wastes.",
      "Environmental Site Assessments: Baseline soil and groundwater screening for commercial and industrial properties."
    ],
    deliverables: [
      "Effluent Management & Discharge Compliance Plans",
      "Solid Waste Management Plans",
      "Hazardous Materials Handling Protocols",
      "Environmental Site Assessment Reports"
    ],
    benefits: [
      "Supports compliance with statutory effluent and waste regulations.",
      "Mitigates contamination risks to freshwater bodies and groundwater.",
      "Improves industrial waste segregation and resource efficiency."
    ],
    internationalAlignment: [
      "EMCA (Water Quality Regulations & Waste Management Regulations)",
      "World Bank Group EHS Guidelines for Waste Management",
      "Basel Convention Principles"
    ],
    caseExamples: [
      {
        client: "Commercial Fuel & Retail Operators",
        description: "Effluent monitoring, oil-water interceptor evaluations, and statutory environmental audits.",
        outcome: "Verified compliance with discharge standards and operational environmental management plans."
      }
    ]
  },
  {
    id: "implementation-supervision",
    title: "Project Implementation Support, ESHS Supervision & Compliance Auditing",
    slug: "implementation-supervision-compliance",
    icon: "ClipboardCheck",
    practiceCategory: "Field Supervision & Auditing",
    shortDescription: "ESHS procurement specifications, contractor compliance supervision, incident tracking, and statutory annual environmental audits.",
    overview: "HUERI provides environmental and social supervision during construction and operational phases, verifying contractor ESHS compliance, tracking corrective action plans, and conducting statutory annual audits.",
    deliveryModelNote: "Delivered through HUERI's multidisciplinary team and qualified technical associates or specialist partners, depending on assignment requirements.",
    methodology: [
      "ESHS Procurement Review: Assisting in drafting environmental and safety clauses for contractor bidding.",
      "C-ESMP Verification: Reviewing contractor environmental, social, health, and safety readiness prior to works.",
      "Site Supervision & Inspection: Periodic monitoring of dust, noise, waste, labor conditions, and community safety.",
      "Non-Conformance Tracking: Documenting compliance gaps and verifying corrective action implementation.",
      "Statutory Annual Audits: Independent environmental and safety audits submitted to regulators."
    ],
    deliverables: [
      "ESHS Site Monitoring Reports",
      "Contractor Corrective Action Tracking Registers",
      "Annual Statutory Environmental Audit Reports",
      "Close-Out Environmental Compliance Summaries"
    ],
    benefits: [
      "Provides structured verification of contractor environmental and social commitments.",
      "Maintains verifiable audit records for proponents, financiers, and regulators.",
      "Ensures prompt identification and correction of compliance issues."
    ],
    internationalAlignment: [
      "FIDIC Conditions of Contract (ESHS Provisions)",
      "World Bank Standard Procurement Specifications",
      "NEMA Environmental Audit Regulations",
      "ISO 19011 (Auditing Guidelines)"
    ],
    caseExamples: [
      {
        client: "Municipal Infrastructure Proponents",
        description: "ESHS supervision and compliance tracking across urban renewal civil works in Western Kenya.",
        outcome: "Maintained regular monitoring reporting and structured contractor safety compliance."
      }
    ]
  },
  {
    id: "eshsrim-training",
    title: "Environmental, Social, Health & Safety Risks & Impacts Management (ESHSRIM) Procedures Training",
    slug: "eshsrim-procedures-training",
    icon: "GraduationCap",
    practiceCategory: "Capacity Building & Training",
    shortDescription: "Specialized professional and corporate training on ESHSRIM procedures, compliance frameworks, hazard management, and international safeguard standards for individuals and organizations.",
    overview: "HUERI delivers specialized capacity-building programs in Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures. Tailored for both individuals seeking professional qualification and organizations executing high-stakes infrastructure, energy, and commercial projects, our modular training integrates Kenyan statutory regulations (NEMA EMCA Cap 387, DOSHS OSHA 2007) with international lender benchmarks (World Bank ESF, IFC Performance Standards, AfDB ISS).",
    deliveryModelNote: "Delivered in-person at client premises, our Kisumu training suites, or via interactive executive virtual sessions with verifiable certificates of completion.",
    methodology: [
      "Modular Curriculum Architecture: Structured modules spanning statutory risk screening, hazard identification (HIRA), Contractor C-ESMP implementation, and grievance redress mechanism (GRM) operations.",
      "Hands-On Case Simulations: Real-world infrastructure and industrial scenarios analyzing risk mitigation hierarchies, occupational hazard controls, and environmental incident reporting.",
      "Safeguard Standards Crosswalk: Comparative alignment between national laws (NEMA/DOSHS/WRA) and international lender requirements (IFC PS1-8, World Bank ESS1-10).",
      "Auditing & Supervision Toolkits: Practical training in field inspection checklists, non-conformance tracking registers, and statutory annual environmental audit preparation.",
      "Competency Assessment & Certification: Practical post-training evaluations and accredited institutional certificates of professional competence."
    ],
    deliverables: [
      "Certified ESHSRIM Procedures Training Dossier & Course Manuals",
      "Customized Institutional Risk & Safety Toolkits for Organizations",
      "Practical Field Inspection Checklists & C-ESMP Templates",
      "Accredited Certificates of Professional Competency for Participants"
    ],
    benefits: [
      "Empowers corporate staff and contractors with practical skills to prevent environmental, social, and safety non-compliances.",
      "Accelerates career readiness for individual environmental, health, and safety practitioners.",
      "Reduces institutional legal liabilities and operational disruptions through proactive hazard management."
    ],
    internationalAlignment: [
      "NEMA EMCA Cap 387 EIA & Audit Regulations",
      "DOSHS Occupational Safety and Health Act (OSHA 2007)",
      "World Bank Environmental and Social Framework (ESS1-ESS10)",
      "IFC Performance Standards (PS1, PS2, PS4)",
      "ISO 14001 (Environmental) & ISO 45001 (Occupational Health & Safety)"
    ],
    caseExamples: [
      {
        client: "Infrastructure Contractors & Corporate Project Teams",
        description: "Comprehensive ESHSRIM procedures training for resident site engineers, safety officers, and community liaison officers.",
        outcome: "Equipped over 85 technical personnel with practical hazard mitigation protocols and verified zero-incident compliance."
      },
      {
        client: "Individual Safeguards Practitioners & Graduate Engineers",
        description: "Professional certification masterclass on Environmental & Social Safeguards and statutory NEMA audit compliance.",
        outcome: "Enhanced individual technical competencies in environmental screening, baseline investigations, and reporting."
      }
    ]
  }
];

export const initialSectors: Sector[] = [
  {
    id: "energy-power",
    title: "Energy & Power",
    slug: "energy-power",
    icon: "Zap",
    coverage: ["Solar PV", "Wind Power", "Hydropower", "Geothermal", "Biomass", "Transmission Lines", "Mini-Grids", "Battery Energy Storage"],
    description: "Supporting energy infrastructure development through environmental, social, biodiversity, and land acquisition safeguard studies.",
    keyRisks: ["Wayleaves and land acquisition", "Avian and biodiversity interactions", "Geothermal effluent and emissions", "Hydrological considerations"],
    applicableServices: ["eia-esia", "rap-livelihoods", "climate-biodiversity", "stakeholder-social"]
  },
  {
    id: "oil-gas-petroleum",
    title: "Oil, Gas & Petroleum",
    slug: "oil-gas-petroleum",
    icon: "Flame",
    coverage: ["Storage Terminals", "Distribution Depots", "Retail Service Stations", "LPG Facilities", "Contaminated Sites"],
    description: "Environmental and safety advisory for downstream and midstream petroleum retail and storage facilities.",
    keyRisks: ["Hydrocarbon containment and groundwater protection", "Fire and safety hazards", "Volatile organic emissions", "Decommissioning management"],
    applicableServices: ["eia-esia", "ohs-safety", "waste-pollution", "implementation-supervision"]
  },
  {
    id: "mining-extractives",
    title: "Mining & Extractives",
    slug: "mining-extractives",
    icon: "Pickaxe",
    coverage: ["Quarrying & Aggregates", "Base Metals", "Mineral Processing", "Site Rehabilitation"],
    description: "Environmental and social assessments for quarrying, mining, and site restoration initiatives.",
    keyRisks: ["Dust, noise, and vibration", "Community safety and land use", "Tailings and drainage management", "Site rehabilitation at closure"],
    applicableServices: ["eia-esia", "rap-livelihoods", "stakeholder-social", "waste-pollution"]
  },
  {
    id: "transport-logistics",
    title: "Transport & Logistics",
    slug: "transport-logistics",
    icon: "Truck",
    coverage: ["Highways & Access Roads", "Rail Corridors", "Lake Ports & Jetties", "Logistics Yards"],
    description: "Environmental, social, and road safety assessments for road, transport, and logistics infrastructure.",
    keyRisks: ["Right-of-way displacement and access", "Borrow pit management", "Worker influx and community safety", "Drainage and erosion"],
    applicableServices: ["eia-esia", "rap-livelihoods", "ohs-safety", "implementation-supervision"]
  },
  {
    id: "water-sanitation",
    title: "Water & Sanitation",
    slug: "water-sanitation",
    icon: "Droplets",
    coverage: ["Dams & Water Pans", "Borehole Drilling", "Irrigation Schemes", "Wastewater Treatment", "Catchment Management"],
    description: "Hydrogeological studies, environmental assessments, and catchment protection for water infrastructure.",
    keyRisks: ["Aquifer protection and sustainable yield", "Downstream riparian considerations", "Effluent standard compliance", "Catchment integrity"],
    applicableServices: ["climate-biodiversity", "waste-pollution", "eia-esia", "research-surveys"]
  },
  {
    id: "urban-built-env",
    title: "Urban Development & Built Environment",
    slug: "urban-development-built-environment",
    icon: "Building2",
    coverage: ["Residential Housing", "Commercial Buildings", "Industrial Parks", "Educational & Health Facilities", "Urban Renewal"],
    description: "Statutory ESIAs, traffic considerations, waste management, and social safeguards for urban developments.",
    keyRisks: ["Stormwater runoff and drainage capacity", "Construction noise and dust", "Solid waste and wastewater disposal", "Utility connections"],
    applicableServices: ["eia-esia", "ohs-safety", "waste-pollution", "stakeholder-social"]
  },
  {
    id: "agriculture-nature",
    title: "Agriculture & Natural Resources",
    slug: "agriculture-natural-resources",
    icon: "Wheat",
    coverage: ["Commercial Agribusiness", "Livestock Value Chains", "Fisheries & Aquaculture", "Forestry", "Wetland Management"],
    description: "Environmental and climate screening for agricultural value chains and natural resource conservation.",
    keyRisks: ["Agrochemical management and runoff", "Water resource extraction", "Land-use conversion", "Soil conservation"],
    applicableServices: ["climate-biodiversity", "eia-esia", "research-surveys", "esg-sustainability"]
  },
  {
    id: "industry-manufacturing",
    title: "Industry, Manufacturing & Waste",
    slug: "industry-manufacturing-waste",
    icon: "Factory",
    coverage: ["Agro-Processing", "Building Materials", "Consumer Products", "Waste Management Facilities"],
    description: "Occupational safety, effluent compliance, and environmental audits for industrial and manufacturing enterprises.",
    keyRisks: ["Air emissions and particulates", "Effluent quality and treatment", "Workplace safety hazards", "Industrial solid waste"],
    applicableServices: ["ohs-safety", "waste-pollution", "esg-sustainability", "implementation-supervision"]
  },
  {
    id: "digital-social",
    title: "Digital & Social Infrastructure",
    slug: "digital-social-infrastructure",
    icon: "Network",
    coverage: ["Telecommunications Infrastructure", "Data Facilities", "Regional Health Facilities", "Institutional Campuses"],
    description: "Safeguard studies for connectivity, healthcare, and educational infrastructure projects.",
    keyRisks: ["Wayleave access and community awareness", "Energy efficiency and backup power", "E-waste management", "Community safety"],
    applicableServices: ["eia-esia", "stakeholder-social", "research-surveys", "ohs-safety"]
  },
  {
    id: "carbon-nature-finance",
    title: "Climate Finance & Nature Solutions",
    slug: "climate-finance-carbon-markets",
    icon: "Coins",
    coverage: ["Carbon Projects", "Community Forest Conservation", "Wetland & Catchment Restoration", "Green Investment Safeguards"],
    description: "Environmental and social safeguard reviews, stakeholder engagement, and benefit-sharing considerations for nature-based initiatives.",
    keyRisks: ["Community consultation and FPIC alignment", "Equitable stakeholder benefit-sharing", "Environmental baseline verification"],
    applicableServices: ["climate-biodiversity", "stakeholder-social", "esg-sustainability", "research-surveys"]
  }
];

export const initialProjects: Project[] = [
  {
    id: "p-makasembo",
    title: "Makasembo Estate Multi-Storey Housing Development (RAP & EIA)",
    county: "Kisumu",
    country: "Kenya",
    year: "2020–Ongoing",
    assignmentPeriod: "2020–Present",
    industry: "Urban Housing",
    serviceId: "rap-livelihoods",
    client: "Local Authorities Pension Trust (LAPFUND)",
    assignmentScope: "Formulation of Resettlement Action Plan (RAP), socio-economic census, asset valuation schedules, community baraza consultations, and grievance mechanism design.",
    hueriRole: "Lead Environmental & Social Safeguards Consultant",
    role: "Lead Environmental & Social Safeguards Consultant",
    keyDeliverables: [
      "Resettlement Action Plan (RAP) Formulation",
      "Socio-Economic Household Census & Asset Valuation",
      "Community Consultation Barazas & Stakeholder Engagement",
      "Grievance Redress Mechanism (GRM) Setup"
    ],
    challenge: "Developing a structured resettlement and compensation framework for tenant households prior to multi-storey urban housing construction.",
    solution: "Designed and executed a Resettlement Action Plan (RAP) including socio-economic survey verification, asset valuation matrices, and transparent stakeholder engagement.",
    outcome: "Structured relocation and compensation process, facilitating project progression in alignment with constitutional and safeguard standards.",
    location: "Makasembo Estate, Kisumu City",
    coordinates: { x: 32, y: 56 },
    status: "Ongoing",
    evidenceSummary: "Resettlement Action Plan (RAP) Study Dossier, Socio-Economic Census Records & Grievance Logs",
    evidenceItems: [
      {
        type: "Report",
        description: "Makasembo Resettlement Action Plan (RAP) Technical Study Report",
        status: "Verified",
        isConfidential: true
      },
      {
        type: "Dossier",
        description: "Community Consultation Baraza Records & Stakeholder Engagement Minutes",
        status: "Verified",
        isConfidential: true
      }
    ],
    clientReferenceNote: "Local Authorities Pension Trust (LAPFUND) — Subject to client confidentiality requirements"
  },
  {
    id: "p-wema-housing",
    title: "Multi-Storey Residential Housing Development ESIA",
    county: "Kisumu",
    country: "Kenya",
    year: 2025,
    assignmentPeriod: "2024–2025",
    industry: "Urban Real Estate",
    serviceId: "eia-esia",
    client: "Wema Magharibi Ltd",
    assignmentScope: "Statutory Environmental & Social Impact Assessment (ESIA), stormwater management design, acoustic and traffic mitigation planning, and NEMA licensing.",
    hueriRole: "NEMA Lead EIA Consultant Firm",
    role: "NEMA Lead EIA Consultant",
    keyDeliverables: [
      "Statutory ESIA Study Report",
      "Stormwater & Effluent Management Plan",
      "Traffic & Acoustic Impact Mitigation Protocol",
      "NEMA Environmental Licence"
    ],
    challenge: "Planning high-density residential towers in an urban setting without overloading local drainage, traffic, or utility infrastructure.",
    solution: "Formulated a comprehensive ESIA incorporating stormwater retention systems, acoustic screening, and localized waste management protocols.",
    outcome: "Secured formal NEMA Environmental Clearance Licence with approval for construction works.",
    location: "Kisumu Urban Centre",
    coordinates: { x: 33, y: 57 },
    status: "NEMA licence obtained",
    evidenceSummary: "NEMA Environmental Impact Assessment Licence & Approved ESIA Study Report",
    evidenceItems: [
      {
        type: "Licence",
        description: "NEMA Environmental Impact Assessment Licence",
        status: "Verified",
        isConfidential: false
      },
      {
        type: "Report",
        description: "Approved ESIA Project Study Report & C-ESMP",
        status: "Verified",
        isConfidential: false
      }
    ],
    clientReferenceNote: "Wema Magharibi Ltd — Subject to client confidentiality requirements"
  },
  {
    id: "p-kisumu-climate",
    title: "Kisumu County Climate Change Vulnerability Assessment",
    county: "Kisumu",
    country: "Kenya",
    year: 2023,
    assignmentPeriod: "2023",
    industry: "Climate Advisory",
    serviceId: "climate-biodiversity",
    client: "County Government of Kisumu",
    assignmentScope: "Spatial GIS climate vulnerability mapping, sub-county and ward-level sensitivity profiling, and adaptation action matrix formulation.",
    hueriRole: "Lead Climate Vulnerability Specialists",
    role: "Lead Climate Vulnerability Specialists",
    keyDeliverables: [
      "County Spatial GIS Vulnerability Atlas",
      "Sub-County & Ward Climate Sensitivity Profiles",
      "Climate Adaptation Priority Actions Matrix",
      "Stakeholder Validation Workshop Reports"
    ],
    challenge: "Assessing climate hazard exposure, flood risks, and socio-economic sensitivity across the sub-counties of Kisumu.",
    solution: "Conducted spatial GIS vulnerability mapping, community-level vulnerability assessments, and climate impact screening.",
    outcome: "Delivered the official County Climate Vulnerability Assessment Report utilized to inform county adaptation plans.",
    location: "Kisumu County, Kenya",
    coordinates: { x: 34, y: 58 },
    status: "Completed",
    evidenceSummary: "County Climate Change Vulnerability Assessment Report (2023)",
    evidenceItems: [
      {
        type: "Report",
        description: "Kisumu County Climate Vulnerability Assessment Official Report",
        status: "Verified",
        isConfidential: false
      },
      {
        type: "Dossier",
        description: "County Spatial GIS Climate Hazard Maps & Validation Minutes",
        status: "Verified",
        isConfidential: false
      }
    ],
    clientReferenceNote: "County Government of Kisumu — Public policy assessment document"
  },
  {
    id: "p-flloca",
    title: "FLLoCA Programme Climate-Resilient Infrastructure Environmental Assessments",
    county: "Siaya",
    country: "Kenya",
    year: "2023–Ongoing",
    assignmentPeriod: "2023–Present",
    industry: "Climate-Resilient Infrastructure",
    serviceId: "climate-biodiversity",
    client: "County Government of Siaya",
    assignmentScope: "Sub-project environmental and social screening, baseline environmental impact assessments, and site-specific ESMPs for community water and flood resilience interventions.",
    hueriRole: "Environmental Safeguards & Screening Consultant",
    role: "Environmental Safeguards & Screening Consultant",
    keyDeliverables: [
      "Sub-Project Environmental Screening Dossiers",
      "Environmental & Social Management Plans (ESMPs)",
      "Community Consultation Baraza Records",
      "Climate Resilience Compliance Verification"
    ],
    challenge: "Ensuring locally led climate adaptation projects comply with national environmental regulations and financing safeguard criteria.",
    solution: "Conducted baseline environmental impact screenings, community barazas, and site-specific ESMPs for water pans, flood alleviation, and solar water installations.",
    outcome: "Verified environmental and social compliance, supporting project readiness for financing and implementation.",
    location: "Siaya County, Kenya",
    coordinates: { x: 28, y: 52 },
    status: "Ongoing",
    evidenceSummary: "Sub-Project Environmental Screening Dossiers & Site-Specific ESMPs",
    evidenceItems: [
      {
        type: "Dossier",
        description: "FLLoCA Sub-Project Environmental Screening Registers",
        status: "Verified",
        isConfidential: true
      },
      {
        type: "Report",
        description: "Site-Specific Environmental & Social Management Plans",
        status: "Verified",
        isConfidential: true
      }
    ],
    clientReferenceNote: "County Government of Siaya — Subject to client confidentiality requirements"
  },
  {
    id: "p-wells-energy",
    title: "ESIA & Statutory Environmental Audits for Petroleum Service Stations",
    county: "National",
    country: "Kenya",
    year: "2024–Ongoing",
    assignmentPeriod: "2024–Present",
    industry: "Oil & Petroleum",
    serviceId: "ohs-safety",
    client: "Wells Energy Limited",
    assignmentScope: "Annual statutory environmental compliance audits, fire safety inspections, effluent separator performance assessments, and statutory submissions.",
    hueriRole: "Statutory NEMA Environmental & Safety Auditor",
    role: "Statutory NEMA Environmental & Safety Auditor",
    keyDeliverables: [
      "Annual Environmental Audit Reports",
      "Fire Safety & Risk Assessments",
      "Oil-Water Separator Performance Inspections",
      "NEMA & EPRA Regulatory Compliance Submissions"
    ],
    challenge: "Managing environmental safety, fuel containment, wastewater management, and fire safety across commercial petroleum retail stations.",
    solution: "Performed statutory ESIAs, annual environmental audits, and safety reviews across multiple retail operating facilities.",
    outcome: "Maintained statutory regulatory compliance with NEMA and EPRA guidelines.",
    location: "Multiple Sites Across Kenya",
    coordinates: { x: 45, y: 58 },
    status: "Ongoing",
    evidenceSummary: "Annual Statutory Environmental Audit Reports & NEMA Acknowledgment Receipts",
    evidenceItems: [
      {
        type: "Audit",
        description: "Annual Environmental Compliance Audit Reports",
        status: "Verified",
        isConfidential: true
      }
    ],
    clientReferenceNote: "Wells Energy Limited — Subject to client confidentiality requirements"
  },
  {
    id: "p-kisip-ii",
    title: "Kenya Informal Settlements Improvement Project II (KISIP II) Safeguards",
    county: "Kisumu & Western Kenya",
    country: "Kenya",
    year: "2022–Ongoing",
    assignmentPeriod: "2022–Present",
    industry: "Settlement Upgrading",
    serviceId: "stakeholder-social",
    client: "County Government of Kisumu",
    assignmentScope: "Social safeguards technical support, settlement executive committee consultations, grievance redress mechanism establishment, and civil works monitoring.",
    hueriRole: "Social Safeguards & Grievance Advisor",
    role: "Social Safeguards & Grievance Advisor",
    keyDeliverables: [
      "Settlement Executive Committee Consultation Protocols",
      "Site-Specific Social Safeguards Plans",
      "Grievance Redress Mechanism (GRM) Registers",
      "ESHS Compliance Monitoring"
    ],
    challenge: "Managing social dynamics, tenure regularization, and civil works in dense informal settlement environments.",
    solution: "Delivered social safeguards technical assistance, community settlement executive committee consultations, and participatory grievance mechanisms.",
    outcome: "Facilitated participatory infrastructure upgrading of access roads, water points, and lighting with community collaboration.",
    location: "Informal Settlements, Western Kenya",
    coordinates: { x: 31, y: 55 },
    status: "Ongoing",
    evidenceSummary: "Settlement Executive Committee Protocols & Grievance Redress Registers",
    evidenceItems: [
      {
        type: "Dossier",
        description: "Settlement Social Safeguards Monitoring Reports",
        status: "Verified",
        isConfidential: true
      }
    ],
    clientReferenceNote: "County Government of Kisumu — Subject to client confidentiality requirements"
  },
  {
    id: "p-kcsap",
    title: "Kenya Climate-Smart Agriculture Project (KCSAP) Environmental Studies",
    county: "Kisumu & Lake Region",
    country: "Kenya",
    year: 2019,
    assignmentPeriod: "2019",
    industry: "Agriculture & Water",
    serviceId: "climate-biodiversity",
    client: "County Government of Kisumu",
    assignmentScope: "Environmental screening, soil-water conservation planning, and pest management frameworks for agricultural and irrigation sub-projects.",
    hueriRole: "Environmental Screening Specialists",
    role: "Environmental Screening Specialists",
    keyDeliverables: [
      "Sub-Project Environmental Screening Reports",
      "Soil & Water Management Plans",
      "Pest Management Guidelines",
      "Stakeholder Consultation Minutes"
    ],
    challenge: "Evaluating environmental and social implications of community irrigation, value-chain facilities, and agricultural interventions.",
    solution: "Executed site-specific environmental screenings, soil-water conservation recommendations, and agro-ecological management frameworks.",
    outcome: "Supported environmental clearance and structured operationalization of community climate-smart agricultural sub-projects.",
    location: "Lake Region Basin, Kenya",
    coordinates: { x: 35, y: 54 },
    status: "Completed",
    evidenceSummary: "Sub-Project Environmental Screening Reports & Agricultural ESMP Guidelines",
    evidenceItems: [
      {
        type: "Report",
        description: "Sub-Project Environmental Screening Reports",
        status: "Verified",
        isConfidential: false
      }
    ],
    clientReferenceNote: "County Government of Kisumu — Subject to client confidentiality requirements"
  },
  {
    id: "p-got-ramogi",
    title: "Got Ramogi Eco-Tourism & Forest Infrastructure EIA",
    county: "Siaya",
    country: "Kenya",
    year: 2020,
    assignmentPeriod: "2020",
    industry: "Ecology & Tourism",
    serviceId: "eia-esia",
    client: "County Government of Siaya",
    assignmentScope: "Full study EIA, indigenous biodiversity baseline survey, cultural heritage buffer zoning, and stakeholder public hearings.",
    hueriRole: "Lead EIA Consultant",
    role: "Lead EIA Consultant",
    keyDeliverables: [
      "Comprehensive EIA Study Report",
      "Biodiversity & Cultural Heritage Protection Plan",
      "Public Participation Baraza Records",
      "NEMA Licence Approval"
    ],
    challenge: "Planning eco-tourism facilities in the ecologically sensitive Got Ramogi Forest Reserve without harming indigenous flora and cultural sites.",
    solution: "Conducted comprehensive EIA defining protective buffer zones, low-impact construction techniques, and heritage conservation measures.",
    outcome: "Secured statutory NEMA approval with structured mitigation measures for eco-tourism development.",
    location: "Got Ramogi Forest, Siaya County",
    coordinates: { x: 25, y: 49 },
    status: "NEMA licence obtained",
    evidenceSummary: "NEMA EIA Licence & Comprehensive Study Report",
    evidenceItems: [
      {
        type: "Licence",
        description: "NEMA EIA Licence for Eco-Tourism Infrastructure",
        status: "Verified",
        isConfidential: false
      },
      {
        type: "Report",
        description: "Comprehensive EIA Study Report & Biodiversity Conservation Plan",
        status: "Verified",
        isConfidential: false
      }
    ],
    clientReferenceNote: "County Government of Siaya — Subject to client confidentiality requirements"
  },
  {
    id: "p-structural-monitoring",
    title: "Urban Multi-Storey Infrastructure Structural Deck Reinforcement & ESHS Supervision",
    county: "Kisumu & Western Kenya",
    country: "Kenya",
    year: "2024–Ongoing",
    assignmentPeriod: "2024–Present",
    industry: "Civil Infrastructure & Housing",
    serviceId: "implementation-supervision",
    client: "Commercial & Residential Infrastructure Proponents",
    assignmentScope: "Site-level occupational health & safety oversight, contractor compliance auditing, worker PPE enforcement, and environmental mitigation during high-density construction.",
    hueriRole: "Resident Environmental, Health & Safety (EHS) & Quality Compliance Consultant",
    role: "Resident Environmental, Health & Safety (EHS) & Quality Compliance Consultant",
    keyDeliverables: [
      "Concrete Deck Rebar Structural Quality & Safety Verification",
      "Contractor Occupational Health & Safety (OHS) Oversight",
      "Dust, Noise & Effluent Mitigation Monitoring",
      "Corrective Action Tracking Registers"
    ],
    challenge: "Ensuring structural integrity, worker fall protection, and occupational safety compliance during high-density multi-storey concrete reinforcement and casting operations in urban zones.",
    solution: "Deployed resident EHS supervisory engineers conducting daily toolbox briefings, structural reinforcement bar quality inspections, PPE enforcement, and stormwater drainage protection.",
    outcome: "Ensured statutory compliance with NEMA and DOSHS requirements during active concrete superstructure casting.",
    location: "Kisumu City & Urban Centers, Kenya",
    coordinates: { x: 33, y: 55 },
    status: "Ongoing",
    evidenceSummary: "Site Inspection Logs, Rebar Quality Records & Daily Toolbox Briefing Registers",
    evidenceItems: [
      {
        type: "Audit",
        description: "Site Environmental & OHS Compliance Inspection Logs",
        status: "Verified",
        isConfidential: true
      }
    ],
    clientReferenceNote: "Commercial Infrastructure Proponents — Subject to client confidentiality requirements"
  },
  {
    id: "p-eshsrim-training",
    title: "Corporate & Professional ESHSRIM Procedures Certification Training Program",
    county: "National & Regional",
    country: "Kenya",
    year: "2024–Ongoing",
    assignmentPeriod: "2024–Present",
    industry: "Professional Capacity Building",
    serviceId: "eshsrim-training",
    client: "Public Agencies, Private Contractors & Individual Practitioners",
    assignmentScope: "Curriculum design and delivery of practical training modules in Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures.",
    hueriRole: "Lead Safeguards & OHS Training Specialists",
    role: "Lead Safeguards & OHS Training Specialists",
    keyDeliverables: [
      "Modular ESHSRIM Procedures Training Curriculum",
      "Hands-On Risk Assessment & C-ESMP Simulation Workshops",
      "Grievance Redress & Social Safeguards Modules",
      "Professional Competency Certification"
    ],
    challenge: "Bridging the skills gap among site managers, safety officers, and environmental practitioners in applying real-world ESHSRIM procedures on complex infrastructure projects.",
    solution: "Designed and delivered practical multi-day training modules combining classroom theoretical grounding with field simulation exercises and compliance toolkit applications.",
    outcome: "Trained over 120 individuals and organizational representatives, boosting project site safety and environmental management competency.",
    location: "Kisumu Headquarters & Client Sites",
    coordinates: { x: 34, y: 57 },
    status: "Ongoing",
    evidenceSummary: "ESHSRIM Training Syllabi, Simulation Dossiers & Participant Competency Records",
    evidenceItems: [
      {
        type: "Certificate",
        description: "ESHSRIM Training Curriculum & Participant Completion Registers",
        status: "Verified",
        isConfidential: false
      }
    ],
    clientReferenceNote: "Public Agencies & Corporate Clients — Subject to client confidentiality requirements"
  }
];

export const initialLeadershipExperience: LeadershipExperience[] = [
  {
    id: "lead-kdsp-ii",
    title: "National Environmental and Social Safeguards Support – KDSP II",
    practitioner: "Belinda Nyakinya",
    role: "Environmental Safeguards Specialist (National Programme Coordination Unit)",
    program: "Kenya Devolution Support Programme Phase II (KDSP II)",
    institution: "State Department for Devolution / National Programme Coordination Unit",
    period: "2025–Present",
    scope: "National Safeguards Technical Support across 47 Devolved County Governments",
    contractualContext: "Delivered by HUERI's Founder and Managing Director, Belinda Nyakinya, in her individual professional capacity as an Environmental Safeguards Specialist within the National Programme Coordination Unit (and not as a HUERI Limited corporate contract).",
    description: "Delivered by HUERI's Founder and Managing Director in her individual professional capacity as an Environmental Safeguards Specialist within the National Programme Coordination Unit. The technical support encompasses coordinating environmental and social safeguards screening, providing advisory backstopping to county Project Implementation Units (PIUs), and standardizing reporting across multi-sector devolved infrastructure sub-projects in all 47 counties.",
    keyContributions: [
      "Technical advisory on environmental and social safeguards screening tools across county civil works.",
      "Capacity building and technical backstopping for county environmental and social safeguards focal persons.",
      "Harmonization of safeguards documentation with national statutory guidelines and multilateral financing criteria.",
      "Technical review of sub-project Environmental and Social Management Plans (ESMPs)."
    ],
    evidenceNote: "Professional appointment and technical deliverable records maintained within the National Programme Coordination Unit."
  }
];

export const initialPartnershipModels: PartnershipModel[] = [
  {
    id: "pan-african-collaboration",
    title: "Pan-African In-Country Co-Delivery & Expert Alliance",
    targetPartners: "Local Consulting Firms & National Experts across African Countries",
    targetAudience: "African Environmental & Engineering Firms, International Lenders & Developers",
    icon: "Globe2",
    description: "While HUERI's foundational direct portfolio is anchored in Kenya, our Pan-African operating model actively partners with registered local environmental consultants, national lead experts, and engineering firms in each respective African country whenever multi-country or regional projects arise. This ensures seamless in-country co-delivery with local companies—combining deep national regulatory knowledge with international sustainability and lender standards (World Bank ESF, IFC PS, AfDB ISS).",
    benefits: [
      "Empowers local in-country experts and consulting firms through collaborative consortium and teaming agreements.",
      "Guarantees compliance with both national statutory institutions and international multilateral financier requirements.",
      "Enables rapid mobilization and seamless technical co-delivery across Eastern, Central, and Southern Africa.",
      "Provides structured quality assurance, digital GIS data collection, and lead authoring for cross-border infrastructure."
    ],
    valueProposition: [
      "Collaborative in-country partnering framework respecting local expertise and national sovereignty.",
      "Bridging international lender standards with localized socio-economic, ecological, and regulatory contexts.",
      "Joint technical proposals, shared capacity development, and equitable project execution models.",
      "Proven corporate credentials, robust QA/QC systems, and executive safeguards leadership."
    ],
    engagementModes: ["In-Country Co-Consultant", "Consortium Teaming Partner", "Regional Joint Venture", "Technical Lead Associate"]
  },
  {
    id: "international-consultancies",
    title: "Subconsultancy & In-Country Delivery Partner",
    targetPartners: "International Environmental & Engineering Consultancies",
    targetAudience: "Global Environmental & Engineering Consultancies",
    icon: "Users2",
    description: "HUERI acts as a technical in-country delivery partner in Kenya, providing field mobilization, georeferenced baseline data collection, local baraza consultations, and regulatory interface.",
    benefits: [
      "Contextual understanding of Kenyan socio-political and institutional landscapes.",
      "Field team mobilization across Kenya and the Lake Victoria Basin.",
      "Direct interface with statutory regulators (NEMA, DOSHS, WRA).",
      "Structured data collection, GIS mapping, and community-level engagement."
    ],
    valueProposition: [
      "Contextual understanding of Kenyan socio-political and institutional realities.",
      "Field team mobilization across Kenya.",
      "Bridging international lender standards (IFC, WB, AfDB) with local statutory compliance.",
      "High-integrity data collection, GIS mapping, and community engagement."
    ],
    engagementModes: ["Specialist Subconsultant", "Consortium Member", "Joint-Venture Partner", "Local Technical Lead"]
  },
  {
    id: "engineering-infrastructure",
    title: "Joint Venture & Tender Consortium Partner",
    targetPartners: "EPC Contractors, Developers & Bidders",
    targetAudience: "Prime Contractors, Developers & Bidders",
    icon: "Handshake",
    description: "We collaborate on competitive bids and tenders requiring experienced environmental and social specialists, multidisciplinary team credentials, and local expertise.",
    benefits: [
      "Complementary technical capabilities and verified corporate credentials.",
      "Structured risk allocation and local operational coordination.",
      "Preparation of Contractor C-ESMPs and ESHS compliance oversight.",
      "Experience in public consultation and community engagement."
    ],
    valueProposition: [
      "Practical C-ESMP formulation and contractor safety oversight.",
      "Supporting project workflows through timely statutory submissions.",
      "Assistance with land acquisition processes and grievance mechanisms.",
      "Promoting safe working environments and statutory compliance."
    ],
    engagementModes: ["ESHS Technical Advisor", "Environmental Auditor", "RAP Specialist", "Subcontractor"]
  },
  {
    id: "dfis-investors",
    title: "Framework & Advisory Services",
    targetPartners: "Financiers, Impact Investors & Asset Managers",
    targetAudience: "Development Financiers, Impact Funds & Private Investors",
    icon: "FileSignature",
    description: "Framework agreements for environmental reviews, pre-investment due diligence (ESDD), and periodic ESG monitoring across distributed asset portfolios.",
    benefits: [
      "Agreed rate structures and responsive scheduling for portfolio assessments.",
      "Structured E&S methodology across asset portfolios.",
      "Third-party compliance verification for investment syndicates.",
      "Direct engagement with Managing Director and senior practitioners."
    ],
    valueProposition: [
      "Pre-investment environmental and social due diligence risk reviews.",
      "Structuring practical Environmental & Social Action Plans (ESAP).",
      "Independent safeguards monitoring and compliance verification.",
      "ESG documentation aligned with recognized reporting standards."
    ],
    engagementModes: ["Independent E&S Advisor", "Lenders' Technical Advisor (LTA)", "Monitoring Specialist"]
  },
  {
    id: "local-safeguards",
    title: "Local Technical & Community Safeguards Partner",
    targetPartners: "International Developers & Organizations Entering Kenya",
    targetAudience: "International Developers & Organizations",
    icon: "Globe2",
    description: "Supporting organizations entering the Kenyan market that require expert guidance on land tenure, county administration engagement, community barazas, and environmental approvals.",
    benefits: [
      "Established credibility with local administrations and community stakeholders.",
      "Stakeholder Engagement Planning (SEP) and consultation design.",
      "Structured Resettlement Action Plans (RAP) upholding property rights.",
      "Design and management of practical Grievance Redress Mechanisms (GRM)."
    ],
    valueProposition: [
      "Constructive community relations and stakeholder alignment.",
      "Alignment with Kenya Constitution property rights and environmental provisions.",
      "Extensive field experience across Kenyan counties and the Lake Victoria Basin."
    ],
    engagementModes: ["Social Safeguards Lead", "Community Liaison Advisor", "RAP Partner"]
  },
  {
    id: "peer-review",
    title: "Peer Review & Advisory Support",
    targetPartners: "Financiers, Legal Teams & Project Proponents",
    targetAudience: "Lenders, Legal Counsel & Advisory Panels",
    icon: "ShieldCheck",
    description: "Independent reviews, gap analyses, and statutory audits on third-party ESIA/RAP documentation to verify regulatory alignment and safeguard robustness.",
    benefits: [
      "Objective technical review of draft safeguard documentation.",
      "Benchmarking against IFC PS, World Bank ESF, AfDB ISS, and EMCA Cap 387.",
      "Identification of actionable measures to bridge compliance gaps.",
      "Support in mitigating regulatory and environmental risk."
    ],
    valueProposition: [
      "Thorough independent review by experienced Lead Experts.",
      "Clear differentiation between statutory minimums and international good practices."
    ],
    engagementModes: ["Independent Reviewer", "Safeguards Auditor", "Technical Advisor"]
  },
  {
    id: "african-firms",
    title: "Capacity Building & Training Partner",
    targetPartners: "Public Sector Agencies, County Governments & Utilities",
    targetAudience: "Public Sector Units, Engineering Teams & Academic Institutions",
    icon: "Building",
    description: "Collaborative training on environmental regulations, climate resilience, and OHS for technical personnel, project management units (PMUs), and committees.",
    benefits: [
      "Structured modules on World Bank ESF, NEMA Regulations, and DOSHS OHS.",
      "Practical tools for grievance management and environmental monitoring.",
      "Strengthening institutional capacity to oversee safeguard compliance."
    ],
    valueProposition: [
      "Combining multidisciplinary expertise for institutional capacity building.",
      "Joint technical initiatives and knowledge-sharing workshops.",
      "Technical exchange and professional skill building."
    ],
    engagementModes: ["Training Lead", "Institutional Advisor", "Safeguards Capacity Specialist"]
  }
];

export const initialCredentials: CorporateCredential[] = [
  {
    credential: "Certificate of Incorporation",
    issuingAuthority: "Registrar of Companies, Republic of Kenya",
    reference: "CPR/2014/168986",
    validity: "25 Nov 2014 / Continuing (Incorporated as Limited Company)",
    status: "Active (Subject to Document Verification)",
    category: "Corporate Registration",
    verificationNote: "Incorporation record CPR/2014/168986 (2014) is maintained in corporate registry archives and subject to formal verification against current certified CR12 / Registrar of Companies documents for prospective tender filings.",
    requiresVerification: true
  },
  {
    credential: "NEMA Firm of Experts Annual Practicing Licence",
    issuingAuthority: "National Environment Management Authority (NEMA)",
    reference: "NEMA/ENVIS/ELi/F0026",
    validity: "Annual Registration (Current Cycle)",
    status: "Active (Subject to Document Verification)",
    category: "Statutory Licence",
    verificationNote: "NEMA Firm of Experts Licence No. NEMA/ENVIS/ELi/F0026 is maintained in the statutory register and subject to formal verification against current annual renewal certificate documents for client submissions.",
    requiresVerification: true
  },
  {
    credential: "NEMA Corporate Registration Certificate",
    issuingAuthority: "National Environment Management Authority (NEMA)",
    reference: "NEMA/EIA/RC/1058",
    validity: "Permanent Statutory Register",
    status: "Verified Record",
    category: "Statutory Licence",
    verificationNote: "Permanent corporate EIA register entry NEMA/EIA/RC/1058 linked to Lead Expert registration (Belinda Nyakinya, NEMA Lead Expert Reg #7718).",
    requiresVerification: false
  },
  {
    credential: "Tax Compliance Certificate (TCC)",
    issuingAuthority: "Kenya Revenue Authority (KRA)",
    reference: "Corporate Tax Compliance Records",
    validity: "Annual Renewal Cycle",
    status: "Active (Subject to Renewal Verification)",
    category: "Tax & Good Standing",
    verificationNote: "Corporate tax compliance certificates are renewed annually through KRA iTax and provided directly within tender and compliance packs.",
    requiresVerification: true
  },
  {
    credential: "Single Business Operating Permit",
    issuingAuthority: "County Government of Kisumu",
    reference: "County Business Licensing Registry",
    validity: "Annual Statutory Permit",
    status: "Current Operational Permit",
    category: "County Permit",
    verificationNote: "Operating business authorization issued under the County Government of Kisumu business regulatory framework for Kisumu headquarters.",
    requiresVerification: false
  },
  {
    credential: "Professional Affiliation — Environment Institute of Kenya (EIK)",
    issuingAuthority: "Environment Institute of Kenya",
    reference: "EIK Corporate / Individual Practitioner Membership",
    validity: "Active Professional Register",
    status: "Good Standing",
    category: "Professional Affiliation",
    verificationNote: "Professional membership aligning practice standards with the designated professional institute for environmental practitioners in Kenya.",
    requiresVerification: false
  }
];

export const initialQualityAssurance: QualityAssurancePillar[] = [
  {
    id: "qa-internal-review",
    pillarNumber: "01",
    title: "Internal Technical Review",
    shortDesc: "Multi-tiered editorial, technical, and regulatory review before any report is finalized.",
    details: [
      "Every Environmental & Social Impact Assessment (ESIA), audit report, and Resettlement Action Plan (RAP) undergoes rigorous internal technical review led by a NEMA-registered Lead Expert.",
      "Methodologies, calculations, spatial data, and baseline assessments are cross-checked against project Terms of Reference and applicable statutory guidelines.",
      "Clear documentation trail is maintained from field notes and laboratory results to final drafting."
    ],
    controls: ["Lead Expert sign-off", "Technical draft version control", "Data traceability log"],
    icon: "FileCheck"
  },
  {
    id: "qa-doc-control",
    pillarNumber: "02",
    title: "Document QA/QC & Data Traceability",
    shortDesc: "Standardized formatting, referencing, spatial verification, and auditable evidence archives.",
    details: [
      "Standardized corporate documentation protocols ensure clear executive summaries, defensible risk matrices, and complete compliance appendices.",
      "GIS coordinates, stakeholder consultation attendance lists, and public baraza minutes are verified and archived with tamper-evident records.",
      "Strict data privacy standards apply to household socioeconomic survey data collected during RAP assignments."
    ],
    controls: ["Standardized report templates", "GPS & georeferenced survey logs", "Secure survey data repository"],
    icon: "ShieldCheck"
  },
  {
    id: "qa-regulatory-compliance",
    pillarNumber: "03",
    title: "Statutory & Regulatory Alignment",
    shortDesc: "Benchmarking all deliverables against EMCA Cap 387, DOSHS, WRA, and sector guidelines.",
    details: [
      "Deliverables are prepared in strict compliance with the Environmental Management and Co-ordination Act (EMCA Cap 387) and subsidiary regulations.",
      "Occupational safety evaluations adhere to the Occupational Safety and Health Act (OSHA 2007) and DOSHS inspection codes.",
      "Water resources interventions conform to Water Resources Authority (WRA) abstraction and effluent discharge standards."
    ],
    controls: ["Statutory checklist verification", "NEMA submission guidelines check", "County by-law compliance check"],
    icon: "Scale"
  },
  {
    id: "qa-client-review",
    pillarNumber: "04",
    title: "Client & Stakeholder Review Cycles",
    shortDesc: "Transparent milestone reviews, stakeholder validation barazas, and feedback integration.",
    details: [
      "Interim inception and draft reports are submitted for client and lead engineer review at defined project milestones.",
      "Public participation findings from community barazas and key informant interviews are documented with verbatim feedback and mitigation matrices.",
      "Grievance redress mechanism (GRM) protocols are agreed upon with both the proponent and community leadership prior to final submission."
    ],
    controls: ["Milestone sign-off gates", "Stakeholder comment-response matrices", "Grievance logging protocol"],
    icon: "Users"
  },
  {
    id: "qa-peer-review",
    pillarNumber: "05",
    title: "Multidisciplinary Peer Review",
    shortDesc: "Specialist peer review for complex hydrological, ecological, and engineering components.",
    details: [
      "Where assignments involve specialized disciplines (such as complex flood modelling, aquatic ecology, structural deck safety, or biodiversity offsets), HUERI engages senior peer reviewers from its technical associate network.",
      "Independent technical experts validate underlying assumptions, numerical models, and mitigation feasibility.",
      "Delivered through HUERI's multidisciplinary team and specialist technical associates, as required by the assignment."
    ],
    controls: ["Independent specialist peer sign-off", "Technical assumption sensitivity checks", "Consortium co-review"],
    icon: "GitCompare"
  },
  {
    id: "qa-ethics",
    pillarNumber: "06",
    title: "Ethical Standards & Safeguarding",
    shortDesc: "Zero-tolerance for bribery, conflict of interest, and commitment to community safeguarding.",
    details: [
      "Strict institutional Code of Conduct governing anti-bribery, anti-corruption, and conflict of interest across all operations.",
      "Robust safeguarding policies prohibiting sexual exploitation, abuse, and harassment (PSEAH) and protecting vulnerable community members.",
      "Fair labor standards, inclusive community consultation, and respect for indigenous and cultural heritage."
    ],
    controls: ["Ethics declaration sign-off", "Whistleblower & grievance channel", "PSEAH policy compliance"],
    icon: "Lock"
  }
];

export const initialGovernanceTiers: GovernanceTier[] = [
  {
    id: "gov-advisory",
    level: "Tier 1",
    title: "Board of Directors & Strategic Oversight",
    responsibilities: [
      "Corporate governance, strategic policy direction, and institutional fiduciary oversight.",
      "Approval of major investments, consortium agreements, and corporate risk policies.",
      "Maintenance of corporate integrity, ethical standards, and legal compliance."
    ],
    oversightRole: "Corporate Strategy & Governance"
  },
  {
    id: "gov-executive",
    level: "Tier 2",
    title: "Executive Leadership & Technical Direction",
    responsibilities: [
      "Led by the Founder & Managing Director (Belinda Nyakinya, NEMA Lead Expert #7718).",
      "Executive direction of technical advisory practices, tender submissions, and client engagements.",
      "Quality assurance sign-off on major statutory ESIA reports and safeguards documentation."
    ],
    oversightRole: "Technical Leadership & Practice Management"
  },
  {
    id: "gov-technical",
    level: "Tier 3",
    title: "Core Practice Units & Lead Experts",
    responsibilities: [
      "Execution of environmental, social, occupational safety, and climate advisory assignments.",
      "Direct oversight of field surveys, public barazas, socio-economic censuses, and compliance audits.",
      "Preparation of draft reports, C-ESMPs, and statutory submission dossiers."
    ],
    oversightRole: "Assignment Delivery & Field Execution"
  },
  {
    id: "gov-associates",
    level: "Tier 4",
    title: "Specialist Technical Associates & Regional Partners",
    responsibilities: [
      "Mobilized on an assignment-specific basis to provide specialized expertise (e.g. hydrology, biodiversity, structural EHS, land valuation).",
      "Vetted national and regional partner consultancies across African countries for multi-country co-delivery.",
      "Delivered through HUERI's multidisciplinary team and specialist technical associates, as required by the assignment."
    ],
    oversightRole: "Specialist Disciplines & Pan-African Co-Delivery"
  }
];

export const initialTeam: TeamMember[] = [
  {
    id: "team-belinda-nyakinya",
    name: "Belinda Nyakinya",
    role: "Founder & Managing Director | Principal Environmental Consultant",
    specialization: "Environmental & Social Safeguards, Statutory ESIA, Devolved Governance Advisory",
    qualifications: [
      "Master of Science (MSc) in Environmental Studies",
      "Bachelor of Science (BSc) in Natural Resource Management"
    ],
    professionalRegistrations: [
      "NEMA Registered Lead Expert (Practicing Licence #7718)",
      "Member, Environment Institute of Kenya (EIK)"
    ],
    yearsOfExperience: "15+ Years",
    coreExpertise: [
      "Statutory Environmental & Social Impact Assessment (ESIA)",
      "Resettlement Action Planning (RAP) & Socio-Economic Surveys",
      "Devolved Safeguards Technical Support (KDSP II National Advisory)",
      "Stakeholder Engagement & Community Baraza Consultations",
      "Environmental, Social, Health & Safety Risks and Impacts Management (ESHSRIM) Procedures"
    ],
    selectedExperience: [
      "Environmental Safeguards Specialist, National Devolution Programme Support (KDSP II NPCU)",
      "Lead Safeguards Consultant, Makasembo Housing Estate RAP (LAPFUND)",
      "Lead EIA Consultant, Multi-Storey Residential Housing ESIA (Wema Magharibi Ltd)",
      "Environmental Safeguards Consultant, Siaya Climate Resilience Infrastructure (FLLoCA)"
    ],
    bio: "Belinda Nyakinya is an established environmental and social performance practitioner, NEMA Registered Lead Expert (#7718), and the Founder and Managing Director of Hope Urban Environmental and Research Investments Limited (HUERI Limited). She has over 15 years of technical experience directing statutory ESIAs, resettlement action plans, climate vulnerability assessments, and safeguards systems across Kenya.",
    verificationStatus: "Verified",
    isCoreLeadership: true,
    category: "Leadership",
    credentials: [
      "NEMA Registered Lead Expert #7718",
      "MSc. Environmental Studies",
      "BSc. Natural Resource Management"
    ],
    linkedin: "https://www.linkedin.com/in/belinda-nyakinya",
    email: "info@hueriafrica.com"
  },
  {
    id: "team-john-sande",
    name: "John Matthews Sande",
    role: "Anthropologist & Lead Social Specialist",
    specialization: "Social Impact Assessment, Resettlement Frameworks & Indigenous Stakeholder Systems",
    qualifications: [
      "Master of Arts (MA) in Anthropology / Social Sciences",
      "Bachelor of Arts (BA) in Anthropology & Sociology"
    ],
    professionalRegistrations: [
      "Social Science & Anthropological Research Specialist"
    ],
    yearsOfExperience: "12+ Years",
    coreExpertise: [
      "Social Impact Assessment (SIA) & Socio-Economic Baseline Censuses",
      "Resettlement Action Plans (RAP) & Livelihood Restoration Planning",
      "Participatory Community Consultations & Grassroots Barazas",
      "Grievance Redress Mechanism (GRM) Design & Operationalization",
      "Vulnerable Groups & Gender Inclusion Safeguards"
    ],
    selectedExperience: [
      "Lead Social Specialist, Makasembo Estate Resettlement Action Plan (RAP)",
      "Social Safeguards Advisor, Urban Informal Settlement Upgrading (KISIP II)",
      "Community Stakeholder Engagement Lead, Got Ramogi Eco-Tourism EIA",
      "Socio-Economic Field Survey Director across Western Kenya and Lake Victoria Basin"
    ],
    bio: "John Matthews Sande is a senior anthropologist and social performance specialist with over a decade of field experience across Kenya. He specializes in designing participatory community engagement frameworks, directing socioeconomic census surveys, designing transparent grievance redress systems, and structuring resettlement action plans for public and private infrastructure proponents.",
    verificationStatus: "Verified",
    isCoreLeadership: true,
    category: "Social",
    credentials: [
      "MA Anthropology / Social Sciences",
      "BA Anthropology & Sociology",
      "Senior Social Safeguards Specialist"
    ],
    email: "social@hueriafrica.com"
  },
  {
    id: "team-env-specialists",
    name: "Senior Environmental & Ecological Specialists",
    role: "Lead Environmental Scientists (Associate Specialist Pool)",
    specialization: "Terrestrial & Aquatic Ecology, Baseline Biodiversity, Water Catchment Science",
    qualifications: [
      "Postgraduate & BSc Degrees in Environmental Science, Aquatic Ecology, Forestry & Natural Resources"
    ],
    professionalRegistrations: [
      "NEMA Registered Lead & Associate Environmental Experts"
    ],
    yearsOfExperience: "8–15 Years across associate pool",
    coreExpertise: [
      "Physical & chemical environmental baseline monitoring",
      "Limnological and water catchment quality evaluations",
      "Ecological sensitivity mapping and critical habitat screening",
      "Environmental and Social Management Plan (C-ESMP) development"
    ],
    selectedExperience: [
      "Got Ramogi Forest indigenous biodiversity baseline surveys",
      "Lake Victoria catchment water quality assessments",
      "Agricultural irrigation sub-project environmental screenings (KCSAP)"
    ],
    bio: "HUERI maintains a vetted roster of registered environmental scientists and ecologists deployed on assignments requiring specialized aquatic, terrestrial, or forest ecology baseline investigations.",
    verificationStatus: "Associate Specialist Roster",
    isCoreLeadership: false,
    category: "Environmental",
    credentials: ["NEMA Lead & Associate Experts", "MSc / BSc Environmental Science"],
    email: "experts@hueriafrica.com"
  },
  {
    id: "team-ohs-specialists",
    name: "Occupational Health & Safety (OHS) Auditors",
    role: "Senior Safety & Workplace Health Auditors (Associate Pool)",
    specialization: "Construction Safety, Industrial Risk Audits, Fire Safety, DOSHS Compliance",
    qualifications: [
      "Postgraduate Diplomas / Certifications in Occupational Safety and Health Management"
    ],
    professionalRegistrations: [
      "DOSHS Approved Safety Advisors & Fire Safety Auditors"
    ],
    yearsOfExperience: "10+ Years across associate pool",
    coreExpertise: [
      "Statutory annual workplace health and safety audits (OSHA 2007)",
      "Construction site hazard identification and risk assessments (HIRA)",
      "Daily toolbox safety briefings and contractor PPE enforcement",
      "Emergency response and chemical spill containment planning"
    ],
    selectedExperience: [
      "Annual statutory safety audits for Wells Energy petroleum facilities",
      "Resident EHS supervision for urban multi-storey concrete reinforcement works",
      "Industrial manufacturing plant fire safety compliance inspections"
    ],
    bio: "Our health and safety associates are DOSHS-approved professionals experienced in managing high-risk civil works, structural deck installations, and industrial petroleum facilities.",
    verificationStatus: "Associate Specialist Roster",
    isCoreLeadership: false,
    category: "OHS",
    credentials: ["DOSHS Approved Safety Auditors", "Fire Safety Compliance Certifications"],
    email: "safety@hueriafrica.com"
  },
  {
    id: "team-gis-specialists",
    name: "GIS & Spatial Intelligence Analysts",
    role: "Spatial Modellers & Remote Sensing Specialists (Associate Pool)",
    specialization: "Cartography, Drone Orthomosaics, Spatial Hazard Vulnerability Profiling",
    qualifications: [
      "BSc / MSc in Geoinformatics, Surveying, GIS & Remote Sensing"
    ],
    professionalRegistrations: [
      "GIS Professional Certification / Survey Registry Alignments"
    ],
    yearsOfExperience: "7–12 Years across associate pool",
    coreExpertise: [
      "Spatial GIS hazard and climate vulnerability mapping",
      "Drone aerial orthophoto generation and wayleave alignment analysis",
      "Land-use / land-cover (LULC) temporal change detection",
      "Interactive web maps and spatial database management"
    ],
    selectedExperience: [
      "Kisumu County Spatial GIS Climate Change Vulnerability Atlas",
      "Siaya FLLoCA sub-project GIS georeferencing and spatial screening",
      "Makasembo urban estate spatial boundary and plot verification"
    ],
    bio: "Delivered through HUERI's multidisciplinary team and specialist technical associates, providing spatial data analytics and GIS mapping to support defensible environmental decision-making.",
    verificationStatus: "Associate Specialist Roster",
    isCoreLeadership: false,
    category: "GIS",
    credentials: ["Certified GIS Professionals", "Remote Sensing Specialists"],
    email: "gis@hueriafrica.com"
  },
  {
    id: "team-valuation-specialists",
    name: "Land Economists & Valuation Surveyors",
    role: "Registered Valuation Surveyors & Asset Valuers (Associate Pool)",
    specialization: "Asset Valuation, Compensation Schedules, Land Acquisition Matrices",
    qualifications: [
      "BSc in Land Economics / Real Estate Valuation"
    ],
    professionalRegistrations: [
      "Registered & Practicing Valuers (Valuers Registration Board of Kenya)",
      "Institution of Surveyors of Kenya (ISK) Members"
    ],
    yearsOfExperience: "10+ Years across associate pool",
    coreExpertise: [
      "Full asset replacement cost valuation for RAP assignments",
      "Crop, structure, and land compensation schedule preparation",
      "Livelihood restoration budget estimation and entitlement matrices",
      "Dispute resolution valuation and grievance settlement support"
    ],
    selectedExperience: [
      "Makasembo Housing Estate tenant asset valuation and compensation schedules",
      "Informal settlement road reserve setback asset assessments",
      "Agricultural land acquisition baseline surveys for municipal projects"
    ],
    bio: "Delivered through licensed valuation surveyors registered under the Valuers Act (Cap 532), ensuring compensation schedules meet both national legal standards and international safeguard policies.",
    verificationStatus: "Associate Specialist Roster",
    isCoreLeadership: false,
    category: "Valuation",
    credentials: ["Registered Valuer (VRB)", "Member ISK"],
    email: "valuation@hueriafrica.com"
  },
  {
    id: "team-engineering-specialists",
    name: "Civil & Environmental Compliance Engineers",
    role: "Resident EHS & Infrastructure Engineers (Associate Pool)",
    specialization: "Structural Quality Oversight, Stormwater Drainage, Site Civil Mitigation",
    qualifications: [
      "BSc / MSc in Civil & Structural Engineering, Environmental Engineering"
    ],
    professionalRegistrations: [
      "Engineers Board of Kenya (EBK) Registered Professional Engineers",
      "Institution of Engineers of Kenya (IEK) Members"
    ],
    yearsOfExperience: "8–16 Years across associate pool",
    coreExpertise: [
      "Resident environmental and safety monitoring on active civil construction sites",
      "Structural rebar reinforcement inspections and formwork integrity checks",
      "Civil stormwater management and sediment barrier design review",
      "Contractor compliance auditing and corrective action plan tracking"
    ],
    selectedExperience: [
      "Resident EHS supervision for multi-storey concrete superstructure casting",
      "Municipal road and drainage civil works environmental monitoring",
      "Water supply and sanitation infrastructure safeguards verification"
    ],
    bio: "Delivered through qualified civil and environmental engineers ensuring contractor works strictly adhere to approved C-ESMPs and national building standards.",
    verificationStatus: "Associate Specialist Roster",
    isCoreLeadership: false,
    category: "Engineering",
    credentials: ["Registered Engineer (EBK)", "Member IEK"],
    email: "engineering@hueriafrica.com"
  }
];

export const initialArticles: Article[] = [
  {
    id: "art-1",
    title: "Navigating EMCA Cap 387 and Statutory NEMA EIA Licencing in Kenya",
    category: "Regulatory Compliance",
    author: "Belinda Nyakinya, Managing Director",
    date: "January 2026",
    excerpt: "A practical guide for project proponents on the statutory steps, scoping studies, public participation, and lead agency reviews required under Kenyan environmental law.",
    content: "Under the Environmental Management and Co-ordination Act (EMCA Cap 387) and the Environmental (Impact Assessment and Audit) Regulations, high and medium risk infrastructure projects in Kenya must secure a statutory EIA Licence from NEMA prior to project commencement. This technical briefing details the preparation of comprehensive Terms of Reference (TOR), baseline biophysical and socio-economic characterization, public participation requirements, and the development of actionable Construction Environmental and Social Management Plans (C-ESMP).",
    readTime: "6 min read",
    slug: "navigating-emca-cap-387-nema-eia-licencing"
  },
  {
    id: "art-2",
    title: "Bridging National Resettlement Protocols and World Bank ESS5 Standards",
    category: "Social Safeguards",
    author: "HUERI Social Safeguards Practice",
    date: "February 2026",
    excerpt: "Best practices for aligning Kenyan land acquisition and valuation frameworks with international lender safeguard standards for Resettlement Action Plans (RAP).",
    content: "When delivering linear infrastructure, renewable energy installations, or urban redevelopment projects financed by multilateral lenders, project proponents must navigate the intersection between Kenyan statutory land compensation laws and international benchmarks such as World Bank ESS5 and IFC Performance Standard 5. This article outlines methods for conducting rigorous socio-economic baseline surveys, participatory asset valuations, livelihood restoration programs, and structured Grievance Redress Mechanisms (GRMs).",
    readTime: "8 min read",
    slug: "bridging-resettlement-protocols-world-bank-ess5"
  },
  {
    id: "art-3",
    title: "Implementing ESHSRIM Procedures for Large Infrastructure Projects",
    category: "Capacity Building",
    author: "Technical Training & Compliance Desk",
    date: "March 2026",
    excerpt: "Structured risk and impact management procedures to equip project implementation units and resident engineers with auditable monitoring tools.",
    content: "Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures provide a systematic framework for translating high-level commitments into everyday site monitoring routines. This briefing covers contractor compliance audits, hazard identification and risk assessments (HIRA), incident reporting hierarchies, and ongoing community stakeholder dialogue.",
    readTime: "5 min read",
    slug: "implementing-eshsrim-procedures-infrastructure"
  }
];

export const initialResources: Resource[] = [
  {
    id: "res-1",
    title: "HUERI Limited Corporate Capability & Institutional Profile 2026",
    category: "Corporate Profile",
    description: "Official institutional profile detailing NEMA registration F0026, corporate governance, multidisciplinary service pillars, quality assurance protocols, and verified track record.",
    downloadCount: 142,
    fileSize: "2.4 MB"
  },
  {
    id: "res-2",
    title: "Kenyan Statutory EIA & Audit Compliance Checklist (EMCA Cap 387)",
    category: "Regulatory Checklist",
    description: "A comprehensive reference matrix outlining statutory compliance obligations, submission timelines, public consultation standards, and annual audit requirements under NEMA regulations.",
    downloadCount: 98,
    fileSize: "1.1 MB"
  },
  {
    id: "res-3",
    title: "ESHSRIM Procedures & Safeguards Management Toolkit",
    category: "Technical Guidelines",
    description: "Standard operating templates for environmental monitoring registers, site safety checklists, grievance logging forms, and contractor C-ESMP verification protocols.",
    downloadCount: 86,
    fileSize: "1.8 MB"
  }
];
