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
    <div className="pt-4">
      <div
        key={activeStage.stageNumber}
        className="bg-[#006B22] dark:bg-[#054A20] text-white p-6 sm:p-8 rounded-2xl grid lg:grid-cols-12 gap-10 items-start animate-fadeIn transition-all duration-300"
      >
        {/* Left description column */}
        <div className="lg:col-span-7 space-y-5">
          <div>
            <span className="text-[11px] font-mono font-bold tracking-widest text-[#A7F3D0] uppercase block">
              Stage {activeStage.stageNumber.toString().padStart(2, '0')}
            </span>
            <h3 className="font-heading font-extrabold text-2xl sm:text-3xl text-white mt-1.5 tracking-tight leading-tight">
              {activeStage.title}
            </h3>
            <p className="text-sm text-emerald-50 mt-3 leading-relaxed font-sans font-light">
              {activeStage.description}
            </p>
          </div>

          <div className="space-y-3 pt-1">
            <h4 className="text-xs font-mono font-bold tracking-widest uppercase text-emerald-100">
              Technical &amp; Advisory Scope
            </h4>
            <ul className="space-y-2.5">
              {activeStage.tasks.map((task, index) => (
                <li key={index} className="flex items-start text-xs sm:text-sm text-white leading-relaxed">
                  <span className="text-xs font-mono font-bold text-[#A7F3D0] mr-3 mt-0.5 shrink-0">
                    0{index + 1}
                  </span>
                  <span>{task}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Deliverables Column */}
        <div className="lg:col-span-5 lg:border-l lg:border-white/25 lg:pl-8 space-y-4">
          <div>
            <h4 className="font-heading font-bold text-sm text-white">
              Stage Deliverables &amp; Outputs
            </h4>
          </div>

          <div className="space-y-2.5">
            {activeStage.deliverables.map((deliv, idx) => (
              <div key={idx} className="flex items-start">
                <span className="text-[#A7F3D0] font-bold shrink-0 mr-2.5">✓</span>
                <span className="text-xs text-emerald-50 font-sans">
                  {deliv}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
