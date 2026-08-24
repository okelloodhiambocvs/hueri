/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';

interface AdminDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  onUpdateStats: () => void;
}

export default function AdminDrawer({ isOpen, onClose, onUpdateStats }: AdminDrawerProps) {
  if (!isOpen) return null;

  const [leads, setLeads] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [statusMsg, setStatusMsg] = useState('');

  const fetchLeads = () => {
    setLoading(true);
    fetch('/api/leads', {
      headers: { 'x-admin-key': 'hueri-admin-secure-key' }
    })
      .then(res => res.json())
      .then(data => {
        setLeads(Array.isArray(data) ? data : []);
        setLoading(false);
      })
      .catch(err => {
        console.error('Admin fetch error:', err);
        setLoading(false);
      });
  };

  useEffect(() => {
    if (isOpen) {
      fetchLeads();
    }
  }, [isOpen]);

  const updateLeadStatus = (id: string, newStatus: string) => {
    fetch(`/api/admin/leads/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-admin-key': 'hueri-admin-secure-key'
      },
      body: JSON.stringify({ status: newStatus })
    })
      .then(res => res.json())
      .then(data => {
        if (data.success) {
          setStatusMsg(`Lead ${id} status updated to ${newStatus}`);
          fetchLeads();
          onUpdateStats();
          setTimeout(() => setStatusMsg(''), 3000);
        }
      });
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        onClick={onClose}
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm transition-opacity duration-300 animate-fadeIn"
      />

      {/* Drawer Container */}
      <div className="absolute inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-xl bg-slate-900 text-white shadow-2xl p-6 sm:p-8 flex flex-col justify-between font-sans overflow-y-auto transform transition-transform duration-300 animate-slideLeft">
          <div>
            <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
              <div>
                <h3 className="font-heading font-bold text-lg">HUERI Portal Console</h3>
                <p className="text-[10px] text-slate-400 font-mono">Secured Endpoint Admin Dashboard</p>
              </div>
              <button onClick={onClose} className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white text-xs font-mono font-bold cursor-pointer">
                CLOSE
              </button>
            </div>

            {statusMsg && (
              <div className="p-3 mb-4 bg-emerald-950/80 border border-emerald-500/50 text-emerald-300 rounded-xl text-xs font-mono">
                {statusMsg}
              </div>
            )}

            <div className="space-y-6">
              <div className="flex items-center justify-between">
                <h4 className="font-mono text-xs font-bold text-brand-green-400 uppercase tracking-widest">
                  Client Consultations ({leads.length})
                </h4>
                <button onClick={fetchLeads} className="px-2.5 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-xs font-mono text-slate-300 cursor-pointer">
                  {loading ? 'Refreshing...' : 'Refresh'}
                </button>
              </div>

              <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-2">
                {leads.length === 0 ? (
                  <p className="text-xs text-slate-500 py-6 text-center italic">No consultation records stored.</p>
                ) : (
                  leads.map(lead => (
                    <div key={lead.id} className="p-4 bg-slate-800/80 rounded-2xl border border-slate-700 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="font-bold text-xs text-white">{lead.fullName}</span>
                        <span className={`text-[10px] font-mono px-2 py-0.5 rounded-md font-bold uppercase ${
                          lead.status === 'New' ? 'bg-amber-500/20 text-amber-300 border border-amber-500/40' :
                          lead.status === 'Contacted' ? 'bg-blue-500/20 text-blue-300 border border-blue-500/40' :
                          'bg-emerald-500/20 text-emerald-300 border border-emerald-500/40'
                        }`}>
                          {lead.status || 'New'}
                        </span>
                      </div>
                      <p className="text-[11px] text-slate-300 font-mono">{lead.email} {lead.phone && `• ${lead.phone}`}</p>
                      {lead.company && <p className="text-[11px] text-brand-green-400 font-semibold">{lead.company}</p>}
                      <p className="text-xs text-slate-300 bg-slate-900/60 p-2.5 rounded-xl font-light italic">{lead.message}</p>
                      
                      <div className="pt-2 flex items-center justify-end space-x-2 text-[10px]">
                        <span className="text-slate-400 font-mono">Set Status:</span>
                        <button onClick={() => updateLeadStatus(lead.id, 'New')} className="px-2 py-1 bg-slate-700 hover:bg-slate-600 rounded text-slate-200 cursor-pointer">New</button>
                        <button onClick={() => updateLeadStatus(lead.id, 'Contacted')} className="px-2 py-1 bg-blue-900/60 hover:bg-blue-800 rounded text-blue-200 cursor-pointer">Contacted</button>
                        <button onClick={() => updateLeadStatus(lead.id, 'Approved')} className="px-2 py-1 bg-emerald-900/60 hover:bg-emerald-800 rounded text-emerald-200 cursor-pointer">Approved</button>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-800 text-[10px] text-slate-500 font-mono text-center">
            HUERI Operational Console • High-Security REST Protocol
          </div>
        </div>
      </div>
    </div>
  );
}
