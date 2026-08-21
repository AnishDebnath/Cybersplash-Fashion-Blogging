import React from 'react';
import { Sparkles, BookOpen } from 'lucide-react';
import { GoldFlourish } from './GoldFlourish';

interface FeaturedArticleProps {
  onReadArticle?: () => void;
}

export const FeaturedArticle: React.FC<FeaturedArticleProps> = ({ onReadArticle }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFAF1] border-y border-[#E7D8BD] relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A44B]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#D47B9D]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        {/* Large Editorial Image matching the client PDF reclined tailored suit photo */}
        <div className="relative mx-auto max-w-5xl group cursor-pointer" onClick={onReadArticle}>
          {/* Subtle Outer Frame */}
          <div className="relative rounded-2xl overflow-hidden border border-[#E7D8BD] shadow-2xl bg-[#FFFDF8]">
            <img
              src="https://images.unsplash.com/photo-1485968579580-b6d095142e6e?q=80&w=1600&auto=format&fit=crop"
              alt="The Return of Effortless Elegance - Modern tailored silhouette"
              className="w-full h-[380px] sm:h-[480px] lg:h-[560px] object-cover object-center transform transition-transform duration-1000 group-hover:scale-103"
              loading="lazy"
            />
            {/* Soft vignette */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#4B3A3C]/30 via-transparent to-transparent" />

            {/* Floating Read Badge on hover */}
            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
              <div className="flex items-center gap-2 bg-[#FFFDF8]/95 backdrop-blur-md text-[#4B3A3C] border border-[#C9A44B] px-5 py-2.5 rounded-full text-xs tracking-widest font-semibold uppercase shadow-lg">
                <BookOpen className="w-3.5 h-3.5 text-[#C9A44B]" />
                <span>READ EDITORIAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Centered Editorial Typography (Exact match with client PDF) */}
        <div className="text-center max-w-3xl mx-auto mt-8 sm:mt-12 space-y-3">
          {/* Metadata */}
          <div className="text-xs sm:text-sm tracking-[0.35em] text-[#77666A] uppercase font-medium">
            <span>MARCH 2026</span>
            <span className="text-[#C9A44B] mx-2">—</span>
            <span className="text-[#4B3A3C] font-semibold">FASHION</span>
          </div>

          {/* Title */}
          <h2 className="font-editorial text-3xl sm:text-5xl lg:text-6xl text-[#4B3A3C] font-normal leading-tight tracking-tight">
            The Return of Effortless Elegance
          </h2>

          {/* Gold Decorative Floral / Divider Motif */}
          <GoldFlourish type="floral" className="my-3" />

          {/* Description */}
          <p className="text-sm sm:text-base text-[#77666A] font-light leading-relaxed max-w-2xl mx-auto font-serif italic">
            Fashion trends may come and go, but true elegance remains timeless. This season
            embraces soft tones, minimal silhouettes, and confident simplicity that defines modern style.
          </p>
        </div>
      </div>
    </section>
  );
};
