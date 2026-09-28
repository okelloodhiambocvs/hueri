/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { createContext, useContext, useState } from 'react';

export type Language = 'en' | 'sw';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About & Positioning',
    'nav.services': 'Services Portfolio',
    'nav.sectors': 'Sectors We Serve',
    'nav.lifecycle': 'Project Lifecycle',
    'nav.standards': 'International Standards',
    'nav.partnerships': 'Global Partnerships',
    'nav.experience': 'Experience',
    'nav.faq': 'FAQ',
    'nav.contact': 'Contact & Enquiries',
    'nav.request_proposal': 'REQUEST PROPOSAL',
    'nav.partner_with_us': 'PARTNER WITH US',

    // Hero Section
    'hero.badge': 'ENVIRONMENTAL & SOCIAL IMPACT CONSULTANTS • KENYA & AFRICA',
    'hero.title_part1': 'Enabling Responsible,',
    'hero.title_part2': 'Climate-Resilient Development Across Africa',
    'hero.desc': 'Hope Urban Environmental and Research Investments Limited (HUERI Limited) is an independent Africa-based environmental, social, health, safety, climate, sustainability and development advisory firm. Combining deep African context with internationally aligned standards (IFC, World Bank, AfDB, Equator Principles) to build development that lasts.',
    'hero.btn_services': 'Explore 9 Practice Areas',
    'hero.btn_proposal': 'Request Advisory Proposal',
    'hero.btn_partner': 'Global Partnership Enquiries',
    'hero.sh_title': 'African Expertise • Global Partnerships',
    'hero.sh_subtitle': 'Headquartered in Kisumu, Kenya • Serving Africa • Open to Global Partnerships',

    // Hero Stats
    'stat.projects': 'Selected Kenya Assignments',
    'stat.sectors': 'Core Infrastructure Sectors',
    'stat.counties': 'Kenyan Counties Reached',
    'stat.standards': 'Lender Safeguard Frameworks',
    'hero.live_metrics': 'Operational Experience & Advisory Footprint in Kenya',

    // General Words
    'gen.success': 'Success',
    'gen.submitting': 'Transmitting Data...',
    'gen.submit': 'Submit Inquiry',
    'gen.back': 'Back',
    'gen.all_rights': 'All rights reserved.',
  },
  sw: {
    // Navigation
    'nav.home': 'Mwanzo',
    'nav.about': 'Kuhusu Sisi',
    'nav.services': 'Huduma Zetu',
    'nav.sectors': 'Sekta Tunazohudumia',
    'nav.lifecycle': 'Mzunguko wa Miradi',
    'nav.standards': 'Viwango vya Kimataifa',
    'nav.partnerships': 'Ubia wa Kimataifa',
    'nav.experience': 'Uzoefu Wetu',
    'nav.faq': 'Maswali',
    'nav.contact': 'Wasiliana Nasi',
    'nav.request_proposal': 'OMBA PENDEKEZO',
    'nav.partner_with_us': 'SHIRIKIANA NASI',

    // Hero Section
    'hero.badge': 'JUKWAA LA USHAURI WA KIAFRIKA • UBIA WA KIMATAIFA',
    'hero.title_part1': 'Kuwezesha Maendeleo Endelevu',
    'hero.title_part2': 'na Ustahimilivu wa Hali ya Hewa Barani Afrika',
    'hero.desc': 'HUERI LIMITED ni kampuni huru ya ushauri wa mazingira, jamii, afya, usalama, mabadiliko ya hali ya hewa na uendelevu yenye makao makuu nchini Kenya. Tunachanganya uelewa mpana wa mazingira ya Kiafrika na viwango vya kimataifa vya fedha (IFC, Benki ya Dunia, AfDB) ili kujenga maendeleo yanayodumu.',
    'hero.btn_services': 'Tazama Nyanja 9 za Huduma',
    'hero.btn_proposal': 'Omba Pendekezo la Ushauri',
    'hero.btn_partner': 'Ushirikiano wa Kimataifa',
    'hero.sh_title': 'Utaalamu wa Kiafrika • Ubia wa Kimataifa',
    'hero.sh_subtitle': 'Makao Makuu Kisumu, Kenya • Inahudumia Afrika • Tayari kwa Ubia wa Kimataifa',

    // Hero Stats
    'stat.projects': 'Kazi Zilizoteuliwa za Kenya',
    'stat.sectors': 'Sekta Kuu za Miundombinu',
    'stat.counties': 'Kaunti za Kenya Zilizofikiwa',
    'stat.standards': 'Mifumo ya Viwango vya Kimataifa',
    'hero.live_metrics': 'Uzoefu wa Kiutendaji na Nyayo za Ushauri nchini Kenya',

    // General Words
    'gen.success': 'Imefanikiwa',
    'gen.submitting': 'Inatuma...',
    'gen.submit': 'Tuma',
    'gen.back': 'Rudi',
    'gen.all_rights': 'Haki zote zimehifadhiwa.',
  }
};

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguageState] = useState<Language>(() => {
    try {
      const stored = localStorage.getItem('hueri_lang');
      if (stored === 'en' || stored === 'sw') {
        return stored as Language;
      }
    } catch (e) {
      console.error(e);
    }
    return 'en';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    try {
      localStorage.setItem('hueri_lang', lang);
    } catch (e) {
      console.error(e);
    }
  };

  const t = (key: string): string => {
    return translations[language][key] || translations['en'][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
