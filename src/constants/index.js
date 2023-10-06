import { github, javascript, linkedin, mysql, react, php, nextjs, tailwind, html, css } from "../assets/icons";
import { halloween, pokemon, post } from "../assets/images";


export const navLinks = [
  { href: "#hero", label: "Home" },
  { href: "#aboutMe", label: "About Me" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#contact", label: "Contact" },
];

export const socialLinks = [
  {href: "/",icon: github, label: "Github"},
  {href: "/",icon: linkedin, label: "LinkedIn"},
];

export const skillIcons = [
  {icon: html, label: "HTML"},
  {icon: css, label: "CSS"},
  {icon: javascript, label: "JavaScript"},
  {icon: php, label: "PHP"},
  {icon: mysql, label: "MySql"},
  {icon: react, label: "React"},
  {icon: tailwind, label: "Tailwind"},
  {icon: nextjs, label: "Next.js"},
]

export const projects = [
  {
    name: "MyPost",
    img: post,
    href: "https://next-js-tutorial-nine-xi.vercel.app/",
    githubLink: "https://github.com/NoahRod108/next-js-tutorial",
    desc: "This is a project to learn Next.js and practice new technologies. I plan to come back and continue to expand on the project.",
    tags: ["Next.js", "Tailwind", "MongoDB", "NextAuth"]
  },
  {
    name: "Guess That Pokemon",
    img: pokemon,
    href: "https://noahrod108.github.io/guess-that-pokemon/",
    githubLink: "https://github.com/NoahRod108/guess-that-pokemon",
    desc: "One of my first projects using React. This project is a simple guessing game. An image will appear on the grid. Random tiles will be hidden, making the image harder to guess. After each guess the tiles will randomize again giving you a better chance. I am currently in the process of creating a new version using Next.js. This will include a backend and tracking user progress.",
    tags: ["React"]
  },
  {
    name: "Spooky Spirit",
    img: halloween,
    href: "https://spooky-spirit.onrender.com/",
    githubLink: "none",
    desc: "This project is my first attempt creating a full stack MERN project. Spooky Spirit is an e-commerce website where you can create an account and browse an online Halloween store. It is a fully functional CRUD application with admin accounts. You can add, edit and delete items for the store. At checkout, I am using the Paypal sanbox to simulate a purchase.",
    tags: ["MongoDB", "Express", "React", "NodeJS", "Redux"]
  },
]