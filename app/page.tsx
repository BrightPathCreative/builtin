import Link from "next/link";
import ProjectCarousel, { type CarouselImage } from "./components/ProjectCarousel";
import HeroCarousel from "./components/HeroCarousel";

const faqs = [
  {
    question: "What does a high-spec renovation actually involve?",
    answer:
      "It's a significant transformation of an existing home, typically involving structural changes, premium materials, interior-designed finishes, and a level of complexity that goes well beyond a cosmetic refresh. Most of Josh's renovation projects are heritage-sensitive or architecturally designed."
  },
  {
    question: "Will I deal directly with Josh, or is the work handed off to a supervisor?",
    answer:
      "You deal directly with Josh. From the first meeting through to handover, he is the single point of contact, on site, across the detail, and communicating with you weekly."
  },
  {
    question: "What kind of projects does Built In. Melbourne take on?",
    answer:
      "Built In. Melbourne is set up for considered, architect-designed residential projects: architectural renovations, bespoke new builds, and client-side project management where complexity, quality, and personal oversight matter."
  },
  {
    question: "Can Built In. Melbourne work with my architect or designer?",
    answer:
      "Yes. Josh works with established architects and designers across Melbourne and prefers to be brought in early, before the tender package is finalised, to advise on buildability, budget alignment, and site realities."
  },
  {
    question: "Is Built In. Melbourne licensed and insured?",
    answer:
      "Yes. Josh holds a Domestic Builder (Unlimited) licence as a registered Victorian practitioner (DB-U 45446), and Built In. Melbourne Pty Ltd is separately registered under CDB-U 58374. The company is fully insured."
  },
  {
    question: "What areas does Built In. Melbourne service?",
    answer:
      "Built In. Melbourne is based in Bayside Melbourne and works across the inner south-east, including Brighton, Elsternwick, Beaumaris, Caulfield, Hampton, Sandringham, Black Rock, Mentone, Bentleigh, and surrounding suburbs."
  },
  {
    question: "How do I know if my project is the right fit?",
    answer:
      "The best way is to start with a conversation. Josh meets every prospective client before any numbers are discussed, so both sides can assess whether the project and working relationship are the right fit."
  }
];

const services = [
  {
    title: "High-Spec Architectural Renovations",
    text:
      "Large-scale renovations of established homes, from heritage-sensitive restorations to contemporary transformations. These projects often involve structural alterations, premium materials, interior-designed finishes, and precision that leaves no room for shortcuts."
  },
  {
    title: "Bespoke Architectural New Builds",
    text:
      "Ground-up custom homes designed around the way the client wants to live. One-off builds with architect-led designs, high-spec interiors, and the same level of personal oversight that defines every Built In. project."
  },
  {
    title: "Client-Side Project Management",
    text:
      "Qualified support for homeowners navigating complex builds with another contractor. Josh reviews progress, assesses workmanship, attends site meetings, and helps ensure the build aligns with approved plans and Australian standards."
  }
];

interface Project {
  title: string;
  label: string;
  text: string;
  images?: CarouselImage[];
}

const murrumbeenaImages: CarouselImage[] = [
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-kitchen-window-seat.png",
    alt: "Murrumbeena Residence kitchen renovation by Built In. Melbourne – navy cabinetry, window seat, brass hardware and marble benchtops"
  },
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-kitchen-brass-sink-marble-splashback.png",
    alt: "Murrumbeena Residence kitchen detail by Built In. Melbourne – undermount brass sink and full-height Calacatta marble splashback"
  },
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-laundry-custom-joinery-brass.png",
    alt: "Murrumbeena Residence laundry by Built In. Melbourne – custom navy joinery, open timber shelving and brass butler sink"
  },
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-bathroom-vanity-marble-brass.png",
    alt: "Murrumbeena Residence bathroom vanity by Built In. Melbourne – bespoke grey cabinetry, Carrara marble benchtop and brass wall sconces"
  },
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-ensuite-marble-shower-brass.png",
    alt: "Murrumbeena Residence ensuite by Built In. Melbourne – marble subway tiles, brass rail shower and harlequin marble floor"
  },
  {
    src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-ensuite-shower-enclosure-marble.png",
    alt: "Murrumbeena Residence ensuite shower enclosure by Built In. Melbourne – full Carrara marble tile, frameless glass and brass fittings"
  }
];

const projects: Project[] = [
  {
    title: "Murrumbeena Residence",
    label: "Architectural Renovation",
    text:
      "A full-scale renovation delivered across kitchen, laundry, bathroom, and ensuite. Custom joinery in navy and sage, brass hardware throughout, Carrara marble benchtops and splashbacks, and harlequin marble flooring — every detail personally overseen by Josh.",
    images: murrumbeenaImages
  },
  {
    title: "The Fawkner Residence",
    label: "Architectural Renovation / Heritage Sensitive",
    text:
      "A heritage site with one original wall retained, reimagined as a coastal modern home designed to maximise light, space, and site coverage.",
    images: [{ src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-ensuite-shower-enclosure-marble.png", alt: "Placeholder – The Fawkner Residence by Built In. Melbourne" }]
  },
  {
    title: "The Mary Residence",
    label: "Architectural Renovation",
    text:
      "A full-scale renovation delivering a modern, sleek aesthetic through clean lines, considered material selections, and direct builder oversight.",
    images: [{ src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-bathroom-vanity-marble-brass.png", alt: "Placeholder – The Mary Residence by Built In. Melbourne" }]
  },
  {
    title: "The Henry Residence",
    label: "Architectural Renovation",
    text:
      "A contemporary renovation with a refined modern direction, delivered with Josh as the sole point of contact from first meeting through to handover.",
    images: [{ src: "/images/murrumbeena-residence/built-in-melbourne-murrumbeena-residence-kitchen-brass-sink-marble-splashback.png", alt: "Placeholder – The Henry Residence by Built In. Melbourne" }]
  }
];

const processSteps = [
  {
    title: "Meet",
    text:
      "A first conversation to understand the project, expectations, and whether the working relationship is the right fit."
  },
  {
    title: "Tender",
    text:
      "A staged tendering process that refines scope, numbers, buildability, and cost efficiency before construction begins."
  },
  {
    title: "Build",
    text:
      "Josh is on site, communicating weekly with clients and design teams, and holding every trade to the same standard."
  },
  {
    title: "Handover",
    text:
      "The same person who met you at the start walks you through every detail at completion."
  }
];

const testimonials = [
  {
    quote:
      "As a design practice, contractor selection and direct collaboration with the builder is fundamental to how we deliver our projects. It ensures not only a high level of finish, but also that our clients are supported through a transparent and well-managed construction process. Studio Welgus has built a long-standing relationship with Josh and his team. Their communication, professionalism and attention to detail consistently resonate with our clients, who often comment on how seamless and collaborative the experience feels.",
    source: "Michael Welgus",
    role: "Principal, Studio Welgus"
  },
  {
    quote:
      "It's always a pleasure working with Josh from Built In Melbourne on our interior design projects. He's incredibly friendly, easy to get along with, and brings a great attitude to every collaboration. He genuinely respects the design intent we set out in our design and documentation, and works to see it through to fruition. Communication is always quick and constructive, and he has a fantastic team behind him.",
    source: "Nina Matyas",
    role: "Interior Designer"
  }
];

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  name: "Built In. Melbourne",
  legalName: "Built In. Melbourne Pty Ltd",
  url: "https://builtinmelbourne.com.au",
  email: "josh@builtinmelbourne.com.au",
  areaServed: {
    "@type": "City",
    name: "Melbourne",
    containedInPlace: { "@type": "State", name: "Victoria" }
  },
  founder: {
    "@type": "Person",
    name: "Josh Coles",
    jobTitle: "Registered Domestic Builder"
  },
  description:
    "High-spec architectural renovations and bespoke new builds across Bayside Melbourne.",
  sameAs: ["https://www.instagram.com/builtin.melbourne"]
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer
    }
  }))
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <HeroCarousel />
      <main id="top">

        <section className="trust-bar" aria-label="Builder credentials">
          <div>
            <span className="trust-bar__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
            </span>
            <strong>16 Years</strong>
            <span>Trading &amp; Building</span>
          </div>
          <div>
            <span className="trust-bar__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
            </span>
            <strong>On Site</strong>
            <span>Personally, Every Project</span>
          </div>
          <div>
            <span className="trust-bar__icon" aria-hidden="true">
              <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><line x1="23" y1="11" x2="17" y2="11"/></svg>
            </span>
            <strong>One Contact</strong>
            <span>Start to Finish</span>
          </div>
        </section>

        <section className="section-shell split" id="about">
          <div className="section-intro reveal">
            <p className="eyebrow">The Builder</p>
            <h2>Built by Josh Coles. Present on Every Project.</h2>
          </div>
          <div className="copy-stack reveal">
            <p>
              Josh Coles started in carpentry sixteen years ago: six years on the
              tools, followed by a decade as a registered builder delivering high-spec
              architectural renovations and new builds across Melbourne&apos;s south-east.
            </p>
            <p>
              Built In. Melbourne runs with a deliberately small footprint: a select
              number of projects per year, each personally overseen from first meeting
              through to handover. Josh is the person you speak with on Monday morning
              and the person walking the job on Friday afternoon.
            </p>
            <p>
              The model is built on a simple conviction: quality comes from being
              present. Not from monitoring dashboards or reading supervisor reports,
              but from standing on site, seeing the work, and holding the standard
              personally.
            </p>
          </div>
        </section>

        <section className="section-shell" id="services">
          <div className="section-heading reveal">
            <p className="eyebrow">Services</p>
            <h2>Architectural Builds. Delivered Personally.</h2>
            <p>
              Built In. Melbourne specialises in complex, high-specification
              residential projects across Bayside Melbourne and the inner south-east.
            </p>
          </div>
          <div className="service-list">
            {services.map((service) => (
              <article className="service-card reveal" key={service.title}>
                <h3>{service.title}</h3>
                <p>{service.text}</p>
              </article>
            ))}
          </div>
          <aside className="right-fit reveal">
            <h3>The Right Fit</h3>
            <p>
              Built In. Melbourne is set up for considered, architect-designed
              residential projects that benefit from direct builder involvement at
              every stage. If your project needs that level of attention and
              commitment, Josh would welcome the conversation.
            </p>
          </aside>
        </section>

        <section className="section-shell process">
          <div className="section-heading reveal">
            <p className="eyebrow">Process</p>
            <h2>One Point of Contact. Start to Finish.</h2>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <article className="process-step reveal" key={step.title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section-shell" id="projects">
          <div className="section-heading reveal">
            <p className="eyebrow">Selected Projects</p>
            <h2>Built With Restraint, Precision, and Care.</h2>
          </div>
          <div className="project-list">
            {projects.map((project) => (
              <article className="project-card reveal" key={project.title}>
                <div className="project-image-slot">
                  {project.images && project.images.length > 0 ? (
                    <ProjectCarousel
                      images={project.images}
                      ariaLabel={`${project.title} – project photography`}
                    />
                  ) : (
                    <div className="image-placeholder">Image Pending</div>
                  )}
                </div>
                <div>
                  <p className="project-label">{project.label}</p>
                  <h3>{project.title}</h3>
                  <p>{project.text}</p>
                </div>
              </article>
            ))}
          </div>
          <p className="instagram-note reveal">
            Additional projects documented on Instagram:{" "}
            <a href="https://www.instagram.com/builtin.melbourne"> @builtin.melbourne</a>
          </p>
        </section>

        <section className="section-shell testimonials">
          <div className="section-heading reveal">
            <p className="eyebrow">Testimonials</p>
            <h2>What Clients and Collaborators Say</h2>
          </div>
          <div className="testimonial-grid">
            {testimonials.map((testimonial) => (
              <figure className="testimonial-card reveal" key={testimonial.source}>
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  {testimonial.source}
                  <span>{testimonial.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="section-shell faq">
          <div className="section-heading reveal">
            <p className="eyebrow">FAQ</p>
            <h2>Questions Before the First Conversation</h2>
          </div>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details className="faq-item reveal" key={faq.question}>
                <summary>{faq.question}</summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
