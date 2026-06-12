import { notFound } from 'next/navigation';
import { ProjectForm } from '@/components/admin/project-form';
import { getProjectById } from '@/lib/projects';

type EditProjectPageProps = {
  params: Promise<{ id: string }>;
};

export default async function EditProjectPage({ params }: EditProjectPageProps) {
  const { id } = await params;
  const project = await getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent/80">Edit project</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white">{project.title}</h1>
        <p className="mt-3 text-muted">Update this case study. Changes go live immediately when published.</p>
      </div>
      <ProjectForm mode="edit" initial={project} />
    </div>
  );
}
