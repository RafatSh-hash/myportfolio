import React from "react";
import "./Skills.css";
import { ProgressBar } from "react-progressbar-fancy";
import "aos/dist/aos.css";
import AOS from "aos";

// import { Progress } from "react-sweet-progress";
// import "react-sweet-progress/lib/style.css";

const Skills = () => {
  AOS.init({ duration: 1000 });
  return (
    <div className="mt-20">
      <h1 className="text-sky-200 text-5xl text-center my-10">
        Here are my skills
      </h1>
      <div data-aos="fade-down" className="relative skill">
        <div class="blob0"></div>
        <div class=" text-left w-full text-base font-medium  dark:text-white">
          <div
            data-aos="fade-right"
            class="my-3 text-left text-base font-medium  dark:text-white"
          >
            <ProgressBar
              className="space"
              label={"HTML"}
              primaryColor={"#000000"}
              secondaryColor={"#FFFFFF"}
              darkTheme
              score={95}
            ></ProgressBar>
          </div>
        </div>

        <div
          data-aos="fade-left"
          class="my-3 text-left text-base font-medium  dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"CSS"}
            primaryColor={"#FF6633"}
            secondaryColor={"#FF3300"}
            darkTheme
            score={90}
          ></ProgressBar>
        </div>

        <div
          data-aos="fade-right"
          class="my-3 text-left text-base font-medium  dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"JavaScript"}
            primaryColor={"#FFFF00"}
            secondaryColor={"#FFFF00"}
            darkTheme
            score={60}
          ></ProgressBar>
        </div>

        <div
          data-aos="fade-left"
          class="my-3 text-left text-base font-medium  dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"React JS"}
            progressColor={"blue"}
            darkTheme
            score={70}
          ></ProgressBar>
        </div>

        <div
          data-aos="fade-right"
          class="my-3 text-left text-base font-medium  dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"Tailwind CSS"}
            primaryColor={"#993399"}
            secondaryColor={"#9966CC"}
            darkTheme
            score={90}
          ></ProgressBar>
        </div>

        <div
          data-aos="fade-left"
          class="my-3 text-left text-base font-medium  dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"Node JS"}
            progressColor={"green"}
            darkTheme
            score={65}
          ></ProgressBar>
        </div>
        <div
          data-aos="fade-right"
          class="my-3 text-left text-base font-medium dark:text-white"
        >
          <ProgressBar
            className="space"
            label={"Bootstrap"}
            progressColor={"blue"}
            darkTheme
            score={90}
          ></ProgressBar>
        </div>
      </div>
    </div>
  );
};

export default Skills;
