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
      title: "Deep African Context & Field Reality",
      desc: "Nuanced understanding of local governance, community barazas, land tenure systems, and sensitive ecosystems."
    },
    {
      title: "International Quality Standards",
      desc: "World Bank ESF, IFC PS, AfDB ISS, and Equator Principles fluent deliverables ready for multilateral review."
    },
    {
      title: "Rapid Multi-County & Regional Mobilisation",
      desc: "Licensed lead experts, technical specialists, and encrypted mobile GIS field teams across Kenya and East Africa."
    },
    {
      title: "Strict Governance & Integrity",
      desc: "Comprehensive anti-corruption policies, zero tolerance for facilitation payments, and professional confidentiality."
    }
  ];

  return (
    <section id="partnerships" className="py-8 sm:py-10 bg-slate-50/70 dark:bg-[#0b1c3b] text-gray-900 dark:text-slate-100 transition-colors duration-300 border-b border-gray-200 dark:border-slate-800 font-sans">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8 sm:space-y-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-2">
          <span className="text-xs font-mono font-bold tracking-widest uppercase text-brand-green-600 dark:text-brand-green-400 block">
            Global Collaboration & Market Access
          </span>
          <h2 className="font-heading font-extrabold text-2xl sm:text-3xl text-gray-900 dark:text-white tracking-tight">
            International Partnerships & Consortia Models
          </h2>
          <p className="text-xs sm:text-sm text-gray-600 dark:text-slate-300 font-sans max-w-2xl mx-auto leading-relaxed font-light">
            Collaborating with global engineering firms, international consulting platforms, and development finance institutions requiring trusted, on-the-ground African safeguards execution.
          </p>
        </div>

        {/* Photographic Collaboration Feature Card */}
        <div className="rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 shadow-xl relative">
          <div className="grid lg:grid-cols-12 items-stretch">
            <div className="lg:col-span-7 p-6 sm:p-8 space-y-4 text-white flex flex-col justify-between relative z-10">
              <div className="space-y-2.5">
                <div className="inline-block px-2.5 py-0.5 rounded-full bg-brand-green-600/20 text-brand-green-400 border border-brand-green-500/30 text-[10px] font-mono font-bold">
                  PAN-AFRICAN & GLOBAL ALIGNMENT
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-black">
                  Combining Local Ground Mastery with Multilateral Bankability
                </h3>
                <p className="text-xs text-slate-300 font-light leading-relaxed">
                  International consortia and engineering prime contractors rely on HUERI to execute in-situ stakeholder engagements, statutory NEMA licensing, environmental monitoring, and Resettlement Action Plans without project disruption or legal exposure.
                </p>
              </div>

              <div className="grid sm:grid-cols-3 gap-2.5 pt-3 border-t border-slate-800 text-[10px] font-mono">
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[9px] uppercase">Response Time</span>
                  <span className="font-bold text-emerald-300">&lt; 24h Scoping</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[9px] uppercase">Compliance</span>
                  <span className="font-bold text-white">IFC PS & WB ESF</span>
                </div>
                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10">
                  <span className="text-slate-400 block text-[9px] uppercase">Jurisdictions</span>
                  <span className="font-bold text-white">Kenya & East Africa</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 relative min-h-[200px] lg:min-h-full">
              <img 
                src={photoAssets.infrastructure} 
                alt="International infrastructure safeguards partnership" 
                className="absolute inset-0 w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t lg:bg-gradient-to-r from-slate-900 via-transparent to-transparent" />
            </div>
          </div>
        </div>

        {/* Why Partner With HUERI Value Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3.5">
          {valueProps.map((val, idx) => (
            <div key={idx} className="bg-white dark:bg-[#071a38] p-4 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-sm flex flex-col justify-between">
              <div>
                <span className="text-[10px] font-mono font-bold text-brand-green-600 dark:text-brand-green-400 block mb-1">
                  Pillar 0{idx + 1}
                </span>
                <h4 className="font-heading font-bold text-xs uppercase tracking-wide text-gray-900 dark:text-white mb-1.5">
                  {val.title}
                </h4>
                <p className="text-xs text-gray-600 dark:text-slate-300 font-sans leading-relaxed font-light">
                  {val.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 6 Structured Partnership Models Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {models.map((model, idx) => {
            return (
              <div
                key={model.id}
                className="bg-white dark:bg-[#071a38] p-5 rounded-2xl border border-gray-200/80 dark:border-slate-800 shadow-sm hover:shadow-lg hover:border-brand-green-500/40 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono font-bold text-brand-blue-900 dark:text-blue-300 bg-brand-blue-50 dark:bg-blue-950/60 px-2.5 py-0.5 rounded-lg">
                      Structure {idx + 1}
                    </span>

                    <span className="text-[9px] font-mono font-bold text-brand-green-700 dark:text-brand-green-400 uppercase bg-brand-green-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-full border border-brand-green-200 dark:border-emerald-900">
                      MODEL {idx + 1}
                    </span>
                  </div>

                  <h3 className="font-heading font-extrabold text-base text-gray-900 dark:text-white mb-1.5 leading-snug">
                    {model.title}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-slate-300 font-sans leading-relaxed font-light mb-3">
                    {model.description}
                  </p>

                  <div className="mb-3 pt-2.5 border-t border-gray-100 dark:border-slate-800">
                    <span className="text-[9px] font-mono font-bold uppercase tracking-wider text-gray-400 block mb-0.5">
                      Typical Target Partners
                    </span>
                    <p className="text-xs font-mono font-semibold text-brand-blue-900 dark:text-blue-300">
                      {model.targetPartners}
                    </p>
                  </div>
                </div>

                <div className="space-y-2.5 pt-2.5 border-t border-gray-100 dark:border-slate-800">
                  <div className="space-y-1">
                    {model.benefits.map((b, i) => (
                      <div key={i} className="text-[11px] text-gray-600 dark:text-slate-300 flex items-start gap-1.5">
                        <span className="text-brand-green-600 font-bold shrink-0">•</span>
                        <span>{b}</span>
                      </div>
                    ))}
                  </div>

                  <button
                    onClick={() => onOpenPartnershipInquiry(model.title)}
                    className="w-full mt-1.5 py-2 px-3 bg-brand-blue-50 dark:bg-slate-800 hover:bg-brand-blue-900 hover:text-white dark:hover:bg-brand-green-600 text-brand-blue-900 dark:text-slate-200 font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all text-center cursor-pointer shadow-sm"
                  >
                    Propose Partnership
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Global Partnership Executive Callout */}
        <div className="bg-gradient-to-br from-brand-blue-900 to-[#071a38] text-white p-6 sm:p-8 rounded-3xl shadow-lg flex flex-col md:flex-row items-center justify-between gap-6 border border-brand-blue-700/50">
          <div className="space-y-1.5 text-center md:text-left">
            <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase block">
              Direct Managing Director Channel
            </span>
            <h3 className="font-heading font-extrabold text-xl text-white">
              Planning an African Infrastructure Tender or Consortium?
            </h3>
            <p className="text-xs text-slate-300 font-light max-w-2xl font-sans">
              Contact Managing Director Belinda Nyakinya to discuss Joint Venture structures, in-country teaming agreements, Master Service Agreements (MSA), or rapid mobilization.
            </p>
          </div>

          <button
            onClick={() => onOpenPartnershipInquiry()}
            className="px-4 py-2 bg-brand-green-600 hover:bg-brand-green-500 text-white font-mono font-bold text-[10px] uppercase tracking-wider rounded-xl transition-all shadow-md text-center cursor-pointer flex-shrink-0"
          >
            Initiate Global Partnership
          </button>
        </div>

      </div>
    </section>
  );
}
