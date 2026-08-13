"use client";

import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const meetingRequested = form.elements.namedItem(
      "strategy_meeting_requested",
    ) as HTMLInputElement | null;

    // Always send an explicit value so the automation can reliably branch.
    data.set(
      "strategy_meeting_requested",
      meetingRequested?.checked ? "Yes" : "No",
    );
    setStatus("sending");

    try {
      const parameters = new URLSearchParams();
      data.forEach((value, key) => parameters.append(key, String(value)));

      const response = await fetch("/", {
        body: parameters.toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
      });

      if (!response.ok) throw new Error("Submission failed");
      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  return (
    <form
      className="provisional-form"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      name="hybr-contact-enquiry"
      onSubmit={handleSubmit}
    >
      <input name="form-name" type="hidden" value="hybr-contact-enquiry" />
      <input name="subject" type="hidden" value="New HYBR website enquiry" />
      <p className="contact-honeypot" aria-hidden="true">
        <label>
          Leave this field empty
          <input name="bot-field" tabIndex={-1} type="text" />
        </label>
      </p>

      <input
        aria-label="Your name"
        className="field"
        name="name"
        placeholder="Insert Your Name"
        required
      />
      <input
        aria-label="Your email address"
        className="field"
        name="email"
        placeholder="Insert Your Email"
        required
        type="email"
      />
      <textarea
        aria-label="What would you like us to know?"
        className="field"
        name="message"
        placeholder="What would you like us to know?"
        required
      />
      <label className="strategy-meeting-option">
        <input name="strategy_meeting_requested" type="checkbox" value="Yes" />
        <span>I would like to book a strategy meeting with HYBR.</span>
      </label>
      <button disabled={status === "sending"} type="submit">
        {status === "sending" ? "Sending…" : "Submit"}
      </button>
      <p aria-live="polite" className={`contact-form-status is-${status}`}>
        {status === "success" &&
          "Thank you — your enquiry has been sent to the HYBR team."}
        {status === "error" &&
          "We could not send your enquiry. Please email sales@hybrgroup.net."}
      </p>
    </form>
  );
}
