import FaqList, { JsonLd } from "../../components/FaqList";
import PageHero, { CtaBand } from "../../components/PageSections";
import { clientSideFaqs, faqSchema } from "../../lib/faqs";
import { createMetadata } from "../../lib/metadata";

export const metadata = createMetadata({
  title: "Client-Side Project Management Melbourne | Built In.",
  description:
    "A registered builder in your corner. Josh Coles offers independent client-side project management for complex builds across Melbourne. DB-U 45446.",
  path: "/services/client-side-project-management",
});

export default function ClientSideProjectManagementPage() {
  return (
    <>
      <JsonLd data={faqSchema(clientSideFaqs)} />

      <PageHero title="Client-Side Project Management Melbourne" compact />

      <section className="section-shell">
        <div className="copy-stack reveal">
          <h2>A Qualified Second Set of Eyes</h2>
          <p>
            Client-side project management is a service for homeowners who are
            already engaged with a builder but want an independent, qualified
            professional reviewing the build on their behalf. Josh Coles acts as
            your advocate throughout the project — reading the plans, attending
            site meetings, assessing the workmanship, and providing honest advice
            on what he sees.
          </p>
          <p>
            This service exists because Josh has seen too many homeowners left in
            the dark during their own significant renovation or build. Without a
            building background, it&apos;s difficult to know whether what
            you&apos;re seeing on site is correct, whether progress is on track, or
            whether the workmanship meets the standard the drawings require.
            Having a registered domestic builder in your corner changes that
            dynamic entirely.
          </p>

          <h2>What Client-Side Project Management Covers</h2>
          <p>
            Josh reviews the approved documentation against the work on site. He
            attends key site meetings. He assesses critical construction stages —
            frame inspections, waterproofing, tiling, joinery installation — and
            provides clear, informed feedback on whether the work meets the
            specification and the standard. Where it doesn&apos;t, he documents it
            and advises on how to raise that with your builder.
          </p>
          <p>
            This service covers high-spec architectural renovations and new builds
            in progress with another contractor across Melbourne&apos;s inner
            south-east. If your project is in Brighton, Elsternwick, Hawthorn,
            Caulfield, Malvern, Toorak, South Yarra, or anywhere across Bayside
            Melbourne, and you&apos;d like qualified oversight, Josh is worth
            speaking with.
          </p>

          <h2>Who This Service Is For</h2>
          <p>
            Client-side project management suits homeowners investing in a
            significant project — typically a high-spec renovation or new build
            with an interior-designed finish — who don&apos;t have a building
            background and want independent oversight of the work as it
            progresses. It&apos;s particularly valuable on complex builds where the
            number of trades, the level of finish, and the coordination
            requirements are high.
          </p>
          <p>
            It&apos;s not a service for every build. But for a homeowner spending
            $500,000 or more on a renovation and feeling they lack the knowledge
            to assess what they&apos;re seeing on site, it&apos;s not a luxury.
            It&apos;s common sense.
          </p>
        </div>
      </section>

      <FaqList
        items={clientSideFaqs}
        heading="Frequently Asked Questions — Client-Side Project Management"
      />

      <CtaBand />
    </>
  );
}
