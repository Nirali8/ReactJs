import React from "react";
import { useState } from "react";
/* here after 2 sec count increment as many time as we click button */
const UseState2 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("Call Increment");
    return setTimeout(() => setCount((state) => state + 1), 2000);
  };

  const handleDecrese = () => {
    if (count > 0) {
      console.log("Call Decrement");
      return setTimeout(() => setCount((state) => state - 1), 2000);
    } else {
      setCount(count);
    }
  };

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrese}>Decrement</button>
    </div>
  );
};

export default UseState2;
