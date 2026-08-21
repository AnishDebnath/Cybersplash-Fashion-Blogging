/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { PageView, Story, StyleCategory, FeaturedItem, FashionEditItem } from './types';
import { siteConfig } from './data/siteConfig';
import { heroSlides } from './data/heroSlides';
import { featuredItems } from './data/featuredSections';
import { stories } from './data/stories';
import { styleCategories } from './data/categories';
import { instagramPosts } from './data/instagramPosts';
import { fashionEdits } from './data/fashionEdits';

import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { SearchModal } from './components/SearchModal';
import { BookmarkDrawer } from './components/BookmarkDrawer';

import { HomePage } from './pages/Home';
import { FashionPage } from './pages/FashionPage';
import { BeautyPage } from './pages/BeautyPage';
import { LifestylePage } from './pages/LifestylePage';
import { AboutPage } from './pages/AboutPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentPage, setCurrentPage] = useState<PageView>('home');
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isBookmarksOpen, setIsBookmarksOpen] = useState<boolean>(false);

  // Bookmarking State persisted in localStorage
  const [savedStoryIds, setSavedStoryIds] = useState<string[]>(() => {
    try {
      const stored = localStorage.getItem('cybersplash_saved_stories');
      return stored ? JSON.parse(stored) : ['story-1', 'story-2'];
    } catch {
      return ['story-1', 'story-2'];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('cybersplash_saved_stories', JSON.stringify(savedStoryIds));
    } catch (err) {
      console.warn('LocalStorage error:', err);
    }
  }, [savedStoryIds]);

  const handleToggleSaveStory = (story: Story, e: React.MouseEvent) => {
    e.stopPropagation();
    setSavedStoryIds((prev) =>
      prev.includes(story.id)
        ? prev.filter((id) => id !== story.id)
        : [...prev, story.id]
    );
  };

  const handleRemoveBookmark = (storyId: string) => {
    setSavedStoryIds((prev) => prev.filter((id) => id !== storyId));
  };

  const handleClearAllBookmarks = () => {
    setSavedStoryIds([]);
  };

  const handleNavigate = (page: PageView) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const savedStories = stories.filter((s) => savedStoryIds.includes(s.id));

  return (
    <div className="min-h-screen flex flex-col bg-[#FFFDF8] text-[#4B3A3C]">
      {/* 1. Header (Sticky navigation, brand logo, search, saved stories drawer) */}
      <Header
        currentPage={currentPage}
        onNavigate={handleNavigate}
        onOpenSearch={() => setIsSearchOpen(true)}
        onOpenBookmarks={() => setIsBookmarksOpen(true)}
        savedCount={savedStoryIds.length}
      />

      {/* Main Content Pages */}
      <div className="flex-1">
        {currentPage === 'home' && (
          <HomePage
            heroSlides={heroSlides}
            featuredItems={featuredItems}
            stories={stories}
            styleCategories={styleCategories}
            instagramPosts={instagramPosts}
            fashionEdits={fashionEdits}
            savedStoryIds={savedStoryIds}
            onSelectStory={() => {}}
            onToggleSaveStory={handleToggleSaveStory}
            onSelectCategory={(cat) => {
              const matched = stories.find(
                (s) => s.category.toLowerCase() === cat.title.toLowerCase()
              );
              if (matched) handleNavigate('fashion');
              else handleNavigate('fashion');
            }}
            onSelectFeatured={(item) => {
              const matched = stories.find((s) =>
                s.title.toLowerCase().includes(item.title.substring(0, 10).toLowerCase())
              );
              if (matched) handleNavigate('fashion');
              else handleNavigate('fashion');
            }}
            onSelectFashionEdit={(edit) => {
              const matched = stories.find((s) => s.category === edit.category);
              if (matched) handleNavigate('fashion');
              else handleNavigate('fashion');
            }}
            onReadFeaturedArticle={() => {
              // Open the featured editorial article
              handleNavigate('fashion');
            }}
            onLearnMoreAbout={() => handleNavigate('about')}
          />
        )}

        {currentPage === 'fashion' && (
          <FashionPage
            stories={stories}
            categories={styleCategories}
            onSelectStory={() => {}}
            savedStoryIds={savedStoryIds}
            onToggleSaveStory={handleToggleSaveStory}
          />
        )}

        {currentPage === 'beauty' && (
          <BeautyPage
            stories={stories}
            onSelectStory={() => {}}
            savedStoryIds={savedStoryIds}
            onToggleSaveStory={handleToggleSaveStory}
          />
        )}

        {currentPage === 'lifestyle' && (
          <LifestylePage
            stories={stories}
            onSelectStory={() => {}}
            savedStoryIds={savedStoryIds}
            onToggleSaveStory={handleToggleSaveStory}
          />
        )}

        {currentPage === 'about' && <AboutPage />}

        {currentPage === 'contact' && <ContactPage />}
      </div>

      {/* 12. Footer */}
      <Footer onNavigate={handleNavigate} />

      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        stories={stories}
        categories={styleCategories}
        onSelectStory={() => {}}
      />

      <BookmarkDrawer
        isOpen={isBookmarksOpen}
        onClose={() => setIsBookmarksOpen(false)}
        savedStories={savedStories}
        onSelectStory={() => {}}
        onRemoveBookmark={handleRemoveBookmark}
        onClearAll={handleClearAllBookmarks}
      />
    </div>
  );
}
