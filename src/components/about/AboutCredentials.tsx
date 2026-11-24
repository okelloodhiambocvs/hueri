/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { initialCredentials } from '../../server/seedData';
import { ShieldCheck, CheckCircle2, AlertCircle, Download } from 'lucide-react';
import { generateInstitutionalProfilePDF } from '../../utils/companyProfileGenerator';

export default function AboutCredentials() {
  return (
    <div className="space-y-10 font-sans">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Corporate Credentials &amp; Statutory Registrations
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI Limited maintains registered corporate status with the Registrar of Companies in Kenya, the National Environment Management Authority (NEMA), the Kenya Revenue Authority (KRA), and local municipal permitting authorities.
          </p>
        </div>

        <button
          onClick={() => generateInstitutionalProfilePDF()}
          className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg bg-[#003B95] hover:bg-[#002D73] text-white text-xs font-mono font-bold uppercase tracking-wider transition-colors shrink-0 cursor-pointer"
        >
          <Download className="w-3.5 h-3.5" />
          Download Credentials Pack
        </button>
      </div>

      {/* Verification Notice — Open Border Strip */}
      <div className="border-y border-amber-300/70 dark:border-amber-700/50 py-4 space-y-1.5 text-xs text-slate-700 dark:text-slate-200">
        <div className="flex items-center gap-2 font-bold font-heading text-sm text-[#003B95] dark:text-amber-300">
          <AlertCircle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Statutory Document Verification Notice</span>
        </div>
        <p className="font-light leading-relaxed">
          The corporate credentials below reflect statutory records maintained by HUERI Limited. In accordance with corporate governance and data privacy protocols, statutory practicing licenses, lead expert certifications, and registrar records are private documentation provided directly to prospective clients, partners, and tender evaluation committees upon request.
        </p>
      </div>

      {/* Credentials Editorial Grid */}
      <div className="grid md:grid-cols-2 gap-x-10 gap-y-8">
        {initialCredentials.map((cred, idx) => (
          <div
            key={idx}
            className="border-t-2 border-[#003B95] dark:border-[#38BDF8] pt-5 pb-4 space-y-3 flex flex-col justify-between"
          >
            <div className="space-y-2.5">
              <div className="flex items-center justify-between gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80]">
                  {cred.category}
                </span>
                <span className={`text-[10px] font-mono font-bold flex items-center gap-1 ${
                  cred.requiresVerification
                    ? 'text-amber-700 dark:text-amber-300'
                    : 'text-[#006B22] dark:text-[#4ADE80]'
                }`}>
                  {cred.requiresVerification ? (
                    <>
                      <AlertCircle className="w-3 h-3" />
                      Document on File
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="w-3 h-3" />
                      Verified
                    </>
                  )}
                </span>
              </div>

              <div>
                <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
                  {cred.credential}
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 font-mono mt-0.5">
                  Issuing Body: <strong>{cred.issuingAuthority}</strong>
                </p>
              </div>

              <div className="py-1.5 border-y border-slate-100 dark:border-slate-800 font-mono text-xs text-[#006B22] dark:text-[#4ADE80] font-bold break-all">
                Ref: {cred.reference}
              </div>

              <p className="text-xs text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                {cred.verificationNote}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
              <span>Validity: {cred.validity}</span>
              <span className="font-bold text-[#006B22] dark:text-[#4ADE80]">{cred.status}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Compliance Architecture Footnote — Open Strip */}
      <div className="border-t border-slate-200 dark:border-slate-800 pt-6 space-y-3 text-xs text-slate-700 dark:text-slate-300">
        <h4 className="font-heading font-bold text-[#003B95] dark:text-white text-sm flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-[#006B22] dark:text-[#4ADE80]" />
          Proponent &amp; Tender Document Request Protocol
        </h4>
        <p className="font-light leading-relaxed">
          For procurement departments, financiers, or prime engineering contractors conducting supplier due diligence, HUERI Limited provides verified digital or physical compliance packs including:
        </p>
        <div className="grid sm:grid-cols-2 gap-3 pt-1 font-mono text-[11px] text-[#006B22] dark:text-[#4ADE80]">
          <div>✓ Certified CR12 &amp; Certificate of Incorporation</div>
          <div>✓ NEMA Firm Practicing Licence &amp; Expert Registrations</div>
          <div>✓ Current KRA Tax Compliance Certificate (TCC)</div>
          <div>✓ County Business Operating Permit &amp; Bank References</div>
        </div>
      </div>
    </div>
  );
}
