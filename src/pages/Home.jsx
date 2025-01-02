import About from "../component/About"
import Experience from "../component/Experience"
import Hero from "../component/Hero"
import Projects from "../component/Projects"
import TechStack from "../component/TechStack"



const Home = () => {
  return (
    <div className="">
      <Hero />
      <TechStack />
<About />
<Projects />
<Experience />
    </div>
  )
}

export default Home
