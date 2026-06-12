'use client';

import { approach } from '@/lib/content';
import { Magnetic } from '@/components/motion/magnetic';
import { ScrollReveal, ScrollRevealStagger } from '@/components/motion/scroll-reveal';

export function ApproachSection() {
  return (
    <section id="approach" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-20 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Approach</p>
            <h2 className="mt-4 max-w-xl font-display text-section font-medium text-white">
              Built for momentum, not contracts.
            </h2>
          </div>
          <Magnetic strength={0.15}>
            <a href="#contact" data-cursor="pointer" className="btn-primary px-7 py-3.5 text-sm">
              Schedule your call
            </a>
          </Magnetic>
        </ScrollReveal>

        <ScrollRevealStagger className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] md:grid-cols-2">
          {approach.map((step) => (
            <article
              key={step.step}
              data-reveal-item
              className="surface-card group p-8 lg:p-10"
            >
              <p className="font-display text-sm font-medium text-muted">{step.step}</p>
              <h3 className="mt-4 font-display text-xl font-semibold text-white lg:text-2xl">{step.title}</h3>
              <p className="mt-4 text-base leading-[1.75] text-muted">{step.description}</p>
            </article>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
