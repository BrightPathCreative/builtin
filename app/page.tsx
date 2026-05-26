import Link from "next/link";
import Image from "next/image";
import FaqList, { JsonLd } from "./components/FaqList";
import { CtaBand, TestimonialsSection, TrustBar } from "./components/PageSections";
import { ProjectCard } from "./components/ProjectCard";
import { faqSchema, homeFaqs } from "./lib/faqs";
import { createMetadata } from "./lib/metadata";
import { getFeaturedProjects } from "./lib/projects";

export const metadata = createMetadata({
  title: "Architectural Builder Melbourne | Built In. Melbourne",
  description:
    "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Builder (Unlimited) · 16 years experience. Discuss your project.",
  path: "/",
});

const featuredProjects = getFeaturedProjects([
  "surrey-hills",
  "hawsleigh-balaclava",
  "fawkner-residence",
]);

const services = [
  {
    title: "Architectural Renovations",
    text: "Large-scale renovations of established homes, from heritage-sensitive restorations to full contemporary transformations. Every renovation is personally managed by Josh from tender through to handover.",
    href: "/services/architectural-renovations",
  },
  {
    title: "Bespoke New Builds",
    text: "Ground-up custom homes with architect-led designs and the same personal oversight that defines every Built In. project. No templates. No handoffs.",
    href: "/services/new-builds",
  },
  {
    title: "Client-Side Project Management",
    text: "Already have a builder? Josh acts as a qualified second set of eyes — reviewing progress and advocating for your interests throughout the build.",
    href: "/services/client-side-project-management",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="home-hero">
        <div className="home-hero__copy reveal">
          <h1>Quality Comes From Being Present.</h1>
          <p className="home-hero__lead">
            High-spec architectural renovations and bespoke new builds across
            Bayside Melbourne. One builder. One point of contact. Every detail,
            personally delivered.
          </p>
          <p className="home-hero__meta">
            Registered Domestic Builder (Unlimited) · CDB-U 58374 · 16 Years
            Experience
          </p>
          <Link className="button" href="/contact">
            Discuss Your Project
          </Link>
        </div>
        <div className="home-hero__visual reveal">
          <Image
            src="/images/projects/surrey-hills/built-in-melbourne-kitchen-full-view-fluted-cabinetry-timber-ceiling-surrey-hills.jpg"
            alt="architectural new build surrey hills — fluted kitchen cabinetry — built in melbourne"
            width={720}
            height={540}
            priority
          />
          <img
            className="home-hero__sketch"
            src="/images/brand/architectural-sketch.png"
            alt=""
            aria-hidden="true"
          />
        </div>
      </section>

      <TrustBar />

      <section className="section-shell split-section">
        <div className="section-heading reveal">
          <p className="eyebrow">The Builder</p>
          <h2>Built by Josh Coles. Present on Every Project.</h2>
        </div>
        <div className="copy-stack reveal">
          <p>
            Josh Coles started in carpentry sixteen years ago: six years on the
            tools, followed by a decade as a registered builder delivering
            high-spec architectural renovations and new builds across
            Melbourne&apos;s south-east. He holds a Domestic Builder (Unlimited)
            licence as a registered Victorian practitioner (DB-U 45446), and his
            company, Built In. Melbourne Pty Ltd, is separately registered under
            CDB-U 58374.
          </p>
          <p>
            Josh runs Built In. Melbourne with a deliberately small footprint — a
            select number of projects per year, each personally overseen from
            first meeting through to handover. He is on site. He is across every
            detail. He is the person you speak with on Monday morning and the
            person walking the job on Friday afternoon.
          </p>
          <Link className="text-link" href="/about">
            About Josh and how Built In. works
          </Link>
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Services</p>
          <h2>Architectural Builds. Delivered Personally.</h2>
          <p>
            Built In. Melbourne specialises in complex, high-specification
            residential projects across Bayside Melbourne and the inner
            south-east. Every project is personally managed by Josh Coles from
            tender through to completion.
          </p>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.href}>
              <h3>{service.title}</h3>
              <p>{service.text}</p>
              <Link className="text-link" href={service.href}>
                {service.title}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected Work</p>
          <h2>A Selection of Recent Projects</h2>
          <p>
            A selection of recent Built In. Melbourne projects. Every build
            personally delivered by Josh Coles.
          </p>
        </div>
        <div className="project-grid feature-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <p className="reveal" style={{ marginTop: "2rem" }}>
          <Link className="button" href="/projects">
            View All Projects
          </Link>
        </p>
      </section>

      <TestimonialsSection />

      <FaqList items={homeFaqs} />
      <p className="section-shell reveal" style={{ paddingTop: 0 }}>
        <Link className="text-link" href="/faq">
          More questions
        </Link>
      </p>

      <CtaBand />
    </>
  );
}
