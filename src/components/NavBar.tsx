"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Home" },
  { href: "/achievements", label: "Achievements" },
  { href: "/experience", label: "Experience" },
  { href: "/timeline", label: "Timeline" },
];

function navStyle(isActive: boolean) {
  return isActive
    ? "text-slate-900"
    : "text-slate-600 transition hover:text-slate-900 duration-200";
}

export function NavBar() {
  const pathname = usePathname();

  return (
    <header className="mb-8 pt-6">
      <nav className="sticky top-4 z-20 mx-auto flex items-center justify-between rounded-full border border-white/50 bg-white/85 px-5 py-3 text-slate-800 shadow-lg shadow-slate-900/10 backdrop-blur">
        <Link href="/" className="text-sm font-semibold tracking-wide text-slate-900">
          Yusei Kabetani
        </Link>
        <div className="flex items-center gap-3 text-sm font-medium">
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-3 py-1.5 ${navStyle(active)} ${
                  active ? "bg-white/10" : ""
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </nav>
    </header>
  );
}
