/**
 * Authentic School Asset Registry for St. Paul's High School – Kevote
 * 
 * To replace placeholders with the authentic photographs:
 * 1. Place your authentic image files in the /public/images/ directory
 * 2. Update the corresponding path below (e.g. "/images/main-gate.jpg")
 * 3. The website will automatically render the verified photograph!
 */

export interface SchoolAsset {
  id: string;
  label: string;
  placeholderText: string;
  path: string; // If empty or points to a non-existent file, the custom authentic placeholder will display
  description: string;
  category: string;
}

export const schoolAssets: Record<string, SchoolAsset> = {
  logo: {
    id: "logo",
    label: "Official School Crest",
    placeholderText: "OFFICIAL ST. PAUL'S KEVOTE SCHOOL LOGO",
    path: "/images/school-logo.png",
    description: "Official shield emblem featuring school motto 'Jishinde Ushinde'",
    category: "Branding"
  },
  gate: {
    id: "gate",
    label: "Main School Gate",
    placeholderText: "MAIN SCHOOL GATE / ENTRANCE",
    path: "/images/school-gate.jpg",
    description: "Official entrance gate and security checkpoint of St. Paul's Kevote",
    category: "Campus"
  },
  compound: {
    id: "compound",
    label: "School Compound",
    placeholderText: "AUTHENTIC SCHOOL COMPOUND PHOTO",
    path: "/images/school-compound.jpg",
    description: "Aerial or wide view of academic buildings and assembly grounds",
    category: "Campus"
  },
  bus: {
    id: "bus",
    label: "School Bus",
    placeholderText: "BABA YAO SCHOOL BUS",
    path: "/images/school-bus.jpg",
    description: "Official school bus known as 'Baba Yao' used for transport and tours",
    category: "Transport"
  },
  dormitory: {
    id: "dormitory",
    label: "School Dormitory",
    placeholderText: "SCHOOL DORMITORY",
    path: "/images/school-dormitory.jpg",
    description: "Boarding dormitories housing our male boarding learners",
    category: "Boarding"
  },
  bakery: {
    id: "bakery",
    label: "School Bakery",
    placeholderText: "SCHOOL BAKERY",
    path: "/images/school-bakery.jpg",
    description: "On-campus bakery providing fresh daily bread for students",
    category: "Facilities"
  },
  principal: {
    id: "principal",
    label: "Principal Photograph",
    placeholderText: "PRINCIPAL PHOTOGRAPH",
    path: "/images/principal.jpg",
    description: "Chief Principal Mr. Simon Njagi",
    category: "Administration"
  },
  laboratories: {
    id: "laboratories",
    label: "Science Laboratories",
    placeholderText: "AUTHENTIC SCIENCE & COMPUTER LABS",
    path: "/images/school-laboratories.jpg",
    description: "Biology, Chemistry, Physics, and ICT facilities",
    category: "Academics"
  },
  sports: {
    id: "sports",
    label: "School Sports Field",
    placeholderText: "AUTHENTIC SCHOOL SPORTS GROUNDS",
    path: "/images/school-sports.jpg",
    description: "Athletics and ball games fields",
    category: "School Life"
  }
};
