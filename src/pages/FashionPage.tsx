import React, { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { Story, StyleCategory } from '../types';
import { StoryCard } from '../components/StoryCard';
import { SectionTitle } from '../components/SectionTitle';
import { GoldFlourish } from '../components/GoldFlourish';
import { Newsletter } from '../components/Newsletter';

interface FashionPageProps {
  stories: Story[];
  categories: StyleCategory[];
  onSelectStory: (story: Story) => void;
  savedStoryIds: string[];
  onToggleSaveStory: (story: Story, e: React.MouseEvent) => void;
}

export const FashionPage: React.FC<FashionPageProps> = ({
  stories,
  onSelectStory,
  savedStoryIds,
  onToggleSaveStory,
}) => {
  const [selectedTag, setSelectedTag] = useState<string>('ALL');

  const fashionStories = stories.filter(
    (s) => s.category === 'FASHION' || s.category === 'TRENDS' || s.category === 'STYLE'
  );

  const filteredStories = selectedTag === 'ALL'
    ? fashionStories
    : fashionStories.filter((s) => s.category.toUpperCase() === selectedTag.toUpperCase());

  const spotlightStory = fashionStories[0] || stories[0];

  return (
    <div className="w-full bg-[#FFFDF8] animate-in fade-in duration-300">
      {/* Top Banner / Hero */}
      <div className="py-14 sm:py-20 border-b border-[#E7D8BD]/60 bg-gradient-to-b from-[#FFFAF1] to-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#C9A44B] uppercase font-semibold block">
            EDITORIAL ARCHIVE & RUNWAY
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#7E3B54] font-normal leading-tight">
            The Fashion Edit
          </h1>
          <GoldFlourish type="floral" className="my-2" />
          <p className="text-sm sm:text-base text-[#6C5B5E] font-light leading-relaxed max-w-xl mx-auto font-serif italic">
            "Discover curated runway dissections, street style philosophies, and mindful wardrobe investments for the contemporary woman."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {/* Spotlight Featured Article (Matching Home Page Featured Article style) */}
        {spotlightStory && (
          <div
            onClick={() => onSelectStory(spotlightStory)}
            className="group cursor-pointer mb-16 relative bg-[#FFFDF8] border border-[#E7D8BD] rounded-2xl overflow-hidden shadow-[0_4px_20px_rgba(75,58,60,0.06)] hover:shadow-[0_8px_30px_rgba(75,58,60,0.12)] transition-all duration-500 grid grid-cols-1 lg:grid-cols-12"
          >
            <div className="lg:col-span-7 aspect-[16/10] lg:aspect-auto overflow-hidden bg-[#1F1617]">
              <img
                src={spotlightStory.image}
                alt={spotlightStory.title}
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center space-y-4 bg-[#FFFDF8]">
              <span className="text-[10px] tracking-[0.3em] text-[#C9A44B] uppercase font-bold">
                {spotlightStory.date} — {spotlightStory.category}
              </span>
              <h2 className="font-editorial text-2xl sm:text-3xl lg:text-4xl text-[#7E3B54] font-normal group-hover:text-[#D47B9D] transition-colors leading-snug">
                {spotlightStory.title}
              </h2>
              <GoldFlourish type="floral" className="lg:mx-0 opacity-70" />
              <p className="text-xs sm:text-sm text-[#6C5B5E] font-light leading-relaxed">
                {spotlightStory.excerpt}
              </p>
              <div className="pt-2">
                <span className="inline-flex items-center gap-2 text-xs tracking-[0.2em] uppercase font-semibold text-[#4B3A3C] group-hover:text-[#C9A44B] transition-colors">
                  <span>READ COMPLETE LOOKBOOK</span>
                  <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          </div>
        )}

        {/* Filter Navigation Tabs */}
        <div className="flex items-center justify-center gap-2 sm:gap-3 mb-12 flex-wrap">
          {['ALL', 'FASHION', 'TRENDS', 'STYLE'].map((tag) => (
            <button
              key={tag}
              onClick={() => setSelectedTag(tag)}
              className={`px-5 py-2 rounded-full text-xs tracking-[0.2em] uppercase font-medium transition-all ${
                selectedTag === tag
                  ? 'bg-[#C9A44B] text-white shadow-md'
                  : 'bg-[#FFFAF1] text-[#7E3B54] border border-[#E7D8BD] hover:border-[#C9A44B]'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Stories Section Title */}
        <div className="mb-10">
          <SectionTitle
            title="Curated Stories"
            tagline="FASHION SELECTIONS"
            align="center"
          />
        </div>

        {/* Refined Grid matching Home Page StoryCard layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredStories.map((story, idx) => (
            <StoryCard
              key={story.id}
              story={story}
              index={idx}
              onSelect={onSelectStory}
              isSaved={savedStoryIds.includes(story.id)}
              onToggleSave={onToggleSaveStory}
            />
          ))}
        </div>
      </div>

      {/* Newsletter Strip */}
      <Newsletter />
    </div>
  );
};

