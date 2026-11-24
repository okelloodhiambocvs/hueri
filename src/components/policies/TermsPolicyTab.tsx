import React from 'react';

export default function TermsPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="space-y-2">
        <h2 className="font-heading font-black text-2xl sm:text-3xl text-[#003B95] dark:text-white">
          Terms of Use & Professional Engagement
        </h2>
        <p className="text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
          These Terms govern access to the HUERI Limited web platform and outline the professional standards guiding our advisory and consulting services.
        </p>
      </div>

      <div className="space-y-5 text-sm sm:text-base text-slate-700 dark:text-slate-300 leading-relaxed">
        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          1. Platform Purpose & Informational Use
        </h3>
        <p>
          The content published on this website is provided for general informational and preliminary scoping purposes regarding the services, capabilities, and professional credentials of Hope Urban Environmental and Research Investments Limited (HUERI Limited).
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          2. Professional Integrity & Regulatory Framework
        </h3>
        <p>
          HUERI Limited operates in accordance with the Environmental Management and Co-ordination Act (EMCA Cap 387), the Occupational Safety and Health Act (OSHA 2007), and relevant national and international environmental standards. All technical studies and expert submissions are conducted with professional diligence and independent expert judgment.
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          3. Formal Advisory Engagement
        </h3>
        <p>
          Submission of an enquiry or request for proposal does not constitute a binding consulting agreement. A formal consultancy relationship is established solely upon execution of a bilateral contract, Terms of Reference (TOR), or professional service agreement.
        </p>

        <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white pt-2">
          4. Intellectual Property
        </h3>
        <p>
          All corporate branding, methodology frameworks, technical publications, and original materials on this portal are the intellectual property of HUERI Limited or its licensors. Unauthorized reproduction or commercial distribution without written consent is prohibited.
        </p>
      </div>
    </div>
  );
}
