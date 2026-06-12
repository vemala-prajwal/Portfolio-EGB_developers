'use client';

import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { contact } from '@/lib/content';
import { FloatingInput, FloatingTextarea } from '@/components/ui/floating-input';
import { Magnetic } from '@/components/motion/magnetic';

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', projectType: '', message: '' });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    const next: Record<string, string> = {};
    if (!form.name.trim()) next.name = 'Required';
    if (!form.email.trim()) next.email = 'Required';
    if (!form.message.trim()) next.message = 'Required';
    setErrors(next);
    if (Object.keys(next).length) return;
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-16 lg:grid-cols-2">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Contact</p>
            <h2 className="mt-4 font-display text-section font-medium text-white">{contact.headline}</h2>
            <p className="mt-6 text-lg leading-[1.75] text-muted">{contact.subheadline}</p>

            <div className="mt-10 space-y-4 text-sm">
              <a href={`mailto:${contact.email}`} className="link-premium block text-white">{contact.email}</a>
              <a href={`tel:${contact.phone.replace(/\s/g, '')}`} className="link-premium block text-muted">{contact.phone}</a>
            </div>

            <p className="mt-10 inline-flex rounded-full border border-white/10 px-4 py-2 text-xs text-muted">
              {contact.availability}
            </p>
          </div>

          <div className="surface-card rounded-2xl p-8 lg:p-10">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="ok"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex min-h-[360px] flex-col items-center justify-center text-center"
                >
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full border border-white/10">
                    <svg viewBox="0 0 24 24" className="h-8 w-8 text-white" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <h3 className="font-display text-2xl font-semibold text-white">Message sent</h3>
                  <p className="mt-3 text-muted">We&apos;ll respond within 24 hours.</p>
                </motion.div>
              ) : (
                <motion.form key="form" onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <FloatingInput label="Name" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} error={errors.name} />
                    <FloatingInput label="Email" type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} error={errors.email} />
                  </div>
                  <FloatingInput label="Project type" value={form.projectType} onChange={(e) => setForm({ ...form, projectType: e.target.value })} />
                  <FloatingTextarea label="Tell us about your project" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} error={errors.message} />
                  <Magnetic strength={0.1}>
                    <button type="submit" disabled={loading} data-cursor="pointer" className="btn-primary w-full justify-center py-4 text-sm disabled:opacity-50">
                      {loading ? 'Sending...' : 'Send inquiry'}
                    </button>
                  </Magnetic>
                </motion.form>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
