import React from 'react';

export default function TermsPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-brand-green-50/60 dark:bg-brand-green-950/20 border border-brand-green-200 dark:border-brand-green-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Constitutional & Statutory Environmental Terms (EMCA CAP 387)
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          These Terms govern all consultancy engagements, NEMA license submissions, physical planning, and environmental audits executed by HUERI LIMITED in strict alignment with Article 42 of the Constitution of Kenya 2010.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Constitutional Imperative & Right to Clean Environment
        </h5>
        <p>
          Every engagement undertaken by HUERI LIMITED adheres strictly to <strong>Article 42 of the Constitution of Kenya 2010</strong>, guaranteeing every citizen the right to a clean and healthy environment. All project recommendations, ESMPs, and RAP plans prioritize ecological conservation.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. NEMA Licensing & Lead Expert Independence
        </h5>
        <p>
          HUERI LIMITED operates as a certified firm of experts registered under NEMA. In compliance with EMCA CAP 387, our Lead Experts maintain strict professional independence. Audit reports accurately reflect field findings without falsification.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Anti-Bribery, Integrity & Zero Corruption Guarantee
        </h5>
        <p>
          HUERI LIMITED operates a zero-tolerance policy regarding bribery, facilitation payments, or fraudulent activities. We adhere to the Anti-Corruption and Economic Crimes Act (Kenya) and the Bribery Act 2016.
        </p>
      </div>
    </div>
  );
}
