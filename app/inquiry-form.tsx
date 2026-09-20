"use client";

import { useState } from "react";
import { contact } from "./site-data";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function InquiryForm({ accessKey }: { accessKey: string }) {
  const [state, setState] = useState<SubmissionState>("idle");
  const [message, setMessage] = useState("");

  async function submit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (!accessKey) {
      const formData = new FormData(event.currentTarget);
      const name = String(formData.get("name") ?? "");
      const email = String(formData.get("email") ?? "");
      const request = String(formData.get("message") ?? "");
      const subject = "B2B filter inquiry from JC Filters website";
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
    formData.set("access_key", accessKey);
    formData.set("subject", "New B2B filter inquiry from JC Filters website");
    formData.set("from_name", "JC Filters Website");
    formData.set("Page URL", window.location.href);

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

      form.reset();
      setState("success");
      setMessage("Thank you. Your request has been sent to JC Filters.");
    } catch {
      setState("error");
      setMessage("The email form could not send. Please try again or contact us on WhatsApp.");
    }
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
          <span>Work email <b className="required-mark" aria-hidden="true">*</b></span>
          <input name="email" type="email" autoComplete="email" placeholder="name@company.com" required aria-required="true" />
        </label>
      </div>
      <label className="inquiry-form-message">
        <span>Product request</span>
        <textarea name="message" rows={2} placeholder="Product / part no., quantity, destination and packing needs" required />
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
