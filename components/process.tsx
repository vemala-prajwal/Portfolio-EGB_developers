import { motion } from 'framer-motion';
import { processSteps } from '@/lib/content';

export function ProcessSection() {
  return (
    <section id="process" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Process</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">A refined workflow built for clarity and momentum</h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {processSteps.map((step, index) => (
            <motion.article
              key={step}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.07 }}
              className="glass-card rounded-[2rem] p-8"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-accent/80">0{index + 1}</p>
              <h3 className="mt-4 text-2xl font-semibold text-white">{step}</h3>
              <p className="mt-4 text-slate-300">A deliberate sequence of research, positioning, design, and validation that keeps every launch sharp and conversion-ready.</p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
