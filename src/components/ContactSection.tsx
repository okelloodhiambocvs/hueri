/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import OfficeInfoCard from './contact/OfficeInfoCard';
import { sanitizeString, sanitizeText, sanitizeEmail, sanitizePhone, isValidEmail, isValidPhone } from '../utils/security';

interface ContactSectionProps {
  onLeadSubmit: (leadData: { fullName: string; email: string; phone: string; company: string; serviceNeeded: string; message: string }) => void;
}

export default function ContactSection({ onLeadSubmit }: ContactSectionProps) {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    serviceNeeded: 'Environmental Impact Assessment (ESIA) & Permitting',
    message: '',
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
    const purifiedCompany = sanitizeString(formData.company, 120);
    const purifiedService = sanitizeString(formData.serviceNeeded, 150);
    const purifiedMessage = sanitizeText(formData.message, 3000);

    // 2. Validate inputs
    if (!purifiedFullName || purifiedFullName.length < 2) {
      setValidationError("Please enter your full name (minimum 2 characters).");
      return;
    }

    if (!isValidEmail(purifiedEmail)) {
      setValidationError("Please provide a valid corporate or institutional email address.");
      return;
    }

    if (purifiedPhone && !isValidPhone(purifiedPhone)) {
      setValidationError("Please provide a valid telephone number format.");
      return;
    }

    const payload = {
      fullName: purifiedFullName,
      email: purifiedEmail,
      phone: purifiedPhone,
      company: purifiedCompany,
      serviceNeeded: purifiedService,
      message: purifiedMessage,
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
            company: '',
            serviceNeeded: 'Environmental Impact Assessment (ESIA) & Permitting',
            message: '',
            website_hp: ''
          });
        } else {
          setValidationError(data.error || "Failed to transmit inquiry. Please verify inputs.");
        }
      })
      .catch(err => {
        setIsSubmitting(false);
        setValidationError("Network connection issue. Please check your connection and retry.");
        console.error('Inquiry delivery failed:', err);
      });
  };

  const serviceCategories = [
    "Environmental Impact Assessment (ESIA) & Permitting",
    "Strategic Environmental Assessment (SEA) & Sector Policy",
    "Resettlement Action Plan (RAP) & Livelihood Restoration",
    "Statutory Annual Environmental Audits (EA)",
    "Occupational Health & Safety (DOSHS) Audits",
    "World Bank ESF & IFC PS Compliance Assessment",
    "Climate Vulnerability & Adaptation Frameworks",
    "Ecological Baselines & Biodiversity Offsets",
    "GIS Drone Mapping & Remote Sensing Intelligence",
    "General Advisory / Tender Teaming Inquiry"
  ];

  return (
    <section id="contact" className="py-8 sm:py-10 text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-700 dark:text-brand-green-400 block">
            OFFICIAL CONSULTATIONS & INQUIRIES
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl lg:text-4xl text-stone-900 dark:text-white tracking-tight leading-tight">
            Consult Our Safeguards & Advisory Team
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Headquartered in Kisumu, Kenya, serving assignments across Africa, and open to international consortium partnerships, donor due diligence, and statutory NEMA licencing.
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
              <span className="text-[10px] font-mono font-bold text-brand-green-700 dark:text-brand-green-400 uppercase tracking-widest block">
                TERMS OF REFERENCE & PROPOSAL SUBMISSION
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-stone-900 dark:text-white">
                Advisory Proposal & Scoping Request
              </h3>
              <p className="text-xs text-stone-600 dark:text-slate-300 font-sans font-light leading-relaxed">
                Submit your project specifications or consortium requirements. Managing Director Belinda Nyakinya and our technical panel will construct a responsive, decision-useful proposal.
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
                <span className="inline-block text-xs font-mono font-bold bg-brand-green-700 text-white px-3.5 py-1 rounded-full uppercase tracking-wider">
                  Dossier Logged Successfully
                </span>
                <h4 className="font-heading font-bold text-lg text-emerald-950 dark:text-emerald-100">
                  Inquiry Successfully Transmitted!
                </h4>
                <p className="text-xs text-emerald-900 dark:text-slate-200 font-sans leading-relaxed max-w-md mx-auto">
                  A custom advisory dossier has been logged in our Kisumu portal. Our lead advisory team will contact you within 24 hours.
                </p>
                <button
                  onClick={() => setSubmitSuccess(false)}
                  className="mt-1 px-4 py-2 bg-brand-green-700 hover:bg-brand-green-600 text-white rounded-xl text-xs font-bold uppercase tracking-wider cursor-pointer shadow-sm"
                >
                  Send another inquiry
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
                      placeholder="e.g. Eng. Belinda Omwenga"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={e => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. b.omwenga@developer.com"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Phone Number / WhatsApp
                    </label>
                    <input
                      type="tel"
                      maxLength={30}
                      value={formData.phone}
                      onChange={e => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      maxLength={120}
                      value={formData.company}
                      onChange={e => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company, DFI or County Ministry"
                      className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                    Required Practice Discipline / Service Scope *
                  </label>
                  <select
                    value={formData.serviceNeeded}
                    onChange={e => setFormData({ ...formData, serviceNeeded: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm cursor-pointer"
                  >
                    {serviceCategories.map((s, idx) => (
                      <option key={idx} value={s}>{s}</option>
                    ))}
                  </select>
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono font-bold text-stone-700 dark:text-slate-300 block uppercase tracking-wider">
                    Project Scope, Geographical Context & Terms of Reference (TOR)
                  </label>
                  <textarea
                    rows={3}
                    maxLength={3000}
                    value={formData.message}
                    onChange={e => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your assignment location, estimated timeline, statutory requirements, lender standards (e.g. World Bank ESF/IFC), or consortium role..."
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] dark:bg-slate-900 border border-[#DCD5C9] dark:border-slate-700 rounded-xl text-xs text-stone-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-600 shadow-sm"
                  />
                </div>

                <div className="pt-1">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3 bg-brand-green-700 hover:bg-brand-green-600 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-green-700/20 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'PURIFYING & TRANSMITTING SCOPING DOSSIER...' : 'SUBMIT ADVISORY SCOPING REQUEST'}
                  </button>
                </div>

                <div className="pt-2 border-t border-[#EDE7DD] dark:border-slate-800 text-[10px] font-mono text-stone-500 dark:text-slate-400 text-center">
                  ENCRYPTED & SANITIZED ENTRY POINT • DIRECT 24H RESPONSE • NEMA REGISTERED LEAD EXPERTS
                </div>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
}
