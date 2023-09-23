// import { useState } from "react"
import { Link} from "react-router-dom"
const Navbar = () => {
    // const [active, setActive] = useState(false)
    
  return (
    <div className="navbar p-12">
    <div className="flex justify-between items-center">
        <div>
            <h1 className="font-bold text-2xl">Caawiye</h1>
        </div>
        <nav className=" flex gap-12">
         <a href="/">Home</a>  
         <a href="/about">about</a>  
            {/* <li>About</li>
            <li>Contact</li>
            <li>Awareness</li> */}


        </nav>
        <div className="">
            <button className="mr-4 text-md font-semibold">login</button>
            <button className=" bg-primary rounded-md  p-2 text-white text-md font-semibold ">sign-up</button>

        </div>
      
    </div>
    </div>
  )
}

export default Navbar
