# CYBERSPLASH

Luxury fashion & lifestyle editorial magazine. Modern style stories, curated looks, and seasonal trends.

## Tech Stack

- **React 19** + **Vite 6**
- **Tailwind CSS 4**
- **TypeScript**
- **@google/genai** – Gemini API integration
- **Express** – Server framework
- **lucide-react** – Icons
- **motion** – Animation library

## Scripts

| Command | Description |
|---------|-------------|
| `dev` | Start dev server at `:3000` |
| `build` | Build for production |
| `preview` | Preview production build |
| `clean` | Remove dist & server.js |
| `lint` | Type-check with tsc |

## Data Sources

- **stories** – 9 editorial pieces across LIFESTYLE/FASHION/BEAUTY/TRENDS/STYLE
- **heroSlides** – 3 carousel slides with taglines
- **featuredItems** – 3 featured post cards
- **styleCategories** – 3 category filters
- **instagramPosts** – 4 sample posts
- **fashionEdits** – 3 content edit sections

## UI Features

- Sticky header with gold navigation ribbon
- Hero image slider
- Featured article cards
- Story modal with save/bookmark/share
- Category navigation (fashion/beauty/lifestyle)
- Bookmark drawer with localStorage persistence
- Gold/rose luxury color palette
- Cormorant Garamond editorial typography

## Project Structure

```
src/
  data/      – JSON data files (stories, slides, categories, etc.)
  types/     – TypeScript interfaces
  pages/     – Page components (Home, Fashion, Beauty, Lifestyle, About, Contact)
  components/ – Reusable UI (Header, Footer, StoryModal, SearchModal, BookmarkDrawer, etc.)
  App.tsx    – Root app with page routing & state
  main.tsx   – Entry point
```