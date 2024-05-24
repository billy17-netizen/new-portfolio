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
  {
    index: 1,
    title: "OsahOsahBus",
    href: "/projects",
    tags: ["Ajax", "CSS", "Blade", "PHPStorm", "Laragon", "Laravel", "MySQL"],
    image: {
      LIGHT: "/images/projects/Booking-bus.svg",
      DARK: "/images/projects/Booking-bus.svg",
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
  {
    name: "OsahOsahBus",
    favicon: "/images/projects/logos/osahbus-logo.png",
    imageUrl: ["/images/projects/Booking-bus.svg"],
    description:
      "OsahOsahBus is a bus booking platform that allows users to book bus tickets online. The website is designed to be user-friendly and easy to navigate, with a simple and intuitive interface. Users can search for bus routes, view bus schedules, and book tickets online. The website is built with the Laravel framework and integrated with the Midtrans payment gateway for secure online transactions.",
    sourceCodeHref: "https://github.com/billy17-netizen/bus-booking",
    liveWebsiteHref: "#",
  },
];
