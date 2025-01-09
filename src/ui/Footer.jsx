

const footer_link = [

    {   path: "#hero",
        dispaly:"Home"
    },
    {   path: "#project",
        dispaly:"Projects"
    },
    {   path: "#about",
        dispaly:"About"
    },
 
]



const Footer = () => {
  return (
<section className="flex mt-5 flex-col md:flex-row items-center justify-between  space-y-3 p-2 border-t-[2px] border-white py-3 md:h-[15vh] max-w-fll w-full">
    <div className="">
        <h1 className="text-white font-extrabold">Teitei Wisdom</h1>
    </div>
    
    <ul className="flex flex-col md:flex-row gap-2">
        {
            footer_link.map((footer, index)=> (
                <a key={index} href={footer.path} className="text-white" >
                        
                    {footer.dispaly} 
              
                    </a>
            ))
        }
        
    </ul>
  
<div className="">
    <span className="text-white">
    
        © Teitei Wisdom 2025
      
    </span>
</div>

</section>
  )
}

export default Footer
