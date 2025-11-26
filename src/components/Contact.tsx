// -----------------------------------------------------------------------------
// Contact.tsx
//
// This component renders the contact section, including a translated heading
// and a form that can be wired up to Formspree. It uses the SectionTitle
// component for consistent headings. Tailwind CSS utilities ensure the
// layout remains responsive. The actual form integration with Formspree can
// be completed by uncommenting the useForm hook and supplying your endpoint.
// -----------------------------------------------------------------------------

import React from 'react';
import { useTranslation } from 'react-i18next';
import { SectionTitle } from './SectionTitle';

export const Contact: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section>
      <SectionTitle
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        subtitle={t('contact.subtitle')}
      />
      <div className="grid gap-8 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
        <form
          className="space-y-4 rounded-2xl border border-slate-800 bg-slate-900/60 p-6 shadow-glass"
          action="https://formspree.io/f/xblgprlz"
          method="POST"
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div className="space-y-1 text-sm">
              <label className="block text-xs font-medium text-slate-200">
                {t('contact.form.name')}
              </label>
              <input
                name="name"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
              />
            </div>
            <div className="space-y-1 text-sm">
              <label className="block text-xs font-medium text-slate-200">
                {t('contact.form.email')}
              </label>
              <input
                name="email"
                type="email"
                required
                className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
              />
            </div>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-xs font-medium text-slate-200">
              {t('contact.form.company')}
            </label>
            <input
              name="company"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
            />
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-xs font-medium text-slate-200">
              {t('contact.form.topic')}
            </label>
            <select
              name="topic"
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
            >
              <option value="sf-dev">
                {t('contact.form.topicOptions.sfDev')}
              </option>
              <option value="sf-admin">
                {t('contact.form.topicOptions.sfAdmin')}
              </option>
              <option value="consulting">
                {t('contact.form.topicOptions.consulting')}
              </option>
              <option value="mentoring">
                {t('contact.form.topicOptions.mentoring')}
              </option>
              <option value="other">
                {t('contact.form.topicOptions.other')}
              </option>
            </select>
          </div>

          <div className="space-y-1 text-sm">
            <label className="block text-xs font-medium text-slate-200">
              {t('contact.form.message')}
            </label>
            <textarea
              name="message"
              rows={5}
              required
              className="w-full rounded-xl border border-slate-700 bg-slate-950/80 px-3 py-2 text-sm text-slate-100 outline-none ring-brand-500/40 focus:border-brand-400 focus:ring-2"
            />
          </div>

          <div className="flex flex-wrap items-center justify-between gap-3 pt-2 text-xs text-slate-400">
            <p>{t('contact.form.helper')}</p>
            <button
              type="submit"
              className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-glass transition hover:bg-brand-400"
            >
              {t('contact.form.submit')}
            </button>
          </div>
        </form>

        <div className="space-y-4 text-sm text-slate-300">
          <div className="rounded-2xl border border-slate-800 bg-slate-900/60 p-4 shadow-glass">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('contact.sidebar.preferred')}
            </h3>
            <p className="mt-2 text-xs text-slate-300">
              {t('contact.sidebar.preferredText')}
            </p>
            <ul className="mt-3 space-y-1 text-xs text-slate-300">
              <li>
                <span className="font-semibold">Email:&nbsp;</span>
                <a
                  href="mailto:ai.dahoumane@gmail.com"
                  className="text-brand-200 hover:text-brand-100"
                >
                  ai.dahoumane@gmail.com
                </a>
              </li>
              <li>
                <span className="font-semibold">LinkedIn:&nbsp;</span>
                <a
                  href="https://www.linkedin.com/in/aicha-imene-dahoumane"
                  target="_blank"
                  rel="noreferrer"
                  className="text-brand-200 hover:text-brand-100"
                >
                  linkedin.com/in/aicha-imene-dahoumane
                </a>
              </li>
            </ul>
          </div>

          <div className="rounded-2xl border border-dashed border-slate-800 bg-slate-900/40 p-4 text-xs text-slate-300">
            <h3 className="text-sm font-semibold text-slate-100">
              {t('contact.sidebar.freelanceTitle')}
            </h3>
            <p className="mt-2">{t('contact.sidebar.freelanceText')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};
