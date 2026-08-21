export interface Story {
  id: string;
  title: string;
  category: 'LIFESTYLE' | 'FASHION' | 'BEAUTY' | 'TRENDS' | 'STYLE';
  date: string;
  image: string;
  excerpt: string;
  readTime?: string;
  author?: string;
  fullContent?: string[];
  tags?: string[];
  quote?: string;
  featured?: boolean;
}

export interface HeroSlide {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  tagline?: string;
  image: string;
  category: string;
  linkText?: string;
  accentBadge?: string;
}

export interface FeaturedItem {
  id: string;
  title: string;
  subtitle: string;
  badge: 'FEATURED POSTS' | "EDITOR'S PICKS" | 'LATEST IN FASHION';
  image: string;
  category: string;
}

export interface StyleCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  itemCount: number;
}

export interface InstagramPost {
  id: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
  handle: string;
}

export interface FashionEditItem {
  id: string;
  title: string;
  category: 'FASHION' | 'INSPIRATION' | 'TRAVEL';
  image: string;
  description: string;
}

export type PageView = 'home' | 'fashion' | 'beauty' | 'lifestyle' | 'about' | 'contact' | 'single-story';

export type HeroVariant = 'variant-1' | 'variant-2' | 'variant-3';

export interface SiteConfig {
  siteName: string;
  tagline: string;
  heroVariant: HeroVariant;
  instagramHandle: string;
  established: string;
}
