export type TestimonialImage = {
  src: string;
  alt: string;
};

export type TestimonialCategory = "renovation" | "extension" | "new-build";

export type TestimonialFilterId = "all" | TestimonialCategory;

export type Testimonial = {
  id: string;
  quote: string;
  excerpt?: string;
  name: string;
  role: string;
  type: "client" | "collaborator";
  projectCategory?: TestimonialCategory;
  /** Link to a project detail page when available */
  projectSlug?: string;
  projectLinkLabel?: string;
  image?: TestimonialImage;
  imagesRepresentative?: boolean;
};

export const testimonialFilters: { id: TestimonialFilterId; label: string }[] = [
  { id: "all", label: "All projects" },
  { id: "renovation", label: "Renovations" },
  { id: "extension", label: "Extensions" },
  { id: "new-build", label: "New builds" },
];

export const testimonials: Testimonial[] = [
  {
    id: "kate-bednarz",
    type: "client",
    projectCategory: "renovation",
    quote:
      "We first met Josh and his team when they undertook an underpinning job on our 1930's double brick home. His energy and professionalism stood out straight away, so when it came to the full double storey renovation, he was first on our list. We truly couldn't have built the home of our dreams if it wasn't for Josh. His willingness to listen and work with us to go through ideas and problem solve budget constraints went above and beyond. He was always willing to give us his time and was patient with our million questions. Josh's warm, calm approach was a constant throughout the project, especially when it came to getting through the massive hurdle that was covid lockdown. Navigating restrictions, as we were living on site, as well as supply shortages was no easy feat, but Josh carried us and his team through. We are forever grateful for his work and for the incredible home we are now so lucky to live in with our growing family thanks to him.",
    excerpt:
      "We first met Josh and his team when they undertook an underpinning job on our 1930's double brick home. His energy and professionalism stood out straight away, so when it came to the full double storey renovation, he was first on our list. We truly couldn't have built the home of our dreams if it wasn't for Josh.",
    name: "Kate Bednarz",
    role: "Neville Street clients",
    imagesRepresentative: true,
    image: {
      src: "/images/projects/hawsleigh-balaclava/built-in-melbourne-heritage-renovation-built-in-window-seat-balaclava.jpg",
      alt: "Heritage renovation with built-in window seat: representative project imagery",
    },
  },
  {
    id: "feb-and-sam",
    type: "client",
    projectCategory: "renovation",
    quote:
      "After researching several builders, we feel incredibly fortunate that we went ahead with Built in Melbourne. Josh was able to listen to our plans and execute them beyond what we had hoped! The team was attentive, timely and got the job done! It's also much easier when working with someone who is open and transparent about the challenges with renovating (which can come out of nowhere!). Would highly recommend Josh and the team at Built in Melbourne.",
    name: "Feb and Sam",
    role: "Moira clients",
    imagesRepresentative: true,
    image: {
      src: "/images/projects/murrumbeena/built-in-melbourne-kitchen-marble-island-window-seat-brass-mixer-murrumbeena.jpg",
      alt: "Kitchen with marble island and window seat: representative project imagery",
    },
  },
  {
    id: "nina-matyas",
    type: "collaborator",
    quote:
      "It's always a pleasure working with Josh from Built In Melbourne on our interior design projects. He's incredibly friendly, easy to get along with, and brings a great attitude to every collaboration. He genuinely respects the design intent we set out in our design and documentation, and works to see it through to fruition. Communication is always quick and constructive, and he has a fantastic team behind him.",
    name: "Nina Matyas",
    role: "Matyas Interiors",
  },
  {
    id: "michael-welgus",
    type: "collaborator",
    quote:
      "As a design practice, contractor selection and direct collaboration with the builder is fundamental to how we deliver our projects. It ensures not only a high level of finish, but also that our clients are supported through a transparent and well-managed construction process. Studio Welgus has built a long-standing relationship with Josh and his team. Their communication, professionalism and attention to detail consistently resonate with our clients, who often comment on how seamless and collaborative the experience feels.",
    name: "Michael Welgus",
    role: "Studio Welgus",
  },
];

export function getVisibleFilters() {
  return testimonialFilters;
}

export function filterTestimonials(filter: TestimonialFilterId): Testimonial[] {
  if (filter === "all") {
    return testimonials;
  }

  return testimonials.filter((testimonial) => testimonial.projectCategory === filter);
}

export const clientTestimonials = testimonials.filter((t) => t.type === "client");
export const collaboratorTestimonials = testimonials.filter(
  (t) => t.type === "collaborator"
);
