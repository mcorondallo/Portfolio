# Redesign Plan — branch `redesign/modern-visuals`

Goal: stylish, modern, mostly black & white with a touch of gold. Visual redesign first; SEO / a11y / performance / mobile follow as separate branches (see "Later" below).
Workflow: Opus assesses and splits tasks, Sonnet implements. One commit per task, screenshot check (Chromium, 1440px and 390px) before each commit. Merge to `main` = live (GitHub Pages, no CI).

## Design direction (agreed with Maxime)
- **Palette:** near-black background (`#0a0a0a`), off-white text (`#f5f2ec`), muted grey for secondary text, **gold accent used sparingly** (`#c9a24b`, hover `#e0bd6a`) for hairlines, key numbers, active nav, buttons. Replaces the current teal `#64ffda` accent. Define all as CSS variables on `:root`.
- **Type:** pair a refined display face (e.g. Sora already loaded, or Fraunces/Playfair for editorial headings) with a clean body face (Inter). Large, tight-tracked headings; generous whitespace.
- **Style:** thin gold dividers, subtle borders instead of heavy cards, smooth hover/scroll-reveal, no gradients or glow overload. Keep existing JS behaviours (timeline, tech carousel, project expander) unless a task says otherwise.
- **Do not add** the Brunch Club Planner (`project/` stays untouched and unlinked).

## Content to add (from Maxime)
Recent work with **Databricks Genie**: working in Databricks workspaces, managing notebooks, building a migration plan from a data warehouse to Databricks, and developing skills (Genie / agent skills) for it. Wording stays factual: no metrics or outcomes beyond this.
- [ ] Mileway timeline card: add "Databricks" skill tag + one achievement bullet.
- [ ] Core Expertise > Cloud & Platform: mention Databricks next to Fabric.
- [ ] New project entry "Databricks Genie & Warehouse Migration" in Projects (use the existing project-card pattern).

## Tasks (in order)
- [ ] 1. Design tokens: CSS variables (colors, fonts, spacing), swap font link in `<head>`, base typography and body background.
- [ ] 2. Hero: name typography, intro, scroll cue, tech showcase strip restyled.
- [ ] 3. Side/top navigation restyle (gold active state).
- [ ] 4. About / My Story + Core Expertise grid.
- [ ] 5. Timeline cards (horizontal scroller) restyle + Databricks additions.
- [ ] 6. Projects grid/cards + expander + Databricks project.
- [ ] 7. Awards, Community, Contact ("Let's Connect") + footer.
- [ ] 8. Cleanup: remove unused template "Elements" block and dead CSS only if verified unused; extract inline `style=""` touched by the redesign.
- [ ] 9. Full pass: screenshots at 1440 / 768 / 390, check all JS features, then push branch and open PR.

---

# Later (separate branches)
## Original improvement backlog

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
