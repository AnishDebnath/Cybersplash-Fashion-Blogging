import React from 'react';
import { FeaturedItem } from '../types';

interface FeaturedPostsProps {
  items: FeaturedItem[];
  onSelectItem?: (item: FeaturedItem) => void;
}

export const FeaturedPosts: React.FC<FeaturedPostsProps> = ({ items, onSelectItem }) => {
  return (
    <section className="w-full py-10 sm:py-14 bg-[#FFFDF8]" aria-label="Featured Editorial Sections">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* 3-Column Editorial Layout matching the PDF */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectItem?.(item)}
              className="group cursor-pointer relative bg-[#FFFAF1] border border-[#E7D8BD] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
            >
              {/* Image Frame with Arched/Rounded luxury styling */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.badge}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-105"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B3A3C]/40 via-transparent to-transparent" />

                {/* Gold Editorial Banner Ribbon Centered (Exact match with PDF) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#FFFDF8]/90 backdrop-blur-md border border-[#C9A44B] px-7 sm:px-9 py-2.5 sm:py-3 rounded-lg shadow-lg group-hover:bg-[#C9A44B] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <span className="font-cinzel text-xs sm:text-sm tracking-[0.3em] text-[#4B3A3C] group-hover:text-white font-semibold uppercase">
                      {item.badge}
                    </span>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

