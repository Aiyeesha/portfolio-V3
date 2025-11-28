// -----------------------------------------------------------------------------
// About.tsx
//
// This component describes the background and journey of the portfolio owner.
// It leverages the SectionTitle component to render consistent section
// headings. The content is divided into multiple paragraphs and a list of
// quick facts. All strings are fetched from translation JSON files via
// react‑i18next. The layout remains responsive thanks to Tailwind CSS.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

export const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle
        eyebrow={t('about.eyebrow')}
        title={t('about.title')}
        subtitle={t('about.subtitle')}
      />
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
          <p>{t('about.paragraph1')}</p>
          <p>{t('about.paragraph2')}</p>
          <p>{t('about.paragraph3')}</p>
        </div>
        <div className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-5 text-xs text-slate-300 shadow-glass">
          <h3 className="text-sm font-semibold text-slate-100">
            {t('about.quickFactsTitle')}
          </h3>
          <ul className="space-y-2">
            <li>
              <span className="font-semibold text-slate-100">
                {t('about.factLocation.label')}
              </span>{' '}
              {t('about.factLocation.value')}
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                {t('about.factLanguages.label')}
              </span>{' '}
              {t('about.factLanguages.value')}
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                {t('about.factRoles.label')}
              </span>{' '}
              {t('about.factRoles.value')}
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                {t('about.factAvailability.label')}
              </span>{' '}
              {t('about.factAvailability.value')}
            </li>
            <li>
              <span className="font-semibold text-slate-100">
                {t('about.factTimeline.label')}
              </span>{' '}
              {t('about.factTimeline.value')}
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};
