/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialTeam } from '../../server/seedData';
import photoAssets from '../../utils/photoAssets';
import { 
  UserCheck, 
  Award, 
  GraduationCap, 
  Briefcase, 
  Shield, 
  Mail, 
  Linkedin, 
  FileText,
  AlertCircle
} from 'lucide-react';

interface AboutLeadershipProps {
  onRequestProposal?: () => void;
}

export default function AboutLeadership({ onRequestProposal }: AboutLeadershipProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedMember, setSelectedMember] = useState<string | null>('team-belinda-nyakinya');

  const categories = [
    { id: 'all', label: 'All Leadership & Specialists' },
    { id: 'Leadership', label: 'Executive Leadership' },
    { id: 'Social', label: 'Social & Anthropology' },
    { id: 'Environmental', label: 'Environmental & Ecology' },
    { id: 'OHS', label: 'OHS & Safety' },
    { id: 'GIS', label: 'GIS & Spatial' },
    { id: 'Valuation', label: 'Valuation & Economics' },
    { id: 'Engineering', label: 'Civil & Environmental' }
  ];

  const filteredTeam = selectedCategory === 'all' 
    ? initialTeam 
    : initialTeam.filter(m => m.category === selectedCategory || (selectedCategory === 'Leadership' && m.isCoreLeadership));

  const activeMember = initialTeam.find(m => m.id === selectedMember) || initialTeam[0];

  return (
    <div className="space-y-8 font-sans">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 border-b border-[#E5DFD5] dark:border-slate-800 pb-5">
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-stone-900 dark:text-white tracking-tight">
            Leadership & Multidisciplinary Specialists
          </h2>
          <p className="text-xs sm:text-sm text-stone-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI's technical operations are anchored by experienced in-house lead specialists and scaled through a multidisciplinary network of registered environmental scientists, anthropologists, DOSHS safety auditors, and civil engineers.
          </p>
        </div>

        <div className="flex items-center gap-2">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-500/30 text-emerald-800 dark:text-emerald-300 text-xs font-mono font-bold">
            <UserCheck className="w-3.5 h-3.5 text-emerald-600" />
            Verified Technical Profiles
          </span>
        </div>
      </div>

      {/* Multidisciplinary Associate Disclaimer Banner */}
      <div className="p-4 sm:p-5 rounded-2xl bg-amber-50/70 dark:bg-amber-950/30 border border-amber-300/50 dark:border-amber-700/40 space-y-1 text-xs text-amber-900 dark:text-amber-200">
        <div className="flex items-center gap-2 font-bold font-heading text-sm text-amber-950 dark:text-amber-100">
          <Shield className="w-4 h-4 text-amber-700 dark:text-amber-400 shrink-0" />
          <span>Multidisciplinary Capability & Associate Delivery Model</span>
        </div>
        <p className="font-light leading-relaxed">
          Specialist technical services (including complex ecological modeling, detailed structural deck oversight, licensed valuation schedules, and laboratory testing) are <em>delivered through HUERI's multidisciplinary team and specialist technical associates, as required by the assignment.</em> Individual expert CVs, certified academic credentials, and current practicing licences are verified and submitted as part of specific project bidding dossiers.
        </p>
      </div>

      {/* Category Filter Pills */}
      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-mono font-bold uppercase tracking-wider transition-all whitespace-nowrap cursor-pointer ${
              selectedCategory === c.id
                ? 'bg-brand-green-700 text-white shadow-sm'
                : 'bg-white dark:bg-slate-800 text-stone-700 dark:text-slate-300 hover:bg-stone-100 dark:hover:bg-slate-700 border border-stone-200 dark:border-slate-700'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Main Grid: Profiles List & Detailed Profile View */}
      <div className="grid lg:grid-cols-12 gap-6 items-start">
        
        {/* Left Column: Team Cards (5 cols) */}
        <div className="lg:col-span-5 space-y-3">
          {filteredTeam.map((member) => {
            const isSelected = selectedMember === member.id;
            return (
              <div
                key={member.id}
                onClick={() => setSelectedMember(member.id)}
                className={`p-4 sm:p-5 rounded-2xl border transition-all cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-white dark:bg-slate-800/90 border-brand-green-600 dark:border-emerald-500 shadow-md ring-2 ring-brand-green-600/20'
                    : 'bg-white dark:bg-slate-900 border-stone-200 dark:border-slate-800 hover:border-brand-green-600/50 hover:bg-stone-50/50 dark:hover:bg-slate-800/50'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                      member.verificationStatus === 'Verified'
                        ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                        : 'bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300'
                    }`}>
                      {member.verificationStatus}
                    </span>
                    {member.yearsOfExperience && (
                      <span className="text-[10px] font-mono text-stone-500 dark:text-slate-400 font-bold">
                        {member.yearsOfExperience}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-stone-900 dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-brand-green-700 dark:text-emerald-400 mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-stone-600 dark:text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {member.specialization || member.bio}
                  </p>
                </div>

                <div className="pt-3 mt-2 border-t border-stone-100 dark:border-slate-800 flex items-center justify-between text-[11px] font-mono font-bold text-brand-green-600 dark:text-emerald-400">
                  <span>{isSelected ? 'Viewing Dossier' : 'Inspect Credentials'}</span>
                  <span>{isSelected ? '●' : '→'}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right Column: Detailed Profile Dossier (7 cols) */}
        <div className="lg:col-span-7 sticky top-24">
          <div className="bg-white dark:bg-slate-900 rounded-3xl border border-stone-200 dark:border-slate-800 p-6 sm:p-8 shadow-lg space-y-6">
            
            {/* Profile Header */}
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-stone-200 dark:border-slate-800 pb-5">
              <div className="space-y-1.5">
                <div className="flex items-center gap-2">
                  <span className={`text-[10px] font-mono font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    activeMember.verificationStatus === 'Verified'
                      ? 'bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300'
                      : 'bg-stone-100 dark:bg-slate-800 text-stone-700 dark:text-slate-300'
                  }`}>
                    {activeMember.verificationStatus}
                  </span>
                  {activeMember.isCoreLeadership && (
                    <span className="text-[10px] font-mono font-bold uppercase tracking-wider px-2 py-0.5 rounded-full bg-brand-blue-100 dark:bg-blue-950/60 text-brand-blue-800 dark:text-blue-300">
                      Core Executive
                    </span>
                  )}
                </div>
                <h3 className="text-xl sm:text-2xl font-heading font-black text-stone-900 dark:text-white">
                  {activeMember.name}
                </h3>
                <p className="text-xs sm:text-sm font-mono text-brand-green-700 dark:text-emerald-400 font-bold">
                  {activeMember.role}
                </p>
                <p className="text-xs text-stone-600 dark:text-slate-300 font-light">
                  {activeMember.specialization}
                </p>
              </div>

              {activeMember.id === 'team-belinda-nyakinya' && (
                <div className="w-20 h-24 sm:w-24 sm:h-28 rounded-2xl overflow-hidden shadow-md border border-stone-200 dark:border-slate-800 shrink-0 bg-slate-900">
                  <img 
                    src={photoAssets.leadership.directorPortrait} 
                    alt="Belinda Nyakinya" 
                    className="w-full h-full object-cover object-top"
                    referrerPolicy="no-referrer"
                  />
                </div>
              )}
            </div>

            {/* Profile Bio */}
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400 flex items-center gap-1.5">
                <FileText className="w-3.5 h-3.5 text-brand-green-600" />
                Professional Summary
              </h4>
              <p className="text-xs sm:text-sm text-stone-700 dark:text-slate-200 font-light leading-relaxed">
                {activeMember.bio}
              </p>
            </div>

            {/* Qualifications & Professional Registrations */}
            <div className="grid sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-stone-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-slate-300 flex items-center gap-1.5">
                  <GraduationCap className="w-3.5 h-3.5 text-brand-green-600" />
                  Academic Qualifications
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-slate-300 font-light">
                  {activeMember.qualifications.map((q, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-green-600 mt-0.5">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-[#FAF8F5] dark:bg-slate-800/80 border border-stone-200 dark:border-slate-800 space-y-2">
                <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-700 dark:text-slate-300 flex items-center gap-1.5">
                  <Award className="w-3.5 h-3.5 text-brand-green-600" />
                  Professional Registrations
                </h4>
                <ul className="space-y-1.5 text-xs text-stone-600 dark:text-slate-300 font-light">
                  {activeMember.professionalRegistrations?.map((r, idx) => (
                    <li key={idx} className="flex items-start gap-1.5">
                      <span className="text-brand-green-600 mt-0.5">•</span>
                      <span>{r}</span>
                    </li>
                  )) || (
                    <li className="text-stone-500 dark:text-slate-400 italic">Subject to assignment mobilization</li>
                  )}
                </ul>
              </div>
            </div>

            {/* Core Technical Expertise */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400 flex items-center gap-1.5">
                <Briefcase className="w-3.5 h-3.5 text-brand-green-600" />
                Core Technical Expertise
              </h4>
              <div className="grid sm:grid-cols-2 gap-2">
                {activeMember.coreExpertise.map((exp, idx) => (
                  <div key={idx} className="p-2.5 rounded-lg bg-stone-50 dark:bg-slate-800 border border-stone-200 dark:border-slate-700 text-xs text-stone-700 dark:text-slate-200 font-light flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-green-600 shrink-0" />
                    <span>{exp}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Selected Experience / Project Roles */}
            <div className="space-y-2 pt-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-stone-500 dark:text-slate-400">
                Selected Advisory Assignments & Roles
              </h4>
              <ul className="space-y-1.5 text-xs text-stone-600 dark:text-slate-300 font-light">
                {activeMember.selectedExperience.map((se, idx) => (
                  <li key={idx} className="flex items-start gap-2 p-2 rounded-lg bg-stone-50/50 dark:bg-slate-800/40 border border-stone-100 dark:border-slate-800">
                    <span className="font-mono text-brand-green-700 dark:text-emerald-400 font-bold text-[10px] mt-0.5">0{idx + 1}</span>
                    <span>{se}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership KDSP II Context Callout if Belinda */}
            {activeMember.id === 'team-belinda-nyakinya' && (
              <div className="p-4 rounded-xl bg-brand-green-50/70 dark:bg-emerald-950/40 border border-brand-green-600/30 text-xs text-stone-700 dark:text-slate-300 space-y-1">
                <div className="flex items-center gap-1.5 font-bold text-brand-green-800 dark:text-emerald-300">
                  <AlertCircle className="w-3.5 h-3.5 text-brand-green-600 shrink-0" />
                  <span>Individual Advisory Capacity Disclosure (KDSP II)</span>
                </div>
                <p className="font-light text-[11px] leading-relaxed">
                  National Environmental and Social Safeguards advisory for the Kenya Devolved Support Programme (KDSP II) is delivered by Belinda Nyakinya in her individual capacity as an Environmental Safeguards Specialist within the National Programme Coordination Unit (State Department for Devolution), and not as a corporate contract of HUERI Limited.
                </p>
              </div>
            )}

            {/* Direct Contact & Tender Action */}
            <div className="pt-4 border-t border-stone-200 dark:border-slate-800 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {activeMember.email && (
                  <a 
                    href={`mailto:${activeMember.email}`}
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-green-700 dark:text-emerald-400 hover:underline"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    {activeMember.email}
                  </a>
                )}
                {activeMember.linkedin && (
                  <a 
                    href={activeMember.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-xs font-mono text-brand-blue-700 dark:text-blue-400 hover:underline"
                  >
                    <Linkedin className="w-3.5 h-3.5" />
                    LinkedIn
                  </a>
                )}
              </div>

              {onRequestProposal && (
                <button
                  onClick={onRequestProposal}
                  className="px-3.5 py-1.5 rounded-xl bg-brand-green-700 hover:bg-brand-green-800 text-white font-mono font-bold text-[10px] uppercase tracking-wider shadow-sm transition-all cursor-pointer"
                >
                  Request Technical CV / Proposal →
                </button>
              )}
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
