import React, { useState } from "react";
import { AnimalList } from "./Data";

const State = () => {
  // const[state , setState] = useState(0)

  // state = currentState
  // setState = function Upadate the current state
  // 0:initialValue

  const [index, setIndex] = useState(0);

  //   console.log(index);

  //   console.log(AnimalList);

  // let index = 0

  // console.log(index);

  //   const handleClick = () => {
  //     // index += 1
  //     // index = index + 1
  //     // setIndex(index + 1)
  //     // setIndex(index + 1)
  //     setIndex(prevState => prevState + 1)
  //     // setIndex(prevState => prevState + 1)
  //   };

  const handleNext = () => {
    // console.log("b4", index, AnimalList.length);
    if (index < AnimalList.length - 1) {
      //   console.log("here");
      setIndex(index + 1);

      // setIndex(index = 0)
    } else setIndex((prevState) => (prevState = 0));
    // console.log(index);
  };
  const handlePrev = () => {
      if (index > 0) {
        console.log("here");
        
      setIndex((prevState) => prevState - 1);
    }
  };

  const List = [AnimalList[index]];

  return (
    <div>
      <h1 className="bg-black text-2xl border">
        This is State Memory Components
      </h1>
      <div>
        <button
          className="bg-red-600 border px-4 py-2 rounded text-2xl"
          onClick={handleNext}
        >
          Next
        </button>
        <button
          className="bg-red-600 border px-4 py-2 rounded text-2xl"
          onClick={handlePrev}
        >
          Previous
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-y-4">
        {/* {AnimalList.map((item) => { */}
        {List.map((item) => {
          return (
            <>
              {/* Hello world */}
              <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
                <a href="#">
                  <img
                    className="rounded-t-lg h-52 w-full object-cover object-top"
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
                  <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                    {item.description}
                  </p>
                  {/* <a
                    href="#"
                    className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                  >
                    Read more
                    <svg
                      className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 14 10"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M1 5h12m0 0L9 1m4 4L9 9"
                      />
                    </svg>
                  </a> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};

export default State;
