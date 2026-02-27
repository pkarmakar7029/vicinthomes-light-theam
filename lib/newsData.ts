export type NewsItem = {
  slug: string;
  title: string;
  publication: string;
  date: string;
  excerpt: string;
  url: string;
  image: string;
};

export const newsItems: NewsItem[] = [
  {
    slug: "vicint-featured-financial-express-dailyhunt",
    title: "Vicint Featured in Financial Express on Emerging Luxury Housing Trends",
    publication: "Financial Express (via Dailyhunt)",
    date: "Feb 2026",
    excerpt:
      "Vicint's latest developments were highlighted for their refined architectural language and focus on low-density, design-led living.",
    url: "https://m.dailyhunt.in/news/india/english/financialexpress-epaper-dhc025105e27b7464297e4aa1b3aaf98c0/-newsid-dhc025105e27b7464297e4aa1b3aaf98c0_3c133dfda9f54d6dbb1025f72e567346?sm=Y",
    image: "https://assets-news-bcdn.dailyhunt.in/cmd/resize/1080x1060_90/fetchdata20/images/4a/45/a7/4a45a7d9772dcacf73576513545fe507170c828743a63368bdd338b018368d8c.webp",
  },
];

