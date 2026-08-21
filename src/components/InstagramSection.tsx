import React, { useState } from 'react';
import { Instagram, Heart, MessageCircle, ExternalLink, Sparkles } from 'lucide-react';
import { InstagramPost } from '../types';

interface InstagramSectionProps {
  posts: InstagramPost[];
}

export const InstagramSection: React.FC<InstagramSectionProps> = ({ posts }) => {
  const [selectedPost, setSelectedPost] = useState<InstagramPost | null>(null);

  return (
    <section className="w-full py-16 sm:py-24 bg-[#FFFAF1] border-b border-[#E7D8BD]" id="instagram-feed">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        {/* Title in script style matching the client PDF */}
        <div className="text-center mb-10 sm:mb-14">
          <h2 className="font-script text-4xl sm:text-5xl lg:text-6xl text-[#4B3A3C] font-normal leading-tight">
            Follow on instagram @cybersplash
          </h2>
        </div>

        {/* 4 Editorial Photos Gallery (Matching client PDF 4-column layout) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {posts.map((post) => (
            <div
              key={post.id}
              onClick={() => setSelectedPost(post)}
              className="group cursor-pointer relative aspect-[3/4] bg-[#FFFDF8] rounded-xl overflow-hidden border border-[#E7D8BD] shadow-sm hover:shadow-xl transition-all duration-500 hover:-translate-y-1.5"
            >
              <img
                src={post.image}
                alt={post.caption}
                loading="lazy"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 group-hover:scale-108"
              />

              {/* Hover Overlay */}
              <div className="absolute inset-0 bg-[#4B3A3C]/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-6 text-white backdrop-blur-[2px]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5 text-xs text-[#E2CA89] font-medium">
                    <Instagram className="w-4 h-4" />
                    <span>{post.handle}</span>
                  </div>
                  <Sparkles className="w-4 h-4 text-[#E2CA89]" />
                </div>

                <p className="text-xs text-[#FFFDF8] line-clamp-3 font-light leading-relaxed">
                  {post.caption}
                </p>

                <div className="flex items-center justify-between border-t border-white/20 pt-3 text-xs">
                  <div className="flex items-center gap-4 text-[#F8E6EE]">
                    <span className="flex items-center gap-1.5">
                      <Heart className="w-3.5 h-3.5 fill-current text-[#D47B9D]" />
                      {post.likes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MessageCircle className="w-3.5 h-3.5" />
                      {post.comments}
                    </span>
                  </div>
                  <span className="text-[10px] tracking-wider uppercase text-[#E2CA89] font-semibold flex items-center gap-1">
                    VIEW <ExternalLink className="w-3 h-3" />
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Instagram Post Detail Modal */}
      {selectedPost && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#4B3A3C]/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="relative w-full max-w-2xl bg-[#FFFDF8] rounded-2xl border border-[#E7D8BD] shadow-2xl overflow-hidden grid grid-cols-1 sm:grid-cols-2">
            <div className="aspect-square sm:aspect-auto">
              <img
                src={selectedPost.image}
                alt={selectedPost.caption}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-6 sm:p-8 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 border-b border-[#E7D8BD]">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-[#C9A44B] text-white flex items-center justify-center font-cinzel text-xs font-bold">
                      CS
                    </div>
                    <div>
                      <span className="font-semibold text-xs text-[#4B3A3C] block">
                        CYBERSPLASH
                      </span>
                      <span className="text-[10px] text-[#77666A]">
                        {selectedPost.handle}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="text-xs text-[#77666A] hover:text-[#4B3A3C] font-semibold"
                  >
                    ✕
                  </button>
                </div>

                <p className="text-xs sm:text-sm text-[#4B3A3C] font-light leading-relaxed my-6">
                  {selectedPost.caption}
                </p>
              </div>

              <div>
                <div className="flex items-center gap-4 text-xs text-[#77666A] pt-4 border-t border-[#E7D8BD] mb-4">
                  <span className="flex items-center gap-1.5 font-medium text-[#4B3A3C]">
                    <Heart className="w-4 h-4 text-[#D47B9D] fill-current" />
                    {selectedPost.likes.toLocaleString()} likes
                  </span>
                  <span className="flex items-center gap-1.5">
                    <MessageCircle className="w-4 h-4" />
                    {selectedPost.comments} comments
                  </span>
                </div>

                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-4 rounded-lg bg-[#C9A44B] hover:bg-[#B38E37] text-white text-xs tracking-wider uppercase font-semibold transition-colors"
                >
                  <Instagram className="w-3.5 h-3.5" />
                  <span>View on Instagram</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
