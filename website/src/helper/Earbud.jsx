import React from "react";
import smartassistant from "../assets/asset 36.jpeg";
import trueearbuds from "../assets/asset 37.jpeg";

const EarbudImage = ({image,text1,text2}) =>
{
  return (
    <>
      <div className="relative overflow-hidden">
        <img
          src={image}
          className="h-[649px] w-[683px] rounded-2xl hover:scale-105 duration-700"
          alt=""
        />
        <div className="absolute bottom-3 left-1/4 right-1/4 text-center">
          <span className="text-xs font-bold">{text1}</span>
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
    </>
  );
}
const Earbud = () => {
  return (
    <div className="flex container-section gap-7 max-md:block m-auto w-[90%] mt-6">
      <EarbudImage
        image={smartassistant}
        text1={"HOT ACCESSORIES"}
        text2={"Smart Assistant"}
      />
      <EarbudImage
        image={trueearbuds}
        text1={"FAST AND FREE SHIPPING"}
        text2={"True Earbuds"}
      />
    </div>
  );
};

export default Earbud;
