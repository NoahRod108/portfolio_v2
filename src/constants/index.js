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
    name: "project-1",
    img: coffee,
    href: "/",
    githubLink: "/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus fugiat magnam vitae molestiae, natus autem tenetur dolores consectetur a?",
    tags: ["test1", "test1", "test3"]
  },
  {
    name: "project-2",
    img: coffee,
    href: "/",
    githubLink: "/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus fugiat magnam vitae molestiae, natus autem tenetur dolores consectetur a?",
    tags: ["test1", "test1", "test3"]
  },
  {
    name: "project-3",
    img: coffee,
    href: "/",
    githubLink: "/",
    desc: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur minus fugiat magnam vitae molestiae, natus autem tenetur dolores consectetur a?",
    tags: ["test1", "test1", "test3"]
  },
]