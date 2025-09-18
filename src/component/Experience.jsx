 
 
import { useRef } from "react"
import AnimatedText from "../animations/AnimatedText"
import { experienceData } from "../constants/data/expereinceData"
import HeadingText from "../resuseable-component/HeadingText"
import {motion, useScroll, useTransform } from "framer-motion"


const Experience = () => {

  const container = useRef(null)
  // const ref = useRef(null)

  const {scrollYProgress} = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })

 const index = 1
const targetScale =  1 - (experienceData.length ) *  0.04;
const step = 1 /experienceData.length;

 const range =  [index * step, 1]


  const scale = useTransform(scrollYProgress, range, [1, targetScale])


  return (
    <section className="flex flex-col-reverse items-end md:items-start md:flex-row  mb-14 justify-between w-full  h-full 
    lg:px-4 p-3 md:p-0 gap-8 md:gap-5 relative">



      <motion.div 
      ref={container}
      style={{scale}}
      className="sticky top-10  gap-3 lg:max-w-[950px] 
       w-full  border-r-[2px] border-white px-4 rounded-lg">

        {
            experienceData.map((e, index) => {
                return (
                    <div key={index}  className="flex flex-col md:flex-row items-center md:gap-5 md:min-h-[300px] 
                     justify-between border-b-[1px] border-gray-300 ">

                        <div className="flex flex-col gap-3 text_background">
              <span className="text-white text-3xl gap-2" > <AnimatedText >{e.title} As A</AnimatedText> </span> 
              <span className="text-white text-3xl gap-2" >   <AnimatedText className="text-white">{e.role}- {e.location}</AnimatedText> </span> 
           {e.pointOne &&   <span className="text-white text-base gap-2  md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointOne}</AnimatedText> </span>  }
           {e.pointTwo &&   <span className="text-white text-base gap-2  md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointTwo}</AnimatedText> </span>  }
           {e.pointThree &&   <span className="text-white text-base gap-2 md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointThree}</AnimatedText> </span>  }
           {e.pointFour &&   <span className="text-white text-base gap-2 md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointFour}</AnimatedText> </span>  }

                        </div>

                        <div className="w-full md:max-w-[250px]">
                        <span className="text-white text-xl font-bold gap-2" > 
                             <AnimatedText className="text-white">{e.date}</AnimatedText> </span> 
                        </div>

                    </div>
                )
            })
        }

      </motion.div>

      <div className="md:sticky flex  items-start md:items-end " >
       <HeadingText number="04" title="Expereience" />
      </div>

</section>
  )
}

export default Experience
