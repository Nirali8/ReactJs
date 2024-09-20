import React from "react";

// const initialArg = {
//     age:40
// }

const Reducer = (state, action) => {
  switch (action) {
    case "INCREMENTAGE":
      return {
        ...state,
        age: state.age + 1,
      };

    case "DECREMENTAGE":
      return {
        ...state,
        age: state.age - 1,
      };
    case "INCREMENTCOUNT":
      return {
        ...state,
        count: state.count + 1,
      };

    case "DECREMENTCOUNT":
      return {
        ...state,
        count: state.count - 1,
      };

    default:
      return state;
  }
};

export default Reducer;
