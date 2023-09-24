import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import NotFound from "./NotFound"
import What from "./What"
import Footer from "./Footer"
import Contact from "./Contact"
import Doctors from "../Pages/Doctors"
import Blogs from "../Pages/Blogs"
const Main = () => {
  return (
    <div>
      <Navbar/>
    <BrowserRouter >
        <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/services" element={<What/>} />
        <Route path="/blogs" element={<Blogs/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/doctors" element={<Doctors/>} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
        <Footer/>

    </div>
  )
}

export default Main


