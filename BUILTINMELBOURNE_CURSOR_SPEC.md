# Built In. Melbourne — Developer Build Specification
**builtinmelbourne.com.au**
*Prepared by Bright Path Creative — Cursor / Developer Handover*

---

## 1. Project Context

| Field | Value |
|---|---|
| Business | Built In. Melbourne Pty Ltd |
| ABN | 54 610 132 486 |
| ACN | 610 132 486 |
| Owner | Josh Coles |
| Licences | DB-U 45446 (individual) · CDB-U 58374 (company) |
| Email | josh@builtinmelbourne.com.au |
| Instagram | @builtin.melbourne |
| Domain | builtinmelbourne.com.au |
| Phone | None — form-only enquiry |
| Google Business Profile | None at launch |
| Google Reviews | None at launch |
| Template type | Multi-page (17 pages) |
| Brand | Premium & Polished — architect-client audience |

**Copy document:** `BuiltInMelbourne_MultiPage_Copy_v2.docx`
**Schema document:** `BUILTINMELBOURNE_SCHEMA.md`
**LLM file:** `llms.txt` → deploy at `/llms.txt` (site root)

---

## 2. Recommended Stack

```
Framework:   Next.js 14+ (App Router)
Styling:     Tailwind CSS
Images:      next/image (automatic WebP, lazy loading, responsive srcset)
Forms:       Web3Forms (https://web3forms.com) — no backend required
Hosting:     Vercel (preferred) or Netlify
CMS:         None at launch — static MDX or hardcoded content
Analytics:   Google Analytics 4 (GA4) + Google Search Console
```

> **Alternative:** Astro + Tailwind for maximum performance on a fully static site.
> Both work in Cursor. Next.js preferred if client may want CMS integration later.

---

## 3. Site Architecture & URL Structure

All URLs lowercase, hyphens only, no trailing slashes.

```
/                                           → Home
/about                                      → About Josh Coles
/services                                   → Services Hub
/services/architectural-renovations         → Service: Renovations
/services/new-builds                        → Service: New Builds
/services/client-side-project-management    → Service: Client-Side PM
/projects                                   → Projects Overview (gallery)
/projects/surrey-hills                      → Project: Surrey Hills (lead)
/projects/hawsleigh-balaclava               → Project: Balaclava
/projects/liddiard-hawthorn                 → Project: Hawthorn
/projects/murrumbeena                       → Project: Murrumbeena
/projects/fawkner-residence                 → Project: Fawkner
/projects/mary-residence                    → Project: Mary ⚑ TBC content
/projects/henry-residence                   → Project: Henry ⚑ TBC content
/contact                                    → Contact + Web3Forms form
/faq                                        → FAQ (footer link ONLY — not main nav)
/privacy-policy                             → Privacy Policy (BPC standard template)
```

> **Phase 2 (hold — do not build at launch):**
> `/projects/beaumaris` — no images or brief confirmed yet.

---

## 4. Navigation

### Main Navigation
```
Home | About | Services ▾ | Projects | Contact
```

**Services dropdown:**
```
Architectural Renovations  →  /services/architectural-renovations
Bespoke New Builds         →  /services/new-builds
Client-Side Project Mgmt   →  /services/client-side-project-management
```

### Footer Navigation
```
Primary: Home | About | Services | Projects | Contact
Secondary: FAQ | Privacy Policy
Social: Instagram → https://www.instagram.com/builtin.melbourne
```

### Mobile Navigation
- Hamburger menu — full-screen overlay or slide-in drawer
- Services expands inline (accordion) — do not require tap to separate page
- Click-to-email button (mailto:josh@builtinmelbourne.com.au) visible in mobile nav
- Primary CTA button ("Discuss Your Project") persistent in mobile nav bar

---

## 5. Page-by-Page Metadata

> Character counts include spaces. Title max 60. Meta max 155.
> Canonical URLs use HTTPS. No trailing slashes.

---

### HOME `/`
```
Title:     Architectural Builder Melbourne | Built In. Melbourne
           [55 chars]

Meta:      High-spec architectural renovations and bespoke new builds
           across Bayside Melbourne. Registered Builder (Unlimited) ·
           16 years experience. Discuss your project.
           [153 chars]

Canonical: https://builtinmelbourne.com.au

OG Title:  Architectural Builder Melbourne | Built In. Melbourne
OG Desc:   Same as meta description
OG Image:  Hero image (Josh to nominate — 1200×630px)
OG Type:   website

H1:        Quality Comes From Being Present.
```

---

### ABOUT `/about`
```
Title:     About Josh Coles | Architectural Builder Melbourne
           [58 chars]

Meta:      Josh Coles — registered domestic builder (DB-U 45446),
           16 years experience delivering high-spec renovations and
           new builds across Bayside Melbourne. Fully insured.
           [155 chars]

Canonical: https://builtinmelbourne.com.au/about

H1:        About Built In. Melbourne
```

---

### SERVICES HUB `/services`
```
Title:     Building Services Melbourne | Built In. Melbourne
           [58 chars]

Meta:      Architectural renovations, bespoke new builds, and
           client-side project management across Bayside Melbourne.
           Registered Builder (Unlimited) · Fully insured.
           [155 chars]

Canonical: https://builtinmelbourne.com.au/services

H1:        Architectural Building Services Melbourne
```

---

### SERVICE: RENOVATIONS `/services/architectural-renovations`
```
Title:     Architectural Renovations Melbourne | Built In. Melbourne
           [58 chars — OK]

Meta:      Large-scale architectural renovations across Bayside
           Melbourne — heritage to contemporary. Personally managed
           by Josh Coles, DB-U 45446. Fully insured.
           [155 chars]

Canonical: https://builtinmelbourne.com.au/services/architectural-renovations

H1:        Architectural Renovations Melbourne
```

---

### SERVICE: NEW BUILDS `/services/new-builds`
```
Title:     Bespoke New Builds Melbourne | Built In. Melbourne
           [58 chars]

Meta:      Ground-up custom homes across Bayside Melbourne —
           architect-led, high-spec, personally managed by Josh
           Coles from tender to handover. DB-U 45446.
           [150 chars]

Canonical: https://builtinmelbourne.com.au/services/new-builds

H1:        Bespoke Architectural New Builds Melbourne
```

---

### SERVICE: CLIENT-SIDE PM `/services/client-side-project-management`
```
Title:     Client-Side Project Management Melbourne | Built In.
           [60 chars — at limit]

Meta:      A registered builder in your corner. Josh Coles offers
           independent client-side project management for complex
           builds across Melbourne. DB-U 45446.
           [150 chars]

Canonical: https://builtinmelbourne.com.au/services/client-side-project-management

H1:        Client-Side Project Management Melbourne
```

---

### PROJECTS OVERVIEW `/projects`
```
Title:     Projects | Architectural Builds | Built In. Melbourne
           [60 chars — at limit]

Meta:      Completed architectural renovations and new builds across
           Bayside Melbourne. Every project personally managed by
           Josh Coles, registered builder DB-U 45446.
           [155 chars]

Canonical: https://builtinmelbourne.com.au/projects

H1:        Selected Work — Built In. Melbourne
```

---

### PROJECT: SURREY HILLS `/projects/surrey-hills`
```
Title:     Sir Garnet Road, Surrey Hills | Built In. Melbourne
           [57 chars]

Meta:      A bespoke two-storey new build in Surrey Hills — dark
           cladding, walnut joinery, polished concrete floors, and
           a dark mosaic pool. Built In. Melbourne.
           [153 chars]

Canonical: https://builtinmelbourne.com.au/projects/surrey-hills

H1:        Sir Garnet Road, Surrey Hills
```

---

### PROJECT: BALACLAVA `/projects/hawsleigh-balaclava`
```
Title:     Hawsleigh Avenue, Balaclava | Built In. Melbourne
           [54 chars]

Meta:      Heritage facade retained. Rear entirely reimagined.
           Vaulted VJ-panelled ceilings, oak joinery, encaustic
           tiles, and a bespoke garden studio. Balaclava.
           [152 chars]

Canonical: https://builtinmelbourne.com.au/projects/hawsleigh-balaclava

H1:        Hawsleigh Avenue, Balaclava
```

---

### PROJECT: HAWTHORN `/projects/liddiard-hawthorn`
```
Title:     Liddiard Street, Hawthorn | Built In. Melbourne
           [53 chars]

Meta:      Kitchen and bathroom renovation, Hawthorn — dark
           cabinetry, walnut butler's pantry, brass tapware, black
           freestanding bath. Heritage cornices retained.
           [150 chars]

Canonical: https://builtinmelbourne.com.au/projects/liddiard-hawthorn

H1:        Liddiard Street, Hawthorn
```

---

### PROJECT: MURRUMBEENA `/projects/murrumbeena`
```
Title:     Murrumbeena Renovation | Built In. Melbourne
           [50 chars]

Meta:      Renovation in Murrumbeena — navy shaker cabinetry,
           marble slab island, brass hardware, and a freestanding
           bath on marble checkerboard floors. Built In.
           [151 chars]

Canonical: https://builtinmelbourne.com.au/projects/murrumbeena

H1:        Murrumbeena
```

---

### PROJECT: FAWKNER `/projects/fawkner-residence`
```
Title:     Fawkner Residence | Heritage Renovation | Built In.
           [58 chars]

Meta:      Heritage renovation Melbourne — coastal modern home,
           Velux skylights, premium stone and tile by Bowings.
           Maximum light within a tight heritage overlay.
           [149 chars]

Canonical: https://builtinmelbourne.com.au/projects/fawkner-residence

H1:        The Fawkner Residence
```

---

### PROJECT: MARY `/projects/mary-residence`
```
Title:     The Mary Residence | Renovation | Built In. Melbourne
           [57 chars]

Meta:      Full-scale renovation in Melbourne — modern aesthetic,
           considered materials, and Josh Coles personally on site
           at every stage. Built In. Melbourne.
           [146 chars]

Canonical: https://builtinmelbourne.com.au/projects/mary-residence

H1:        The Mary Residence
```

---

### PROJECT: HENRY `/projects/henry-residence`
```
Title:     The Henry Residence | Renovation | Built In. Melbourne
           [58 chars]

Meta:      Contemporary renovation in Melbourne — refined finishes,
           modern direction, Josh Coles as sole point of contact
           from brief to handover. Built In. Melbourne.
           [154 chars]

Canonical: https://builtinmelbourne.com.au/projects/henry-residence

H1:        The Henry Residence
```

---

### CONTACT `/contact`
```
Title:     Discuss Your Project | Built In. Melbourne
           [50 chars]

Meta:      Planning a renovation or new build in Bayside Melbourne?
           Josh Coles welcomes the conversation. No obligation.
           Responds within 1–2 business days.
           [143 chars]

Canonical: https://builtinmelbourne.com.au/contact

H1:        Discuss Your Project — Built In. Melbourne
```

---

### FAQ `/faq`  *(footer link only — excluded from main nav and sitemap index)*
```
Title:     Frequently Asked Questions | Built In. Melbourne
           [55 chars]

Meta:      Questions about Built In. Melbourne — architectural
           renovations, new builds, client-side project management,
           licences, and service areas across Melbourne.
           [153 chars]

Canonical: https://builtinmelbourne.com.au/faq

H1:        Frequently Asked Questions — Built In. Melbourne
```

---

### PRIVACY POLICY `/privacy-policy`
```
Title:     Privacy Policy | Built In. Melbourne
           [42 chars]

Meta:      Privacy Policy for Built In. Melbourne Pty Ltd —
           builtinmelbourne.com.au

Canonical: https://builtinmelbourne.com.au/privacy-policy

Robots:    noindex, follow
```

---

## 6. Heading Structure Summary

One H1 per page only. Never skip heading levels. H2s carry secondary keywords where natural. H3s for process steps, service sub-items, and FAQ questions only.

| Page | H1 | Key H2s |
|---|---|---|
| Home | Quality Comes From Being Present. | Built by Josh Coles · Architectural Builds · Selected Work · What Clients Say · FAQ · Let's Talk |
| About | About Built In. Melbourne | Built by Josh Coles · One Point of Contact · The Right Fit |
| Services | Architectural Building Services Melbourne | Renovations · New Builds · Client-Side PM · The Right Fit |
| Renovations | Architectural Renovations Melbourne | What a High-Spec Renovation Involves · Heritage-Sensitive Renovation · Why Builder Choice Matters · Working With Josh Before Tender · FAQ |
| New Builds | Bespoke Architectural New Builds Melbourne | Custom Homes · What Sets a Built In. Build Apart · Working With Your Architect · FAQ |
| Client PM | Client-Side Project Management Melbourne | A Qualified Second Set of Eyes · What It Covers · Who It's For · FAQ |
| Projects | Selected Work — Built In. Melbourne | Project Cards (no H2 per card — use semantic article/figure elements) |
| Project pages | [Project address/name] | The Brief · [Key section] · [Key section] · Standout Details |
| Contact | Discuss Your Project — Built In. Melbourne | [Form — no H2 needed] |
| FAQ | Frequently Asked Questions — Built In. Melbourne | About the Business · Renovations · New Builds · Process · Client-Side PM |

---

## 7. Performance Requirements — Core Web Vitals

Measure on **mobile** via PageSpeed Insights before launch.

| Metric | Target | Implementation |
|---|---|---|
| LCP (Largest Contentful Paint) | < 2.5s | Hero image: preload, WebP, correct sizing. Use `priority` prop on `next/image` hero. |
| CLS (Cumulative Layout Shift) | < 0.1 | Always set `width` and `height` on all images. Use `next/image`. No layout shift on font load (use `font-display: swap`). |
| INP (Interaction to Next Paint) | < 200ms | Minimal client-side JS. Defer non-critical scripts. No heavy animation libraries. |
| TTFB (Time to First Byte) | < 800ms | Static generation (SSG) via Next.js. CDN via Vercel Edge Network. |

**Additional performance rules:**
- Serve all images as **WebP** via `next/image` automatic conversion
- **Lazy load** all images below the fold (`loading="lazy"` — default in `next/image`)
- `priority` prop on hero image only (above fold)
- Compress all client-supplied images before committing to repo (use Squoosh or Sharp)
- Max image file size before compression: accept up to 25MB from client. After compression: target < 300KB per image at 2x display size
- No autoplay video on page load
- Inline critical CSS for above-the-fold content
- No render-blocking third-party scripts (defer GA4)

---

## 8. Image Handling

### Directory Structure
```
/public/images/
  hero/           → full-width hero images
  projects/
    surrey-hills/
    hawsleigh-balaclava/
    liddiard-hawthorn/
    murrumbeena/
    fawkner-residence/
    mary-residence/
    henry-residence/
  og/             → Open Graph images (1200×630px, one per page)
```

### Alt Text Formula
```
[what is in the image] — [suburb or location] — built in melbourne
```

**Examples (all lowercase, under 125 characters):**
```
architectural new build surrey hills — polished concrete kitchen — built in melbourne
heritage renovation balaclava — vaulted vj panel ceiling oak joinery — built in melbourne
kitchen renovation hawthorn — dark cabinetry walnut butler's pantry — built in melbourne
navy shaker kitchen renovation murrumbeena — marble slab island — built in melbourne
heritage renovation melbourne — fawkner residence coastal modern interior — built in melbourne
built in melbourne logo — architectural builder bayside melbourne
josh coles registered builder — built in melbourne on site
```

**Rules:**
- Never start with "image of" or "photo of"
- Decorative elements: `alt=""`
- Logo: always include trade and location
- Maximum 125 characters

### Project Gallery Pages
- Minimum 6 images per project page at launch
- Display as CSS Grid or Masonry layout
- Lightbox on click (recommend: `yet-another-react-lightbox` or custom — no jQuery)
- All images keyboard accessible (focus + enter to open, escape to close)
- ARIA: `role="button"` on gallery items, `aria-label="View [image description]"`

---

## 9. Contact Form — Web3Forms Integration

**Access key:** Josh to provide Web3Forms access key after account creation at web3forms.com

```html
<!-- Web3Forms endpoint -->
<form action="https://api.web3forms.com/submit" method="POST">
  <input type="hidden" name="access_key" value="JOSH_ACCESS_KEY_HERE" />
  <input type="hidden" name="subject" value="New Project Enquiry — Built In. Melbourne" />
  <input type="hidden" name="from_name" value="Built In. Melbourne Website" />
  <input type="hidden" name="redirect" value="https://builtinmelbourne.com.au/contact?submitted=true" />
  <!-- honeypot spam filter -->
  <input type="checkbox" name="botcheck" style="display:none" />
  
  <!-- All form fields here (see field spec below) -->
</form>
```

### Field Specification

| Field | Type | Required | Name attr | Notes |
|---|---|---|---|---|
| First Name | text | ✅ | `first_name` | |
| Last Name | text | ✅ | `last_name` | |
| Email Address | email | ✅ | `email` | |
| Phone Number | tel | ✅ | `phone` | |
| Project type | select | ✅ | `project_type` | Options below |
| Design stage | select | ✅ | `design_stage` | Options below |
| Architect engaged | select | ✅ | `architect_status` | Options below |
| Tender package | select | ✅ | `tender_status` | Options below |
| Budget | select | ✅ | `budget` | Options below |
| Project location | select | ✅ | `location` | Options below |
| Project description | textarea | ✅ | `message` | |
| How heard | select | ❌ | `referral_source` | |

### Dropdown Options

**project_type:**
- Architectural renovation
- New build
- Client-side project management
- Not sure yet

**design_stage:**
- Early concept, still exploring ideas
- Working with an architect or designer
- Design is complete, ready to tender
- Other

**architect_status:**
- Yes
- Not yet
- Looking for recommendations

**tender_status:**
- Yes, ready to go
- In progress
- No

**budget:**
- $100K – $300K
- $300K – $500K
- $500K – $800K
- $800K – $1.5M
- $1.5M – $3M
- $3M+
- Prefer not to say

**location:**
- Brighton
- Elsternwick
- Beaumaris
- Caulfield
- Hampton
- Sandringham
- Black Rock
- Mentone
- Bentleigh
- Other Bayside Melbourne suburb
- Outside Bayside Melbourne

**referral_source:**
- Architect or designer referral
- Word of mouth
- Instagram
- Google search
- Other

### Submit Button
```html
<button type="submit">Send Enquiry</button>
<!-- Never "Submit" -->
```

### Success / Error States
- On success: show inline confirmation — "Thank you. Josh typically responds within 1–2 business days."
- On error: show inline error — "Something went wrong. Please email josh@builtinmelbourne.com.au directly."
- Do NOT redirect to a separate thank-you page (bad for UX on premium brands)
- Validate client-side before submission (HTML5 `required` + custom JS for dropdowns)

---

## 10. Schema Markup

See `BUILTINMELBOURNE_SCHEMA.md` for all JSON-LD blocks, copy-paste ready.

**Schema types used:**
| Schema | Where | Notes |
|---|---|---|
| `WebSite` | Home only | Site-level identity |
| `GeneralContractor` (LocalBusiness) | All pages (footer) | Core business identity |
| `Person` | About page | Josh Coles as registered practitioner |
| `BreadcrumbList` | All pages except Home | Navigation context for Google |
| `FAQPage` | Home, all service pages, FAQ page | Rich snippets in SERP |
| `WebPage` | All pages | Base page schema |
| `ItemList` | Projects overview `/projects` | Structured project list for Google |
| `WebPageElement` (HowTo alternative) | About page process section | Structured process for AEO |

**No** `AggregateRating` or `Review` schema at launch — no verified reviews available.
Add when Google Business Profile is established and reviews are confirmed.

### Implementation Pattern (Next.js)
```tsx
// app/layout.tsx — LocalBusiness schema loads on every page
// app/page.tsx — WebSite + WebPage schema
// app/about/page.tsx — Person + BreadcrumbList + WebPage
// app/projects/[slug]/page.tsx — BreadcrumbList + WebPage per project
// etc.

// Inject as <script type="application/ld+json"> in <head>
// In Next.js App Router:
import Script from 'next/script'

<Script
  id="schema-localbusiness"
  type="application/ld+json"
  dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
/>
```

---

## 11. Internal Linking Map

Every page must link to at least 2 other pages via **descriptive anchor text** — never "click here" or "read more".

| From page | Links to | Anchor text |
|---|---|---|
| Home | /about | "About Josh and how Built In. works" |
| Home | /services | (via service tile buttons) "Architectural Renovations" / "Bespoke New Builds" / "Client-Side PM" |
| Home | /projects | "View all projects" |
| Home | /contact | "Discuss Your Project" (CTA) |
| About | /services | "Explore Built In. Melbourne's services" |
| About | /contact | "Discuss Your Project" (CTA) |
| Services hub | /services/architectural-renovations | "Architectural Renovations" |
| Services hub | /services/new-builds | "Bespoke New Builds" |
| Services hub | /services/client-side-project-management | "Client-Side Project Management" |
| Services hub | /contact | "Discuss Your Project" |
| /services/architectural-renovations | /projects/hawsleigh-balaclava | "View the Hawsleigh Avenue project" |
| /services/architectural-renovations | /contact | "Discuss Your Renovation" |
| /services/new-builds | /projects/surrey-hills | "View the Surrey Hills project" |
| /services/new-builds | /contact | "Discuss Your New Build" |
| /services/client-side-project-management | /contact | "Discuss Your Project" |
| /projects | All 7 project pages | "View Project" per card |
| /projects | /contact | "Discuss Your Project" |
| All project pages | /projects | "Back to Projects" |
| All project pages | /contact | "Discuss Your Project" |
| /contact | /privacy-policy | "(Privacy Policy)" inline near form |
| /faq | /contact | "Discuss Your Project" |

---

## 12. CTA Standards

| Location | Button text | Destination |
|---|---|---|
| Every page — primary CTA | "Discuss Your Project" | /contact |
| Service pages — bottom CTA | "Discuss Your [Renovation / New Build / Project]" | /contact |
| Project pages — bottom CTA | "Discuss Your Project" | /contact |
| Contact form submit | "Send Enquiry" | Web3Forms |
| Nav bar (desktop + mobile) | "Discuss Your Project" | /contact |

**Never use:** "Contact Us" as a standalone CTA. "Submit". "Learn More" without context.

---

## 13. Footer Specification

Implement identically across all pages.

```
COLUMN 1 — Brand
Built In. Melbourne Pty Ltd
ABN 54 610 132 486  |  ACN 610 132 486
Registered Domestic Builder (Unlimited) · CDB-U 58374 · Victorian Practitioner
Fully Insured  |  16 Years Experience  |  DB-U 45446

COLUMN 2 — Navigation
Home | About | Services | Projects | Contact
[second row] FAQ | Privacy Policy

COLUMN 3 — Contact
josh@builtinmelbourne.com.au (mailto link)
Instagram: @builtin.melbourne (external link, rel="noopener noreferrer")

BOTTOM — Copyright
© 2026 Built In. Melbourne. All rights reserved.
```

**LocalBusiness JSON-LD schema** injected in `<head>` on every page (not in footer HTML).
See `BUILTINMELBOURNE_SCHEMA.md`.

---

## 14. Accessibility Requirements — WCAG 2.1 AA

### Colour Contrast
- All body text: minimum 4.5:1 contrast ratio against background
- Large text (18px+ or 14px+ bold): minimum 3:1
- UI components (buttons, form borders): minimum 3:1
- Test with: https://webaim.org/resources/contrastchecker/

### Forms
- Every form field has a visible `<label>` element — not just placeholder text
- Placeholder text is supplementary only (not a label replacement)
- Required fields marked with asterisk (*) and explanatory note
- Error messages are descriptive: "Please enter a valid email address" — not "Error"
- `aria-describedby` on fields with helper text

### Images
- Every `<img>` has a descriptive `alt` attribute (see alt text formula above)
- Decorative images: `alt=""`
- Never omit the `alt` attribute entirely

### Headings
- One `<h1>` per page — no exceptions
- Never skip heading levels (h1 → h2 → h3 in sequence)
- Do not use heading tags for visual styling — use CSS classes

### Keyboard Navigation
- All interactive elements reachable via Tab key
- Visible focus indicator on all focusable elements (do not suppress `outline`)
- Lightbox/modal: trap focus inside, Escape to close, return focus on close
- Navigation dropdown: keyboard accessible (arrow keys or Enter to expand)

### ARIA
- Navigation landmark: `<nav aria-label="Main navigation">`
- Main content: `<main>`
- Footer: `<footer>`
- Dropdown menus: `aria-haspopup="true"` `aria-expanded` on trigger
- Gallery items: `role="button"` `aria-label="View image: [description]"`

### Reading Level
- Target: Year 8–10 reading level
- Short sentences. Active voice. One idea per sentence.
- No unexplained technical jargon

---

## 15. robots.txt

Deploy at `builtinmelbourne.com.au/robots.txt`

```
User-agent: *
Allow: /

Disallow: /api/
Disallow: /_next/

Sitemap: https://builtinmelbourne.com.au/sitemap.xml
```

---

## 16. Sitemap

Deploy at `builtinmelbourne.com.au/sitemap.xml`
In Next.js App Router, use `app/sitemap.ts`:

```ts
import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: 'https://builtinmelbourne.com.au', changeFrequency: 'monthly', priority: 1.0 },
    { url: 'https://builtinmelbourne.com.au/about', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/services', changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://builtinmelbourne.com.au/services/architectural-renovations', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/services/new-builds', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/services/client-side-project-management', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://builtinmelbourne.com.au/projects', changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://builtinmelbourne.com.au/projects/surrey-hills', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/projects/hawsleigh-balaclava', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/projects/liddiard-hawthorn', changeFrequency: 'monthly', priority: 0.8 },
    { url: 'https://builtinmelbourne.com.au/projects/murrumbeena', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://builtinmelbourne.com.au/projects/fawkner-residence', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://builtinmelbourne.com.au/projects/mary-residence', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://builtinmelbourne.com.au/projects/henry-residence', changeFrequency: 'monthly', priority: 0.7 },
    { url: 'https://builtinmelbourne.com.au/contact', changeFrequency: 'yearly', priority: 0.9 },
    { url: 'https://builtinmelbourne.com.au/faq', changeFrequency: 'monthly', priority: 0.6 },
    // Do NOT include /privacy-policy in sitemap (noindex page)
  ]
}
```

> **Do not include:** `/privacy-policy` (noindex). Phase 2 Beaumaris page not yet built.
> Submit sitemap to Google Search Console immediately after launch.

---

## 17. Open Graph & Social

Every page needs the following `<meta>` tags:

```html
<meta property="og:title" content="[page og title]" />
<meta property="og:description" content="[page og description]" />
<meta property="og:image" content="https://builtinmelbourne.com.au/og/[page-name].jpg" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://builtinmelbourne.com.au/[path]" />
<meta property="og:site_name" content="Built In. Melbourne" />

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:title" content="[page og title]" />
<meta name="twitter:description" content="[page og description]" />
<meta name="twitter:image" content="https://builtinmelbourne.com.au/og/[page-name].jpg" />
```

**OG Images:** 1200×630px JPEG. One per page. Source from best project image or hero. Josh to nominate per page. Store in `/public/og/`.

**In Next.js App Router** — use `generateMetadata()` per page or `metadata` export:
```ts
export const metadata: Metadata = {
  title: 'Architectural Builder Melbourne | Built In. Melbourne',
  description: '...',
  openGraph: {
    title: '...',
    description: '...',
    url: 'https://builtinmelbourne.com.au',
    siteName: 'Built In. Melbourne',
    images: [{ url: '/og/home.jpg', width: 1200, height: 630 }],
    type: 'website',
  },
}
```

---

## 18. Analytics Setup

### Google Analytics 4
```ts
// Install: npm install @next/third-parties
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'

// In <body>:
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
// (Josh to provide GA4 Measurement ID — create account first)
```

**Deferred loading** — `@next/third-parties` handles this automatically (loads after hydration).

### Google Search Console
- Verify via DNS TXT record (preferred on Vercel) or HTML meta tag
- Submit sitemap: `https://builtinmelbourne.com.au/sitemap.xml`
- Monitor: Coverage, Core Web Vitals, Search performance

### Events to track (GA4 custom events)
```
form_submit    — when contact form submits successfully
project_view   — when a project page loads (send project name as parameter)
cta_click      — when "Discuss Your Project" CTA is clicked (send page + location)
instagram_click — when Instagram link is clicked
```

---

## 19. AEO — Answer Engine Optimisation

Built In. Melbourne needs to be the answer that AI tools (ChatGPT, Perplexity, Google AI Overview) surface when someone asks about high-spec builders in Bayside Melbourne.

### Implementation checklist

- [ ] `llms.txt` deployed at `builtinmelbourne.com.au/llms.txt` (see `llms.txt` file)
- [ ] `FAQPage` JSON-LD on all pages with FAQ sections
- [ ] Clear, standalone FAQ answers (third person, 40–100 words) — no cross-references
- [ ] `GeneralContractor` LocalBusiness schema with `areaServed` listing all suburbs
- [ ] `Person` schema for Josh Coles with licence identifiers
- [ ] E-E-A-T signals in every paragraph of every page (see below)
- [ ] ABN in footer (verifiable business identity)
- [ ] Licence numbers in footer and on About page
- [ ] Specific suburb names throughout copy (not just "Melbourne")
- [ ] Real project descriptions with specific materials (not generic)
- [ ] No generic AI-pattern phrases ("passionate about", "committed to excellence")

### E-E-A-T Signals by Pillar

| Pillar | Implementation |
|---|---|
| **Experience** | 16 years stated with number (not "decades"). Specific suburbs named in body copy. Real project materials and outcomes. Josh's name on every page. |
| **Expertise** | Licence numbers DB-U 45446 and CDB-U 58374 stated. Correct trade terminology (VBA registered, Domestic Builder Unlimited). Process explained in plain English. |
| **Authoritativeness** | Architect collaboration referenced. Specific design studios named where confirmed. Project names and locations specific. |
| **Trust** | ABN in footer. "Fully insured" stated in body copy (About page). Privacy Policy linked. Response time commitment on Contact page. No subcontracting claim. |

---

## 20. SSL & Security

- HTTPS enforced (Vercel provides SSL automatically on custom domains)
- All HTTP traffic 301-redirected to HTTPS (Vercel handles by default)
- www to non-www redirect: confirm canonical version (use non-www: `builtinmelbourne.com.au`)
- Set up redirect in `next.config.js`:
```js
async redirects() {
  return [
    {
      source: '/:path*',
      has: [{ type: 'host', value: 'www.builtinmelbourne.com.au' }],
      destination: 'https://builtinmelbourne.com.au/:path*',
      permanent: true,
    }
  ]
}
```

---

## 21. Pre-Launch Checklist

### SEO
- [ ] Every page has unique title tag (max 60 chars, primary keyword in first 40)
- [ ] Every page has unique meta description (max 155 chars, includes CTA)
- [ ] Every page has canonical URL set
- [ ] One H1 per page, contains primary keyword or project name + city
- [ ] No heading levels skipped anywhere
- [ ] Minimum 20 suburbs listed in service area text (Contact page + LocalBusiness schema)
- [ ] "Fully insured" stated in body copy on About page
- [ ] ABN (54 610 132 486) present in footer HTML
- [ ] Licence numbers (DB-U 45446, CDB-U 58374) in About and Footer
- [ ] Every image has descriptive alt text (formula applied)
- [ ] Primary keyword appears in first paragraph of Home page body copy
- [ ] Owner's name (Josh) appears at least once per page
- [ ] Internal links use descriptive anchor text (no "click here")
- [ ] FAQ page linked in footer only (not main nav)
- [ ] Privacy Policy linked in footer and near contact form

### Schema
- [ ] LocalBusiness JSON-LD on every page
- [ ] WebSite schema on home page
- [ ] Person schema on About page
- [ ] FAQPage schema on: Home, /services/architectural-renovations, /services/new-builds, /services/client-side-project-management, /faq
- [ ] BreadcrumbList on all pages except home
- [ ] ItemList on /projects
- [ ] Validate all schema: https://validator.schema.org
- [ ] Test rich results: https://search.google.com/test/rich-results

### AEO / LLM
- [ ] llms.txt live at builtinmelbourne.com.au/llms.txt
- [ ] Plain text, no redirects, accessible without auth
- [ ] Verify: curl https://builtinmelbourne.com.au/llms.txt

### Performance
- [ ] PageSpeed Insights mobile score ≥ 90
- [ ] LCP < 2.5s on mobile
- [ ] CLS < 0.1
- [ ] INP < 200ms
- [ ] All images WebP, compressed
- [ ] Hero image uses `priority` / `preload`
- [ ] GA4 deferred (not blocking)

### Accessibility
- [ ] Lighthouse Accessibility score ≥ 95
- [ ] All images have alt text
- [ ] All form fields have visible labels
- [ ] Keyboard navigation works end-to-end
- [ ] Focus indicators visible
- [ ] Colour contrast passes WCAG AA

### Technical
- [ ] HTTPS active — no mixed content warnings
- [ ] www → non-www redirect working
- [ ] XML sitemap at /sitemap.xml — verified in browser
- [ ] robots.txt at /robots.txt — verified in browser
- [ ] 404 page exists and is styled
- [ ] Contact form submits successfully (test with real email)
- [ ] All internal links resolve (no 404s)
- [ ] All external links open in new tab (rel="noopener noreferrer")
- [ ] Mobile layout reviewed on real device (iPhone + Android)
- [ ] Sitemap submitted to Google Search Console
- [ ] Privacy Policy page live and linked

### Content
- [ ] No placeholder text remaining (Lorem ipsum, [TBC] fields)
- [ ] Testimonials section hidden if no quotes received (do not display empty)
- [ ] All TBC items confirmed by Josh before launch (see copy document flags)
- [ ] Beaumaris project page NOT live (Phase 2)
