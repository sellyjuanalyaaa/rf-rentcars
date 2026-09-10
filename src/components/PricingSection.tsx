'use client';

import React, { useState } from 'react';
import { CARS_DATA, FORMAT_RUPIAH } from '@/data/cars';
import { COMPANY_INFO } from '@/data/info';
import { Check, MessageSquare } from 'lucide-react';

export const PricingSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'populer' | 'citytour'>('populer');

  return (
    <section id="tarif" className="py-16 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#1B3A6B] bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
            Tarif Resmi Transparan
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mt-3">
            Paket Sewa Simpel & Transparan
          </h2>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            Pilih skema paket yang paling pas dengan anggaran dan rencana perjalanan Anda.
          </p>
        </div>

        {/* 3 Tier Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16 items-stretch">
          
          {/* Card 1: LEPAS KUNCI */}
          <div className="bg-[#1B3A6B] p-6 rounded-2xl border border-blue-800 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-all text-center">
            <div>
              <span className="text-xs font-black uppercase text-blue-200 tracking-wider block mb-1">
                PAKET LEPAS KUNCI
              </span>
              <p className="text-xs text-blue-300">Bebas menyetir sendiri selama di Bandung</p>

              <div className="my-6">
                <div className="text-3xl font-black text-white">
                  Rp 449.000 <span className="text-xs font-normal text-blue-300">/hari</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-blue-100 text-left mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Durasi Full Day 24 Jam</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Kondisi Mobil Prima & Cleaned</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bantuan Darurat 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Persyaratan Syarat Mudah</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20tertarik%20sewa%20Paket%20Lepas%20Kunci.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border-2 border-white/40 text-white hover:bg-white/10 font-extrabold text-xs text-center transition-colors block"
            >
              Pilih Paket Lepas Kunci
            </a>
          </div>

          {/* Card 2: DENGAN SUPIR (PALING POPULER) */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#1B3A6B] shadow-lg flex flex-col justify-between relative text-center scale-105 z-10">
            <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#FFCC00] text-slate-950 text-[10px] font-extrabold px-3 py-1 rounded-md uppercase tracking-wider shadow-xs">
              PALING POPULER
            </span>

            <div>
              <span className="text-xs font-black uppercase text-[#1B3A6B] tracking-wider block mb-1 mt-1">
                PAKET DENGAN SUPIR
              </span>
              <p className="text-xs text-slate-500">Santai & nyaman, pengemudi ramah siap antar</p>

              <div className="my-6">
                <div className="text-3xl font-black text-[#1B3A6B]">
                  Rp 649.000 <span className="text-xs font-normal text-slate-400">/hari</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-slate-700 text-left mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1B3A6B] shrink-0" />
                  <span>Unit Mobil + Pengemudi Handal</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1B3A6B] shrink-0" />
                  <span>Driver Ramah & Hafal Rute Wisata</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1B3A6B] shrink-0" />
                  <span>Bantuan Darurat 24/7</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#1B3A6B] shrink-0" />
                  <span>Bebas Reschedule H-24</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20tertarik%20sewa%20Paket%20Dengan%20Supir.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl bg-[#1B3A6B] hover:bg-[#162F5A] text-white font-extrabold text-xs text-center shadow-md transition-colors block"
            >
              Pilih Paket Supir
            </a>
          </div>

          {/* Card 3: CITY TOUR ALL-IN */}
          <div className="bg-[#1B3A6B] p-6 rounded-2xl border border-blue-800 shadow-xs flex flex-col justify-between hover:border-blue-400 transition-all text-center">
            <div>
              <span className="text-xs font-black uppercase text-blue-200 tracking-wider block mb-1">
                PAKET CITY TOUR BANDUNG
              </span>
              <p className="text-xs text-blue-300">All-In: Driver, BBM, E-Toll & Biaya Parkir</p>

              <div className="my-6">
                <div className="text-3xl font-black text-white">
                  Rp 849.000 <span className="text-xs font-normal text-blue-300">/hari</span>
                </div>
              </div>

              <ul className="space-y-3 text-xs text-blue-100 text-left mb-6">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Paket Wisata Lembang / Ciwidey</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Termasuk Driver + BBM + Toll + Parkir</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Bebas Tentukan Rute Tujuan</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>Penjemputan Stasiun / Hotel</span>
                </li>
              </ul>
            </div>

            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20tertarik%20sewa%20Paket%20City%20Tour.`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 rounded-xl border-2 border-white/40 text-white hover:bg-white/10 font-extrabold text-xs text-center transition-colors block"
            >
              Pilih Paket City Tour
            </a>
          </div>

        </div>

        {/* Official PDF Brochure Table */}
        <div className="bg-slate-50 border border-slate-200 rounded-2xl p-6 shadow-xs">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 pb-3 border-b border-slate-200">
            <div>
              <h3 className="text-lg font-extrabold text-slate-900">
                Tabel Rincian Tarif Per Unit (Brosur Resmi)
              </h3>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => setActiveTab('populer')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'populer'
                    ? 'bg-[#1B3A6B] text-white'
                    : 'bg-white text-slate-700 border border-slate-300'
                }`}
              >
                Tarif Populer
              </button>
              <button
                onClick={() => setActiveTab('citytour')}
                className={`px-3.5 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  activeTab === 'citytour'
                    ? 'bg-[#1B3A6B] text-white'
                    : 'bg-white text-slate-700 border border-slate-300'
                }`}
              >
                Tarif City Tour
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-700 font-bold uppercase tracking-wider bg-white">
                  <th className="py-3 px-4">Tipe Mobil</th>
                  <th className="py-3 px-4">Kapasitas</th>
                  {activeTab === 'populer' ? (
                    <>
                      <th className="py-3 px-4 text-right">Tarif / Hari (Dengan Supir)</th>
                      <th className="py-3 px-4 text-right">Tarif / Hari (Lepas Kunci)</th>
                    </>
                  ) : (
                    <th className="py-3 px-4 text-right">Tarif Paket City Tour / Hari</th>
                  )}
                  <th className="py-3 px-4 text-center">Aksi</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200 bg-white">
                {CARS_DATA.map((car) => (
                  <tr key={car.id} className="hover:bg-slate-50">
                    <td className="py-3.5 px-4 font-bold text-slate-900">{car.name}</td>
                    <td className="py-3.5 px-4 text-slate-600">{car.seats} Kursi</td>
                    {activeTab === 'populer' ? (
                      <>
                        <td className="py-3.5 px-4 text-right font-bold text-slate-900">
                          {FORMAT_RUPIAH(car.priceDenganSupir)}
                        </td>
                        <td className="py-3.5 px-4 text-right font-bold text-[#1B3A6B]">
                          {car.priceLepasKunci ? FORMAT_RUPIAH(car.priceLepasKunci) : 'Hubungi Admin'}
                        </td>
                      </>
                    ) : (
                      <td className="py-3.5 px-4 text-right font-bold text-[#1B3A6B]">
                        {FORMAT_RUPIAH(car.priceCityTour)}
                      </td>
                    )}
                    <td className="py-3.5 px-4 text-center">
                      <a
                        href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20mau%20pesan%20${encodeURIComponent(car.name)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#1B3A6B] text-white text-[11px] font-bold px-3 py-1 rounded-lg hover:bg-[#162F5A]"
                      >
                        Pesan
                      </a>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
};
