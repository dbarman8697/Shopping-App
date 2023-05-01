import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Cart from "../Pages/Cart";
import Notfound from "./Notfound";
import Login from "../Pages/Login";
import Admin from "../Pages/Admin";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" exact element={<Notfound />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
