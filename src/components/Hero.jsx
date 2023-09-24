import doctor from "../assets/female doctor_1.png"
import circle from "../assets/Ellipse 1.png"
import card from "../assets/card profile doctor.png"
import profile from "../assets/Profile.png"
import search from "../assets/Search.png"
import calender from "../assets/Calendar.png"
import Star  from "../assets/Star.png"
import doctor2 from "../assets/doctor2.png"
import illipse from "../assets/Ellipse 6.png"
import card2 from "../assets/avail doctor.png"
import { Link } from "react-router-dom"
// import Image from "../assets/image 3.png"
const Hero = () => {
  const stats = [
    { id: 1, name: 'verified specialist', value: '10+' },
    { id: 2, name: 'Happy customers', value: '1000+' },
    { id: 3, name: 'Positive feed back', value: '99.7%' },
  ]
  return (
    <div className="w-fit">
      {/*  */}

      <div className="w-fit flex  items-center  mb-8">
      

           <div className=" w-[60rem] flex flex-col items-start mt-32">
           <span className=" text-4xl font-bold mb-6 ml-8">Medical care Now Simplified For Everyone</span>
            <p className=" ml-10 p-2 text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Numquam facere voluptatum dolorum mollitia. Accusantium quibusdam cumque consequuntur 
                 quo nesciunt blanditiis magnam vitae, ratione nemo reiciendis tenetur molestiae 
                 ab recusandae voluptate!
                 </p>

           </div>
          <div className=" flex w-fit ">
                  <img className="relative top-32 w-[38rem]  space-x-reverse" src={circle} alt="" />
                  <img className=" absolute top-[11.4rem] w-[38rem] " src={doctor} alt="" />
          </div> 

          <img className=" shadow-md rounded-lg" src={card} alt="" />
       
        
        </div>
    <Link to="/contact" className=" bg-primary p-2  ml-12 mt-12 rounded-md text-white">contact Us</Link>



          
{/* card 2 */}

    <div className=" mt-[10rem]">
      <h1 className="font-semibold text-lg text-center">Fast solutions</h1>
      <p className=" text-2xl text-center font-semibold  ">step by step to get your solutions</p>
      <div className=" flex">
      {/* sub-card 1 */}

        <div className=" bg-white border-t-4 border-primary w-[20rem] p-2 flex flex-col ml-12 mt-12 shadow-xl rounded items-start ">
        <img className=" ml-4 w-6 mt-6 mb-4" src={search} alt="" />
        <h2 className=" ml-4 font-semibold text-md mb-4 ">Check health complaints</h2>
        <span className=" text-gray-600 text-sm ml-4 w-[12rem] mb-12">Check the disease so you can
easily choose the right specialist
        </span>
        </div>
      {/* sub-card 1 */}
      <div className=" bg-white border-t-4 border-primary w-[20rem] p-2 flex flex-col ml-12 mt-12 shadow-xl rounded items-start ">
        <img className=" ml-4 w-6 mt-6 mb-4" src={profile} alt="" />
        <h2 className=" ml-4 font-semibold text-md mb-4 ">choose doctor specialist</h2>
        <span className=" text-gray-600 text-sm ml-4 w-[12rem] mb-12">Choose a specialist according
              to your disease complaints
        </span>
        </div>

      {/* sub-card 1 */}
      <div className=" bg-white border-t-4 border-primary w-[20rem] p-2 flex flex-col ml-12 mt-12 shadow-xl rounded items-start ">
        <img className=" ml-4 w-6 mt-6 mb-4" src={calender} alt="" />
        <h2 className=" ml-4 font-semibold text-md mb-4 ">Make a Schedule</h2>
        <span className=" text-gray-600 text-sm ml-4 w-[12rem] mb-12">Make a schedule with the doctor
concerned so you can start the
examination
        </span>
        </div>
        {/* subCard */}
        <div className=" bg-white border-t-4 border-primary w-[20rem] p-2 flex flex-col ml-12 mt-12 shadow-xl rounded items-start ">
        <img className=" ml-4 w-6 mt-6 mb-4" src={Star} alt="" />
        <h2 className=" ml-4 font-semibold text-md mb-4 ">Get your Solutions</h2>
        <span className=" text-gray-600 text-sm ml-4 w-[12rem] mb-12">After conducting an examination
with a specialist we can help find
the right healing method
        </span>
        </div>

        
      </div>
    </div>

    {/* section 3 */}
    <div className="w-fit flex  items-center  mt-32 mb-2 ">
      

      <div className=" w-[60rem] flex flex-col items-start mt-32">
        <h1 className="text-primary  ml-8 font-bold mb-6">Find Doctor</h1>
      <span className=" text-3xl font-semibold mb-6 ml-8 w-[28rem] ">Find the right doctor according
to your complaint</span>
       <p className=" ml-8 p-2 font-light text-sm">HealthCare.ly is a free, health app that goes beyond matching you with doctors.
It actively helps you find the right doctor based on your medical and personal
needs and connects you with your HealthCarely community for ongoing
support throughout your journey to healthier living.
            </p>

      </div>
     <div className=" flex w-fit ">
             <img className="relative top-32 w-[38rem]  space-x-reverse" src={illipse} alt="" />
             <img className=" absolute top-[77.8rem] right-[12rem] w-[28rem] " src={doctor2} alt="" />
     </div> 

     <img className=" shadow-md rounded-lg " src={card2} alt="" />
  
   
   </div>
    <button className=" bg-primary p-2  ml-12 mt- 8 rounded-md text-white">See the Doctors</button>


    {/* section 4 */}

    <div>
    <div className="bg-white py-24 sm:py-32 mt-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <h1 className=" text-center font-bold text-xl  mb-12">We’re employee benefit at
7500+ hospital </h1>
        <dl className="grid grid-cols-1 gap-x-8 gap-y-16 text-center lg:grid-cols-3">
          {stats.map((stat) => (
            <div key={stat.id} className=" shadow-lg p-4 border-t-4 border-primary w-[20rem] h-auto mx-auto flex max-w-xs flex-col gap-y-4">
              <dt className="text-base leading-7 text-gray-600">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-gray-900 sm:text-5xl">
                {stat.value}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
    </div>
    </div>
  )
}

export default Hero
