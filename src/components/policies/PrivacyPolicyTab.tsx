import React from 'react';

export default function PrivacyPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="space-y-2">
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#003B95] dark:text-white">
          Data Protection Framework (Kenya Data Protection Act, 2019)
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          This Privacy Policy sets out the data processing and protection practices of <strong>Hope Urban Environmental and Research Investments Limited (HUERI Limited)</strong> in compliance with the Kenya Data Protection Act 2019 (ODPC) and applicable international data governance standards.
        </p>
      </div>

      <div className="space-y-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          1. Data Controller Identification & Scope
        </h3>
        <p>
          HUERI Limited (P.O. Box 7919 - 40100 Kisumu, Kenya; Registration: CPR/2014/168986) operates as the Data Controller for personal and institutional information collected via our website, technical proposal submissions, partnership enquiries, and statutory field stakeholder consultations.
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          2. Categories of Information Collected
        </h3>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Proponent & Institutional Data:</strong> Contact names, institutional affiliations, official email addresses, telephone numbers, and assignment specifications submitted through our proposal forms.</li>
          <li><strong>Field & Spatial Data:</strong> Geographic coordinates, cadastral boundaries, socioeconomic census records for Resettlement Action Plans (RAP), and stakeholder attendance registers collected in compliance with statutory public participation guidelines under EMCA Cap 387.</li>
          <li><strong>Website Technical Metrics:</strong> Standard anonymized server logs, browser types, and session timestamps used solely for cybersecurity maintenance and system performance.</li>
        </ul>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          3. Lawful Basis & Data Protection Principles
        </h3>
        <p>
          We process information under legitimate interests, contractual necessity, statutory obligations (such as NEMA and DOSHS requirements), and explicit user consent. We adhere strictly to data minimization, purpose limitation, storage limitation, and security integrity.
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          4. Confidentiality of Technical Dossiers
        </h3>
        <p>
          Project engineering designs, proprietary facility layouts, and commercial feasibility materials provided for environmental and social assessments are treated with strict confidentiality and accessed solely by designated lead experts and authorized project specialists.
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          5. Contact Data Protection Officer (DPO)
        </h3>
        <p>
          To exercise your data protection rights (access, rectification, deletion, or objection) under the Kenya Data Protection Act 2019, please email <strong>info@hueriafrica.com</strong> or call <strong>+254 721 410139</strong>.
        </p>
      </div>
    </div>
  );
}
