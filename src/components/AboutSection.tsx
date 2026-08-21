import React from 'react';
import { Sparkles, Heart, Award, Compass, Feather } from 'lucide-react';
import { GoldFlourish } from './GoldFlourish';

interface AboutSectionProps {
  onLearnMore?: () => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onLearnMore }) => {
  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFDF8]" id="about-section">
      <div className="max-w-6xl mx-auto px-4 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          {/* Left Column: Flatlay Photo with Luxury Gold Border Offset (Matching client PDF) */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-sm sm:max-w-md lg:max-w-none">
              {/* Outer decorative offset border */}
              <div className="absolute -inset-3 sm:-inset-4 border border-[#C9A44B]/40 rounded-2xl -z-10 translate-x-2 translate-y-2" />

              {/* Image Frame */}
              <div className="relative aspect-[4/5] rounded-xl overflow-hidden shadow-xl border border-[#E7D8BD] bg-[#FFFAF1]">
                <img
                  src="https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1000&auto=format&fit=crop"
                  alt="About Cybersplash Lifestyle Flatlay with books, glasses and coffee"
                  loading="lazy"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Text (Matching client PDF) */}
          <div className="lg:col-span-7 flex flex-col justify-center text-center lg:text-left space-y-4">
            {/* Script Heading with Title */}
            <div>
              <span className="block font-script text-4xl sm:text-5xl text-[#D47B9D] font-normal leading-none mb-1">
                About
              </span>
              <h2 className="font-editorial text-3xl sm:text-4xl lg:text-5xl text-[#4B3A3C] font-normal tracking-tight leading-tight">
                Cybersplash
              </h2>
              <GoldFlourish type="floral" className="lg:mx-0 my-3" />
            </div>

            {/* Description (Exact match from client PDF) */}
            <p className="text-base sm:text-lg text-[#77666A] font-light leading-relaxed">
              Cybersplash is a modern fashion and lifestyle platform for women who embrace
              elegance, confidence, and individuality. We curate the latest trends, styling ideas,
              and inspiring stories to help you express your personal style effortlessly.
            </p>
            <GoldFlourish type="floral" className="lg:mx-0 pt-1 opacity-70" />
          </div>
        </div>
      </div>
    </section>
  );
};
