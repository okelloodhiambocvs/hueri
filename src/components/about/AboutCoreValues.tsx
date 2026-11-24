/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

export const coreValues = [
  {
    title: 'Integrity',
    accent: 'border-[#006B22] dark:border-[#4ADE80]',
    description: 'Independent advice, accurate empirical evidence, transparent assumptions, confidentiality, and robust conflict-of-interest controls.'
  },
  {
    title: 'Excellence',
    accent: 'border-[#003B95] dark:border-[#38BDF8]',
    description: 'Competent multidisciplinary teams, proportionate methods, rigorous technical review, and decision-useful deliverables.'
  },
  {
    title: 'African Context',
    accent: 'border-[#006B22] dark:border-[#4ADE80]',
    description: 'Deep respect for local institutions, diverse communities, cultural heritage, sensitive ecosystems, and African development realities.'
  },
  {
    title: 'Sustainability',
    accent: 'border-[#003B95] dark:border-[#38BDF8]',
    description: 'Creating enduring environmental, social, economic, and institutional value across the entire project lifecycle.'
  },
  {
    title: 'Respect & Inclusion',
    accent: 'border-[#006B22] dark:border-[#4ADE80]',
    description: 'Meaningful, culturally sensitive engagement with active safeguards for vulnerable, indigenous, and marginalized groups.'
  },
  {
    title: 'Safety',
    accent: 'border-[#003B95] dark:border-[#38BDF8]',
    description: 'Zero-harm commitment preventing physical, toxic, or environmental hazards to workers, host communities, and ecosystems.'
  },
  {
    title: 'Innovation',
    accent: 'border-[#006B22] dark:border-[#4ADE80]',
    description: 'Appropriate deployment of GIS remote sensing, encrypted mobile field data capture, drone surveys, and adaptive management.'
  },
  {
    title: 'Accountability',
    accent: 'border-[#003B95] dark:border-[#38BDF8]',
    description: 'Defensible data, auditable conclusions, clear responsibility, constructive engagement, and honest communication of limitations.'
  }
];

export default function AboutCoreValues() {
  return (
    <div className="space-y-8">
      <div>
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006B22] dark:text-[#4ADE80] block mb-1">
          CORE GUIDING VALUES
        </span>
        <h3 className="font-heading font-black text-2xl sm:text-3xl text-[#003B95] dark:text-white">
          Ethical Governance &amp; Standards
        </h3>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8 border-t border-slate-200 dark:border-slate-800 pt-8">
        {coreValues.map((value, idx) => (
          <div
            key={idx}
            className={`border-t-2 ${value.accent} pt-4 space-y-2`}
          >
            <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              {value.title}
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
