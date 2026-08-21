import React, { useState, useMemo } from 'react';
import { X, Search, Clock, ArrowRight, Sparkles } from 'lucide-react';
import { Story, StyleCategory } from '../types';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  stories: Story[];
  categories: StyleCategory[];
  onSelectStory: (story: Story) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  stories,
  categories,
  onSelectStory,
}) => {
  const [query, setQuery] = useState('');

  const filteredStories = useMemo(() => {
    if (!query.trim()) return stories.slice(0, 4);
    const q = query.toLowerCase();
    return stories.filter(
      (s) =>
        s.title.toLowerCase().includes(q) ||
        s.excerpt.toLowerCase().includes(q) ||
        s.category.toLowerCase().includes(q) ||
        s.tags?.some((t) => t.toLowerCase().includes(q))
    );
  }, [stories, query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-[#4B3A3C]/70 backdrop-blur-md flex items-start justify-center p-4 sm:p-6 lg:p-12 animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-[#FFFDF8] border border-[#E7D8BD] rounded-2xl shadow-2xl overflow-hidden mt-8">
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 p-4 sm:p-6 border-b border-[#E7D8BD] bg-[#FFFAF1]">
          <Search className="w-5 h-5 text-[#C9A44B] flex-shrink-0" />
          <input
            type="text"
            placeholder="Search stories, runway trends, beauty, minimalism..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-transparent text-base sm:text-lg text-[#4B3A3C] placeholder-[#77666A]/60 focus:outline-none font-light"
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="text-xs text-[#77666A] hover:text-[#4B3A3C] p-1"
            >
              Clear
            </button>
          )}
          <button
            onClick={onClose}
            className="p-2 rounded-full border border-[#E7D8BD] bg-[#FFFDF8] text-[#4B3A3C] hover:text-[#D47B9D] transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Search Results */}
        <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-4">
          <div className="flex items-center justify-between text-xs tracking-wider text-[#77666A] uppercase mb-2">
            <span>
              {query ? `Found ${filteredStories.length} results` : 'Suggested Stories'}
            </span>
            <span className="text-[#C9A44B]">CYBERSPLASH ARCHIVES</span>
          </div>

          {filteredStories.length === 0 ? (
            <div className="text-center py-12">
              <Sparkles className="w-8 h-8 text-[#C9A44B] mx-auto mb-2 opacity-50" />
              <p className="text-[#4B3A3C] font-editorial text-xl">
                No matching stories found
              </p>
              <p className="text-xs text-[#77666A] mt-1">
                Try searching for 'Denim', 'Minimalism', 'Beauty', or 'Elegance'.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {filteredStories.map((story) => (
                <div
                  key={story.id}
                  onClick={() => {
                    onSelectStory(story);
                    onClose();
                  }}
                  className="cursor-pointer group flex gap-3 p-3 rounded-xl bg-[#FFFAF1] border border-[#E7D8BD] hover:border-[#C9A44B] transition-all"
                >
                  <div className="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1 min-w-0">
                    <div>
                      <span className="text-[9px] tracking-widest text-[#C9A44B] uppercase font-bold block">
                        {story.category}
                      </span>
                      <h4 className="font-editorial text-sm text-[#4B3A3C] font-semibold group-hover:text-[#D47B9D] transition-colors truncate">
                        {story.title}
                      </h4>
                    </div>
                    <p className="text-[11px] text-[#77666A] line-clamp-1">
                      {story.excerpt}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
