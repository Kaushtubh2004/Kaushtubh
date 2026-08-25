import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Download, ChevronDown } from 'lucide-react';
import Eyebrow from './Eyebrow.jsx';
import { scrollTo } from '../lib/utils.js';
import portrait from '../assets/portrait.png';

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-[100dvh] flex flex-col md:flex-row md:items-center overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 1.06 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
        className="relative w-full h-[55vh] shrink-0 md:absolute md:inset-0 md:right-0 md:left-auto md:w-[58%] md:h-full"
      >
        <img
          src={portrait}
          alt="Portrait of Kaushtubh Singh"
          className="w-full h-full object-cover object-top opacity-85 md:opacity-90 [mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_60%,transparent_100%)] md:[mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)] md:[-webkit-mask-image:linear-gradient(to_right,transparent_0%,black_22%,black_100%)]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-void via-transparent to-transparent md:bg-gradient-to-r md:from-void md:via-void/10 md:to-transparent"></div>
        <div className="absolute inset-x-0 bottom-0 h-32 md:h-40 bg-gradient-to-t from-void to-transparent"></div>
      </motion.div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex-1 flex flex-col justify-center pb-24 pt-4 md:block md:pb-16 md:pt-0 md:py-0">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-xl"
        >
          <Eyebrow>Full Stack Developer · MERN</Eyebrow>
          <h1 className="font-display text-[13vw] sm:text-[11vw] leading-[0.92] md:text-[5.4rem] font-medium text-ink">
            Kaushtubh
            <br />
            <span className="gold-text italic">Singh</span>
          </h1>
          <p className="mt-6 text-inkmuted text-base md:text-lg max-w-md leading-relaxed">
            I build high-throughput APIs, responsive interfaces and scalable database
            architectures — engineered for production, not just demos.
          </p>
          <div className="mt-9 flex flex-wrap items-center gap-4">
            <button
              onClick={() => scrollTo('work')}
              className="focus-ring group inline-flex items-center gap-2 px-6 py-3 bg-ink text-void font-mono text-xs tracking-widest uppercase rounded-full hover:bg-goldbright transition-colors duration-300"
            >
              View Work
              <ArrowUpRight size={14} className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </button>
            <a
              href="/resume.pdf"
              download="Kaushtubh_Singh_Resume.pdf"
              className="focus-ring inline-flex items-center gap-2 px-6 py-3 border border-hairline text-ink font-mono text-xs tracking-widest uppercase rounded-full hover:border-gold hover:text-gold transition-colors duration-300"
            >
              <Download size={14} /> Resume
            </a>
          </div>
        </motion.div>
      </div>

      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        className="hidden md:flex absolute bottom-10 right-10 flex-col items-center gap-2 text-inkfaint"
      >
        <span className="font-mono text-[10px] tracking-[0.25em] [writing-mode:vertical-rl]">SCROLL</span>
        <ChevronDown size={14} />
      </motion.div>
    </section>
  );
}
