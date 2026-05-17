import type { IconName } from "@/lib/aecc-icons";

export const brand = {
  name: "AECC",
  fullName: "Advanced Energy Company",
  tagline: "A subsidiary of MASCO Group",
  phone: "+966 (0) 11477 7742",
  email: "advancedenergysa@gmail.com",
};

export const stats: {
  value: string;
  label: string;
  icon: IconName;
}[] = [
  { value: "17", label: "Years of experience", icon: "calendar" },
  { value: "19", label: "Power substations (up to 132 KV)", icon: "zap" },
  { value: "2.07B", label: "Total project value", icon: "award" },
];

export const mascoStats: {
  value: string;
  label: string;
  icon: IconName;
}[] = [
  { value: "40+", label: "Years of experience", icon: "calendar" },
  { value: "1300+", label: "KM roads", icon: "route" },
  { value: "400M+", label: "m³ treated water / year", icon: "droplets" },
  { value: "1M+", label: "m² building surface", icon: "building" },
  { value: "36M+", label: "m² infrastructure surface works", icon: "layers" },
  { value: "447+", label: "Km railways high-speed train", icon: "train" },
  { value: "40+", label: "Bridges", icon: "building2" },
  { value: "20+", label: "m³ of rocks ballasted", icon: "mountain" },
];

export const overview = `Advanced Energy Company (AECC), established in 2008, has rapidly emerged as a leading force in the construction and management of energy projects within the Kingdom of Saudi Arabia.

Since our inception, AECC has been dedicated to providing innovative and sustainable energy solutions to meet the growing demands of the Kingdom's energy sector. Over the years, we have honed our expertise and garnered invaluable experience, enabling us to undertake complex and large-scale projects.

AECC is a subsidiary of MASCO Group, with 17 years of unwavering efficiency and success in the Saudi market. MASCO's portfolio spans civil, architecture, environment, energy, mining, and building materials.`;

export const mission =
  "To deliver exceptional fully integrated power EPC and services with the utmost professionalism, utilization of advanced technology, and fostering enduring partnerships to create a greener, more efficient energy future.";

export const vision =
  "To be at the forefront of innovative and sustainable energy solutions within the Kingdom of Saudi Arabia.";

export const coreValues: {
  title: string;
  description: string;
  icon: IconName;
}[] = [
  {
    title: "Integrity",
    icon: "scale",
    description:
      "We uphold honesty and transparency in all business dealings, fostering trust with clients and partners.",
  },
  {
    title: "Safety",
    icon: "shieldCheck",
    description:
      "The well-being of our team, clients, and community is our top priority, and we maintain rigorous safety measures.",
  },
  {
    title: "Collaboration",
    icon: "users",
    description:
      "We embrace diverse perspectives, fostering open communication and teamwork to drive innovation.",
  },
  {
    title: "Citizenship",
    icon: "globe",
    description:
      "We are committed to being responsible corporate citizens, making a positive impact on society through sustainable initiatives.",
  },
  {
    title: "Quality",
    icon: "badgeCheck",
    description:
      "Delivering exceptional, sustainable solutions that surpass client expectations is our hallmark.",
  },
  {
    title: "Excellence",
    icon: "sparkles",
    description:
      "We continuously strive to advance the energy sector through cutting-edge technologies and best practices.",
  },
];

export const services: {
  id: string;
  title: string;
  icon: IconName;
  items: string[];
  description: string;
}[] = [
  {
    id: "construction",
    title: "Construction",
    icon: "hardHat",
    items: [
      "EPC Project / Power",
      "EPC Project / Water",
      "EPC Project / Oil & Gas",
    ],
    description:
      "Full turn-key EPC HV substation, HV overhead transmission lines, modification of existing HV substations, HV cable, and solar energy (PV).",
  },
  {
    id: "renewables",
    title: "Renewables Energy",
    icon: "sun",
    items: [
      "Solar Power Projects",
      "Energy Efficiency",
      "Green Hydrogen",
    ],
    description:
      "Creating a sustainable tomorrow by enabling innovation today. We develop, construct, operate, and maintain utility-scale power projects across diversified technologies.",
  },
  {
    id: "engineering",
    title: "Engineering Services",
    icon: "wrench",
    items: ["Primary Equipment", "Secondary Equipment"],
    description:
      "Comprehensive end-to-end engineering solutions backed by experienced professionals dedicated to meeting and exceeding client expectations.",
  },
];

export const projects: {
  name: string;
  client: string;
  site: string;
  scope: string;
  icon: IconName;
  image: string;
}[] = [
  {
    name: "New Badr Overhead Transmission Line",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Al Madina",
    scope:
      "EPC of two (2) new 110kV double circuits, approximately 2,950 kilometers supported lattice steel structures using 2×500mm² AAAC conductor per phase.",
    icon: "tower",
    image: "/aecc/projects/new-badr-overhead.png",
  },
  {
    name: "Khafji Substation",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Khafji",
    scope:
      "EPC of new 115/13.8kV indoor GIS substation, three (3) nos. 115/13.8kV, 67MVA power transformers.",
    icon: "factory",
    image: "/aecc/projects/khafji.png",
  },
  {
    name: "Qatif Underground Cables",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Qatif",
    scope:
      "Installation of 115kV underground cables from Qatif 115/13.8kV to Tarut 115/13.8kV Substation #2 with two routes.",
    icon: "cable",
    image: "/aecc/projects/qatif.png",
  },
  {
    name: "New Badr Substation",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Madina",
    scope:
      "EPC of new 110/33/13.8kV indoor GIS substation with power transformers.",
    icon: "building",
    image: "/aecc/projects/new-badr-substation.png",
  },
  {
    name: "Al-Kadrh Abu Sadad",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Abha",
    scope: "EPC of new 132/33/13.8kV indoor GIS type substation.",
    icon: "zap",
    image: "/aecc/projects/al-kadrh-abu-sadad.png",
  },
  {
    name: "Nimar Substation",
    client: "Saudi Electricity Company (SEC)",
    site: "KSA, Riyadh",
    scope:
      "EPC of new 132/13.8kV indoor GIS substation, three (3) nos. 132/13.8kV, 67MVA power transformers.",
    icon: "factory",
    image: "/aecc/projects/nimar.png",
  },
];

export const keyClients = [
  { name: "Saudi Electricity Company", logo: "/aecc/clients/client-02.jpeg" },
  { name: "National Grid SA", logo: "/aecc/clients/client-03.jpeg" },
  { name: "NEOM", logo: "/aecc/clients/client-04.jpeg" },
  {
    name: "Saline Water Conversion Corporation",
    logo: "/aecc/clients/client-05.jpeg",
  },
  {
    name: "Royal Commission for Jubail & Yanbu",
    logo: "/aecc/clients/client-06.jpeg",
  },
  { name: "Saudi Aramco", logo: "/aecc/clients/client-07.jpeg" },
];

export const commitment = `At AECC, we understand the significance of long-lasting partnerships with clients and stakeholders. Our collaborative approach ensures that client requirements are thoroughly understood, and projects are tailor-made to meet their specific needs. We prioritize open communication, transparency, and accountability throughout the project lifecycle, fostering trust and confidence in our services.`;

export const navLinks = [
  { href: "#overview", label: "Overview" },
  { href: "#services", label: "Services" },
  { href: "#projects", label: "Projects" },
  { href: "#values", label: "Values" },
  { href: "#contact", label: "Contact" },
];

export const sectionIcons = {
  overview: "building2" as IconName,
  services: "wrench" as IconName,
  projects: "layers" as IconName,
  values: "shield" as IconName,
  contact: "mapPin" as IconName,
  clients: "handshake" as IconName,
};
