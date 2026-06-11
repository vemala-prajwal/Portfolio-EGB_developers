'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { hero } from '@/lib/content';

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden px-6 pb-20 pt-28 sm:px-10 lg:px-16">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(107,91,255,0.20),_transparent_28%),radial-gradient(circle_at_20%_30%,_rgba(56,215,255,0.12),_transparent_18%),linear-gradient(160deg,#04070f_0%,#070b15_45%,#04070f_100%)]" />
      <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-white/4 to-transparent" />
      <motion.div animate={{ y: [0, -10, 0], x: [0, 14, 0] }} transition={{ repeat: Infinity, duration: 12, ease: 'easeInOut' }} className="absolute left-1/4 top-24 h-56 w-56 rounded-full bg-accent/10 blur-3xl" />
      <motion.div animate={{ y: [0, 16, 0], x: [0, -12, 0] }} transition={{ repeat: Infinity, duration: 14, ease: 'easeInOut' }} className="absolute bottom-20 right-1/4 h-72 w-72 rounded-full bg-accent2/10 blur-3xl" />
      <div className="relative mx-auto flex min-h-[calc(100vh-7rem)] max-w-7xl items-center">
        <div className="grid w-full gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-8">
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[11px] uppercase tracking-[0.35em] text-slate-200 shadow-glow">
              <span className="h-2 w-2 rounded-full bg-accent2" /> Premium digital agency · Awwwards-level polish
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.1 }} className="space-y-6">
              <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-tight text-white sm:text-6xl lg:text-7xl">We build premium digital experiences that look expensive, perform beautifully, and convert with confidence.</h1>
              <p className="max-w-2xl text-lg leading-8 text-slate-300">{hero.description} Every interaction, surface, and transition is tuned to feel cinematic, intelligent, and conversion-ready.</p>
              <div className="flex flex-wrap gap-3 pt-2 text-[11px] uppercase tracking-[0.3em] text-slate-200">
                {hero.tags.map((tag) => <span key={tag} className="rounded-full border border-white/10 bg-white/5 px-3 py-2">{tag}</span>)}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.2 }} className="flex flex-wrap gap-4">
              {hero.actions.map((action) => <a key={action.href} href={action.href} className="rounded-full bg-gradient-to-r from-accent via-accent to-accent2 px-6 py-3 text-sm font-semibold text-slate-950 shadow-glow transition hover:-translate-y-0.5 hover:brightness-105">{action.label}</a>)}
            </motion.div>
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.25 }} className="grid gap-4 rounded-[2rem] border border-white/10 bg-white/5 p-5 shadow-glow sm:grid-cols-3">
              {['48+ projects', '22+ clients', '10 years craft'].map((item) => <div key={item} className="rounded-2xl border border-white/8 bg-slate-950/60 p-4 text-sm text-slate-200">{item}</div>)}
            </motion.div>
          </div>
          <motion.div initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 1, delay: 0.12 }} className="relative mx-auto flex h-[460px] w-full max-w-[440px] items-end justify-center">
            <div className="absolute -top-4 right-0 rounded-3xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100 shadow-glow">98% client satisfaction</div>
            <div className="absolute -bottom-4 left-0 rounded-3xl border border-white/10 bg-white/8 px-4 py-3 text-sm text-slate-100 shadow-glow">Fast launch · refined UX</div>
            <div className="absolute inset-0 rounded-[2.5rem] border border-white/10 bg-white/5 shadow-glow backdrop-blur-3xl" />
            <div className="relative z-10 overflow-hidden rounded-[2.5rem] border border-white/10 bg-surface2/80 p-1">
              <Image src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=900&q=80" alt="Creative portrait" width={440} height={440} className="h-[460px] w-[440px] object-cover" />
            </div>
          </motion.div>
        </div>
      </div>
      <motion.a href="#about" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, delay: 0.35 }} className="absolute bottom-6 left-1/2 -translate-x-1/2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs uppercase tracking-[0.35em] text-slate-200 shadow-glow">Scroll to explore</motion.a>
    </section>
  );
}
