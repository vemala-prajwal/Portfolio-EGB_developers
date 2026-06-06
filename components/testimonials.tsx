'use client';

import { motion } from 'framer-motion';
import { testimonials } from '@/lib/content';

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Testimonials</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Trusted by visionary teams</h2>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <p className="text-lg leading-8 text-slate-200">“{item.quote}”</p>
              <div className="mt-8 flex items-center justify-between gap-4 text-slate-400">
                <div>
                  <p className="font-semibold text-white">{item.author}</p>
                  <p className="text-sm">{item.company}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
