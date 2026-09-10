'use client';

import React, { useState } from 'react';
import { CARS_DATA, Car, FORMAT_RUPIAH } from '@/data/cars';
import { COMPANY_INFO } from '@/data/info';
import { Users, Gauge, Fuel, ArrowRight, Tag, MessageSquare } from 'lucide-react';

export const FleetCatalog: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('SEMUA');

  const categories = [
    { label: 'Semua Armada', value: 'SEMUA' },
    { label: 'MPV Keluarga', value: 'MPV' },
    { label: 'SUV Premium', value: 'SUV' },
    { label: 'Mini Bus (Hiace)', value: 'Mini Bus' },
  ];

  const filteredCars = CARS_DATA.filter((car) => {
    if (activeCategory === 'SEMUA') return true;
    return car.category === activeCategory;
  });

  const getWhatsAppBookingUrl = (car: Car) => {
    const msg = `Halo RF Rental Mobil Bandung, saya berminat sewa unit:
- *Mobil*: ${car.name} (${car.seats} Kursi, ${car.fuel})
- *Tarif Dengan Supir*: ${FORMAT_RUPIAH(car.priceDenganSupir)} / hari
- *Tarif Lepas Kunci*: ${car.priceLepasKunci ? FORMAT_RUPIAH(car.priceLepasKunci) : 'Hubungi Admin'} / hari

Mohon konfirmasi ketersediaan unit untuk tanggal sewa saya. Terima kasih!`;
    return `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`;
  };

  return (
    <section id="armada" className="py-16 bg-slate-50 border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
          <div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Pilihan Armada Favorit
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mt-1 max-w-md">
              Di RF Rental Mobil, kami menyediakan armada terbaru dengan kondisi bersih, wangi, dan prima.
            </p>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="#tarif"
              className="text-xs font-bold text-[#1B3A6B] hover:underline flex items-center gap-1"
            >
              <span>Lihat tabel tarif lengkap</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Layout Grid: Left Low Price Promise Box + Right Cars Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Low Price Promise Box */}
          <div className="lg:col-span-3 bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
            <div className="w-10 h-10 rounded-xl bg-[#FFCC00]/20 flex items-center justify-center text-amber-700">
              <Tag className="w-5 h-5" />
            </div>
            
            <div>
              <span className="text-[10px] font-extrabold tracking-widest text-[#1B3A6B] uppercase block">
                PENAWARAN TERBAIK
              </span>
              <h3 className="text-lg font-black text-slate-900 uppercase tracking-tight mt-0.5">
                JAMINAN HARGA JUJUR
              </h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">
                Menemukan harga lebih bersaing di Bandung untuk unit sejenis? Hubungi admin kami, kami siap berikan penawaran terbaik!
              </p>
            </div>

            <div className="pt-2">
              <span className="text-[11px] font-bold text-slate-700 block mb-2">Kategori Unit:</span>
              <div className="flex flex-wrap gap-1.5">
                {categories.map((cat) => (
                  <button
                    key={cat.value}
                    onClick={() => setActiveCategory(cat.value)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                      activeCategory === cat.value
                        ? 'bg-[#1B3A6B] text-white shadow-sm'
                        : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Right Cars Cards Grid */}
          <div className="lg:col-span-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredCars.map((car) => (
              <div
                key={car.id}
                className="city-card rounded-2xl overflow-hidden flex flex-col justify-between group bg-white border border-slate-200"
              >
                <div>
                  {/* Image Header */}
                  <div className="relative h-44 w-full bg-slate-100 overflow-hidden">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    {car.badge && (
                      <span className="absolute top-2.5 left-2.5 bg-[#FFCC00] text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full shadow-sm">
                        {car.badge}
                      </span>
                    )}
                  </div>

                  {/* Body Content */}
                  <div className="p-4">
                    <h3 className="text-base font-bold text-slate-900 group-hover:text-[#1B3A6B] transition-colors">
                      {car.name}
                    </h3>

                    {/* Specs Icons */}
                    <div className="flex items-center gap-3 text-[11px] text-slate-500 my-3">
                      <div className="flex items-center gap-1">
                        <Users className="w-3.5 h-3.5 text-[#1B3A6B]" />
                        <span>{car.seats} Kursi</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Gauge className="w-3.5 h-3.5 text-[#1B3A6B]" />
                        <span className="truncate">{car.transmission}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Fuel className="w-3.5 h-3.5 text-[#1B3A6B]" />
                        <span>{car.fuel}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card Footer */}
                <div className="p-4 pt-0 border-t border-slate-100 flex items-center justify-between pt-3">
                  <div>
                    <span className="text-[10px] font-semibold text-slate-500 block">Lepas Kunci</span>
                    <div className="text-base font-black text-[#1B3A6B]">
                      {car.priceLepasKunci ? FORMAT_RUPIAH(car.priceLepasKunci) : 'Hub. Admin'}
                      <span className="text-[10px] font-normal text-slate-400"> /hari</span>
                    </div>
                  </div>

                  <a
                    href={getWhatsAppBookingUrl(car)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-[#1B3A6B] hover:bg-[#162F5A] text-white text-xs font-extrabold px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 fill-white" />
                    <span>Pesan</span>
                  </a>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
