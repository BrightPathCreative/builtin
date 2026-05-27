# Built In. Melbourne — Design Instructions for Cursor
**Frontend Design Specification**
*Based on frontend-design skill · builtinmelbourne.com.au*

---

## 1. Design Direction

### The Single Brief
This site should feel like a page from **Habitus** or **Vogue Living** — not a builder's website. Josh's clients are architects, interior designers, and homeowners who already consume high-end architectural media. The design must earn their respect before a word is read.

### Aesthetic Direction: Refined Editorial Luxury
Not minimal for its own sake. Not maximalist for impact. **Editorial luxury with architectural restraint** — the aesthetic of a high-end architecture monograph. Generous negative space. Typography that commands. Photography that breathes.

### Purpose & Audience
- Attracting architects and designers to refer their clients to Josh
- Converting premium homeowners researching high-spec builders
- Signalling that Built In. Melbourne operates at the same level as the design teams it collaborates with

### The One Unforgettable Thing
Every page should feel like the photography was shot for a magazine and the type was set by someone who knows what a grid is. **The projects are the product. The design's job is to frame them, not compete with them.**

### What to Actively Avoid
- Any pattern that looks like a tradie website, service business, or Wix template
- Icon-heavy "features" sections
- Cards with drop shadows and heavy rounded corners (exception: testimonial cards use `--radius-soft` only)
- Progress bars, star ratings, or testimonial sliders
- Purple gradients, generic geometric backgrounds, stock photography feel
- Fonts: Inter, Roboto, Arial, Poppins, Montserrat, Space Grotesk
- Anything that looks like it was assembled from a UI kit

---

## 2. Typography System

### Font Pairing

**Display / Headings:** Cormorant Garamond
- Source: Google Fonts (`https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;1,300;1,400&display=swap`)
- Character: Thin, elegant, editorial. Used in architectural and fashion publishing. Has genuine presence at large sizes. The italic weight is particularly striking.
- Use for: H1, large pull quotes, hero headlines, section openers

**Body / UI:** Jost
- Source: Google Fonts (`https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500&display=swap`)
- Character: Geometric, clean, slightly cold. Feels considered rather than neutral. Works for body copy, labels, navigation, metadata.
- Use for: Body paragraphs, nav links, button text, captions, form labels, trust bar stats

### Type Scale (rem)

```css
:root {
  --text-xs:   0.75rem;   /* 12px — labels, legal */
  --text-sm:   0.875rem;  /* 14px — captions, metadata */
  --text-base: 1rem;      /* 16px — body copy */
  --text-lg:   1.125rem;  /* 18px — lead paragraphs */
  --text-xl:   1.375rem;  /* 22px — small headings */
  --text-2xl:  1.75rem;   /* 28px — H3 */
  --text-3xl:  2.25rem;   /* 36px — H2 */
  --text-4xl:  3rem;      /* 48px — H2 large */
  --text-5xl:  4rem;      /* 64px — H1 desktop */
  --text-6xl:  6rem;      /* 96px — hero display */
  --text-7xl:  8rem;      /* 128px — editorial oversized */
}
```

### Typography Rules

```css
/* Display headlines — Cormorant Garamond */
h1, h2, .display {
  font-family: 'Cormorant Garamond', Georgia, serif;
  font-weight: 300;
  letter-spacing: -0.02em;
  line-height: 1.05;
}

/* Hero H1 — oversized, light weight */
.hero-headline {
  font-size: clamp(3rem, 8vw, 7rem);
  font-weight: 300;
  font-style: italic; /* Key: italic Cormorant is exceptional */
  line-height: 1.0;
  letter-spacing: -0.03em;
}

/* Section H2 */
h2 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  font-weight: 300;
}

/* H3 — use Jost, uppercase tracked, small */
h3 {
  font-family: 'Jost', sans-serif;
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
}

/* Body — Jost, regular weight */
body, p {
  font-family: 'Jost', sans-serif;
  font-weight: 300;
  font-size: var(--text-base);
  line-height: 1.7;
  letter-spacing: 0.01em;
}

/* Labels / overlines above headings */
.label {
  font-family: 'Jost', sans-serif;
  font-size: var(--text-xs);
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-brass);
}
```

---

## 3. Colour System

### Palette

Brand colours are taken directly from the official logo (`/images/brand/logo.png`):

| Token | Hex | Usage |
|---|---|---|
| `--color-brand-cream` | `#EFEDE9` | Logo background, page background, header background, text on dark sections |
| `--color-brand-green` | `#5B5E41` | Logo wordmark, primary accent, buttons, links, eyebrows, nav links |

Supporting tones remain warm and architectural — charcoal dark sections, cream-led light sections, green accents throughout. No blue. No corporate neutrals.

```css
:root {
  /* Brand — source of truth from logo */
  --color-brand-cream:       #EFEDE9;
  --color-brand-green:       #5B5E41;
  --color-brand-green-light: #73765A;  /* hover / on dark backgrounds */
  --color-brand-green-dark:  #4A4D35;  /* pressed / secondary text on cream */

  /* Backgrounds */
  --color-bg:           var(--color-brand-cream);
  --color-bg-dark:      #111210;  /* near-black — footer, dark sections */
  --color-bg-mid:       #E6E3DE;  /* slightly deeper cream — alternate sections */
  --color-bg-card:      var(--color-brand-cream);

  /* Text */
  --color-text:         #1A1916;
  --color-text-muted:   #6B6860;
  --color-text-light:   #9E9B95;
  --color-text-inverse: var(--color-brand-cream);

  /* Accent aliases — map legacy brass tokens to brand green */
  --color-brass:        var(--color-brand-green);
  --color-brass-light:  var(--color-brand-green-light);
  --color-brass-dark:   var(--color-brand-green-dark);

  /* Lines & Borders */
  --color-line:         #DCD8D2;
  --color-line-dark:    #2C2B29;

  /* States */
  --color-focus:        var(--color-brand-green);

  /* Shape */
  --radius-soft:        11px;
}
```

### Logo & Header

- Logo file: `/images/brand/logo.png` — cream background with green wordmark. **Never apply CSS filters** (no invert/brightness hacks).
- Header background: `--color-brand-cream` (`#EFEDE9`) at all times, matching the logo plate.
- Nav links: `--color-brand-green`, uppercase tracked Jost.
- On scroll: subtle `--color-line` bottom border only — header stays cream.

### Dark / Light Section Pattern

Alternate between `--color-bg` (warm white) and `--color-bg-dark` (near-black) sections for visual rhythm. Never use pure #FFFFFF or #000000.

| Section | Background | Text |
|---|---|---|
| Hero | Dark or image overlay | Inverse (warm white) |
| About teaser | Warm white | Dark |
| Services overview | Brand green | Dark |
| Featured projects | Warm white | Dark |
| Testimonials | Dark | Inverse |
| FAQ | Dark | Inverse |
| Footer | Dark | Inverse |

---

## 4. Spacing System

```css
:root {
  --space-1:   0.25rem;   /* 4px */
  --space-2:   0.5rem;    /* 8px */
  --space-3:   0.75rem;   /* 12px */
  --space-4:   1rem;      /* 16px */
  --space-6:   1.5rem;    /* 24px */
  --space-8:   2rem;      /* 32px */
  --space-12:  3rem;      /* 48px */
  --space-16:  4rem;      /* 64px */
  --space-20:  5rem;      /* 80px */
  --space-24:  6rem;      /* 96px */
  --space-32:  8rem;      /* 128px */
  --space-40:  10rem;     /* 160px */
  --space-48:  12rem;     /* 192px */

  /* Section vertical padding */
  --section-padding-y: clamp(5rem, 10vw, 10rem);

  /* Container */
  --container-max: 1440px;
  --container-pad: clamp(1.5rem, 5vw, 6rem);
}

/* Generous section breathing room — do not compress */
section {
  padding-block: var(--section-padding-y);
}
```

---

## 5. Layout System

### Grid

Use a flexible editorial grid, not a rigid 12-column Bootstrap grid.

```css
.container {
  max-width: var(--container-max);
  margin-inline: auto;
  padding-inline: var(--container-pad);
}

/* Editorial asymmetric grid — text left, image right (or reverse) */
.editorial-grid {
  display: grid;
  grid-template-columns: 1fr 1.5fr; /* deliberately uneven */
  gap: var(--space-16);
  align-items: center;
}

/* Services hub — 3 columns with breathing room */
.services-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1px; /* hairline dividers between tiles */
  background-color: var(--color-line);
}

/* Projects overview — 2 columns with large cards */
.projects-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-8);
}

@media (max-width: 768px) {
  .editorial-grid,
  .projects-grid { grid-template-columns: 1fr; }
  .services-grid { grid-template-columns: 1fr; }
}
```

### Key Layout Principles
- Column gutters are wide — design breathes, never feels cramped
- Text columns max 65ch for readability
- Images bleed to container edge or beyond on one side
- Section transitions: full-width colour change (no boxed content)

---

## 6. Navigation

### Desktop Nav
- Fixed position, transparent over hero, transitions to solid dark on scroll
- Logo: "Built In. Melbourne" set in Cormorant Garamond, 300 weight, letter-spacing normal
- Nav links: Jost, uppercase, 11px, 0.15em letter-spacing
- Services link: on hover reveals a minimal dropdown (no mega menu)
- CTA: "Discuss Your Project" — small, brass-coloured, no fill button with underline or thin border. Not a bold pill button.
- No hamburger animation overkill on mobile

```css
.nav {
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 100;
  padding: var(--space-6) var(--container-pad);
  display: flex;
  align-items: center;
  justify-content: space-between;
  transition: background-color 0.4s ease, backdrop-filter 0.4s ease;
}

.nav--scrolled {
  background-color: rgba(17, 18, 16, 0.95);
  backdrop-filter: blur(8px);
}

.nav-logo {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 300;
  letter-spacing: 0.05em;
  color: var(--color-text-inverse);
  text-decoration: none;
}

.nav-link {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-inverse);
  opacity: 0.75;
  transition: opacity 0.2s ease;
  text-decoration: none;
}
.nav-link:hover { opacity: 1; }

.nav-cta {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-brass-light);
  border-bottom: 1px solid var(--color-brass);
  padding-bottom: 2px;
  text-decoration: none;
  transition: color 0.2s ease, border-color 0.2s ease;
}
.nav-cta:hover {
  color: var(--color-brass-light);
  border-color: var(--color-brass-light);
}
```

### Mobile Nav
- Full-screen overlay, dark background
- Links large (Cormorant, ~2.5rem), vertical stacked
- CTA at bottom
- Close button top-right (×, not hamburger animation)

---

## 7. Hero Section

### Visual Approach
Full-viewport-height hero. Photography fills the entire frame — no cropping, no sidebar. Text overlaid at bottom-left (not centred). Dark gradient from bottom to protect text legibility.

### Layout
```
[full-bleed photography — 100vw × 100vh]
[gradient overlay: transparent top → rgba(0,0,0,0.7) bottom]

Bottom-left:
  [label — JOST UPPERCASE BRASS]
  [H1 — CORMORANT ITALIC 300 — 2–3 lines — warm white]
  [trust line — JOST 300 small — warm white 60% opacity]
  [CTA — brass underline button]
```

### CSS

```css
.hero {
  position: relative;
  height: 100svh;
  min-height: 600px;
  overflow: hidden;
  background-color: var(--color-bg-dark);
}

.hero-image {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  /* Subtle Ken Burns on load */
  animation: heroScale 12s ease-out forwards;
}

@keyframes heroScale {
  from { transform: scale(1.05); }
  to   { transform: scale(1.0); }
}

.hero-gradient {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    transparent 30%,
    rgba(11, 11, 10, 0.3) 60%,
    rgba(11, 11, 10, 0.85) 100%
  );
}

.hero-content {
  position: absolute;
  bottom: var(--space-16);
  left: var(--container-pad);
  max-width: 680px;
  /* Animate in with stagger */
  animation: heroFadeUp 1s ease-out 0.3s both;
}

@keyframes heroFadeUp {
  from {
    opacity: 0;
    transform: translateY(2rem);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.hero-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  font-weight: 500;
  letter-spacing: 0.25em;
  text-transform: uppercase;
  color: var(--color-brass-light);
  margin-bottom: var(--space-4);
  animation: heroFadeUp 1s ease-out 0.1s both;
}

.hero-headline {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(2.8rem, 6.5vw, 6.5rem);
  font-weight: 300;
  font-style: italic;
  line-height: 1.0;
  letter-spacing: -0.02em;
  color: var(--color-text-inverse);
  margin-bottom: var(--space-6);
}

.hero-trust {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 300;
  letter-spacing: 0.12em;
  color: rgba(247, 245, 241, 0.55);
  text-transform: uppercase;
  margin-bottom: var(--space-8);
}

/* Scroll indicator — subtle animated line */
.hero-scroll {
  position: absolute;
  bottom: var(--space-8);
  right: var(--container-pad);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--space-2);
  color: rgba(247, 245, 241, 0.4);
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.hero-scroll-line {
  width: 1px;
  height: 60px;
  background: linear-gradient(to bottom, transparent, rgba(168, 138, 94, 0.6));
  animation: scrollLine 2s ease-in-out infinite;
}

@keyframes scrollLine {
  0%, 100% { transform: scaleY(0); transform-origin: top; }
  50% { transform: scaleY(1); transform-origin: top; }
}
```

---

## 8. Trust Bar

Minimal horizontal strip. No icons. Numbers only. Between hero and first content section.

```css
.trust-bar {
  background-color: var(--color-bg-dark);
  border-top: 1px solid var(--color-line-dark);
  padding: var(--space-6) var(--container-pad);
  display: flex;
  gap: var(--space-16);
  align-items: center;
  overflow-x: auto;
}

.trust-item {
  display: flex;
  flex-direction: column;
  gap: var(--space-1);
  white-space: nowrap;
}

.trust-number {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.75rem;
  font-weight: 300;
  color: var(--color-text-inverse);
  line-height: 1;
}

.trust-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  /* muted on dark */
  color: rgba(247, 245, 241, 0.4);
}

/* Dividers between items */
.trust-item + .trust-item {
  padding-left: var(--space-16);
  border-left: 1px solid var(--color-line-dark);
}
```

**Content:**
```
16           DB-U 45446           CDB-U 58374         Fully Insured
Years        Registered Builder   Company Licence      Built In. Melbourne Pty Ltd
```

---

## 9. Buttons & CTAs

No pill buttons. No heavy fills. The brand is restrained.

```css
/* Primary CTA — brass underline, no fill */
.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-brass-light);
  text-decoration: none;
  border-bottom: 1px solid var(--color-brass);
  padding-bottom: 3px;
  transition: all 0.25s ease;
}

.btn-primary::after {
  content: '→';
  transition: transform 0.25s ease;
}

.btn-primary:hover {
  color: var(--color-brass-light);
  border-color: var(--color-brass-light);
}
.btn-primary:hover::after {
  transform: translateX(4px);
}

/* Secondary — dark fill, for dark sections */
.btn-secondary {
  display: inline-flex;
  align-items: center;
  gap: var(--space-3);
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-inverse);
  border: 1px solid rgba(247, 245, 241, 0.25);
  padding: var(--space-3) var(--space-6);
  text-decoration: none;
  transition: all 0.25s ease;
}
.btn-secondary:hover {
  border-color: var(--color-brass);
  color: var(--color-brass-light);
}

/* Form submit — full brass fill */
.btn-submit {
  font-family: 'Jost', sans-serif;
  font-size: 0.72rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  background-color: var(--color-brass);
  color: var(--color-bg-dark);
  border: none;
  padding: var(--space-4) var(--space-8);
  cursor: pointer;
  transition: background-color 0.25s ease;
}
.btn-submit:hover { background-color: var(--color-brass-light); }
```

---

## 10. Featured Projects (Homepage)

### 3 project cards — editorial asymmetric layout

Not uniform cards. Two large (one taller, one wider), one small. Creates visual tension.

```css
.featured-projects {
  display: grid;
  grid-template-columns: 1.4fr 1fr;
  grid-template-rows: auto auto;
  gap: var(--space-4);
  padding-inline: var(--container-pad);
}

/* Card 1 — spans 2 rows, left column */
.project-card:first-child {
  grid-row: 1 / 3;
}

/* Card 2 — top right */
.project-card:nth-child(2) {
  grid-row: 1;
}

/* Card 3 — bottom right, shorter */
.project-card:nth-child(3) {
  grid-row: 2;
}

.project-card {
  position: relative;
  overflow: hidden;
  background-color: var(--color-bg-card);
  cursor: pointer;
}

/* Image container — full bleed */
.project-card-image {
  width: 100%;
  aspect-ratio: 3/4; /* portrait — architectural photography standard */
  object-fit: cover;
  display: block;
  transition: transform 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.project-card:first-child .project-card-image {
  aspect-ratio: 2/3;
}

.project-card:hover .project-card-image {
  transform: scale(1.04);
}

/* Card content — below image */
.project-card-content {
  padding: var(--space-6) var(--space-6) var(--space-8);
  background-color: var(--color-bg);
}

.project-card-type {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-brass);
  margin-bottom: var(--space-2);
}

.project-card-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.4rem;
  font-weight: 300;
  color: var(--color-text);
  margin-bottom: var(--space-3);
  line-height: 1.2;
}

.project-card-excerpt {
  font-family: 'Jost', sans-serif;
  font-size: 0.82rem;
  font-weight: 300;
  color: var(--color-text-muted);
  line-height: 1.6;
  margin-bottom: var(--space-4);
}
```

---

## 11. Projects Gallery Page

### Full-bleed card grid

2 columns on desktop, 1 on mobile. Cards are large — image dominant. Text minimal.

```css
.projects-gallery {
  padding: var(--space-16) var(--container-pad);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--space-4);
}

/* Project card — image only, text on hover */
.gallery-card {
  position: relative;
  overflow: hidden;
  aspect-ratio: 4/5;
  background-color: var(--color-bg-dark);
}

.gallery-card-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: transform 0.9s cubic-bezier(0.25, 0.46, 0.45, 0.94),
              opacity 0.4s ease;
}

/* Overlay — hidden until hover */
.gallery-card-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to top, rgba(11,11,10,0.9) 0%, rgba(11,11,10,0.2) 50%, transparent 100%);
  opacity: 0;
  transition: opacity 0.4s ease;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  padding: var(--space-8);
}

.gallery-card:hover .gallery-card-image { transform: scale(1.05); }
.gallery-card:hover .gallery-card-overlay { opacity: 1; }

.gallery-card-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.6rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: var(--color-brass-light);
  margin-bottom: var(--space-2);
}

.gallery-card-name {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.6rem;
  font-weight: 300;
  font-style: italic;
  color: var(--color-text-inverse);
  line-height: 1.1;
  margin-bottom: var(--space-4);
}

.gallery-card-link {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  color: var(--color-brass-light);
  text-decoration: none;
  border-bottom: 1px solid var(--color-brass);
  padding-bottom: 2px;
  display: inline-block;
}
```

---

## 12. Individual Project Pages

### Layout: full-bleed hero → details bar → copy → masonry gallery

```
[FULL-BLEED HERO IMAGE — 100vh]
[PROJECT DETAILS BAR — horizontal, thin]
[H1 — large Cormorant Garamond italic]
[2-column text layout — copy left, standout details right]
[FULL-BLEED PHOTO GALLERY — masonry or even grid]
[NAVIGATION — ← Back to Projects   Discuss Your Project →]
```

### Project Details Bar
```css
.project-details-bar {
  background-color: var(--color-bg-dark);
  padding: var(--space-6) var(--container-pad);
  display: flex;
  gap: var(--space-12);
  border-bottom: 1px solid var(--color-line-dark);
}

.project-detail {
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.project-detail-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.58rem;
  font-weight: 500;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(247, 245, 241, 0.35);
}

.project-detail-value {
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  color: var(--color-text-inverse);
  letter-spacing: 0.03em;
}
```

### Project Gallery — Masonry
```css
.project-gallery {
  columns: 2;
  column-gap: var(--space-3);
  padding: var(--space-16) var(--container-pad);
}

.project-gallery-item {
  break-inside: avoid;
  margin-bottom: var(--space-3);
  overflow: hidden;
  cursor: pointer;
}

.project-gallery-item img {
  width: 100%;
  display: block;
  transition: transform 0.6s ease;
}
.project-gallery-item:hover img { transform: scale(1.03); }

@media (max-width: 768px) {
  .project-gallery { columns: 1; }
}
```

---

## 13. Services Section (Homepage Tiles)

Three tiles — not cards with icons. Text-forward, architectural. Brand green background with black type.

```css
.services-section {
  background: var(--color-brand-green);
  color: var(--color-text);
  padding: clamp(4rem, 8vw, 6rem) clamp(2.5rem, 10vw, 7rem);
}

.services-tiles {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-width: 68rem;
  margin: 0 auto;
  border-top: 1px solid rgb(26 25 22 / 12%);
  border-bottom: 1px solid rgb(26 25 22 / 12%);
}

.service-tile {
  padding: clamp(2rem, 4vw, 2.75rem) clamp(1.75rem, 2.5vw, 2.25rem);
  border-right: 1px solid rgb(26 25 22 / 12%);
  position: relative;
  transition: background-color 0.3s ease;
}
.service-tile:last-child { border-right: none; }

.service-tile::after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 2px;
  background-color: var(--color-text);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.4s ease;
}
.service-tile:hover::after { transform: scaleX(1); }

.service-tile-title {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.35rem, 2.5vw, 1.5rem);
  font-weight: 300;
  color: var(--color-text);
  line-height: 1.2;
}

.service-tile-excerpt {
  font-family: 'Jost', sans-serif;
  font-size: 0.9rem;
  font-weight: 300;
  color: rgb(26 25 22 / 72%);
  line-height: 1.7;
}
```

---

## 14. About Section

Two-column editorial layout. No photo of Josh at launch (client to supply). If photo available, left column: image, right: text. If not: text-forward with a large pull quote.

```css
.about-editorial {
  display: grid;
  grid-template-columns: 1fr 1.3fr;
  gap: var(--space-20);
  align-items: start;
  padding: var(--section-padding-y) var(--container-pad);
}

/* If no photo: span full width with pull quote */
.about-pullquote {
  font-family: 'Cormorant Garamond', serif;
  font-size: clamp(1.8rem, 3.5vw, 3rem);
  font-weight: 300;
  font-style: italic;
  color: var(--color-text);
  line-height: 1.15;
  border-left: 2px solid var(--color-brass);
  padding-left: var(--space-8);
  margin-bottom: var(--space-12);
}
```

---

## 15. FAQ Section

No accordion. Questions and answers stacked — the content is short enough. Minimal, legible.

```css
.faq-section {
  background-color: var(--color-bg-dark);
  padding: var(--section-padding-y) var(--container-pad);
}

.faq-list {
  max-width: 720px;
  margin-inline: auto;
  display: flex;
  flex-direction: column;
  gap: 0;
}

.faq-item {
  border-bottom: 1px solid var(--color-line-dark);
  padding-block: var(--space-8);
}

details.faq-item > summary {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.2rem;
  font-weight: 400;
  color: var(--color-text-inverse);
  cursor: pointer;
  list-style: none;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--space-4);
}

details.faq-item > summary::after {
  content: '+';
  font-family: 'Jost', sans-serif;
  font-size: 1.2rem;
  color: var(--color-brass);
  flex-shrink: 0;
  transition: transform 0.3s ease;
}

details.faq-item[open] > summary::after {
  transform: rotate(45deg);
}

.faq-answer {
  font-family: 'Jost', sans-serif;
  font-size: 0.875rem;
  font-weight: 300;
  color: rgba(247, 245, 241, 0.6);
  line-height: 1.75;
  padding-top: var(--space-4);
  max-width: 620px;
}
```

---

## 16. Contact Form

Minimal. No boxes or card containers. Fields are underline-only — no full borders.

```css
.contact-form {
  max-width: 640px;
}

.form-field {
  margin-bottom: var(--space-8);
}

.form-label {
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.62rem;
  font-weight: 500;
  letter-spacing: 0.18em;
  text-transform: uppercase;
  color: var(--color-text-muted);
  margin-bottom: var(--space-2);
}

.form-input,
.form-select,
.form-textarea {
  width: 100%;
  font-family: 'Jost', sans-serif;
  font-size: 0.95rem;
  font-weight: 300;
  color: var(--color-text);
  background: transparent;
  border: none;
  border-bottom: 1px solid var(--color-line);
  padding: var(--space-3) 0;
  outline: none;
  transition: border-color 0.2s ease;
  border-radius: 0;
  -webkit-appearance: none;
}

.form-input:focus,
.form-select:focus,
.form-textarea:focus {
  border-color: var(--color-brass);
}

.form-textarea { resize: vertical; min-height: 120px; }

/* Two-column grid for some fields */
.form-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-6);
}

@media (max-width: 640px) {
  .form-row { grid-template-columns: 1fr; }
}
```

---

## 17. Footer

Dark, structured, restrained. Brass accents on key info only.

```css
.footer {
  background-color: var(--color-bg-dark);
  border-top: 1px solid var(--color-line-dark);
  padding: var(--space-16) var(--container-pad) var(--space-8);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.5fr 1fr 1fr;
  gap: var(--space-12);
  margin-bottom: var(--space-16);
  padding-bottom: var(--space-16);
  border-bottom: 1px solid var(--color-line-dark);
}

.footer-brand {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-weight: 300;
  color: var(--color-text-inverse);
  margin-bottom: var(--space-4);
}

.footer-credentials {
  font-family: 'Jost', sans-serif;
  font-size: 0.7rem;
  font-weight: 300;
  color: rgba(247, 245, 241, 0.35);
  line-height: 1.8;
  letter-spacing: 0.05em;
}

.footer-credentials strong {
  color: rgba(247, 245, 241, 0.6);
  font-weight: 400;
}

.footer-nav-label {
  font-family: 'Jost', sans-serif;
  font-size: 0.58rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  color: rgba(247, 245, 241, 0.3);
  margin-bottom: var(--space-4);
}

.footer-nav-link {
  display: block;
  font-family: 'Jost', sans-serif;
  font-size: 0.8rem;
  font-weight: 300;
  color: rgba(247, 245, 241, 0.55);
  text-decoration: none;
  line-height: 2.2;
  transition: color 0.2s ease;
}
.footer-nav-link:hover { color: var(--color-brass-light); }

.footer-email {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  font-style: italic;
  color: var(--color-text-inverse);
  text-decoration: none;
  border-bottom: 1px solid var(--color-line-dark);
  padding-bottom: 2px;
  transition: border-color 0.2s ease, color 0.2s ease;
  display: inline-block;
  margin-bottom: var(--space-4);
}
.footer-email:hover {
  color: var(--color-brass-light);
  border-color: var(--color-brass);
}

.footer-bottom {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-copyright {
  font-family: 'Jost', sans-serif;
  font-size: 0.65rem;
  color: rgba(247, 245, 241, 0.2);
  letter-spacing: 0.05em;
}
```

---

## 18. Scroll Animations

Use `IntersectionObserver` — no animation library needed for this restrained aesthetic.

```javascript
// Scroll reveal — fade up
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('[data-reveal]').forEach(el => observer.observe(el));
```

```css
/* Base state — invisible */
[data-reveal] {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.8s ease, transform 0.8s ease;
}

/* Stagger delay variants */
[data-reveal][data-delay="1"] { transition-delay: 0.1s; }
[data-reveal][data-delay="2"] { transition-delay: 0.2s; }
[data-reveal][data-delay="3"] { transition-delay: 0.35s; }
[data-reveal][data-delay="4"] { transition-delay: 0.5s; }

/* Visible state */
[data-reveal].is-visible {
  opacity: 1;
  transform: translateY(0);
}

/* Image curtain reveal — more dramatic */
[data-reveal="curtain"] {
  clip-path: inset(0 0 100% 0);
  opacity: 1;
  transform: none;
  transition: clip-path 1s cubic-bezier(0.77, 0, 0.175, 1);
}
[data-reveal="curtain"].is-visible {
  clip-path: inset(0 0 0% 0);
}
```

---

## 19. Image Treatment

### Philosophy
Photography is the most important design element on this site. Every image decision should treat the photos as editorial rather than decorative.

```css
/* Project gallery images — square corners, no drop shadows */
.project-image {
  border-radius: 0;
  box-shadow: none;
  display: block;
  width: 100%;
}

/* Testimonial cards and paired imagery — softened corners only */
.testimonial-stack__card,
.testimonial-stack__figure {
  border-radius: var(--radius-soft); /* 11px */
}

/* Subtle warm overlay on all project photography */
/* Adds cohesion across different photo sources */
.project-image-wrap {
  position: relative;
  overflow: hidden;
}

.project-image-wrap::after {
  content: '';
  position: absolute;
  inset: 0;
  background: rgba(91, 94, 65, 0.04); /* very subtle brand green tint */
  pointer-events: none;
}
```

### next/image Component Pattern (Next.js)
```tsx
<div className="project-image-wrap">
  <Image
    src="/images/projects/surrey-hills/hero.jpg"
    alt="architectural new build surrey hills — polished concrete kitchen — built in melbourne"
    width={1200}
    height={800}
    className="project-image"
    priority={isHero}  // true for hero only
    sizes="(max-width: 768px) 100vw, 50vw"
  />
</div>
```

---

## 19a. Testimonials Section

Dark section with a click-to-focus card stack, filter pills, and a single paired project image.

### Filter pills

Sentence-case labels, always visible:

- All projects
- Renovations
- Extensions
- New builds

Pills use a pill shape (`border-radius: 999px`) with hairline borders. Active state: brass border + subtle brass tint background.

### Card stack

- Warm card surface (`--color-bg-card`) with `--radius-soft` (11px) corners
- Large brass quotation mark, Cormorant italic quote body
- Expandable long quotes via “Read full letter”
- Inactive cards fan behind the active card; click a peeking card to focus it
- **Next control:** fixed to the bottom-right of the active card — dark near-black button (`rgb(26 25 22 / 92%)`), uppercase “Next” label, animated arrow. This is the primary control for advancing slides (do not rely on hover over stacked cards)

### Paired image

- Single image only, rendered at **75%** of the card height/width within the right column
- Same `--radius-soft` (11px) corner radius via overflow hidden on the figure
- Optional gradient overlay + project link button at the bottom when `projectSlug` is set
- Image column is narrower than the card column (`~1.15fr / 0.85fr` grid split)

### Mobile

- Single active card + filter pills + dot/arrow controls below
- Touch swipe supported on the layout container

---

## 20. Lightbox (Project Gallery)

Use `yet-another-react-lightbox` for project gallery pages.

```bash
npm install yet-another-react-lightbox
```

```tsx
import Lightbox from 'yet-another-react-lightbox';
import 'yet-another-react-lightbox/styles.css';

// Override lightbox colours to match brand
// In global CSS:
.yarl__root {
  --yarl__color_backdrop: rgba(11, 11, 10, 0.97);
}
.yarl__button {
  color: var(--color-brass-light);
}
```

---

## 21. Custom Cursor (Desktop only)

A premium brand signal. Small dot cursor with subtle grow effect on hover over images.

```javascript
// Only init on non-touch devices
if (!window.matchMedia('(hover: none)').matches) {
  const cursor = document.createElement('div');
  cursor.className = 'cursor';
  document.body.appendChild(cursor);

  document.addEventListener('mousemove', (e) => {
    cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
  });

  document.querySelectorAll('a, button, [data-cursor-expand]').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor--expand'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--expand'));
  });

  document.querySelectorAll('.project-card, .gallery-card').forEach(el => {
    el.addEventListener('mouseenter', () => cursor.classList.add('cursor--project'));
    el.addEventListener('mouseleave', () => cursor.classList.remove('cursor--project'));
  });
}
```

```css
* { cursor: none; }

.cursor {
  width: 8px;
  height: 8px;
  background-color: var(--color-brass);
  border-radius: 50%;
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 9999;
  transform-origin: center;
  transition: width 0.25s ease,
              height 0.25s ease,
              background-color 0.25s ease,
              margin 0.25s ease;
  margin-top: -4px;
  margin-left: -4px;
  mix-blend-mode: normal;
}

.cursor--expand {
  width: 32px;
  height: 32px;
  background-color: transparent;
  border: 1px solid var(--color-brass);
  margin-top: -16px;
  margin-left: -16px;
}

.cursor--project {
  width: 64px;
  height: 64px;
  background-color: rgba(168, 138, 94, 0.15);
  border: 1px solid var(--color-brass);
  margin-top: -32px;
  margin-left: -32px;
}

@media (hover: none) {
  * { cursor: auto; }
  .cursor { display: none; }
}
```

---

## 22. Font Loading (Next.js)

```tsx
// app/layout.tsx
import { Cormorant_Garamond, Jost } from 'next/font/google'

const cormorant = Cormorant_Garamond({
  weight: ['300', '400', '500'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-cormorant',
})

const jost = Jost({
  weight: ['300', '400', '500'],
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-jost',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en-AU" className={`${cormorant.variable} ${jost.variable}`}>
      <body>{children}</body>
    </html>
  )
}
```

```css
/* globals.css */
:root {
  --font-display: var(--font-cormorant), Georgia, serif;
  --font-body:    var(--font-jost), system-ui, sans-serif;
}

body {
  font-family: var(--font-body);
  background-color: var(--color-bg);
  color: var(--color-text);
  -webkit-font-smoothing: antialiased;
}
```

---

## 23. Responsive Breakpoints

```css
/* Mobile-first — these are min-width breakpoints */
/* sm  */ @media (min-width: 640px)  { }
/* md  */ @media (min-width: 768px)  { }
/* lg  */ @media (min-width: 1024px) { }
/* xl  */ @media (min-width: 1280px) { }
/* 2xl */ @media (min-width: 1536px) { }
```

**Mobile priorities:**
- Nav collapses to hamburger → full-screen overlay
- Hero text: 2.8rem minimum (no smaller)
- All grids collapse to single column
- Project gallery: 1 column masonry
- Trust bar: horizontal scroll (`overflow-x: auto`, `scrollbar-width: none`)
- Form rows: single column
- Cursor: hidden on touch devices

---

## 24. 404 Page

```
Background: --color-bg-dark
Centred vertically and horizontally

[Large Cormorant italic — "404"]
[Jost small uppercase — "Page not found"]
[1 line of copy — "The page you're looking for doesn't exist."]
[btn-primary → Home]
```

---

## 25. Quick Reference — Design Do / Don't

| ✅ Do | ❌ Don't |
|---|---|
| Full-bleed photography | Cropped images in boxes |
| Cormorant italic for hero headlines | Inter, Poppins, Montserrat |
| Brand green (#5B5E41) as the only accent | Multiple accent colours |
| Hairline borders (1px) | Drop shadows on cards |
| Generous negative space | Dense icon-heavy sections |
| Underline-style CTA buttons | Pill buttons with heavy fill |
| Slow, deliberate animations | Bouncy spring animations |
| Warm cream (#EFEDE9) background | Pure white (#FFFFFF) |
| Logo displayed in natural colours on cream header | Inverted or filtered logo treatments |
| Text overlaid on images with gradient | Text in boxes over images |
| Uppercase tracked labels in Jost | Mixedcase badge components |
| Dark sections alternating with light | All-white or all-dark throughout |
| No border-radius on project gallery images | Rounded corners on testimonial cards/images (`--radius-soft`, 11px) |
| Masonry gallery layout | Equal-height thumbnail grids |
| Custom cursor (desktop) | Default cursor on premium brand |
| H3s as small uppercase labels | H3s as medium-sized headings |
