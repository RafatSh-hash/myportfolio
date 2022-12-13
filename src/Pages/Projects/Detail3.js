import React from "react";

const Detail3 = () => {
  const data3 = {
    id: 3,
    projectName: "Bit Masters",
    img1: "https://i.ibb.co/9ZKfPhW/BM1.png",
    img2: "https://i.ibb.co/VMkdWvb/BM2.png",
    img3: "https://i.ibb.co/r3hnwqG/BM3.png",
    details:
      "Bit Masters is a fun learning platform where firstly user lands on the home page. Home page has a navbar and a card.The navbar contains logo, site name, some route options, a dark mode toggle button and user profile image.If you click on the 'Take A Tour' button it'll redirect you to the category page where you can find various categories of courses.Click on 'Our Courses' and you can see all the courses available under the respective category, you can also see the categories of the courses under the navigation bar.If you want to get access , click the 'Get Access' button.Note that you should be signed in as a valid user to get the course access as setting access of the course data is private information, you cannot access them while not being a valid user.click the download file button if you want to download the course details as a PDF File.You can create an account by email/password or Google or GitHub as per your liking.FAQ page displays some common ques with answers about the website, and the blog page holds some ques and answers.",
  };
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold">{data3.projectName}</h2>
      <div className="flex justify-center w-11/12 mx-auto mt-5">
        <img className="w-[30%] h-auto mx-2 " src={data3.img3}></img>
        <img className="w-[30%] h-auto mx-2 " src={data3.img1}></img>
        <img className="w-[30%] h-auto mx-2 " src={data3.img2}></img>
      </div>
      <div>
        <p className="mt-5 text-lg bg-white text-justify p-4 w-10/12 mx-auto rounded-2xl">
          {data3.details}
        </p>
      </div>
    </div>
  );
};

export default Detail3;
