import {
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  sparkeighteenlogo,
  deschool,
  vccircle,
  portfolio,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React-Js Developer",
    icon: reactjs,
  },
  {
    title: "Javascript Developer",
    icon: javascript,
  },
  {
    title: "Ui/Ux Designer",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
];

const experiences = [
  {
    title: "Internship",
    company_name: "Spark-Eighteen",
    icon: sparkeighteenlogo,
    iconBg: "#383E56",
    date: "April 2022 - June 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React-Js Developer",
    company_name: "Spark-Eighteen",
    icon: sparkeighteenlogo,
    iconBg: "#E6DEDD",
    date: "June 2022 - Jan 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const projects = [
  {
    name: "Deschool",
    description:
      "Web-based platform that allows both student and teacher to connect easily with each other.It's allow every user to get to book any learning skills he wants to and he can also get the information about the teacher.It's a basically an enhance way of online learning platform.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nextjs",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: deschool,
    source_code_link: "https://github.com/",
  },
  {
    name: "VCcircle",
    description:
      "Web-based online platform.This platform offers news on venture capital, private equity, M&A, healthcare, finance, manufacturing, stressed assets, and other investment activity. The company also has a conference division conducting conferences across industry verticals and themes.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "api integration",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: vccircle,
    source_code_link: "https://github.com/",
  },
  {
    name: "Portfolio Website",
    description:
      "The project aims to develop a visually appealing and interactive portfolio website using Next.js, a popular React framework for server-side rendering, and Three.js, a JavaScript library for creating 3D graphics in the browser. The website will showcase your skills, projects, and achievements in an engaging and immersive way.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "Three-js",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: portfolio,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, projects };
