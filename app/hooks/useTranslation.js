'use client';

import { useContext } from 'react';
import { LanguageContext } from '@/app/context/LanguageContext';

export const useTranslation = () => {
  const context = useContext(LanguageContext);
  
  if (!context) {
    throw new Error('useTranslation must be used within LanguageProvider');
  }
  
  return context;
};
