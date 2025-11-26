// -----------------------------------------------------------------------------
// Navbar.tsx
//
// This component renders the navigation bar displayed at the top of the page.
// It defines a static list of anchor links referencing section IDs on the
// homepage. The useTranslation hook provides translated labels for each nav
// item. A LanguageSwitcher component enables the user to change the site
// language. Clicking on a link smoothly scrolls to the corresponding section.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation, useNavigate } from 'react-router-dom';
import { LanguageSwitcher } from './LanguageSwitcher';


const NAV_ITEMS: { id: string; key: string }[] = [
  { id: 'about', key: 'nav.about' },
  { id: 'skills', key: 'nav.skills' },
  { id: 'experience', key: 'nav.experience' },
  { id: 'services', key: 'nav.services' },
  { id: 'projects', key: 'nav.projects' },
  { id: 'contact', key: 'nav.contact' }
];

export const Navbar: React.FC = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (id: string) => {
    const scrollToSection = () => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    // Si on n’est pas sur la home, on y revient d’abord
    if (location.pathname !== '/') {
      navigate('/');
      // On laisse le temps à la page de se re-rendre avant de scroller
      setTimeout(scrollToSection, 100);
    } else {
      scrollToSection();
    }
  };


  return (
    <header className="fixed inset-x-0 top-0 z-40 bg-slate-950/70 backdrop-blur-md border-b border-slate-800">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => handleScroll('hero')}
        >
          <div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-brand-500 to-sky-400 flex items-center justify-center text-sm font-bold shadow-glass">
            S
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-semibold tracking-wide">SWANN</span>
            <span className="text-[11px] text-slate-400">
              Salesforce Developer & Consultant
            </span>
          </div>
        </div>

        <div className="hidden items-center gap-6 text-xs font-medium text-slate-300 md:flex">
          {NAV_ITEMS.map((item) => (
            <button
              key={item.id}
              onClick={() => handleScroll(item.id)}
              className="transition-colors hover:text-brand-100"
            >
              {t(item.key)}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <LanguageSwitcher />
          <button
    type="button"
    onClick={() => handleScroll('contact')}
    className="hidden rounded-full bg-brand-500 px-4 py-1.5 text-xs font-semibold text-slate-950 shadow-glass transition hover:bg-brand-400 md:inline-block"
  >
    {t('nav.hireMe')}
  </button>
        </div>
      </nav>
    </header>
  );
};
