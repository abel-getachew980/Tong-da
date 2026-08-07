import { createContext, useContext, useState } from 'react';
import en from '../translations/en';
import am from '../translations/am';

const translations = { en, am };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');
  const t = (key) => translations[lang][key] ?? translations['en'][key] ?? key;
  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
