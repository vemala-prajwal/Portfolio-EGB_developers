'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import type { ProjectData } from '@/lib/projects';

type ProjectsTableProps = {
  projects: ProjectData[];
};

export function ProjectsTable({ projects }: ProjectsTableProps) {
  const router = useRouter();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const handleDelete = async (id: string, title: string) => {
    if (!confirm(`Delete "${title}"? This cannot be undone.`)) return;

    setDeletingId(id);
    try {
      const response = await fetch(`/api/admin/projects/${id}`, { method: 'DELETE' });
      if (!response.ok) throw new Error('Delete failed');
      router.refresh();
    } catch {
      alert('Failed to delete project.');
    } finally {
      setDeletingId(null);
    }
  };

  if (projects.length === 0) {
    return (
      <div className="glass-card rounded-2xl border border-white/10 p-12 text-center">
        <p className="text-muted">No projects yet.</p>
        <Link href="/admin/projects/new" className="mt-4 inline-block text-sm text-accent hover:text-white">
          Create your first project →
        </Link>
      </div>
    );
  }

  return (
    <div className="overflow-hidden rounded-2xl border border-white/10">
      <table className="w-full text-left text-sm">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.2em] text-muted">
          <tr>
            <th className="px-5 py-4">Project</th>
            <th className="px-5 py-4">Category</th>
            <th className="px-5 py-4">Status</th>
            <th className="px-5 py-4">Order</th>
            <th className="px-5 py-4 text-right">Actions</th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project) => (
            <tr key={project.id} className="border-t border-white/10">
              <td className="px-5 py-4">
                <div className="font-medium text-white">{project.title}</div>
                <div className="text-xs text-muted">{project.slug}</div>
              </td>
              <td className="px-5 py-4 text-muted">{project.category}</td>
              <td className="px-5 py-4">
                <div className="flex flex-wrap gap-2">
                  <StatusBadge active={project.published} label={project.published ? 'Published' : 'Draft'} />
                  {project.featured ? <StatusBadge active label="Featured" /> : null}
                </div>
              </td>
              <td className="px-5 py-4 text-muted">{project.order}</td>
              <td className="px-5 py-4">
                <div className="flex items-center justify-end gap-3">
                  {project.published ? (
                    <Link href={`/work/${project.slug}`} className="text-muted hover:text-white">
                      View
                    </Link>
                  ) : null}
                  <Link href={`/admin/projects/${project.id}/edit`} className="text-accent hover:text-white">
                    Edit
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(project.id, project.title)}
                    disabled={deletingId === project.id}
                    className="text-red-300/80 hover:text-red-300 disabled:opacity-50"
                  >
                    {deletingId === project.id ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

function StatusBadge({ active, label }: { active: boolean; label: string }) {
  return (
    <span className={`rounded-full px-2.5 py-1 text-xs ${active ? 'bg-emerald-500/15 text-emerald-300' : 'bg-white/10 text-muted'}`}>
      {label}
    </span>
  );
}
