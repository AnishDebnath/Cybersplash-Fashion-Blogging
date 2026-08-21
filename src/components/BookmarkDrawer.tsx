import React from 'react';
import { X, Bookmark, Trash2, ArrowRight, BookOpen } from 'lucide-react';
import { Story } from '../types';

interface BookmarkDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  savedStories: Story[];
  onSelectStory: (story: Story) => void;
  onRemoveBookmark: (storyId: string) => void;
  onClearAll: () => void;
}

export const BookmarkDrawer: React.FC<BookmarkDrawerProps> = ({
  isOpen,
  onClose,
  savedStories,
  onSelectStory,
  onRemoveBookmark,
  onClearAll,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-[#4B3A3C]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#FFFDF8] border-l border-[#E7D8BD] shadow-2xl p-6 flex flex-col justify-between overflow-y-auto animate-in slide-in-from-right duration-300">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#E7D8BD]">
            <div className="flex items-center gap-2">
              <Bookmark className="w-5 h-5 text-[#C9A44B] fill-current" />
              <h3 className="font-editorial text-2xl text-[#4B3A3C]">
                Saved Stories ({savedStories.length})
              </h3>
            </div>
            <button
              onClick={onClose}
              className="p-1.5 rounded-full border border-[#E7D8BD] text-[#4B3A3C] hover:text-[#D47B9D]"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Story List */}
          <div className="mt-6 space-y-4">
            {savedStories.length === 0 ? (
              <div className="text-center py-16 text-[#77666A]">
                <BookOpen className="w-10 h-10 text-[#C9A44B]/50 mx-auto mb-3" />
                <p className="font-editorial text-xl text-[#4B3A3C]">No stories saved yet</p>
                <p className="text-xs mt-1">
                  Click the bookmark icon on any editorial story to read it later.
                </p>
              </div>
            ) : (
              savedStories.map((story) => (
                <div
                  key={story.id}
                  className="group relative flex gap-3 p-3 rounded-xl bg-[#FFFAF1] border border-[#E7D8BD] hover:border-[#C9A44B] transition-all"
                >
                  <div
                    onClick={() => {
                      onSelectStory(story);
                      onClose();
                    }}
                    className="cursor-pointer w-20 h-20 rounded-lg overflow-hidden flex-shrink-0"
                  >
                    <img
                      src={story.image}
                      alt={story.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                    />
                  </div>

                  <div
                    onClick={() => {
                      onSelectStory(story);
                      onClose();
                    }}
                    className="cursor-pointer flex-1 min-w-0 flex flex-col justify-between"
                  >
                    <div>
                      <span className="text-[9px] tracking-widest text-[#C9A44B] uppercase font-bold block">
                        {story.category}
                      </span>
                      <h4 className="font-editorial text-sm font-semibold text-[#4B3A3C] group-hover:text-[#D47B9D] transition-colors truncate">
                        {story.title}
                      </h4>
                    </div>
                    <span className="text-[10px] text-[#77666A]">
                      {story.date}
                    </span>
                  </div>

                  <button
                    onClick={() => onRemoveBookmark(story.id)}
                    className="self-center p-2 text-[#77666A] hover:text-red-500 transition-colors"
                    title="Remove from saved"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              ))
            )}
          </div>
        </div>

        {/* Footer Actions */}
        {savedStories.length > 0 && (
          <div className="pt-6 border-t border-[#E7D8BD] flex items-center justify-between">
            <button
              onClick={onClearAll}
              className="text-xs text-[#77666A] hover:text-red-500 uppercase tracking-wider font-medium"
            >
              Clear All
            </button>
            <button
              onClick={onClose}
              className="px-6 py-2.5 rounded-full bg-[#4B3A3C] text-white text-xs tracking-wider uppercase font-medium hover:bg-[#C9A44B] transition-colors"
            >
              Close
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
