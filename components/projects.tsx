'use client';

import Image from 'next/image';
import Link from 'next/link';
import type { ProjectData } from '@/lib/projects';
import { ScrollParallax, ScrollReveal, ScrollRevealStagger } from '@/components/motion/scroll-reveal';

type ProjectsSectionProps = {
  projects: ProjectData[];
};

export function ProjectsSection({ projects }: ProjectsSectionProps) {
  return (
    <section id="projects" className="px-6 py-28 sm:px-10 lg:px-16 lg:py-40">
      <div className="mx-auto max-w-6xl">
        <ScrollReveal className="mb-16 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.4em] text-muted">Selected Work</p>
            <h2 className="mt-4 font-display text-section font-medium text-white">Case studies</h2>
          </div>
          <p className="max-w-sm text-sm text-muted">
            Premium launches across SaaS, luxury brands, and creative studios.
          </p>
        </ScrollReveal>

        {projects.length === 0 ? (
          <ScrollReveal className="surface-card rounded-2xl p-12 text-center">
            <p className="text-muted">New projects coming soon.</p>
          </ScrollReveal>
        ) : (
          <ScrollRevealStagger className="space-y-4" stagger={0.12}>
            {projects.map((project) => (
              <div key={project.id} data-reveal-item>
                <Link
                  href={`/work/${project.slug}`}
                  data-cursor="pointer"
                  className="group surface-card block overflow-hidden rounded-2xl"
                >
                  <div className={`grid ${project.size === 'large' ? 'lg:grid-cols-[1.2fr_1fr]' : 'lg:grid-cols-2'}`}>
                    <ScrollParallax
                      speed={0.12}
                      className={`relative overflow-hidden ${project.size === 'large' ? 'h-72 lg:h-96' : 'h-64 lg:h-80'}`}
                    >
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 50vw"
                        className="object-cover transition-transform duration-700 ease-premium group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0a0a0a]/80 lg:bg-gradient-to-t lg:from-[#0a0a0a] lg:via-transparent lg:to-transparent" />
                    </ScrollParallax>

                    <div className="flex flex-col justify-center p-8 lg:p-12">
                      <div className="flex items-center justify-between gap-4">
                        <span className="text-xs font-medium uppercase tracking-[0.3em] text-muted">{project.results}</span>
                        <span className="translate-x-2 text-2xl text-muted opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                          →
                        </span>
                      </div>
                      <h3 className="mt-4 font-display text-2xl font-semibold text-white lg:text-3xl">
                        {project.title}
                      </h3>
                      <p className="mt-2 text-sm text-muted">{project.subtitle}</p>
                      <p className="mt-6 text-base leading-[1.7] text-muted">{project.description}</p>
                      <div className="mt-8 flex flex-wrap gap-2">
                        {project.stack.map((tech) => (
                          <span key={tech} className="rounded-full border border-white/[0.08] px-3 py-1 text-xs text-muted">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </ScrollRevealStagger>
        )}

        <ScrollReveal className="mt-12 text-center" y={24}>
          <Link href="/work" data-cursor="pointer" className="link-premium text-sm text-muted hover:text-white">
            View all work →
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
