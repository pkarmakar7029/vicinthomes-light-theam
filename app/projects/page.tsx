import type { Metadata } from "next";
import ProjectsFilterGrid from "@/components/ProjectsFilterGrid";
import { projects } from "@/lib/projectsData";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Explore Vicint Estates’ curated portfolio of delivered, ongoing, and upcoming ultra-luxury developments across India.",
};

export default function ProjectsPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          {/* TODO: Replace with final production image */}
          <div
            className="rounded-3xl bg-cover bg-center text-white overflow-hidden"
            style={{
              backgroundImage: `url('https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920')`,
            }}
          >
            <div className="bg-gradient-to-r from-[color:var(--text-primary)]/75 via-[color:var(--text-primary)]/55 to-[color:var(--text-primary)]/20 px-6 py-14 sm:px-10 sm:py-18 lg:px-12 lg:py-20">
              <p className="text-[11px] uppercase tracking-[0.32em] text-white/70">
                The Vicint Portfolio
              </p>
              <h1 className="mt-4 font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em]">
                Cinematic homes across India’s most enduring neighbourhoods.
              </h1>
              <p className="mt-4 max-w-2xl text-sm sm:text-base text-white/75">
                A focused collection of ultra-luxury developments – each one
                defined by its location, light, and long-horizon design
                approach.
              </p>
            </div>
          </div>
        </div>
      </section>

      <ProjectsFilterGrid projects={projects} />
    </div>
  );
}

