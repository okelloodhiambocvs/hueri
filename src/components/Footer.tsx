/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (page: string, sectionId?: string) => void;
  onOpenPolicy: (tab: string) => void;
  onRequestProposal?: () => void;
  onOpenPartnership?: () => void;
}

export default function Footer({ 
  onNavigate = () => {},
  onOpenPolicy 
}: FooterProps) {
  return (
    <footer className="bg-[#07162C] text-white border-t border-slate-800 font-sans py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm sm:text-base text-slate-400">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-left cursor-pointer group block focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded-lg"
          aria-label="HUERI Africa Home"
        >
          <Logo variant="full" theme="dark" iconSize="md" showTagline={true} />
        </button>

        <div className="text-center font-mono text-sm sm:text-base text-slate-300">
          <p>© 2026 HUERI Limited. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm sm:text-base font-mono">
          <button 
            onClick={() => onOpenPolicy('privacy')} 
            className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => onOpenPolicy('terms')} 
            className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
          >
            Terms and Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}

