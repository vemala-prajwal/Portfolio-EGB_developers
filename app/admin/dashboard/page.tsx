import Link from 'next/link';
import type { Route } from 'next';
import { getAllProjects } from '@/lib/projects';
import { getAdminUser } from '@/lib/api-auth';

export const dynamic = 'force-dynamic';

export default async function AdminDashboardPage() {
  const [projects, user] = await Promise.all([getAllProjects(), getAdminUser()]);
  const published = projects.filter((project) => project.published).length;
  const drafts = projects.length - published;

  return (
    <div className="space-y-10">
      <header>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent/80">Dashboard</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white">Welcome back{user?.name ? `, ${user.name}` : ''}</h1>
        <p className="mt-3 max-w-2xl text-muted">Manage your portfolio projects. Updates appear on the public site immediately after saving.</p>
      </header>

      <div className="grid gap-4 sm:grid-cols-3">
        <StatCard label="Total projects" value={projects.length} />
        <StatCard label="Published" value={published} />
        <StatCard label="Drafts" value={drafts} />
      </div>

      <section className="glass-card rounded-2xl border border-white/10 p-8">
        <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-2xl font-semibold text-white">Quick actions</h2>
            <p className="mt-2 text-sm text-muted">Add new work or review existing case studies.</p>
          </div>
          <Link href="/admin/projects/new" className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold">
            Add new project
          </Link>
        </div>
        <div className="mt-8 grid gap-4 md:grid-cols-2">
          <ActionCard title="Manage projects" description="Edit, publish, or remove portfolio case studies." href="/admin/projects" />
          <ActionCard title="View public site" description="See how visitors experience your portfolio." href="/" external />
        </div>
      </section>

      {projects.length > 0 ? (
        <section>
          <h2 className="mb-4 font-display text-xl font-semibold text-white">Recent projects</h2>
          <div className="space-y-3">
            {projects.slice(0, 5).map((project) => (
              <div key={project.id} className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] px-5 py-4">
                <div>
                  <p className="font-medium text-white">{project.title}</p>
                  <p className="text-sm text-muted">{project.category}</p>
                </div>
                <Link href={`/admin/projects/${project.id}/edit`} className="text-sm text-accent hover:text-white">
                  Edit →
                </Link>
              </div>
            ))}
          </div>
        </section>
      ) : null}
    </div>
  );
}

function StatCard({ label, value }: { label: string; value: number }) {
  return (
    <div className="glass-card rounded-2xl border border-white/10 p-6">
      <p className="text-sm text-muted">{label}</p>
      <p className="mt-2 font-display text-4xl font-semibold text-white">{value}</p>
    </div>
  );
}

function ActionCard({ title, description, href, external }: { title: string; description: string; href: Route; external?: boolean }) {
  return (
    <Link
      href={href}
      target={external ? '_blank' : undefined}
      className="rounded-xl border border-white/10 bg-white/[0.02] p-5 transition hover:border-white/20 hover:bg-white/[0.04]"
    >
      <h3 className="font-medium text-white">{title}</h3>
      <p className="mt-2 text-sm text-muted">{description}</p>
    </Link>
  );
}
