import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import StatsSection from "@/components/StatsSection";

export const metadata: Metadata = {
  title: "About Vicint Homes",
  description:
    "Vicint Marquis is a destination in luxury living in Ranchi, Jharkhand. About us, our vision, mission, and leadership. Quality, aesthetics, style with a difference.",
};

const ABOUT_HERO_IMAGE = "/4copy.jpeg";
const CEO_IMAGE = "/pankaj01.png";

export default function AboutPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      {/* Hero intro with image */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container grid gap-10 md:grid-cols-[1.4fr,1fr] md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--accent-brass)]">
              About Vicint Marquis
            </p>
            <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em] text-[color:var(--text-primary)]">
              A destination in luxury living in Ranchi, Jharkhand.
            </h1>
            <p className="mt-5 max-w-2xl text-sm sm:text-base lg:text-lg text-neutral-700 leading-relaxed">
              Vicint Marquis is a destination in &apos;luxury living&apos; that is blossoming in Ranchi, the quaint city in Jharkhand. Exclusively designed and designated for those who value the best one can own. It is a mark of aspiration for those in the top echelon of the contemporary social strata.
            </p>
            <p className="mt-4 max-w-2xl text-sm sm:text-base text-neutral-700 leading-relaxed">
              Vicint Marquis is where the connoisseurs of premium living find inspiration and get pampered. Here, one can simply explore life&apos;s joys and comforts, that are widely admired. They can enjoy the marvellous and timeless standards and understand why it is one of the finest examples of a unique lifestyle that&apos;s truly grand.
            </p>
          </div>
          <div className="lux-card mx-auto overflow-hidden p-0 w-fit max-w-full">
            <img
              src={ABOUT_HERO_IMAGE}
              alt="Vicint Marquis"
              className="block max-h-[700px] sm:max-h-[780px] lg:max-h-[880px] max-w-full h-auto rounded-2xl"
            />
          </div>
        </div>
      </section>

      {/* The Vicint Marquis – Quality, Aesthetics, Style */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/40 bg-[color:var(--background-soft)]/40">
        <div className="lux-container">
          <SectionHeading
            eyebrow="The Vicint Marquis"
            title="Quality · Aesthetics · Style with a difference."
          />
          <p className="mt-6 max-w-3xl text-sm sm:text-base text-neutral-700 leading-relaxed">
            Vicint Marquis offers a blend of imagination, innovation, and luxury in a fresh, green setting designed to inspire active living. Here the most fascinating architectural designs blended with modern day amenities transcend time. It is a living statement for those who have truly arrived in life.
          </p>
          <p className="mt-4 max-w-3xl text-sm sm:text-base text-neutral-700 leading-relaxed">
            These luxuries are designed to suit a mindset that seeks exclusivity and tranquillity. Inspired by a rich and stylish life, it has been chiselled with opulence and modern-day strokes. Experience refined comfort, thoughtful design, and an exclusive lifestyle crafted for those who seek more.
          </p>
        </div>
      </section>

      <StatsSection />

      {/* Leadership – Pankaj Kumar */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <SectionHeading
              eyebrow="Leadership"
              title="Pankaj Kumar"
              subtitle="CEO, Vicint Homes Pvt. Ltd."
            />
            <div className="mx-auto mt-6 max-w-md overflow-hidden rounded-2xl border border-[color:var(--border-soft)] bg-[color:var(--background-soft)]/50 aspect-[4/5] max-h-[380px] sm:max-h-[420px]">
              <img
                src={CEO_IMAGE}
                alt="Pankaj Kumar, CEO"
                className="block h-full w-full object-cover object-center"
              />
            </div>
            <p className="mt-6 text-sm text-neutral-700 leading-relaxed">
              Pankaj Kumar is a qualified Chartered Accountant and an MBA. He forayed into the world of real estate over a decade ago. With a belief that he can create &apos;Spaces for Smiles and Happiness&apos;, it is his endeavor to live and deliver his &apos;commitment to excellence&apos;.
            </p>
            <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
              He is driven by his passion of bringing metropolitan culture to the developing cities and the flavor of his vision can be felt through this project. He is dedicated in creating value by infusing energetic, positive, result-driven work. He has always sought to invest in relationships and propagates ethics built on a commitment towards customer service and bespoke solutions.
            </p>
            <p className="mt-4 text-sm text-neutral-700 leading-relaxed">
              He is spearheading the development of Vicint Marquis, one of his luxurious residential and commercial projects in Ranchi. He is supported by a strong team of professionals working tirelessly to fulfill his vision. Many more such projects are in the pipeline in Ranchi.
            </p>
          </div>

          <div className="space-y-8">
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Vision
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                To become the most preferred real estate brand in India by booming for benchmark quality, customer centric approach, robust engineering, uncompromising business ethics and transparency in all spheres of business conduct.
              </p>
            </div>
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Mission
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                To enable customers to shift from rent-driven lifestyles to owning cost-competitive, sustainable and luxurious homes that are valuable investments for their families.
              </p>
            </div>
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Goals
              </p>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                To continue to dream big as the company grows, exploring new ways of raising the bar for quality, value, and integrated living.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Areas */}
      <section className="lux-section border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Service Areas"
            title="Building Construction, House Renovation, Design &amp; more."
          />
          <div className="mt-8 flex flex-wrap gap-3">
            {[
              "Building Construction",
              "House Renovation",
              "Architecture Design",
              "Interior Design",
              "Painting",
            ].map((area) => (
              <span
                key={area}
                className="rounded-full border border-[color:var(--border-soft)] bg-white/80 px-5 py-2.5 text-sm font-medium text-[color:var(--text-primary)]"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
