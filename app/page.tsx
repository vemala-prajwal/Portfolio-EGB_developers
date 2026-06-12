import { HomePage } from '@/components/home-page';
import { getPublishedProjects } from '@/lib/projects';

export const dynamic = 'force-dynamic';

export default async function Page() {
  const projects = await getPublishedProjects(true);

  return <HomePage projects={projects} />;
}
