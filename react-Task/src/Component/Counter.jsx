import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    // Using functional setState to ensure the correct previous state is used
    setCount((prevCount) => prevCount + 1);
  };

  const decrement = () => {
    // Decrementing the count based on the previous state
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div className="bg-green-700 text-3xl">
      <h1>Counter: {count}</h1>
      <button
        onClick={increment}
        className="border-dashed border-2 m-4 p-2 rounded-md"
      >
        Increment
      </button>
      <button
        onClick={decrement}
        className="border-dashed border-2 m-4 p-2 rounded-md"
      >
        Decrement
      </button>
    </div>
  );
}

export default Counter;
