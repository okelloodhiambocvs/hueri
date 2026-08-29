/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { initialGovernanceTiers } from '../../server/seedData';
import { 
  Building, 
  MapPin, 
  ShieldAlert, 
  Lock, 
  HeartHandshake, 
  Scale, 
  CheckCircle2,
  Globe2
} from 'lucide-react';

export default function AboutGovernanceEthics() {
  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
            INSTITUTIONAL INTEGRITY & GOVERNANCE
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Governance, Geographic Coverage & Ethical Commitments
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI Limited operates under a defined multi-tier governance structure, upholding stringent anti-bribery standards, safeguarding vulnerable populations, and maintaining pan-African delivery capability.
          </p>
        </div>
      </div>

      {/* 4-Tier Governance Structure */}
      <div className="space-y-4">
        <div className="flex items-center gap-2">
          <Building className="w-4 h-4 text-brand-green-700 dark:text-emerald-400" />
          <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
            Corporate Governance Hierarchy
          </h3>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {initialGovernanceTiers.map((tier) => (
            <div 
              key={tier.id}
              className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm space-y-3 flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold uppercase px-2.5 py-0.5 rounded-full bg-brand-green-100 dark:bg-emerald-950/60 text-brand-green-800 dark:text-emerald-300">
                    {tier.level}
                  </span>
                  <span className="text-[10px] font-mono text-stone-400 dark:text-slate-500 font-bold">
                    Oversight Tier
                  </span>
                </div>

                <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
                  {tier.title}
                </h4>

                <p className="text-xs font-mono text-brand-green-700 dark:text-emerald-400 font-bold">
                  {tier.oversightRole}
                </p>

                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-slate-300 font-light pt-1">
                  {tier.responsibilities.map((resp, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-green-600 mt-0.5">•</span>
                      <span>{resp}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Geographic Footprint & Operating Regions */}
      <div className="p-6 sm:p-8 rounded-3xl bg-[#FAF8F5] dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm space-y-5">
        <div className="flex items-center gap-2">
          <Globe2 className="w-5 h-5 text-brand-green-700 dark:text-emerald-400" />
          <h3 className="font-heading font-bold text-lg text-stone-900 dark:text-white">
            Geographic Reach & Field Mobilization
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-brand-green-700 dark:text-emerald-400">
              Headquarters & Hub
            </span>
            <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
              Western Kenya & Lake Victoria Basin
            </h4>
            <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
              Headquartered in Kisumu City (Milimani Estate), maintaining deep regional stakeholder relationships and rapid field mobilization across the 14 Lake Region Economic Bloc (LREB) counties.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-brand-green-700 dark:text-emerald-400">
              National Presence
            </span>
            <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
              Nationwide Coverage across Kenya
            </h4>
            <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
              Execution of statutory ESIAs, resettlement planning, and environmental audits across all 47 counties, including Nairobi metropolitan, Coast, Rift Valley, Central, and Northern Kenya corridors.
            </p>
          </div>

          <div className="p-4 rounded-2xl bg-white dark:bg-slate-800/90 border border-stone-200 dark:border-slate-800 space-y-2">
            <span className="text-xs font-mono font-bold uppercase text-brand-green-700 dark:text-emerald-400">
              Pan-African Associate Network
            </span>
            <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">
              Regional & In-Country Delivery
            </h4>
            <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
              Delivered through HUERI's multidisciplinary team and specialist technical associates across Eastern, Central, and Southern Africa for cross-border development programs and regional assignments.
            </p>
          </div>
        </div>
      </div>

      {/* Safeguarding, Ethical Commitments & Anti-Corruption */}
      <div className="grid md:grid-cols-2 gap-6">
        
        {/* Ethics & Anti-Corruption */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <Scale className="w-5 h-5 text-brand-green-700 dark:text-emerald-400" />
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white">
              Anti-Bribery, Anti-Corruption & Conduct
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-stone-600 dark:text-slate-300 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>Zero-Tolerance Policy:</strong> Strict institutional prohibition against illicit inducements, facilitation payments, or conflict of interest in regulatory submissions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>Defensible Science:</strong> Refusal to alter baseline scientific findings, hazard data, or stakeholder consultation outcomes to suit proponent pressures.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>Transparent Bidding:</strong> Adherence to public procurement ethics, fair competition, and accurate representation of corporate experience and credentials.</span>
            </li>
          </ul>
        </div>

        {/* Safeguarding & Community Protection */}
        <div className="p-6 rounded-3xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm space-y-4">
          <div className="flex items-center gap-2">
            <HeartHandshake className="w-5 h-5 text-brand-green-700 dark:text-emerald-400" />
            <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white">
              Safeguarding, PSEAH & Community Rights
            </h3>
          </div>
          <ul className="space-y-2.5 text-xs text-stone-600 dark:text-slate-300 font-light">
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>PSEAH Commitment:</strong> Clear corporate protocols preventing sexual exploitation, abuse, and harassment in all field operations and workforce interactions.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>Vulnerable Groups Inclusion:</strong> Tailored consultation methodologies ensuring women, youth, elderly, and persons with disabilities are actively heard during barazas.</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle2 className="w-4 h-4 text-brand-green-600 mt-0.5 shrink-0" />
              <span><strong>Accessible Grievance Channels:</strong> Operationalizing local Grievance Redress Mechanisms (GRMs) with confidential logging and documented resolution cycles.</span>
            </li>
          </ul>
        </div>

      </div>
    </div>
  );
}
