import { github, javascript, linkedin, mysql, react, php, nextjs, tailwind } from "../assets/icons";
import { coffee } from "../assets/images";


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
  {icon: mysql, label: "MySql"},
  {icon: react, label: "React"},
  {icon: php, label: "PHP"},
  {icon: javascript, label: "JavaScript"},
  {icon: tailwind, label: "Tailwind"},
  {icon: nextjs, label: "Next.js"},
]

export const projects = [
  {
    name: "project1",
    img: coffee,
    href: "/",
    github: "/",
    desc: "testDesc",
    tags: ["test1", "test1", "test3"]
  },
  {
    name: "project2",
    img: coffee,
    href: "/",
    github: "/",
    desc: "testDesc2",
    tags: ["test1", "test1", "test3"]
  },
  {
    name: "project3",
    img: coffee,
    href: "/",
    github: "/",
    desc: "testDesc3",
    tags: ["test1", "test1", "test3"]
  },
]