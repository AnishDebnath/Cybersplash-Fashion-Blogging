import React, { useState, useEffect } from 'react';
import { Menu, Search, Bookmark, Sparkles } from 'lucide-react';
import { PageView } from '../types';
import { Logo } from './Logo';
import { MobileMenu } from './MobileMenu';

interface HeaderProps {
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenSearch?: () => void;
  onOpenBookmarks?: () => void;
  savedCount?: number;
}

export const Header: React.FC<HeaderProps> = ({
  currentPage,
  onNavigate,
  onOpenSearch = () => { },
  onOpenBookmarks = () => { },
  savedCount = 0,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { label: string; page: PageView }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'FASHION', page: 'fashion' },
    { label: 'BEAUTY', page: 'beauty' },
    { label: 'LIFESTYLE', page: 'lifestyle' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' },
  ];

  return (
    <>
      <header
        className={`w-full transition-all duration-300 z-40 ${isScrolled
          ? 'sticky top-0 bg-[#FFFDF8]/95 backdrop-blur-md shadow-[0_4px_20px_rgba(75,58,60,0.06)] border-b border-[#E7D8BD]'
          : 'relative bg-[#FFFDF8]'
          }`}
      >
        {/* Central Logo Header */}
        <div className="py-5 sm:py-7 px-4 flex items-center justify-between lg:justify-center relative max-w-7xl mx-auto">
          {/* Mobile menu toggle */}
          <button
            onClick={() => setMobileMenuOpen(true)}
            className="lg:hidden p-2 text-[#4B3A3C] hover:text-[#C9A44B] transition-colors border border-[#E7D8BD] rounded-md"
            aria-label="Open mobile navigation"
          >
            <Menu className="w-5 h-5" />
          </button>

          {/* Centered Logo matching PDF */}
          <button
            onClick={() => onNavigate('home')}
            className="cursor-pointer group focus:outline-none"
            aria-label="Go to Homepage"
          >
            <Logo size="md" showTagline={false} />
          </button>

          {/* Placeholder on mobile to balance flex layout */}
          <div className="w-9 lg:hidden" />
        </div>

        {/* Gold Navigation Ribbon Bar (Matching the exact client PDF layout) */}
        <div className="bg-gradient-to-r from-[#DFCA8C] via-[#C9A44B] to-[#DFCA8C] py-2.5 px-4 sm:px-6 shadow-sm">
          <nav className="max-w-4xl mx-auto flex items-center justify-center gap-4 sm:gap-8 xl:gap-12 flex-wrap">
            {navLinks.map((link) => {
              const isActive = currentPage === link.page;
              return (
                <button
                  key={link.page}
                  onClick={() => onNavigate(link.page)}
                  className={`text-[11px] sm:text-xs xl:text-sm font-medium tracking-[0.25em] sm:tracking-[0.3em] uppercase transition-all duration-200 relative py-1 px-1.5 sm:px-2 ${isActive
                    ? 'text-[#FFFDF8] font-bold after:content-[""] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-4 after:h-[2px] after:bg-[#FFFDF8]'
                    : 'text-[#4B3A3C] hover:text-white hover:scale-105'
                    }`}
                >
                  {link.label}
                </button>
              );
            })}
          </nav>
        </div>
      </header>

      {/* Mobile Drawer */}
      <MobileMenu
        isOpen={mobileMenuOpen}
        onClose={() => setMobileMenuOpen(false)}
        currentPage={currentPage}
        onNavigate={onNavigate}
        onOpenSearch={onOpenSearch}
        onOpenBookmarks={onOpenBookmarks}
        savedCount={savedCount}
      />
    </>
  );
};