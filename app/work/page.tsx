import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { PublicPageShell } from '@/components/public-page-shell';
import { getPublishedProjects } from '@/lib/projects';

export const metadata: Metadata = {
  title: 'Work | EGB DEVELOPERS',
  description: 'Selected case studies and portfolio projects from EGB Developers.'
};

export const dynamic = 'force-dynamic';

export default async function WorkPage() {
  const projects = await getPublishedProjects();

  return (
    <PublicPageShell>
      <main className="min-h-screen text-white">
      <header className="border-b border-white/10 px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-display text-sm font-semibold tracking-tight">
            egb developers
          </Link>
          <Link href="/#contact" className="text-sm text-muted transition hover:text-white">
            Start a project
          </Link>
        </div>
      </header>

      <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Portfolio</p>
          <h1 className="mt-4 max-w-3xl font-display text-5xl font-medium text-white lg:text-6xl">All selected work</h1>
          <p className="mt-6 max-w-2xl text-lg text-muted">
            Case studies across product launches, brand experiences, and high-performance web platforms.
          </p>

          {projects.length === 0 ? (
            <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-12 text-center text-muted">
              Projects will appear here once published from the admin panel.
            </div>
          ) : (
            <div className="mt-16 grid gap-6 md:grid-cols-2">
              {projects.map((project) => (
                <Link
                  key={project.id}
                  href={`/work/${project.slug}`}
                  className="group overflow-hidden rounded-2xl border border-white/10 bg-[#0a0a0a] transition hover:border-white/20"
                >
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="p-6">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">{project.category}</p>
                    <h2 className="mt-3 font-display text-2xl font-semibold text-white">{project.title}</h2>
                    <p className="mt-3 text-sm text-muted">{project.description}</p>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
      </main>
    </PublicPageShell>
  );
}
