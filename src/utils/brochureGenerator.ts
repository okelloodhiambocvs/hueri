/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { Service } from '../types';

export function generateBrochurePDF(services: Service[]) {
  // Create a styled printable brochure window or print stylesheet
  const printWindow = window.open('', '_blank');
  if (!printWindow) {
    // Fallback if popup blocked
    window.print();
    return;
  }

  const servicesHtml = services.map(s => `
    <div style="margin-bottom: 24px; padding: 18px; border: 1px solid #dcd5c9; border-radius: 12px; background: #faf8f5;">
      <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
        <span style="font-family: monospace; font-size: 11px; font-weight: bold; color: #0d7b48; text-transform: uppercase;">
          ${s.practiceCategory || 'Safeguards Advisory'}
        </span>
        <span style="font-family: monospace; font-size: 10px; color: #64748b;">
          NEMA & Lender Standard
        </span>
      </div>
      <h3 style="margin: 0 0 8px 0; color: #07162c; font-size: 16px; font-family: 'Cabinet Grotesk', sans-serif;">
        ${s.title}
      </h3>
      <p style="margin: 0 0 12px 0; font-size: 13px; color: #334155; line-height: 1.5;">
        ${s.shortDescription || s.overview}
      </p>
      <div style="font-size: 11px; font-family: monospace; color: #07162c;">
        <strong>Deliverables:</strong> ${s.deliverables?.slice(0, 3).join(', ') || 'CPR/EIA Licences, C-ESMP, Stakeholder Barazas, WRA Permits.'}
      </div>
    </div>
  `).join('');

  printWindow.document.write(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>HUERI Limited - Corporate Capability Brochure 2026</title>
        <style>
          body {
            font-family: 'DM Sans', system-ui, -apple-system, sans-serif;
            color: #07162c;
            line-height: 1.6;
            margin: 40px;
            background: #ffffff;
          }
          .header {
            border-bottom: 3px solid #0d7b48;
            padding-bottom: 20px;
            margin-bottom: 30px;
          }
          .title {
            font-size: 26px;
            font-weight: 900;
            color: #07162c;
            margin: 0 0 6px 0;
            letter-spacing: -0.5px;
          }
          .badge {
            font-family: monospace;
            font-size: 11px;
            font-weight: bold;
            color: #0d7b48;
            text-transform: uppercase;
            letter-spacing: 1px;
          }
          .meta {
            font-size: 12px;
            color: #64748b;
            margin-top: 6px;
          }
          .footer {
            border-top: 1px solid #e2e8f0;
            margin-top: 40px;
            padding-top: 20px;
            font-size: 11px;
            color: #64748b;
            text-align: center;
          }
          @media print {
            body { margin: 20mm; }
            button { display: none; }
          }
        </style>
      </head>
      <body>
        <div class="header">
          <div class="badge">Official Institutional Capability Brochure</div>
          <h1 class="title">HUERI Limited</h1>
          <div style="font-size: 14px; font-weight: bold; color: #0d7b48;">
            Hope Urban Environmental and Research Investments Limited
          </div>
          <div class="meta">
            NEMA Licenced Firm of Experts (NEMA/ENVIS/ELi/F0026) • Reg # NEMA/EIA/RC/1058<br/>
            Managing Director: Belinda Nyakinya (NEMA Lead Reg. #7718) • Kisumu, Kenya
          </div>
        </div>

        <div style="margin-bottom: 24px;">
          <h2 style="font-size: 18px; color: #07162c; border-bottom: 1px solid #e2e8f0; padding-bottom: 6px;">
            Consolidated Environmental & Social Safeguards Portfolio
          </h2>
          <p style="font-size: 13px; color: #475569;">
            HUERI delivers statutory NEMA approvals (EMCA Cap 387), Resettlement Action Plans (RAP), DOSHS workplace safety audits, and multilateral lender safeguards (World Bank ESF, IFC Performance Standards, AfDB ISS) across Kenya and East Africa.
          </p>
        </div>

        <div>
          ${servicesHtml}
        </div>

        <div class="footer">
          <strong>HUERI Limited Head Office:</strong> Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100).<br/>
          Direct Advisory Desk: +254 721 410139 | info@hueriafrica.com | https://www.hueriafrica.com/
        </div>

        <script>
          window.onload = function() {
            setTimeout(function() {
              window.print();
            }, 300);
          }
        </script>
      </body>
    </html>
  `);

  printWindow.document.close();
}
