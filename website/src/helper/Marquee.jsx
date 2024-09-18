import React from "react";
import style from "../css/Marquee.module.css";
import { GoTriangleUp } from "react-icons/go";

const Marquee = () => {
  return (
    <div className={`${style.textWrapper} overflow-x-hidden`}>
      <div>
        <span>
          <GoTriangleUp />
        </span>
        <p>FREE SHIPPING AND RETURN</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>NEW SEASON,NEW STYLES:FASHION SALE YOU CAN'T MISS</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>LIMITED TIME OFFER:FASHION SALE YOU CAN'T RESIST</p>
      </div>
      <div>
        <span>
          <GoTriangleUp />
        </span>
        <p>FREE SHIPPING AND RETURN</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>NEW SEASON,NEW STYLES:FASHION SALE YOU CAN'T MISS</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>LIMITED TIME OFFER:FASHION SALE YOU CAN'T RESIST</p>
      </div>
      <div>
        <span>
          <GoTriangleUp />
        </span>
        <p>FREE SHIPPING AND RETURN</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>NEW SEASON,NEW STYLES:FASHION SALE YOU CAN'T MISS</p>
        <span>
          <GoTriangleUp />
        </span>
        <p>LIMITED TIME OFFER:FASHION SALE YOU CAN'T RESIST</p>
      </div>
    </div>
  );
};

export default Marquee;
