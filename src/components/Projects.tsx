// -----------------------------------------------------------------------------
// Projects.tsx
//
// This component showcases selected projects and case studies. Each project
// card displays the project name, context, role, impact and associated tags.
// The data is loaded from the translation files via react‑i18next. The
// SectionTitle component provides a uniform heading. For brevity, dossier
// downloads are not included here but can be added to the `dossiers` array.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';
import { Link } from 'react-router-dom';

interface ProjectItem {
  name: string;
  context: string;
  role: string;
  impact: string;
  tags: string[];
  slug: string;
  type?: 'client' | 'formation' | 'perso' | 'training' | 'personal';
}

interface DossierItem {
  name: string;
  description: string;
  file: string;
}

const ProjectCard: React.FC<ProjectItem> = ({
  name,
  context,
  role,
  impact,
  tags,
  type
}) => {
  const { t } = useTranslation();
  let badgeLabel: string | null = null;
  let badgeClass = '';

  switch (type) {
    case 'client':
      badgeLabel = t('projects.badgeClient');
      badgeClass =
        'border-emerald-400/30 text-emerald-300 bg-emerald-500/10';
      break;
    case 'formation':
    case 'training':
      badgeLabel = t('projects.badgeTraining');
      badgeClass = 'border-sky-400/30 text-sky-300 bg-sky-500/10';
      break;
    case 'perso':
    case 'personal':
      badgeLabel = t('projects.badgePersonal');
      badgeClass =
        'border-violet-400/30 text-violet-300 bg-violet-500/10';
      break;
    default:
      badgeLabel = null;
  }

  return (
    <article className="flex flex-col rounded-2xl border border-slate-800 bg-slate-900/60 p-5 shadow-glass">
      <div className="flex items-start justify-between gap-2">
        <h3 className="text-sm font-semibold text-slate-100">{name}</h3>
        {badgeLabel && (
          <span
            className={
              'inline-flex items-center rounded-full border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide ' +
              badgeClass
            }
          >
            {badgeLabel}
          </span>
        )}
      </div>
      <p className="mt-1 text-xs text-slate-400">{context}</p>
      <p className="mt-2 text-xs text-slate-300">
        <span className="font-semibold">{t('projects.roleLabel')}:&nbsp;</span>
        {role}
      </p>
      <p className="mt-1 text-xs text-slate-300">
        <span className="font-semibold">{t('projects.impactLabel')}:&nbsp;</span>
        {impact}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-slate-300">
        {tags.map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-slate-700/70 bg-slate-900/90 px-3 py-1"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
};

export const Projects: React.FC = () => {
  const { t } = useTranslation();
  const projects = t('projects.items', { returnObjects: true }) as ProjectItem[];
  const dossiers = t('projects.dossiers.items', {
    returnObjects: true
  }) as DossierItem[];

  return (
    <section>
      <SectionTitle
        eyebrow={t('projects.eyebrow')}
        title={t('projects.title')}
        subtitle={t('projects.subtitle')}
      />
      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.slug} to={`/projects/${p.slug}`} className="block">
            <ProjectCard {...p} />
          </Link>
        ))}
      </div>
      {/* Professional dossiers section */}
      {dossiers?.length > 0 && (
        <div className="mt-12">
          <h3 className="text-lg font-semibold text-slate-100">
            {t('projects.dossiers.title')}
          </h3>
          <p className="mt-1 text-sm text-slate-400">
            {t('projects.dossiers.subtitle')}
          </p>
          <ul className="mt-4 space-y-2">
            {dossiers.map((doc) => (
              <li key={doc.name} className="text-sm">
                <a
                  href={doc.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-300 hover:underline"
                >
                  {doc.name}
                </a>
                {doc.description && (
                  <span className="ml-2 text-slate-400">– {doc.description}</span>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </section>
  );
};
