import React from 'react';

export default function Eyebrow({ children }) {
  return (
    <div className="flex items-center gap-3 mb-5">
      <span className="w-8 h-px bg-gold/60"></span>
      <span className="font-mono text-[11px] tracking-[0.28em] uppercase text-gold/90">{children}</span>
    </div>
  );
}
