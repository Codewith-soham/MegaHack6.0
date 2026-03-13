import React from 'react';
import { useLanguage } from '../../context/LanguageContext';

const LanguageSwitcher = () => {
  const { activeLang, changeLanguage } = useLanguage();

  const langs = [
    { code: 'en', label: 'EN' },
    { code: 'hi', label: 'हिं' },
    { code: 'mr', label: 'मर' }
  ];

  return (
    <div className="flex bg-white rounded-full p-1 border border-farm-gold items-center shadow-sm">
      {langs.map((lang) => (
        <button
          key={lang.code}
          onClick={() => changeLanguage(lang.code)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-300 ${
            activeLang === lang.code
              ? 'bg-farm-gold text-farm-green shadow'
              : 'text-gray-600 hover:text-farm-green hover:bg-farm-gold-light/30'
          }`}
        >
          {lang.label}
        </button>
      ))}
    </div>
  );
};

export default LanguageSwitcher;
