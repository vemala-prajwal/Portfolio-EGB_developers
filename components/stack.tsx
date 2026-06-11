import { motion } from 'framer-motion';
import { stackItems } from '@/lib/content';

export function StackSection() {
  return (
    <section id="stack" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Technology</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Built with a modern stack designed for speed and polish</h2>
        </div>
        <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-glow">
          <motion.div
            initial={{ x: 0 }}
            animate={{ x: ['0%', '-50%'] }}
            transition={{ repeat: Infinity, duration: 18, ease: 'linear' }}
            className="flex w-max gap-4"
          >
            {[...stackItems, ...stackItems].map((item, index) => (
              <div key={`${item}-${index}`} className="rounded-full border border-white/10 bg-slate-950/80 px-5 py-3 text-sm text-slate-100">{item}</div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
