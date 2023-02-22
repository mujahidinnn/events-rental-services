import React from "react";
import Service from "../components/Service";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";

const MyService = () => {
  return (
    <div>
      <div className="flex px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px] z-50">
        <Link to="/dashboard">
          <MdArrowBackIos size={30} />
        </Link>
        <h1 className="ml-4 font-medium text-xl ">My Service</h1>
      </div>
      <Service />
    </div>
  );
};

export default MyService;
