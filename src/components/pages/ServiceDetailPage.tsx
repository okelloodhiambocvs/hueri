import React, { useState } from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2 } from 'lucide-react';
import {
  getServiceDetailByIdOrSlug,
  getServiceSummaryByIdOrSlug,
  splitServiceHeroTitle
} from '../../utils/serviceRoutes';
import { submitLeadInquiry } from '../../utils/apiClient';
import photoAssets from '../../utils/photoAssets';
import PageHero from '../PageHero';
import InteractiveBand from '../InteractiveBand';
import SplitShowcaseSection from '../SplitShowcaseSection';
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
  const scopeShowcaseImage =
    heroImage === photoAssets.fieldScientists ? photoAssets.eiaAssessment : photoAssets.fieldScientists;
  const heroTitleParts = splitServiceHeroTitle(service.title);

  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    message: `We would like to discuss ${service.title} for our project.`,
    website_hp: ''
  });
  const [validationError, setValidationError] = useState<string | null>(null);
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError(null);
    setIsSubmitting(true);

    const result = await submitLeadInquiry({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      organization: formData.company,
      serviceNeeded: service.title,
      inquiryType: `Service Inquiry: ${service.title}`,
      message: formData.message,
      requireMessage: true,
      privacyConsent: true,
      website_hp: formData.website_hp
    });

    setIsSubmitting(false);

    if (!result.success) {
      setValidationError(result.error || 'Unable to submit inquiry. Please verify your entries.');
      return;
    }

    onLeadSubmit({
      fullName: formData.fullName,
      email: formData.email,
      phone: formData.phone,
      company: formData.company,
      serviceNeeded: service.title,
      message: formData.message
    });
    setSubmitSuccess(true);
  };

  const hasMethodology = Boolean(service.methodology && service.methodology.length > 0);
  const hasCaseExamples = Boolean(service.caseExamples && service.caseExamples.length > 0);

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

      <SplitShowcaseSection
        id="service-scope-overview"
        tone="white"
        fromTone="hero"
        imagePosition="right"
        image={scopeShowcaseImage}
        imageAlt={`${service.title} field advisory by HUERI Limited`}
        eyebrow={service.practiceCategory}
        title="Service Scope & Overview"
        description={service.overview}
        secondaryText={service.deliveryModelNote}
        actions={
          <button
            type="button"
            onClick={() => onRequestProposal(service.title)}
            className="inline-flex items-center gap-2 px-5 py-2.5 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
          >
            <span>Request Scoped Proposal</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        }
      />

      {hasMethodology && (
        <InteractiveBand id="service-process" tone="green" fromTone="white" className="py-10 sm:py-12 overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
            <RevealBlock direction="left">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
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
                    <span className="text-xs font-mono font-bold text-[#A7F3D0] tabular-nums">
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
        </InteractiveBand>
      )}

      <SplitShowcaseSection
        id="service-deliverables-split"
        tone="white"
        fromTone={hasMethodology ? 'green' : 'white'}
        imagePosition="left"
        image={photoAssets.partnershipsHero}
        imageAlt={`Project deliverables and stakeholder review for ${service.title}`}
        eyebrow="Client Deliverables & Outcomes"
        title="Key Deliverables & Project Value"
        description={summary.deliverablesSummary || 'Structured documentation, regulatory coordination, and continuous implementation oversight built for Kenyan and multilateral benchmarks.'}
        highlights={service.deliverables}
      >
        {service.benefits && service.benefits.length > 0 && (
          <div className="border-t border-slate-200 dark:border-slate-800 pt-4 space-y-2">
            <h3 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              Value to Your Project
            </h3>
            <ul className="space-y-1.5">
              {service.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-600 dark:text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-[#003B95] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </SplitShowcaseSection>

      <InteractiveBand id="service-delivery-modes" tone="green" fromTone="white" className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          <div className="space-y-5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
              Types of Delivery
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliveryTypes.map((item, idx) => (
                <div key={idx} className="border-t border-white/25 pt-4 space-y-1.5">
                  <h3 className="font-heading font-bold text-sm text-white">
                    {item.title}
                  </h3>
                  <p className="text-xs text-emerald-50 leading-relaxed font-light">
                    {item.detail}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {hasCaseExamples && (
            <div className="border-t border-white/20 pt-8 space-y-5">
              <h2 className="text-2xl sm:text-3xl font-heading font-black text-white tracking-tight">
                Selected Experience
              </h2>
              <div className="grid md:grid-cols-2 gap-8">
                {service.caseExamples!.map((example, idx) => (
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
          )}
        </div>
      </InteractiveBand>

      <InteractiveBand id="service-inquiry" tone="white" fromTone="green" className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-5 max-w-4xl">
            <div className="space-y-1.5">
              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
                Enquire About {service.title}
              </h2>
              <p className="text-sm text-slate-600 dark:text-slate-300 font-light">
                Share your project location and timeline, and our advisory team will follow up directly.
              </p>
            </div>

            {validationError && (
              <div className="p-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 rounded-lg text-rose-700 dark:text-rose-300 text-xs font-mono flex items-center justify-between">
                <span>{validationError}</span>
                <button type="button" onClick={() => setValidationError(null)} className="text-xs font-bold cursor-pointer">
                  Dismiss
                </button>
              </div>
            )}

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
                <input
                  type="text"
                  name="website_hp"
                  value={formData.website_hp}
                  onChange={(e) => setFormData({ ...formData, website_hp: e.target.value })}
                  style={{ display: 'none', position: 'absolute', left: '-9999px' }}
                  tabIndex={-1}
                  autoComplete="off"
                />
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service-detail-name" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Full Name *
                    </label>
                    <input
                      id="service-detail-name"
                      type="text"
                      required
                      maxLength={100}
                      value={formData.fullName}
                      onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                      placeholder="Your full name"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                  <div>
                    <label htmlFor="service-detail-email" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Email Address *
                    </label>
                    <input
                      id="service-detail-email"
                      type="email"
                      required
                      maxLength={120}
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="name@organization.com"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service-detail-phone" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Phone Number *
                    </label>
                    <input
                      id="service-detail-phone"
                      type="tel"
                      required
                      maxLength={30}
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+254 700 000 000"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                  <div>
                    <label htmlFor="service-detail-org" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                      Organization
                    </label>
                    <input
                      id="service-detail-org"
                      type="text"
                      maxLength={150}
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="Company or agency"
                      className="w-full px-3.5 py-2.5 rounded-lg border border-slate-300 dark:border-slate-700 bg-white dark:bg-[#041B44] text-xs text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-[#006B22]"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="service-detail-scope" className="block text-xs font-medium text-slate-700 dark:text-slate-300 mb-1">
                    Project Scope &amp; Location
                  </label>
                  <textarea
                    id="service-detail-scope"
                    rows={3}
                    maxLength={4000}
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
      </InteractiveBand>
    </div>
  );
}
