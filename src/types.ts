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

export interface Project {
  id: string;
  title: string;
  county: string;
  country?: string;
  year: number | string;
  industry: string;
  serviceId: string;
  client: string;
  challenge: string;
  solution: string;
  outcome: string;
  location: string;
  coordinates: { x: number; y: number };
  status: 'Completed' | 'Ongoing' | 'Under Review';
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
  email: string;
  phone: string;
  company: string;
  serviceNeeded: string;
  inquiryType?: 'Proposal Request' | 'Partnership / Consortium' | 'Subconsultancy' | 'General';
  message: string;
  status: 'New' | 'Contacted' | 'Proposal Sent' | 'Converted' | 'Archived';
  date: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  credentials?: string[];
  linkedin?: string;
  email?: string;
}

export interface CorporateCredential {
  credential: string;
  issuingAuthority: string;
  reference: string;
  validity: string;
  status: string;
}
