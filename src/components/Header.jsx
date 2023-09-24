import { Link } from 'react-router-dom' 
const Header = () => {
  return (
    <div className="navbar p-12 mb-32">
        <div className="flex flex-row justify-between items-center">
            <div>
            <h1 className='font-bold text-2xl'>caawiye</h1>

            </div>
        <div className='flex gap-12'>
      <Link to="/">home</Link>
      <Link to="/about">about</Link>
      <Link to="/services">what we do</Link>
      <Link to="/contact">contact</Link>
      <Link to="/blogs">Awareness</Link>
      </div>
      <div>
      <Link to="/"  className=" bg-primary rounded-md  p-2 text-white text-md font-semibold ">Contact us</Link>
      </div>

    </div>
    </div>
  )
}

export default Header
