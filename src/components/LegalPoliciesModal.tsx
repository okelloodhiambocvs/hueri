/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import PrivacyPolicyTab from './policies/PrivacyPolicyTab';
import TermsPolicyTab from './policies/TermsPolicyTab';
import DisclaimerPolicyTab from './policies/DisclaimerPolicyTab';
import GrievancePolicyTab from './policies/GrievancePolicyTab';
import SafeguardingPolicyTab from './policies/SafeguardingPolicyTab';
import AntiBriberyPolicyTab from './policies/AntiBriberyPolicyTab';
import ConflictOfInterestPolicyTab from './policies/ConflictOfInterestPolicyTab';
import HumanRightsPolicyTab from './policies/HumanRightsPolicyTab';

interface LegalPoliciesModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: string;
}

type PolicyTabId = 
  | 'privacy' 
  | 'terms' 
  | 'disclaimer' 
  | 'grievance' 
  | 'safeguarding' 
  | 'anti-bribery' 
  | 'conflict-of-interest' 
  | 'human-rights';

export default function LegalPoliciesModal({
  isOpen,
  onClose,
  initialTab = 'privacy'
}: LegalPoliciesModalProps) {
  const [activeTab, setActiveTab] = useState<PolicyTabId>(
    (initialTab as PolicyTabId) || 'privacy'
  );

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab as PolicyTabId);
    }
  }, [initialTab]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const tabs: { id: PolicyTabId; label: string }[] = [
    { id: 'privacy', label: 'Privacy Policy (DPA 2019)' },
    { id: 'terms', label: 'Terms of Use (EMCA Cap 387)' },
    { id: 'disclaimer', label: 'Professional Disclaimer' },
    { id: 'grievance', label: 'Grievance Mechanism' },
    { id: 'safeguarding', label: 'SEA-SH Safeguarding' },
    { id: 'anti-bribery', label: 'Anti-Bribery & Integrity' },
    { id: 'conflict-of-interest', label: 'Conflict of Interest' },
    { id: 'human-rights', label: 'Labor & Human Rights' }
  ];

  return (
    <div 
      className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-3 sm:p-6 font-sans"
      role="dialog"
      aria-modal="true"
      aria-labelledby="policy-modal-title"
    >
      <div className="fixed inset-0" onClick={onClose} aria-hidden="true" />

      <div
        className="bg-white dark:bg-[#0b132c] text-gray-900 dark:text-slate-100 rounded-3xl max-w-4xl w-full max-h-[90vh] flex flex-col shadow-2xl relative z-10 border border-gray-200 dark:border-slate-800 overflow-hidden"
      >
        {/* Header */}
        <div className="p-5 sm:p-6 bg-slate-900 text-white flex items-center justify-between border-b border-slate-800 shrink-0">
          <div>
            <span className="text-[10px] font-mono tracking-widest text-emerald-400 uppercase font-bold block">
              HUERI LIMITED • Statutory Compliance Registry
            </span>
            <h3 id="policy-modal-title" className="font-heading font-extrabold text-lg sm:text-xl text-white">
              Legal Frameworks, Governance & Institutional Policies
            </h3>
          </div>

          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-semibold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400"
            >
              PRINT
            </button>
            <button
              onClick={onClose}
              className="px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white rounded-xl text-xs font-mono font-bold transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400"
              aria-label="Close legal modal"
            >
              CLOSE
            </button>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-slate-100 dark:bg-slate-950 px-4 pt-3 border-b border-gray-200 dark:border-slate-800 flex flex-wrap gap-1.5 shrink-0 overflow-x-auto">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 py-2 rounded-t-xl text-xs font-bold tracking-wider uppercase transition-all border-t border-x cursor-pointer whitespace-nowrap focus-visible:ring-2 focus-visible:ring-emerald-500 ${
                activeTab === tab.id
                  ? 'bg-white dark:bg-slate-900 text-emerald-700 dark:text-emerald-400 border-gray-200 dark:border-slate-800 shadow-sm'
                  : 'text-gray-600 dark:text-slate-400 hover:text-gray-900 dark:hover:text-white border-transparent'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8 overflow-y-auto space-y-6 text-gray-800 dark:text-slate-200 text-xs sm:text-sm leading-relaxed">
          {activeTab === 'privacy' && <PrivacyPolicyTab />}
          {activeTab === 'terms' && <TermsPolicyTab />}
          {activeTab === 'disclaimer' && <DisclaimerPolicyTab />}
          {activeTab === 'grievance' && <GrievancePolicyTab />}
          {activeTab === 'safeguarding' && <SafeguardingPolicyTab />}
          {activeTab === 'anti-bribery' && <AntiBriberyPolicyTab />}
          {activeTab === 'conflict-of-interest' && <ConflictOfInterestPolicyTab />}
          {activeTab === 'human-rights' && <HumanRightsPolicyTab />}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 bg-slate-50 dark:bg-slate-950 border-t border-gray-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-500 dark:text-slate-400 shrink-0 font-mono">
          <div>
            <span>HUERI LIMITED • Licensed NEMA Firm of Experts (NEMA/ENVIS/ELi/F0026) • Kisumu, Kenya</span>
          </div>
          <button
            onClick={onClose}
            className="w-full sm:w-auto px-6 py-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl transition-all shadow-md uppercase tracking-wider text-xs cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
}
