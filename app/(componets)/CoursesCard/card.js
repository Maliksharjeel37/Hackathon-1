import Image from "next/image";
import Link from "next/link";
export default function cars(props) {
  return (
    
      <div className=" card-1 text-blue-700 mx-10 hover:scale-105">
  <div>
  <Image
          className=" shadow-slate-600 shadow-lg"
          src={props.img}
          alt="web-1"
          width={390}
          height={200}
        />
  </div>
  <div className="  my-5 mx-8">
    <h1 className=" text-blue-500 text-left font-bold text-xl my-2">{props.heading}</h1>
    <h2 className=" text-black text-left font-bold text-lg my-2">{props.text}</h2>
    <h4 className=" text-black text-left  text-lg my-2"> {props.description} </h4>
  </div>
  <div className=" text-white w-[140px] h-10 text-center font-bold bg-blue-500  rounded-3xl py-2 hover:bg-blue-700 hover:scale-110 mx-10 ">
                <Link href="/formCourses">Apply</Link>
              </div>
    </div>
  );
}
