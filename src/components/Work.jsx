import React from 'react';
import { ArrowUpRight, Github } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';
import { PROJECTS } from '../data.js';

const EXPERIENCE_POINTS = [
  'Reduced average REST API latency by 30% by refactoring MongoDB query pipelines and creating strategic database indexes under an MVC structure.',
  'Engineered secure backend services with JWT authentication and Role-Based Access Control, eliminating unauthorized access incidents post-deployment.',
  'Accelerated sprint velocity by 20% through active debugging of production defects and automated CI/CD pipelines to Render.',
  'Enhanced application uptime by implementing structured error handling and logging middleware across critical API routes.',
];

export default function Work() {
  return (
    <section id="work" className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
      <Reveal>
        <Eyebrow>Experience</Eyebrow>
      </Reveal>
      <Reveal delay={0.05}>
        <div className="rounded-2xl card-border bg-raised/60 p-8 md:p-12">
          <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-2 mb-6">
            <h3 className="font-display text-3xl md:text-4xl text-ink">
              Full Stack Developer <span className="text-inkmuted">— Nextute</span>
            </h3>
            <span className="font-mono text-xs tracking-widest text-gold uppercase whitespace-nowrap">
              Apr 2025 — Mar 2026
            </span>
          </div>
          <ul className="space-y-4">
            {EXPERIENCE_POINTS.map((t, i) => (
              <li key={i} className="flex gap-4 text-inkmuted leading-relaxed">
                <span className="mt-2.5 w-1 h-1 rounded-full bg-gold flex-shrink-0"></span>
                <span>{t}</span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>

      <div className="mt-24 md:mt-32">
        <Reveal>
          <Eyebrow>Projects</Eyebrow>
          <h2 className="font-display text-4xl md:text-5xl text-ink mb-14">Selected work</h2>
        </Reveal>
        <div className="grid md:grid-cols-2 gap-6 md:gap-8">
          {PROJECTS.map((p, i) => (
            <Reveal key={p.name} delay={i * 0.1}>
              <a
                href={p.href}
                target="_blank"
                rel="noopener noreferrer"
                className="focus-ring group block h-full rounded-2xl card-border bg-raised/60 p-8 md:p-10 hover:border-gold/40 transition-colors duration-500 relative overflow-hidden"
              >
                <div className="absolute -right-8 -top-8 w-32 h-32 rounded-full bg-gold/5 blur-2xl group-hover:bg-gold/10 transition-colors duration-500"></div>
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="font-display text-3xl text-ink mb-1">{p.name}</h3>
                    <p className="font-mono text-[11px] tracking-widest uppercase text-gold/80">{p.tag}</p>
                  </div>
                  <ArrowUpRight
                    size={20}
                    className="text-inkfaint group-hover:text-gold group-hover:translate-x-1 group-hover:-translate-y-1 transition-all duration-300 flex-shrink-0"
                  />
                </div>
                <ul className="mt-6 space-y-3">
                  {p.points.map((pt, j) => (
                    <li key={j} className="flex gap-3 text-sm text-inkmuted leading-relaxed">
                      <span className="mt-2 w-1 h-1 rounded-full bg-inkfaint flex-shrink-0"></span>
                      <span>{pt}</span>
                    </li>
                  ))}
                </ul>
                <div className="mt-8 flex items-center gap-2 text-xs font-mono tracking-widest uppercase text-inkmuted group-hover:text-gold transition-colors">
                  <Github size={14} /> View on GitHub
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
