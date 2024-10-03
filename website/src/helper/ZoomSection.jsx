import React from "react";
import { ThumbnailsExample } from "../components/SplideTumbnail";
import ProductSide from "../components/ProductSide";
import InnerBanner from "./InnerBanner";

import { ImPower } from "react-icons/im";
import { IoIosArrowForward, IoMdAlarm } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa6";
import { TbArrowsCross } from "react-icons/tb";
// import PayPal from "../../assets/images/paypal.png";
// import Compare from "../../assets/svg/compare.svg";
import { HiQuestionMarkCircle } from "react-icons/hi";
import { FaShippingFast } from "react-icons/fa";
import { FaShareAlt } from "react-icons/fa";
import { FaShip } from "react-icons/fa6";
import { GiReturnArrow } from "react-icons/gi";
import { MdOutlineSecurity } from "react-icons/md";

const ZoomSection = () => {
  return (
    <>
      <div>
        <InnerBanner title="Blog" Breadcrumbs="Fashion" />
      </div>
      <div
        className="md:px-[18px] grid lg:grid-cols-2 mt-5 gap-5 overflow-x-hidden"
        id="Parent"
      >
        <div className=" p-[12px] relative overflow-x-hidden lg:overflow-visible">
          <ThumbnailsExample />
          <div
            id="ImageZoomOutPut"
            className="absolute top-0 left-full h-[400px] w-[400px]  m-[12px] rounded-[5px]"
          ></div>
        </div>
       <ProductSide/>
      </div>
    </>
  );
};

export default ZoomSection;
