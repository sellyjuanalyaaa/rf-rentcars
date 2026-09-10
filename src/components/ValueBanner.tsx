'use client';

import React from 'react';
import { ShieldAlert, DollarSign, Headphones, Star, Tag, CheckCircle } from 'lucide-react';

export const ValueBanner: React.FC = () => {
  const highlights = [
    {
      icon: ShieldAlert,
      title: 'Bebas Reschedule',
      subtitle: 'Konfirmasi fleksibel h-24'
    },
    {
      icon: DollarSign,
      title: 'Tanpa Biaya Siluman',
      subtitle: 'Harga transparan dari awal'
    },
    {
      icon: Headphones,
      title: 'Support CS 24/7',
      subtitle: 'Siaga bantu dalam darurat'
    },
    {
      icon: Star,
      title: 'Rating 4.8 / 5.0',
      subtitle: '2.000+ ulasan wisatawan'
    }
  ];

  return (
    <section className="py-6 bg-[#06121A]/90 border-y border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-3 p-3 sm:p-4 rounded-xl bg-slate-900/50 border border-slate-800 hover:border-yellow-500/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-yellow-500/10 border border-yellow-500/20 flex items-center justify-center shrink-0">
                  <Icon className="w-5 h-5 text-yellow-400" />
                </div>
                <div>
                  <h3 className="text-xs sm:text-sm font-bold text-white leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-400 mt-0.5">
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
