import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BottomBar from "./components/BottomBar";
import Profile from "./components/Profile";
import AddPost from "./pages/AddPost";
import Booking from "./pages/Booking";
import Dashboard from "./pages/Dashboard";
import DetailPost from "./pages/DetailPost";
import DeletePost from "./pages/DeletePost";
import EditProfile from "./pages/EditProfile";
import LandingPageHome from "./pages/LandingPageHome";
import Login from "./pages/Login";
import MyService from "./pages/MyService";
import Register from "./pages/Register";
import UpdatePost from "./pages/UpdatePost";

const App = () => {
  return (
    <div className="bg-slate-100 min-h-screen">
      <BrowserRouter>
        <div className="max-w-[500px] justify-center items-center bg-white m-auto min-h-screen overflow-hidden">
          <Routes>
            <Route path="/" element={<LandingPageHome />} />
            <Route path="/register" element={<Register />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/add" element={<AddPost />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/editprofile" element={<EditProfile />} />
            <Route path="/myservice" element={<MyService />} />
            <Route path="/booking" element={<Booking />} />
            <Route path="/delete/:id" element={<DeletePost />} />
            <Route path="/update/:id" element={<UpdatePost />} />
            <Route path="/detail/:id" element={<DetailPost />} />
          </Routes>
          <BottomBar />
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
