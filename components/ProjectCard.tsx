"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { Project } from "@/lib/projectsData";

type Props = {
  project: Project;
};

const statusColors: Record<Project["status"], string> = {
  Ongoing: "bg-emerald-500/10 text-emerald-700 border-emerald-400/40",
  Completed: "bg-sky-500/10 text-sky-700 border-sky-400/40",
  Upcoming: "bg-amber-500/10 text-amber-700 border-amber-400/40",
};

export default function ProjectCard({ project }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lux-card overflow-hidden flex flex-col group transition-all duration-300 hover:border-[color:var(--accent-brass)] hover:shadow-[0_20px_50px_rgba(42,42,42,0.14)]"
    >
      <Link href={`/projects/${project.slug}`} className="flex flex-1 flex-col">
        <div className="relative overflow-hidden">
          {/* TODO: Replace with final production image */}
          <div
            className="aspect-[4/3] bg-cover bg-center transition-transform duration-500 ease-out group-hover:scale-[1.05]"
            style={{ backgroundImage: `url('${project.thumbnail}')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[color:var(--text-primary)]/50 via-[color:var(--text-primary)]/15 to-transparent" />
          <div className="absolute bottom-4 left-4 flex flex-col gap-2">
            <span
              className={`inline-flex items-center rounded-full border px-3 py-1 text-[10px] font-medium uppercase tracking-[0.24em] ${statusColors[project.status]}`}
            >
              {project.status}
            </span>
            <p className="text-xs text-white/80">{project.location}</p>
          </div>
        </div>
        <div className="flex flex-1 flex-col px-6 pb-6 pt-5">
          <h3 className="font-playfair text-lg text-[color:var(--text-primary)]">
            {project.name}
          </h3>
          <p className="mt-2 text-xs text-neutral-600 line-clamp-3">
            {project.shortDescription}
          </p>
          <div className="mt-4 flex items-center justify-between text-[11px] text-neutral-700">
            <span>{project.configurations.join(" • ")}</span>
            <span className="text-[color:var(--accent-brass)] uppercase tracking-[0.24em]">
              View
            </span>
          </div>
        </div>
      </Link>
    </motion.article>
  );
}

