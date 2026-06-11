import { motion } from 'framer-motion';
import { stats } from '@/lib/content';

export function StatsSection() {
  return (
    <section id="stats" className="px-6 py-16 sm:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-6 rounded-[2rem] border border-white/10 bg-white/5 p-8 shadow-glow lg:grid-cols-4">
        {stats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.08 }}
            className="rounded-[1.5rem] border border-white/10 bg-slate-950/80 p-6"
          >
            <p className="text-3xl font-semibold text-white">{stat.value}</p>
            <p className="mt-2 text-sm text-slate-300">{stat.label}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
