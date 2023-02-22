import React from "react";
import { TbEdit } from "react-icons/tb";

const EditProfile = () => {
  return (
    <div className="flex flex-col gap-4 p-6 my-16">
      <div className="flex justify-center flex-col items-center">
        <img
          src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8YXZhdGFyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
          alt=""
          className="rounded-full w-[150px]"
        />
        <TbEdit size={26} className="cursor-pointer -mt-6 -mr-20 z-10 bg-white rounded"/>
      </div>
      <p className="font-semibold">Name :</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <input
          type="text"
          placeholder="Enter Your Name"
          value="John Doe"
          className="outline-none bg-transparent"
        />
      </div>
      <p className="font-semibold">Username :</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <input
          type="text"
          placeholder="Enter Your Username"
          value="johndoe123"
          className="outline-none bg-transparent"
        />
      </div>
      <p className="font-semibold">Email :</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <input
          type="email"
          placeholder="Enter Your Email"
          value="johndoe@gmail.com"
          className="outline-none bg-transparent"
        />
      </div>
      <p className="font-semibold">Phone :</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <input
          type="text"
          placeholder="Enter Your Phone"
          value="0987654321"
          className="outline-none bg-transparent"
        />
      </div>
      <p className="font-semibold">Address :</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <input
          type="text"
          placeholder="Enter Your Address"
          value="Jl Mekar sari 200"
          className="outline-none bg-transparent"
        />
      </div>
      <div className="mt-5 rounded bg-slate-400 text-white text-center py-2 font-semibold tracking-[1px] cursor-pointer">
        Save
      </div>
    </div>
  );
};

export default EditProfile;
