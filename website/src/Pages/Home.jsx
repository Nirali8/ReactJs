import React from "react";
import Slider1 from "../helper/Slider1";
import Marquee from "../helper/Marquee";
import Catagories from "../helper/Catagories";
import BestDeal from "../helper/BestDeal";
import Earbud from "../helper/Earbud";
import Discount from "../helper/Discount";
const Home = () => {
  return (
    <div>
      <Slider1 />
      <Marquee />
      <Catagories />
      <BestDeal />
      <Earbud />
      <Discount/>
    </div>
  );
};

export default Home;
