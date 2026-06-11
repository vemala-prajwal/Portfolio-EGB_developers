'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { projects } from '@/lib/content';

const categories = ['All', 'Enterprise SaaS', 'Luxury Brand', 'Studio Showcase'];

export function ProjectsSection() {
  const [active, setActive] = useState('All');
  const items = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Case studies</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Premium launch work that feels like a real agency portfolio, not a generic template.</h2>
          <p className="mx-auto mt-4 max-w-3xl text-slate-300">Each project is framed as a concise case study: challenge, execution, and measurable outcome—built to feel premium, deliberate, and conversion-led.</p>
        </div>
        <div className="mb-10 flex flex-wrap justify-center gap-3">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-sm transition ${active === category ? 'border-accent bg-accent/10 text-white' : 'border-white/10 text-slate-300 hover:border-accent/60 hover:text-white'}`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {items.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: index * 0.08 }}
              className="group glass-card overflow-hidden rounded-[2rem] border border-white/10 p-0 shadow-glow transition duration-300 hover:-translate-y-1 hover:border-accent/40"
            >
              <div className="relative h-64 overflow-hidden">
                <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/30 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/10 bg-white/8 px-3 py-1 text-[11px] uppercase tracking-[0.3em] text-slate-100">Featured</div>
              </div>
              <div className="space-y-4 p-6">
                <div className="flex items-center justify-between gap-3 text-xs uppercase tracking-[0.28em] text-accent/80">
                  <span>{project.category}</span>
                  <span>{project.results}</span>
                </div>
                <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                <div className="rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-slate-200">Challenge → elegant launch positioning with measurable conversion lift.</div>
                <div className="flex flex-wrap gap-2">
                  {project.stack?.map((item) => (
                    <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200">{item}</span>
                  ))}
                </div>
                <div className="flex items-center gap-4 text-sm text-slate-200">
                  <a href={project.demo} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:text-accent">Live preview</a>
                  <a href={project.github} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 hover:text-accent">GitHub</a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
