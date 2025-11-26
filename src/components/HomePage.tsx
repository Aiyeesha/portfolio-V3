import React from 'react';

// This page component encapsulates all sections of the homepage. It is used as
// the route element for the root path ('/') when using react-router. By
// grouping these sections into their own component we can more easily add
// additional routes (such as project detail pages) without cluttering
// App.tsx.

import { Hero } from './Hero';
import { About } from './About';
import { Skills } from './Skills';
import { Experience } from './Experience';
import { Services } from './Services';
import { Certifications } from './Certifications';
import { Projects } from './Projects';
import { Testimonials } from './Testimonials';
import { Contact } from './Contact';

export const HomePage: React.FC = () => {
  return (
    <main className="mx-auto max-w-6xl px-4 pt-24 space-y-32 pb-24">
      <section id="hero">
        <Hero />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="certifications">
        <Certifications />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </main>
  );
};

export default HomePage;