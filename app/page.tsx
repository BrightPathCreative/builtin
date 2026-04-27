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

const projects = [
  {
    title: "The Fawkner Residence",
    label: "Architectural Renovation / Heritage Sensitive",
    text:
      "A heritage site with one original wall retained, reimagined as a coastal modern home designed to maximise light, space, and site coverage."
  },
  {
    title: "The Mary Residence",
    label: "Architectural Renovation",
    text:
      "A full-scale renovation delivering a modern, sleek aesthetic through clean lines, considered material selections, and direct builder oversight."
  },
  {
    title: "The Henry Residence",
    label: "Architectural Renovation",
    text:
      "A contemporary renovation with a refined modern direction, delivered with Josh as the sole point of contact from first meeting through to handover."
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
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Built In. Melbourne home">
          Built In.
          <span>Melbourne</span>
        </a>
        <nav aria-label="Primary navigation">
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="button button-small" href="#contact">
          Discuss Your Project
        </a>
      </header>

      <main id="top">
        <section className="hero section-shell">
          <div className="hero-copy reveal">
            <p className="eyebrow">Registered Domestic Builder / CDB-U 58374</p>
            <h1>Quality Comes From Being Present.</h1>
            <p className="hero-lede">
              High-spec architectural renovations and bespoke new builds across Bayside
              Melbourne. One builder. One point of contact. Every detail, personally
              delivered.
            </p>
            <div className="hero-actions">
              <a className="button" href="#contact">
                Discuss Your Project
              </a>
              <a className="text-link" href="#projects">
                View selected work
              </a>
            </div>
          </div>
          <div className="hero-panel reveal" aria-label="Architectural line illustration">
            <div className="plan-lines" />
            <p>Built In. Melbourne</p>
          </div>
        </section>

        <section className="trust-bar" aria-label="Builder credentials">
          <div>
            <strong>16 Years</strong>
            <span>Experience</span>
          </div>
          <div>
            <strong>CDB-U 58374</strong>
            <span>Registered Domestic Builder</span>
          </div>
          <div>
            <strong>On Site</strong>
            <span>Personally, Every Project</span>
          </div>
          <div>
            <strong>Select Projects</strong>
            <span>Full Personal Oversight</span>
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
            {["Meet", "Tender", "Build", "Handover"].map((step, index) => (
              <article className="process-step reveal" key={step}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <h3>{step}</h3>
                <p>
                  {index === 0 &&
                    "A first conversation to understand the project, expectations, and whether the working relationship is the right fit."}
                  {index === 1 &&
                    "A staged tendering process that refines scope, numbers, buildability, and cost efficiency before construction begins."}
                  {index === 2 &&
                    "Josh is on site, communicating weekly with clients and design teams, and holding every trade to the same standard."}
                  {index === 3 &&
                    "The same person who met you at the start walks you through every detail at completion."}
                </p>
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
                <div className="image-placeholder">Image Pending</div>
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

        <section className="section-shell contact" id="contact">
          <div className="contact-copy reveal">
            <p className="eyebrow">Contact</p>
            <h2>Let&apos;s Talk About Your Project.</h2>
            <p>
              If you&apos;re planning an architectural renovation or new build across
              Bayside Melbourne, Josh would welcome the opportunity to discuss it. No
              obligation. No pressure. Just a straightforward conversation.
            </p>
            <p className="contact-detail">
              <strong>Email:</strong>{" "}
              <a href="mailto:josh@builtinmelbourne.com.au">
                josh@builtinmelbourne.com.au
              </a>
              <br />
              <strong>Instagram:</strong>{" "}
              <a href="https://www.instagram.com/builtin.melbourne">
                @builtin.melbourne
              </a>
            </p>
          </div>
          <div className="form-placeholder reveal" aria-label="Future enquiry form">
            <p className="eyebrow">Enquiry Form</p>
            <h3>GHL form will be embedded here.</h3>
            <p>
              Once the GoHighLevel iframe is supplied, this panel can be replaced with
              the live form while retaining the same spacing and visual treatment.
            </p>
          </div>
        </section>
      </main>

      <footer>
        <p>
          Built In. Melbourne Pty Ltd / ABN 54 610 132 486 / Registered Domestic
          Builder (Unlimited) / CDB-U 58374
        </p>
        <p>© 2026 Built In. Melbourne. All rights reserved.</p>
      </footer>
    </>
  );
}
