import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';

const TimelineStep = ({ step, index, align = 'left', theme = 'green' }) => {
  const isLeft = align === 'left';
  const colorClass = theme === 'green' ? 'text-farm-green' : 'text-farm-gold';
  const bgClass = theme === 'green' ? 'bg-farm-green' : 'bg-farm-gold';
  const borderClass = theme === 'green' ? 'border-farm-green' : 'border-farm-gold';

  return (
    <motion.div 
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`relative flex items-center justify-between w-full mb-12 lg:mb-20 ${
        isLeft ? 'flex-row-reverse lg:flex-row' : 'flex-row lg:flex-row-reverse'
      }`}
    >
      {/* Spacer for desktop */}
      <div className="hidden lg:block w-5/12"></div>

      {/* Center Circle & Line */}
      <div className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 flex flex-col items-center justify-center">
        <motion.div 
          className={`w-12 h-12 rounded-full border-4 ${borderClass} bg-white flex items-center justify-center z-10 shadow-lg relative overflow-hidden group`}
          whileHover={{ scale: 1.1 }}
        >
          {/* Fill animation on enter */}
          <motion.div 
            className={`absolute inset-0 ${bgClass}`}
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.2 + 0.3 }}
          ></motion.div>
          <span className="relative z-10 text-xl font-bold font-display text-gray-400 group-hover:text-white transition-colors duration-300">
            {step.number}
          </span>
        </motion.div>
      </div>

      {/* Content */}
      <div className={`w-[calc(100%-70px)] lg:w-5/12 pl-6 lg:pl-0 ${isLeft ? 'lg:pr-12 lg:text-right' : 'lg:pl-12 lg:text-left'} text-left`}>
        <div className={`bg-white p-6 rounded-2xl shadow-lg border hover:shadow-xl transition-shadow relative overflow-hidden group ${
          theme === 'green' ? 'hover:border-farm-green/30' : 'hover:border-farm-gold/30'
        }`}>
          {/* subtle background glow on hover */}
          <div className={`absolute top-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 w-[150%] h-[150%] rounded-full blur-[80px] -z-10 ${
            isLeft ? 'right-[-50%] bg-farm-green/10' : 'left-[-50%] bg-farm-gold/10'
          }`}></div>

          <h3 className={`text-2xl font-display font-bold mb-2 ${colorClass}`}>
            {step.title}
          </h3>
          <p className="text-gray-600">
            {step.desc}
          </p>
        </div>
      </div>
    </motion.div>
  );
};

const HowItWorksSection = () => {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start center", "end center"]
  });

  return (
    <section id="how-it-works" className="py-24 bg-farm-cream relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={containerRef}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 text-center md:text-left">
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-farm-green">
            {t.howItWorks.farmersTitle}
          </h2>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-farm-gold text-left md:text-right">
            {t.howItWorks.buyersTitle}
          </h2>
        </div>

        <div className="relative">
          {/* Vertical Connecting Line (Background) */}
          <div className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gray-200 rounded-full z-0"></div>
          
          {/* Animated Fill Line */}
          <motion.div 
            className="absolute left-[24px] lg:left-1/2 -translate-x-1/2 top-0 bottom-0 w-1 bg-gradient-to-b from-farm-green via-farm-gold to-farm-green rounded-full z-0 origin-top"
            style={{ scaleY: scrollYProgress }}
          ></motion.div>

          <div className="relative z-10">
            {/* We map the steps interlacing them for visual balance */}
            {[0, 1, 2, 3].map((i) => (
              <div key={i}>
                <TimelineStep 
                  step={t.howItWorks.farmerSteps[i]} 
                  index={i * 2} 
                  align="left" 
                  theme="green" 
                />
                <TimelineStep 
                  step={t.howItWorks.buyerSteps[i]} 
                  index={i * 2 + 1} 
                  align="right" 
                  theme="gold" 
                />
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default HowItWorksSection;
