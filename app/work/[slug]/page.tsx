import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { PublicPageShell } from '@/components/public-page-shell';
import { getProjectBySlug, getPublishedProjects } from '@/lib/projects';

type ProjectPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({ params }: ProjectPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return { title: 'Project not found' };
  }

  return {
    title: `${project.title} | EGB DEVELOPERS`,
    description: project.description,
    openGraph: {
      title: project.title,
      description: project.description,
      images: [{ url: project.image }]
    }
  };
}

export const dynamic = 'force-dynamic';

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { slug } = await params;
  const [project, allProjects] = await Promise.all([getProjectBySlug(slug), getPublishedProjects()]);

  if (!project) {
    notFound();
  }

  const related = allProjects.filter((item) => item.id !== project.id).slice(0, 2);

  return (
    <PublicPageShell>
      <main className="min-h-screen text-white">
      <header className="border-b border-white/10 px-6 py-6 sm:px-10 lg:px-16">
        <div className="mx-auto flex max-w-6xl items-center justify-between">
          <Link href="/" className="font-display text-sm font-semibold tracking-tight">
            egb developers
          </Link>
          <Link href="/work" className="text-sm text-muted transition hover:text-white">
            All work
          </Link>
        </div>
      </header>

      <article>
        <section className="px-6 py-16 sm:px-10 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-6xl">
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">{project.category}</p>
            <h1 className="mt-4 max-w-4xl font-display text-5xl font-medium text-white lg:text-6xl">{project.title}</h1>
            <p className="mt-4 text-lg text-muted">{project.subtitle}</p>
            <p className="mt-8 max-w-3xl text-xl leading-relaxed text-muted">{project.description}</p>

            <div className="mt-10 flex flex-wrap gap-3">
              {project.demoUrl ? (
                <a href={project.demoUrl} target="_blank" rel="noreferrer" className="btn-primary px-6 py-3 text-sm font-semibold">
                  View live project
                </a>
              ) : null}
              {project.githubUrl ? (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noreferrer"
                  className="rounded-full border border-white/10 px-6 py-3 text-sm text-white transition hover:bg-white/5"
                >
                  View source
                </a>
              ) : null}
            </div>
          </div>
        </section>

        <section className="px-6 sm:px-10 lg:px-16">
          <div className="relative mx-auto aspect-[16/9] max-w-6xl overflow-hidden rounded-3xl border border-white/10">
            <Image src={project.image} alt={project.title} fill priority sizes="100vw" className="object-cover" />
          </div>
        </section>

        <section className="px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
          <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[1fr_1.2fr]">
            <div className="space-y-8">
              <InfoBlock label="Industry" value={project.industry || project.category} />
              <InfoBlock label="Technology" value={project.technology} />
              <InfoBlock label="Outcome" value={project.outcome} />
              {project.results ? <InfoBlock label="Highlight" value={project.results} /> : null}
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-muted">Stack</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.stack.map((tech) => (
                    <span key={tech} className="rounded-full border border-white/10 px-3 py-1 text-sm text-muted">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-10">
              {project.problem ? (
                <CaseBlock title="The challenge" body={project.problem} />
              ) : null}
              {project.solution ? (
                <CaseBlock title="Our approach" body={project.solution} />
              ) : null}
              {project.impact ? (
                <CaseBlock title="Impact" body={project.impact} />
              ) : null}
              {project.metrics.length > 0 ? (
                <div className="grid gap-4 sm:grid-cols-3">
                  {project.metrics.map((metric) => (
                    <div key={metric} className="rounded-2xl border border-white/10 bg-white/[0.02] p-5">
                      <p className="font-display text-2xl font-semibold text-white">{metric}</p>
                    </div>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </section>

        {related.length > 0 ? (
          <section className="border-t border-white/10 px-6 py-20 sm:px-10 lg:px-16">
            <div className="mx-auto max-w-6xl">
              <h2 className="font-display text-3xl font-semibold text-white">More work</h2>
              <div className="mt-8 grid gap-6 md:grid-cols-2">
                {related.map((item) => (
                  <Link key={item.id} href={`/work/${item.slug}`} className="rounded-2xl border border-white/10 p-6 transition hover:border-white/20">
                    <p className="text-xs uppercase tracking-[0.3em] text-muted">{item.category}</p>
                    <h3 className="mt-3 font-display text-2xl font-semibold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm text-muted">{item.description}</p>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}
      </article>
      </main>
    </PublicPageShell>
  );
}

function InfoBlock({ label, value }: { label: string; value: string }) {
  if (!value) return null;
  return (
    <div>
      <p className="text-xs uppercase tracking-[0.3em] text-muted">{label}</p>
      <p className="mt-3 text-lg text-white">{value}</p>
    </div>
  );
}

function CaseBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-2xl font-semibold text-white">{title}</h2>
      <p className="mt-4 text-base leading-relaxed text-muted">{body}</p>
    </div>
  );
}
