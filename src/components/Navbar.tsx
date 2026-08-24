/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, sectionId?: string) => void;
  onRequestProposal: (serviceScope?: string) => void;
  onOpenPartnership?: () => void;
  onOpenAdmin?: () => void;
  onOpenPolicy?: (tab: string) => void;
  theme?: 'light' | 'dark';
  onToggleTheme?: () => void;
}

export default function Navbar({
  currentPage = 'home',
  onNavigate,
  onRequestProposal,
  onOpenPartnership,
  onOpenAdmin,
  onOpenPolicy = () => {},
  theme = 'light',
  onToggleTheme
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [mobileExpandedSection, setMobileExpandedSection] = useState<string | null>(null);
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleMouseEnter = (menuKey: string) => {
    if (dropdownTimeoutRef.current) {
      clearTimeout(dropdownTimeoutRef.current);
    }
    setOpenDropdown(menuKey);
  };

  const handleMouseLeave = () => {
    dropdownTimeoutRef.current = setTimeout(() => {
      setOpenDropdown(null);
    }, 200);
  };

  const handleNavClick = (pageId: string, sectionId?: string) => {
    onNavigate(pageId, sectionId);
    setOpenDropdown(null);
    setMobileMenuOpen(false);
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  // 1. ABOUT US - Includes "Who We Are" and "What We Do"
  const aboutLinks = [
    { label: 'Who We Are', sectionId: 'about-purpose' },
    { label: 'What We Do', sectionId: 'about-objectives' },
    { label: 'Executive Leadership', sectionId: 'about-director' },
    { label: 'Core Guiding Values', sectionId: 'about-values' },
    { label: 'Historic Milestones', sectionId: 'about-milestones' },
    { label: 'Field Operations', sectionId: 'about-field' }
  ];

  // 2. SERVICE PORTFOLIO - Direct shape links with green interactivity
  const serviceLinks = [
    { label: 'Statutory ESIA', sectionId: 'service-pillar-1' },
    { label: 'Social Safeguards & RAP', sectionId: 'service-pillar-2' },
    { label: 'Climate & Ecology', sectionId: 'service-pillar-3' },
    { label: 'Safety & Audits', sectionId: 'service-pillar-4' },
    { label: 'ESG & Lender Standards', sectionId: 'service-pillar-5' },
    { label: 'Scoping Estimator', sectionId: 'all' }
  ];

  // 3. SECTORS WE SERVE - Direct shape links with green interactivity
  const sectorLinks = [
    { label: 'Energy & Power', sectionId: 'sector-energy-power' },
    { label: 'Transport Corridors', sectionId: 'sector-transport-logistics' },
    { label: 'Water & Sanitation', sectionId: 'sector-water-sanitation' },
    { label: 'Built Environment', sectionId: 'sector-urban-built-env' },
    { label: 'Carbon & Nature Finance', sectionId: 'sector-carbon-nature-finance' },
    { label: 'Mining & Industry', sectionId: 'sector-mining-extractives' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled 
          ? 'bg-white/98 dark:bg-[#07162C]/98 backdrop-blur-md shadow-md py-3 border-b border-stone-200 dark:border-slate-800' 
          : 'bg-white dark:bg-[#07162C] py-4 border-b border-stone-200 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center group cursor-pointer text-left"
          >
            <Logo variant="full" theme={theme} iconSize="md" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            
            {/* 1. HOME */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                currentPage === 'home'
                  ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                  : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
              }`}
            >
              {language === 'sw' ? 'MWANZO' : 'HOME'}
            </button>

            {/* 2. ABOUT US - No outer card background, only button shapes with green interactivity */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('about')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('about')}
                className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'about'
                    ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                    : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
                }`}
              >
                <span>{language === 'sw' ? 'KUHUSU SISI' : 'ABOUT US'}</span>
                <span className="text-[10px] text-stone-400 font-mono">▾</span>
              </button>

              {openDropdown === 'about' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] animate-in fade-in duration-150 z-50">
                  <div className="grid grid-cols-2 gap-2.5 p-1.5">
                    {aboutLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick('about', link.sectionId)}
                        className="px-5 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-white dark:bg-[#07162C] hover:bg-brand-green-600 hover:text-white dark:hover:bg-brand-green-600 dark:hover:text-white rounded-2xl border border-brand-green-600/40 hover:border-brand-green-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 3. SERVICE PORTFOLIO - No outer card background, only button shapes with green interactivity */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('services')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('services')}
                className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'services'
                    ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                    : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
                }`}
              >
                <span>SERVICE PORTFOLIO</span>
                <span className="text-[10px] text-stone-400 font-mono">▾</span>
              </button>

              {openDropdown === 'services' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] animate-in fade-in duration-150 z-50">
                  <div className="grid grid-cols-2 gap-2.5 p-1.5">
                    {serviceLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick('services', link.sectionId)}
                        className="px-5 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-white dark:bg-[#07162C] hover:bg-brand-green-600 hover:text-white dark:hover:bg-brand-green-600 dark:hover:text-white rounded-2xl border border-brand-green-600/40 hover:border-brand-green-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 4. SECTORS WE SERVE - No outer card background, only button shapes with green interactivity */}
            <div 
              className="relative py-2"
              onMouseEnter={() => handleMouseEnter('sectors')}
              onMouseLeave={handleMouseLeave}
            >
              <button
                onClick={() => handleNavClick('sectors')}
                className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer flex items-center gap-1.5 ${
                  currentPage === 'sectors'
                    ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                    : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
                }`}
              >
                <span>SECTORS WE SERVE</span>
                <span className="text-[10px] text-stone-400 font-mono">▾</span>
              </button>

              {openDropdown === 'sectors' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-3 w-[460px] animate-in fade-in duration-150 z-50">
                  <div className="grid grid-cols-2 gap-2.5 p-1.5">
                    {sectorLinks.map((link, idx) => (
                      <button
                        key={idx}
                        onClick={() => handleNavClick('sectors', link.sectionId)}
                        className="px-5 py-3.5 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-white dark:bg-[#07162C] hover:bg-brand-green-600 hover:text-white dark:hover:bg-brand-green-600 dark:hover:text-white rounded-2xl border border-brand-green-600/40 hover:border-brand-green-600 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-200 text-center cursor-pointer"
                      >
                        {link.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* 5. CONTACT & ENQUIRIES */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                currentPage === 'contact'
                  ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                  : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
              }`}
            >
              {language === 'sw' ? 'WASILIANA NASI' : 'CONTACT & ENQUIRIES'}
            </button>
          </div>

          {/* Action Controls & Theme Toggle */}
          <div className="hidden sm:flex items-center space-x-3">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-slate-800 text-[#07162C] dark:text-white hover:bg-stone-200 dark:hover:bg-slate-700 transition-colors cursor-pointer text-[10px] font-mono font-bold uppercase border border-stone-300/60 dark:border-slate-700"
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? 'DARK MODE' : 'LIGHT MODE'}
              </button>
            )}

            <button
              onClick={() => onRequestProposal()}
              className="px-5 py-2.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-green-600/20 hover:-translate-y-0.5 cursor-pointer"
            >
              REQUEST PROPOSAL
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="px-2.5 py-1 rounded-lg bg-stone-100 dark:bg-slate-800 text-[#07162C] dark:text-white text-[10px] font-mono font-bold"
              >
                {theme === 'light' ? 'DARK' : 'LIGHT'}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-1.5 rounded-xl bg-stone-100 dark:bg-slate-800 text-[#07162C] dark:text-white font-mono text-xs font-bold uppercase border border-stone-300/60 dark:border-slate-700"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#07162C] border-b border-stone-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            
            {/* Mobile: Home */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'home'
                  ? 'text-brand-green-600 dark:text-emerald-400 bg-stone-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#07162C] dark:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
              }`}
            >
              HOME
            </button>

            {/* Mobile: About Us */}
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-stone-100 dark:hover:bg-slate-800">
                <button
                  onClick={() => handleNavClick('about')}
                  className={`text-left text-sm font-heading font-bold uppercase tracking-wider ${
                    currentPage === 'about' ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold' : 'text-[#07162C] dark:text-white'
                  }`}
                >
                  ABOUT US
                </button>
                <button 
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'about' ? null : 'about')}
                  className="px-2 py-1 text-xs font-mono text-stone-500"
                >
                  {mobileExpandedSection === 'about' ? '▲' : '▼'}
                </button>
              </div>
              {mobileExpandedSection === 'about' && (
                <div className="grid grid-cols-1 gap-2 p-2">
                  {aboutLinks.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick('about', item.sectionId)}
                      className="px-4 py-3 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-stone-50 dark:bg-slate-900 border border-brand-green-600/30 rounded-2xl text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile: Service Portfolio */}
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-stone-100 dark:hover:bg-slate-800">
                <button
                  onClick={() => handleNavClick('services')}
                  className={`text-left text-sm font-heading font-bold uppercase tracking-wider ${
                    currentPage === 'services' ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold' : 'text-[#07162C] dark:text-white'
                  }`}
                >
                  SERVICE PORTFOLIO
                </button>
                <button 
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'services' ? null : 'services')}
                  className="px-2 py-1 text-xs font-mono text-stone-500"
                >
                  {mobileExpandedSection === 'services' ? '▲' : '▼'}
                </button>
              </div>
              {mobileExpandedSection === 'services' && (
                <div className="grid grid-cols-1 gap-2 p-2">
                  {serviceLinks.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick('services', item.sectionId)}
                      className="px-4 py-3 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-stone-50 dark:bg-slate-900 border border-brand-green-600/30 rounded-2xl text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile: Sectors */}
            <div className="space-y-1">
              <div className="flex items-center justify-between py-2 px-3 rounded-xl hover:bg-stone-100 dark:hover:bg-slate-800">
                <button
                  onClick={() => handleNavClick('sectors')}
                  className={`text-left text-sm font-heading font-bold uppercase tracking-wider ${
                    currentPage === 'sectors' ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold' : 'text-[#07162C] dark:text-white'
                  }`}
                >
                  SECTORS WE SERVE
                </button>
                <button 
                  onClick={() => setMobileExpandedSection(mobileExpandedSection === 'sectors' ? null : 'sectors')}
                  className="px-2 py-1 text-xs font-mono text-stone-500"
                >
                  {mobileExpandedSection === 'sectors' ? '▲' : '▼'}
                </button>
              </div>
              {mobileExpandedSection === 'sectors' && (
                <div className="grid grid-cols-1 gap-2 p-2">
                  {sectorLinks.map((item, i) => (
                    <button
                      key={i}
                      onClick={() => handleNavClick('sectors', item.sectionId)}
                      className="px-4 py-3 text-xs font-heading font-bold uppercase tracking-wider text-[#07162C] dark:text-white bg-stone-50 dark:bg-slate-900 border border-brand-green-600/30 rounded-2xl text-left"
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Mobile: Contact */}
            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2.5 px-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'contact'
                  ? 'text-brand-green-600 dark:text-emerald-400 bg-stone-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#07162C] dark:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
              }`}
            >
              CONTACT & ENQUIRIES
            </button>
          </div>

          <div className="pt-3 border-t border-stone-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => { onRequestProposal(); setMobileMenuOpen(false); }}
              className="w-full py-3 bg-brand-green-600 hover:bg-brand-green-700 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl shadow-md cursor-pointer"
            >
              REQUEST PROPOSAL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
