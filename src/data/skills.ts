import { type SkillsShowcaseProps } from "@/components/skills/skills-showcase";

// Languages
import HtmlSvg from "@/public/icons/html.svg";
import CssSvg from "@/public/icons/css.svg";
import JavascriptSvg from "@/public/icons/javascript.svg";
import PHPSvg from "@/public/icons/php.svg";

// Libraries
import ReactjsSvg from "@/public/icons/reactjs.svg";
import ViteSvg from "@/public/icons/vite.svg";

// Backend
import LaravelSvg from "@/public/icons/laravel.svg";

// Database and ORMS
import MySQLvg from "@/public/icons/mysql.svg";

// Tools and Tech
import GitSvg from "@/public/icons/git.svg";
import LaragonSvg from "@/public/icons/laragon.svg";
import PhpStormSvg from "@/public/icons/phpstorm.svg";
import PostmanSvg from "@/public/icons/postman.svg";

export const SKILLS_DATA: SkillsShowcaseProps["skills"] = [
  {
    sectionName: "Languages",
    skills: [
      {
        name: "HTML",
        icon: HtmlSvg,
      },
      {
        name: "CSS",
        icon: CssSvg,
      },
      {
        name: "PHP",
        icon: PHPSvg,
      },
      {
        name: "Javascript",
        icon: JavascriptSvg,
      },
    ],
  },
  {
    sectionName: "Libraries and Frameworks",
    skills: [
      {
        name: "Reactjs",
        icon: ReactjsSvg,
      },
      {
        name: "Vite",
        icon: ViteSvg,
      },
    ],
  },
  {
    sectionName: "Backend",
    skills: [
      {
        name: "Laravel",
        icon: LaravelSvg,
      },
    ],
  },
  {
    sectionName: "Databases and ORMs",
    skills: [
      {
        name: "MySQL",
        icon: MySQLvg,
      },
    ],
  },
  {
    sectionName: "Tools and Technologies",
    skills: [
      {
        name: "Git",
        icon: GitSvg,
      },
      {
        name: "Laragon",
        icon: LaragonSvg,
      },
      {
        name: "PHPStorm",
        icon: PhpStormSvg,
      },
      {
        name: "Postman",
        icon: PostmanSvg,
      },
    ],
  },
];
