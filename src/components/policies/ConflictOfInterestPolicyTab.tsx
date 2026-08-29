import React from 'react';

export default function ConflictOfInterestPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Conflict of Interest & Professional Independence Policy
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          Protocols for identifying, disclosing, and managing potential conflicts of interest to ensure objective, uncompromised environmental and social advisory.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Principle of Impartiality
        </h5>
        <p>
          HUERI Limited requires all directors, consultants, and specialist associates to act with undivided loyalty to objective scientific and professional standards. Our advice must remain free from commercial, personal, or institutional bias.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Mandatory Disclosure Protocol
        </h5>
        <p>
          Prior to commencing any assignment, team members must declare any personal, financial, familial, or prior advisory relationships with the project proponent, competing developers, or regulatory bodies that could give rise to an actual or perceived conflict of interest.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Separation of Advisory and Auditing Roles
        </h5>
        <p>
          To preserve audit objectivity, HUERI Limited does not conduct statutory annual compliance audits on projects or facilities where our personnel have a direct commercial stake or where we have direct operational implementation responsibility.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Mitigation & Recusal
        </h5>
        <p>
          Where a potential conflict is identified, HUERI Limited will implement transparent mitigation measures, including assigning alternate lead experts, recusing affected individuals, or declining the assignment when necessary.
        </p>
      </div>
    </div>
  );
}
