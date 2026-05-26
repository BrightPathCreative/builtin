"use client";

import { FormEvent, useState } from "react";

const projectTypes = [
  "Architectural renovation",
  "New build",
  "Client-side project management",
  "Not sure yet",
];

const designStages = [
  "Early concept, still exploring ideas",
  "Working with an architect or designer",
  "Design is complete, ready to tender",
  "Other",
];

const architectOptions = ["Yes", "Not yet", "Looking for recommendations"];

const tenderOptions = ["Yes, ready to go", "In progress", "No"];

const budgetOptions = [
  "$100K – $300K",
  "$300K – $500K",
  "$500K – $800K",
  "$800K – $1.5M",
  "$1.5M – $3M",
  "$3M+",
  "Prefer not to say",
];

const locationOptions = [
  "Brighton",
  "Elsternwick",
  "Beaumaris",
  "Caulfield",
  "Hampton",
  "Sandringham",
  "Black Rock",
  "Mentone",
  "Bentleigh",
  "Other Bayside Melbourne suburb",
  "Outside Bayside Melbourne",
];

const referralOptions = [
  "Architect or designer referral",
  "Word of mouth",
  "Instagram",
  "Google search",
  "Other",
];

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">(
    "idle"
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("submitting");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const accessKey = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

    if (!accessKey) {
      setStatus("error");
      return;
    }

    formData.append("access_key", accessKey);
    formData.append("subject", "New Project Enquiry — Built In. Melbourne");
    formData.append("from_name", "Built In. Melbourne Website");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <input type="checkbox" name="botcheck" className="visually-hidden" tabIndex={-1} autoComplete="off" />

      <div className="form-grid">
        <label>
          First Name *
          <input type="text" name="first_name" required autoComplete="given-name" />
        </label>
        <label>
          Last Name *
          <input type="text" name="last_name" required autoComplete="family-name" />
        </label>
        <label>
          Email Address *
          <input type="email" name="email" required autoComplete="email" />
        </label>
        <label>
          Phone Number *
          <input type="tel" name="phone" required autoComplete="tel" />
        </label>
        <label className="form-grid__full">
          What type of project are you planning?
          <select name="project_type" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {projectTypes.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          What stage are you at in the design process?
          <select name="design_stage" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {designStages.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          Have you engaged an architect or designer? *
          <select name="architect_status" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {architectOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          Do you have a tender package? *
          <select name="tender_status" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {tenderOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          What is your approximate project budget?
          <select name="budget" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {budgetOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          Where is your project located?
          <select name="location" required defaultValue="">
            <option value="" disabled>
              Select an option
            </option>
            {locationOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
        <label className="form-grid__full">
          Tell us about your project *
          <textarea
            name="message"
            rows={5}
            required
            placeholder="Briefly describe your project, including any relevant details about the property, your design goals, or your timeline."
          />
        </label>
        <label className="form-grid__full">
          How did you hear about Built In. Melbourne?
          <select name="referral_source" defaultValue="">
            <option value="">Select an option (optional)</option>
            {referralOptions.map((option) => (
              <option key={option} value={option}>
                {option}
              </option>
            ))}
          </select>
        </label>
      </div>

      <button className="btn-submit" type="submit" disabled={status === "submitting"}>
        {status === "submitting" ? "Sending…" : "Send Enquiry"}
      </button>

      {status === "success" ? (
        <p className="form-message form-message--success" role="status">
          Thank you. Josh typically responds within 1–2 business days.
        </p>
      ) : null}

      {status === "error" ? (
        <p className="form-message form-message--error" role="alert">
          Something went wrong. Please email{" "}
          <a href="mailto:josh@builtinmelbourne.com.au">
            josh@builtinmelbourne.com.au
          </a>{" "}
          directly.
        </p>
      ) : null}

      {!process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY ? (
        <p className="form-message form-message--note">
          Form integration pending — add your Web3Forms access key to{" "}
          <code>NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY</code>.
        </p>
      ) : null}
    </form>
  );
}
