// -----------------------------------------------------------------------------
// Services.tsx
//
// This component lists the freelance services offered. Each service has a
// title and description, pulled from the translation files. The SectionTitle
// component ensures consistent headings. Cards are displayed in a responsive
// grid using Tailwind CSS utilities.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

interface ServiceCardProps {
  title: string;
  description: string;
  bullets: string[];
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  bullets
}) => (
  <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glass">
    <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
    <p className="mt-2 text-xs text-slate-300">{description}</p>
    <ul className="mt-3 space-y-1.5 text-xs text-slate-300">
      {bullets.map((b) => (
        <li key={b} className="flex gap-2">
          <span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-400" />
          <span>{b}</span>
        </li>
      ))}
    </ul>
  </article>
);

export const Services: React.FC = () => {
  const { t } = useTranslation();
  const services = t('services.items', { returnObjects: true }) as {
    title: string;
    description: string;
    bullets: string[];
  }[];

  return (
    <section>
      <SectionTitle
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        subtitle={t('services.subtitle')}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {services.map((s) => (
          <ServiceCard key={s.title} {...s} />
        ))}
      </div>
    </section>
  );
};
