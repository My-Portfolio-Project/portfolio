
import { Link } from "react-router-dom"
import { projectsData } from "../constants/data/projectsData"
import HeadingText from "../resuseable-component/HeadingText"
import AnimatedText from "../animations/AnimatedText"

const Projects = () => {
  return (
    <section className="flex flex-col items-end lg:items-start lg:flex-row  mb-14 justify-between w-full  h-full min-h-[400px]
    lg:px-4 p-3 md:p-0 gap-8 md:gap-5">

<div className="flex  items-start md:items-end ">
       <HeadingText number="03" title="Project" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:max-w-[950px] gap-7
       w-full  border-l-[2px] border-white px-4 rounded-lg">

{
projectsData.map((e) => {
  return (

    <Link to={`/projectdetails/${e.id}`} key={e.id} className=" max-w-[400px]  w-full">

    <div  className=" space-y-4 cursor-pointer group relative">

      <div className="h-[250px] w-full rounded-sm overflow-hidden">
        <img src={e.pics} alt="project-title"  className="w-full h-full object-cover   group-hover:scale-[1.1]" />
      </div>

      <div className="space-y-7">

        <h1 className="text-white md:text-4xl text-2xl pb-4 md:pb-8">
          <AnimatedText>
          {e.title}
          </AnimatedText>
          </h1>


<div className="flex flex-col md:flex-row justify-between items-start md:border-t-[0.5px]  border-white
md:items-center gap-2">

<ul className="flex space-x-1 p-2">
  
          <li className= "text-2xl "> {e.iconOne}</li>
          <li className= "text-2xl "> {e.iconTwo}</li>
          <li className= "text-2xl "> {e.iconThree}</li>
          <li className= "text-2xl "> {e.iconFour}</li>
        </ul>

        <ul className="flex ">
        <li className="text-white">{e.role} </li>
        </ul>

     
        <ul className="flex">
        <li className="text-white"> {e.year} </li>
        </ul>
</div>
      </div>

    </div>

    </Link>
  )
})

}


       </div>



</section>
  )
}

export default Projects
