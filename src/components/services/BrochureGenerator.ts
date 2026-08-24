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
    doc.text(`HUERI LIMITED • Official Corporate Capability Brochure`, 15, 287);
    doc.text(`Page ${pNum}`, 195, 287, { align: 'right' });

    // Top header
    if (pNum > 1) {
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(8);
      doc.setTextColor(0, 166, 81);
      doc.text(`HUERI LIMITED`, 15, 12);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 116, 139);
      doc.text(` | NEMA & DOSHS Registered Environmental Consultants`, 41, 12);
      
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
  doc.setFontSize(26);
  doc.text('HUERI LIMITED', 20, 26);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(11);
  doc.text('HOPE URBAN ENVIRONMENTAL & RESEARCH INVESTMENT LIMITED', 20, 35);

  doc.setTextColor(15, 23, 42);
  doc.setFont('helvetica', 'bold');
  doc.setFontSize(20);
  doc.text('Corporate Capability Prospectus', 20, 70);

  doc.setFontSize(12);
  doc.setTextColor(71, 85, 105);
  doc.text('Environmental Safeguards, Hydrogeology & Social Advisory in East Africa', 20, 80);

  doc.setFillColor(248, 250, 252);
  doc.rect(20, 95, 170, 60, 'F');
  doc.setDrawColor(226, 232, 240);
  doc.rect(20, 95, 170, 60, 'S');

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(11);
  doc.setTextColor(0, 166, 81);
  doc.text('REGULATORY CREDENTIALS & LICENSING', 28, 107);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(9.5);
  doc.setTextColor(51, 65, 85);
  doc.text('• NEMA Reg Firm of Experts (NEMA Cap 387 Clearance Facilitation)', 28, 117);
  doc.text('• DOSHS Occupational Health & Site Safety Engineering', 28, 125);
  doc.text('• Water Resources Authority (WRA) Hydrogeological Permitting', 28, 133);
  doc.text('• IFC & World Bank Social Safeguards (Resettlement Action Plans)', 28, 141);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(12);
  doc.setTextColor(15, 23, 42);
  doc.text('CONTACT & HEAD OFFICE', 20, 175);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.setTextColor(71, 85, 105);
  doc.text('HUERI Headquarters: Milimani Estate, Kisumu City, Kenya', 20, 184);
  doc.text('Lead Director: Belindah Nyakinya (Lead NEMA Consultant)', 20, 192);
  doc.text('Telephone: +254 721 410139', 20, 200);
  doc.text('Email: hopeenvironment2015@gmail.com', 20, 208);

  // SERVICES SUMMARY PAGE
  doc.addPage();
  drawDecorator(2);

  doc.setFont('helvetica', 'bold');
  doc.setFontSize(16);
  doc.setTextColor(0, 166, 81);
  doc.text('Core Technical Services Overview', 15, 25);

  let yPos = 38;
  services.forEach((serv, index) => {
    if (yPos > 250) {
      doc.addPage();
      drawDecorator(doc.getNumberOfPages());
      yPos = 25;
    }

    doc.setFillColor(248, 250, 252);
    doc.rect(15, yPos, 180, 22, 'F');
    doc.setDrawColor(226, 232, 240);
    doc.rect(15, yPos, 180, 22, 'S');

    doc.setFont('helvetica', 'bold');
    doc.setFontSize(10);
    doc.setTextColor(15, 23, 42);
    doc.text(`${index + 1}. ${serv.title}`, 20, yPos + 7);

    doc.setFont('helvetica', 'normal');
    doc.setFontSize(8.5);
    doc.setTextColor(71, 85, 105);
    const shortDesc = serv.shortDescription.length > 95 ? serv.shortDescription.substring(0, 95) + '...' : serv.shortDescription;
    doc.text(shortDesc, 20, yPos + 15);

    yPos += 26;
  });

  doc.save('HUERI_Corporate_Capability_Brochure.pdf');
}
