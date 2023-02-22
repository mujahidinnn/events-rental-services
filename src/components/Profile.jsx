import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MdArrowBackIos } from "react-icons/md";
import { AiOutlineSetting } from "react-icons/ai";
import ModalSetting from "./ModalSetting";

const Profile = () => {
  const [modalSetting, setModalSetting] = useState(false);
  return (
    <div className="flex flex-col items-center gap-4">
      {modalSetting? <ModalSetting setModalSetting={setModalSetting}/>:null}
      <div className="flex flex-row justify-between px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px]">
        <div className="flex gap-4">
          <Link to="/dashboard">
            <MdArrowBackIos size={30} />
          </Link>
          <h1 className="ml-4 font-medium text-xl ">Profile</h1>
        </div>
        
        <AiOutlineSetting size={24} className="cursor-pointer" onClick={() => setModalSetting(true)} />
      </div>
      <div className="w-full bg-slate-300 flex justify-center p-4 pt-16">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="w-[150px] h-[150px] rounded-full mt-16"
        />
      </div>
      <div className="text-left w-[90%] flex flex-col gap-3">
        <div className="flex gap-14">
          <p className="font-semibold">Name : </p>
          <p>John Doe</p>
        </div>
        <div className="flex gap-6">
          <p className="font-semibold">Username : </p>
          <p>johndoe123</p>
        </div>
        <div className="flex gap-16">
          <p className="font-semibold">Email : </p>
          <p>johndoe@gmail.com</p>
        </div>
        <div className="flex gap-14">
          <p className="font-semibold">Phone : </p>
          <p>09876554321</p>
        </div>
        <div className="flex gap-10">
          <p className="font-semibold">Address : </p>
          <p>Jl. Mekar sari 200</p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
