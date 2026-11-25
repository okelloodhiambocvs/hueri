/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ArrowLeft, ArrowRight, CheckCircle2, FileCheck2 } from 'lucide-react';
import PageHero from '../PageHero';
import InteractiveBand from '../InteractiveBand';
import { RevealBlock } from '../MotionReveal';
import photoAssets from '../../utils/photoAssets';
import {
  getProjectDetailByIdOrSlug,
  getProjectSummaryByIdOrSlug,
  projectSummaries,
  splitProjectHeroTitle
} from '../../utils/projectRoutes';

interface ProjectDetailPageProps {
  projectIdOrSlug: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (scope?: string) => void;
}

export default function ProjectDetailPage({
  projectIdOrSlug,
  onNavigate,
  onRequestProposal
}: ProjectDetailPageProps) {
  const project = getProjectDetailByIdOrSlug(projectIdOrSlug);
  const summary = getProjectSummaryByIdOrSlug(projectIdOrSlug);
  const heroImage = photoAssets.projects[summary.imageKey] || photoAssets.siteStructuralDeck;
  const heroTitleParts = splitProjectHeroTitle(project.title);
  const otherProjects = projectSummaries.filter((item) => item.id !== project.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-white dark:bg-[#041B44] font-sans">
      <PageHero
        image={heroImage}
        imageAlt={project.title}
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
        description={`${project.client} · ${project.location} · ${project.assignmentPeriod || project.year}`}
      >
        <button
          type="button"
          onClick={() => onRequestProposal(project.title)}
          className="inline-flex items-center gap-2 px-4 py-2 bg-[#006B22] hover:bg-[#00581C] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <span>Let&apos;s Talk</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </button>

        <button
          type="button"
          onClick={() => onNavigate('home', 'home-assignments')}
          className="inline-flex items-center gap-2 px-4 py-2 bg-white/15 hover:bg-white/25 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer"
        >
          <ArrowLeft className="w-3.5 h-3.5" />
          <span>Back to Recent Work</span>
        </button>
      </PageHero>

      <InteractiveBand tone="white" fromTone="hero" className="py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-start">
          <RevealBlock direction="left" className="lg:col-span-8 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Assignment Scope &amp; Mandate
            </h2>
            <p className="text-sm sm:text-base text-slate-700 dark:text-slate-200 leading-relaxed font-light">
              {project.assignmentScope}
            </p>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-light">
              HUERI Role: <strong className="font-semibold text-[#003B95] dark:text-white">{project.hueriRole || project.role}</strong>
            </p>
          </RevealBlock>

          <RevealBlock direction="right" delayMs={80} className="lg:col-span-4 lg:pl-6 space-y-3">
            <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
              Assignment Profile
            </h3>
            <dl className="space-y-2.5 text-xs sm:text-sm">
              <div>
                <dt className="text-slate-500 dark:text-slate-400 text-xs">Client</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.client}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400 text-xs">Location</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.location}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400 text-xs">Timeline</dt>
                <dd className="font-semibold text-slate-900 dark:text-white">{project.assignmentPeriod || project.year}</dd>
              </div>
              <div>
                <dt className="text-slate-500 dark:text-slate-400 text-xs">Status</dt>
                <dd className="font-semibold text-[#006B22] dark:text-[#4ADE80]">{project.status}</dd>
              </div>
            </dl>
          </RevealBlock>
        </div>
      </InteractiveBand>

      <InteractiveBand tone="green" fromTone="white" className="py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <RevealBlock direction="left" className="max-w-2xl space-y-1.5">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
              Technical Challenge, Approach &amp; Outcome
            </h2>
            <p className="text-xs sm:text-sm text-emerald-50 font-light">
              How HUERI structured environmental, social, and safety compliance on the assignment.
            </p>
          </RevealBlock>

          <RevealBlock direction="up" delayMs={80} className="grid md:grid-cols-3 gap-8">
            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono font-bold text-[#A7F3D0] block">01</span>
              <h3 className="font-heading font-bold text-base text-white">
                Assignment Challenge
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-light">
                {project.challenge}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono font-bold text-[#A7F3D0] block">02</span>
              <h3 className="font-heading font-bold text-base text-white">
                HUERI Approach
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-light">
                {project.solution}
              </p>
            </div>

            <div className="pt-2 space-y-2">
              <span className="text-xs font-mono font-bold text-[#A7F3D0] block">03</span>
              <h3 className="font-heading font-bold text-base text-white">
                Delivered Outcome
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 leading-relaxed font-light">
                {project.outcome}
              </p>
            </div>
          </RevealBlock>
        </div>
      </InteractiveBand>

      <InteractiveBand tone="white" fromTone="green" className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-12 gap-8 items-start">
          <div className="lg:col-span-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Key Deliverables
            </h2>
            <ul className="space-y-3">
              {project.keyDeliverables.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-sm text-slate-700 dark:text-slate-200">
                  <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] shrink-0 mt-1" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-6 lg:pl-6 space-y-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
              Verification &amp; Record Summary
            </h2>
            {project.evidenceSummary && (
              <p className="text-sm text-slate-700 dark:text-slate-200 font-light leading-relaxed">
                {project.evidenceSummary}
              </p>
            )}
            {project.evidenceItems && project.evidenceItems.length > 0 && (
              <div className="space-y-2.5 pt-1">
                {project.evidenceItems.map((ev, idx) => (
                  <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                    <FileCheck2 className="w-4 h-4 text-[#003B95] dark:text-[#38BDF8] shrink-0 mt-0.5" />
                    <span>{ev.description}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </InteractiveBand>

      <InteractiveBand tone="green" fromTone="white" className="py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
              More Recent Work
            </h2>
            <button
              type="button"
              onClick={() => onNavigate('home', 'home-assignments')}
              className="text-xs font-mono font-bold text-white hover:text-emerald-200 cursor-pointer"
            >
              View All Recent Work →
            </button>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {otherProjects.map((item) => {
              const img = photoAssets.projects[item.imageKey] || photoAssets.siteStructuralDeck;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate('project-detail', item.slug)}
                  className="text-left flex flex-col justify-between group cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
                >
                  <div>
                    <div className="h-44 w-full overflow-hidden bg-[#00551B]">
                      <img
                        src={img}
                        alt={item.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="pt-3.5 pb-2 space-y-1.5">
                      <div className="flex items-center gap-2 text-[11px] font-mono text-emerald-100">
                        <span className="truncate">{item.location}</span>
                        <span aria-hidden="true">·</span>
                        <span className="font-bold text-[#A7F3D0] shrink-0">{item.year}</span>
                      </div>
                      <span className="text-[11px] font-mono text-[#A7F3D0] font-bold block truncate">
                        Client: {item.client}
                      </span>
                      <h3 className="font-heading font-bold text-base text-white group-hover:text-emerald-100 leading-snug line-clamp-2 transition-colors">
                        {item.title}
                      </h3>
                    </div>
                  </div>
                  <div className="pt-2 flex items-center justify-between text-xs font-mono font-bold text-[#A7F3D0] group-hover:text-white transition-colors">
                    <span>Details</span>
                    <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-1 transition-transform" />
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </InteractiveBand>
    </div>
  );
}
