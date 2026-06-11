export function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/65 backdrop-blur-2xl">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 sm:px-10 lg:px-16">
        <a href="#home" className="text-xl font-semibold tracking-[0.18em] text-white">APOLLO VALE</a>
        <div className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
          {['About', 'Services', 'Projects', 'Process', 'Contact'].map((item) => (
            <a key={item} href={`#${item.toLowerCase()}`} className="transition hover:text-white">{item}</a>
          ))}
        </div>
        <a href="#contact" className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white transition hover:bg-white/10">Start a project</a>
      </nav>
    </header>
  );
}
