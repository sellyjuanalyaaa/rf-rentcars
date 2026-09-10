'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/info';
import {
  Search, Car, ShieldCheck, Tag, MapPin, Clock,
  ArrowRight, Star, Users, RefreshCw, Zap
} from 'lucide-react';

const LOCATIONS = [
  'Stasiun Bandung Kota',
  'Stasiun Whoosh Tegalluar',
  'Stasiun Padalarang',
  'Bandara Husein Sastranegara',
  'Hotel / Penginapan Bandung',
  'Alamat Rumah / Garasi',
];

const DURATIONS = ['Durasi Sewa', '1 Hari', '2-3 Hari', '4-7 Hari', '1 Minggu+'];
const CAR_TYPES = ['Semua Tipe', 'MPV', 'SUV', 'Mini Bus'];
const MIN_PRICES = ['Min. Harga', 'Rp 350.000', 'Rp 450.000', 'Rp 600.000', 'Rp 800.000'];
const MAX_PRICES = ['Maks. Harga', 'Rp 500.000', 'Rp 750.000', 'Rp 1.000.000', 'Rp 2.000.000'];

export const HeroSection: React.FC = () => {
  const [carType, setCarType] = useState(CAR_TYPES[0]);
  const [location, setLocation] = useState(LOCATIONS[0]);
  const [minPrice, setMinPrice] = useState(MIN_PRICES[0]);
  const [maxPrice, setMaxPrice] = useState(MAX_PRICES[0]);
  const [duration, setDuration] = useState(DURATIONS[0]);
  const [pickDate, setPickDate] = useState('');
  const [pickTime, setPickTime] = useState('');
  const [dropDate, setDropDate] = useState('');
  const [dropTime, setDropTime] = useState('');

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const msg =
      `Halo RF Rental Mobil Bandung 👋\n` +
      `Saya ingin cek ketersediaan unit:\n` +
      `- *Tipe Mobil*: ${carType}\n` +
      `- *Lokasi*: ${location}\n` +
      `- *Tanggal Sewa*: ${pickDate || 'Fleksibel'}\n` +
      `- *Durasi*: ${duration}\n` +
      `- *Budget*: ${minPrice} – ${maxPrice}\n\n` +
      `Mohon info ketersediaan & harganya. Terima kasih!`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="home" className="relative min-h-screen flex flex-col overflow-hidden">

      {/* ── Full Background Image ── */}
      <img
        src="/rf-rent.png"
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1929]/80 via-[#1B3A6B]/60 to-[#0a1929]/85" />

      {/* ── Content ── */}
      <div className="relative z-10 flex flex-col flex-1 justify-end max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-8 pb-8 pt-36">

        {/* Headline + Sub + CTAs */}
        <div className="mb-8 max-w-2xl">

          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-4 py-1.5 mb-4">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            <span className="text-xs font-semibold text-white">Unit Ready · Bandung Raya</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-[60px] font-black text-white leading-[1.1] tracking-tight mb-4">
            Sewa Mobil Bandung<br />
            <span className="text-[#FFCC00]">Solusi Perjalanan Anda</span>
          </h1>

          <p className="text-sm sm:text-base text-white/80 leading-relaxed max-w-md font-medium mb-6">
            Armada terbaru, bersih, dan wangi. Harga transparan, driver berpengalaman,
            siap antar-jemput di seluruh Bandung Raya.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a
              href="#armada"
              className="inline-flex items-center gap-2 bg-[#FFCC00] hover:bg-[#e6b800] text-slate-900 font-extrabold text-sm px-6 py-3 rounded-xl shadow-lg transition-colors"
            >
              <Car className="w-4 h-4" />
              Lihat Armada
            </a>
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/30 text-white font-bold text-sm px-6 py-3 rounded-xl backdrop-blur-sm transition-colors"
            >
              Hubungi Admin
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap gap-6 mt-6 pt-6 border-t border-white/20">
            <div className="flex items-center gap-2 text-xs">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <Car className="w-4 h-4" />
              </div>
              <div>
                <p className="font-extrabold text-white leading-tight">15+ Unit</p>
                <p className="text-white/60">Armada Siap Jalan</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white">
                <ShieldCheck className="w-4 h-4" />
              </div>
              <div>
                <p className="font-extrabold text-white leading-tight">Armada Terverifikasi</p>
                <p className="text-white/60">Servis & Inspeksi Rutin</p>
              </div>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <div className="w-8 h-8 rounded-full bg-amber-400/20 border border-amber-400/30 flex items-center justify-center text-amber-400">
                <Star className="w-4 h-4 fill-amber-400" />
              </div>
              <div>
                <p className="font-extrabold text-white leading-tight">Rating 4.8/5</p>
                <p className="text-white/60">2.000+ Ulasan Puas</p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Booking Form Card ── */}
        <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 sm:p-5 shadow-2xl">

          <div className="flex items-center gap-2 mb-3">
            <Zap className="w-4 h-4 fill-[#FFCC00] text-[#FFCC00]" />
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-wider text-white">
              Reservasi Instan &amp; Cek Ketersediaan
            </span>
          </div>

          <form onSubmit={handleSearch} className="bg-white rounded-xl p-3 sm:p-4 text-slate-800 shadow-md">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">

              {/* Lokasi Penjemputan */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase block">Lokasi Penjemputan</label>
                <div className="relative">
                  <select
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-[#1B3A6B]"
                  >
                    {LOCATIONS.map(l => <option key={l}>{l}</option>)}
                  </select>
                  <MapPin className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>

              {/* Tanggal Sewa */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase block">Tanggal Sewa</label>
                <input
                  type="date"
                  value={pickDate}
                  onChange={(e) => setPickDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#1B3A6B]"
                />
              </div>

              {/* Jam Penjemputan */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase block">Jam Penjemputan</label>
                <div className="relative">
                  <select
                    value={pickTime}
                    onChange={(e) => setPickTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-[#1B3A6B]"
                  >
                    <option>06:00 WIB (Pagi)</option>
                    <option>08:00 WIB (Pagi)</option>
                    <option>10:00 WIB (Pagi)</option>
                    <option>13:00 WIB (Siang)</option>
                    <option>16:00 WIB (Sore)</option>
                    <option>19:00 WIB (Malam)</option>
                  </select>
                  <Clock className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>

              {/* Tanggal Selesai */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase block">Tanggal Selesai</label>
                <input
                  type="date"
                  value={dropDate}
                  onChange={(e) => setDropDate(e.target.value)}
                  className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold rounded-lg px-3 py-2.5 focus:outline-none focus:border-[#1B3A6B]"
                />
              </div>

              {/* Jam Selesai */}
              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase block">Jam Selesai</label>
                <div className="relative">
                  <select
                    value={dropTime}
                    onChange={(e) => setDropTime(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-300 text-xs font-semibold rounded-lg px-3 py-2.5 appearance-none focus:outline-none focus:border-[#1B3A6B]"
                  >
                    <option>08:00 WIB (Pagi)</option>
                    <option>12:00 WIB (Siang)</option>
                    <option>17:00 WIB (Sore)</option>
                    <option>21:00 WIB (Malam)</option>
                  </select>
                  <Clock className="w-4 h-4 text-slate-400 absolute right-2.5 top-2.5 pointer-events-none" />
                </div>
              </div>

            </div>

            {/* CTA */}
            <div className="mt-3 flex justify-end">
              <button
                type="submit"
                className="w-full sm:w-auto bg-[#FFCC00] hover:bg-[#e6b800] text-slate-950 font-extrabold text-xs px-8 py-3 rounded-xl shadow-md transition-transform active:scale-95 flex items-center justify-center gap-2"
              >
                <Search className="w-4 h-4 stroke-[3]" />
                <span>Cari &amp; Pesan Unit (WA)</span>
              </button>
            </div>
          </form>
        </div>

        {/* ── Value Strip ── */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-5 mt-4 border-t border-white/20">
          {[
            { icon: RefreshCw, label: 'Bebas Reschedule', sub: 'Ubah jadwal H-24' },
            { icon: Tag, label: 'Tanpa Biaya Tersembunyi', sub: 'Harga jujur & transparan' },
            { icon: Users, label: 'Driver Berpengalaman', sub: 'Hafal rute Bandung Raya' },
            { icon: Clock, label: 'Layanan 24 Jam', sub: 'CS siap bantu kapanpun' },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="flex items-center gap-2.5 text-xs">
              <div className="w-8 h-8 rounded-full bg-white/10 border border-white/20 text-white flex items-center justify-center shrink-0">
                <Icon className="w-4 h-4" />
              </div>
              <div>
                <p className="font-bold text-white leading-tight">{label}</p>
                <p className="text-white/60 mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
