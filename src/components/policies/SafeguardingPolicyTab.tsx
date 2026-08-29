import React from 'react';

export default function SafeguardingPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Safeguarding & Prevention of Sexual Exploitation, Abuse and Harassment (SEA-SH)
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          Zero-tolerance policy against all forms of sexual exploitation, abuse, sexual harassment, and child protection violations across all corporate and field activities.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Core Commitment & Scope
        </h5>
        <p>
          HUERI Limited is dedicated to creating safe, respectful, and dignified environments for our employees, associate consultants, host communities, and Project Affected Persons (PAPs). This policy applies to all directors, staff, field survey enumerators, subcontractors, and associate network members.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Prohibited Behaviors
        </h5>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Sexual Exploitation:</strong> Any actual or attempted abuse of a position of vulnerability, differential power, or trust for sexual purposes, including monetary or material favors.</li>
          <li><strong>Sexual Abuse:</strong> The actual or threatened physical intrusion of a sexual nature, whether by force or under unequal or coercive conditions.</li>
          <li><strong>Sexual Harassment:</strong> Any unwelcome sexual advance, request for sexual favors, or verbal/physical conduct of a sexual nature in the workplace or field.</li>
          <li><strong>Child Protection Violations:</strong> Any exploitation or endangerment of children under 18 years of age.</li>
        </ul>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Mandatory Code of Conduct
        </h5>
        <p>
          All field personnel, census enumerators, and consultants deployed on HUERI assignments must sign and adhere to our strict Code of Conduct prior to field deployment, particularly when working in community contexts and vulnerable settlements.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Confidential Reporting & Survivor Support
        </h5>
        <p>
          Reports of safeguarding breaches are treated with utmost confidentiality. Dedicated confidential reporting is accessible via <strong>info@hueriafrica.com</strong> or directly to the Managing Director. Immediate disciplinary action, contract termination, and referral to law enforcement are enforced for confirmed violations.
        </p>
      </div>
    </div>
  );
}
