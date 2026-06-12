import Link from 'next/link';
import { getAllProjects } from '@/lib/projects';
import { ProjectsTable } from '@/components/admin/projects-table';

export default async function AdminProjectsPage() {
  const projects = await getAllProjects();

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent/80">Projects</p>
          <h1 className="mt-3 font-display text-4xl font-semibold text-white">Portfolio work</h1>
          <p className="mt-3 text-muted">Create and manage case studies shown on your public portfolio.</p>
        </div>
        <Link href="/admin/projects/new" className="btn-primary inline-flex items-center justify-center px-5 py-3 text-sm font-semibold">
          Add project
        </Link>
      </div>

      <ProjectsTable projects={projects} />
    </div>
  );
}
