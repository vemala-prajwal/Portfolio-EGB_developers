'use client';

import { motion } from 'framer-motion';
import { hero } from '@/lib/content';
import { WordReveal } from '@/components/motion/word-reveal';
import { Magnetic } from '@/components/motion/magnetic';

export function HeroSection() {
  return (
    <section id="home" className="relative flex min-h-screen flex-col justify-center px-6 pb-20 pt-32 sm:px-10 lg:px-16">
      <div className="mx-auto w-full max-w-6xl">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium uppercase tracking-[0.4em] text-muted"
        >
          {hero.eyebrow}
        </motion.p>

        <div className="mt-8 max-w-5xl">
          <WordReveal
            as="h1"
            text={hero.headline}
            className="font-display text-hero-lg font-medium text-white"
            delay={0.15}
          />
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="mt-8 max-w-2xl text-xl leading-[1.6] text-muted sm:text-2xl"
        >
          {hero.subheadline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.9 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          {hero.actions.map((action, i) => (
            <Magnetic key={action.href} strength={0.2}>
              <a
                href={action.href}
                data-cursor="pointer"
                className={i === 0 ? 'btn-primary px-8 py-4 text-sm' : 'btn-secondary px-8 py-4 text-sm'}
              >
                {action.label}
                <span className="opacity-60">→</span>
              </a>
            </Magnetic>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1 }}
          className="mt-16 flex flex-wrap gap-6 border-t border-white/[0.06] pt-10"
        >
          {hero.disciplines.map((d) => (
            <span key={d} className="text-xs font-medium uppercase tracking-[0.3em] text-muted">
              {d}
            </span>
          ))}
        </motion.div>
      </div>

      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted transition hover:text-white"
        data-cursor="pointer"
      >
        <div className="scroll-indicator mx-auto mb-2 h-8 w-px bg-white/20" />
      </motion.a>
    </section>
  );
}
