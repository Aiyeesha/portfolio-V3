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
// Import images up front so that Vite correctly bundles them.  These
// imports replace use of `require()` which is not available in the browser
// context.  When adding new company logos, import the corresponding file
// here and update the `logoMap` below accordingly.
import { useTranslation } from 'react-i18next';
import LDLogo from '../assets/logos/ld_digitales.webp';
import MidrangeLogo from '../assets/logos/midrange.webp';
import { SectionTitle } from './SectionTitle';

interface ExperienceItemProps {
  /** Name of the company, e.g. “LD Digitales – Remote” */
  company: string;
  /** Role held within the company */
  role: string;
  /** Time period of the experience */
  period: string;
  /** Geographic location or remote status */
  location: string;
  /** List of bullet points describing responsibilities/achievements */
  bullets: string[];
  /** Optional logo image source for the company */
  logo?: string;
}

const ExperienceItem: React.FC<ExperienceItemProps> = ({
  company,
  role,
  period,
  location,
  bullets,
  logo
}) => (
  <article className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glass">
    <header className="mb-2 flex items-baseline justify-between gap-3">
      <div className="flex items-center gap-2">
        {/* Logo is optional; when provided it appears before the company name. */}
        {logo && (
          <img
            src={logo}
            alt=""
            className="h-4 w-4 shrink-0 rounded"
            loading="lazy"
          />
        )}
        <div>
          <h3 className="text-sm font-semibold text-slate-100">{role}</h3>
          <p className="text-xs text-slate-400">{company}</p>
        </div>
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
  /**
   * Preload logos for companies. The keys must exactly match the
   * translated company names used in the localisation files (e.g.
   * “LD Digitales – Remote” in English/French, “Midrange Group – France”).
   */
  // Map translated company names to their respective logos.  If a key is not
  // present in this map the component will not display a logo for that
  // experience.  Additional localised names can be added as translations are
  // expanded.
  const logoMap: Record<string, string> = {
    'LD Digitales – Remote': LDLogo,
    'Midrange Group – France': MidrangeLogo,
    'Midrange Group – Francia': MidrangeLogo
  };

  // Retrieve experience data from i18next and attach the appropriate logo
  const items = (t('experience.items', {
    returnObjects: true
  }) as Omit<ExperienceItemProps, 'logo'>[]).map((item) => ({
    ...item,
    logo: logoMap[item.company] ?? undefined
  }));

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
