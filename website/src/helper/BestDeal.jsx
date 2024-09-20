import React from "react";
import backbanner from "../assets/asset 35.jpeg";
const BestDeal = () => {
  return (
    <div className="container-section relative w-[90%] m-auto">
      <img
        src={backbanner}
        alt=""
        className="object-cover w-full rounded-2xl max-md:h-[300px] max-sm:w-[490px] "
      />
      <div className="bestdeals-data absolute top-1/4 left-24 max-md:top-28 max-sm:left-16 ">
        <div className="text-white font-bold max-sm:text-xs">
          SALE UP TO 30% OFF TODAY
        </div>
        <h2 className="text-white mt-1 text-4xl font-semibold max-lg:text-3xl max-sm:text-xl">
          Best Deals Discounts
        </h2>
        <p className="text-white mt-4 mb-6 text-xl max-sm:text-xs">
          Fast wireless charging on-the-go.
        </p>
        <button
          className="rounded-full p-3 max-sm:text-xs max-sm:object-cover max-md:text-xs butn__new butn overflow-hidden relative"
          style={{ backgroundColor: "var(--primary-color)" }}
        >
          Shop Collection
        </button>
      </div>
    </div>
  );
};

export default BestDeal;
