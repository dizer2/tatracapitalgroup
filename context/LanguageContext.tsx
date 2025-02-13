// context/LanguageContext.tsx
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';
import { Translation } from '@prisma/client';
import useGetTranslations from '@/hooks/getGetTranslations';

interface LanguageContextProps {
  selectedLanguage: string;
  setSelectedLanguage: (lang: string) => void;
  translations: Translation[];
  loading: boolean;
  error: any;
}

const LanguageContext = createContext<LanguageContextProps | undefined>(undefined);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedLanguage, setSelectedLanguage] = useState<string>(() => {
    if (typeof window !== 'undefined') {
      return localStorage.getItem('selectedLanguage') || 'en';
    }
    return 'en';
  });

  useEffect(() => {
    localStorage.setItem('selectedLanguage', selectedLanguage);
  }, [selectedLanguage]);

  const { translations, loading, error } = useGetTranslations(selectedLanguage);

  return (
    <LanguageContext.Provider
      value={{ selectedLanguage, setSelectedLanguage, translations, loading, error }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
