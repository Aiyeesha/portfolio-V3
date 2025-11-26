// -----------------------------------------------------------------------------
// SectionTitle.tsx
//
// A reusable component that renders a section heading with an eyebrow (small
// label), main title and optional subtitle. Using this component ensures
// consistent typography and spacing across all sections. Accepts React
// children for flexible content placement when necessary.
// -----------------------------------------------------------------------------

import React from 'react';

interface SectionTitleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  eyebrow,
  title,
  subtitle
}) => {
  return (
    <header className="mb-8 space-y-3">
      {eyebrow && (
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-brand-200">
          {eyebrow}
        </p>
      )}
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm text-slate-300">{subtitle}</p>
      )}
    </header>
  );
};
