'use client';
import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { href: '#analisis', label: 'Análisis' },
  { href: '#combos', label: 'Combos' },
  { href: '#infraestructura', label: 'Infraestructura' },
  { href: '#mercados', label: 'Mercados' },
  { href: '#expansion', label: 'USA' },
  { href: '#costos', label: 'Costos' },
  { href: '#colaboracion', label: 'Colaboración' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-bg-primary/95 backdrop-blur-md border-b border-white/[0.06]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
        {/* Logo */}
        <a href="#hero" className="font-condensed font-bold text-lg tracking-[3px] uppercase text-gold">
          Border<span className="text-zinc-400 mx-1">·</span>Tools
        </a>

        {/* Desktop links */}
        <ul className="hidden lg:flex items-center gap-1">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className="text-[11px] font-semibold tracking-[1.5px] uppercase text-zinc-400 hover:text-zinc-100 px-3 py-2 rounded transition-colors duration-150"
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href="#colaboracion"
          className="hidden lg:flex btn-gold text-xs py-2 px-5"
        >
          Ver Propuesta
        </a>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-zinc-400 hover:text-zinc-100"
          onClick={() => setOpen(!open)}
          aria-label="Menú"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="lg:hidden bg-bg-secondary border-b border-white/[0.06] px-6 pb-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-2.5 text-sm text-zinc-400 hover:text-zinc-100 border-b border-white/[0.04] last:border-0"
            >
              {l.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
