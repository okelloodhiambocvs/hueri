/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { serviceSummaries, getServiceDetailPath } from './serviceRoutes';

export interface ServiceDropdownItem {
  id: string;
  slug: string;
  label: string;
  description: string;
  path: string;
}

export const serviceDropdownItems: ServiceDropdownItem[] = serviceSummaries.map((service) => ({
  id: service.id,
  slug: service.slug,
  label: service.title,
  description: service.snippet,
  path: getServiceDetailPath(service.slug)
}));

export function getServiceDropdownItems(): ServiceDropdownItem[] {
  return serviceDropdownItems;
}
