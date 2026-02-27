import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import { leaders } from "@/lib/leadersData";

export const metadata: Metadata = {
  title: "Leadership",
  description:
    "Meet the leadership team that shapes Vicint Estates’ long-horizon approach to ultra-luxury development.",
};

export default function LeadershipPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Leadership"
            title="A compact team with a deep, long-term view."
            subtitle="Vicint’s leadership team brings together experience across global finance, architecture, hospitality, and family office governance – united by a shared belief in thoughtful, low-volume development."
          />

          <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {leaders.map((leader) => (
              <article
                key={leader.name}
                className="lux-card overflow-hidden grid gap-6 sm:grid-cols-[1.1fr,2fr] items-stretch"
              >
                {/* TODO: Replace with final production image */}
                <div
                  className="bg-contain bg-center min-h-[220px] bg-no-repeat"
                  style={{ backgroundImage: `url('${leader.image}')` }}
                />
                <div className="px-6 py-6 flex flex-col justify-between">
                  <div>
                    <h2 className="font-playfair text-xl text-[color:var(--text-primary)]">
                      {leader.name}
                    </h2>
                    <p className="mt-1 text-[11px] uppercase tracking-[0.24em] text-neutral-600">
                      {leader.title}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section bg-[color:var(--text-primary)] text-white border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container grid gap-10 md:grid-cols-[1.6fr,1.2fr] md:items-center">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">
              Founder&apos;s Message
            </p>
            <h2 className="mt-4 font-playfair text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
              “Our job is not to chase every opportunity. It is to say no –
              repeatedly – until the land, light, and context feel inevitable.”
            </h2>
            <p className="mt-4 text-sm text-white/75">
              For us, development is a craft practice. We obsess over how
              morning light enters a living room, the volume of a lobby, the way
              a corridor sounds at midnight. These small decisions, repeated
              over years, create homes that feel composed rather than
              decorated.
            </p>
            <p className="mt-3 text-sm text-white/75">
              We are deeply grateful to the families and partners who have
              trusted us with their most important asset – their home – and we
              carry that responsibility into every new project we conceive.
            </p>
            <p className="mt-5 text-sm font-medium text-[color:var(--accent-brass)]">
              – Arjun Mehra, Founder & Chairman
            </p>
          </div>
          <div className="lux-card border-white/10 bg-white px-6 py-6 text-[color:var(--text-primary)]">
            <p className="text-[11px] uppercase tracking-[0.28em] text-[color:var(--accent-brass)]">
              Philosophy
            </p>
            <p className="mt-3 text-sm text-neutral-800">
              We measure success not at launch, but a decade later – in the way
              our projects are lived in, cared for, and spoken about in quiet
              conversations amongst families and advisors.
            </p>
            <p className="mt-4 text-sm text-neutral-800">
              This demands a discipline of fewer, better projects; of letting
              architects, designers, and craftspeople work deeply; and of
              backing every promise with institutional-grade governance.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

