import React from 'react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';

const STATS = [
  ['30%', 'Lower API latency'],
  ['70%', 'Faster onboarding'],
  ['40%', 'Faster payments'],
  ['20%', 'Sprint velocity gain'],
];

export default function About() {
  return (
    <section id="about" className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
      <div className="grid md:grid-cols-12 gap-10 md:gap-16">
        <div className="md:col-span-4">
          <Reveal>
            <Eyebrow>About</Eyebrow>
            <h2 className="font-display text-4xl md:text-5xl leading-tight text-ink">
              Engineering that holds up in <span className="italic gold-text">production.</span>
            </h2>
          </Reveal>
        </div>
        <div className="md:col-span-7 md:col-start-6">
          <Reveal delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-inkmuted font-light">
              I'm a software developer specializing in the MERN stack — building RESTful APIs
              that stay fast under load, React interfaces that feel considered, and database
              architectures designed to scale. My work spans JWT authentication, CI/CD pipelines,
              and query optimization across live production environments.
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6 md:gap-8">
              {STATS.map(([n, l]) => (
                <div key={l} className="border-l border-hairline pl-4">
                  <div className="font-display text-3xl md:text-4xl text-gold">{n}</div>
                  <div className="text-inkmuted text-xs mt-1 leading-snug">{l}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
