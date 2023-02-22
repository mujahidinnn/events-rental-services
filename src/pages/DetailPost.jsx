import axios from "axios";
import React, { useState, useEffect } from "react";
import { MdArrowBackIos } from "react-icons/md";
import { Link, useParams } from "react-router-dom";
import loadingImg from "../assets/loader.gif";

const DetailPost = () => {
  const { id } = useParams();
  const [user, setUser] = useState([]);
  const [load, setLoad] = useState(false);

  useEffect(() => {
    const get_token = JSON.parse(window.localStorage.getItem("token"));
    setLoad(true);

    async function fetchData() {
      try {
        const response = await axios.get(
          `https://frontendreq.pondokprogrammer.com/api/show/${id}`,
          {
            headers: { Authorization: `Bearer ${get_token}` },
          }
        );
        console.log(response.data.data);
        console.log("berhasil");
        setUser(response.data.data);
        setLoad(false);
      } catch (err) {
        console.log(err.message);
        setLoad(false);
      }
    }
    fetchData();
  }, [id]);

  return (
    <div className="p-4">
      {load ? (
        <div className="flex mt-[70%] items-center justify-center">
          <img src={loadingImg} alt="Loading..." className="w-[150px]" />
        </div>
      ) : (
        <div>
          <div className="flex px-4 items-center bg-white shadow-lg h-12 fixed top-0 w-full bottom-0 left-[50%] -translate-x-[50%] max-w-[500px]">
            <Link to="/myservice">
              <MdArrowBackIos size={30} />
            </Link>
            <h1 className="ml-4 font-medium text-xl ">Detail Post</h1>
          </div>
          <h1>DetailPost</h1>
          {user.map((item, index) => {
            return (
              <div key={index} className="mt-6">
                <img src={item.photo} alt={item.name} className="rounded" />
                <div className="text-left flex flex-col gap-4 mt-4">
                  <div className="flex gap-20">
                    <p className="font-semibold">Name : </p>
                    <p>{item.name}</p>
                  </div>
                  <div className="flex gap-16">
                    <p className="font-semibold">Contact : </p>
                    <p>{item.email}</p>
                  </div>
                  <div className="flex gap-[90px]">
                    <p className="font-semibold">Price : </p>
                    <p>{item.phone}</p>
                  </div>
                  <div className="flex gap-16">
                    <p className="font-semibold">Address : </p>
                    <p>{item.address}</p>
                  </div>
                  <div className="flex gap-10">
                    <p className="font-semibold">Description&nbsp;: </p>
                    <p>{item.city}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
      <div className="h-[10vh]" />
    </div>
  );
};

export default DetailPost;
