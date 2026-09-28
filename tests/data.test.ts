import { describe, it, expect } from 'vitest';
import { 
  initialServices, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials, 
  initialProjects, 
  initialArticles, 
  initialResources 
} from '../src/server/seedData';

describe('Seed Data & Rebranding Integrity', () => {
  it('contains all 10 core African environmental, social & sustainability practice portfolios', () => {
    expect(initialServices.length).toBe(10);
    const serviceIds = initialServices.map(s => s.id);
    expect(serviceIds).toContain('eia-esia');
    expect(serviceIds).toContain('rap-livelihoods');
    expect(serviceIds).toContain('stakeholder-social');
    expect(serviceIds).toContain('ohs-safety');
    expect(serviceIds).toContain('climate-biodiversity');
    expect(serviceIds).toContain('esg-sustainability');
    expect(serviceIds).toContain('research-surveys');
    expect(serviceIds).toContain('waste-pollution');
    expect(serviceIds).toContain('implementation-supervision');
    expect(serviceIds).toContain('eshsrim-training');
  });

  it('ensures each practice area has detailed methodology, deliverables, and international alignment', () => {
    initialServices.forEach(service => {
      expect(service.title).toBeTruthy();
      expect(service.overview).toBeTruthy();
      expect(service.methodology.length).toBeGreaterThan(0);
      expect(service.deliverables.length).toBeGreaterThan(0);
      expect(service.benefits.length).toBeGreaterThan(0);
      expect(service.internationalAlignment?.length).toBeGreaterThan(0);
    });
  });

  it('contains 10 core African sectors', () => {
    expect(initialSectors.length).toBe(10);
    initialSectors.forEach(sector => {
      expect(sector.title).toBeTruthy();
      expect(sector.coverage.length).toBeGreaterThan(0);
      expect(sector.keyRisks.length).toBeGreaterThan(0);
    });
  });

  it('contains structured international partnership models', () => {
    expect(initialPartnershipModels.length).toBeGreaterThanOrEqual(4);
    initialPartnershipModels.forEach(model => {
      expect(model.title).toBeTruthy();
      expect(model.description).toBeTruthy();
    });
  });

  it('contains valid corporate and statutory credentials', () => {
    expect(initialCredentials.length).toBeGreaterThanOrEqual(4);
    const credRefs = initialCredentials.map(c => c.reference);
    expect(credRefs.some(r => r.includes('CPR/2014/168986'))).toBe(true);
    expect(credRefs.some(r => r.toLowerCase().includes('request') || r.toLowerCase().includes('statutory'))).toBe(true);
  });

  it('contains certified African project references', () => {
    expect(initialProjects.length).toBeGreaterThan(0);
    initialProjects.forEach(project => {
      expect(project.county).toBeTruthy();
      expect(project.client).toBeTruthy();
    });
  });

  it('contains statutory compliance articles and resource toolkits', () => {
    expect(initialArticles.length).toBeGreaterThan(0);
    expect(initialResources.length).toBeGreaterThan(0);
  });
});
