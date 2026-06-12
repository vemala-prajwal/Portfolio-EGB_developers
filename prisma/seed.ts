import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';
import { projects as staticProjects } from '../lib/content';

const prisma = new PrismaClient();

async function main() {
  const adminEmail = process.env.ADMIN_EMAIL ?? 'admin@example.com';
  const adminPassword = process.env.ADMIN_PASSWORD ?? 'Apollo2026!';
  const hashedPassword = await bcrypt.hash(adminPassword, 12);

  await prisma.user.upsert({
    where: { email: adminEmail },
    update: {},
    create: {
      email: adminEmail,
      name: 'Portfolio Admin',
      password: hashedPassword,
      role: 'ADMIN'
    }
  });

  for (const [index, project] of staticProjects.entries()) {
    await prisma.project.upsert({
      where: { slug: project.id },
      update: {},
      create: {
        slug: project.id,
        title: project.title,
        subtitle: project.subtitle,
        category: project.category,
        industry: project.industry,
        description: project.description,
        image: project.image,
        stack: JSON.stringify(project.stack),
        results: project.results,
        size: project.size,
        problem: project.problem,
        solution: project.solution,
        technology: project.technology,
        outcome: project.outcome,
        impact: project.impact,
        metrics: JSON.stringify(project.metrics),
        demoUrl: project.demo !== '#' ? project.demo : null,
        githubUrl: project.github !== '#' ? project.github : null,
        published: true,
        featured: true,
        order: index
      }
    });
  }

  console.log('Database seeded successfully.');
  console.log(`Admin login: ${adminEmail}`);
}

main()
  .catch((error) => {
    console.error(error);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
