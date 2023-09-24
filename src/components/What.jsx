import { Link } from "react-router-dom"
import doctor2 from "../assets/doctor2.png"
import illipse from "../assets/Ellipse 6.png"
import card2 from "../assets/avail doctor.png"
const What = () => {
  return (
    <div>
         <div className=" p-12">
        <div className="w-fit flex  items-center  mt-12 mb-2 ">
      

      <div className=" w-[60rem] flex flex-col items-start mt-32">
        <h1 className="text-primary  ml-8 font-bold mb-6">Find Doctor</h1>
      <span className=" text-3xl font-semibold mb-6 ml-8 w-[28rem] ">Find the right doctor according
to your complaint</span>
       <p className=" ml-8 p-2 font-light text-sm mb-4">HealthCare.ly is a free, health app that goes beyond matching you with doctors.
It actively helps you find the right doctor based on your medical and personal
needs and connects you with your HealthCarely community for ongoing
support throughout your journey to healthier living.
            </p>

      </div>
     <div className=" flex w-fit ">
             <img className="relative top-32 w-[38rem]  space-x-reverse" src={illipse} alt="" />
             <img className=" absolute top-[19.4rem] right-[12rem] w-[28rem] " src={doctor2} alt="" />
     </div> 

     <img className=" shadow-md rounded-lg " src={card2} alt="" />
  
   
   </div>
   <Link className="ml-12 p-4 bg-primary text-lg font-semibold rounded-2xl text-white " to="/doctors">See the Doctors</Link>


        <div className="flex flex-col   gap-12 items-center mt-44">

        <h1 className=" text-2xl font-semibold text-center"> before you book see  our Doctors availability</h1>
      <Link className="p-4 bg-primary text-lg font-semibold rounded-2xl text-white " to="/doctors">See the Doctors</Link>
        </div>
    </div>
    </div>
  )
}

export default What
