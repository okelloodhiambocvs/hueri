/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { sanitizeString, sanitizeText, sanitizeEmail, sanitizePhone, isValidEmail, isValidPhone } from '../utils/security';

interface ProposalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: 'advisory' | 'partnership';
  prefilledScope?: string;
  onLeadSubmit: (leadData: { fullName: string; email: string; phone: string; company: string; serviceNeeded: string; message: string }) => void;
}

export default function ProposalModal({ 
  isOpen, 
  onClose, 
  initialTab = 'advisory',
  prefilledScope,
  onLeadSubmit 
}: ProposalModalProps) {
  if (!isOpen) return null;

  const [modalTab, setModalTab] = useState<'advisory' | 'partnership'>(initialTab);
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: prefilledScope || (initialTab === 'partnership' ? 'Subconsultancy & In-Country Delivery Partner' : 'Environmental Impact Assessment (ESIA) & Statutory Permitting'),
    message: '',
    website_hp: ''
  });
  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (prefilledScope) {
      setFormData(prev => ({ ...prev, serviceNeeded: prefilledScope }));
    }
  }, [prefilledScope]);

  const advisoryOptions = [
    'Environmental Impact Assessment (ESIA) & Statutory Permitting',
    'Strategic Environmental Assessment (SEA) & Sector Policy',
    'Environmental, Social & OHS Compliance Audits',
    'Social Impact Assessment, RAP & Livelihood Restoration',
    'Occupational Health, Safety & Hazardous Materials',
    'Climate Change Vulnerability & Decarbonisation',
    'Biodiversity, Ecology & Watershed Stewardship',
    'Hydrogeological Surveys & Water Resources Management',
    'ESG Strategy, Sustainability & Corporate Governance',
    'Environmental & Social Due Diligence (ESDD / ESAP)'
  ];

  const partnershipOptions = [
    'Subconsultancy & In-Country Delivery Partner',
    'Joint Venture (JV) & Tender Consortium Partner',
    'Master Service Agreement (MSA) & Framework Contracting',
    'Local Technical & Community Safeguards Partner',
    'Peer Review & Second-Opinion Advisory',
    'Capacity Building & Institutional Development Partner',
    'Other International / Regional Consortium'
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // 1. Purify inputs
    const purifiedFullName = sanitizeString(formData.fullName, 100);
    const purifiedEmail = sanitizeEmail(formData.email);
    const purifiedPhone = sanitizePhone(formData.phone);
    const purifiedCompany = sanitizeString(formData.company, 120);
    const purifiedService = sanitizeString(formData.serviceNeeded, 150);
    const purifiedMessage = sanitizeText(formData.message, 3000);

    // 2. Validate
    if (!purifiedFullName || purifiedFullName.length < 2) {
      setValidationError("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!isValidEmail(purifiedEmail)) {
      setValidationError("Please enter a valid corporate or institutional email.");
      return;
    }

    if (purifiedPhone && !isValidPhone(purifiedPhone)) {
      setValidationError("Please enter a valid telephone format.");
      return;
    }

    setIsSubmitting(true);

    const submissionTag = modalTab === 'partnership' ? `[GLOBAL PARTNERSHIP] ${purifiedService}` : purifiedService;

    const payload = {
      fullName: purifiedFullName,
      email: purifiedEmail,
      phone: purifiedPhone,
      company: purifiedCompany,
      serviceNeeded: submissionTag,
      message: purifiedMessage,
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
          setValidationError(data.error || "Submission failed. Please verify your details.");
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setValidationError("Network issue. Please try again.");
        console.error('Proposal delivery error:', err);
      });
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 lg:p-8 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Container */}
      <div
        className="bg-white dark:bg-[#07162C] text-stone-900 dark:text-slate-100 rounded-3xl max-w-2xl w-full p-8 sm:p-12 shadow-2xl relative z-10 border border-stone-200 dark:border-slate-800 font-sans animate-fadeIn my-8 max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 px-4 py-2 rounded-full bg-stone-100 dark:bg-slate-800 text-stone-600 hover:text-stone-900 dark:text-slate-300 dark:hover:text-white transition-colors cursor-pointer text-xs font-mono font-bold border border-stone-200 dark:border-slate-700"
        >
          ✕ CLOSE
        </button>

        {isSuccess ? (
          <div className="text-center py-12 space-y-5">
            <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300 font-mono text-xs font-bold uppercase tracking-wider">
              Dossier Transmitted Successfully
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 dark:text-white">
              {modalTab === 'partnership' ? 'Partnership Inquiry Transmitted' : 'Advisory Proposal Request Received'}
            </h3>
            <p className="text-sm text-stone-600 dark:text-slate-300 font-sans max-w-md mx-auto leading-relaxed font-light">
              Thank you. Managing Director Belinda Nyakinya and our Lead Environmental Experts will review your parameters and respond within 24 hours.
            </p>
            <button
              onClick={onClose}
              className="mt-6 px-8 py-3.5 bg-brand-green-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl hover:bg-brand-green-700 transition-all cursor-pointer shadow-lg"
            >
              RETURN TO WEBSITE
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            
            {/* Tab Selector */}
            <div className="flex rounded-2xl bg-stone-100 dark:bg-slate-900 p-1.5 border border-stone-200 dark:border-slate-800">
              <button
                type="button"
                onClick={() => {
                  setModalTab('advisory');
                  setFormData(prev => ({ ...prev, serviceNeeded: advisoryOptions[0] }));
                }}
                className={`flex-1 py-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                  modalTab === 'advisory'
                    ? 'bg-white dark:bg-[#07162C] text-brand-green-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                Terms of Reference Proposal
              </button>

              <button
                type="button"
                onClick={() => {
                  setModalTab('partnership');
                  setFormData(prev => ({ ...prev, serviceNeeded: partnershipOptions[0] }));
                }}
                className={`flex-1 py-3 rounded-xl text-xs font-heading font-bold uppercase tracking-wider text-center transition-all cursor-pointer ${
                  modalTab === 'partnership'
                    ? 'bg-white dark:bg-[#07162C] text-brand-green-700 dark:text-emerald-400 shadow-sm border border-stone-200 dark:border-slate-700 font-extrabold'
                    : 'text-stone-500 dark:text-slate-400 hover:text-stone-900 dark:hover:text-white'
                }`}
              >
                Global Partnership
              </button>
            </div>

            {/* Form Title & Description */}
            <div className="space-y-2">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-green-600 dark:text-emerald-400 uppercase block">
                {modalTab === 'partnership' ? 'INTERNATIONAL & REGIONAL COLLABORATION DESK' : 'DIRECT TECHNICAL CONSULTATION DESK'}
              </span>
              <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-stone-900 dark:text-white">
                {modalTab === 'partnership' ? 'Initiate Global Partnership' : 'Terms of Reference & Proposal Submission'}
              </h3>
              <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light font-sans leading-relaxed">
                {modalTab === 'partnership'
                  ? 'Connect with our Managing Director regarding subconsultancy, joint ventures, or framework contracting across Africa.'
                  : 'Submit your project coordinates, sector, or safeguard scope for a rapid technical and commercial proposal from our NEMA Lead Experts.'}
              </p>
            </div>

            {validationError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
                <span>⚠️ {validationError}</span>
                <button onClick={() => setValidationError(null)} className="text-xs underline cursor-pointer">Dismiss</button>
              </div>
            )}

            {/* Form Fields */}
            <form onSubmit={handleSubmit} className="space-y-6">
              
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

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    maxLength={100}
                    value={formData.fullName}
                    onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                    placeholder="e.g. Eng. Belinda Nyakinya"
                    className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 shadow-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Institutional Email *
                  </label>
                  <input
                    type="email"
                    required
                    maxLength={120}
                    value={formData.email}
                    onChange={e => setFormData({ ...formData, email: e.target.value })}
                    placeholder="e.g. partner@consortium.org"
                    className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 shadow-xs"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Phone Number (+254 / Intl)
                  </label>
                  <input
                    type="tel"
                    maxLength={30}
                    value={formData.phone}
                    onChange={e => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 721 410139"
                    className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 shadow-xs"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                    Organization / Agency / Firm
                  </label>
                  <input
                    type="text"
                    maxLength={120}
                    value={formData.company}
                    onChange={e => setFormData({ ...formData, company: e.target.value })}
                    placeholder="e.g. Infrastructure Development Authority"
                    className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 shadow-xs"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                  {modalTab === 'partnership' ? 'Preferred Collaboration Model' : 'Core Practice Scope'}
                </label>
                <select
                  value={formData.serviceNeeded}
                  onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                  className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 cursor-pointer shadow-xs"
                >
                  {modalTab === 'partnership' ? (
                    partnershipOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))
                  ) : (
                    advisoryOptions.map((opt, i) => (
                      <option key={i} value={opt}>{opt}</option>
                    ))
                  )}
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono font-bold text-stone-700 dark:text-slate-300 uppercase">
                  {modalTab === 'partnership' ? 'Consortium / Project Brief' : 'Terms of Reference & Project Site Details'}
                </label>
                <textarea
                  rows={4}
                  maxLength={3000}
                  value={formData.message}
                  onChange={e => setFormData({ ...formData, message: e.target.value })}
                  placeholder={
                    modalTab === 'partnership'
                      ? 'Outline the target assignment, country/region, lender framework (IFC, WB, AfDB), or proposed teaming structure...'
                      : 'Describe your project location, county/region, timeline, key environmental/social parameters...'
                  }
                  className="w-full px-5 py-3.5 bg-[#FAF8F5] dark:bg-slate-900 border border-stone-300 dark:border-slate-700 rounded-2xl text-xs text-stone-900 dark:text-white focus:outline-none focus:border-brand-green-600 resize-none shadow-xs"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-4 bg-brand-green-600 hover:bg-brand-green-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-2xl transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5 text-center cursor-pointer disabled:opacity-50"
                >
                  {isSubmitting ? 'PURIFYING & TRANSMITTING...' : (modalTab === 'partnership' ? 'SUBMIT PARTNERSHIP INQUIRY' : 'SUBMIT TERMS OF REFERENCE PROPOSAL REQUEST')}
                </button>
              </div>

            </form>
          </div>
        )}
      </div>
    </div>
  );
}
