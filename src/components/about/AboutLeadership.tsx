/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { initialTeam } from '../../server/seedData';
import photoAssets from '../../utils/photoAssets';
import {
  Award,
  GraduationCap,
  Briefcase,
  Shield,
  Mail,
  Linkedin,
  FileText
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
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 pb-2">
        <div className="space-y-1.5">
          <h2 className="text-2xl sm:text-3xl font-heading font-black text-[#003B95] dark:text-white tracking-tight">
            Leadership &amp; Multidisciplinary Specialists
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 font-light max-w-3xl leading-relaxed">
            HUERI&apos;s technical operations are anchored by experienced in-house lead specialists and scaled through a multidisciplinary network of registered environmental scientists, anthropologists, DOSHS safety auditors, and civil engineers.
          </p>
        </div>
        <span className="text-xs font-mono font-bold text-[#006B22] dark:text-[#4ADE80] shrink-0">
          Verified Technical Profiles
        </span>
      </div>

      <div className="rounded-xl bg-amber-50/70 dark:bg-amber-950/20 p-4 space-y-1 text-xs text-slate-700 dark:text-slate-200">
        <div className="flex items-center gap-2 font-bold font-heading text-sm text-[#003B95] dark:text-amber-300">
          <Shield className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0" />
          <span>Multidisciplinary Capability &amp; Associate Delivery Model</span>
        </div>
        <p className="font-light leading-relaxed">
          Specialist technical services (including complex ecological modeling, detailed structural deck oversight, licensed valuation schedules, and laboratory testing) are <em>delivered through HUERI&apos;s multidisciplinary team and specialist technical associates, as required by the assignment.</em> Individual expert CVs, certified academic credentials, and current practicing licences are verified and submitted as part of specific project bidding dossiers.
        </p>
      </div>

      <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-thin">
        {categories.map((c) => (
          <button
            key={c.id}
            onClick={() => setSelectedCategory(c.id)}
            className={`px-3 py-1.5 rounded-lg text-xs font-mono font-bold uppercase tracking-wider transition-colors whitespace-nowrap cursor-pointer ${
              selectedCategory === c.id
                ? 'bg-[#003B95] text-white'
                : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800'
            }`}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* Main Split Grid */}
      <div className="grid lg:grid-cols-12 gap-8 items-start">

        <div className="lg:col-span-5 space-y-2">
          {filteredTeam.map((member) => {
            const isSelected = selectedMember === member.id;
            return (
              <button
                key={member.id}
                type="button"
                onClick={() => setSelectedMember(member.id)}
                className={`w-full text-left py-4 px-4 rounded-xl transition-colors cursor-pointer flex flex-col justify-between ${
                  isSelected
                    ? 'bg-[#003B95]/8 dark:bg-white/10'
                    : 'hover:bg-slate-50 dark:hover:bg-white/5'
                }`}
              >
                <div className="space-y-1.5">
                  <div className="flex items-center justify-between gap-2 text-[10px] font-mono">
                    <span className={`font-bold uppercase tracking-wider ${
                      member.verificationStatus === 'Verified'
                        ? 'text-[#006B22] dark:text-[#4ADE80]'
                        : 'text-slate-500 dark:text-slate-400'
                    }`}>
                      {member.verificationStatus}
                    </span>
                    {member.yearsOfExperience && (
                      <span className="text-slate-500 dark:text-slate-400 font-bold">
                        {member.yearsOfExperience}
                      </span>
                    )}
                  </div>

                  <div>
                    <h3 className="font-heading font-bold text-base text-[#003B95] dark:text-white">
                      {member.name}
                    </h3>
                    <p className="text-xs font-mono text-[#006B22] dark:text-[#4ADE80] mt-0.5">
                      {member.role}
                    </p>
                  </div>

                  <p className="text-xs text-slate-600 dark:text-slate-300 font-light line-clamp-2 leading-relaxed">
                    {member.specialization || member.bio}
                  </p>
                </div>
              </button>
            );
          })}
        </div>

        <div className="lg:col-span-7 sticky top-24 lg:pl-6 space-y-6">

          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-2">
            <div className="space-y-1.5">
              <div className="flex items-center gap-3 text-[10px] font-mono font-bold uppercase tracking-wider">
                <span className="text-[#006B22] dark:text-[#4ADE80]">
                  {activeMember.verificationStatus}
                </span>
                {activeMember.isCoreLeadership && (
                  <span className="text-[#003B95] dark:text-[#38BDF8]">
                    · Core Executive
                  </span>
                )}
              </div>
              <h3 className="text-xl sm:text-2xl font-heading font-black text-[#003B95] dark:text-white">
                {activeMember.name}
              </h3>
              <p className="text-xs sm:text-sm font-mono text-[#006B22] dark:text-[#4ADE80] font-bold">
                {activeMember.role}
              </p>
              <p className="text-xs text-slate-600 dark:text-slate-300 font-light">
                {activeMember.specialization}
              </p>
            </div>

            {activeMember.id === 'team-belinda-nyakinya' && (
              <div className="w-20 h-24 sm:w-24 sm:h-28 overflow-hidden shrink-0 bg-slate-100 dark:bg-slate-900">
                <img
                  src={photoAssets.leadership.directorPortrait}
                  alt="Belinda Nyakinya"
                  className="w-full h-full object-cover object-top"
                  referrerPolicy="no-referrer"
                />
              </div>
            )}
          </div>

          <div className="space-y-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <FileText className="w-3.5 h-3.5 text-[#006B22] dark:text-[#4ADE80]" />
              Professional Summary
            </h4>
            <p className="text-xs sm:text-sm text-slate-700 dark:text-slate-200 font-light leading-relaxed">
              {activeMember.bio}
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6 pt-2">
            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <GraduationCap className="w-3.5 h-3.5 text-[#006B22] dark:text-[#4ADE80]" />
                Academic Qualifications
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-light">
                {activeMember.qualifications.map((q, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#006B22] dark:text-[#4ADE80] mt-0.5">·</span>
                    <span>{q}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 dark:text-slate-300 flex items-center gap-1.5">
                <Award className="w-3.5 h-3.5 text-[#006B22] dark:text-[#4ADE80]" />
                Professional Registrations
              </h4>
              <ul className="space-y-1.5 text-xs text-slate-600 dark:text-slate-300 font-light">
                {activeMember.professionalRegistrations?.map((r, idx) => (
                  <li key={idx} className="flex items-start gap-1.5">
                    <span className="text-[#006B22] dark:text-[#4ADE80] mt-0.5">·</span>
                    <span>{r}</span>
                  </li>
                )) || (
                  <li className="text-slate-500 dark:text-slate-400 italic">Subject to assignment mobilization</li>
                )}
              </ul>
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 flex items-center gap-1.5">
              <Briefcase className="w-3.5 h-3.5 text-[#006B22] dark:text-[#4ADE80]" />
              Core Technical Expertise
            </h4>
            <div className="grid sm:grid-cols-2 gap-2">
              {activeMember.coreExpertise.map((exp, idx) => (
                <div key={idx} className="py-1 text-xs text-slate-700 dark:text-slate-200 font-light flex items-center gap-2">
                  <span className="text-[#006B22] dark:text-[#4ADE80] font-bold">·</span>
                  <span>{exp}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-2 pt-2">
            <h4 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
              Selected Advisory Assignments &amp; Roles
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-300 font-light">
              {activeMember.selectedExperience.map((se, idx) => (
                <li key={idx} className="flex items-start gap-2.5 py-1">
                  <span className="font-mono text-[#006B22] dark:text-[#4ADE80] font-bold text-[10px] mt-0.5">0{idx + 1}</span>
                  <span>{se}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="pt-2 flex flex-wrap items-center justify-between gap-3">
            <div className="flex items-center gap-4">
              {activeMember.email && (
                <a
                  href={`mailto:${activeMember.email}`}
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#006B22] dark:text-[#4ADE80] hover:underline"
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
                  className="inline-flex items-center gap-1.5 text-xs font-mono text-[#003B95] dark:text-[#38BDF8] hover:underline"
                >
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              )}
            </div>

            {onRequestProposal && (
              <button
                onClick={onRequestProposal}
                className="px-4 py-2 rounded-lg bg-[#006B22] hover:bg-[#00581C] text-white font-mono font-bold text-[10px] uppercase tracking-wider transition-colors cursor-pointer"
              >
                Request Technical CV / Proposal →
              </button>
            )}
          </div>

        </div>

      </div>
    </div>
  );
}
