import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { ArrowDown, DollarSign, Store, Tractor, Smartphone, Search, CheckCircle } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const ScrollFarmScene = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const { t } = useLanguage();
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    return scrollYProgress.on("change", (latest) => {
      setProgress(latest);
    });
  }, [scrollYProgress]);

  // Interpolate sky color based on progress
  const skyColor = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 1],
    ['#FDE68A', '#9CA3AF', '#60A5FA', '#93C5FD', '#DBEAFE']
  );

  const getScene = () => {
    if (progress < 0.2) return 0;
    if (progress < 0.4) return 1;
    if (progress < 0.6) return 2;
    if (progress < 0.8) return 3;
    return 4;
  };

  const sceneIndex = getScene();

  const farmerIcon = <Tractor size={48} className="text-farm-green" />;
  const buyerIcon = <Store size={48} className="text-farm-gold" />;

  return (
    <div ref={containerRef} className="relative w-full" style={{ height: '500vh' }}>
      
      {/* Scroll Progress Bar at the top of the viewport */}
      <motion.div 
        className="fixed top-20 left-0 h-1 bg-farm-green z-40 origin-left"
        style={{ scaleX: scrollYProgress, width: '100%' }}
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden">
        {/* Dynamic Sky Background */}
        <motion.div 
          className="absolute inset-0 transition-colors duration-300"
          style={{ backgroundColor: skyColor }}
        >
          {/* Ground / Fields common to all scenes */}
          <div className="absolute bottom-0 w-full h-[30%] bg-gradient-to-t from-farm-green-mid to-farm-green z-0" style={{ clipPath: 'ellipse(150% 100% at 50% 100%)' }}></div>
        </motion.div>

        {/* Scene Content Containers */}
        <div className="relative w-full h-full z-10 flex flex-col items-center justify-center">

          <AnimatePresence mode="wait">
            {/* SCENE 0: Dawn on the farm */}
            {sceneIndex === 0 && (
              <motion.div 
                key="scene0"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                className="flex flex-col items-center text-center"
              >
                <div className="bg-white/80 p-8 rounded-full mb-8 shadow-xl">
                  {farmerIcon}
                </div>
                <h2 className="text-5xl font-display font-bold text-farm-green drop-shadow-md">
                  {t.scrollStory.scene0}
                </h2>
                <div className="mt-12 animate-bounce bg-white/50 p-3 rounded-full">
                  <ArrowDown className="text-farm-green" />
                </div>
              </motion.div>
            )}

            {/* SCENE 1: The problem — middleman chain */}
            {sceneIndex === 1 && (
              <motion.div 
                key="scene1"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center w-full max-w-5xl px-4"
              >
                <h2 className="text-4xl font-display font-bold text-gray-800 mb-16 text-center bg-white/70 px-6 py-2 rounded-2xl">
                  {t.scrollStory.scene1}
                </h2>
                
                <div className="flex items-center justify-between w-full relative">
                  {/* Farmer */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-16 h-16 bg-farm-green text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <Tractor size={24} />
                    </div>
                    <span className="mt-2 font-bold bg-white text-farm-green px-2 rounded">₹5/kg</span>
                  </div>

                  {/* Middlemen */}
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i}
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="flex flex-col items-center relative z-10"
                    >
                      <div className="w-12 h-12 bg-gray-800 text-white rounded-full flex items-center justify-center shadow-lg border-2 border-white relative">
                        <span className="text-xs font-bold">M{i}</span>
                        {/* Red X animation */}
                        <motion.div 
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: 1 + i * 0.1, type: "spring" }}
                          className="absolute inset-0 bg-red-500/80 rounded-full flex items-center justify-center"
                        >
                          <span className="text-white font-bold text-xl">✕</span>
                        </motion.div>
                      </div>
                    </motion.div>
                  ))}

                  {/* Buyer */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-16 h-16 bg-gray-600 text-white rounded-full flex items-center justify-center shadow-lg border-4 border-white">
                      <Store size={24} />
                    </div>
                    <span className="mt-2 font-bold bg-red-100 text-red-600 px-2 rounded">₹40/kg</span>
                  </div>

                  {/* Connecting Line */}
                  <div className="absolute top-8 left-0 w-full h-1 bg-gray-400 -z-10"></div>
                </div>
              </motion.div>
            )}

            {/* SCENE 2: The Solution */}
            {sceneIndex === 2 && (
              <motion.div 
                key="scene2"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 1.1 }}
                className="flex flex-col items-center w-full max-w-4xl px-4"
              >
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mb-12 text-center drop-shadow-lg">
                  {t.scrollStory.scene2}
                </h2>
                
                <div className="flex items-center justify-between w-full relative h-40">
                  {/* Farmer */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-20 h-20 bg-farm-green text-white rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(27,67,50,0.5)] border-4 border-white">
                      <Tractor size={32} />
                    </div>
                    <span className="mt-3 font-bold bg-white text-farm-green px-3 py-1 rounded-full text-lg shadow-md">₹18/kg</span>
                  </div>

                  {/* Direct connection beam */}
                  <motion.div 
                    initial={{ scaleX: 0 }}
                    animate={{ scaleX: 1 }}
                    transition={{ duration: 0.5 }}
                    className="absolute top-10 left-10 right-10 h-3 bg-gradient-to-r from-farm-green via-farm-gold-light to-farm-gold shadow-[0_0_15px_rgba(245,158,11,0.6)] origin-left z-0"
                  ></motion.div>

                  {/* Floating Device UI */}
                  <motion.div 
                    initial={{ y: 100, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.3 }}
                    className="absolute left-1/2 -translate-x-1/2 top-4 w-24 h-40 bg-white rounded-xl shadow-2xl border-4 border-gray-800 z-20 flex flex-col pt-2 px-1"
                  >
                    <div className="w-6 h-1 bg-gray-200 rounded-full mx-auto mb-2"></div>
                    <div className="w-full h-8 bg-farm-green-light/20 rounded mb-1"></div>
                    <div className="w-full flex gap-1 mb-1">
                      <div className="w-1/2 h-6 bg-gray-100 rounded"></div>
                      <div className="w-1/2 h-6 bg-gray-100 rounded"></div>
                    </div>
                    <div className="w-full h-6 bg-farm-gold/30 rounded mt-auto mb-1"></div>
                  </motion.div>

                  {/* Buyer */}
                  <div className="flex flex-col items-center z-10">
                    <div className="w-20 h-20 bg-farm-gold text-farm-green rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(245,158,11,0.5)] border-4 border-white">
                      <Store size={32} />
                    </div>
                    <span className="mt-3 font-bold bg-white text-farm-green px-3 py-1 rounded-full text-lg shadow-md">₹18/kg</span>
                  </div>
                </div>
              </motion.div>
            )}

            {/* SCENE 3: The marketplace coming alive */}
            {sceneIndex === 3 && (
              <motion.div 
                key="scene3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center w-full max-w-5xl px-4"
              >
                {/* Search Bar */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  className="bg-white px-6 py-4 rounded-full shadow-xl flex items-center gap-4 w-full max-w-md mx-auto mb-12 border-2 border-farm-green/20"
                >
                  <Search className="text-farm-green" />
                  <span className="text-gray-500 font-mono text-sm border-r-2 border-farm-green pr-1 animate-pulse">
                    tomatoes near Pune...
                  </span>
                </motion.div>

                {/* Floating Cards */}
                <div className="relative w-full h-[300px]">
                  {[
                    { emoji: '🍅', name: 'Tomato', price: '₹22/kg', loc: 'Pune', pos: { top: '10%', left: '10%' }, delay: 0.1 },
                    { emoji: '🌽', name: 'Maize', price: '₹14/kg', loc: 'Nagpur', pos: { top: '60%', left: '20%' }, delay: 0.2 },
                    { emoji: '🧅', name: 'Onion', price: '₹12/kg', loc: 'Nashik', pos: { top: '5%', right: '15%' }, delay: 0.3 },
                    { emoji: '🌾', name: 'Wheat', price: '₹28/kg', loc: 'Amravati', pos: { top: '50%', right: '10%' }, delay: 0.4 },
                    { emoji: '🥔', name: 'Potato', price: '₹15/kg', loc: 'Satara', pos: { top: '30%', left: '40%' }, delay: 0.5 },
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ scale: 0, scale: 0 }}
                      animate={{ scale: 1, scale: 1 }}
                      transition={{ type: "spring", delay: item.delay }}
                      style={item.pos}
                      className="absolute bg-white p-3 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-float"
                      style={{ ...item.pos, animationDelay: `${i * 0.5}s` }}
                    >
                      <div className="text-3xl bg-farm-green-light/10 p-2 rounded-lg">{item.emoji}</div>
                      <div>
                        <div className="font-bold text-gray-800">{item.name}</div>
                        <div className="flex gap-2 text-xs">
                          <span className="text-farm-green font-bold">{item.price}</span>
                          <span className="text-gray-400">• {item.loc}</span>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <h2 className="text-3xl font-display font-bold text-farm-green mt-8 text-center bg-white/80 px-6 py-3 rounded-xl shadow-sm backdrop-blur-sm">
                  {t.scrollStory.scene3}
                </h2>
              </motion.div>
            )}

            {/* SCENE 4: Order placed — celebration */}
            {sceneIndex === 4 && (
              <motion.div 
                key="scene4"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                className="flex flex-col items-center justify-center w-full"
              >
                <div className="relative w-40 h-40 mb-8">
                  <motion.svg 
                    viewBox="0 0 100 100" 
                    className="absolute inset-0 w-full h-full text-farm-green drop-shadow-xl"
                  >
                    <motion.circle 
                      cx="50" cy="50" r="45" 
                      fill="none" stroke="currentColor" strokeWidth="8"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, ease: "easeOut" }}
                    />
                    <motion.path 
                      d="M25 50 L45 70 L75 30" 
                      fill="none" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round"
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 0.5, delay: 1 }}
                    />
                  </motion.svg>
                  
                  {/* Confetti */}
                  {[...Array(15)].map((_, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: '50%', y: '50%', scale: 0 }}
                      animate={{ 
                        x: `${50 + (Math.random() * 200 - 100)}%`, 
                        y: `${50 + (Math.random() * 200 - 100)}%`,
                        scale: Math.random() + 0.5,
                        opacity: 0
                      }}
                      transition={{ duration: 1.5, delay: 1.5, ease: "easeOut" }}
                      className={`absolute w-3 h-3 rounded-full ${['bg-farm-green', 'bg-farm-gold', 'bg-blue-400', 'bg-red-400'][Math.floor(Math.random()*4)]}`}
                    />
                  ))}
                </div>

                <h2 className="text-4xl lg:text-5xl font-display font-bold text-farm-green text-center mb-12 max-w-2xl px-4 drop-shadow-sm">
                  {t.scrollStory.scene4}
                </h2>

                <motion.button 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 2 }}
                  className="bg-farm-gold text-farm-green font-bold text-xl px-10 py-5 rounded-full shadow-xl hover:scale-105 transition-transform"
                >
                  {t.scrollStory.finalCTA}
                </motion.button>
              </motion.div>
            )}
          </AnimatePresence>

        </div>
      </div>
    </div>
  );
};

export default ScrollFarmScene;
