# Built In. Melbourne — Schema Markup Reference
**All JSON-LD blocks — copy-paste ready for implementation**
*builtinmelbourne.com.au*

---

> **Implementation note:** Inject each block as `<script type="application/ld+json">` in `<head>`.
> In Next.js App Router use `next/script` with `id` prop or `dangerouslySetInnerHTML`.
> Validate every block at: https://validator.schema.org
> Test rich results at: https://search.google.com/test/rich-results

---

## 1. LocalBusiness — GeneralContractor
**Inject on: ALL pages (in root layout)**

```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://builtinmelbourne.com.au/#business",
  "name": "Built In. Melbourne Pty Ltd",
  "alternateName": "Built In. Melbourne",
  "description": "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Every project personally managed by Josh Coles, registered domestic builder DB-U 45446 / CDB-U 58374.",
  "url": "https://builtinmelbourne.com.au",
  "email": "josh@builtinmelbourne.com.au",
  "logo": {
    "@type": "ImageObject",
    "url": "https://builtinmelbourne.com.au/images/built-in-melbourne-logo.png",
    "width": 400,
    "height": 120
  },
  "image": "https://builtinmelbourne.com.au/og/home.jpg",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Bayside Melbourne",
    "addressRegion": "VIC",
    "addressCountry": "AU"
  },
  "areaServed": [
    { "@type": "City", "name": "Brighton" },
    { "@type": "City", "name": "Elsternwick" },
    { "@type": "City", "name": "Beaumaris" },
    { "@type": "City", "name": "Caulfield" },
    { "@type": "City", "name": "Hampton" },
    { "@type": "City", "name": "Sandringham" },
    { "@type": "City", "name": "Black Rock" },
    { "@type": "City", "name": "Mentone" },
    { "@type": "City", "name": "Cheltenham" },
    { "@type": "City", "name": "Highett" },
    { "@type": "City", "name": "Bentleigh" },
    { "@type": "City", "name": "McKinnon" },
    { "@type": "City", "name": "Ormond" },
    { "@type": "City", "name": "Murrumbeena" },
    { "@type": "City", "name": "Carnegie" },
    { "@type": "City", "name": "Balaclava" },
    { "@type": "City", "name": "Hawthorn" },
    { "@type": "City", "name": "Surrey Hills" },
    { "@type": "City", "name": "Malvern" },
    { "@type": "City", "name": "Toorak" },
    { "@type": "City", "name": "South Yarra" },
    { "@type": "City", "name": "Armadale" }
  ],
  "serviceType": [
    "Architectural Renovations",
    "Heritage-Sensitive Renovations",
    "Bespoke New Builds",
    "Client-Side Project Management"
  ],
  "founder": {
    "@type": "Person",
    "@id": "https://builtinmelbourne.com.au/about#josh-coles",
    "name": "Josh Coles"
  },
  "employee": {
    "@type": "Person",
    "@id": "https://builtinmelbourne.com.au/about#josh-coles",
    "name": "Josh Coles"
  },
  "identifier": [
    {
      "@type": "PropertyValue",
      "name": "ABN",
      "value": "54 610 132 486"
    },
    {
      "@type": "PropertyValue",
      "name": "ACN",
      "value": "610 132 486"
    },
    {
      "@type": "PropertyValue",
      "name": "Company Licence",
      "value": "CDB-U 58374"
    }
  ],
  "hasCredential": {
    "@type": "EducationalOccupationalCredential",
    "credentialCategory": "licence",
    "name": "Domestic Builder (Unlimited) — Company Registration",
    "identifier": "CDB-U 58374",
    "recognizedBy": {
      "@type": "Organization",
      "name": "Victorian Building Authority"
    }
  },
  "sameAs": [
    "https://www.instagram.com/builtin.melbourne"
  ],
  "priceRange": "$$$"
}
```

---

## 2. WebSite Schema
**Inject on: Home page only**

```json
{
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://builtinmelbourne.com.au/#website",
  "name": "Built In. Melbourne",
  "url": "https://builtinmelbourne.com.au",
  "description": "High-spec architectural renovations and bespoke new builds across Bayside Melbourne.",
  "publisher": {
    "@id": "https://builtinmelbourne.com.au/#business"
  },
  "inLanguage": "en-AU"
}
```

---

## 3. Person — Josh Coles
**Inject on: About page**

```json
{
  "@context": "https://schema.org",
  "@type": "Person",
  "@id": "https://builtinmelbourne.com.au/about#josh-coles",
  "name": "Josh Coles",
  "jobTitle": "Registered Domestic Builder (Unlimited)",
  "description": "Josh Coles is a registered domestic builder with 16 years experience delivering high-spec architectural renovations and bespoke new builds across Bayside Melbourne. He holds a Domestic Builder (Unlimited) licence (DB-U 45446) and manages every Built In. Melbourne project personally.",
  "worksFor": {
    "@id": "https://builtinmelbourne.com.au/#business"
  },
  "hasCredential": [
    {
      "@type": "EducationalOccupationalCredential",
      "credentialCategory": "licence",
      "name": "Domestic Builder (Unlimited) — Individual Practitioner",
      "identifier": "DB-U 45446",
      "recognizedBy": {
        "@type": "Organization",
        "name": "Victorian Building Authority"
      }
    }
  ],
  "email": "josh@builtinmelbourne.com.au",
  "sameAs": [
    "https://www.instagram.com/builtin.melbourne"
  ],
  "knowsAbout": [
    "Architectural Renovations",
    "Heritage-Sensitive Renovations",
    "Bespoke New Builds",
    "Client-Side Project Management",
    "Domestic Building",
    "Victorian Building Authority regulations"
  ]
}
```

---

## 4. WebPage Schema
**Inject on: every page. Replace bracketed values per page.**

```json
{
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": "https://builtinmelbourne.com.au/[path]#webpage",
  "url": "https://builtinmelbourne.com.au/[path]",
  "name": "[Page title tag]",
  "description": "[Page meta description]",
  "isPartOf": {
    "@id": "https://builtinmelbourne.com.au/#website"
  },
  "about": {
    "@id": "https://builtinmelbourne.com.au/#business"
  },
  "inLanguage": "en-AU",
  "dateModified": "[YYYY-MM-DD — update on content changes]"
}
```

---

## 5. BreadcrumbList
**Inject on: ALL pages except Home**
Examples below — adapt per page.

### About page
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Home",
      "item": "https://builtinmelbourne.com.au"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "About",
      "item": "https://builtinmelbourne.com.au/about"
    }
  ]
}
```

### Services Hub
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://builtinmelbourne.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://builtinmelbourne.com.au/services" }
  ]
}
```

### Individual Service page (example: Renovations)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://builtinmelbourne.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Services", "item": "https://builtinmelbourne.com.au/services" },
    { "@type": "ListItem", "position": 3, "name": "Architectural Renovations", "item": "https://builtinmelbourne.com.au/services/architectural-renovations" }
  ]
}
```

### Projects Overview
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://builtinmelbourne.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://builtinmelbourne.com.au/projects" }
  ]
}
```

### Individual Project page (example: Surrey Hills)
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://builtinmelbourne.com.au" },
    { "@type": "ListItem", "position": 2, "name": "Projects", "item": "https://builtinmelbourne.com.au/projects" },
    { "@type": "ListItem", "position": 3, "name": "Sir Garnet Road, Surrey Hills", "item": "https://builtinmelbourne.com.au/projects/surrey-hills" }
  ]
}
```

---

## 6. ItemList — Projects Overview
**Inject on: /projects page**

```json
{
  "@context": "https://schema.org",
  "@type": "ItemList",
  "name": "Selected Work — Built In. Melbourne",
  "description": "A record of completed architectural renovations and bespoke new builds across Bayside Melbourne, personally managed by Josh Coles.",
  "url": "https://builtinmelbourne.com.au/projects",
  "numberOfItems": 7,
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Sir Garnet Road, Surrey Hills",
      "description": "Bespoke architectural new build — dark vertical cladding, walnut joinery, polished concrete floors, dark mosaic pool.",
      "url": "https://builtinmelbourne.com.au/projects/surrey-hills"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Hawsleigh Avenue, Balaclava",
      "description": "Heritage-sensitive architectural renovation — facade retained, vaulted VJ-panelled ceilings, oak joinery, bespoke garden studio.",
      "url": "https://builtinmelbourne.com.au/projects/hawsleigh-balaclava"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "Liddiard Street, Hawthorn",
      "description": "Architectural renovation — bespoke kitchen, walnut butler's pantry, brass tapware, black freestanding bath, heritage cornices retained.",
      "url": "https://builtinmelbourne.com.au/projects/liddiard-hawthorn"
    },
    {
      "@type": "ListItem",
      "position": 4,
      "name": "Murrumbeena",
      "description": "Architectural renovation — navy shaker cabinetry, marble slab surfaces, brass hardware, freestanding bath on marble checkerboard floors.",
      "url": "https://builtinmelbourne.com.au/projects/murrumbeena"
    },
    {
      "@type": "ListItem",
      "position": 5,
      "name": "The Fawkner Residence",
      "description": "Heritage-sensitive architectural renovation — coastal modern direction, Velux skylights, Bowings stone and tile.",
      "url": "https://builtinmelbourne.com.au/projects/fawkner-residence"
    },
    {
      "@type": "ListItem",
      "position": 6,
      "name": "The Mary Residence",
      "description": "Full-scale architectural renovation — modern aesthetic, considered material selections, direct builder oversight throughout.",
      "url": "https://builtinmelbourne.com.au/projects/mary-residence"
    },
    {
      "@type": "ListItem",
      "position": 7,
      "name": "The Henry Residence",
      "description": "Contemporary architectural renovation — refined finishes, modern direction, personally managed by Josh Coles from brief to handover.",
      "url": "https://builtinmelbourne.com.au/projects/henry-residence"
    }
  ]
}
```

---

## 7. FAQPage Schema
**Inject on: Home, /services/architectural-renovations, /services/new-builds, /services/client-side-project-management, /faq**

> Each page uses only the FAQ questions present on that page.
> Full question set below — select relevant subset per page.

### HOME — 4 FAQs
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of projects does Built In. Melbourne take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne is set up for considered, architect-designed residential projects: high-spec architectural renovations, bespoke new builds, and client-side project management. Josh Coles works on projects where complexity, personal oversight, and quality of finish genuinely matter. Most work is across Bayside Melbourne and the inner south-east, though Built In. is open to well-suited projects beyond this area."
      }
    },
    {
      "@type": "Question",
      "name": "Will I deal directly with Josh Coles, or is the work handed to a supervisor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Every client deals directly with Josh Coles from the first conversation through to handover. He is the single point of contact, on site, and the person every trade reports to. Built In. Melbourne deliberately limits the number of projects taken on at any time so this level of direct involvement is possible on every build. There are no project managers or site supervisors sitting between Josh and his clients."
      }
    },
    {
      "@type": "Question",
      "name": "Can Built In. Melbourne work with my architect or designer?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes, and Josh Coles actively prefers it. Built In. Melbourne works with a number of established Melbourne architects and is open to working with any design team. The best outcomes happen when Josh is brought in early — before the tender package is finalised — so he can review the plans, flag buildability issues, and align the design intent with what is realistic on site before the budget is set."
      }
    },
    {
      "@type": "Question",
      "name": "Is Built In. Melbourne licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Josh Coles holds a Domestic Builder (Unlimited) licence as a registered Victorian practitioner (DB-U 45446), and Built In. Melbourne Pty Ltd is separately registered under CDB-U 58374. Both registrations are current. Built In. Melbourne is fully insured, and documentation is available on request from any client or architect."
      }
    }
  ]
}
```

### /services/architectural-renovations — 5 FAQs
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What is the difference between a high-spec renovation and a standard renovation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A high-spec architectural renovation typically involves structural alterations, an architect or designer-led documentation package, and premium material and finish selections throughout. Built In. Melbourne's renovation projects are characterised by complexity — heritage overlays, custom joinery, interior-designed finishes, and trades working to a level of precision that doesn't leave room for shortcuts. These projects generally take twelve to eighteen months from tender to handover, depending on scope."
      }
    },
    {
      "@type": "Question",
      "name": "Does Built In. Melbourne handle heritage-sensitive renovations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A significant portion of Built In. Melbourne's renovation work is heritage-sensitive. Josh Coles has delivered projects in Balaclava, Hawthorn, Brighton, Elsternwick, and Caulfield — all suburbs with heritage overlays. This includes facade retention, matching period materials, working within planning constraints, and coordinating with heritage consultants where required. The Hawsleigh Avenue project in Balaclava is a recent example: the facade was retained in full while the rear was entirely reimagined."
      }
    },
    {
      "@type": "Question",
      "name": "Which suburbs does Built In. Melbourne service for renovations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most of Built In. Melbourne's renovation work is concentrated across Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Balaclava, Hawthorn, Murrumbeena, Malvern, and surrounding suburbs. Josh Coles is open to well-suited projects beyond this area — the best way to find out if a project is the right fit is to start with a conversation."
      }
    },
    {
      "@type": "Question",
      "name": "How early in the design process should Built In. Melbourne be brought in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "The earlier, the better. Josh Coles actively prefers to be involved before the tender package is finalised. At the preliminary stage, he can flag buildability issues, identify structural cost savings, and help align the design intent with what is realistic on site — before the budget is locked in. Working with the design team at the preliminary stage consistently produces better outcomes and avoids cost surprises once construction begins."
      }
    },
    {
      "@type": "Question",
      "name": "What does a Built In. Melbourne renovation cost?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "High-spec architectural renovations vary significantly in cost depending on scope, existing structure, material selections, and site conditions. Built In. Melbourne uses a staged tendering process: preliminary costing, a detailed scope, and a final fixed-price tender. This approach ensures there are no surprises when the build begins. The most accurate way to understand the likely cost of a specific project is to start with a conversation with Josh Coles."
      }
    }
  ]
}
```

### /services/new-builds — 4 FAQs
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does a bespoke new build with Built In. Melbourne involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne's new build projects are ground-up custom homes with architect-led designs and high-spec interiors, personally managed by Josh Coles from tender through to handover. Every project is unique in design brief, material palette, and scope. Josh is on site throughout the build, communicates with the client weekly, and coordinates personally with the architect and design team. Built In. limits the number of concurrent projects to ensure this level of direct involvement is possible on every build."
      }
    },
    {
      "@type": "Question",
      "name": "What types of new builds does Built In. Melbourne take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne's new build work covers contemporary custom homes across Bayside Melbourne and the inner south-east — including coastal modern, clean contemporary, and fully bespoke architectural briefs. The Sir Garnet Road residence in Surrey Hills is a recent example: a two-storey custom home with dark vertical cladding, walnut joinery throughout, polished concrete floors, and a dark mosaic pool. The complexity of the brief, not the style, is what determines whether a project is the right fit."
      }
    },
    {
      "@type": "Question",
      "name": "Does Built In. Melbourne manage the full build, or just the construction phase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Josh Coles manages the complete build: from coordinating the tender package and managing structural and engineering requirements through to overseeing every trade on site and walking the client through the finished home at handover. He is the single point of contact throughout. Nothing is handed off to a supervisor or project manager at any stage of the build."
      }
    },
    {
      "@type": "Question",
      "name": "When should Built In. Melbourne be brought into a new build project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early involvement is strongly preferred. If the architectural design is still in progress, Josh Coles can review plans, advise on buildability, and help the design team identify structural and sequencing efficiencies before the documentation is finalised. This typically saves clients money and avoids the cost surprises that arise when a builder is handed a completed tender package and must price in unknowns."
      }
    }
  ]
}
```

### /services/client-side-project-management — 4 FAQs
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What does client-side project management with Built In. Melbourne involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client-side project management means Josh Coles acts as an independent advocate for the homeowner throughout their build with another contractor. He reviews documentation, attends site meetings, assesses workmanship at critical construction stages, and provides clear advice on whether the work meets the specification and Australian standards. He documents any issues identified and advises on how to raise them with the builder constructively and with appropriate documentation."
      }
    },
    {
      "@type": "Question",
      "name": "Does the builder need to agree to client-side project management?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "It is worth establishing early. Most reputable builders welcome the arrangement, particularly when introduced as a standard part of how the homeowner manages the project. If a builder objects to independent oversight of work that should comply with approved plans and Australian standards, that is itself useful information. Josh Coles can advise on how to introduce the arrangement professionally and without creating adversarial dynamics."
      }
    },
    {
      "@type": "Question",
      "name": "At what stage of the build can this service begin?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client-side project management can begin at any stage — ideally before construction starts, so Josh can review the documentation and establish a baseline before work begins. Where a project is already underway, Josh can come in at any point and provide an independent assessment of progress and workmanship to date, then continue through to handover."
      }
    },
    {
      "@type": "Question",
      "name": "Does this service cover Bayside Melbourne and the inner south-east?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Josh Coles provides client-side project management across Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Hawthorn, Malvern, Toorak, South Yarra, and surrounding suburbs. Built In. Melbourne is open to projects outside this area if the scope and fit are right. The best way to discuss is to get in touch directly."
      }
    }
  ]
}
```

### /faq — Full 12-question FAQPage
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "What types of projects does Built In. Melbourne take on?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne is set up for considered, architect-designed residential projects: high-spec architectural renovations, bespoke new builds, and client-side project management. Josh Coles works on projects where complexity, personal oversight, and quality of finish genuinely matter. Most work is across Bayside Melbourne and the inner south-east, including Brighton, Elsternwick, Beaumaris, Caulfield, Hawthorn, Surrey Hills, and surrounding suburbs."
      }
    },
    {
      "@type": "Question",
      "name": "Will I deal directly with Josh Coles, or is the work handed to a supervisor?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Clients deal directly with Josh Coles from the first conversation through to handover. He is the single point of contact — on site, across every detail, and the person every trade reports to. Built In. Melbourne deliberately limits the number of projects taken on at any time so this level of direct involvement is possible on every build. There are no project managers or site supervisors sitting between Josh and his clients."
      }
    },
    {
      "@type": "Question",
      "name": "Is Built In. Melbourne licensed and insured?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Josh Coles holds a Domestic Builder (Unlimited) licence as a registered Victorian practitioner (DB-U 45446), and Built In. Melbourne Pty Ltd is separately registered under CDB-U 58374. Both registrations are current. Built In. Melbourne is fully insured, and documentation is available on request from any client or architect."
      }
    },
    {
      "@type": "Question",
      "name": "What areas does Built In. Melbourne service?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Most of Built In. Melbourne's work is across Bayside Melbourne and the inner south-east — including Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Black Rock, Mentone, Cheltenham, Highett, Bentleigh, McKinnon, Ormond, Murrumbeena, Carnegie, Balaclava, Hawthorn, Surrey Hills, Malvern, Toorak, South Yarra, and surrounding suburbs. Josh is open to well-suited projects outside this area."
      }
    },
    {
      "@type": "Question",
      "name": "What is a high-spec architectural renovation?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "A high-spec architectural renovation involves structural alterations, an architect or designer-led documentation package, premium materials, and a level of finish that goes beyond a cosmetic update. Built In. Melbourne's renovation projects typically involve heritage overlays or complex structural requirements, interior-designed finishes, and specialist trades. These projects generally take twelve to eighteen months from tender to handover, depending on scope."
      }
    },
    {
      "@type": "Question",
      "name": "Does Built In. Melbourne handle heritage-sensitive renovations?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. A significant portion of Built In. Melbourne's renovation work is heritage-sensitive. Josh Coles has delivered projects in Balaclava, Hawthorn, Brighton, Elsternwick, and Caulfield — all suburbs with heritage overlays. This includes facade retention, matching period materials, working within planning constraints, and coordinating with heritage consultants. The Hawsleigh Avenue project in Balaclava is a recent example."
      }
    },
    {
      "@type": "Question",
      "name": "What does a bespoke new build with Built In. Melbourne involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne's new build projects are ground-up custom homes with architect-led designs and high-spec interiors, personally managed by Josh Coles from tender through to handover. Josh is on site throughout the build, communicates with the client weekly, and coordinates personally with the architect and design team. Built In. limits the number of concurrent projects to ensure this level of direct involvement is possible on every build."
      }
    },
    {
      "@type": "Question",
      "name": "Does Built In. Melbourne manage the full build, or just the construction phase?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Josh Coles manages the complete build: from coordinating the tender package and managing structural and engineering requirements through to overseeing every trade on site and walking the client through the finished home at handover. He is the single point of contact throughout. Nothing is handed off to a supervisor or project manager at any stage."
      }
    },
    {
      "@type": "Question",
      "name": "What does the Built In. Melbourne tendering process look like?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Built In. Melbourne uses a staged tendering process: preliminary costing, a detailed scope, and a final fixed-price tender. Each stage refines the numbers so there are no surprises when construction begins. Where Josh is involved before the tender package is finalised, he can also advise on structural and design cost efficiencies — often saving clients money before a dollar is spent on construction."
      }
    },
    {
      "@type": "Question",
      "name": "How early in the design process should Built In. Melbourne be brought in?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Early involvement is strongly preferred. At the preliminary design stage, Josh Coles can review plans, flag buildability issues, identify structural and sequencing efficiencies, and advise on material lead times — all before the documentation is finalised. This consistently saves clients money and reduces the likelihood of cost surprises once construction begins."
      }
    },
    {
      "@type": "Question",
      "name": "What does client-side project management with Built In. Melbourne involve?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Client-side project management means Josh Coles acts as an independent advocate for the homeowner throughout their build with another contractor. He reviews documentation, attends site meetings, assesses workmanship at critical construction stages, and provides clear advice on whether the work meets the specification and Australian standards. He documents issues identified and advises on how to raise them constructively with the builder."
      }
    },
    {
      "@type": "Question",
      "name": "Who is client-side project management for?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "This service suits homeowners investing in a significant build — typically a high-spec renovation or new build — who don't have a building background and want qualified oversight of the work as it progresses. It's particularly valuable on complex builds where the level of finish and the coordination requirements are high, and where the homeowner feels they lack the knowledge to independently assess what they're seeing on site."
      }
    }
  ]
}
```

---

## 8. Schema — Future Use (do NOT implement at launch)

### AggregateRating
**Add when:** Google Business Profile established AND minimum 5 verified Google reviews.

```json
{
  "@context": "https://schema.org",
  "@type": "GeneralContractor",
  "@id": "https://builtinmelbourne.com.au/#business",
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "5.0",
    "reviewCount": "12",
    "bestRating": "5",
    "worstRating": "1"
  }
}
```

### Review (individual)
**Add when:** Real verbatim reviews with full reviewer name, date, and 5-star rating are confirmed.

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@id": "https://builtinmelbourne.com.au/#business"
  },
  "author": {
    "@type": "Person",
    "name": "[Reviewer Full Name]"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "5",
    "bestRating": "5"
  },
  "reviewBody": "[Verbatim review text — do not paraphrase]",
  "datePublished": "[YYYY-MM]"
}
```

---

## 9. Validation Checklist

Run these checks on every schema block before launch:

| Tool | URL | What to check |
|---|---|---|
| Schema.org Validator | https://validator.schema.org | No errors or warnings |
| Google Rich Results Test | https://search.google.com/test/rich-results | FAQPage eligible for rich snippets |
| Google Search Console | After launch | Monitor rich result performance |

**Common errors to watch for:**
- Missing `@context` on any block
- `@id` values that don't resolve to real URLs
- FAQPage answers referencing other sections ("see above")
- AggregateRating added without verified review data (Google penalises this)
- BreadcrumbList with incorrect `position` numbering
