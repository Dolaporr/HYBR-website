"use client";

import { FormEvent, useState } from "react";

type Status = "idle" | "sending" | "success" | "error";

const alphaAccessWebhook = "https://hybrgroup.app.n8n.cloud/webhook/hybr-alpha-access";
const innovationGuideWebhook = "https://hybrgroup.app.n8n.cloud/webhook/hybr-innovation-guide";
const innovationGuideDownload = "/resources/hybr-3d-innovation-flywheel.pdf";

async function submitLead(form: HTMLFormElement, formName: string, extra: Record<string, string>) {
  const data = new FormData(form);
  data.set("form-name", formName);
  Object.entries(extra).forEach(([key, value]) => data.set(key, value));
  const parameters = new URLSearchParams();
  data.forEach((value, key) => parameters.append(key, String(value)));
  const response = await fetch("/__forms.html", {
    body: parameters.toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
  });
  if (!response.ok) throw new Error("Submission failed");
}

async function submitAlphaAccessLead(form: HTMLFormElement) {
  const data = new FormData(form);
  data.set("form-name", "hybr-alpha-access");
  data.set("form_name", "hybr-alpha-access");
  data.set("lead_type", "ALPHA access request");
  data.set("product", "ALPHA");
  data.set("subject", "New HYBR ALPHA access request");

  const parameters = new URLSearchParams();
  data.forEach((value, key) => parameters.append(key, String(value)));

  const response = await fetch(alphaAccessWebhook, {
    body: parameters.toString(),
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    method: "POST",
  });

  if (!response.ok) throw new Error(`Alpha Access webhook failed with ${response.status}`);
}

function downloadInnovationGuide() {
  const link = document.createElement("a");
  link.download = "HYBR-3D-Innovation-Flywheel.pdf";
  link.href = innovationGuideDownload;
  document.body.appendChild(link);
  link.click();
  link.remove();
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
    <input aria-label="Company" autoComplete="organization" className="field" name="company" placeholder="Insert Your Company" type="text" />
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
    try { await submitAlphaAccessLead(form); form.reset(); setStatus("success"); } catch (error) { console.error("Alpha Access webhook submission failed", error); setStatus("error"); }
    alphaWindow?.focus();
  }
  return <form className="what-product-actions" onSubmit={handleSubmit}>
    <input name="form-name" type="hidden" value="hybr-alpha-access" />
    <input aria-label="Company" autoComplete="organization" name="company" placeholder="Insert Your Company" type="text" />
    <input aria-label="ALPHA email access" name="email" placeholder="Insert Your Email" required type="email" />
    <button className="what-button is-lime" disabled={status === "sending"} type="submit">{status === "sending" ? "Opening…" : "Access ALPHA"}</button>
    <p aria-live="polite" className={`what-product-form-status is-${status}`}>{status === "success" && "Your access request has been sent."}{status === "error" && "We could not save your request. Please try again."}</p>
  </form>;
}

export function InnovationGuideDownloadForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    data.set("form_name", "hybr-innovation-guide");
    const parameters = new URLSearchParams();
    data.forEach((value, key) => parameters.append(key, String(value)));

    setStatus("sending");
    try {
      const response = await fetch(innovationGuideWebhook, {
        body: parameters.toString(),
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        method: "POST",
      });
      if (!response.ok) throw new Error(`Innovation Guide webhook failed with ${response.status}`);

      form.reset();
      setStatus("success");
      downloadInnovationGuide();
    } catch (error) {
      console.error("Innovation Guide webhook submission failed", error);
      setStatus("error");
    }
  }

  return <form className="provisional-form" onSubmit={handleSubmit}>
    <input className="field" name="name" placeholder="Insert Your Name" />
    <input className="field" name="email" placeholder="Insert Your Email" required type="email" />
    <button disabled={status === "sending"} type="submit">{status === "sending" ? "Sending…" : "Download"}</button>
    <p aria-live="polite" className={`resource-download-status is-${status}`}>
      {status === "success" && "Your guide is downloading now."}
      {status === "error" && "We could not prepare your guide. Please try again."}
    </p>
  </form>;
}
