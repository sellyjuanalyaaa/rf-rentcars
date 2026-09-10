export interface Car {
  id: string;
  name: string;
  category: 'MPV' | 'SUV' | 'Mini Bus';
  seats: number;
  transmission: 'Manual' | 'Matic' | 'Matic / Manual' | 'Automatic';
  fuel: 'Bensin' | 'Diesel' | 'Hybrid';
  luggage: string;
  priceLepasKunci: number | null; // null for Hubungi Admin
  priceDenganSupir: number;
  priceCityTour: number;
  popular: boolean;
  image: string;
  badge?: string;
  features: string[];
}

export const CARS_DATA: Car[] = [
  {
    id: 'toyota-avanza',
    name: 'Toyota Avanza',
    category: 'MPV',
    seats: 6,
    transmission: 'Matic / Manual',
    fuel: 'Bensin',
    luggage: '3 Koper',
    priceLepasKunci: 449000,
    priceDenganSupir: 649000,
    priceCityTour: 849000,
    popular: true,
    badge: 'Paling Laris',
    image: 'https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80',
    features: ['AC Double Blower', 'Audio Bluetooth', 'Hemat BBM', 'Airbags', 'USB Charger']
  },
  {
    id: 'mitsubishi-xpander',
    name: 'Mitsubishi Xpander',
    category: 'MPV',
    seats: 6,
    transmission: 'Matic / Manual',
    fuel: 'Bensin',
    luggage: '3 Koper',
    priceLepasKunci: 449000,
    priceDenganSupir: 649000,
    priceCityTour: 849000,
    popular: true,
    badge: 'Ekstra Nyaman',
    image: 'https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=800&q=80',
    features: ['Kabin Luas', 'Suspensi Empuk', 'Keyless Start', 'AC Digital', 'Cruise Control']
  },
  {
    id: 'innova-reborn',
    name: 'Toyota Innova Reborn',
    category: 'MPV',
    seats: 7,
    transmission: 'Matic / Manual',
    fuel: 'Diesel',
    luggage: '4 Koper',
    priceLepasKunci: 599000,
    priceDenganSupir: 799000,
    priceCityTour: 1049000,
    popular: true,
    badge: 'Favorit Keluarga',
    image: 'https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80',
    features: ['Mesin Diesel Bertenaga', 'Kabin Captain Seat', 'Rear AC', 'Bantingan Stabil', 'Premium Sound']
  },
  {
    id: 'innova-zenix-hybrid',
    name: 'Toyota Innova Zenix HEV',
    category: 'MPV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Hybrid',
    luggage: '4 Koper',
    priceLepasKunci: 699000,
    priceDenganSupir: 899000,
    priceCityTour: 1149000,
    popular: true,
    badge: 'Teknologi Hybrid',
    image: 'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=800&q=80',
    features: ['Irit Bensin Hybrid', 'Panoramic Sunroof', 'Ambient Lighting', 'Toyota Safety Sense', 'Ultra Quiet']
  },
  {
    id: 'fortuner-vrz',
    name: 'Toyota Fortuner VRZ',
    category: 'SUV',
    seats: 7,
    transmission: 'Automatic',
    fuel: 'Diesel',
    luggage: '5 Koper',
    priceLepasKunci: 1649000,
    priceDenganSupir: 1849000,
    priceCityTour: 2199000,
    popular: false,
    badge: 'SUV Gagah & Mewah',
    image: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80',
    features: ['Gagah & Prestisius', 'Leather Interior', 'Power Backdoor', 'Terrain Control', 'VIP Comfort']
  },
  {
    id: 'hiace-commuter',
    name: 'Toyota Hiace Commuter',
    category: 'Mini Bus',
    seats: 14,
    transmission: 'Manual',
    fuel: 'Diesel',
    luggage: '8 Koper',
    priceLepasKunci: null, // Hubungi Admin
    priceDenganSupir: 1149000,
    priceCityTour: 1349000,
    popular: false,
    badge: 'Rombongan & Group',
    image: 'https://images.unsplash.com/photo-1570125909232-eb263c188f7e?auto=format&fit=crop&w=800&q=80',
    features: ['14 Kursi Reclining', 'Kabin Tinggi & Lapang', 'AC Ceiling Individual', 'Cocok Rombongan', 'Bagasi Luas']
  }
];

export const FORMAT_RUPIAH = (val: number) => {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0
  }).format(val);
};
