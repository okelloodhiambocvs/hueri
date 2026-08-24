/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * HUERI Express Server
 * Consolidated, High-Performance, and Security-Hardened Backend
 */

import express from 'express';
import path from 'path';
import { createServer as createViteServer } from 'vite';
import { 
  initDatabase, 
  saveDatabase, 
  initialTeam, 
  initialSectors, 
  initialPartnershipModels, 
  initialCredentials 
} from './src/server/data';
import {
  setSecurityHeaders,
  rateLimiter,
  sanitizeRequestBody,
  requireAdminAuth
} from './src/server/securityMiddleware';
import { 
  sanitizeString, 
  sanitizeText, 
  sanitizeEmail, 
  sanitizePhone, 
  isValidEmail, 
  isValidPhone 
} from './src/utils/security';

let db = initDatabase();

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 1. Security Headers & Rate Limiting
  app.use(setSecurityHeaders);
  app.use(express.json({ limit: '500kb' }));
  app.use(express.urlencoded({ extended: true, limit: '500kb' }));
  app.use(sanitizeRequestBody);

  // 2. Public Read API Endpoints
  app.get('/api/services', (_req, res) => {
    res.json(db.services || []);
  });

  app.get('/api/sectors', (_req, res) => {
    res.json(initialSectors || []);
  });

  app.get('/api/partnerships', (_req, res) => {
    res.json(initialPartnershipModels || []);
  });

  app.get('/api/credentials', (_req, res) => {
    res.json(initialCredentials || []);
  });

  app.get('/api/projects', (_req, res) => {
    res.json(db.projects || []);
  });

  app.get('/api/articles', (_req, res) => {
    res.json(db.articles || []);
  });

  app.get('/api/resources', (_req, res) => {
    res.json(db.resources || []);
  });

  app.post('/api/resources/:id/download', rateLimiter(30, 60000), (req, res) => {
    const resourceId = sanitizeString(req.params.id, 50);
    const list = db.resources || [];
    const item = list.find((r: any) => r.id === resourceId);
    if (item) {
      item.downloadCount = (item.downloadCount || 0) + 1;
      saveDatabase(db);
      res.json({ success: true, count: item.downloadCount });
    } else {
      res.status(404).json({ error: "Resource not found" });
    }
  });

  app.get('/api/team', (_req, res) => {
    res.json(initialTeam);
  });

  // 3. Purified Lead & Consultation Submissions
  app.post('/api/leads', rateLimiter(15, 300000), (req, res) => {
    const raw = req.body || {};

    // Bot detection honeypot: if hidden field is filled, silently return success without storing
    if (raw.website_hp && String(raw.website_hp).trim().length > 0) {
      return res.status(200).json({ success: true, lead: { id: "l_bot_filtered" } });
    }

    const fullName = sanitizeString(raw.fullName, 100);
    const email = sanitizeEmail(raw.email);
    const phone = sanitizePhone(raw.phone);
    const company = sanitizeString(raw.company, 120);
    const serviceNeeded = sanitizeString(raw.serviceNeeded, 150) || "General Advisory / Consultation";
    const message = sanitizeText(raw.message, 3000);

    if (!fullName || fullName.length < 2) {
      return res.status(400).json({ error: "Full Name is required (minimum 2 characters)." });
    }

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "A valid corporate or institutional email is required." });
    }

    if (phone && !isValidPhone(phone)) {
      return res.status(400).json({ error: "Invalid telephone number format." });
    }

    const newLead = {
      id: "l_" + Date.now() + "_" + Math.random().toString(36).substring(2, 7),
      fullName,
      email,
      phone,
      company,
      serviceNeeded,
      message,
      status: "New",
      date: new Date().toISOString()
    };

    if (!Array.isArray(db.leads)) {
      db.leads = [];
    }

    db.leads.unshift(newLead);
    // Keep max 500 leads in local store to prevent bloat
    if (db.leads.length > 500) {
      db.leads = db.leads.slice(0, 500);
    }
    saveDatabase(db);
    
    res.status(201).json({ success: true, lead: newLead });
  });

  // 4. Newsletter Subscription with Input Purification
  app.post('/api/newsletter', rateLimiter(10, 300000), (req, res) => {
    const email = sanitizeEmail(req.body?.email);

    if (!email || !isValidEmail(email)) {
      return res.status(400).json({ error: "A valid email address is required." });
    }

    if (!Array.isArray(db.newsletter)) {
      db.newsletter = [];
    }

    if (!db.newsletter.includes(email)) {
      db.newsletter.push(email);
      saveDatabase(db);
    }
    res.json({ success: true, message: "Subscribed successfully" });
  });

  // Stats Endpoint
  app.get('/api/stats', (_req, res) => {
    res.json({
      projectsCount: (db.projects || []).length,
      leadsCount: (db.leads || []).length,
      applicantsCount: (db.applicants || []).length,
      newsletterCount: (db.newsletter || []).length,
      consultantsCount: initialTeam.length
    });
  });

  // 5. Admin Endpoints (Secured by API Key / Bearer Auth)
  app.get('/api/leads', requireAdminAuth, (_req, res) => {
    res.json(db.leads || []);
  });

  app.post('/api/admin/projects', requireAdminAuth, (req, res) => {
    const p = req.body || {};
    const title = sanitizeString(p.title, 150);
    const county = sanitizeString(p.county, 80);
    const year = sanitizeString(p.year, 20);

    if (!title || !county || !year) {
      return res.status(400).json({ error: "Title, County, and Year are required." });
    }

    const newProject = {
      id: "p_" + Date.now(),
      title,
      county,
      year,
      client: sanitizeString(p.client, 120),
      category: sanitizeString(p.category, 100) || "Infrastructure & Environmental Advisory",
      status: sanitizeString(p.status, 50) || "Completed",
      description: sanitizeText(p.description, 2000),
      coordinates: p.coordinates || { x: 50, y: 50 }
    };

    if (!Array.isArray(db.projects)) {
      db.projects = [];
    }
    db.projects.push(newProject);
    saveDatabase(db);
    res.json({ success: true, project: newProject });
  });

  app.delete('/api/admin/projects/:id', requireAdminAuth, (req, res) => {
    const projectId = sanitizeString(req.params.id, 50);
    db.projects = (db.projects || []).filter((p: any) => p.id !== projectId);
    saveDatabase(db);
    res.json({ success: true });
  });

  app.put('/api/admin/leads/:id', requireAdminAuth, (req, res) => {
    const leadId = sanitizeString(req.params.id, 50);
    const status = sanitizeString(req.body?.status, 30);
    
    const lead = (db.leads || []).find((l: any) => l.id === leadId);
    if (lead) {
      lead.status = status || 'New';
      saveDatabase(db);
      res.json({ success: true, lead });
    } else {
      res.status(404).json({ error: "Lead not found" });
    }
  });

  // 6. Production vs Development Frontend Routing
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa"
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`HUERI enterprise secure server running on http://0.0.0.0:${PORT}`);
  });
}

startServer().catch((err) => {
  console.error("Critical server boot failure:", err);
});
