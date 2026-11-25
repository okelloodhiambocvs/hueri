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
import ServiceDetailPage from './components/pages/ServiceDetailPage';
import ProjectDetailPage from './components/pages/ProjectDetailPage';
import LegalPoliciesPage from './components/pages/LegalPoliciesPage';
import FAQPage from './components/pages/FAQPage';
import ProposalModal from './components/ProposalModal';
import QuickContactFloat from './components/QuickContactFloat';
import AdminDrawer from './components/AdminDrawer';
import CompanyProfileModal from './components/CompanyProfileModal';
import SectionJourneyNav from './components/SectionJourneyNav';
import { fetchPublicStats } from './utils/apiClient';
import { SurfaceTone } from './utils/sectionTransitions';
import {
  getServiceDetailByIdOrSlug,
  getServiceDetailPath,
  resolveServiceSlugFromPath
} from './utils/serviceRoutes';
import {
  getProjectDetailByIdOrSlug,
  getProjectDetailPath,
  resolveProjectSlugFromPath
} from './utils/projectRoutes';

interface RouteInfo {
  page: string;
  sectionId: string;
  path: string;
  title: string;
  desc: string;
  keywords?: string;
}

const routeMap: Record<string, RouteInfo> = {
  '/': {
    page: 'home',
    sectionId: 'all',
    path: '/',
    title: 'HUERI Limited | Environmental Consultants Kenya & Africa',
    desc: 'Kenya-based environmental, social, and ESG consultancy delivering ESIA, RAP, and statutory audits across Africa and global partnerships.'
  },
  '/about': {
    page: 'about',
    sectionId: 'all',
    path: '/about',
    title: 'About HUERI Limited | African Environmental Advisory',
    desc: 'Rooted in Kenya since 2014, HUERI Limited delivers ESIA, RAP, and international safeguards across Africa and global partnerships.'
  },
  '/team': {
    page: 'about',
    sectionId: 'about-director',
    path: '/team',
    title: 'Executive Leadership & Experts | HUERI Limited Africa',
    desc: 'Meet HUERI Limited\'s certified NEMA Lead Experts and safeguards specialists led by Managing Director Belinda Nyakinya across Africa.'
  },
  '/services': {
    page: 'services',
    sectionId: 'all',
    path: '/services',
    title: 'Environmental & ESG Services | HUERI Limited Africa',
    desc: 'Explore ESIA licensing, RAP, annual environmental audits, OHS, climate resilience, and World Bank / IFC lender due diligence across Africa.'
  },
  '/services/esia': {
    page: 'services',
    sectionId: 'service-pillar-1',
    path: '/services/esia',
    title: 'Statutory ESIA & Licensing | HUERI Limited Kenya & Africa',
    desc: 'Comprehensive Environmental & Social Impact Assessments (ESIA), SEA, and C-ESMP compliance plans for projects across Kenya and Africa.'
  },
  '/services/resettlement-action-plans': {
    page: 'services',
    sectionId: 'service-pillar-2',
    path: '/services/resettlement-action-plans',
    title: 'Resettlement Action Plans (RAP) | HUERI Limited Africa',
    desc: 'Resettlement Action Plans, socio-economic censuses, asset valuation, livelihood restoration, and stakeholder barazas across Kenya and Africa.'
  },
  '/services/climate-resilience': {
    page: 'services',
    sectionId: 'service-pillar-3',
    path: '/services/climate-resilience',
    title: 'Climate Resilience & Ecology | HUERI Limited Africa',
    desc: 'Climate vulnerability profiling, GHG accounting, hydrological risk modeling, biodiversity baselines, and resilience planning across Africa.'
  },
  '/services/environmental-audits': {
    page: 'services',
    sectionId: 'service-pillar-4',
    path: '/services/environmental-audits',
    title: 'Environmental Compliance Audits | HUERI Limited Africa',
    desc: 'Annual statutory NEMA environmental audits, EMCA compliance monitoring, and corrective action plans for facilities in Kenya and Africa.'
  },
  '/services/ohs': {
    page: 'services',
    sectionId: 'service-pillar-4',
    path: '/services/ohs',
    title: 'Occupational Health & Safety Audits | HUERI Limited',
    desc: 'DOSHS workplace safety audits, hazard identification and risk assessments, and OSHA compliance oversight across Kenya and Africa.'
  },
  '/services/esdd-esg': {
    page: 'services',
    sectionId: 'service-pillar-5',
    path: '/services/esdd-esg',
    title: 'ESG & Lender Due Diligence (ESDD) | HUERI Limited',
    desc: 'Independent ESDD, World Bank ESF, IFC Performance Standards, and AfDB Integrated Safeguards advisory for projects across Africa.'
  },
  '/services/eshsrim-training': {
    page: 'services',
    sectionId: 'service-pillar-6',
    path: '/services/eshsrim-training',
    title: 'ESHSRIM Procedures Training | HUERI Limited Africa',
    desc: 'Practical ESHSRIM procedures training, site inspection toolkits, and safeguards capacity building for teams across Kenya and Africa.'
  },
  '/sectors': {
    page: 'sectors',
    sectionId: 'all',
    path: '/sectors',
    title: 'Infrastructure & Energy Sectors | HUERI Limited Africa',
    desc: 'Environmental and social advisory across renewable energy, water, transport corridors, urban housing, and mining in Kenya and Africa.'
  },
  '/lifecycle': {
    page: 'lifecycle',
    sectionId: 'all',
    path: '/lifecycle',
    title: 'Project Lifecycle & Safeguards | HUERI Limited Africa',
    desc: '12-stage project safeguards roadmap aligning Kenyan permitting with World Bank ESF, IFC Performance Standards, and AfDB benchmarks.'
  },
  '/partnerships': {
    page: 'partnerships',
    sectionId: 'all',
    path: '/partnerships',
    title: 'African & Global Partnerships | HUERI Limited',
    desc: 'Partner with HUERI Limited for African tender consortia, joint ventures, subconsultancy, and in-country safeguards delivery.'
  },
  '/projects': {
    page: 'about',
    sectionId: 'about-field',
    path: '/projects',
    title: 'Track Record & Assignments | HUERI Limited Africa',
    desc: 'Proven portfolio of ESIA clearances, RAP dossiers, climate assessments, and safety audits delivered across Kenya and Africa.'
  },
  '/contact': {
    page: 'contact',
    sectionId: 'all',
    path: '/contact',
    title: 'Contact HUERI Limited | Kenya & Pan-African Advisory',
    desc: 'Contact HUERI Limited in Kisumu, Kenya for ESIA proposals, environmental audits, pan-African consortia, and global partnerships.'
  },
  '/privacy-policy': {
    page: 'privacy',
    sectionId: 'all',
    path: '/privacy-policy',
    title: 'Privacy Policy | HUERI Limited Kenya & Africa',
    desc: 'Review HUERI Limited\'s data protection and privacy practices under the Kenya Data Protection Act, 2019 and international standards.'
  },
  '/terms-and-conditions': {
    page: 'terms',
    sectionId: 'all',
    path: '/terms-and-conditions',
    title: 'Terms & Conditions | HUERI Limited Kenya & Africa',
    desc: 'Read the terms of use, professional advisory standards, and governance commitments of HUERI Limited across Africa and globally.'
  },
  '/faq': {
    page: 'faq',
    sectionId: 'all',
    path: '/faq',
    title: 'Frequently Asked Questions | HUERI Limited Africa',
    desc: 'Answers on HUERI Limited\'s NEMA licensing, World Bank and IFC standards, ESIA timelines, and pan-African partnership models.'
  }
};

function resolveCurrentRoute(): { page: string; sectionId: string; path: string } {
  if (typeof window === 'undefined') {
    return { page: 'home', sectionId: 'all', path: '/' };
  }

  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  const serviceSlug = resolveServiceSlugFromPath(pathname);
  if (serviceSlug) {
    return {
      page: 'service-detail',
      sectionId: serviceSlug,
      path: pathname
    };
  }

  const projectSlug = resolveProjectSlugFromPath(pathname);
  if (projectSlug) {
    return {
      page: 'project-detail',
      sectionId: projectSlug,
      path: pathname
    };
  }

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
    if (hash === 'privacy') return { page: 'privacy', sectionId: 'all', path: '/privacy-policy' };
    if (hash === 'terms') return { page: 'terms', sectionId: 'all', path: '/terms-and-conditions' };
    if (hash === 'faq') return { page: 'faq', sectionId: 'all', path: '/faq' };
    if (hash === 'home') return { page: 'home', sectionId: 'all', path: '/' };
  }

  return { page: 'home', sectionId: 'all', path: '/' };
}

function clampMetaDescription(text: string, maxLength = 158): string {
  const clean = (text || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= maxLength) return clean;
  return `${clean.slice(0, maxLength - 1).trimEnd()}…`;
}

function formatSeoTitle(rawTitle: string, brandSuffix = 'HUERI Limited', maxLength = 64): string {
  const clean = (rawTitle || '').replace(/\s+/g, ' ').trim();
  const full = `${clean} | ${brandSuffix}`;
  if (full.length <= maxLength) return full;
  const maxBase = maxLength - (` | ${brandSuffix}`).length;
  const shortened = clean.slice(0, Math.max(20, maxBase - 1)).replace(/\s+\S*$/, '').trimEnd();
  return `${shortened || clean.slice(0, maxBase)} | ${brandSuffix}`;
}

function updateBreadcrumbSchema(routeInfo: RouteInfo, canonicalUrl: string) {
  const scriptId = 'dynamic-breadcrumb-ld';
  let scriptEl = document.getElementById(scriptId) as HTMLScriptElement | null;

  if (routeInfo.path === '/') {
    if (scriptEl) scriptEl.remove();
    return;
  }

  const label = routeInfo.title.split('|')[0].trim();
  const items: Array<{ '@type': string; position: number; name: string; item: string }> = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Home',
      item: 'https://www.hueriafrica.com/'
    }
  ];

  if (routeInfo.path.startsWith('/services/') && routeInfo.path !== '/services') {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Services',
      item: 'https://www.hueriafrica.com/services'
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: label,
      item: canonicalUrl
    });
  } else if (routeInfo.path.startsWith('/projects/')) {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: 'Projects',
      item: 'https://www.hueriafrica.com/projects'
    });
    items.push({
      '@type': 'ListItem',
      position: 3,
      name: label,
      item: canonicalUrl
    });
  } else {
    items.push({
      '@type': 'ListItem',
      position: 2,
      name: label,
      item: canonicalUrl
    });
  }

  if (!scriptEl) {
    scriptEl = document.createElement('script');
    scriptEl.id = scriptId;
    scriptEl.type = 'application/ld+json';
    document.head.appendChild(scriptEl);
  }

  scriptEl.textContent = JSON.stringify({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items
  });
}

function updateDocumentMetadata(routeInfo: RouteInfo) {
  const canonicalUrl = `https://www.hueriafrica.com${routeInfo.path === '/' ? '/' : routeInfo.path}`;
  const description = clampMetaDescription(routeInfo.desc);

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

  // 3. Meta Description, Title & Keywords
  const metaTitle = document.querySelector('meta[name="title"]');
  if (metaTitle) metaTitle.setAttribute('content', routeInfo.title);

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute('content', description);

  if (routeInfo.keywords) {
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) metaKeywords.setAttribute('content', routeInfo.keywords);
  }

  // 4. Open Graph Tags
  const ogUrl = document.querySelector('meta[property="og:url"]');
  if (ogUrl) ogUrl.setAttribute('content', canonicalUrl);

  const ogTitle = document.querySelector('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute('content', routeInfo.title);

  const ogDesc = document.querySelector('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute('content', description);

  const ogAlt = document.querySelector('meta[property="og:image:alt"]');
  if (ogAlt) ogAlt.setAttribute('content', `${routeInfo.title} — Environmental & Safeguards Advisory across Kenya and Africa`);

  // 5. Twitter Card Tags
  const twUrl = document.querySelector('meta[name="twitter:url"]');
  if (twUrl) twUrl.setAttribute('content', canonicalUrl);

  const twTitle = document.querySelector('meta[name="twitter:title"]');
  if (twTitle) twTitle.setAttribute('content', routeInfo.title);

  const twDesc = document.querySelector('meta[name="twitter:description"]');
  if (twDesc) twDesc.setAttribute('content', description);

  // 6. BreadcrumbList Schema
  updateBreadcrumbSchema(routeInfo, canonicalUrl);
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
  const [proposalTab, setProposalTab] = useState<'proposal' | 'tor' | 'partnership' | 'general'>('proposal');
  const [prefilledScope, setPrefilledScope] = useState<string | undefined>(undefined);
  const [isAdminOpen, setIsAdminOpen] = useState(false);
  const [isCompanyProfileOpen, setIsCompanyProfileOpen] = useState(false);
  const [lifecycleTab, setLifecycleTab] = useState<'lifecycle' | 'standards'>('lifecycle');

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
    const serviceSlug = resolveServiceSlugFromPath(currentPath);
    if (serviceSlug) {
      const detail = getServiceDetailByIdOrSlug(serviceSlug);
      updateDocumentMetadata({
        page: 'service-detail',
        sectionId: serviceSlug,
        path: currentPath,
        title: formatSeoTitle(detail.title),
        desc: `${detail.shortDescription} Delivered in Kenya and across Africa.`,
        keywords: `${detail.title}, HUERI Limited, Environmental Consultants Kenya, Pan-African ESG Advisory, World Bank ESF, IFC Performance Standards`
      });
      return;
    }
    const projectSlug = resolveProjectSlugFromPath(currentPath);
    if (projectSlug) {
      const detail = getProjectDetailByIdOrSlug(projectSlug);
      updateDocumentMetadata({
        page: 'project-detail',
        sectionId: projectSlug,
        path: currentPath,
        title: formatSeoTitle(detail.title),
        desc: detail.assignmentScope,
        keywords: `${detail.title}, ${detail.location}, HUERI Limited Projects, Environmental & Social Safeguards Africa`
      });
      return;
    }
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
      else if (page === 'service-detail') {
        targetPath = getServiceDetailPath(sectionId || 'eia-esia');
      } else if (page === 'project-detail') {
        targetPath = getProjectDetailPath(sectionId || 'p-wema-housing');
      } else if (page === 'services') {
        if (sectionId === 'service-pillar-1') targetPath = '/services/esia';
        else if (sectionId === 'service-pillar-2') targetPath = '/services/resettlement-action-plans';
        else if (sectionId === 'service-pillar-3') targetPath = '/services/climate-resilience';
        else if (sectionId === 'service-pillar-4') targetPath = '/services/environmental-audits';
        else if (sectionId === 'service-pillar-5') targetPath = '/services/esdd-esg';
        else targetPath = '/services';
      } else if (page === 'about') {
        if (sectionId === 'about-director') targetPath = '/team';
        else if (sectionId === 'about-field') targetPath = '/projects';
        else targetPath = '/about';
      } else if (page === 'privacy') {
        targetPath = '/privacy-policy';
      } else if (page === 'terms') {
        targetPath = '/terms-and-conditions';
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

    if (page === 'service-detail') {
      const detail = getServiceDetailByIdOrSlug(sectionId || 'eia-esia');
      updateDocumentMetadata({
        page: 'service-detail',
        sectionId: sectionId || 'eia-esia',
        path: targetPath,
        title: formatSeoTitle(detail.title),
        desc: `${detail.shortDescription} Delivered in Kenya and across Africa.`,
        keywords: `${detail.title}, HUERI Limited, Environmental Consultants Kenya, Pan-African ESG Advisory, World Bank ESF, IFC Performance Standards`
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    if (page === 'project-detail') {
      const detail = getProjectDetailByIdOrSlug(sectionId || 'p-wema-housing');
      updateDocumentMetadata({
        page: 'project-detail',
        sectionId: sectionId || 'p-wema-housing',
        path: targetPath,
        title: formatSeoTitle(detail.title),
        desc: detail.assignmentScope,
        keywords: `${detail.title}, ${detail.location}, HUERI Limited Projects, Environmental & Social Safeguards Africa`
      });
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
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

  const loadStats = () => {
    fetchPublicStats().then((data) => {
      if (data) {
        setStats(prev => ({ ...prev, ...data }));
      }
    });
  };

  useEffect(() => {
    loadStats();
  }, []);

  const handleOpenAdvisoryProposal = (scope?: string) => {
    setProposalTab('proposal');
    setPrefilledScope(scope);
    setIsProposalOpen(true);
  };

  const handleOpenPartnershipModal = (modelTitle?: string) => {
    setProposalTab('partnership');
    setPrefilledScope(modelTitle);
    setIsProposalOpen(true);
  };

  const handleLeadRecorded = () => {
    loadStats();
  };

  const getFooterFromTone = (): SurfaceTone => {
    switch (currentPage) {
      case 'about':
      case 'services':
      case 'project-detail':
      case 'partnerships':
      case 'faq':
        return 'green';
      case 'lifecycle':
        return lifecycleTab === 'standards' ? 'green' : 'white';
      default:
        return 'white';
    }
  };

  return (
    <div className="min-h-screen bg-white dark:bg-[#041B44] text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans antialiased selection:bg-[#006B22] selection:text-white flex flex-col justify-between">
      <Navbar 
        currentPage={currentPage}
        onNavigate={navigateToPage}
        onRequestProposal={() => handleOpenAdvisoryProposal()}
        onOpenPartnership={() => handleOpenPartnershipModal()}
        onOpenAdmin={() => setIsAdminOpen(true)}
        onOpenPolicy={(tab) => navigateToPage(tab === 'terms' ? 'terms' : 'privacy')}
        theme={theme} 
        onToggleTheme={toggleTheme} 
      />

      <SectionJourneyNav currentPage={currentPage} />

      <main className="flex-grow pt-[72px] sm:pt-[76px]">
        <div key={`${currentPage}-${activeSectionId}`} className="animate-page-enter">
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
              onLeadSubmit={handleLeadRecorded}
            />
          )}

          {currentPage === 'service-detail' && (
            <ServiceDetailPage
              serviceIdOrSlug={activeSectionId}
              onNavigate={navigateToPage}
              onRequestProposal={handleOpenAdvisoryProposal}
              onLeadSubmit={handleLeadRecorded}
            />
          )}

          {currentPage === 'project-detail' && (
            <ProjectDetailPage
              projectIdOrSlug={activeSectionId}
              onNavigate={navigateToPage}
              onRequestProposal={handleOpenAdvisoryProposal}
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
              onTabChange={setLifecycleTab}
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
              onLeadSubmit={handleLeadRecorded}
            />
          )}

          {currentPage === 'faq' && (
            <FAQPage onNavigate={navigateToPage} />
          )}

          {(currentPage === 'privacy' || currentPage === 'terms') && (
            <LegalPoliciesPage
              initialPolicy={currentPage === 'terms' ? 'terms' : 'privacy'}
              onNavigate={navigateToPage}
            />
          )}
        </div>
      </main>

      <Footer 
        onNavigate={navigateToPage}
        onOpenPolicy={(tab) => navigateToPage(tab === 'terms' ? 'terms' : 'privacy')}
        onRequestProposal={() => handleOpenAdvisoryProposal()}
        onOpenPartnership={() => handleOpenPartnershipModal()}
        fromTone={getFooterFromTone()}
      />

      <QuickContactFloat onLeadSubmit={handleLeadRecorded} />

      <ProposalModal 
        isOpen={isProposalOpen}
        initialTab={proposalTab}
        prefilledScope={prefilledScope}
        onClose={() => setIsProposalOpen(false)}
        onLeadSubmit={handleLeadRecorded}
      />

      <AdminDrawer 
        isOpen={isAdminOpen}
        onClose={() => setIsAdminOpen(false)}
        onUpdateStats={loadStats}
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
