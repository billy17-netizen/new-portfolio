import { type ProjectCardProps } from "@/components/projects/project-card";
import { type ProjectShowcaseListItem } from "@/components/projects/project-showcase-list";

export const PROJECT_SHOWCASE: ProjectShowcaseListItem[] = [
  {
    index: 0,
    title: "OrFarm",
    href: "/projects",
    tags: ["Ajax", "CSS", "Blade", "PHPStorm", "Laragon", "Laravel", "MySQL"],
    image: {
      LIGHT: "/images/projects/OrFarmHomeScreen.svg",
      DARK: "/images/projects/OrFarmShoppage.svg",
    },
  },
];

export const PROJECTS_CARD: ProjectCardProps[] = [
  {
    name: "Orfarm",
    favicon: "/images/projects/logos/logoOrfarm.png",
    imageUrl: [
      "/images/projects/OrFarmHomeScreen.svg",
      "/images/projects/OrFarmShoppage.svg",
      "/images/projects/OrFarmAdminDashboard.svg",
    ],
    description:
      "Our e-commerce platform provides a convenient online shopping experience with a wide range of products including fresh food, snacks, and drinks. Designed with a user-friendly interface, it allows customers to easily browse and purchase items. The website, built with the Laravel framework and integrated with the Midtrans payment gateway, offers a secure and efficient way to shop without visiting physical stores.",
    sourceCodeHref: "https://github.com/BUMBAIYA/jsontree",
    liveWebsiteHref: "#",
  },
];
