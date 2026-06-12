import { ProjectForm } from '@/components/admin/project-form';

export default function NewProjectPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="text-xs font-medium uppercase tracking-[0.35em] text-accent/80">New project</p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white">Add case study</h1>
        <p className="mt-3 text-muted">Fill in the details below. Published projects appear on your homepage and work page.</p>
      </div>
      <ProjectForm mode="create" />
    </div>
  );
}
