/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialPartnershipModels } from '../server/seedData';
import { PartnershipModel } from '../types';
import photoAssets from '../utils/photoAssets';

interface PartnershipsSectionProps {
  onOpenPartnershipInquiry: (modelTitle?: string) => void;
}

export default function PartnershipsSection({ onOpenPartnershipInquiry }: PartnershipsSectionProps) {
  const [models] = useState<PartnershipModel[]>(initialPartnershipModels);

  const valueProps = [
    {
      title: 'Deep African Context & Field Reality',
      desc: 'Nuanced understanding of local governance, community barazas, land tenure systems, and sensitive ecosystems.'
    },
    {
      title: 'International Quality Standards',
      desc: 'World Bank ESF, IFC PS, AfDB ISS, and Equator Principles fluent deliverables ready for multilateral review.'
    },
    {
      title: 'Rapid Multi-County & Regional Mobilisation',
      desc: 'Licensed lead experts, technical specialists, and encrypted mobile GIS field teams across Kenya and East Africa.'
    },
    {
      title: 'Strict Governance & Integrity',
      desc: 'Comprehensive anti-corruption policies, zero tolerance for facilitation payments, and professional confidentiality.'
    }
  ];

  return (
    <section id="partnerships" className="text-slate-900 dark:text-slate-100 transition-colors duration-300 font-sans">
      <div className="space-y-10 py-8">

        {/* Section Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-2">
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-[#003B95] dark:text-white tracking-tight">
            International Partnerships &amp; Consortia Models
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Collaborating with global engineering firms, international consulting platforms, and development finance institutions requiring trusted, on-the-ground African safeguards execution.
          </p>
        </div>

        {/* Full-Width Feature Split Band */}
        <div className="bg-[#041B44] dark:bg-[#061E4A] text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
            <div className="grid lg:grid-cols-12 items-center gap-10">
              <div className="lg:col-span-7 space-y-4">
                <h3 className="text-2xl sm:text-3xl font-heading font-black text-white">
                  Combining Local Ground Mastery with Multilateral Bankability
                </h3>
                <p className="text-xs sm:text-sm text-blue-100 font-light leading-relaxed">
                  International consortia and engineering prime contractors rely on HUERI to execute in-situ stakeholder engagements, statutory licensing, environmental monitoring, and Resettlement Action Plans without project disruption or legal exposure.
                </p>

                <div className="grid sm:grid-cols-3 gap-6 pt-2 text-xs font-mono">
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Response Time</span>
                    <span className="font-bold text-[#4ADE80]">&lt; 24h Scoping</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Compliance</span>
                    <span className="font-bold text-white">IFC PS &amp; WB ESF</span>
                  </div>
                  <div>
                    <span className="text-blue-200 block text-[10px] uppercase">Jurisdictions</span>
                    <span className="font-bold text-white">Kenya &amp; East Africa</span>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-5">
                <div className="aspect-[16/10] w-full overflow-hidden bg-slate-900">
                  <img
                    src={photoAssets.infrastructure}
                    alt="International infrastructure safeguards partnership"
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Why Partner With HUERI */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((val, idx) => (
              <div key={idx} className="space-y-2">
                <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pan-African In-Country Partnering Framework */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-slate-50 dark:bg-[#06183A] rounded-xl p-6 sm:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <h3 className="font-heading font-black text-xl sm:text-2xl text-[#003B95] dark:text-white">
                In-Country Teaming with Local African Experts &amp; National Consultancies
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light leading-relaxed">
                While our direct core track record is rooted in Kenya, HUERI operates on a deliberate <strong className="font-semibold text-slate-900 dark:text-slate-100">Pan-African Partnering Philosophy</strong>. Whenever project opportunities arise across other African countries, our organization is structured to collaborate directly with registered in-country environmental practitioners, local engineering firms, and national lead consultants.
              </p>
              <div className="flex flex-wrap gap-4 pt-1 font-mono text-xs text-[#006B22] dark:text-[#4ADE80]">
                <span>✓ Joint-Venture Consortiums</span>
                <span>✓ In-Country Co-Delivery</span>
                <span>✓ National Expert Teaming</span>
                <span>✓ Equitable Workshare Agreements</span>
              </div>
            </div>
            <div className="shrink-0 w-full lg:w-auto">
              <button
                onClick={() => onOpenPartnershipInquiry('Pan-African In-Country Co-Delivery & Expert Alliance')}
                className="w-full sm:w-auto px-5 py-3 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Join African Partner Network →
              </button>
            </div>
          </div>
        </div>

        {/* Structured Partnership Models Grid */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-8">
            {models.map((model) => (
              <div
                key={model.id}
                className="pb-4 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <h3 className="font-heading font-extrabold text-base text-[#003B95] dark:text-white leading-snug">
                    {model.title}
                  </h3>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                    {model.description}
                  </p>

                  <div className="pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400 block mb-0.5">
                      Typical Target Partners
                    </span>
                    <p className="text-xs font-mono font-semibold text-[#003B95] dark:text-[#38BDF8]">
                      {model.targetPartners}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    {model.benefits.map((b, i) => (
                      <div key={i} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-[#006B22] dark:text-[#4ADE80] font-bold shrink-0">·</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenPartnershipInquiry(model.title)}
                    className="w-full py-2.5 px-3 bg-[#003B95] hover:bg-[#002D73] text-white font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Propose Partnership
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Partnership Executive Callout — Full-Width Band */}
        <section className="bg-[#003B95] dark:bg-[#041B44] text-white py-12 sm:py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1.5 text-center md:text-left">
              <span className="text-xs font-mono font-bold tracking-widest text-[#4ADE80] uppercase block">
                Direct Managing Director Channel
              </span>
              <h3 className="font-heading font-extrabold text-xl sm:text-2xl text-white">
                Planning an African Infrastructure Tender or Consortium?
              </h3>
              <p className="text-xs sm:text-sm text-blue-100 font-light max-w-2xl font-sans">
                Contact Managing Director Belinda Nyakinya to discuss Joint Venture structures, in-country teaming agreements, Master Service Agreements (MSA), or rapid mobilization.
              </p>
            </div>

            <button
              onClick={() => onOpenPartnershipInquiry()}
              className="px-5 py-3 bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer flex-shrink-0"
            >
              Initiate Global Partnership
            </button>
          </div>
        </section>

      </div>
    </section>
  );
}
