'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { hero, socialLinks } from '@/lib/content';

export function HeroSection() {
  return (
    <section id="home" className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-hero-gradient opacity-90" />
      <div className="absolute left-1/2 top-12 h-72 w-72 -translate-x-1/2 rounded-full bg-indigo-500/10 blur-3xl" />
      <div className="relative mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: 'easeOut' }}
              className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/70 shadow-glow"
            >
              Premium design studio
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.1 }}
              className="space-y-6"
            >
              <h1 className="text-5xl font-semibold leading-[0.95] tracking-tight text-white sm:text-6xl lg:text-7xl">
                Crafting futuristic digital brands that feel alive.
              </h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">
                {hero.description} Explore the website to experience sleek motion, glassmorphism, and a premium narrative flow.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.2 }}
              className="flex flex-wrap gap-4"
            >
              {hero.actions.map((action) => (
                <a
                  key={action.href}
                  href={action.href}
                  className="button-float inline-flex items-center justify-center rounded-full bg-gradient-to-r from-accent to-accent2 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition-all duration-300 hover:brightness-105"
                >
                  {action.label}
                </a>
              ))}
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 pt-6 text-sm text-slate-400"
            >
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="transition hover:text-white"
                >
                  {social.icon} {social.label}
                </a>
              ))}
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.15 }}
            className="relative mx-auto flex h-[420px] w-full max-w-[420px] items-end justify-center"
          >
            <div className="absolute inset-0 rounded-[2.5rem] bg-white/5 shadow-glow ring-1 ring-white/10 backdrop-blur-3xl" />
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface2/80 p-1">
              <Image
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80"
                alt="Profile image"
                width={420}
                height={420}
                className="h-[420px] w-[420px] object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
