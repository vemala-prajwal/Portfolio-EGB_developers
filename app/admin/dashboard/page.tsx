'use client';

import { motion } from 'framer-motion';

export default function AdminDashboardPage() {
  return (
    <main className="min-h-screen bg-surface px-6 py-16 text-white sm:px-10 lg:px-16">
      <div className="mx-auto max-w-6xl space-y-10">
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-10 shadow-glow backdrop-blur-xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9 }}>
            <p className="text-sm uppercase tracking-[0.3em] text-accent/80">Admin dashboard</p>
            <h1 className="mt-4 text-4xl font-semibold text-white">Content management console</h1>
            <p className="mt-4 max-w-3xl text-slate-300">Use this hidden admin panel to manage page content, services, projects, testimonials, blog posts, SEO, and media assets.</p>
          </motion.div>
        </div>
        <div className="grid gap-6 lg:grid-cols-2">
          {[
            'Hero editor',
            'About section',
            'Service management',
            'Projects manager',
            'Testimonials editor',
            'Blog publishing',
            'SEO settings',
            'Media library'
          ].map((panel) => (
            <motion.div
              key={panel}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              className="glass-card rounded-[2rem] border border-white/10 p-8"
            >
              <h2 className="text-xl font-semibold text-white">{panel}</h2>
              <p className="mt-3 text-slate-400">Editable admin interface for publishing and refining website content with role-based security.</p>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}
