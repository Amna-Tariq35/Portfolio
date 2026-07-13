import { contact } from "@/data/projects";
import RevealOnScroll from "./RevealOnScroll";

export default function Contact() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="max-w-content mx-auto px-6 md:px-10">
        <RevealOnScroll>
          <div className="relative overflow-hidden rounded-[2rem] glass px-6 py-16 md:px-16 md:py-24 text-center">
            {/* glow orbs, contained within the card */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-20 -left-16 h-64 w-64 rounded-full bg-gold/25 blur-[100px]"
            />
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-orchid/25 blur-[110px]"
            />

            <div className="relative">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-gold mb-6">Contact</p>
              <h2 className="font-display text-3xl sm:text-4xl md:text-6xl text-balance max-w-2xl mx-auto text-porcelain">
                Have a project in mind? Let&apos;s talk.
              </h2>
              <p className="mt-5 max-w-md mx-auto text-porcelain-muted text-base md:text-lg">
                Open to full-stack, frontend, and AI/AR-integration roles — and freelance work.
              </p>

              <a
                href={`mailto:${contact.email}`}
                className="mt-10 inline-flex items-center gap-2 rounded-full bg-gradient-warm px-8 py-4 font-mono text-xs uppercase tracking-[0.15em] text-base font-medium hover:opacity-90 transition-opacity"
              >
                Let&apos;s talk
                <span aria-hidden>↗</span>
              </a>

              <div className="mt-14 pt-8 border-t border-base-line flex flex-col sm:flex-row items-center justify-between gap-4 text-left">
                <p className="font-mono text-[11px] text-porcelain-muted">
                  © {new Date().getFullYear()} Amna Tariq. All rights reserved.
                </p>
                <div className="flex items-center gap-6 font-mono text-[11px] uppercase tracking-[0.1em] text-porcelain-muted">
                  <a href={contact.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    LinkedIn
                  </a>
                  <a href={contact.github} target="_blank" rel="noopener noreferrer" className="hover:text-gold transition-colors">
                    GitHub
                  </a>
                  <a href={`tel:${contact.phone.replace(/\s/g, "")}`} className="hover:text-gold transition-colors">
                    Phone
                  </a>
                </div>
              </div>
            </div>
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
}
