import path from 'path';
import fs from 'fs';
import { 
  initialServices, 
  initialProjects, 
  initialLeadershipExperience,
  initialArticles, 
  initialResources, 
  initialTeam, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials,
  initialQualityAssurance,
  initialGovernanceTiers
} from './seedData';

export { 
  initialServices, 
  initialProjects, 
  initialLeadershipExperience,
  initialArticles, 
  initialResources, 
  initialTeam, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials,
  initialQualityAssurance,
  initialGovernanceTiers
};

const DATA_DIR = path.join(process.cwd(), 'data');
const DATA_FILE = path.join(DATA_DIR, 'db.json');

export interface Database {
  leads: any[];
  applicants: any[];
  newsletter: string[];
  projects: any[];
  leadershipExperience: any[];
  articles: any[];
  services: any[];
  resources: any[];
}

export function initDatabase(): Database {
  if (!fs.existsSync(DATA_DIR)) {
    fs.mkdirSync(DATA_DIR, { recursive: true });
  }

  const fresh: Database = {
    leads: [
      {
        id: "l_seed1",
        fullName: "Samuel K. Langat",
        email: "langat.samuel@riftrealestate.co.ke",
        phone: "+254 721 410139",
        company: "Rift Valley Housing Developers",
        organization: "Rift Valley Housing Developers",
        serviceNeeded: "Environmental & Social Assessment (EIA / ESIA)",
        assignmentNature: "ESIA Study & Statutory NEMA Clearance",
        projectLocation: "Kericho County, Kenya",
        inquiryType: "Request a Technical Proposal",
        message: "We are organizing a 45-acre residential zoning parcel in Kericho. Looking for a lead NEMA consultant firm to handle ESIA and county statutory clearance proposals.",
        status: "New",
        date: "2026-06-03T14:30:00Z"
      },
      {
        id: "l_seed2",
        fullName: "Grace Muthoni",
        email: "muthoni.g@kilimafoods.org",
        phone: "+254 733 440551",
        company: "Kilima Agricultural NGO",
        organization: "Kilima Agricultural NGO",
        serviceNeeded: "Research, Surveys, GIS & Development Advisory",
        assignmentNature: "Baseline Socio-Economic & Environmental Survey",
        projectLocation: "Homa Bay County, Kenya",
        inquiryType: "General Enquiry",
        message: "Need a comprehensive baseline socio-economic research study for our dryland irrigation scheme launch in Homa Bay.",
        status: "Contacted",
        date: "2026-06-02T09:15:00Z"
      }
    ],
    applicants: [
      {
        id: "app_seed1",
        jobId: "car1",
        jobTitle: "Lead Environmental Consultant (EIA & EA Expert)",
        fullName: "Dr. Patrick Amoth",
        email: "amoth.patrick@outlook.com",
        phone: "+254 755 120930",
        coverLetter: "I have over 8 years experience leading EIA studies around Lake Victoria Basin and a valid NEMA lead registration. Keen on aligning with HUERI.",
        date: "2026-06-01T16:00:00Z"
      }
    ],
    newsletter: ["investor.relations@eastafricafund.com"],
    projects: initialProjects,
    leadershipExperience: initialLeadershipExperience,
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
