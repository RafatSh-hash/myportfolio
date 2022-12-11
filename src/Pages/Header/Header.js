import React from "react";
import Rafat from "../../Assets/img1.jpg";
import "aos/dist/aos.css";
import AOS from "aos";
import Projects from "../Projects/Projects";
import "swiper/css";
import "swiper/css/effect-cards";

const Header = () => {
  AOS.init({ duration: 1000 });
  return (
    <div>
      <div className="lg:flex lg:flex-row sm:flex sm:flex-col lg:w-11/12 sm:w-full h-auto mx-auto justify-center items-center my-16">
        <div data-aos="fade-right" className="w-[40%] rounded-full mx-auto">
          <img
            className="w-80 mx-auto rounded-full shadow-2xl shadow-black"
            src={Rafat}
            alt=""
          />
        </div>
        <div
          data-aos="fade-left"
          className="lg:w-1/2 sm:w-full h-auto mx-auto p-5 justify-center items-center"
        >
          <h1 className="text-5xl text-left text-sky-200">
            Hi! Welcome To
            <span className="text-red-500 font-bold"> Hex</span>
          </h1>
          <div className="my-5">
            <p className="text-left text-white">
              <code style={{ "font-size": "18px" }}>
                Hello! I'm Sadman, a self-motivated and enthusiastic web
                developer. I have been learning web development for 1 years. I
                have learned JavaScript, React js, Node js, MongoDB, and Express
                js during this period. Also, I am trying to explore new things
                every day and look for an opportunity to make an impact in the
                web development field with my acquired skills.
              </code>{" "}
              <br />
              <button
                type="button"
                class="text-white my-3 bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
              >
                <a
                  href="https://drive.google.com/file/d/1Cqymtz4t222L9uhwyz1Jzw17HzJ43okg/view?usp=share_link"
                  target="_blank"
                >
                  My Resume
                </a>
              </button>
              <a href="https://form.jotform.com/223433253504447">
                <button
                  type="button"
                  class="text-white bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Contact Me
                </button>
              </a>
            </p>
          </div>
        </div>
      </div>
      <div data-aos="fade-up" className="">
        <Projects></Projects>
      </div>
      <div></div>
    </div>
  );
};

export default Header;
