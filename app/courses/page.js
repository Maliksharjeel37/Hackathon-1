import Navber from "../(componets)/SideNavber/navber";
import CoursesCard from "../(componets)/CoursesCard/card"
export default function page() {

  return (
    <div className=" flex">
      <div><Navber/></div>
     <h1>Courses</h1>
<div className="cards">
<div className="Section-1 mx-12 flex">
<CoursesCard  heading={"Course:BATCH:1"} text={"Graphic Design"}description={" To do this courses apply form"} img={"/images/graphic-img.jpg"}/>
<CoursesCard heading={"Course:BATCH:2"} text={"Chatbot development"}description={" To do this courses apply form"} img={"/images/chatbot-img.png"}/>
<CoursesCard heading={"Course:BATCH:3"} text={"Pythhan programing"}description={" To do this courses apply form"} img={"/images/python-img.png"}/>
</div>
<div className="Section-1 my-3 flex mx-12">
<CoursesCard heading={"Course:WMA BATCH:4"} text={"web and moble apliction"}description={" To do this courses apply form"}img={"/images/web and mobile-1.jpg "}/>
<CoursesCard heading={"Course:BATCH:5"} text={"Amazon Market"}description={" To do this courses apply form"} img={"/images/amazon-img.jpg"}/>
<CoursesCard heading={"Course:BATCH:6"} text={"Chat Gpt"}description={" To do this courses apply form"} img={"/images/chatgpt-img.jpg"}/>
</div>
</div>
    </div>
  );
}
