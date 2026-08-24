import React from 'react';

export default function HumanRightsPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-brand-green-50/60 dark:bg-brand-green-950/20 border border-brand-green-200 dark:border-brand-green-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Human Rights Safeguards & International Labor Law Charter
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          HUERI LIMITED enforces strict alignment with Article 41 of the Constitution of Kenya 2010, the Employment Act 2007, ILO Core Conventions, and UN Guiding Principles on Business and Human Rights.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Constitutional Labor Rights (Article 41, Constitution of Kenya 2010)
        </h5>
        <p>
          In compliance with Article 41, every worker engaged directly or indirectly by HUERI LIMITED or recommended within client ESMPs is entitled to fair labor practices, safe working conditions, and reasonable remuneration.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Occupational Health & Safety Compliance (OSHA 2007)
        </h5>
        <p>
          Under OSHA 2007, HUERI LIMITED mandates that field assessment teams, drillers, and site auditors receive comprehensive PPE, emergency safety protocols, and statutory medical coverage.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Prohibition of Child Labor & Forced Labor
        </h5>
        <p>
          HUERI LIMITED strictly prohibits child labor, forced labor, or modern slavery across all operations and supply chains, abiding by ILO Conventions 138 & 182.
        </p>
      </div>
    </div>
  );
}
