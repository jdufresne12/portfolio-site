"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { site } from "@/content/site";

const links = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#stack", label: "Stack" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const solid = scrolled || open;

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        solid ? "bg-board/90 backdrop-blur-md border-b border-line" : "border-b border-transparent"
      }`}
    >
      <nav className="shell flex h-16 items-center justify-between" aria-label="Main">
        <a href="#top" className="flex items-center gap-3 rounded" onClick={() => setOpen(false)}>
          <Image src="/JD.svg" alt="" width={34} height={34} priority />
          <span className="wide text-[0.95rem] font-semibold">{site.name}</span>
        </a>

        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded px-3 py-2 text-[0.95rem] text-dim transition-colors hover:text-silk">
                {l.label}
              </a>
            </li>
          ))}
          <li className="ml-3">
            <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-line !min-h-9 !py-1.5 text-sm">
              Resume
            </a>
          </li>
        </ul>

        <button
          type="button"
          className="btn btn-line !min-h-10 md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="border-t border-line md:hidden">
          <ul className="shell flex flex-col py-3">
            {links.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={() => setOpen(false)} className="wide block py-3 text-2xl font-bold">
                  {l.label}
                </a>
              </li>
            ))}
            <li className="pt-3 pb-2">
              <a href={site.resume} target="_blank" rel="noopener noreferrer" className="btn btn-gold">
                Download resume
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
