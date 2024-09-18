import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css"; // Import styles

const MyCarousel = () => {
  return (
    <Splide
      options={{
        perPage: 3, // Number of slides per page
        gap: "1rem", // Gap between slides
        arrows: true, // Enable navigation arrows
        pagination: true, // Enable pagination
        autoplay: true, // Autoplay slides
      }}
    >
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 2" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 3" />
      </SplideSlide>
      <SplideSlide>
        <img src="https://via.placeholder.com/300x200" alt="Slide 4" />
      </SplideSlide>
    </Splide>
  );
};

export default MyCarousel;
