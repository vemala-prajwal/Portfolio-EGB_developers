import { revalidatePath } from 'next/cache';
import { NextResponse } from 'next/server';
import { requireAdmin } from '@/lib/api-auth';
import { prisma } from '@/lib/prisma';
import { getProjectById, serializeProject, slugify, toPrismaProjectData } from '@/lib/projects';

export const dynamic = 'force-dynamic';

type RouteContext = {
  params: Promise<{ id: string }>;
};

export async function GET(_request: Request, context: RouteContext) {
  const { response } = await requireAdmin();
  if (response) return response;

  const { id } = await context.params;

  try {
    const project = await getProjectById(id);
    if (!project) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }
    return NextResponse.json(project);
  } catch (error) {
    console.error('Failed to fetch project:', error);
    return NextResponse.json({ error: 'Failed to fetch project' }, { status: 500 });
  }
}

export async function PUT(request: Request, context: RouteContext) {
  const { response } = await requireAdmin();
  if (response) return response;

  const { id } = await context.params;

  try {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    const body = await request.json();
    const slug = body.slug?.trim() || slugify(body.title ?? existing.title);

    const slugConflict = await prisma.project.findFirst({
      where: { slug, NOT: { id } }
    });

    if (slugConflict) {
      return NextResponse.json({ error: 'A project with this slug already exists.' }, { status: 409 });
    }

    const project = await prisma.project.update({
      where: { id },
      data: toPrismaProjectData({ ...body, slug })
    });

    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath(`/work/${existing.slug}`);
    revalidatePath(`/work/${slug}`);

    return NextResponse.json(serializeProject(project));
  } catch (error) {
    console.error('Failed to update project:', error);
    return NextResponse.json({ error: 'Failed to update project' }, { status: 500 });
  }
}

export async function DELETE(_request: Request, context: RouteContext) {
  const { response } = await requireAdmin();
  if (response) return response;

  const { id } = await context.params;

  try {
    const existing = await prisma.project.findUnique({ where: { id } });
    if (!existing) {
      return NextResponse.json({ error: 'Project not found' }, { status: 404 });
    }

    await prisma.project.delete({ where: { id } });

    revalidatePath('/');
    revalidatePath('/work');
    revalidatePath(`/work/${existing.slug}`);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Failed to delete project:', error);
    return NextResponse.json({ error: 'Failed to delete project' }, { status: 500 });
  }
}
