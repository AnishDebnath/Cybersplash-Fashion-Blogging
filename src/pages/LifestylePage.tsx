import React from 'react';
import { Story } from '../types';
import { StoryCard } from '../components/StoryCard';
import { SectionTitle } from '../components/SectionTitle';
import { GoldFlourish } from '../components/GoldFlourish';
import { Newsletter } from '../components/Newsletter';

interface LifestylePageProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  savedStoryIds: string[];
  onToggleSaveStory: (story: Story, e: React.MouseEvent) => void;
}

export const LifestylePage: React.FC<LifestylePageProps> = ({
  stories,
  onSelectStory,
  savedStoryIds,
  onToggleSaveStory,
}) => {
  const lifestyleStories = stories.filter(
    (s) => s.category === 'LIFESTYLE' || s.title.includes('Living') || s.title.includes('Cozy')
  );

  return (
    <div className="w-full bg-[#FFFDF8] animate-in fade-in duration-300">
      {/* Page Banner */}
      <div className="py-14 sm:py-20 border-b border-[#E7D8BD]/60 bg-gradient-to-b from-[#FFFAF1] to-[#FFFDF8]">
        <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center space-y-4">
          <span className="text-[11px] sm:text-xs tracking-[0.35em] text-[#C9A44B] uppercase font-semibold block">
            INTERIORS, TRAVEL & MINDFUL LIVING
          </span>
          <h1 className="font-editorial text-4xl sm:text-5xl lg:text-6xl text-[#7E3B54] font-normal leading-tight">
            The Lifestyle Journal
          </h1>
          <GoldFlourish type="floral" className="my-2" />
          <p className="text-sm sm:text-base text-[#6C5B5E] font-light leading-relaxed max-w-xl mx-auto font-serif italic">
            "Artful interiors, tranquil escapes, and daily habits designed to cultivate peace, elegance, and intentional living."
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-12 sm:py-16">
        {/* Featured Lifestyle Story Grid */}
        <div className="mb-10">
          <SectionTitle
            title="Lifestyle Stories"
            tagline="INSPIRATIONAL LIVING"
            align="center"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {(lifestyleStories.length > 0 ? lifestyleStories : stories).map((story, idx) => (
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

