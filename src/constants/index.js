import {
  github,
  javascript,
  linkedin,
  mysql,
  react,
  php,
  nextjs,
  tailwind,
  html,
  css,
} from "../assets/icons";
import { visualizer, post, home } from "../assets/images";

export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#aboutMe", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  { href: "/", icon: github, label: "Github" },
  { href: "/", icon: linkedin, label: "LinkedIn" },
];

export const skillIcons = [
  { icon: html, label: "HTML" },
  { icon: css, label: "CSS" },
  { icon: javascript, label: "JavaScript" },
  { icon: php, label: "PHP" },
  { icon: mysql, label: "MySql" },
  { icon: react, label: "React" },
  { icon: tailwind, label: "Tailwind" },
  { icon: nextjs, label: "Next.js" },
];

export const projects = [
  {
    name: "Get Home",
    img: home,
    href: "https://get-home-chi.vercel.app/",
    githubLink: "https://github.com/NoahRod108/get-home",
    desc: "A simple home rental website. Create an account to list your home and view more homes listed by other users.",
    tags: ["Next.js", "Tailwind", "MongoDB", "NextAuth", "Cloudinary"],
  },
  {
    name: "MyPost",
    img: post,
    href: "https://next-js-tutorial-nine-xi.vercel.app/",
    githubLink: "https://github.com/NoahRod108/next-js-tutorial",
    desc: "This is a project to learn Next.js and practice new technologies. I plan to come back and continue to expand on the project.",
    tags: ["Next.js", "Tailwind", "MongoDB", "NextAuth"],
  },
  // {
  //   name: "Guess That Pokemon",
  //   img: pokemon,
  //   href: "https://noahrod108.github.io/guess-that-pokemon/",
  //   githubLink: "https://github.com/NoahRod108/guess-that-pokemon",
  //   desc: "One of my first projects using React. This project is a simple guessing game. An image will appear on the grid. Random tiles will be hidden, making the image harder to guess. After each guess the tiles will randomize again giving you a better chance. I am currently in the process of creating a new version using Next.js. This will include a backend and tracking user progress.",
  //   tags: ["React"],
  // },
  {
    name: "Visualizer",
    img: visualizer,
    href: "https://visualizer-wine-three.vercel.app/",
    githubLink: "https://github.com/NoahRod108/visualizer",
    desc: "A conversion of an old React project I worked on with classmates. I decided to convert the visualizer to TypeScript for practice. You can choose one of three algorithms and adjust the sorting speed. I also decided to make it mobile responsive.",
    tags: ["Next.js", "Tailwind", "TypeScript"],
  },
];
