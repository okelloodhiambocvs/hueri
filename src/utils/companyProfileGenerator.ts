/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service, Project, TeamMember, CorporateCredential, QualityAssurancePillar } from '../types';
import { initialServices, initialProjects, initialTeam, initialCredentials, initialQualityAssurance, initialLeadershipExperience } from '../server/seedData';

export function generateInstitutionalProfilePDF(
  services: Service[] = initialServices,
  projects: Project[] = initialProjects,
  team: TeamMember[] = initialTeam,
  credentials: CorporateCredential[] = initialCredentials,
  qaPillars: QualityAssurancePillar[] = initialQualityAssurance
) {
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    window.print();
    return;
  }

  const dateStr = new Date().toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const servicesContent = services.map((s, idx) => `
    <div style="margin-bottom: 16px; padding: 14px 16px; border: 1px solid #d6d0c4; border-radius: 8px; background: #faf8f5;">
      <div style="display: flex; justify-content: space-between; align-items: baseline; margin-bottom: 4px;">
        <span style="font-family: monospace; font-size: 10px; font-weight: 700; color: #0d7b48; text-transform: uppercase;">
          Practice Pillar 0${idx + 1} • ${s.practiceCategory || 'Advisory Practice'}
        </span>
        <span style="font-family: monospace; font-size: 9px; color: #64748b;">
          National & Lender Alignment
        </span>
      </div>
      <h3 style="margin: 0 0 6px 0; color: #07162c; font-size: 14px; font-weight: 700;">
        ${s.title}
      </h3>
      <p style="margin: 0 0 8px 0; font-size: 11px; color: #334155; line-height: 1.5;">
        ${s.shortDescription || s.overview}
      </p>
      ${s.deliveryModelNote ? `
        <div style="margin-bottom: 6px; padding: 4px 8px; background: #e8f3ec; border-left: 2px solid #0d7b48; font-size: 10px; color: #166534; font-family: monospace;">
          <strong>Delivery Framework:</strong> ${s.deliveryModelNote}
        </div>
      ` : ''}
      <div style="font-size: 10px; font-family: monospace; color: #07162c;">
        <strong>Key Deliverables:</strong> ${s.deliverables?.slice(0, 4).join(', ') || 'Statutory Reports, ESMP, Mitigation Schedules'}
      </div>
    </div>
  `).join('');

  const projectsContent = projects.slice(0, 6).map((p) => `
    <div style="margin-bottom: 12px; padding: 12px 14px; border: 1px solid #e2e8f0; border-radius: 6px; background: #ffffff;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 4px;">
        <span style="font-size: 12px; font-weight: 700; color: #07162c;">${p.title}</span>
        <span style="font-family: monospace; font-size: 9px; font-weight: 700; color: #0d7b48; background: #f0fdf4; padding: 2px 6px; border-radius: 4px;">
          ${p.status}
        </span>
      </div>
      <div style="font-size: 10px; font-family: monospace; color: #64748b; margin-bottom: 4px;">
        Client: <strong>${p.client}</strong> • Location: <strong>${p.location}</strong> • Period: <strong>${p.assignmentPeriod || p.year}</strong>
      </div>
      <div style="font-size: 10px; color: #334155; margin-bottom: 4px;">
        <strong>Scope & Role:</strong> ${p.assignmentScope || p.solution}
      </div>
      <div style="font-size: 9px; font-family: monospace; color: #0d7b48;">
        <strong>Evidence & Output:</strong> ${p.evidenceSummary || p.outcome}
      </div>
    </div>
  `).join('');

  const credentialsContent = credentials.map(c => `
    <tr>
      <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600; font-size: 11px; color: #07162c;">
        ${c.credential}
      </td>
      <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; font-size: 10px; color: #475569;">
        ${c.issuingAuthority}
      </td>
      <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; font-size: 10px; color: #0d7b48; font-weight: 600;">
        ${c.reference}
      </td>
      <td style="padding: 8px 10px; border-bottom: 1px solid #e2e8f0; font-size: 10px; color: #64748b;">
        ${c.status}
      </td>
    </tr>
  `).join('');

  const qaContent = qaPillars.map(qa => `
    <div style="margin-bottom: 12px; padding: 10px 12px; border: 1px solid #e2e8f0; border-radius: 6px; background: #faf8f5;">
      <div style="font-size: 11px; font-weight: 700; color: #07162c; margin-bottom: 2px;">
        ${qa.pillarNumber}. ${qa.title}
      </div>
      <div style="font-size: 10px; color: #475569; margin-bottom: 4px;">
        ${qa.shortDesc}
      </div>
      <div style="font-size: 9px; font-family: monospace; color: #0d7b48;">
        <strong>Controls:</strong> ${qa.controls.join(' • ')}
      </div>
    </div>
  `).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8">
        <title>HUERI Limited - Institutional Corporate Profile & Capability Statement</title>
        <style>
          @page {
            size: A4;
            margin: 15mm 15mm 15mm 15mm;
          }
          body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;
            color: #0f172a;
            line-height: 1.5;
            background: #ffffff;
            margin: 0;
            padding: 0;
            font-size: 11px;
          }
          .page {
            page-break-after: always;
            padding-bottom: 20px;
          }
          .page:last-child {
            page-break-after: avoid;
          }
          .header-band {
            border-bottom: 3px solid #0d7b48;
            padding-bottom: 12px;
            margin-bottom: 16px;
            display: flex;
            justify-content: space-between;
            align-items: flex-end;
          }
          .company-name {
            font-size: 20px;
            font-weight: 900;
            color: #07162c;
            margin: 0;
            letter-spacing: -0.5px;
          }
          .legal-name {
            font-size: 12px;
            font-weight: 700;
            color: #0d7b48;
            margin-top: 2px;
          }
          .doc-tag {
            font-family: monospace;
            font-size: 9px;
            font-weight: 700;
            color: #0d7b48;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            text-align: right;
          }
          .section-title {
            font-size: 13px;
            font-weight: 800;
            color: #07162c;
            text-transform: uppercase;
            letter-spacing: 0.5px;
            border-bottom: 1px solid #cbd5e1;
            padding-bottom: 4px;
            margin: 14px 0 8px 0;
          }
          table {
            width: 100%;
            border-collapse: collapse;
            margin: 8px 0;
          }
          th {
            background: #f1f5f9;
            color: #334155;
            font-family: monospace;
            font-size: 9px;
            text-transform: uppercase;
            text-align: left;
            padding: 6px 10px;
            border-bottom: 1px solid #cbd5e1;
          }
          .box-note {
            padding: 8px 12px;
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 6px;
            font-size: 10px;
            color: #334155;
            margin: 8px 0;
          }
          .footer-band {
            border-top: 1px solid #e2e8f0;
            margin-top: 16px;
            padding-top: 8px;
            font-size: 9px;
            font-family: monospace;
            color: #64748b;
            text-align: center;
          }
          @media print {
            body { margin: 0; }
            .no-print { display: none; }
          }
        </style>
      </head>
      <body>
        
        <!-- Action Toolbar for screen preview -->
        <div class="no-print" style="background: #07162c; color: #ffffff; padding: 10px 20px; display: flex; justify-content: space-between; align-items: center; margin-bottom: 15px;">
          <div>
            <strong style="color: #4ade80;">HUERI Limited Institutional Profile</strong> — Official Capability Dossier
          </div>
          <div>
            <button onclick="window.print()" style="background: #0d7b48; color: white; border: none; padding: 6px 14px; font-weight: bold; border-radius: 4px; cursor: pointer; font-size: 11px;">
              Print / Save as PDF
            </button>
          </div>
        </div>

        <!-- PAGE 1: CORPORATE IDENTITY & STRATEGIC OVERVIEW -->
        <div class="page">
          <div class="header-band">
            <div>
              <div class="doc-tag" style="text-align: left;">Official Institutional Capability Profile</div>
              <h1 class="company-name">HUERI Limited</h1>
              <div class="legal-name">Hope Urban Environmental and Research Investments Limited</div>
            </div>
            <div style="text-align: right;">
              <div class="doc-tag">Document Ref: HUERI-CP-2026/V2</div>
              <div style="font-size: 9px; font-family: monospace; color: #64748b;">Issued: ${dateStr}</div>
              <div style="font-size: 9px; font-family: monospace; color: #0d7b48; font-weight: 700;">NEMA Firm Licence: NEMA/ENVIS/ELi/F0026*</div>
            </div>
          </div>

          <div class="box-note" style="border-left: 3px solid #0d7b48;">
            <strong>Corporate Summary:</strong> Hope Urban Environmental and Research Investments Limited (trading as HUERI Limited) is an established Kenyan environmental, social, climate, and occupational safety consultancy firm incorporated in 2014, with collaboration roots dating back to 2007 in Kisumu and the Lake Victoria Basin. Operating under NEMA Firm of Experts registration, HUERI provides defensible Environmental and Social Impact Assessments (ESIA), Resettlement Action Plans (RAP), climate vulnerability profiling, and statutory compliance audits across Kenya and East Africa.
          </div>

          <div class="section-title">1. Corporate Identity & Registration Summary</div>
          <table>
            <thead>
              <tr>
                <th>Registered Parameter</th>
                <th>Institutional Record</th>
                <th>Verification Status</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Full Registered Name</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">Hope Urban Environmental and Research Investments Limited</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #0d7b48;">Official Registered Entity</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Trading / Operating Name</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">HUERI Limited</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #0d7b48;">Corporate Brand</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Certificate of Incorporation</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">CPR/2014/168986 (Incorporated 25 Nov 2014)</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #64748b;">Subject to Current CR12 Verification</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">NEMA Firm Practicing Licence</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">Licence No. NEMA/ENVIS/ELi/F0026 • Reg # NEMA/EIA/RC/1058</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #64748b;">Subject to Annual Licence Verification</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Founder & Managing Director</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">Belinda Nyakinya (NEMA Registered Lead Expert #7718)</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #0d7b48;">Verified Practicing Lead Expert</td>
              </tr>
              <tr>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-weight: 600;">Headquarters Location</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0;">Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100)</td>
                <td style="padding: 6px 10px; border-bottom: 1px solid #e2e8f0; font-family: monospace; color: #0d7b48;">Operational Office</td>
              </tr>
            </tbody>
          </table>

          <div class="section-title">2. Vision, Mission & Guiding Principles</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-top: 6px;">
            <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; background: #faf8f5;">
              <div style="font-weight: 700; color: #0d7b48; font-size: 11px; margin-bottom: 4px;">VISION</div>
              <p style="margin: 0; font-size: 10px; color: #334155; line-height: 1.4;">
                To be a premier African environmental, social and sustainability consultancy of choice, recognized globally for technical rigour, ethical integrity, and community-centred safeguarding.
              </p>
            </div>
            <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; background: #faf8f5;">
              <div style="font-weight: 700; color: #0d7b48; font-size: 11px; margin-bottom: 4px;">MISSION</div>
              <p style="margin: 0; font-size: 10px; color: #334155; line-height: 1.4;">
                To deliver defensible environmental assessments, structured social safeguards, and practical sustainability solutions that align infrastructure investments with national laws and international standards.
              </p>
            </div>
          </div>

          <div class="section-title">3. Multidisciplinary Delivery Framework</div>
          <p style="margin: 0 0 6px 0; font-size: 10px; color: #334155; line-height: 1.5;">
            HUERI executes assignments through a structured delivery framework combining experienced in-house lead specialists with a vetted pool of multidisciplinary technical associates.
          </p>
          <div class="box-note">
            <em>"Delivered through HUERI's multidisciplinary team and specialist technical associates, as required by the assignment."</em> This model enables tailored mobilization of licensed ecologists, civil engineers, DOSHS safety auditors, valuation surveyors, hydrologists, and GIS analysts for complex capital assignments.
          </div>

          <div class="footer-band">
            HUERI Limited • Hope Urban Environmental and Research Investments Limited • Kisumu, Kenya • info@hueriafrica.com • Page 1 of 3
          </div>
        </div>

        <!-- PAGE 2: ADVISORY PRACTICES & LEADERSHIP -->
        <div class="page">
          <div class="header-band">
            <div>
              <div class="legal-name">HUERI Limited • Capability Statement</div>
              <h2 class="company-name" style="font-size: 16px;">Core Advisory Practices & Leadership</h2>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 9px; font-family: monospace; color: #64748b;">NEMA Firm Licence: NEMA/ENVIS/ELi/F0026*</div>
            </div>
          </div>

          <div class="section-title">4. Core Advisory Practices</div>
          ${servicesContent}

          <div class="section-title">5. Key Leadership & Technical Team</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-top: 6px;">
            <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; background: #faf8f5;">
              <div style="font-weight: 700; color: #07162c; font-size: 11px;">Belinda Nyakinya</div>
              <div style="font-size: 9px; font-family: monospace; color: #0d7b48; font-weight: 600;">Founder & Managing Director | Principal Consultant</div>
              <div style="font-size: 9px; color: #64748b; margin: 2px 0;">MSc. Environmental Studies • BSc. Natural Resource Management • NEMA Lead Expert #7718</div>
              <p style="font-size: 9.5px; color: #334155; margin: 4px 0 0 0; line-height: 1.4;">
                15+ years experience directing statutory ESIAs, resettlement planning, and safeguards compliance. Technical Safeguards Specialist for national devolution programs (KDSP II NPCU).
              </p>
            </div>
            <div style="padding: 10px; border: 1px solid #e2e8f0; border-radius: 6px; background: #faf8f5;">
              <div style="font-weight: 700; color: #07162c; font-size: 11px;">John Matthews Sande</div>
              <div style="font-size: 9px; font-family: monospace; color: #0d7b48; font-weight: 600;">Anthropologist & Lead Social Specialist</div>
              <div style="font-size: 9px; color: #64748b; margin: 2px 0;">MA Anthropology / Social Sciences • BA Anthropology & Sociology</div>
              <p style="font-size: 9.5px; color: #334155; margin: 4px 0 0 0; line-height: 1.4;">
                12+ years field experience in participatory social impact assessments, resettlement action plans (RAP), grassroots community barazas, and grievance redress mechanism (GRM) design.
              </p>
            </div>
          </div>

          <div class="footer-band">
            HUERI Limited • Hope Urban Environmental and Research Investments Limited • Kisumu, Kenya • info@hueriafrica.com • Page 2 of 3
          </div>
        </div>

        <!-- PAGE 3: ASSIGNMENTS, QA/QC & COMPLIANCE -->
        <div class="page">
          <div class="header-band">
            <div>
              <div class="legal-name">HUERI Limited • Assignments & Standards</div>
              <h2 class="company-name" style="font-size: 16px;">Quality Assurance & Selected Track Record</h2>
            </div>
            <div style="text-align: right;">
              <div style="font-size: 9px; font-family: monospace; color: #64748b;">Statutory & Lender Standards</div>
            </div>
          </div>

          <div class="section-title">6. Quality Assurance & Professional Standards</div>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px; margin-top: 4px;">
            ${qaContent}
          </div>

          <div class="section-title">7. Selected Environmental & Social Assignments</div>
          ${projectsContent}

          <div class="box-note" style="margin-top: 8px;">
            <strong>Leadership Experience Note:</strong> National Environmental and Social Safeguards advisory for the Kenya Devolved Support Programme (KDSP II) is delivered by HUERI Founder Belinda Nyakinya in her individual professional capacity as an Environmental Safeguards Specialist within the National Programme Coordination Unit.
          </div>

          <div class="section-title">8. Document Verification Notice for Procurement & Tenders</div>
          <p style="font-size: 9.5px; color: #475569; margin: 0 0 6px 0;">
            * The following corporate documents are maintained on file and certified copies are provided during formal tender and RFP submissions:
          </p>
          <div style="font-size: 9px; font-family: monospace; color: #334155; line-height: 1.5;">
            • Current Annual NEMA Firm Practicing Licence (NEMA/ENVIS/ELi/F0026)<br/>
            • Certified CR12 / Registrar of Companies Certificate (CPR/2014/168986)<br/>
            • Current KRA Tax Compliance Certificate (TCC)<br/>
            • County Government Single Business Operating Permit<br/>
            • Practicing Lead Expert Certificates & Professional Memberships (EIK / VRB / EBK / DOSHS)
          </div>

          <div class="footer-band">
            <strong>Head Office:</strong> Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100) • <strong>Direct Desk:</strong> +254 721 410139 • <strong>Email:</strong> info@hueriafrica.com • <strong>Web:</strong> https://www.hueriafrica.com/
          </div>
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              // auto-open print prompt
            }, 400);
          }
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
}
