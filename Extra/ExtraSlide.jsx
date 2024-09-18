import React from "react";
import { useState, useEffect } from "react";
const slides = [
  {
    image: "https://via.placeholder.com/800x400?text=Slide+1",
    text: "This is Slide 1",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Slide+2",
    text: "This is Slide 2",
  },
  {
    image: "https://via.placeholder.com/800x400?text=Slide+3",
    text: "This is Slide 3",
  },
];
const ExtraSlide = () => {
  //   const [currentSlide, setCurrentSlide] = useState(0);

  //   useEffect(() => {
  //     const timer = setInterval(() => {
  //       setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  //     }, 3000); // Change slide every 3 seconds

  //     return () => clearInterval(timer);
  //   }, []);

  //   return (
  //     <div className="relative w-full h-64 overflow-hidden">
  //       {slides.map((slide, index) => (
  //         <div
  //           key={index}
  //           className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ${
  //             index === currentSlide ? "opacity-100" : "opacity-0"
  //           }`}
  //         >
  //           <img
  //             src={slide.image}
  //             alt={slide.text}
  //             className="w-full h-full object-cover"
  //           />
  //           <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
  //             <h2 className="text-white text-2xl font-bold animate-fade">
  //               {slide.text}
  //             </h2>
  //           </div>
  //         </div>
  //       ))}
  //     </div>
  //   );
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative w-full overflow-hidden">
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{ transform: `translateX(-${currentSlide * 100}%)` }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full h-64 flex-shrink-0 relative">
            <img
              src={slide.image}
              alt={slide.text}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
              <h2 className="text-white text-2xl font-bold animate-fade">
                {slide.text}
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExtraSlide;
