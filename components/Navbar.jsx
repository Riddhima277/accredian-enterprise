'use client';
import { useState, useEffect } from 'react';

const NAV_LINKS = [
  { label: 'Programs', href: '#programs' },
  { label: 'Why Accredian', href: '#features' },
  { label: 'Ask AI', href: '#ai-chat' },
  { label: 'Partners', href: '#partners' },
  { label: 'Testimonials', href: '#testimonials' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav
      className={`sticky top-0 z-50 transition-all duration-300 border-b border-white/10 ${
        scrolled ? 'bg-[#0f1e6e]/95 backdrop-blur-md shadow-lg' : 'bg-[#0f1e6e]'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        <div className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-blue-400 rounded-lg flex items-center justify-center font-bold text-[#0f1e6e] text-base">
            A
          </div>
          <span className="text-white text-xl font-extrabold tracking-tight">
            Accredian <span className="text-blue-400">Enterprise</span>
          </span>
        </div>

        <div className="hidden md:flex items-center gap-6">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className={`text-sm font-medium bg-transparent border-none cursor-pointer transition-colors ${
                link.label === 'Ask AI'
                  ? 'text-blue-300 hover:text-blue-200 flex items-center gap-1.5'
                  : 'text-white hover:text-blue-300'
              }`}
            >
              {link.label === 'Ask AI' && (
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 inline-block animate-pulse" />
              )}
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="bg-blue-400 text-[#0f1e6e] px-5 py-2 rounded-lg font-bold text-sm hover:bg-blue-300 transition-colors border-none cursor-pointer"
          >
            Talk to Us
          </button>
        </div>

        <button
          className="md:hidden bg-transparent border-none text-white text-2xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✕' : '☰'}
        </button>
      </div>

      {menuOpen && (
        <div className="md:hidden bg-[#0f1e6e] px-6 py-4 flex flex-col gap-3 border-t border-white/10">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-white text-sm font-medium text-left bg-transparent border-none cursor-pointer"
            >
              {link.label}
            </button>
          ))}
          <button
            onClick={() => handleNavClick('#contact')}
            className="text-blue-400 font-bold text-sm text-left bg-transparent border-none cursor-pointer"
          >
            Talk to Us →
          </button>
        </div>
      )}
    </nav>
  );
}
