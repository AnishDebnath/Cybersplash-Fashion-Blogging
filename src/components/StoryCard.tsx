import React from 'react';
import { Story } from '../types';

interface StoryCardProps {
  story: Story;
  onSelect: (story: Story) => void;
  isSaved?: boolean;
  onToggleSave?: (story: Story, e: React.MouseEvent) => void;
  index: number;
}

export const StoryCard: React.FC<StoryCardProps> = ({
  story,
  onSelect,
  index,
}) => {
  return (
    <article
      onClick={() => onSelect(story)}
      className="group cursor-pointer bg-[#FFFDF8] border border-[#E7D8BD] rounded-2xl p-4 sm:p-5 shadow-[0_2px_12px_rgba(75,58,60,0.04)] hover:shadow-[0_8px_30px_rgba(75,58,60,0.1)] transition-all duration-500 hover:-translate-y-1 flex flex-col justify-between"
    >
      {/* Top Header: Date & Title (as styled in client PDF) */}
      <div className="mb-3.5">
        <span className="text-[10px] sm:text-[11px] tracking-[0.25em] text-[#8A787C] uppercase font-semibold block mb-1">
          {story.date}
        </span>
        <h3 className="font-editorial text-lg sm:text-xl text-[#7E3B54] group-hover:text-[#D47B9D] font-normal leading-snug transition-colors">
          {story.title}
        </h3>
      </div>

      {/* Image Container with rounded luxury border */}
      <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3.5 border border-[#E7D8BD]/60 bg-[#FAF6EE] shadow-inner">
        <img
          src={story.image}
          alt={story.title}
          loading="lazy"
          className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
        />

        {/* Gradient Scrim */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#4B3A3C]/25 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>

      {/* Excerpt below image matching exact PDF style */}
      <div>
        <p className="text-xs sm:text-[13px] text-[#6C5B5E] font-light leading-relaxed">
          {story.excerpt}
        </p>
      </div>
    </article>
  );
};
