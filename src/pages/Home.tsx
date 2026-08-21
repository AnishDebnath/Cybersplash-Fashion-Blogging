import React from 'react';
import { HeroSlide, FeaturedItem, Story, StyleCategory, InstagramPost, FashionEditItem } from '../types';
import { HeroSlider } from '../components/HeroSlider';
import { FeaturedPosts } from '../components/FeaturedPosts';
import { FeaturedArticle } from '../components/FeaturedArticle';
import { LatestStories } from '../components/LatestStories';
import { StyleCategories } from '../components/StyleCategories';
import { AboutSection } from '../components/AboutSection';
import { InstagramSection } from '../components/InstagramSection';
import { FashionEdit } from '../components/FashionEdit';
import { Newsletter } from '../components/Newsletter';

interface HomePageProps {
  heroSlides: HeroSlide[];
  featuredItems: FeaturedItem[];
  stories: Story[];
  styleCategories: StyleCategory[];
  instagramPosts: InstagramPost[];
  fashionEdits: FashionEditItem[];
  savedStoryIds: string[];
  onSelectStory: (story: Story) => void;
  onToggleSaveStory: (story: Story, e: React.MouseEvent) => void;
  onSelectCategory: (category: StyleCategory) => void;
  onSelectFeatured: (item: FeaturedItem) => void;
  onSelectFashionEdit: (item: FashionEditItem) => void;
  onReadFeaturedArticle: () => void;
  onLearnMoreAbout: () => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  heroSlides,
  featuredItems,
  stories,
  styleCategories,
  instagramPosts,
  fashionEdits,
  savedStoryIds,
  onSelectStory,
  onToggleSaveStory,
  onSelectCategory,
  onSelectFeatured,
  onSelectFashionEdit,
  onReadFeaturedArticle,
  onLearnMoreAbout,
}) => {
  return (
    <main className="w-full bg-[#FFFDF8]">
      {/* 2. Hero Carousel Slider */}
      <HeroSlider
        slides={heroSlides}
        onSelectStory={(title) => {
          const match = stories.find((s) => s.title.toLowerCase().includes(title.toLowerCase()));
          if (match) onSelectStory(match);
          else onSelectStory(stories[0]);
        }}
      />

      {/* 3. Featured Posts / Editor's Picks / Latest in Fashion */}
      <FeaturedPosts
        items={featuredItems}
        onSelectItem={onSelectFeatured}
      />

      {/* 4. Featured Editorial Article */}
      <FeaturedArticle
        onReadArticle={onReadFeaturedArticle}
      />

      {/* 5. & 6. Latest Stories — Masonry Layout + Explore More */}
      <LatestStories
        stories={stories}
        onSelectStory={onSelectStory}
        savedStoryIds={savedStoryIds}
        onToggleSave={onToggleSaveStory}
      />

      {/* 7. Style Categories + See More */}
      <StyleCategories
        categories={styleCategories}
        onSelectCategory={onSelectCategory}
      />

      {/* 8. About Cybersplash */}
      <AboutSection
        onLearnMore={onLearnMoreAbout}
      />

      {/* 9. Instagram Section */}
      <InstagramSection
        posts={instagramPosts}
      />

      {/* 10. The Fashion Edit */}
      <FashionEdit
        items={fashionEdits}
        onSelectItem={onSelectFashionEdit}
      />

      {/* 11. Newsletter Subscription */}
      <Newsletter />
    </main>
  );
};
