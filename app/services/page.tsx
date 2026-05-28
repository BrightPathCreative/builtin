import Link from "next/link";
import PageHero, { CtaBand } from "../components/PageSections";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Building Services Melbourne | Built In. Melbourne",
  description:
    "Architectural renovations, bespoke new builds, and client-side project management across Bayside Melbourne. Registered Builder (Unlimited) · Fully insured.",
  path: "/services",
});

const services = [
  {
    title: "High-Spec Architectural Renovations",
    text: "Large-scale renovations of established homes, from heritage-sensitive restorations that preserve period character to full contemporary transformations that reimagine how a home functions. Structural alterations, premium material selections, interior-designed finishes, and a level of precision that leaves no room for shortcuts.",
    href: "/services/architectural-renovations",
  },
  {
    title: "Bespoke Architectural New Builds",
    text: "Ground-up custom homes designed around the way the client wants to live, not adapted from a template. Architect-led designs, high-spec interiors, and the same personal oversight that defines every Built In. project. Josh manages the full build from tender to handover with weekly client communication throughout.",
    href: "/services/new-builds",
  },
  {
    title: "Client-Side Project Management",
    text: "Already have a builder but want someone in your corner? Josh acts as a qualified second set of eyes: reviewing progress, assessing workmanship, and ensuring the build aligns with the approved plans and Australian standards. This service exists because Josh has seen too many homeowners left in the dark during their own renovation.",
    href: "/services/client-side-project-management",
  },
];

export default function ServicesPage() {
  return (
    <>
      <PageHero
        title="Architectural Building Services Melbourne"
        description="Built In. Melbourne specialises in complex, high-specification residential projects across Bayside Melbourne and the inner south-east. Every project is personally managed by Josh Coles: from the initial conversation through to handover."
        compact
      />

      <section className="section-shell">
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card reveal" key={service.href}>
              <h2>{service.title}</h2>
              <p>{service.text}</p>
              <Link className="text-link" href={service.href}>
                {service.title}
              </Link>
            </article>
          ))}
        </div>

        <aside className="right-fit reveal">
          <h2>The Right Fit</h2>
          <p>
            Built In. Melbourne takes on a limited number of projects at any time
            to ensure Josh&apos;s personal involvement on every one. If your
            project calls for that level of attention and commitment, the
            conversation is worth having.
          </p>
        </aside>
      </section>

      <CtaBand />
    </>
  );
}
