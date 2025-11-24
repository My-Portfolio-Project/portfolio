
import Contact from "../component/Contact"
// import Experience from "../component/Experience"
import Hero from "../component/Hero"
// import Projects from "../component/Projects"
import Header from "../ui/Header"
import Footer from "../ui/Footer"
import Skills from "../component/Skills"
import Projects from "../component/Projects"
import Experience from "../component/Experience"




const Home = () => {
  return (
    <div className="flx flex-col gap-4">
   <Header />
      <Hero />
 {/* <TechStack /> */}
 <Skills  />


{/* <Projects /> */}
<Projects />


{/* <Experience /> */}


<Experience  />


<Contact />
<Footer />
    </div>
  )
}

export default Home
