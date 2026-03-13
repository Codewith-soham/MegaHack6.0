import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Clock, Leaf } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const CropCard = ({ crop, delay = 0 }) => {
  const { t } = useLanguage();

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -10,
        rotateY: 3,
        rotateX: -2,
        boxShadow: "0 20px 25px -5px rgba(27, 67, 50, 0.1), 0 10px 10px -5px rgba(27, 67, 50, 0.04)"
      }}
      className="bg-white rounded-2xl overflow-hidden shadow-md border border-gray-100 group relative perspective-1000"
    >
      {/* Shimmer effect on hover */}
      <div className="absolute inset-0 -translate-x-full group-hover:animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/40 to-transparent z-20 pointer-events-none"></div>

      {/* Top Banner (Gradient + Emoji) */}
      <div className={`h-32 bg-gradient-to-br ${crop.gradient} relative flex items-center justify-center overflow-hidden`}>
        <motion.div 
          className="text-6xl drop-shadow-md z-10"
          whileHover={{ scale: 1.3 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {crop.emoji}
        </motion.div>
        
        {/* Organic Badge */}
        {crop.organic && (
          <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-farm-green text-xs font-bold px-2 py-1 rounded-full flex items-center gap-1 shadow-sm z-10">
            <Leaf size={12} fill="currentColor" />
            {t.marketplace.organic}
          </div>
        )}
      </div>

      <div className="p-5">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-2xl font-display font-bold text-gray-800">{crop.name}</h3>
          <div className="text-xl font-bold text-farm-gold bg-farm-gold/10 px-2 py-1 rounded">
            {crop.price}
          </div>
        </div>

        <div className="space-y-2 mb-6">
          <div className="flex items-center gap-2 text-sm text-gray-600">
            <div className="w-6 h-6 rounded-full bg-farm-green-light/20 flex items-center justify-center text-farm-green font-bold text-xs uppercase">
              {crop.farmer.charAt(0)}
            </div>
            <span className="font-medium text-gray-700">{crop.farmer}</span>
            <span className="text-gray-300">•</span>
            <span className="flex items-center gap-1 text-farm-green bg-farm-green-light/10 px-2 py-0.5 rounded-full">
              <MapPin size={12} /> {crop.location}
            </span>
          </div>
          
          <div className="flex justify-between text-sm text-gray-500 pt-2 border-t border-gray-100">
            <span>{crop.qty} {t.marketplace.available}</span>
            <span className="flex items-center gap-1"><Clock size={12} /> {crop.time}</span>
          </div>
        </div>

        <div className="flex gap-2">
          <button className="flex-1 px-4 py-2 border border-gray-200 text-gray-600 font-medium rounded-xl hover:bg-gray-50 transition-colors">
            {t.marketplace.viewDetails}
          </button>
          <button className="flex-1 px-4 py-2 bg-farm-green text-white font-medium rounded-xl hover:bg-farm-green-light transition-colors shadow-sm hover:shadow-md">
            {t.marketplace.requestOrder}
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default CropCard;
