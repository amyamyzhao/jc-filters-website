"use client";

import { useState } from "react";
import { contact, whatsappLink } from "./site-data";

type SubmissionState = "idle" | "sending" | "success" | "error";
type SubmittedRequest = { name: string; email: string; request: string };

export function InquiryForm({ accessKey, requestContext }: { accessKey: string; requestContext?: string }) {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");
  const [submittedRequest, setSubmittedRequest] = useState<SubmittedRequest | null>(null);

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const request = String(formData.get("message") ?? "");
      const subject = requestContext ? `JC Filters inquiry: ${requestContext}` : "B2B filter inquiry from JC Filters website";
      const body = [
        `Name: ${name}`,
        `Work email: ${email}`,
        "",
        "Product request:",
        request,
        "",
        `Page URL: ${window.location.href}`,
      ].join("\n");

      setState("success");
      setMessage("Your email app is opening. Review the request and press Send.");
      window.location.href = `mailto:${contact.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
      return;
    }

    const form = event.currentTarget;
    const formData = new FormData(form);
    const customerName = String(formData.get("name") ?? "").trim();
    const customerEmail = String(formData.get("email") ?? "").trim();
    const customerRequest = String(formData.get("message") ?? "").trim();
    formData.set("access_key", accessKey);
    formData.set("subject", requestContext ? `JC Filters inquiry: ${requestContext}` : "New B2B filter inquiry from JC Filters website");
    formData.set("from_name", "JC Filters Website");
    formData.set("replyto", customerEmail);
    formData.set("Customer Reply Email", customerEmail);
    formData.set("Page URL", window.location.href);
    if (requestContext) formData.set("Product Context", requestContext);

    setState("sending");
    setMessage("Sending your inquiry…");

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData,
      });
      const result = await response.json();

      if (!response.ok || !result.success) {
        throw new Error(result.message || "Submission failed");
      }

      setSubmittedRequest({ name: customerName, email: customerEmail, request: customerRequest });
      form.reset();
      setState("success");
      setMessage("Thank you. Your request has been sent to JC Filters.");
    } catch {
      setState("error");
      setMessage("The email form could not send. Please try again or contact us on WhatsApp.");
    }
  }

  if (state === "success" && accessKey) {
    const whatsappMessage = [
      "Hello JC Filters, I have just submitted this inquiry through your website:",
      `Name: ${submittedRequest?.name ?? ""}`,
      `Email: ${submittedRequest?.email ?? ""}`,
      `Product request: ${submittedRequest?.request ?? ""}`,
      "",
      "I would like to continue the conversation on WhatsApp.",
    ].join("\n");

    return (
      <div className="inquiry-success" role="status" aria-live="polite">
        <span className="inquiry-success-icon" aria-hidden="true">✓</span>
        <span className="inquiry-success-kicker">Request received</span>
        <h3>Thank you. Your request is on its way.</h3>
        <p>JC Filters will review your product, quantity, destination and packaging requirements and reply as soon as possible.</p>
        <div className="inquiry-success-next">
          <h4>Want a faster conversation?</h4>
          <p>Your inquiry details are ready in a WhatsApp message. You can edit them before sending.</p>
        </div>
        <a
          className="inquiry-whatsapp-cta"
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="inquiry-whatsapp-icon" aria-hidden="true" />
          Message JC Filters on WhatsApp
          <span aria-hidden="true">↗</span>
        </a>
        <button className="inquiry-reset" type="button" onClick={() => { setState("idle"); setMessage(""); setSubmittedRequest(null); }}>
          Send another inquiry
        </button>
      </div>
    );
  }

  return (
    <form className="inquiry-form" onSubmit={submit} noValidate={false}>
      <input type="checkbox" name="botcheck" className="form-botcheck" tabIndex={-1} autoComplete="off" />
      <div className="inquiry-form-row">
        <label>
          <span>Name</span>
          <input name="name" type="text" autoComplete="name" placeholder="Your name" required />
        </label>
        <label>
          <span>Work email <b className="required-mark" aria-label="required">*</b></span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.com" required aria-required="true" />
        </label>
      </div>
      <label className="inquiry-form-message">
        <span>Product request</span>
        <textarea
          name="message"
          rows={2}
          placeholder="Product / part no., quantity, destination and packing needs"
          defaultValue={requestContext ? `${requestContext}\nQuantity: \nDestination: \nPacking requirements: ` : ""}
          required
        />
      </label>
      <button type="submit" disabled={state === "sending"}>
        {state === "sending" ? "Sending…" : accessKey ? "Send product request" : "Continue by email"}<span aria-hidden="true">→</span>
      </button>
      <p className={`inquiry-form-status ${state}`} aria-live="polite">
        {message || (!accessKey ? "Opens your email app with the request prefilled." : "")}
      </p>
    </form>
  );
}
