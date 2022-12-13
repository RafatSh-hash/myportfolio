import React from "react";
import { Navbar } from "flowbite-react";
import Logo from "../../../Assets/Logo.png";
import { FaInstagram, FaLinkedin, FaFacebook, FaGithub } from "react-icons/fa";

const Navigation = () => {
  return (
    <div className="flex w-full justify-between">
      <div>
        <Navbar.Brand href="/">
          <img src={Logo} className="mr-3 h-20  sm:h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            HEX!
          </span>
        </Navbar.Brand>
      </div>
      <div className="h-15 flex flex-col ">
        <a target={"_blank"} href="https://github.com/RafatSh-hash">
          <button className="text-2xl mt-2 text-white mx-2">
            <FaGithub></FaGithub>
          </button>
        </a>
        <a
          target={"_blank"}
          href="https://www.linkedin.com/in/sadman-yasir-rafat/"
        >
          {" "}
          <button className="text-2xl mt-2 text-white mx-2">
            <FaLinkedin></FaLinkedin>
          </button>
        </a>
        <a
          target={"_blank"}
          href="https://www.instagram.com/sadman_yasir_rafat/"
        >
          <button className="text-2xl mt-2 text-white mx-2">
            <FaInstagram></FaInstagram>
          </button>
        </a>
        <a target={"_blank"} href="https://www.facebook.com/sadmanyasirrafat">
          <button className="text-2xl mt-2 text-white mx-2">
            <FaFacebook></FaFacebook>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Navigation;
