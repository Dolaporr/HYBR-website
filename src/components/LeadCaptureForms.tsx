"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

async function submitLead(form: HTMLFormElement, formName: string, extra: Record<string, string>) {
  const data = new FormData(form);
  data.set("form-name", formName);
  Object.entries(extra).forEach(([key, value]) => data.set(key, value));
  const parameters = new URLSearchParams();
  data.forEach((value, key) => parameters.append(key, String(value)));
  const response = await fetch("/", {
    body: parameters.toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
  });
  if (!response.ok) throw new Error("Submission failed");
}

export function HomeLeadForm() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    setStatus("sending");
    try {
      await submitLead(form, "hybr-homepage-enquiry", { lead_type: "Homepage enquiry", subject: "New HYBR homepage enquiry" });
      form.reset(); setStatus("success");
    } catch { setStatus("error"); }
  }
  return <form className="home-contact-form space-y-6 bg-black p-6 md:space-y-8 md:p-16" onSubmit={handleSubmit}>
    <input name="form-name" type="hidden" value="hybr-homepage-enquiry" />
    <input className="field" name="name" placeholder="Insert Your Name" required />
    <input className="field" name="email" placeholder="Insert Your Email" required type="email" />
    <textarea className="field min-h-40 resize-none" name="message" placeholder="What would you like us to know?" required />
    <button className="home-submit-button min-h-14 w-full rounded-full bg-white px-8 text-lg font-medium text-black transition" disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Submit"}</button>
    <p aria-live="polite" className={`home-form-status is-${status}`}>{status === "success" && "Thank you — your enquiry has been sent to the HYBR team."}{status === "error" && "We could not send your enquiry. Please try again."}</p>
  </form>;
}

export function CareersConnectionForm() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget; setStatus("sending");
    try { await submitLead(form, "hybr-careers-connection", { lead_type: "Careers connection", subject: "New HYBR careers connection" }); form.reset(); setStatus("success"); } catch { setStatus("error"); }
  }
  return <form className="careers-newsletter-form" onSubmit={handleSubmit}>
    <input name="form-name" type="hidden" value="hybr-careers-connection" />
    <input aria-label="First name" name="first_name" placeholder="Insert Your First Name" required />
    <input aria-label="Last name" name="last_name" placeholder="Insert Your Last Name" required />
    <input aria-label="Email" name="email" placeholder="Insert Your Email" required type="email" />
    <button disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Submit"}</button>
    <p aria-live="polite" className={`careers-form-status is-${status}`}>{status === "success" && "Thank you — we’ll be in touch."}{status === "error" && "We could not save your details. Please try again."}</p>
  </form>;
}

export function AlphaAccessForm() {
  const [status, setStatus] = useState<Status>("idle");
  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); const form = event.currentTarget;
    const alphaWindow = window.open("https://alpha.hybrgroup.net", "_blank", "noopener,noreferrer");
    setStatus("sending");
    try { await submitLead(form, "hybr-alpha-access", { lead_type: "ALPHA access request", product: "ALPHA", subject: "New HYBR ALPHA access request" }); form.reset(); setStatus("success"); } catch { setStatus("error"); }
    alphaWindow?.focus();
  }
  return <form className="what-product-actions" onSubmit={handleSubmit}>
    <input name="form-name" type="hidden" value="hybr-alpha-access" />
    <input aria-label="ALPHA email access" name="email" placeholder="Insert Your Email" required type="email" />
    <button className="what-button is-lime" disabled={status === "sending"} type="submit">{status === "sending" ? "Opening…" : "Access ALPHA"}</button>
    <p aria-live="polite" className={`what-product-form-status is-${status}`}>{status === "success" && "Your access request has been sent."}{status === "error" && "We could not save your request. Please try again."}</p>
  </form>;
}
