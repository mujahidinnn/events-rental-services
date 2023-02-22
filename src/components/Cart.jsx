import axios from "axios";
import React, { useEffect, useState } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import loading from "../assets/loader.gif";

const Cart = () => {
  const [records, setRecords] = useState([]);
  const [load, setLoad] = useState(false);

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
  return (
    <div className="mt-16 px-2 flex flex-col gap-4 max-w-[500px]">
      {load ? (
        <div className="flex m-auto items-center mt-[50%]">
          <img src={loading} alt="Loading..." className="w-[150px]" />
        </div>
      ) : (
        <>
          {records.map((item, id) => {
            return (
              <div
                className="max-w-sm w-full lg:max-w-full lg:flex relative shadow-lg"
                key={id}
              >
                <img
                  src={item.photo}
                  alt=""
                  className="w-full h-[260px] lg:h-auto lg:w-40 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center"
                />
                <div className="bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
                  <div className="mb-3 mr-[2px]">
                    <div className="text-gray-900 font-bold text-sm mb-1">
                      {item.name}
                    </div>
                    <p className="text-gray-700 text-xs">
                      {item.city}
                      {/* as description */}
                    </p>
                    <a
                      href={`mailto:${item.email}`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <p className="text-gray-800 text-xs mt-1 bg-slate-100 w-max px-1 rounded">
                        contact : {item.email}
                      </p>
                    </a>
                  </div>
                  <div className="flex flex-row items-center justify-between">
                    <div className="text-sm">
                      <p className="text-gray-900 leading-none">
                        {item.phone}
                        {/* as price */}
                      </p>
                      <p className="text-gray-600 flex items-center gap-2 mt-1">
                        <HiOutlineLocationMarker /> {item.address}
                      </p>
                    </div>
                    <div className="bg-gray-500 rounded-md px-3 text-white cursor-pointer">
                      Booking now
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
          <div className="h-[7vh]" />
        </>
      )}
    </div>
  );
};

export default Cart;
