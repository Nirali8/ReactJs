import React from "react";
import img from "../assets/discount.jpeg";
import style from "../css/Discount.module.css"
const Discount = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 content-center overflow-hidden rounded-lg my-10">
      <div className={`${style.imgHover}`}>
        <img
          src={img}
          alt=""
          className={"rounded-t-lg lg:rounded-t-none lg:rounded-l-lg rounded-l-none h-full w-full object-cover"}
        />
      </div>
      <div className="bg-[var(--primary-color)] flex">
        <div className="self-center p-10 lg:p-16">
          <p className="text-xs md:text-md font-semibold">
            ULTIMATE APPLE ACCESSORY.
          </p>
          <h2 className="text-3xl lg:text-5xl font-medium my-5">
            60% Discount
          </h2>
          <p className="text-xs md:text-base text-gray-600">
            Find the latest and greatest gadgets to enhance your electronic
            devices.
          </p>
          <p className="font-light my-6">
            <span className="font-semibold">Hungry up ! </span>Deals end in :
          </p>
          <button
            className="butn butn__new overflow-hidden relative rounded-full px-5 py-3
           max-sm:text-xs max-sm:object-cover max-md:text-xs bg-black text-white"
          >
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Discount;
