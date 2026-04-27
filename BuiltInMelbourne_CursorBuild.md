# Built In. Melbourne — Cursor Build Document

## Project Overview

Single-page landing page for **Built In. Melbourne** (builtinmelbourne.com.au), a premium architectural builder operating across Bayside Melbourne. This is not a standard tradie website. The design and tone must reflect an architectural studio aesthetic: refined, confident, understated, and warm. Think design-firm portfolio, not construction-company brochure.

**Client:** Josh Coles, Registered Domestic Builder (Unlimited)
**Domain:** builtinmelbourne.com.au
**Contact form:** Hosted on GoHighLevel (GHL), embedded via iframe or JS snippet (details below)
**No phone number on the site.** All contact flows through the form and email.

---

## Brand Identity

### Brand Name
- Full: **Built In. Melbourne**
- Shorthand: **Built In.**
- The full stop after "In" is part of the brand identity. Always include it.

### Logo
- Logo font: **Gotham** (as used in Canva)
- Brand mark leans toward "Built In." as the hero element, with "Melbourne" secondary
- Logo file pending from client (SVG or high-res PNG with transparent background)
- Placeholder: use Gotham or closest available web font for the brand mark in the nav

### Colours

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-primary` | `#696C4C` | Olive/green. Headings, accents, buttons, brand mark |
| `--color-background` | `#F1EDEA` | Page background. Warm off-white, not stark white |
| `--color-surface` | `#FFFFFF` | Cards, form backgrounds, elevated sections |
| `--color-text` | `#2D2D2D` | Primary body text. Near-black charcoal |
| `--color-text-light` | `#555555` | Secondary/supporting text |
| `--color-text-muted` | `#999999` | Placeholder text, captions |
| `--color-border` | `#E0DCD8` | Subtle dividers, card borders |
| `--color-button-text` | `#F1EDEA` | Text on primary buttons (off-white on olive) |

### Typography

| Element | Font | Weight | Size (desktop) | Notes |
|---------|------|--------|-----------------|-------|
| Brand mark / logo text | Gotham (or fallback: `"Montserrat", sans-serif`) | 700 | Per logo spec | All caps for brand mark |
| H1 | `"Playfair Display", Georgia, serif` | 700 | 56px | Hero headline only |
| H2 (section heads) | `"Playfair Display", Georgia, serif` | 600 | 36px | Section titles |
| H3 (sub-heads) | `"Playfair Display", Georgia, serif` | 600 | 24px | Service names, process steps, FAQ questions |
| Body | `"DM Sans", "Helvetica Neue", sans-serif` | 400 | 17px | Line height 1.7, max-width 680px for readability |
| Body bold | `"DM Sans", "Helvetica Neue", sans-serif` | 600 | 17px | Emphasis, labels |
| Micro text | `"DM Sans", "Helvetica Neue", sans-serif` | 400 | 14px | Trust bar stats, captions, footer |
| Button text | `"DM Sans", "Helvetica Neue", sans-serif` | 600 | 15px | Uppercase, letter-spacing 1.5px |

**Google Fonts import:** `Playfair+Display:wght@600;700` and `DM+Sans:wght@400;500;600`

### Design Principles

- **Refined minimalism.** Generous whitespace. Let the content breathe. Nothing competes for attention.
- **Architectural feel.** Clean lines, considered spacing, subtle grid structure. The site should feel like it belongs alongside the architects Josh works with.
- **No stock imagery.** Real project photos only. If images are not yet available, use the architectural sketch illustration as a design element (background texture, section divider, watermark).
- **No visual clutter.** No icon libraries, no gradients, no drop shadows on cards. Borders should be 1px and subtle. Elevation comes from whitespace and background contrast, not shadow.
- **Motion: restrained.** Fade-in on scroll for sections (IntersectionObserver, 0.3s ease). No bouncing, no parallax, no sliding carousels. One smooth, confident page load with staggered section reveals.

---

## Page Structure

Single page, vertical scroll. Sections in this exact order:

1. Navigation
2. Hero
3. Trust Bar
4. About (The Builder)
5. Services
6. The Process
7. Featured Projects
8. Testimonials
9. FAQ
10. Contact / CTA
11. Footer

---

## Section-by-Section Specification

### 1. Navigation

**Layout:** Fixed/sticky top bar. Logo left, anchor links centre or right, CTA button far right.

**Elements:**
- Brand mark: "Built In." (use Gotham/Montserrat, primary olive colour)
- Anchor links: About · Services · Projects · Contact
- CTA button: "Discuss Your Project" — scrolls to contact section
- No phone number

**Mobile:** Hamburger menu. Sticky bar with brand mark and "Discuss Your Project" button visible at all times during scroll.

**Styling:**
- Background: `--color-background` with subtle backdrop-blur if overlaying hero
- Nav links: `--color-text`, no underline, subtle hover (opacity or underline animation)
- CTA button: `--color-primary` background, `--color-button-text` text, slight border-radius (4px)
- Height: 72px desktop, 60px mobile

---

### 2. Hero

**Layout:** Full viewport height (100vh). Content vertically centred left, with hero image or architectural sketch on right or as full background with overlay.

**Content:**

```
H1: Quality Comes From Being Present.

Subheadline: High-spec architectural renovations and bespoke new builds
across Bayside Melbourne. One builder. One point of contact.
Every detail, personally delivered.

Micro-line: Registered Domestic Builder (Unlimited) · CDB-U 58374 · 16 Years Experience

CTA Button: Discuss Your Project → scrolls to #contact
```

**Styling:**
- H1: Playfair Display 700, 56px desktop / 36px mobile, `--color-text`
- Subheadline: DM Sans 400, 20px desktop / 17px mobile, `--color-text-light`, max-width 560px
- Micro-line: DM Sans 400, 14px, `--color-text-muted`, uppercase, letter-spacing 1px
- CTA: olive button, consistent with nav CTA
- Hero image: if available, use as right-side panel or full-bleed background at 30% opacity with `--color-background` overlay. If no photo, use the architectural sketch illustration as a subtle background texture element.

**SEO:**
- H1 tag on "Quality Comes From Being Present."
- Primary keyword ("high-end builder Melbourne") is in the meta title, not the H1. This is deliberate.

---

### 3. Trust Bar

**Layout:** Horizontal strip below hero. Four stats evenly spaced. Background: `--color-surface` (white) or very subtle contrast from page background.

**Content:**

| Stat | Label |
|------|-------|
| 16 Years | Experience |
| CDB-U 58374 | Registered Domestic Builder |
| On Site | Personally, Every Project |
| Select Projects | Full Personal Oversight |

**Styling:**
- Stat number/keyword: Playfair Display 600, 24px, `--color-text`
- Label: DM Sans 400, 13px, `--color-text-muted`, uppercase, letter-spacing 1px
- Dividers between stats: 1px vertical line `--color-border`
- Padding: 48px vertical
- Mobile: 2x2 grid

---

### 4. About — The Builder

**Layout:** Two-column on desktop (text left, image/sketch right). Single column on mobile.

**Content:**

```
H2: Built by Josh Coles. Present on Every Project.

Paragraph 1:
Josh Coles started in carpentry sixteen years ago: six years on the tools,
followed by a decade as a registered builder delivering high-spec architectural
renovations and new builds across Melbourne's south-east. He holds a Domestic
Builder (Unlimited) licence as a Victorian practitioner (DB-U 45446), and his
company, Built In. Melbourne Pty Ltd, is separately registered under CDB-U 58374.
Today, he runs Built In. Melbourne with a deliberately small footprint; a select
number of projects per year, each personally overseen from first meeting through
to handover.

Paragraph 2:
Where most builders scale by adding layers (project managers, site supervisors,
office coordinators), Josh works in the opposite direction. He is the single point
of contact for every client. He's on site. He's across every detail. He's the
person you speak with on Monday morning and the person walking the job on Friday
afternoon.

Paragraph 3:
It's a model built on a simple conviction: quality comes from being present. Not
from monitoring dashboards or reading supervisor reports, but from standing on the
slab, seeing the work, holding the standard personally. Every trade on a Built In.
project operates under the same expectation. If the work doesn't meet Australian
standards, it gets redone. No shortcuts. No exceptions.

Paragraph 4:
Josh works closely with architects and interior designers, and prefers to be
brought in early in the design process. His input at the preliminary stage often
saves clients from unnecessary structural costs and helps align the design intent
with the realities of the build, before the budget sets.
```

**Right column / visual:**
- Photo of Josh on site (pending), or architectural sketch illustration as design element
- Trust signals displayed as small badges below image: Registered Domestic Builder (Unlimited) · Fully Insured · 16 Years Experience

---

### 5. Services

**Layout:** Section intro, then three service blocks stacked vertically. Each block: H3 left, description right (or full width on mobile).

**Content:**

```
H2: Architectural Builds. Delivered Personally.

Intro: Built In. Melbourne specialises in complex, high-specification residential
projects across Bayside Melbourne and the inner south-east. Every project is
personally managed by Josh Coles from tender through to completion.
```

**Service 1: High-Spec Architectural Renovations**

```
Large-scale renovations of established homes, from heritage-sensitive restorations
that preserve period character to full contemporary transformations that reimagine
how a home functions. These are projects where complexity is the norm: structural
alterations, premium material selections, interior-designed finishes, and the kind
of precision that leaves no room for shortcuts.

Josh has delivered architectural renovations across Brighton, Elsternwick,
Beaumaris, and Caulfield, working alongside architects and designers to translate
detailed design intent into built reality. His preference is to be involved early,
before the tender package is finalised, so he can flag buildability issues, reduce
unnecessary structural expense, and give clients confidence in their numbers before
they commit.
```

**Service 2: Bespoke Architectural New Builds**

```
Ground-up custom homes designed around the way the client wants to live, not
adapted from a template. These are one-off builds with architect-led designs,
high-spec interiors, and the same level of personal oversight that defines every
Built In. project. Josh manages the full build personally, with weekly client
communication and direct coordination with the design team throughout.

Whether the brief calls for coastal modern, clean contemporary, or something
entirely bespoke, the standard is the same: every detail built to spec, every
finish executed precisely, every trade held to account.
```

**Service 3: Client-Side Project Management**

```
Already have a builder but want someone in your corner? Josh offers client-side
project management for homeowners navigating complex builds with another
contractor. He acts as a qualified second set of eyes, reviewing progress,
assessing workmanship, attending site meetings, and ensuring the build aligns
with the approved plans and Australian standards.

This service exists because Josh has seen too many homeowners left in the dark
during their own renovation. If you're investing in a significant project and you
don't have a building background, having a registered practitioner advocating for
your interests isn't a luxury. It's common sense.
```

**The Right Fit (sub-section after services)**

```
H3: The Right Fit

Built In. Melbourne is set up for considered, architect-designed residential
projects that benefit from direct builder involvement at every stage. Josh's
model is built around personal oversight, which means he's selective about
the work he takes on. If your project needs that level of attention and
commitment, he'd welcome the conversation. If it doesn't, he'll be honest
about that too.
```

---

### 6. The Process

**Layout:** Horizontal timeline on desktop (four steps). Vertical stack on mobile. Each step: number, title, description.

**Content:**

```
H2: One Point of Contact. Start to Finish.

Intro: Every Built In. project follows the same structured process, designed to
give you clarity, confidence, and a direct line to the person building your home.
```

| Step | Title | Description |
|------|-------|-------------|
| 1 | Meet | It starts with a conversation. Josh meets every prospective client before any numbers are discussed. This isn't a sales pitch; it's a mutual assessment. He wants to understand your project, your expectations, and whether the working relationship is the right fit. If it's not, he'll say so early. |
| 2 | Tender | Built In. uses a staged tendering process: preliminary costing, a detailed scope, and a final fixed-price tender. Each stage refines the numbers so there are no surprises when the build begins. If Josh is brought in before the tender package is finalised, he can advise on buildability and cost efficiency, often saving clients money before a dollar is spent on construction. |
| 3 | Build | Josh is on site. Not a supervisor, not a project manager relaying updates secondhand. Josh, personally. You'll speak with him weekly. He'll speak with your architect or designer weekly. Every trade on site operates under the same standard: no shortcuts, no deviation from spec, no compromises on Australian building standards. |
| 4 | Handover | When the build is complete, Josh walks you through every detail. The same person who met you at the start is the one handing you the keys at the end. |

**Styling:**
- Step numbers: Playfair Display 600, 48px, `--color-primary` (olive)
- Step titles: DM Sans 600, 20px, `--color-text`
- Descriptions: DM Sans 400, 16px, `--color-text-light`
- Connecting line between steps: 1px `--color-border`

---

### 7. Featured Projects

**Layout:** Three project cards. On desktop: full-width cards stacked, each with image left and text right (alternating sides for visual rhythm). On mobile: stacked vertically.

**Content:**

**Project 1: The Fawkner Residence**
- Label: Architectural Renovation (Heritage Sensitive)
- Description: A heritage site with one original wall retained, reimagined as a coastal modern home designed to maximise light, space, and site coverage. The brief demanded maximum rooms and bathrooms within the heritage overlay constraints, and the result is a home that feels open and considered despite its compact footprint. Premium flooring, stone, and tiling supplied by Bowings, with Velux skylights flooding the interior with natural light.
- Image: Fawkner project photo (pending)

**Project 2: The Mary Residence**
- Label: Architectural Renovation
- Description: A full-scale renovation delivering a modern, sleek aesthetic throughout. Clean lines, considered material selections, and the kind of precision in the finished detail that only comes from direct builder oversight during every stage of construction.
- Image: Mary project photo (pending)

**Project 3: The Henry Residence**
- Label: Architectural Renovation
- Description: A contemporary renovation with a refined, modern direction, designed for how the homeowners actually live. Like every Built In. project, delivered with Josh as the sole point of contact from first meeting through to handover.
- Image: Henry project photo (pending)

**Below projects:**
```
Additional projects documented on Instagram @builtin.melbourne:
Dalgetty, Murrumbeena, Sir Garnet, Hawsleigh, Neville, Moira, Liddiard.
```
Instagram link: `https://www.instagram.com/builtin.melbourne`

**Styling:**
- Project name: Playfair Display 600, 28px, `--color-text`
- Label (project type): DM Sans 500, 13px, `--color-primary`, uppercase, letter-spacing 1.5px
- Description: DM Sans 400, 16px, `--color-text-light`
- Image placeholder: `--color-border` background with "Image Pending" text centred, aspect ratio 4:3

---

### 8. Testimonials

**Layout:** Testimonial cards in a row (desktop) or stacked (mobile). Two groups: Client Testimonials and Architect/Designer Testimonials.

**Content:**

```
H2: What Our Clients and Collaborators Say
```

**Client Testimonials (placeholder cards):**
- Neville Street Clients — [Testimonial pending]
- Beaumaris Clients — [Testimonial pending]
- Moira Clients — [Testimonial pending]

**Architect and Designer Testimonials (placeholder cards):**
- Welgus Studios — [Testimonial pending]
- Matayas Interiors — [Testimonial pending]
- Seaboard Building Design — [Testimonial pending]

**Styling:**
- Each card: `--color-surface` background, 1px `--color-border`, padding 32px
- Placeholder text: DM Sans 400 italic, 16px, `--color-text-muted`
- Attribution name: DM Sans 600, 15px, `--color-text`
- Subtle quotation mark decorative element: Playfair Display, 72px, `--color-primary` at 15% opacity, positioned top-left of card

---

### 9. FAQ

**Layout:** Accordion. Question visible, answer expands on click. Smooth height transition (0.3s ease).

**Content:**

**Q: What does a high-spec renovation actually involve?**
A: It's a significant transformation of an existing home, typically involving structural changes, premium materials, interior-designed finishes, and a level of complexity that goes well beyond a cosmetic refresh. Most of my renovation projects are heritage-sensitive or architecturally designed. The build usually takes twelve to eighteen months depending on the scope.

**Q: Will I deal directly with you, or is the work handed off to a supervisor?**
A: You deal with me. From our first meeting through to handover, I'm the single point of contact. I'm on site, I'm across the detail, and I'm the person you'll speak with every week. I don't employ project managers or site supervisors to sit between me and my clients. That's the whole point of limiting the number of projects I take on, so I can be genuinely present on every one.

**Q: What kind of projects do you take on?**
A: Built In. Melbourne is set up for considered, architect-designed residential projects: architectural renovations, bespoke new builds, and client-side project management. I work best on projects where complexity, quality, and personal oversight genuinely matter. The best way to find out if your project is the right fit is to start with a conversation.

**Q: Can you work with my architect or designer?**
A: Absolutely, and I prefer it. I work with several established architects across Melbourne, but I'm open to working with any design team. The best outcomes happen when I'm brought in early, before the tender package is finalised. I can advise on buildability, flag potential cost blowouts, and help align the design intent with what's realistic on site. When the relationship between builder and architect is clean and collaborative, the client gets a significantly better result.

**Q: Are you licensed and insured?**
A: Yes. I hold a Domestic Builder (Unlimited) licence as a registered Victorian practitioner (DB-U 45446), and Built In. Melbourne Pty Ltd is separately registered under CDB-U 58374. Both registrations are current. The company is fully insured, and I'm happy to provide documentation to any client or architect who requests it.

**Q: What areas do you service?**
A: I'm based in Bayside Melbourne and most of my work is across the inner south-east, including Brighton, Elsternwick, Beaumaris, Caulfield, and surrounding suburbs. I'm open to projects outside this area if the scope and fit are right. Get in touch and we can discuss.

**Q: How do I know if my project is the right fit for Built In.?**
A: The best way is to start with a conversation. I meet every prospective client before any numbers are discussed. It's a chance for both of us to assess whether the project and the working relationship are the right fit. If they're not, I'll tell you honestly and early. There's no pressure and no obligation.

**Styling:**
- Question: DM Sans 600, 18px, `--color-text`, cursor pointer
- Answer: DM Sans 400, 16px, `--color-text-light`, line-height 1.7
- Expand/collapse icon: simple + / - or chevron, `--color-primary`
- Border between items: 1px `--color-border`

**Schema:** Implement FAQPage structured data (JSON-LD) for all Q&A pairs.

---

### 10. Contact / CTA

**Layout:** Two columns on desktop. Left: heading, intro text, alternative contact details. Right: contact form. Full width on mobile with form below text.

**Content (left column):**

```
H2: Let's Talk About Your Project.

If you're planning an architectural renovation or new build across Bayside
Melbourne, Josh would welcome the opportunity to discuss it. No obligation.
No pressure. Just a straightforward conversation about what you're looking
to achieve.

Josh typically responds within 1-2 business days.

Email: josh@builtinmelbourne.com.au
Instagram: @builtin.melbourne

Service area: Bayside Melbourne and Melbourne's inner south-east, including
Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Black Rock,
Mentone, Cheltenham, Highett, Bentleigh, McKinnon, Ormond, Murrumbeena,
Carnegie, and surrounding suburbs.
```

**Contact Form (right column):**

The form will be built in GoHighLevel (GHL) and embedded. Style the embed container to match the site. If the GHL form cannot be styled to match, build a native HTML form that submits to the GHL webhook endpoint (URL to be provided).

**Form fields:**

| Field | Type | Required | Options |
|-------|------|----------|---------|
| First Name | Text | Yes | — |
| Last Name | Text | Yes | — |
| Email Address | Email | Yes | — |
| Phone Number | Tel | Yes | — |
| What type of project are you planning? | Dropdown | Yes | Architectural renovation, New build, Client-side project management, Not sure yet |
| What stage are you at in the design process? | Dropdown | Yes | Early concept still exploring ideas, Working with an architect or designer, Design is complete ready to tender, Other |
| Have you engaged an architect or designer? | Dropdown | Yes | Yes, Not yet, Looking for recommendations |
| Do you have a tender package? | Dropdown | Yes | Yes ready to go, In progress, No |
| What is your approximate project budget? | Dropdown | Yes | $100K - $300K, $300K - $500K, $500K - $800K, $800K - $1.5M, $1.5M - $3M, $3M+, Prefer not to say |
| Where is your project located? | Dropdown | Yes | Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Black Rock, Mentone, Bentleigh, Other Bayside Melbourne suburb, Outside Bayside Melbourne |
| Tell us about your project | Textarea | No | Placeholder: "Briefly describe your project, including any relevant details about the property, your design goals, or your timeline." |
| How did you hear about Built In. Melbourne? | Dropdown | No | Architect or designer referral, Word of mouth, Instagram, Google search, Other |

**Submit button:** "Send Enquiry" — `--color-primary` background, `--color-button-text` text

**Form styling:**
- Background: `--color-surface`
- Inputs: border 1px `--color-border`, border-radius 4px, padding 12px 16px, font DM Sans 400 16px
- Labels: DM Sans 500, 14px, `--color-text`, margin-bottom 6px
- Dropdowns: same styling as text inputs, native select element (no custom dropdown libraries)
- Focus state: border-color `--color-primary`

---

### 11. Footer

**Layout:** Simple, single section. Left-aligned or centred. No multi-column complexity.

**Content:**

```
Built In. Melbourne Pty Ltd
ABN 54 610 132 486
ACN 610 132 486
Registered Domestic Builder (Unlimited) · CDB-U 58374 · Victorian Practitioner

josh@builtinmelbourne.com.au
Instagram: @builtin.melbourne
Bayside Melbourne

© 2026 Built In. Melbourne. All rights reserved.
Privacy Policy
```

**Styling:**
- Background: `--color-text` (dark charcoal, inverted from page)
- Text: `--color-background` (off-white on dark)
- Font: DM Sans 400, 14px
- Links: underline on hover
- Padding: 64px vertical

---

## SEO and Meta

### Title Tag
```
Built In. Melbourne | High-End Architectural Builder, Bayside Melbourne
```

### Meta Description
```
High-spec architectural renovations and bespoke new builds across Bayside Melbourne.
Registered Building Practitioner Josh Coles delivers every project personally:
one builder, one point of contact, start to finish.
```

### Open Graph
- og:title: Built In. Melbourne | High-End Architectural Builder
- og:description: same as meta description
- og:image: hero image or brand mark on `--color-background`
- og:url: https://builtinmelbourne.com.au

### Image Alt Tags
Format: `architectural renovation melbourne, [project description] [suburb]`
- Example: `architectural renovation melbourne, coastal modern interior fawkner heritage home`
- Example: `high end builder melbourne, contemporary renovation henry street`

### Structured Data (JSON-LD)

Implement the following schema types:

**LocalBusiness**
```json
{
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "name": "Built In. Melbourne",
  "legalName": "Built In. Melbourne Pty Ltd",
  "url": "https://builtinmelbourne.com.au",
  "email": "josh@builtinmelbourne.com.au",
  "areaServed": {
    "@type": "City",
    "name": "Melbourne",
    "containedInPlace": { "@type": "State", "name": "Victoria" }
  },
  "founder": {
    "@type": "Person",
    "name": "Josh Coles",
    "jobTitle": "Registered Domestic Builder"
  },
  "description": "High-spec architectural renovations and bespoke new builds across Bayside Melbourne.",
  "sameAs": ["https://www.instagram.com/builtin.melbourne"]
}
```

**FAQPage** — include all seven Q&A pairs from section 9.

---

## Technical Requirements

- **Mobile-first, fully responsive.** Breakpoints: 375px (mobile), 768px (tablet), 1200px (desktop), 1440px (max content width)
- **Performance:** target Lighthouse 90+ on all metrics. Lazy load images. Preload fonts. Minify CSS/JS.
- **Accessibility:** semantic HTML, proper heading hierarchy (single H1), alt tags on all images, focus-visible states on interactive elements, minimum 4.5:1 contrast ratio
- **Smooth scroll:** anchor links scroll smoothly to sections with offset for fixed nav height
- **Favicon:** use brand mark or "B" letterform in olive on transparent background
- **No JavaScript frameworks required.** Vanilla HTML/CSS/JS is preferred for performance. If a framework is used, keep it lightweight.
- **No stock images.** Use placeholder containers with `--color-border` background and centred "Image Pending" text where photos are not yet available.
- **SSL:** site must be served over HTTPS

---

## Assets Pending from Client

| Asset | Status | Fallback |
|-------|--------|----------|
| Logo (SVG or high-res PNG) | Pending | Use Gotham/Montserrat text brand mark |
| Project photos (Fawkner, Mary, Henry) | Pending | Image placeholder containers |
| Photo of Josh | Pending | Use architectural sketch illustration |
| Architectural sketch illustration | Cleared for use | Use as background texture / design element |
| Testimonials (6 sources confirmed) | Pending | Placeholder cards with source names |
| GHL form embed code or webhook URL | To be provided by BPC | Build native HTML form, connect later |
