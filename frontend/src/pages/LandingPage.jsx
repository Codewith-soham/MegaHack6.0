import React from 'react';
import HeroSection from '../components/sections/HeroSection';
import ScrollFarmScene from '../components/sections/ScrollFarmScene';
import FeaturesSection from '../components/sections/FeaturesSection';
import HowItWorksSection from '../components/sections/HowItWorksSection';
import MarketplacePreview from '../components/sections/MarketplacePreview';
import TestimonialsSection from '../components/sections/TestimonialsSection';
import CTASection from '../components/sections/CTASection';

const LandingPage = () => {
  return (
    <div className="bg-farm-cream min-h-screen">
      <HeroSection />
      <ScrollFarmScene />
      <FeaturesSection />
      <HowItWorksSection />
      <MarketplacePreview />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
};

export default LandingPage;
