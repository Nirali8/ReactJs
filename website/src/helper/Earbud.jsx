import React from "react";
import smartassistant from "../assets/asset 36.jpeg";
import trueearbuds from "../assets/asset 37.jpeg";
const Earbud = () => {
  return (
    <div className="flex container-section gap-7 max-md:block m-auto w-[90%] mt-6">
      <div className="relative overflow-hidden">
        <img
          src={smartassistant}
          className="h-[649px] w-[683px] rounded-2xl hover:scale-105 hover:duration-500"
          alt=""
        />
        <div className="absolute bottom-3 left-1/4 right-1/4 text-center">
          <span className="text-xs font-bold">HOT ACCESSORIES</span>
          <h4 className="text-2xl font-extrabold mb-5 max-lg:text-xl">
            Smart Assistant
          </h4>
          <button
            className="mb-5 rounded-full py-2 px-6 butn__new butn overflow-hidden relative"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Shop now
          </button>
        </div>
      </div>
      <div className="relative overflow-hidden">
        <img
          src={trueearbuds}
          className="h-[649px] w-[683px] rounded-2xl hover:scale-105 hover:duration-500"
          alt=""
        />
        <div className="absolute bottom-3 left-1/4 right-1/4 text-center">
          <span className="text-xs font-bold">FAST AND FREE SHIPPING</span>
          <h4 className="text-2xl font-extrabold mb-5 max-lg:text-xl">
            True Earbuds
          </h4>
          <button
            className="mb-5 rounded-full py-2 px-6 butn__new butn overflow-hidden relative"
            style={{ backgroundColor: "var(--primary-color)" }}
          >
            Shop now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Earbud;
