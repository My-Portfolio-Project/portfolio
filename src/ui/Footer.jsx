import { Link } from "react-router-dom"

import { FaFacebook, FaTwitterSquare, FaLinkedinIn,FaGithubSquare } from "react-icons/fa";

const footer_link = [

    {   path: "#",
        dispaly:"Home"
    },
    {   path: "#",
        dispaly:"Projects"
    },
    {   path: "#",
        dispaly:"About"
    },
    {   path: "#",
        dispaly:"Contact"
    },
]

const icons = [
    {
        icon: <FaFacebook />
    },
    {
        icon: <FaTwitterSquare />
    },
    {
        icon: <FaLinkedinIn />
    },
    {
        icon: <FaGithubSquare />
    },

    
]


const Footer = () => {
  return (
<section className="flex mt-5 flex-col md:flex-row items-center justify-between  space-y-3 p-2 border-t-[2px] border-white py-3 md:h-[15vh] max-w-fll w-full">
    <div className="">
        <h1 className="text-white">Teitei Wisdom</h1>
    </div>
    
    <ul className="flex flex-col md:flex-row gap-2">
        {
            footer_link.map((footer, index)=> (
                <Link key={index} to={footer.path} className="text-white" >{footer.dispaly} </Link>
            ))
        }
        
    </ul>
  
    <ul className="flex gap-2">
    {
           icons.map((footer, index)=> (
     <li  key={index}  className="text-xl text-white">{footer.icon}</li>
            ))
        }
    </ul>

</section>
  )
}

export default Footer
