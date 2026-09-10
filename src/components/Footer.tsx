'use client';

import React from 'react';
import Image from 'next/image';
import { COMPANY_INFO } from '@/data/info';
import { Phone, MessageSquare, MapPin, Globe } from 'lucide-react';

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
                <MessageSquare className="w-4 h-4" />
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
