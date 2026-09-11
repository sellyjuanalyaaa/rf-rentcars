'use client';

import React, { useState } from 'react';
import { COMPANY_INFO } from '@/data/info';
import { CARS_DATA } from '@/data/cars';
import { Phone, MapPin, CheckCircle2 } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    car: 'Toyota Avanza',
    service: 'Dengan Supir',
    notes: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const msg = `Halo RF Rental Mobil Bandung,
Saya ingin reservasi unit:
- *Nama*: ${formData.name || '-'}
- *No WA*: ${formData.phone || '-'}
- *Tanggal*: ${formData.date || 'Segera'}
- *Mobil*: ${formData.car}
- *Layanan*: ${formData.service}
- *Catatan / Jemput*: ${formData.notes || '-'}

Mohon info ketersediaan unit dan total harganya. Terima kasih!`;
    window.open(`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank');
  };

  return (
    <section id="kontak" className="relative">

      {/* ── Full-bleed fixed background ── */}
      <div
        className="relative"
        style={{
          background: 'linear-gradient(rgba(10, 25, 47, 0.88), rgba(10, 25, 47, 0.93)), url(/footerform.jpg) center/cover no-repeat',
          backgroundAttachment: 'fixed',
        }}
      >

        {/* Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

            {/* ── Left: CTA Text ── */}
            <div className="text-white space-y-6">
              <span className="inline-block text-[#60A5FA] text-xs font-extrabold uppercase tracking-widest">
                Hubungi Kami
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight text-white">
                Siap Memulai<br />Perjalanan Anda?
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-md">
                Dapatkan penawaran terbaik minggu ini: armada prima, harga transparan, driver profesional, dan proses reservasi kilat via WhatsApp. Hubungi kami sekarang untuk konsultasi gratis!
              </p>

              {/* Checklist perks */}
              <ul className="space-y-2.5">
                {[
                  'Konfirmasi dalam hitungan menit',
                  'Tidak ada biaya tersembunyi',
                  'Layanan 24/7 siap membantu',
                  'Unit bersih, terawat & ber-AC dingin',
                ].map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* WhatsApp CTA */}
              <div className="pt-2">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental,%20saya%20ingin%20sewa%20mobil%20sekarang.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1ebe5d] text-white font-extrabold text-sm px-8 py-4 rounded-full shadow-lg shadow-green-900/40 transition-all duration-300 hover:-translate-y-1 active:scale-95"
                >
                  <svg viewBox="0 0 24 24" className="w-5 h-5 fill-white shrink-0">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  Hubungi WhatsApp
                </a>
              </div>

              {/* Contact info strip */}
              <div className="pt-4 flex flex-col sm:flex-row gap-4 sm:gap-6 text-xs text-slate-400">
                <a href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`} className="flex items-center gap-2 hover:text-white transition-colors">
                  <Phone className="w-3.5 h-3.5" />
                  {COMPANY_INFO.phone}
                </a>
                <span className="flex items-center gap-2">
                  <MapPin className="w-3.5 h-3.5 shrink-0" />
                  {COMPANY_INFO.address}
                </span>
              </div>
            </div>

            {/* ── Right: Glassmorphism Form ── */}
            <div
              id="form-booking"
              className="rounded-[30px] p-8 sm:p-12 border border-white/20"
              style={{
                background: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                boxShadow: '0 25px 50px -12px rgba(0,0,0,0.5)',
              }}
            >
              <h3 className="text-2xl font-extrabold text-white mb-8">
                Form Booking Unit
              </h3>

              <form onSubmit={handleSubmit} className="space-y-5">

                {/* Nama */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Masukkan nama Anda"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 text-sm font-medium border-2 border-transparent bg-white/95 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 placeholder:text-slate-400 transition-all"
                  />
                </div>

                {/* Nomor WA */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Nomor WhatsApp
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="0812xxxx"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 text-sm font-medium border-2 border-transparent bg-white/95 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 placeholder:text-slate-400 transition-all"
                  />
                </div>

                {/* Tanggal */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Tanggal Plan Sewa
                  </label>
                  <input
                    type="date"
                    value={formData.date}
                    onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 text-sm font-medium border-2 border-transparent bg-white/95 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 transition-all"
                  />
                </div>

                {/* Pilih Unit */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Pilih Unit
                  </label>
                  <select
                    value={formData.car}
                    onChange={(e) => setFormData({ ...formData, car: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 text-sm font-medium border-2 border-transparent bg-white/95 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 transition-all"
                  >
                    {CARS_DATA.map((car) => (
                      <option key={car.id} value={car.name}>
                        {car.name} ({car.seats} Kursi)
                      </option>
                    ))}
                  </select>
                </div>

                {/* Skema Layanan */}
                <div>
                  <label className="block text-sm font-semibold text-white/90 mb-2">
                    Skema Layanan
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-5 py-4 rounded-xl text-slate-900 text-sm font-medium border-2 border-transparent bg-white/95 focus:outline-none focus:border-blue-400 focus:ring-4 focus:ring-blue-300/30 transition-all"
                  >
                    <option value="Dengan Supir">Dengan Supir (Driver)</option>
                    <option value="Lepas Kunci">Lepas Kunci (Self Drive)</option>
                    <option value="Paket City Tour Bandung">Paket City Tour Bandung (All-In)</option>
                    <option value="Antar Jemput Bandara/Stasiun">Antar Jemput Stasiun / Bandara</option>
                  </select>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full bg-[#1B3A6B] hover:bg-[#2A5298] text-white font-extrabold text-base py-4 rounded-xl flex items-center justify-center gap-3 shadow-lg transition-all duration-300 hover:-translate-y-0.5 active:scale-95 mt-2"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.882a.75.75 0 0 0 .921.921l6.055-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 0 1-4.932-1.348l-.353-.21-3.658.886.902-3.573-.23-.368A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                  </svg>
                  Booking Sekarang
                </button>

              </form>
            </div>

          </div>
        </div>
      </div>

    </section>
  );
};
