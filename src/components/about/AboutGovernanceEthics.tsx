/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { initialGovernanceTiers } from '../../server/seedData';
import {
  Building,
  HeartHandshake,
  Scale,
  CheckCircle2,
  Globe2
} from 'lucide-react';

export default function AboutGovernanceEthics() {
  return (
    <div className="space-y-12 font-sans">
      <div className="border-b border-slate-200 dark:border-slate-800 pb-5 space-y-1.5">
        <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#006B22] dark:text-[#4ADE80] block">
          INSTITUTIONAL INTEGRITY &amp; GOVERNANCE
        </span>
        <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
          Governance, Geographic Coverage &amp; Ethical Commitments
        </h2>
        <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
          HUERI Limited operates under a defined multi-tier governance structure, upholding stringent anti-bribery standards, safeguarding vulnerable populations, and maintaining pan-African delivery capability.
        </p>
      </div>

      {/* 4-Tier Governance Structure */}
      <div className="space-y-5">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80]" />
          <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white">
            Corporate Governance Hierarchy
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 border-t border-slate-200 dark:border-slate-800 pt-6">
          {initialGovernanceTiers.map((tier) => (
            <div key={tier.id} className="border-t-2 border-[#003B95] dark:border-[#38BDF8] pt-4 space-y-2.5">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold uppercase text-[#006B22] dark:text-[#4ADE80]">
                  {tier.level}
                </span>
                <span className="text-[10px] font-mono text-slate-400 font-bold">
                  Oversight Tier
                </span>
              </div>

              <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                {tier.title}
              </h4>

              <p className="text-xs font-mono text-[#006B22] dark:text-[#4ADE80] font-bold">
                {tier.oversightRole}
              </p>

              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-light pt-1">
                {tier.responsibilities.map((resp, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#006B22] dark:text-[#4ADE80] mt-0.5">·</span>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Footprint & Operating Regions */}
      <div className="border-y border-slate-200 dark:border-slate-800 py-8 space-y-6">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80]" />
          <h3 className="font-heading font-bold text-lg text-[#003B95] dark:text-white">
            Geographic Reach &amp; Field Mobilization
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#006B22] dark:text-[#4ADE80]">
              Headquarters &amp; Hub
            </span>
            <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              Western Kenya &amp; Lake Victoria Basin
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Headquartered in Kisumu City (Milimani Estate), maintaining deep regional stakeholder relationships and rapid field mobilization across the 14 Lake Region Economic Bloc (LREB) counties.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#006B22] dark:text-[#4ADE80]">
              National Presence
            </span>
            <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              Nationwide Coverage across Kenya
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Execution of statutory ESIAs, resettlement planning, and environmental audits across all 47 counties, including Nairobi metropolitan, Coast, Rift Valley, Central, and Northern Kenya corridors.
            </p>
          </div>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-[#006B22] dark:text-[#4ADE80]">
              Pan-African Associate Network
            </span>
            <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
              Regional &amp; In-Country Delivery
            </h4>
            <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
              Delivered through HUERI&apos;s multidisciplinary team and specialist technical associates across Eastern, Central, and Southern Africa for cross-border development programs and regional assignments.
            </p>
          </div>
        </div>
      </div>

      {/* Safeguarding, Ethical Commitments & Anti-Corruption */}
      <div className="grid md:grid-cols-2 gap-10">
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80]" />
            <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
              Anti-Bribery, Anti-Corruption &amp; Conduct
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>Zero-Tolerance Policy:</strong> Strict institutional prohibition against illicit inducements, facilitation payments, or conflict of interest in regulatory submissions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>Defensible Science:</strong> Refusal to alter baseline scientific findings, hazard data, or stakeholder consultation outcomes to suit proponent pressures.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>Transparent Bidding:</strong> Adherence to public procurement ethics, fair competition, and accurate representation of corporate experience and credentials.</span>
            </li>
          </ul>
        </div>

        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-[#006B22] dark:text-[#4ADE80]" />
            <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
              Safeguarding, PSEAH &amp; Community Rights
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-300 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>PSEAH Commitment:</strong> Clear corporate protocols preventing sexual exploitation, abuse, and harassment in all field operations and workforce interactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>Vulnerable Groups Inclusion:</strong> Tailored consultation methodologies ensuring women, youth, elderly, and persons with disabilities are actively heard during barazas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80] mt-0.5 shrink-0" />
              <span><strong>Accessible Grievance Channels:</strong> Operationalizing local Grievance Redress Mechanisms (GRMs) with confidential logging and documented resolution cycles.</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
