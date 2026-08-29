/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import OfficeInfoCard from './contact/OfficeInfoCard';
import { sanitizeString, sanitizeText, sanitizeEmail, sanitizePhone, isValidEmail, isValidPhone } from '../utils/security';

interface ContactSectionProps {
  onLeadSubmit: (leadData: any) => void;
}

export default function ContactSection({ onLeadSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organization: '',
    country: 'Kenya',
    projectLocation: '',
    serviceNeeded: 'Environmental & Social Impact Assessment (ESIA)',
    assignmentNature: '',
    procurementRef: '',
    preferredResponseMethod: 'Email',
    message: '',
    privacyConsent: false,
    website_hp: '' // Honeypot field for anti-bot defense
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

    // 1. Purify inputs
    const purifiedFullName = sanitizeString(formData.fullName, 100);
    const purifiedEmail = sanitizeEmail(formData.email);
    const purifiedPhone = sanitizePhone(formData.phone);
    const purifiedOrg = sanitizeString(formData.organization, 150);
    const purifiedCountry = sanitizeString(formData.country, 80);
    const purifiedLocation = sanitizeString(formData.projectLocation, 150);
    const purifiedService = sanitizeString(formData.serviceNeeded, 150);
    const purifiedAssignment = sanitizeString(formData.assignmentNature, 200);
    const purifiedRef = sanitizeString(formData.procurementRef, 100);
    const purifiedMethod = sanitizeString(formData.preferredResponseMethod, 50);
    const purifiedMessage = sanitizeText(formData.message, 4000);

    // 2. Validate inputs
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
      setValidationError("Please acknowledge the Privacy Policy consent checkbox.");
      return;
    }

    const payload = {
      fullName: purifiedFullName,
      email: purifiedEmail,
      phone: purifiedPhone,
      organization: purifiedOrg,
      company: purifiedOrg,
      country: purifiedCountry,
      projectLocation: purifiedLocation,
      serviceNeeded: purifiedService,
      assignmentNature: purifiedAssignment,
      procurementRef: purifiedRef,
      preferredResponseMethod: purifiedMethod,
      inquiryType: 'Technical Advisory Request',
      message: purifiedMessage,
      privacyConsent: true,
      website_hp: formData.website_hp
    };

    setIsSubmitting(true);
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success) {
          setSubmitSuccess(true);
          onLeadSubmit(payload);
          setFormData({
            fullName: '',
            email: '',
            phone: '',
            organization: '',
            country: 'Kenya',
            projectLocation: '',
            serviceNeeded: 'Environmental & Social Impact Assessment (ESIA)',
            assignmentNature: '',
            procurementRef: '',
            preferredResponseMethod: 'Email',
            message: '',
            privacyConsent: false,
            website_hp: ''
          });
        } else {
          setValidationError(data.error || "Failed to transmit enquiry. Please check your details.");
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setValidationError("Network issue encountered. Please retry or email info@hueriafrica.com directly.");
        console.error('Enquiry delivery failed:', err);
      });
  };

  const serviceCategories = [
    "Environmental & Social Impact Assessment (ESIA)",
    "Strategic Environmental Assessment (SEA) & Sector Policy",
    "Resettlement Action Plan (RAP) & Livelihood Restoration",
    "Statutory Annual Environmental Audits (EA)",
    "Occupational Health & Safety (DOSHS & OSHA 2007)",
    "World Bank ESF & IFC Performance Standards Alignment",
    "Climate Vulnerability, Resilience & Decarbonisation",
    "Hydrogeological Surveys & Water Permitting (WRA)",
    "Biodiversity, Ecology & Watershed Stewardship",
    "Subconsultancy & In-Country African Delivery",
    "General Advisory / Consortium Teaming"
  ];

  return (
    <section id="contact" className="py-8 sm:py-10 text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-700 dark:text-emerald-400 block">
            OFFICIAL CONSULTATIONS & INQUIRIES
          </span>
          <h2 id="contact-heading" className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 dark:text-white tracking-tight leading-tight">
            Consult Our Safeguards & Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Headquartered in Kisumu, Kenya, with multidisciplinary capacity to deliver assignments across Kenya and wider Africa through qualified partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-6 lg:gap-8 items-start">
          
          {/* Office Credentials & Contacts (Col span 5) */}
          <div className="lg:col-span-5">
            <OfficeInfoCard />
          </div>

          {/* Form (Col span 7) */}
          <div className="lg:col-span-7 bg-white dark:bg-[#071a38] p-6 sm:p-8 rounded-3xl border border-[#E5DFD5] dark:border-slate-800 shadow-xl space-y-6">
            <div className="space-y-1.5 border-b border-[#EBE5DB] dark:border-slate-800 pb-4">
              <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block">
                TERMS OF REFERENCE & TECHNICAL PROPOSAL DESK
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-white">
                Advisory Proposal & Scoping Request
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-300 font-sans font-light leading-relaxed">
                Submit your project specifications or consortium requirements. Managing Director Belinda Nyakinya and our technical panel will review and provide a structured response.
              </p>
            </div>

            {validationError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-xl text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
                <span>⚠️ {validationError}</span>
                <button onClick={() => setValidationError(null)} className="text-xs underline cursor-pointer">Dismiss</button>
              </div>
            )}

            {submitSuccess ? (
              <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-800 text-emerald-950 dark:text-emerald-200 p-6 sm:p-8 rounded-2xl text-center space-y-3">
                <span className="inline-block text-xs font-mono font-bold bg-emerald-700 text-white px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Dossier Logged Successfully
                </span>
                <h4 className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-100">
                  Enquiry Successfully Transmitted!
                </h4>
                <p className="text-xs text-emerald-900 dark:text-slate-200 font-sans leading-relaxed max-w-md mx-auto">
                  Your enquiry has been securely logged. Our lead advisory team will review your parameters and respond promptly.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-1 px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm focus-visible:ring-2 focus-visible:ring-emerald-400"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                
                {/* Honeypot hidden input for spam bots */}
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                </div>

                {/* Phone & Organisation */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      maxLength={30}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Organisation / Agency / Firm
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Enter organisation or company name"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                </div>

                {/* Country & Project Location */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Country
                    </label>
                    <input
                      type="text"
                      maxLength={80}
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Kenya, Uganda, Tanzania, Rwanda"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Project Location / Site
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formData.projectLocation}
                      onChange={e => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Kisumu, Nairobi, Mombasa, Turkana"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                    />
                  </div>
                </div>

                {/* Service Scope & Procurement Ref */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Practice Discipline / Service *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm cursor-pointer"
                    >
                      {serviceCategories.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Procurement Ref / Preferred Method
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        maxLength={100}
                        value={formData.procurementRef}
                        onChange={e => setFormData({ ...formData, procurementRef: e.target.value })}
                        placeholder="Ref (optional)"
                        className="w-full px-3 py-2 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                      />
                      <select
                        value={formData.preferredResponseMethod}
                        onChange={e => setFormData({ ...formData, preferredResponseMethod: e.target.value })}
                        className="w-full px-2 py-2 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 shadow-sm cursor-pointer"
                      >
                        <option value="Email">Email</option>
                        <option value="Telephone">Telephone</option>
                        <option value="Virtual Meeting">Virtual</option>
                      </select>
                    </div>
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                    Project Scope, Geographical Context & Terms of Reference (TOR) *
                  </label>
                  <textarea
                    rows={3}
                    maxLength={4000}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your assignment location, estimated timeline, statutory requirements, lender standards (e.g. World Bank ESF / IFC), or consortium role..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-emerald-600 focus-visible:ring-2 shadow-sm"
                  />
                </div>

                {/* Consent Checkbox */}
                <div className="flex items-start space-x-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contact-consent-check"
                    checked={formData.privacyConsent}
                    onChange={e => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded text-emerald-600 focus:ring-emerald-500 border-stone-300 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
                  />
                  <label htmlFor="contact-consent-check" className="text-[11px] text-stone-600 dark:text-slate-300 leading-tight font-sans cursor-pointer">
                    I consent to the collection and processing of my contact and assignment details by HUERI Limited in accordance with the <strong>Kenya Data Protection Act 2019</strong>.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-emerald-700 hover:bg-emerald-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer disabled:opacity-50 focus-visible:ring-2 focus-visible:ring-emerald-400"
                  >
                    {isSubmitting ? 'PURIFYING & TRANSMITTING SCOPING DOSSIER...' : 'SUBMIT ADVISORY SCOPING REQUEST'}
                  </button>
                </div>

                <div className="pt-2 border-t border-[#EDE7DD] dark:border-slate-800 text-[10px] font-mono text-stone-500 dark:text-slate-400 text-center">
                  ENCRYPTED & SANITIZED ENTRY POINT • DIRECT RESPONSE • NEMA REGISTERED LEAD EXPERTS
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
