// -----------------------------------------------------------------------------
// Hero.tsx
//
// This component renders the top banner (hero section) of the portfolio. It
// displays a badge indicating availability, the main headline with two lines,
// a descriptive subtitle, call‑to‑action buttons and an avatar. Animations are
// implemented using Framer Motion and all text labels are pulled from the
// translation files via react‑i18next. The layout adapts responsively across
// screen sizes using Tailwind CSS utility classes.
// -----------------------------------------------------------------------------

import { motion } from 'framer-motion';
import React from 'react';
import { useTranslation } from 'react-i18next';
import avatarImg from '../assets/avatar.webp';
// Company logos for the hero section
import easynetLogo from '../assets/easynet.webp';
import ldLogo from '../assets/ld_digitales.webp';
import midrangeLogo from '../assets/midrange.webp';

export const Hero: React.FC = () => {
  const { t } = useTranslation();

  return (
    <div className="grid gap-10 md:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] items-center">
      <div className="space-y-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="inline-flex items-center gap-2 rounded-full border border-slate-700/70 bg-slate-900/70 px-3 py-1 text-xs text-slate-300 shadow-glass backdrop-blur-xs"
        >
          <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
          {t('hero.badge')}
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="text-3xl font-semibold tracking-tight sm:text-4xl lg:text-5xl"
        >
          {t('hero.titleLine1')}
          <span className="block bg-gradient-to-r from-brand-400 to-sky-300 bg-clip-text text-transparent">
            {t('hero.titleLine2')}
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="max-w-xl text-sm text-slate-300 sm:text-base"
        >
          {t('hero.subtitle')}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-wrap gap-3"
        >
          <a
            href="#contact"
            className="rounded-full bg-brand-500 px-6 py-2 text-sm font-semibold text-slate-950 shadow-glass transition hover:bg-brand-400"
          >
            {t('hero.ctaPrimary')}
          </a>
          <a
            href="#projects"
            className="rounded-full border border-slate-700 px-5 py-2 text-sm font-semibold text-slate-200 transition hover:border-brand-400 hover:text-brand-100"
          >
            {t('hero.ctaSecondary')}
          </a>
          <a
            href="/cv-swann.pdf"
            className="rounded-full border border-slate-700/80 bg-slate-900/60 px-5 py-2 text-sm font-semibold text-slate-200 shadow-glass transition hover:border-brand-400 hover:text-brand-100"
          >
            {t('hero.ctaCV')}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="flex flex-wrap gap-5 pt-4 text-xs text-slate-400"
        >
          <div>
            <div className="text-sm font-semibold text-slate-200">
              {t('hero.highlight1.label')}
            </div>
            <div className="text-lg font-bold text-brand-100">
              {t('hero.highlight1.value')}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">
              {t('hero.highlight2.label')}
            </div>
            <div className="text-lg font-bold text-brand-100">
              {t('hero.highlight2.value')}
            </div>
          </div>
          <div>
            <div className="text-sm font-semibold text-slate-200">
              {t('hero.highlight3.label')}
            </div>
            <div className="text-lg font-bold text-brand-100">
              {t('hero.highlight3.value')}
            </div>
          </div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.15 }}
        className="relative mx-auto h-72 w-72 max-w-full rounded-3xl bg-slate-900/80 p-4 shadow-glass backdrop-blur-xl border border-slate-800/80"
      >
        <div className="absolute -left-6 top-10 h-20 w-20 rounded-2xl bg-sky-500/10 border border-sky-500/40 flex items-center justify-center text-xs">
          ⚡ Apex & Flows
        </div>
        <div className="absolute -right-5 bottom-16 h-20 w-20 rounded-2xl bg-emerald-500/10 border border-emerald-500/40 flex items-center justify-center text-xs text-center px-2">
          ☁️ DevOps & CI/CD
        </div>
        <div className="absolute -top-4 right-10 h-16 w-16 rounded-full bg-brand-500/20 border border-brand-500/60 flex items-center justify-center text-xs">
          🌍 EN / FR / ES / IT
        </div>

        <div className="relative mt-7 flex flex-col items-center">
          {/* Avatar image with gradient ring */}
          <div className="h-28 w-28 rounded-full bg-gradient-to-tr from-brand-500 via-sky-400 to-emerald-400 p-1 shadow-lg">
            <img
              src={avatarImg}
              alt="SWANN Avatar"
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          {/* Name and subtitle */}
          <h2 className="mt-4 text-lg font-semibold">SWANN</h2>
          <p className="text-xs text-slate-400 text-center">
            {t('hero.avatarSubtitle')}
          </p>
          {/* Highlight cards */}
          <div className="mt-5 grid w-full grid-cols-3 gap-3 text-[11px] text-slate-300">
            <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-700/70">
              <div className="font-semibold">Salesforce</div>
              <div className="mt-1 text-[10px] text-slate-400">
                Apex · Flows · LWC basics
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-700/70">
              <div className="font-semibold">Cloud & DevOps</div>
              <div className="mt-1 text-[10px] text-slate-400">
                CLI · GitHub · CI/CD
              </div>
            </div>
            <div className="rounded-xl bg-slate-900/80 p-3 border border-slate-700/70">
              <div className="font-semibold">Systems</div>
              <div className="mt-1 text-[10px] text-slate-400">
                Windows · Linux · Networks
              </div>
            </div>
          </div>
        </div>

        {/* Company logos row */}
        <div className="mt-6 flex items-center justify-center gap-6">
          <img
            src={ldLogo}
            alt="LD Digitales logo"
            className="h-8 w-auto"
          />
          <img
            src={midrangeLogo}
            alt="Midrange Group logo"
            className="h-8 w-auto"
          />
          <img
            src={easynetLogo}
            alt="Easynet logo"
            className="h-8 w-auto"
          />
        </div>
      </motion.div>
    </div>
  );
};
