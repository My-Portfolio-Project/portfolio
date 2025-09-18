import About from "../component/About"
import Contact from "../component/Contact"
// import Experience from "../component/Experience"
import Hero from "../component/Hero"
// import Projects from "../component/Projects"
import TechStack from "../component/TechStack"
import Header from "../ui/Header"
import Footer from "../ui/Footer"
import TestingProject from "../component/TestingProject"
import HeadingText from "../resuseable-component/HeadingText"
import { TestingExperience } from "../component/TestingExperience"




const Home = () => {
  return (
    <div className="flx flex-col gap-4">
   <Header />
      <Hero />
 <TechStack />

 <div className="flex flex-col md:flex-row gap-2  py-10 p-2 w-full">
        <div className="" >
       <HeadingText number="02" title="Projects" />
      </div>
  
  <div className="w-full">
<TestingProject />
  </div>

  </div>
{/* <Projects /> */}

<About />


{/* <Experience /> */}

<div className="flex flex-col md:flex-row gap-2 py-10 p-2 w-full ">
        <div className="" >
       <HeadingText number="04" title="Experiences" />
      </div>
  
  <div className="w-full">
<TestingExperience />
  </div>

  </div>

<Contact />
<Footer />
    </div>
  )
}

export default Home
