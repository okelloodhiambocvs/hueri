/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  getServiceDetailByIdOrSlug,
  getServiceSummaryByIdOrSlug,
  splitServiceHeroTitle
} from '../../utils/serviceRoutes';
import photoAssets from '../../utils/photoAssets';
import PageHero from '../PageHero';
import { RevealBlock } from '../MotionReveal';

interface ServiceDetailPageProps {
  serviceIdOrSlug: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceTitle?: string) => void;
  onLeadSubmit: (leadData: {
    fullName: string;
    email: string;
    phone: string;
    company: string;
    serviceNeeded: string;
    message: string;
  }) => void;
}

export default function ServiceDetailPage({
  serviceIdOrSlug,
  onNavigate,
  onRequestProposal,
  onLeadSubmit
}: ServiceDetailPageProps) {
  const service = getServiceDetailByIdOrSlug(serviceIdOrSlug);
  const summary = getServiceSummaryByIdOrSlug(serviceIdOrSlug);
  const heroImage = photoAssets.services[summary.imageKey] || photoAssets.eiaAssessment;
  const heroTitleParts = splitServiceHeroTitle(service.title);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: `We would like to discuss ${service.title} for our project.`
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const deliveryTypes = [
    {
      title: 'Field Baselines & Site Investigations',
      detail: 'On-site environmental sampling, stakeholder consultations, and spatial data collection across project areas.'
    },
    {
      title: 'Technical Reports & Action Plans',
      detail: 'Structured assessment reports, management plans, and audit documentation prepared for regulatory and lender review.'
    },
    {
      title: 'Regulatory & Lender Submissions',
      detail: 'End-to-end coordination of statutory reviews, public disclosure processes, and compliance responses.'
    },
    {
      title: 'Ongoing Implementation Oversight',
      detail: 'Resident advisory, periodic compliance inspections, and training for project teams and contractors.'
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      onLeadSubmit({
        fullName: formData.fullName,
        email: formData.email,
        phone: formData.phone,
        company: formData.company,
        serviceNeeded: service.title,
        message: formData.message
      });
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 400);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#041B44] font-sans">
      <PageHero
        image={heroImage}
        imageAlt={service.title}
        title={
          <>
            {heroTitleParts.upper}
            {heroTitleParts.lower && (
              <>
                <br />
                <span className="text-[#4ADE80]">{heroTitleParts.lower}</span>
              </>
            )}
          </>
        }
        description={service.shortDescription}
      >
        <button
          type="button"
          onClick={() => onRequestProposal(service.title)}
          className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <span>Let&apos;s Talk</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate('services')}
          className="inline-flex items-center gap-2 px-4 py-2.5 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Back to Our Services</span>
        </button>
      </PageHero>

      {/* 1. Service Scope & Overview — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-start">
          <RevealBlock direction="left" className="lg:col-span-8 space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
              Service Scope &amp; Overview
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-light">
              {service.overview}
            </p>
            {service.deliveryModelNote && (
              <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                {service.deliveryModelNote}
              </p>
            )}
          </RevealBlock>

          <RevealBlock direction="right" delayMs={80} className="lg:col-span-4 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8 space-y-4">
            <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
              Start an Assignment
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Need a scoped proposal, timeline, or technical consultation for {service.title}?
            </p>
            <button
              type="button"
              onClick={() => onRequestProposal(service.title)}
              className="w-full inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
            >
              <span>Let&apos;s Talk</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </RevealBlock>
        </div>
      </section>

      {/* 2. Step-by-Step Process — Logo Green Background */}
      {service.methodology && service.methodology.length > 0 && (
        <section className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <RevealBlock direction="left">
              <h2 className="text-xl sm:text-2xl font-heading font-black text-white">
                Step-by-Step Process
              </h2>
            </RevealBlock>
            <RevealBlock direction="up" delayMs={80} className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-7">
              {service.methodology.map((step, idx) => (
                <div
                  key={idx}
                  className="border-t border-white/25 pt-4 space-y-2"
                >
                  <div className="flex items-center gap-2">
                    <span className="text-xs font-mono font-bold text-[#A7F3D0]">
                      Step {String(idx + 1).padStart(2, '0')}
                    </span>
                    {idx < service.methodology.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-[#A7F3D0]/80" aria-hidden="true" />
                    )}
                  </div>
                  <p className="text-sm text-emerald-50 leading-relaxed font-light">
                    {step}
                  </p>
                </div>
              ))}
            </RevealBlock>
          </div>
        </section>
      )}

      {/* 3. Types of Delivery & Client Deliverables — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
              Types of Delivery
            </h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {deliveryTypes.map((item, idx) => (
                <div key={idx} className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-1.5">
                  <h3 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-6 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8 space-y-5">
            <h2 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
              Key Deliverables &amp; Outcomes
            </h2>
            <div className="space-y-5">
              {service.deliverables && service.deliverables.length > 0 && (
                <div className="space-y-2.5">
                  <h3 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                    Deliverables
                  </h3>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {service.benefits && service.benefits.length > 0 && (
                <div className="space-y-2.5 pt-2">
                  <h3 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                    Value to Your Project
                  </h3>
                  <ul className="space-y-2">
                    {service.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                        <CheckCircle2 className="w-4 h-4 text-[#003B95] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* 4. Representative Case Examples — Logo Green Background */}
      {service.caseExamples && service.caseExamples.length > 0 && (
        <section className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <h2 className="text-xl sm:text-2xl font-heading font-black text-white">
              Selected Experience
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {service.caseExamples.map((example, idx) => (
                <div key={idx} className="border-t border-white/25 pt-4 space-y-2">
                  <h3 className="font-heading font-bold text-base text-white">
                    {example.client}
                  </h3>
                  <p className="text-sm text-emerald-50 font-light">
                    {example.description}
                  </p>
                  <p className="text-xs font-mono text-[#A7F3D0] font-semibold">
                    Outcome: {example.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. Inline Inquiry Form — White Background */}
      <section className="bg-white dark:bg-[#041B44] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 max-w-4xl">
            <div className="space-y-1.5">
              <h2 className="font-heading font-bold text-xl text-[#003B95] dark:text-white">
                Enquire About {service.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                Share your project location and timeline, and our advisory team will follow up directly.
              </p>
            </div>

            {submitSuccess ? (
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 text-center space-y-2">
                <h3 className="font-heading font-bold text-emerald-800 dark:text-emerald-300 text-base">
                  Inquiry Received
                </h3>
                <p className="text-xs sm:text-sm text-emerald-700 dark:text-emerald-400">
                  Thank you. Our team will review your project scope and respond shortly.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Organization
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company or agency"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Project Scope &amp; Location
                  </label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                  />
                </div>

                <div className="flex flex-wrap items-center justify-between gap-3 pt-1">
                  <button
                    type="button"
                    onClick={() => onNavigate('services')}
                    className="px-4 py-2 rounded-lg border border-slate-300 dark:border-slate-700 text-xs font-bold text-[#003B95] dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors cursor-pointer"
                  >
                    ← All Services
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white text-xs font-bold uppercase tracking-wider transition-colors cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
