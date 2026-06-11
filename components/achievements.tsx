'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/content';

export function AchievementsSection() {
  return (
    <section id="achievements" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Achievements</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Recognition that reflects the level of craft behind every launch.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
            >
              <p className="text-sm uppercase tracking-[0.35em] text-accent/80">{achievement.date}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{achievement.label}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
