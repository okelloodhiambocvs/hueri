/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import RoadmapPhaseDetails from './roadmap/RoadmapPhaseDetails';
import { LifecycleStage } from '../types';

interface NemaRoadmapProps {
  onRequestProposal: () => void;
}

const lifecycleStages: LifecycleStage[] = [
  {
    stageNumber: 1,
    title: "Concept & Project Identification",
    category: "Planning & Feasibility",
    description: "Initial screening of proposed project interventions against environmental sensitivities, national laws, international standards, and land-use plans.",
    icon: () => null,
    tasks: [
      "Early environmental and social screening against NEMA & DFI exclusion lists",
      "Identification of applicable regulatory regimes and potential lender standards",
      "High-level constraint mapping using GIS and remote sensing data",
      "Input to project concept notes, inception reports, and scoping frameworks"
    ],
    deliverables: [
      "E&S Screening & Red-Flag Memoranda",
      "Regulatory & Lender Scoping Matrix",
      "Preliminary Stakeholder Identification Map"
    ]
  },
  {
    stageNumber: 2,
    title: "Pre-Feasibility & Site Screening",
    category: "Planning & Feasibility",
    description: "Comparative assessment of alternative sites, alignments, or technologies based on E&S risk, land acquisition needs, and community sensitivities.",
    icon: () => null,
    tasks: [
      "Comparative site and route corridor evaluation",
      "Preliminary biodiversity, water catchment, and cultural heritage checks",
      "Assessment of land ownership, tenure patterns, and physical/economic displacement potential",
      "Initial climate vulnerability and natural hazard screening"
    ],
    deliverables: [
      "Alternative Site E&S Comparison Matrix",
      "Pre-Feasibility E&S Risk Report",
      "Site Selection Safeguard Brief"
    ]
  },
  {
    stageNumber: 3,
    title: "Feasibility & Front-End Design (FEED)",
    category: "Planning & Feasibility",
    description: "Integration of environmental, social, occupational health & safety, and climate resilience measures into technical design and engineering specifications.",
    icon: () => null,
    tasks: [
      "Input to engineering design (avoidance, minimization, mitigation-by-design)",
      "Preparation of Terms of Reference (ToR) for ESIA and specialist studies",
      "Initial stakeholder mapping and Stakeholder Engagement Planning (SEP)",
      "Preliminary cost estimation for environmental, social, and resettlement measures"
    ],
    deliverables: [
      "Approved Terms of Reference (ToR)",
      "Draft Stakeholder Engagement Plan (SEP)",
      "Feasibility Safeguards & Costing Inputs"
    ]
  },
  {
    stageNumber: 4,
    title: "ESIA, Permitting & Lender Due Diligence",
    category: "Preparation & Financing",
    description: "Comprehensive baseline surveys, impact prediction, mitigation planning, public consultations, statutory licensing, and multilateral lender due diligence.",
    icon: () => null,
    tasks: [
      "Baseline field surveys (air, noise, water, ecology, socio-economic, health, cultural resources)",
      "Impact assessment, cumulative impact assessment, and mitigation hierarchy application",
      "Preparation of comprehensive ESIA, EIA, CPR, or SPR reports aligned with NEMA & DFIs",
      "Preparation of Resettlement Action Plans (RAP) and Livelihood Restoration Plans (LRP)",
      "Meaningful public participation, barazas, and gazette notice management"
    ],
    deliverables: [
      "Full ESIA/EIA Reports & Management Plans (ESMP)",
      "RAP / Livelihood Restoration Plans (LRP)",
      "NEMA Environmental Impact Assessment Licences",
      "Water Resource Authority (WRA) & DOSHS Permits"
    ]
  },
  {
    stageNumber: 5,
    title: "Financing, Financial Close & Procurement",
    category: "Preparation & Financing",
    description: "Support to lenders, sponsors, and borrowers to satisfy environmental and social conditions precedent for financial close.",
    icon: () => null,
    tasks: [
      "Environmental and Social Due Diligence (ESDD) for lenders and investors",
      "Preparation of Environmental and Social Action Plans (ESAP)",
      "Drafting of ESHS specifications for EPC, civil works, and contractor tender documents",
      "Evaluation of bidders' ESHS capacity, track record, and management plans"
    ],
    deliverables: [
      "Lender ESDD Reports & Compliance Memoranda",
      "Agreed Environmental & Social Action Plans (ESAP)",
      "ESHS Bidding & Contract Clauses"
    ]
  },
  {
    stageNumber: 6,
    title: "Pre-Construction & Readiness",
    category: "Construction & Commissioning",
    description: "Establishing contractor management plans, grievance mechanisms, permit compliance verification, and pre-construction baseline updates.",
    icon: () => null,
    tasks: [
      "Review and approval of Contractor ESMPs (C-ESMP), OHS Plans, and Traffic Plans",
      "Verification of land acquisition completion and compensation disbursement",
      "Establishment of Project Grievance Redress Mechanism (GRM)",
      "Pre-construction awareness training for contractor personnel and communities"
    ],
    deliverables: [
      "Approved Contractor ESMPs (C-ESMPs)",
      "Compensation & Land Access Clearance Certificates",
      "Operational GRM Registry & Protocols"
    ]
  },
  {
    stageNumber: 7,
    title: "Construction Phase Supervision",
    category: "Construction & Commissioning",
    description: "Continuous on-site and periodic compliance monitoring, resident environmental supervision, ESHS audits, and stakeholder liaison.",
    icon: () => null,
    tasks: [
      "Resident Engineer ESHS oversight and daily/weekly contractor inspection",
      "Regular environmental quality monitoring (noise, dust, water quality, waste)",
      "Occupational health and safety (OHS) incident tracking and corrective actions",
      "Periodic lender and authority compliance reporting (quarterly/semi-annual)"
    ],
    deliverables: [
      "Monthly & Quarterly ESHS Monitoring Reports",
      "Non-Conformance & Corrective Action Notices",
      "Independent ESHS Third-Party Audit Reports"
    ]
  },
  {
    stageNumber: 8,
    title: "Commissioning & Operational Handover",
    category: "Construction & Commissioning",
    description: "Environmental and safety verification during testing, commissioning, statutory handover, and operational readiness assessment.",
    icon: () => null,
    tasks: [
      "Pre-commissioning ESHS audits and punch-list resolution",
      "Transfer of permits, licenses, and statutory reporting obligations to operators",
      "Handover of community liaison and ongoing grievance redress functions",
      "Development of operational phase ESHS procedures, SOPs, and training manuals"
    ],
    deliverables: [
      "Operational Readiness Safeguard Verification",
      "Operating Phase ESMP (O-ESMP)",
      "Permit Transfer & Compliance Dossiers"
    ]
  },
  {
    stageNumber: 9,
    title: "Operations & Maintenance (O&M)",
    category: "Operations & Evolution",
    description: "Ongoing regulatory compliance, performance monitoring, statutory audits, stakeholder engagement, and sustainability reporting throughout operational asset life.",
    icon: () => null,
    tasks: [
      "Mandatory statutory Annual Environmental Audits (EA) under EMCA",
      "Occupational Health and Safety (OHS) audits under OSHA 2007",
      "Long-term ambient emissions, water discharge, and biodiversity monitoring",
      "Annual sustainability, ESG, and Greenhouse Gas (GHG) reporting"
    ],
    deliverables: [
      "Statutory Annual Environmental Audit Reports (NEMA)",
      "DOSHS Annual Safety Audit Reports",
      "Sustainability / ESG Performance Reports"
    ]
  },
  {
    stageNumber: 10,
    title: "Modification, Expansion & Upgrading",
    category: "Operations & Evolution",
    description: "E&S appraisal and statutory permitting for facility expansions, process changes, retrofits, capacity enhancements, or lifecycle upgrades.",
    icon: () => null,
    tasks: [
      "Screening of proposed modifications against statutory thresholds and lender policies",
      "Supplementary ESIA, addenda, or Project Reports for expansion components",
      "Updating of existing operational management plans, monitoring regimes, and permits"
    ],
    deliverables: [
      "Supplementary ESIA Reports & Licence Variations",
      "Updated ESMP & Operational Standard Procedures"
    ]
  },
  {
    stageNumber: 11,
    title: "Decommissioning, Closure & Rehabilitation",
    category: "Operations & Evolution",
    description: "Planning and execution of environmentally responsible and socially safe facility closure, demolition, remediation, and site restoration.",
    icon: () => null,
    tasks: [
      "Preparation of Decommissioning & Rehabilitation Plans (DRP)",
      "Phase II Environmental Site Assessments (ESA) and soil/groundwater contamination testing",
      "Remediation design, hazardous waste abatement, and site restoration oversight",
      "Workforce retrenchment and community transition planning"
    ],
    deliverables: [
      "Approved Decommissioning & Rehabilitation Plans",
      "Site Contamination Assessment & Remediation Plans",
      "Closure Social Transition Frameworks"
    ]
  },
  {
    stageNumber: 12,
    title: "Post-Closure, Monitoring & Handover",
    category: "Operations & Evolution",
    description: "Post-closure environmental monitoring, verification of rehabilitation success, long-term stewardship, and final statutory handover.",
    icon: () => null,
    tasks: [
      "Post-rehabilitation ecological and water quality surveillance",
      "Verification of land stabilization, re-vegetation, and safe community reuse",
      "Statutory decommissioning completion audits for regulatory sign-off",
      "Long-term liability management and community handover protocols"
    ],
    deliverables: [
      "Post-Closure Monitoring Reports",
      "Final Regulatory Decommissioning Clearance (NEMA)",
      "Community Handover & Stewardship Memoranda"
    ]
  }
];

export default function NemaRoadmap({ onRequestProposal }: NemaRoadmapProps) {
  const [activeStageNumber, setActiveStageNumber] = useState<number>(1);
  const [activeCategoryFilter, setActiveCategoryFilter] = useState<string>('All');

  const categories = ['All', 'Planning & Feasibility', 'Preparation & Financing', 'Construction & Commissioning', 'Operations & Evolution'];

  const filteredStages = activeCategoryFilter === 'All'
    ? lifecycleStages
    : lifecycleStages.filter(s => s.category === activeCategoryFilter);

  const activeStage = lifecycleStages.find(s => s.stageNumber === activeStageNumber) || lifecycleStages[0];

  return (
    <section id="roadmap" className="py-8 sm:py-10 bg-gray-50/70 dark:bg-[#0b1c3b] border-t border-b border-gray-200 dark:border-slate-800 transition-colors relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-6">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-block text-xs font-mono font-bold tracking-widest uppercase text-brand-green-600 dark:text-brand-green-400 bg-brand-green-50 dark:bg-emerald-950/40 px-3 py-1 rounded-full border border-brand-green-200 dark:border-emerald-900">
            End-to-End Project Lifecycle Framework
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
            12-Stage African Advisory Support
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Providing continuity of environmental, social, health, safety, and climate safeguards from early concept and finance through construction, commissioning, operations, and closure.
          </p>
        </div>

        {/* Category Grouping Filters - matching light mode toggle button size */}
        <div className="flex flex-wrap items-center justify-center gap-1.5">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategoryFilter(cat)}
              className={`px-3 py-1.5 rounded-xl text-[10px] font-mono font-bold uppercase tracking-wider transition-all cursor-pointer ${
                activeCategoryFilter === cat
                  ? 'bg-brand-blue-900 text-white shadow-sm'
                  : 'bg-white dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-700 border border-gray-200 dark:border-slate-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Stage Selector Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2.5">
          {filteredStages.map((stage) => {
            const isSelected = activeStageNumber === stage.stageNumber;
            return (
              <button
                key={stage.stageNumber}
                onClick={() => setActiveStageNumber(stage.stageNumber)}
                className={`p-3 rounded-xl border text-left transition-all duration-200 flex flex-col justify-between cursor-pointer ${
                  isSelected
                    ? 'bg-brand-blue-900 text-white border-brand-blue-900 shadow-md scale-[1.02]'
                    : 'bg-white dark:bg-[#071a38] text-gray-700 dark:text-slate-300 border-gray-200/80 dark:border-slate-700/80 hover:border-brand-green-500 hover:bg-gray-50 dark:hover:bg-slate-800'
                }`}
              >
                <div className="flex items-center justify-between mb-1.5">
                  <span className={`text-[9px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isSelected ? 'bg-white/20 text-emerald-300' : 'bg-gray-100 dark:bg-slate-800 text-gray-500 dark:text-slate-400'
                  }`}>
                    {stage.stageNumber.toString().padStart(2, '0')}
                  </span>
                  <span className={`text-[9px] font-mono uppercase ${isSelected ? 'text-emerald-300' : 'text-slate-400'}`}>
                    PHASE
                  </span>
                </div>
                <h4 className="font-heading font-bold text-xs leading-snug line-clamp-2">
                  {stage.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Detailed Stage Panel */}
        <RoadmapPhaseDetails activeStage={activeStage} />

      </div>
    </section>
  );
}
