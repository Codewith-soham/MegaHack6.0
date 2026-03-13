import React, { Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Tractor, Store } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import AnimatedCounter from '../ui/AnimatedCounter';

const GlobeCanvas = React.lazy(() => import('../ui/GlobeCanvas'));

const HeroSection = () => {
  const { t } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Mesh Gradient */}
      <div className="absolute inset-0 pointer-events-none -z-10 bg-[#FAFAF7] overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[60%] h-[60%] rounded-full opacity-30 mix-blend-multiply filter blur-[100px] bg-gradient-to-br from-[#52B788] to-transparent"></div>
        <div className="absolute bottom-[-10%] right-[-10%] w-[70%] h-[70%] rounded-full opacity-20 mix-blend-multiply filter blur-[120px] bg-gradient-to-tl from-[#FDE68A] to-[#1B4332]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Side (Text content) - 55% width on large screens */}
          <div className="lg:w-[55%] z-10 pt-10 lg:pt-0">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center space-x-2 bg-farm-green-light/10 border border-farm-green/20 px-4 py-1.5 rounded-full mb-6 relative">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-farm-green opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-farm-green"></span>
                </span>
                <span className="text-sm font-medium text-farm-green">{t.hero.badge}</span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-display font-extrabold text-farm-green leading-[1.1] mb-6">
                <span className="block font-hindi text-4xl lg:text-5xl mb-2">{t.hero.headlineLine1}</span>
                <span className="block text-farm-gold">{t.hero.headlineLine2}</span>
              </h1>

              <p className="text-lg lg:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed">
                {t.hero.subheadline}
              </p>

              {/* CTAs */}
              <div className="flex flex-col sm:flex-row gap-5 mb-16">
                <Link to="/auth/register?role=farmer" className="group flex-1">
                  <button className="w-full h-16 bg-farm-green text-white rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(27,67,50,0.3)] hover:-translate-y-1 relative overflow-hidden">
                    <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
                    <Tractor size={24} className="group-hover:text-farm-gold transition-colors" />
                    <span className="font-semibold text-lg">{t.hero.farmerCTA}</span>
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-2">{t.hero.farmerCTASub}</p>
                </Link>

                <Link to="/auth/register?role=buyer" className="group flex-1">
                  <button className="w-full h-16 bg-white text-farm-green border-2 border-farm-green rounded-2xl flex items-center justify-center gap-3 transition-all duration-300 hover:bg-farm-gold hover:border-farm-gold hover:text-farm-green hover:scale-105 hover:-translate-y-1">
                    <Store size={24} />
                    <span className="font-semibold text-lg">{t.hero.buyerCTA}</span>
                  </button>
                  <p className="text-xs text-center text-gray-500 mt-2">{t.hero.buyerCTASub}</p>
                </Link>
              </div>

              {/* Animated Stats Row */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-8 border-t border-gray-200/60">
                {t.stats.map((stat, idx) => (
                  <AnimatedCounter key={idx} value={stat.value} label={stat.label} />
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Side (3D Globe) - 45% width on large screens */}
          <div className="w-full lg:w-[45%] h-[500px] lg:h-[700px] relative z-10 flex flex-col items-center justify-center">
            <Suspense fallback={
              <div className="w-full h-full flex flex-col items-center justify-center animate-pulse">
                <div className="w-64 h-64 rounded-full bg-farm-green-light/20 blur-xl"></div>
                <p className="mt-8 text-farm-green font-medium">Loading 3D Market...</p>
              </div>
            }>
              <GlobeCanvas />
            </Suspense>
            
            <div className="absolute bottom-8 lg:bottom-16 bg-white/80 backdrop-blur-md px-6 py-3 rounded-full shadow-lg border border-white flex items-center gap-3">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-farm-green opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-farm-green"></span>
              </span>
              <span className="text-sm font-medium text-gray-800">{t.hero.globeText}</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default HeroSection;
