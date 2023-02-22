import React from "react";
import logo from "../assets/bunga.svg";

const LandingPageHome = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[30%] p-5">
      <img src={logo} alt="" className="p-10" />
      <p className="text-[#F562A6] text-[180%] font-bold">Events Rental Services</p>
    </div>
  );
};

export default LandingPageHome;
