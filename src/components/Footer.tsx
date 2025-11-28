// -----------------------------------------------------------------------------
// Footer.tsx
//
// This component renders the footer at the bottom of the page. It shows the
// current year, a short copyright notice and a line indicating who developed
// the site, all translated via react‑i18next. Tailwind CSS utilities provide
// styling and responsive alignment.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';

export const Footer: React.FC = () => {
  const { t } = useTranslation();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-800 bg-slate-950/90">
      <div className="mx-auto flex max-w-6xl flex-col gap-3 px-4 py-5 text-[11px] text-slate-500 sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {year} SWANN — {t('footer.text')}
        </p>
        <p>{t('footer.developedBy')}</p>
      </div>
    </footer>
  );
};