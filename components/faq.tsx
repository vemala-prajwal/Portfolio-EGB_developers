'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { faqs } from '@/lib/content';
import { ScrollReveal, ScrollRevealStagger } from '@/components/motion/scroll-reveal';

export function FaqSection() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-3xl">
        <ScrollReveal>
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">FAQ</p>
          <h2 className="mt-4 font-display text-section font-medium text-white">Common questions</h2>
        </ScrollReveal>

        <ScrollRevealStagger className="mt-12 divide-y divide-white/[0.06]" stagger={0.06}>
          {faqs.map((faq, i) => (
            <div key={faq.question} data-reveal-item>
              <button
                onClick={() => setOpen(open === i ? null : i)}
                data-cursor="pointer"
                className="flex w-full items-center justify-between gap-4 py-6 text-left"
              >
                <span className="font-display text-lg font-medium text-white">{faq.question}</span>
                <span
                  className="shrink-0 text-xl text-muted transition-transform duration-300"
                  style={{ transform: open === i ? 'rotate(45deg)' : 'rotate(0)' }}
                >
                  +
                </span>
              </button>
              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="pb-6 text-base leading-[1.75] text-muted">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </ScrollRevealStagger>
      </div>
    </section>
  );
}
