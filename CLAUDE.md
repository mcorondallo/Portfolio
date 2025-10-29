# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Structure

This is a dual-site portfolio repository containing:

1. **Main Portfolio Site** (root level) - A single-page HTML portfolio showcasing professional work and experience
2. **Embedded React Project** (project/ subdirectory) - "The Brunch Club Planner", a standalone React application

### Main Portfolio Site

A traditional HTML/CSS/JS single-page portfolio with the following sections:
- Header/Intro with scroll-down functionality
- About, Timeline, Work, Projects, Community, Contact sections
- Side navigation that appears on scroll past the intro section
- Custom navigation logic with smooth scrolling and section highlighting

**Key Files:**
- `index.html` - Main portfolio page (contains inline scripts that should eventually be extracted)
- `assets/css/main.css` - Main stylesheet
- `assets/js/main.js` - Core JavaScript functionality
- `assets/js/util.js`, `browser.min.js`, `breakpoints.min.js` - Utility scripts
- `images/` - Portfolio images and assets
- `plan.md` - **Important**: Contains improvement tasks and technical debt items

**Architecture Notes:**
- Navigation uses `getBoundingClientRect()` for accurate section positioning
- Side navigation visibility controlled by scroll position (appears after 70% of intro height)
- Section IDs are hardcoded in navigation scripts: `['about', 'timeline', 'work', 'projects', 'community', 'contact']`
- Many inline styles in HTML should be extracted to CSS (see plan.md)

### React Project (Brunch Club Planner)

Location: `project/` subdirectory

**Tech Stack:**
- React 18.3 + TypeScript
- Vite for build tooling
- Tailwind CSS for styling
- Lucide React for icons

**Commands (run from project/ directory):**
```bash
cd project
npm install       # Install dependencies
npm run dev       # Start development server
npm run build     # Build for production
npm run preview   # Preview production build
npm run lint      # Run ESLint
```

**Architecture:**
- Component-based structure in `src/components/`:
  - `Header.tsx` - Top navigation
  - `Features.tsx` - Feature grid display
  - `PhotoAlbum.tsx` - Image gallery
  - `Articles.tsx`, `UpcomingBrunches.tsx` - Content sections
  - `Footer.tsx` - Footer component
- `src/data/articles.ts` - Article data
- `src/types/article.ts` - TypeScript type definitions
- `src/App.tsx` - Main app component with hero section and layout
- `dist/` - Production build output

The app is a weekly planner for friends to coordinate meetups in Amsterdam, linking to a shared Google Sheets planner.

## Development Workflow

**For Main Portfolio:**
- Edit `index.html` directly for content changes
- CSS changes in `assets/css/main.css`
- JavaScript changes in `assets/js/main.js` or inline scripts
- No build step required - open index.html in browser
- Refer to `plan.md` for pending improvements and refactoring tasks

**For React Project:**
- Run `npm run dev` from `project/` directory
- Changes hot-reload automatically
- Build before deploying: `npm run build`
- Output goes to `project/dist/`

## Important Notes

- **plan.md** contains critical improvement tasks including:
  - Extracting inline styles and scripts
  - Accessibility improvements (lang attribute, alt text, ARIA labels)
  - Performance optimizations (lazy loading, minification)
  - Responsiveness fixes for mobile breakpoints
  - Code organization (moving inline scripts to separate files)

- The main portfolio site uses jQuery - it's loaded via `assets/js/jquery.min.js`

- The React project is completely independent from the main portfolio - they don't share dependencies or build processes
