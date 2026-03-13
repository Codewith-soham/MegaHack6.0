import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Tractor, Store, ArrowRight, ArrowLeft } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const RoleSelectModal = ({ onSelect }) => {
  const { t } = useLanguage();

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] px-4 w-full max-w-4xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center w-full"
      >
        <h2 className="text-4xl md:text-5xl font-display font-bold text-farm-green mb-12">
          {t.auth?.whoAreYou || "Who are you?"}
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
          {/* Farmer Select */}
          <motion.button 
            onClick={() => onSelect('farmer')}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-farm-green rounded-3xl p-8 shadow-xl text-left relative overflow-hidden border-2 border-transparent hover:border-farm-gold flex flex-col h-64 md:h-80"
          >
            <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, #fff 10px, #fff 12px)' }}></div>
            <div className="absolute -right-8 -bottom-8 text-white/10 group-hover:text-farm-gold/20 transition-colors duration-500">
              <Tractor size={160} />
            </div>
            
            <div className="mt-auto relative z-10 w-full flex justify-between items-end">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-white">
                {t.auth?.farmerBtn || "Farmer"}
              </h3>
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-farm-gold group-hover:text-farm-green text-white transition-colors">
                <ArrowRight />
              </div>
            </div>
          </motion.button>

          {/* Buyer Select */}
          <motion.button 
            onClick={() => onSelect('buyer')}
            whileHover={{ y: -10, scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="group bg-gradient-to-br from-[#F59E0B] to-[#D97706] rounded-3xl p-8 shadow-xl text-left relative overflow-hidden border-2 border-transparent hover:border-farm-green flex flex-col h-64 md:h-80"
          >
            <div className="absolute -right-8 -bottom-8 text-black/10 group-hover:text-farm-green/20 transition-colors duration-500">
              <Store size={160} />
            </div>

            <div className="mt-auto relative z-10 w-full flex justify-between items-end">
              <h3 className="text-3xl md:text-4xl font-display font-bold text-[#0F2D1F]">
                {t.auth?.buyerBtn || "Buyer"}
              </h3>
              <div className="w-12 h-12 rounded-full bg-black/10 flex items-center justify-center group-hover:bg-farm-green text-[#0F2D1F] group-hover:text-white transition-colors">
                <ArrowRight />
              </div>
            </div>
          </motion.button>
        </div>
      </motion.div>
    </div>
  );
};

const RegistrationForm = ({ role, onBack }) => {
  const { t } = useLanguage();
  const isFarmer = role === 'farmer';

  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -50 }}
      className="max-w-6xl mx-auto w-full flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden min-h-[600px] my-10"
    >
      {/* Visual Side */}
      <div className={`hidden md:flex w-1/2 p-12 flex-col justify-between relative overflow-hidden ${
        isFarmer ? 'bg-farm-green text-white' : 'bg-farm-gold text-farm-green'
      }`}>
        <div className="absolute inset-0 opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
        
        <div className="relative z-10">
          <button onClick={onBack} className="flex items-center gap-2 opacity-80 hover:opacity-100 transition-opacity mb-12">
            <ArrowLeft size={20} /> Back
          </button>
          <h2 className="text-5xl font-display font-bold leading-tight">
            {isFarmer ? "Grow your business with KrishiMitra." : "Discover fresh produce directly from farms."}
          </h2>
        </div>

        <div className="relative z-10 text-[200px] leading-none opacity-50 place-self-end mt-auto">
          {isFarmer ? <Tractor size={200} strokeWidth={1} /> : <Store size={200} strokeWidth={1} />}
        </div>
      </div>

      {/* Form Side */}
      <div className="w-full md:w-1/2 p-8 md:p-12 flex flex-col justify-center">
        <div className="md:hidden flex mb-8">
          <button onClick={onBack} className="flex items-center gap-2 text-gray-500">
            <ArrowLeft size={16} /> Back
          </button>
        </div>

        <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
          {isFarmer ? t.auth?.createFarmer : t.auth?.createBuyer}
        </h2>
        <p className="text-gray-500 mb-8">
          Join India's largest direct farm marketplace.
        </p>

        <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 block">First Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
            </div>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 block">Last Name</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
            </div>
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
            <input type="tel" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
          </div>

          <div className="space-y-1">
            <label className="text-sm font-medium text-gray-700 block">Password</label>
            <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
          </div>

          {/* Role specific fields */}
          {isFarmer ? (
            <div className="space-y-1 mt-4 pt-4 border-t border-gray-100">
              <label className="text-sm font-medium text-gray-700 block">Primary Crops</label>
              <input type="text" placeholder="e.g. Wheat, Tomatoes, Onions" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
            </div>
          ) : (
            <div className="space-y-1 mt-4 pt-4 border-t border-gray-100">
              <label className="text-sm font-medium text-gray-700 block">Business Type</label>
              <select className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all text-gray-700">
                <option>Restaurant / Cafe</option>
                <option>Retail Store</option>
                <option>Wholesaler</option>
                <option>Individual</option>
              </select>
            </div>
          )}

          <button className={`w-full text-white font-bold text-lg rounded-xl px-4 py-4 mt-6 hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${
            isFarmer ? 'bg-farm-green hover:bg-farm-green-light' : 'bg-farm-gold text-farm-green hover:bg-yellow-500'
          }`}>
            {isFarmer ? t.auth?.createFarmer : t.auth?.createBuyer}
          </button>
        </form>

        <div className="mt-8 text-center text-gray-500 text-sm">
          <Link to="/auth/login" className="hover:text-farm-green font-medium transition-colors">
            {t.auth?.alreadyRegistered || "Already registered? Login →"}
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const Register = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const currentRole = searchParams.get('role');

  const handleRoleSelect = (role) => {
    setSearchParams({ role });
  };

  const handleBack = () => {
    setSearchParams({});
  };

  return (
    <div className="min-h-screen pt-24 pb-12 bg-farm-cream px-4 sm:px-6 flex items-center justify-center">
      <AnimatePresence mode="wait">
        {!currentRole ? (
          <RoleSelectModal key="select" onSelect={handleRoleSelect} />
        ) : (
          <RegistrationForm key="form" role={currentRole} onBack={handleBack} />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Register;
