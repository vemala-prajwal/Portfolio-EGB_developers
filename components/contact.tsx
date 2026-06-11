import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export function ContactSection() {
  return (
    <section id="contact" className="px-6 py-24 sm:px-10 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Contact</p>
          <h2 className="mt-4 text-4xl font-semibold text-white sm:text-5xl">Ready to turn your next launch into something unmistakably premium?</h2>
          <p className="mx-auto mt-4 max-w-2xl text-slate-300">Share your vision, timeline, and goals, and I’ll shape a refined digital presence with cinematic motion, strong hierarchy, and conversion-focused clarity.</p>
        </div>
        <div className="glass-card rounded-[2.5rem] border border-white/10 p-8 shadow-glow lg:p-10">
          <div className="grid gap-10 lg:grid-cols-[1.02fr_0.98fr]">
            <div className="space-y-6 text-slate-200">
              <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6">
                <p className="text-sm uppercase tracking-[0.35em] text-accent/80">Project brief</p>
                <p className="mt-4 text-lg leading-8 text-slate-200">We collaborate with founders, teams, and brands who want a digital presence that feels expensive, clear, and unmistakably modern—without losing speed, clarity, or conversion.</p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {[
                  { label: 'Response time', value: 'Within 24 hours' },
                  { label: 'Availability', value: 'Select 2026 engagements' }
                ].map((item) => (
                  <div key={item.label} className="rounded-[1.5rem] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm uppercase tracking-[0.3em] text-slate-400">{item.label}</p>
                    <p className="mt-2 text-white">{item.value}</p>
                  </div>
                ))}
              </div>
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-white">Email</p>
                  <a href="mailto:hello@apollo-vale.com" className="text-slate-200 transition hover:text-white">hello@apollo-vale.com</a>
                </div>
                <div>
                  <p className="font-semibold text-white">Call</p>
                  <a href="tel:+15550129876" className="text-slate-200 transition hover:text-white">+1 555 012 9876</a>
                </div>
              </div>
              <div className="flex flex-wrap gap-3 pt-4 text-sm text-slate-400">
                <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">LinkedIn</a>
                <a href="https://www.behance.net/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">Behance</a>
                <a href="https://dribbble.com/" target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 px-3 py-2 transition hover:text-white">Dribbble</a>
              </div>
            </div>
            <form className="space-y-5 rounded-[2rem] border border-white/10 bg-slate-950/70 p-6 shadow-glow">
              <div className="grid gap-4 sm:grid-cols-2">
                <Input placeholder="Name" aria-label="Name" />
                <Input placeholder="Email" aria-label="Email" type="email" />
              </div>
              <Input placeholder="Project type" aria-label="Project type" />
              <textarea
                rows={5}
                className="w-full rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition focus:border-accent focus:ring-2 focus:ring-accent/20"
                placeholder="Tell me about your ambition, timeline, and goals."
              />
              <Button type="submit" className="w-full">Send inquiry</Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
