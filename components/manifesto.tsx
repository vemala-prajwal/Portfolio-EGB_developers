'use client';

import { manifesto } from '@/lib/content';
import { ScrollReveal, ScrollRevealStagger, ScrollTextReveal } from '@/components/motion/scroll-reveal';

export function ManifestoSection() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollTextReveal
          text={manifesto.statement}
          mutedPrefix={`${manifesto.label}, `}
          className="font-display text-section font-medium leading-[1.15] text-white"
        />

        <ScrollRevealStagger className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/[0.06] pt-12">
          {manifesto.pillars.map((pillar) => (
            <span key={pillar} data-reveal-item className="font-display text-2xl font-semibold sm:text-3xl">
              {pillar}
            </span>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
