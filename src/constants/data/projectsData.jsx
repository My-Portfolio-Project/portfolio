
// import { FaReact } from "react-icons/fa";

import timscusine from "../../../public/timcusine_hero.png"
import jobtracker from '../../../public/JobTracker.png'
import spotlight  from '../../../public/spotlight.png'
// import { BiLogoTailwindCss } from "react-icons/bi";
// import { FiFramer, } from "react-icons/fi";
// import { TbBrandNextjs } from "react-icons/tb";


// projectsData.js

export const projectsData = [
  {
    id: "1",
    pics: jobtracker,
    title: "JobTracker",
     top: "top-24",
    desc: "A fullstack web application for job seekers to track their job applications across different stages (Wishlist, Applied, Interviewing, Offers, etc.) in a drag-and-drop board format, similar to Huntr. Each job is represented as an editable card.",
    role: "Backend Development",
    location: "Rivers, Nigeria 2024",
    year: "2025",
    tags: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
    preview: "https://project-jobtracker.netlify.app/",
    github_link: "#",
    bgColor: "#1E293B",
    textColor: "#F8FAFC",
    tag: "Web App",
  },

  {
    id: "2",
    pics: timscusine,
     top: "top-28",
    title: "Timscusine",
    desc: "A fullstack web application for users to browse a variety of foods, add them to a cart, and place orders. The platform supports real-time order tracking, secure payments, and an intuitive interface for both customers and restaurant admins.",
    role: "Frontend Development",
    location: "Rivers, Nigeria 2024",
    year: "2024",
    tags: [
      { name: "React", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
    preview: "https://timcusine.vercel.app/",
    github_link: "#",
    task: [
      "- Created with Nextjs, Redux, and TypeScript",
      "- Add to cart functionality",
      "- Pagination functionality",
    ],
    bgColor: "#FACC15",
    textColor: "#1E293B",
    tag: "Web App",
  },
    {
  id: "3",
  pics: spotlight,
  top: "top-40",
  title: "Spotlight",
  desc: "A platform built to give professionals visibility by showcasing their work, profiles, and achievements in one place. Spotlight helps designers, developers, writers, and creators present their work professionally and connect with real opportunities.",
  role: "Fullstack Development",
  location: "Rivers, Nigeria 2025",
  year: "2025",
  tags: [
    // { name: "Next.js", icon: "devicon-nextjs-original" },
    { name: "React", icon: "devicon-react-original" },
    { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
  ],
  preview: "https://spotlight-flax.vercel.app/",
  github_link: "https://github.com/Ajinormotor/spotlight",
  bgColor: "#020617",
  textColor: "#F8FAFC",
  tag: "Web App",
},

  {
    id: "4",
    pics: jobtracker,
     top: "top-32",
    title: "JobTracker Mobile",
    desc: "A fullstack mobile application for job seekers to track their job applications across different stages in a drag-and-drop board format, similar to Huntr.",
    role: "Fullstack Development",
    location: "Rivers, Nigeria 2024",
    year: "2025",
    tags: [
      { name: "React Native", icon: "devicon-react-original" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
    preview: "https://expo.dev/preview/update?message=fix%3Aresolved+job+issue",
    github_link: "https://github.com/Ajinormotor/jobtracked-frontend-mobile.git",
    bgColor: "#0f172a",
    textColor: "#F8FAFC",
    tag: "Mobile App",
  },

  {
    id: "5",
    pics: timscusine,
     top: "top-36",
    title: "Timscusine Mobile",
    desc: "A fullstack mobile application for users to browse a variety of foods, add them to a cart, and place orders. Real-time order tracking, secure payments, and an intuitive interface.",
    role: "Frontend Development",
    location: "Rivers, Nigeria 2024",
    year: "2024",
    tags: [
      { name: "React Native", icon: "devicon-react-original colored" },
      { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain colored" },
      { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
      { name: "Node.js", icon: "devicon-nodejs-plain colored" },
    ],
    preview: "#",
    github_link: "#",
    task: [
      "- Created with Nextjs, Redux, and TypeScript",
      "- Add to cart functionality",
      "- Pagination functionality",
    ],
    bgColor: "#FACC15",
    textColor: "#1E293B",
    tag: "Mobile App",
  },


];







// Sample project data
export const projectsDatas = [
  {
    id: "vault-flow",
    category: "Fintech",
    title: "Vault Flow",
    description:
      "A real-time financial dashboard for tracking crypto assets across multiple wallets. Features live Websocket data streams and complex chart visualizations.",
    tags: ["React", "D3.js", "Node.js"],
    top: "top-24",
    visual: true,
  },
  {
    id: "synthetix",
    category: "AI Tool",
    title: "Synthetix",
    description:
      "An AI-powered code generation assistant that integrates directly into your workflow. Uses custom LLM fine-tuning for specific framework context.",
    tags: ["Python", "FastAPI", "OpenAI API"],
    top: "top-28",
    visual: true,
  },
];