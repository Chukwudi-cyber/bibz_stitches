"use client";

import { useState } from "react";
import { Menu, X, ArrowRight } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { name: "Home", href: "#home" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "About", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[#E8DCCB] bg-[#FBF4EA]">
      <div className="mx-auto grid h-[72px] max-w-7xl grid-cols-[1fr_auto_1fr] items-center px-6 md:px-12">
        <a href="#home" className="justify-self-start leading-none">
          <span className="block font-serif text-2xl font-bold italic text-[#7B2285] sm:text-3xl">
            Bibz_Stitches
          </span>
          <span className="block text-center text-[9px] tracking-[0.4em] text-[#2B1033]">
            For every woman
          </span>
        </a>

        {/* Links: purple line slides out on hover */}
        <div className="hidden items-center gap-8 lg:flex">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="group relative py-1 text-sm font-medium text-[#2B1033] transition-colors duration-300 hover:text-[#7B2285]"
            >
              {link.name}
              <span className="absolute -bottom-0.5 left-0 h-0.5 w-full origin-left scale-x-0 bg-[#7B2285] transition-transform duration-300 ease-out group-hover:scale-x-100" />
            </a>
          ))}
        </div>

        <div className="col-start-3 flex items-center justify-self-end">
          <a
            href="#contact"
            className="hidden items-center gap-2 rounded-full bg-[#7B2285] px-6 py-3 text-sm text-white transition hover:bg-[#5E1768] lg:flex"
          >
            Enquire Now <ArrowRight size={16} />
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-[#7B2285] lg:hidden"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <X size={27} /> : <Menu size={27} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="flex flex-col gap-5 border-t border-[#E8DCCB] px-6 py-5 lg:hidden">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-sm font-medium text-[#2B1033] hover:text-[#7B2285]"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="flex w-fit items-center gap-2 rounded-full bg-[#7B2285] px-8 py-3 text-sm text-white"
          >
            Enquire Now <ArrowRight size={16} />
          </a>
        </div>
      )}
    </nav>
  );
}