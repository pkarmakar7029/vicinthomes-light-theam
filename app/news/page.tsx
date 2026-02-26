import type { Metadata } from "next";
import SectionHeading from "@/components/SectionHeading";
import NewsCard from "@/components/NewsCard";
import { newsItems } from "@/lib/newsData";

export const metadata: Metadata = {
  title: "News & Media",
  description:
    "Read the latest news, features, and interviews featuring Vicint Estates and its ultra-luxury developments.",
};

export default function NewsPage() {
  return (
    <div className="bg-[color:var(--background-main)] text-[color:var(--text-primary)] pt-28">
      <section className="lux-section border-t border-[color:var(--border-soft)]/60">
        <div className="lux-container">
          <SectionHeading
            eyebrow="News & Media"
            title="A curated, editorial presence in the global press."
            subtitle="We appear where it matters – in thoughtful conversations around design, cities, and long-horizon capital."
          />
          <div className="mt-10 grid gap-8 md:grid-cols-3">
            {newsItems.map((item) => (
              <NewsCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

