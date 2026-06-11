'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Services</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">High-touch design systems for brands that want to feel undeniable.</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Every engagement blends strategy, visual polish, motion, and implementation detail so the final experience feels deliberate and premium.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.article key={service.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: index * 0.08 }} className="group glass-card rounded-[2rem] border border-white/10 p-8 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-accent/40">
              <div className="flex items-center justify-between">
                <p className="text-xs uppercase tracking-[0.35em] text-accent/90">{service.title}</p>
                <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-200">Premium</span>
              </div>
              <h3 className="mt-5 text-2xl font-semibold text-white">{service.subtitle}</h3>
              <p className="mt-4 text-slate-300">{service.price}</p>
              <ul className="mt-6 space-y-3 text-slate-200">{service.features.map((feature) => <li key={feature} className="flex items-start gap-3 text-sm"><span className="mt-1 h-2 w-2 rounded-full bg-accent2" />{feature}</li>)}</ul>
              <Button className="mt-8 w-full">Plan a session</Button>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
