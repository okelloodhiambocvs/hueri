/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import photoAssets from '../../utils/photoAssets';

export default function OfficeInfoCard() {
  const handleWhatsAppChat = () => {
    const formattedUrl = `https://wa.me/254721410139?text=Hello%20Belinda,%20we%20visited%20the%20HUERI%20website%20and%20would%20like%20to%20discuss%20an%20environmental%20and%20social%20advisory%20proposal.`;
    window.open(formattedUrl, '_blank');
  };

  return (
    <div className="space-y-6">
      <div className="bg-white dark:bg-[#071a38] rounded-3xl border border-[#E5DFD5] dark:border-slate-800 shadow-xl overflow-hidden">
        {/* Photo Header of Kisumu Lake Victoria Basin */}
        <div className="relative h-48 w-full overflow-hidden bg-slate-900">
          <img 
            src={photoAssets.waterCatchment} 
            alt="Kisumu Headquarters and Lake Victoria Basin Environmental Setting" 
            className="w-full h-full object-cover opacity-90"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#071a38] via-[#071a38]/40 to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
            <span className="text-[10px] font-mono font-bold tracking-widest text-emerald-300 uppercase bg-black/60 backdrop-blur-md px-3 py-1 rounded-full border border-white/20">
              KENYA HEADQUARTERS • KISUMU
            </span>
            <span className="text-[10px] font-mono text-white/80">
              EST. 2014
            </span>
          </div>
        </div>

        <div className="p-8 sm:p-10 space-y-6">
          <div className="border-b border-[#EBE5DB] dark:border-slate-800 pb-4">
            <span className="text-[10px] font-mono font-bold text-emerald-700 dark:text-emerald-400 uppercase tracking-widest block mb-1">
              PHYSICAL HEADQUARTERS
            </span>
            <h3 className="font-heading font-extrabold text-xl text-stone-900 dark:text-white">
              HUERI Limited Executive Offices
            </h3>
          </div>

          <div className="space-y-5 text-xs sm:text-sm">
            <div className="border-l-3 border-emerald-600 pl-4 py-1 space-y-1">
              <span className="block text-[10px] font-mono font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">
                Physical & Postal Location
              </span>
              <p className="text-stone-800 dark:text-slate-200 font-sans leading-relaxed font-light">
                Milimani Estate, Kisumu City, Kenya<br />
                P.O. Box 7919 - 40100 Kisumu, Kenya
              </p>
            </div>

            <div className="border-l-3 border-blue-600 pl-4 py-1 space-y-1">
              <span className="block text-[10px] font-mono font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">
                Direct Telephone Line
              </span>
              <p className="text-stone-900 dark:text-white font-mono font-bold">
                <a href="tel:+254721410139" className="hover:underline text-emerald-700 dark:text-emerald-400">
                  +254 721 410139
                </a>
              </p>
              <p className="text-[11px] text-stone-500 dark:text-slate-400 font-sans">
                Managing Director: Belinda Nyakinya (NEMA Registered Lead Expert)
              </p>
            </div>

            <div className="border-l-3 border-amber-600 pl-4 py-1 space-y-1">
              <span className="block text-[10px] font-mono font-bold text-stone-500 dark:text-slate-400 uppercase tracking-wider">
                Official Department Emails
              </span>
              <div className="space-y-1 font-mono text-xs pt-1">
                <div>
                  <span className="text-stone-500 dark:text-slate-400 text-[11px]">General: </span>
                  <a href="mailto:info@hueriafrica.com" className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">
                    info@hueriafrica.com
                  </a>
                </div>
                <div>
                  <span className="text-stone-500 dark:text-slate-400 text-[11px]">Proposals: </span>
                  <a href="mailto:proposals@hueriafrica.com" className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">
                    proposals@hueriafrica.com
                  </a>
                </div>
                <div>
                  <span className="text-stone-500 dark:text-slate-400 text-[11px]">Partnerships: </span>
                  <a href="mailto:partnerships@hueriafrica.com" className="text-emerald-700 dark:text-emerald-400 hover:underline font-bold">
                    partnerships@hueriafrica.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* WhatsApp Direct Line */}
          <div className="p-5 bg-[#FAF8F5] dark:bg-slate-800/80 border border-[#E5DFD5] dark:border-slate-700 rounded-2xl space-y-3">
            <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-700 dark:text-emerald-400 block">
              DIRECT CONSULTATION CHANNEL
            </span>
            <p className="text-xs text-stone-600 dark:text-slate-300 font-sans leading-relaxed font-light">
              Discuss assignment scoping, statutory timelines, or technical proposals directly with our lead advisory team.
            </p>
            <button
              onClick={handleWhatsAppChat}
              className="w-full py-3 bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-heading font-bold uppercase tracking-wider rounded-xl transition-all shadow-md text-center cursor-pointer focus-visible:ring-2 focus-visible:ring-emerald-400 focus-visible:outline-none"
            >
              CHAT ON WHATSAPP (+254 721 410139)
            </button>
          </div>
        </div>
      </div>

      {/* Corporate Verification Card */}
      <div className="bg-gradient-to-br from-[#0B1D38] to-[#071A38] text-white rounded-3xl p-8 border border-slate-700/80 shadow-xl space-y-3">
        <h4 className="font-heading font-extrabold text-base text-white">
          NEMA REGISTERED FIRM OF EXPERTS
        </h4>
        <p className="text-xs text-slate-300 leading-relaxed font-sans font-light">
          HUERI Limited operates in full compliance with EMCA Cap 387 and OSHA 2007. Official statutory practicing licenses, lead expert registration certificates, and incorporated corporate records are maintained in confidence and provided directly to clients and partner institutions upon request.
        </p>
      </div>
    </div>
  );
}
