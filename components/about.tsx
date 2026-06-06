'use client';

import { motion } from 'framer-motion';
import { about } from '@/lib/content';
import { Card } from '@/components/ui/card';

export function AboutSection() {
  return (
    <section id="about" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 flex items-center justify-between gap-6">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-accent/80">About</p>
            <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Who I am</h2>
          </div>
          <div className="hidden rounded-3xl border border-white/10 bg-surface2/80 px-6 py-4 text-sm text-slate-400 shadow-glow md:block">
            Future-first digital product systems, motion-led storytelling, and luxury-brand experiences.
          </div>
        </div>
        <div className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <p className="max-w-3xl text-lg leading-8 text-slate-300">{about.summary}</p>
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {about.skills.map((skill) => (
                <Card key={skill} className="border border-white/10 p-6">
                  <p className="font-semibold text-white">{skill}</p>
                </Card>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut' }}
            className="space-y-6"
          >
            <div className="glass-card rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.28em] text-accent/80">Statistics</p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {about.stats.map((stat) => (
                  <div key={stat.label} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <p className="text-3xl font-semibold text-white">{stat.value}</p>
                    <p className="mt-2 text-sm text-slate-400">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <Card className="rounded-[2rem] p-8">
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Experience highlights</p>
              <ul className="mt-6 space-y-4 text-slate-300">
                {about.highlights.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
