import React from "react";
import { Route, Routes } from "react-router-dom";
import Homepage from "../Pages/Homepage";
import Cart from "../Pages/Cart";
import Notfound from "./Notfound";

const Mainroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" exact element={<Notfound />} />
      </Routes>
    </div>
  );
};

export default Mainroutes;
