/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialCredentials } from '../server/seedData';
import { generateInstitutionalProfilePDF } from '../utils/companyProfileGenerator';
import { 
  X, 
  Download, 
  Printer, 
  ShieldCheck, 
  FileText, 
  Building2, 
  CheckCircle2, 
  AlertCircle, 
  ChevronRight,
  ExternalLink,
  Briefcase
} from 'lucide-react';

interface CompanyProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
  onRequestProposal?: () => void;
}

export default function CompanyProfileModal({ isOpen, onClose, onRequestProposal }: CompanyProfileModalProps) {
  const [activeTab, setActiveTab] = useState<'download' | 'verification' | 'checklist'>('download');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div 
        className="relative w-full max-w-4xl max-h-[90vh] bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-stone-200 dark:border-slate-800 overflow-hidden flex flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-5 sm:p-6 bg-[#FAF8F5] dark:bg-slate-800/80 border-b border-stone-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-2xl bg-brand-green-700 text-white shadow-sm">
              <Building2 className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-brand-green-700 dark:text-emerald-400">
                  Institutional Capability Dossier
                </span>
                <span className="text-[9px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300 font-bold">
                  2026 Edition
                </span>
              </div>
              <h2 className="text-lg sm:text-xl font-heading font-black text-stone-900 dark:text-white">
                HUERI Limited • Corporate Capability Profile
              </h2>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-stone-400 hover:text-stone-700 dark:hover:text-white hover:bg-stone-200 dark:hover:bg-slate-700 transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Tabs */}
        <div className="px-6 border-b border-stone-200 dark:border-slate-800 flex gap-4 bg-white dark:bg-slate-900 text-xs font-mono font-bold">
          <button
            onClick={() => setActiveTab('download')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'download'
                ? 'border-brand-green-700 text-brand-green-700 dark:text-emerald-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-slate-300'
            }`}
          >
            Overview & Download
          </button>
          <button
            onClick={() => setActiveTab('verification')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'verification'
                ? 'border-brand-green-700 text-brand-green-700 dark:text-emerald-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-slate-300'
            }`}
          >
            Verification & Accreditation
          </button>
          <button
            onClick={() => setActiveTab('checklist')}
            className={`py-3 border-b-2 transition-all cursor-pointer ${
              activeTab === 'checklist'
                ? 'border-brand-green-700 text-brand-green-700 dark:text-emerald-400'
                : 'border-transparent text-stone-500 hover:text-stone-800 dark:hover:text-slate-300'
            }`}
          >
            Procurement Compliance Checklist
          </button>
        </div>

        {/* Tab Content (Scrollable) */}
        <div className="p-6 overflow-y-auto space-y-6 max-h-[calc(90vh-180px)]">
          
          {activeTab === 'download' && (
            <div className="space-y-6">
              {/* Document Banner */}
              <div className="p-6 rounded-2xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div className="space-y-1">
                  <span className="text-xs font-mono font-bold text-brand-green-700 dark:text-emerald-400 uppercase tracking-wider">
                    Official Corporate Capability Document
                  </span>
                  <h3 className="text-lg font-heading font-black text-stone-900 dark:text-white">
                    Hope Urban Environmental and Research Investments Limited (HUERI Limited)
                  </h3>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light max-w-xl">
                    Comprehensive multi-page PDF capability statement covering institutional history, executive leadership, corporate registrations, 6 advisory practices, and QA/QC framework.
                  </p>
                </div>

                <div className="flex sm:flex-col gap-2 shrink-0 w-full sm:w-auto">
                  <button
                    onClick={() => generateInstitutionalProfilePDF()}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-brand-green-700 hover:bg-brand-green-800 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
                  >
                    <Download className="w-4 h-4" />
                    Download PDF / Print
                  </button>
                </div>
              </div>

              {/* Document Summary Breakdown */}
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Section 1–3</div>
                  <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">Institutional Foundation & Governance</h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light">
                    Incorporation records, statutory NEMA registrations, Vision, Mission, and Guiding Principles.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Section 4–5</div>
                  <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">6 Advisory Practices & Leadership Team</h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light">
                    Statutory ESIA, RAP, Climate Resilience, EHS Auditing, Spatial GIS, and Sustainability Strategy, led by Belinda Nyakinya and senior associates.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Section 6–7</div>
                  <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">Quality Assurance & Track Record</h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light">
                    Six-pillar QA/QC framework, statutory compliance checks, and selected assignments across housing, energy, and urban development.
                  </p>
                </div>

                <div className="p-4 rounded-xl border border-stone-200 dark:border-slate-800 bg-white dark:bg-slate-900 space-y-2">
                  <div className="text-xs font-mono font-bold text-stone-400 uppercase tracking-wider">Section 8</div>
                  <h4 className="font-heading font-bold text-sm text-stone-900 dark:text-white">Procurement Verification Matrix</h4>
                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light">
                    Detailed breakdown of certificates on file, practicing licences, and certified true copy availability for tenders.
                  </p>
                </div>
              </div>

              {/* Disclaimer */}
              <div className="p-4 rounded-xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/50 dark:border-amber-700/40 text-xs text-amber-900 dark:text-amber-200 font-light leading-relaxed">
                <strong>Delivery Model Disclosure:</strong> Where specialized technical disciplines are required, assignments are <em>delivered through HUERI's multidisciplinary team and specialist technical associates, as required by the assignment.</em>
              </div>
            </div>
          )}

          {activeTab === 'verification' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-stone-50 dark:bg-slate-800/50 border border-stone-200 dark:border-slate-800 space-y-1 text-xs text-stone-700 dark:text-slate-300">
                <span className="font-bold text-stone-900 dark:text-white block">Statutory Registration Status & Transparency</span>
                <p className="font-light">
                  HUERI Limited maintains registered corporate status in Kenya. To maintain complete transparency, the table below highlights current verified records and certificates subject to document verification:
                </p>
              </div>

              <div className="space-y-3">
                {initialCredentials.map((c, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className="font-mono font-bold text-brand-green-700 dark:text-emerald-400 uppercase text-[10px]">{c.category}</span>
                        <span className={`px-2 py-0.5 rounded text-[10px] font-mono font-bold ${
                          c.requiresVerification ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300' : 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        }`}>
                          {c.status}
                        </span>
                      </div>
                      <h4 className="font-heading font-bold text-stone-900 dark:text-white text-sm">{c.credential}</h4>
                      <p className="font-mono text-stone-500 dark:text-slate-400">Ref: {c.reference} • Authority: {c.issuingAuthority}</p>
                      <p className="text-stone-600 dark:text-slate-300 font-light">{c.verificationNote}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'checklist' && (
            <div className="space-y-4">
              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/70 border border-stone-200 dark:border-slate-800 space-y-1.5 text-xs text-stone-700 dark:text-slate-300">
                <span className="font-bold text-stone-900 dark:text-white text-sm block">
                  Procurement & Tender Compliance Dossier Checklist
                </span>
                <p className="font-light leading-relaxed">
                  When submitting proposals to public sector agencies, multilateral development banks (World Bank, AfDB, IFC), or prime EPC contractors, HUERI Limited provides the following verified compliance pack:
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-3">
                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>Certificate of Incorporation & CR12</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    Certified copy showing company directors, shareholding, and registration date (Nov 2014).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>NEMA Firm Practicing Licence</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    Annual Practicing Licence for HUERI Limited and NEMA Lead Expert certificate for Belinda Nyakinya.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>KRA Tax Compliance Certificate</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    Valid electronic Tax Compliance Certificate (TCC) verifiable via the KRA iTax portal.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>County Single Business Permit</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    Annual operating business permit issued by the County Government of Kisumu.
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>Key Personnel CVs & Licences</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    Signed CVs, degree certificates, and professional registrations (NEMA, DOSHS, VRB, EBK, EIK).
                  </p>
                </div>

                <div className="p-3.5 rounded-xl bg-white dark:bg-slate-900 border border-stone-200 dark:border-slate-800 space-y-1">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-stone-900 dark:text-white">
                    <CheckCircle2 className="w-4 h-4 text-brand-green-600 shrink-0" />
                    <span>Project Evidence & Client Letters</span>
                  </div>
                  <p className="text-[11px] text-stone-500 dark:text-slate-400 font-light pl-6">
                    NEMA EIA licences, approval letters, and client reference letters for past assignments.
                  </p>
                </div>
              </div>

              {onRequestProposal && (
                <div className="pt-2 flex justify-end">
                  <button
                    onClick={() => {
                      onClose();
                      onRequestProposal();
                    }}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-brand-green-700 hover:bg-brand-green-800 text-white font-mono font-bold text-xs uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                  >
                    <Briefcase className="w-3.5 h-3.5" />
                    Request Technical Proposal / Compliance Pack →
                  </button>
                </div>
              )}
            </div>
          )}

        </div>

        {/* Modal Footer */}
        <div className="p-4 sm:p-5 bg-stone-50 dark:bg-slate-800/80 border-t border-stone-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-stone-500 dark:text-slate-400 font-mono">
          <div>
            Head Office: Kisumu, Kenya • info@hueriafrica.com
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => generateInstitutionalProfilePDF()}
              className="inline-flex items-center gap-1.5 text-brand-green-700 dark:text-emerald-400 font-bold hover:underline cursor-pointer"
            >
              <Printer className="w-3.5 h-3.5" />
              Print / Save PDF
            </button>
            <button
              onClick={onClose}
              className="px-3.5 py-1.5 rounded-lg bg-stone-200 dark:bg-slate-700 hover:bg-stone-300 text-stone-800 dark:text-slate-200 font-bold transition-all cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>

      </div>
    </div>
  );
}
