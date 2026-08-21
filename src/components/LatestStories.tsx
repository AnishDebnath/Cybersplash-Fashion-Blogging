import React, { useState, useMemo } from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import { Story } from '../types';
import { StoryCard } from './StoryCard';
import { SectionTitle } from './SectionTitle';

interface LatestStoriesProps {
  stories: Story[];
  onSelectStory: (story: Story) => void;
  savedStoryIds: string[];
  onToggleSave: (story: Story, e: React.MouseEvent) => void;
}

export const LatestStories: React.FC<LatestStoriesProps> = ({
  stories,
  onSelectStory,
  savedStoryIds,
  onToggleSave,
}) => {
  const [visibleCount, setVisibleCount] = useState<number>(9);
  const displayedStories = stories.slice(0, visibleCount);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFDF8]" id="latest-stories">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Section Title with Script Font & Floral Accents (Matching client PDF) */}
        <div className="text-center mb-10 sm:mb-14">
          <SectionTitle
            title="Latest Stories"
            align="center"
          />
        </div>

        {/* Editorial Grid matching PDF */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {displayedStories.map((story, index) => (
            <StoryCard
              key={story.id}
              story={story}
              index={index}
              onSelect={onSelectStory}
              isSaved={savedStoryIds.includes(story.id)}
              onToggleSave={onToggleSave}
            />
          ))}
        </div>

        {/* Explore More Pill Button (Matching client PDF: soft rose with arrow) */}
        <div className="mt-12 sm:mt-16 text-center">
          <button
            onClick={() => {
              if (visibleCount < stories.length) {
                setVisibleCount((prev) => prev + 3);
              } else {
                setVisibleCount(stories.length);
              }
            }}
            className="group inline-flex items-center gap-3 px-8 sm:px-10 py-3.5 sm:py-4 rounded-full bg-gradient-to-r from-[#DE89A9] to-[#D47B9D] hover:from-[#D47B9D] hover:to-[#C26789] text-white text-xs sm:text-sm tracking-[0.25em] font-medium uppercase shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <span>EXPLORE MORE</span>
            <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1.5 transition-transform" />
          </button>
        </div>
      </div>
    </section>
  );
};
