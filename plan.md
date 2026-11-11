# Redesign Plan — branch `redesign/modern-visuals`

Goal: stylish, modern, mostly black & white with a touch of gold. Visual redesign first; SEO / a11y / performance / mobile follow as separate branches (see "Later" below).
Workflow: Opus assesses and splits tasks, Sonnet implements. One commit per task, screenshot check (Chromium, 1440px and 390px) before each commit. Merge to `main` = live (GitHub Pages, no CI).

## Opus assessment (2026-11-11)
- Page is HTML5 UP "Dimension" forced into a single scrolling page by a ~190-line inline `<style>` in `<head>` (lots of `!important`). 91 inline `style=""`, teal `#64ffda` hard-coded ~120x across CSS + HTML, purple `#7c9aff` in places.
- "Source Sans Pro" body font is never loaded (falls back to system). Sora is loaded for headings.
- Inline nav script references missing sections (`about`, `timeline`, `work`, `community`) -> console errors. Template `#elements` demo article is dead.
- My Story intro text is duplicated (top paragraph + quote block under Core Expertise).
- Font Awesome loaded 3x (cdnjs CSS, use.fontawesome JS, kit) -> perf task later, don't touch icons now except colour.
- Screenshot tool: `node <scratchpad>/tools/shots.js <prefix> 1440,390` with `python3 -m http.server 8765 --bind 127.0.0.1` running from repo root. Output in `<scratchpad>/shots/`.

**Strategy:** new `assets/css/theme.css` linked as the LAST stylesheet in `<head>` (after the inline `<style>`). All new styling goes there, driven by tokens. When a section is restyled, remove its inline `style=""` attributes and teal/purple inline colours from `index.html` so theme.css wins without `!important` wars. Keep every id/class used by JS (`timelineTrack`, `timeline-card`, `tech-showcase*`, `project*` expander classes, `scroll-reveal*`, `navDropdown`, etc.). Don't refactor JS.

## Design spec — "Noir & Gold"
Reference feel: editorial / luxury studio portfolios: black canvas, huge serif display type, hairline rules, numbered sections, restrained gold.

**Tokens (`:root` in theme.css)**
- `--bg: #0a0a0a`, `--surface: #111111`, `--surface-2: #161616`, `--line: rgba(255,255,255,.08)`, `--line-strong: rgba(255,255,255,.16)`
- `--text: #f5f2ec`, `--text-muted: #a8a49c`, `--text-dim: #6f6c66`
- `--gold: #c9a24b`, `--gold-soft: #e0bd6a`, `--gold-faint: rgba(201,162,75,.12)`
- `--font-display: "Instrument Serif", Georgia, serif` (400 + italic), `--font-body: "Inter", system-ui, sans-serif` (300-600)
- `--radius: 4px` (near-square, no pill shapes), `--ease: cubic-bezier(.2,.7,.2,1)`
- Replace the Sora Google Fonts link with Instrument Serif (ital 0,1) + Inter (300..600), `display=swap`.

**Rules**
- Body: `--bg` everywhere, including below the content (no white area at page bottom). Body text 16-17px, line-height 1.65, `--text-muted`; strong = `--text`.
- Gold is an accent only: section numbers, hairline under headings, active nav, key numbers, link hover, primary button border. Never gold paragraphs or big gold fills.
- No teal, no purple, no glows/neon shadows, no gradient text. Cards = `--surface` + 1px `--line` border, hover -> border `--line-strong` + slight translateY(-2px).
- Section headings: small eyebrow `01 — MY STORY` (Inter, 12px, letter-spacing .2em, gold) above a large serif title (Instrument Serif, clamp(2.5rem, 5vw, 4rem), `--text`, normal case, no letter-spacing).
- Motion subtle: 200-300ms, keep existing scroll-reveal.

## Content to add (from Maxime)
Recent work with **Databricks Genie**: working in Databricks workspaces, managing notebooks, building a migration plan from a data warehouse to Databricks, and developing skills for Genie. Wording stays factual: no metrics or outcomes beyond this.
- [ ] Mileway timeline card: add "Databricks" skill tag + one achievement bullet.
- [ ] Core Expertise > Cloud & Platform: add Databricks next to Microsoft Fabric.
- [ ] New project entry "Databricks Genie & Warehouse Migration" at the TOP of Projects (same markup pattern as other project cards, icon `fas fa-database`).
- Do NOT add Brunch Club Planner. Don't touch `project/`.

## Tasks
**Phase A: foundation + hero + nav** (Sonnet, then Opus review)
- [x] A1. Create `theme.css` with tokens, base (body/html bg, typography, links, buttons, selection colour), swap Google Fonts link. Link it last in `<head>`.
- [x] A2. Hero: remove the template's circle icon + horizontal line; small gold eyebrow "Chapter Lead · Business Intelligence · Amsterdam" (from timeline content), huge serif name (first name `--text`, last name italic or gold-soft), tagline in Inter muted, no quotes/italic caps. Tech showcase strip: transparent bg, hairline top/bottom border, logos grayscale + 60% opacity, full colour on hover.
- [x] A3. Menu button + dropdown + side/staggered nav: black/white with gold active/hover. Square-ish, not pill.

**Phase B: story** (Sonnet, then Opus review)
- [x] B1. Remove grey card look of articles: sections sit on `--bg` with generous padding, max-width ~1100px, numbered eyebrow headings (01 My Story, 02 Projects, 03 Awards, 04 Contact).
- [x] B2. My Story intro + timeline cards (current card: gold top border / gold year), arrows restyled. Databricks additions in Mileway card.
- [x] B3. Core Expertise grid: hairline grid, icons gold, Databricks added. Remove duplicated quote block.

**Phase C: projects -> contact + cleanup** (Sonnet, then Opus review)
- [x] C1. Projects list: rows with hairline separators, serif titles normal case, gold chevron, expanded panel styled. Add Databricks project.
- [x] C2. Awards cards + Contact: serif "Let's connect", gold-outline CV button, monochrome social icons with gold hover. Footer.
- [x] C3. Cleanup: delete `#elements` article; remove inline-script references to missing sections (no console errors); delete inline `<style>` rules now dead (verify by screenshot).
- [x] C4. Full check 1440 / 768 / 390, zero console errors, push branch, open PR (no merge).

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
