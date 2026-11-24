/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialQualityAssurance } from '../../server/seedData';
import {
  FileCheck,
  ShieldCheck,
  Scale,
  Users,
  GitCompare,
  Lock,
  CheckCircle2,
  ClipboardCheck
} from 'lucide-react';

export default function AboutQualityAssurance() {
  const [activePillar, setActivePillar] = useState<string>(initialQualityAssurance[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className="w-4 h-4" />;
      case 'ShieldCheck': return <ShieldCheck className="w-4 h-4" />;
      case 'Scale': return <Scale className="w-4 h-4" />;
      case 'Users': return <Users className="w-4 h-4" />;
      case 'GitCompare': return <GitCompare className="w-4 h-4" />;
      case 'Lock': return <Lock className="w-4 h-4" />;
      default: return <ClipboardCheck className="w-4 h-4" />;
    }
  };

  const selectedQA = initialQualityAssurance.find(q => q.id === activePillar) || initialQualityAssurance[0];

  return (
    <div className="space-y-10 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006B22] dark:text-[#4ADE80] block">
            RIGOUR &amp; METHODOLOGICAL DEFICIT PREVENTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Quality Assurance &amp; Professional Standards
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI enforces a structured six-pillar Quality Assurance and Quality Control (QA/QC) protocol across all project deliverables, ensuring data integrity, statutory compliance, and international lender alignment.
          </p>
        </div>

        <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] shrink-0">
          6-Pillar QA/QC Framework
        </span>
      </div>

      {/* 6 Pillars Flat Navigation */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-6">
        {initialQualityAssurance.map((qa) => {
          const isSelected = activePillar === qa.id;
          return (
            <button
              key={qa.id}
              type="button"
              onClick={() => setActivePillar(qa.id)}
              className={`border-t-2 pt-4 pb-2 text-left transition-colors cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'border-[#006B22] dark:border-[#4ADE80]'
                  : 'border-slate-200 dark:border-slate-800 hover:border-[#003B95]'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs font-mono">
                  <span className="inline-flex items-center gap-1.5 text-[#006B22] dark:text-[#4ADE80] font-bold">
                    {getIcon(qa.icon)}
                    <span>Pillar {qa.pillarNumber}</span>
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {isSelected ? 'ACTIVE' : 'SELECT'}
                  </span>
                </div>

                <h3 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                  {qa.title}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-light line-clamp-2 leading-relaxed">
                  {qa.shortDesc}
                </p>
              </div>
            </button>
          );
        })}
      </div>

      {/* Detailed QA Focus Panel — Open Editorial Layout */}
      <div className="border-t-2 border-[#003B95] dark:border-[#38BDF8] pt-8 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
          <div className="space-y-1">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006B22] dark:text-[#4ADE80] block">
              QA Pillar {selectedQA.pillarNumber} Details
            </span>
            <h3 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
              {selectedQA.title}
            </h3>
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider">
            Institutional Protocol
          </span>
        </div>

        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Methodological Standards &amp; Implementation
          </h4>
          <div className="grid md:grid-cols-3 gap-6">
            {selectedQA.details.map((item, idx) => (
              <div key={idx} className="border-t border-slate-200 dark:border-slate-800 pt-3 space-y-1.5">
                <div className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80]">
                  Stage 0{idx + 1}
                </div>
                <p className="text-xs text-slate-700 dark:text-slate-200 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2 space-y-3 border-t border-slate-200 dark:border-slate-800">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 pt-3">
            Mandatory Verification Controls
          </h4>
          <div className="flex flex-wrap gap-x-6 gap-y-2">
            {selectedQA.controls.map((ctrl, idx) => (
              <div key={idx} className="inline-flex items-center gap-2 text-xs font-mono text-slate-800 dark:text-slate-200 font-bold">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#006B22] dark:text-[#4ADE80]" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="border-t border-slate-200 dark:border-slate-800 pt-5 space-y-1.5 text-xs text-slate-700 dark:text-slate-300">
        <h4 className="font-heading font-bold text-[#003B95] dark:text-white text-sm">
          Alignment with Multilateral Lender Safeguards
        </h4>
        <p className="font-light leading-relaxed">
          Where required by project financiers, HUERI aligns its baseline methodologies, risk categorization matrices, and Environmental and Social Management Plans (ESMP) with World Bank Environmental and Social Framework (ESS 1–10), IFC Performance Standards (PS 1–8), and AfDB Integrated Safeguards System (ISS).
        </p>
      </div>
    </div>
  );
}
