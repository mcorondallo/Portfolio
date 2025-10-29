# Portfolio Improvement Plan

This document tracks pending enhancements, corrections and sensible additions found during the overall review of the portfolio project.  Use the checkboxes to mark completed items.

## Styling & Structure
- [ ] Extract remaining inline `style="..."` attributes in `index.html` to the main stylesheet (`assets/css/main.css`) for cleaner markup and easier maintenance.
- [ ] Ensure all `<article>` elements share the helper class `strength-category` and that duplicated inline `style="display: block;"` declarations are removed.
- [ ] Add a global **dark-theme** variable in CSS (e.g. `:root { --bg-dark: #000; }`) and replace hard-coded colors for maintainability.

## Accessibility
- [ ] Add `lang="en"` attribute to the `<html>` tag.
- [ ] Supply descriptive `alt` text for decorative images or mark them with `alt=""` so screen readers ignore them.
- [ ] Add `aria-label` attributes to navigation buttons (e.g. carousel prev/next) and icons.
- [ ] Ensure sufficient color contrast between text and background (AA compliance).

## Performance
- [ ] Add `loading="lazy"` to off-screen `<img>` tags to improve load time.
- [ ] Minify CSS/JS assets in production build.
- [ ] Consider serving modern image formats (`webp`) where possible.

## Responsiveness
- [ ] Re-test on breakpoints < 400 px: verify carousel, hero button, and timeline layout.
- [ ] Replace pixel widths in the carousel with flex-based or %-based sizing to prevent overflow on mobile.

## Code Organization
- [ ] Move the inline carousel script into `assets/js/main.js` (or create `carousel.js`) and import via `<script src>`.
- [ ] Split large `index.html` into partials/templates (header, footer, sections) if moving to a static-site generator in future.

## Content Enhancements
- [ ] Add brief description paragraphs above Projects and Community sections for context.
- [ ] Provide a simple contact form (name, email, message) with Formspree/Netlify Forms for easy outreach.
- [ ] Include social preview (`meta og:*`, `twitter:*`) tags in `<head>` for better sharing.
- [ ] Add a favicon.

## Animation Polish
- [ ] Slow down the timeline glow to `3s` if current speed feels busy; test hover pause on dot.
- [ ] Add a subtle fade-in on scroll for project items using IntersectionObserver.

---

Feel free to modify, add, or tick tasks off as work progresses.
