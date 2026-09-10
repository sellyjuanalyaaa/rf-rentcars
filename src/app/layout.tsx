import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800'],
  variable: '--font-jakarta',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'RF Rental Mobil Bandung | Sewa Mobil Harian, Driver & Paket City Tour',
  description:
    'Sewa mobil murah, bersih, dan wangi di Bandung. Armada terbaru Toyota Avanza, Xpander, Innova Reborn, Zenix Hybrid, Fortuner VRZ, dan Hiace. Layanan sewa harian, lepas kunci, paket wisata Lembang/Ciwidey, dan antar jemput stasiun/bandara.',
  keywords: [
    'rental mobil bandung',
    'sewa mobil bandung murah',
    'sewa innova bandung',
    'sewa fortuner bandung',
    'rental hiace bandung',
    'paket wisata lembang ciwidey',
    'antar jemput stasiun bandung',
    'rf rental mobil bandung'
  ],
  authors: [{ name: 'RF Rental Mobil Bandung' }],
  openGraph: {
    title: 'RF Rental Mobil Bandung Tour & Travel',
    description: 'Armada terbaru, bersih, dan wangi untuk perjalanan bisnis maupun wisata di Kota Bandung. Hubungi 0857-0353-3434.',
    url: 'https://www.RFrentalmobilbandung.com',
    siteName: 'RF Rental Mobil Bandung',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id" className={`scroll-smooth ${jakarta.variable}`}>
      <body className={`${jakarta.className} antialiased bg-white text-slate-900 min-h-screen`}>
        {children}
      </body>
    </html>
  );
}
