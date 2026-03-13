import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';

const AnimatedCounter = ({ value, label, suffix = '', prefix = '' }) => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [count, setCount] = useState(0);

  useEffect(() => {
    if (inView) {
      // Parse numeric value
      const target = parseFloat(value.replace(/[^0-9.]/g, ''));
      const duration = 2000;
      const steps = 60;
      const stepTime = duration / steps;
      let currentStep = 0;

      const timer = setInterval(() => {
        currentStep++;
        setCount((target * (currentStep / steps)));
        if (currentStep >= steps) {
          clearInterval(timer);
          setCount(target);
        }
      }, stepTime);

      return () => clearInterval(timer);
    }
  }, [inView, value]);

  // Handle displaying "Cr" or "+" symbols directly from string if needed
  const displayValue = value.includes('Cr') 
    ? `${prefix}${count.toFixed(1)}Cr${suffix}` 
    : value.includes('+') 
      ? `${prefix}${Math.floor(count)}+${suffix}`
      : value.includes('★')
        ? `${Math.floor(count * 10) / 10}★`
        : `${prefix}${Math.floor(count)}${suffix}`;

  return (
    <div ref={ref} className="flex flex-col">
      <div className="text-3xl font-display font-bold text-farm-green">
        {displayValue}
      </div>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wider mt-1">
        {label}
      </div>
    </div>
  );
};

export default AnimatedCounter;
