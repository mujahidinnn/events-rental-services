import React, { useRef, useState, useEffect } from "react";
import { BiUser, BiLockOpen } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import {
  AiOutlineEye,
  AiOutlineEyeInvisible,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import bunga from "../assets/bunga.svg";
import axios from "axios";
import formdata from "form-data";

const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const Register = () => {
  const [showPass, setShowPass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);

  const errRef = useRef();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [password_confirmation, setPassword_Confirmation] = useState("");
  // validation
  const [validEml, setValidEml] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);
  const [matchPwd, setMatchPwd] = useState(false);
  const [CPwdFocus, setCPwdFocus] = useState(false);
  useEffect(() => {
    setValidEml(EMAIL_REGEX.test(email));
    setValidPwd(PWD_REGEX.test(password));
    setMatchPwd(password === password_confirmation);
  }, [email, password, password_confirmation]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    var FormData = formdata;
    var data = new FormData();
    data.append("name", name);
    data.append("email", email);
    data.append("password", password);
    data.append("password_confirmation", password_confirmation);
    var config = {
      method: "post",
      url: "https://frontendreq.pondokprogrammer.com/api/register",
      headers: {},
      data: data,
    };
    try {
      await axios(config).then(function (response) {
        console.log(JSON.stringify(response.data));
        setLoading(false);
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
      errRef.current.focus();
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
      <p className="text-xl font-semibold text-slate-600">Sign Up</p>
      <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
        <div className="flex gap-4">
          <BiUser size={20} />
          <input
            type="text"
            placeholder="Enter Your Name"
            className="outline-none bg-transparent"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
      </div>
      <div className="relative">
        <div className="flex items-center gap-4 rounded bg-slate-100 p-2">
          <div className="flex gap-4">
            <HiOutlineMail size={20} />
            <input
              type="email"
              placeholder="Enter Your Email"
              className="outline-none bg-transparent"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              onFocus={() => setEmailFocus(true)}
              onBlur={() => setEmailFocus(false)}
            />
          </div>
        </div>
        {emailFocus && !validEml ? (
          <p className="text-red-500 absolute bg-white rounded ml-2 shadow-all p-1 text-xs shadow-lg z-20 mt-2">
            <AiOutlineInfoCircle size={20} />
            Example : example@mail.com Allowed special characters: @ and .
          </p>
        ) : null}
      </div>
      <div className="relative">
        <div className="flex justify-between items-center gap-4 rounded bg-slate-100 p-2">
          <div className="flex gap-4">
            <BiLockOpen size={20} />
            <input
              type={showPass ? "text" : "password"}
              placeholder="Enter Your Password"
              className="outline-none bg-transparent w-full"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              onFocus={() => setPwdFocus(true)}
              onBlur={() => setPwdFocus(false)}
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
        {pwdFocus && !validPwd ? (
          <p className="text-red-500 absolute bg-white rounded shadow-all p-1  text-xs shadow-lg z-30 mt-2">
            <AiOutlineInfoCircle size={20} />8 to 24 characters. Must include
            uppercase and lowercase letters, a number and a special character.
            Allowed special characters: @ # $ %
          </p>
        ) : null}
      </div>
      <div className="relative">
        <div className="flex justify-between items-center gap-4 rounded bg-slate-100 p-2">
          <div className="flex gap-4">
            <BiLockOpen size={20} />
            <input
              type={showConfirmPass ? "text" : "password"}
              placeholder="Confirm Password"
              className="outline-none bg-transparent w-full"
              value={password_confirmation}
              onChange={(e) => setPassword_Confirmation(e.target.value)}
              onFocus={() => setCPwdFocus(true)}
              onBlur={() => setCPwdFocus(false)}
            />
          </div>
          <div className="cursor-pointer">
            {showConfirmPass ? (
              <AiOutlineEye
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            ) : (
              <AiOutlineEyeInvisible
                onClick={() => setShowConfirmPass(!showConfirmPass)}
              />
            )}
          </div>
        </div>
        {!matchPwd && CPwdFocus ? (
          <p className="text-red-500 absolute bg-white rounded shadow-all p-1 text-xs shadow-lg z-20 mt-2">
            password confirmation must match password
          </p>
        ) : null}
      </div>
      <div
        className="rounded bg-slate-400 text-white text-center py-2 font-semibold tracking-[1px] cursor-pointer flex items-center justify-center"
        onClick={handleSubmit}
      >
        {loading ? (
          <svg
            class="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
          >
            <circle
              class="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              stroke-width="4"
            ></circle>
            <path
              class="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
            ></path>
          </svg>
        ) : null}
        <p className="text-center">Sign Up</p>
      </div>
      <p className="text-black/70 text-center mt-3">
        I have an account,&nbsp;
        <Link to="/login">
          <span className="text-black underline">Sign In</span>
        </Link>
      </p>
      <div className="h-[10vh]" />
    </div>
  );
};

export default Register;
