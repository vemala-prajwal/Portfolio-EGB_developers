'use client';

import { motion } from 'framer-motion';
import { impactMetrics } from '@/lib/content';
import { AnimatedCounter } from '@/components/motion/animated-counter';

export function ImpactMetrics() {
  return (
    <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
          {impactMetrics.map((metric, i) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.7 }}
              className="border-t border-white/[0.08] pt-8"
            >
              <p className="font-display text-metric font-bold text-white">
                <AnimatedCounter value={metric.value} suffix={metric.suffix} />
              </p>
              <p className="mt-4 text-sm leading-relaxed text-muted">{metric.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
