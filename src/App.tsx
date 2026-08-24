/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './components/pages/HomePage';
import ServicesPage from './components/pages/ServicesPage';
import SectorsPage from './components/pages/SectorsPage';
import LifecycleStandardsPage from './components/pages/LifecycleStandardsPage';
import PartnershipsPage from './components/pages/PartnershipsPage';
import AboutPage from './components/pages/AboutPage';
import ContactPage from './components/pages/ContactPage';
import ProposalModal from './components/ProposalModal';
import LegalPoliciesModal from './components/LegalPoliciesModal';
import QuickContactFloat from './components/QuickContactFloat';
import AdminDrawer from './components/AdminDrawer';

export default function App() {
  const [currentPage, setCurrentPage] = useState<string>(() => {
    const hash = window.location.hash.replace('#', '');
    const validPages = ['home', 'services', 'sectors', 'lifecycle', 'partnerships', 'about', 'contact'];
    return validPages.includes(hash) ? hash : 'home';
  });

  const [activeSectionId, setActiveSectionId] = useState<string>('all');

  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    return (localStorage.getItem('hueri-theme') as 'light' | 'dark') || 'light';
  });

  const [stats, setStats] = useState({
    projectsCount: 8,
    leadsCount: 2,
    applicantsCount: 1,
    newsletterCount: 1,
    consultantsCount: 4
  });

  const [isProposalOpen, setIsProposalOpen] = useState(false);
  const [proposalTab, setProposalTab] = useState<'advisory' | 'partnership'>('advisory');
  const [prefilledScope, setPrefilledScope] = useState<string | undefined>(undefined);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [activePolicyTab, setActivePolicyTab] = useState<string | null>(null);

  // Sync dark class on html root and persist preference
  useEffect(() => {
    const root = document.documentElement;
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    localStorage.setItem('hueri-theme', theme);
  }, [theme]);

  // Sync hash routing for browser back/forward and direct links
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '');
      const validPages = ['home', 'services', 'sectors', 'lifecycle', 'partnerships', 'about', 'contact'];
      if (validPages.includes(hash)) {
        setCurrentPage(hash);
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  // Dynamic SEO metadata synchronization based on active page
  useEffect(() => {
    const seoMetaMap: Record<string, { title: string; desc: string }> = {
      home: {
        title: "HUERI LIMITED | NEMA Firm of Experts Kenya | ESIA, SEA, Environmental & OHS Audits, RAP, World Bank ESF",
        desc: "HUERI LIMITED is Kenya's premier environmental and social safeguards consultancy. NEMA registered firm of experts specializing in ESIA, SEA, Resettlement Action Plans, and World Bank ESF."
      },
      services: {
        title: "Environmental Practice Disciplines & Advisory Services | HUERI LIMITED Kenya",
        desc: "Explore HUERI's statutory and institutional advisory disciplines: ESIA licencing, SEA, Resettlement Action Plans (RAP), DOSHS audits, Hydrogeological surveys, and Climate adaptation."
      },
      sectors: {
        title: "Infrastructure, Energy & Industrial Sectors | HUERI LIMITED Kenya",
        desc: "Cross-sector environmental advisory across Renewable Energy, Water Resources, Transport Corridors, Urban Masterplans, Extractive Mining, and Agro-Industrial developments in East Africa."
      },
      lifecycle: {
        title: "Project Lifecycle & International Safeguard Standards | HUERI LIMITED",
        desc: "End-to-end statutory NEMA roadmap, World Bank Environmental and Social Framework (ESF ESS1-10), IFC Performance Standards (PS1-8), and Equator Principles alignment."
      },
      partnerships: {
        title: "Global Consortium & African Teaming Models | HUERI LIMITED",
        desc: "Partner with HUERI for African tender consortiums, subconsultancy, Joint Ventures, Master Service Agreements (MSA), and registered in-country technical delivery."
      },
      about: {
        title: "Corporate Profile & Executive Leadership | HUERI LIMITED Kisumu Kenya",
        desc: "Discover HUERI LIMITED's history since 2014, corporate accreditation, and executive team led by Managing Director Belinda Nyakinya and certified NEMA Lead Experts."
      },
      contact: {
        title: "Official Consultations & Scoping Desk | HUERI LIMITED Kisumu & Nairobi",
        desc: "Contact HUERI LIMITED for Terms of Reference (TOR) submissions, statutory EIA proposals, tender teaming, or direct consultations at our Milimani, Kisumu headquarters."
      }
    };

    const activeMeta = seoMetaMap[currentPage] || seoMetaMap.home;
    document.title = activeMeta.title;

    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute('content', activeMeta.desc);
    }
  }, [currentPage]);

  const navigateToPage = (page: string, sectionId?: string) => {
    setCurrentPage(page);
    setActiveSectionId(sectionId || 'all');
    window.location.hash = page;
    if (sectionId) {
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      }, 120);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const toggleTheme = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  const fetchStats = () => {
    try {
      fetch('/api/stats')
        .then(res => {
          if (!res.ok) return null;
          return res.json();
        })
        .then(data => {
          if (data && typeof data === 'object') {
            setStats(prev => ({ ...prev, ...data }));
          }
        })
        .catch(() => {
          // Graceful fallback to default initial stats
        });
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    fetchStats();
  }, []);

  const handleOpenAdvisoryProposal = (scope?: string) => {
    setProposalTab('advisory');
    setPrefilledScope(scope);
    setIsProposalOpen(true);
  };

  const handleOpenPartnershipModal = (modelTitle?: string) => {
    setProposalTab('partnership');
    setPrefilledScope(modelTitle);
    setIsProposalOpen(true);
  };

  const handleLeadSubmit = (leadData: { fullName: string; email: string; phone: string; company: string; serviceNeeded: string; message: string }) => {
    fetch('/api/leads', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(leadData)
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          fetchStats();
        }
      })
      .catch(err => console.error('Lead submission error:', err));
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#071a38] text-stone-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-brand-green-600 selection:text-white flex flex-col justify-between">
      
      {/* Header Navigation with Dropdowns & Important Links */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onRequestProposal={() => handleOpenAdvisoryProposal()}
        onOpenPartnership={() => handleOpenPartnershipModal()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenPolicy={(tab) => setActivePolicyTab(tab)}
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />

      {/* Dedicated Multi-Page View Container */}
      <main className="flex-grow">
        {currentPage === 'home' && (
          <HomePage 
            onNavigate={navigateToPage}
            onRequestProposal={handleOpenAdvisoryProposal}
            onOpenPartnership={handleOpenPartnershipModal}
            stats={stats}
          />
        )}

        {currentPage === 'services' && (
          <ServicesPage 
            initialPillarId={activeSectionId}
            onNavigate={navigateToPage}
            onRequestProposal={handleOpenAdvisoryProposal}
            onLeadSubmit={handleLeadSubmit}
          />
        )}

        {currentPage === 'sectors' && (
          <SectorsPage 
            initialSectorId={activeSectionId}
            onNavigate={navigateToPage}
            onRequestProposal={handleOpenAdvisoryProposal}
          />
        )}

        {currentPage === 'lifecycle' && (
          <LifecycleStandardsPage 
            onNavigate={navigateToPage}
            onRequestProposal={handleOpenAdvisoryProposal}
          />
        )}

        {currentPage === 'partnerships' && (
          <PartnershipsPage 
            onNavigate={navigateToPage}
            onOpenPartnershipInquiry={handleOpenPartnershipModal}
          />
        )}

        {currentPage === 'about' && (
          <AboutPage 
            initialSection={activeSectionId}
            onNavigate={navigateToPage}
            onRequestProposal={() => handleOpenAdvisoryProposal()}
          />
        )}

        {currentPage === 'contact' && (
          <ContactPage 
            onNavigate={navigateToPage}
            onLeadSubmit={handleLeadSubmit}
          />
        )}
      </main>

      {/* Footer with Balanced Links */}
      <Footer 
        onNavigate={navigateToPage}
        onOpenPolicy={(tab) => setActivePolicyTab(tab)}
        onRequestProposal={() => handleOpenAdvisoryProposal()}
        onOpenPartnership={() => handleOpenPartnershipModal()}
      />

      {/* Floating Elements & Modals */}
      <QuickContactFloat onLeadSubmit={handleLeadSubmit} />

      <ProposalModal 
        isOpen={isProposalOpen}
        initialTab={proposalTab}
        prefilledScope={prefilledScope}
        onClose={() => setIsProposalOpen(false)}
        onLeadSubmit={handleLeadSubmit}
      />

      <LegalPoliciesModal 
        isOpen={!!activePolicyTab}
        initialTab={activePolicyTab || 'privacy'}
        onClose={() => setActivePolicyTab(null)}
      />

      <AdminDrawer 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onUpdateStats={fetchStats}
      />
    </div>
  );
}
