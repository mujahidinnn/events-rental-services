import React from "react";
import { Link } from "react-router-dom";
import Cart from "../components/Cart";
import { MdArrowBackIos } from "react-icons/md";

const Booking = () => {
  return (
    <div>
      <div className="flex px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px]">
        <Link to="/dashboard">
          <MdArrowBackIos size={30} />
        </Link>
        <h1 className="ml-4 font-medium text-xl ">Booking</h1>
      </div>
      <Cart />
    </div>
  );
};

export default Booking;
