import About from "../component/About"
import Contact from "../component/Contact"
import Experience from "../component/Experience"
import Hero from "../component/Hero"
import Projects from "../component/Projects"
import TechStack from "../component/TechStack"
import Header from "../ui/Header"
import Footer from "../ui/Footer"


const Home = () => {
  return (
    <div className="">
   <Header />
      <Hero />
      <TechStack />
<About />
<Projects />
<Experience />
<Contact />
<Footer />
    </div>
  )
}

export default Home
