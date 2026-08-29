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
import CompanyProfileModal from './components/CompanyProfileModal';

interface RouteInfo {
  page: string;
  sectionId: string;
  path: string;
  title: string;
  desc: string;
}

const routeMap: Record<string, RouteInfo> = {
  '/': {
    page: 'home',
    sectionId: 'all',
    path: '/',
    title: 'HUERI Limited | Environmental & Social Consultants Kenya',
    desc: 'Hope Urban Environmental and Research Investments Limited (HUERI Limited) is an established Kenya-based environmental, social, health, safety, and sustainability consultancy (NEMA Firm Licence: NEMA/ENVIS/ELi/F0026). We deliver ESIA, statutory environmental audits, resettlement action plans (RAP), and safeguard compliance in Kenya, with capacity to support assignments across Africa through qualified country-specific partnerships.'
  },
  '/about': {
    page: 'about',
    sectionId: 'all',
    path: '/about',
    title: 'About Us & Corporate Governance | HUERI Limited',
    desc: 'Discover HUERI Limited\'s institutional profile, history since 2014, and environmental leadership led by Managing Director Belinda Nyakinya and certified NEMA Lead Experts.'
  },
  '/team': {
    page: 'about',
    sectionId: 'about-director',
    path: '/team',
    title: 'Executive Leadership & Safeguards Team | HUERI Limited',
    desc: 'Meet the executive leadership and certified NEMA Lead Experts of HUERI Limited led by Managing Director Belinda Nyakinya.'
  },
  '/services': {
    page: 'services',
    sectionId: 'all',
    path: '/services',
    title: 'Environmental Practice Disciplines & Advisory Services | HUERI Limited',
    desc: 'Explore HUERI Limited\'s statutory and institutional advisory disciplines: ESIA licencing, SEA, Resettlement Action Plans (RAP), DOSHS audits, Hydrogeological surveys, and Climate adaptation.'
  },
  '/services/esia': {
    page: 'services',
    sectionId: 'service-pillar-1',
    path: '/services/esia',
    title: 'Statutory ESIA & Environmental Licencing | HUERI Limited Kenya',
    desc: 'Comprehensive NEMA Environmental and Social Impact Assessments (ESIA), Strategic Environmental Assessments (SEA), and construction environmental management plans (C-ESMP).'
  },
  '/services/resettlement-action-plans': {
    page: 'services',
    sectionId: 'service-pillar-2',
    path: '/services/resettlement-action-plans',
    title: 'Resettlement Action Plans (RAP) & Livelihood Restoration | HUERI Limited',
    desc: 'Expert Resettlement Action Plans (RAP), socio-economic census, asset valuation, livelihood restoration, and community baraza consultations.'
  },
  '/services/climate-resilience': {
    page: 'services',
    sectionId: 'service-pillar-3',
    path: '/services/climate-resilience',
    title: 'Climate Resilience, Ecology & Natural Resources | HUERI Limited',
    desc: 'Climate vulnerability profiling, GHG footprinting, hydrological risk modeling, biodiversity baselines, and nature-based solutions.'
  },
  '/services/environmental-audits': {
    page: 'services',
    sectionId: 'service-pillar-4',
    path: '/services/environmental-audits',
    title: 'Statutory Environmental Audits & Compliance | HUERI Limited Kenya',
    desc: 'Annual statutory NEMA environmental compliance audits, EMCA Cap 387 compliance monitoring, and corrective action plans for operating facilities.'
  },
  '/services/ohs': {
    page: 'services',
    sectionId: 'service-pillar-4',
    path: '/services/ohs',
    title: 'Occupational Health & Safety (OHS) Compliance Audits | HUERI Limited',
    desc: 'DOSHS statutory workplace safety compliance audits, hazard identification and risk assessments (HIRA), and OSHA 2007 advisory.'
  },
  '/services/esdd-esg': {
    page: 'services',
    sectionId: 'service-pillar-5',
    path: '/services/esdd-esg',
    title: 'ESG Advisory & Lender Due Diligence (ESDD) | HUERI Limited',
    desc: 'Environmental and Social Due Diligence (ESDD), World Bank ESF (ESS1-ESS10), IFC Performance Standards (PS1-PS8), and AfDB Integrated Safeguards.'
  },
  '/services/eshsrim-training': {
    page: 'services',
    sectionId: 'service-pillar-6',
    path: '/services/eshsrim-training',
    title: 'ESHSRIM Procedures Training & Capacity Building | HUERI Limited',
    desc: 'Environmental, Social, Health and Safety Risks and Impacts Management (ESHSRIM) procedures training, compliance toolkits, and certification.'
  },
  '/sectors': {
    page: 'sectors',
    sectionId: 'all',
    path: '/sectors',
    title: 'Infrastructure, Energy & Industrial Sectors | HUERI Limited',
    desc: 'Cross-sector environmental advisory across Renewable Energy, Water Resources, Transport Corridors, Urban Masterplans, and Extractive Mining in East Africa.'
  },
  '/lifecycle': {
    page: 'lifecycle',
    sectionId: 'all',
    path: '/lifecycle',
    title: 'Project Lifecycle & International Safeguard Standards | HUERI Limited',
    desc: 'End-to-end statutory NEMA roadmap, World Bank Environmental and Social Framework (ESF ESS1-10), IFC Performance Standards (PS1-8), and Equator Principles.'
  },
  '/partnerships': {
    page: 'partnerships',
    sectionId: 'all',
    path: '/partnerships',
    title: 'Global Consortium & Pan-African Teaming Models | HUERI Limited',
    desc: 'Partner with HUERI for African tender consortiums, subconsultancy, Joint Ventures, Master Service Agreements (MSA), and registered in-country technical delivery.'
  },
  '/projects': {
    page: 'about',
    sectionId: 'about-field',
    path: '/projects',
    title: 'Selected Assignments & Track Record | HUERI Limited Kenya',
    desc: 'Proven track record of environmental, social, and statutory advisory assignments delivered across Kenya and the wider region.'
  },
  '/contact': {
    page: 'contact',
    sectionId: 'all',
    path: '/contact',
    title: 'Official Consultations & Scoping Desk | HUERI Limited Kisumu & Nairobi',
    desc: 'Contact HUERI Limited for Terms of Reference (TOR) submissions, statutory EIA proposals, tender teaming, or direct consultations in Kisumu.'
  }
};

function resolveCurrentRoute(): { page: string; sectionId: string; path: string } {
  if (typeof window === 'undefined') {
    return { page: 'home', sectionId: 'all', path: '/' };
  }

  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  if (routeMap[pathname]) {
    return {
      page: routeMap[pathname].page,
      sectionId: routeMap[pathname].sectionId,
      path: pathname
    };
  }

  // Hash fallback handling
  const hash = window.location.hash.replace('#', '');
  if (hash) {
    if (hash === 'services') return { page: 'services', sectionId: 'all', path: '/services' };
    if (hash === 'about') return { page: 'about', sectionId: 'all', path: '/about' };
    if (hash === 'sectors') return { page: 'sectors', sectionId: 'all', path: '/sectors' };
    if (hash === 'lifecycle') return { page: 'lifecycle', sectionId: 'all', path: '/lifecycle' };
    if (hash === 'partnerships') return { page: 'partnerships', sectionId: 'all', path: '/partnerships' };
    if (hash === 'contact') return { page: 'contact', sectionId: 'all', path: '/contact' };
    if (hash === 'home') return { page: 'home', sectionId: 'all', path: '/' };
  }

  return { page: 'home', sectionId: 'all', path: '/' };
}

function updateDocumentMetadata(routeInfo: RouteInfo) {
  const canonicalUrl = `https://www.hueriafrica.com${routeInfo.path === '/' ? '/' : routeInfo.path}`;

  // 1. Page Title
  document.title = routeInfo.title;

  // 2. Canonical URL Link
  let canonicalEl = document.querySelector('link[rel="canonical"]');
  if (!canonicalEl) {
    canonicalEl = document.createElement('link');
    canonicalEl.setAttribute('rel', 'canonical');
    document.head.appendChild(canonicalEl);
  }
  canonicalEl.setAttribute('href', canonicalUrl);

  // 3. Meta Description & Title
  const metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) metaTitle.setAttribute('content', routeInfo.title);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', routeInfo.desc);

  // 4. Open Graph Tags
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', routeInfo.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', routeInfo.desc);

  // 5. Twitter Card Tags
  const twUrl = document.querySelector('meta[name="twitter:url"]');
  if (twUrl) twUrl.setAttribute('content', canonicalUrl);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', routeInfo.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', routeInfo.desc);
}

export default function App() {
  const initialRoute = resolveCurrentRoute();
  const [currentPage, setCurrentPage] = useState<string>(initialRoute.page);
  const [activeSectionId, setActiveSectionId] = useState<string>(initialRoute.sectionId);
  const [currentPath, setCurrentPath] = useState<string>(initialRoute.path);

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
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);

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

  // Sync route and metadata on initial load and navigation
  useEffect(() => {
    const route = routeMap[currentPath] || routeMap['/'];
    updateDocumentMetadata(route);
  }, [currentPath]);

  // Listen for browser popstate and hashchange navigation
  useEffect(() => {
    const handleLocationChange = () => {
      const resolved = resolveCurrentRoute();
      setCurrentPage(resolved.page);
      setActiveSectionId(resolved.sectionId);
      setCurrentPath(resolved.path);
    };

    window.addEventListener('popstate', handleLocationChange);
    window.addEventListener('hashchange', handleLocationChange);
    return () => {
      window.removeEventListener('popstate', handleLocationChange);
      window.removeEventListener('hashchange', handleLocationChange);
    };
  }, []);

  const navigateToPage = (page: string, sectionId?: string, explicitPath?: string) => {
    let targetPath = explicitPath;
    if (!targetPath) {
      if (page === 'home') targetPath = '/';
      else if (page === 'services') {
        if (sectionId === 'service-pillar-1') targetPath = '/services/esia';
        else if (sectionId === 'service-pillar-2') targetPath = '/services/resettlement-action-plans';
        else if (sectionId === 'service-pillar-3') targetPath = '/services/climate-resilience';
        else if (sectionId === 'service-pillar-4') targetPath = '/services/environmental-audits';
        else if (sectionId === 'service-pillar-5') targetPath = '/services/esdd-esg';
        else if (sectionId === 'service-pillar-6') targetPath = '/services/eshsrim-training';
        else targetPath = '/services';
      } else if (page === 'about') {
        if (sectionId === 'about-director') targetPath = '/team';
        else if (sectionId === 'about-field') targetPath = '/projects';
        else targetPath = '/about';
      } else {
        targetPath = `/${page}`;
      }
    }

    setCurrentPage(page);
    setActiveSectionId(sectionId || 'all');
    setCurrentPath(targetPath);

    if (window.location.pathname !== targetPath) {
      try {
        window.history.pushState(null, '', targetPath);
      } catch {
        window.location.hash = page;
      }
    }

    const route = routeMap[targetPath] || routeMap['/'];
    updateDocumentMetadata(route);

    if (sectionId && sectionId !== 'all') {
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

      <CompanyProfileModal
        isOpen={isCompanyProfileOpen}
        onClose={() => setIsCompanyProfileOpen(false)}
        onRequestProposal={() => {
          setIsCompanyProfileOpen(false);
          handleOpenAdvisoryProposal();
        }}
      />
    </div>
  );
}
