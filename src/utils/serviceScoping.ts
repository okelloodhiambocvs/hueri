export type ScopeSector = 'energy' | 'transport' | 'water' | 'housing' | 'agri';
export type ScopePhase = 'planning' | 'licensing' | 'construction' | 'ops';
export type ScopeLender = 'nema-only' | 'nema-ifc' | 'wb' | 'afdb';

export interface ScopingMatrixInput {
  sector: ScopeSector;
  phase: ScopePhase;
  lender: ScopeLender;
}

export interface ScopingMatrixResult {
  deliverables: string[];
  timeline: string;
  standards: string;
}

export const SCOPE_SECTORS: Array<{ value: ScopeSector; label: string }> = [
  { value: 'energy', label: 'Energy & Clean Power (Solar/Wind/Grid)' },
  { value: 'transport', label: 'Transport & Corridors (Highways/Ports)' },
  { value: 'water', label: 'Water Resources & Sanitation (Dams/Irrigation)' },
  { value: 'housing', label: 'Urban Housing & Commercial Real Estate' },
  { value: 'agri', label: 'Agribusiness & Industrial Processing' }
];

export const SCOPE_PHASES: Array<{ value: ScopePhase; label: string }> = [
  { value: 'planning', label: 'Feasibility & Pre-Construction' },
  { value: 'licensing', label: 'Permitting & Approvals' },
  { value: 'construction', label: 'Active Construction & Resident Supervision' },
  { value: 'ops', label: 'Commercial Operations & Annual Auditing' }
];

export const SCOPE_LENDERS: Array<{ value: ScopeLender; label: string }> = [
  { value: 'nema-only', label: 'National Regulatory Guidelines' },
  { value: 'nema-ifc', label: 'National + International Finance Corp (IFC PS1-8)' },
  { value: 'wb', label: 'World Bank Environmental & Social Framework (ESF)' },
  { value: 'afdb', label: 'African Development Bank (AfDB ISS)' }
];

export function calculateProjectScopingRequirements(
  input: ScopingMatrixInput
): ScopingMatrixResult {
  const deliverables: string[] = ['Comprehensive Project Report'];
  let timeline = '4–8 Weeks';
  let standards = 'National Environmental Assessment Guidelines';

  if (input.lender === 'nema-ifc' || input.lender === 'wb' || input.lender === 'afdb') {
    deliverables.push('International ESIA Dossier Aligned with IFC PS1-8');
    deliverables.push('Environmental & Social Management Plan (C-ESMP)');
    timeline = '8–16 Weeks';
    standards =
      input.lender === 'afdb'
        ? 'National Guidelines + African Development Bank (AfDB ISS)'
        : 'National Guidelines + World Bank ESF / IFC Performance Standards';
  }

  if (input.sector === 'energy' || input.sector === 'transport') {
    deliverables.push('Stakeholder Engagement Plan (SEP) & Grievance Redress (GRM)');
    deliverables.push('Resettlement Action Plan (RAP / Livelihood Restoration)');
  }

  if (input.sector === 'water' || input.sector === 'agri') {
    deliverables.push('Hydrological Baseline & Water Resource Assessment');
    deliverables.push('Biodiversity & Critical Habitat Screening');
  }

  if (input.phase === 'construction' || input.phase === 'ops') {
    deliverables.push('Annual Environmental & Compliance Audit');
    deliverables.push('Workplace Occupational Health & Safety Inspection');
    timeline = '2–4 Weeks';
  }

  return { deliverables, timeline, standards };
}
