import React from "react";
import Reducer from "./Reducer";
import { useReducer } from "react";

const UseReducer = () => {
  const [state, dispatch] = useReducer(Reducer, { age: 40, count: 40 });

  console.log("useReducer", state.age);

  return (
    <div>
      <h1 className="heading">This is useReducer Hook In React</h1>
      <p>Age: {state.age}</p>
      <p>Count : {state.count}</p>
      <button onClick={() => dispatch("INCREMENTAGE")}>Age Increment</button>
      <button onClick={() => dispatch("DECREMENTAGE")}>Age Decrement</button>
      <button onClick={() => dispatch("INCREMENTCOUNT")}>
        Count Increment
      </button>
      <button onClick={() => dispatch("DECREMENTCOUNT")}>
        Count Decrement
      </button>
    </div>
  );
};

export default UseReducer;
