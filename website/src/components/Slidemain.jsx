import React from "react";
import { FaChevronRight } from "react-icons/fa";

const Slidemain = ({ image, text }) => {
  return (
    <div className="relative">
      <img src={image} alt="slideImage" className="slideImage"></img>
      <div className="absolute left-0 top-[30%] ml-5">
        <h2 className="pb-9 text-lg max-lg:hidden">
          UPTO 40% OFF CHARGERS AND MORE
        </h2>
        <h1 className="pb-9 max-lg:hidden lg:text-[64px] max-w-[450px]">
          {text}
        </h1>
        <button className="relative rounded-full px-8 py-5 bg-black text-white text-xl  max-sm:text-xs overflow-hidden">
          {/* style={{ backgroundColor: "var(--primary-color)" }} */}
          <span className=" butn__new butn flex">
            Shop Collection
            <FaChevronRight className="pt-2" />
          </span>
        </button>
      </div>
    </div>
  );
};

export default Slidemain;
