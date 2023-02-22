import React, { useState, useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import { BsCloudArrowUpFill } from "react-icons/bs";
import { MdArrowBackIos } from "react-icons/md";
import loadingImg from "../assets/loader.gif";
import { Link } from "react-router-dom";
import axios from "axios";
import formdata from "form-data";

const Add = () => {
  const [image, setImage] = useState(null);
  const [fileName, setFileName] = useState("No selected file");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [city, setCity] = useState("");
  const [photo, setPhoto] = useState(null);
  const [token, setToken] = useState("");
  const [errmsg, setErrmsg] = useState("");

  const fileChangeHandler = (e) => {
    setPhoto(e.target.files[0]);
    setImage(URL.createObjectURL(e.target.files[0]));
    console.log(e.target.files[0]);
    setFileName(e.target.files[0].name);
  };

  // loading
  const [loading, setLoading] = useState(false);
  let loadingpopup = null;
  if (loading) {
    loadingpopup = (
      <div className="fixed inset-0 z-50 flex justify-center items-center bg-[rgba(0,0,0,0.15)]">
        <img src={loadingImg} alt="" className="w-[150px] h-[150px]" />
      </div>
    );
  }

  // success popup sending
  const [showPopUp, setShowPopUp] = useState(false);
  const showPopupHandler = () => setShowPopUp(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPopUp(false);
    }, 1200);
    return () => clearTimeout(timer);
  }, [showPopUp]);
  let popup = null;
  if (showPopUp) {
    popup = (
      <div
        className="fixed inset-0 z-50 flex justify-center bg-[rgba(0,0,0,0.15)]"
        onClick={() => setShowPopUp(false)}
      >
        <div className="relative box-border flex flex-col h-[100px] w-[300px] justify-center mt-5 rounded bg-white px-[6px]">
          <FaTimes
            className="absolute right-1 top-1 text-gray-600"
            onClick={() => setShowPopUp(false)}
          />
          <p className="text-xl text-black text-center">
            The post has been sent!
          </p>
        </div>
      </div>
    );
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      name === "" ||
      email === "" ||
      phone === "" ||
      address === "" ||
      city === "" ||
      photo === null
    ) {
      setErrmsg("Complete the posting form first!");
    } else {
      setLoading(true);

      var FormData = formdata;
      var data = new FormData();
      data.append("name", name);
      data.append("email", email);
      data.append("phone", phone);
      data.append("address", address);
      data.append("city", city);
      data.append("photo", photo);
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://frontendreq.pondokprogrammer.com/api/create",
        headers: {
          Authorization: `Bearer ${token}`,
          // ...data.getHeaders(),
        },
        data: data,
      };
      await axios(config)
        .then(function (response) {
          console.log(JSON.stringify(response.data));
          console.log(response);
          setLoading(false);
          setName("");
          setEmail("");
          setPhone("");
          setAddress("");
          setCity("");
          setPhoto(null);
          setImage(null);
          showPopupHandler();
        })
        .catch(function (error) {
          setLoading(false);
          if (error === 500) {
            setErrmsg("Internal server error");
          }
          console.log(error);
        });
    }
  };
  useEffect(() => {
    const get_token = JSON.parse(window.localStorage.getItem("token"));
    setToken(get_token);
  }, []);
  return (
    <div>
      {loadingpopup}
      {popup}
      <div className="flex px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px]">
        <Link to="/dashboard">
          <MdArrowBackIos size={30} />
        </Link>
        <h1 className="ml-4 font-medium text-xl ">Add Post</h1>
      </div>
      <p className="mt-16 mb-4 ml-4 text-red-500">{errmsg}</p>
      <div className="w-full flex items-center flex-col gap-5">
        <input
          type="text"
          placeholder="Name"
          className="outline-none bg-slate-100 rounded w-[94%] h-10 p-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Contact"
          className="outline-none bg-slate-100 rounded w-[94%] h-10 p-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          className="outline-none bg-slate-100 rounded w-[94%] h-10 p-4"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        {/* as price */}
        <input
          type="text"
          placeholder="Price"
          className="outline-none bg-slate-100 rounded w-[94%] h-10 p-4"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        {/* as description */}
        <textarea
          placeholder="Description"
          rows="5"
          className="bg-slate-100 rounded w-[94%] outline-none p-4 resize-none"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        ></textarea>
        {/* =-=-=-=-= */}
        <div
          className={`flex flex-col justify-center items-center h-[300px] w-[94%] cursor-pointer rounded border-[3px] border-dashed`}
        >
          {image ? (
            <div className="h-full relative">
              <span className="bg-black absolute top-1 right-1 rounded-full p-1">
                <FaTimes
                  className="text-white"
                  onClick={() => {
                    setFileName("No selected file");
                    setImage(null);
                  }}
                />
              </span>
              <img
                src={image}
                alt={fileName}
                className="w-full h-full rounded"
                onClick={() => document.querySelector(".input-field").click()}
              />
              <p className="absolute bottom-0 bg-white/50 text-black w-full px-2 text-center">
                {fileName}
              </p>
            </div>
          ) : (
            <div
              className="w-full h-full flex flex-col justify-center items-center"
              onClick={() => document.querySelector(".input-field").click()}
            >
              <BsCloudArrowUpFill size={50} className="text-[#F562A6]" />
              <p>Choose a file to upload</p>
            </div>
          )}
          <input
            type="file"
            accept=".jpeg, .png, .jpg"
            className="input-field"
            hidden
            onChange={fileChangeHandler}
          />
        </div>
        {/* =-=-=-=-= */}
      </div>
      <button
        className="text-white bg-slate-600 px-6 py-2 rounded float-right mr-7 mt-5"
        onClick={handleSubmit}
      >
        Submit
      </button>
      <div className="h-36" />
    </div>
  );
};

export default Add;
