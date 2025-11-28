import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Footer } from './components/Footer';
import HomePage from './components/HomePage';
import { Navbar } from './components/Navbar';
import { ProjectDetail } from './components/ProjectDetail';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      {/* The Navbar stays visible on all pages */}
      <Navbar />
      {/* Define routes for the home page and project detail pages */}
      <Routes>
        {/* Home page route */}
        <Route path="/" element={<HomePage />} />
        {/* Dynamic project detail route */}
        <Route path="/projects/:slug" element={<ProjectDetail />} />
         {/* Analytics / Speed Insights seulement en production */}
          {isProd && <Analytics />}
          {isProd && <SpeedInsights />}
      </Routes>
      {/* Footer remains at the bottom on all pages */}
      <Footer />
    </div>
  );
};

export default App;
