import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/api-auth';
import { prisma } from '@/lib/prisma';
import { getAllProjects, serializeProject, slugify, toPrismaProjectData } from '@/lib/projects';

export const dynamic = 'force-dynamic';

export async function GET() {
  const { response } = await requireAdmin();
  if (response) return response;

  try {
    const projects = await getAllProjects();
    return NextResponse.json(projects);
  } catch (error) {
    console.error('Failed to fetch admin projects:', error);
    return NextResponse.json({ error: 'Failed to fetch projects' }, { status: 500 });
  }
}

export async function POST(request: Request) {
  const { response } = await requireAdmin();
  if (response) return response;

  try {
    const body = await request.json();
    const slug = body.slug?.trim() || slugify(body.title ?? '');

    if (!slug || !body.title || !body.description || !body.image || !body.category) {
      return NextResponse.json({ error: 'Title, description, image, and category are required.' }, { status: 400 });
    }

    const existing = await prisma.project.findUnique({ where: { slug } });
    if (existing) {
      return NextResponse.json({ error: 'A project with this slug already exists.' }, { status: 409 });
    }

    const project = await prisma.project.create({
      data: toPrismaProjectData({ ...body, slug })
    });

    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath(`/work/${slug}`);

    return NextResponse.json(serializeProject(project), { status: 201 });
  } catch (error) {
    console.error('Failed to create project:', error);
    return NextResponse.json({ error: 'Failed to create project' }, { status: 500 });
  }
}
