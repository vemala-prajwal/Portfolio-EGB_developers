'use client';

import { marqueeWords } from '@/lib/content';

export function MarqueeStrip() {
  const items = [...marqueeWords, ...marqueeWords];

  return (
    <div className="relative overflow-hidden border-y border-white/[0.06] py-5">
      <div className="marquee-slow flex w-max items-center gap-12">
        {items.map((word, i) => (
          <span key={`${word}-${i}`} className="flex items-center gap-12 font-display text-sm font-medium uppercase tracking-[0.35em] text-muted">
            {word}
            <span className="h-1 w-1 rounded-full bg-white/20" />
          </span>
        ))}
      </div>
    </div>
  );
}
