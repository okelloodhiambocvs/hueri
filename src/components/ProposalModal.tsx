/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { sanitizeString, sanitizeText, sanitizeEmail, sanitizePhone, isValidEmail, isValidPhone } from '../utils/security';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'proposal' | 'tor' | 'partnership' | 'general';
  prefilledScope?: string;
  onLeadSubmit: (leadData: any) => void;
}

export default function ProposalModal({ 
  isOpen, 
  onClose, 
  initialTab = 'proposal',
  prefilledScope,
  onLeadSubmit 
}: ProposalModalProps) {
  if (!isOpen) return null;

  const [inquiryType, setInquiryType] = useState<'proposal' | 'tor' | 'partnership' | 'general'>(initialTab);
  const [formData, setFormData] = useState({
    fullName: '',
    organization: '',
    email: '',
    phone: '',
    country: 'Kenya',
    projectLocation: '',
    serviceNeeded: prefilledScope || 'Environmental & Social Impact Assessment (ESIA)',
    assignmentNature: '',
    procurementRef: '',
    startDate: '',
    proposalDeadline: '',
    preferredResponseMethod: 'Email',
    message: '',
    privacyConsent: false,
    website_hp: '' // Honeypot
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({ ...prev, serviceNeeded: prefilledScope }));
    }
  }, [prefilledScope]);

  useEffect(() => {
    if (initialTab) {
      setInquiryType(initialTab);
    }
  }, [initialTab]);

  const serviceOptions = [
    'Environmental & Social Impact Assessment (ESIA)',
    'Strategic Environmental Assessment (SEA)',
    'Environmental, Social & Safety Compliance Audits',
    'Social Impact Assessment & Resettlement Action Plans (RAP)',
    'Occupational Health & Safety (DOSHS & OSHA 2007)',
    'Climate Change Vulnerability & Adaptation Strategy',
    'Hydrogeological Surveys & Water Permitting (WRA)',
    'Biodiversity, Ecology & Watershed Stewardship',
    'ESG Strategy, Sustainability & Corporate Governance',
    'Environmental & Social Due Diligence (ESDD / ESAP)',
    'Subconsultancy & In-Country African Delivery',
    'Joint Venture & Consortium Teaming'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // 1. Frontend Input Purification
    const purifiedFullName = sanitizeString(formData.fullName, 100);
    const purifiedOrg = sanitizeString(formData.organization, 150);
    const purifiedEmail = sanitizeEmail(formData.email);
    const purifiedPhone = sanitizePhone(formData.phone);
    const purifiedCountry = sanitizeString(formData.country, 80);
    const purifiedLocation = sanitizeString(formData.projectLocation, 150);
    const purifiedService = sanitizeString(formData.serviceNeeded, 150);
    const purifiedAssignment = sanitizeString(formData.assignmentNature, 200);
    const purifiedRef = sanitizeString(formData.procurementRef, 100);
    const purifiedStartDate = sanitizeString(formData.startDate, 50);
    const purifiedDeadline = sanitizeString(formData.proposalDeadline, 50);
    const purifiedMethod = sanitizeString(formData.preferredResponseMethod, 50);
    const purifiedMessage = sanitizeText(formData.message, 4000);

    // 2. Strict Validation
    if (!purifiedFullName || purifiedFullName.length < 2) {
      setValidationError("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!isValidEmail(purifiedEmail)) {
      setValidationError("Please provide a valid email address.");
      return;
    }

    if (purifiedPhone && !isValidPhone(purifiedPhone)) {
      setValidationError("Please provide a valid telephone number format.");
      return;
    }

    if (!formData.privacyConsent) {
      setValidationError("Please acknowledge the Privacy Policy consent checkbox before submitting.");
      return;
    }

    setIsSubmitting(true);

    const typeLabels: Record<string, string> = {
      proposal: 'Request a Technical Proposal',
      tor: 'Submit a TOR / RFP',
      partnership: 'Partnership / Consortium Enquiry',
      general: 'General Enquiry'
    };

    const payload = {
      fullName: purifiedFullName,
      organization: purifiedOrg,
      company: purifiedOrg,
      email: purifiedEmail,
      phone: purifiedPhone,
      country: purifiedCountry,
      projectLocation: purifiedLocation,
      serviceNeeded: purifiedService,
      assignmentNature: purifiedAssignment,
      procurementRef: purifiedRef,
      startDate: purifiedStartDate,
      proposalDeadline: purifiedDeadline,
      preferredResponseMethod: purifiedMethod,
      inquiryType: typeLabels[inquiryType] || 'Proposal Request',
      message: purifiedMessage,
      privacyConsent: true,
      website_hp: formData.website_hp
    };

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success) {
          onLeadSubmit(payload);
          setIsSuccess(true);
        } else {
          setValidationError(data.error || "Submission failed. Please verify your entries.");
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setValidationError("Network communication error. Please retry or contact info@hueriafrica.com directly.");
        console.error('Submission error:', err);
      });
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 lg:p-8 overflow-y-auto"
      role="dialog"
      aria-modal="true"
      aria-labelledby="proposal-modal-title"
    >
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
        aria-hidden="true"
      />

      {/* Modal Container */}
      <div
        className="bg-white dark:bg-[#07162C] text-stone-900 dark:text-slate-100 rounded-3xl max-w-3xl w-full p-6 sm:p-10 shadow-2xl relative z-10 border border-stone-200 dark:border-slate-800 font-sans animate-fadeIn my-6 max-h-[92vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label="Close proposal form"
          className="absolute top-5 right-5 px-3.5 py-1.5 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-600 hover:text-stone-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold border border-stone-200 dark:border-slate-700 focus-visible:ring-2 focus-visible:ring-emerald-400"
        >
          ✕ CLOSE
        </button>

        {isSuccess ? (
          <div className="text-center py-10 space-y-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
              Enquiry Transmitted Successfully
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 dark:text-white">
              Thank You for Contacting HUERI
            </h3>
            <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans max-w-md mx-auto leading-relaxed font-light">
              Your submission has been securely received by our technical and advisory desk. Managing Director Belinda Nyakinya and our Lead Environmental Specialists will review your parameters and follow up via your preferred communication method.
            </p>
            <div className="pt-2">
              <button
                onClick={onClose}
                className="px-8 py-3.5 bg-emerald-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-emerald-700 transition-all cursor-pointer shadow-lg focus-visible:ring-2 focus-visible:ring-emerald-400"
              >
                RETURN TO WEBSITE
              </button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            
            {/* 4 Clear Sub-Categories / CTAs */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 bg-stone-100 dark:bg-slate-900 p-1.5 rounded-2xl border border-stone-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => setInquiryType('proposal')}
                className={`py-2.5 px-2 rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer truncate focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  inquiryType === 'proposal'
                    ? 'bg-white dark:bg-[#07162C] text-emerald-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                Technical Proposal
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('tor')}
                className={`py-2.5 px-2 rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer truncate focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  inquiryType === 'tor'
                    ? 'bg-white dark:bg-[#07162C] text-emerald-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                Submit TOR / RFP
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('partnership')}
                className={`py-2.5 px-2 rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer truncate focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  inquiryType === 'partnership'
                    ? 'bg-white dark:bg-[#07162C] text-emerald-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                Consortium Desk
              </button>
              <button
                type="button"
                onClick={() => setInquiryType('general')}
                className={`py-2.5 px-2 rounded-xl text-[11px] font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer truncate focus-visible:ring-2 focus-visible:ring-emerald-400 ${
                  inquiryType === 'general'
                    ? 'bg-white dark:bg-[#07162C] text-emerald-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                General Enquiry
              </button>
            </div>

            {/* Header Description */}
            <div className="space-y-1.5">
              <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase block">
                {inquiryType === 'proposal' && 'FORMAL TECHNICAL & COMMERCIAL PROPOSAL DESK'}
                {inquiryType === 'tor' && 'TERMS OF REFERENCE (TOR) & EXPRESSION OF INTEREST'}
                {inquiryType === 'partnership' && 'PAN-AFRICAN PARTNERSHIP & CONSORTIUM DESK'}
                {inquiryType === 'general' && 'DIRECT CLIENT & INSTITUTIONAL ADVISORY ENQUIRY'}
              </span>
              <h3 id="proposal-modal-title" className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-white">
                {inquiryType === 'proposal' && 'Request a Detailed Technical Proposal'}
                {inquiryType === 'tor' && 'Submit Assignment Terms of Reference (TOR / RFP)'}
                {inquiryType === 'partnership' && 'Explore Consortium & Subconsultancy Teaming'}
                {inquiryType === 'general' && 'Direct Enquiry to Advisory Team'}
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                Provide the details of your assignment below. Our registered Lead Experts will assess your scope and timeline against statutory and international guidelines.
              </p>
            </div>

            {validationError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
                <span>⚠️ {validationError}</span>
                <button onClick={() => setValidationError(null)} className="text-xs underline cursor-pointer">Dismiss</button>
              </div>
            )}

            {/* Structured Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              
              {/* Anti-bot Honeypot */}
              <input
                type="text"
                name="website_hp"
                value={formData.website_hp}
                onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                tabIndex={-1}
                autoComplete="off"
              />

              {/* Row 1: Full Name & Organisation */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="Enter your full name"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Organisation / Agency / Firm
                  </label>
                  <input
                    type="text"
                    maxLength={150}
                    value={formData.organization}
                    onChange={e => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="Enter organisation or company name"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 2: Email & Phone */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Email address *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={120}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="Enter your email address"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Telephone Number (Optional)
                  </label>
                  <input
                    type="tel"
                    maxLength={30}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 7XX XXX XXX"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 3: Country & Project Location */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Country
                  </label>
                  <input
                    type="text"
                    maxLength={80}
                    value={formData.country}
                    onChange={e => setFormData({ ...formData, country: e.target.value })}
                    placeholder="e.g. Kenya, Uganda, Tanzania, Rwanda"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Project Location / County / Site
                  </label>
                  <input
                    type="text"
                    maxLength={150}
                    value={formData.projectLocation}
                    onChange={e => setFormData({ ...formData, projectLocation: e.target.value })}
                    placeholder="e.g. Kisumu, Nairobi, Mombasa, Turkana"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 4: Primary Scope & Procurement Ref */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Service / Practice Area *
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    {serviceOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Procurement / Tender Ref (Optional)
                  </label>
                  <input
                    type="text"
                    maxLength={100}
                    value={formData.procurementRef}
                    onChange={e => setFormData({ ...formData, procurementRef: e.target.value })}
                    placeholder="e.g. RFP/2026/ENV-04"
                    className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>
              </div>

              {/* Row 5: Timeline & Preferred Response */}
              <div className="grid sm:grid-cols-3 gap-4">
                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Anticipated Start Date
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    value={formData.startDate}
                    onChange={e => setFormData({ ...formData, startDate: e.target.value })}
                    placeholder="e.g. Q2 2026 / Immediate"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Proposal Deadline
                  </label>
                  <input
                    type="text"
                    maxLength={50}
                    value={formData.proposalDeadline}
                    onChange={e => setFormData({ ...formData, proposalDeadline: e.target.value })}
                    placeholder="e.g. Within 5 business days"
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 focus-visible:ring-2 focus-visible:ring-emerald-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Preferred Response
                  </label>
                  <select
                    value={formData.preferredResponseMethod}
                    onChange={e => setFormData({ ...formData, preferredResponseMethod: e.target.value })}
                    className="w-full px-4 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-500"
                  >
                    <option value="Email">Email</option>
                    <option value="Telephone">Telephone</option>
                    <option value="Virtual Meeting">Virtual Meeting (Teams/Meet)</option>
                    <option value="In-Person Meeting">In-Person Meeting</option>
                  </select>
                </div>
              </div>

              {/* Message / TOR Details */}
              <div className="space-y-1.5">
                <label className="block text-[11px] font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                  Assignment Description / TOR Highlights *
                </label>
                <textarea
                  rows={3}
                  maxLength={4000}
                  required
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Outline the project scope, background, regulatory requirements, target financiers (e.g. World Bank, IFC, AfDB), or specific questions for our Lead Consultants..."
                  className="w-full px-4 py-3 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-emerald-600 resize-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                />
              </div>

              {/* Privacy Consent Checkbox */}
              <div className="flex items-start space-x-3 pt-1">
                <input
                  type="checkbox"
                  id="privacy-consent-check"
                  checked={formData.privacyConsent}
                  onChange={e => setFormData({ ...formData, privacyConsent: e.target.checked })}
                  className="mt-1 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-stone-300 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
                />
                <label htmlFor="privacy-consent-check" className="text-[11px] text-stone-600 dark:text-slate-300 leading-tight font-sans cursor-pointer">
                  I consent to the collection and processing of my contact and assignment details by HUERI Limited in accordance with the <strong>Kenya Data Protection Act 2019</strong> and the corporate Privacy Policy.
                </label>
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-emerald-600 hover:bg-emerald-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center cursor-pointer disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  {isSubmitting ? 'PURIFYING & TRANSMITTING ENQUIRY...' : 'TRANSMIT OFFICIAL ENQUIRY TO LEAD CONSULTANTS'}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
