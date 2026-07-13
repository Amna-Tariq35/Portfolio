const links = [
  { label: "About", href: "#about" },
  { label: "Work", href: "#work" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-base-line bg-base/70 backdrop-blur-xl">
      <div className="max-w-content mx-auto flex items-center justify-between px-6 md:px-10 py-5">
        <a
          href="#top"
          className="font-display text-lg tracking-tight text-porcelain hover:text-gold transition-colors"
        >
          Amna Tariq
        </a>

        <nav className="hidden md:flex items-center gap-8 font-mono text-xs uppercase tracking-[0.15em] text-porcelain-muted">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="hover:text-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <a
          href="mailto:amnatariq9892@gmail.com"
          className="hidden md:inline-flex items-center gap-2 rounded-full bg-gradient-warm px-4 py-2 font-mono text-xs uppercase tracking-[0.1em] text-base font-medium hover:opacity-90 transition-opacity"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
