'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { COMPANY_INFO } from '@/data/info';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const sectionIds = ['home', 'armada', 'tarif', 'layanan', 'howitworks', 'kenapakami', 'kontak'];
    const observers: IntersectionObserver[] = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActiveSection(id);
        },
        { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
      );
      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, []);

  const navItems = [
    { label: 'Beranda', href: '#home' },
    { label: 'Armada Mobil', href: '#armada' },
    { label: 'Daftar Tarif', href: '#tarif' },
    { label: 'Layanan', href: '#layanan' },
    { label: 'Cara Sewa', href: '#howitworks' },
    { label: 'Keunggulan', href: '#kenapakami' },
    { label: 'Kontak', href: '#kontak' },
  ];

  return (
    <header
      className={`fixed left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'top-3 mx-4 lg:mx-8 rounded-2xl bg-white shadow-xl border border-slate-200'
          : 'top-0 bg-white/95 backdrop-blur-md border-b border-slate-100'
      }`}
    >
      {/* Main navbar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'h-[72px]' : 'h-24'}`}>

          {/* Logo & Brand */}
          <a href="#home" className="flex items-center gap-2.5 shrink-0">
            <div className={`relative overflow-hidden transition-all duration-300 ${scrolled ? 'w-10 h-10' : 'w-14 h-14'}`}>
              <Image
                src="/logo1.png"
                alt="RF Rental Mobil Logo"
                fill
                className="object-contain"
              />
            </div>
            <div className="flex flex-col leading-tight">
              <span className={`font-black tracking-tight text-[#1B3A6B] transition-all duration-300 ${scrolled ? 'text-sm' : 'text-base'}`}>
                RF Rental Mobil Bandung
              </span>
              <span className={`font-semibold text-slate-500 uppercase tracking-widest transition-all duration-300 ${scrolled ? 'text-[9px]' : 'text-[10px]'}`}>
                Tour &amp; Travel
              </span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  className={`relative text-[13px] font-semibold px-3 py-2 rounded-lg transition-all ${
                    isActive
                      ? 'text-[#1B3A6B] bg-blue-50'
                      : 'text-slate-600 hover:text-[#1B3A6B] hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-[#1B3A6B] rounded-full" />
                  )}
                </a>
              );
            })}
          </nav>

          {/* CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental%20Mobil%20Bandung,%20saya%20ingin%20tanya%20ketersediaan%20unit%20mobil.`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white text-xs font-extrabold px-4 py-2.5 rounded-full shadow-sm transition-all active:scale-95"
            >
              <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.882a.75.75 0 0 0 .921.921l6.055-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 0 1-4.932-1.348l-.353-.21-3.658.886.902-3.573-.23-.368A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
              </svg>
              <span>Pesan Sekarang</span>
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 shadow-xl">
          <div className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1">
            {navItems.map((item) => {
              const sectionId = item.href.replace('#', '');
              const isActive = activeSection === sectionId;
              return (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center justify-between text-sm font-semibold px-4 py-3 rounded-xl transition-all ${
                    isActive
                      ? 'text-[#1B3A6B] bg-blue-50'
                      : 'text-slate-700 hover:text-[#1B3A6B] hover:bg-blue-50'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <span className="w-2 h-2 rounded-full bg-[#1B3A6B]" />
                  )}
                </a>
              );
            })}

            <div className="mt-3 pt-3 border-t border-slate-100 flex flex-col gap-2">
              <a
                href={`tel:${COMPANY_INFO.phone.replace(/[^0-9]/g, '')}`}
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-800 bg-slate-100 hover:bg-slate-200 py-3 rounded-xl transition-colors"
              >
                <Phone className="w-4 h-4 text-[#1B3A6B]" />
                <span>{COMPANY_INFO.phone}</span>
              </a>
              <a
                href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=Halo%20RF%20Rental%20Mobil%20Bandung.`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 text-sm font-bold text-slate-900 bg-[#FFCC00] hover:bg-[#e6b800] py-3 rounded-xl transition-colors"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                  <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.112 1.522 5.84L.057 23.882a.75.75 0 0 0 .921.921l6.055-1.466A11.945 11.945 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.75a9.695 9.695 0 0 1-4.932-1.348l-.353-.21-3.658.886.902-3.573-.23-.368A9.694 9.694 0 0 1 2.25 12C2.25 6.615 6.615 2.25 12 2.25S21.75 6.615 21.75 12 17.385 21.75 12 21.75z"/>
                </svg>
                <span>Pesan via WhatsApp</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
