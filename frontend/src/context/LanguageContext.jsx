import React, { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  const [activeLang, setActiveLang] = useState('en');

  useEffect(() => {
    const savedLang = localStorage.getItem('krishiMitraLang');
    if (savedLang && ['en', 'hi', 'mr'].includes(savedLang)) {
      setActiveLang(savedLang);
    }
  }, []);

  const changeLanguage = (lang) => {
    setActiveLang(lang);
    localStorage.setItem('krishiMitraLang', lang);
  };

  const t = translations[activeLang];

  return (
    <LanguageContext.Provider value={{ activeLang, changeLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
