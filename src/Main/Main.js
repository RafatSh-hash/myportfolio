import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../Pages/Shared/Navigation/Navigation";
import Foot from "../Pages/Shared/Foot/Foot";
import Home from "../Pages/Home/Home";
import Skills from "../Pages/Skills/Skills";

const Main = () => {
  return (
    <div className="w-11/12 mx-auto">
      <div className="fixed top-0 w-11/12">
        <Navigation></Navigation>
      </div>
      <Home></Home>
      <div data-aos="fade-up" className="w-3/5 mx-auto">
        <Skills></Skills>
      </div>
    </div>
  );
};

export default Main;
