'use client';

import { motion } from 'framer-motion';
import { whyUs, founderQuote } from '@/lib/content';

export function WhyUsSection() {
  return (
    <section className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-20 max-w-3xl">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Why us</p>
          <blockquote className="mt-6 font-display text-2xl font-medium leading-[1.4] text-white sm:text-3xl lg:text-4xl">
            &ldquo;{founderQuote.quote}&rdquo;
          </blockquote>
          <p className="mt-6 text-sm text-muted">
            {founderQuote.author} · {founderQuote.role}
          </p>
          <p className="mt-8 text-lg leading-[1.75] text-muted">{founderQuote.belief}</p>
        </div>

        <div className="grid gap-px overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.06] sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              className="surface-card p-8"
            >
              <h3 className="font-display text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-[1.7] text-muted">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
