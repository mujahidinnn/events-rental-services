import React from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link } from "react-router-dom";
import EditProfileComp from "../components/EditProfile";

const EditProfile = () => {
  return (
    <div>
      <div className="flex px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px]">
        <Link to="/profile">
          <MdArrowBackIos size={30} />
        </Link>
        <h1 className="ml-4 font-medium text-xl ">Edit Profile</h1>
      </div>
      <EditProfileComp />
    </div>
  );
};

export default EditProfile;
