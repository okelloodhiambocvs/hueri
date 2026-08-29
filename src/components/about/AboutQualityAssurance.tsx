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
  ArrowRight,
  ClipboardCheck
} from 'lucide-react';

export default function AboutQualityAssurance() {
  const [activePillar, setActivePillar] = useState<string>(initialQualityAssurance[0].id);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'FileCheck': return <FileCheck className="w-5 h-5" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5" />;
      case 'Scale': return <Scale className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'GitCompare': return <GitCompare className="w-5 h-5" />;
      case 'Lock': return <Lock className="w-5 h-5" />;
      default: return <ClipboardCheck className="w-5 h-5" />;
    }
  };

  const selectedQA = initialQualityAssurance.find(q => q.id === activePillar) || initialQualityAssurance[0];

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
            RIGOUR & METHODOLOGICAL DEFICIT PREVENTION
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Quality Assurance & Professional Standards
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI enforces a structured six-pillar Quality Assurance and Quality Control (QA/QC) protocol across all project deliverables, ensuring data integrity, statutory compliance, and international lender alignment.
          </p>
        </div>

        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-green-50 dark:bg-emerald-950/60 border border-brand-green-600/30 text-brand-green-800 dark:text-emerald-300 text-xs font-mono font-bold shrink-0">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-green-600" />
          6-Pillar QA/QC Framework
        </span>
      </div>

      {/* 6 Pillars Quick Nav Cards */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {initialQualityAssurance.map((qa) => {
          const isSelected = activePillar === qa.id;
          return (
            <div
              key={qa.id}
              onClick={() => setActivePillar(qa.id)}
              className={`p-4 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                isSelected
                  ? 'bg-white dark:bg-slate-800/95 border-brand-green-600 dark:border-emerald-500 shadow-md ring-2 ring-brand-green-600/20'
                  : 'bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800 hover:border-brand-green-600/40 hover:bg-stone-50/60 dark:hover:bg-slate-800/60'
              }`}
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className={`p-2 rounded-xl ${
                    isSelected 
                      ? 'bg-brand-green-700 text-white' 
                      : 'bg-[#FAF8F5] dark:bg-slate-800 text-brand-green-700 dark:text-emerald-400'
                  }`}>
                    {getIcon(qa.icon)}
                  </div>
                  <span className="text-xs font-mono font-bold text-stone-400 dark:text-slate-500">
                    Pillar {qa.pillarNumber}
                  </span>
                </div>

                <div>
                  <h3 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                    {qa.title}
                  </h3>
                  <p className="text-xs text-stone-500 dark:text-slate-400 font-light line-clamp-2 mt-1 leading-relaxed">
                    {qa.shortDesc}
                  </p>
                </div>
              </div>

              <div className="pt-3 mt-2 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400">
                <span>{isSelected ? 'Active Focus' : 'Explore Controls'}</span>
                <span>{isSelected ? '●' : '→'}</span>
              </div>
            </div>
          );
        })}
      </div>

      {/* Detailed QA Focus Panel */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-stone-200 dark:border-slate-800 pb-5">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-2xl bg-brand-green-700 text-white shadow-sm">
              {getIcon(selectedQA.icon)}
            </div>
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400">
                QA Pillar {selectedQA.pillarNumber} Details
              </span>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-stone-900 dark:text-white">
                {selectedQA.title}
              </h3>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-xs font-mono text-stone-700 dark:text-slate-300">
              Institutional Protocol
            </span>
          </div>
        </div>

        {/* Pillar Description & Details */}
        <div className="space-y-4">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400">
            Methodological Standards & Implementation
          </h4>
          <div className="grid md:grid-cols-3 gap-4">
            {selectedQA.details.map((item, idx) => (
              <div 
                key={idx}
                className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200 dark:border-slate-800 space-y-2"
              >
                <div className="text-xs font-mono font-bold text-brand-green-700 dark:text-emerald-400">
                  Stage 0{idx + 1}
                </div>
                <p className="text-xs text-stone-700 dark:text-slate-200 font-light leading-relaxed">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Verification Controls */}
        <div className="pt-2 space-y-3">
          <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400">
            Mandatory Verification Controls
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {selectedQA.controls.map((ctrl, idx) => (
              <div 
                key={idx}
                className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-xs font-mono text-stone-800 dark:text-slate-200 font-bold"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-brand-green-600 dark:text-emerald-400" />
                <span>{ctrl}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* International Alignment Note */}
      <div className="p-5 rounded-2xl bg-stone-100 dark:bg-slate-800/40 border border-stone-200 dark:border-slate-800 space-y-2 text-xs text-stone-700 dark:text-slate-300">
        <h4 className="font-heading font-bold text-stone-900 dark:text-white text-sm">
          Alignment with Multilateral Lender Safeguards
        </h4>
        <p className="font-light leading-relaxed">
          Where required by project financiers, HUERI aligns its baseline methodologies, risk categorization matrices, and Environmental and Social Management Plans (ESMP) with World Bank Environmental and Social Framework (ESS 1–10), IFC Performance Standards (PS 1–8), and AfDB Integrated Safeguards System (ISS).
        </p>
      </div>
    </div>
  );
}
