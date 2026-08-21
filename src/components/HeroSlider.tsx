import React, { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { HeroSlide } from '../types';

interface HeroSliderProps {
  slides: HeroSlide[];
  onSelectStory?: (title: string) => void;
}

export const HeroSlider: React.FC<HeroSliderProps> = ({ slides, onSelectStory }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [isHovered, setIsHovered] = useState(false);
  const touchStartX = useRef<number | null>(null);

  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentIndex((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered, slides.length]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX;
    if (Math.abs(diff) > 50) {
      if (diff > 0) nextSlide();
      else prevSlide();
    }
    touchStartX.current = null;
  };

  const current = slides[currentIndex];

  return (
    <section
      className="relative w-full overflow-hidden bg-[#22181A] border-b border-[#E7D8BD] select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      aria-roledescription="carousel"
      aria-label="Editorial Hero Carousel"
    >
      {/* Background Slides with AnimatePresence */}
      <div className="relative min-h-[500px] sm:min-h-[580px] lg:min-h-[660px] flex items-center justify-center overflow-hidden">
        <AnimatePresence initial={false} custom={direction}>
          <motion.div
            key={current.id}
            custom={direction}
            initial={{ opacity: 0, scale: 1.08 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.98 }}
            transition={{ duration: 1.1, ease: [0.25, 0.1, 0.25, 1] }}
            className="absolute inset-0 w-full h-full"
          >
            {/* Slide Image with continuous gentle Ken Burns effect */}
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-full object-cover object-center"
              loading="eager"
               fetchPriority="high"
               sizes="100vw"
             />

            {/* Full-Width Luxury Editorial Dark Overlays */}
            <div className="absolute inset-0 w-full h-full bg-black/40" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-t from-[#1F1617]/95 via-[#1F1617]/40 to-[#1F1617]/65" />
            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-[#1F1617]/75 via-transparent to-[#1F1617]/75" />
          </motion.div>
        </AnimatePresence>

        {/* Clean, Refined In-Carousel Content with smooth Stagger & Fade Transition */}
        <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-12 py-16 sm:py-24 text-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -18 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Tracked Category/Edition Header */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="inline-block mb-3"
              >
                <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#E8C570] uppercase font-medium bg-black/35 backdrop-blur-md px-4 py-1 rounded-full border border-[#E8C570]/30 shadow-sm">
                  EDITORIAL EXCLUSIVE
                </span>
              </motion.div>

              {/* Slide Title */}
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#FFFDF8] font-normal leading-[1.12] tracking-tight drop-shadow-[0_2px_12px_rgba(0,0,0,0.6)] mb-4"
              >
                {current.title}
              </motion.h1>

              {/* Minimalist divider line */}
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="w-16 h-[1.5px] bg-[#E8C570] mx-auto mb-4 opacity-80"
              />

              {/* Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.35 }}
                className="font-serif italic text-lg sm:text-xl lg:text-2xl text-[#FCE8F0] font-light leading-relaxed drop-shadow-[0_1px_6px_rgba(0,0,0,0.5)] mb-7 max-w-xl mx-auto"
              >
                "{current.subtitle}"
              </motion.p>

              {/* Clean Call To Action */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 }}
              >
                <button
                  onClick={() => onSelectStory?.(current.title)}
                  className="inline-flex items-center gap-2.5 px-7 py-3 rounded-full bg-[#C9A44B] hover:bg-[#B38E37] text-white text-xs tracking-[0.25em] font-medium uppercase shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl active:scale-95"
                >
                  <span>{current.linkText || 'EXPLORE LOOKS'}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Prev / Next Chevrons on Carousel Edges */}
      <button
        onClick={prevSlide}
        className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1F1617]/70 hover:bg-[#C9A44B] text-white border border-[#E7D8BD]/30 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-30 w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-[#1F1617]/70 hover:bg-[#C9A44B] text-white border border-[#E7D8BD]/30 flex items-center justify-center backdrop-blur-md transition-all duration-300 hover:scale-110 active:scale-95 shadow-lg"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      {/* Single Centered Slide Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2.5 bg-black/40 backdrop-blur-md border border-white/20 px-4 py-2 rounded-full shadow-lg">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => {
              setDirection(idx > currentIndex ? 1 : -1);
              setCurrentIndex(idx);
            }}
            className={`h-2 rounded-full transition-all duration-500 ${
              idx === currentIndex
                ? 'w-8 bg-[#E8C570]'
                : 'w-2 bg-white/40 hover:bg-white/70'
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
    </section>
  );
};


