import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy | Built In. Melbourne",
  description:
    "Simple privacy information for Built In. Melbourne website enquiries."
};

export default function PrivacyPage() {
  return (
    <main id="top">
      <section className="section-shell legal-page reveal">
        <p className="eyebrow">Privacy</p>
        <h1>Privacy Policy</h1>
        <p>
          Built In. Melbourne only collects the information you choose to submit
          through the enquiry form or by contacting us directly. This may include
          your name, contact details, project address, and details about the work
          you would like to discuss.
        </p>

        <h2>How Information Is Used</h2>
        <p>
          Enquiry information is used to respond to your message, assess whether
          your project is a suitable fit, and communicate with you about the
          project if you choose to proceed.
        </p>

        <h2>Payments and Sensitive Information</h2>
        <p>
          This website does not process payments and does not ask for payment
          details. Please do not submit sensitive personal or financial
          information through the enquiry form.
        </p>

        <h2>Form Provider</h2>
        <p>
          The contact form may be provided by a third-party form or CRM service.
          Information submitted through that form may be processed by that
          provider so the enquiry can be received and managed.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy questions or to request an update to information you have
          supplied, email{" "}
          <a href="mailto:josh@builtinmelbourne.com.au">
            josh@builtinmelbourne.com.au
          </a>
          .
        </p>
      </section>
    </main>
  );
}
