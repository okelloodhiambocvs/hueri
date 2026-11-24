/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { initialProjects } from '../server/seedData';
import { Project } from '../types';

export interface ProjectSummaryLink {
  id: string;
  slug: string;
  imageKey: string;
  title: string;
  client: string;
  location: string;
  year: string;
}

export const projectSummaries: ProjectSummaryLink[] = [
  {
    id: 'p-wema-housing',
    slug: 'multi-storey-residential-housing-esia',
    imageKey: 'p-wema-housing',
    title: 'Multi-Storey Residential Housing Development ESIA',
    client: 'Wema Magharibi Ltd',
    location: 'Kisumu Urban Centre, Kenya',
    year: '2024–2025'
  },
  {
    id: 'p-makasembo',
    slug: 'makasembo-estate-housing-rap-eia',
    imageKey: 'p-makasembo',
    title: 'Makasembo Estate Multi-Storey Housing RAP & EIA',
    client: 'Local Authorities Pension Trust (LAPFUND)',
    location: 'Kisumu City, Kenya',
    year: '2020–Present'
  },
  {
    id: 'p-structural-monitoring',
    slug: 'high-rise-structural-ohs-oversight',
    imageKey: 'p-structural-monitoring',
    title: 'High-Rise Structural Concrete & OHS Safety Oversight',
    client: 'Regional Urban Developers Consortium',
    location: 'Western Kenya Region',
    year: '2024–Present'
  },
  {
    id: 'p-flloca',
    slug: 'flloca-climate-resilient-infrastructure',
    imageKey: 'p-flloca',
    title: 'FLLoCA Climate-Resilient Infrastructure Assessments',
    client: 'County Government of Siaya',
    location: 'Siaya County, Kenya',
    year: '2023–Present'
  },
  {
    id: 'p-kisumu-climate',
    slug: 'kisumu-county-climate-vulnerability-assessment',
    imageKey: 'p-kisumu-climate',
    title: 'Kisumu County Climate Change Vulnerability Assessment',
    client: 'County Government of Kisumu',
    location: 'Kisumu County, Kenya',
    year: '2023'
  },
  {
    id: 'p-wells-energy',
    slug: 'wells-energy-petroleum-esia-audits',
    imageKey: 'p-wells-energy',
    title: 'ESIA & Statutory Environmental Audits for Petroleum Stations',
    client: 'Wells Energy Limited',
    location: 'Multiple Sites Across Kenya',
    year: '2024–Present'
  },
  {
    id: 'p-kisip-ii',
    slug: 'kisip-ii-informal-settlements-safeguards',
    imageKey: 'p-kisip-ii',
    title: 'Kenya Informal Settlements Improvement Project II (KISIP II)',
    client: 'County Government of Kisumu',
    location: 'Informal Settlements, Western Kenya',
    year: '2022–Present'
  }
];

export function getProjectSummaryByIdOrSlug(idOrSlug: string): ProjectSummaryLink {
  const normalized = (idOrSlug || '').trim().toLowerCase();
  return (
    projectSummaries.find((p) => p.id === normalized || p.slug === normalized) ||
    projectSummaries[0]
  );
}

export function getProjectDetailByIdOrSlug(idOrSlug: string): Project {
  const summary = getProjectSummaryByIdOrSlug(idOrSlug);
  const found = initialProjects.find((p) => p.id === summary.id);
  if (found) {
    return {
      ...found,
      title: summary.title,
      client: summary.client,
      location: summary.location
    };
  }
  return initialProjects[0];
}

export function getProjectDetailPath(idOrSlug: string): string {
  const summary = getProjectSummaryByIdOrSlug(idOrSlug);
  return `/projects/details/${summary.slug}`;
}

export function resolveProjectSlugFromPath(pathname: string): string | null {
  const cleaned = (pathname || '').replace(/\/$/, '');
  const prefix = '/projects/details/';
  if (cleaned.startsWith(prefix)) {
    const slug = cleaned.slice(prefix.length).trim();
    return slug || null;
  }
  return null;
}

export function splitProjectHeroTitle(title: string): { upper: string; lower: string } {
  const words = (title || '').trim().split(/\s+/).filter(Boolean);
  if (words.length <= 1) {
    return { upper: title.trim(), lower: '' };
  }
  const mid = Math.ceil(words.length / 2);
  return {
    upper: words.slice(0, mid).join(' '),
    lower: words.slice(mid).join(' ')
  };
}
