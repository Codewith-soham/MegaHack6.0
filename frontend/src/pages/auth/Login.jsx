import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Tractor, Store } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Login = () => {
  const [role, setRole] = useState('farmer'); // Default login view
  const { t } = useLanguage();
  const isFarmer = role === 'farmer';

  return (
    <div className="min-h-screen pt-24 pb-12 bg-farm-cream px-4 flex items-center justify-center">
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="w-full max-w-md bg-white rounded-3xl shadow-xl overflow-hidden"
      >
        {/* Role Toggle Tabs */}
        <div className="flex w-full">
          <button 
            onClick={() => setRole('farmer')}
            className={`flex-1 py-4 text-center font-bold text-lg transition-colors flex items-center justify-center gap-2 ${
              isFarmer ? 'bg-farm-green text-white' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <Tractor size={20} /> {t.auth?.farmerBtn || 'Farmer'}
          </button>
          <button 
            onClick={() => setRole('buyer')}
            className={`flex-1 py-4 text-center font-bold text-lg transition-colors flex items-center justify-center gap-2 ${
              !isFarmer ? 'bg-farm-gold text-farm-green' : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
            }`}
          >
            <Store size={20} /> {t.auth?.buyerBtn || 'Buyer'}
          </button>
        </div>

        <div className="p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-2">
              {t.auth?.loginTitle || "Welcome back"}
            </h2>
            <p className="text-gray-500">
              Login as {isFarmer ? 'a farmer' : 'a buyer'} to continue.
            </p>
          </div>

          <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
            <div className="space-y-1">
              <label className="text-sm font-medium text-gray-700 block">Phone Number or Email</label>
              <input type="text" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center">
                <label className="text-sm font-medium text-gray-700 block">Password</label>
                <a href="#" className="text-xs text-farm-green hover:underline">
                  {t.auth?.forgotPassword || "Forgot password?"}
                </a>
              </div>
              <input type="password" className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-farm-green/50 focus:bg-white transition-all" />
            </div>

            <button className={`w-full text-white font-bold text-lg rounded-xl px-4 py-3 mt-8 hover:shadow-lg transition-all transform hover:-translate-y-0.5 ${
              isFarmer ? 'bg-farm-green hover:bg-farm-green-light' : 'bg-farm-gold text-farm-green hover:bg-yellow-500'
            }`}>
              {t.auth?.loginBtn || "Login"}
            </button>
          </form>

          <div className="mt-8 text-center text-gray-500 text-sm border-t border-gray-100 pt-6">
            <Link to="/auth/register" className="hover:text-farm-green font-medium transition-colors">
              {t.auth?.noAccount || "Don't have an account? Register →"}
            </Link>
          </div>
        </div>
      </motion.div>

    </div>
  );
};

export default Login;
