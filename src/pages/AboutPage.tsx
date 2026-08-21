import React from 'react';
import { Sparkles, Feather, Award, Heart, Globe, BookOpen } from 'lucide-react';
import { GoldFlourish } from '../components/GoldFlourish';
import { SectionTitle } from '../components/SectionTitle';
import { Newsletter } from '../components/Newsletter';

export const AboutPage: React.FC = () => {
  return (
    <div className="w-full bg-[#FFFDF8] animate-in fade-in duration-300">
      {/* Top Banner / Hero */}
      <div className="py-14 sm:py-20 border-b border-[#E7D8BD]/60 bg-gradient-to-b from-[#FFFAF1] to-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#C9A44B] uppercase font-semibold block">
            ESTABLISHED 2026 — PARIS & NEW YORK
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#7E3B54] font-normal leading-tight">
            Our Atelier & Philosophy
          </h1>
          <GoldFlourish type="floral" className="my-2" />
          <p className="text-sm sm:text-base text-[#6C5B5E] font-light leading-relaxed max-w-xl mx-auto font-serif italic">
            "Cybersplash is a modern fashion and lifestyle platform for women who embrace elegance, confidence, and individuality."
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-8 py-12 sm:py-16 space-y-16">
        {/* Hero Editorial Image */}
        <div className="relative aspect-[16/9] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(75,58,60,0.08)] border border-[#E7D8BD]">
          <img
            src="https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1600&auto=format&fit=crop"
            alt="Cybersplash Studio & Editorial Workspace"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Core Manifesto */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-16 items-center">
          <div className="space-y-4 text-[#6C5B5E] font-light leading-relaxed">
            <h2 className="font-editorial text-3xl sm:text-4xl text-[#7E3B54]">
              Quiet Luxury, Loud Individuality
            </h2>
            <GoldFlourish type="floral" className="opacity-70" />
            <p>
              We believe true style is neither fleeting nor performative. It is an intuitive art form
              cultivated through discernment, quality craftsmanship, and self-assurance.
            </p>
            <p>
              Every week, our global contributors in Paris, London, Milan, and New York distill the
              fast-moving sartorial landscape into enduring edits and thoughtful essays.
            </p>
          </div>

          <div className="bg-[#FFFAF1] p-8 sm:p-10 rounded-2xl border border-[#E7D8BD] space-y-4 shadow-sm">
            <h3 className="font-editorial text-2xl text-[#7E3B54]">The Editorial Standard</h3>
            <ul className="space-y-3.5 text-xs sm:text-sm text-[#6C5B5E]">
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <span>100% Uncompromising craftsmanship & material integrity</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <span>Celebration of sustainable, circular, and heirloom fashion</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <span>Mindful beauty practices honoring natural skin health</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Sparkles className="w-4 h-4 text-[#C9A44B] flex-shrink-0 mt-0.5" />
                <span>Global perspectives spanning traditional and avant-garde style</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Editorial Team */}
        <div className="pt-10 border-t border-[#E7D8BD]/80">
          <SectionTitle
            title="The Editorial Board"
            tagline="CURATORS OF TASTE"
            align="center"
          />
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10">
            <div className="text-center space-y-2.5">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#C9A44B] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=300&auto=format&fit=crop"
                  alt="Editor in Chief"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl text-[#7E3B54]">Genevieve Fontaine</h3>
              <p className="text-[11px] text-[#C9A44B] tracking-[0.2em] uppercase font-semibold">
                Editor-in-Chief
              </p>
            </div>

            <div className="text-center space-y-2.5">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#C9A44B] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?q=80&w=300&auto=format&fit=crop"
                  alt="Fashion Director"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl text-[#7E3B54]">Clara Dubois</h3>
              <p className="text-[11px] text-[#C9A44B] tracking-[0.2em] uppercase font-semibold">
                Fashion Director
              </p>
            </div>

            <div className="text-center space-y-2.5">
              <div className="w-24 h-24 rounded-full overflow-hidden mx-auto border-2 border-[#C9A44B] shadow-md">
                <img
                  src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=300&auto=format&fit=crop"
                  alt="Beauty Editor"
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="font-editorial text-xl text-[#7E3B54]">Dr. Camille Laurent</h3>
              <p className="text-[11px] text-[#C9A44B] tracking-[0.2em] uppercase font-semibold">
                Beauty & Well-being Editor
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Newsletter Strip */}
      <Newsletter />
    </div>
  );
};

