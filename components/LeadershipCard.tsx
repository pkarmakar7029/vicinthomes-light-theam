"use client";

import { motion } from "framer-motion";

type Leader = {
  name: string;
  title: string;
  image: string;
};

type Props = {
  leader: Leader;
};

export default function LeadershipCard({ leader }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="lux-card overflow-hidden flex flex-col bg-[color:var(--background-main)]/90 hover:border-[color:var(--accent-brass)] hover:shadow-[0_20px_50px_rgba(42,42,42,0.12)] transition-all duration-100"
    >
      <div className="flex flex-col items-center px-6 pt-8 pb-7 text-center">
        {/* TODO: Replace with final production image */}
        <div
          className="h-28 w-28 rounded-full border border-[color:var(--border-soft)] bg-cover bg-center"
          style={{ backgroundImage: `url('${leader.image}')` }}
        />
        <h3 className="mt-4 font-playfair text-xl text-[color:var(--text-primary)] tracking-[-0.03em]">
          {leader.name}
        </h3>
        <div className="mt-1 h-px w-10 bg-[color:var(--accent-brass)]" />
        <p className="mt-1 text-xs uppercase tracking-[0.24em] text-neutral-600">
          {leader.title}
        </p>
      </div>
    </motion.article>
  );
}

