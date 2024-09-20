import React, { useRef, useState } from "react";
import Slider from "react-slick";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import productDemoImage1 from "../assets/asset30.jpeg";
import productDemoImage2 from "../assets/asset31.jpeg";
import productDemoImage3 from "../assets/asset32.jpeg";
import productDemoImage4 from "../assets/asset33.png";
import productDemoImage5 from "../assets/asset34.jpeg";
import CatagoryCard from "../components/CatagoryCard";
import style from "../css/Catagories.module.css";

const Catagories = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="mt-0 lg:mt-6 pb-10 md:pb-3 xl:pb-0 overflow-hidden w-[90%] m-auto">
      <div>
        <h1 className="text-[42px] max-md:text-xl py-4 md:py-8 lg:py-12">
          Shop by category.
        </h1>
      </div>
      <div className="slider-container catagorySlider relative">
        <Slider {...settings}>
          <div>
            <CatagoryCard
              image={productDemoImage1}
              text={"Screen Protection"}
            />
          </div>
          <div>
            <CatagoryCard image={productDemoImage2} text={"HeadPhone"} />
          </div>
          <div>
            <CatagoryCard image={productDemoImage3} text={"Cables"} />
          </div>
          <div>
            <CatagoryCard image={productDemoImage4} text={"Adaptors"} />
          </div>
          <div>
            <CatagoryCard image={productDemoImage5} text={"Docs And Hubs"} />
          </div>
        </Slider>
      </div>
    </div>
  );
};
export default Catagories;
