import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t } = useLanguage();
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: t.nav.marketplace, path: '/marketplace' },
    { name: t.nav.howItWorks, path: '/#how-it-works' },
    { name: t.nav.forFarmers, path: '/#farmers' },
    { name: t.nav.forBuyers, path: '/#buyers' },
  ];

  const handleNavClick = (path) => {
    setMobileMenuOpen(false);
    // Smooth scroll for hash links if on homepage
    if (path.startsWith('/#') && location.pathname === '/') {
      const id = path.substring(2);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <motion.nav
      initial={{ backgroundColor: 'rgba(250, 250, 247, 0)' }}
      animate={{
        backgroundColor: scrolled ? 'rgba(250, 250, 247, 0.95)' : 'rgba(250, 250, 247, 0)',
        boxShadow: scrolled ? '0 4px 6px -1px rgba(0, 0, 0, 0.1)' : 'none',
      }}
      transition={{ duration: 0.3 }}
      className={`fixed top-0 w-full z-50 transition-colors backdrop-blur-sm`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2" onClick={() => handleNavClick('/')}>
            <svg viewBox="0 0 40 40" className="w-10 h-10 text-farm-green fill-current">
              {/* Leaf morphing into handshake SVG */}
              <path d="M20 2C10 2 2 10 2 20c0 5 2 9.5 5.2 12.8l2-2C6.8 28.2 5 24.3 5 20 5 11.7 11.7 5 20 5s15 6.7 15 15c0 4.3-1.8 8.2-4.2 10.8l2 2C36 29.5 38 25 38 20 38 10 30 2 20 2z"/>
              <path d="M20 38c-8.3 0-15.3-5.8-17.5-13.6l-2.8.8C2.3 34.3 10.5 41 20 41c9.5 0 17.7-6.7 20.3-15.8l-2.8-.8C35.3 32.2 28.3 38 20 38z" opacity="0.3"/>
              <path d="M27 15c-3-3-8-4-12-1 0 0-2 2-2 5s2 4 4 6c3 3 8 4 12 1 0 0 2-2 2-5s-2-4-4-6z" fill="#52B788"/>
              <path d="M15 25c3 3 8 4 12 1 0 0 2-2 2-5s-2-4-4-6c-3-3-8-4-12-1 0 0-2 2-2 5s2 4 4 6z" fill="#40916C" opacity="0.8"/>
            </svg>
            <span className="font-display font-bold text-2xl text-farm-green">KrishiMitra</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            <div className="flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="text-gray-600 hover:text-farm-green font-medium transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <LanguageSwitcher />
              
              <Link
                to="/auth/login"
                className="text-farm-green font-medium hover:text-farm-green-light transition-colors"
              >
                {t.nav.login}
              </Link>
              
              <Link
                to="/auth/register"
                className="clip-diagonal bg-farm-green text-white px-6 py-2.5 font-medium hover:bg-farm-gold hover:text-farm-green transition-colors duration-300"
              >
                {t.nav.getStarted}
              </Link>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <LanguageSwitcher />
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-farm-green hover:text-farm-green-light"
            >
              {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden bg-white border-t border-gray-100 overflow-hidden"
          >
            <div className="px-4 pt-2 pb-6 flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => handleNavClick(link.path)}
                  className="block text-lg font-medium text-gray-700 p-2"
                >
                  {link.name}
                </Link>
              ))}
              <div className="h-px bg-gray-100 my-2"></div>
              <Link
                to="/auth/login"
                onClick={() => handleNavClick('/auth/login')}
                className="block text-lg font-medium text-farm-green p-2"
              >
                {t.nav.login}
              </Link>
              <Link
                to="/auth/register"
                onClick={() => handleNavClick('/auth/register')}
                className="w-full text-center clip-diagonal bg-farm-green text-white px-6 py-3 font-medium hover:bg-farm-gold hover:text-farm-green transition-colors"
              >
                {t.nav.getStarted}
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
