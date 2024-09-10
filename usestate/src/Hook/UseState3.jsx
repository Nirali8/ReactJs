import React from "react";
import { useState } from "react";
/* here after 2 sec count increment one time rather we click button */
const UseState3 = () => {
  const [count, setCount] = useState(0);

  const handleIncrease = () => {
    console.log("Call Increment");
    return setTimeout(() => setCount(count + 1), 2000);
  };

  const handleDecrese = () => {
    console.log("Call Decrement");
    return setTimeout(() => setCount(count - 1), 2000);
  };

  return (
    <div>
      <p>Count = {count}</p>
      <button onClick={handleIncrease}>Increment</button>
      <button onClick={handleDecrese}>Decrement</button>
    </div>
  );
};

export default UseState3;
