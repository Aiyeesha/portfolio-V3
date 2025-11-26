import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// -----------------------------------------------------------------------------
// ProjectDetail.tsx
//
// This component displays a detailed page for a specific project. The slug
// parameter from the URL is used to look up the corresponding entry in the
// translation JSON under `projectDetails`. Each project detail contains a
// title, an intro paragraph, a list of sections (with headings and content)
// and an array of tags. If no detail is found for the slug, a simple
// "Project not found" message is rendered. A back link allows users to
// return to the main projects section on the homepage.
// -----------------------------------------------------------------------------

interface ProjectSection {
  heading: string;
  content: string;
}

interface BadgeObj {
  label: string;
  value?: string;
  description?: string;
}

interface ResourceLink {
  label: string;
  href: string;
}

interface ProjectDetailData {
  // General information
  category?: string;
  title: string;
  summary?: string;
  // New rich fields
  badges?: Array<string | BadgeObj>;
  metrics?: Record<string, string>;
  problems?: string[];
  objectives?: string[];
  methodology?: Array<string | { step?: string; title?: string; description?: string }>;
  results?: string[];
  jury?: string[];
  skills?: string[];
  resources?: ResourceLink[];
  // Fallback legacy fields
  intro?: string;
  sections?: ProjectSection[];
  tags?: string[];
}

export const ProjectDetail: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const { t } = useTranslation();

  // Look up project details using the slug. ReturnObjects: true tells
  // react‑i18next to return the nested object instead of a string.
  const detail = t(`projectDetails.${slug}`, {
    returnObjects: true
  }) as unknown as ProjectDetailData | undefined;

  if (!detail) {
    return (
      <main className="mx-auto max-w-4xl px-4 pt-24 pb-24 text-center">
        <h1 className="text-2xl font-bold text-slate-100">Project not found</h1>
        <p className="mt-4 text-sm text-slate-400">
          We couldn’t find a project with the identifier "{slug}".
        </p>
        <Link
          to="/"
          className="mt-6 inline-block rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-glass transition hover:bg-brand-400"
        >
          Back to home
        </Link>
      </main>
    );
  }

  // Determine if the project uses the new rich format based on presence of badges or problems
  const hasRichContent = Boolean(
    detail.badges || detail.problems || detail.objectives || detail.methodology || detail.results
  );

  return (
    <main className="mx-auto max-w-4xl px-4 pt-24 pb-24">
      <Link
        to="/"
        className="mb-4 inline-block text-sm text-brand-300 hover:text-brand-200"
      >
        ← {t('projectPage' as any)?.breadcrumbsCategory ? t('projectPage.breadcrumbsCategory') : 'Back to projects'}
      </Link>
      {/* Category */}
      {detail.category && (
        <p className="mb-1 text-xs uppercase tracking-wide text-brand-400">
          {detail.category}
        </p>
      )}
      <h1 className="text-3xl font-bold text-slate-100">{detail.title}</h1>
      {/* Summary or intro */}
      {detail.summary ? (
        <p className="mt-4 text-base text-slate-300">{detail.summary}</p>
      ) : (
        detail.intro && <p className="mt-4 text-base text-slate-300">{detail.intro}</p>
      )}

      {/* Badges / metrics */}
      {detail.badges && detail.badges.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-4">
          {detail.badges.map((badge, idx) => {
            if (typeof badge === 'string') {
              return (
                <span
                  key={idx}
                  className="rounded-lg border border-slate-700/70 bg-slate-800/70 px-4 py-2 text-sm text-slate-300"
                >
                  {badge}
                </span>
              );
            }
            const b = badge as BadgeObj;
            return (
              <div
                key={idx}
                className="w-40 rounded-xl border border-slate-700/70 bg-slate-800/70 p-3"
              >
                <span className="text-xs uppercase text-slate-400">
                  {b.label}
                </span>
                <div className="mt-1 text-xl font-semibold text-brand-300">
                  {b.value}
                </div>
                {b.description && (
                  <div className="mt-1 text-xs text-slate-500">
                    {b.description}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      {/* Metrics grid if present */}
      {detail.metrics && (
        <div className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {Object.entries(detail.metrics).map(([key, value]) => (
            <div
              key={key}
              className="rounded-xl border border-slate-700/70 bg-slate-800/70 p-3 text-center"
            >
              <div className="text-xs uppercase text-slate-400">
                {key}
              </div>
              <div className="mt-1 text-xl font-semibold text-brand-300">
                {value}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Context & Challenges, Problems and Objectives */}
      {detail.problems && detail.problems.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.contextChallengesTitle') || 'Context & Challenges'}
          </h2>
          <div className="mt-4">
            <h3 className="font-semibold text-slate-100">
              {t('projectPage.problemsLabel') || 'Problems'}
            </h3>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
              {detail.problems.map((p, idx) => (
                <li key={idx}>{p}</li>
              ))}
            </ul>
          </div>
          {detail.objectives && (
            <div className="mt-6">
              <h3 className="font-semibold text-slate-100">
                {t('projectPage.objectivesLabel') || 'Objectives'}
              </h3>
              <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-slate-300">
                {detail.objectives.map((o, idx) => (
                  <li key={idx}>{o}</li>
                ))}
              </ul>
            </div>
          )}
        </section>
      )}

      {/* Methodology */}
      {detail.methodology && detail.methodology.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.methodologyTitle') || 'Methodology'}
          </h2>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm text-slate-300">
            {detail.methodology.map((step, idx) => {
              if (typeof step === 'string') {
                return <li key={idx}>{step}</li>;
              }
              const s = step as { step?: string; title?: string; description?: string };
              return (
                <li key={idx}>
                  <span className="font-semibold text-slate-100">
                    {s.step || s.title}
                  </span>
                  {s.title && s.step && ': '} {s.description && (
                    <span className="text-slate-300">{s.description}</span>
                  )}
                </li>
              );
            })}
          </ol>
        </section>
      )}

      {/* Results & Impact */}
      {detail.results && detail.results.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.resultsImpactTitle') || 'Results & Impact'}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {detail.results.map((r, idx) => (
              <li key={idx}>{r}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Jury feedback */}
      {detail.jury && detail.jury.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.juryTitle') || 'Jury feedback'}
          </h2>
          <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-slate-300">
            {detail.jury.map((j, idx) => (
              <li key={idx}>{j}</li>
            ))}
          </ul>
        </section>
      )}

      {/* Skills */}
      {detail.skills && detail.skills.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.skillsTitle') || 'Skills'}
          </h2>
          <div className="mt-4 flex flex-wrap gap-2 text-xs text-slate-300">
            {detail.skills.map((skill, idx) => (
              <span
                key={idx}
                className="rounded-full border border-slate-700/70 bg-slate-900/90 px-3 py-1"
              >
                {skill}
              </span>
            ))}
          </div>
        </section>
      )}

      {/* Resources */}
      {detail.resources && detail.resources.length > 0 && (
        <section className="mt-10">
          <h2 className="text-2xl font-semibold text-slate-100">
            {t('projectPage.resourcesTitle') || 'Links & resources'}
          </h2>
          <ul className="mt-4 space-y-2 text-sm text-brand-300">
            {detail.resources.map((res, idx) => (
              <li key={idx}>
                {/* eslint-disable-next-line react/jsx-no-target-blank */}
                <a
                  href={res.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline hover:text-brand-200"
                >
                  {res.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}

      {/* Legacy layout fallback */}
      {!hasRichContent && detail.sections && detail.sections.length > 0 && (
        <>
          {detail.sections.map((section) => (
            <div key={section.heading} className="mt-8">
              <h2 className="text-xl font-semibold text-slate-100">
                {section.heading}
              </h2>
              <p className="mt-2 text-sm text-slate-300">{section.content}</p>
            </div>
          ))}
          {detail.tags && detail.tags.length > 0 && (
            <div className="mt-8 flex flex-wrap gap-2 text-xs text-slate-300">
              {detail.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-slate-700/70 bg-slate-900/90 px-3 py-1"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </>
      )}
    </main>
  );
};