import PageHero from "../components/PageSections";
import { JsonLd } from "../components/FaqList";
import { faqSchema, standaloneFaqs } from "../lib/faqs";
import { createMetadata } from "../lib/metadata";

export const metadata = createMetadata({
  title: "Frequently Asked Questions | Built In. Melbourne",
  description:
    "Answers to common questions about Built In. Melbourne — architectural renovations, new builds, client-side project management, licences, and service areas.",
  path: "/faq",
});

const allFaqs = standaloneFaqs.flatMap((group) => group.items);

export default function FaqPage() {
  return (
    <>
      <JsonLd data={faqSchema(allFaqs)} />

      <PageHero
        title="Frequently Asked Questions — Built In. Melbourne"
        description="Common questions about Built In. Melbourne, the services offered, and how to determine whether your project is the right fit."
        compact
      />

      <section className="section-shell">
        {standaloneFaqs.map((group) => (
          <div key={group.category} className="faq-category reveal">
            <h2>{group.category}</h2>
            <div className="faq-list">
              {group.items.map((faq) => (
                <details key={faq.question} className="faq-item">
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        ))}
      </section>
    </>
  );
}
