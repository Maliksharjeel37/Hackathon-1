import Navber from "./(componets)/SideNavber/navber";
import {MdMarkEmailUnread} from "react-icons/Md"
import {AiOutlineShoppingCart} from "react-icons/Ai"
import Modal from"./(componets)/modalAttan/modal"
export default function page() {
  return (
    <div className=" flex">
  <div className=" ">

<Navber/>
  </div>
  <div className="navber flex">
<div className="navber-text">
<h1 className=" text-black">Dashboard</h1>

</div>
<div className="navber-icons flex ml-[1230px]">
<MdMarkEmailUnread className=" text-black"/>
<AiOutlineShoppingCart className=" text-black"/>
<Modal/>
</div>
  </div>
    </div>
  );
};
