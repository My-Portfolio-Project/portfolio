import { AnimatePresence } from "framer-motion"
import { Route, Routes, useLocation } from "react-router-dom"
import Home from "../pages/Home"


const Rout = () => {

const location  = useLocation()

  return (
    <section>
        <AnimatePresence mode='wait'>
            <Routes  key={location.pathname}>
                <Route path='/' element={<Home />}  />

          

            </Routes>
            </AnimatePresence>

    </section>
  )
}

export default Rout
