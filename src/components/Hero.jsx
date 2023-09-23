import doctor from "../assets/female doctor_1.png"
import circle from "../assets/Ellipse 1.png"
import card from "../assets/card profile doctor.png"
import profile from "../assets/"
const Hero = () => {
  return (
    <div className="w-fit">
      {/*  */}

      <div className="w-fit flex  items-center  ">
      

           <div className=" w-[60rem] flex flex-col items-start mt-32">
           <span className=" text-6xl font-bold mb-6 ml-8">Medical care Now Simplified For Everyone</span>
            <p className=" ml-10 p-2 text-2xl">Lorem ipsum dolor sit amet consectetur adipisicing elit.
                 Numquam facere voluptatum dolorum mollitia. Accusantium quibusdam cumque consequuntur 
                 quo nesciunt blanditiis magnam vitae, ratione nemo reiciendis tenetur molestiae 
                 ab recusandae voluptate!
                 </p>

           </div>
          <div className=" flex w-fit ">
                  <img className="relative top-32 w-[38rem]  space-x-reverse" src={circle} alt="" />
                  <img className=" absolute top-[6.4rem] w-[38rem] " src={doctor} alt="" />
          </div> 

          <img className=" shadow-md rounded-lg" src={card} alt="" />
       
        
        </div>


          
{/* card 2 */}

    <div>
      <h1>Fast solutions</h1>

    </div>
    </div>
  )
}

export default Hero
