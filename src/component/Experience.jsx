import AnimatedText from "../animations/AnimatedText"
import { experienceData } from "../constants/data/expereinceData"
import HeadingText from "../resuseable-component/HeadingText"


const Experience = () => {
  return (
    <section className="flex flex-col md:flex-row  mb-14 justify-between w-full  h-full 
    lg:px-4 p-3 md:p-0 gap-8 md:gap-5">

<div className="flex items-end md:items-start ">
       <HeadingText number="03" title="Expereience" />
      </div>

      <div className="flex flex-col gap-3 lg:max-w-[950px]
       w-full  border-l-[2px] border-white px-4 rounded-lg">

        {
            experienceData.map((e, index) => {
                return (
                    <div key={index}  className="flex flex-col md:flex-row items-center md:gap-5 h-full
                     justify-between border-b-[1px] border-gray-300 ">

                        <div className="flex flex-col gap-1">
              <span className="text-white text-3xl gap-2" > <AnimatedText   >{e.title} As A</AnimatedText> </span> 
              <span className="text-white text-3xl gap-2" >   <AnimatedText className="text-white">{e.role}- {e.location}</AnimatedText> </span> 
              <span className="text-white text-base gap-2 pb-10  pt-5 md:w-[90%] opacity-65" >      <AnimatedText className="text-white py-3">{e.text}</AnimatedText> </span> 

                        </div>

                        <div className="w-full md:max-w-[250px]">
                        <span className="text-white text-xl font-bold gap-2" >    <AnimatedText className="text-white">{e.date}</AnimatedText> </span> 
                        </div>

                    </div>
                )
            })
        }

      </div>
</section>
  )
}

export default Experience
