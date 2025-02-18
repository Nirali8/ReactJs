import React from "react";
import { useWishlist } from "./context/WishlistContext";
import Card from "./Card";

const Home = () => {
  const { productData } = useWishlist();

  return (
    <div>
      {/* <button onClick={getData()}>click</button> */}
      <h1>This is Home Page</h1>
      <div className="flex flex-wrap">
        {productData.map((item, index) => {
          return (
           <Card image={item.images} title={item.title} key={index} rating={item.rating}></Card>
          )
        })}
      </div>
    </div>
  );
};

export default Home;
