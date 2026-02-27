export type Project = {
  id: number;
  name: string;
  location: string;
  cost: number | null;
};

export const projectsData = {
  completed: [
    { id: 1, name: "Quality Campus", location: "Jagdeo Path, Patna", cost: 24.8 },
    { id: 2, name: "Gulab City", location: "Mahuabagh, Patna", cost: 28.1 },
    { id: 3, name: "Dream City", location: "Near Rajapul, Patna", cost: 56.0 },
    { id: 4, name: "Bankey Bihari Kunj", location: "Mithapur, Patna", cost: 18.4 },
    { id: 5, name: "City Centre", location: "Hajiganj, Patna City", cost: 20.6 },
    { id: 6, name: "Sai City", location: "South Mandiri, Patna", cost: 8.3 },
    { id: 7, name: "Kalyan Sundaram", location: "North Mandiri, Patna", cost: 6.8 },
    { id: 8, name: "Vasudeo City", location: "Near CDA Building, Patna", cost: 10.0 },
    { id: 9, name: "Quality Paradise", location: "Arrah Garden, Bailey Road, Patna", cost: 22.4 },
    { id: 10, name: "Quality Enclave", location: "South Mandiri, Patna", cost: 44.0 },
    { id: 11, name: "Quality Complex", location: "South Mandiri, Patna", cost: 38.3 },
    { id: 12, name: "Kanak City", location: "Patel Nagar, Patna", cost: 12.1 },
    { id: 13, name: "Bimla Apartment", location: "Hajiganj, Patna City", cost: 2.25 },
    { id: 14, name: "Balajee Complex", location: "Exhibition Road, Patna", cost: 9.5 },
    { id: 15, name: "Rajgopal Complex", location: "Nalapar, Patna", cost: 10.2 },
    { id: 16, name: "Devraj Enclave", location: "Lalji Tola, Patna", cost: 8.5 },
    { id: 17, name: "Ramnath Enclave", location: "Lalji Tola, Patna", cost: 12.5 },
    { id: 18, name: "Rajendra City", location: "Ashok Rajpath, Patna", cost: 31.96 },
  ] as Project[],
  ongoing: [
    { id: 19, name: "Amaze City", location: "Magadh Colony, Gaya", cost: 39.7 },
    { id: 20, name: "Deo Enclave", location: "Shastri Nagar, Patna", cost: 41.6 },
    { id: 21, name: "Hindustan Urvarak & Rasayan Limited", location: "Bihar", cost: 10 },
    { id: 22, name: "Hindustan Steel", location: "Bihar", cost: 9 },
  ] as Project[],
  upcoming: [
    { id: 23, name: "B.M. Towers", location: "New Zero Mile, Muzaffarpur", cost: 125.0 },
    { id: 24, name: "Ram Jyoti Enclave", location: "New Yarpur, Patna", cost: 16.0 },
    { id: 25, name: "B.M. Heights", location: "Mithapur, Patna", cost: 112.0 },
    { id: 26, name: "Kaveri", location: "Hajipur, Vaishali", cost: null },
    { id: 27, name: "Sai Niwas", location: "Near Income Tax, Patna", cost: 12.0 },
    { id: 28, name: "Satyam Shivam Sundaram", location: "Baba Chowk, Patna", cost: 38.0 },
  ] as Project[],
  government: [
    { id: 29, name: "GH-121 Girls Hostel", location: "Vaishali", cost: 1.34 },
    { id: 30, name: "Fire Sub-Station Building", location: "Muzaffarpur/Hajipur", cost: 1.27 },
    { id: 31, name: "Ambedkar High School Boundary Wall", location: "Sherghati, Gaya", cost: 0.52 },
    { id: 32, name: "Rail Mahila Barrack", location: "Barauni, Begusarai", cost: 1.41 },
    { id: 33, name: "New Building of BSFC", location: "Fraser Road, Patna", cost: 4.72 },
    { id: 34, name: "Office Building for Minda Group", location: "Gurugram", cost: 4.5 },
    { id: 35, name: "PMGSY Road Project", location: "Bihar", cost: 7.7 },
    { id: 36, name: "BSFC Renovation", location: "Fraser Road, Patna", cost: 1.92 },
    { id: 37, name: "Office Building", location: "5 Harding Road, Patna", cost: 6.59 },
  ] as Project[],
};

const PLACEHOLDER_IMAGE = "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800";

export type ProjectStatus = "Completed" | "Ongoing" | "Upcoming" | "Government";

export type ProjectDisplay = {
  slug: string;
  status: ProjectStatus;
  name: string;
  location: string;
  cost: number | null;
  thumbnail: string;
  shortDescription: string;
  configurations: string[];
  heroImage?: string;
};

export type ProjectDetail = ProjectDisplay & {
  heroImage: string;
  overview: string;
  amenities: string[];
  gallery: string[];
  locationAdvantages: string[];
};

export function toProjectDisplay(
  project: Project,
  status: ProjectStatus
): ProjectDisplay {
  return {
    slug: `project-${project.id}`,
    status,
    name: project.name,
    location: project.location,
    cost: project.cost,
    thumbnail: PLACEHOLDER_IMAGE,
    shortDescription: "",
    configurations: project.cost !== null ? [`₹ ${project.cost} Cr`] : [],
    heroImage: PLACEHOLDER_IMAGE,
  };
}

export function getAllProjectsDisplay(): ProjectDisplay[] {
  const list: ProjectDisplay[] = [];
  projectsData.completed.forEach((p) => list.push(toProjectDisplay(p, "Completed")));
  projectsData.ongoing.forEach((p) => list.push(toProjectDisplay(p, "Ongoing")));
  projectsData.upcoming.forEach((p) => list.push(toProjectDisplay(p, "Upcoming")));
  projectsData.government.forEach((p) => list.push(toProjectDisplay(p, "Government")));
  return list;
}

export function getProjectBySlug(slug: string): ProjectDetail | undefined {
  const p = getAllProjectsDisplay().find((x) => x.slug === slug);
  if (!p) return undefined;
  return {
    ...p,
    heroImage: p.thumbnail,
    overview: `${p.name} is located at ${p.location}.${p.cost != null ? ` Project cost: ₹ ${p.cost} Cr.` : ""}`,
    amenities: [],
    gallery: [p.thumbnail],
    locationAdvantages: [],
  };
}
