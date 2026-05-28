import PageHero from "../components/PageSections";
import ContactForm from "../components/ContactForm";
import { createMetadata } from "../lib/metadata";
import { CONTACT_EMAIL, INSTAGRAM_HANDLE, INSTAGRAM_URL, SERVICE_AREAS } from "../lib/site";

export const metadata = createMetadata({
  title: "Discuss Your Project | Built In. Melbourne | Bayside",
  description:
    "Planning an architectural renovation or new build in Bayside Melbourne? Josh Coles welcomes the conversation. No obligation. Response within 1 to 2 business days.",
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Discuss Your Project: Built In. Melbourne"
        description="If you're planning an architectural renovation or new build across Bayside Melbourne, Josh would welcome the opportunity to discuss it. No obligation. No pressure. Just a straightforward conversation about what you're looking to achieve."
        compact
      />

      <section className="section-shell contact-layout">
        <div className="copy-stack reveal">
          <p>Josh typically responds within 1 to 2 business days.</p>
          <p>
            <strong>Email:</strong>{" "}
            <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            <br />
            <strong>Instagram:</strong>{" "}
            <a href={INSTAGRAM_URL}>{INSTAGRAM_HANDLE}</a>
          </p>
          <p>
            <strong>Service area:</strong> Bayside Melbourne and Melbourne&apos;s
            inner south-east, including {SERVICE_AREAS.slice(0, 12).join(", ")},
            and surrounding suburbs.
          </p>
        </div>

        <ContactForm />
      </section>
    </>
  );
}
