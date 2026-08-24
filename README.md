# HUERI LIMITED (Hope Urban Environmental & Research Investments Limited)

Official corporate, advisory, and technical portal for HUERI LIMITED — Kenya's premier environmental, social, and sustainability consultancy headquartered in Milimani Estate, Kisumu, Kenya, operating across East Africa and the continent.

- **NEMA Firm Licence:** `NEMA/ENVIS/ELi/F0026`
- **Corporate Registration:** `CPR/2014/168986` (Incorporated 2014)
- **Key Practice Areas:** ESIA, SEA, Resettlement Action Plans (RAP), OHS Audits, Climate Adaptation, ESG Due Diligence, Hydrogeological Surveys, and International DFI Safeguards (World Bank ESF, IFC PS, AfDB, EIB).

---

## Features & Hardening

1. **Interactive & Responsive Layout:**
   - Multi-page navigation (Home, Services, Sectors, Lifecycle & Standards, Global Partnerships, About Us, Contact & FAQ).
   - Fast, theme-aware (Light/Dark mode) with fluid typography and mobile-first touch UI.
   - Separate floating inquiry channel and back-to-top triggers that avoid overlapping.

2. **Enterprise Input Purification & Defense:**
   - Client-side & Server-side input sanitization (`src/utils/security.ts` and `src/server/securityMiddleware.ts`).
   - Protection against Cross-Site Scripting (XSS), script/iframe injections, HTML stripping, dangerous protocols (`javascript:`, `data:`).
   - Strict RFC email validation, international phone formatting, and string length truncation.
   - Recursive prototype pollution prevention (`__proto__`, `constructor`, `prototype`).
   - Anti-bot invisible honeypot fields on all entry forms.

3. **Backend Security & Tamperproofing:**
   - Express server with security headers (`X-Content-Type-Options: nosniff`, `X-Frame-Options: SAMEORIGIN`, `X-XSS-Protection`, `Referrer-Policy`, `Permissions-Policy`, `COOP`, `CORP`).
   - IP-based rate limiting on sensitive consultation and submission endpoints with automatic cache expiration.
   - Protected Admin API endpoints using Bearer / `x-admin-key` authentication.

---

## Tech Stack

- **Frontend:** React 19, TypeScript 5.8, Vite 6, Tailwind CSS 4, Lucide Icons, Recharts, Framer Motion
- **Backend:** Node.js 22+, Express 4.21, TypeScript
- **Testing:** Vitest 4 with comprehensive security, sanitization, and data integrity test suites
- **Build Engine:** Vite + esbuild

---

## Quick Start Guide

### 1. Prerequisites
- Node.js 20+ (Node.js 22 LTS recommended)
- npm 10+ or bun

### 2. Installation
```bash
# Clone the repository
git clone https://github.com/okelloodhiambocvs/hueri.git

# Navigate into project directory
cd hueri

# Install all dependencies
npm install
```

### 3. Environment Setup
Copy the example environment file:
```bash
cp .env.example .env
```
Configure your keys in `.env` as required (e.g. `ADMIN_API_KEY`, `PORT=3000`).

### 4. Running the Development Server
```bash
npm run dev
```
Open `http://localhost:3000` in your browser.

---

## Verification & Quality Assurance Commands

Run all validation scripts before pushing or deploying:

```bash
# 1. Run full unit & security test suite (Vitest)
npm test

# 2. Type-check & lint with TypeScript compiler
npm run lint

# 3. Security audit of dependencies
npm audit

# 4. Production build (Vite + Node/Express server bundle)
npm run build

# 5. Start production server locally
npm start
```

---

## Deployment Instructions

### Deploying to Railway / Render / DigitalOcean / Cloud Run
1. Connect your GitHub repository (`okelloodhiambocvs/hueri`).
2. Build command:
   ```bash
   npm run build
   ```
3. Start command:
   ```bash
   npm start
   ```
4. Configure environment variables (`PORT=3000`, `NODE_ENV=production`, `ADMIN_API_KEY`).

---

## License & Copyright

© 2026 HUERI LIMITED (Hope Urban Environmental and Research Investments Limited). All rights reserved.
Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100).
