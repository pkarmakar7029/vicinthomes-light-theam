"use client";

import { motion } from "framer-motion";
import { FaStar } from "react-icons/fa";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
};

type Props = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.1, ease: "easeOut" }}
      className="rounded-3xl border border-white/20 bg-white/10 px-8 py-8 shadow-[0_12px_40px_rgba(0,0,0,0.25)] backdrop-blur-xl"
    >
      <div className="flex items-center gap-2 text-[color:var(--accent-brass)]">
        {Array.from({ length: 5 }).map((_, i) => (
          <FaStar key={i} className="h-4 w-4 md:h-5 md:w-5" />
        ))}
      </div>
      <p className="mt-5 text-sm sm:text-base text-white/85 leading-relaxed">
        {testimonial.quote}
      </p>
      <div className="mt-6 text-xs sm:text-sm text-white/75">
        <p className="font-medium">{testimonial.name}</p>
        <p className="mt-1 text-[11px] uppercase tracking-[0.22em] text-white/50">
          {testimonial.role}
        </p>
      </div>
    </motion.article>
  );
}

