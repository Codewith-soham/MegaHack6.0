import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Search, TrendingUp, BarChart3, LayoutDashboard, MapPinned } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { type: 'spring', stiffness: 50, damping: 15 } 
  }
};

const FeatureCard = ({ title, desc, colSpan, bgClass, children, icon: Icon }) => {
  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className={`relative rounded-3xl overflow-hidden border-2 border-transparent hover:border-farm-gold transition-colors duration-300 shadow-lg group ${colSpan} ${bgClass}`}
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
      
      <div className="p-8 h-full flex flex-col z-10 relative">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h3 className="text-2xl font-display font-bold mb-2 group-hover:text-farm-gold transition-colors">
              {title}
            </h3>
            <p className="text-sm opacity-80 max-w-[80%] font-medium">
              {desc}
            </p>
          </div>
          <div className="bg-white/20 p-3 rounded-xl backdrop-blur-sm group-hover:rotate-[360deg] transition-transform duration-500 ease-in-out">
            <Icon size={24} className="opacity-90" />
          </div>
        </div>

        <div className="mt-auto flex-1 relative min-h-[120px]">
          {children}
        </div>
      </div>
    </motion.div>
  );
};

const FeaturesSection = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <h2 className="text-5xl font-display font-bold text-farm-green mb-4">
            {t.features.title}
          </h2>
          <p className="text-xl text-farm-gold font-medium">
            {t.features.subtitle}
          </p>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[280px]"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1: Crop Listing (Large 2 cols) */}
          <FeatureCard 
            title={t.features.items[0].title}
            desc={t.features.items[0].desc}
            colSpan="lg:col-span-2"
            bgClass="bg-gradient-to-br from-farm-green-light/20 to-farm-green-mid/10 text-farm-green"
            icon={Leaf}
          >
            <div className="absolute right-0 bottom-0 w-[80%] bg-white rounded-tl-xl shadow-lg border-t border-l border-gray-100 p-4">
              <div className="flex flex-col gap-3">
                <div className="h-2 w-1/3 bg-gray-200 rounded animate-pulse"></div>
                <div className="h-8 w-full bg-gray-100 rounded border border-gray-200"></div>
                <div className="flex gap-2">
                  <div className="h-8 w-1/2 bg-gray-100 rounded border border-gray-200"></div>
                  <div className="h-8 w-1/2 bg-farm-green/10 rounded border border-farm-green flex items-center px-2">
                    <span className="text-xs text-farm-green font-bold text-transparent bg-clip-text bg-gradient-to-r from-farm-green to-farm-green-light animate-[shimmer_2s_infinite] bg-[length:200%_auto]">₹___ / kg</span>
                  </div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 2: Smart Search */}
          <FeatureCard 
            title={t.features.items[1].title}
            desc={t.features.items[1].desc}
            colSpan="lg:col-span-1"
            bgClass="bg-gray-50 text-gray-800"
            icon={Search}
          >
            <div className="absolute inset-x-0 top-4">
              <div className="bg-white border rounded-full px-4 py-2 shadow-sm text-sm font-mono flex items-center">
                <Search size={14} className="text-gray-400 mr-2" />
                <span className="overflow-hidden whitespace-nowrap animate-[typing_4s_steps(20,end)_infinite] border-r-2 border-black pr-1 w-full inline-block">
                  wheat, Maharashtra
                </span>
                <style>{`@keyframes typing { 0%, 20% { width: 0 } 80%, 100% { width: 100% } }`}</style>
              </div>
              <div className="mt-3 space-y-2">
                <div className="h-10 bg-white rounded-lg shadow-sm border p-2 flex items-center opacity-70">
                  <div className="w-6 h-6 bg-farm-gold/20 rounded mr-2"></div>
                  <div className="w-16 h-2 bg-gray-200 rounded"></div>
                </div>
                <div className="h-10 bg-white rounded-lg shadow-sm border p-2 flex items-center opacity-50">
                  <div className="w-6 h-6 bg-farm-gold/20 rounded mr-2"></div>
                  <div className="w-12 h-2 bg-gray-200 rounded"></div>
                </div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 3: Order System */}
          <FeatureCard 
            title={t.features.items[2].title}
            desc={t.features.items[2].desc}
            colSpan="lg:col-span-1"
            bgClass="bg-blue-50 text-blue-900"
            icon={TrendingUp}
          >
            <div className="absolute inset-0 flex items-center px-2">
              <div className="w-full flex justify-between relative">
                <div className="absolute top-2 left-4 right-4 h-1 bg-blue-200 z-0"></div>
                <motion.div 
                  className="absolute top-2 left-4 h-1 bg-blue-500 z-0 origin-left"
                  animate={{ scaleX: [0, 0.5, 1] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                ></motion.div>
                
                {[1,2,3].map((step, i) => (
                  <div key={i} className="flex flex-col items-center z-10 relative bg-blue-50">
                    <motion.div 
                      className="w-5 h-5 rounded-full border-4 border-blue-50 bg-blue-500"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 0.5, delay: i * 1.3, repeat: Infinity, repeatDelay: 3 }}
                    ></motion.div>
                    <span className="text-[10px] mt-1 font-bold">{['Pending', 'Accepted', 'Delivered'][i]}</span>
                  </div>
                ))}
              </div>
            </div>
          </FeatureCard>

          {/* Card 4: AI Price Hint (Large 2 cols) */}
          <FeatureCard 
            title={t.features.items[3].title}
            desc={t.features.items[3].desc}
            colSpan="lg:col-span-2 lg:col-start-1 lg:row-start-2"
            bgClass="bg-farm-green text-white"
            icon={BarChart3}
          >
            <div className="absolute bottom-0 inset-x-4 flex justify-between items-end h-32 opacity-90">
              {[40, 60, 45, 80, 50, 65, 90].map((h, i) => (
                <div key={i} className="w-[10%] relative flex flex-col items-center justify-end h-full group/bar">
                  {i === 3 && (
                    <motion.div 
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute -top-8 bg-farm-gold text-farm-green text-xs font-bold px-2 py-1 rounded shadow-lg whitespace-nowrap z-20"
                    >
                      Suggest: ₹22/kg
                    </motion.div>
                  )}
                  <motion.div 
                    className={`w-full rounded-t-sm ${i === 3 ? 'bg-farm-gold' : 'bg-white/20'}`}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: i * 0.1 }}
                    viewport={{ once: true }}
                  ></motion.div>
                </div>
              ))}
            </div>
          </FeatureCard>

          {/* Card 5: Farmer Dashboard */}
          <FeatureCard 
            title={t.features.items[4].title}
            desc={t.features.items[4].desc}
            colSpan="lg:col-span-1 lg:col-start-3 lg:row-start-2"
            bgClass="bg-orange-50 text-orange-900"
            icon={LayoutDashboard}
          >
            <div className="grid grid-cols-2 gap-2 absolute inset-x-0 bottom-4">
              <div className="bg-white p-2 rounded shadow-sm border">
                <div className="text-[10px] text-gray-500 mb-1">Earnings</div>
                <div className="text-sm font-bold text-farm-green">₹14K</div>
              </div>
              <div className="bg-white p-2 rounded shadow-sm border">
                <div className="text-[10px] text-gray-500 mb-1">Orders</div>
                <div className="text-sm font-bold text-farm-green">12</div>
              </div>
              <div className="bg-white p-2 rounded shadow-sm border col-span-2">
                <div className="text-[10px] text-gray-500 mb-1">Active Listings</div>
                <div className="text-sm font-bold text-farm-green">Wheat, Soy</div>
              </div>
            </div>
          </FeatureCard>

          {/* Card 6: Buyer Marketplace */}
          <FeatureCard 
            title={t.features.items[5].title}
            desc={t.features.items[5].desc}
            colSpan="lg:col-span-1 lg:col-start-4 lg:row-start-2"
            bgClass="bg-[#FAFAF7] text-farm-green"
            icon={MapPinned}
          >
            <div className="absolute inset-0 flex items-center justify-center opacity-40">
              <svg viewBox="0 0 100 100" className="w-full h-full p-4">
                <path d="M10 50 Q 30 10, 50 50 T 90 50" fill="none" stroke="#52B788" strokeWidth="2" strokeDasharray="4 4" />
                <circle cx="20" cy="40" r="3" fill="#F59E0B" />
                <circle cx="50" cy="50" r="4" fill="#1B4332" />
                <circle cx="80" cy="60" r="3" fill="#F59E0B" />
              </svg>
            </div>
          </FeatureCard>

        </motion.div>

      </div>
    </section>
  );
};

export default FeaturesSection;
