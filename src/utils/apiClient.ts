import { Service } from '../types';
import {
  sanitizeString,
  sanitizeText,
  sanitizeEmail,
  sanitizePhone,
  isValidEmail,
  isValidPhone,
  sanitizePayload
} from './security';

export interface LeadInquiryInput {
  fullName: string;
  email: string;
  phone?: string;
  organization?: string;
  company?: string;
  country?: string;
  projectLocation?: string;
  serviceNeeded?: string;
  assignmentNature?: string;
  procurementRef?: string;
  startDate?: string;
  proposalDeadline?: string;
  preferredResponseMethod?: string;
  inquiryType?: string;
  message?: string;
  privacyConsent?: boolean;
  requireConsent?: boolean;
  requireMessage?: boolean;
  website_hp?: string;
}

export interface PreparedLeadPayload {
  fullName: string;
  email: string;
  phone: string;
  organization: string;
  company: string;
  country: string;
  projectLocation: string;
  serviceNeeded: string;
  assignmentNature: string;
  procurementRef: string;
  startDate: string;
  proposalDeadline: string;
  preferredResponseMethod: string;
  inquiryType: string;
  message: string;
  privacyConsent: boolean;
  website_hp: string;
}

export interface LeadValidationResult {
  valid: boolean;
  error?: string;
  payload?: PreparedLeadPayload;
}

export interface LeadSubmitResult {
  success: boolean;
  error?: string;
  lead?: Record<string, unknown>;
}

export interface PlatformStats {
  projectsCount: number;
  leadsCount: number;
  applicantsCount: number;
  newsletterCount: number;
  consultantsCount: number;
}

export function validateAndPrepareLead(input: LeadInquiryInput): LeadValidationResult {
  const cleanInput = sanitizePayload(input as unknown as Record<string, unknown>) as Partial<LeadInquiryInput>;
  const fullName = sanitizeString(cleanInput.fullName, 100);
  const email = sanitizeEmail(cleanInput.email);
  const phone = sanitizePhone(cleanInput.phone);
  const organization = sanitizeString(cleanInput.organization || cleanInput.company, 150);
  const country = sanitizeString(cleanInput.country, 80) || 'Kenya';
  const projectLocation = sanitizeString(cleanInput.projectLocation, 150);
  const serviceNeeded = sanitizeString(cleanInput.serviceNeeded, 150) || 'General Advisory / Consultation';
  const assignmentNature = sanitizeString(cleanInput.assignmentNature, 200);
  const procurementRef = sanitizeString(cleanInput.procurementRef, 100);
  const startDate = sanitizeString(cleanInput.startDate, 50);
  const proposalDeadline = sanitizeString(cleanInput.proposalDeadline, 50);
  const preferredResponseMethod = sanitizeString(cleanInput.preferredResponseMethod, 50) || 'Email';
  const inquiryType = sanitizeString(cleanInput.inquiryType, 100) || 'Request a Technical Proposal';
  const message = sanitizeText(input.message, 4000);
  const honeypot = sanitizeString(input.website_hp, 200);

  if (!fullName || fullName.length < 2) {
    return {
      valid: false,
      error: 'Please enter your full name (minimum 2 characters).'
    };
  }

  if (!isValidEmail(email)) {
    return {
      valid: false,
      error: 'Please provide a valid email address.'
    };
  }

  if (phone && !isValidPhone(phone)) {
    return {
      valid: false,
      error: 'Please provide a valid telephone number format.'
    };
  }

  if (input.requireMessage && (!message || message.length < 4)) {
    return {
      valid: false,
      error: 'Please provide a brief project scope or inquiry message.'
    };
  }

  if (input.requireConsent && !input.privacyConsent) {
    return {
      valid: false,
      error: 'Please acknowledge the Privacy Policy consent checkbox before submitting.'
    };
  }

  return {
    valid: true,
    payload: {
      fullName,
      email,
      phone,
      organization,
      company: organization,
      country,
      projectLocation,
      serviceNeeded,
      assignmentNature,
      procurementRef,
      startDate,
      proposalDeadline,
      preferredResponseMethod,
      inquiryType,
      message,
      privacyConsent: Boolean(input.privacyConsent),
      website_hp: honeypot
    }
  };
}

export async function submitLeadInquiry(
  input: LeadInquiryInput,
  fetchFn: typeof fetch = fetch
): Promise<LeadSubmitResult> {
  const prepared = validateAndPrepareLead(input);
  if (!prepared.valid || !prepared.payload) {
    return {
      success: false,
      error: prepared.error || 'Please check your form details.'
    };
  }

  try {
    const response = await fetchFn('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(prepared.payload)
    });
    const data = (await response.json()) as {
      success?: boolean;
      error?: string;
      lead?: Record<string, unknown>;
    };

    if (!response.ok || !data?.success) {
      return {
        success: false,
        error: data?.error || 'Failed to submit inquiry. Please verify your entries.'
      };
    }

    return {
      success: true,
      lead: data.lead
    };
  } catch {
    return {
      success: false,
      error: 'Network communication error. Please retry or email info@hueriafrica.com directly.'
    };
  }
}

export async function fetchPublicStats(
  fetchFn: typeof fetch = fetch
): Promise<Partial<PlatformStats> | null> {
  try {
    const response = await fetchFn('/api/stats');
    if (!response.ok) return null;
    const data = (await response.json()) as Partial<PlatformStats>;
    return data && typeof data === 'object' ? data : null;
  } catch {
    return null;
  }
}

export async function fetchPublicServices(
  fetchFn: typeof fetch = fetch
): Promise<Service[]> {
  try {
    const response = await fetchFn('/api/services');
    if (!response.ok) return [];
    const data = await response.json();
    return Array.isArray(data) ? (data as Service[]) : [];
  } catch {
    return [];
  }
}
