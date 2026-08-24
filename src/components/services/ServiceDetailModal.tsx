/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Service } from '../../types';

interface ServiceDetailModalProps {
  service: Service | null;
  onClose: () => void;
  onLeadSubmit: (leadData: { fullName: string; email: string; phone: string; company: string; serviceNeeded: string; message: string }) => void;
}

export default function ServiceDetailModal({ service, onClose, onLeadSubmit }: ServiceDetailModalProps) {
  if (!service) return null;

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    inquiryType: 'Project Advisory Proposal',
    message: `We would like to request an environmental & social advisory consultation regarding "${service.title}" for our upcoming assignment.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      onLeadSubmit({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        serviceNeeded: `${service.title} (${formData.inquiryType})`,
        message: formData.message
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 600);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="fixed inset-0 bg-slate-950/80 backdrop-blur-md transition-opacity duration-300 animate-fadeIn"
      />

      {/* Modal Dialog */}
      <div
        className="bg-white dark:bg-[#071a38] text-gray-900 dark:text-slate-100 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl relative z-10 border border-gray-200 dark:border-slate-800 p-6 sm:p-10 font-sans animate-fadeIn"
      >
        <button
          onClick={onClose}
          className="absolute top-6 right-6 px-3 py-1.5 rounded-full bg-gray-100 dark:bg-slate-800 text-gray-600 dark:text-slate-300 hover:text-gray-900 dark:hover:text-white text-xs font-mono font-bold transition-colors cursor-pointer"
        >
          Close [ESC]
        </button>

        <div className="space-y-8">
          {/* Header */}
          <div className="border-b border-gray-100 dark:border-slate-800 pb-6 pr-16">
            <div className="flex items-center gap-2 mb-1.5">
              <span className="text-xs font-mono font-bold tracking-widest text-brand-green-600 dark:text-brand-green-400 uppercase">
                PRACTICE AREA PORTFOLIO
              </span>
              <span className="text-gray-300 dark:text-slate-700">•</span>
              <span className="text-xs font-mono text-brand-blue-900 dark:text-blue-300 font-semibold">
                {service.practiceCategory || 'HUERI Limited'}
              </span>
            </div>

            <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white leading-tight">
              {service.title}
            </h2>
          </div>

          {/* Service Overview */}
          <div className="space-y-3">
            <h3 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-slate-400 font-mono">
              PRACTICE OVERVIEW & OBJECTIVES
            </h3>
            <p className="text-sm sm:text-base text-gray-700 dark:text-slate-200 leading-relaxed font-light">
              {service.overview}
            </p>
          </div>

          {/* International Standards Alignment */}
          {service.internationalAlignment && service.internationalAlignment.length > 0 && (
            <div className="p-5 rounded-2xl bg-brand-blue-50/70 dark:bg-[#0b1f42] border border-brand-blue-100 dark:border-slate-700/60">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-brand-blue-900 dark:text-blue-300 mb-3">
                Applicable Statutory & International Framework Alignment
              </h4>
              <div className="grid sm:grid-cols-2 gap-2 text-xs text-gray-700 dark:text-slate-200">
                {service.internationalAlignment.map((std, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <span className="text-emerald-500 font-bold">•</span>
                    <span>{std}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Structured Step-by-Step Methodology */}
          {service.methodology && service.methodology.length > 0 && (
            <div className="space-y-3">
              <h3 className="text-xs font-bold uppercase tracking-wider text-brand-green-600 dark:text-brand-green-400 font-mono">
                TECHNICAL APPROACH & METHODOLOGY
              </h3>
              <ul className="space-y-2.5">
                {service.methodology.map((step, i) => (
                  <li key={i} className="flex items-start space-x-3 text-xs sm:text-sm text-gray-600 dark:text-slate-300">
                    <span className="h-5 w-5 rounded-full bg-brand-green-50 dark:bg-brand-green-950 text-brand-green-600 font-bold text-xs flex items-center justify-center shrink-0 mt-0.5 border border-brand-green-200 dark:border-brand-green-900">
                      {i + 1}
                    </span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Deliverables & Strategic Benefits */}
          <div className="grid md:grid-cols-2 gap-6 pt-2">
            {service.deliverables && (
              <div className="bg-gray-50 dark:bg-[#0b1c3b] p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider text-gray-900 dark:text-white uppercase">
                  CLIENT DELIVERABLES
                </h4>
                <ul className="space-y-2">
                  {service.deliverables.map((item, idx) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-brand-green-600 font-bold shrink-0">•</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {service.benefits && (
              <div className="bg-gray-50 dark:bg-[#0b1c3b] p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 space-y-3">
                <h4 className="text-xs font-mono font-bold tracking-wider text-gray-900 dark:text-white uppercase">
                  STRATEGIC ADVANTAGES & VALUE
                </h4>
                <ul className="space-y-2">
                  {service.benefits.map((benefit, idx) => (
                    <li key={idx} className="text-xs text-gray-600 dark:text-slate-300 flex items-start gap-2">
                      <span className="text-brand-blue-600 dark:text-cyan-400 font-bold shrink-0">•</span>
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          {/* Advisory Scoping Form */}
          <div className="mt-8 pt-8 border-t border-gray-200 dark:border-slate-800">
            <h3 className="font-heading font-bold text-lg text-gray-900 dark:text-white mb-2">
              Request Advisory Scoping for this Practice
            </h3>
            <p className="text-xs text-gray-600 dark:text-slate-300 font-light mb-6">
              Connect directly with our Kisumu headquarters and Lead Expert team for Terms of Reference (TOR) scoping and fee schedules.
            </p>

            {submitSuccess ? (
              <div className="p-6 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-500/30 text-center space-y-2">
                <h4 className="font-heading font-bold text-emerald-800 dark:text-emerald-300 text-sm">
                  Inquiry Transmitted Successfully
                </h4>
                <p className="text-xs text-emerald-700 dark:text-emerald-400">
                  Our Lead Expert team will review your project scope and respond within 24 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="e.g., Eng. John Kamau"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Corporate / Institutional Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g., j.kamau@energydeveloper.com"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1">
                      Organization / Agency
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company or Government Entity"
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-slate-300 mb-1">
                    Project Scope Details & Location
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900 text-xs text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-brand-green-500"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-5 py-2.5 rounded-xl border border-gray-300 dark:border-slate-700 text-xs font-bold text-gray-700 dark:text-slate-300 hover:bg-gray-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-brand-green-600 hover:bg-brand-green-500 text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Transmitting Scope...' : 'Submit Scoping Request'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
