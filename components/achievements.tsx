'use client';

import { motion } from 'framer-motion';
import { achievements } from '@/lib/content';
import { SectionHeader } from '@/components/motion/section-header';

export function AchievementsSection() {
  return (
    <section id="achievements" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Achievements"
          title="Recognition that reflects the level of craft behind every launch."
        />

        <div className="grid gap-5 lg:grid-cols-3">
          {achievements.map((achievement, index) => (
            <motion.article
              key={achievement.label}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="group glass-card-premium glow-hover rounded-[2rem] p-8 transition-all"
            >
              <div className="flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-accent/20 bg-accent/10 transition-colors group-hover:border-accent/40">
                  <svg viewBox="0 0 24 24" className="h-5 w-5 text-accent2" fill="currentColor">
                    <path d="M12 2l2.4 7.4H22l-6.2 4.5 2.4 7.4L12 17l-6.2 4.3 2.4-7.4L2 9.4h7.6z" />
                  </svg>
                </div>
                <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent2">{achievement.date}</p>
              </div>
              <h3 className="mt-5 font-display text-xl font-semibold text-white">{achievement.label}</h3>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
