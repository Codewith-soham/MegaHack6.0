import React from 'react';
import { Link } from 'react-router-dom';
import { Twitter, Instagram, Facebook, Youtube } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import LanguageSwitcher from '../ui/LanguageSwitcher';

const Footer = () => {
  const { t } = useLanguage();

  return (
    <footer className="bg-farm-green relative overflow-hidden pt-16 pb-8">
      {/* Subtle grain texture overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`
        }}
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Col 1 */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center gap-2">
              <svg viewBox="0 0 40 40" className="w-8 h-8 text-farm-gold fill-current">
                <path d="M20 2C10 2 2 10 2 20c0 5 2 9.5 5.2 12.8l2-2C6.8 28.2 5 24.3 5 20 5 11.7 11.7 5 20 5s15 6.7 15 15c0 4.3-1.8 8.2-4.2 10.8l2 2C36 29.5 38 25 38 20 38 10 30 2 20 2z"/>
                <path d="M20 38c-8.3 0-15.3-5.8-17.5-13.6l-2.8.8C2.3 34.3 10.5 41 20 41c9.5 0 17.7-6.7 20.3-15.8l-2.8-.8C35.3 32.2 28.3 38 20 38z" opacity="0.5"/>
              </svg>
              <span className="font-display font-bold text-2xl text-farm-cream">KrishiMitra</span>
            </Link>
            
            <div className="space-y-1 text-farm-green-mid font-medium text-sm">
              <p>From Field to Table. No Middlemen.</p>
              <p className="font-hindi">खेत से थाली तक। बिना बिचौलिए।</p>
              <p className="font-hindi">शेतातून थेट ताटात। दलाल नाही.</p>
            </div>

            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-farm-cream hover:bg-farm-gold hover:text-farm-green transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-farm-cream hover:bg-farm-gold hover:text-farm-green transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-farm-cream hover:bg-farm-gold hover:text-farm-green transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-farm-cream hover:bg-farm-gold hover:text-farm-green transition-colors">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Col 2 */}
          <div>
            <h3 className="text-farm-gold font-display font-bold text-lg mb-6">{t.howItWorks?.farmersTitle || "For Farmers"}</h3>
            <ul className="space-y-3">
              <li><Link to="/auth/register?role=farmer" className="text-gray-300 hover:text-white transition-colors">Register Farm</Link></li>
              <li><Link to="/#how-it-works" className="text-gray-300 hover:text-white transition-colors">How to List Crops</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Pricing Intelligence</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</Link></li>
            </ul>
          </div>

          {/* Col 3 */}
          <div>
            <h3 className="text-farm-gold font-display font-bold text-lg mb-6">{t.howItWorks?.buyersTitle || "For Buyers"}</h3>
            <ul className="space-y-3">
              <li><Link to="/auth/register?role=buyer" className="text-gray-300 hover:text-white transition-colors">Register Business</Link></li>
              <li><Link to="/marketplace" className="text-gray-300 hover:text-white transition-colors">Browse Marketplace</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Quality Guidelines</Link></li>
              <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Bulk Orders</Link></li>
            </ul>
          </div>

          {/* Col 4 */}
          <div>
            <h3 className="text-farm-gold font-display font-bold text-lg mb-6">Language / भाषा</h3>
            <div className="inline-block bg-white/10 p-2 rounded-xl border border-white/20">
              <LanguageSwitcher />
            </div>
            
            <div className="mt-8">
              <h3 className="text-farm-gold font-display font-bold text-lg mb-4">Resources</h3>
              <ul className="space-y-3">
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Help Center</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Privacy Policy</Link></li>
                <li><Link to="#" className="text-gray-300 hover:text-white transition-colors">Terms of Service</Link></li>
              </ul>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center px-4">
          <p className="text-gray-400 text-sm">{t.footer.madeWith}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
