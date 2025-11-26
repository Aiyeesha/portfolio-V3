import React from 'react';
import { useTranslation } from 'react-i18next';

const languages = [
  { code: 'en', label: 'EN' },
  { code: 'fr', label: 'FR' },
  { code: 'es', label: 'ES' },
  { code: 'it', label: 'IT' }
];

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="flex items-center gap-1 rounded-full bg-slate-900/60 px-2 py-1 backdrop-blur-xs border border-slate-700/60 shadow-glass">
      {languages.map((lng) => (
        <button
          key={lng.code}
          onClick={() => changeLanguage(lng.code)}
          className={`px-2 text-xs font-semibold transition-colors rounded-full ${
            i18n.language.startsWith(lng.code)
              ? 'bg-brand-500 text-slate-950'
              : 'text-slate-200 hover:bg-slate-800'
          }`}
        >
          {lng.label}
        </button>
      ))}
    </div>
  );
};
