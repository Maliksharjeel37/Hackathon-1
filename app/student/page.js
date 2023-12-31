"use client"
import {useState} from "react"
import {addDoc, collection, getDoc} from "firebase/firestore"
import {db} from "@/config/firebase"
import Navber from "../(componets)/SideNavber/navber"
export default function student() {
  const [userName, setUserName] = useState("");
  const [email, setEmail] = useState("")
  const [course, setCourse] = useState("")
  const [phonNo, setPhonNo] = useState("")
  const [date, setDate] = useState("")
  const [roll, setroll] = useState("")


  const onsubmit = async () =>{
    let student = {
      name: userName,
      email,
      course,
      phonNo,
      date,
      roll,
    }
    console.log(student)
    try {
      const collectionName = collection(db,"students")
    
      await addDoc(collectionName, student )
      console.log("Document written with ID: ");
    } catch (e) {
      console.error("Error adding document: ", e);
    }

  }

  return (
  <div className="Form flex">
    <div>
    <Navber/>
    </div>
    <div  className="box mx-[520px] my-[80px] w-[320px] h-[520px] text-center shadow-2xl shadow-gray-400 text-black">
    <h1 className=" text-lg font-bold my-2">Admission Form</h1>
    <div className="userName  my-10">
    <input className=" userName outline-none"onChange={(e)=>setUserName(e.target.value)} type="text" placeholder="Enter Name"/>
    </div>
    <div className="id  my-10">
    <input className="id outline-none"onChange={(e)=>setroll(e.target.value)} type="text" placeholder="Enter Roll No"/>
    </div>
    <div className="email my-12">
    <input onChange={(e)=>setEmail(e.target.value)} type="text" placeholder=" Enter email"/>
    </div>
    <div className="phon my-10">
    <input onChange={(e)=>setPhonNo(e.target.value)} type="text" placeholder="Enter phon No"/>
    </div>
    <div className="courses my-10">
    <input onChange={(e)=>setCourse(e.target.value)} type="text" placeholder="Enter Any courses " />
    
    </div>
    <div className="Date my-10">
    <input onChange={(e)=>setDate(e.target.value)} type="date" placeholder="Enter date"/>
</div>
            <button className=" w-[150px] h-8 bg-blue-800 rounded-full"onClick={onsubmit}>Submit</button></div>
       
  </div>
  );
};