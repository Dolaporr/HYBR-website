"use client";

import { FormEvent, useState } from "react";

type ProductKey = "indx" | "flywheel";
type SubmissionState = "idle" | "sending" | "success" | "error";

const formDetails: Record<ProductKey, { formName: string; product: string }> = {
  indx: { formName: "hybr-indx-waitlist", product: "INDX" },
  flywheel: { formName: "hybr-flywheel-waitlist", product: "FLYWHEEL" },
};

export function ProductWaitlistForm({ product }: { product: ProductKey }) {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const details = formDetails[product];

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = event.currentTarget;
    const data = new FormData(form);
    const parameters = new URLSearchParams();
    data.forEach((value, key) => parameters.append(key, String(value)));
    setStatus("sending");

    try {
      const response = await fetch("/__forms.html", {
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
    <form className="what-product-actions" onSubmit={handleSubmit}>
      <input name="form-name" type="hidden" value={details.formName} />
      <input name="product" type="hidden" value={details.product} />
      <input name="lead_type" type="hidden" value="Product waitlist" />
      <input
        aria-label={`${details.product} waitlist email`}
        name="email"
        placeholder="Insert Your Email"
        required
        type="email"
      />
      <button className="what-button is-lime" disabled={status === "sending"} type="submit">
        {status === "sending" ? "Joining…" : "Join Waiting List"}
      </button>
      <p aria-live="polite" className={`what-product-form-status is-${status}`}>
        {status === "success" && "You’re on the waiting list. We’ll be in touch."}
        {status === "error" && "We could not save your request. Please try again."}
      </p>
    </form>
  );
}
