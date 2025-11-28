import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import HomePage from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProjectDetail } from './components/ProjectDetail';

// Indique si on est en build de production (fourni par Vite)
const isProd = import.meta.env.PROD;

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* Lien d’évitement pour l’accessibilité */}
      <a
        href="#main"
        className="sr-only focus:not-sr-only absolute left-2 top-2 z-50 rounded-md bg-brand-500 px-3 py-1 text-sm font-semibold text-slate-950 shadow-glass transition"
      >
        Skip to content
      </a>

      {/* Navbar affichée sur toutes les pages */}
      <Navbar />

      {/* Zone principale avec le router */}
      <Routes>
        {/* Page d’accueil */}
        <Route path="/" element={<HomePage />} />

        {/* Détail d’un projet via son slug */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
      </Routes>

      {/* ✅ Analytics / Speed Insights EN DEHORS de <Routes> */}
      {isProd && <Analytics />}
      {isProd && <SpeedInsights />}

      {/* Footer commun à toutes les pages */}
      <Footer />
    </div>
  );
};

export default App;
