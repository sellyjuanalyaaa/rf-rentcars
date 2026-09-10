'use client';

import React from 'react';
import { ShieldCheck, Tag, UserCheck, RefreshCw, Clock, CheckCircle2 } from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: ShieldCheck,
      title: 'Armada Terawat',
      desc: 'Servis berkala di bengkel resmi Toyota & Mitsubishi.',
      badge: 'Bengkel Resmi'
    },
    {
      icon: Tag,
      title: 'Harga Transparan',
      desc: 'Tanpa biaya tersembunyi & tanpa biaya siluman di akhir.',
      badge: 'Garansi Jujur'
    },
    {
      icon: UserCheck,
      title: 'Driver Profesional',
      desc: 'Pengemudi ramah, sopan & paham seluruh rute Bandung.',
      badge: 'Driver Lokal'
    },
    {
      icon: RefreshCw,
      title: 'Bebas Reschedule',
      desc: 'Fleksibilitas ubah jadwal sewa H-24 sebelum penjemputan.',
      badge: 'Fleksibel'
    },
    {
      icon: Clock,
      title: 'Layanan 24/7',
      desc: 'Tim customer service siaga darurat membantu 24 jam.',
      badge: 'Siaga 24/7'
    }
  ];

  return (
    <section id="kenapakami" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Jaminan Kualitas & Keamanan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Keunggulan Utama RF Rental
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Alasan mengapa ribuan wisatawan dan instansi mempercayakan kebutuhan sewa mobil di Bandung kepada kami.
          </p>
        </div>

        {/* 5 Column Cards with Structured Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4">
          {features.map((item, idx) => {
            const IconComp = item.icon;
            return (
              <div
                key={idx}
                className={`p-5 rounded-2xl border transition-all flex flex-col justify-between group ${
                  idx % 2 === 0
                    ? 'bg-[#1B3A6B] border-blue-800 hover:border-blue-400'
                    : 'bg-slate-50 hover:bg-white border-slate-200 hover:border-blue-300 hover:shadow-md'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                      idx % 2 === 0
                        ? 'bg-white/20 text-white'
                        : 'bg-blue-100 text-[#1B3A6B] group-hover:bg-[#1B3A6B] group-hover:text-white'
                    }`}>
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className={`text-[9px] font-bold px-2 py-0.5 rounded border ${
                      idx % 2 === 0
                        ? 'text-blue-100 bg-white/10 border-white/20'
                        : 'text-slate-600 bg-white border-slate-200'
                    }`}>
                      {item.badge}
                    </span>
                  </div>

                  <h3 className={`text-sm font-extrabold mb-1.5 transition-colors ${
                    idx % 2 === 0 ? 'text-white' : 'text-slate-900 group-hover:text-[#1B3A6B]'
                  }`}>
                    {item.title}
                  </h3>
                  <p className={`text-[11px] leading-relaxed ${
                    idx % 2 === 0 ? 'text-blue-200' : 'text-slate-500'
                  }`}>
                    {item.desc}
                  </p>
                </div>

                <div className={`mt-4 pt-3 flex items-center gap-1 text-[10px] font-bold border-t ${
                  idx % 2 === 0 ? 'border-white/20 text-emerald-300' : 'border-slate-200/60 text-emerald-600'
                }`}>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>Terverifikasi</span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
