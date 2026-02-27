import type { Metadata } from "next";
import Link from "next/link";
import HeroVideo from "@/components/HeroVideo";
import SectionHeading from "@/components/SectionHeading";
import ProjectCard from "@/components/ProjectCard";
import LeadershipCard from "@/components/LeadershipCard";
import TestimonialCard from "@/components/TestimonialCard";
import NewsCard from "@/components/NewsCard";
import StatsSection from "@/components/StatsSection";
import { getAllProjectsDisplay } from "@/lib/projectsData";
import { newsItems } from "@/lib/newsData";
import { leaders } from "@/lib/leadersData";

export const metadata: Metadata = {
  title: "Vicint Homes | Professional Builder For Your Dream Home",
  description:
    "Vicint Marquis is a destination in luxury living in Ranchi, Jharkhand. Exclusively designed for those who value the best. Professional builder trusted for your dream home.",
};

export default function Home() {
  const allProjects = getAllProjectsDisplay();
  const featuredProjects = allProjects.slice(0, 3);

  const testimonials = [
    {
      name: "Karan & Alisha Kapoor",
      role: "Residence Owners, Mumbai",
      quote:
        "Every detail, from the lobby volume to the last brass fitting, feels meticulously choreographed. It is less an apartment, more a sanctuary.",
    },
    {
      name: "Global Family Office",
      role: "Ultra-HNI Investor",
      quote:
        "Vicint’s discipline around location, design, and delivery has made them a preferred partner in our India real-estate allocation.",
    },
    {
      name: "Priya & Vikram Rao",
      role: "Penthouse Owners, Bengaluru",
      quote:
        "The sense of arrival, the light, the materials – it’s a cinematic experience every single day.",
    },
  ];

  const latestNews = newsItems.slice(0, 3);

  const spotlightProject = allProjects[0];

  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)]">
      <HeroVideo />

      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <SectionHeading
              eyebrow="About Vicint Marquis"
              title="A destination in luxury living in Ranchi, Jharkhand."
              subtitle="Exclusively designed for those who value the best one can own. A mark of aspiration for those in the top echelon of the contemporary social strata."
            />
            <p className="mt-6 text-sm sm:text-base text-neutral-700 leading-relaxed">
              Vicint Marquis is where connoisseurs of premium living find inspiration and get pampered. Here, one can explore life&apos;s joys and comforts that are widely admired and understand why it is one of the finest examples of a truly grand lifestyle.
            </p>
            <Link
              href="/about"
              className="mt-8 inline-flex items-center rounded-full lux-cta lux-cta-primary px-8 py-3 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase transition hover:scale-[1.02]"
            >
              Discover Our Story
            </Link>
          </div>
          <div className="relative">
            <div className="lux-card overflow-hidden">
              {/* TODO: Replace with final production image */}
              <div
                className="aspect-[4/3] bg-cover bg-center"
                style={{
                  backgroundImage: `url('/mainbuilding.jpg')`,
                }}
              />
            </div>
            <div className="pointer-events-none absolute -bottom-10 -left-6 hidden w-40 rounded-3xl border border-[color:var(--border-soft)] bg-[color:var(--text-primary)]/95 px-4 py-3 text-xs text-white shadow-xl sm:block">
              <p className="font-playfair text-sm">232+ Happy Clients</p>
              <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-white/60">
                Quality work &amp; 24/7 support
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="lux-section bg-[color:var(--background-soft)]/50 border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Featured Residences"
            title="A private collection of landmark addresses."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
        </div>
      </section>

      {spotlightProject && (
        <section className="lux-section border-t border-[color:var(--border-soft)]/60">
          <div className="lux-container">
            <div className="relative overflow-hidden rounded-3xl bg-[color:var(--text-primary)] text-white">
              {/* TODO: Replace with final production image */}
              <div
                className="absolute inset-0 bg-cover bg-center opacity-80"
                style={{
                  backgroundImage: `url('${spotlightProject.thumbnail}')`,
                }}
              />
              <div className="lux-overlay-soft absolute inset-0" />
              <div className="relative z-10 flex flex-col gap-6 px-6 py-12 sm:px-10 sm:py-16 lg:flex-row lg:items-end lg:justify-between lg:py-20">
                <div className="max-w-xl">
                  <div className="lux-badge">Project Spotlight</div>
                  <h2 className="mt-6 font-playfair text-3xl sm:text-4xl lg:text-5xl tracking-tight">
                    {spotlightProject.name}
                  </h2>
                  <p className="mt-3 text-sm sm:text-base text-white/80">
                    {spotlightProject.location} • {spotlightProject.status}
                  </p>
                  {spotlightProject.shortDescription ? (
                    <p className="mt-5 text-sm sm:text-base text-white/80 max-w-lg">
                      {spotlightProject.shortDescription}
                    </p>
                  ) : spotlightProject.cost != null ? (
                    <p className="mt-5 text-sm sm:text-base text-white/80 max-w-lg">
                      ₹ {spotlightProject.cost} Cr
                    </p>
                  ) : null}
                </div>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-4 lg:flex-col lg:items-end">
                  <button className="inline-flex items-center rounded-full bg-white/90 px-7 py-3 text-xs sm:text-sm font-medium tracking-[0.22em] text-[color:var(--text-primary)] uppercase shadow-[0_8px_24px_rgba(0,0,0,0.15)] transition hover:bg-white hover:scale-[1.02]">
                    Download Brochure
                  </button>
                  <Link
                    href="/projects"
                    className="inline-flex items-center rounded-full border border-white/40 bg-transparent px-7 py-3 text-xs sm:text-sm font-medium tracking-[0.22em] text-white uppercase transition hover:bg-white/15"
                  >
                    View Project
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      <StatsSection />

      <section className="lux-section bg-[color:var(--background-soft)]/40 border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Leadership"
            title="Stewards of thoughtful, long-horizon development."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {leaders.slice(0, 3).map((leader) => (
              <LeadershipCard key={leader.name} leader={leader} />
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section bg-[color:var(--text-primary)] text-white border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container">
          <SectionHeading
            eyebrow="Testimonials"
            title="Quietly spoken. Deeply felt."
            align="center"
            inverted
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.name} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="News & Media"
            title="A discreet, enduring presence in the global press."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {latestNews.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="lux-section bg-[color:var(--text-primary)] text-white border-t border-[color:var(--border-soft)]/40">
        <div className="lux-container flex flex-col items-center text-center">
          <p className="text-xs uppercase tracking-[0.28em] text-white/70">
            Get in touch
          </p>
          <h2 className="mt-4 max-w-3xl font-playfair text-4xl sm:text-5xl lg:text-6xl tracking-[-0.04em]">
            We are trusted for your dream home.
          </h2>
          <p className="mt-4 max-w-xl text-sm sm:text-base text-white/80">
            Contact us for building construction, house renovation, architecture design, interior design, and painting. Our dedicated team is always available to assist you.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex items-center rounded-full lux-cta lux-cta-primary px-10 py-3 text-xs sm:text-sm font-medium tracking-[0.22em] uppercase transition hover:scale-[1.03]"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  );
}
