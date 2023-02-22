import React, { useState } from "react";
import { FiEdit3, FiLogOut } from "react-icons/fi";
import { BsToggleOn, BsToggleOff } from "react-icons/bs";
import ModalLogout from "./ModalLogout";
import { Link } from "react-router-dom";

const ModalSetting = ({ setModalSetting }) => {
  const [toggleTheme, setToggleTheme] = useState(false);
  const [logout, setLogout] = useState(false);
  return (
    <div
      className="fixed max-w-[500px] m-auto flex justify-end z-10 bg-[rgba(0,0,0,0.25)] top-0 bottom-0 left-0 right-0"
      // onClick={() => setModalSetting(false)}
    >
      <div className="bg-white rounded w-[200px] h-max flex flex-col justify-between px-4 py-2 mr-9 mt-9">
        <Link to="/editprofile">
          <p className="text-lg cursor-pointer border-b flex gap-3 items-center">
            <FiEdit3 size={20} />
            Edit Profile
          </p>
        </Link>
        <p className="text-lg cursor-pointer border-b">
          {toggleTheme ? (
            <div className="flex gap-3 items-center">
              <BsToggleOn onClick={() => setToggleTheme(!toggleTheme)} />
              <p>Dark Theme</p>
            </div>
          ) : (
            <div className="flex gap-3 items-center">
              <BsToggleOff onClick={() => setToggleTheme(!toggleTheme)} />
              <p>Light Theme</p>
            </div>
          )}
        </p>
        <p
          className="text-lg cursor-pointer flex items-center gap-3"
          onClick={() => {
            setLogout(true);
          }}
        >
          <FiLogOut />
          Logout
        </p>
      </div>
      {logout ? <ModalLogout setLogout={setLogout} /> : null}
    </div>
  );
};

export default ModalSetting;
