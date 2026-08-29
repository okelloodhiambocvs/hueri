/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Service {
  id: string;
  title: string;
  slug: string;
  icon: string;
  shortDescription: string;
  overview: string;
  practiceCategory?: string;
  deliveryModelNote?: string;
  methodology: string[];
  deliverables: string[];
  benefits: string[];
  internationalAlignment?: string[];
  caseExamples: {
    client: string;
    description: string;
    outcome: string;
  }[];
}

export interface Sector {
  id: string;
  title: string;
  slug: string;
  icon: string;
  coverage: string[];
  description: string;
  keyRisks: string[];
  applicableServices: string[];
}

export interface PartnershipModel {
  id: string;
  title: string;
  targetPartners?: string;
  targetAudience?: string;
  description: string;
  benefits: string[];
  valueProposition?: string[];
  icon?: string;
  engagementModes?: string[];
}

export interface LifecycleStage {
  stageNumber: number;
  title: string;
  category?: string;
  description: string;
  icon: any;
  tasks: string[];
  deliverables: string[];
  internationalStandard?: string;
}

export type ProjectStatus = 
  | 'Completed' 
  | 'Ongoing' 
  | 'Submitted' 
  | 'Approved' 
  | 'NEMA licence obtained' 
  | 'ESIA approved' 
  | 'Approval obtained';

export interface ProjectEvidence {
  type: 'Licence' | 'Report' | 'Audit' | 'Certificate' | 'Letter' | 'Dossier' | 'Other';
  description: string;
  referenceNo?: string;
  isConfidential?: boolean;
  status: 'Verified' | 'Archived' | 'Available on Request';
}

export interface Project {
  id: string;
  title: string;
  county: string;
  country?: string;
  year: number | string;
  assignmentPeriod?: string;
  industry: string;
  serviceId: string;
  client: string;
  assignmentScope?: string;
  hueriRole?: string;
  role?: string;
  challenge: string;
  solution: string;
  outcome: string;
  location: string;
  keyDeliverables?: string[];
  coordinates: { x: number; y: number };
  status: ProjectStatus;
  evidenceSummary?: string;
  evidenceItems?: ProjectEvidence[];
  clientReferenceNote?: string;
  requiresVerification?: boolean;
}

export interface LeadershipExperience {
  id: string;
  title: string;
  practitioner: string;
  role: string;
  program: string;
  institution: string;
  period: string;
  scope: string;
  contractualContext?: string;
  description: string;
  keyContributions: string[];
  evidenceNote?: string;
}

export interface Article {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  excerpt: string;
  content: string;
  readTime: string;
  slug: string;
}

export interface Resource {
  id: string;
  title: string;
  category: string;
  description: string;
  downloadCount: number;
  fileSize: string;
}

export interface Lead {
  id: string;
  fullName: string;
  organization?: string;
  company?: string;
  email: string;
  phone?: string;
  country?: string;
  projectLocation?: string;
  serviceNeeded?: string;
  assignmentNature?: string;
  procurementRef?: string;
  startDate?: string;
  proposalDeadline?: string;
  preferredResponseMethod?: string;
  inquiryType?: 'General Enquiry' | 'Request a Technical Proposal' | 'Submit a TOR/RFP' | 'Partnership / Consortium' | string;
  message: string;
  privacyConsent?: boolean;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Converted' | 'Archived';
  date: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  specialization: string;
  qualifications: string[];
  professionalRegistrations?: string[];
  yearsOfExperience?: string | number;
  coreExpertise: string[];
  selectedExperience: string[];
  bio: string;
  verificationStatus: 'Verified' | 'Subject to CV & Registration Verification' | 'Associate Specialist Roster';
  isCoreLeadership?: boolean;
  category: 'Leadership' | 'Social' | 'Environmental' | 'OHS' | 'Engineering' | 'GIS' | 'Biodiversity' | 'Valuation' | 'Research';
  credentials?: string[];
  linkedin?: string;
  email?: string;
  image?: string;
}

export interface CorporateCredential {
  credential: string;
  issuingAuthority: string;
  reference: string;
  validity: string;
  status: string;
  category: 'Statutory Licence' | 'Corporate Registration' | 'Tax & Good Standing' | 'County Permit' | 'Professional Affiliation';
  verificationNote: string;
  requiresVerification?: boolean;
}

export interface QualityAssurancePillar {
  id: string;
  pillarNumber: string;
  title: string;
  shortDesc: string;
  details: string[];
  controls: string[];
  icon: string;
}

export interface GovernanceTier {
  id: string;
  level: string;
  title: string;
  responsibilities: string[];
  oversightRole: string;
}
