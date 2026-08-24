import React from 'react';

export default function PrivacyPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-brand-green-50/60 dark:bg-brand-green-950/20 border border-brand-green-200 dark:border-brand-green-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Statutory Data Protection Framework (Kenya Data Protection Act, 2019)
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          This Privacy Policy details the data controller obligations of <strong>Hope Urban Environmental and Research Investment Limited (HUERI LIMITED)</strong> under the Office of the Data Protection Commissioner (ODPC) Kenya, Article 31 of the Constitution of Kenya 2010, and international standards.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Data Controller Identification & Scope
        </h5>
        <p>
          HUERI LIMITED (P.O. Box 7128 - 40100 Kisumu, Kenya) acts as the Data Controller for information collected via our website, project proposal requests, borehole survey applications, Environmental Impact Assessment (EIA) baseline audits, and community Baraza stakeholder consultations.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Categories of Information Collected
        </h5>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Project Proponent Information:</strong> Full names, corporate registration numbers, telephone coordinates, email addresses, and official agency titles.</li>
          <li><strong>GIS & Parcel Footprints:</strong> Land ownership titles, parcel plot numbers, GPS coordinates, borehole drilling depths, effluent discharge specs, and zoning certificates.</li>
          <li><strong>Public Participation Data:</strong> Attendance registers, community feedback, and sign-off records collected during statutory NEMA EIA Public Barazas under EMCA CAP 387.</li>
          <li><strong>Technical Server Metrics:</strong> IP addresses, browser agent types, and session duration for cybersecurity integrity.</li>
        </ul>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Confidentiality of Environmental & Industrial Blueprints
        </h5>
        <p>
          HUERI LIMITED maintains rigorous non-disclosure protocols regarding proprietary industrial designs, architectural floorplans, wastewater treatment specs, and commercial feasibility studies submitted by project proponents. Confidential project files are accessed solely by assigned NEMA Registered Lead Experts.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Contact Data Protection Officer (DPO)
        </h5>
        <p>
          For data protection inquiries, formal rectification requests, or privacy audits, contact our designated Compliance Desk at <strong>hopeenvironment2015@gmail.com</strong> or call <strong>+254 721 410139</strong> (Lead Expert: Belindah Nyakinya).
        </p>
      </div>
    </div>
  );
}
