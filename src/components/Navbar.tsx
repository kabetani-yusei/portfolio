"use client";

import { useEffect, useState } from "react";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#achievements", label: "Achievements" },
  { href: "#experience", label: "Experience" },
  { href: "#timeline", label: "Timeline" },
  { href: "#accounts", label: "Accounts" },
  { href: "#contact", label: "Contact" },
];

export function Navbar() {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = links.map((l) =>
        document.querySelector(l.href) as HTMLElement | null
      );
      const scrollY = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollY) {
          setActive(links[i].href);
          return;
        }
      }
      setActive("");
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-slate-200 bg-white/80 shadow-sm backdrop-blur-lg"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-slate-900"
        >
          Y.Kabetani
        </a>
        <div className="hidden items-center gap-1 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
                active === link.href
                  ? "bg-blue-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
