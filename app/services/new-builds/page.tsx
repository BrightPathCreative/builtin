import Link from "next/link";
import FaqList, { JsonLd } from "../../components/FaqList";
import PageHero, { CtaBand } from "../../components/PageSections";
import { faqSchema, newBuildFaqs } from "../../lib/faqs";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Bespoke New Builds Melbourne | Built In. Melbourne",
  description:
    "Ground-up custom homes across Bayside Melbourne — architect-led, high-spec, personally managed by Josh Coles from tender to handover. DB-U 45446.",
  path: "/services/new-builds",
});

export default function NewBuildsPage() {
  return (
    <>
      <JsonLd data={faqSchema(newBuildFaqs)} />

      <PageHero title="Bespoke Architectural New Builds Melbourne" compact />

      <section className="section-shell">
        <div className="copy-stack reveal">
          <h2>Custom Homes Designed Around the Way You Live</h2>
          <p>
            A bespoke new build with Built In. Melbourne is a ground-up custom
            home — designed around how the client actually wants to live, not
            adapted from a template or a display home layout. These are
            architect-led projects with high-spec interiors, and Josh Coles
            manages the full build personally from the moment the tender is
            signed through to the day the keys are handed over.
          </p>
          <p>
            No two Built In. new builds are the same. The Sir Garnet Road project
            in Surrey Hills called for a contemporary two-storey home with dark
            cladding, full-height glazing, polished concrete floors, and a dark
            mosaic pool. The material palette was specific. The architectural
            intent was exacting. The execution required a builder who was
            genuinely across the detail at every stage.
          </p>
          <p>
            <Link className="text-link" href="/projects/surrey-hills">
              View the Surrey Hills project
            </Link>
          </p>

          <h2>What Sets a Built In. New Build Apart</h2>
          <p>
            The most common complaint about new home construction is the gap
            between what was promised and what was delivered. Plans that looked
            precise on paper, executed with compromise on site. Trades who
            didn&apos;t read the documentation. Builders who weren&apos;t present
            when the critical decisions were made.
          </p>
          <p>
            Built In. Melbourne is designed around the opposite. Josh is the
            single point of contact. He&apos;s on site. He coordinates directly
            with the architect and design team throughout the build — not just at
            the start and end. Every specification is reviewed before the relevant
            trade begins work. Every finish is held to the standard documented in
            the drawings. If it&apos;s not right, it&apos;s not finished.
          </p>

          <h2>Working With Your Architect or Designer</h2>
          <p>
            Josh Coles works closely with architects and interior designers on
            every new build. He prefers to be brought in before the tender package
            is finalised. At the preliminary design stage, his input on
            buildability, structural sequencing, and material lead times helps the
            design team avoid decisions that look straightforward on a drawing but
            create expensive problems on site.
          </p>
          <p>
            Built In. Melbourne has delivered new builds across Bayside Melbourne
            and the inner south-east in collaboration with established
            architectural and design practices. If you&apos;re engaged with an
            architect and approaching the tender stage, it&apos;s worth a
            conversation with Josh before the package goes out.
          </p>
        </div>
      </section>

      <FaqList
        items={newBuildFaqs}
        heading="Frequently Asked Questions — Architectural New Builds Melbourne"
      />

      <CtaBand
        title="Let's Talk About Your New Build."
        buttonLabel="Discuss Your New Build"
      />
    </>
  );
}
