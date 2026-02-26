export type ProjectStatus = "Ongoing" | "Completed" | "Upcoming";

export type Project = {
  slug: string;
  name: string;
  location: string;
  status: ProjectStatus;
  configurations: string[];
  heroImage: string;
  thumbnail: string;
  shortDescription: string;
  overview: string;
  amenities: string[];
  gallery: string[];
  locationAdvantages: string[];
};

// TODO: Replace with final production image
const UNSPLASH = "https://images.unsplash.com";

export const projects: Project[] = [
  {
    slug: "altair-residences-marine-drive",
    name: "Altair Residences",
    location: "Marine Drive, South Mumbai",
    status: "Ongoing",
    configurations: ["3 BHK", "4 BHK", "Duplex Residences"],
    heroImage: `${UNSPLASH}/photo-1600585154340-be6161a56a0c?w=1200`,
    thumbnail: `${UNSPLASH}/photo-1600596542815-ffad4c1539a9?w=800`,
    shortDescription:
      "A sculpted glass tower on Marine Drive with panoramic sea views, triple-height lobby volumes, and private elevator access to every residence.",
    overview:
      "Altair Residences is Vicint’s flagship tower on Marine Drive – a finely balanced composition of glass, brass, and stone that creates a sense of hushed arrival from the very first step. Residences open out to uninterrupted Arabian Sea vistas, with discreet service corridors and back-of-house planning that keeps hospitality-grade service completely invisible. A low-density configuration ensures long-term privacy and exclusivity for every family.",
    amenities: [
      "Sky lounge with 270° sea views",
      "Residents’ members club & whisky room",
      "Indoor heated pool and vitality spa",
      "Private cinema with concierge-managed screenings",
      "Dedicated chauffeur lounge & valet bay",
      "On-site curated art program across common areas",
    ],
    gallery: [
      `${UNSPLASH}/photo-1600596542815-ffad4c1539a9?w=800`,
      `${UNSPLASH}/photo-1600585154340-be6161a56a0c?w=800`,
      `${UNSPLASH}/photo-1600607687939-ce8a6c25118c?w=800`,
      `${UNSPLASH}/photo-1600566753190-17f0baa2a6c3?w=800`,
    ],
    locationAdvantages: [
      "5 minutes from Nariman Point & Fort business districts",
      "Walkable promenade access for morning and evening walks",
      "Proximity to the city’s best dining, clubs and galleries",
      "Quick access to Eastern Freeway and Sea Link",
    ],
  },
  {
    slug: "terraces-of-indiranagar",
    name: "Terraces of Indiranagar",
    location: "Indiranagar, Bengaluru",
    status: "Completed",
    configurations: ["3 BHK", "4 BHK", "Penthouses"],
    heroImage: `${UNSPLASH}/photo-1600047509807-ba8f99d2cdde?w=1200`,
    thumbnail: `${UNSPLASH}/photo-1600047509807-ba8f99d2cdde?w=800`,
    shortDescription:
      "Low-rise, courtyard-focused residences immersed in mature greenery, crafted for families that value calm, light, and long lunches at home.",
    overview:
      "Terraces of Indiranagar is a collection of low-density residences arranged around quiet, landscaped courtyards. The architecture draws in filtered southern light, cross-ventilation, and framed views of mature trees – softening the line between home and garden. Crafted in warm woods, brushed brass, and honed stone, these homes age gracefully with the families that live in them.",
    amenities: [
      "Central landscaped courtyard with water features",
      "Residents’ lounge and library",
      "Temperature-controlled pool and children’s play deck",
      "Gymnasium with dedicated yoga studio",
      "Guest suites for visiting family and friends",
    ],
    gallery: [
      `${UNSPLASH}/photo-1600047509807-ba8f99d2cdde?w=800`,
      `${UNSPLASH}/photo-1600585154526-990dced4db0d?w=800`,
      `${UNSPLASH}/photo-1600566753086-00f18fb6b3ea?w=800`,
    ],
    locationAdvantages: [
      "Quiet residential street with tree canopies",
      "Walkable access to Indiranagar’s cafés and boutiques",
      "Short drive to CBD and key tech parks",
    ],
  },
  {
    slug: "summit-reserve-gachibowli",
    name: "Summit Reserve",
    location: "Gachibowli, Hyderabad",
    status: "Upcoming",
    configurations: ["4 BHK", "Sky Villas"],
    heroImage: `${UNSPLASH}/photo-1600607687939-ce8a6c25118c?w=1200`,
    thumbnail: `${UNSPLASH}/photo-1600607687939-ce8a6c25118c?w=800`,
    shortDescription:
      "Elevated hilltop residences overlooking the Financial District, designed as sky villas with wraparound terraces and double-height living volumes.",
    overview:
      "Summit Reserve crowns a natural hill in Gachibowli, with staggered sky villas that mirror the topography. Each residence enjoys layered privacy, wraparound terraces, and double-height living spaces that frame dramatic sunsets over the Financial District skyline. A dedicated arrival road and gatehouse preserve a sense of separation from the bustle below.",
    amenities: [
      "Hilltop infinity pool and deck",
      "Residents’ sky pavilion and bar",
      "Boutique clubhouse with entertaining kitchens",
      "Professional-grade fitness & wellness centre",
      "Dedicated concierge desk for daily services",
    ],
    gallery: [
      `${UNSPLASH}/photo-1600607687939-ce8a6c25118c?w=800`,
      `${UNSPLASH}/photo-1600585154340-be6161a56a0c?w=800`,
      `${UNSPLASH}/photo-1600566753190-17f0baa2a6c3?w=800`,
    ],
    locationAdvantages: [
      "Overlooking Financial District and key campuses",
      "Easy access to Outer Ring Road and airport",
      "Proximity to international schools and hospitals",
    ],
  },
];

