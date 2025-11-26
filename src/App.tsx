import React from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
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
      </Routes>
      {/* Footer remains at the bottom on all pages */}
      <Footer />
    </div>
  );
};

export default App;
