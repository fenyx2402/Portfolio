"use client";

import { useEffect, useState } from "react";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNav = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? "rgba(0,0,0,0.85)" : "transparent",
        backdropFilter: scrolled ? "blur(12px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(222,219,200,0.08)" : "none",
      }}
    >
      <nav className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        {/* Logo / Name */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="text-sm md:text-base font-bold tracking-widest uppercase"
          style={{ color: "#E1E0CC" }}
        >
          Akanksha<span style={{ color: "rgba(222,219,200,0.4)" }}>.</span>
        </a>

        {/* Desktop Links */}
        <ul className="hidden sm:flex items-center gap-6 md:gap-10">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-xs md:text-sm tracking-wide transition-colors duration-200"
                style={{ color: "rgba(225,224,204,0.65)" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "#E1E0CC")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(225,224,204,0.65)")}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="mailto:powarakanksha9188@gmail.com"
          className="hidden sm:inline-flex items-center gap-2 px-4 py-2 rounded-full border text-xs md:text-sm font-medium tracking-wide transition-all duration-200"
          style={{
            borderColor: "rgba(222,219,200,0.25)",
            color: "rgba(225,224,204,0.8)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.borderColor = "#E1E0CC";
            e.currentTarget.style.color = "#E1E0CC";
            e.currentTarget.style.background = "rgba(222,219,200,0.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.borderColor = "rgba(222,219,200,0.25)";
            e.currentTarget.style.color = "rgba(225,224,204,0.8)";
            e.currentTarget.style.background = "transparent";
          }}
        >
          Hire me
        </a>

        {/* Mobile: just show links inline */}
        <ul className="flex sm:hidden items-center gap-4">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => handleNav(e, link.href)}
                className="text-[10px] tracking-wide"
                style={{ color: "rgba(225,224,204,0.65)" }}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
