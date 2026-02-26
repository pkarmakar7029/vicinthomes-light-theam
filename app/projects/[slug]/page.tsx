import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ContactForm from "@/components/ContactForm";
import { projects } from "@/lib/projectsData";

type Props = {
  params: { slug: string };
};

export function generateMetadata({ params }: Props): Metadata {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {
      title: "Project not found",
    };
  }
  return {
    title: project.name,
    description: project.shortDescription,
  };
}

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export default function ProjectDetailPage({ params }: Props) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return notFound();
  }

  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-24">
      <section>
        <div className="relative max-h-[520px] overflow-hidden">
          {/* TODO: Replace with final production image */}
          <div
            className="h-[320px] sm:h-[380px] lg:h-[460px] bg-cover bg-center"
            style={{ backgroundImage: `url('${project.heroImage}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--text-primary)]/90 via-[color:var(--text-primary)]/35 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 pb-10">
            <div className="lux-container text-white">
              <span className="lux-badge">{project.status}</span>
              <h1 className="mt-4 max-w-3xl font-playfair text-3xl sm:text-4xl lg:text-[40px] tracking-tight">
                {project.name}
              </h1>
              <p className="mt-2 text-sm sm:text-base text-white/80">
                {project.location}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lux-section">
        <div className="lux-container grid gap-12 lg:grid-cols-[1.7fr,1.1fr]">
          <div className="space-y-8">
            <div>
              <h2 className="font-playfair text-xl text-[color:var(--text-primary)]">
                Overview
              </h2>
              <p className="mt-3 text-sm text-neutral-700 leading-relaxed">
                {project.overview}
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              <div className="lux-card px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent-brass)]">
                  Configurations
                </p>
                <p className="mt-3 text-sm text-neutral-800">
                  {project.configurations.join(" • ")}
                </p>
              </div>
              <div className="lux-card px-5 py-5">
                <p className="text-[11px] uppercase tracking-[0.24em] text-[color:var(--accent-brass)]">
                  Location
                </p>
                <p className="mt-3 text-sm text-neutral-800">
                  {project.location}
                </p>
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-lg text-[color:var(--text-primary)]">
                Signature Amenities
              </h3>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                {project.amenities.map((amenity) => (
                  <div
                    key={amenity}
                    className="rounded-2xl border border-[color:var(--border-soft)] bg-white/90 px-4 py-3 text-sm text-neutral-800"
                  >
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-lg text-[color:var(--text-primary)]">
                Gallery
              </h3>
              {/* TODO: Replace with final production image */}
              <div className="mt-4 grid gap-4 sm:grid-cols-3">
                {project.gallery.map((img) => (
                  <div
                    key={img}
                    className="aspect-[4/3] overflow-hidden rounded-2xl bg-cover bg-center"
                    style={{ backgroundImage: `url('${img}')` }}
                  />
                ))}
              </div>
            </div>

            <div>
              <h3 className="font-playfair text-lg text-[color:var(--text-primary)]">
                Location Advantages
              </h3>
              <ul className="mt-3 space-y-2 text-sm text-neutral-700">
                {project.locationAdvantages.map((advantage) => (
                  <li key={advantage}>• {advantage}</li>
                ))}
              </ul>
            </div>

            <button className="inline-flex items-center rounded-full lux-cta lux-cta-primary px-8 py-3 text-[11px] font-semibold uppercase tracking-[0.26em] text-[color:var(--text-primary)] transition hover:scale-[1.03]">
              Download Brochure
            </button>
          </div>

          <div className="space-y-5 lg:sticky lg:top-28 lg:self-start">
            <div className="lux-card px-6 py-6">
              <p className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]">
                Private Enquiry
              </p>
              <p className="mt-2 text-xs text-neutral-700">
                Share a few details and our advisory team will curate a private
                walkthrough and discussion around availability, customisation,
                and timelines.
              </p>
              <div className="mt-4">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

