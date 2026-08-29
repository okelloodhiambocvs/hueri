import { jsPDF } from 'jspdf';
import { Service } from '../../types';

export function generateBrochurePDF(services: Service[]) {
  const doc = new jsPDF({
    orientation: 'portrait',
    unit: 'mm',
    format: 'a4',
  });

  const drawDecorator = (pNum: number) => {
    // Bottom footer
    doc.setFillColor(15, 23, 42);
    doc.rect(15, 282, 180, 0.5, 'F');
    
    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(148, 163, 184);
    doc.text(`HUERI LIMITED • Corporate Capability Profile • https://www.hueriafrica.com/`, 15, 287);
    doc.text(`Page ${pNum}`, 195, 287, { align: 'right' });

    // Top header
    if (pNum > 1) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(0, 166, 81);
      doc.text(`HUERI LIMITED`, 15, 12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(` | NEMA Licensed Environmental Consultants (NEMA/ENVIS/ELi/F0026)`, 41, 12);
      
      doc.setDrawColor(241, 245, 249);
      doc.line(15, 14, 195, 14);
    }
  };

  // COVER PAGE
  drawDecorator(1);
  doc.setFillColor(0, 166, 81);
  doc.rect(0, 0, 210, 45, 'F');

  doc.setFont('helvetica', 'bold');
  doc.setTextColor(255, 255, 255);
  doc.setFontSize(24);
  doc.text('HUERI LIMITED', 20, 24);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text('HOPE URBAN ENVIRONMENTAL AND RESEARCH INVESTMENTS LIMITED', 20, 34);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Corporate Capability Statement', 20, 68);

  doc.setFontSize(11);
  doc.setTextColor(71, 85, 105);
  doc.setFont('helvetica', 'normal');
  doc.text('Environmental, Social, Health, Safety, Climate & Sustainability Consultancy', 20, 77);
  doc.text('Kenya Foundation with Capacity for Pan-African Partnered Delivery', 20, 84);

  doc.setFillColor(248, 250, 252);
  doc.rect(20, 95, 170, 64, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(20, 95, 170, 64, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 166, 81);
  doc.text('REGULATORY CREDENTIALS & LICENSING', 28, 106);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9);
  doc.setTextColor(51, 65, 85);
  doc.text('• NEMA Firm of Experts Annual Licence: NEMA/ENVIS/ELi/F0026', 28, 115);
  doc.text('• NEMA Corporate Register Certificate: NEMA/EIA/RC/1058', 28, 122);
  doc.text('• Company Registration / Incorporation: CPR/2014/168986 (Est. 2014)', 28, 129);
  doc.text('• DOSHS Occupational Health & Safety Compliance Auditing', 28, 136);
  doc.text('• World Bank ESF (ESS1-10) & IFC Performance Standards (PS1-8) Alignment', 28, 143);
  doc.text('• Water Resources Authority (WRA) Hydrogeological Permitting Support', 28, 150);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('CONTACT & EXECUTIVE OFFICES', 20, 175);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(71, 85, 105);
  doc.text('Headquarters: Milimani Estate, Kisumu City, Kenya (P.O. Box 7919 - 40100)', 20, 184);
  doc.text('Founder & Managing Director: Belinda Nyakinya (NEMA Lead Expert #7718)', 20, 192);
  doc.text('Telephone: +254 721 410139', 20, 200);
  doc.text('General Enquiries: info@hueriafrica.com', 20, 208);
  doc.text('Proposal Desk: proposals@hueriafrica.com | Partnerships: partnerships@hueriafrica.com', 20, 216);
  doc.text('Website: https://www.hueriafrica.com/', 20, 224);

  // SERVICES SUMMARY PAGE
  doc.addPage();
  drawDecorator(2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(0, 166, 81);
  doc.text('Core Technical Practice Areas', 15, 25);

  let yPos = 36;
  services.forEach((serv, index) => {
    if (yPos > 248) {
      doc.addPage();
      drawDecorator(doc.getNumberOfPages());
      yPos = 25;
    }

    doc.setFillColor(248, 250, 252);
    doc.rect(15, yPos, 180, 23, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.rect(15, yPos, 180, 23, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(9.5);
    doc.setTextColor(15, 23, 42);
    doc.text(`${index + 1}. ${serv.title}`, 20, yPos + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8);
    doc.setTextColor(71, 85, 105);
    const shortDesc = serv.shortDescription.length > 110 ? serv.shortDescription.substring(0, 110) + '...' : serv.shortDescription;
    doc.text(shortDesc, 20, yPos + 14);

    if (serv.deliveryModelNote) {
      doc.setFontSize(7);
      doc.setTextColor(100, 116, 139);
      doc.text(serv.deliveryModelNote, 20, yPos + 19);
    }

    yPos += 27;
  });

  doc.save('HUERI_Limited_Corporate_Profile.pdf');
}
