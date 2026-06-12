'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import type { ProjectData } from '@/lib/projects';

type ProjectFormProps = {
  initial?: Partial<ProjectData>;
  mode: 'create' | 'edit';
};

type FormState = {
  title: string;
  slug: string;
  subtitle: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  stack: string;
  results: string;
  size: 'large' | 'medium';
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  impact: string;
  metrics: string;
  demoUrl: string;
  githubUrl: string;
  published: boolean;
  featured: boolean;
  order: number;
};

function toFormState(initial?: Partial<ProjectData>): FormState {
  return {
    title: initial?.title ?? '',
    slug: initial?.slug ?? '',
    subtitle: initial?.subtitle ?? '',
    category: initial?.category ?? '',
    industry: initial?.industry ?? '',
    description: initial?.description ?? '',
    image: initial?.image ?? '',
    stack: (initial?.stack ?? []).join(', '),
    results: initial?.results ?? '',
    size: initial?.size ?? 'medium',
    problem: initial?.problem ?? '',
    solution: initial?.solution ?? '',
    technology: initial?.technology ?? '',
    outcome: initial?.outcome ?? '',
    impact: initial?.impact ?? '',
    metrics: (initial?.metrics ?? []).join(', '),
    demoUrl: initial?.demoUrl ?? '',
    githubUrl: initial?.githubUrl ?? '',
    published: initial?.published ?? true,
    featured: initial?.featured ?? true,
    order: initial?.order ?? 0
  };
}

function parseList(value: string) {
  return value
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);
}

export function ProjectForm({ initial, mode }: ProjectFormProps) {
  const router = useRouter();
  const [form, setForm] = useState<FormState>(() => toFormState(initial));
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const update = <K extends keyof FormState>(key: K, value: FormState[K]) => {
    setForm((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    setLoading(true);
    setError('');

    const payload = {
      ...form,
      stack: parseList(form.stack),
      metrics: parseList(form.metrics),
      demoUrl: form.demoUrl || null,
      githubUrl: form.githubUrl || null
    };

    const url = mode === 'create' ? '/api/admin/projects' : `/api/admin/projects/${initial?.id}`;
    const method = mode === 'create' ? 'POST' : 'PUT';

    try {
      const response = await fetch(url, {
        method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error ?? 'Something went wrong.');
        return;
      }

      router.push('/admin/projects');
      router.refresh();
    } catch {
      setError('Unable to save project. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {error ? (
        <div className="rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">{error}</div>
      ) : null}

      <section className="glass-card rounded-2xl border border-white/10 p-6">
        <h3 className="font-display text-lg font-semibold text-white">Basic details</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Title" required>
            <Input value={form.title} onChange={(e) => update('title', e.target.value)} required />
          </Field>
          <Field label="Slug" hint="Auto-generated from title if left empty">
            <Input value={form.slug} onChange={(e) => update('slug', e.target.value)} placeholder="my-project" />
          </Field>
          <Field label="Subtitle">
            <Input value={form.subtitle} onChange={(e) => update('subtitle', e.target.value)} />
          </Field>
          <Field label="Category" required>
            <Input value={form.category} onChange={(e) => update('category', e.target.value)} required />
          </Field>
          <Field label="Industry">
            <Input value={form.industry} onChange={(e) => update('industry', e.target.value)} />
          </Field>
          <Field label="Results highlight">
            <Input value={form.results} onChange={(e) => update('results', e.target.value)} placeholder="+72% signups" />
          </Field>
          <Field label="Display order">
            <Input type="number" value={form.order} onChange={(e) => update('order', Number(e.target.value))} />
          </Field>
          <Field label="Card size">
            <select
              value={form.size}
              onChange={(e) => update('size', e.target.value as 'large' | 'medium')}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            >
              <option value="medium">Medium</option>
              <option value="large">Large</option>
            </select>
          </Field>
        </div>
        <div className="mt-4">
          <Field label="Short description" required>
            <textarea
              value={form.description}
              onChange={(e) => update('description', e.target.value)}
              required
              rows={3}
              className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none"
            />
          </Field>
        </div>
      </section>

      <section className="glass-card rounded-2xl border border-white/10 p-6">
        <h3 className="font-display text-lg font-semibold text-white">Media & links</h3>
        <div className="mt-6 grid gap-4 md:grid-cols-2">
          <Field label="Cover image URL" required className="md:col-span-2">
            <Input value={form.image} onChange={(e) => update('image', e.target.value)} required placeholder="https://..." />
          </Field>
          <Field label="Live demo URL">
            <Input value={form.demoUrl} onChange={(e) => update('demoUrl', e.target.value)} placeholder="https://..." />
          </Field>
          <Field label="GitHub URL">
            <Input value={form.githubUrl} onChange={(e) => update('githubUrl', e.target.value)} placeholder="https://..." />
          </Field>
        </div>
        {form.image ? (
          <div className="relative mt-4 h-48 overflow-hidden rounded-xl border border-white/10">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={form.image} alt="Preview" className="h-full w-full object-cover" />
          </div>
        ) : null}
      </section>

      <section className="glass-card rounded-2xl border border-white/10 p-6">
        <h3 className="font-display text-lg font-semibold text-white">Case study</h3>
        <div className="mt-6 grid gap-4">
          <Field label="Problem">
            <textarea value={form.problem} onChange={(e) => update('problem', e.target.value)} rows={2} className="field-textarea" />
          </Field>
          <Field label="Solution">
            <textarea value={form.solution} onChange={(e) => update('solution', e.target.value)} rows={2} className="field-textarea" />
          </Field>
          <Field label="Technology">
            <Input value={form.technology} onChange={(e) => update('technology', e.target.value)} />
          </Field>
          <Field label="Outcome">
            <textarea value={form.outcome} onChange={(e) => update('outcome', e.target.value)} rows={2} className="field-textarea" />
          </Field>
          <Field label="Impact">
            <textarea value={form.impact} onChange={(e) => update('impact', e.target.value)} rows={2} className="field-textarea" />
          </Field>
          <Field label="Tech stack" hint="Comma-separated">
            <Input value={form.stack} onChange={(e) => update('stack', e.target.value)} placeholder="Next.js, React, TypeScript" />
          </Field>
          <Field label="Metrics" hint="Comma-separated">
            <Input value={form.metrics} onChange={(e) => update('metrics', e.target.value)} placeholder="+72% signups, 94 Lighthouse" />
          </Field>
        </div>
      </section>

      <section className="glass-card rounded-2xl border border-white/10 p-6">
        <h3 className="font-display text-lg font-semibold text-white">Publishing</h3>
        <div className="mt-6 flex flex-wrap gap-6">
          <label className="flex items-center gap-3 text-sm text-muted">
            <input type="checkbox" checked={form.published} onChange={(e) => update('published', e.target.checked)} className="h-4 w-4" />
            Published (visible on public site)
          </label>
          <label className="flex items-center gap-3 text-sm text-muted">
            <input type="checkbox" checked={form.featured} onChange={(e) => update('featured', e.target.checked)} className="h-4 w-4" />
            Featured on homepage
          </label>
        </div>
      </section>

      <div className="flex flex-wrap gap-3">
        <Button type="submit" disabled={loading}>
          {loading ? 'Saving...' : mode === 'create' ? 'Create project' : 'Save changes'}
        </Button>
        <Button type="button" variant="secondary" onClick={() => router.push('/admin/projects')}>
          Cancel
        </Button>
      </div>
    </form>
  );
}

function Field({
  label,
  hint,
  required,
  className,
  children
}: {
  label: string;
  hint?: string;
  required?: boolean;
  className?: string;
  children: React.ReactNode;
}) {
  return (
    <label className={`block space-y-2 ${className ?? ''}`}>
      <span className="text-sm text-white">
        {label}
        {required ? <span className="text-accent"> *</span> : null}
      </span>
      {hint ? <span className="block text-xs text-muted">{hint}</span> : null}
      {children}
    </label>
  );
}
