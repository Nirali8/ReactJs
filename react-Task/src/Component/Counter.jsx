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
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
