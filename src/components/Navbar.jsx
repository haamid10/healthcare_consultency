import { Link } from "react-router-dom"

// import { useState } from "react"
const Navbar = () => {
    // const [active, setActive] = useState(false)
    
  return (
    <div className="navbar p-12 mb-32">
    <div className="flex justify-between items-center">
        <div>
            <h1 className="font-bold text-2xl">Caawiye</h1>
        </div>
        <nav className=" flex gap-12">
         <a href="/">Home</a>  
         <a href="/about">about</a> 
         <a href="/contact">Contact</a> 
         <a href="/services">what we do</a> 
         <a href="/blogs">awareness</a> 

            {/* <li>About</li>
            <li>Contact</li>
            <li>Awareness</li> */}


        </nav>
        <div className="">
            {/* <button className="mr-4 text-md font-semibold">login</button> */}
            <a href="/contact" className=" bg-primary rounded-md  p-2 text-white text-md font-semibold ">Contact us </a>

        </div>
      
    </div>
    </div>
  )
}

export default Navbar
