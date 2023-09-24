
import {AiFillInstagram} from 'react-icons/ai'
import {BsFacebook} from 'react-icons/bs'
import {AiOutlineTwitter} from 'react-icons/ai'

const Footer = () => {
  return (
    <div className='bg-blue-200 mt-32 footer p-[5rem] mb-4 bg-blueColor rounded-[10px] gap-8 grid grid-cols-5 m-auto items-center justify-center'>

      <div>
        <div className='logoDiv'>
          <h1 className=' logo text-[25px text-black pb-[1.5rem]'> <strong>caawiye</strong></h1>
        </div>
        <p className='text-black pb-[13px] opacity-70 leading-7'> We always make our seekers and companies find the best doctors and services find the best candidates</p>
      </div>

      <div className=' grid '>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-black '> company</span>

        <div className='grid gap-3'>
          <li className='text-black opacity-[.7] hover:opacity-1'>About Us</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Features</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>News</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>FAQ</li>

        </div>

      </div>

      <div className=' grid '>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-black '> Resources</span>

        <div className='grid gap-3'>
          <li className='text-black opacity-[.7] hover:opacity-1'>Account</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Support Center</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Feedback</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Contact us</li>

        </div>

      </div>

      <div className=' grid '>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-black '> Support</span>

        <div className='grid gap-3'>
          <li className='text-black opacity-[.7] hover:opacity-1'>Event</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Promo</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Req Demo</li>
          <li className='text-black opacity-[.7] hover:opacity-1'>Careers</li>

        </div>

      </div>

      <div className=' grid '>
        <span className='divTitle text-[18px] font-semibold pb-[1.5rem] text-black '> Contact Info</span>

        <div>
          <small className='text-[14px] text-black'>apdixamiid999@gmail.com</small>
          <div className='flex icons gap-4 py-[1rem] '>
            <AiFillInstagram  className='bg-white p-[8px] h-[35px] w-[35px]  rounded-full icon text-blueColor'/>
            <BsFacebook       className='bg-white p-[8px] h-[35px] w-[35px]  rounded-full icon text-blueColor'/>
            <AiOutlineTwitter className='bg-white p-[8px] h-[35px]  w-[35px]  rounded-full icon text-blueColor'/>

          </div>
        </div>

       

        

      </div>
      
    </div>
  )
}

export default Footer