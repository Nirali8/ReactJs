import React from "react";
import style from "../css/Catagories.module.css";
import { GoArrowUpRight } from "react-icons/go";

const CatagoryCard = ({ image, text }) => {
  return (
    <div
      className={`${style.catagoryImg} overflow-hidden relative rounded-md m-3`}
    >
      <img
        src={image}
        alt="product demo image"
        className="h-full w-full rounded-md object-cover hover:scale-125 hover:duration-500"
      />
      <div className="absolute top-7 left-6 text-left">
        <p className="text-xl lg:text-lg font-medium tracking-wide mb-1">
          {text}
        </p>
        <p className="text-xl text-gray-700 tracking-wider font-thin">
          6 items
        </p>
      </div>
      <div
        className={`${style.shopButton} group flex items-center absolute bottom-7 left-6 text-left bg-white rounded-full px-6 py-3 hover:bg-black hover:text-white`}
      >
        <button className="text-sm">Shop Now</button>
        <span
          className={`${style.shopCategoryBtnIcon} hidden group-hover:inline`}
        >
          <GoArrowUpRight />
        </span>
      </div>
    </div>
  );
};

export default CatagoryCard;
