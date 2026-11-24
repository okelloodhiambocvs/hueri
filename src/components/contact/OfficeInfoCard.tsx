/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../../utils/photoAssets';

export default function OfficeInfoCard() {
  const whatsappUrl =
    'https://wa.me/254721410139?text=Hello%20Belinda,%20we%20visited%20the%20HUERI%20website%20and%20would%20like%20to%20discuss%20an%20environmental%20and%20social%20advisory%20proposal.';

  return (
    <div className="space-y-8">
      {/* Clean Photo without Overlay Text */}
      <div>
        <div className="h-52 w-full overflow-hidden bg-slate-100 dark:bg-slate-900">
          <img
            src={photoAssets.waterCatchment}
            alt="Kisumu Headquarters and Lake Victoria Basin Environmental Setting"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="mt-2.5 flex items-center justify-between text-[11px] font-mono text-slate-500 dark:text-slate-400">
          <span className="font-bold text-[#003B95] dark:text-[#38BDF8] uppercase tracking-wider">
            Kenya Headquarters • Kisumu
          </span>
          <span>EST. 2014</span>
        </div>
      </div>

      <div className="space-y-6">
        <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
          <span className="text-[11px] font-mono font-bold text-[#006B22] dark:text-[#4ADE80] uppercase tracking-widest block mb-1">
            PHYSICAL HEADQUARTERS
          </span>
          <h3 className="font-heading font-extrabold text-xl text-[#003B95] dark:text-white">
            HUERI Limited Executive Offices
          </h3>
        </div>

        <div className="divide-y divide-slate-200 dark:divide-slate-800 text-xs sm:text-sm">
          <div className="pb-4 space-y-1">
            <span className="block text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Physical &amp; Postal Location
            </span>
            <p className="text-slate-800 dark:text-slate-200 font-sans leading-relaxed font-light">
              Milimani Estate, Kisumu City, Kenya<br />
              P.O. Box 7919 - 40100 Kisumu, Kenya
            </p>
          </div>

          <div className="py-4 space-y-1">
            <span className="block text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Direct Telephone Line
            </span>
            <p className="text-slate-900 dark:text-white font-mono font-bold">
              <a href="tel:+254721410139" className="hover:underline text-[#006B22] dark:text-[#4ADE80]">
                +254 721 410139
              </a>
            </p>
            <p className="text-[11px] text-slate-500 dark:text-slate-400 font-sans">
              Managing Director: Belinda Nyakinya (NEMA Registered Lead Expert)
            </p>
          </div>

          <div className="py-4 space-y-1.5">
            <span className="block text-[10px] font-mono font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
              Official Department Emails
            </span>
            <div className="space-y-1 font-mono text-xs pt-1">
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">General: </span>
                <a href="mailto:info@hueriafrica.com" className="text-[#006B22] dark:text-[#4ADE80] hover:underline font-bold">
                  info@hueriafrica.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">Proposals: </span>
                <a href="mailto:proposals@hueriafrica.com" className="text-[#006B22] dark:text-[#4ADE80] hover:underline font-bold">
                  proposals@hueriafrica.com
                </a>
              </div>
              <div>
                <span className="text-slate-500 dark:text-slate-400 text-[11px]">Partnerships: </span>
                <a href="mailto:partnerships@hueriafrica.com" className="text-[#006B22] dark:text-[#4ADE80] hover:underline font-bold">
                  partnerships@hueriafrica.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Direct Line — Open Divider Layout */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-[#006B22] dark:text-[#4ADE80] block">
            DIRECT CONSULTATION CHANNEL
          </span>
          <p className="text-xs text-slate-600 dark:text-slate-300 font-sans leading-relaxed font-light">
            Discuss assignment scoping, statutory timelines, or technical proposals directly with our lead advisory team.
          </p>
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full py-3 bg-[#006B22] hover:bg-[#00581C] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-lg transition-colors text-center"
          >
            CHAT ON WHATSAPP (+254 721 410139)
          </a>
        </div>

        {/* Corporate Verification Footnote — Open Editorial Strip */}
        <div className="pt-4 border-t border-slate-200 dark:border-slate-800 space-y-2">
          <h4 className="font-heading font-extrabold text-sm text-[#003B95] dark:text-white uppercase tracking-wider">
            NEMA Registered Firm of Experts
          </h4>
          <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed font-sans font-light">
            HUERI Limited operates in full compliance with EMCA Cap 387 and OSHA 2007. Official statutory practicing licenses, lead expert registration certificates, and incorporated corporate records are maintained in confidence and provided directly to clients and partner institutions upon request.
          </p>
        </div>
      </div>
    </div>
  );
}
