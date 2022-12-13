import React from "react";

const Detail2 = () => {
  const data2 = {
    id: 2,
    projectName: "Phone Pocket",
    img1: "https://i.ibb.co/Fqpvng2/PP2.png",
    img2: "https://i.ibb.co/YRCzGDR/PP3.png",
    img3: "https://i.ibb.co/bKv7Fpz/PP1.png",
    details:
      "Phone Pocket is a resale website where users can buy or sell used phones under three categoriesThe landing page displays a banner, advertised products(if seller advertises any product), and under that section three categories are displayed (Google, Samsung, iPhone).User has to be logged in to see all the products posted under respective category.User has to login as a user.User can see product details on the product card.He/she can book products which will displayed as a list on the Dashboard route on the navbar.User Can also add a product to his/her wishlist, which will be displayed on My Wishlist route.Blog page displays some question-answers.If anybody wants to be a seller he/she must register on the website as a Seller.A seller can see the 'Add Products' and 'My Products'option on the navbar.On the 'Add Products' section seller can add a product with all the credentials needed for an item to be posted on the respective category. Note that a seller has to select the right category for the product.'My Products' route displays the products which are added by the seller.A seller can delete his posted product from the website by clicking delete Product.Seller can advertise his product by clicking advertise which will appear on the home page under banner section.Admin can see 'All Users' and 'All Sellers' route on the navigation bar.All users route displays all the users registered on the website.All Sellers route displays all the sellers registered on the website.Admin can either verify or delete a seller as per his likings.Users image are displayed on the right most side of the navbar. Basic Animation are applied for the products and various other components.There is a 'Contact Us' page where people can comment or suggestion.A dark mode button in implemented on the navbar.Dynamic Route is implemented.",
  };
  return (
    <div className="w-11/12 mx-auto">
      <h2 className="text-3xl font-semibold">{data2.projectName}</h2>
      <div className="flex justify-center w-11/12 mx-auto mt-5">
        <img className="w-[30%] h-auto mx-2 " src={data2.img3}></img>
        <img className="w-[30%] h-auto mx-2 " src={data2.img1}></img>
        <img className="w-[30%] h-auto mx-2 " src={data2.img2}></img>
      </div>
      <div>
        <p className="mt-5 text-lg bg-white text-justify p-4 w-10/12 mx-auto rounded-2xl">
          {data2.details}
        </p>
      </div>
    </div>
  );
};

export default Detail2;
