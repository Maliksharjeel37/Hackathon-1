import Link from "next/link";
import Image from "next/image";
import {BiUserCircle} from "react-icons/Bi"
import {PiStudentFill} from "react-icons/Pi"
import {FaLaptopCode} from "react-icons/Fa"
import {RiPresentationFill} from "react-icons/Ri"
export default function navber() {
  return (
    <div className="w-[200px] bg-blue-800 h-screen ">
      <div className="Navber py-48">
        <Image
          className=" rounded-full px-5 mb-10  "
          src="/images/userimg-1.png "
          alt=" image-1"
          width={100}
          height={30}
        />

        <nav>
          <ul>
            <li className=" my-4 mx-4">
              <div className=" flex w-[140px] h-10 text-center bg-blue-500  rounded-3xl py-2 hover:bg-blue-700 hover:scale-110">
                <BiUserCircle className=" mx-2 my-1"/>
                <Link href="/">Dashbord</Link>
              </div>
            </li>
            <hr />
            <li className=" my-4 mx-4">
              <div className="  flex w-[140px] h-10 text-center bg-blue-500  rounded-3xl py-2 hover:bg-blue-700 hover:scale-110 ">
                <PiStudentFill className=" mx-2 my-1"/>
                <Link href="/student">student</Link>
              </div>
            </li>
            <hr />
            <li className=" my-4 mx-4">
              <div className=" flex  w-[140px] h-10 text-center bg-blue-500  rounded-3xl py-2 hover:bg-blue-700 hover:scale-110">
                <FaLaptopCode className=" mx-2 my-1"/>
                <Link href="/courses">Courses</Link>
              </div>
            </li>
            <hr />
            <li className=" my-4 mx-4">
              <div className=" flex w-[140px] h-10 text-center bg-blue-500  rounded-3xl py-2 hover:bg-blue-700 hover:scale-110">
                <RiPresentationFill className=" mx-2 my-1"/>
                <Link href="/attendence">Attendance</Link>
              </div>
            </li>
            <hr />
          </ul>
        </nav>
      </div>
    </div>
  );
}
