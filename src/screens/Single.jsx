import Meta from "../common/Meta"
import Contact from "../component/Contact"
import SmoothScroll from "../constants/utils/SmoothScroll"
import ProjectDetails from "../pages/ProjectDetails"
import Footer from "../ui/Footer"
import Header from "../ui/Header"

const Single = () => {
  return (
    <div>
        <Meta  title={`Project Details`}  />
        <SmoothScroll>
            <Header />
        <ProjectDetails />
        <Contact />
        <Footer />
        </SmoothScroll>
       
    </div>
  )
}

export default Single
