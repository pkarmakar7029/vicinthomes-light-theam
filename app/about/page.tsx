import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "About Vicint Homes",
  description:
    "Discover Vicint Estates’ vision, legacy, and philosophy of crafting ultra-luxury residences across India’s most coveted neighbourhoods.",
};

export default function AboutPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-end">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--accent-brass)]">
              About Vicint Marquis
            </p>
            <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[color:var(--text-primary)]">
              A destination in luxury living in Ranchi, Jharkhand.
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-neutral-700">
              Vicint Marquis is exclusively designed for those who value the best one can own. It is a mark of aspiration for those in the top echelon of the contemporary social strata. Vicint Marquis is where connoisseurs of premium living find inspiration and get pampered.
            </p>
          </div>
          <div className="lux-card px-5 py-5 text-sm sm:text-base text-neutral-800">
            <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent-brass)]">
              Why Choose Us
            </p>
            <p className="mt-2">
              Skilled Professionals – Our team brings experience and precision to every project with unmatched dedication.
            </p>
            <p className="mt-4 text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent-brass)]">
              Quality &amp; Support
            </p>
            <p className="mt-2">
              Quality Work – We deliver exceptional results with care and attention to detail. 24/7 Support – Our dedicated team is always available to assist you anytime.
            </p>
          </div>
        </div>
      </section>

      <StatsSection />

      <section className="lux-section border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Our Services"
              title="Building construction, renovation, design &amp; more."
            />
            <div className="mt-5 space-y-4 text-sm text-neutral-700">
              <p>
                We offer best-in-class service quality with customer satisfaction at the core. Beautiful, aesthetically stunning and functional designs tailored to modern trends. Professional specialists bringing experience and expertise.
              </p>
              <p>
                Our service areas include Building Construction, House Renovation, Architecture Design, Interior Design, and Painting. Clear and timely documentation for transparency. Planning support from idea to execution. Creative experts delivering unique outcomes.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Awards & Recognition
              </p>
              <ul className="mt-4 space-y-3 text-sm text-neutral-700">
                <li>
                  • 2025 – Global Residential Design Award for Terraces of
                  Indiranagar (Monocle Design Journal)
                </li>
                <li>
                  • 2024 – Excellence in Boutique Luxury Development (CRE
                  Leadership Council)
                </li>
                <li>
                  • 2023 – India&apos;s Most Trusted Emerging Developer (Ultra-HNI
                  Insights Survey)
                </li>
              </ul>
            </div>

            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Our Timeline
              </p>
              <div className="mt-4 space-y-5 border-l border-neutral-200 pl-4 text-sm text-neutral-700">
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                    2008
                  </p>
                  <p className="mt-1 font-medium text-[color:var(--text-primary)]">
                    Vicint is founded in South Mumbai
                  </p>
                  <p className="mt-1 text-xs">
                    First development focused on low-rise, sea-facing
                    residences for legacy families.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                    2014
                  </p>
                  <p className="mt-1 font-medium text-[color:var(--text-primary)]">
                    Expansion to Bengaluru
                  </p>
                  <p className="mt-1 text-xs">
                    Launch of Terraces portfolio, bringing courtyard living into
                    the heart of the city.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                    2021
                  </p>
                  <p className="mt-1 font-medium text-[color:var(--text-primary)]">
                    Entry into Hyderabad & NCR
                  </p>
                  <p className="mt-1 text-xs">
                    Hilltop and golf-view residences designed for globally
                    mobile Indian families.
                  </p>
                </div>
                <div>
                  <p className="text-xs uppercase tracking-[0.24em] text-neutral-500">
                    2026
                  </p>
                  <p className="mt-1 font-medium text-[color:var(--text-primary)]">
                    Next chapter of ultra-luxury
                  </p>
                  <p className="mt-1 text-xs">
                    A curated pipeline of rare, city-defining addresses across
                    India&apos;s most enduring neighbourhoods.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

