import React from 'react';
import { GoldFlourish } from './GoldFlourish';

interface SectionTitleProps {
  title: string;
  scriptSubtitle?: string;
  tagline?: string;
  align?: 'center' | 'left';
  showFlourish?: boolean;
  className?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  scriptSubtitle,
  tagline,
  align = 'center',
  showFlourish = true,
  className = '',
}) => {
  return (
    <div
      className={`mb-10 sm:mb-14 ${
        align === 'center' ? 'text-center' : 'text-left'
      } ${className}`}
    >
      {tagline && (
        <span className="inline-block text-[11px] sm:text-xs tracking-[0.35em] text-[#C9A44B] uppercase font-semibold mb-2">
          {tagline}
        </span>
      )}

      {scriptSubtitle ? (
        <div className="space-y-1">
          <span className="block font-script text-3xl sm:text-4xl lg:text-5xl text-[#D47B9D] font-normal leading-tight">
            {scriptSubtitle}
          </span>
          <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#4B3A3C] font-normal tracking-[0.15em] uppercase">
            {title}
          </h2>
        </div>
      ) : title === title.toUpperCase() ? (
        <h2 className="font-cinzel text-2xl sm:text-3xl lg:text-4xl text-[#7E3B54] font-semibold tracking-[0.2em] uppercase">
          {title}
        </h2>
      ) : (
        <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#D47B9D] font-normal leading-tight">
          {title}
        </h2>
      )}

      {showFlourish && (
        <GoldFlourish
          type="divider"
          className={align === 'center' ? 'mx-auto' : 'mr-auto'}
        />
      )}
    </div>
  );
};
