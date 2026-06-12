'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/content';
import { SectionHeader } from '@/components/motion/section-header';
import { TiltCard } from '@/components/motion/tilt-card';

export function BlogSection() {
  return (
    <section id="blog" className="relative px-6 py-28 sm:px-10 lg:px-16">
      <div className="section-glow top-0" />
      <div className="mx-auto max-w-7xl">
        <SectionHeader
          label="Insights"
          title="The thinking behind premium digital launches."
        />

        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
            >
              <TiltCard maxTilt={4}>
                <article className="glass-card-premium glow-hover group rounded-[2rem] p-8">
                  <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent2">{post.category}</p>
                  <h3 className="mt-4 font-display text-2xl font-semibold text-white transition-colors group-hover:text-gradient">
                    {post.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-400">{post.excerpt}</p>
                  <a
                    href={post.href}
                    data-cursor="pointer"
                    className="link-premium mt-6 inline-flex items-center gap-2 text-sm font-medium text-accent2 transition hover:text-white"
                  >
                    Read more <span className="transition-transform group-hover:translate-x-1">→</span>
                  </a>
                </article>
              </TiltCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
