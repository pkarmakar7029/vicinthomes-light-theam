"use client";

import { useState, FormEvent } from "react";

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    // Collect form values by element order (no name attributes on inputs)
    const form = e.currentTarget;
    const fullName = (form.elements[0] as HTMLInputElement).value;
    const phone = (form.elements[1] as HTMLInputElement).value;
    const email = (form.elements[2] as HTMLInputElement).value;
    const message = (form.elements[3] as HTMLTextAreaElement).value;
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value ?? "";

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          formType: "contact",
          fullName,
          email,
          phone,
          message,
          company,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        setError(data.error ?? "Something went wrong. Please try again.");
        setLoading(false);
        return;
      }

      setSubmitted(true);
    } catch (err) {
      console.error("Contact form submit error:", err);
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    
    <form
      onSubmit={handleSubmit}
      className="space-y-4 rounded-3xl bg-white p-5 shadow-[0_20px_50px_rgba(0,0,0,0.16)]"
    >
      <div className="grid gap-3 sm:grid-cols-2">
        <input
          name="fullName"
          required
          minLength={2}
          placeholder="Full Name"
          className="lux-input-dark"
        />
        <input
          name="phone"
          type="tel"
          required
          pattern="[0-9]{10}"
          placeholder="Phone Number"
          className="lux-input-dark"
        />
      </div>
      <input
        name="email"
        type="email"
        required
        placeholder="Email Address"
        className="lux-input-dark"
      />
      <textarea
        name="message"
        required
        minLength={10}
        placeholder="Tell us about your requirement, city preference, and timelines"
        className="lux-textarea-dark"
      />
      <input
        type="text"
        name="company"
        className="hidden"
        tabIndex={-1}
        autoComplete="off"
      />
      <button
        type="submit"
        disabled={loading}
        className="mt-2 inline-flex w-full items-center justify-center rounded-full lux-cta lux-cta-primary px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--text-primary)] transition hover:scale-[1.02]"
      >
        {submitted ? "Request Received" : loading ? "Sending..." : "Submit Enquiry"}
      </button>
      {error && (
        <p className="pt-1 text-center text-[11px] text-red-600">
          {error}
        </p>
      )}
      {submitted && (
        <p className="pt-1 text-center text-[11px] text-emerald-700">
          Our advisory desk will reach out within one business day.
        </p>
      )}
    </form>
  );
}

