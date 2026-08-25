import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useScroll, useSpring } from 'framer-motion';
import { X as CloseIcon, Menu as MenuIcon } from 'lucide-react';
import { NAV } from '../data.js';
import { scrollTo } from '../lib/utils.js';

export default function OrbitController({ active }) {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, { stiffness: 60, damping: 20, restDelta: 0.001 });
  const ref = useRef(null);

  useEffect(() => {
    function onClick(e) {
      if (open && ref.current && !ref.current.contains(e.target)) setOpen(false);
    }
    document.addEventListener('mousedown', onClick);
    return () => document.removeEventListener('mousedown', onClick);
  }, [open]);

  const radius = 74;
  const size = radius * 2 + 8;

  return (
    <div ref={ref} className="fixed z-50 right-5 bottom-5 md:right-8 md:bottom-8" style={{ width: size, height: size }}>
      <svg width={size} height={size} className="absolute inset-0 -rotate-90 pointer-events-none">
        <circle cx={size / 2} cy={size / 2} r={radius} fill="none" stroke="rgba(237,234,228,0.07)" strokeWidth="1" />
        <motion.circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          fill="none"
          stroke="#D9B24C"
          strokeWidth="1.4"
          strokeLinecap="round"
          style={{ pathLength }}
          strokeDasharray="1 1"
          pathOffset={0}
        />
      </svg>

      <AnimatePresence>
        {open &&
          NAV.map((item, i) => {
            const angle = (-90 + i * (360 / NAV.length)) * (Math.PI / 180);
            const x = Math.cos(angle) * radius;
            const y = Math.sin(angle) * radius;
            const isActive = active === item.id;
            const leftPos = size / 2 - 22;
            const topPos = size / 2 - 22;
            return (
              <motion.button
                key={item.id}
                initial={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                animate={{ opacity: 1, scale: 1, x, y }}
                exit={{ opacity: 0, scale: 0.3, x: 0, y: 0 }}
                transition={{ type: 'spring', stiffness: 260, damping: 20, delay: i * 0.035 }}
                onClick={() => {
                  scrollTo(item.id);
                  setOpen(false);
                }}
                aria-label={item.label}
                className={`focus-ring absolute w-11 h-11 rounded-full flex items-center justify-center border backdrop-blur-md transition-colors ${
                  isActive
                    ? 'bg-gold text-void border-gold'
                    : 'bg-raised2/90 text-ink border-hairline hover:border-gold/60 hover:text-gold'
                }`}
                style={{ left: leftPos, top: topPos }}
              >
                <item.Icon size={17} strokeWidth={1.6} />
              </motion.button>
            );
          })}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((o) => !o)}
        whileTap={{ scale: 0.92 }}
        aria-label={open ? 'Close menu' : 'Open menu'}
        className="focus-ring absolute w-16 h-16 rounded-full flex items-center justify-center bg-raised border border-gold/40 shadow-[0_0_0_1px_rgba(176,141,46,0.15),0_10px_30px_-10px_rgba(0,0,0,0.8)]"
        style={{ left: size / 2 - 32, top: size / 2 - 32 }}
      >
        <span className="absolute inset-0 rounded-full bg-gold/10 blur-md"></span>
        <AnimatePresence mode="wait" initial={false}>
          {open ? (
            <motion.span key="close" initial={{ opacity: 0, rotate: -45 }} animate={{ opacity: 1, rotate: 0 }} exit={{ opacity: 0, rotate: 45 }}>
              <CloseIcon size={20} className="text-gold" strokeWidth={1.6} />
            </motion.span>
          ) : (
            <motion.span
              key="menu"
              initial={{ opacity: 0, rotate: 45 }}
              animate={{ opacity: 1, rotate: 0 }}
              exit={{ opacity: 0, rotate: -45 }}
            >
              <MenuIcon size={20} className="text-gold" strokeWidth={1.6} />
            </motion.span>
          )}
        </AnimatePresence>
      </motion.button>
    </div>
  );
}
