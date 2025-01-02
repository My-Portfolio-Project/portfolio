import { Link } from "react-router-dom"


import AnimatedText from "../animations/AnimatedText";

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



const Footer = () => {
  return (
<section className="flex mt-5 flex-col md:flex-row items-center justify-between  space-y-3 p-2 border-t-[2px] border-white py-3 md:h-[15vh] max-w-fll w-full">
    <div className="">
        <h1 className="text-white">Teitei Wisdom</h1>
    </div>
    
    <ul className="flex flex-col md:flex-row gap-2">
        {
            footer_link.map((footer, index)=> (
                <Link key={index} to={footer.path} className="text-white" >
                         <AnimatedText className="text-white">
                    {footer.dispaly} 
                    </AnimatedText>
                    </Link>
            ))
        }
        
    </ul>
  
<div className="">
    <span className="text-white">
        <AnimatedText className="text-white">
        © Teitei Wisdpm 2025
        </AnimatedText>
    </span>
</div>

</section>
  )
}

export default Footer
