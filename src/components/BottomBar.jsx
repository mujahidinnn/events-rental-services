import React from "react";
import { TbSmartHome } from "react-icons/tb";
import { BiUser } from "react-icons/bi";
import { AiOutlineAppstoreAdd } from "react-icons/ai";
import { FiShoppingBag } from "react-icons/fi";
import { MdOutlineMedicalServices } from "react-icons/md";
import { NavLink } from "react-router-dom";

const BottomBar = () => {
  const activeLink = ({ isActive }) => (isActive ? `text-[#F562A6]` : ``);

  return (
    <div className="flex justify-center items-center">
      <div className="shadow-top-only flex fixed bottom-0 left-[50%] -translate-x-[50%] bg-white w-full h-16 justify-around items-center max-w-[500px]">
        <NavLink to="/dashboard" className={activeLink}>
          <TbSmartHome size={30} />
        </NavLink>
        <NavLink to="/add" className={activeLink}>
          <AiOutlineAppstoreAdd size={30} />
        </NavLink>
        <NavLink to="/booking" className={activeLink}>
          <FiShoppingBag size={30} />
        </NavLink>
        <NavLink to="/myservice" className={activeLink}>
          <MdOutlineMedicalServices size={30} />
        </NavLink>
        <NavLink to="/profile" className={activeLink}>
          <BiUser size={30} />
        </NavLink>
      </div>
    </div>
  );
};

export default BottomBar;
