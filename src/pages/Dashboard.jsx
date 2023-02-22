import React, { useState } from "react";
import { FiSearch } from "react-icons/fi";
import Card from "../components/Card";
import SlideHighlight from "../components/SlideHighlight";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="py-3">
      {/* ------ */}
      <div className="shadow-lg flex justify-between items-center gap-3 p-5 mx-2 bg-slate-100 rounded-full h-[50px]">
        <input
          type="text"
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search..."
          className="h-[40px] w-full outline-none bg-transparent text-slate-700"
        />
        <FiSearch size={30} className="cursor-pointer text-[#F562A6]" />
      </div>

      {/* ------- */}
      <div className="py-2">
        <SlideHighlight />
      </div>
      {/* ------- */}
      <div className="py-2">
        <Card search={search.toLowerCase()} />
      </div>
      <div className="h-[7vh]" />
    </div>
  );
};

export default Dashboard;
