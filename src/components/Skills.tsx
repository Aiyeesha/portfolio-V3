// -----------------------------------------------------------------------------
// Skills.tsx
//
// This component outlines the technical and soft skillset of the portfolio
// owner. Skills are grouped into categories (Salesforce, Programming,
// Systems/DevOps/Security and Soft skills) for clarity. The SectionTitle
// component provides a consistent title layout. Lists are translated via
// react‑i18next. Cards use Tailwind CSS for styling and responsiveness.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

interface SkillGroupProps {
  title: string;
  items: string[];
}

const SkillGroup: React.FC<SkillGroupProps> = ({ title, items }) => (
  <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glass">
    <h3 className="text-sm font-semibold text-slate-100">{title}</h3>
    <ul className="mt-3 flex flex-wrap gap-2 text-xs text-slate-300">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-full border border-slate-700/70 bg-slate-900/90 px-3 py-1"
        >
          {item}
        </li>
      ))}
    </ul>
  </div>
);

export const Skills: React.FC = () => {
  const { t } = useTranslation();

  const groups: SkillGroupProps[] = [
    {
      title: t('skills.salesforceTitle'),
      items: t('skills.salesforceList', { returnObjects: true }) as string[]
    },
    {
      title: t('skills.devTitle'),
      items: t('skills.devList', { returnObjects: true }) as string[]
    },
    {
      title: t('skills.cloudTitle'),
      items: t('skills.cloudList', { returnObjects: true }) as string[]
    },
    {
      title: t('skills.softTitle'),
      items: t('skills.softList', { returnObjects: true }) as string[]
    }
  ];

  return (
    <section>
      <SectionTitle
        eyebrow={t('skills.eyebrow')}
        title={t('skills.title')}
        subtitle={t('skills.subtitle')}
      />
      <div className="grid gap-5 md:grid-cols-2">
        {groups.map((g) => (
          <SkillGroup key={g.title} {...g} />
        ))}
      </div>
    </section>
  );
};
