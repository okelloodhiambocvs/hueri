import React from 'react';

export default function PrivacyPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Data Protection Framework (Kenya Data Protection Act, 2019)
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          This Privacy Policy sets out the data processing and protection practices of <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> in compliance with the Kenya Data Protection Act 2019 (ODPC) and applicable international data governance standards.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Data Controller Identification & Scope
        </h5>
        <p>
          HUERI Limited (P.O. Box 7919 - 40100 Kisumu, Kenya; Registration: CPR/2014/168986) operates as the Data Controller for personal and institutional information collected via our website, technical proposal submissions, partnership enquiries, and statutory field stakeholder consultations.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Categories of Information Collected
        </h5>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Proponent & Institutional Data:</strong> Contact names, institutional affiliations, official email addresses, telephone numbers, and assignment specifications submitted through our proposal forms.</li>
          <li><strong>Field & Spatial Data:</strong> Geographic coordinates, cadastral boundaries, socioeconomic census records for Resettlement Action Plans (RAP), and stakeholder attendance registers collected in compliance with statutory public participation guidelines under EMCA Cap 387.</li>
          <li><strong>Website Technical Metrics:</strong> Standard anonymized server logs, browser types, and session timestamps used solely for cybersecurity maintenance and system performance.</li>
        </ul>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Lawful Basis & Data Protection Principles
        </h5>
        <p>
          We process information under legitimate interests, contractual necessity, statutory obligations (such as NEMA and DOSHS requirements), and explicit user consent. We adhere strictly to data minimization, purpose limitation, storage limitation, and security integrity.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Confidentiality of Technical Dossiers
        </h5>
        <p>
          Project engineering designs, proprietary facility layouts, and commercial feasibility materials provided for environmental and social assessments are treated with strict confidentiality and accessed solely by designated lead experts and authorized project specialists.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          5. Contact Data Protection Officer (DPO)
        </h5>
        <p>
          To exercise your data protection rights (access, rectification, deletion, or objection) under the Kenya Data Protection Act 2019, please email <strong>info@hueriafrica.com</strong> or call <strong>+254 721 410139</strong>.
        </p>
      </div>
    </div>
  );
}
