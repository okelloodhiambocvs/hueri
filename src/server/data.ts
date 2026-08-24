import path from 'path';
import fs from 'fs';
import { 
  initialServices, 
  initialProjects, 
  initialArticles, 
  initialResources, 
  initialTeam, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials 
} from './seedData';

export { 
  initialServices, 
  initialProjects, 
  initialArticles, 
  initialResources, 
  initialTeam, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials 
};

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'db.json');

export interface Database {
  leads: any[];
  applicants: any[];
  newsletter: string[];
  projects: any[];
  articles: any[];
  services: any[];
  resources: any[];
}

export function initDatabase(): Database {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  if (fs.existsSync(DATA_FILE)) {
    try {
      const fileData = fs.readFileSync(DATA_FILE, 'utf-8');
      const loaded = JSON.parse(fileData);
      return {
        leads: loaded.leads || [],
        applicants: loaded.applicants || [],
        newsletter: loaded.newsletter || [],
        projects: loaded.projects && loaded.projects.length ? loaded.projects : initialProjects,
        articles: loaded.articles && loaded.articles.length ? loaded.articles : initialArticles,
        services: loaded.services && loaded.services.length ? loaded.services : initialServices,
        resources: loaded.resources && loaded.resources.length ? loaded.resources : initialResources
      };
    } catch (e) {
      console.error('Error reading DB, re-initializing database file: ', e);
    }
  }

  const fresh: Database = {
    leads: [],
    applicants: [],
    newsletter: ["investor.relations@eastafricafund.com"],
    projects: initialProjects,
    articles: initialArticles,
    services: initialServices,
    resources: initialResources
  };

  fs.writeFileSync(DATA_FILE, JSON.stringify(fresh, null, 2), 'utf-8');
  return fresh;
}

export function saveDatabase(db: Database) {
  try {
    fs.writeFileSync(DATA_FILE, JSON.stringify(db, null, 2), 'utf-8');
  } catch (err) {
    console.error('Failed to save DB state: ', err);
  }
}
