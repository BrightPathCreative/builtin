import Link from "next/link";
import FaqList, { JsonLd } from "../../components/FaqList";
import PageHero, { CtaBand } from "../../components/PageSections";
import { faqSchema, renovationFaqs } from "../../lib/faqs";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Architectural Renovations Melbourne | Built In. Melbourne",
  description:
    "Large-scale architectural renovations across Bayside Melbourne: heritage to contemporary. Personally managed by Josh Coles, DB-U 45446. Fully insured.",
  path: "/services/architectural-renovations",
});

export default function ArchitecturalRenovationsPage() {
  return (
    <>
      <JsonLd data={faqSchema(renovationFaqs)} />

      <PageHero title="Architectural Renovations Melbourne" compact />

      <section className="section-shell">
        <div className="copy-stack reveal">
          <h2>What a High-Spec Renovation Actually Involves</h2>
          <p>
            A high-spec architectural renovation is a significant transformation
            of an existing home: typically involving structural changes,
            premium materials, interior-designed finishes, and a level of
            complexity that goes well beyond a cosmetic refresh. These are
            projects where drawings and documentation from an architect or
            designer form the basis of the build, and where the quality of the
            finished detail is the benchmark.
          </p>
          <p>
            For most Built In. Melbourne clients, a renovation takes twelve to
            eighteen months from tender to handover. It involves managing
            structural engineers, soil and site investigations, council and VBA
            permit processes, material and supplier lead times, and a large team
            of specialist trades: all while keeping the build aligned with the
            design intent and the client&apos;s expectations.
          </p>

          <h2>Heritage-Sensitive Renovation Across Melbourne&apos;s Bayside Suburbs</h2>
          <p>
            Much of Built In. Melbourne&apos;s renovation work is
            heritage-sensitive. Brighton, Elsternwick, Hawthorn, Balaclava,
            Caulfield, and the surrounding inner suburbs carry heritage overlays
            that add a specific layer of complexity: facade retention, matching
            original materials, working within planning constraints while still
            delivering a contemporary, high-performing interior.
          </p>
          <p>
            Josh has delivered heritage renovations in Brighton, Elsternwick,
            Balaclava, Hawthorn, Beaumaris, and Caulfield, working alongside
            architects, interior designers, and heritage consultants to translate
            detailed design intent into built reality. The Hawsleigh Avenue
            renovation in Balaclava is a strong example: the original brick facade
            was preserved in full, while the rear was entirely reimagined with
            vaulted VJ-panelled ceilings, custom oak joinery, and a detached
            garden studio. The result reads as contemporary throughout without
            compromising the heritage character of the street frontage.
          </p>
          <p>
            <Link className="text-link" href="/projects/hawsleigh-balaclava">
              View the Hawsleigh Avenue project
            </Link>
          </p>

          <h2>Why the Builder You Choose Changes the Outcome</h2>
          <p>
            On a high-spec architectural renovation, the difference between a good
            outcome and a disappointing one rarely comes down to the design. It
            comes down to who is executing it. A complex renovation with an
            architect, a detailed interior design package, and premium finishes
            requires a builder who reads the documentation carefully, coordinates
            trades proactively, and holds the standard at every stage.
          </p>
          <p>
            Josh Coles is on site for every Built In. renovation. Not a
            supervisor. Not a project manager relaying updates secondhand. Josh,
            personally. Every trade on site understands what the standard is and
            what happens if it isn&apos;t met. The work either meets Australian
            standards and the design intent, or it gets redone.
          </p>

          <h2>Working With Josh Before the Tender</h2>
          <p>
            Josh Coles prefers to be involved before the tender package is
            finalised. At the preliminary stage, he can review plans, flag
            buildability issues, and advise on structural cost savings before the
            design is locked in. This early-stage involvement frequently saves
            clients money, not by reducing the scope, but by identifying
            engineering inefficiencies and sequencing issues that create cost when
            they surface on site.
          </p>
          <p>
            If you&apos;re working with an architect or designer in Brighton,
            Malvern, Elsternwick, Hawthorn, Caulfield, or anywhere across the
            inner south-east, it&apos;s worth having a conversation with Josh
            early. The best outcomes happen when the builder is part of the
            process, not just a contractor handed a set of drawings.
          </p>
        </div>
      </section>

      <FaqList
        items={renovationFaqs}
        heading="Frequently Asked Questions: Architectural Renovations Melbourne"
      />

      <CtaBand
        title="Let's Talk About Your Renovation."
        buttonLabel="Discuss Your Renovation"
      />
    </>
  );
}
