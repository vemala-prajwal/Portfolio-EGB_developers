'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';
import { Magnetic } from '@/components/motion/magnetic';

export function CtaBand() {
  return (
    <section className="border-y border-white/[0.06] px-6 py-28 sm:px-10 lg:px-16 lg:py-36">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-10 lg:flex-row lg:items-center"
      >
        <div>
          <h2 className="font-display text-section font-medium text-white">{about.title}</h2>
          <p className="mt-4 text-xl text-muted">{about.subtitle}</p>
        </div>
        <Magnetic strength={0.18}>
          <a href="#contact" data-cursor="pointer" className="btn-primary px-10 py-4 text-base">
            Let&apos;s work together
          </a>
        </Magnetic>
      </motion.div>
    </section>
  );
}
