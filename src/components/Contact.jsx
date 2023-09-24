// import React, { useState } from "react";
import { Link } from "react-router-dom";
const Contact = () => {
  return (
    <div>
  <div className="p-5">
   <Link to="/" className="font-bold my-8 mx-80 text-primary">
    ← Back
   </Link>
   <form className="bg-white rounded-lg shadow-lg w-[65rem] mx-auto p-10">
    <h1 className="font-bold text-2xl mb-2 text-primary">Book your appointment</h1>
    <p className="font-light text-xs " >
     The following is required and will be shared with opeepi
    </p>
    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400">Full Name</p>
     <input
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Enter your full name"
     />
    </div>

    <div>
     <p className="font-light text-xs text-gray-400 mb-3">Email</p>
     <input
      type="text"
      name=""
      id=""
      placeholder="Email address"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
     />
    </div>
    <div className=" justify-between mt-5 mb-3">
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Password</p>
      <input
       type="password"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       name=""
       id=""
       placeholder="Enter your password"
      />
     </div>
     <div>
      <p className="font-light text-xs text-gray-400 mb-3">Confirm Password</p>
      <input
       type="password"
       className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
       name=""
       id=""
       placeholder="Re-Enter your password again"
      />
     </div>
    </div>

    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400"> how you gonna meet the doctor</p>
     {/* <textarea
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Write info about yourself"></textarea> */}
      <select name="" id="">
        <option value="">online</option>
        <option value="">offline</option>
      </select>
    </div>

    <div className="mt-5 mb-3">
     <p className="font-light mb-2 text-xs text-gray-400">Doctor name</p>
     <input
      type="text"
      className="w-full p-1.5 rounded-md bg-[#f6f6f6]"
      name=""
      id=""
      placeholder="Enter your company name"
     />
    </div>

    
    <div className="flex justify-center">
     <button className="px-10 py-3 mt-10  bg-primary text-white rounded-md">
      Submit 
     </button>
    </div>
   </form>
  </div>

    </div>
  )
}

export default Contact
