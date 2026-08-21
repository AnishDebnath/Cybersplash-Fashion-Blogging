import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { StyleCategory } from '../types';
import { SectionTitle } from './SectionTitle';

interface StyleCategoriesProps {
  categories: StyleCategory[];
  onSelectCategory?: (category: StyleCategory) => void;
}

export const StyleCategories: React.FC<StyleCategoriesProps> = ({
  categories,
  onSelectCategory,
}) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFAF1] border-y border-[#E7D8BD]" id="style-categories">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title matching the client PDF */}
        <SectionTitle
          title="STYLE CATEGORIES"
          align="center"
        />

        {/* 3 Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-10">
          {categories.map((cat) => (
            <div
              key={cat.id}
              onClick={() => onSelectCategory?.(cat)}
              className="group cursor-pointer relative bg-[#FFFDF8] border border-[#E7D8BD] rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 flex flex-col"
            >
              {/* Arched top frame styling */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={cat.image}
                  alt={cat.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108"
                />

                {/* Gradient scrim for text readability */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B3A3C]/80 via-[#4B3A3C]/20 to-transparent" />

                {/* Overlay Text at bottom of image (Matching client PDF) */}
                <div className="absolute bottom-0 inset-x-0 p-5 sm:p-6 text-white z-10">
                  <h3 className="font-editorial text-2xl sm:text-3xl text-white font-normal leading-tight mb-1.5 group-hover:text-[#E2CA89] transition-colors">
                    {cat.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F8E6EE] font-light leading-relaxed opacity-90">
                    {cat.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* SEE MORE Pill Button (Matching client PDF) */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => onSelectCategory?.(categories[0])}
            className="group inline-flex items-center gap-2.5 px-8 sm:px-10 py-3.5 rounded-full bg-[#D47B9D] hover:bg-[#C26789] text-white text-xs sm:text-sm tracking-[0.25em] font-medium uppercase shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>SEE MORE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
