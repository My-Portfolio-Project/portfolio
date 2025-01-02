import { Link } from "react-router-dom";
import AnimatedText from "../animations/AnimatedText"
import { contactData } from "../constants/data/contactData";


const Contact = () => {
  return (
<section className="flex flex-col items-center justify-center min-h-[400px] h-full gap-7 p-3">

  <div className="">

 
  <h1 className="text-white text-3xl md:text-5xl text-center max-w-[800px] w-full">
    <AnimatedText >
    You can reach me by sending a message, email or any of my social media handles below:
    </AnimatedText>
    </h1>
    </div>

    <div className="grid grid-cols-2 gap-3 pt-14 w-full  max-w-[500px]">

      {
        contactData.map((c,index)=> {
          return (
      
              <Link key={index} className="flex flex-col h-[150px] px-5 items-center justify-center  rounded-md
              md:w-[220px]  w-full   bg-zinc-900 "
                href={c.link}>
          
          <h1 className="text-2xl">
 
                {c.icon}
    
          </h1>
       
              <h4 className="text-white text-xl">
                <AnimatedText>
                  {c.title}
                </AnimatedText>
              </h4>
              </Link>
         
          )
        })
      }

    </div>

</section>
  )
}

export default Contact
