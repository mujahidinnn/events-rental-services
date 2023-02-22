import axios from "axios";
import formdata from "form-data";
import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { BiLockOpen } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { Link, useNavigate } from "react-router-dom";
import bunga from "../assets/bunga.svg";

const Login = () => {
  const navigate = useNavigate();
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (email === "" || password === "") {
      setErrMsg("Please complete the form first!");
    } else {
      var FormData = formdata;
      var data = new FormData();
      data.append("email", email);
      data.append("password", password);
      var config = {
        method: "post",
        url: "https://frontendreq.pondokprogrammer.com/api/login",
        headers: {},
        data: data,
      };
      try {
        await axios(config).then(function (response) {
          console.log(JSON.stringify(response.data));
          if (response.data.error_message) {
            setErrMsg("⚠ Kesalahan pada email atau password");
          } else {
            window.localStorage.setItem(
              "token",
              JSON.stringify(response.data.token)
            );
            setLoading(false);
            navigate("/dashboard");
          }
        });
      } catch (error) {
        console.log(error);
        setErrMsg("⚠ Gagal masuk :(");
        setLoading(false);
      }
    }
  };

  return (
    <div className="flex flex-col gap-4 p-6">
      <div className="flex flex-col items-center gap-3 justify-center">
        <img src={bunga} alt="" className="w-[150px]" />
        <p className="text-[#F562A6] text-xl font-bold">
          Events Rental Services
        </p>
      </div>
      <p className="text-xl font-semibold text-slate-600 mb-10 mt-5">Sign In</p>
      <p className="text-red-500">{errMsg}</p>

      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <div className="flex gap-4">
          <HiOutlineMail size={20} />
          <input
            type="email"
            placeholder="Enter Your Email"
            className="outline-none bg-transparent"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>
      <div className="flex justify-between items-center gap-4 rounded bg-slate-100 p-2">
        <div className="flex gap-4">
          <BiLockOpen size={20} />
          <input
            type={showPass ? "text" : "password"}
            placeholder="Enter Your Password"
            className="outline-none bg-transparent w-full"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="cursor-pointer">
          {showPass ? (
            <AiOutlineEye onClick={() => setShowPass(!showPass)} />
          ) : (
            <AiOutlineEyeInvisible onClick={() => setShowPass(!showPass)} />
          )}
        </div>
      </div>
      <div
        className="rounded bg-slate-400 text-white text-center py-2 font-semibold tracking-[1px] cursor-pointer flex items-center justify-center"
        onClick={handleSubmit}
      >
        {loading ? (
          <svg
            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        <p className="text-center">Sign In</p>
      </div>
      <p className="text-black/70 text-center mt-3">
        I don't have an account,&nbsp;
        <Link to="/register">
          <span className="text-black underline">Sign Up</span>
        </Link>
      </p>
    </div>
  );
};

export default Login;
