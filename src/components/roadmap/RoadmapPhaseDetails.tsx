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
    <div className="border-t-2 border-[#003B95] dark:border-[#38BDF8] pt-8">
      <div
        key={activeStage.stageNumber}
        className="grid lg:grid-cols-12 gap-10 items-start animate-fadeIn transition-all duration-300"
      >
        {/* Left description column */}
        <div className="lg:col-span-7 space-y-6">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#006B22] dark:text-[#4ADE80] uppercase block">
              STAGE {activeStage.stageNumber.toString().padStart(2, '0')} • LIFECYCLE ADVISORY
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003B95] dark:text-white mt-2 tracking-tight leading-tight">
              {activeStage.title}
            </h3>
            <p className="text-sm text-slate-600 dark:text-slate-300 mt-3 leading-relaxed font-sans font-light">
              {activeStage.description}
            </p>
          </div>

          <div className="space-y-3 pt-2 border-t border-slate-200 dark:border-slate-800">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-slate-500 dark:text-slate-400">
              Core HUERI Technical &amp; Advisory Scope
            </h4>
            <ul className="space-y-2.5">
              {activeStage.tasks.map((task, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-slate-700 dark:text-slate-200 leading-relaxed">
                  <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] mr-3 mt-0.5 shrink-0">
                    0{index + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Deliverables Column */}
        <div className="lg:col-span-5 lg:border-l lg:border-slate-200 dark:lg:border-slate-800 lg:pl-8 space-y-5">
          <div>
            <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              Stage Deliverables &amp; Outputs
            </h4>
            <span className="text-[10px] font-mono text-slate-500 dark:text-slate-400">
              Decision-useful advisory reports
            </span>
          </div>

          <div className="divide-y divide-slate-200 dark:divide-slate-800 border-y border-slate-200 dark:border-slate-800">
            {activeStage.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start py-3">
                <span className="text-[#006B22] dark:text-[#4ADE80] font-bold shrink-0 mr-2.5">✓</span>
                <span className="text-xs text-slate-800 dark:text-slate-200 font-sans">
                  {deliv}
                </span>
              </div>
            ))}
          </div>

          <div className="flex items-center justify-between text-[11px] font-mono">
            <span className="text-slate-500 dark:text-slate-400">
              DFI &amp; Statutory Compliant
            </span>
            <span className="text-[#006B22] dark:text-[#4ADE80] font-bold">
              Lead Expert Verified
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
