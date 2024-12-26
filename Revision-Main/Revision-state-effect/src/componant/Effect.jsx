import React, { useState, useEffect } from "react";
import { AnimalList } from "./Data";

const Effect = () => {
  const [index, setIndex] = useState(0);
  const [toggle, setToggle] = useState(false);

  const[next,setNext]=useState(false)
  const [prev, setPrev] = useState(false)
  const [isAnimating,setAnimating]=useState(false)

  const handleNext = () => {
    if (index < AnimalList.length - 1) {
      setIndex(index + 1);
    } else setIndex((prevState) => (prevState = 0));
    setToggle(false);
    setNext(true) 
    // setAnimating(true)
    // setTimeout(() => {
    //   setNext(false)
    // }, 1000);
  };

  const handlePrev = () => {
    if (index > 0) {
      setIndex((prevState) => prevState - 1);
    }
    setToggle(false);
    setPrev(true)
    // setAnimating(true)
    // setTimeout(() => {
    //   setPrev(false);
    // }, 1000);
  };

  const handleAnimation = () => {
    setAnimating(false);
    setNext(false)
    setPrev(false)
    console.log("here");
  }
  const List = [AnimalList[index]];

  return (
    <>
      <h1 className="bg-black text-2xl border text-white">
        This is State Memory Components
      </h1>

      <div className=" flex justify-around items-center bg">
        <button
          className="bg-red-600 border px-4 py-2 rounded text-2xl "
          onClick={handlePrev}
          disabled={isAnimating}
        >
          Previous
        </button>

        <div
          className={`flex flex-wrap justify-around gap-y-4 ${
            next ? "animate-slideLToR" : ""
          } ${prev ? "animate-slideRToL" : ""}`}
          onAnimationEnd={handleAnimation}
        >
          {List.map((item) => {
            return (
              <>
                <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                  <a href="#">
                    <img
                      className={`rounded-t-lg h-72 w-full object-cover object-top`}
                      src={item.image}
                      alt=""
                    />
                  </a>
                  <div className="p-5">
                    <a href="#">
                      <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                        {item.name}
                      </h5>
                    </a>
                    {toggle && (
                      <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                        {item.description}
                      </p>
                    )}
                    <button
                      onClick={() => {
                        setToggle((toggle) => !toggle);
                      }}
                      className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    >
                      {!toggle ? "show more" : "hide"}
                    </button>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <button
          className="bg-red-600 border px-4 py-2 rounded text-2xl"
          onClick={handleNext}
          disabled={isAnimating}
        >
          Next
        </button>
      </div>
    </>
  );
};

export default Effect;
