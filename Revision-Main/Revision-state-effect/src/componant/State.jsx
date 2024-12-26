import React, { useState } from "react";
import { AnimalList } from "./Data";

const State = () => {
  const [index, setIndex] = useState(0);

  const handleNext = () => {
    if (index < AnimalList.length - 1) {
      setIndex(index + 1);
    } else setIndex((prevState) => (prevState = 0));
  };
  const handlePrev = () => {
    if (index > 0) {
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
        {List.map((item) => {
          return (
            <>
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
                    {/* {item.description} */}
                    <ReadMore text={item.description} maxLength={50} />
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
};
const ReadMore = ({ text, maxLength }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleReadMore = () => {
    setIsExpanded(!isExpanded);
  };

  const visibleText = text.slice(0, maxLength);
  const hiddenText = text.slice(maxLength);

  return (
    <div>
      <p>
        {visibleText}
        {!isExpanded && text.length > maxLength && <span>...</span>}
        {isExpanded && <span>{hiddenText}</span>}
      </p>
      {text.length > maxLength && (
        <button
          onClick={toggleReadMore}
          className="bg-red-600 border px-4 py-2 rounded text-2xl"
        >
          {isExpanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};
export default State;
