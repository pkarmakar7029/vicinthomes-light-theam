import type { Metadata } from "next";
import PrivateConsultationForm from "@/components/PrivateConsultationForm";

export const metadata: Metadata = {
  title: "Private Consultation",
  description:
    "Request a private consultation with Vicint Homes. A personalised discussion tailored to your aspirations, conducted with complete discretion.",
};

export default function PrivateConsultationPage() {
  return (
    <div className="relative bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          {/* Hero */}
          <div
            className="rounded-3xl bg-cover bg-center text-white overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1920')`,
            }}
          >
            <div className="bg-gradient-to-r from-[color:var(--text-primary)]/75 via-[color:var(--text-primary)]/55 to-[color:var(--text-primary)]/15 px-6 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                Exclusive
              </p>
              <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em]">
                Request a Private Consultation
              </h1>
              <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/85">
                A personalised discussion tailored to your aspirations, conducted
                with complete discretion.
              </p>
            </div>
          </div>

          {/* Why Private Consultation */}
          <div className="mt-14 sm:mt-18 lg:mt-24">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-brass)]">
              Why private consultation
            </p>
            <div className="mt-6 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
              <div className="lux-card px-6 py-6">
                <h3 className="font-playfair text-lg tracking-tight text-[color:var(--text-primary)]">
                  Discretion & Confidentiality
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Your inquiries and preferences are handled with the utmost
                  privacy.
                </p>
              </div>
              <div className="lux-card px-6 py-6">
                <h3 className="font-playfair text-lg tracking-tight text-[color:var(--text-primary)]">
                  Personalised Investment Guidance
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Tailored advice aligned with your goals and portfolio.
                </p>
              </div>
              <div className="lux-card px-6 py-6 sm:col-span-2 lg:col-span-1">
                <h3 className="font-playfair text-lg tracking-tight text-[color:var(--text-primary)]">
                  Priority Access to Limited Residences
                </h3>
                <p className="mt-3 text-sm text-neutral-600 leading-relaxed">
                  Early access to select inventory before general release.
                </p>
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="mt-14 sm:mt-18 lg:mt-24 max-w-3xl">
            <PrivateConsultationForm />
          </div>

          {/* Confidentiality Note */}
          <div className="mt-8 max-w-3xl">
            <p className="text-[11px] uppercase tracking-[0.2em] text-neutral-500 text-center sm:text-left">
              All consultations are conducted with complete confidentiality.
              Your information is never shared with third parties.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
