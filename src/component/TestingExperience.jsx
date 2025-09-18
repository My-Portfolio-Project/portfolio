/* eslint-disable react/prop-types */
import { useScroll, useTransform, motion } from "framer-motion"
import { useRef } from "react"
import { experienceData } from "../constants/data/expereinceData"
import AnimatedText from "../animations/AnimatedText"



const Card = ({e, targetScale, range, progress,color}) => {

    const ref = useRef()

    // const { scrollYProgress } = useScroll({
    //    target: ref,
    //    offset: ["start end", "end start"],
    //  });

     const scale = useTransform(progress, range, [1, targetScale])



    return (
        <motion.div 
        ref={ref}
        style={{ scale }}
         className="sticky top-10 max-w-full  w-full p-3  border-l-2 border-white 
       rounded-2xl overflow-hidden group "
    >

               <div 
            style={{
                backgroundColor: color
            }}
                 className="flex flex-col md:flex-row items-center  w-full
                 md:gap-5 min-h-[400px] 
                     justify-between    shadow-sm rounded-lg">

                        <div className="flex flex-col gap-3 text_background">
              <span className="text-white text-3xl gap-2" > <AnimatedText >{e?.title} As A</AnimatedText> </span> 
              <span className="text-white text-3xl gap-2" >   <AnimatedText className="text-white">{e.role}- {e.location}</AnimatedText> </span> 
           {e.pointOne &&   <span className="text-white text-base gap-2  md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointOne}</AnimatedText> </span>  }
           {e.pointTwo &&   <span className="text-white text-base gap-2  md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointTwo}</AnimatedText> </span>  }
           {e.pointThree &&   <span className="text-white text-base gap-2 md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointThree}</AnimatedText> </span>  }
           {e.pointFour &&   <span className="text-white text-base gap-2 md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.pointFour}</AnimatedText> </span>  }
    <span className="text-white text-xl font-bold gap-2 py-2" > 
                             <AnimatedText className="text-white">{e.date}</AnimatedText> </span> 
                        </div>

                        <div className="w-full md:max-w-[250px] hidden">
                        <span className="text-white text-xl font-bold gap-2" > 
                             <AnimatedText className="text-white">{e.date}</AnimatedText> </span> 
                        </div>

                    </div>

            

        </motion.div>
    )
}





export const TestingExperience = () =>{
    const container = useRef(null)

    const {scrollYProgress} = useScroll({
        target: container,
        offset: ['start start', 'end end']

    })
    const getColor = (id) => {

        if(id === '1') {
            return {color:'orange'}
        }

        switch(id) {
            case '1' :
           return { color: 'red'};
             case '2' :
           return { color: 'green'};
              case '3' :
           return { color: 'blue'};

             default:
             return {color: 'orange'}
        }

       

    }


    return (
        <div ref={container}
         className="relative min-h-[130vh]">

     
{experienceData.map((e,index)=> {
    const targetScale = 1 - (experienceData.length - index) * 0.04;

const step = 1/ experienceData.length 
const range = [index * step, 1]
console.log('total data:', e)
const {color} = getColor(e.id)

    return (



        <Card
        key={e.id}
        index={index}
        e={e}
        color={color}
        total={experienceData.length}
        progress={scrollYProgress}
        range={range}
        targetScale={targetScale}

        />
            )
})
    }
       </div>
    )
}