import React from 'react';

export default function DisclaimerPolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Professional Disclaimer & Regulatory Limits
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          Clear distinction between technical advisory diligence and sovereign/institutional regulatory determinations.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Regulatory Authority Decisions
        </h5>
        <p>
          HUERI Limited conducts environmental impact assessments, social safeguards planning, and statutory audits with high professional rigor in accordance with EMCA Cap 387, DOSHS regulations, and international standards. However, statutory decisions—including the granting of NEMA licenses, EPRA approvals, water abstraction permits (WRA), or municipal development clearances—are the sovereign responsibility of the respective statutory bodies and regulatory authorities.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. No Guarantee of Sovereign Approvals or Financing Outcomes
        </h5>
        <p>
          HUERI Limited does not guarantee the approval of licenses, permits, financing disbursements, or third-party bankability determinations that are outside our direct control. Our commitment is to deliver high-quality, evidence-based technical documentation that accurately represents project baselines, assesses risks, and provides practical mitigation frameworks.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Reliance on Baseline & Proponent Data
        </h5>
        <p>
          Advisory assessments and conclusions rely on technical data, engineering specifications, and representations provided by project proponents, as well as field conditions observed during site investigations. While our experts exercise due diligence and validation, proponents remain responsible for the accuracy and completeness of project descriptions provided.
        </p>
      </div>
    </div>
  );
}
