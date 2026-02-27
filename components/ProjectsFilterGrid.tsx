"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import type { ProjectDisplay, ProjectStatus } from "@/lib/projectsData";
import SectionHeading from "@/components/SectionHeading";

type Props = {
  projects: ProjectDisplay[];
};

const filters: (ProjectStatus | "All")[] = [
  "All",
  "Completed",
  "Ongoing",
  "Upcoming",
];

export default function ProjectsFilterGrid({ projects }: Props) {
  const [activeFilter, setActiveFilter] =
    useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.status === activeFilter);

  return (
    <section className="lux-section pt-0">
      <div className="lux-container">
        <SectionHeading
          eyebrow="Portfolio"
          title="Select delivered, ongoing, and upcoming residences."
        />
        <div className="mt-6 flex flex-wrap gap-3">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.26em] ${
                activeFilter === filter
                  ? "border-[color:var(--accent-brass)] bg-[color:var(--accent-brass)] text-[color:var(--text-primary)] shadow-[0_8px_24px_rgba(176,141,87,0.3)]"
                  : "border-[color:var(--border-soft)] bg-white/90 text-neutral-700 hover:border-[color:var(--accent-brass)] hover:text-[color:var(--accent-brass)]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
        <div className="mt-10 grid gap-8 md:grid-cols-3">
          {filteredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

