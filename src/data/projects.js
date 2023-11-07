// Import images
import WebImage1 from "../images/web-project-1.jpg";
import WebImage2 from "../images/neutrend-tablet.JPG";
import diceGame from "../images/projects/dicegames.jpg";
import UIImage1 from "../images/ui-project-1.jpg";
import tupomock from "../images/projects/tupo-mock.jpg";
import guestNumber from "../images/projects/guestmynumber.jpg";
import tindog from "../images/projects/tindogmock.jpg";
import akui from "../images/projects/akui2.jpg";
export const projectsData = [
  {
    id: 1,
    title: "Neu-trend Blogging App",
    category: "Web Application",
    img: WebImage2,
    tech: {
      frameWork: "React-JS",
      cssFrameWork: "Tailwind-CSS",
      backend: "express",
    },
    url: "https://neu-trend.netlify.app/",
    ProjectHeader: {
      title: "Neu-trend",
      publishDate: "Jul 26, 2023",
      tags: "UI / Frontend",
    },
  },
  {
    id: 2,
    title: "Guest my number game",
    category: "Web Application",
    img: guestNumber,
    url: "https://dikokartiko.github.io/GuestMyNumber-VannilaJS/",
  },
  {
    id: 3,
    title: "High Low Dice game",
    category: "Web Application",
    img: diceGame,
    url: "https://dikokartiko.github.io/diceGame-VanillaJS/",
  },
  {
    id: 4,
    title: "TUPO Cashier App",
    category: "Web Application",
    url: "https://github.com/dikokartiko/group-5/tree/main/projects",
    tech: {
      frameWork: "React-JS",
      cssFrameWork: "Chakra-UI",
      backend: "express",
    },
    img: tupomock,
  },
  {
    id: 5,
    title: "Tindog",
    category: "Branding",
    tech: { cssFrameWork: "bootstrap" },
    img: tindog,
    url: "https://dikokartiko.github.io/Tindog/",
  },
  {
    id: 6,
    title: "Akui MultiWareHouse E-Commerce",
    category: "Web Application",
    url: "https://github.com/purwadhikafullstack/JCWD011004",
    tech: {
      frameWork: "React-JS",
      cssFrameWork: "Tailwind-CSS",
      backend: "express",
    },
    img: akui,
  },
];
