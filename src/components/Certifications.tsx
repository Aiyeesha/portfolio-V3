// -----------------------------------------------------------------------------
// Certifications.tsx
//
// This component presents a list of diplomas, certifications and future
// objectives. Each item contains a name, provider, date and status. The
// SectionTitle component standardises the section headings. Data is pulled
// from the translation files. Tailwind CSS ensures a clean responsive table.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

interface CertItem {
  name: string;
  provider: string;
  date: string;
  status: string;
}

export const Certifications: React.FC = () => {
  const { t } = useTranslation();
  const certs = t('certifications.items', {
    returnObjects: true
  }) as CertItem[];

  return (
    <section>
      <SectionTitle
        eyebrow={t('certifications.eyebrow')}
        title={t('certifications.title')}
        subtitle={t('certifications.subtitle')}
      />
      <div className="grid gap-4 md:grid-cols-2">
        {certs.map((c) => (
          <article
            key={c.name + c.status}
            className="flex items-center justify-between rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-glass"
          >
            <div>
              <h3 className="text-sm font-semibold text-slate-100">
                {c.name}
              </h3>
              <p className="text-xs text-slate-400">{c.provider}</p>
            </div>
            <div className="text-right text-[11px] text-slate-400">
              <p>{c.date}</p>
              <p className="mt-1 rounded-full border border-slate-700 px-2 py-0.5 text-[10px]">
                {c.status}
              </p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};
