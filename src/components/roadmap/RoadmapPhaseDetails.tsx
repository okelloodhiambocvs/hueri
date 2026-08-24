/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { LifecycleStage } from '../../types';

interface RoadmapPhaseDetailsProps {
  activeStage: LifecycleStage;
}

export default function RoadmapPhaseDetails({ activeStage }: RoadmapPhaseDetailsProps) {
  return (
    <div className="bg-white dark:bg-[#071a38] border border-gray-200 dark:border-slate-800 rounded-3xl p-6 sm:p-10 relative overflow-hidden shadow-xl">
      <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue-900 via-brand-green-600 to-brand-gold-500" />

      <div
        key={activeStage.stageNumber}
        className="grid lg:grid-cols-12 gap-8 items-start animate-fadeIn transition-all duration-300"
      >
        {/* Left description column (Span 7) */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-[10.5px] font-mono font-bold tracking-widest text-brand-green-700 dark:text-brand-green-400 uppercase bg-brand-green-50 dark:bg-emerald-950/50 px-3 py-1.5 rounded-full border border-brand-green-200 dark:border-emerald-900">
              STAGE {activeStage.stageNumber.toString().padStart(2, '0')} • LIFECYCLE ADVISORY
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white mt-4 tracking-tight leading-tight">
              {activeStage.title}
            </h3>
            <p className="text-sm text-gray-600 dark:text-slate-300 mt-3 leading-relaxed font-sans font-light">
              {activeStage.description}
            </p>
          </div>

          {/* Subtasks listing */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-gray-500 dark:text-slate-400">
              Core HUERI Technical & Advisory Scope
            </h4>
            <ul className="space-y-2.5">
              {activeStage.tasks.map((task, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-gray-700 dark:text-slate-200 leading-relaxed">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand-blue-50 dark:bg-blue-950/60 text-brand-blue-900 dark:text-blue-300 text-[10.5px] font-mono font-bold mr-3 mt-0.5 border border-brand-blue-200 dark:border-blue-800">
                    {index + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Deliverables Column (Span 5) */}
        <div className="lg:col-span-5 h-full">
          <div className="bg-gray-50 dark:bg-[#0b1c3b] border border-gray-200/80 dark:border-slate-700/80 rounded-2xl p-6 shadow-sm flex flex-col justify-between h-full space-y-6">
            <div>
              <div className="mb-4">
                <h4 className="font-heading font-bold text-sm text-gray-900 dark:text-white">
                  Stage Deliverables & Outputs
                </h4>
                <span className="text-[10px] font-mono text-gray-500 dark:text-slate-400">
                  Decision-useful advisory reports
                </span>
              </div>

              <div className="space-y-2.5">
                {activeStage.deliverables.map((deliv, idx) => (
                  <div 
                    key={idx} 
                    className="flex items-start p-3 bg-white dark:bg-[#071a38] rounded-xl border border-gray-200/80 dark:border-slate-800 transition-colors"
                  >
                    <span className="text-brand-green-600 dark:text-brand-green-400 font-bold shrink-0 mr-2.5 mt-0.5">•</span>
                    <span className="text-xs text-gray-800 dark:text-slate-200 font-sans">
                      {deliv}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-gray-200 dark:border-slate-700/80 flex items-center justify-between text-[11px] font-mono">
              <span className="text-gray-500 dark:text-slate-400">
                DFI & Statutory Compliant
              </span>
              <span className="text-emerald-700 dark:text-emerald-400 font-bold">
                Lead Expert Verified
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
