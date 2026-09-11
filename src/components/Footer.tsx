'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/info';
import { Phone, MapPin, Globe } from 'lucide-react';

const InstagramIcon: React.FC<{ className?: string }> = ({ className = "w-4 h-4" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" strokeWidth="2"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" strokeWidth="2"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" strokeWidth="3" strokeLinecap="round"/>
  </svg>
);

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#001F4D] text-white text-xs pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          
          {/* Col 1: Brand & Socials */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 shrink-0">
                <Image src="/logo1.png" alt="RF Rental Mobil Logo" fill className="object-contain" />
              </div>
              <div>
                <span className="font-extrabold text-white text-base tracking-tight block leading-tight">
                  RF Rental Mobil
                </span>
                <span className="text-[10px] tracking-widest text-blue-300 font-semibold uppercase">
                  BANDUNG • TOUR & TRAVEL
                </span>
              </div>
            </div>

            <p className="text-sm text-blue-200 leading-relaxed max-w-xs">
              Menyediakan armada sewa mobil terbaru, bersih, dan wangi untuk mendukung setiap perjalanan Anda di Kota Bandung.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={COMPANY_INFO.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram RF Rental Mobil"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <InstagramIcon className="w-4 h-4" />
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp RF Rental Mobil"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.882a.75.75 0 0 0 .921.921l6.055-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 0 1-4.932-1.348l-.353-.21-3.658.886.902-3.573-.23-.368A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
              </a>
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                aria-label="Telepon RF Rental Mobil"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center text-white transition-colors"
              >
                <Phone className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigasi */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Navigasi</h4>
            <ul className="space-y-2 text-blue-200">
              <li><a href="#home" className="hover:text-white transition-colors">Beranda</a></li>
              <li><a href="#armada" className="hover:text-white transition-colors">Armada Mobil</a></li>
              <li><a href="#layanan" className="hover:text-white transition-colors">Layanan</a></li>
              <li><a href="#tarif" className="hover:text-white transition-colors">Daftar Tarif</a></li>
              <li><a href="#syarat-faq" className="hover:text-white transition-colors">Syarat & FAQ</a></li>
            </ul>
          </div>

          {/* Col 3: Layanan */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Layanan Kami</h4>
            <ul className="space-y-2 text-blue-200">
              <li>Sewa Harian & Bulanan</li>
              <li>Antar Jemput Bandara & Stasiun</li>
              <li>Paket Wisata Lembang & Ciwidey</li>
              <li>Perjalanan Dinas Perusahaan</li>
              <li>Sewa Mobil Pengantin</li>
            </ul>
          </div>

          {/* Col 4: Newsletter & Kontak */}
          <div className="space-y-3">
            <h4 className="font-extrabold text-white text-xs uppercase tracking-wider">Newsletter</h4>
            <p className="text-blue-200 text-[11px] leading-relaxed">
              Dapatkan info promo terkini & tips perjalanan wisata Bandung.
            </p>
            <form onSubmit={(e) => e.preventDefault()} className="space-y-2">
              <input
                type="email"
                placeholder="Email Anda"
                className="w-full bg-white/10 border border-white/20 text-white placeholder-blue-300 text-xs px-3 py-2.5 rounded-lg focus:outline-none focus:border-white/50 backdrop-blur-md"
              />
              <button
                type="submit"
                className="w-full bg-[#FFCC00] hover:bg-[#e6b800] text-slate-950 font-extrabold text-xs py-2.5 rounded-lg transition-colors shadow-sm"
              >
                Berlangganan
              </button>
            </form>

            <div className="pt-2 space-y-1.5 text-[11px] text-blue-200">
              <div className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-blue-300 shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                <span>{COMPANY_INFO.phone}</span>
              </div>
              <div className="flex items-center gap-2">
                <Globe className="w-3.5 h-3.5 text-blue-300 shrink-0" />
                <span>{COMPANY_INFO.website}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Bar */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between text-[11px] text-blue-300 gap-3">
          <p>© 2026 RF Rental Mobil Bandung Tour & Travel. All rights reserved.</p>
          <div className="flex gap-4">
            <a href="#syarat-faq" className="hover:text-white transition-colors">Syarat & Ketentuan</a>
            <a href="#syarat-faq" className="hover:text-white transition-colors">Kebijakan Privasi</a>
          </div>
        </div>

      </div>
    </footer>
  );
};
