'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import { Button } from '@/components/ui/button';

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 space-y-3 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Services</p>
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">What I deliver</h2>
          <p className="mx-auto max-w-2xl text-slate-400">Agency-grade packages with polished motion systems, premium design, and performance-first implementation.</p>
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <p className="text-sm uppercase tracking-[0.3em] text-accent/90">{service.title}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{service.subtitle}</h3>
              <p className="mt-4 text-slate-300">{service.price}</p>
              <ul className="mt-6 space-y-3 text-slate-300">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3 text-sm">
                    <span className="mt-1 h-2 w-2 rounded-full bg-accent" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="mt-8 w-full">Plan a session</Button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
