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
    <footer className="bg-[#041B44] text-white border-t border-[#0A2E6E] font-sans py-8" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6 text-sm sm:text-base text-slate-300">
        <button 
          onClick={() => onNavigate('home')} 
          className="text-left cursor-pointer group block focus-visible:ring-2 focus-visible:ring-[#4ADE80] focus-visible:outline-none rounded-lg"
          aria-label="HUERI Limited Home"
        >
          <Logo variant="full" theme="dark" iconSize="lg" showTagline={true} />
        </button>

        <div className="text-center font-mono text-sm sm:text-base text-slate-300">
          <p>© 2026 HUERI Limited. All rights reserved.</p>
        </div>
        
        <div className="flex items-center gap-4 text-sm sm:text-base font-mono">
          <button 
            onClick={() => onNavigate('privacy')} 
            className="hover:text-[#4ADE80] transition-colors cursor-pointer text-slate-300 focus-visible:ring-1 focus-visible:ring-[#4ADE80] rounded"
          >
            Privacy Policy
          </button>
          <span>•</span>
          <button 
            onClick={() => onNavigate('terms')} 
            className="hover:text-[#4ADE80] transition-colors cursor-pointer text-slate-300 focus-visible:ring-1 focus-visible:ring-[#4ADE80] rounded"
          >
            Terms and Conditions
          </button>
        </div>
      </div>
    </footer>
  );
}

