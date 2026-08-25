import React from 'react';
import { GraduationCap, Award } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';
import { SKILLS, EDUCATION, CERTS } from '../data.js';

export default function Skills() {
  return (
    <section id="skills" className="relative max-w-7xl mx-auto px-6 md:px-12 py-28 md:py-36">
      <Reveal>
        <Eyebrow>Skills</Eyebrow>
        <h2 className="font-display text-4xl md:text-5xl text-ink mb-14">Toolkit</h2>
      </Reveal>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-12">
        {SKILLS.map((s, i) => (
          <Reveal key={s.group} delay={i * 0.06}>
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-gold/80 mb-4">{s.group}</h3>
            <div className="flex flex-wrap gap-2.5">
              {s.items.map((it) => (
                <span
                  key={it}
                  className="text-sm text-inkmuted border border-hairline rounded-full px-4 py-1.5 hover:border-gold/50 hover:text-ink transition-colors duration-300"
                >
                  {it}
                </span>
              ))}
            </div>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 grid md:grid-cols-2 gap-16">
        <Reveal>
          <div className="flex items-center gap-3 mb-6">
            <GraduationCap size={18} className="text-gold" strokeWidth={1.5} />
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-inkmuted">Education</h3>
          </div>
          <div className="space-y-6">
            {EDUCATION.map((e) => (
              <div key={e.degree} className="border-l border-hairline pl-5">
                <div className="flex justify-between gap-4 flex-wrap">
                  <h4 className="text-ink font-medium">{e.degree}</h4>
                  <span className="font-mono text-[11px] text-inkfaint whitespace-nowrap">{e.period}</span>
                </div>
                <p className="text-inkmuted text-sm mt-1">{e.school}</p>
                <p className="text-inkfaint text-xs mt-1">{e.meta}</p>
              </div>
            ))}
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="flex items-center gap-3 mb-6">
            <Award size={18} className="text-gold" strokeWidth={1.5} />
            <h3 className="font-mono text-xs tracking-[0.25em] uppercase text-inkmuted">Certifications</h3>
          </div>
          <div className="space-y-4">
            {CERTS.map((c) => (
              <div key={c} className="border-l border-hairline pl-5 py-1 text-inkmuted text-sm">
                {c}
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
