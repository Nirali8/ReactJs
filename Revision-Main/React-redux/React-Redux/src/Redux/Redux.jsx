import React from 'react'
import {createStore} from 'redux'
import { useDispatch, useSelector } from "react-redux";

const buy = () => {
  return {
    type: "BUY_ITEM",
  };
};

const initialState = 20;

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BUY_ITEM":
      return state - 1;
    default:
      return state;
  }
};



const Redux = () => {
     const data = useSelector((state) => state);

     console.log("data", data);

     const dispatch = useDispatch();

  return (
    <div>
      <h1>This is redux page</h1>
      <button onClick={() => dispatch(buy())}>
        click
      </button>
    </div>
  );
}

export default Redux
export const store = createStore(reducer);
