'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';
import { projects } from '@/lib/content';
import { Card } from '@/components/ui/card';

const categories = ['All', 'Enterprise SaaS', 'Luxury Brand', 'Studio Showcase'];

export function ProjectsSection() {
  const [active, setActive] = useState('All');
  const items = useMemo(
    () => (active === 'All' ? projects : projects.filter((project) => project.category === active)),
    [active]
  );

  return (
    <section id="projects" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Projects</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Featured work</h2>
        </div>
        <div className="mb-10 flex justify-center gap-4 flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActive(category)}
              className={`rounded-full border px-5 py-2 text-sm transition ${
                active === category
                  ? 'border-accent bg-accent/10 text-white'
                  : 'border-white/10 text-slate-400 hover:border-accent/60 hover:text-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid gap-6 lg:grid-cols-3">
          {items.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.08 }}
            >
              <Card className="overflow-hidden p-0">
                <div className="relative h-64 overflow-hidden">
                  <img src={project.image} alt={project.title} className="h-full w-full object-cover transition duration-500 hover:scale-105" />
                </div>
                <div className="space-y-3 p-6">
                  <p className="text-sm uppercase tracking-[0.25em] text-accent/80">{project.category}</p>
                  <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
                  <p className="text-sm leading-6 text-slate-300">{project.description}</p>
                  <div className="flex flex-wrap gap-3 pt-4">
                    <a href={project.demo} className="text-sm text-accent hover:text-white">
                      Live demo
                    </a>
                    <a href={project.github} className="text-sm text-slate-400 hover:text-white">
                      GitHub
                    </a>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
