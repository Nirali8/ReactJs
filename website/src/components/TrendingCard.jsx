import React from "react";
import { RiShoppingBag2Line, RiHeartLine } from "react-icons/ri";
import { PiShuffleSimpleFill } from "react-icons/pi";
import { IoEyeOutline } from "react-icons/io5";
import Tooltip from "./Tooltip";

const HoverIcon = () => {
  return (
    <>
      <div className="flex text-2xl px-6 justify-center gap-2 group-hover/treanding:visible invisible">
        <div className="border rounded p-3 hover:bg-black hover:text-white">
          <Tooltip message="Quick Add">
            <RiShoppingBag2Line />
          </Tooltip>
        </div>
        <div className="border rounded p-3 hover:bg-black hover:text-white">
          <Tooltip message="Add to Wishlist">
            <RiHeartLine />
          </Tooltip>
        </div>
        <div className="border rounded p-3 hover:bg-black hover:text-white">
          <Tooltip message="Add To Compare">
            <PiShuffleSimpleFill />
          </Tooltip>
        </div>
        <div className="border rounded p-3 hover:bg-black hover:text-white">
          <Tooltip message="Quick View">
            <IoEyeOutline />
          </Tooltip>
        </div>
      </div>
    </>
  );
};
const TrendingCard = ({ img1, img2, text, price }) => {
  return (
    <div className="group/treanding relative border rounded-2xl overflow-hidden">
      <img
        src={img1}
        alt="Image1"
        className="group-hover/treanding:invisible"
      ></img>
      <img
        src={img2}
        alt="Image2"
        className="invisible group-hover/treanding:visible top-0 absolute"
      ></img>
      <HoverIcon />
      <p className="hover:text-[var(--primary-color)]">{text}</p>
      <span>{price}</span>
    </div>
  );
};

export default TrendingCard;
