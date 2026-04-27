import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact | Built In. Melbourne",
  description:
    "Contact Built In. Melbourne to discuss an architectural renovation or bespoke new build across Bayside Melbourne."
};

export default function ContactPage() {
  return (
    <main id="top">
      <section className="section-shell contact page-section">
        <div className="contact-copy reveal">
          <p className="eyebrow">Contact</p>
          <h1>Let&apos;s Talk About Your Project.</h1>
          <p>
            If you&apos;re planning an architectural renovation or new build across
            Bayside Melbourne, Josh would welcome the opportunity to discuss it. No
            obligation. No pressure. Just a straightforward conversation.
          </p>
          <p className="contact-detail">
            <strong>Email:</strong>{" "}
            <a href="mailto:josh@builtinmelbourne.com.au">
              josh@builtinmelbourne.com.au
            </a>
            <br />
            <strong>Instagram:</strong>{" "}
            <a href="https://www.instagram.com/builtin.melbourne">
              @builtin.melbourne
            </a>
          </p>
          <div className="contact-rhythm" aria-label="What happens next">
            <p>
              <span>01 / First Conversation</span>
              Project intent, timing, site context, and fit.
            </p>
            <p>
              <span>02 / Early Builder Input</span>
              Buildability, scope clarity, and the realities behind the drawings.
            </p>
          </div>
        </div>
        <div className="form-placeholder reveal" aria-label="Future enquiry form">
          <p className="eyebrow">Enquiry Form</p>
          <h2>GHL form will be embedded here.</h2>
          <p>
            Once the GoHighLevel iframe is supplied, this panel can be replaced
            with the live form while retaining the same spacing and visual
            treatment.
          </p>
        </div>
      </section>
    </main>
  );
}
