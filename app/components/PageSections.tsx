import Link from "next/link";
import { testimonials } from "../lib/testimonials";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  description?: string;
  children?: React.ReactNode;
  compact?: boolean;
};

export default function PageHero({
  eyebrow,
  title,
  description,
  children,
  compact = false,
}: PageHeroProps) {
  return (
    <section className={`page-hero${compact ? " page-hero--compact" : ""}`}>
      <div className="page-hero__content reveal">
        {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
        <h1>{title}</h1>
        {description ? <p className="page-hero__lead">{description}</p> : null}
        {children}
      </div>
    </section>
  );
}

type CtaBandProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  buttonHref?: string;
};

export function CtaBand({
  title = "Let's Talk About Your Project.",
  description = "If you're planning an architectural renovation or new build across Bayside Melbourne, Josh would welcome the opportunity to discuss it. No obligation. No pressure. Just a straightforward conversation about what you're looking to achieve.",
  buttonLabel = "Discuss Your Project",
  buttonHref = "/contact",
}: CtaBandProps) {
  return (
    <section className="cta-band">
      <div className="cta-band__inner reveal">
        <h2>{title}</h2>
        <p>{description}</p>
        <Link className="button" href={buttonHref}>
          {buttonLabel}
        </Link>
      </div>
    </section>
  );
}

export function TrustBar() {
  const stats = [
    { number: "16", label: "Years Experience" },
    { number: "DB-U 45446", label: "Registered Builder" },
    { number: "CDB-U 58374", label: "Company Licence" },
    { number: "Fully Insured", label: "Built In. Melbourne Pty Ltd" },
  ];

  return (
    <section className="trust-bar" aria-label="Builder credentials">
      {stats.map((stat) => (
        <div key={stat.label} className="trust-item">
          <span className="trust-number">{stat.number}</span>
          <span className="trust-label">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}

type ServiceTile = {
  number: string;
  title: string;
  excerpt: string;
  href: string;
  linkLabel: string;
};

export function ServicesTiles({ tiles }: { tiles: ServiceTile[] }) {
  return (
    <section className="section--dark">
      <div className="services-tiles">
        {tiles.map((tile) => (
          <Link key={tile.href} href={tile.href} className="service-tile reveal">
            <span className="service-tile-number">{tile.number}</span>
            <span className="service-tile-title">{tile.title}</span>
            <span className="service-tile-excerpt">{tile.excerpt}</span>
            <span className="text-link">{tile.linkLabel}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function ProcessSteps() {
  const steps = [
    {
      number: "1",
      title: "Meet",
      text: "It starts with a conversation. Josh meets every prospective client before any numbers are discussed. This isn't a sales pitch — it's a mutual assessment. He wants to understand your project, your expectations, and whether the working relationship is the right fit. If it's not, he'll say so early.",
    },
    {
      number: "2",
      title: "Tender",
      text: "Built In. uses a staged tendering process: preliminary costing, a detailed scope, and a final fixed-price tender. Each stage refines the numbers so there are no surprises when the build begins. If Josh is brought in before the tender package is finalised, he can advise on buildability and cost efficiency — often saving clients money before a dollar is spent on construction.",
    },
    {
      number: "3",
      title: "Build",
      text: "Josh is on site. Not a supervisor, not a project manager relaying updates secondhand. Josh, personally. You'll speak with him weekly. He'll speak with your architect or designer weekly. Every trade on site operates under the same standard: no shortcuts, no deviation from spec, no compromise on Australian building standards.",
    },
    {
      number: "4",
      title: "Handover",
      text: "When the build is complete, Josh walks you through every detail. The same person who met you at the start is the one handing you the keys at the end.",
    },
  ];

  return (
    <section className="section-shell">
      <div className="section-heading reveal">
        <p className="eyebrow">Process</p>
        <h2>One Point of Contact. Start to Finish.</h2>
        <p>
          Every Built In. project follows the same structured process, designed to
          give you clarity, confidence, and a direct line to the person building
          your home.
        </p>
      </div>
      <ol className="process-steps">
        {steps.map((step) => (
          <li key={step.title} className="process-step reveal">
            <span className="process-step__number">{step.number}</span>
            <h3>{step.title}</h3>
            <p>{step.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}

export function TestimonialsSection() {
  return (
    <section className="section-shell section--mid">
      <div className="section-heading reveal">
        <p className="eyebrow">Testimonials</p>
        <h2>What Clients Say</h2>
      </div>
      <div className="testimonial-grid">
        {testimonials.map((testimonial) => (
          <figure key={testimonial.name} className="testimonial-card reveal">
            <blockquote>
              <p>&ldquo;{testimonial.quote}&rdquo;</p>
            </blockquote>
            <figcaption>
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
