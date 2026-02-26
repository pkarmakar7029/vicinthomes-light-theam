import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { FaWhatsapp } from "react-icons/fa";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Vicint Homes. Address: 103, 1st Floor, Nadaan Building, Karamtoli Road, Ranchi. Phone: 9264130333, 9264129333.",
};

export default function ContactPage() {
  return (
    <div className="relative bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container grid gap-10 lg:grid-cols-[1.4fr,1.1fr] lg:items-start">
          <div>
            {/* TODO: Replace with final production image */}
            <div
              className="rounded-3xl bg-cover bg-center text-white overflow-hidden"
              style={{
                backgroundImage: `url('https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=1920')`,
              }}
            >
              <div className="bg-gradient-to-r from-[color:var(--text-primary)]/70 via-[color:var(--text-primary)]/50 to-[color:var(--text-primary)]/10 px-6 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20">
                <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                  Get in touch
                </p>
                <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em]">
                  Contact Vicint Homes
                </h1>
                <p className="mt-5 max-w-xl text-sm sm:text-base lg:text-lg text-white/80">
                  103, 1st Floor, Nadaan Building, Karamtoli Road, Beside Indian Oil Petrol Pump, Ranchi 535022. Phone: 9264130333, 9264129333.
                </p>
              </div>
            </div>

            <div className="mt-8">
              <ContactForm />
            </div>
          </div>

          <div className="space-y-7">
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Address
              </p>
              <div className="mt-4 space-y-4 text-sm text-neutral-700">
                <div>
                  <p className="font-medium text-[color:var(--text-primary)]">
                    Vicint Homes
                  </p>
                  <p>
                    103, 1st Floor, Nadaan Building, Karamtoli Road,
                    <br />
                    Beside Indian Oil Petrol Pump, Ranchi 535022
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--border-soft)] bg-white/80 px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
                Google Maps
              </p>
              <div className="mt-3 flex h-52 items-center justify-center rounded-2xl bg-[color:var(--soft-gray)] text-xs text-neutral-600">
                Google Maps embed placeholder
              </div>
            </div>

            <div className="rounded-3xl border border-[color:var(--border-soft)] bg-white/80 px-6 py-6 text-sm text-neutral-700 space-y-2">
              <p>
                <span className="font-medium text-[color:var(--text-primary)]">
                  Phone:
                </span>{" "}
                9264130333 · 9264129333
              </p>
              <p>
                <span className="font-medium text-[color:var(--text-primary)]">
                  Social:
                </span>{" "}
                Instagram · LinkedIn · WhatsApp
              </p>
            </div>
          </div>
        </div>
      </section>

      <button
        aria-label="Chat on WhatsApp"
        className="fixed bottom-6 right-5 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-[0_16px_40px_rgba(0,0,0,0.35)]"
      >
        <FaWhatsapp className="h-5 w-5" />
      </button>
    </div>
  );
}

