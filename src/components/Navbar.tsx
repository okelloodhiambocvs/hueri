/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Sun, Moon } from 'lucide-react';
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

  const handleNavClick = (pageId: string, sectionId?: string) => {
    onNavigate(pageId, sectionId);
    setMobileMenuOpen(false);
    if (!sectionId) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

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

          {/* Desktop Navigation Links - Direct single-page links without dropdowns */}
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

            {/* 2. ABOUT US - Direct Link, No Dropdown */}
            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                currentPage === 'about'
                  ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                  : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
              }`}
            >
              {language === 'sw' ? 'KUHUSU SISI' : 'ABOUT US'}
            </button>

            {/* 3. OUR SERVICES - Direct Link, No Dropdown */}
            <button
              onClick={() => handleNavClick('services')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                currentPage === 'services'
                  ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                  : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
              }`}
            >
              OUR SERVICES
            </button>

            {/* 4. SECTORS WE SERVE - Direct single overview page */}
            <button
              onClick={() => handleNavClick('sectors')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 ${
                currentPage === 'sectors'
                  ? 'text-brand-green-600 dark:text-emerald-400 font-extrabold border-b-2 border-brand-green-600 dark:border-emerald-400 pb-0.5'
                  : 'text-[#07162C] dark:text-white hover:text-brand-green-600 dark:hover:text-emerald-400'
              }`}
            >
              SECTORS WE SERVE
            </button>

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

          {/* Action Controls & Theme Toggle with Sun/Moon Icons */}
          <div className="hidden sm:flex items-center space-x-3">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-xl bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-amber-400 hover:bg-stone-200 dark:hover:bg-slate-700 transition-all cursor-pointer border border-stone-300/60 dark:border-slate-700 shadow-sm flex items-center justify-center focus-visible:ring-2 focus-visible:ring-emerald-500 focus-visible:outline-none"
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4 text-stone-700" />
                ) : (
                  <Sun className="w-4 h-4 text-amber-400" />
                )}
              </button>
            )}

            <button
              onClick={() => onRequestProposal()}
              className="px-5 py-2.5 bg-brand-green-600 hover:bg-brand-green-500 text-white font-heading font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-md shadow-brand-green-600/20 hover:-translate-y-0.5 cursor-pointer"
            >
              REQUEST PROPOSAL
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Button with Sun/Moon Icons */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-8 h-8 rounded-lg bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-amber-400 transition-colors border border-stone-200 dark:border-slate-700 flex items-center justify-center"
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-3.5 h-3.5 text-stone-700" />
                ) : (
                  <Sun className="w-3.5 h-3.5 text-amber-400" />
                )}
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
            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 px-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'about'
                  ? 'text-brand-green-600 dark:text-emerald-400 bg-stone-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#07162C] dark:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
              }`}
            >
              ABOUT US
            </button>

            {/* Mobile: Our Services */}
            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2.5 px-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'services'
                  ? 'text-brand-green-600 dark:text-emerald-400 bg-stone-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#07162C] dark:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
              }`}
            >
              OUR SERVICES
            </button>

            {/* Mobile: Sectors We Serve - Direct One-Page Link */}
            <button
              onClick={() => handleNavClick('sectors')}
              className={`text-left py-2.5 px-3 rounded-xl text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'sectors'
                  ? 'text-brand-green-600 dark:text-emerald-400 bg-stone-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#07162C] dark:text-white hover:bg-stone-100 dark:hover:bg-slate-800/60'
              }`}
            >
              SECTORS WE SERVE
            </button>

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
