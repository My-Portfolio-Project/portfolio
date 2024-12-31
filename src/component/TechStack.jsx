
import { lowerSkillsData, upperSkillsData } from "../constants/data/skillsData";
import HeadingText from "../resuseable-component/HeadingText";

import { motion } from "framer-motion";

const TechStack = () => {
  return (
    <section className="relative flex   -hidden w-full h-[400px] p-3
      justify-between items-center lg:px-4   gap-8 md:gap-5 lg:h-[500px] ">
      
      

      <div className="flex flex-col-reverse md:flex-row gap-7 
      rounded-lg w-full">

     
        <div className="flex flex-col items-center justify-center h-full lg:max-w-[950px] w-full
        space-y-3 rounded-lg border-r-2 border-white overflow-hidden px-2">



<motion.div  
              initial={{ x: "0%"}}
              animate={{
                x: "-100%",
              
              }}
              transition={{ duration: 40,  ease:"linear", repeat:Infinity}}
    
        className="flex flex-shrink-0 ">



        
    {
       upperSkillsData.map((skill, index)=>{
            return (
                <div key={index}  className="shadow-lg rounded-lg w-[180px] flex flex-col items-center 
                justify-center  bg-zinc-950">

<h1 className={`text-5xl ${skill.color === "yellow"? "text-yellow-500" : "text-white"} `}>{skill.icon}</h1>
   <h1 className="text-white">{skill?.title}</h1>
  
                </div>
            )
        })
    }
    
    </motion.div>






    <motion.div  
              initial={{ x: "-100%"}}
              animate={{
                x: "0%",
              
              }}
              transition={{ duration: 40,  ease:"linear", repeat:Infinity}}
    
        className="flex flex-shrink-0 ">



        
    {
       lowerSkillsData.map((skill, index)=>{
            return (
                <div key={index}  className="shadow-lg rounded-lg w-[180px] flex flex-col items-center 
                justify-center  bg-zinc-950">

<h1 className={`text-5xl ${skill.color === "yellow"? "text-yellow-500" : "text-white"} `}>{skill.icon}</h1>
   <h1 className="text-white">{skill?.title}</h1>
  
                </div>
            )
        })
    }
    
    </motion.div>


        </div>



      <div className="flex lg:pl-32 justify-end">
        <HeadingText number="02" title="Skills" />
      </div>


</div>

    </section>
  );
};

export default TechStack;
