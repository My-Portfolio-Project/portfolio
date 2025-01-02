
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
        desc: "",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
        github: "",
        year: "2024",
        iconOne: <FaReact color="blue" />,
         iconTwo: <BiLogoTypescript  color="green"  />,
         iconThree: <BiLogoTailwindCss color="blue" />,
         iconFour: <FiFramer  color="blue" />,
    },

    {
        id: "2",
        pics: ajinostores,
        title: "AJinoStores",
        desc: "",
        role: "Frontend Development",
        location: "Rivers, Nigeria 2024",
        github: "",
        year: "2024",
        iconOne: <FaReact color="blue" />,
        iconTwo: <BiLogoTypescript color="green"  />,
        iconThree: <BiLogoTailwindCss color="blue"  />,
        iconFour: <FiFramer  color="blue" />
    },
]