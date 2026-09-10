'use client';

import React from 'react';
import { COMPANY_INFO } from '@/data/info';
import { Car, Compass, Calendar, Plane, Heart, ArrowRight, ShieldCheck, CheckCircle2, Sparkles } from 'lucide-react';

export const ServicesSection: React.FC = () => {
  const brands = [
    { name: 'Toyota', count: '4 Model (Avanza, Reborn, Zenix, Fortuner)', logoBg: 'bg-red-50 text-red-600' },
    { name: 'Mitsubishi', count: '1 Model (Xpander MPV)', logoBg: 'bg-slate-100 text-slate-800' },
    { name: 'Isuzu / Hiace', count: '1 Model (Commuter 14 Seat)', logoBg: 'bg-blue-50 text-blue-600' },
  ];

  const categories = [
    { name: 'MPV Family', desc: '6-7 Seats • Avanza / Xpander', icon: Car, tag: 'Favorit' },
    { name: 'SUV Luxury', desc: '7 Seats • Fortuner VRZ', icon: Car, tag: 'Premium' },
    { name: 'Mini Bus', desc: '14 Seats • Hiace Commuter', icon: Car, tag: 'Group' },
    { name: 'City Tour', desc: 'All-In • Driver + BBM + Toll', icon: Compass, tag: 'Wisata' },
    { name: 'Wedding Car', desc: 'Mobil Pengantin + Bunga', icon: Heart, tag: 'Spesial' },
    { name: 'Airport Drop', desc: 'Stasiun Whoosh & Bandara', icon: Plane, tag: 'Pick Up' },
  ];

  return (
    <section id="layanan" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-[#1B3A6B] text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" /> Layanan Transportasi Bandung
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Solusi Transportasi Lengkap
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Berbagai macam kebutuhan kendaraan harian, operasional dinas kantor, hingga rute wisata Kota Bandung.
          </p>
        </div>

        {/* Layout Grid: Left Browse by Brand + Right Browse by Category */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          
          {/* Left: Browse by Brand */}
          <div className="lg:col-span-5 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-lg font-extrabold text-slate-900">
                  Browse by Brand
                </h3>
                <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  Armada Resmi
                </span>
              </div>

              <p className="text-xs text-slate-500 mb-6">
                Armada dari pabrikan otomotif terkemuka dengan standar servis bengkel resmi terjamin.
              </p>

              <div className="space-y-3">
                {brands.map((b, idx) => (
                  <div key={idx} className="p-3.5 bg-slate-50 rounded-xl border border-slate-200 hover:border-blue-300 transition-all flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-9 h-9 rounded-lg ${b.logoBg} font-black text-sm flex items-center justify-center border border-slate-200 shadow-xs`}>
                        {b.name.charAt(0)}
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-slate-900">{b.name}</h4>
                        <span className="text-[11px] text-slate-500">{b.count}</span>
                      </div>
                    </div>
                    <CheckCircle2 className="w-4 h-4 text-blue-500" />
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-4 border-t border-slate-100 flex items-center gap-2 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-[#1B3A6B] shrink-0" />
              <span>Seluruh armada rutin diservis & dibersihkan sebelum penjemputan.</span>
            </div>
          </div>

          {/* Right: Browse by Category (Solid Blue Card DriveNest style) */}
          <div className="lg:col-span-7 bg-[#1B3A6B] text-white p-6 sm:p-8 rounded-2xl shadow-xl flex flex-col justify-between relative overflow-hidden">
            
            <div className="relative z-10">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-2xl font-black">
                  Browse by Category
                </h3>
                <span className="bg-[#FFCC00] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
                  Pilihan Utama
                </span>
              </div>

              <p className="text-xs text-blue-100 mb-6">
                Pilih jenis kategori armada dan skema layanan yang pas untuk perjalanan Anda di Bandung.
              </p>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                {categories.map((cat, idx) => {
                  const IconComp = cat.icon;
                  return (
                    <div
                      key={idx}
                      className="bg-white/10 hover:bg-white/20 backdrop-blur-md p-3.5 rounded-xl border border-white/20 flex flex-col justify-between transition-all cursor-pointer group"
                    >
                      <div className="flex items-center justify-between mb-2">
                        <div className="w-8 h-8 rounded-lg bg-white/20 flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                          <IconComp className="w-4 h-4" />
                        </div>
                        <span className="text-[9px] font-bold bg-[#FFCC00] text-slate-950 px-1.5 py-0.5 rounded">
                          {cat.tag}
                        </span>
                      </div>
                      <div>
                        <h4 className="text-xs font-bold text-white group-hover:text-[#FFCC00] transition-colors">
                          {cat.name}
                        </h4>
                        <p className="text-[10px] text-blue-100 mt-0.5">{cat.desc}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between pt-4 border-t border-white/20 gap-3">
              <div>
                <span className="text-xs font-bold text-white block">Paket City Tour Lembang & Ciwidey</span>
                <span className="text-[10px] text-blue-100">Termasuk Driver + BBM + E-Toll + Parkir</span>
              </div>

              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20mau%20tanya%20Solusi%20Transportasi%20Lengkap.`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-[#1B3A6B] font-extrabold text-xs shadow-md transition-all flex items-center justify-center gap-1.5 shrink-0"
              >
                <span>Konsultasi Layanan (WA)</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
