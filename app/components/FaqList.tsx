import type { FaqItem } from "../lib/faqs";

export default function FaqList({
  items,
  heading = "Frequently Asked Questions",
}: {
  items: FaqItem[];
  heading?: string;
}) {
  return (
    <section className="section-shell faq-section">
      <div className="section-heading reveal">
        <p className="eyebrow">FAQ</p>
        <h2>{heading}</h2>
      </div>
      <div className="faq-list">
        {items.map((faq) => (
          <details key={faq.question} className="faq-item reveal">
            <summary>{faq.question}</summary>
            <p>{faq.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}

export function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
