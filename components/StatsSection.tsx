"use client";

import { motion } from "framer-motion";

const stats = [
  { label: "Happy Clients", value: "232" },
  { label: "Projects", value: "2" },
  { label: "Hours Of Support", value: "1463" },
  { label: "Hard Workers", value: "15" },
];

export default function StatsSection() {
  return (
    <section className="lux-section bg-[color:var(--text-primary)] text-white border-t border-[color:var(--border-soft)]/40">
      <div className="lux-container">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.32em] text-white/60">
              Why choose us
            </p>
            <h2 className="mt-3 font-playfair text-3xl sm:text-4xl lg:text-5xl tracking-[-0.04em]">
              Skilled professionals, quality work, 24/7 support.
            </h2>
          </div>
          <p className="max-w-md text-xs sm:text-sm text-white/70">
            Our team brings experience and precision to every project with unmatched dedication. We deliver exceptional results with care and attention to detail. Our dedicated team is always available to assist you anytime.
          </p>
        </div>
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.1, ease: "easeOut", delay: index * 0.08 }}
              className="rounded-2xl border border-white/15 bg-white/10 px-5 py-5"
            >
              <p className="text-sm text-white/60">{stat.label}</p>
              <p className="mt-2 font-playfair text-2xl">{stat.value}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

