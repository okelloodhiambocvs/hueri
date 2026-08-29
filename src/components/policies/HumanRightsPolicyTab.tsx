import React from 'react';

export default function HumanRightsPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Labor Standards & Human Rights Commitment
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          HUERI Limited upholds fair labor practices, safe working conditions, human dignity, and non-discrimination in alignment with Article 41 of the Constitution of Kenya 2010, the Employment Act 2007, OSHA 2007, and ILO Core Labour Standards.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Fair Labor & Non-Discrimination
        </h5>
        <p>
          Every person engaged by HUERI Limited is entitled to fair remuneration, reasonable working hours, clear contractual terms, and protection from discrimination based on gender, age, ethnicity, disability, religion, or social origin.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Occupational Health & Safety (OSHA 2007)
        </h5>
        <p>
          Under OSHA 2007 and World Bank Group EHS guidelines, HUERI Limited enforces comprehensive safety protocols for field teams, environmental surveyors, and drillers, including mandatory PPE, hazard risk assessments, and emergency preparedness.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Prohibition of Forced & Child Labor
        </h5>
        <p>
          HUERI Limited strictly prohibits all forms of child labor, forced labor, and human trafficking across our direct operations and supplier/contractor ecosystems, in compliance with ILO Conventions 138 and 182.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Dignified Resettlement & Land Rights Safeguards
        </h5>
        <p>
          In our social safeguards advisory, we prioritize the protection of property rights (Article 40 of the Constitution of Kenya), participatory community consultation, vulnerable household support, and dignified livelihood restoration.
        </p>
      </div>
    </div>
  );
}
