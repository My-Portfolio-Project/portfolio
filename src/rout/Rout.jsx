import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"
// import ProjectDetails from "../pages/ProjectDetails"
import { lazy, Suspense } from "react"


const SingleWrapper = lazy(()=> import("../screens/Single.jsx"))

const Rout = () => {

const location  = useLocation()

  return (
    <section>
        <AnimatePresence mode='wait'>
            <Routes  key={location.pathname}>
                <Route path='/' element={<Home />}  />
                <Route path='/projectdetails/:id' element={ <Suspense fallback={<></>} >
               <SingleWrapper />
                 </Suspense>  }/>

          

            </Routes>
            </AnimatePresence>

    </section>
  )
}

export default Rout
