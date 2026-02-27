"use client";

import { useState, FormEvent } from "react";

const CITIES = [
  "Ranchi",
  "Delhi NCR",
  "Mumbai",
  "Bangalore",
  "Hyderabad",
  "Chennai",
  "Pune",
  "Kolkata",
  "Other",
];

const BUDGET_OPTIONS = ["₹1–3 Cr", "₹3–5 Cr", "₹5 Cr+"];

const TIMELINE_OPTIONS = ["0–3 months", "3–6 months", "6+ months"];

const PROPERTY_TYPES = ["Villa", "Penthouse", "Apartment"];

const CONSULTATION_MODES = ["In-Person", "Video Call", "Phone Call"];

const selectClass =
  "w-full rounded-full border border-[color:var(--border-soft)] bg-white px-4 py-3 text-sm text-[color:var(--text-primary)] outline-none transition focus:border-[color:var(--accent-brass)] focus:bg-white appearance-none cursor-pointer";

export default function PrivateConsultationForm() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Ready for backend: form data can be collected via FormData(e.currentTarget) or controlled state
    setSubmitted(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl bg-white p-6 shadow-[0_20px_50px_rgba(0,0,0,0.16)] sm:p-8"
    >
      {/* Basic Information */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
          Basic Information
        </p>
        <div className="mt-4 space-y-4">
          <input
            name="fullName"
            required
            placeholder="Full Name"
            className="lux-input-dark"
          />
          <input
            name="email"
            required
            type="email"
            placeholder="Email Address"
            className="lux-input-dark"
          />
          <input
            name="phone"
            required
            type="tel"
            placeholder="Phone Number"
            className="lux-input-dark"
          />
        </div>
      </div>

      {/* Qualification Details */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
          Qualification Details
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2">
          <div>
            <label htmlFor="city" className="sr-only">
              City of Interest
            </label>
            <select name="city" id="city" required className={selectClass}>
              <option value="">City of Interest</option>
              {CITIES.map((city) => (
                <option key={city} value={city}>
                  {city}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="budget" className="sr-only">
              Budget Range
            </label>
            <select name="budget" id="budget" required className={selectClass}>
              <option value="">Budget Range</option>
              {BUDGET_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="timeline" className="sr-only">
              Timeline to Purchase
            </label>
            <select name="timeline" id="timeline" required className={selectClass}>
              <option value="">Timeline to Purchase</option>
              {TIMELINE_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label htmlFor="propertyType" className="sr-only">
              Preferred Property Type
            </label>
            <select
              name="propertyType"
              id="propertyType"
              required
              className={selectClass}
            >
              <option value="">Preferred Property Type</option>
              {PROPERTY_TYPES.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Consultation Preferences */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
          Consultation Preferences
        </p>
        <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <label htmlFor="mode" className="sr-only">
              Consultation Mode
            </label>
            <select name="mode" id="mode" required className={selectClass}>
              <option value="">Consultation Mode</option>
              {CONSULTATION_MODES.map((mode) => (
                <option key={mode} value={mode}>
                  {mode}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="preferredDate"
              className="mb-1.5 block text-xs font-medium text-[color:var(--text-primary)] sm:sr-only"
            >
              Preferred Date
            </label>
            <input
              name="preferredDate"
              id="preferredDate"
              type="date"
              placeholder="Select date"
              aria-placeholder="Select date"
              className="lux-input-dark [color-scheme:light]"
            />
          </div>
          <div>
            <label
              htmlFor="preferredTime"
              className="mb-1.5 block text-xs font-medium text-[color:var(--text-primary)] sm:sr-only"
            >
              Preferred Time
            </label>
            <input
              name="preferredTime"
              id="preferredTime"
              type="time"
              placeholder="Select time"
              aria-placeholder="Select time"
              className="lux-input-dark [color-scheme:light]"
            />
          </div>
        </div>
      </div>

      {/* Additional Notes */}
      <div>
        <label htmlFor="notes" className="sr-only">
          Additional Notes
        </label>
        <textarea
          name="notes"
          id="notes"
          placeholder="Additional Notes"
          className="lux-textarea-dark min-h-[100px]"
          rows={4}
        />
      </div>

      <button
        type="submit"
        className="mt-2 inline-flex w-full items-center justify-center rounded-full lux-cta lux-cta-primary px-6 py-3.5 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--text-primary)] transition hover:scale-[1.02]"
      >
        {submitted ? "Request Received" : "Request Private Appointment"}
      </button>
      {submitted && (
        <p className="pt-1 text-center text-[11px] text-emerald-700">
          Our team will confirm your appointment within one business day.
        </p>
      )}
    </form>
  );
}
