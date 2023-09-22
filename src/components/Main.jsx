import { BrowserRouter, Route, Routes, } from "react-router-dom"
import Navbar from "./Navbar"
import Hero from "./Hero"
import About from "./About"
import NotFound from "./NotFound"
import Footer from "./Footer"
const Main = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
    <BrowserRouter >
        <Routes>
        <Route path="/about" element={<About/>} />
        <Route path="*" element={<NotFound/>}/>

        </Routes>
    </BrowserRouter>
        <Footer/>

    </div>
  )
}

export default Main
