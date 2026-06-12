'use client';

import { impactMetrics } from '@/lib/content';
import { AnimatedCounter } from '@/components/motion/animated-counter';
import { ScrollRevealStagger } from '@/components/motion/scroll-reveal';

export function ImpactMetrics() {
  return (
    <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollRevealStagger className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4" stagger={0.1}>
          {impactMetrics.map((metric) => (
            <div key={metric.label} data-reveal-item className="border-t border-white/[0.08] pt-8">
              <p className="font-display text-metric font-bold text-white">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{metric.label}</p>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
