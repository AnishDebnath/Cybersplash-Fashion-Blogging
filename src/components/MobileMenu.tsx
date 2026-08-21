import React from 'react';
import { X, Search, Bookmark, Sparkles, ChevronRight } from 'lucide-react';
import { PageView } from '../types';
import { Logo } from './Logo';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  currentPage: PageView;
  onNavigate: (page: PageView) => void;
  onOpenSearch: () => void;
  onOpenBookmarks: () => void;
  savedCount: number;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  currentPage,
  onNavigate,
  onOpenSearch,
  onOpenBookmarks,
  savedCount,
}) => {
  if (!isOpen) return null;

  const navItems: { label: string; page: PageView }[] = [
    { label: 'HOME', page: 'home' },
    { label: 'FASHION', page: 'fashion' },
    { label: 'BEAUTY', page: 'beauty' },
    { label: 'LIFESTYLE', page: 'lifestyle' },
    { label: 'ABOUT', page: 'about' },
    { label: 'CONTACT', page: 'contact' },
  ];

  return (
    <div className="fixed inset-0 z-50 lg:hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#4B3A3C]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-[#FFFDF8] border-l border-[#E7D8BD] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Top Bar */}
          <div className="flex items-center justify-between pb-6 border-b border-[#E7D8BD]">
            <Logo size="sm" />
            <button
              onClick={onClose}
              className="p-2 text-[#4B3A3C] hover:text-[#C9A44B] transition-colors rounded-full border border-[#E7D8BD]"
              aria-label="Close menu"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="flex flex-col space-y-1 mt-6">
            {navItems.map((item) => {
              const isActive = currentPage === item.page;
              return (
                <button
                  key={item.page}
                  onClick={() => {
                    onNavigate(item.page);
                    onClose();
                  }}
                  className={`flex items-center justify-between w-full py-3.5 px-4 rounded-lg text-left text-sm tracking-[0.2em] font-medium transition-all ${
                    isActive
                      ? 'bg-[#C9A44B]/15 text-[#4B3A3C] font-semibold border-l-4 border-[#C9A44B]'
                      : 'text-[#77666A] hover:bg-[#FFFAF1] hover:text-[#4B3A3C]'
                  }`}
                >
                  <span>{item.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C9A44B]/60" />
                </button>
              );
            })}
          </nav>
        </div>

        {/* Footer info in drawer */}
        <div className="pt-6 border-t border-[#E7D8BD] text-center">
          <div className="flex items-center justify-center gap-2 text-xs tracking-widest text-[#C9A44B] uppercase mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Editorial Edition 2026</span>
          </div>
          <p className="text-xs text-[#77666A]">
            Embrace elegance, confidence & individuality.
          </p>
        </div>
      </div>
    </div>
  );
};
