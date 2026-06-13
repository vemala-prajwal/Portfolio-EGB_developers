import { prisma } from '@/lib/prisma';
import { projects as staticProjects } from '@/lib/content';

export type ProjectData = {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  stack: string[];
  results: string;
  size: 'large' | 'medium';
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  impact: string;
  metrics: string[];
  demoUrl: string | null;
  githubUrl: string | null;
  published: boolean;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
};

export type ProjectInput = Omit<ProjectData, 'id' | 'createdAt' | 'updatedAt'>;

function parseJsonArray(value: string): string[] {
  try {
    const parsed = JSON.parse(value);
    return Array.isArray(parsed) ? parsed.map(String) : [];
  } catch {
    return [];
  }
}

function serializeJsonArray(values: string[]): string {
  return JSON.stringify(values.filter(Boolean));
}

export function serializeProject(project: {
  id: string;
  slug: string;
  title: string;
  subtitle: string;
  category: string;
  industry: string;
  description: string;
  image: string;
  stack: string;
  results: string;
  size: string;
  problem: string;
  solution: string;
  technology: string;
  outcome: string;
  impact: string;
  metrics: string;
  demoUrl: string | null;
  githubUrl: string | null;
  published: boolean;
  featured: boolean;
  order: number;
  createdAt: Date;
  updatedAt: Date;
}): ProjectData {
  return {
    ...project,
    size: project.size === 'large' ? 'large' : 'medium',
    stack: parseJsonArray(project.stack),
    metrics: parseJsonArray(project.metrics)
  };
}

export function toPrismaProjectData(input: Partial<ProjectInput> & { slug: string; title: string; description: string; image: string; category: string }) {
  return {
    slug: input.slug,
    title: input.title,
    subtitle: input.subtitle ?? '',
    category: input.category,
    industry: input.industry ?? '',
    description: input.description,
    image: input.image,
    stack: serializeJsonArray(input.stack ?? []),
    results: input.results ?? '',
    size: input.size ?? 'medium',
    problem: input.problem ?? '',
    solution: input.solution ?? '',
    technology: input.technology ?? '',
    outcome: input.outcome ?? '',
    impact: input.impact ?? '',
    metrics: serializeJsonArray(input.metrics ?? []),
    demoUrl: input.demoUrl ?? null,
    githubUrl: input.githubUrl ?? null,
    published: input.published ?? true,
    featured: input.featured ?? true,
    order: input.order ?? 0
  };
}

export function slugify(text: string): string {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, '')
    .replace(/[\s_-]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

function staticProjectToProjectData(project: (typeof staticProjects)[number], order: number): ProjectData {
  const now = new Date(0);

  return {
    id: project.id,
    slug: project.id,
    title: project.title,
    subtitle: project.subtitle,
    category: project.category,
    industry: project.industry,
    description: project.description,
    image: project.image,
    stack: project.stack,
    results: project.results,
    size: project.size,
    problem: project.problem,
    solution: project.solution,
    technology: project.technology,
    outcome: project.outcome,
    impact: project.impact,
    metrics: project.metrics,
    demoUrl: project.demo !== '#' ? project.demo : null,
    githubUrl: project.github !== '#' ? project.github : null,
    published: true,
    featured: true,
    order,
    createdAt: now,
    updatedAt: now
  };
}

function getStaticProjects(featuredOnly = false): ProjectData[] {
  const projects = staticProjects.map(staticProjectToProjectData);
  return featuredOnly ? projects.filter((project) => project.featured) : projects;
}

export async function getPublishedProjects(featuredOnly = false): Promise<ProjectData[]> {
  try {
    const projects = await prisma.project.findMany({
      where: {
        published: true,
        ...(featuredOnly ? { featured: true } : {})
      },
      orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
    });

    return projects.map(serializeProject);
  } catch (error) {
    console.error('Falling back to static projects:', error);
    return getStaticProjects(featuredOnly);
  }
}

export async function getProjectBySlug(slug: string): Promise<ProjectData | null> {
  try {
    const project = await prisma.project.findFirst({
      where: { slug, published: true }
    });

    return project ? serializeProject(project) : null;
  } catch (error) {
    console.error('Falling back to static project:', error);
    return getStaticProjects().find((project) => project.slug === slug) ?? null;
  }
}

export async function getAllProjects(): Promise<ProjectData[]> {
  const projects = await prisma.project.findMany({
    orderBy: [{ order: 'asc' }, { createdAt: 'desc' }]
  });

  return projects.map(serializeProject);
}

export async function getProjectById(id: string): Promise<ProjectData | null> {
  const project = await prisma.project.findUnique({ where: { id } });
  return project ? serializeProject(project) : null;
}
