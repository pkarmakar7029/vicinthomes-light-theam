"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          required
          placeholder="Full Name"
          className="lux-input-dark"
        />
        <input
          required
          placeholder="Phone Number"
          className="lux-input-dark"
        />
      </div>
      <input
        required
        type="email"
        placeholder="Email Address"
        className="lux-input-dark"
      />
      <textarea
        required
        placeholder="Tell us about your requirement, city preference, and timelines"
        className="lux-textarea-dark"
      />
      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full lux-cta lux-cta-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--text-primary)] transition hover:scale-[1.02]"
      >
        {submitted ? "Request Received" : "Submit Enquiry"}
      </button>
      {submitted && (
        <p className="pt-1 text-center text-[11px] text-emerald-700">
          Our advisory desk will reach out within one business day.
        </p>
      )}
    </form>
  );
}

