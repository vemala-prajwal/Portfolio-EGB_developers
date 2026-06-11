'use client';

import { useEffect } from 'react';
import { motion } from 'framer-motion';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { HeroSection } from '@/components/hero';
import { Navigation } from '@/components/navigation';
import { AboutSection } from '@/components/about';
import { ServicesSection } from '@/components/services';
import { ProjectsSection } from '@/components/projects';
import { ProcessSection } from '@/components/process';
import { TestimonialsSection } from '@/components/testimonials';
import { StackSection } from '@/components/stack';
import { StatsSection } from '@/components/stats';
import { AchievementsSection } from '@/components/achievements';
import { BlogSection } from '@/components/blog';
import { ContactSection } from '@/components/contact';
import { Footer } from '@/components/footer';

export default function HomePage() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smoothWheel: true });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      frame = requestAnimationFrame(raf);
    }

    frame = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.2 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <AboutSection />
      </motion.div>
      <ServicesSection />
      <ProjectsSection />
      <ProcessSection />
      <TestimonialsSection />
      <StackSection />
      <StatsSection />
      <AchievementsSection />
      <BlogSection />
      <ContactSection />
      <Footer />
    </main>
  );
}
