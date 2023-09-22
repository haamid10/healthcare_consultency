
const Navbar = () => {
  return (
    <div className="navbar">
    <div className="flex justify-between">
        <div>
            <h1>Caawiye</h1>
        </div>
        <ul className=" flex gap-12">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>

        </ul>
        <div className="">
            <button className="mr-4">login</button>
            <button className=" bg-primary rounded-md w-fit p-1 text-white">sign-up</button>

        </div>
      
    </div>
    </div>
  )
}

export default Navbar
