export type NewsItem = {
  slug: string;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "vicint-altair-sets-new-benchmark-marine-drive",
    title:
      "Vicint’s Altair Residences Sets a New Benchmark on Marine Drive Waterfront",
    publication: "Architectural Review India",
    date: "Dec 2025",
    excerpt:
      "With its cinematic lobby volumes, bespoke brass detailing, and rare single-loaded corridors, Altair marks a new chapter in how luxury towers engage with the Marine Drive promenade.",
  },
  {
    slug: "terraces-indiranagar-wins-design-award",
    title:
      "Terraces of Indiranagar Wins Global Award for Intimate Urban Community Design",
    publication: "Monocle Design Journal",
    date: "Sep 2025",
    excerpt:
      "Terraces of Indiranagar has been recognised for its quiet, courtyard-focused master planning that privileges greenery, cross-ventilation, and meaningful shared spaces over scale.",
  },
  {
    slug: "vicint-launches-summit-reserve",
    title:
      "Vicint Announces Summit Reserve, a Hilltop Collection Overlooking Hyderabad’s Financial District",
    publication: "Financial Times – Property",
    date: "Jun 2025",
    excerpt:
      "Summit Reserve reflects a growing preference amongst global Indian families for elevated, low-density homes that preserve both views and privacy while remaining minutes from key business districts.",
  },
  {
    slug: "vicint-green-building-commitment",
    title: "Vicint Reinforces Commitment to High-Performance, Low-Impact Buildings",
    publication: "Business Standard",
    date: "Jan 2026",
    excerpt:
      "All upcoming Vicint developments will target advanced green building certifications, combining high-performance envelopes with elegantly integrated, resident-friendly sustainability features.",
  },
];

