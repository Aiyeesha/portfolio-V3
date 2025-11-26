// -----------------------------------------------------------------------------
// Testimonials.tsx
//
// This component provides a placeholder for future testimonials or references.
// At the moment it renders a heading and a message indicating that reviews
// will be added later. Once testimonials are available, you can extend the
// items array in the translation JSON and iterate over them here. The
// SectionTitle ensures consistent styling across sections.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

interface TestimonialItem {
  name: string;
  role: string;
  quote: string;
}

const TestimonialCard: React.FC<TestimonialItem> = ({
  name,
  role,
  quote
}) => (
  <article className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-5">
    <p className="text-sm text-slate-200">&ldquo;{quote}&rdquo;</p>
    <div className="mt-3 text-xs text-slate-400">
      <div className="font-semibold text-slate-200">{name}</div>
      <div>{role}</div>
    </div>
  </article>
);

export const Testimonials: React.FC = () => {
  const { t } = useTranslation();
  const items = t('testimonials.items', {
    returnObjects: true
  }) as TestimonialItem[];

  return (
    <section>
      <SectionTitle
        eyebrow={t('testimonials.eyebrow')}
        title={t('testimonials.title')}
        subtitle={t('testimonials.subtitle')}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {items.map((it) => (
          <TestimonialCard key={it.name} {...it} />
        ))}
      </div>
    </section>
  );
};
