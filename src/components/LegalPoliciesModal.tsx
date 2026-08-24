/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import PrivacyPolicyTab from './policies/PrivacyPolicyTab';
import TermsPolicyTab from './policies/TermsPolicyTab';
import HumanRightsPolicyTab from './policies/HumanRightsPolicyTab';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

export default function LegalPoliciesModal({
  isOpen,
  onClose,
  initialTab = 'privacy'
}: LegalPoliciesModalProps) {
  const [activeTab, setActiveTab] = useState<'privacy' | 'terms' | 'human-rights'>(
    (initialTab as any) || 'privacy'
  );

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 font-sans">
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className="bg-white dark:bg-[#0b132c] text-gray-900 dark:text-slate-100 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative z-10 border border-gray-200 dark:border-slate-800 overflow-hidden animate-fadeIn"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-brand-green-400 uppercase font-bold block">
              HUERI LIMITED • Statutory Compliance Registry
            </span>
            <h3 className="font-heading font-extrabold text-lg sm:text-xl text-white">
              Legal Frameworks, Governance & Privacy Policies
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer"
            >
              PRINT
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer"
            >
              CLOSE
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-100 dark:bg-slate-950 px-4 pt-3 border-b border-gray-200 dark:border-slate-800 flex flex-wrap gap-2 shrink-0">
          <button
            onClick={() => setActiveTab('privacy')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider uppercase transition-all border-t border-x cursor-pointer ${
              activeTab === 'privacy'
                ? 'bg-white dark:bg-slate-900 text-brand-green-700 dark:text-brand-green-400 border-gray-200 dark:border-slate-800 shadow-sm'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 border-transparent'
            }`}
          >
            Privacy Policy (DPA 2019)
          </button>

          <button
            onClick={() => setActiveTab('terms')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider uppercase transition-all border-t border-x cursor-pointer ${
              activeTab === 'terms'
                ? 'bg-white dark:bg-slate-900 text-brand-green-700 dark:text-brand-green-400 border-gray-200 dark:border-slate-800 shadow-sm'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 border-transparent'
            }`}
          >
            Terms & Conditions (EMCA CAP 387)
          </button>

          <button
            onClick={() => setActiveTab('human-rights')}
            className={`px-4 py-2.5 rounded-t-xl text-xs font-bold tracking-wider uppercase transition-all border-t border-x cursor-pointer ${
              activeTab === 'human-rights'
                ? 'bg-white dark:bg-slate-900 text-brand-green-700 dark:text-brand-green-400 border-gray-200 dark:border-slate-800 shadow-sm'
                : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 border-transparent'
            }`}
          >
            Labor Laws & Human Rights
          </button>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'privacy' && <PrivacyPolicyTab />}
          {activeTab === 'terms' && <TermsPolicyTab />}
          {activeTab === 'human-rights' && <HumanRightsPolicyTab />}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-slate-400 shrink-0 font-mono">
          <div>
            <span>HUERI LIMITED • Certified NEMA Environmental Firm • Kisumu & Nairobi, Kenya</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-brand-green-600 hover:bg-brand-green-700 text-white font-bold rounded-xl transition-all shadow-md uppercase tracking-wider text-xs cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
