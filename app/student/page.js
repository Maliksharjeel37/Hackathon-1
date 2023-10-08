"use client"
import Navber from "../(componets)/SideNavber/navber";
import { useState } from "react";

export default function page() {
  const [userName ,setuserName] = useState()
  const [fathername ,setfathername] = useState()
  const [email ,setemail] = useState()
  const [phonNo ,setphonNo] = useState()
  const [courese ,setcourses] = useState()
  const [date ,setdate] = useState()
  return (
    <div className=" flex bg-green-400">
     <div><Navber/></div>
      <div className=" bg-white mx-[520px] my-[80px] w-[320px] h-[520px] text-center shadow-2xl shadow-gray-400 text-black">
        <form>
          <h1 className=" text-lg font-bold my-2">Admission Form</h1>
         <div className="userName  my-10">
         <input className=" userName" onChange={(e)=>setuserName(e.target.value)} type="text" placeholder="Enter Name"/>
         </div>
         <div className="fatherName my-10">
         <input type="text"onChange={(e)=>setfathername(e.target.value)} placeholder=" Enter Father Name"/>

         </div>
         <div className="email my-12">  
                 <input onChange={(e)=>setemail(e.target.value)} type="text" placeholder=" Enter email"/>
            </div>
            <div className="phon my-10">
            <input onChange={(e)=>setphonNo(e.target.value)} type="text" placeholder="Enter phon No"/>

            </div>
            <div className="courses my-10">
            <select>
              <option>any courses</option>
              <option>web and mobli appliction</option>
              <option>digital market</option>
              <option>chat Gpt</option>
              
        
            </select>
            

            </div>
            <div className="Date my-10">
            <input onChange={(e)=>setdate(e.target.value)} type="date"/>

            </div>
            <button className=" w-[150px] h-8 bg-blue-800 rounded-full">Submit</button>
        </form>
        <div/>
    </div>
    </div>
  );
}
