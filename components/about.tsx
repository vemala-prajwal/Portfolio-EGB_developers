'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="text-sm uppercase tracking-[0.35em] text-accent/80">About</p>
            <h2 className="mt-4 max-w-3xl text-4xl font-semibold text-white sm:text-5xl">We turn ambitious ideas into premium digital experiences with depth, clarity, and strategy.</h2>
          </div>
          <p className="max-w-2xl text-slate-300">We design with editorial rhythm, cinematic motion, and measurable conversion logic—so every page feels like a high-value product launch.</p>
        </div>
        <div className="grid gap-8 xl:grid-cols-[1.15fr_0.85fr]">
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="glass-card rounded-[2rem] p-8 lg:p-10">
            <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Mission</p>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">{about.summary}</p>
            <div className="mt-8 grid gap-4 sm:grid-cols-2">{about.skills.map((skill) => <Card key={skill} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5"><p className="text-sm font-semibold text-white">{skill}</p></Card>)}</div>
          </motion.div>
          <motion.div initial={{ opacity: 0, x: 24 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.9 }} className="space-y-6">
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Timeline</p>
              <div className="mt-6 space-y-4">{about.stats.map((stat, i) => <div key={stat.label} className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5"><p className="text-xs uppercase tracking-[0.3em] text-slate-400">0{i + 1}</p><p className="mt-2 text-3xl font-semibold text-white">{stat.value}</p><p className="mt-1 text-sm text-slate-300">{stat.label}</p></div>)}</div>
            </div>
            <Card className="rounded-[2rem] border border-white/10 bg-white/6 p-8">
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Why it works</p>
              <ul className="mt-6 space-y-4 text-slate-200">{about.highlights.map((item) => <li key={item} className="flex gap-3 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-accent2" />{item}</li>)}</ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
