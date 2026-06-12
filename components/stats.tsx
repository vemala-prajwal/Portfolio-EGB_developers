'use client';

import { motion } from 'framer-motion';
import { stats } from '@/lib/content';
import { AnimatedCounter } from '@/components/motion/animated-counter';

export function StatsSection() {
  return (
    <section id="stats" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="glass-card-premium grid gap-px overflow-hidden rounded-[2rem] border border-white/[0.08] md:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-surface2/60 p-8 text-center transition-colors hover:bg-accent/[0.04]"
            >
              <p className="font-display text-4xl font-bold text-white">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-[0.25em] text-slate-400">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
