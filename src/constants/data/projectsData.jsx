
import { FaReact } from "react-icons/fa";
import flexnchill from "/flexnchill_hommepage.png"
import ajinostores from "../../../public/ajinostores_hero.png"
import { BiLogoTailwindCss , BiLogoTypescript  } from "react-icons/bi";
import { FiFramer } from "react-icons/fi";

export const projectsData = [
    {
        id: "1",
        pics: flexnchill,
        title: "Flex&Chill",
        desc: "FlexnChill is a movie website where you get to see trending movies and tv series",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
      
        year: "2024",
        iconOne: <FaReact color="blue" />,
         iconTwo: <BiLogoTypescript  color="green"  />,
         iconThree: <BiLogoTailwindCss color="blue" />,
         iconFour: <FiFramer  color="blue" />,
         preview:"https://flexnchills.vercel.app/",
         github_link: "https://github.com/Ajinormotor/flexnchill.git"
    },

    {
        id: "2",
        pics: ajinostores,
        title: "AJinoStores",
        desc: "",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
    
        year: "2024",
        iconOne: <FaReact color="blue" />,
        iconTwo: <BiLogoTypescript color="green"  />,
        iconThree: <BiLogoTailwindCss color="blue"  />,
        iconFour: <FiFramer  color="blue" />,
        pointOne: "",
        pointTwo: "",
        pointThree: "",
        pointFour: "",
        preview:"https://ajino-stores.vercel.app/",
         github_link: "https://github.com/Ajinormotor/ajno_stores.git"
    },
]