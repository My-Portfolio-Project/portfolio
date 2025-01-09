import { Link } from "react-router-dom"


const header_link = [

    {   path: "#hero",
        dispaly:"Home"
    },
    {   path: "#project",
        dispaly:"Projects"
    },
    {   path: "#about",
        dispaly:"About"
    },
    // {   path: "#",
    //     dispaly:"Contact"
    // },
]



const Header = () => {
  return (
<section className="flex flex-row items-center justify-between  p-6 border-b-[2px] border-white w-full">
    <div className="">
        <Link to='/' className="text-white font-extrabold">Teitei Wisdom</Link>
    </div>
    

    <div className="md:block hidden" >
    <ul className="flex flex-col md:flex-row gap-2">
        {
            header_link.map((h, index)=> (
                <a key={index} href={h.path} className="text-white" >{h.dispaly} </a>
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
