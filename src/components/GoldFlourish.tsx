import React from 'react';

interface GoldFlourishProps {
  type?: 'divider' | 'sparkle' | 'floral' | 'crest' | 'corner' | 'swirl';
  className?: string;
}

export const GoldFlourish: React.FC<GoldFlourishProps> = ({ type = 'divider', className = '' }) => {
  if (type === 'divider') {
    return (
      <div className={`flex items-center justify-center gap-3 my-4 ${className}`} aria-hidden="true">
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C9A44B] to-[#C9A44B]/60" />
        <div className="flex items-center gap-1.5 text-[#C9A44B]">
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C9A44B]" />
          <span className="w-2.5 h-2.5 rotate-45 bg-[#C9A44B]" />
          <span className="w-1.5 h-1.5 rotate-45 border border-[#C9A44B]" />
        </div>
        <div className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C9A44B] to-[#C9A44B]/60" />
      </div>
    );
  }

  if (type === 'sparkle') {
    return (
      <svg
        className={`w-6 h-6 text-[#C9A44B] inline-block animate-pulse ${className}`}
        viewBox="0 0 24 24"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
      </svg>
    );
  }

  if (type === 'floral') {
    return (
      <svg
        className={`w-16 h-8 text-[#C9A44B] mx-auto ${className}`}
        viewBox="0 0 80 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Delicate botanical filigree */}
        <path
          d="M40 20 C34 10, 20 8, 12 18 C18 18, 24 16, 28 20 C20 22, 10 28, 4 38 C14 36, 24 30, 32 24 C36 22, 38 21, 40 20 Z"
          fill="#C9A44B"
          fillOpacity="0.85"
        />
        <path
          d="M40 20 C46 10, 60 8, 68 18 C62 18, 56 16, 52 20 C60 22, 70 28, 76 38 C66 36, 56 30, 48 24 C44 22, 42 21, 40 20 Z"
          fill="#C9A44B"
          fillOpacity="0.85"
        />
        <circle cx="40" cy="20" r="3" fill="#C9A44B" />
      </svg>
    );
  }

  if (type === 'swirl') {
    return (
      <svg
        className={`w-32 h-6 text-[#C9A44B] mx-auto ${className}`}
        viewBox="0 0 160 30"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path
          d="M10 15 C30 15, 45 5, 60 15 C75 25, 85 25, 100 15 C115 5, 130 15, 150 15"
          stroke="#C9A44B"
          strokeWidth="1.2"
          strokeLinecap="round"
        />
        <circle cx="80" cy="15" r="3" fill="#C9A44B" />
        <circle cx="20" cy="15" r="1.5" fill="#C9A44B" />
        <circle cx="140" cy="15" r="1.5" fill="#C9A44B" />
      </svg>
    );
  }

  return null;
};
