import axios from "axios";
import React, { useEffect, useState } from "react";
import loading from "../assets/loader.gif"

const Card = ({ search }) => {
  const [load,setLoad]=useState(false)
  const [records, setRecords] = useState([]);

  useEffect(() => {
    setLoad(true)
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
        setLoad(false)
      })
      .catch(function (error) {
        console.log(error);
        setLoad(false)
      });
  }, []);

  return (
    <div className="flex flex-wrap gap-3 justify-center w-full">
      {load ? (
        <div className="flex m-auto items-center mt-[50%]">
          <img src={loading} alt="Loading..." className="w-[150px]" />
        </div>
      ) : (
        <>
          {records
            .filter((item) => {
              return search === ""
                ? item
                : item.name.toLowerCase().includes(search);
            })
            .map((item, id) => {
              return (
                <div
                  className=" w-[46%] rounded overflow-hidden shadow-lg"
                  key={id}
                >
                  <img
                    className="w-full h-[60%] border-b-[1px]"
                    src={item.photo}
                    alt="Sunset in the mountains"
                  />
                  <div className="px-2 pt-1">
                    <div className="font-bold text-base mb-2 text-slate-800">
                      {item.name}
                    </div>
                    <div className="font-bold text-base text-slate-600">
                      {/* as price */}
                      {item.phone}{" "}
                      <span className=" text-sm text-slate-600">- per day</span>
                    </div>
                    <div className=" text-xs text-slate-700">
                      {item.address}
                    </div>
                  </div>
                </div>
              );
            })}
        </>
      )}
    </div>
  );
};

export default Card;
