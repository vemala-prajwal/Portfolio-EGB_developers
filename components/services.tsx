'use client';

import { motion } from 'framer-motion';
import { services } from '@/lib/content';
import { Magnetic } from '@/components/motion/magnetic';

export function ServicesSection() {
  return (
    <section id="services" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="mb-16 text-center">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Pricing</p>
          <h2 className="mt-4 font-display text-section font-medium text-white">
            Built for momentum, not contracts.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            If you have a clear vision, many partnerships start with a project and evolve into ongoing collaboration.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-3">
          {services.map((plan, i) => (
            <motion.article
              key={plan.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className={`surface-card flex flex-col rounded-2xl p-8 lg:p-10 ${
                plan.featured ? 'border-white/20 bg-white/[0.03]' : ''
              }`}
            >
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-muted">{plan.tier}</p>
              <h3 className="mt-4 font-display text-2xl font-semibold text-white">{plan.title}</h3>
              <div className="mt-4 flex items-baseline gap-1">
                <span className="font-display text-4xl font-bold text-white">{plan.price}</span>
                {'period' in plan && plan.period && (
                  <span className="text-sm text-muted">{plan.period}</span>
                )}
              </div>
              <p className="mt-4 text-sm leading-[1.7] text-muted">{plan.subtitle}</p>

              <ul className="mt-8 flex-1 space-y-3">
                {plan.features.map((f) => (
                  <li key={f} className="flex gap-3 text-sm text-muted">
                    <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-white/40" />
                    {f}
                  </li>
                ))}
              </ul>

              <Magnetic strength={0.12} className="mt-10">
                <a
                  href="#contact"
                  data-cursor="pointer"
                  className={plan.featured ? 'btn-primary w-full justify-center py-3.5 text-sm' : 'btn-secondary w-full justify-center py-3.5 text-sm'}
                >
                  {plan.cta}
                </a>
              </Magnetic>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
