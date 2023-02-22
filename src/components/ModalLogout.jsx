import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ModalLogout = ({ setLogout }) => {
  const navigate = useNavigate();
  useEffect(() => {}, []);

  const handleLogout = (e) => {
    const getToken = JSON.parse(window.localStorage.getItem("token"));
    e.preventDefault();

    let config = {
      method: "post",
      maxBodyLength: Infinity,
      url: "https://frontendreq.pondokprogrammer.com/api/logout",
      headers: {
        Authorization: `Bearer ${getToken}`,
      },
    };

    axios(config)
      .then(function (response) {
        console.log(JSON.stringify(response.data));
        navigate("/login");
        window.localStorage.removeItem("token")
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div className="fixed flex max-w-[500px] m-auto justify-center items-center z-[999] bg-[rgba(0,0,0,0.25)] top-0 bottom-0 left-0 right-0">
      <div className="relative bg-white rounded w-[200px] h-[160px] flex flex-col justify-between">
        <FaTimes
          className="absolute right-1 top-1 cursor-pointer"
          onClick={() => setLogout(false)}
        />
        <p className="text-xl p-4 text-center mt-2">
          Are you sure to sign out?
        </p>
        <div className="flex w-full">
          <div
            className="border w-[50%] text-center py-1 rounded-bl cursor-pointer"
            onClick={() => setLogout(false)}
          >
            Cancel
          </div>
          <div
            className="border w-[50%] text-center py-1 rounded-br"
            onClick={handleLogout}
          >
            Sign Out
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalLogout;
