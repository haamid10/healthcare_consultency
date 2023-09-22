import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import NotFound from "./NotFound"
import Footer from "./Footer"
import Contact from "./Contact"
const Main = () => {
  return (
    <div>
      <Navbar/>
    <BrowserRouter >
        <Routes>
        <Route path="/" element={<Hero/>}/>
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
        <Footer/>

    </div>
  )
}

export default Main
