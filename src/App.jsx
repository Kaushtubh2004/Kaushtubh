import React from 'react';
import Hero from './components/Hero.jsx';
import About from './components/About.jsx';
import Work from './components/Work.jsx';
import Skills from './components/Skills.jsx';
import Contact from './components/Contact.jsx';
import OrbitController from './components/OrbitController.jsx';
import { NAV } from './data.js';
import { useActiveSection } from './lib/utils.js';

export default function App() {
  const active = useActiveSection(NAV.map((n) => n.id));
  return (
    <div className="relative">
      <div className="grain" aria-hidden="true"></div>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <OrbitController active={active} />
    </div>
  );
}
