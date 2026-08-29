/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { initialCredentials } from '../../server/seedData';
import { ShieldCheck, FileCheck2, Scale, Building2, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { generateInstitutionalProfilePDF } from '../../utils/companyProfileGenerator';

export default function AboutCredentials() {
  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <span className="text-xs font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400 block">
            STATUTORY COMPLIANCE & LEGAL ACCREDITATION
          </span>
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Corporate Credentials & Statutory Registrations
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI Limited maintains registered corporate status with the Registrar of Companies in Kenya, the National Environment Management Authority (NEMA), the Kenya Revenue Authority (KRA), and local municipal permitting authorities.
          </p>
        </div>

        <button
          onClick={() => generateInstitutionalProfilePDF()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-stone-900 dark:bg-white text-white dark:text-stone-900 text-xs font-mono font-bold uppercase tracking-wider hover:bg-stone-800 transition-all shadow-sm shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          Download Credentials Pack
        </button>
      </div>

      {/* Verification Notice Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/80 dark:bg-amber-950/30 border border-amber-300/60 dark:border-amber-700/40 space-y-1.5 text-xs text-amber-900 dark:text-amber-200">
        <div className="flex items-center gap-2 font-bold font-heading text-sm text-amber-950 dark:text-amber-100">
          <AlertCircle className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
          <span>Statutory Document Verification Notice</span>
        </div>
        <p className="font-light leading-relaxed">
          The corporate credentials below reflect statutory records maintained by HUERI Limited. Specific annual practicing licences (including NEMA Firm Practicing Licence <code>NEMA/ENVIS/ELi/F0026</code>) and corporate registration archives (<code>CPR/2014/168986</code>) are subject to current certified copy verification against active registrar documents. Certified true copies are provided in formal RFP and tender bid submissions upon client request.
        </p>
      </div>

      {/* Credentials Table / Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {initialCredentials.map((cred, idx) => (
          <div 
            key={idx}
            className="p-5 rounded-2xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-brand-green-100 dark:bg-emerald-950/60 text-brand-green-800 dark:text-emerald-300">
                  {cred.category}
                </span>
                <span className={`text-[10px] font-mono font-bold px-2 py-0.5 rounded-full flex items-center gap-1 ${
                  cred.requiresVerification
                    ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                    : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                }`}>
                  {cred.requiresVerification ? (
                    <>
                      <AlertCircle className="w-3 h-3 text-amber-600" />
                      Document on File
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                      Verified
                    </>
                  )}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white">
                  {cred.credential}
                </h3>
                <p className="text-xs text-stone-500 dark:text-slate-400 font-mono mt-0.5">
                  Issuing Body: <strong>{cred.issuingAuthority}</strong>
                </p>
              </div>

              <div className="p-2.5 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-stone-200 dark:border-slate-800 font-mono text-xs text-brand-green-800 dark:text-emerald-300 font-bold break-all">
                Ref: {cred.reference}
              </div>

              <p className="text-xs text-stone-600 dark:text-slate-300 font-light leading-relaxed">
                {cred.verificationNote}
              </p>
            </div>

            <div className="pt-3 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-stone-500 dark:text-slate-400">
              <span>Validity: {cred.validity}</span>
              <span className="font-bold text-brand-green-700 dark:text-emerald-400">{cred.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Architecture Footnote */}
      <div className="p-5 rounded-2xl bg-stone-100 dark:bg-slate-800/50 border border-stone-200 dark:border-slate-800 space-y-2 text-xs text-stone-700 dark:text-slate-300">
        <h4 className="font-heading font-bold text-stone-900 dark:text-white text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-brand-green-700 dark:text-emerald-400" />
          Proponent & Tender Document Request Protocol
        </h4>
        <p className="font-light leading-relaxed">
          For procurement departments, financiers, or prime engineering contractors conducting supplier due diligence, HUERI Limited provides verified digital or physical compliance packs including:
        </p>
        <div className="grid sm:grid-cols-2 gap-2 pt-1 font-mono text-[11px]">
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700">
            ✓ Certified CR12 & Certificate of Incorporation
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700">
            ✓ NEMA Firm Practicing Licence & Expert Registrations
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700">
            ✓ Current KRA Tax Compliance Certificate (TCC)
          </div>
          <div className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-700">
            ✓ County Business Operating Permit & Bank References
          </div>
        </div>
      </div>
    </div>
  );
}
