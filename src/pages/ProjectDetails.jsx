import { useParams } from "react-router-dom"
import { projectsData } from "../constants/data/projectsData"
import AnimatedText from "../animations/AnimatedText";


const ProjectDetails = () => {

    const {id}  = useParams()

    const item = projectsData.find((item) => item.id === id);

    if(!item){
        return (
            <div className="flex items-center justify-center h-screen ">
                <h1 className="text-white text-center ">{item} Not Foud!!</h1>
            </div>
        )
    }
  return (
<section className="w-full p-4 md:p-10 min-h-[400px] h-full flex flex-col gap-6" >


 <div className="flex items-center justify-between ">
    <h1 className="text-white text-3xl md:text-5xl">{item.title}</h1>
    
    <button className="bg-white w-[150px] h-[70px]  rounded-lg px-6 py-2 flex items-center justify-center"
style={{boxShadow: "0px 1px 2px 0px #1018280D"}}>
    <h1  className=" font-bold text-base  text-black">Contact Me</h1>
</button>
 </div>

 <h1 className="text-white opacity-45 text-4xl pb-8">
    <AnimatedText >
        {item.desc}
    </AnimatedText>
 </h1>


 <ul className="flex flex-col md:flex-row gap-6 items-start ">

<li className="text-white ">Role: <span>{item.role}</span> </li>

   <li className="text-white underline"> {item.year}</li>

   <li className="text-white ">Github: <span  className="underline"> View Code</span> </li>

</ul>



 <div className="md:px-10 w-full relative  group">
    <img src={item.pics}  className="w-full h-full" />
 </div>




 
</section>
  )
}

export default ProjectDetails
