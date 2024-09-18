import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "https://gratisography.com/wp-content/uploads/2024/01/gratisography-reindeer-dog-1170x780.jpg",
  "https://image.shutterstock.com/image-photo/dog-sits-on-white-background-260nw-2389091747.jpg",
  "https://image.shutterstock.com/image-photo/christmas-background-funny-dog-reindeer-260nw-2353849643.jpg",
];

const SliderSync = () => {
  const slider1 = useRef(null);
  const slider2 = useRef(null);

  const settingsMain = {
    asNavFor: slider2.current,
    ref: slider1,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const settingsThumb = {
    asNavFor: slider1.current,
    ref: slider2,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
  };

  return (
    <div>
      <h2>Synchronized Sliders</h2>

      {/* Main Slider */}
      <Slider {...settingsMain}>
        {images.map((img, index) => (
          <div key={index}>
            <img src={img} alt={`Slide ${index}`} />
          </div>
        ))}
      </Slider>

      {/* Thumbnail Slider */}
      <Slider {...settingsThumb}>
        {images.map((img, index) => (
          <div key={index}>
            <img
              src={img}
              alt={`Thumbnail ${index}`}
              style={{ width: "100px" }}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default SliderSync;
