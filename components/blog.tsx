'use client';

import { motion } from 'framer-motion';
import { blogPosts } from '@/lib/content';

export function BlogSection() {
  return (
    <section id="blog" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Insights</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">The thinking behind premium digital launches.</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {blogPosts.map((post, index) => (
            <motion.article
              key={post.title}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.75, delay: index * 0.08 }}
              className="glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent/80">{post.category}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{post.title}</h3>
              <p className="mt-4 text-slate-300">{post.excerpt}</p>
              <a href={post.href} className="mt-6 inline-flex text-sm text-accent hover:text-white">
                Read more →
              </a>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
