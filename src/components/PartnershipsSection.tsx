/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialPartnershipModels } from '../server/seedData';
import { PartnershipModel } from '../types';
import photoAssets from '../utils/photoAssets';
import { RevealBlock } from './MotionReveal';

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

      {/* 1. Section Header + Value Props — White Background */}
      <div className="bg-white dark:bg-[#041B44] py-10 sm:py-12 space-y-8 overflow-hidden">
        <RevealBlock direction="left" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left space-y-2">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            International Partnerships &amp; Consortia Models
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-sans max-w-3xl leading-relaxed font-light">
            Collaborating with global engineering firms, international consulting platforms, and development finance institutions requiring trusted, on-the-ground African safeguards execution.
          </p>
        </RevealBlock>

        <RevealBlock direction="up" delayMs={80} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {valueProps.map((val, idx) => (
              <div key={idx} className="space-y-2 border-t border-slate-200 dark:border-slate-800 pt-4">
                <h4 className="font-heading font-bold text-sm text-[#003B95] dark:text-white">
                  {val.title}
                </h4>
                <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            ))}
          </div>
        </RevealBlock>
      </div>

      {/* 2. Full-Width Feature Split Band — Logo Green Background */}
      <div className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-12 items-center gap-10">
            <RevealBlock direction="left" className="lg:col-span-7 space-y-4">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
                Combining Local Ground Mastery with Multilateral Bankability
              </h3>
              <p className="text-xs sm:text-sm text-emerald-50 font-light leading-relaxed">
                International consortia and engineering prime contractors rely on HUERI to execute in-situ stakeholder engagements, statutory licensing, environmental monitoring, and Resettlement Action Plans without project disruption or legal exposure.
              </p>

              <div className="grid sm:grid-cols-3 gap-6 pt-2 text-xs font-mono">
                <div>
                  <span className="text-emerald-100 block text-[10px] uppercase">Response Time</span>
                  <span className="font-bold text-white">&lt; 24h Scoping</span>
                </div>
                <div>
                  <span className="text-emerald-100 block text-[10px] uppercase">Compliance</span>
                  <span className="font-bold text-white">IFC PS &amp; WB ESF</span>
                </div>
                <div>
                  <span className="text-emerald-100 block text-[10px] uppercase">Jurisdictions</span>
                  <span className="font-bold text-white">Kenya &amp; East Africa</span>
                </div>
              </div>
            </RevealBlock>

            <RevealBlock direction="right" delayMs={80} className="lg:col-span-5">
              <div className="aspect-[16/10] w-full overflow-hidden rounded-xl bg-slate-900 shadow-md">
                <img
                  src={photoAssets.infrastructure}
                  alt="International infrastructure safeguards partnership"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </RevealBlock>
          </div>
        </div>
      </div>

      {/* 3. Pan-African In-Country Partnering Framework — White Background */}
      <div className="bg-white dark:bg-[#041B44] py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-3 max-w-3xl">
              <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
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
                className="w-full sm:w-auto px-4 py-2.5 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors text-center cursor-pointer"
              >
                Join African Partner Network →
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* 4. Structured Partnership Models Grid — Logo Green Background */}
      <div className="bg-[#006B22] dark:bg-[#054A20] text-white py-10 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <h3 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-black text-white tracking-tight">
            Engagement &amp; Partnership Models
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {models.map((model) => (
              <div
                key={model.id}
                className="border-t border-white/25 pt-5 flex flex-col justify-between space-y-4"
              >
                <div className="space-y-2.5">
                  <h4 className="font-heading font-extrabold text-base text-white leading-snug">
                    {model.title}
                  </h4>

                  <p className="text-xs text-emerald-50 font-sans leading-relaxed font-light">
                    {model.description}
                  </p>

                  <div className="pt-1">
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-200 block mb-0.5">
                      Typical Target Partners
                    </span>
                    <p className="text-xs font-mono font-semibold text-[#A7F3D0]">
                      {model.targetPartners}
                    </p>
                  </div>
                </div>

                <div className="space-y-3 pt-1">
                  <div className="space-y-1">
                    {model.benefits.map((b, i) => (
                      <div key={i} className="text-xs text-emerald-50 flex items-start gap-1.5">
                        <span className="text-[#A7F3D0] font-bold shrink-0">·</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenPartnershipInquiry(model.title)}
                    className="w-full py-2 px-3 bg-white hover:bg-emerald-50 text-[#003B95] font-mono font-bold text-[11px] uppercase tracking-wider rounded-lg transition-colors text-center cursor-pointer"
                  >
                    Propose Partnership
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}
