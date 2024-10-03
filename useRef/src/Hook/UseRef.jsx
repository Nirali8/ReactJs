import React from 'react'
import { useRef } from 'react'

const UseRef = () => {
    const ref1 = useRef(0)
    const ref2 = useRef(0)

    const StyleDiv = () => {
      ref1.current.style.backgroundColor = "red";
      ref2.current.style.backgroundColor = "green";
    };
  return (
    <div>
      <h1 className="heading">This is React Hooks</h1>
      <div ref={ref1} className="size-52"></div>
      <div ref={ref2} className="size-52"></div>
      <button onClick={StyleDiv}>Click Me</button>
    </div>
  );
}

export default UseRef
