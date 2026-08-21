import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', size = 'md', showTagline = false }) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-12 h-12',
    lg: 'w-16 h-16',
  };

  const textSizes = {
    sm: 'text-lg tracking-[0.25em]',
    md: 'text-2xl sm:text-3xl tracking-[0.3em]',
    lg: 'text-3xl sm:text-4xl tracking-[0.35em]',
  };

  return (
    <div className={`flex flex-col items-center justify-center text-center ${className}`}>
      {/* Ornate Luxury Crest Icon matching the client PDF logo: hanger/wings/dress silhouette in gold */}
      <svg
        className={`${iconSizes[size]} text-[#C9A44B] transition-transform duration-300 hover:scale-105`}
        viewBox="0 0 100 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Top hanger / crown arch */}
        <path
          d="M50 10 C50 5, 54 3, 56 6 C58 9, 54 13, 50 14 C46 13, 42 9, 44 6 C46 3, 50 5, 50 10 Z"
          fill="#C9A44B"
        />
        {/* Curved dress/wing silhouette */}
        <path
          d="M50 18 C38 24, 20 32, 10 46 C22 44, 34 38, 44 32 C38 42, 36 56, 38 72 C42 66, 46 62, 50 62 C54 62, 58 66, 62 72 C64 56, 62 42, 56 32 C66 38, 78 44, 90 46 C80 32, 62 24, 50 18 Z"
          fill="url(#goldGradient)"
        />
        {/* Center diamond gem */}
        <path
          d="M50 26 L54 33 L50 40 L46 33 Z"
          fill="#FFFDF8"
          stroke="#C9A44B"
          strokeWidth="1.5"
        />
        {/* Subtle accent floral curls */}
        <path
          d="M32 46 C26 50, 24 56, 26 62 C28 58, 32 54, 36 52"
          stroke="#C9A44B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M68 46 C74 50, 76 56, 74 62 C72 58, 68 54, 64 52"
          stroke="#C9A44B"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <defs>
          <linearGradient id="goldGradient" x1="10" y1="18" x2="90" y2="72" gradientUnits="userSpaceOnUse">
            <stop stopColor="#E2CA89" />
            <stop offset="0.5" stopColor="#C9A44B" />
            <stop offset="1" stopColor="#A38133" />
          </linearGradient>
        </defs>
      </svg>

      {/* Brand Wordmark in Luxury Serif */}
      <span className={`font-cinzel font-medium text-[#4B3A3C] uppercase ${textSizes[size]} mt-1`}>
        CYBERSPLASH
      </span>

      {showTagline && (
        <span className="text-[10px] sm:text-xs tracking-[0.35em] text-[#77666A] uppercase font-light mt-1">
          Haute Couture & Lifestyle
        </span>
      )}
    </div>
  );
};
