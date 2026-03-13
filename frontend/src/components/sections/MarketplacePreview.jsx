import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import CropCard from '../ui/CropCard';

const dummyListings = [
  { id: 1, name: 'Red Tomatoes', emoji: '🍅', price: '₹22/kg', farmer: 'Ramesh Patil', location: 'Pune', qty: '240 kg', time: '2 days ago', gradient: 'from-red-400 to-red-600', organic: true },
  { id: 2, name: 'Premium Wheat', emoji: '🌾', price: '₹28/kg', farmer: 'Surinder Singh', location: 'Ambala', qty: '1200 kg', time: '5 days ago', gradient: 'from-amber-300 to-amber-500', organic: false },
  { id: 3, name: 'Fresh Maize', emoji: '🌽', price: '₹14/kg', farmer: 'Vijay Kumar', location: 'Nagpur', qty: '800 kg', time: '1 day ago', gradient: 'from-yellow-400 to-orange-500', organic: true },
  { id: 4, name: 'Red Onions', emoji: '🧅', price: '₹12/kg', farmer: 'Ashok Rao', location: 'Nashik', qty: '500 kg', time: 'Today', gradient: 'from-purple-400 to-purple-600', organic: false },
  { id: 5, name: 'Potatoes (Large)', emoji: '🥔', price: '₹15/kg', farmer: 'Suresh Deshmukh', location: 'Satara', qty: '650 kg', time: '3 days ago', gradient: 'from-yellow-700 to-yellow-900', organic: true },
  { id: 6, name: 'Green Cabbage', emoji: '🥬', price: '₹18/kg', farmer: 'Vinayak Joshi', location: 'Kolhapur', qty: '150 kg', time: 'Just now', gradient: 'from-green-400 to-green-600', organic: true },
];

const MarketplacePreview = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-farm-green mb-4">
            {t.marketplace.title}
          </h2>
          <p className="text-xl text-gray-500">
            {t.marketplace.subtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16 relative">
          {dummyListings.map((crop, idx) => (
            <CropCard key={crop.id} crop={crop} delay={idx * 0.1} />
          ))}

          {/* Blur gradient at bottom to indicate more items */}
          <div className="absolute -bottom-8 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none z-10"></div>
        </div>

      </div>

      {/* Infinite Horizontal Ticker */}
      <div className="w-full bg-farm-green text-farm-cream py-3 overflow-hidden whitespace-nowrap border-y border-farm-green-light relative group">
        <div className="inline-block animate-ticker group-hover:pause">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="inline-flex items-center px-4 font-medium text-sm">
              <span className="mx-4">🍅 Tomato — Pune — ₹22/kg</span> <span className="text-farm-gold">|</span>
              <span className="mx-4">🌾 Wheat — Ambala — ₹28/kg</span> <span className="text-farm-gold">|</span>
              <span className="mx-4">🌽 Maize — Nagpur — ₹14/kg</span> <span className="text-farm-gold">|</span>
              <span className="mx-4">🧅 Onion — Nashik — ₹12/kg</span> <span className="text-farm-gold">|</span>
              <span className="mx-4">🥔 Potato — Satara — ₹15/kg</span> <span className="text-farm-gold">|</span>
              <span className="mx-4">🥬 Cabbage — Kolhapur — ₹18/kg</span> <span className="text-farm-gold">|</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MarketplacePreview;
