import React from 'react';
import { motion } from 'framer-motion';
import { Tractor, Store, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const CTASection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative w-full min-h-[60vh] flex items-center justify-center py-20 overflow-hidden bg-farm-green-light/10">
      
      {/* Animated SVG Field Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none" className="absolute bottom-0 w-full h-full opacity-30">
          <motion.path 
            fill="#52B788" 
            fillOpacity="1" 
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            animate={{ 
              d: [
                "M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z",
                "M0,160L48,176C96,192,192,224,288,213.3C384,203,480,149,576,144C672,139,768,181,864,197.3C960,213,1056,203,1152,197.3C1248,192,1344,192,1392,192L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              ]
            }}
            transition={{ duration: 10, repeat: Infinity, repeatType: "reverse", ease: "easeInOut" }}
          ></motion.path>
        </svg>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 text-center">
        <h2 className="text-5xl lg:text-6xl font-display font-bold text-farm-green mb-16 drop-shadow-sm">
          {t.cta.headline}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          
          {/* Farmer Card */}
          <Link to="/auth/register?role=farmer" className="block">
            <motion.div 
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-farm-green rounded-3xl p-8 shadow-xl text-left relative overflow-hidden group h-full border-2 border-transparent hover:border-farm-gold"
            >
              {/* Decorative line art field texture */}
              <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)' }}></div>
              <div className="absolute -right-8 -top-8 text-white/10 group-hover:text-farm-gold/20 transition-colors duration-500">
                <Tractor size={160} />
              </div>
              
              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-white mb-3">{t.cta.farmerTitle}</h3>
                <p className="text-farm-cream/80 text-lg mb-8 max-w-[80%]">{t.cta.farmerDesc}</p>
                
                <div className="inline-flex items-center gap-2 bg-farm-gold text-farm-green font-bold px-6 py-3 rounded-xl group-hover:bg-white transition-colors shadow-md">
                  {t.cta.farmerBtn} <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Buyer Card */}
          <Link to="/auth/register?role=buyer" className="block">
            <motion.div 
              whileHover={{ y: -12, scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl p-8 shadow-xl text-left relative overflow-hidden group h-full border-2 border-transparent hover:border-farm-green"
            >
              {/* Decorative line art store texture */}
              <div className="absolute -right-8 -bottom-8 text-black/10 group-hover:text-farm-green/20 transition-colors duration-500">
                <Store size={160} />
              </div>

              <div className="relative z-10">
                <h3 className="text-3xl font-display font-bold text-[#0F2D1F] mb-3">{t.cta.buyerTitle}</h3>
                <p className="text-[#0F2D1F]/80 font-medium text-lg mb-8 max-w-[80%]">{t.cta.buyerDesc}</p>
                
                <div className="inline-flex items-center gap-2 bg-farm-green text-white font-bold px-6 py-3 rounded-xl group-hover:bg-[#0F2D1F] transition-colors shadow-md">
                  {t.cta.buyerBtn} <ArrowRight size={18} />
                </div>
              </div>
            </motion.div>
          </Link>

        </div>
      </div>
    </section>
  );
};

export default CTASection;
