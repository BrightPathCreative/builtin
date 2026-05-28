import { getProjectImages } from "./images";

export type ProjectSection = {
  heading: string;
  paragraphs: string[];
};

export type Project = {
  slug: string;
  title: string;
  type: string;
  suburb: string | null;
  year: string | null;
  collaborator: string | null;
  excerpt: string;
  featuredExcerpt?: string;
  featuredType?: string;
  heroImage: string;
  metaTitle: string;
  metaDescription: string;
  sections: ProjectSection[];
  standoutDetails: string[];
  images: { src: string; alt: string }[];
};

const surreyHillsImages = getProjectImages("surrey-hills", "Surrey Hills");
const balaclavaImages = getProjectImages("hawsleigh-balaclava", "Balaclava");
const hawthornImages = getProjectImages("liddiard-hawthorn", "Hawthorn");
const murrumbeenaImages = getProjectImages("murrumbeena", "Murrumbeena");

export const projects: Project[] = [
  {
    slug: "surrey-hills",
    title: "Sir Garnet Road, Surrey Hills",
    type: "Bespoke Architectural New Build",
    suburb: "Surrey Hills",
    year: null,
    collaborator: null,
    excerpt:
      "A ground-up contemporary home: dark vertical cladding, walnut joinery throughout, polished concrete floors, and a dark mosaic pool. The full scope of what a Built In. new build delivers.",
    featuredExcerpt:
      "A ground-up contemporary home in Surrey Hills: dark vertical cladding, curved timber batten facade, walnut joinery throughout, and a dark mosaic pool.",
    heroImage:
      surreyHillsImages[0]?.src ??
      "/images/projects/surrey-hills/built-in-melbourne-exterior-contemporary-new-build-dark-cladding-surrey-hills.jpg",
    metaTitle: "Sir Garnet Road, Surrey Hills | Built In. Melbourne",
    metaDescription:
      "A bespoke two-storey new build in Surrey Hills: dark cladding, curved timber batten facade, walnut joinery, polished concrete floors, and a dark mosaic pool.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A ground-up custom home in Surrey Hills, built to a contemporary architectural brief that demanded precision at every level. The brief called for a home that made a considered statement on the street while delivering an interior that was both highly functional and genuinely refined, designed and built to be lived in at a high level.",
          "Josh Coles managed the full build from tender through to handover. Every trade on site operated under the same standard: no shortcuts, no deviation from spec, no compromise on the detail.",
        ],
      },
      {
        heading: "The Exterior",
        paragraphs: [
          "The exterior is defined by dark vertical cladding, a curved timber batten upper-level facade, a white brick base, and a black steel pergola framing the alfresco entertaining area. Full-height glazing runs the length of the living zone, connecting the interior to the outdoor entertaining space without compromise.",
        ],
      },
      {
        heading: "The Interior",
        paragraphs: [
          "The home is anchored by a showpiece kitchen: white fluted cabinetry, a curved island with stone benchtop, a walnut full-height pantry wall, timber batten ceiling, and polished concrete floors. Adjacent to the kitchen, a custom walnut bar with mirror splashback and metal floating shelves serves the entertaining space.",
          "The feature staircase rises through a double-height void behind a full-height timber batten screen with walnut handrail, one of the defining architectural gestures of the interior. Living areas feature a white brick fireplace wall, built-in walnut joinery, and black track lighting.",
          "Bathrooms include a double shower with brushed bronze rain heads and body jets, a freestanding bath set against a fluted tile feature wall, and a curved floating walnut vanity. Bedrooms are fitted with custom wardrobes in white fluted panel doors with walnut frames.",
        ],
      },
      {
        heading: "The Pool and Outdoor Spaces",
        paragraphs: [
          "Outside, a dark blue mosaic-tiled pool with glass fencing completes the property. The black steel pergola frames the alfresco entertaining area, which opens directly from the kitchen and living zone through full-height glazing.",
        ],
      },
    ],
    standoutDetails: [
      "Polished concrete floors throughout the living zones",
      "Curved timber batten facade: bespoke architectural element, executed to millimetre precision",
      "Custom walnut bar with mirror splashback and metal floating shelves",
      "Feature staircase: full-height timber batten screen with walnut handrail, double-height void",
      "Brushed bronze rain heads and body jets: custom bathroom specification throughout",
      "White fluted cabinetry: curved island with stone benchtop",
      "Dark blue mosaic-tiled pool with glass pool fencing",
      "Black steel pergola: alfresco entertaining area",
    ],
    images: surreyHillsImages,
  },
  {
    slug: "hawsleigh-balaclava",
    title: "Hawsleigh Avenue, Balaclava",
    type: "Heritage-Sensitive Architectural Renovation",
    suburb: "Balaclava",
    year: null,
    collaborator: null,
    excerpt:
      "Heritage facade retained. The rear entirely reimagined. Vaulted VJ-panelled ceilings, custom oak joinery, encaustic tiles, and a bespoke detached garden studio.",
    featuredExcerpt:
      "A heritage renovation in Balaclava where the original facade was preserved and the rear entirely reimagined: vaulted VJ-panelled ceilings, oak joinery, and a bespoke detached garden studio.",
    heroImage:
      balaclavaImages.find((img) => img.src.includes("heritage-renovation"))?.src ??
      balaclavaImages[0]?.src ??
      "",
    metaTitle: "Hawsleigh Avenue, Balaclava | Built In. Melbourne",
    metaDescription:
      "Heritage facade retained. Rear entirely reimagined. Vaulted VJ-panelled ceilings, oak joinery, encaustic tiles, and a bespoke garden studio. Built In. Melbourne, Balaclava.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A heritage renovation in Balaclava that demanded something specific: preserve the original brick facade in full while delivering a contemporary transformation to the rear that would completely change how the home functioned and felt. The heritage overlay placed clear constraints on what could be altered at the front. Everything behind the facade was within scope.",
          "The project also included the design and build of a detached garden studio in the rear yard, a self-contained structure finished in dark cladding with sliding glass doors.",
        ],
      },
      {
        heading: "The Rear Transformation",
        paragraphs: [
          "The new open-plan kitchen and living area features vaulted VJ-panelled ceilings, full-height black-framed bifold doors opening onto a covered alfresco deck, and custom oak joinery throughout. The kitchen is anchored by a curved island with oak cabinetry, stone benchtops, and VJ-panel pantry doors.",
          "A built-in window seat bridges the heritage front rooms with the new extension, a considered detail that connects the two halves of the home without one overwhelming the other. Stone benchtops continue throughout, including the dedicated laundry with its finger-tile splashback.",
        ],
      },
      {
        heading: "Bathrooms and Finishes",
        paragraphs: [
          "The bathrooms are finished in encaustic floor tiles with matte black tapware and LED-lit floating shelves. The encaustic tile selection was chosen to sit at the intersection of the heritage character at the front of the house and the contemporary language of the new rear, connecting both halves of the interior through a single material decision.",
        ],
      },
      {
        heading: "The Garden Studio",
        paragraphs: [
          "The detached garden studio is clad in dark boarding with sliding glass doors, a compact, well-resolved building that sits within the rear yard without competing with the main house. It functions as an independent workspace or retreat while maintaining a clear visual relationship with the alfresco deck and the rear of the renovated home.",
        ],
      },
    ],
    standoutDetails: [
      "Heritage brick facade retained in full",
      "Vaulted VJ-panel ceilings to new rear living zone",
      "Full-height black-framed bifold doors to covered alfresco deck",
      "Custom curved oak kitchen island with stone benchtops",
      "Encaustic floor tiles throughout bathrooms",
      "Built-in window seat: bridges heritage front and contemporary rear",
      "Bespoke detached garden studio: dark cladding, sliding glass doors",
      "Finger-tile laundry splashback with stone benchtops",
    ],
    images: balaclavaImages,
  },
  {
    slug: "liddiard-hawthorn",
    title: "Liddiard Street, Hawthorn",
    type: "Architectural Renovation",
    suburb: "Hawthorn",
    year: null,
    collaborator: "H Plus H Projects (pending confirmation)",
    excerpt:
      "A refined renovation centred on a bespoke kitchen and luxury bathroom: dark cabinetry, walnut butler's pantry, brass tapware, and heritage cornices preserved throughout.",
    heroImage:
      hawthornImages.find((img) => img.src.includes("kitchen-island"))?.src ??
      hawthornImages[0]?.src ??
      "",
    metaTitle: "Liddiard Street, Hawthorn | Built In. Melbourne",
    metaDescription:
      "A refined kitchen and bathroom renovation in Hawthorn: dark cabinetry, walnut butler's pantry, brass tapware, black freestanding bath, and heritage cornices retained.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A renovation in Hawthorn centred around a complete rethink of the kitchen and bathrooms, the two rooms where where the quality of execution is most visible and most tested over time. The brief called for a bespoke kitchen with a considered material palette and a concealed butler's pantry, and a bathroom that delivered genuine luxury without excess.",
          "Heritage cornices were to be retained throughout, a constraint that grounded the contemporary finishes within the existing character of the home rather than erasing it.",
        ],
      },
      {
        heading: "The Kitchen",
        paragraphs: [
          "The kitchen features dark grey cabinetry, a garden window splashback that brings natural light directly to the bench, and a concealed butler's pantry finished in walnut timber with open shelving and a dedicated coffee station. Heritage cornices, preserved throughout the build, anchor the contemporary kitchen within the character of the original home. Recycled timber flooring runs through the living areas.",
        ],
      },
      {
        heading: "The Bathroom",
        paragraphs: [
          "The bathroom showcases a black freestanding bath, brass wall-mount tapware, white subway tiles, dark hexagonal floor tiles, and a custom oak vanity with brass cup handles. Every detail in the material palette (the contrast between the dark bath, the brass fittings, and the white tile) was executed with the precision the brief required.",
          "The hexagonal floor tile is a detail that earns its place. It adds texture and character without competing with the stronger elements of the room.",
        ],
      },
    ],
    standoutDetails: [
      "Dark grey cabinetry with garden window splashback: natural light to the bench",
      "Concealed walnut butler's pantry with dedicated coffee station",
      "Heritage cornices retained throughout",
      "Black freestanding bath with brass wall-mount tapware",
      "Custom oak vanity with brass cup handles",
      "Dark hexagonal floor tiles: texture and character",
      "Recycled timber flooring: living areas",
      "White subway tiles: bathroom walls",
    ],
    images: hawthornImages,
  },
  {
    slug: "murrumbeena",
    title: "Murrumbeena",
    type: "Architectural Renovation",
    suburb: "Murrumbeena",
    year: null,
    collaborator: null,
    excerpt:
      "A cohesive renovation across kitchen, bathrooms, laundry, and mudroom: navy shaker cabinetry, marble slab surfaces, brass hardware throughout, and a freestanding bath on marble checkerboard floors.",
    heroImage:
      murrumbeenaImages.find((img) => img.src.includes("kitchen-marble-island"))
        ?.src ??
      murrumbeenaImages[0]?.src ??
      "",
    metaTitle: "Murrumbeena | Built In. Melbourne",
    metaDescription:
      "A cohesive renovation across kitchen, bathrooms, laundry, and mudroom in Murrumbeena: navy shaker cabinetry, marble slab surfaces, brass hardware, and a freestanding bath.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A comprehensive interior renovation in Murrumbeena where the brief asked for something specific: complete consistency of design language across four distinct rooms: kitchen, bathrooms, laundry, and mudroom. Each room had its own functional requirements. The challenge was delivering them all as a single, resolved interior.",
          "The palette (navy, marble, and brass) had to carry across every space without becoming repetitive. The result reads as considered from the mudroom entry to the kitchen window seat, with every detail placed rather than added.",
        ],
      },
      {
        heading: "The Kitchen",
        paragraphs: [
          "The kitchen is defined by navy blue shaker cabinetry, a marble slab island and splashback, and industrial black wall sconces. A built-in window seat nook with garden views sits at one end, a detail that softens the room while reinforcing its connection to the outdoor space. Brass hardware and a gooseneck mixer carry the palette. Oak timber flooring and floating shelves add warmth.",
        ],
      },
      {
        heading: "The Bathrooms",
        paragraphs: [
          "The bathroom continues the navy and marble direction with a freestanding bath on marble checkerboard floor tiles, a brass rain shower, and crystal wall sconces. The laundry is finished in blue-grey shaker cabinetry with oak open shelving and brass tapware, restrained and functional, but unmistakably part of the same interior.",
        ],
      },
      {
        heading: "The Mudroom",
        paragraphs: [
          "The mudroom entry completes the scope with custom built-in bench seating, shaker panelling, brass knob handles, and marble checkerboard flooring, the same material that marks the bathroom and closes the sequence at the front of the house. It's a considered entry point that sets the tone for the interior before a single room is entered.",
        ],
      },
    ],
    standoutDetails: [
      "Navy shaker cabinetry: kitchen, laundry, and mudroom",
      "Marble slab island and splashback: kitchen",
      "Freestanding bath on marble checkerboard floor tiles: bathroom",
      "Brass hardware consistent across all four rooms",
      "Built-in window seat nook: kitchen, garden views",
      "Crystal wall sconces: bathroom",
      "Custom mudroom with bench seating, shaker panelling, brass knob handles",
      "Blue-grey shaker laundry cabinetry with oak open shelving",
    ],
    images: murrumbeenaImages,
  },
  {
    slug: "fawkner-residence",
    title: "The Fawkner Residence",
    type: "Heritage-Sensitive Architectural Renovation",
    suburb: null,
    year: null,
    collaborator: null,
    excerpt:
      "A heritage site reimagined as a coastal modern home: maximum light and space within a tight heritage overlay, Velux skylights, and premium stone and tile finishes throughout.",
    featuredExcerpt:
      "A heritage site reimagined as a coastal modern home: maximum light and space within a tight heritage overlay, with Velux skylights and premium stone finishes throughout.",
    featuredType: "Architectural Renovation (Heritage Sensitive)",
    heroImage: "/images/brand/architectural-sketch.png",
    metaTitle: "Fawkner Residence | Heritage Renovation | Built In. Melbourne",
    metaDescription:
      "A heritage site reimagined as a coastal modern home in Melbourne: maximum light, Velux skylights, premium stone and tile by Bowings. Built In. Melbourne.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A heritage site with significant constraints and a brief that tested them. The client needed maximum rooms and bathrooms within the boundaries set by the heritage overlay, with one original wall retained, the rest of the site reimagined. The direction was coastal modern: a home that feels open, light, and considered despite a compact footprint.",
        ],
      },
      {
        heading: "What Was Delivered",
        paragraphs: [
          "A coastal modern home designed to maximise light, space, and site coverage. The heritage overlay required one original wall to be retained: that constraint shaped the entire design, determining room placement, circulation, and how natural light was introduced across the plan.",
          "Premium flooring, stone, and tiling throughout were supplied by Bowings. Velux skylights were installed to flood the interior with natural light, a material decision that shaped how the home reads from inside as much as any structural element. The finished home meets the heritage requirements at the front while delivering a contemporary, high-performing interior throughout.",
        ],
      },
    ],
    standoutDetails: [
      "Heritage overlay compliant: one original wall retained as required",
      "Coastal modern direction: light, open, considered",
      "Maximum rooms and bathrooms within a compact heritage footprint",
      "Velux skylights: natural light as a core design element",
      "Premium flooring, stone, and tiling by Bowings",
    ],
    images: [],
  },
  {
    slug: "mary-residence",
    title: "The Mary Residence",
    type: "Architectural Renovation",
    suburb: null,
    year: null,
    collaborator: null,
    excerpt:
      "A full-scale renovation delivering a modern, sleek aesthetic: clean lines, considered material selections, and precision in the finished detail at every stage.",
    heroImage: "/images/brand/architectural-sketch.png",
    metaTitle: "Mary Residence | Architectural Renovation | Built In.",
    metaDescription:
      "A full-scale architectural renovation in Melbourne: modern aesthetic, considered material selections, and direct builder oversight from Josh Coles at every stage.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A full-scale renovation briefed around a specific aesthetic: modern and sleek, but grounded in the proportions and character of the existing home. Clean lines. Considered material selections. A level of precision in the finished detail that only comes from direct builder oversight at every stage of construction.",
        ],
      },
      {
        heading: "What Was Delivered",
        paragraphs: [
          "A full-scale renovation delivering a modern, sleek aesthetic throughout. Every material selection was deliberate, every line considered, and the quality of the finished detail reflects what direct builder oversight makes possible when Josh Coles is personally on site at every critical stage.",
        ],
      },
    ],
    standoutDetails: [],
    images: [],
  },
  {
    slug: "henry-residence",
    title: "The Henry Residence",
    type: "Architectural Renovation",
    suburb: null,
    year: null,
    collaborator: null,
    excerpt:
      "A contemporary renovation designed for how the homeowners actually live: refined finishes, a modern direction, and Josh Coles as the sole point of contact from first meeting through to handover.",
    heroImage: "/images/brand/architectural-sketch.png",
    metaTitle: "Henry Residence | Architectural Renovation | Built In. Melbourne",
    metaDescription:
      "A contemporary architectural renovation in Melbourne: refined finishes, modern direction, and Josh Coles personally on site from brief to handover.",
    sections: [
      {
        heading: "The Brief",
        paragraphs: [
          "A contemporary renovation with a refined, modern direction, designed for how the homeowners actually live. The brief wasn't about making a statement. It was about delivering a home that functions precisely and finishes precisely, with Josh Coles as the sole point of contact from first meeting through to handover.",
        ],
      },
      {
        heading: "What Was Delivered",
        paragraphs: [
          "A contemporary renovation with a refined, modern direction. The material selections were considered, the design direction was clear, and the execution reflected the direct oversight that defines every Built In. project. Every trade worked to the same standard. Every detail was reviewed personally before the build moved to the next stage.",
        ],
      },
    ],
    standoutDetails: [],
    images: [],
  },
];

export function getProject(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug);
}

export function getFeaturedProjects(slugs: string[]): Project[] {
  return slugs
    .map((slug) => getProject(slug))
    .filter((project): project is Project => project !== undefined);
}
