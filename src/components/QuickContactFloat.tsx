/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { sanitizeString, sanitizeText, sanitizeEmail, isValidEmail } from '../utils/security';

interface QuickContactFloatProps {
  onLeadSubmit: (leadData: { fullName: string; email: string; phone: string; company: string; serviceNeeded: string; message: string }) => void;
}

export default function QuickContactFloat({ onLeadSubmit }: QuickContactFloatProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [msg, setMsg] = useState('');
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg(null);

    const purifiedName = sanitizeString(name, 100);
    const purifiedEmail = sanitizeEmail(email);
    const purifiedMsg = sanitizeText(msg, 2000);

    if (!purifiedName || purifiedName.length < 2) {
      setErrorMsg("Please enter your name.");
      return;
    }

    if (!isValidEmail(purifiedEmail)) {
      setErrorMsg("Please enter a valid email address.");
      return;
    }

    setIsSubmitting(true);

    const payload = {
      fullName: purifiedName,
      email: purifiedEmail,
      phone: '',
      company: '',
      serviceNeeded: 'Quick Advisory Inquiry',
      message: purifiedMsg
    };

    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    })
      .then(res => res.json())
      .then(data => {
        setIsSubmitting(false);
        if (data.success) {
          onLeadSubmit(payload);
          setSent(true);
          setTimeout(() => {
            setSent(false);
            setIsOpen(false);
            setName('');
            setEmail('');
            setMsg('');
          }, 2500);
        } else {
          setErrorMsg(data.error || "Submission failed.");
        }
      })
      .catch(() => {
        setIsSubmitting(false);
        setErrorMsg("Network error. Please try again.");
      });
  };

  return (
    <div className="fixed bottom-6 left-6 z-40">
      {isOpen && (
        <div className="mb-4 bg-white dark:bg-[#111a2e] text-gray-900 dark:text-slate-100 p-6 rounded-3xl shadow-2xl border border-gray-200 dark:border-slate-800 w-80 sm:w-96 font-sans relative animate-fadeIn transition-all">
          <button
            onClick={() => setIsOpen(false)}
            className="absolute top-4 right-4 text-xs font-mono font-bold text-gray-400 hover:text-gray-600 dark:hover:text-white cursor-pointer"
          >
            ✕
          </button>

          <div className="mb-4">
            <span className="text-[10px] font-mono font-bold tracking-widest text-brand-green-600 dark:text-brand-green-400 uppercase block">
              DIRECT ADVISORY CHANNEL
            </span>
            <h4 className="font-heading font-extrabold text-lg text-gray-900 dark:text-white">
              Quick Expert Consultation
            </h4>
          </div>

          {errorMsg && (
            <div className="p-2 mb-3 bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 rounded-xl text-xs font-mono">
              {errorMsg}
            </div>
          )}

          {sent ? (
            <div className="p-3 bg-brand-green-50 dark:bg-brand-green-950/60 text-brand-green-700 dark:text-brand-green-300 rounded-xl text-xs font-bold text-center">
              ✓ Inquiry Safely Transmitted! We will respond promptly.
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3">
              <input
                type="text"
                required
                maxLength={100}
                value={name}
                onChange={e => setName(e.target.value)}
                placeholder="Your Name *"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-green-500"
              />
              <input
                type="email"
                required
                maxLength={120}
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your Email *"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-green-500"
              />
              <textarea
                rows={2}
                maxLength={2000}
                value={msg}
                onChange={e => setMsg(e.target.value)}
                placeholder="How can HUERI assist your project or licensing?"
                className="w-full px-3.5 py-2 bg-gray-50 dark:bg-slate-900 border border-gray-200 dark:border-slate-800 rounded-xl text-xs text-gray-900 dark:text-white focus:outline-none focus:border-brand-green-500 resize-none"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-2.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md text-center cursor-pointer disabled:opacity-50"
              >
                {isSubmitting ? 'TRANSMITTING...' : 'TRANSMIT QUICK INQUIRY'}
              </button>
            </form>
          )}

          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-slate-800 flex items-center justify-between text-[11px] text-gray-500 dark:text-slate-400 font-mono">
            <span>+254 721 410139</span>
            <span>Kisumu, Kenya</span>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-3 bg-brand-green-600 hover:bg-brand-green-500 text-white rounded-2xl shadow-2xl flex items-center justify-center font-heading font-bold text-xs uppercase tracking-wider transform hover:scale-105 transition-all cursor-pointer border border-white/20"
      >
        <span>{isOpen ? '✕ CLOSE' : '💬 QUICK INQUIRY'}</span>
      </button>
    </div>
  );
}
