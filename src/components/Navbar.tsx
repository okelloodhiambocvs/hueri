/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from 'react';
import { Sun, Moon, ChevronDown, ArrowRight } from 'lucide-react';
import Logo from './Logo';
import { useLanguage } from '../LanguageContext';
import { serviceDropdownItems } from '../utils/navDropdowns';

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
  theme = 'light',
  onToggleTheme
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const hoverOpenedPendingClickRef = useRef<boolean>(false);
  const { language } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(event.target as Node)) {
        setServicesOpen(false);
      }
    };
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setServicesOpen(false);
        setMobileMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  const handleNavClick = (pageId: string, sectionId?: string) => {
    onNavigate(pageId, sectionId);
    setServicesOpen(false);
    setMobileMenuOpen(false);
    setMobileServicesOpen(false);
    if (!sectionId || sectionId === 'all') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans ${
        isScrolled
          ? 'bg-white/98 dark:bg-[#041B44]/98 backdrop-blur-md shadow-sm py-3'
          : 'bg-white dark:bg-[#041B44] py-3.5'
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
                  ? 'text-[#006B22] dark:text-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'MWANZO' : 'HOME'}
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'about'
                  ? 'text-[#006B22] dark:text-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'KUHUSU SISI' : 'ABOUT US'}
            </button>

            {/* Our Services Scrollable List Dropdown */}
            <div
              className="relative flex items-center"
              onMouseEnter={() => {
                if (!servicesOpen) {
                  hoverOpenedPendingClickRef.current = true;
                  setServicesOpen(true);
                }
              }}
              onMouseLeave={() => {
                hoverOpenedPendingClickRef.current = false;
                setServicesOpen(false);
              }}
            >
              <button
                type="button"
                onClick={() => handleNavClick('services')}
                className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'text-[#006B22] dark:text-[#4ADE80]'
                    : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
                }`}
              >
                OUR SERVICES
              </button>
              <button
                type="button"
                aria-label="Toggle Our Services menu"
                aria-haspopup="menu"
                aria-expanded={servicesOpen}
                onClick={() => {
                  if (hoverOpenedPendingClickRef.current) {
                    hoverOpenedPendingClickRef.current = false;
                    setServicesOpen(true);
                    return;
                  }
                  setServicesOpen((prev) => !prev);
                }}
                className={`p-1 transition-colors cursor-pointer ${
                  currentPage === 'services' || currentPage === 'service-detail'
                    ? 'text-[#006B22] dark:text-[#4ADE80]'
                    : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
                }`}
              >
                <ChevronDown
                  className={`w-3.5 h-3.5 transition-transform duration-200 ${
                    servicesOpen ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute left-0 top-full pt-2 w-72 sm:w-[320px] z-50">
                  <div
                    role="menu"
                    aria-label="Our Services Navigation"
                    className="bg-white dark:bg-[#06183A] rounded-xl shadow-xl ring-1 ring-slate-200/80 dark:ring-slate-700/70 p-1.5 max-h-[275px] overflow-y-auto overscroll-contain space-y-0.5"
                  >
                    {serviceDropdownItems.map((service) => (
                      <button
                        key={service.id}
                        type="button"
                        role="menuitem"
                        onClick={() => handleNavClick('service-detail', service.slug)}
                        className="w-full text-left px-3 py-2 rounded-lg hover:bg-slate-50 dark:hover:bg-[#0B2559] transition-colors cursor-pointer group flex items-center justify-between gap-2.5"
                      >
                        <span className="text-[13px] sm:text-sm font-heading font-bold text-[#003B95] dark:text-white group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] leading-snug">
                          {service.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-[#006B22] dark:group-hover:text-[#4ADE80] shrink-0" />
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              onClick={() => handleNavClick('sectors')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'sectors'
                  ? 'text-[#006B22] dark:text-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              SECTORS WE SERVE
            </button>

            <button
              onClick={() => handleNavClick('contact')}
              className={`text-xs font-heading font-bold uppercase tracking-wider transition-colors cursor-pointer py-1 whitespace-nowrap shrink-0 ${
                currentPage === 'contact'
                  ? 'text-[#006B22] dark:text-[#4ADE80]'
                  : 'text-[#003B95] dark:text-slate-100 hover:text-[#006B22] dark:hover:text-[#4ADE80]'
              }`}
            >
              {language === 'sw' ? 'WASILIANA NASI' : 'CONTACT'}
            </button>
          </div>

          {/* Zone 3: Primary Action & Theme Toggle */}
          <div className="hidden sm:flex items-center gap-3 shrink-0">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-amber-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors cursor-pointer flex items-center justify-center focus-visible:ring-2 focus-visible:ring-[#006B22] focus-visible:outline-none"
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
              className="px-3.5 py-1.5 bg-[#003B95] hover:bg-[#002D73] text-white font-heading font-bold text-xs tracking-wide rounded-md transition-colors cursor-pointer whitespace-nowrap shrink-0"
            >
              Let&apos;s Talk
            </button>
          </div>

          {/* Mobile Menu Toggle & Theme Button */}
          <div className="flex items-center space-x-2 lg:hidden">
            {onToggleTheme && (
              <button
                onClick={onToggleTheme}
                className="w-9 h-9 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-amber-400 transition-colors flex items-center justify-center"
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
              className="px-3 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-[#003B95] dark:text-white text-xs font-bold uppercase"
            >
              {mobileMenuOpen ? 'CLOSE' : 'MENU'}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-[#041B44] px-4 pt-4 pb-6 space-y-3 shadow-xl max-h-[85vh] overflow-y-auto">
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

            {/* Mobile Our Services Row + Expandable Scrollable List */}
            <div>
              <div className="flex items-center justify-between">
                <button
                  type="button"
                  onClick={() => handleNavClick('services')}
                  className={`flex-1 text-left py-2.5 px-3 rounded-lg text-sm font-heading font-bold uppercase tracking-wider ${
                    currentPage === 'services' || currentPage === 'service-detail'
                      ? 'text-[#006B22] dark:text-[#4ADE80] bg-slate-100 dark:bg-slate-800 font-extrabold'
                      : 'text-[#003B95] dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800/60'
                  }`}
                >
                  OUR SERVICES
                </button>
                <button
                  type="button"
                  aria-label="Toggle Mobile Services list"
                  onClick={() => setMobileServicesOpen((prev) => !prev)}
                  className="p-2.5 text-[#003B95] dark:text-white"
                >
                  <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
              </div>
              {mobileServicesOpen && (
                <div className="pl-4 py-1 space-y-1 max-h-64 overflow-y-auto">
                  {serviceDropdownItems.map((service) => (
                    <button
                      key={service.id}
                      type="button"
                      onClick={() => handleNavClick('service-detail', service.slug)}
                      className="w-full text-left py-2.5 px-3 rounded-lg text-sm font-heading font-semibold text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/60"
                    >
                      {service.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

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
              CONTACT
            </button>
          </div>

          <div className="pt-2 space-y-2">
            <button
              onClick={() => { onRequestProposal(); setMobileMenuOpen(false); }}
              className="w-full py-2 px-4 bg-[#003B95] hover:bg-[#002D73] text-white font-heading font-bold text-xs tracking-wide rounded-md cursor-pointer"
            >
              Let&apos;s Talk
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
