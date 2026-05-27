import Image from "next/image";
import Link from "next/link";
import FaqList, { JsonLd } from "./components/FaqList";
import {
  CtaBand,
  ServicesTiles,
  TestimonialsSection,
  TrustBar,
} from "./components/PageSections";
import { ProjectCard } from "./components/ProjectCard";
import { faqSchema, homeFaqs } from "./lib/faqs";
import { createMetadata } from "./lib/metadata";
import { websiteSchema, webPageSchema } from "./lib/schema";
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
  "murrumbeena",
]);

const serviceTiles = [
  {
    title: "Architectural Renovations",
    excerpt:
      "Large-scale renovations of established homes, from heritage-sensitive restorations to full contemporary transformations.",
    href: "/services/architectural-renovations",
    linkLabel: "Architectural Renovations",
  },
  {
    title: "Bespoke New Builds",
    excerpt:
      "Ground-up custom homes with architect-led designs and the same personal oversight that defines every Built In. project.",
    href: "/services/new-builds",
    linkLabel: "Bespoke New Builds",
  },
  {
    title: "Client-Side Project Management",
    excerpt:
      "Already have a builder? Josh acts as a qualified second set of eyes throughout your build.",
    href: "/services/client-side-project-management",
    linkLabel: "Client-Side Project Management",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={websiteSchema} />
      <JsonLd
        data={webPageSchema({
          path: "/",
          title: "Architectural Builder Melbourne | Built In. Melbourne",
          description:
            "High-spec architectural renovations and bespoke new builds across Bayside Melbourne. Registered Builder (Unlimited) · 16 years experience. Discuss your project.",
        })}
      />
      <JsonLd data={faqSchema(homeFaqs)} />

      <section className="hero">
        <Image
          src="/images/projects/surrey-hills/built-in-melbourne-kitchen-full-view-fluted-cabinetry-timber-ceiling-surrey-hills.jpg"
          alt="architectural new build surrey hills — fluted kitchen cabinetry — built in melbourne"
          fill
          priority
          sizes="100vw"
          className="hero-image"
        />
        <div className="hero-gradient" aria-hidden="true" />
        <div className="hero-content reveal">
          <p className="hero-label">Built In. Melbourne</p>
          <h1 className="hero-headline">Quality Comes From Being Present.</h1>
          <p className="hero-trust">
            Registered Domestic Builder (Unlimited) · CDB-U 58374 · 16 Years
            Experience
          </p>
          <Link className="button" href="/contact">
            Discuss Your Project
          </Link>
        </div>
        <div className="hero-scroll" aria-hidden="true">
          <span>Scroll</span>
          <span className="hero-scroll-line" />
        </div>
      </section>

      <TrustBar />

      <section className="section-shell split-section">
        <div className="section-heading reveal">
          <p className="eyebrow">The Builder</p>
          <h2>Built by Josh Coles. Present on Every Project.</h2>
        </div>
        <div className="copy-stack reveal">
          <blockquote className="about-pullquote">
            Quality comes from being present — not from monitoring dashboards or
            reading supervisor reports.
          </blockquote>
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
            first meeting through to handover.
          </p>
          <Link className="text-link" href="/about">
            About Josh and how Built In. works
          </Link>
        </div>
      </section>

      <ServicesTiles tiles={serviceTiles} />

      <section className="section-shell">
        <div className="section-heading reveal">
          <p className="eyebrow">Selected Work</p>
          <h2>A Selection of Recent Projects</h2>
          <p>
            Every build listed here was personally managed by Josh Coles, from
            initial brief through to handover.
          </p>
        </div>
        <div className="project-grid project-grid--featured">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} featured />
          ))}
        </div>
        <p className="reveal" style={{ marginTop: "2.5rem" }}>
          <Link className="button" href="/projects">
            View All Projects
          </Link>
        </p>
      </section>

      <TestimonialsSection />

      <FaqList items={homeFaqs} heading="FAQ" />

      <CtaBand />
    </>
  );
}
