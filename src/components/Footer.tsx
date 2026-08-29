/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Logo from './Logo';

interface FooterProps {
  onNavigate?: (page: string, sectionId?: string) => void;
  onOpenPolicy: (tab: string) => void;
  onRequestProposal: () => void;
  onOpenPartnership?: () => void;
}

export default function Footer({ 
  onNavigate = () => {}, 
  onOpenPolicy, 
  onRequestProposal, 
  onOpenPartnership 
}: FooterProps) {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const checkScrollTop = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener('scroll', checkScrollTop);
    return () => window.removeEventListener('scroll', checkScrollTop);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };
  
  const handlePageClick = (page: string, sectionId?: string) => {
    onNavigate(page, sectionId);
    if (!sectionId) {
      scrollToTop();
    }
  };

  // Core Professional Social Platforms (LinkedIn, Facebook, WhatsApp)
  const socialLinks = [
    {
      name: 'LinkedIn',
      href: 'https://www.linkedin.com/company/hueri-limited/',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
        </svg>
      )
    },
    {
      name: 'Facebook',
      href: 'https://www.facebook.com/profile.php?id=61593556695543',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    },
    {
      name: 'WhatsApp',
      href: 'https://wa.me/254721410139?text=Hello%20HUERI%20Limited,%20I%20would%20like%20to%20enquire%20about%20your%20environmental%20and%20social%20advisory%20services.',
      icon: (
        <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
        </svg>
      )
    }
  ];

  return (
    <footer className="bg-[#07162C] text-white transition-colors duration-300 border-t border-slate-800 font-sans relative" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        
        {/* Balanced 3-Column Footer Grid with Aligned Tops */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-14 mb-12 items-start">
          
          {/* 1. Brand Logo & Registration Details */}
          <div className="space-y-5">
            <button 
              onClick={() => handlePageClick('home')} 
              className="text-left cursor-pointer group block focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded-lg"
              aria-label="HUERI Africa Home"
            >
              <Logo variant="full" theme="dark" iconSize="lg" showTagline={true} />
            </button>
            
            <div className="space-y-1.5 text-xs text-emerald-400 font-mono pt-1">
              <div className="font-bold">
                NEMA Firm Licence: NEMA/ENVIS/ELi/F0026
              </div>
              <div className="text-slate-300">
                Company Registration / Incorporation: CPR/2014/168986
              </div>
              <div className="text-slate-400">
                Headquarters: Milimani Estate, Kisumu City, Kenya
              </div>
            </div>

            {/* Back to Top Functionality */}
            <div className="pt-2">
              <button
                onClick={scrollToTop}
                className="inline-flex items-center space-x-2 text-xs font-mono font-bold text-emerald-400 hover:text-emerald-300 hover:underline cursor-pointer transition-colors group focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none rounded"
              >
                <span className="p-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 group-hover:-translate-y-0.5 transition-transform">
                  ↑
                </span>
                <span>Back to Top of Page</span>
              </button>
            </div>
          </div>

          {/* 2. Connect & Working Across Africa */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-emerald-400 font-mono border-b border-slate-800 pb-2">
              CONNECT & PARTNERSHIPS
            </h4>
            <p className="text-xs text-slate-300 font-light leading-relaxed">
              HUERI combines core environmental and social expertise with qualified local specialists and strategic partners across Africa. Connect through our official channels:
            </p>

            {/* Official Social Channels */}
            <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-1 gap-2 pt-1">
              {socialLinks.map((social, idx) => (
                <a
                  key={idx}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2.5 px-3.5 py-2 rounded-xl bg-slate-900/90 hover:bg-emerald-600 text-slate-200 hover:text-white border border-slate-800 hover:border-emerald-500 transition-all duration-200 shadow-sm group text-xs font-mono font-medium focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                  aria-label={`Visit HUERI on ${social.name}`}
                >
                  <span className="text-emerald-400 group-hover:text-white transition-colors shrink-0">
                    {social.icon}
                  </span>
                  <span className="truncate font-sans font-medium">{social.name}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 3. Contact & Direct Enquiries */}
          <div className="space-y-4">
            <h4 className="font-heading font-extrabold text-xs uppercase tracking-wider text-emerald-400 font-mono border-b border-slate-800 pb-2">
              CONTACT & ENQUIRIES
            </h4>
            <div className="space-y-2.5 text-xs text-slate-300 font-light">
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Location</span>
                <span>Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100)</span>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Direct Telephone</span>
                <a 
                  href="tel:+254721410139" 
                  className="text-emerald-400 hover:text-emerald-300 font-mono font-medium hover:underline"
                >
                  +254 721 410139
                </a>
              </div>
              <div>
                <span className="text-slate-400 block text-[10px] uppercase font-mono">Official Emails</span>
                <div className="flex flex-col space-y-1 font-mono text-[11px] pt-0.5">
                  <a href="mailto:info@hueriafrica.com" className="text-slate-200 hover:text-emerald-400 transition-colors">
                    General: <span className="text-emerald-400 hover:underline">info@hueriafrica.com</span>
                  </a>
                  <a href="mailto:proposals@hueriafrica.com" className="text-slate-200 hover:text-emerald-400 transition-colors">
                    Proposals: <span className="text-emerald-400 hover:underline">proposals@hueriafrica.com</span>
                  </a>
                  <a href="mailto:partnerships@hueriafrica.com" className="text-slate-200 hover:text-emerald-400 transition-colors">
                    Partnerships: <span className="text-emerald-400 hover:underline">partnerships@hueriafrica.com</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-2.5">
              <button
                onClick={onRequestProposal}
                className="flex-1 py-2.5 px-3 bg-emerald-600 hover:bg-emerald-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                REQUEST PROPOSAL
              </button>
              <button
                onClick={() => {
                  if (onOpenPartnership) onOpenPartnership();
                  else handlePageClick('partnerships');
                }}
                className="flex-1 py-2.5 px-3 bg-slate-800 hover:bg-slate-700 text-slate-200 font-heading font-bold text-[11px] uppercase tracking-wider rounded-xl transition-all border border-slate-700 cursor-pointer text-center focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
              >
                PARTNERSHIPS DESK
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Policy Links Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col lg:flex-row items-center justify-between text-[11px] text-slate-400 gap-4 font-mono">
          <div>
            <p>© 2026 HUERI LIMITED (Hope Urban Environmental and Research Investments Limited). All Rights Reserved.</p>
          </div>
          
          {/* Complete 8 Substantive Policy & Institutional Links */}
          <div className="flex flex-wrap items-center justify-center lg:justify-end gap-x-3 gap-y-2 text-xs">
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
              Terms of Use
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('disclaimer')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              Professional Disclaimer
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('grievance')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              Grievance Mechanism
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('safeguarding')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              SEA-SH Safeguarding
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('anti-bribery')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              Anti-Bribery & Integrity
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('conflict-of-interest')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              Conflict of Interest
            </button>
            <span>•</span>
            <button 
              onClick={() => onOpenPolicy('human-rights')} 
              className="hover:text-emerald-400 transition-colors cursor-pointer text-slate-400 hover:underline focus-visible:ring-1 focus-visible:ring-emerald-500 rounded"
            >
              Labor & Human Rights
            </button>
          </div>
        </div>
      </div>

      {/* Floating Back-To-Top Button when Scrolled */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          aria-label="Back to top of page"
          className="fixed bottom-6 right-6 z-40 p-3 bg-emerald-600 hover:bg-emerald-500 text-white rounded-2xl shadow-2xl transition-all duration-300 hover:-translate-y-1 cursor-pointer border border-emerald-400/30 flex items-center justify-center group focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
          title="Back to Top"
        >
          <svg 
            className="w-5 h-5 group-hover:-translate-y-0.5 transition-transform" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18" />
          </svg>
        </button>
      )}
    </footer>
  );
}
