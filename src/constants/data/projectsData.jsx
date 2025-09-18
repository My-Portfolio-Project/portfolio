
import { FaReact } from "react-icons/fa";
import flexnchill from "/flexnchill_hommepage.png"
import ajinostores from "../../../public/ajinostores_hero.png"
import { BiLogoTailwindCss , BiLogoTypescript  } from "react-icons/bi";
import { FiFramer, } from "react-icons/fi";
import { TbBrandNextjs } from "react-icons/tb";


export const projectsData = [
    {
        id: "1",
        pics: flexnchill,
        title: "Flex&Chill",
        desc: "FlexnChill is a movie website where you get to see trending movies and tv series",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
        year: "2024",
        iconOne: <FaReact color="#f9f9f9" />,
         iconTwo: <BiLogoTypescript  color="#f9f9f9" />,
         iconThree: <BiLogoTailwindCss color="#f9f9f9" />,
         iconFour: <FiFramer  color="#f9f9f9" />,
         preview:"https://flexnchills.vercel.app/",
         github_link: "https://github.com/Ajinormotor/flexnchill.git",
         task: [
            { taskOne: "- Search filter functionality"},
            { taskTwo: "- Add to favorites functionality"},
            { taskThree: "- Pagination functionality"},
         ],
   bgColor: '#1E293B', 
textColor: '#F8FAFC' 

    },

    {
        id: "2",
        pics: ajinostores,
        title: "AJinoStores",
        desc: "",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
    
        year: "2024",
        iconOne: <TbBrandNextjs  color="#f9f9f9"  />,
        iconTwo: <BiLogoTypescript color="#f9f9f9"   />,
        iconThree: <BiLogoTailwindCss color="#f9f9f9"   />,
        iconFour: <FiFramer  color="#f9f9f9"  />,
        pointOne: "",
        pointTwo: "",
        pointThree: "",
        pointFour: "",
        preview:"https://ajino-stores.vercel.app/",
         github_link: "https://github.com/Ajinormotor/ajno_stores.git",
         task: [
            { taskOne: "- Created with Nextjs, redux and Typescript"},
            { taskTwo: "- Add to cart  functionality"},
            { taskThree: "- Pagination functionality "},
         ],
         bgColor: '#FACC15',
textColor: '#1E293B'
    },
      {
        id: "3",
        pics: flexnchill,
        title: "Flex&Chilling",
        desc: "FlexnChill is a movie website where you get to see trending movies and tv series",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
        year: "2024",
        iconOne: <FaReact color="#f9f9f9" />,
         iconTwo: <BiLogoTypescript  color="#f9f9f9" />,
         iconThree: <BiLogoTailwindCss color="#f9f9f9" />,
         iconFour: <FiFramer  color="#f9f9f9" />,
         preview:"https://flexnchills.vercel.app/",
         github_link: "https://github.com/Ajinormotor/flexnchill.git",
         task: [
            { taskOne: "- Search filter functionality"},
            { taskTwo: "- Add to favorites functionality"},
            { taskThree: "- Pagination functionality"},
         ],
   bgColor: '#1E293B', 
textColor: '#F8FAFC' 

    },
]