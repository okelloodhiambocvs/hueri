import React from 'react';

export default function TermsPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Terms of Use & Professional Engagement
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          These Terms govern access to the HUERI Limited web platform and outline the professional standards guiding our advisory and consulting services.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Platform Purpose & Informational Use
        </h5>
        <p>
          The content published on this website is provided for general informational and preliminary scoping purposes regarding the services, capabilities, and professional credentials of Hope Urban Environmental and Research Investments Limited (HUERI Limited).
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Professional Integrity & Regulatory Framework
        </h5>
        <p>
          HUERI Limited operates in accordance with the Environmental Management and Co-ordination Act (EMCA Cap 387), the Occupational Safety and Health Act (OSHA 2007), and relevant national and international environmental standards. All technical studies and expert submissions are conducted with professional diligence and independent expert judgment.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Formal Advisory Engagement
        </h5>
        <p>
          Submission of an enquiry or request for proposal does not constitute a binding consulting agreement. A formal consultancy relationship is established solely upon execution of a bilateral contract, Terms of Reference (TOR), or professional service agreement.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Intellectual Property
        </h5>
        <p>
          All corporate branding, methodology frameworks, technical publications, and original materials on this portal are the intellectual property of HUERI Limited or its licensors. Unauthorized reproduction or commercial distribution without written consent is prohibited.
        </p>
      </div>
    </div>
  );
}
