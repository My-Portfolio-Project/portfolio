

import { TiHtml5, TiCss3,  } from "react-icons/ti";
import { BiLogoJavascript,BiLogoTailwindCss, BiLogoTypescript  } from "react-icons/bi";
import { DiMongodb, } from "react-icons/di";
import { FaVuejs,  } from "react-icons/fa";


import { BiGitBranch} from 'react-icons/bi';
import {  FaNodeJs} from 'react-icons/fa';
import {GrReactjs} from 'react-icons/gr';
import {  SiExpress} from 'react-icons/si';
import { TbBrandNextjs } from "react-icons/tb";

export const upperSkillsData = [


    {
        id: "1",
        title: "HTML",
        color:"yellow",
        icon: <TiHtml5 />,
       
    },

    {
        id: "2",
        title: "CSS",
        icon: <TiCss3 />
    },

    {
        id: "3",
        title: "JAVASCRIPT",
        color:"yellow",
        icon: <BiLogoJavascript />
    },

    {
        id: "4",
        title: "TAILWINDCSS",
        icon: <BiLogoTailwindCss />
    },

    {
        id: "5",
        title: "Typescript",
        color:"yellow",
        icon: <BiLogoTypescript/>
       
    },

    
    {
        id: "6",
        title: "VUE",
        color:"yellow",
        icon:<FaVuejs />
       
    },

    {
        id: "7",
        title: "Express",
        icon: <SiExpress />
    },

    {
        id: "8",
        title: "Nodejs",
        color:"yellow",
        icon: <FaNodeJs />
    },

    {
        id: "9",
        title: "Github",
        icon: <BiGitBranch />
    },

    {
        id: "10",
        title: "Monogdb",
        color:"yellow",
        icon: <DiMongodb />
       
    },

    {
        id: "11",
        title: "React",
        color:"yellow",
        icon: <GrReactjs />
       
    },
    {
        id: "12",
        title: "Nextjs",
        color:"yellow",
        icon: <TbBrandNextjs />
       
    },

     {
        id: "13",
        title: "Nestjs",
        color:"yellow",
        icon: <TbBrandNextjs />
       
    },

     {
        id: "14",
        title: "Payment Integration",
        color:"yellow",
        icon: <TbBrandNextjs />
       
    },

     {
        id: "13",
        title: "React-Native",
        color:"yellow",
        icon: <TbBrandNextjs />
       
    },

    
]




export const skillsData = [


    {
    id: "devops",
    title: "DevOps & Cloud",
    icon: {
      name: "container",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20",
    },
    description:
      "Automating deployment pipelines and managing cloud infrastructure. Ensuring high availability and rapid iterations.",
    top: "top-32",
    bg: "bg-[#101010]",
    skills: [
      { name: "Docker", detail: "Containerization", icon: "devicon-docker-plain colored" },
      { name: "CI/CD", detail: "GitHub Actions", icon: "devicon-github-original" },
      { name: "AWS", detail: "EC2, S3, Lambda", icon: "devicon-amazonwebservices-original colored" },
      { name: "Terraform", detail: "Infrastructure as Code", icon: "devicon-terraform-plain colored" },
    ],
  },
  {
    id: "frontend",
    title: "Frontend Engineering",
    icon: {
      name: "layout",
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20",
    },
    description:
      "Creating responsive, pixel-perfect interfaces with modern frameworks. Obsessed with interaction design and accessibility.",
    top: "top-24",
    bg: "bg-[#0c0c0c]",
    skills: [
      { name: "React & Next.js", detail: "Server Components, Hooks", icon: "devicon-react-original colored" },
      { name: "Vue.js", detail: "Composition API, Transitions", icon: "devicon-vuejs-plain colored" },
      { name: "React Native", detail: "Expo, Mobile UI", icon: "devicon-react-original colored" },
      { name: "TypeScript", detail: "Strict Typing, Generics", icon: "devicon-typescript-plain colored" },
      { name: "Tailwind CSS", detail: "Design Systems", icon: "devicon-tailwindcss-plain colored" },
      { name: "Framer Motion", detail: "Complex Animations", icon: "devicon-framermotion-original" },
    ],
  },

  {
    id: "backend",
    title: "Backend Systems",
    icon: {
      name: "server",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20",
    },
    description:
      "Architecting robust APIs and database schemas. Focusing on security, data integrity, and low-latency responses.",
    top: "top-28",
    bg: "bg-[#0e0e0e]",
    skills: [
      { name: "Node.js", detail: "Express, API Development", icon: "devicon-nodejs-plain colored" },
      { name: "NestJS", detail: "Scalable Backend Architecture", icon: "devicon-nestjs-plain colored" },
      { name: "PostgreSQL", detail: "Prisma ORM, SQL Optimization", icon: "devicon-postgresql-plain colored" },
      { name: "Prisma ORM", detail: "Schema Modeling, Migrations", icon: "devicon-prisma-original" },
      { name: "GraphQL", detail: "Apollo Server, Schemas", icon: "devicon-graphql-plain colored" },
      { name: "Redis", detail: "Caching Strategies", icon: "devicon-redis-plain colored" },
      { name: "Go", detail: "Microservices", icon: "devicon-go-plain colored" },
    ],
  },


];
