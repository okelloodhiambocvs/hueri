/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const coreValues = [
  {
    title: "Integrity",
    theme: "emerald",
    bgHover: "hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-500",
    badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
    description: "Independent advice, accurate empirical evidence, transparent assumptions, confidentiality, and robust conflict-of-interest controls."
  },
  {
    title: "Excellence",
    theme: "blue",
    bgHover: "hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:border-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    description: "Competent multidisciplinary teams, proportionate methods, rigorous technical review, and decision-useful deliverables."
  },
  {
    title: "African Context",
    theme: "emerald",
    bgHover: "hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-500",
    badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
    description: "Deep respect for local institutions, diverse communities, cultural heritage, sensitive ecosystems, and African development realities."
  },
  {
    title: "Sustainability",
    theme: "blue",
    bgHover: "hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:border-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    description: "Creating enduring environmental, social, economic, and institutional value across the entire project lifecycle."
  },
  {
    title: "Respect & Inclusion",
    theme: "emerald",
    bgHover: "hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-500",
    badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
    description: "Meaningful, culturally sensitive engagement with active safeguards for vulnerable, indigenous, and marginalized groups."
  },
  {
    title: "Safety",
    theme: "blue",
    bgHover: "hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:border-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    description: "Zero-harm commitment preventing physical, toxic, or environmental hazards to workers, host communities, and ecosystems."
  },
  {
    title: "Innovation",
    theme: "emerald",
    bgHover: "hover:bg-emerald-50/80 dark:hover:bg-emerald-950/40 hover:border-emerald-500",
    badgeColor: "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-800",
    description: "Appropriate deployment of GIS remote sensing, encrypted mobile field data capture, drone surveys, and adaptive management."
  },
  {
    title: "Accountability",
    theme: "blue",
    bgHover: "hover:bg-blue-50/80 dark:hover:bg-blue-950/40 hover:border-blue-500",
    badgeColor: "bg-blue-100 dark:bg-blue-950 text-blue-800 dark:text-blue-300 border-blue-300 dark:border-blue-800",
    description: "Defensible data, auditable conclusions, clear responsibility, constructive engagement, and honest communication of limitations."
  }
];

export default function AboutCoreValues() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block mb-1">
            CORE GUIDING VALUES
          </span>
          <h3 className="font-heading font-black text-2xl sm:text-3xl text-stone-900 dark:text-white">
            Ethical Governance & Standards
          </h3>
        </div>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {coreValues.map((value, idx) => (
          <div
            key={idx}
            className={`p-5 rounded-2xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-[#E5DFD5] dark:border-slate-700/80 shadow-sm transition-all duration-300 hover:-translate-y-1 ${value.bgHover} group flex flex-col justify-between`}
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white group-hover:text-brand-green-700 dark:group-hover:text-emerald-400 transition-colors">
                  {value.title}
                </h4>
              </div>

              <p className="text-xs text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
