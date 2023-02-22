import React, { useEffect, useState } from "react";
import axios from "axios";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import loading from "../assets/loader.gif";

const MyService = () => {
  const [load, setLoad] = useState(false);
  const [showPopup, setShowPopup] = useState(false);
  const [records, setRecords] = useState([]);
  useEffect(() => {
    setLoad(true);
    const get_token = JSON.parse(window.localStorage.getItem("token"));
    let config = {
      method: "get",
      maxBodyLength: Infinity,
      url: "https://frontendreq.pondokprogrammer.com/api/index",
      headers: {
        Authorization: `Bearer ${get_token}`,
      },
    };
    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data.data));
        setRecords(response.data.data);
        setLoad(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoad(false);
      });
  }, []);

  // Delete
  const [token, setToken] = useState("");
  useEffect(() => {
    const the_token = JSON.parse(window.localStorage.getItem("token"));
    setToken(the_token);
  }, []);
  const handleDelete = async (id) => {
    try {
      await axios.post(
        `https://frontendreq.pondokprogrammer.com/api/delete/${id}`,
        { maxBodyLength: Infinity },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="mt-16 px-2">
      {load ? (
        <div className="flex mt-[70%] items-center justify-center">
          <img src={loading} alt="Loading..." className="w-[150px]" />
        </div>
      ) : (
        <div>
          {records.map((item, index) => {
            return (
              <div key={index} className="flex flex-col gap-10 mb-5">
                {showPopup ? (
                  <div className="fixed max-w-[500px] m-auto flex justify-center items-center bg-[rgba(0,0,0,0.25)] top-0 bottom-0 left-0 right-0">
                    <div>
                      <span
                        onClick={() => setShowPopup(false)}
                        className="cursor-pointer float-right"
                      >
                        <FaTimes className="text-gray-600" />
                      </span>
                      <div className="bg-white w-[150px] rounded p-2">
                        <Link to="/update">
                          <p className="border-b text-base">Update</p>
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : null}

                <div className="max-w-sm w-full sm:max-w-full sm:flex relative shadow-lg m-auto">
                  <span className="float-right absolute right-1 top-1 cursor-pointer bg-white/80 rounded-full p-1">
                    <BsThreeDotsVertical
                      size={24}
                      onClick={() => setShowPopup(true)}
                    />
                  </span>

                  <img
                    src={item.photo}
                    alt=""
                    className="w-full h-[260px] sm:h-auto sm:w-40 flex-none bg-cover rounded-t sm:rounded-r-none sm:rounded-l text-center"
                  />
                  <div className="w-full bg-white rounded-r lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                    <div className="mb-3 mr-[2px]">
                      <div className="text-gray-900 font-bold text-sm mb-1">
                        {item.name}
                      </div>
                      <p className="text-gray-700 text-xs">
                        {item.city}
                        {/* as description */}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <p className="text-gray-900 leading-none">
                          {item.phone}
                          {/* as price */}
                        </p>
                      </div>
                      <Link to={`/detail/${item.id}`}>
                        <p className="border-b text-base mt-[6px] bg-slate-400 px-3 rounded text-white">
                          Detail
                        </p>
                      </Link>
                      <p
                        className="text-base bg-red-400"
                        onClick={handleDelete(item.id)}
                      >
                        Delete
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="h-[10vh]" />
        </div>
      )}
    </div>
  );
};

export default MyService;
