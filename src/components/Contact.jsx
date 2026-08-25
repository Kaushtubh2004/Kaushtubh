import React from 'react';
import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import Reveal from './Reveal.jsx';
import { SOCIALS } from '../data.js';

export default function Contact() {
  return (
    <section id="contact" className="relative max-w-7xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-40 md:pb-48">
      <Reveal>
        <Eyebrow>Contact</Eyebrow>
        <h2 className="font-display text-[12vw] md:text-7xl leading-[0.95] text-ink max-w-3xl">
          Let's build something <span className="italic gold-text">worth shipping.</span>
        </h2>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="mt-14 flex flex-wrap gap-4">
          <a
            href="mailto:kaushtubhsinghmzp@gmail.com"
            className="focus-ring inline-flex items-center gap-2 px-6 py-3 bg-ink text-void font-mono text-xs tracking-widest uppercase rounded-full hover:bg-goldbright transition-colors"
          >
            <Mail size={14} /> kaushtubhsinghmzp@gmail.com
          </a>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="mt-6 flex flex-wrap gap-x-8 gap-y-3 text-inkmuted text-sm font-mono">
          <span className="inline-flex items-center gap-2">
            <MapPin size={13} /> Noida, India
          </span>
        </div>
      </Reveal>

      <div className="hairline-grad my-16"></div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {SOCIALS.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.05}>
            <a
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring group flex flex-col gap-3 py-5 border-t border-hairline hover:border-gold/50 transition-colors"
            >
              <div className="flex items-center justify-between">
                <s.Icon size={18} className="text-inkmuted group-hover:text-gold transition-colors" strokeWidth={1.5} />
                <ArrowUpRight size={14} className="text-inkfaint group-hover:text-gold group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </div>
              <div>
                <div className="text-ink text-sm">{s.label}</div>
                <div className="text-inkfaint text-xs font-mono mt-0.5">@{s.handle}</div>
              </div>
            </a>
          </Reveal>
        ))}
      </div>

      <div className="mt-24 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <p className="font-mono text-[11px] tracking-widest uppercase text-inkfaint">
          © {new Date().getFullYear()} Kaushtubh Singh
        </p>
        <p className="font-mono text-[11px] tracking-widest uppercase text-inkfaint">Designed &amp; built with intent</p>
      </div>
    </section>
  );
}
