'use client';

import translations from '@/app/i18n/translations.json';

export const useTranslation = () => {
  const t = (key) => {
    const keys = key.split('.');
    
    // Toujours utiliser les traductions en français
    let value = translations['fr'];
    
    for (const k of keys) {
      if (!value) return key;
      value = value[k];
    }
    
    return value || key;
  };

  return {
    language: 'fr',
    toggleLanguage: () => {},
    t
  };
};
