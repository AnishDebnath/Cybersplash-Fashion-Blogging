import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { FashionEditItem } from '../types';
import { GoldFlourish } from './GoldFlourish';

interface FashionEditProps {
  items: FashionEditItem[];
  onSelectItem?: (item: FashionEditItem) => void;
}

export const FashionEdit: React.FC<FashionEditProps> = ({ items, onSelectItem }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFDF8]" id="fashion-edit">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Uppercase Statement Header (Exact match with client PDF) */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <p className="text-xs sm:text-sm tracking-[0.28em] text-[#D47B9D] font-medium uppercase leading-relaxed font-sans">
            FOLLOW US FOR DAILY FASHION INSPIRATION, BEAUTY TRENDS, AND STYLING IDEAS THAT
            ELEVATE YOUR EVERYDAY LOOK.
          </p>
        </div>

        {/* Script Title with Gold Floral Accent (Exact match with client PDF) */}
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#4B3A3C] font-normal leading-tight">
            The Fashion Edit
          </h2>
          <GoldFlourish type="floral" className="my-3" />
        </div>

        {/* 3 Editorial Cards (FASHION, INSPIRATION, TRAVEL) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              onClick={() => onSelectItem?.(item)}
              className="group cursor-pointer relative bg-[#FFFAF1] border border-[#E7D8BD] rounded-xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 hover:-translate-y-1.5 flex flex-col"
            >
              {/* Image Frame */}
              <div className="relative aspect-[3/4] overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108"
                />

                {/* Subtle vignette */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#4B3A3C]/60 via-transparent to-transparent" />

                {/* Gold Center Label / Badge Ribbon (Matching client PDF) */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="bg-[#FFFDF8]/90 backdrop-blur-md border border-[#C9A44B] px-8 py-3 rounded-lg shadow-lg group-hover:bg-[#C9A44B] group-hover:text-white transition-all duration-300 transform group-hover:scale-105">
                    <span className="font-cinzel text-sm sm:text-base tracking-[0.3em] text-[#4B3A3C] group-hover:text-white font-semibold uppercase">
                      {item.category}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
