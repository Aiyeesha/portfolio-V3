// -----------------------------------------------------------------------------
// Experience.tsx
//
// This component renders a timeline of professional experiences. Each
// experience contains the company name, role, period, location and a list of
// bullet points describing key responsibilities and achievements. The
// SectionTitle component standardises heading styles, and translations are
// loaded via react‑i18next. Tailwind CSS is used for the responsive grid.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

interface ExperienceItemProps {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  location,
  bullets
}) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glass">
    <header className="mb-2 flex items-baseline justify-between gap-3">
      <div>
        <h3 className="text-sm font-semibold text-slate-100">{role}</h3>
        <p className="text-xs text-slate-400">{company}</p>
      </div>
      <div className="text-right text-[11px] text-slate-400">
        <p>{period}</p>
        <p>{location}</p>
      </div>
    </header>
    <ul className="space-y-1.5 text-xs text-slate-300">
      {bullets.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const Experience: React.FC = () => {
  const { t } = useTranslation();

  const items: ExperienceItemProps[] = t('experience.items', {
    returnObjects: true
  }) as ExperienceItemProps[];

  return (
    <section>
      <SectionTitle
        eyebrow={t('experience.eyebrow')}
        title={t('experience.title')}
        subtitle={t('experience.subtitle')}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {items.map((item) => (
          <ExperienceItem key={item.company + item.period} {...item} />
        ))}
      </div>
    </section>
  );
};
