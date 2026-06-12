'use client';

import { motion } from 'framer-motion';
import { manifesto } from '@/lib/content';

export function ManifestoSection() {
  return (
    <section id="about" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-display text-section font-medium leading-[1.15] text-white"
        >
          <span className="text-muted">{manifesto.label}, </span>
          {manifesto.statement}
        </motion.h2>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-16 flex flex-wrap gap-x-12 gap-y-4 border-t border-white/[0.06] pt-12"
        >
          {manifesto.pillars.map((pillar) => (
            <span key={pillar} className="font-display text-2xl font-semibold sm:text-3xl">
              {pillar}
            </span>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
