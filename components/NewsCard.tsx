"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { NewsItem } from "@/lib/newsData";

type Props = {
  item: NewsItem;
};

export default function NewsCard({ item }: Props) {
  return (
    <motion.article
      whileHover={{ y: -6 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="lux-card flex flex-col overflow-hidden"
    >
      <div className="px-6 pt-6">
        <p className="text-[11px] uppercase tracking-[0.26em] text-neutral-500">
          {item.publication} • {item.date}
        </p>
        <h3 className="mt-3 font-playfair text-lg text-[color:var(--text-primary)]">
          {item.title}
        </h3>
        <p className="mt-3 text-xs text-neutral-600 line-clamp-3">
          {item.excerpt}
        </p>
      </div>
      <div className="mt-4 flex-1" />
      <div className="px-6 pb-6 pt-3">
        <Link
          href="#"
          className="text-[11px] uppercase tracking-[0.26em] text-[color:var(--accent-brass)]"
        >
          Read More
        </Link>
      </div>
    </motion.article>
  );
}

