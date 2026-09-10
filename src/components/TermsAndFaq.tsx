'use client';

import React, { useState } from 'react';
import { TERMS_CONDITIONS, FAQS_DATA, TESTIMONIALS_DATA } from '@/data/info';
import { Star, ChevronDown, ShieldCheck, HelpCircle } from 'lucide-react';

export const TermsAndFaq: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const avatars = [
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=200&q=80'
  ];

  return (
    <section id="syarat-faq" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Testimonials Section */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Ulasan Nyata Pelanggan
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
              Dipercaya Ribuan Wisatawan & Instansi
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1">
              Kepuasan pelanggan adalah prioritas utama kami sejak awal beroperasi.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {TESTIMONIALS_DATA.map((item, idx) => (
              <div
                key={idx}
                className="bg-slate-50 p-6 rounded-2xl border border-slate-200 shadow-xs flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-0.5 text-amber-400 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-amber-400" />
                    ))}
                  </div>
                  <p className="text-xs text-slate-700 leading-relaxed mb-4 italic">
                    "{item.comment}"
                  </p>
                </div>

                <div className="flex items-center gap-3 pt-4 border-t border-slate-200">
                  <img
                    src={avatars[idx % avatars.length]}
                    alt={item.name}
                    className="w-9 h-9 rounded-full object-cover shrink-0 border-2 border-white shadow-xs"
                  />
                  <div>
                    <h4 className="text-xs font-extrabold text-slate-900">{item.name}</h4>
                    <p className="text-[10px] text-slate-500">{item.role} • {item.city}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Syarat & FAQ Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left: Syarat & Ketentuan */}
          <div className="lg:col-span-5 bg-slate-50 border border-slate-200 p-6 rounded-2xl">
            <h3 className="text-base font-extrabold text-slate-900 mb-4 flex items-center gap-2 pb-3 border-b border-slate-200">
              <ShieldCheck className="w-5 h-5 text-[#1B3A6B]" />
              <span>Syarat & Ketentuan Sewa</span>
            </h3>
            <ul className="space-y-2.5 text-xs text-slate-700">
              {TERMS_CONDITIONS.map((term, idx) => (
                <li key={idx} className="flex items-start gap-2.5 bg-white p-3 rounded-xl border border-slate-200">
                  <span className="w-5 h-5 rounded-full bg-blue-50 text-[#1B3A6B] font-extrabold text-[10px] flex items-center justify-center shrink-0 border border-blue-200">
                    {idx + 1}
                  </span>
                  <span className="leading-relaxed">{term}</span>
                </li>
              ))}
            </ul>
            <p className="text-[10px] text-slate-400 mt-4">
              *Dokumen persyaratan lengkap (KTP/SIM) untuk Lepas Kunci akan dipandu langsung oleh Admin.
            </p>
          </div>

          {/* Right: FAQs Accordion */}
          <div className="lg:col-span-7">
            <h3 className="text-base font-extrabold text-slate-900 mb-5 flex items-center gap-2 pb-3 border-b border-slate-200">
              <HelpCircle className="w-5 h-5 text-[#1B3A6B]" />
              <span>Pertanyaan Yang Sering Diajukan</span>
            </h3>

            <div className="space-y-2.5">
              {FAQS_DATA.map((faq, idx) => {
                const isOpen = openFaqIndex === idx;
                return (
                  <div key={idx} className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                    <button
                      onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                      className="w-full p-4 text-left flex items-start justify-between gap-4 font-bold text-xs sm:text-sm text-slate-900 hover:text-[#1B3A6B] transition-colors"
                    >
                      <span className="leading-snug">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 mt-0.5 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>

                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-slate-600 border-t border-slate-100 pt-3 bg-slate-50 leading-relaxed">
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
