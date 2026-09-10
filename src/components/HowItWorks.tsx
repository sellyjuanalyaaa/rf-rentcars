'use client';

import React from 'react';
import { Search, Car, Key, CheckCircle, ArrowRight } from 'lucide-react';

export const HowItWorks: React.FC = () => {
  const steps = [
    {
      num: '01',
      title: 'Search & Select',
      desc: 'Pilih unit mobil (Avanza, Xpander, Innova, Fortuner, Hiace) dan tanggal sewa Anda.',
      icon: Search,
      highlight: 'Pilih Unit & Rute'
    },
    {
      num: '02',
      title: 'Confirm WA',
      desc: 'Kirim formulir pemesanan ke WhatsApp resmi admin untuk cek ketersediaan & lock unit.',
      icon: Key,
      highlight: 'Respon Cepat 24/7'
    },
    {
      num: '03',
      title: 'Drive & Enjoy',
      desc: 'Pengemudi siap jemput di Stasiun/Bandara/Hotel atau unit lepas kunci siap digunakan.',
      icon: Car,
      highlight: 'Siap Jalan!'
    }
  ];

  return (
    <section id="howitworks" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        <div className="max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Proses Cepat & Mudah
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Renting a Car is as Easy as 1-2-3
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Tanpa prosedur berbelit. Reservasi instan dalam hitungan menit via WhatsApp.
          </p>
        </div>

        {/* 3 Step Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative items-stretch text-left">
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-blue-300 transition-all flex flex-col justify-between group relative overflow-hidden"
              >
                <div className="absolute top-4 right-4 text-3xl font-black text-[#FFCC00]/30 group-hover:text-[#FFCC00]/30 transition-colors pointer-events-none">
                  {step.num}
                </div>

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-[#1B3A6B] text-white flex items-center justify-center shadow-md shadow-blue-500/20 mb-6 group-hover:scale-105 transition-transform">
                    <IconComponent className="w-7 h-7" />
                  </div>

                  <span className="text-[10px] font-extrabold tracking-wider uppercase text-[#1B3A6B] bg-blue-50 px-2.5 py-1 rounded-md border border-blue-100 mb-2 inline-block">
                    {step.highlight}
                  </span>

                  <h3 className="text-xl font-black text-slate-900 mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-slate-700">
                  <span>Langkah {idx + 1} dari 3</span>
                  <CheckCircle className="w-4 h-4 text-emerald-500" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
