import { Link } from "react-router-dom"


const header_link = [

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



const Header = () => {
  return (
<section className="flex flex-row items-center justify-between  p-6 border-b-[2px] border-white w-full">
    <div className="">
        <h1 className="text-white">Teitei Wisdom</h1>
    </div>
    

    <div className="md:block hidden" >
    <ul className="flex flex-col md:flex-row gap-2">
        {
            header_link.map((footer, index)=> (
                <Link key={index} to={footer.path} className="text-white" >{footer.dispaly} </Link>
            ))
        }
        
    </ul>
    </div>
 
  
<div className="flex">
<button className="bg-white w-[170px] h-[40px]  rounded-lg px-6 py-2 flex items-center justify-center"
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1  className=" font-bold text-xl  text-black">Contact Me</h1>
</button>

</div>

</section>
  )
}

export default Header
