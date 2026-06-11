'use client';

import { useEffect, useState } from 'react';
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
  const [scrollProgress, setScrollProgress] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const lenis = new Lenis({ smoothWheel: true });

    let frame = 0;
    function raf(time: number) {
      lenis.raf(time);
      const progress = Math.min(100, Math.max(0, (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100));
      setScrollProgress(progress);
      frame = requestAnimationFrame(raf);
    }

    const moveCursor = (event: MouseEvent) => setCursorPos({ x: event.clientX, y: event.clientY });
    window.addEventListener('mousemove', moveCursor);
    frame = requestAnimationFrame(raf);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      cancelAnimationFrame(frame);
      lenis.destroy();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="overflow-x-hidden bg-[radial-gradient(circle_at_top,_rgba(107,91,255,0.10),_transparent_28%),radial-gradient(circle_at_bottom_right,_rgba(56,215,255,0.08),_transparent_18%),linear-gradient(180deg,#04070f_0%,#060b15_100%)]">
      <div className="pointer-events-none fixed inset-0 z-40 overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20" />
        <div className="aurora aurora-one" />
        <div className="aurora aurora-two" />
      </div>
      <div className="pointer-events-none fixed left-0 top-0 z-50 h-1 w-full bg-gradient-to-r from-accent via-accent2 to-white" style={{ transform: `scaleX(${scrollProgress / 100})`, transformOrigin: 'left' }} />
      <motion.div
        className="pointer-events-none fixed z-50 h-24 w-24 rounded-full bg-accent/10 blur-3xl"
        animate={{ x: cursorPos.x - 48, y: cursorPos.y - 48 }}
        transition={{ type: 'spring', stiffness: 120, damping: 18, mass: 0.4 }}
      />
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
