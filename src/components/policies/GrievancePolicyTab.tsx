import React from 'react';

export default function GrievancePolicyTab() {
  return (
    <div className="space-y-6 animate-fadeIn font-sans">
      <div className="p-4 bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-800/40 rounded-2xl">
        <h4 className="font-heading font-bold text-gray-900 dark:text-white text-sm">
          Complaints & Grievance Redress Mechanism (GRM)
        </h4>
        <p className="text-xs text-gray-600 dark:text-slate-300 mt-1">
          A clear, accessible, and transparent framework for receiving, recording, and resolving concerns from project-affected persons, clients, communities, and stakeholders.
        </p>
      </div>

      <div className="space-y-4 text-xs sm:text-sm">
        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          1. Purpose and Scope
        </h5>
        <p>
          HUERI Limited is committed to maintaining open, respectful, and transparent communication. Our Grievance Redress Mechanism allows any stakeholder, community member, or partner to raise concerns regarding our consulting activities, field surveys, data collection, or professional conduct.
        </p>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          2. Grievance Lodging Channels
        </h5>
        <p>
          Grievances may be lodged confidentially or openly through:
        </p>
        <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Email:</strong> Direct submissions to <strong>info@hueriafrica.com</strong> (Subject: Formal Grievance).</li>
          <li><strong>Telephone:</strong> Contact our Managing Office directly at <strong>+254 721 410139</strong>.</li>
          <li><strong>Written Submissions:</strong> P.O. Box 7919 - 40100 Kisumu, Kenya (Attention: Managing Director).</li>
          <li><strong>Field-Level GRM:</strong> Project-specific grievance desks established during Resettlement Action Plans (RAP) and public barazas.</li>
        </ul>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          3. Process & Response Timelines
        </h5>
        <ol className="list-decimal pl-5 space-y-1 text-gray-700 dark:text-slate-300">
          <li><strong>Acknowledgment:</strong> Grievance logged and acknowledged in writing within 48 hours.</li>
          <li><strong>Investigation:</strong> Independent review conducted by senior technical leadership within 7 working days.</li>
          <li><strong>Resolution & Feedback:</strong> Proposed corrective action and written response provided within 14 working days.</li>
          <li><strong>Closure & Monitoring:</strong> Confirmation of resolution with complainant and entry into the continuous improvement register.</li>
        </ol>

        <h5 className="font-heading font-extrabold text-base text-gray-900 dark:text-white border-b pb-2 border-gray-100 dark:border-slate-800">
          4. Non-Retaliation Guarantee
        </h5>
        <p>
          HUERI Limited guarantees that no person lodging a good-faith concern or complaint will face retaliation, discrimination, or disadvantage in any form.
        </p>
      </div>
    </div>
  );
}
