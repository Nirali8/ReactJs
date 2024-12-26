import React from 'react'
import { useState,useEffect } from 'react'

const ChangeTheme = () => {

  const [isDark, setDark] = useState(false)
  
  return (
    <>
      <div
        className={`h-[100vh] w-[100vw] flex justify-center items-center ${
          isDark ? " bg-black" : " bg-yellow-500"
        }`}
      >
        <div>
          <h1 className={`text-3xl  ${isDark ? " text-white" : " text-black"}`}>
            This is Theme Change Effect
          </h1>
          <button
            className={`h-12 m-4 px-2 rounded-2xl border text-2xl ${
              isDark ? " border-white text-white" : " border-black text-black"
            }`}
            onClick={() => setDark(!isDark)}
          >
            Click To Change Theme
          </button>
        </div>
      </div>
    </>
  );
}

export default ChangeTheme
