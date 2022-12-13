import React from "react";

const Detail1 = () => {
  const data1 = {
    id: 1,
    projectName: "Code Genious",
    img1: "https://i.ibb.co/BsYwBgh/Code-Genius.png",
    img2: "https://i.ibb.co/44V7hnq/CG3.png",
    img3: "https://i.ibb.co/nntMRJX/CG2.png",
    details:
      "Code Genius is a fun quiz website where you can test your basic programming expertise on React, CSS, JavaScript & Git.At first you are welcomed on the login page, where you can enter the credentials and click 'Login' to enter the Home page.On the Home page you can click 'Take a test' and you will be redirected to your game cards.Pick a topic as you please and you shall see a list of MCQ.Click on the radio button and if your answer is true a popup noptification will let you know, same goes for the wrong answer also.Your total score will be shown on the right hand side of the page, or at the bottom if you are browsing from a mobile device.As an additional feature, you can see the correct answer by clicking on the eye icon.There is a blog page also displaying a few question with answer.Last of all there is a statistics page where a chart dictates the number of questions per topic displayes at the Game page.",
  };
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold">{data1.projectName}</h2>
      <div className="flex justify-center w-11/12 mx-auto mt-5">
        <img className="w-[30%] h-auto mx-2 " src={data1.img1}></img>
        <img className="w-[30%] h-auto mx-2 " src={data1.img3}></img>
        <img className="w-[30%] h-auto mx-2 " src={data1.img2}></img>
      </div>
      <div>
        <p className="mt-5 text-lg bg-white text-justify p-4 w-10/12 mx-auto rounded-2xl">
          {data1.details}
        </p>
      </div>
    </div>
  );
};

export default Detail1;
