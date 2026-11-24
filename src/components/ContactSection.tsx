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
    website_hp: ''
  });

  const [validationError, setValidationError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);

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

    if (!purifiedFullName || purifiedFullName.length < 2) {
      setValidationError('Please enter your full name (minimum 2 characters).');
      return;
    }

    if (!isValidEmail(purifiedEmail)) {
      setValidationError('Please provide a valid email address.');
      return;
    }

    if (purifiedPhone && !isValidPhone(purifiedPhone)) {
      setValidationError('Please provide a valid telephone number format.');
      return;
    }

    if (!formData.privacyConsent) {
      setValidationError('Please acknowledge the Privacy Policy consent checkbox.');
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
          setValidationError(data.error || 'Failed to transmit enquiry. Please check your details.');
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setValidationError('Network issue encountered. Please retry or email info@hueriafrica.com directly.');
        console.error('Enquiry delivery failed:', err);
      });
  };

  const serviceCategories = [
    'Environmental & Social Impact Assessment (ESIA)',
    'Strategic Environmental Assessment (SEA) & Sector Policy',
    'Resettlement Action Plan (RAP) & Livelihood Restoration',
    'Statutory Annual Environmental Audits (EA)',
    'Occupational Health & Safety (DOSHS & OSHA 2007)',
    'World Bank ESF & IFC Performance Standards Alignment',
    'Climate Vulnerability, Resilience & Decarbonisation',
    'Hydrogeological Surveys & Water Permitting (WRA)',
    'Biodiversity, Ecology & Watershed Stewardship',
    'Subconsultancy & In-Country African Delivery',
    'General Advisory / Consortium Teaming'
  ];

  const inputClass =
    'w-full px-3.5 py-2.5 bg-white dark:bg-[#06183A] border border-slate-300 dark:border-slate-700 rounded-lg text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]';

  return (
    <section id="contact" className="py-10 sm:py-12 text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans" aria-labelledby="contact-heading">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">

        <div className="text-center max-w-3xl mx-auto space-y-2">
          <h2 id="contact-heading" className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-[#003B95] dark:text-white tracking-tight leading-tight">
            Consult Our Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Headquartered in Kisumu, Kenya, with capacity to deliver assignments across Kenya and wider Africa through qualified partnerships.
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start pt-2">

          <div className="lg:col-span-5">
            <OfficeInfoCard />
          </div>

          <div className="lg:col-span-7 lg:pl-10 space-y-6">
            <div className="space-y-1.5">
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-[#003B95] dark:text-white">
                Send an Inquiry
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-sans font-light leading-relaxed">
                Submit your project details or partnership requirements. Managing Director Belinda Nyakinya and our technical team will review and respond promptly.
              </p>
            </div>

            {validationError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-lg text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
                <span>{validationError}</span>
                <button type="button" onClick={() => setValidationError(null)} className="text-xs font-bold cursor-pointer">Dismiss</button>
              </div>
            )}

            {submitSuccess ? (
              <div className="p-6 rounded-xl bg-emerald-50/70 dark:bg-emerald-950/30 text-center space-y-3">
                <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] uppercase tracking-wider block">
                  Dossier Logged Successfully
                </span>
                <h4 className="font-heading font-bold text-lg text-[#003B95] dark:text-white">
                  Enquiry Successfully Transmitted!
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-200 font-sans leading-relaxed max-w-md mx-auto">
                  Your enquiry has been securely logged. Our lead advisory team will review your parameters and respond promptly.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-1 px-4 py-2 bg-[#006B22] hover:bg-[#00581C] text-white rounded-lg text-xs font-bold uppercase tracking-wider cursor-pointer"
                >
                  Send another enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">

                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={e => setFormData({ ...formData, website_hp: e.target.value })}
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      maxLength={100}
                      value={formData.fullName}
                      onChange={e => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Enter your full name"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Email address *
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="Enter your email address"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Telephone Number
                    </label>
                    <input
                      type="tel"
                      maxLength={30}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 7XX XXX XXX"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Organisation / Agency / Firm
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formData.organization}
                      onChange={e => setFormData({ ...formData, organization: e.target.value })}
                      placeholder="Enter organisation or company name"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Country
                    </label>
                    <input
                      type="text"
                      maxLength={80}
                      value={formData.country}
                      onChange={e => setFormData({ ...formData, country: e.target.value })}
                      placeholder="e.g. Kenya, Uganda, Tanzania, Rwanda"
                      className={inputClass}
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Project Location / Site
                    </label>
                    <input
                      type="text"
                      maxLength={150}
                      value={formData.projectLocation}
                      onChange={e => setFormData({ ...formData, projectLocation: e.target.value })}
                      placeholder="e.g. Kisumu, Nairobi, Mombasa, Turkana"
                      className={inputClass}
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Practice Discipline / Service *
                    </label>
                    <select
                      value={formData.serviceNeeded}
                      onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                      className={`${inputClass} cursor-pointer`}
                    >
                      {serviceCategories.map((s, idx) => (
                        <option key={idx} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                      Procurement Ref / Preferred Method
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <input
                        type="text"
                        maxLength={100}
                        value={formData.procurementRef}
                        onChange={e => setFormData({ ...formData, procurementRef: e.target.value })}
                        placeholder="Ref (optional)"
                        className={inputClass}
                      />
                      <select
                        value={formData.preferredResponseMethod}
                        onChange={e => setFormData({ ...formData, preferredResponseMethod: e.target.value })}
                        className={`${inputClass} cursor-pointer`}
                      >
                        <option value="Email">Email</option>
                        <option value="Telephone">Telephone</option>
                        <option value="Virtual Meeting">Virtual</option>
                      </select>
                    </div>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-slate-700 dark:text-slate-300 block uppercase tracking-wider">
                    Project Scope, Geographical Context &amp; Terms of Reference (TOR) *
                  </label>
                  <textarea
                    rows={3}
                    maxLength={4000}
                    required
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your assignment location, estimated timeline, statutory requirements, lender standards (e.g. World Bank ESF / IFC), or consortium role..."
                    className={inputClass}
                  />
                </div>

                <div className="flex items-start space-x-2.5 pt-1">
                  <input
                    type="checkbox"
                    id="contact-consent-check"
                    checked={formData.privacyConsent}
                    onChange={e => setFormData({ ...formData, privacyConsent: e.target.checked })}
                    className="mt-0.5 h-4 w-4 rounded text-[#006B22] focus:ring-[#006B22] border-slate-300 dark:border-slate-700 dark:bg-slate-900 cursor-pointer"
                  />
                  <label htmlFor="contact-consent-check" className="text-[11px] text-slate-600 dark:text-slate-300 leading-tight font-sans cursor-pointer">
                    I consent to the collection and processing of my contact and assignment details by HUERI Limited in accordance with the <strong>Kenya Data Protection Act 2019</strong>.
                  </label>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'SUBMITTING...' : 'SUBMIT INQUIRY'}
                  </button>
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
