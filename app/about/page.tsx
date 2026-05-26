import Link from "next/link";
import PageHero, { CtaBand, ProcessSteps } from "../components/PageSections";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "About Josh Coles | Architectural Builder Melbourne",
  description:
    "Josh Coles — registered domestic builder (DB-U 45446), 16 years experience, high-spec renovations and new builds across Bayside Melbourne. Fully insured.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <>
      <PageHero title="About Built In. Melbourne" compact />

      <section className="section-shell">
        <div className="section-heading reveal">
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
            CDB-U 58374. Today, he runs Built In. Melbourne with a deliberately
            small footprint — a select number of projects per year, each
            personally overseen from first meeting through to handover.
          </p>
          <p>
            Where most builders scale by adding layers — project managers, site
            supervisors, office coordinators — Josh works in the opposite
            direction. He is the single point of contact for every client.
            He&apos;s on site. He&apos;s across every detail. He&apos;s the
            person you speak with on Monday morning and the person walking the
            job on Friday afternoon.
          </p>
          <p>
            It&apos;s a model built on a simple conviction: quality comes from
            being present. Not from monitoring dashboards or reading supervisor
            reports, but from standing on the slab, seeing the work, holding the
            standard personally. Every trade on a Built In. project operates
            under the same expectation. If the work doesn&apos;t meet Australian
            standards, it gets redone. No shortcuts. No exceptions.
          </p>
          <p>
            Josh works closely with architects and interior designers, and
            prefers to be brought in early in the design process. His input at
            the preliminary stage often saves clients from unnecessary structural
            costs and helps align the design intent with the realities of the
            build, before the budget sets.
          </p>
          <p>
            Built In. Melbourne has delivered high-spec architectural
            renovations and custom new builds across Brighton, Elsternwick,
            Beaumaris, Caulfield, Balaclava, Hawthorn, Surrey Hills, and
            Murrumbeena — predominantly Bayside and inner south-east suburbs
            where the clients and the projects demand the same things: precision,
            accountability, and a builder who is genuinely present throughout.
          </p>
        </div>
      </section>

      <ProcessSteps />

      <section className="section-shell">
        <aside className="right-fit reveal">
          <h2>The Right Fit</h2>
          <p>
            Built In. Melbourne is set up for considered, architect-designed
            residential projects that benefit from direct builder involvement at
            every stage. Josh&apos;s model is built around personal oversight,
            which means he&apos;s selective about the work he takes on. If your
            project needs that level of attention and commitment, he&apos;d
            welcome the conversation. If it doesn&apos;t, he&apos;ll be honest
            about that too.
          </p>
          <Link className="text-link" href="/services">
            Explore Built In. Melbourne&apos;s services
          </Link>
        </aside>
      </section>

      <CtaBand />
    </>
  );
}
