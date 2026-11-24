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
          ? 'bg-white/98 dark:bg-[#041B44]/98 backdrop-blur-md shadow-sm py-3 border-b border-slate-200 dark:border-slate-800' 
          : 'bg-white dark:bg-[#041B44] py-3.5 border-b border-slate-200 dark:border-slate-800/80'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8">
          
          {/* Zone 1: Official Brand Logo */}
          <button 
            onClick={() => handleNavClick('home')} 
            className="flex items-center cursor-pointer text-left shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#006B22]"
            aria-label="HUERI Limited Home"
          >
            <Logo variant="full" theme={theme} iconSize="md" />
          </button>

          {/* Zone 2: Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-7">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'home'
                  ? 'text-[#006B22] dark:text-[#4ADE80] border-b-2 border-[#006B22] dark:border-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'MWANZO' : 'HOME'}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'about'
                  ? 'text-[#006B22] dark:text-[#4ADE80] border-b-2 border-[#006B22] dark:border-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'KUHUSU SISI' : 'ABOUT US'}
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'services'
                  ? 'text-[#006B22] dark:text-[#4ADE80] border-b-2 border-[#006B22] dark:border-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              OUR SERVICES
            </button>

            <button
              onClick={() => handleNavClick('sectors')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'sectors'
                  ? 'text-[#006B22] dark:text-[#4ADE80] border-b-2 border-[#006B22] dark:border-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              SECTORS WE SERVE
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'contact'
                  ? 'text-[#006B22] dark:text-[#4ADE80] border-b-2 border-[#006B22] dark:border-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'WASILIANA NASI' : 'CONTACT & ENQUIRIES'}
            </button>
          </div>

          {/* Zone 3: Primary Action & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer border border-slate-200 dark:border-slate-700 flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#006B22] focus-visible:outline-none"
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            )}

            <button
              onClick={() => onRequestProposal()}
              className="px-5 py-2.5 bg-[#003B95] hover:bg-[#002D73] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              REQUEST PROPOSAL
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-amber-400 transition-colors border border-slate-200 dark:border-slate-700 flex items-center justify-center"
                title={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
                aria-label={`Switch to ${theme === 'light' ? 'Dark' : 'Light'} Mode`}
              >
                {theme === 'light' ? (
                  <Moon className="w-4 h-4" />
                ) : (
                  <Sun className="w-4 h-4" />
                )}
              </button>
            )}

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-white font-mono text-xs font-bold uppercase border border-slate-200 dark:border-slate-700"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#041B44] border-b border-slate-200 dark:border-slate-800 px-4 pt-4 pb-6 space-y-4 shadow-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col space-y-1">
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'home'
                  ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              HOME
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'about'
                  ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              ABOUT US
            </button>

            <button
              onClick={() => handleNavClick('services')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'services'
                  ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              OUR SERVICES
            </button>

            <button
              onClick={() => handleNavClick('sectors')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'sectors'
                  ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              SECTORS WE SERVE
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                currentPage === 'contact'
                  ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                  : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
              }`}
            >
              CONTACT & ENQUIRIES
            </button>
          </div>

          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 space-y-2">
            <button
              onClick={() => { onRequestProposal(); setMobileMenuOpen(false); }}
              className="w-full py-3 bg-[#003B95] hover:bg-[#002D73] text-white font-heading font-bold text-xs uppercase tracking-wider rounded-lg cursor-pointer"
            >
              REQUEST PROPOSAL
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
