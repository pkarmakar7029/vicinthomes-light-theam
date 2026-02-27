"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center";
  actions?: ReactNode;
  /** Use light text (for dark backgrounds) */
  inverted?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "left",
  actions,
  inverted = false,
}: SectionHeadingProps) {
  const alignment =
    align === "center"
      ? "items-center text-center"
      : "items-start text-left";

  return (
    <div className={`flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between ${align === "center" ? "sm:flex-col sm:items-center sm:text-center" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.1, ease: "easeOut" }}
        className={`flex flex-col ${alignment}`}
      >
        <span className="text-[11px] uppercase tracking-[0.36em] text-[color:var(--accent-brass)]">
          {eyebrow}
        </span>
        <h2 className={`mt-3 font-playfair text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em] ${inverted ? "text-white" : "text-[color:var(--text-primary)]"}`}>
          {title}
        </h2>
        {subtitle && (
          <p className={`mt-4 max-w-2xl text-sm sm:text-base lg:text-lg ${inverted ? "text-white/80" : "text-neutral-700"}`}>
            {subtitle}
          </p>
        )}
      </motion.div>
      {actions && <div className="mt-4 sm:mt-0">{actions}</div>}
    </div>
  );
}

