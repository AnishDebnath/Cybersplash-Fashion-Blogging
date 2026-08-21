import React from 'react';
import { Instagram, Twitter, Facebook, Sparkles, ArrowUp, Heart } from 'lucide-react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { GoldFlourish } from './GoldFlourish';

interface FooterProps {
  onNavigate: (page: PageView) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'Home', page: 'home' },
    { label: 'Fashion', page: 'fashion' },
    { label: 'Beauty', page: 'beauty' },
    { label: 'Lifestyle', page: 'lifestyle' },
    { label: 'About', page: 'about' },
    { label: 'Contact', page: 'contact' },
  ];

  return (
    <footer className="w-full bg-[#DEBF8E] border-t-2 border-[#C9A44B] pt-14 pb-10 text-[#3D2B24]">
      <div className="max-w-6xl mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
        {/* Brand Logo with Tagline */}
        <Logo size="md" showTagline={false} />

        {/* Gold Ornamental Divider (Exact match with client PDF) */}
        <GoldFlourish type="divider" className="my-5 w-64" />

        {/* Navigation Links with pipes: Home | Fashion | Beauty | Lifestyle | Contact */}
        <nav className="flex flex-wrap items-center justify-center gap-2 sm:gap-4 text-xs sm:text-sm tracking-[0.2em] uppercase font-semibold text-[#3D2B24] my-3">
          {navLinks.map((link, idx) => (
            <React.Fragment key={link.page}>
              <button
                onClick={() => {
                  onNavigate(link.page);
                  scrollToTop();
                }}
                className="hover:text-[#FFFDF8] transition-colors py-1 px-2"
              >
                {link.label}
              </button>
              {idx < navLinks.length - 1 && (
                <span className="text-[#3D2B24]/50 select-none">|</span>
              )}
            </React.Fragment>
          ))}
        </nav>

        {/* Social Icons Bar (Facebook, Instagram, X, Pinterest/Share) */}
        <div className="flex items-center gap-3 my-5">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#3D2B24]/40 hover:border-[#3D2B24] bg-[#FFFDF8]/30 hover:bg-[#3D2B24] hover:text-white text-[#3D2B24] flex items-center justify-center transition-all shadow-sm"
            aria-label="Facebook"
          >
            <Facebook className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#3D2B24]/40 hover:border-[#3D2B24] bg-[#FFFDF8]/30 hover:bg-[#3D2B24] hover:text-white text-[#3D2B24] flex items-center justify-center transition-all shadow-sm"
            aria-label="Instagram"
          >
            <Instagram className="w-3.5 h-3.5" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-8 h-8 rounded-full border border-[#3D2B24]/40 hover:border-[#3D2B24] bg-[#FFFDF8]/30 hover:bg-[#3D2B24] hover:text-white text-[#3D2B24] flex items-center justify-center transition-all shadow-sm"
            aria-label="X / Twitter"
          >
            <Twitter className="w-3.5 h-3.5" />
          </a>
          <button
            onClick={scrollToTop}
            className="w-8 h-8 rounded-full border border-[#3D2B24]/40 hover:border-[#3D2B24] bg-[#FFFDF8]/30 hover:bg-[#3D2B24] hover:text-white text-[#3D2B24] flex items-center justify-center transition-all shadow-sm ml-2"
            title="Back to Top"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright Text (Exact match from client PDF) */}
        <div className="text-xs text-[#3D2B24]/80 tracking-wider font-light mt-2 space-y-1">
          <p>© 2026 CYBERSPLASH. Designed with passion for fashion lovers.</p>
        </div>
      </div>
    </footer>
  );
};
