import React from 'react'
import { themeChange } from "./Redux/Action";
import { useSelector , useDispatch } from "react-redux";

const ReduxContainer = () => {

    const theme = useSelector(state => state.theme)
  

    console.log('reduxcontainer data' , theme)

    const dispatch = useDispatch()

  return (
    <div
      className={
        theme === "light"
          ? "w-full h-screen bg-yellow-400"
          : "w-full h-screen bg-red-700"
      }
    >
      <span
        className={
          theme === "light"
            ? "text-center font-medium text-4xl pl-9"
            : "font-medium text-4xl pl-9 text-center text-white"
        }
      >
        This is {theme} theme
      </span>
      <div>
        <button
          onClick={() => dispatch(themeChange())}
          className={
            theme === "light"
              ? "bg-amber-700 rounded-md p-1.5 "
              : "bg-gray-400 rounded-md p-1.5 text-white"
          }
        >
          Click For {theme === "light" ? "Dark" : "Light"} theme
        </button>
      </div>
    </div>
  );
}

export default ReduxContainer