import React from "react";
import Slider from "react-slick";
import Slidemain from "../components/Slidemain";
import SlideImage1 from "../assets/asset 27.jpeg";
import SlideImage2 from "../assets/asset 28.jpeg";
import SlideImage3 from "../assets/asset 29.jpeg";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slider1 = () => {
  const settings = {
    dots: true,
    infinite: true,
    // slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    cssEase: "linear",
    pauseOnHover: true,
  };
  return (
    <div className="slider-container w-full">
      <Slider {...settings}>
        <div>
          <Slidemain image={SlideImage2} text={`Savings For Dad and Grades.`} />
        </div>
        <div>
          <Slidemain image={SlideImage1} text={"Fast Charging"} />
        </div>
        <div>
          <Slidemain image={SlideImage3} text={"Modern Design."} />
        </div>
      </Slider>
    </div>
  );
};

export default Slider1;
